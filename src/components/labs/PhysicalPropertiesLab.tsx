import React, { useState } from 'react';
import { MolecularCanvas } from '../3d/MolecularCanvas';
import { Sphere, Cylinder, Text } from '@react-three/drei';
import { BilingualText } from '../BilingualText';
import { Flame, Droplets, Grid, RotateCcw } from 'lucide-react';

export const PhysicalPropertiesLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dehydration' | 'dipole' | 'packing'>('dehydration');
  const [temperature, setTemperature] = useState<number>(25); // Celsius
  const [isMaleic, setIsMaleic] = useState<boolean>(true); // true = maleic (cis), false = fumaric (trans)
  const [dipoleIsomer, setDipoleIsomer] = useState<'cis' | 'trans'>('cis');

  // In maleic, at temp >= 140°C, it dehydrates into maleic anhydride!
  const isDehydrated = isMaleic && temperature >= 140;

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Top Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 p-4 backdrop-blur-md">
        <div className="flex items-center gap-1.5 flex-wrap">
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
            <span><BilingualText en="Maleic vs Fumaric Dehydration" bn="ম্যালিক বনাম ফিউমারিক পানিশূন্যকরণ" /></span>
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
            <span><BilingualText en="Dipole Vector Summation" bn="ডাইপোল ভেক্টর যোগফল" /></span>
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
            <span><BilingualText en="Crystal Packing & Melting Point" bn="স্ফটিক প্যাকিং ও গলনাঙ্ক" /></span>
          </button>
        </div>

        {/* Sub-controls depending on active tab */}
        {activeTab === 'dehydration' && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setIsMaleic(true); setTemperature(25); }}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
                isMaleic ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Maleic Acid (Cis)
            </button>
            <button
              type="button"
              onClick={() => { setIsMaleic(false); setTemperature(25); }}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
                !isMaleic ? 'bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Fumaric Acid (Trans)
            </button>
          </div>
        )}

        {activeTab === 'dipole' && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDipoleIsomer('cis')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
                dipoleIsomer === 'cis' ? 'bg-amber-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.4)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Cis (μ = 1.90 D)
            </button>
            <button
              type="button"
              onClick={() => setDipoleIsomer('trans')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border-0 ${
                dipoleIsomer === 'trans' ? 'bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Trans (μ = 0.00 D)
            </button>
          </div>
        )}
      </div>

      {/* Main Interactive Stage with Responsive Minimum Height */}
      <div className="relative flex-1 min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">
        {/* TAB 1: MALEIC VS FUMARIC DEHYDRATION */}
        {activeTab === 'dehydration' && (
          <MolecularCanvas cameraPosition={[0, 0.4, 3.4]} cameraTarget={[0, 0.2, 0]}>
            <group scale={1.6}>
              {/* C=C double bond */}
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

        {/* TAB 2: DIPOLE VECTOR SUMMATION (3D) */}
        {activeTab === 'dipole' && (
          <MolecularCanvas cameraPosition={[0, 0.4, 3.4]} cameraTarget={[0, 0.2, 0]}>
            <group scale={1.6}>
              {/* Central C=C */}
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
              <Sphere args={[0.26, 16, 16]} position={dipoleIsomer === 'cis' ? [1.4, -0.9, 0] : [1.4, 0.9, 0]}>
                <meshStandardMaterial color="#ffffff" />
              </Sphere>

              {/* Chlorine atoms (Green) */}
              <group position={[-1.4, 1.1, 0]}>
                <Sphere args={[0.38, 32, 32]}><meshStandardMaterial color="#22c55e" /></Sphere>
                <Text position={[0, 0.5, 0]} fontSize={0.24} color="#86efac">Cl</Text>
              </group>

              <group position={dipoleIsomer === 'cis' ? [1.4, 1.1, 0] : [1.4, -1.1, 0]}>
                <Sphere args={[0.38, 32, 32]}><meshStandardMaterial color="#22c55e" /></Sphere>
                <Text position={[0, dipoleIsomer === 'cis' ? 0.5 : -0.5, 0]} fontSize={0.24} color="#86efac">Cl</Text>
              </group>

              {/* Dipole Vector Arrows */}
              {dipoleIsomer === 'cis' ? (
                // Cis: reinforcing net dipole pointing UP
                <group position={[0, 1.6, 0]}>
                  <Cylinder args={[0.04, 0.04, 1.2, 16]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.8} />
                  </Cylinder>
                  <Cylinder args={[0, 0.14, 0.35, 16]} position={[0, 0.7, 0]}>
                    <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.8} />
                  </Cylinder>
                  <Text position={[0, 1.05, 0]} fontSize={0.28} color="#fbbf24" fontWeight="bold">
                    μ = 1.90 D (Strong Polarity)
                  </Text>
                </group>
              ) : (
                // Trans: opposing vectors that cancel out
                <group position={[0, 0, 0.6]}>
                  <Text position={[0, 0, 0]} fontSize={0.28} color="#34d399" fontWeight="bold">
                    μ = 0.00 D (Vectors Cancel 180°)
                  </Text>
                </group>
              )}
            </group>
          </MolecularCanvas>
        )}

        {/* TAB 3: CRYSTAL PACKING & MELTING POINT (3D Lattice Slice) */}
        {activeTab === 'packing' && (
          <MolecularCanvas cameraPosition={[0, 0.4, 3.4]} cameraTarget={[0, 0.2, 0]}>
            <group scale={1.3}>
              {/* Stacked Fumaric/Trans vs Maleic/Cis lattice demo */}
              <group position={[-1.6, 0, 0]}>
                <Text position={[0, 1.6, 0]} fontSize={0.24} color="#fca5a5" fontWeight="bold">
                  Cis Isomer (Bent Shape)
                </Text>
                <Text position={[0, -1.6, 0]} fontSize={0.20} color="#f87171">
                  Melts at 130°C (Loose Voids)
                </Text>
                {/* 3 bent units stacked loosely */}
                {[-0.6, 0.0, 0.6].map((yOff, i) => (
                  <group key={i} position={[0, yOff, 0]}>
                    <Sphere args={[0.2, 16, 16]} position={[-0.5, 0, 0]}><meshStandardMaterial color="#f87171" /></Sphere>
                    <Sphere args={[0.2, 16, 16]} position={[0.5, 0, 0]}><meshStandardMaterial color="#f87171" /></Sphere>
                    <Sphere args={[0.18, 16, 16]} position={[-0.8, 0.3, 0]}><meshStandardMaterial color="#ef4444" /></Sphere>
                    <Sphere args={[0.18, 16, 16]} position={[0.8, 0.3, 0]}><meshStandardMaterial color="#ef4444" /></Sphere>
                  </group>
                ))}
              </group>

              <group position={[1.6, 0, 0]}>
                <Text position={[0, 1.6, 0]} fontSize={0.24} color="#86efac" fontWeight="bold">
                  Trans Isomer (Linear Shape)
                </Text>
                <Text position={[0, -1.6, 0]} fontSize={0.20} color="#34d399">
                  Melts at 287°C (Tight Stacking)
                </Text>
                {/* 3 linear units stacked tightly */}
                {[-0.5, 0.0, 0.5].map((yOff, i) => (
                  <group key={i} position={[0, yOff, 0]}>
                    <Sphere args={[0.2, 16, 16]} position={[-0.5, 0, 0]}><meshStandardMaterial color="#34d399" /></Sphere>
                    <Sphere args={[0.2, 16, 16]} position={[0.5, 0, 0]}><meshStandardMaterial color="#34d399" /></Sphere>
                    <Sphere args={[0.18, 16, 16]} position={[-0.9, 0.25, 0]}><meshStandardMaterial color="#10b981" /></Sphere>
                    <Sphere args={[0.18, 16, 16]} position={[0.9, -0.25, 0]}><meshStandardMaterial color="#10b981" /></Sphere>
                  </group>
                ))}
              </group>
            </group>
          </MolecularCanvas>
        )}

        {/* Temperature Controller Bar for Dehydration */}
        {activeTab === 'dehydration' && (
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-cyan-500/20 bg-[#07192be8] p-4 backdrop-blur-md shadow-2xl">
            <div className="w-full sm:w-1/2">
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                <span><BilingualText en="Temperature Controller:" bn="তাপমাত্রা নিয়ন্ত্রক:" /></span>
                <span className="font-mono text-amber-300">{temperature}°C</span>
              </div>
              <input
                type="range"
                min={25}
                max={300}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>25°C (Room)</span>
                <span className="text-amber-400 font-bold">140°C (Maleic Threshold)</span>
                <span>200°C (Fumaric Threshold)</span>
              </div>
            </div>

            <div className="text-right text-xs">
              <span className={`font-bold ${isDehydrated ? 'text-amber-300' : 'text-slate-300'}`}>
                {isMaleic
                  ? isDehydrated
                    ? '⚡ Dehydration Occurred! (Maleic Anhydride + H₂O)'
                    : 'Maleic Acid (Cis)'
                  : 'Fumaric Acid (Trans)'}
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5 max-w-xs">
                {isMaleic
                  ? isDehydrated
                    ? 'Both -COOH groups were adjacent (2.4 Å), readily yielding cyclic anhydride!'
                    : 'Increase temperature to 140°C to test for dehydration.'
                  : 'Opposite -COOH groups (3.8 Å) cannot form a cyclic anhydride at 140°C!'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
