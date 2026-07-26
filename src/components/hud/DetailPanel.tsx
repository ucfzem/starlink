import React from 'react';
import { SatelliteRecord } from '../../lib/satellites';

interface DetailPanelProps {
  satellite: SatelliteRecord | null;
  medianEpoch: Date | null;
  onClearSelection: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  satellite,
  medianEpoch,
  onClearSelection,
}) => {
  if (!satellite) return null;

  const ageMinutes = medianEpoch
    ? Math.max(0, Math.round((Date.now() - satellite.epoch.getTime()) / (1000 * 60)))
    : null;

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl space-y-3 relative">
      <button
        onClick={onClearSelection}
        className="absolute top-3 right-3 text-slate-400 hover:text-white text-sm p-1"
        title="Clear Selection"
      >
        ✕
      </button>

      <div>
        <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
          {satellite.group}
        </span>
        <h2 className="text-lg font-bold text-white truncate pr-6">{satellite.name}</h2>
        <div className="text-xs text-slate-400 font-mono mt-0.5">NORAD ID: {satellite.norad}</div>
      </div>

      <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
        <div className="flex justify-between">
          <span className="text-slate-400">TLE Epoch:</span>
          <span className="font-mono">{satellite.epoch.toUTCString().slice(5, 22)}</span>
        </div>
        {ageMinutes !== null && (
          <div className="flex justify-between">
            <span className="text-slate-400">TLE Age:</span>
            <span className="font-mono">{ageMinutes} min</span>
          </div>
        )}
      </div>

      <div className="border-t border-slate-800 pt-3 text-xs space-y-1">
        <div className="text-slate-400 font-medium mb-1">Orbit Trajectory Legend:</div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-0.5 bg-red-500 rounded-full" />
          <span className="text-slate-300">Past 1/4 Orbit (-22.5 min)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-0.5 bg-blue-500 rounded-full" />
          <span className="text-slate-300">Future 1/4 Orbit (+22.5 min)</span>
        </div>
      </div>
    </div>
  );
};
