import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getModuleById } from '../content';
import { BilingualText } from '../components/BilingualText';
import { useStore } from '../store/useStore';
import { ArrowLeft, CheckCircle, Target } from 'lucide-react';
import { NextModuleLink } from '../components/ui/NextModuleLink';
import { FullscreenInteractiveFrame } from '../components/ui/FullscreenInteractiveFrame';
import { MisconceptionCard } from '../components/ui/Cards';

import { BondRotationSimulator } from '../components/3d/BondRotationSimulator';
import { CisTransLab } from '../components/labs/CisTransLab';
import { CIPPriorityLab } from '../components/labs/CIPPriorityLab';
import { SynAntiLab } from '../components/labs/SynAntiLab';
import { PhysicalPropertiesLab } from '../components/labs/PhysicalPropertiesLab';

export const ModuleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const moduleData = getModuleById(id || '');
  const { markModuleCompleted, completedModules } = useStore();

  if (!moduleData) {
    return <Navigate to="/learn" replace />;
  }

  const isCompleted = completedModules.includes(moduleData.id);

  const handleComplete = () => {
    markModuleCompleted(moduleData.id);
  };

  return (
    <div className="min-h-screen w-full pb-20">
      {/* Module Header Bar */}
      <div className="sticky top-[var(--header-height-mobile)] z-40 border-b border-[rgba(70,227,255,0.18)] bg-[rgba(8,19,30,0.92)] shadow-xl backdrop-blur-xl md:top-[var(--header-height-desktop)]">
        <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center lg:px-10">
          <div>
            <button
              type="button"
              onClick={() => navigate('/learn')}
              className="mb-2 inline-flex items-center gap-2 rounded-md text-xs font-bold text-cyan-400 hover:underline bg-transparent border-0 cursor-pointer p-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <BilingualText en="Back to Modules" bn="অধ্যায়সমূহে ফিরে যান" />
            </button>
            <h1 className="text-2xl font-black text-white md:text-3xl">
              <BilingualText en={moduleData.title.en} bn={moduleData.title.bn} />
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold ${
                isCompleted
                  ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
                  : 'border-slate-700 bg-slate-900/60 text-slate-400'
              }`}
            >
              <CheckCircle className="h-4 w-4" />
              <BilingualText en={isCompleted ? 'Completed' : 'In Study'} bn={isCompleted ? 'সম্পূর্ণ' : 'অধ্যয়নরত'} />
            </div>
          </div>
        </div>

        <div className="h-1 bg-slate-900" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={isCompleted ? 100 : 0}>
          <div className={`h-full bg-emerald-400 transition-all duration-500 ${isCompleted ? 'w-full' : 'w-0'}`} />
        </div>
      </div>

      <div className="page-shell animate-fade-in-up pt-6 sm:pt-8 max-w-5xl mx-auto px-4">
        {/* Learning Objectives Panel */}
        <div className="mb-10 sm:mb-14">
          <div className="rounded-3xl border border-cyan-500/30 bg-[#07192be8] p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h2 className="mb-5 flex items-center gap-2.5 text-lg font-black text-cyan-300">
              <Target className="w-5 h-5 text-cyan-400" />
              <BilingualText en="Learning Objectives" bn="শিখন উদ্দেশ্য" />
            </h2>
            <ul className="space-y-3.5">
              {moduleData.learningObjectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 font-mono">
                    {i + 1}
                  </div>
                  <div className="leading-relaxed text-sm text-slate-200">
                    <BilingualText en={obj.en} bn={obj.bn} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Lesson Sections */}
        <div className="space-y-12 sm:space-y-16">
          {moduleData.sections.map((section) => (
            <section key={section.id} className="relative w-full border-b border-slate-800/80 pb-12 last:border-0 last:pb-0">
              {section.title && (
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                  <BilingualText en={section.title.en} bn={section.title.bn} />
                </h3>
              )}

              {section.content && (
                <div className="text-sm sm:text-base leading-relaxed text-slate-300 mb-6 whitespace-pre-line">
                  <BilingualText en={section.content.en} bn={section.content.bn} />
                </div>
              )}

              {/* Misconception Card */}
              {section.type === 'misconception' && (
                <div className="my-6">
                  <MisconceptionCard
                    incorrect={section.modelConfig?.incorrect || { en: '', bn: '' }}
                    correct={section.modelConfig?.correct || { en: '', bn: '' }}
                  />
                </div>
              )}

              {/* 3D Laboratories Embed */}
              {section.type === 'interactive_3d' && (
                <div className="my-8 w-full">
                  <FullscreenInteractiveFrame title={section.title ? <BilingualText en={section.title.en} bn={section.title.bn} /> : undefined}>
                    {section.modelConfig?.type === 'bond-rotation-lab' && <BondRotationSimulator />}
                    {section.modelConfig?.type === 'cis-trans-lab' && <CisTransLab />}
                    {section.modelConfig?.type === 'cip-lab' && <CIPPriorityLab />}
                    {section.modelConfig?.type === 'syn-anti-lab' && <SynAntiLab />}
                    {section.modelConfig?.type === 'properties-lab' && <PhysicalPropertiesLab />}
                  </FullscreenInteractiveFrame>
                </div>
              )}

              {/* Next Module Link */}
              {section.type === 'next_module_link' && section.modelConfig?.targetModuleId && (
                <div className="mt-8">
                  <NextModuleLink
                    targetModuleId={section.modelConfig.targetModuleId}
                    text={section.content as { en: string; bn: string }}
                  />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Bottom Module Complete Action */}
        <div className="mt-16 flex justify-start border-t border-slate-800 pt-10 pb-12">
          <button
            type="button"
            onClick={handleComplete}
            disabled={isCompleted}
            className={`btn px-8 py-4 text-base font-bold cursor-pointer flex items-center gap-3 ${
              isCompleted
                ? 'border-emerald-500/30 bg-emerald-950/40 text-emerald-300'
                : 'btn-primary'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            <BilingualText
              en={isCompleted ? "Module Completed" : "Mark Module as Complete"}
              bn={isCompleted ? "অধ্যায় সমাপ্ত" : "অধ্যায়টি সমাপ্ত হিসেবে চিহ্নিত করুন"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
