import React from 'react';
import { BilingualText } from './BilingualText';
import { BrandMark } from './BrandMark';
import { Phone, Mail, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[rgba(70,227,255,0.14)] bg-[#040b14] py-12 text-[#94a3b8]">
      <div className="mx-auto flex max-w-[var(--page-max)] flex-col gap-8 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-400">
            <BilingualText
              en="Interactive 3D laboratory for mastering Geometrical Isomerism: Cis-Trans, E-Z (CIP System), and Syn-Anti stereochemistry with 78+ curated molecular models."
              bn="জ্যামিতিক সমাণুতা আয়ত্ত করার জন্য একটি ইন্টারেক্টিভ ৩ডি ল্যাবরেটরি: সিস-ট্রান্স, E-Z (সিআইপি নিয়ম) এবং সিন-অ্যান্টি স্টেরিওরসায়নসহ ৭৮টিরও বেশি রাসায়নিক মডেল।"
            />
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-xs">
          <div className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-slate-900/80 px-4 py-2 text-slate-300">
            <span className="text-slate-400">Designed & Developed by</span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Arghyadeep Roy
            </span>
          </div>

          <div className="flex items-center gap-3 text-cyan-400 font-mono">
            <a
              href="tel:9830507435"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>9830507435</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} PIECHEM Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
