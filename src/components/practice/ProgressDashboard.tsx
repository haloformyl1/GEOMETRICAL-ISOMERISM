import React from 'react';
import { useStore } from '../../store/useStore';
import { modules } from '../../content';
import { QUESTION_BANK } from '../../content/questions';
import { BilingualText } from '../BilingualText';
import { Award, BookOpen, CheckCircle2, RotateCcw, Target, Zap } from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const { completedModules, solvedQuestions, score, resetProgress } = useStore();

  const totalModules = modules.length;
  const completedCount = completedModules.length;
  const modulePercentage = Math.round((completedCount / totalModules) * 100);

  const totalQuestions = QUESTION_BANK.length;
  const attemptedCount = Object.keys(solvedQuestions).length;
  const quizAccuracy = attemptedCount > 0 ? Math.round((score / attemptedCount) * 100) : 0;

  return (
    <div className="mx-auto my-6 max-w-4xl space-y-8">
      {/* Top Header Card */}
      <div className="surface-panel rounded-3xl border border-cyan-500/20 bg-[#071526]/90 p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Target className="h-4 w-4" />
              <span>Learner Analytics</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              <BilingualText en="Stereochemistry Mastery Dashboard" bn="স্টেরিওরসায়ন অগ্রগতি ড্যাশবোর্ড" />
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-lg">
              <BilingualText
                en="Track your journey through restricted rotation, CIP priority rules, syn-anti isomerism, and timed assessments."
                bn="আবদ্ধ ঘূর্ণন, সিআইপি নিয়ম, সিন-অ্যান্টি সমাণুতা এবং মূল্যায়নের মাধ্যমে আপনার অগ্রগতি পর্যবেক্ষণ করুন।"
              />
            </p>
          </div>

          {/* Reset progress button */}
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all completed modules and quiz scores?')) {
                resetProgress();
              }
            }}
            className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-bold text-rose-300 hover:bg-rose-900/60 transition-all cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* Module Completion */}
        <div className="rounded-3xl border border-cyan-500/20 bg-[#071526]/80 p-6 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Course Progress</span>
            <BookOpen className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white font-mono">{modulePercentage}%</span>
            <span className="text-xs text-slate-400">({completedCount} of {totalModules} modules)</span>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
              style={{ width: `${modulePercentage}%` }}
            />
          </div>
        </div>

        {/* Practice Questions Score */}
        <div className="rounded-3xl border border-cyan-500/20 bg-[#071526]/80 p-6 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Practice Score</span>
            <Award className="h-5 w-5 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-300 font-mono">{score}</span>
            <span className="text-xs text-slate-400">correct answers</span>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            {attemptedCount} of {totalQuestions} questions attempted
          </p>
        </div>

        {/* Accuracy */}
        <div className="rounded-3xl border border-cyan-500/20 bg-[#071526]/80 p-6 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quiz Accuracy</span>
            <Zap className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-300 font-mono">{quizAccuracy}%</span>
            <span className="text-xs text-slate-400">correctness</span>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            {score} correct out of {attemptedCount} attempted
          </p>
        </div>
      </div>

      {/* Module Breakdown List */}
      <div className="rounded-3xl border border-cyan-500/20 bg-[#071526]/80 p-6 sm:p-8 backdrop-blur-md">
        <h3 className="text-lg font-bold text-white mb-6">
          <BilingualText en="Module Completion Checklist" bn="অধ্যায় সমাপ্তি তালিকা" />
        </h3>

        <div className="space-y-3">
          {modules.map((mod, idx) => {
            const isCompleted = completedModules.includes(mod.id);
            return (
              <div
                key={mod.id}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  isCompleted
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300'
                    : 'border-slate-800 bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-xl font-mono text-xs font-bold ${
                      isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      <BilingualText en={mod.title.en} bn={mod.title.bn} />
                    </h4>
                    <p className="text-xs text-slate-400">
                      {mod.sections.length} interactive sections & laboratories
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500">Incomplete</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

