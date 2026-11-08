import React, { useState } from 'react';
import { EZ_EXAMPLES } from '../../content/examples/ezExamples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { Award, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldAlert, Sparkles } from 'lucide-react';

export const CIPPriorityLab: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A'); // A = Z, B = E
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const currentPair = EZ_EXAMPLES[selectedIndex];
  const activeStructure = activeIsomer === 'A' ? currentPair.isomerA.structure : currentPair.isomerB.structure;
  const cip = currentPair.cipDerivation;

  return (
    <div className="flex flex-col h-full w-full bg-[#071322] rounded-2xl overflow-hidden border border-[rgba(70,227,255,0.18)]">
      {/* Top Header & Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <label htmlFor="ez-select" className="text-xs font-bold text-slate-300">
            <BilingualText en="Select E-Z Challenge:" bn="E-Z চ্যালেঞ্জ নির্বাচন করুন:" />
          </label>
          <select
            id="ez-select"
            value={selectedIndex}
            onChange={(e) => {
              setSelectedIndex(Number(e.target.value));
              setCurrentStep(1);
            }}
            className="rounded-xl border border-cyan-500/30 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200 outline-none cursor-pointer"
          >
            {EZ_EXAMPLES.map((ex, idx) => (
              <option key={ex.id} value={idx}>
                {idx + 1}. {ex.iupacName.en} ({ex.formula})
              </option>
            ))}
          </select>
        </div>

        {/* Isomer Toggle */}
        <div className="flex rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5">
          <button
            type="button"
            onClick={() => setActiveIsomer('A')}
            className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
              activeIsomer === 'A'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            (Z)-Isomer (Zusammen)
          </button>
          <button
            type="button"
            onClick={() => setActiveIsomer('B')}
            className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
              activeIsomer === 'B'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            (E)-Isomer (Entgegen)
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative flex-1 min-h-[380px]">
        <MolecularCanvas cameraPosition={[0, 1.5, 5.5]}>
          <Molecule3DViewer
            structure={activeStructure}
            showLabels={true}
            showPriorityBadges={true}
            spaceFilling={false}
          />
        </MolecularCanvas>

        {/* Step-by-Step CIP Derivation Panel (Right Floating HUD) */}
        <div className="absolute top-4 right-4 z-10 w-full max-w-sm rounded-2xl border border-cyan-500/30 bg-[#07192be8] p-4 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
              <Sparkles className="h-4 w-4" />
              <span>CIP Priority Step-Through</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setCurrentStep(step as 1 | 2 | 3)}
                  className={`h-6 w-6 rounded-md text-xs font-bold transition-all cursor-pointer border-0 ${
                    currentStep === step
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Step 1: Carbon 1 */}
          {currentStep === 1 && (
            <div className="text-xs space-y-2 animate-fade-in-up">
              <p className="font-bold text-white uppercase text-[11px] tracking-wider text-cyan-400">
                Step 1: Assign Priorities on Stereocenter C1
              </p>
              {cip?.carbon1 ? (
                <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-emerald-300">
                    <span>Priority (1): {cip.carbon1.group1.name}</span>
                    <span>Z = {cip.carbon1.group1.atomicNumber}</span>
                  </div>
                  <div className="flex justify-between items-center text-rose-300">
                    <span>Priority (2): {cip.carbon1.group2.name}</span>
                    <span>Z = {cip.carbon1.group2.atomicNumber}</span>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400">Carbon 1 substituents evaluated.</p>
              )}
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="w-full mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 font-bold text-white hover:bg-cyan-500 cursor-pointer border-0"
              >
                <span>Proceed to Step 2 (C2)</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Step 2: Carbon 2 */}
          {currentStep === 2 && (
            <div className="text-xs space-y-2 animate-fade-in-up">
              <p className="font-bold text-white uppercase text-[11px] tracking-wider text-cyan-400">
                Step 2: Assign Priorities on Stereocenter C2
              </p>
              {cip?.carbon2 ? (
                <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-emerald-300">
                    <span>Priority (1): {cip.carbon2.group1.name}</span>
                    <span>Z = {cip.carbon2.group1.atomicNumber}</span>
                  </div>
                  <div className="flex justify-between items-center text-rose-300">
                    <span>Priority (2): {cip.carbon2.group2.name}</span>
                    <span>Z = {cip.carbon2.group2.atomicNumber}</span>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400">Carbon 2 substituents evaluated.</p>
              )}
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="w-full mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 font-bold text-white hover:bg-cyan-500 cursor-pointer border-0"
              >
                <span>Proceed to Step 3 (Final E/Z)</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Step 3: Final Descriptor */}
          {currentStep === 3 && (
            <div className="text-xs space-y-2 animate-fade-in-up">
              <p className="font-bold text-white uppercase text-[11px] tracking-wider text-emerald-400">
                Step 3: Compare Priority (1) Orientation
              </p>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-emerald-200">
                <p className="font-bold text-sm">
                  {activeIsomer === 'A' ? 'Result: (Z) — Zusammen' : 'Result: (E) — Entgegen'}
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  {activeIsomer === 'A'
                    ? 'Both high priority groups (1, 1) lie on the SAME side of the double bond.'
                    : 'The high priority groups (1, 1) lie on OPPOSITE sides of the double bond.'}
                </p>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300 pt-1">
                <BilingualText
                  en={cip?.explanation.en || currentPair.pedagogicalNote.en}
                  bn={cip?.explanation.bn || currentPair.pedagogicalNote.bn}
                />
              </p>
            </div>
          )}
        </div>

        {/* Floating Bottom Info Pill */}
        <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-cyan-500/20 bg-[#07192be8] px-4 py-2.5 backdrop-blur-md">
          <p className="text-xs text-slate-400">
            Current Structure: <span className="font-bold text-white">{activeStructure.name.en}</span>
          </p>
          <p className="text-[11px] text-cyan-300 font-mono">
            Green badges = Priority (1) | Red badges = Priority (2)
          </p>
        </div>
      </div>
    </div>
  );
};

