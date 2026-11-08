import React, { useState } from 'react';
import { FLASHCARD_DECK, type Flashcard } from '../../content/flashcards';
import { BilingualText } from '../BilingualText';
import { ChevronLeft, ChevronRight, RotateCw, Sparkles, BookOpen } from 'lucide-react';

export const FlashcardDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = FLASHCARD_DECK[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev < FLASHCARD_DECK.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARD_DECK.length - 1));
  };

  return (
    <div className="mx-auto my-6 max-w-2xl text-center">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <BilingualText en="Stereochemistry Flashcards" bn="স্টেরিওরসায়ন ফ্ল্যাশকার্ড" />
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            <BilingualText en="Click card to flip between term and full scientific definition" bn="সংজ্ঞা ও মূল ধারণা দেখতে কার্ডটিতে ক্লিক করে ফ্লিপ করুন" />
          </p>
        </div>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
          {currentIndex + 1} / {FLASHCARD_DECK.length}
        </span>
      </div>

      {/* 3D Flip Card Container */}
      <div
        className="relative h-80 sm:h-96 w-full cursor-pointer perspective-1000 select-none"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative h-full w-full rounded-3xl border border-cyan-500/30 bg-[#07192be8] p-8 backdrop-blur-xl shadow-2xl transition-transform duration-500 preserve-3d flex flex-col justify-between ${
            flipped ? 'rotate-y-180 bg-[#0c223a]' : ''
          }`}
        >
          {/* FRONT */}
          {!flipped ? (
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wider font-bold">
                <span>{card.category}</span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>Click to flip</span>
                </span>
              </div>

              <div className="my-auto">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  <BilingualText en={card.term.en} bn={card.term.bn} />
                </h3>
                {card.formula && (
                  <p className="mt-4 font-mono text-sm text-amber-300 rounded-xl bg-slate-900/60 py-2 px-4 inline-block border border-slate-700">
                    {card.formula}
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-500">PIECHEM Stereochemistry Studio</p>
            </div>
          ) : (
            /* BACK */
            <div className="flex flex-col h-full justify-between rotate-y-180">
              <div className="flex justify-between items-center text-xs text-cyan-400 uppercase tracking-wider font-bold">
                <span>Scientific Definition</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>Flip back</span>
                </span>
              </div>

              <div className="my-auto space-y-4 text-left">
                <p className="text-sm leading-relaxed text-slate-200">
                  <BilingualText en={card.definition.en} bn={card.definition.bn} />
                </p>
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3 text-xs text-cyan-200">
                  <p className="font-bold text-[11px] uppercase text-cyan-400 mb-0.5">Key Exam Takeaway</p>
                  <p><BilingualText en={card.keyTakeaway.en} bn={card.keyTakeaway.bn} /></p>
                </div>
              </div>

              <p className="text-xs text-slate-500">Term: {card.term.en}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-bold text-slate-300 hover:text-white hover:border-cyan-400 cursor-pointer transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={() => setFlipped(!flipped)}
          className="rounded-2xl border border-cyan-500/40 bg-cyan-950/60 px-5 py-3 text-sm font-bold text-cyan-300 hover:bg-cyan-500/20 cursor-pointer transition-all"
        >
          Flip Card
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-bold text-slate-300 hover:text-white hover:border-cyan-400 cursor-pointer transition-all"
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
