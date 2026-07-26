import React, { useState, useEffect } from 'react';
import { SatelliteRecord } from '../../lib/satellites';

interface FallbackTableProps {
  satellites: SatelliteRecord[];
}

export const FallbackTable: React.FC<FallbackTableProps> = ({ satellites }) => {
  const [lastUpdated, setLastUpdated] = useState<string>(() =>
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(new Date().toLocaleTimeString());
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
          <h2 className="text-amber-400 font-bold text-lg">WebGL Not Supported</h2>
          <p className="text-slate-300 text-sm mt-1">
            Your browser or device does not support 3D WebGL rendering. Displaying 2D satellite list fallback instead.
          </p>
          <div className="text-xs text-slate-400 mt-2">Last updated: {lastUpdated}</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-800/60 text-slate-400 font-mono text-xs uppercase">
              <tr>
                <th className="p-3">NORAD ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Group</th>
                <th className="p-3">Epoch (UTC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {satellites.map((s) => (
                <tr key={s.norad} className="hover:bg-slate-800/40">
                  <td className="p-3 font-mono text-cyan-400">#{s.norad}</td>
                  <td className="p-3 font-medium text-slate-200">{s.name}</td>
                  <td className="p-3 capitalize text-slate-400">{s.group}</td>
                  <td className="p-3 text-slate-400 font-mono">{s.epoch.toISOString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
