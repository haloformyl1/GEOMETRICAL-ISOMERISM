import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MolecularCanvas } from './MolecularCanvas';
import { Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';
import { BilingualText } from '../BilingualText';
import { RefreshCw } from 'lucide-react';

const RotatingMolecule = ({ isCis }: { isCis: boolean }) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.35;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  // Target positions for C2 substituents:
  // in cis: methyl up [1.6, 1.1, 0], H down [1.6, -1.1, 0]
  // in trans: methyl down [1.6, -1.1, 0], H up [1.6, 1.1, 0]
  const pMethyl: [number, number, number] = isCis ? [1.6, 1.1, 0] : [1.6, -1.1, 0];
  const pHydrogen: [number, number, number] = isCis ? [1.6, -1.1, 0] : [1.6, 1.1, 0];

  return (
    <group ref={group} scale={1.25}>
      {/* C1 [-0.75, 0, 0] */}
      <group position={[-0.75, 0, 0]}>
        <Sphere args={[0.42, 32, 32]}>
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.2} emissive="#0284c7" emissiveIntensity={0.2} />
        </Sphere>
      </group>

      {/* C2 [0.75, 0, 0] */}
      <group position={[0.75, 0, 0]}>
        <Sphere args={[0.42, 32, 32]}>
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.2} emissive="#0284c7" emissiveIntensity={0.2} />
        </Sphere>
      </group>

      {/* C=C Double Bond */}
      <group position={[0, 0, 0.08]} rotation={[0, 0, Math.PI / 2]}>
        <Cylinder args={[0.065, 0.065, 1.5, 16]}>
          <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.2} emissive="#0369a1" emissiveIntensity={0.3} />
        </Cylinder>
      </group>
      <group position={[0, 0, -0.08]} rotation={[0, 0, Math.PI / 2]}>
        <Cylinder args={[0.065, 0.065, 1.5, 16]}>
          <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.2} emissive="#0369a1" emissiveIntensity={0.3} />
        </Cylinder>
      </group>

      {/* C1 Substituents (Static) */}
      {/* Methyl 1 [-1.6, 1.1, 0] */}
      <group position={[-1.6, 1.1, 0]}>
        <Sphere args={[0.38, 32, 32]}>
          <meshStandardMaterial color="#0284c7" roughness={0.25} metalness={0.2} />
        </Sphere>
        <Text position={[0, 0.5, 0]} fontSize={0.26} color="#38bdf8">CH3</Text>
      </group>
      {/* Single bond C1-Methyl */}
      <Cylinder args={[0.07, 0.07, 1.4, 16]} position={[-1.17, 0.55, 0]} rotation={[0, 0, -Math.PI / 3.4]}>
        <meshStandardMaterial color="#64748b" />
      </Cylinder>

      {/* Hydrogen 1 [-1.6, -1.1, 0] */}
      <group position={[-1.6, -1.1, 0]}>
        <Sphere args={[0.26, 32, 32]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </Sphere>
        <Text position={[0, -0.4, 0]} fontSize={0.24} color="#94a3b8">H</Text>
      </group>
      {/* Single bond C1-H */}
      <Cylinder args={[0.07, 0.07, 1.4, 16]} position={[-1.17, -0.55, 0]} rotation={[0, 0, Math.PI / 3.4]}>
        <meshStandardMaterial color="#64748b" />
      </Cylinder>

      {/* C2 Substituents (Dynamic according to isCis) */}
      {/* Methyl 2 */}
      <group position={pMethyl}>
        <Sphere args={[0.38, 32, 32]}>
          <meshStandardMaterial color="#0284c7" roughness={0.25} metalness={0.2} />
        </Sphere>
        <Text position={[0, isCis ? 0.5 : -0.5, 0]} fontSize={0.26} color="#38bdf8">CH3</Text>
      </group>
      <Cylinder
        args={[0.07, 0.07, 1.4, 16]}
        position={[1.17, isCis ? 0.55 : -0.55, 0]}
        rotation={[0, 0, isCis ? Math.PI / 3.4 : -Math.PI / 3.4]}
      >
        <meshStandardMaterial color="#64748b" />
      </Cylinder>

      {/* Hydrogen 2 */}
      <group position={pHydrogen}>
        <Sphere args={[0.26, 32, 32]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </Sphere>
        <Text position={[0, isCis ? -0.4 : 0.4, 0]} fontSize={0.24} color="#94a3b8">H</Text>
      </group>
      <Cylinder
        args={[0.07, 0.07, 1.4, 16]}
        position={[1.17, isCis ? -0.55 : 0.55, 0]}
        rotation={[0, 0, isCis ? -Math.PI / 3.4 : Math.PI / 3.4]}
      >
        <meshStandardMaterial color="#64748b" />
      </Cylinder>
    </group>
  );
};

export const HeroMoleculeAnimation: React.FC = () => {
  const [isCis, setIsCis] = useState(true);

  return (
    <div className="relative h-full w-full min-h-[380px]">
      <MolecularCanvas cameraPosition={[0, 1.5, 5.2]}>
        <RotatingMolecule isCis={isCis} />
      </MolecularCanvas>

      {/* Interactive Morph Pill Overlay */}
      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          onClick={() => setIsCis(!isCis)}
          className="flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-[#06182c]/85 px-4 py-2 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500/20 hover:text-white transition-all cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" />
          <span>
            {isCis ? 'Switch to Trans-But-2-ene' : 'Switch to Cis-But-2-ene'}
          </span>
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-4 inset-x-4 flex items-center justify-between rounded-xl border border-cyan-500/20 bg-[#07192b]/85 px-4 py-3 backdrop-blur-md">
        <div>
          <p className="text-sm font-extrabold text-cyan-200">
            {isCis ? 'Cis-But-2-ene (Z-Isomer)' : 'Trans-But-2-ene (E-Isomer)'}
          </p>
          <p className="text-xs text-slate-300">
            {isCis
              ? 'Both bulky methyl groups (-CH3) lie on the same side of the double bond.'
              : 'Methyl groups lie on opposite sides, minimizing steric congestion.'}
          </p>
        </div>
        <div className="text-right font-mono text-xs text-cyan-400">
          <p>μ = {isCis ? '0.33 D' : '0.00 D'}</p>
          <p>b.p. = {isCis ? '+3.7°C' : '+0.9°C'}</p>
        </div>
      </div>
    </div>
  );
};

