import React, { useState } from 'react';
import { EZ_EXAMPLES } from '../../content/examples/ezExamples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { ChevronDown, ChevronRight, ChevronUp, Sparkles } from 'lucide-react';

export const CIPPriorityLab: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A'); // A = Z, B = E
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isHudExpanded, setIsHudExpanded] = useState(true);

  const currentPair = EZ_EXAMPLES[selectedIndex];
  const activeStructure = activeIsomer === 'A' ? currentPair.isomerA.structure : currentPair.isomerB.structure;
  const cip = currentPair.cipDerivation;

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Top Header & Selector */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-3 sm:p-4 backdrop-blur-md">
        <div className="flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-1.5 sm:gap-2">
          <label htmlFor="ez-select" className="text-xs font-bold text-slate-300 shrink-0">
            <BilingualText en="Select E-Z Challenge:" bn="E-Z চ্যালেঞ্জ নির্বাচন করুন:" />
          </label>
          <select
            id="ez-select"
            value={selectedIndex}
            onChange={(e) => {
              setSelectedIndex(Number(e.target.value));
              setCurrentStep(1);
            }}
            className="w-full sm:w-auto max-w-full rounded-xl border border-cyan-500/30 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200 outline-none cursor-pointer"
          >
            {EZ_EXAMPLES.map((ex, idx) => (
              <option key={ex.id} value={idx}>
                {idx + 1}. {ex.iupacName.en} ({ex.formula})
              </option>
            ))}
          </select>
        </div>

        {/* Isomer Toggle */}
        <div className="flex w-full sm:w-auto rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5">
          <button
            type="button"
            onClick={() => setActiveIsomer('A')}
            className={`flex-1 sm:flex-initial rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 text-center ${
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
            className={`flex-1 sm:flex-initial rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 text-center ${
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
      <div className="relative flex-1 w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden">
        <MolecularCanvas cameraPosition={[0, 0.4, 4.4]} cameraTarget={[0, 0, 0]}>
          <Molecule3DViewer
            structure={activeStructure}
            showLabels={true}
            showPriorityBadges={true}
            spaceFilling={false}
          />
        </MolecularCanvas>

        {/* Step-by-Step CIP Derivation Panel (Collapsible on mobile) */}
        <div className="absolute top-2.5 right-2.5 left-2.5 sm:left-auto sm:top-4 sm:right-4 z-10 w-auto sm:w-full sm:max-w-sm rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-[#07192be8] p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-2 sm:mb-3">
            <button
              type="button"
              onClick={() => setIsHudExpanded((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-transparent border-0 cursor-pointer p-0 hover:text-cyan-200"
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>CIP Priority HUD</span>
              <span className="sm:hidden text-slate-400">
                {isHudExpanded ? <ChevronUp className="h-3.5 w-3.5 inline ml-0.5" /> : <ChevronDown className="h-3.5 w-3.5 inline ml-0.5" />}
              </span>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => {
                    setCurrentStep(step as 1 | 2 | 3);
                    setIsHudExpanded(true);
                  }}
                  className={`h-6 w-6 rounded-md text-xs font-bold transition-all cursor-pointer border-0 ${
                    currentStep === step
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  aria-label={`Step ${step}`}
                >
                  {step}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsHudExpanded((prev) => !prev)}
                className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-slate-400 hover:text-white cursor-pointer border-0 ml-1"
                aria-label={isHudExpanded ? 'Collapse HUD' : 'Expand HUD'}
              >
                {isHudExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {isHudExpanded && (
            <>
              {/* Step 1: Carbon 1 */}
              {currentStep === 1 && (
                <div className="text-xs space-y-2 animate-fade-in-up">
                  <p className="font-bold text-white uppercase text-[10px] sm:text-[11px] tracking-wider text-cyan-400">
                    Step 1: Assign Priorities on C1
                  </p>
                  {cip?.carbon1 ? (
                    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 sm:p-3 space-y-1 font-mono text-[11px] sm:text-xs">
                      <div className="flex justify-between items-center text-emerald-300">
                        <span>(1): {cip.carbon1.group1.name}</span>
                        <span>Z = {cip.carbon1.group1.atomicNumber}</span>
                      </div>
                      <div className="flex justify-between items-center text-rose-300">
                        <span>(2): {cip.carbon1.group2.name}</span>
                        <span>Z = {cip.carbon1.group2.atomicNumber}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-400 text-xs">Carbon 1 substituents evaluated.</p>
                  )}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 font-bold text-white hover:bg-cyan-500 cursor-pointer border-0 text-xs"
                  >
                    <span>Proceed to Step 2 (C2)</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Step 2: Carbon 2 */}
              {currentStep === 2 && (
                <div className="text-xs space-y-2 animate-fade-in-up">
                  <p className="font-bold text-white uppercase text-[10px] sm:text-[11px] tracking-wider text-cyan-400">
                    Step 2: Assign Priorities on C2
                  </p>
                  {cip?.carbon2 ? (
                    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 sm:p-3 space-y-1 font-mono text-[11px] sm:text-xs">
                      <div className="flex justify-between items-center text-emerald-300">
                        <span>(1): {cip.carbon2.group1.name}</span>
                        <span>Z = {cip.carbon2.group1.atomicNumber}</span>
                      </div>
                      <div className="flex justify-between items-center text-rose-300">
                        <span>(2): {cip.carbon2.group2.name}</span>
                        <span>Z = {cip.carbon2.group2.atomicNumber}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-400 text-xs">Carbon 2 substituents evaluated.</p>
                  )}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="w-full mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 font-bold text-white hover:bg-cyan-500 cursor-pointer border-0 text-xs"
                  >
                    <span>Proceed to Step 3 (Final E/Z)</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Step 3: Final Descriptor */}
              {currentStep === 3 && (
                <div className="text-xs space-y-2 animate-fade-in-up">
                  <p className="font-bold text-white uppercase text-[10px] sm:text-[11px] tracking-wider text-emerald-400">
                    Step 3: Compare Priority (1) Orientation
                  </p>
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-2.5 sm:p-3 text-emerald-200">
                    <p className="font-bold text-xs sm:text-sm">
                      {activeIsomer === 'A' ? 'Result: (Z) — Zusammen' : 'Result: (E) — Entgegen'}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      {activeIsomer === 'A'
                        ? 'Both high priority groups (1, 1) lie on the SAME side of the double bond.'
                        : 'The high priority groups (1, 1) lie on OPPOSITE sides of the double bond.'}
                    </p>
                  </div>
                  <div className="text-[11px] leading-relaxed text-slate-300 pt-0.5 max-h-24 overflow-y-auto">
                    <BilingualText
                      en={cip?.explanation.en || currentPair.pedagogicalNote.en}
                      bn={cip?.explanation.bn || currentPair.pedagogicalNote.bn}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Floating Bottom Info Pill */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:right-auto sm:bottom-4 sm:left-4 z-10 rounded-xl border border-cyan-500/20 bg-[#07192be8] px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md">
          <p className="text-[11px] sm:text-xs text-slate-400 truncate">
            Current Structure: <span className="font-bold text-white">{activeStructure.name.en}</span>
          </p>
          <p className="text-[10px] sm:text-[11px] text-cyan-300 font-mono">
            Green badges = Priority (1) | Red badges = Priority (2)
          </p>
        </div>
      </div>
    </div>
  );
};

