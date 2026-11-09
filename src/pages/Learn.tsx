import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, CheckCircle2, Orbit, ShieldAlert, Sparkles, Layers, Flame } from 'lucide-react';
import { BilingualText } from '../components/BilingualText';
import { PageContainer, PageHeader } from '../components/ui/LayoutPrimitives';
import { modules } from '../content';
import { useStore } from '../store/useStore';

const moduleIcons = [Orbit, Layers, Sparkles, ShieldAlert, Flame];

export const Learn: React.FC = () => {
  const navigate = useNavigate();
  const completedModules = useStore((state) => state.completedModules);
  const percentage = Math.round((completedModules.length / modules.length) * 100);

  const progressSummary = (
    <div className="surface-panel flex w-full min-w-0 max-w-sm items-center gap-4 p-4 sm:min-w-[220px] rounded-2xl border border-cyan-500/20 bg-[#07192be8]">
      <div
        className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full"
        style={{
          background: `conic-gradient(var(--accent-primary) ${percentage * 3.6}deg, var(--surface-elevated) 0deg)`,
        }}
      >
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--surface-primary)] text-sm font-black text-[var(--text-primary)]">
          {percentage}%
        </div>
      </div>
      <div className="min-w-0">
        <p className="eyebrow text-[10px] text-cyan-400 font-bold uppercase">
          <BilingualText en="Course progress" bn="অগ্রগতি" />
        </p>
        <p className="mt-1 font-bold text-white text-sm">
          <BilingualText
            en={`${completedModules.length} of ${modules.length} completed`}
            bn={`${modules.length}টির মধ্যে ${completedModules.length}টি সম্পূর্ণ`}
          />
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100dvh-var(--header-height-desktop))] w-full">
      <PageContainer>
        <PageHeader
          eyebrow={<BilingualText en="Curriculum Pathway" bn="পাঠ্যক্রম সূচি" />}
          icon={BookOpen}
          title={<BilingualText en="Stereochemistry Modules" bn="স্টেরিওরসায়ন অধ্যায়সমূহ" />}
          description={<BilingualText en="Select a topic below to explore interactive 3D simulations, sequence rules, and curated examples." bn="ইন্টারেক্টিভ ৩ডি সিমুলেশন, অগ্রাধিকার নিয়ম এবং উদাহরণ দেখতে নিচের যেকোনো একটি অধ্যায় নির্বাচন করুন।" />}
          aside={progressSummary}
          className="animate-fade-in-up"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Geometrical isomerism modules">
          {modules.map((module, index) => {
            const completed = completedModules.includes(module.id);
            const inProgress = !completed && (index === 0 || completedModules.includes(modules[index - 1].id));
            const Icon = moduleIcons[index] ?? Orbit;
            const stateLabel = completed
              ? <BilingualText en="Completed" bn="সম্পূর্ণ" />
              : inProgress
                ? <BilingualText en="Continue" bn="চালিয়ে যান" />
                : <BilingualText en="Not started" bn="শুরু হয়নি" />;

            return (
              <div
                role="button"
                tabIndex={0}
                key={module.id}
                onClick={() => navigate(`/learn/${module.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/learn/${module.id}`);
                  }
                }}
                className={`group relative flex min-h-[280px] sm:min-h-[310px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl border bg-[#07192be8] p-5 sm:p-7 shadow-xl transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer ${
                  completed
                    ? 'border-emerald-500/40'
                    : inProgress
                    ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                    : 'border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    completed ? 'bg-emerald-400' : inProgress ? 'bg-cyan-400' : 'bg-slate-700'
                  }`}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <p className="eyebrow text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      <BilingualText en={`Module ${index + 1}`} bn={`অধ্যায় ${index + 1}`} />
                    </p>
                    <h2 className="mt-3 text-xl font-black leading-snug text-white transition-colors group-hover:text-cyan-300">
                      <BilingualText en={module.title.en} bn={module.title.bn} />
                    </h2>
                  </div>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${
                      completed
                        ? 'border-emerald-500/40 bg-emerald-950/60 text-emerald-400'
                        : 'border-cyan-500/30 bg-cyan-950/40 text-cyan-400'
                    }`}
                  >
                    {completed ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                  </span>
                </div>

                <div className="mt-5 line-clamp-3 text-xs leading-relaxed text-slate-300">
                  <BilingualText en={module.learningObjectives[0].en} bn={module.learningObjectives[0].bn} />
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full transition-all ${
                        completed ? 'w-full bg-emerald-400' : inProgress ? 'w-1/3 bg-cyan-400' : 'w-0'
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                    <span
                      className={`flex items-center gap-1.5 text-xs font-bold ${
                        completed ? 'text-emerald-400' : inProgress ? 'text-cyan-300' : 'text-slate-500'
                      }`}
                    >
                      {completed ? <CheckCircle2 className="h-4 w-4" /> : inProgress ? <ArrowRight className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                      {stateLabel}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800/80 text-slate-400 transition-all group-hover:bg-cyan-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </div>
  );
};

