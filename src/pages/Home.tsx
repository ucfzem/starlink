import React, { useEffect, useRef, useState } from 'react';
import { useTleData } from '../hooks/useTleData';
import { useSimClock } from '../hooks/useSimClock';
import { usePropagator } from '../hooks/usePropagator';
import { useUrlParam } from '../hooks/useUrlParam';
import { GROUPS, SatelliteRecord } from '../lib/satellites';
import { GlobeEngine } from '../lib/globe-engine';
import { TrackerHud } from '../components/hud/TrackerHud';
import { FallbackTable } from '../components/hud/FallbackTable';

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GlobeEngine | null>(null);

  const [webglSupported, setWebglSupported] = useState(true);
  const [contextLost, setContextLost] = useState(false);

  const { data: satellites, source } = useTleData();
  const { simTime, paused, speed, togglePause, setSpeed } = useSimClock();
  const positions = usePropagator(satellites, simTime);

  const [urlSat, setUrlSat] = useUrlParam('sat');
  const selectedNorad = urlSat ? parseInt(urlSat, 10) : null;

  const [visibleGroups, setVisibleGroups] = useState<Set<SatelliteRecord['group']>>(
    () => new Set(GROUPS.map((g) => g.id))
  );

  const pointerDownPos = useRef<{ x: number; y: number } | null>(null);

  // WebGL Support check
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      setWebglSupported(false);
    }
  }, []);

  // Initialize Engine
  useEffect(() => {
    if (!webglSupported || !containerRef.current || !canvasRef.current) return;

    const engine = new GlobeEngine(containerRef.current, canvasRef.current);
    engineRef.current = engine;

    const handleResize = () => {
      if (containerRef.current && engineRef.current) {
        engineRef.current.resize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const canvasEl = canvasRef.current;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setContextLost(true);
    };
    canvasEl.addEventListener('webglcontextlost', handleContextLost);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasEl.removeEventListener('webglcontextlost', handleContextLost);
      engine.dispose();
      engineRef.current = null;
    };
  }, [webglSupported]);

  // Pass Satellite List
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setSatellites(satellites);
    }
  }, [satellites]);

  // Update Positions & Time
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setSimTime(simTime);
      engineRef.current.updatePositions(positions, selectedNorad, visibleGroups);
    }
  }, [simTime, positions, selectedNorad, visibleGroups]);

  const handleToggleGroup = (group: SatelliteRecord['group']) => {
    setVisibleGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  };

  const handleEnsureGroupVisible = (group: SatelliteRecord['group']) => {
    setVisibleGroups((prev) => {
      if (!prev.has(group)) {
        const next = new Set(prev);
        next.add(group);
        return next;
      }
      return prev;
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerDownPos.current || !engineRef.current) return;
    const dx = Math.abs(e.clientX - pointerDownPos.current.x);
    const dy = Math.abs(e.clientY - pointerDownPos.current.y);

    // If drag < 3px, treat as click picking
    if (dx < 3 && dy < 3) {
      const pickedNorad = engineRef.current.pick(e.clientX, e.clientY);
      setUrlSat(pickedNorad ? pickedNorad.toString() : null);
    }
  };

  if (!webglSupported) {
    return <FallbackTable satellites={satellites} />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 flex flex-col md:flex-row select-none">
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative flex-1 h-[60vh] md:h-full w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <canvas ref={canvasRef} className="block w-full h-full" />

        {contextLost && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-50">
            <h2 className="text-xl font-bold text-red-400 mb-2">WebGL Context Lost</h2>
            <p className="text-slate-300 text-sm mb-4">
              Your GPU context was reset. Please reload the page to restart the rendering engine.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition"
            >
              Reload Page
            </button>
          </div>
        )}
      </div>

      {/* Tracker HUD Control Panel */}
      <TrackerHud
        simTime={simTime}
        paused={paused}
        speed={speed}
        onTogglePause={togglePause}
        onSetSpeed={setSpeed}
        satellites={satellites}
        source={source}
        selectedNorad={selectedNorad}
        onSelectNorad={(norad) => setUrlSat(norad ? norad.toString() : null)}
        visibleGroups={visibleGroups}
        onToggleGroup={handleToggleGroup}
        onEnsureGroupVisible={handleEnsureGroupVisible}
      />
    </div>
  );
};
