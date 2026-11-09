import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Accessibility, Check, Maximize2, Menu, Minimize2, X, Phone } from 'lucide-react';
import { useStore } from '../store/useStore';
import { BrandMark } from './BrandMark';
import { LanguageSelector } from './LanguageSelector';

const navLinks = [
  { path: '/learn', label: 'Learn' },
  { path: '/lab', label: '3D Labs' },
  { path: '/examples', label: '78+ Examples' },
  { path: '/practice', label: 'Practice' },
  { path: '/progress', label: 'Progress' },
];

export const Navbar: React.FC = () => {
  const { reducedMotion, setReducedMotion } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appFullscreen, setAppFullscreen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAccessibilityOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onFullscreenChange = () =>
      setAppFullscreen(document.fullscreenElement === document.documentElement);
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
          {/* Logo & Designer Pill (Exact layout as Solid-State Chemistry) */}
          <div className="flex shrink-0 flex-col items-start gap-1">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-xl focus-visible:outline-none text-left bg-transparent border-0 p-0 cursor-pointer"
              aria-label="PIECHEM Stereochemistry home"
            >
              <BrandMark compact />
            </button>

            {/* Designed by Arghyadeep Roy badge */}
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

          {/* Navigation links */}
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
                    <span
                      className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-[var(--accent-primary)]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Language, Accessibility, Fullscreen, Menu */}
          <div className="relative flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="hidden sm:block">
              <LanguageSelector compact />
            </div>

            {/* Accessibility dropdown */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setAccessibilityOpen((open) => !open)}
                className={`grid h-9 w-9 place-items-center rounded-xl border transition-all cursor-pointer ${
                  accessibilityOpen || reducedMotion
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-[rgba(70,227,255,0.22)] bg-slate-900/60 text-slate-300 hover:text-white'
                }`}
                aria-label="Accessibility options"
                aria-expanded={accessibilityOpen}
                title="Accessibility"
              >
                <Accessibility className="h-4 w-4" />
              </button>

              {accessibilityOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-[100] w-64 rounded-xl border border-[rgba(70,227,255,0.2)] bg-[#07192b]/95 p-3 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.5)] animate-fade-in-up">
                  <p className="px-2 pb-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-cyan-300/80">
                    Accessibility
                  </p>
                  <button
                    type="button"
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className="flex min-h-12 w-full items-center justify-between rounded-lg px-3 text-left font-bold text-[#edf8ff] hover:bg-white/5 cursor-pointer border-0"
                    aria-pressed={reducedMotion}
                  >
                    <span>
                      <span className="block text-sm">Reduce Motion</span>
                      <span className="block text-xs font-medium text-slate-400">
                        Pause decorative 3D spin
                      </span>
                    </span>
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-md border ${
                        reducedMotion
                          ? 'border-cyan-400 bg-cyan-500 text-white'
                          : 'border-slate-700'
                      }`}
                    >
                      {reducedMotion && <Check className="h-4 w-4" />}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Fullscreen toggle */}
            <button
              type="button"
              onClick={toggleAppFullscreen}
              className="hidden h-9 w-9 place-items-center rounded-xl border border-[rgba(70,227,255,0.22)] bg-slate-900/60 text-slate-300 transition-all hover:text-white sm:grid cursor-pointer"
              title={appFullscreen ? 'Exit fullscreen' : 'Fullscreen app'}
            >
              {appFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>

            {/* Mobile menu hamburger */}
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
        <div className="fixed inset-0 top-[var(--header-height-mobile)] z-50 flex flex-col bg-[#06101d]/95 p-4 sm:p-6 backdrop-blur-2xl lg:hidden animate-fade-in-up overflow-y-auto">
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
                    active
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 border-t border-slate-800/80 pt-6 flex flex-col gap-4">
            <LanguageSelector />

            <button
              type="button"
              onClick={() => setReducedMotion(!reducedMotion)}
              className="flex min-h-12 w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 text-left font-bold text-[#edf8ff] cursor-pointer"
              aria-pressed={reducedMotion}
            >
              <span>
                <span className="block text-sm">Reduce Motion</span>
                <span className="block text-xs font-medium text-slate-400">Pause decorative 3D spin</span>
              </span>
              <span className={`grid h-6 w-6 place-items-center rounded-md border ${reducedMotion ? 'border-cyan-400 bg-cyan-500 text-white' : 'border-slate-700'}`}>
                {reducedMotion && <Check className="h-4 w-4" />}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleAppFullscreen}
              className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 text-left font-bold text-[#edf8ff] cursor-pointer"
            >
              {appFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              <span>{appFullscreen ? 'Exit fullscreen' : 'Fullscreen app'}</span>
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Designed &amp; Prepared By:</span>
              <span className="font-bold text-cyan-300">Arghyadeep Roy</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Contact:</span>
              <a
                href="tel:9830507435"
                className="font-mono font-bold text-cyan-400 hover:text-white"
              >
                9830507435
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
