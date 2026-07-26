import React from 'react';
import { SatelliteRecord } from '../../lib/satellites';
import { SearchBox } from './SearchBox';
import { LayerPanel } from './LayerPanel';
import { DetailPanel } from './DetailPanel';

interface TrackerHudProps {
  simTime: number;
  paused: boolean;
  speed: number;
  onTogglePause: () => void;
  onSetSpeed: (s: number) => void;

  satellites: SatelliteRecord[];
  source: 'SNAPSHOT' | 'CACHED' | 'LIVE';
  selectedNorad: number | null;
  onSelectNorad: (norad: number | null) => void;

  visibleGroups: Set<SatelliteRecord['group']>;
  onToggleGroup: (group: SatelliteRecord['group']) => void;
  onEnsureGroupVisible: (group: SatelliteRecord['group']) => void;
}

export const TrackerHud: React.FC<TrackerHudProps> = ({
  simTime,
  paused,
  speed,
  onTogglePause,
  onSetSpeed,
  satellites,
  source,
  selectedNorad,
  onSelectNorad,
  visibleGroups,
  onToggleGroup,
  onEnsureGroupVisible,
}) => {
  const selectedSat = satellites.find((s) => s.norad === selectedNorad) || null;

  const medianEpoch = React.useMemo(() => {
    if (satellites.length === 0) return null;
    const sorted = [...satellites].sort((a, b) => a.epoch.getTime() - b.epoch.getTime());
    return sorted[Math.floor(sorted.length / 2)].epoch;
  }, [satellites]);

  return (
    <div className="w-full md:w-[340px] md:h-full bg-slate-950/80 md:bg-slate-950/40 md:backdrop-blur-xl border-t md:border-t-0 md:border-l border-slate-800 p-4 flex flex-col gap-4 overflow-y-auto text-slate-100 z-10">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            LEO LIVE
          </h1>
          <p className="text-[11px] text-slate-400">Satellite Tracker</p>
        </div>
      </div>

      {/* Simulation Clock Controls */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-3 rounded-xl space-y-2">
        <div className="text-xs font-mono text-cyan-400">
          UTC: {new Date(simTime).toISOString().replace('T', ' ').slice(0, 19)}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onTogglePause}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs py-1.5 px-3 rounded-lg border border-slate-700 transition font-medium"
          >
            {paused ? '▶ Play' : '❚❚ Pause'}
          </button>
          <div className="flex bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
            {[1, 60, 600].map((s) => (
              <button
                key={s}
                onClick={() => onSetSpeed(s)}
                className={`text-[10px] px-2 py-1 rounded font-mono transition ${
                  speed === s ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Box */}
      <SearchBox
        satellites={satellites}
        onSelectNorad={(norad) => onSelectNorad(norad)}
        onEnsureGroupVisible={onEnsureGroupVisible}
      />

      {/* Layer Panel */}
      <LayerPanel visibleGroups={visibleGroups} onToggleGroup={onToggleGroup} source={source} />

      {/* Selected Satellite Details */}
      <DetailPanel
        satellite={selectedSat}
        medianEpoch={medianEpoch}
        onClearSelection={() => onSelectNorad(null)}
      />
    </div>
  );
};
