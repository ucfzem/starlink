import React from 'react';
import { GROUPS, SatelliteRecord } from '../../lib/satellites';

interface LayerPanelProps {
  visibleGroups: Set<SatelliteRecord['group']>;
  onToggleGroup: (group: SatelliteRecord['group']) => void;
  source: 'SNAPSHOT' | 'CACHED' | 'LIVE';
}

export const LayerPanel: React.FC<LayerPanelProps> = ({
  visibleGroups,
  onToggleGroup,
  source,
}) => {
  const badgeColors = {
    SNAPSHOT: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    CACHED: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    LIVE: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Layers</h3>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeColors[source]}`}
        >
          {source}
        </span>
      </div>
      <div className="space-y-2">
        {GROUPS.map((g) => {
          const checked = visibleGroups.has(g.id);
          return (
            <label
              key={g.id}
              className={`flex items-center space-x-3 cursor-pointer text-sm transition ${
                checked ? 'text-slate-200' : 'text-slate-500'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggleGroup(g.id)}
                className="rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.color }} />
              <span className="flex-1 select-none">{g.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
