import React, { useMemo } from 'react';
import { Sphere, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';
import type { MolecularStructure3D, Atom3D, Bond3D } from '../../types/isomerism';
import { getElementColor, getElementRadius } from '../../utils/chemistry';
import { LonePairOrbital } from './LonePairOrbital';

interface Molecule3DViewerProps {
  structure: MolecularStructure3D;
  showLabels?: boolean;
  showPriorityBadges?: boolean;
  spaceFilling?: boolean;
  showDipole?: boolean;
  showLonePairs?: boolean;
  showLonePairLobe?: boolean;
  showLonePairDots?: boolean;
  showLonePairLabel?: boolean;
  lonePairColor?: string;
}

// Helper to calculate cylinder position and quaternion rotation between two 3D points
const getBondTransform = (
  p1: [number, number, number],
  p2: [number, number, number],
  offset?: [number, number, number]
) => {
  const v1 = new THREE.Vector3(...p1);
  const v2 = new THREE.Vector3(...p2);
  if (offset) {
    v1.add(new THREE.Vector3(...offset));
    v2.add(new THREE.Vector3(...offset));
  }
  const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
  const direction = new THREE.Vector3().subVectors(v2, v1);
  const length = direction.length();

  const orientation = new THREE.Quaternion();
  if (length > 0.0001) {
    orientation.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  }
  return { mid, length, orientation };
};

export const Molecule3DViewer: React.FC<Molecule3DViewerProps> = ({
  structure,
  showLabels = true,
  showPriorityBadges = false,
  spaceFilling = false,
  showDipole = false,
  showLonePairs = true,
  showLonePairLobe = true,
  showLonePairDots = true,
  showLonePairLabel = true,
  lonePairColor = '#f59e0b',
}) => {
  const atomMap = useMemo(() => {
    const map = new Map<string, Atom3D>();
    structure.atoms.forEach((a) => map.set(a.id, a));
    return map;
  }, [structure]);

  // Compute stereochemically active sp2 Lone Pairs on Nitrogen atoms
  const lonePairs = useMemo(() => {
    if (!showLonePairs) return [];

    const pairs: Array<{
      id: string;
      position: [number, number, number];
      direction: [number, number, number];
      normal: [number, number, number];
      atomLabel: string;
      cipPriority: number;
    }> = [];

    structure.atoms.forEach((atom) => {
      // Stereochemically active lone pairs in oximes, azo, and imines are on sp2 Nitrogen
      if (atom.element !== 'N') return;

      const connectedBonds = structure.bonds.filter(
        (b) => b.from === atom.id || b.to === atom.id
      );

      const hasDoubleBond = connectedBonds.some((b) => b.order === 2);
      if (!hasDoubleBond) return;

      const neighbors = connectedBonds
        .map((b) => {
          const neighborId = b.from === atom.id ? b.to : b.from;
          return atomMap.get(neighborId);
        })
        .filter((n): n is Atom3D => Boolean(n));

      if (neighbors.length === 2) {
        // Ideal sp2 Nitrogen: 2 bonds + 1 lone pair in trigonal planar arrangement
        const pN = new THREE.Vector3(...atom.position);
        const p1 = new THREE.Vector3(...neighbors[0].position);
        const p2 = new THREE.Vector3(...neighbors[1].position);

        const v1 = new THREE.Vector3().subVectors(p1, pN).normalize();
        const v2 = new THREE.Vector3().subVectors(p2, pN).normalize();

        // Vector bisector of the outer angle: -(v1 + v2)
        const lpDir = new THREE.Vector3().addVectors(v1, v2).negate();

        if (lpDir.lengthSq() < 0.0001) {
          lpDir.set(-v1.y, v1.x, 0);
        }
        lpDir.normalize();

        // Plane normal for electron dots offset
        let planeNorm = new THREE.Vector3().crossVectors(v1, v2).normalize();
        if (planeNorm.lengthSq() < 0.0001) {
          planeNorm.set(0, 0, 1);
        }

        pairs.push({
          id: `lp-${atom.id}`,
          position: atom.position,
          direction: [lpDir.x, lpDir.y, lpDir.z],
          normal: [planeNorm.x, planeNorm.y, planeNorm.z],
          atomLabel: atom.label || atom.element,
          cipPriority: 2, // In CIP rules, lone pair is atomic number 0, hence lowest priority
        });
      }
    });

    return pairs;
  }, [structure, atomMap, showLonePairs]);

  return (
    <group>
      {/* 1. ATOMS */}
      {structure.atoms.map((atom) => {
        const baseRadius = getElementRadius(atom.element);
        const radius = spaceFilling ? baseRadius * 1.8 : baseRadius;
        const color = atom.color || getElementColor(atom.element);

        return (
          <group key={atom.id} position={atom.position}>
            <Sphere args={[radius, 32, 32]}>
              <meshStandardMaterial
                color={color}
                roughness={0.25}
                metalness={0.15}
                emissive={atom.isStereocenter ? '#0284c7' : '#000000'}
                emissiveIntensity={atom.isStereocenter ? 0.2 : 0}
              />
            </Sphere>

            {/* Element or Group Label */}
            {showLabels && !spaceFilling && (
              <Text
                position={[0, radius + 0.35, 0]}
                fontSize={0.28}
                color="#f8fafc"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.03}
                outlineColor="#0f172a"
              >
                {atom.label || atom.element}
              </Text>
            )}

            {/* CIP Priority Badge (1 or 2) */}
            {showPriorityBadges && atom.cipPriority && (
              <group position={[0, -radius - 0.35, 0]}>
                <Sphere args={[0.22, 16, 16]}>
                  <meshStandardMaterial
                    color={atom.cipPriority === 1 ? '#22c55e' : '#ef4444'}
                    emissive={atom.cipPriority === 1 ? '#15803d' : '#b91c1c'}
                    emissiveIntensity={0.6}
                  />
                </Sphere>
                <Text
                  position={[0, 0, 0.25]}
                  fontSize={0.24}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                  fontWeight="bold"
                >
                  {String(atom.cipPriority)}
                </Text>
              </group>
            )}
          </group>
        );
      })}

      {/* 2. BONDS (Hidden in space-filling mode) */}
      {!spaceFilling &&
        structure.bonds.map((bond, idx) => {
          const a1 = atomMap.get(bond.from);
          const a2 = atomMap.get(bond.to);
          if (!a1 || !a2) return null;

          if (bond.order === 1) {
            const { mid, length, orientation } = getBondTransform(a1.position, a2.position);
            return (
              <group key={`b-${idx}`} position={mid} quaternion={orientation}>
                <Cylinder args={[0.08, 0.08, length, 16]}>
                  <meshStandardMaterial color={bond.color || '#64748b'} roughness={0.3} metalness={0.2} />
                </Cylinder>
              </group>
            );
          }

          if (bond.order === 2) {
            // Two parallel bond cylinders offset along Z
            const { mid: m1, length, orientation } = getBondTransform(a1.position, a2.position, [0, 0, 0.09]);
            const { mid: m2 } = getBondTransform(a1.position, a2.position, [0, 0, -0.09]);
            return (
              <group key={`b-dbl-${idx}`}>
                <group position={m1} quaternion={orientation}>
                  <Cylinder args={[0.065, 0.065, length, 16]}>
                    <meshStandardMaterial color={bond.color || '#38bdf8'} roughness={0.3} metalness={0.2} />
                  </Cylinder>
                </group>
                <group position={m2} quaternion={orientation}>
                  <Cylinder args={[0.065, 0.065, length, 16]}>
                    <meshStandardMaterial color={bond.color || '#38bdf8'} roughness={0.3} metalness={0.2} />
                  </Cylinder>
                </group>
              </group>
            );
          }

          return null;
        })}

      {/* 3. LONE PAIR ORBITALS & ELECTRON PAIRS (:) ON NITROGEN */}
      {showLonePairs &&
        !spaceFilling &&
        lonePairs.map((lp) => (
          <LonePairOrbital
            key={lp.id}
            position={lp.position}
            direction={lp.direction}
            normal={lp.normal}
            atomLabel={lp.atomLabel}
            showLobe={showLonePairLobe}
            showDots={showLonePairDots}
            showLabel={showLonePairLabel}
            showCipBadge={showPriorityBadges}
            cipPriority={lp.cipPriority}
            color={lonePairColor}
          />
        ))}

      {/* 4. NET DIPOLE VECTOR ARROW */}
      {showDipole && structure.dipoleNet && structure.dipoleNet > 0.05 && (
        <group position={[0, 0, 0.8]}>
          <Cylinder
            args={[0.05, 0.05, 1.6, 16]}
            position={[0, 0.8, 0]}
            rotation={[0, 0, 0]}
          >
            <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.8} />
          </Cylinder>
          {/* Arrowhead */}
          <Cylinder
            args={[0, 0.16, 0.4, 16]}
            position={[0, 1.7, 0]}
          >
            <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.8} />
          </Cylinder>
          <Text
            position={[0, 2.1, 0]}
            fontSize={0.26}
            color="#fbbf24"
            anchorX="center"
            anchorY="middle"
          >
            {`μ = ${structure.dipoleNet.toFixed(2)} D`}
          </Text>
        </group>
      )}
    </group>
  );
};
