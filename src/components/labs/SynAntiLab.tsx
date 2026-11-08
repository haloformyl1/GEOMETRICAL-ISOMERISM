import React, { useState } from 'react';
import { SYN_ANTI_EXAMPLES } from '../../content/examples/synAntiExamples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { Sun, Moon, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';

export const SynAntiLab: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A'); // A = Syn, B = Anti
  const [lightMode, setLightMode] = useState<'normal' | 'uv' | 'vis'>('normal');

  const currentPair = SYN_ANTI_EXAMPLES[selectedIndex];
  const activeStructure = activeIsomer === 'A' ? currentPair.isomerA.structure : currentPair.isomerB.structure;
  const isAzo = currentPair.systemType === 'azo';

  const triggerPhotochemicalSwitch = () => {
    if (activeIsomer === 'B') {
      // trans to cis (UV)
      setLightMode('uv');
      window.setTimeout(() => {
        setActiveIsomer('A');
        setLightMode('normal');
      }, 700);
    } else {
      // cis to trans (Vis)
      setLightMode('vis');
      window.setTimeout(() => {
        setActiveIsomer('B');
        setLightMode('normal');
      }, 700);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#071322] rounded-2xl overflow-hidden border border-[rgba(70,227,255,0.18)]">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <label htmlFor="sa-select" className="text-xs font-bold text-slate-300">
            <BilingualText en="Select System:" bn="সিস্টেম নির্বাচন করুন:" />
          </label>
          <select
            id="sa-select"
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="rounded-xl border border-cyan-500/30 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200 outline-none cursor-pointer"
          >
            {SYN_ANTI_EXAMPLES.map((ex, idx) => (
              <option key={ex.id} value={idx}>
                {idx + 1}. {ex.iupacName.en} ({ex.formula})
              </option>
            ))}
          </select>
        </div>

        {/* Isomer Switcher & Photo-Switch button */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5">
            <button
              type="button"
              onClick={() => setActiveIsomer('A')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                activeIsomer === 'A'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Syn-Isomer
            </button>
            <button
              type="button"
              onClick={() => setActiveIsomer('B')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                activeIsomer === 'B'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_12px_rgba(14,165,233,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Anti-Isomer
            </button>
          </div>

          {isAzo && (
            <button
              type="button"
              onClick={triggerPhotochemicalSwitch}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                lightMode === 'uv'
                  ? 'border-purple-400 bg-purple-600 text-white animate-pulse'
                  : lightMode === 'vis'
                  ? 'border-cyan-400 bg-cyan-600 text-white animate-pulse'
                  : 'border-cyan-500/40 bg-cyan-950/70 text-cyan-300 hover:bg-cyan-800/80 hover:text-white'
              }`}
            >
              <Zap className="h-3.5 w-3.5 text-yellow-300" />
              <span>
                {activeIsomer === 'B' ? 'Irradiate with UV (365 nm)' : 'Irradiate with Blue (450 nm)'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="relative flex-1 min-h-[380px]">
        <MolecularCanvas cameraPosition={[0, 1.5, 5.5]}>
          <Molecule3DViewer
            structure={activeStructure}
            showLabels={true}
            spaceFilling={false}
            showDipole={true}
          />
        </MolecularCanvas>

        {/* Bottom Details Card */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-[rgba(70,227,255,0.2)] bg-[#07192be8] p-4 backdrop-blur-xl shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase ${
                activeIsomer === 'A'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
              }`}>
                {activeIsomer === 'A' ? 'Syn Isomer' : 'Anti Isomer'}
              </span>
              <h3 className="text-base font-extrabold text-white">
                <BilingualText en={activeStructure.name.en} bn={activeStructure.name.bn} />
              </h3>
            </div>
            <p className="mt-1 text-xs text-slate-300 max-w-xl">
              <BilingualText en={currentPair.pedagogicalNote.en} bn={currentPair.pedagogicalNote.bn} />
            </p>
          </div>

          <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-slate-700 pt-2 sm:pt-0 sm:pl-4 font-mono text-xs text-slate-300">
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Dipole (μ)</p>
              <p className="font-bold text-amber-300">{activeStructure.dipoleNet?.toFixed(2)} D</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Melting Point</p>
              <p className="font-bold text-emerald-300">{activeStructure.meltingPoint || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
