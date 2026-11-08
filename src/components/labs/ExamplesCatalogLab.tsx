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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-6 h-full min-h-[640px] w-full">
      {/* Left Column: Filter & Searchable List of 78+ Examples */}
      <div className="flex flex-col rounded-2xl border border-[rgba(70,227,255,0.18)] bg-[#071322] overflow-hidden shadow-xl">
        {/* Header & Category Pills */}
        <div className="border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-4 space-y-3">
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
              { id: 'cis-trans', label: 'Cis-Trans (26)' },
              { id: 'e-z', label: 'E-Z (26)' },
              { id: 'syn-anti', label: 'Syn-Anti (26)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer border-0 ${
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
        <div className="flex-1 overflow-y-auto p-2 space-y-1.5 max-h-[500px] lg:max-h-[560px]">
          {filteredExamples.map((ex, idx) => {
            const isSelected = ex.id === currentExample.id;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => {
                  setSelectedExampleId(ex.id);
                  setActiveIsomer('A');
                }}
                className={`w-full flex items-center justify-between rounded-xl p-3 text-left transition-all cursor-pointer border-0 ${
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
      <div className="flex flex-col rounded-2xl border border-[rgba(70,227,255,0.18)] bg-[#071322] overflow-hidden shadow-xl">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-4">
          <div>
            <h2 className="text-base font-black text-white">
              {currentExample.iupacName.en}
            </h2>
            <p className="text-xs text-cyan-400 font-mono">
              Formula: {currentExample.formula} | Category: {currentExample.category.toUpperCase()}
            </p>
          </div>

          {/* Isomer A / Isomer B Toggle */}
          <div className="flex rounded-xl border border-cyan-500/30 bg-slate-900/80 p-0.5">
            <button
              type="button"
              onClick={() => setActiveIsomer('A')}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
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
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
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
        <div className="relative flex-1 min-h-[380px]">
          <MolecularCanvas cameraPosition={[0, 1.5, 5.5]}>
            <Molecule3DViewer
              structure={activeStructure}
              showLabels={true}
              showPriorityBadges={currentExample.category === 'e-z'}
              showDipole={true}
            />
          </MolecularCanvas>

          {/* Bottom Info HUD */}
          <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl border border-cyan-500/20 bg-[#07192be8] p-4 backdrop-blur-xl shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold text-cyan-300">
                  {activeStructure.name.en}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 max-w-xl">
                  {currentExample.pedagogicalNote.en}
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-right shrink-0">
                <div>
                  <p className="text-[10px] text-slate-500">Dipole (μ)</p>
                  <p className="font-bold text-amber-300">{activeStructure.dipoleNet?.toFixed(2)} D</p>
                </div>
                {activeStructure.boilingPoint && (
                  <div>
                    <p className="text-[10px] text-slate-500">b.p.</p>
                    <p className="font-bold text-cyan-300">{activeStructure.boilingPoint}</p>
                  </div>
                )}
                {activeStructure.meltingPoint && (
                  <div>
                    <p className="text-[10px] text-slate-500">m.p.</p>
                    <p className="font-bold text-emerald-300">{activeStructure.meltingPoint}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
