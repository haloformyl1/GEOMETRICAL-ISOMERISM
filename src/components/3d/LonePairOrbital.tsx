import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';

interface LonePairOrbitalProps {
  position: [number, number, number]; // Center of the Nitrogen atom
  direction: [number, number, number]; // Normalized unit vector pointing along the sp2 lone pair axis
  normal?: [number, number, number]; // Plane normal vector (for electron dots offset)
  atomLabel?: string;
  showLobe?: boolean;
  showDots?: boolean;
  showLabel?: boolean;
  showCipBadge?: boolean;
  cipPriority?: number;
  color?: string;
  emissiveColor?: string;
}

export const LonePairOrbital: React.FC<LonePairOrbitalProps> = ({
  position,
  direction,
  normal = [0, 0, 1],
  atomLabel = 'N',
  showLobe = true,
  showDots = true,
  showLabel = true,
  showCipBadge = true,
  cipPriority = 2,
  color = '#f59e0b',
  emissiveColor = '#d97706',
}) => {
  const dotsGroupRef = useRef<THREE.Group>(null);
  const lobeRef = useRef<THREE.Mesh>(null);

  // Compute rotation quaternion to align the lobe along the direction vector
  const lobeTransform = React.useMemo(() => {
    const dir = new THREE.Vector3(...direction).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const quat = new THREE.Quaternion().setFromUnitVectors(up, dir);

    // Center of the lobe is placed ~0.72 units out from the nucleus
    const lobeCenter = new THREE.Vector3(...position).add(dir.clone().multiplyScalar(0.72));

    // Perpendicular vector for the two electron dots
    const normVec = new THREE.Vector3(...normal).normalize();
    let perp = new THREE.Vector3().crossVectors(dir, normVec).normalize();
    if (perp.lengthSq() < 0.001) {
      perp = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(1, 0, 0)).normalize();
    }

    // Positions for the paired electron dots inside the lobe (~0.85 units from nucleus)
    const dotsCenter = new THREE.Vector3(...position).add(dir.clone().multiplyScalar(0.85));
    const dot1 = dotsCenter.clone().add(perp.clone().multiplyScalar(0.12));
    const dot2 = dotsCenter.clone().add(perp.clone().multiplyScalar(-0.12));

    // Label position placed beyond the tip of the lobe
    const labelPos = new THREE.Vector3(...position).add(dir.clone().multiplyScalar(1.4));

    return { quat, lobeCenter, dot1, dot2, labelPos, dir };
  }, [position, direction, normal]);

  // Subtle breathing animation for electron cloud
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (lobeRef.current) {
      const pulse = 1 + Math.sin(t * 3.5) * 0.04;
      lobeRef.current.scale.set(0.38 * pulse, 0.68 * pulse, 0.38 * pulse);
    }
    if (dotsGroupRef.current) {
      const dotPulse = 1 + Math.sin(t * 5) * 0.08;
      dotsGroupRef.current.scale.set(dotPulse, dotPulse, dotPulse);
    }
  });

  return (
    <group name={`lone-pair-${atomLabel}`}>
      {/* 1. LONE PAIR SP2 ORBITAL LOBE (Teardrop / Pear shaped ellipsoid) */}
      {showLobe && (
        <mesh
          ref={lobeRef}
          position={lobeTransform.lobeCenter}
          quaternion={lobeTransform.quat}
        >
          {/* Sphere geometry scaled along Y to form the directional teardrop lobe */}
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={emissiveColor}
            emissiveIntensity={0.5}
            transparent
            opacity={0.52}
            roughness={0.2}
            metalness={0.1}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 2. PAIRED ELECTRON DOTS (e- e-) */}
      {showDots && (
        <group ref={dotsGroupRef}>
          {/* Electron 1 */}
          <Sphere position={[lobeTransform.dot1.x, lobeTransform.dot1.y, lobeTransform.dot1.z]} args={[0.062, 16, 16]}>
            <meshStandardMaterial
              color="#fef08a"
              emissive="#fde047"
              emissiveIntensity={1.8}
              roughness={0.1}
            />
          </Sphere>
          {/* Electron 2 */}
          <Sphere position={[lobeTransform.dot2.x, lobeTransform.dot2.y, lobeTransform.dot2.z]} args={[0.062, 16, 16]}>
            <meshStandardMaterial
              color="#fef08a"
              emissive="#fde047"
              emissiveIntensity={1.8}
              roughness={0.1}
            />
          </Sphere>
        </group>
      )}

      {/* 3. 3D FLOATING BILLBOARD BADGE */}
      {showLabel && (
        <group position={[lobeTransform.labelPos.x, lobeTransform.labelPos.y, lobeTransform.labelPos.z]}>
          <Billboard follow lockX={false} lockY={false} lockZ={false}>
            {/* Background pill */}
            <mesh position={[0, 0, -0.01]}>
              <planeGeometry args={[1.35, 0.42]} />
              <meshBasicMaterial color="#1e1b4b" transparent opacity={0.88} />
            </mesh>
            <mesh position={[0, 0, -0.005]}>
              <planeGeometry args={[1.37, 0.44]} />
              <meshBasicMaterial color="#d97706" wireframe />
            </mesh>
            <Text
              position={[0, 0.08, 0]}
              fontSize={0.13}
              color="#fef08a"
              anchorX="center"
              anchorY="middle"
              fontWeight="bold"
            >
              Lone Pair (:)
            </Text>
            <Text
              position={[0, -0.09, 0]}
              fontSize={0.095}
              color="#fde68a"
              anchorX="center"
              anchorY="middle"
            >
              sp² Hybrid (Z = 0)
            </Text>
          </Billboard>
        </group>
      )}
    </group>
  );
};

