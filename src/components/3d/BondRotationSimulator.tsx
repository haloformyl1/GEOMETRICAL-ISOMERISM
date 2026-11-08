import React, { useState } from 'react';
import { MolecularCanvas } from './MolecularCanvas';
import { Sphere, Cylinder, Text } from '@react-three/drei';
import { BilingualText } from '../BilingualText';
import { Flame, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

export const BondRotationSimulator: React.FC = () => {
  const [moleculeType, setMoleculeType] = useState<'ethene' | 'ethane'>('ethene');
  const [angle, setAngle] = useState<number>(0); // 0 to 180 degrees

  const rad = (angle * Math.PI) / 180;
  // Overlap factor: cos(angle) for double bond
  const overlap = Math.max(0, Math.cos(rad));
  // Energy barrier: up to 260 kJ/mol for ethene, 12 kJ/mol for ethane
  const maxBarrier = moleculeType === 'ethene' ? 260 : 12;
  const currentEnergy = Math.round(maxBarrier * Math.sin(rad) * Math.sin(rad));
  const isBroken = moleculeType === 'ethene' && angle > 25 && angle < 155;

  return (
    <div className="flex flex-col h-full w-full min-h-[520px] bg-[#071322] rounded-2xl overflow-hidden border border-[rgba(70,227,255,0.18)]">
      {/* Top HUD Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 px-5 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setMoleculeType('ethene'); setAngle(0); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              moleculeType === 'ethene'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <BilingualText en="Ethene (C=C Double Bond)" bn="ইথিন (C=C দ্বিবন্ধন)" />
          </button>
          <button
            type="button"
            onClick={() => { setMoleculeType('ethane'); setAngle(0); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              moleculeType === 'ethane'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <BilingualText en="Ethane (C-C Single Bond)" bn="ইথেন (C-C একক বন্ধন)" />
          </button>
        </div>

        {/* Energy Gauge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1">
            <Flame className={`h-4 w-4 ${isBroken ? 'text-rose-500 animate-pulse' : 'text-cyan-400'}`} />
            <span className="text-xs text-slate-300">
              <BilingualText en="Torsional Energy:" bn="টরশনাল শক্তি:" />
            </span>
            <span className={`font-mono text-xs font-bold ${isBroken ? 'text-rose-400' : 'text-cyan-300'}`}>
              {currentEnergy} kJ/mol
            </span>
          </div>

          <button
            type="button"
            onClick={() => setAngle(0)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
            title="Reset angle"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative flex-1 min-h-[360px]">
        <MolecularCanvas cameraPosition={[0, 2.5, 6]}>
          {/* C1 (Static at [-1, 0, 0]) */}
          <group position={[-1, 0, 0]}>
            <Sphere args={[0.45, 32, 32]}>
              <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.2} />
            </Sphere>
            {/* C1 Hydrogens */}
            <group position={[-0.8, 0.8, 0]}>
              <Sphere args={[0.26, 16, 16]}><meshStandardMaterial color="#ffffff" /></Sphere>
              <Cylinder args={[0.06, 0.06, 1.1, 16]} position={[0.4, -0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
                <meshStandardMaterial color="#64748b" />
              </Cylinder>
            </group>
            <group position={[-0.8, -0.8, 0]}>
              <Sphere args={[0.26, 16, 16]}><meshStandardMaterial color="#ffffff" /></Sphere>
              <Cylinder args={[0.06, 0.06, 1.1, 16]} position={[0.4, 0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <meshStandardMaterial color="#64748b" />
              </Cylinder>
            </group>

            {/* Static 2p orbital lobes for ethene */}
            {moleculeType === 'ethene' && (
              <group position={[0, 0, 0]}>
                <Sphere args={[0.28, 16, 16]} position={[0, 0.8, 0]} scale={[0.8, 1.6, 0.8]}>
                  <meshStandardMaterial color="#38bdf8" transparent opacity={0.45} />
                </Sphere>
                <Sphere args={[0.28, 16, 16]} position={[0, -0.8, 0]} scale={[0.8, 1.6, 0.8]}>
                  <meshStandardMaterial color="#0284c7" transparent opacity={0.45} />
                </Sphere>
              </group>
            )}
          </group>

          {/* Central C-C bond (sigma) */}
          <Cylinder args={[0.1, 0.1, 2, 16]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#64748b" roughness={0.3} metalness={0.2} />
          </Cylinder>

          {/* C2 (Rotating around X-axis at [1, 0, 0]) */}
          <group position={[1, 0, 0]} rotation={[rad, 0, 0]}>
            <Sphere args={[0.45, 32, 32]}>
              <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.2} />
            </Sphere>
            {/* C2 Hydrogens */}
            <group position={[0.8, 0.8, 0]}>
              <Sphere args={[0.26, 16, 16]}><meshStandardMaterial color="#ffffff" /></Sphere>
              <Cylinder args={[0.06, 0.06, 1.1, 16]} position={[-0.4, -0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <meshStandardMaterial color="#64748b" />
              </Cylinder>
            </group>
            <group position={[0.8, -0.8, 0]}>
              <Sphere args={[0.26, 16, 16]}><meshStandardMaterial color="#ffffff" /></Sphere>
              <Cylinder args={[0.06, 0.06, 1.1, 16]} position={[-0.4, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
                <meshStandardMaterial color="#64748b" />
              </Cylinder>
            </group>

            {/* Rotating 2p orbital lobes for ethene */}
            {moleculeType === 'ethene' && (
              <group position={[0, 0, 0]}>
                <Sphere args={[0.28, 16, 16]} position={[0, 0.8, 0]} scale={[0.8, 1.6, 0.8]}>
                  <meshStandardMaterial color={isBroken ? '#f43f5e' : '#38bdf8'} transparent opacity={isBroken ? 0.35 : 0.55} />
                </Sphere>
                <Sphere args={[0.28, 16, 16]} position={[0, -0.8, 0]} scale={[0.8, 1.6, 0.8]}>
                  <meshStandardMaterial color={isBroken ? '#e11d48' : '#0284c7'} transparent opacity={isBroken ? 0.35 : 0.55} />
                </Sphere>
              </group>
            )}
          </group>
        </MolecularCanvas>

        {/* Floating Overlap Status Pill */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-slate-700/80 bg-[#061320]/85 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            {isBroken ? (
              <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0" />
            ) : (
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            )}
            <div className="text-xs">
              <p className="font-bold text-white">
                {moleculeType === 'ethene'
                  ? isBroken
                    ? 'Pi-Bond Overlap Severed! Extremely High Energy'
                    : 'Stable Pi-Bond (Parallel 2p-2p Overlap)'
                  : 'Free Conformation Rotation (Low Barrier)'}
              </p>
              <p className="text-slate-400">
                {moleculeType === 'ethene'
                  ? `Overlap Efficiency: ${Math.round(overlap * 100)}% | Rotational Barrier: 260 kJ/mol`
                  : 'Ethane rotates smoothly between staggered and eclipsed conformations.'}
              </p>
            </div>
          </div>
          <span className="font-mono text-sm font-bold text-cyan-300">
            {angle}°
          </span>
        </div>
      </div>

      {/* Bottom Slider Control */}
      <div className="border-t border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
          <span><BilingualText en="Rotate Dihedral Angle:" bn="ডাইহেড্রাল কোণ ঘোরান:" /></span>
          <span className="font-mono text-cyan-400 font-bold">{angle}°</span>
        </div>
        <input
          type="range"
          min={0}
          max={180}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full accent-cyan-400 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
          <span>0° (Planar)</span>
          <span>90° (Zero Overlap / Max Energy)</span>
          <span>180° (Inverted)</span>
        </div>
      </div>
    </div>
  );
};

