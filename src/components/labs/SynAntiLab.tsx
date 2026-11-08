import React, { useState } from 'react';
import { SYN_ANTI_EXAMPLES } from '../../content/examples/synAntiExamples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { Zap, Sparkles, Layers, Eye, Tag } from 'lucide-react';

export const SynAntiLab: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A'); // A = Syn, B = Anti
  const [lightMode, setLightMode] = useState<'normal' | 'uv' | 'vis'>('normal');

  // Lone Pair Interactive Toggles
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [showLonePairLobe, setShowLonePairLobe] = useState(true);
  const [showLonePairDots, setShowLonePairDots] = useState(true);
  const [showLonePairLabel, setShowLonePairLabel] = useState(true);

  const currentPair = SYN_ANTI_EXAMPLES[selectedIndex];
  const activeStructure = activeIsomer === 'A' ? currentPair.isomerA.structure : currentPair.isomerB.structure;
  const isAzo = currentPair.systemType === 'azo';
  const isOxime = currentPair.systemType === 'oxime';

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
    <div className="flex flex-col h-full w-full bg-[#071322] rounded-2xl overflow-hidden border border-[rgba(70,227,255,0.18)] shadow-2xl">
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
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
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
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
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
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
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

      {/* LONE PAIR INTERACTIVE TOOLBAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#061423] px-5 py-2 border-b border-[rgba(70,227,255,0.08)] text-[11px] text-slate-400">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            <BilingualText en="Nitrogen Lone Pair (:) Controls:" bn="নাইট্রোজেন লোন পেয়ার (:) নিয়ন্ত্রণ:" />
          </span>

          <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-200 transition-colors">
            <input
              type="checkbox"
              checked={showLonePairs}
              onChange={(e) => setShowLonePairs(e.target.checked)}
              className="accent-amber-400 rounded cursor-pointer"
            />
            <Eye className="h-3 w-3 text-amber-400" />
            <span><BilingualText en="Show Lone Pair" bn="লোন পেয়ার দেখান" /></span>
          </label>

          {showLonePairs && (
            <>
              <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-200 transition-colors">
                <input
                  type="checkbox"
                  checked={showLonePairLobe}
                  onChange={(e) => setShowLonePairLobe(e.target.checked)}
                  className="accent-amber-400 rounded cursor-pointer"
                />
                <Layers className="h-3 w-3 text-amber-400" />
                <span><BilingualText en="Orbital Lobe" bn="কক্ষক লতি" /></span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-200 transition-colors">
                <input
                  type="checkbox"
                  checked={showLonePairDots}
                  onChange={(e) => setShowLonePairDots(e.target.checked)}
                  className="accent-amber-400 rounded cursor-pointer"
                />
                <span className="font-bold text-amber-400 font-mono">(:)</span>
                <span><BilingualText en="Electron Dots" bn="ইলেকট্রন বিন্দু" /></span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-200 transition-colors">
                <input
                  type="checkbox"
                  checked={showLonePairLabel}
                  onChange={(e) => setShowLonePairLabel(e.target.checked)}
                  className="accent-amber-400 rounded cursor-pointer"
                />
                <Tag className="h-3 w-3 text-amber-400" />
                <span><BilingualText en="3D Label" bn="৩D লেবেল" /></span>
              </label>
            </>
          )}
        </div>

        {/* Steric Hybridization Pill */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-300">
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
            N Hybridization: sp² (120°)
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-amber-300">
            CIP Priority: 2 (Z = 0)
          </span>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="relative flex-1 min-h-[380px]">
        <MolecularCanvas cameraPosition={[0, 1.2, 5.2]}>
          <Molecule3DViewer
            structure={activeStructure}
            showLabels={true}
            spaceFilling={false}
            showDipole={true}
            showLonePairs={showLonePairs}
            showLonePairLobe={showLonePairLobe}
            showLonePairDots={showLonePairDots}
            showLonePairLabel={showLonePairLabel}
          />
        </MolecularCanvas>

        {/* Floating Lone Pair Stereochemistry Inspector Pill */}
        <div className="pointer-events-none absolute top-4 left-4 z-10 flex flex-col gap-1.5 rounded-xl border border-amber-500/30 bg-[#061320]/90 p-3 backdrop-blur-md text-xs shadow-xl max-w-sm">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <span className="font-mono text-base">(:)</span>
            <span>
              <BilingualText
                en="Stereochemical Role of the Lone Pair:"
                bn="লোন পেয়ারের স্টেরিওরাসায়নিক ভূমিকা:"
              />
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-300">
            {isOxime ? (
              activeIsomer === 'A' ? (
                <BilingualText
                  en="In Syn-oxime, H and OH are on the SAME side. The sp² Lone Pair on Nitrogen points OPPOSITE (Anti) to the -OH group."
                  bn="Syn-অক্সাইমে H এবং OH একই দিকে থাকে। নাইট্রোজেনের sp² লোন পেয়ারটি -OH মূলকের বিপরীত (Anti) দিকে অবস্থান করে।"
                />
              ) : (
                <BilingualText
                  en="In Anti-oxime, H and OH are on OPPOSITE sides. The sp² Lone Pair on Nitrogen points on the SAME side (Syn) as -H."
                  bn="Anti-অক্সাইমে H এবং OH বিপরীত দিকে থাকে। নাইট্রোজেনের sp² লোন পেয়ারটি H-এর একই দিকে (Syn) অবস্থান করে।"
                />
              )
            ) : isAzo ? (
              activeIsomer === 'A' ? (
                <BilingualText
                  en="In Syn (cis)-azo, both Nitrogen Lone Pairs point toward the same side, creating high steric repulsion and a large dipole moment."
                  bn="Syn (cis)-অ্যাজোতে উভয় নাইট্রোজেন লোন পেয়ার একই দিকে থাকে, যার ফলে স্থানিক বিকর্ষণ ও উচ্চ দ্বিমেরু ভ্রামক সৃষ্টি হয়।"
                />
              ) : (
                <BilingualText
                  en="In Anti (trans)-azo, the two Nitrogen Lone Pairs point 180° opposite to each other, perfectly canceling out (μ = 0 D)."
                  bn="Anti (trans)-অ্যাজোতে দুটি নাইট্রোজেন লোন পেয়ার একে অপরের ১৮০° বিপরীতে থাকে, ফলে নিট দ্বিমেরু ভ্রামক শূন্য হয় (μ = 0 D)।"
                />
              )
            ) : (
              <BilingualText
                en="The lone pair occupies an sp² hybrid orbital, acting as a low-priority phantom group (Atomic Number Z = 0 in CIP rules)."
                bn="লোন পেয়ারটি একটি sp² সংকর কক্ষকে অবস্থান করে এবং CIP নীতিতে সর্বনিম্ন অগ্রাধিকারযুক্ত ফ্যান্টম গ্রুপ (পারমাণবিক সংখ্যা Z = 0) হিসেবে কাজ করে।"
              />
            )}
          </p>
        </div>

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
