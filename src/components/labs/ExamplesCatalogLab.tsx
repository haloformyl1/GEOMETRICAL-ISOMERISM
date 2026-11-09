import React, { useState, useMemo } from 'react';
import { ALL_EXAMPLES } from '../../content/examples';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Molecule3DViewer } from '../3d/Molecule3DViewer';
import { BilingualText } from '../BilingualText';
import { Search, Filter, Layers, Eye, ChevronRight } from 'lucide-react';
import type { IsomerismCategory } from '../../types/isomerism';

export const ExamplesCatalogLab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<IsomerismCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExampleId, setSelectedExampleId] = useState(ALL_EXAMPLES[0].id);
  const [activeIsomer, setActiveIsomer] = useState<'A' | 'B'>('A');
  const [mobileTab, setMobileTab] = useState<'catalog' | 'viewer'>('catalog');

  const filteredExamples = useMemo(() => {
    return ALL_EXAMPLES.filter((ex) => {
      const matchCategory = selectedCategory === 'all' || ex.category === selectedCategory;
      const matchSearch =
        ex.iupacName.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ex.commonName && ex.commonName.en.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentExample = ALL_EXAMPLES.find((ex) => ex.id === selectedExampleId) || ALL_EXAMPLES[0];
  const activeStructure = activeIsomer === 'A' ? currentExample.isomerA.structure : currentExample.isomerB.structure;
  const hasNitrogen = activeStructure.atoms.some((atom) => atom.element === 'N');

  return (
    <div className="flex flex-col w-full h-full">
      {/* Mobile-only Segment Switcher */}
      <div className="lg:hidden flex rounded-xl border border-cyan-500/30 bg-[#091b2e] p-1 mb-4 shrink-0">
        <button
          type="button"
          onClick={() => setMobileTab('catalog')}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer border-0 text-center ${
            mobileTab === 'catalog'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Catalog ({filteredExamples.length})
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('viewer')}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all cursor-pointer border-0 text-center truncate px-2 ${
            mobileTab === 'viewer'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          3D Model: {currentExample.formula}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-6 h-full min-h-[460px] lg:min-h-[640px] w-full">
        {/* Left Column: Filter & Searchable List of 78+ Examples */}
        <div className={`flex flex-col rounded-2xl border border-[rgba(70,227,255,0.18)] bg-[#071322] overflow-hidden shadow-xl ${
          mobileTab === 'viewer' ? 'hidden lg:flex' : 'flex'
        }`}>
          {/* Header & Category Pills */}
          <div className="border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-3 sm:p-4 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-cyan-300">
                <BilingualText en="Chemical Catalog" bn="রাসায়নিক ক্যাটালগ" />
              </h3>
              <span className="rounded-full bg-cyan-950 px-2 py-0.5 text-[11px] font-bold text-cyan-400 border border-cyan-500/30">
                {filteredExamples.length} / 78
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search name, formula, or functional group..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/90 pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'all', label: 'All (78)' },
                { id: 'cis-trans', label: 'Cis-Trans' },
                { id: 'e-z', label: 'E-Z' },
                { id: 'syn-anti', label: 'Syn-Anti' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`rounded-lg px-2 sm:px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer border-0 ${
                    selectedCategory === tab.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5 max-h-[460px] sm:max-h-[500px] lg:max-h-[560px]">
            {filteredExamples.map((ex) => {
              const isSelected = ex.id === currentExample.id;
              return (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => {
                    setSelectedExampleId(ex.id);
                    setActiveIsomer('A');
                    setMobileTab('viewer');
                  }}
                  className={`w-full flex items-center justify-between rounded-xl p-2.5 sm:p-3 text-left transition-all cursor-pointer border-0 ${
                    isSelected
                      ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 shadow-md'
                      : 'bg-slate-900/40 hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                        {ex.category}
                      </span>
                      <span className="text-[10px] text-slate-500">•</span>
                      <span className="text-[10px] text-slate-400 font-mono">{ex.formula}</span>
                    </div>
                    <p className="truncate text-xs font-bold text-white mt-0.5">
                      {ex.iupacName.en}
                    </p>
                    {ex.commonName && (
                      <p className="truncate text-[10px] text-slate-400 italic">
                        {ex.commonName.en}
                      </p>
                    )}
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive 3D Inspection View */}
        <div className={`flex flex-col rounded-2xl border border-[rgba(70,227,255,0.18)] bg-[#071322] overflow-hidden shadow-xl ${
          mobileTab === 'catalog' ? 'hidden lg:flex' : 'flex'
        }`}>
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-3 sm:p-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileTab('catalog')}
                  className="lg:hidden text-cyan-400 hover:text-cyan-300 text-xs font-bold bg-transparent border-0 cursor-pointer p-0 mr-1"
                >
                  ← Catalog
                </button>
                <h2 className="text-sm sm:text-base font-black text-white truncate">
                  {currentExample.iupacName.en}
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-cyan-400 font-mono truncate">
                Formula: {currentExample.formula} | Category: {currentExample.category.toUpperCase()}
              </p>
            </div>

            {/* Isomer A / Isomer B Toggle */}
            <div className="flex w-full sm:w-auto rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5 shrink-0">
              <button
                type="button"
                onClick={() => setActiveIsomer('A')}
                className={`flex-1 sm:flex-initial rounded-lg px-2.5 sm:px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 text-center ${
                  activeIsomer === 'A'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {currentExample.isomerA.label}
              </button>
              <button
                type="button"
                onClick={() => setActiveIsomer('B')}
                className={`flex-1 sm:flex-initial rounded-lg px-2.5 sm:px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 text-center ${
                  activeIsomer === 'B'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {currentExample.isomerB.label}
              </button>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="relative flex-1 w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[500px] overflow-hidden">
            <MolecularCanvas cameraPosition={[0, 0.4, 4.4]} cameraTarget={[0, 0, 0]} frameloop={hasNitrogen ? 'always' : 'demand'}>
              <Molecule3DViewer
                structure={activeStructure}
                showLabels={true}
                showPriorityBadges={currentExample.category === 'e-z'}
                showDipole={true}
              />
            </MolecularCanvas>

            {/* Bottom Info HUD */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-[#07192be8] p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-cyan-300 truncate">
                    {activeStructure.name.en}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-slate-300 max-w-xl line-clamp-2 sm:line-clamp-none">
                    {currentExample.pedagogicalNote.en}
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-3 font-mono text-xs text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-700/80 w-full sm:w-auto">
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-500">Dipole (μ)</p>
                    <p className="font-bold text-amber-300 text-xs sm:text-sm">{activeStructure.dipoleNet?.toFixed(2)} D</p>
                  </div>
                  {activeStructure.boilingPoint && (
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-500">b.p.</p>
                      <p className="font-bold text-cyan-300 text-xs sm:text-sm">{activeStructure.boilingPoint}</p>
                    </div>
                  )}
                  {activeStructure.meltingPoint && (
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-500">m.p.</p>
                      <p className="font-bold text-emerald-300 text-xs sm:text-sm">{activeStructure.meltingPoint}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

