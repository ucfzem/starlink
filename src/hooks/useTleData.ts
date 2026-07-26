import { useState, useEffect, useRef } from 'react';
import { SatelliteRecord, parseTLE } from '../lib/satellites';
import { getCachedTLE, setCachedTLE } from '../lib/tle-cache';

export interface TleDataState {
  data: SatelliteRecord[];
  source: 'SNAPSHOT' | 'CACHED' | 'LIVE';
}

export function useTleData(): TleDataState {
  const [state, setState] = useState<TleDataState>({ data: [], source: 'SNAPSHOT' });
  const genIdRef = useRef(0);

  useEffect(() => {
    const genId = ++genIdRef.current;
    let cancelled = false;

    async function loadData() {
      // 1. Snapshot
      let snapshotSuccess = false;
      try {
        const res = await fetch('/snapshot.tle', {
          signal: AbortSignal.timeout(2000),
        });
        if (res.ok) {
          const text = await res.text();
          const sats = parseTLE(text);
          if (sats.length > 0 && !cancelled && genIdRef.current === genId) {
            setState({ data: sats, source: 'SNAPSHOT' });
            snapshotSuccess = true;
          }
        }
      } catch {
        // Snapshot fail
      }

      // 2. Cache check
      if (!snapshotSuccess) {
        const cached = await getCachedTLE();
        if (cached && !cancelled && genIdRef.current === genId) {
          const sats = parseTLE(cached.text);
          if (sats.length > 0) {
            setState({ data: sats, source: 'CACHED' });
          }
        }
      }

      // 3. Live fetch retry loop
      const delays = [2000, 4000, 8000];
      for (const delay of delays) {
        if (cancelled || genIdRef.current !== genId) return;
        try {
          const res = await fetch(
            'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle'
          );
          if (res.status === 200) {
            const text = await res.text();
            if (text.length > 500) {
              const sats = parseTLE(text);
              if (sats.length > 100 && !cancelled && genIdRef.current === genId) {
                setState({ data: sats, source: 'LIVE' });
                await setCachedTLE(text);
                break;
              }
            }
          }
        } catch {
          // Retry backoff
          await new Promise((r) => setTimeout(r, delay));
        }
      }
    }

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
