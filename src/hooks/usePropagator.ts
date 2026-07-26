import { useState, useEffect, useRef } from 'react';
import { SatelliteRecord } from '../lib/satellites';
import { WorkerMessageIn, WorkerMessageOut } from '../workers/propagator.worker';

export interface PositionRecord {
  pos1: [number, number, number] | null;
  pos2: [number, number, number] | null;
  velocity: [number, number, number] | null;
}

export function usePropagator(satellites: SatelliteRecord[], simTime: number) {
  const [positions, setPositions] = useState<PositionRecord[]>([]);
  const workerRef = useRef<Worker | null>(null);
  const genIdRef = useRef(0);

  // Initialize/Re-initialize worker when satellite list changes
  useEffect(() => {
    if (satellites.length === 0) return;

    if (workerRef.current) {
      workerRef.current.terminate();
    }

    const worker = new Worker(
      new URL('../workers/propagator.worker.ts', import.meta.url),
      { type: 'module' }
    );
    workerRef.current = worker;

    const genId = ++genIdRef.current;
    const tles = satellites.map((s) => ({ tle1: s.tle1, tle2: s.tle2 }));

    worker.postMessage({ type: 'INIT', tles, genId } as WorkerMessageIn);

    worker.onmessage = (e: MessageEvent<WorkerMessageOut>) => {
      const msg = e.data;
      if (msg.type === 'POSITIONS' && msg.genId === genIdRef.current) {
        setPositions(msg.positions);
      }
    };

    return () => {
      worker.terminate();
    };
  }, [satellites]);

  // Request frames on simTime change
  useEffect(() => {
    if (workerRef.current && satellites.length > 0) {
      workerRef.current.postMessage({
        type: 'FRAME',
        simTime,
        genId: genIdRef.current,
      } as WorkerMessageIn);
    }
  }, [simTime, satellites.length]);

  return positions;
}
