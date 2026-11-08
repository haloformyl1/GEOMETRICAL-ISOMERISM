import React, { useState, useEffect } from 'react';
import { QUESTION_BANK } from '../../content/questions';
import { BilingualText } from '../BilingualText';
import { Clock, CheckCircle2, XCircle, ChevronRight, Award, RotateCcw, PenTool, Sparkles } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const PracticeCenter: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const { recordQuestionResult } = useStore();

  useEffect(() => {
    let timer: number;
    if (started && !finished && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [started, finished, timeRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setStarted(true);
    setFinished(false);
    setCurrentIndex(0);
    setScore(0);
    setTimeRemaining(600);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const handleCheck = () => {
    if (!selectedOption) return;
    setIsAnswerChecked(true);
    const currentQ = QUESTION_BANK[currentIndex];
    const isCorrect = selectedOption === currentQ.correctOptionId;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    recordQuestionResult(currentQ.id, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < QUESTION_BANK.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setFinished(true);
    }
  };

  if (!started) {
    return (
      <div className="surface-panel mx-auto my-6 max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#071526]/90 shadow-2xl backdrop-blur-xl">
        <div className="p-8 text-center text-white sm:p-14">
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-500/40 bg-cyan-950/60 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <PenTool className="h-10 w-10 text-cyan-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-white">
            <BilingualText en="Stereochemistry Practice Center" bn="স্টেরিওরসায়ন অনুশীলন কেন্দ্র" />
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-base leading-relaxed">
            <BilingualText
              en="Challenge yourself with curated questions on Cis-Trans conditions, CIP sequence rules, Syn-Anti oxime stereochemistry, and dipole predictions."
              bn="সিস-ট্রান্স শর্তাবলী, সিআইপি নিয়ম, সিন-অ্যান্টি অক্সাইম এবং ডাইপোল সংক্রান্ত প্রশ্নের মাধ্যমে আপনার দক্ষতা যাচাই করুন।"
            />
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {QUESTION_BANK.length} Conceptual & Analytical Questions
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              10-Minute Timed Session
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Step-by-Step Bilingual Explanations
            </span>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={handleStart}
              className="btn btn-primary px-8 py-4 text-base font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <BilingualText en="Start Timed Assessment" bn="মূল্যায়ন শুরু করুন" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / QUESTION_BANK.length) * 100);
    return (
      <div className="surface-panel mx-auto my-6 max-w-3xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#071526]/90 p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
          <Award className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-black text-white mb-2">
          <BilingualText en="Assessment Completed!" bn="মূল্যায়ন সম্পন্ন হয়েছে!" />
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          <BilingualText en="Here is your final stereochemistry score:" bn="আপনার চূড়ান্ত ফলাফল:" />
        </p>

        <div className="my-8 inline-flex items-center justify-center gap-6 rounded-2xl border border-cyan-500/30 bg-slate-900/80 px-8 py-6">
          <div>
            <p className="text-4xl font-black text-cyan-300 font-mono">{score} / {QUESTION_BANK.length}</p>
            <p className="text-xs text-slate-400 uppercase mt-1">Total Score</p>
          </div>
          <div className="h-12 w-px bg-slate-700" />
          <div>
            <p className="text-4xl font-black text-emerald-300 font-mono">{percentage}%</p>
            <p className="text-xs text-slate-400 uppercase mt-1">Accuracy</p>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleStart}
            className="btn btn-primary px-8 py-3.5 text-sm font-bold cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            <BilingualText en="Retake Practice Session" bn="পুনরায় চেষ্টা করুন" />
          </button>
        </div>
      </div>
    );
  }

  const currentQ = QUESTION_BANK[currentIndex];

  return (
    <div className="mx-auto my-6 max-w-3xl">
      <div className="surface-panel rounded-3xl border border-cyan-500/20 bg-[#071526]/95 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
        {/* Progress & Timer Bar */}
        <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-1 text-xs font-bold text-cyan-300 font-mono">
              Q {currentIndex + 1} of {QUESTION_BANK.length}
            </span>
            {currentQ.topic && (
              <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                {currentQ.topic}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-amber-300 rounded-lg border border-amber-500/30 bg-amber-950/40 px-3 py-1">
            <Clock className="h-4 w-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>

        {/* Question Text */}
        <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-6">
          <BilingualText en={currentQ.text.en} bn={currentQ.text.bn} />
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === currentQ.correctOptionId;
            let btnClass = 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/60';

            if (isAnswerChecked) {
              if (isCorrect) {
                btnClass = 'border-emerald-500 bg-emerald-950/60 text-emerald-200 font-bold';
              } else if (isSelected) {
                btnClass = 'border-rose-500 bg-rose-950/60 text-rose-200';
              }
            } else if (isSelected) {
              btnClass = 'border-cyan-400 bg-cyan-950/60 text-cyan-200 font-bold shadow-[0_0_15px_rgba(6,182,212,0.25)]';
            }

            return (
              <button
                key={opt.id}
                type="button"
                disabled={isAnswerChecked}
                onClick={() => setSelectedOption(opt.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all cursor-pointer ${btnClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-slate-800 text-xs font-mono font-bold uppercase text-slate-300">
                    {opt.id}
                  </span>
                  <span>
                    <BilingualText en={opt.text.en} bn={opt.text.bn} />
                  </span>
                </div>
                {isAnswerChecked && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />}
                {isAnswerChecked && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Action Controls & Explanation */}
        <div className="border-t border-slate-700/80 pt-6">
          {!isAnswerChecked ? (
            <button
              type="button"
              disabled={!selectedOption}
              onClick={handleCheck}
              className={`btn w-full py-3.5 text-sm font-bold ${
                selectedOption ? 'btn-primary cursor-pointer' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <BilingualText en="Check Answer" bn="উত্তর যাচাই করুন" />
            </button>
          ) : (
            <div className="space-y-4 animate-fade-in-up">
              <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/90 p-4">
                <p className="text-xs font-bold uppercase text-cyan-400 mb-1">
                  <BilingualText en="Detailed Explanation" bn="বিস্তারিত ব্যাখ্যা" />
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <BilingualText en={currentQ.explanation.en} bn={currentQ.explanation.bn} />
                </p>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary w-full py-3.5 text-sm font-bold cursor-pointer flex items-center justify-center gap-2"
              >
                <span>
                  {currentIndex < QUESTION_BANK.length - 1 ? (
                    <BilingualText en="Next Question" bn="পরবর্তী প্রশ্ন" />
                  ) : (
                    <BilingualText en="Finish Assessment" bn="মূল্যায়ন সমাপ্ত করুন" />
                  )}
                </span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

