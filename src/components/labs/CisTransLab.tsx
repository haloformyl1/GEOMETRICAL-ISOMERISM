import React, { useState } from 'react';
import { CIS_TRANS_EXAMPLES } from '../../content/examples/cisTransExamples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { Eye, EyeOff, Layers, ArrowLeftRight, CheckCircle2, Info } from 'lucide-react';

export const CisTransLab: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A'); // A = Cis, B = Trans
  const [showDipole, setShowDipole] = useState(true);
  const [spaceFilling, setSpaceFilling] = useState(false);

  const currentPair = CIS_TRANS_EXAMPLES[selectedIndex];
  const activeStructure = activeIsomer === 'A' ? currentPair.isomerA.structure : currentPair.isomerB.structure;

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Top Selector & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <label htmlFor="example-select" className="text-xs font-bold text-slate-300">
            <BilingualText en="Select Example:" bn="উদাহরণ নির্বাচন করুন:" />
          </label>
          <select
            id="example-select"
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="rounded-xl border border-cyan-500/30 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200 outline-none cursor-pointer"
          >
            {CIS_TRANS_EXAMPLES.map((ex, idx) => (
              <option key={ex.id} value={idx}>
                {idx + 1}. {ex.iupacName.en} ({ex.formula})
              </option>
            ))}
          </select>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-2">
          {/* Cis/Trans Switcher */}
          <div className="flex rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5">
            <button
              type="button"
              onClick={() => setActiveIsomer('A')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                activeIsomer === 'A'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cis-Isomer
            </button>
            <button
              type="button"
              onClick={() => setActiveIsomer('B')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                activeIsomer === 'B'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Trans-Isomer
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowDipole(!showDipole)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              showDipole
                ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Toggle dipole vector"
          >
            {showDipole ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            <span>Dipole Vector</span>
          </button>

          <button
            type="button"
            onClick={() => setSpaceFilling(!spaceFilling)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
              spaceFilling
                ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Space-filling (van der Waals radii)"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>{spaceFilling ? 'Space-Filling' : 'Ball & Stick'}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative flex-1 w-full h-full min-h-[480px] md:min-h-[540px] lg:min-h-[600px] overflow-hidden">
        <MolecularCanvas cameraPosition={[0, 0.4, 4.4]} cameraTarget={[0, 0, 0]}>
          <Molecule3DViewer
            structure={activeStructure}
            showLabels={true}
            spaceFilling={spaceFilling}
            showDipole={showDipole}
          />
        </MolecularCanvas>

        {/* Floating Structural Info Card */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-[rgba(70,227,255,0.2)] bg-[#07192be6] p-4 backdrop-blur-xl shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase ${
                activeIsomer === 'A' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              }`}>
                {activeIsomer === 'A' ? 'Cis Isomer' : 'Trans Isomer'}
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
              <p className="text-[10px] text-slate-500 uppercase">Dipole Moment (μ)</p>
              <p className="font-bold text-amber-300">{activeStructure.dipoleNet?.toFixed(2)} D</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Boiling Point</p>
              <p className="font-bold text-cyan-300">{activeStructure.boilingPoint || 'N/A'}</p>
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

