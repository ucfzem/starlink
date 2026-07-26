import React, { useState, useEffect, useRef } from 'react';
import { SatelliteRecord } from '../../lib/satellites';

interface SearchBoxProps {
  satellites: SatelliteRecord[];
  onSelectNorad: (norad: number) => void;
  onEnsureGroupVisible: (group: SatelliteRecord['group']) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  satellites,
  onSelectNorad,
  onEnsureGroupVisible,
}) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? satellites
        .filter(
          (s) =>
            s.name.toLowerCase().includes(query.toLowerCase()) ||
            s.norad.toString().startsWith(query.trim())
        )
        .slice(0, 8)
    : [];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (sat: SatelliteRecord) => {
    onEnsureGroupVisible(sat.group);
    onSelectNorad(sat.norad);
    setQuery('');
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filtered.length > 0) {
      handleSelect(filtered[0]);
    } else if (e.key === 'Escape') {
      setQuery('');
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search satellite name or NORAD ID..."
        className="w-full bg-slate-900/80 border border-slate-700/60 text-white placeholder-slate-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition"
      />
      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900/95 border border-slate-700 rounded-lg max-h-60 overflow-y-auto z-50 shadow-xl backdrop-blur-md">
          {filtered.map((sat) => (
            <button
              key={sat.norad}
              onClick={() => handleSelect(sat)}
              className="w-full text-left px-3 py-2 hover:bg-slate-800 flex justify-between items-center text-sm border-b border-slate-800/40 last:border-0"
            >
              <span className="text-slate-200 font-medium truncate mr-2">{sat.name}</span>
              <span className="text-xs text-slate-400 font-mono">#{sat.norad}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
