import React from 'react';
import { useStore, type LanguageMode } from '../store/useStore';
import { Languages } from 'lucide-react';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { language, setLanguage } = useStore();

  const options: { id: LanguageMode; label: string; sub: string }[] = [
    { id: 'en', label: 'English', sub: 'EN' },
    { id: 'bn', label: 'বাংলা', sub: 'BN' },
    { id: 'bilingual', label: 'Bilingual', sub: 'দ্বিভাষিক' }
  ];

  return (
    <div className="flex items-center gap-1 rounded-xl border border-[rgba(70,227,255,0.22)] bg-[rgba(8,20,34,0.7)] p-1 backdrop-blur-md">
      {!compact && <Languages className="w-4 h-4 ml-2 text-cyan-400" />}
      {options.map((opt) => {
        const isActive = language === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLanguage(opt.id)}
            className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold transition-all border-0 ${
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {compact ? opt.sub : opt.label}
          </button>
        );
      })}
    </div>
  );
};

