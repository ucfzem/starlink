import { useState, useRef, useEffect, useCallback } from 'react';

export function useSimClock() {
  const [simTime, setSimTime] = useState<number>(() => Date.now());
  const [paused, setPaused] = useState<boolean>(false);
  const [speed, setSpeedState] = useState<number>(1);

  const anchorRealRef = useRef<number>(Date.now());
  const anchorSimRef = useRef<number>(Date.now());
  const speedRef = useRef<number>(1);
  const pausedRef = useRef<boolean>(false);
  const lastEmittedRef = useRef<number>(Date.now());

  const updateAnchors = useCallback((newSpeed: number, newPaused: boolean) => {
    const now = Date.now();
    const currentSim = pausedRef.current
      ? anchorSimRef.current
      : anchorSimRef.current + (now - anchorRealRef.current) * speedRef.current;

    anchorRealRef.current = now;
    anchorSimRef.current = currentSim;
    speedRef.current = newSpeed;
    pausedRef.current = newPaused;
  }, []);

  const togglePause = useCallback(() => {
    setPaused((prev) => {
      const next = !prev;
      updateAnchors(speedRef.current, next);
      return next;
    });
  }, [updateAnchors]);

  const setSpeed = useCallback((s: number) => {
    setSpeedState(s);
    updateAnchors(s, pausedRef.current);
  }, [updateAnchors]);

  useEffect(() => {
    let animId: number;

    const loop = () => {
      if (!pausedRef.current) {
        const now = Date.now();
        const currentSim =
          anchorSimRef.current + (now - anchorRealRef.current) * speedRef.current;

        if (Math.abs(currentSim - lastEmittedRef.current) > 50) {
          lastEmittedRef.current = currentSim;
          setSimTime(currentSim);
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return { simTime, paused, speed, togglePause, setSpeed };
}
