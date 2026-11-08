import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Orbit, Sparkles, BookOpen, Layers, CheckCircle2, FlaskConical } from 'lucide-react';
import { HeroMoleculeAnimation } from '../components/3d/HeroMoleculeAnimation';
import { BilingualText } from '../components/BilingualText';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100dvh-var(--header-height-mobile))] w-full flex-col md:min-h-[calc(100dvh-var(--header-height-desktop))]">
      <section className="page-shell grid flex-1 items-center gap-8 py-8 sm:gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-12 md:py-12 xl:gap-20">
        {/* Left Hero Content */}
        <div className="relative z-10 w-full max-w-[720px] animate-fade-in-up">
          <div className="eyebrow mb-5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            Stereochemistry Learning Studio
          </div>

          <h1 className="type-display-large font-black text-[#46e3ff] tracking-tight drop-shadow-[0_0_40px_rgba(70,227,255,0.45)]">
            <BilingualText
              en="Interactive Geometrical Isomerism"
              bn="ইন্টারেক্টিভ জ্যামিতিক সমাণুতা স্টুডিও"
            />
          </h1>

          <div className="mt-6 max-w-[66ch] text-lg leading-[1.75] text-[#a9bfd2] sm:text-xl font-normal">
            <BilingualText
              en="Explore, manipulate, and master Cis-Trans, E-Z (CIP sequence rules), and Syn-Anti stereochemistry with 3D molecular models and over 78+ curated chemical systems."
              bn="৩ডি আণবিক মডেল এবং ৭৮টিরও বেশি রাসায়নিক উদাহরণের মাধ্যমে সিস-ট্রান্স, E-Z (সিআইপি নিয়ম) এবং সিন-অ্যান্টি স্টেরিওরসায়ন সরাসরি অন্বেষণ ও আয়ত্ত করুন।"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/learn')}
              className="btn btn-primary w-full px-7 py-3.5 sm:w-auto shadow-[0_10px_30px_rgba(70,227,255,0.35)] cursor-pointer"
            >
              <BilingualText en="Start Learning Modules" bn="শেখা শুরু করুন" />
              <ArrowRight className="h-5 w-5 ml-1" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/lab')}
              className="btn btn-secondary w-full px-7 py-3.5 sm:w-auto cursor-pointer"
            >
              <FlaskConical className="h-5 w-5 text-[#aa7bff] mr-1" />
              <BilingualText en="Explore 3D Labs" bn="৩ডি ল্যাব অন্বেষণ করুন" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[rgba(165,214,255,0.16)] pt-6 text-sm font-semibold text-[#a9bfd2]">
            <span className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <BilingualText en="26+ Examples per Topic" bn="প্রতি বিষয়ে ২৬+ উদাহরণ" />
            </span>
            <span className="flex items-center gap-2">
              <Orbit className="h-4 w-4 text-[#aa7bff]" />
              <BilingualText en="Interactive CIP Solver" bn="ইন্টারেক্টিভ সিআইপি সমাধানকারী" />
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <BilingualText en="Full Bilingual English/বাংলা" bn="সম্পূর্ণ দ্বিভাষিক ইংরেজি/বাংলা" />
            </span>
          </div>
        </div>

        {/* Right Hero 3D Frame */}
        <div className="animate-fade-in-up md:min-w-0">
          <div className="lab-frame min-h-[420px] md:min-h-[560px] rounded-3xl border border-[rgba(165,214,255,0.18)] bg-[#0a182c]/85 shadow-[0_24px_64px_rgba(0,0,0,0.38)] backdrop-blur-xl">
            <div className="lab-frame-toolbar border-b border-[rgba(165,214,255,0.14)] bg-[#0c2038]/80">
              <div className="lab-frame-toolbar-title flex min-w-0 items-center gap-3">
                <span className="status-dot" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#edf8ff]">PIECHEM Interactive View</p>
                  <p className="truncate text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-300/80">
                    Cis-Trans Alkene Transformation
                  </p>
                </div>
              </div>
              <span className="hidden rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-200 sm:inline">
                Drag to rotate
              </span>
            </div>

            <div className="relative min-h-[480px] flex-1 overflow-hidden">
              <HeroMoleculeAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
