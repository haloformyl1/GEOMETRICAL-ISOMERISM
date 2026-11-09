import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { AppCanvas as Canvas } from '../ui/AppCanvas';
import { Sphere, Cylinder, Cone, OrbitControls, Billboard, Text, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import { BilingualText } from '../BilingualText';
import { RefreshCw, Zap, Compass } from 'lucide-react';

// Typographic Subscript Label for CH3 to prevent missing font glyph "tofu" [?]
const MethylLabel: React.FC<{ position?: [number, number, number] }> = ({
  position = [0, 0.48, 0],
}) => (
  <Billboard position={position}>
    <group position={[-0.03, 0, 0]}>
      <Text
        fontSize={0.24}
        color="#7dd3fc"
        anchorX="right"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#040d1a"
      >
        CH
      </Text>
      <Text
        fontSize={0.16}
        color="#7dd3fc"
        anchorX="left"
        anchorY="middle"
        position={[0.02, -0.06, 0]}
        outlineWidth={0.015}
        outlineColor="#040d1a"
      >
        3
      </Text>
    </group>
  </Billboard>
);

interface RotatingMoleculeProps {
  isCis: boolean;
  animated: boolean;
  showOrbitals: boolean;
  showDipole: boolean;
}

const RotatingMolecule: React.FC<RotatingMoleculeProps> = ({
  isCis,
  animated,
  showOrbitals,
  showDipole,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const c2GroupRef = useRef<THREE.Group>(null);
  const currentAngle = useRef<number>(isCis ? 0 : Math.PI);
  const { size } = useThree();
  const compact = size.width < 480 || size.width / Math.max(size.height, 1) < 0.95;

  useFrame((state, delta) => {
    // 1. Continuous smooth orbital tumbling & gentle levitation (Solid-State Chemistry style)
    if (groupRef.current && animated) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.22;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.14;
      // Gentle floating bob
      groupRef.current.position.y = (compact ? 0.22 : 0.32) + Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
    }

    // 2. Physics-damped rotation of C2 substituents around the C=C bond axis
    const targetAngle = isCis ? 0 : Math.PI;
    if (c2GroupRef.current) {
      currentAngle.current = THREE.MathUtils.damp(currentAngle.current, targetAngle, 7.5, delta);
      c2GroupRef.current.rotation.x = currentAngle.current;
    }
  });

  // Calculate dipole visibility factor (1 for Cis, 0 for Trans)
  const dipoleFactor = Math.max(0, Math.cos(currentAngle.current / 2));

  // Overlap efficiency between p-orbitals
  const overlapCos = Math.max(0, Math.cos(currentAngle.current));

  return (
    <group
      ref={groupRef}
      position={[0, compact ? 0.22 : 0.32, 0]}
      scale={compact ? 0.95 : 1.15}
    >
      {/* ────────────────── C1 ATOM [-0.72, 0, 0] ────────────────── */}
      <group position={[-0.72, 0, 0]}>
        <Sphere args={[0.34, 32, 32]}>
          <meshPhysicalMaterial
            color="#1e293b"
            emissive="#0284c7"
            emissiveIntensity={0.22}
            metalness={0.25}
            roughness={0.2}
            clearcoat={0.95}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        <Billboard position={[0, 0.45, 0]}>
          <Text
            fontSize={0.18}
            color="#38bdf8"
            outlineWidth={0.02}
            outlineColor="#040d1a"
          >
            C1
          </Text>
        </Billboard>
      </group>

      {/* ────────────────── C2 ATOM [0.72, 0, 0] ────────────────── */}
      <group position={[0.72, 0, 0]}>
        <Sphere args={[0.34, 32, 32]}>
          <meshPhysicalMaterial
            color="#1e293b"
            emissive="#0284c7"
            emissiveIntensity={0.22}
            metalness={0.25}
            roughness={0.2}
            clearcoat={0.95}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        <Billboard position={[0, 0.45, 0]}>
          <Text
            fontSize={0.18}
            color="#38bdf8"
            outlineWidth={0.02}
            outlineColor="#040d1a"
          >
            C2
          </Text>
        </Billboard>
      </group>

      {/* ──────────── C=C DOUBLE BOND (Parallel cylinders) ──────────── */}
      {/* Upper/Front component */}
      <group position={[0, 0, 0.08]} rotation={[0, 0, Math.PI / 2]}>
        <Cylinder args={[0.052, 0.052, 1.44, 20]}>
          <meshPhysicalMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            metalness={0.3}
            roughness={0.18}
            clearcoat={0.8}
          />
        </Cylinder>
      </group>
      {/* Lower/Back component */}
      <group position={[0, 0, -0.08]} rotation={[0, 0, Math.PI / 2]}>
        <Cylinder args={[0.052, 0.052, 1.44, 20]}>
          <meshPhysicalMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            metalness={0.3}
            roughness={0.18}
            clearcoat={0.8}
          />
        </Cylinder>
      </group>

      {/* ──────────── C1 SUBSTITUENTS (Left side - Static) ──────────── */}
      {/* C1 - Methyl group (Top left) */}
      <group position={[-1.68, 0.92, 0]}>
        <Sphere args={[0.34, 32, 32]}>
          <meshPhysicalMaterial
            color="#38bdf8"
            emissive="#0369a1"
            emissiveIntensity={0.25}
            metalness={0.15}
            roughness={0.18}
            transmission={0.18}
            thickness={0.7}
            ior={1.45}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        <MethylLabel position={[0, 0.48, 0]} />
      </group>
      {/* Single bond C1 - Methyl */}
      <group position={[-1.2, 0.46, 0]} rotation={[0, 0, 0.806]}>
        <Cylinder args={[0.055, 0.055, 1.33, 16]}>
          <meshPhysicalMaterial
            color="#64748b"
            emissive="#1e293b"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.25}
            clearcoat={0.6}
          />
        </Cylinder>
      </group>

      {/* C1 - Hydrogen (Bottom left) */}
      <group position={[-1.68, -0.92, 0]}>
        <Sphere args={[0.22, 32, 32]}>
          <meshPhysicalMaterial
            color="#f8fafc"
            emissive="#94a3b8"
            emissiveIntensity={0.18}
            metalness={0.1}
            roughness={0.18}
            clearcoat={0.9}
          />
        </Sphere>
        <Billboard position={[0, -0.38, 0]}>
          <Text
            fontSize={0.22}
            color="#cbd5e1"
            outlineWidth={0.02}
            outlineColor="#040d1a"
          >
            H
          </Text>
        </Billboard>
      </group>
      {/* Single bond C1 - Hydrogen */}
      <group position={[-1.2, -0.46, 0]} rotation={[0, 0, -0.806]}>
        <Cylinder args={[0.05, 0.05, 1.33, 16]}>
          <meshPhysicalMaterial
            color="#64748b"
            emissive="#1e293b"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.25}
            clearcoat={0.6}
          />
        </Cylinder>
      </group>

      {/* ───── C2 SUBSTITUENTS (Right side - Dynamically rotating group) ───── */}
      <group ref={c2GroupRef} position={[0.72, 0, 0]}>
        {/* Relative Methyl substituent */}
        <group position={[0.96, 0.92, 0]}>
          <Sphere args={[0.34, 32, 32]}>
            <meshPhysicalMaterial
              color="#38bdf8"
              emissive="#0369a1"
              emissiveIntensity={0.25}
              metalness={0.15}
              roughness={0.18}
              transmission={0.18}
              thickness={0.7}
              ior={1.45}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
            />
          </Sphere>
          <MethylLabel position={[0, 0.48, 0]} />
        </group>
        {/* Single bond C2 - Methyl */}
        <group position={[0.48, 0.46, 0]} rotation={[0, 0, -0.806]}>
          <Cylinder args={[0.055, 0.055, 1.33, 16]}>
            <meshPhysicalMaterial
              color="#64748b"
              emissive="#1e293b"
              emissiveIntensity={0.2}
              metalness={0.3}
              roughness={0.25}
              clearcoat={0.6}
            />
          </Cylinder>
        </group>

        {/* Relative Hydrogen substituent */}
        <group position={[0.96, -0.92, 0]}>
          <Sphere args={[0.22, 32, 32]}>
            <meshPhysicalMaterial
              color="#f8fafc"
              emissive="#94a3b8"
              emissiveIntensity={0.18}
              metalness={0.1}
              roughness={0.18}
              clearcoat={0.9}
            />
          </Sphere>
          <Billboard position={[0, -0.38, 0]}>
            <Text
              fontSize={0.22}
              color="#cbd5e1"
              outlineWidth={0.02}
              outlineColor="#040d1a"
            >
              H
            </Text>
          </Billboard>
        </group>
        {/* Single bond C2 - Hydrogen */}
        <group position={[0.48, -0.46, 0]} rotation={[0, 0, 0.806]}>
          <Cylinder args={[0.05, 0.05, 1.33, 16]}>
            <meshPhysicalMaterial
              color="#64748b"
              emissive="#1e293b"
              emissiveIntensity={0.2}
              metalness={0.3}
              roughness={0.25}
              clearcoat={0.6}
            />
          </Cylinder>
        </group>
      </group>

      {/* ──────────── 3D DIPOLE MOMENT VECTOR (Cis polar vs Trans cancelled) ──────────── */}
      {showDipole && (
        <group position={[0, 0.1, 0]} scale={[dipoleFactor, dipoleFactor, dipoleFactor]}>
          {dipoleFactor > 0.08 && (
            <>
              {/* Golden vector shaft */}
              <group position={[0, 0.75, 0]}>
                <Cylinder args={[0.038, 0.038, 0.75, 16]}>
                  <meshStandardMaterial
                    color="#f59e0b"
                    emissive="#d97706"
                    emissiveIntensity={0.8}
                    roughness={0.2}
                  />
                </Cylinder>
              </group>
              {/* Golden vector arrowhead */}
              <group position={[0, 1.25, 0]}>
                <Cone args={[0.11, 0.28, 16]}>
                  <meshStandardMaterial
                    color="#fbbf24"
                    emissive="#f59e0b"
                    emissiveIntensity={1.0}
                    roughness={0.2}
                  />
                </Cone>
              </group>
              {/* Billboard text label */}
              <Billboard position={[0, 1.58, 0]}>
                <Text fontSize={0.25} color="#fbbf24">
                  μ = 0.33 D
                </Text>
              </Billboard>
            </>
          )}
        </group>
      )}

      {/* ──────────── RESTRICTED ROTATION π-ORBITALS ──────────── */}
      {showOrbitals && (
        <group>
          {/* C1 2py upper lobe */}
          <Sphere args={[0.26, 24, 24]} position={[-0.72, 0.72, 0]} scale={[0.8, 1.4, 0.8]}>
            <meshPhysicalMaterial
              color="#22d3ee"
              emissive="#0891b2"
              emissiveIntensity={0.35}
              transparent
              opacity={0.42}
              roughness={0.2}
              transmission={0.3}
            />
          </Sphere>
          {/* C1 2py lower lobe */}
          <Sphere args={[0.26, 24, 24]} position={[-0.72, -0.72, 0]} scale={[0.8, 1.4, 0.8]}>
            <meshPhysicalMaterial
              color="#0284c7"
              emissive="#0369a1"
              emissiveIntensity={0.35}
              transparent
              opacity={0.42}
              roughness={0.2}
              transmission={0.3}
            />
          </Sphere>

          {/* C2 2py upper lobe */}
          <Sphere
            args={[0.26, 24, 24]}
            position={[
              0.72,
              0.72 * Math.cos(currentAngle.current),
              0.72 * Math.sin(currentAngle.current),
            ]}
            scale={[0.8, 1.4, 0.8]}
          >
            <meshPhysicalMaterial
              color="#22d3ee"
              emissive="#0891b2"
              emissiveIntensity={0.35}
              transparent
              opacity={0.42 * overlapCos}
              roughness={0.2}
              transmission={0.3}
            />
          </Sphere>
          {/* C2 2py lower lobe */}
          <Sphere
            args={[0.26, 24, 24]}
            position={[
              0.72,
              -0.72 * Math.cos(currentAngle.current),
              -0.72 * Math.sin(currentAngle.current),
            ]}
            scale={[0.8, 1.4, 0.8]}
          >
            <meshPhysicalMaterial
              color="#0284c7"
              emissive="#0369a1"
              emissiveIntensity={0.35}
              transparent
              opacity={0.42 * overlapCos}
              roughness={0.2}
              transmission={0.3}
            />
          </Sphere>

          {/* Parallel overlap connection lines */}
          {overlapCos > 0.2 && (
            <>
              <Line
                points={[
                  [-0.72, 0.72, 0],
                  [0.72, 0.72 * Math.cos(currentAngle.current), 0.72 * Math.sin(currentAngle.current)],
                ]}
                color="#38bdf8"
                lineWidth={2}
                transparent
                opacity={0.6 * overlapCos}
                dashed
                dashScale={12}
              />
              <Line
                points={[
                  [-0.72, -0.72, 0],
                  [0.72, -0.72 * Math.cos(currentAngle.current), -0.72 * Math.sin(currentAngle.current)],
                ]}
                color="#38bdf8"
                lineWidth={2}
                transparent
                opacity={0.6 * overlapCos}
                dashed
                dashScale={12}
              />
            </>
          )}
        </group>
      )}
    </group>
  );
};

const ResponsiveHeroCamera: React.FC = () => {
  const { camera, size, invalidate } = useThree();

  useEffect(() => {
    const compact = size.width < 480 || size.width / Math.max(size.height, 1) < 0.95;
    const position: [number, number, number] = compact ? [0, 0.35, 6.2] : [0, 0.45, 5.0];

    camera.position.set(...position);
    camera.zoom = 1;
    camera.lookAt(0, 0.15, 0);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = compact ? 42 : 36;
      camera.updateProjectionMatrix();
    }
    invalidate();
  }, [camera, invalidate, size.height, size.width]);

  return null;
};

export const HeroMoleculeAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useStore((state) => state.reducedMotion);
  const [inView, setInView] = useState(true);
  const [isCis, setIsCis] = useState(true);
  const [showOrbitals, setShowOrbitals] = useState(false);
  const [showDipole, setShowDipole] = useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: '120px',
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const animated = inView && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.12),transparent_48%)]"
      role="img"
      aria-label="Animated Geometrical Isomerism But-2-ene Transformation"
    >
      <Canvas
        showCameraControls={false}
        camera={{ position: [0, 0.45, 5.0], fov: 36 }}
        dpr={[1, typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 1.6]}
        frameloop={animated ? 'always' : 'demand'}
      >
        <ResponsiveHeroCamera />
        <ambientLight intensity={0.78} />
        <pointLight position={[10, 10, 10]} intensity={1.35} color="#e0f2fe" />
        <pointLight position={[-10, -8, -10]} intensity={0.65} color="#2dd4bf" />
        <pointLight position={[0, -5, 6]} intensity={0.4} color="#38bdf8" />
        <RotatingMolecule
          isCis={isCis}
          animated={animated}
          showOrbitals={showOrbitals}
          showDipole={showDipole}
        />
        <OrbitControls
          target={[0, 0.15, 0]}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      {/* ────────────────── TOP-RIGHT INTERACTIVE CONTROLS ────────────────── */}
      <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 flex flex-wrap items-center justify-end gap-1.5 sm:gap-2">
        {/* Toggle Orbitals */}
        <button
          type="button"
          onClick={() => setShowOrbitals(!showOrbitals)}
          className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer ${
            showOrbitals
              ? 'border-cyan-400 bg-cyan-500/25 text-white shadow-[0_0_16px_rgba(6,182,212,0.4)]'
              : 'border-[rgba(165,214,255,0.18)] bg-[#07192b]/80 text-[#a9bfd2] hover:bg-cyan-500/15 hover:text-cyan-200'
          }`}
          title="Toggle π-Orbital overlap visualization"
        >
          <Zap className="h-3.5 w-3.5 text-cyan-400" />
          <span className="hidden sm:inline">π-Orbitals</span>
        </button>

        {/* Toggle Dipole */}
        <button
          type="button"
          onClick={() => setShowDipole(!showDipole)}
          className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer ${
            showDipole
              ? 'border-amber-400 bg-amber-500/25 text-white shadow-[0_0_16px_rgba(245,158,11,0.4)]'
              : 'border-[rgba(165,214,255,0.18)] bg-[#07192b]/80 text-[#a9bfd2] hover:bg-amber-500/15 hover:text-amber-200'
          }`}
          title="Toggle Net Dipole Moment Vector"
        >
          <Compass className="h-3.5 w-3.5 text-amber-400" />
          <span className="hidden sm:inline">Dipole (μ)</span>
        </button>

        {/* Primary Isomer Morph Button */}
        <button
          type="button"
          onClick={() => setIsCis(!isCis)}
          className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-cyan-400/40 bg-[#06182c]/85 px-3 py-1 sm:px-4 sm:py-2 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500/25 hover:text-white transition-all cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5 text-cyan-300 animate-spin-slow" />
          <span className="hidden sm:inline">{isCis ? 'Switch to Trans-Isomer' : 'Switch to Cis-Isomer'}</span>
          <span className="sm:hidden">{isCis ? 'To Trans' : 'To Cis'}</span>
        </button>
      </div>

      {/* ────────────────── BOTTOM FLOATING INFO CARD ────────────────── */}
      <div className="pointer-events-none absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 rounded-2xl border border-[rgba(165,214,255,0.18)] bg-[#07192b]/92 p-2.5 sm:p-4 text-xs backdrop-blur-md shadow-[0_16px_36px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                isCis
                  ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                  : 'bg-purple-400 shadow-[0_0_8px_#c084fc]'
              }`}
            />
            <p className="font-extrabold text-[#edf8ff] text-xs sm:text-sm tracking-tight">
              {isCis ? 'Cis-But-2-ene (Z-Isomer)' : 'Trans-But-2-ene (E-Isomer)'}
            </p>
            <span className="rounded bg-cyan-950/80 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase text-cyan-300 border border-cyan-500/30">
              {isCis ? 'Z-Alkene' : 'E-Alkene'}
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] leading-relaxed text-[#c5d8e4] max-w-[50ch] line-clamp-2 sm:line-clamp-none">
            {isCis ? (
              <BilingualText
                en="Bulky methyl groups (-CH₃) lie on the same side of the C=C double bond, generating a net dipole moment and higher boiling point."
                bn="উভয় মিথাইল গ্রুপ (-CH₃) দ্বিবন্ধনের একই পাশে অবস্থিত হওয়ায় নেট ডাইপোল মোমেন্ট সৃষ্টি হয় ও স্ফুটনাঙ্ক বৃদ্ধি পায়।"
              />
            ) : (
              <BilingualText
                en="Bulky methyl groups lie diagonally opposite across the C=C bond, causing bond dipole cancellation and tighter crystal packing."
                bn="মিথাইল গ্রুপ দুটি বিপরীত পাশে থাকায় বন্ড ডাইপোল মোমেন্ট বাতিল হয় এবং স্ফটিক ল্যাটিসে সুষম প্যাকিংয়ের ফলে গলনাঙ্ক বৃদ্ধি পায়।"
              />
            )}
          </div>
        </div>

        {/* Key Chemical Metrics Badge */}
        <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-[rgba(165,214,255,0.15)] pt-1.5 sm:pt-0 sm:pl-4 font-mono text-[10px] sm:text-[11px] w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-left sm:text-right flex sm:flex-col gap-3 sm:gap-0">
            <p className="text-[#a9bfd2]">
              Dipole:{' '}
              <span className={`font-bold ${isCis ? 'text-amber-300' : 'text-slate-400'}`}>
                {isCis ? '0.33 D' : '0.00 D'}
              </span>
            </p>
            <p className="text-[#a9bfd2]">
              b.p.:{' '}
              <span className="font-bold text-cyan-300">
                {isCis ? '+3.7 °C' : '+0.9 °C'}
              </span>
            </p>
            <p className="text-[#a9bfd2]">
              m.p.:{' '}
              <span className="font-bold text-emerald-300">
                {isCis ? '-138.9 °C' : '-105.6 °C'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
