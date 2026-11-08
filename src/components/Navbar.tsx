import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Accessibility, Maximize2, Menu, Minimize2, X, Phone } from 'lucide-react';
import { useStore } from '../store/useStore';
import { BrandMark } from './BrandMark';
import { LanguageSelector } from './LanguageSelector';

const navLinks = [
  { path: '/learn', label: 'Learn' },
  { path: '/lab', label: '3D Labs' },
  { path: '/examples', label: '78+ Examples' },
  { path: '/practice', label: 'Practice' },
  { path: '/revision', label: 'Revision' },
  { path: '/progress', label: 'Progress' },
];

export const Navbar: React.FC = () => {
  const { reducedMotion, setReducedMotion } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appFullscreen, setAppFullscreen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onFullscreenChange = () => setAppFullscreen(document.fullscreenElement === document.documentElement);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleAppFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch (error) {
      console.warn('Application fullscreen is unavailable in this browser.', error);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex h-auto min-h-[var(--header-height-mobile)] items-center border-b border-[rgba(70,227,255,0.18)] bg-[rgba(8,19,30,0.92)] py-1.5 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:min-h-[var(--header-height-desktop)]">
        <div className="mx-auto flex w-full max-w-[var(--page-max)] items-center justify-between gap-2 px-3 sm:gap-3 sm:px-5 lg:px-8">
          <div className="flex shrink-0 flex-col items-start gap-1">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-xl focus-visible:outline-none text-left bg-transparent border-0 p-0 cursor-pointer"
              aria-label="PIECHEM home"
            >
              <BrandMark compact />
            </button>

            {/* Designed by Arghyadeep Roy badge with call action */}
            <div className="hidden sm:flex px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] text-[11px] text-slate-300 font-semibold tracking-wide items-center space-x-1.5 mt-0.5">
              <span className="text-slate-400">Designed by</span>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                Arghyadeep Roy
              </span>
              <span className="text-cyan-500/60">•</span>
              <button
                type="button"
                onClick={() => window.open('tel:9830507435', '_self')}
                className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 hover:text-white hover:bg-cyan-600/80 border border-cyan-500/50 transition-all font-mono shadow-[0_0_10px_rgba(6,182,212,0.2)] cursor-pointer"
                title="Call Arghyadeep Roy"
              >
                <Phone className="w-2.5 h-2.5 mr-0.5 text-cyan-400 fill-current" />
                <span>9830507435</span>
              </button>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.path);
              return (
                <button
                  type="button"
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-xl px-3.5 py-2 text-sm font-bold transition-all cursor-pointer border-0 ${
                    active
                      ? 'bg-cyan-500/15 border border-cyan-400/35 text-[#46e3ff] shadow-[0_0_15px_rgba(70,227,255,0.22)]'
                      : 'text-[#a9bfd2] hover:bg-white/5 hover:text-[#edf8ff]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-[var(--accent-primary)]" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="relative flex items-center gap-1.5 sm:gap-2">
            <LanguageSelector compact />

            <button
              type="button"
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`grid h-9 w-9 place-items-center rounded-xl border transition-all cursor-pointer ${
                reducedMotion
                  ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                  : 'border-[rgba(70,227,255,0.22)] bg-slate-900/60 text-slate-300 hover:text-white'
              }`}
              title={reducedMotion ? 'Enable motion' : 'Reduce motion'}
            >
              <Accessibility className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={toggleAppFullscreen}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(70,227,255,0.22)] bg-slate-900/60 text-slate-300 hover:text-white transition-all cursor-pointer"
              title={appFullscreen ? 'Exit fullscreen' : 'Fullscreen app'}
            >
              {appFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(70,227,255,0.22)] bg-slate-900/60 text-slate-300 lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[var(--header-height-mobile)] z-50 flex flex-col bg-[#06101d]/95 p-6 backdrop-blur-2xl lg:hidden animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl p-4 text-left font-bold text-lg cursor-pointer border-0 ${
                    active ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-400 text-center">
              Designed by <span className="text-cyan-300 font-bold">Arghyadeep Roy</span> (9830507435)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

