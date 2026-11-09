import React, { useState, useEffect, useRef } from 'react';
import { MolecularCanvas } from './MolecularCanvas';
import { Sphere, Cylinder } from '@react-three/drei';
import { BilingualText } from '../BilingualText';
import { PiOverlapVisualizer } from './PiOverlapVisualizer';
import {
  Flame,
  RotateCcw,
  AlertTriangle,
  ShieldCheck,
  Play,
  Square,
  Sparkles as SparklesIcon,
  Layers,
  Zap,
} from 'lucide-react';

export const BondRotationSimulator: React.FC = () => {
  const [moleculeType, setMoleculeType] = useState<'ethene' | 'ethane'>('ethene');
  const [angle, setAngle] = useState<number>(0); // 0 to 180 degrees
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Visualization options
  const [showLines, setShowLines] = useState<boolean>(true);
  const [showCloud, setShowCloud] = useState<boolean>(true);
  const [showSigns, setShowSigns] = useState<boolean>(true);
  const [springBackOnRelease, setSpringBackOnRelease] = useState<boolean>(true);

  const rad = (angle * Math.PI) / 180;
  // Overlap factor: cos(angle) for double bond
  const overlap = Math.max(0, Math.cos(rad));
  // Energy barrier: up to 260 kJ/mol for ethene, 12 kJ/mol for ethane
  const maxBarrier = moleculeType === 'ethene' ? 260 : 12;
  const currentEnergy = Math.round(maxBarrier * Math.sin(rad) * Math.sin(rad));
  const isBroken = moleculeType === 'ethene' && angle >= 45 && angle <= 135;
  const isStrained = moleculeType === 'ethene' && angle > 20 && angle < 45;

  const animRef = useRef<number | null>(null);

  // Stop simulation on unmount or mode switch
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleModeSwitch = (mode: 'ethene' | 'ethane') => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsSimulating(false);
    setMoleculeType(mode);
    setAngle(0);
  };

  // Automated "Attempt Forced Rotation" Physics Simulation
  const handleToggleSimulation = () => {
    if (isSimulating) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      setIsSimulating(false);
      return;
    }

    setIsSimulating(true);
    let stage: 'twist' | 'pause' | 'springBack' = 'twist';
    let currentDeg = angle;
    let pauseStartTime = 0;
    let springTime = 0;
    let previousTimestamp: number | null = null;
    const initialReleaseAngle = 90;

    const loop = (timestamp: number) => {
      const elapsedSeconds = previousTimestamp === null ? 0 : (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      if (stage === 'twist') {
        currentDeg += 72 * elapsedSeconds;
        if (currentDeg >= 90) {
          currentDeg = 90;
          stage = 'pause';
          pauseStartTime = timestamp;
        }
        setAngle(Math.round(currentDeg));
        animRef.current = requestAnimationFrame(loop);
      } else if (stage === 'pause') {
        if (timestamp - pauseStartTime > 650) {
          stage = 'springBack';
          springTime = 0;
        }
        animRef.current = requestAnimationFrame(loop);
      } else if (stage === 'springBack') {
        springTime += elapsedSeconds * 2.7;
        // Damped harmonic oscillation back to 0 degrees: A * exp(-gamma * t) * cos(omega * t)
        const damping = Math.exp(-springTime * 3.2);
        const oscillation = Math.cos(springTime * 14);
        const newAngle = initialReleaseAngle * damping * oscillation;

        if (springTime > 1.4 || Math.abs(newAngle) < 0.5) {
          setAngle(0);
          setIsSimulating(false);
          return;
        }

        setAngle(Math.max(0, Math.round(newAngle)));
        animRef.current = requestAnimationFrame(loop);
      }
    };

    animRef.current = requestAnimationFrame(loop);
  };

  // Spring back when user releases mouse on slider
  const handleSliderRelease = () => {
    if (!springBackOnRelease || isSimulating || moleculeType !== 'ethene') return;
    if (angle === 0 || angle === 180) return;

    // Target is 0 if < 110, else 180
    const target = angle < 110 ? 0 : 180;
    let current = angle;
    let t = 0;
    let previousTimestamp: number | null = null;
    const startAngle = angle;

    const snap = (timestamp: number) => {
      if (previousTimestamp !== null) t += (timestamp - previousTimestamp) * 0.003;
      previousTimestamp = timestamp;
      const progress = 1 - Math.exp(-t * 4);
      current = startAngle + (target - startAngle) * progress;

      if (Math.abs(current - target) < 1 || t > 1.2) {
        setAngle(target);
        return;
      }

      setAngle(Math.round(current));
      animRef.current = requestAnimationFrame(snap);
    };

    animRef.current = requestAnimationFrame(snap);
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Top HUD Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[rgba(70,227,255,0.14)] bg-[#091b2e]/90 px-3 sm:px-5 py-2.5 sm:py-3 backdrop-blur-md">
        {/* Molecule Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleModeSwitch('ethene')}
            className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              moleculeType === 'ethene'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <BilingualText en="Ethene (C=C Double)" bn="ইথিন (C=C দ্বিবন্ধন)" />
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch('ethane')}
            className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border-0 ${
              moleculeType === 'ethane'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <BilingualText en="Ethane (C-C Single)" bn="ইথেন (C-C একক)" />
          </button>
        </div>

        {/* Action Controls & Energy Gauge */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          {moleculeType === 'ethene' && (
            <button
              type="button"
              onClick={handleToggleSimulation}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isSimulating
                  ? 'border-rose-500 bg-rose-500/20 text-rose-300 animate-pulse'
                  : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20'
              }`}
            >
              {isSimulating ? (
                <>
                  <Square className="h-3.5 w-3.5 fill-current" />
                  <BilingualText en="Stop Twist" bn="ঘূর্ণন থামান" />
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-current text-cyan-400" />
                  <BilingualText en="⚡ Attempt Twist" bn="⚡ ঘূর্ণন চেষ্টা" />
                </>
              )}
            </button>
          )}

          {/* Energy Gauge */}
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-2.5 sm:px-3 py-1">
            <Flame className={`h-4 w-4 shrink-0 ${isBroken ? 'text-rose-500 animate-pulse' : isStrained ? 'text-amber-400' : 'text-cyan-400'}`} />
            <span className="text-[11px] sm:text-xs text-slate-300">
              <BilingualText en="Barrier:" bn="বাধা:" />
            </span>
            <span className={`font-mono text-xs font-bold ${isBroken ? 'text-rose-400' : isStrained ? 'text-amber-300' : 'text-cyan-300'}`}>
              {currentEnergy} kJ/mol
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (animRef.current) cancelAnimationFrame(animRef.current);
              setIsSimulating(false);
              setAngle(0);
            }}
            className="grid h-8 w-8 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white cursor-pointer shrink-0"
            title="Reset angle to 0°"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Visualizer Feature Toggles Bar */}
      {moleculeType === 'ethene' && (
        <div className="flex flex-wrap items-center justify-between gap-2.5 bg-[#061423] px-3 sm:px-5 py-2 border-b border-[rgba(70,227,255,0.08)] text-[10px] sm:text-[11px] text-slate-400">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-cyan-300 transition-colors">
              <input
                type="checkbox"
                checked={showLines}
                onChange={(e) => setShowLines(e.target.checked)}
                className="accent-cyan-400 rounded cursor-pointer"
              />
              <Zap className="h-3 w-3 text-cyan-400" />
              <span><BilingualText en="Overlap Lines" bn="ওভারল্যাপ রেখা" /></span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-cyan-300 transition-colors">
              <input
                type="checkbox"
                checked={showCloud}
                onChange={(e) => setShowCloud(e.target.checked)}
                className="accent-cyan-400 rounded cursor-pointer"
              />
              <Layers className="h-3 w-3 text-cyan-400" />
              <span><BilingualText en="Electron Cloud" bn="ইলেকট্রন মেঘ" /></span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-cyan-300 transition-colors">
              <input
                type="checkbox"
                checked={showSigns}
                onChange={(e) => setShowSigns(e.target.checked)}
                className="accent-cyan-400 rounded cursor-pointer"
              />
              <SparklesIcon className="h-3 w-3 text-cyan-400" />
              <span><BilingualText en="Phase (+/−)" bn="দশা (+/−)" /></span>
            </label>
          </div>

          <label className="flex items-center gap-1.5 cursor-pointer hover:text-emerald-300 transition-colors">
            <input
              type="checkbox"
              checked={springBackOnRelease}
              onChange={(e) => setSpringBackOnRelease(e.target.checked)}
              className="accent-emerald-400 rounded cursor-pointer"
            />
            <span className="text-emerald-400 font-medium">
              <BilingualText en="Auto Spring-Back" bn="স্প্রিং রিকয়েল" />
            </span>
          </label>
        </div>
      )}

      {/* 3D Canvas Viewport */}
      <div className="relative flex-1 w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden">
        <MolecularCanvas cameraPosition={[0, 0.4, 4.4]} cameraTarget={[0, 0, 0]} frameloop={isSimulating ? 'always' : 'demand'}>
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
                {/* Top (+) lobe */}
                <Sphere args={[0.3, 24, 24]} position={[0, 0.85, 0]} scale={[0.85, 1.6, 0.85]}>
                  <meshStandardMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.48}
                    roughness={0.2}
                    emissive="#0284c7"
                    emissiveIntensity={0.2}
                  />
                </Sphere>
                {/* Bottom (-) lobe */}
                <Sphere args={[0.3, 24, 24]} position={[0, -0.85, 0]} scale={[0.85, 1.6, 0.85]}>
                  <meshStandardMaterial
                    color="#0284c7"
                    transparent
                    opacity={0.48}
                    roughness={0.2}
                    emissive="#0369a1"
                    emissiveIntensity={0.2}
                  />
                </Sphere>
              </group>
            )}
          </group>

          {/* Central C-C bond (sigma) */}
          <Cylinder args={[0.1, 0.1, 2, 24]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
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
                {/* Top lobe */}
                <Sphere args={[0.3, 24, 24]} position={[0, 0.85, 0]} scale={[0.85, 1.6, 0.85]}>
                  <meshStandardMaterial
                    color={isBroken ? '#f43f5e' : isStrained ? '#fbbf24' : '#38bdf8'}
                    transparent
                    opacity={isBroken ? 0.38 : 0.55}
                    emissive={isBroken ? '#e11d48' : '#0284c7'}
                    emissiveIntensity={isBroken ? 0.4 : 0.2}
                  />
                </Sphere>
                {/* Bottom lobe */}
                <Sphere args={[0.3, 24, 24]} position={[0, -0.85, 0]} scale={[0.85, 1.6, 0.85]}>
                  <meshStandardMaterial
                    color={isBroken ? '#e11d48' : isStrained ? '#f97316' : '#0284c7'}
                    transparent
                    opacity={isBroken ? 0.38 : 0.55}
                    emissive={isBroken ? '#be123c' : '#0369a1'}
                    emissiveIntensity={isBroken ? 0.4 : 0.2}
                  />
                </Sphere>
              </group>
            )}
          </group>

          {/* 3D IMAGINARY P-P OVERLAPPING LINES & BREAK ANIMATOR */}
          {moleculeType === 'ethene' && showLines && (
            <PiOverlapVisualizer
              angle={angle}
              visible={showLines}
              showCloud={showCloud}
              showSigns={showSigns}
              showPulse={isSimulating && !isBroken}
            />
          )}
        </MolecularCanvas>

        {/* Floating Overlap Status Pill */}
        <div className="pointer-events-none absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2.5 rounded-xl border border-slate-700/80 bg-[#061320]/85 p-2.5 sm:px-4 sm:py-3 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            {isBroken ? (
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400 shrink-0 animate-bounce" />
            ) : isStrained ? (
              <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
            ) : (
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 shrink-0" />
            )}
            <div className="text-[11px] sm:text-xs min-w-0">
              <p className="font-bold text-white truncate sm:whitespace-normal">
                {moleculeType === 'ethene'
                  ? isBroken
                    ? '⚡ Pi-Bond Overlap Severed! Extremely High Energy Barrier'
                    : isStrained
                    ? '⚠️ Severe Torsional Strain: Imaginary p-p Overlap Stretched'
                    : '✓ Stable Pi-Bond: Maximum Parallel 2p–2p Lateral Overlap'
                  : '✓ Free Conformation Rotation: Low Barrier (~12 kJ/mol)'}
              </p>
              <p className="text-slate-400 text-[10px] sm:text-xs truncate sm:whitespace-normal">
                {moleculeType === 'ethene'
                  ? `Overlap Efficiency: ${Math.round(overlap * 100)}% | Rotational Barrier: 260 kJ/mol (63 kcal/mol)`
                  : 'Ethane rotates smoothly between staggered and eclipsed conformations at room temperature.'}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="font-mono text-xs sm:text-sm font-black text-cyan-300">
              {angle}°
            </span>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono">
              {angle === 0 ? 'Planar' : angle === 90 ? 'Orthogonal' : angle === 180 ? 'Inverted' : 'Rotated'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Slider & Pedagogical Summary */}
      <div className="border-t border-[rgba(70,227,255,0.14)] bg-[#091b2e] p-3 sm:p-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
          <span className="truncate pr-2"><BilingualText en="Rotate Dihedral Angle:" bn="ডাইহেড্রাল কোণ ঘোরান:" /></span>
          <span className="font-mono text-cyan-400 font-bold shrink-0">{angle}°</span>
        </div>
        <input
          type="range"
          min={0}
          max={180}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          onMouseUp={handleSliderRelease}
          onTouchEnd={handleSliderRelease}
          className="w-full accent-cyan-400 cursor-pointer"
        />
        <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-400 font-mono mt-1">
          <span>0° (Planar, 100%)</span>
          <span className="text-rose-400 font-bold">90° (Zero Overlap)</span>
          <span>180° (Inverted)</span>
        </div>

        {/* Callout Card Explaining the Physical Principle */}
        <div className="mt-2.5 sm:mt-3.5 rounded-xl border border-cyan-500/20 bg-slate-900/70 p-2.5 sm:p-3 text-[11px] sm:text-xs leading-relaxed text-slate-300">
          <p className="font-bold text-cyan-300 mb-0.5 sm:mb-1">
            <BilingualText
              en="Why do CIS and TRANS isomers exist as distinct compounds?"
              bn="কেন Cis এবং Trans আইসোমারগুলি পৃথক যৌগ হিসেবে বিরাজ করে?"
            />
          </p>
          <p className="text-slate-400 leading-relaxed">
            <BilingualText
              en="A π-bond is formed strictly by parallel, sideways overlap of unhybridized 2p orbitals (overlap integral S ∝ cos θ). Twisting by 90° breaks this overlap entirely, costing ~260 kJ/mol (63 kcal/mol). Since ambient thermal energy at room temperature is only ~2.5 kJ/mol, rotation is completely forbidden, permanently locking the stereochemistry!"
              bn="পাই (π) বন্ধন গঠন হয় অসংকরিত ২p কক্ষকগুলির পারস্পরিক সমান্তরাল পাশাপাশি (sideways) ওভারল্যাপের মাধ্যমে (S ∝ cos θ)। ৯০° কোণে ঘোরালে এই ওভারল্যাপ সম্পূর্ণ বিনষ্ট হয়, যার জন্য প্রায় ২৬০ kJ/mol শক্তির প্রয়োজন। সাধারণ ঘরের তাপমাত্রায় উপলব্ধ তাপীয় শক্তি মাত্র ২.৫ kJ/mol, তাই বন্ধনটি কখনো নিজে থেকে ঘুরতে পারে না এবং Cis ও Trans আইসোমারগুলি স্থায়ীভাবে আলাদা থাকে।"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
