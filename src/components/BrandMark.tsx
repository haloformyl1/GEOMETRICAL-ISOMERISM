import React from 'react';
import { Orbit } from 'lucide-react';

interface BrandMarkProps {
  compact?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ compact = false }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
        <Orbit className="h-5 w-5 text-white animate-spin-slow" />
      </div>
      <div>
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
            PIECHEM
          </span>
          <span className="rounded-md border border-cyan-500/40 bg-cyan-950/60 px-1.5 py-0.5 text-[10px] font-bold text-cyan-300">
            STEREO
          </span>
        </div>
        {!compact && (
          <p className="mt-0.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
            Geometrical Isomerism Studio
          </p>
        )}
      </div>
    </div>
  );
};

