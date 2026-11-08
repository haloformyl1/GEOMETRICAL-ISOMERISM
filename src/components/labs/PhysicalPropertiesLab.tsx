import React, { useState } from 'react';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Sphere, Cylinder, Text } from '@react-three/drei';
import { BilingualText } from '../BilingualText';
import { Flame, Droplets, Grid, RotateCcw, AlertCircle } from 'lucide-react';

export const PhysicalPropertiesLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dipole' | 'packing' | 'dehydration'>('dehydration');
  const [temperature, setTemperature] = useState<number>(25); // Celsius
  const [isMaleic, setIsMaleic] = useState<boolean>(true); // true = maleic (cis), false = fumaric (trans)

  // In maleic, at temp >= 140°C, it dehydrates into maleic anhydride!
  const isDehydrated = isMaleic && temperature >= 140;

  return (
    <div className="flex flex-col h-full w-full bg-[#071322] rounded-2xl overflow-hidden border border-[rgba(70,227,255,0.18)]">
      {/* Top Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-4 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('dehydration')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
              activeTab === 'dehydration'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-amber-300" />
            <span>Maleic vs Fumaric Dehydration</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('dipole')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
              activeTab === 'dipole'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Droplets className="h-3.5 w-3.5 text-sky-300" />
            <span>Dipole Vector Summation</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('packing')}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
              activeTab === 'packing'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Grid className="h-3.5 w-3.5 text-emerald-300" />
            <span>Crystal Packing & Melting Point</span>
          </button>
        </div>

        {activeTab === 'dehydration' && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setIsMaleic(true); setTemperature(25); }}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                isMaleic ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Maleic Acid (Cis)
            </button>
            <button
              type="button"
              onClick={() => { setIsMaleic(false); setTemperature(25); }}
              className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer border-0 ${
                !isMaleic ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Fumaric Acid (Trans)
            </button>
          </div>
        )}
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 min-h-[380px]">
        {activeTab === 'dehydration' && (
          <MolecularCanvas cameraPosition={[0, 1.5, 5.5]}>
            <group scale={1.2}>
              {/* C=C */}
              <Sphere args={[0.42, 32, 32]} position={[-0.75, 0, 0]}><meshStandardMaterial color="#334155" /></Sphere>
              <Sphere args={[0.42, 32, 32]} position={[0.75, 0, 0]}><meshStandardMaterial color="#334155" /></Sphere>
              <Cylinder args={[0.07, 0.07, 1.5, 16]} position={[0, 0, 0.08]} rotation={[0, 0, Math.PI / 2]}>
                <meshStandardMaterial color="#38bdf8" />
              </Cylinder>
              <Cylinder args={[0.07, 0.07, 1.5, 16]} position={[0, 0, -0.08]} rotation={[0, 0, Math.PI / 2]}>
                <meshStandardMaterial color="#38bdf8" />
              </Cylinder>

              {/* Hydrogens */}
              <Sphere args={[0.26, 16, 16]} position={[-1.4, -0.9, 0]}><meshStandardMaterial color="#ffffff" /></Sphere>
              <Sphere args={[0.26, 16, 16]} position={isMaleic ? [1.4, -0.9, 0] : [1.4, 0.9, 0]}>
                <meshStandardMaterial color="#ffffff" />
              </Sphere>

              {/* Carboxyl groups */}
              {/* Group 1 on C1 (always up) */}
              <group position={[-1.4, 1.1, 0]}>
                <Sphere args={[0.38, 32, 32]}><meshStandardMaterial color="#ef4444" /></Sphere>
                <Text position={[0, 0.5, 0]} fontSize={0.24} color="#fca5a5">COOH</Text>
              </group>

              {/* Group 2 on C2 */}
              {isDehydrated ? (
                // Maleic Anhydride Ring Closure: oxygen bridge between the two carbonyls!
                <group position={[0, 1.8, 0]}>
                  <Sphere args={[0.35, 32, 32]}><meshStandardMaterial color="#ef4444" emissive="#b91c1c" emissiveIntensity={0.6} /></Sphere>
                  <Text position={[0, 0.5, 0]} fontSize={0.24} color="#fca5a5">-O- Bridge (Anhydride)</Text>
                  {/* Connectors to C1 and C2 carbonyls */}
                  <Cylinder args={[0.06, 0.06, 1.3, 16]} position={[-0.7, -0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
                    <meshStandardMaterial color="#ef4444" />
                  </Cylinder>
                  <Cylinder args={[0.06, 0.06, 1.3, 16]} position={[0.7, -0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <meshStandardMaterial color="#ef4444" />
                  </Cylinder>
                </group>
              ) : (
                <group position={isMaleic ? [1.4, 1.1, 0] : [1.4, -1.1, 0]}>
                  <Sphere args={[0.38, 32, 32]}><meshStandardMaterial color="#ef4444" /></Sphere>
                  <Text position={[0, isMaleic ? 0.5 : -0.5, 0]} fontSize={0.24} color="#fca5a5">COOH</Text>
                </group>
              )}
            </group>
          </MolecularCanvas>
        )}

        {activeTab === 'dipole' && (
          <div className="flex h-full items-center justify-center p-8 text-center">
            <div className="max-w-xl rounded-2xl border border-cyan-500/30 bg-[#07192be8] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-black text-cyan-300">
                Vector Summation of Bond Dipoles
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                In cis-1,2-dichloroethene, both C&minus;Cl bond dipoles point along +Y. The resultant dipole is:
              </p>
              <div className="my-4 rounded-xl border border-cyan-500/30 bg-slate-900/80 p-4 font-mono text-lg text-amber-300">
                &mu;<sub>net</sub> = &mu;<sub>1</sub> + &mu;<sub>2</sub> = 1.90 D
              </div>
              <p className="text-sm text-slate-300">
                In trans-1,2-dichloroethene, the two vectors point in exactly opposite directions (&theta; = 180&deg;):
              </p>
              <div className="my-4 rounded-xl border border-cyan-500/30 bg-slate-900/80 p-4 font-mono text-lg text-emerald-300">
                &mu;<sub>net</sub> = &mu;<sub>1</sub> &minus; &mu;<sub>1</sub> = 0.00 D
              </div>
              <p className="text-xs text-slate-400">
                This polarity difference explains why cis has a higher boiling point (60.3&deg;C vs 47.5&deg;C).
              </p>
            </div>
          </div>
        )}

        {activeTab === 'packing' && (
          <div className="flex h-full items-center justify-center p-8 text-center">
            <div className="max-w-xl rounded-2xl border border-cyan-500/30 bg-[#07192be8] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-black text-emerald-300">
                Crystal Packing Symmetry vs Melting Point
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Melting point depends heavily on how closely and symmetrically molecules pack into the solid crystal lattice:
              </p>
              <div className="my-4 grid grid-cols-2 gap-4 text-left font-mono text-xs">
                <div className="rounded-xl border border-cyan-500/30 bg-slate-900/80 p-3">
                  <p className="font-bold text-cyan-300">Cis Isomers (Bent)</p>
                  <p className="text-slate-400 mt-1">Bent shape leaves voids in the lattice. Weaker intermolecular lattice energy.</p>
                  <p className="mt-2 text-rose-400 font-bold">Lower Melting Point</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-slate-900/80 p-3">
                  <p className="font-bold text-emerald-300">Trans Isomers (Linear)</p>
                  <p className="text-slate-400 mt-1">High symmetry and linearity allow tight, compact crystal stacking.</p>
                  <p className="mt-2 text-emerald-400 font-bold">Higher Melting Point</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Example: Fumaric acid melts at 287&deg;C, whereas Maleic acid melts at 130&deg;C (157&deg;C higher!).
              </p>
            </div>
          </div>
        )}

        {/* Temperature Controller Bar for Dehydration */}
        {activeTab === 'dehydration' && (
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-cyan-500/20 bg-[#07192be8] p-4 backdrop-blur-md shadow-2xl">
            <div className="w-full sm:w-1/2">
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                <span>Temperature Controller:</span>
                <span className="font-mono text-amber-300">{temperature}°C</span>
              </div>
              <input
                type="range"
                min={25}
                max={300}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                <span>25°C (Room)</span>
                <span>140°C (Maleic threshold)</span>
                <span>280°C (Fumaric threshold)</span>
              </div>
            </div>

            <div className="text-xs sm:text-right">
              {isDehydrated ? (
                <div className="text-amber-300 font-bold">
                  <p className="text-sm">🔥 Cyclic Maleic Anhydride Formed!</p>
                  <p className="text-slate-400 text-[11px]">Intramolecular loss of H2O occurred at 140°C.</p>
                </div>
              ) : !isMaleic && temperature < 280 ? (
                <div className="text-slate-400">
                  <p className="font-bold text-white">No Anhydride Formation</p>
                  <p className="text-[11px]">Trans carboxyls are too far apart (3.8 Å) to dehydrate intramolecularly.</p>
                </div>
              ) : (
                <div className="text-slate-300">
                  <p className="font-bold text-cyan-300">{isMaleic ? 'Maleic Acid (Cis)' : 'Fumaric Acid (Trans)'}</p>
                  <p className="text-[11px] text-slate-400">Increase temperature to 140°C to test for dehydration.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

