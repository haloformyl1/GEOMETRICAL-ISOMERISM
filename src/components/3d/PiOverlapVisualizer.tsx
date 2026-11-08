import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sparkles, Billboard, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PiOverlapVisualizerProps {
  angle: number; // in degrees (0 - 180)
  visible?: boolean;
  showCloud?: boolean;
  showSigns?: boolean;
  showPulse?: boolean;
}

export const PiOverlapVisualizer: React.FC<PiOverlapVisualizerProps> = ({
  angle,
  visible = true,
  showCloud = true,
  showSigns = true,
  showPulse = true,
}) => {
  const rad = (angle * Math.PI) / 180;
  const cosVal = Math.cos(rad);
  const sinVal = Math.sin(rad);

  // States
  const isBroken = angle >= 45 && angle <= 135;
  const isStrained = angle > 20 && angle < 45;
  const overlap = Math.max(0, cosVal);

  // Animated pulse timing
  const [pulseTime, setPulseTime] = useState(0);
  const [flickerTick, setFlickerTick] = useState(0);
  const frameCountRef = useRef(0);

  useFrame((state, delta) => {
    frameCountRef.current += 1;
    setPulseTime((prev) => (prev + delta * 1.4) % 1.0);
    if (frameCountRef.current % 4 === 0) {
      setFlickerTick((prev) => prev + 1);
    }
  });

  // Coordinates
  // C1 at [-1, 0, 0]
  // C2 at [1, 0, 0] rotated by angle around X-axis
  const topC1 = useMemo<[number, number, number]>(() => [-1, 0.85, 0], []);
  const botC1 = useMemo<[number, number, number]>(() => [-1, -0.85, 0], []);

  const topC2 = useMemo<[number, number, number]>(
    () => [1, 0.85 * cosVal, 0.85 * sinVal],
    [cosVal, sinVal]
  );
  const botC2 = useMemo<[number, number, number]>(
    () => [1, -0.85 * cosVal, -0.85 * sinVal],
    [cosVal, sinVal]
  );

  // Additional fringe lines for volumetric field feel
  const topFringeUpperC1 = useMemo<[number, number, number]>(() => [-1, 1.15, 0], []);
  const topFringeUpperC2 = useMemo<[number, number, number]>(
    () => [1, 1.15 * cosVal, 1.15 * sinVal],
    [cosVal, sinVal]
  );

  const topFringeLowerC1 = useMemo<[number, number, number]>(() => [-1, 0.55, 0], []);
  const topFringeLowerC2 = useMemo<[number, number, number]>(
    () => [1, 0.55 * cosVal, 0.55 * sinVal],
    [cosVal, sinVal]
  );

  const botFringeLowerC1 = useMemo<[number, number, number]>(() => [-1, -1.15, 0], []);
  const botFringeLowerC2 = useMemo<[number, number, number]>(
    () => [1, -1.15 * cosVal, -1.15 * sinVal],
    [cosVal, sinVal]
  );

  const botFringeUpperC1 = useMemo<[number, number, number]>(() => [-1, -0.55, 0], []);
  const botFringeUpperC2 = useMemo<[number, number, number]>(
    () => [1, -0.55 * cosVal, -0.55 * sinVal],
    [cosVal, sinVal]
  );

  // Line Colors based on state
  const lineColor = isBroken
    ? '#ef4444' // severed red
    : isStrained
    ? '#f59e0b' // warning amber
    : '#22d3ee'; // bonding electric cyan

  const botLineColor = isBroken
    ? '#f43f5e'
    : isStrained
    ? '#f97316'
    : '#38bdf8';

  // Helper to generate broken segments with jagged rupture ends
  const createLineSegments = (
    p1: [number, number, number],
    p2: [number, number, number],
    kinkDirection: number
  ) => {
    if (!isBroken) {
      // Add slight strain jitter if strained
      if (isStrained) {
        const jitter = Math.sin(pulseTime * 20) * 0.03;
        const mid: [number, number, number] = [
          (p1[0] + p2[0]) / 2,
          (p1[1] + p2[1]) / 2 + jitter * kinkDirection,
          (p1[2] + p2[2]) / 2,
        ];
        return {
          intact: [p1, mid, p2] as [number, number, number][],
          broken: null,
        };
      }
      return {
        intact: [p1, p2] as [number, number, number][],
        broken: null,
      };
    }

    // Broken: severed into two recoiled stubs with a jagged end
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const dz = p2[2] - p1[2];

    // Left segment (C1 side)
    const leftSnap: [number, number, number] = [
      p1[0] + dx * 0.35,
      p1[1] + dy * 0.35,
      p1[2] + dz * 0.35,
    ];
    const leftKink: [number, number, number] = [
      p1[0] + dx * 0.38,
      p1[1] + dy * 0.38 - 0.12 * kinkDirection,
      p1[2] + dz * 0.38 + 0.05,
    ];

    // Right segment (C2 side)
    const rightSnap: [number, number, number] = [
      p2[0] - dx * 0.35,
      p2[1] - dy * 0.35,
      p2[2] - dz * 0.35,
    ];
    const rightKink: [number, number, number] = [
      p2[0] - dx * 0.38,
      p2[1] - dy * 0.38 + 0.12 * kinkDirection,
      p2[2] - dz * 0.38 - 0.05,
    ];

    // Erratic snap spark in between
    const sparkMid: [number, number, number] = [
      (p1[0] + p2[0]) / 2 + (Math.random() - 0.5) * 0.12,
      (p1[1] + p2[1]) / 2 + (Math.random() - 0.5) * 0.15,
      (p1[2] + p2[2]) / 2 + (Math.random() - 0.5) * 0.12,
    ];

    return {
      intact: null,
      broken: {
        left: [p1, leftSnap, leftKink] as [number, number, number][],
        right: [p2, rightSnap, rightKink] as [number, number, number][],
        spark: [leftKink, sparkMid, rightKink] as [number, number, number][],
      },
    };
  };

  // Compute all 6 lines
  const topCenterSeg = useMemo(
    () => createLineSegments(topC1, topC2, 1),
    [topC1, topC2, isBroken, isStrained, pulseTime]
  );
  const topUpperSeg = useMemo(
    () => createLineSegments(topFringeUpperC1, topFringeUpperC2, 1),
    [topFringeUpperC1, topFringeUpperC2, isBroken, isStrained, pulseTime]
  );
  const topLowerSeg = useMemo(
    () => createLineSegments(topFringeLowerC1, topFringeLowerC2, 1),
    [topFringeLowerC1, topFringeLowerC2, isBroken, isStrained, pulseTime]
  );

  const botCenterSeg = useMemo(
    () => createLineSegments(botC1, botC2, -1),
    [botC1, botC2, isBroken, isStrained, pulseTime]
  );
  const botLowerSeg = useMemo(
    () => createLineSegments(botFringeLowerC1, botFringeLowerC2, -1),
    [botFringeLowerC1, botFringeLowerC2, isBroken, isStrained, pulseTime]
  );
  const botUpperSeg = useMemo(
    () => createLineSegments(botFringeUpperC1, botFringeUpperC2, -1),
    [botFringeUpperC1, botFringeUpperC2, isBroken, isStrained, pulseTime]
  );

  // Pulse particles position along intact center lines
  const pulsePosTop = useMemo(() => {
    return [
      topC1[0] * (1 - pulseTime) + topC2[0] * pulseTime,
      topC1[1] * (1 - pulseTime) + topC2[1] * pulseTime,
      topC1[2] * (1 - pulseTime) + topC2[2] * pulseTime,
    ] as [number, number, number];
  }, [topC1, topC2, pulseTime]);

  const pulsePosBot = useMemo(() => {
    return [
      botC1[0] * (1 - pulseTime) + botC2[0] * pulseTime,
      botC1[1] * (1 - pulseTime) + botC2[1] * pulseTime,
      botC1[2] * (1 - pulseTime) + botC2[2] * pulseTime,
    ] as [number, number, number];
  }, [botC1, botC2, pulseTime]);

  // Cylinder bridge orientation & position
  const topMid = useMemo<[number, number, number]>(
    () => [0, (topC1[1] + topC2[1]) / 2, topC2[2] / 2],
    [topC1, topC2]
  );
  const botMid = useMemo<[number, number, number]>(
    () => [0, (botC1[1] + botC2[1]) / 2, botC2[2] / 2],
    [botC1, botC2]
  );

  if (!visible) return null;

  return (
    <group name="pi-overlap-system">
      {/* 1. VOLUMETRIC OVERLAP CLOUD BRIDGES (Visible when intact) */}
      {showCloud && !isBroken && overlap > 0.05 && (
        <group name="volumetric-cloud-bridges">
          {/* Top Overlap Cloud */}
          <mesh position={topMid} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22 * Math.sqrt(overlap), 0.22 * Math.sqrt(overlap), 1.85, 16]} />
            <meshStandardMaterial
              color="#38bdf8"
              transparent
              opacity={overlap * 0.38}
              roughness={0.2}
              emissive="#0284c7"
              emissiveIntensity={0.25}
            />
          </mesh>

          {/* Bottom Overlap Cloud */}
          <mesh position={botMid} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22 * Math.sqrt(overlap), 0.22 * Math.sqrt(overlap), 1.85, 16]} />
            <meshStandardMaterial
              color="#0284c7"
              transparent
              opacity={overlap * 0.38}
              roughness={0.2}
              emissive="#0369a1"
              emissiveIntensity={0.25}
            />
          </mesh>
        </group>
      )}

      {/* 2. TOP LOBE IMAGINARY OVERLAP LINES */}
      <group name="top-lobe-lines">
        {/* Intact Lines */}
        {topCenterSeg.intact && (
          <Line
            points={topCenterSeg.intact}
            color={lineColor}
            lineWidth={3.2}
            dashed
            dashScale={4}
            dashSize={0.25}
            gapSize={0.12}
          />
        )}
        {topUpperSeg.intact && (
          <Line
            points={topUpperSeg.intact}
            color={lineColor}
            lineWidth={1.8}
            dashed
            dashScale={5}
            dashSize={0.2}
            gapSize={0.12}
          />
        )}
        {topLowerSeg.intact && (
          <Line
            points={topLowerSeg.intact}
            color={lineColor}
            lineWidth={1.8}
            dashed
            dashScale={5}
            dashSize={0.2}
            gapSize={0.12}
          />
        )}

        {/* Broken Severed Lines */}
        {topCenterSeg.broken && (
          <>
            {/* Left severed stub */}
            <Line
              points={topCenterSeg.broken.left}
              color="#ef4444"
              lineWidth={3.5}
            />
            {/* Right severed stub */}
            <Line
              points={topCenterSeg.broken.right}
              color="#ef4444"
              lineWidth={3.5}
            />
            {/* Upper fringe broken */}
            {topUpperSeg.broken && (
              <>
                <Line points={topUpperSeg.broken.left} color="#f87171" lineWidth={1.8} />
                <Line points={topUpperSeg.broken.right} color="#f87171" lineWidth={1.8} />
              </>
            )}
            {/* Lower fringe broken */}
            {topLowerSeg.broken && (
              <>
                <Line points={topLowerSeg.broken.left} color="#f87171" lineWidth={1.8} />
                <Line points={topLowerSeg.broken.right} color="#f87171" lineWidth={1.8} />
              </>
            )}

            {/* Crackling lightning snap arcs between stubs (flickering) */}
            {flickerTick % 2 === 0 && (
              <Line
                points={topCenterSeg.broken.spark}
                color="#fbbf24"
                lineWidth={2.2}
              />
            )}

            {/* Rupture Sparks */}
            <Sparkles
              position={topMid}
              count={20}
              scale={[0.7, 0.5, 0.5]}
              size={3.5}
              speed={2.5}
              color="#ef4444"
            />
          </>
        )}
      </group>

      {/* 3. BOTTOM LOBE IMAGINARY OVERLAP LINES */}
      <group name="bottom-lobe-lines">
        {/* Intact Lines */}
        {botCenterSeg.intact && (
          <Line
            points={botCenterSeg.intact}
            color={botLineColor}
            lineWidth={3.2}
            dashed
            dashScale={4}
            dashSize={0.25}
            gapSize={0.12}
          />
        )}
        {botLowerSeg.intact && (
          <Line
            points={botLowerSeg.intact}
            color={botLineColor}
            lineWidth={1.8}
            dashed
            dashScale={5}
            dashSize={0.2}
            gapSize={0.12}
          />
        )}
        {botUpperSeg.intact && (
          <Line
            points={botUpperSeg.intact}
            color={botLineColor}
            lineWidth={1.8}
            dashed
            dashScale={5}
            dashSize={0.2}
            gapSize={0.12}
          />
        )}

        {/* Broken Severed Lines */}
        {botCenterSeg.broken && (
          <>
            {/* Left severed stub */}
            <Line
              points={botCenterSeg.broken.left}
              color="#f43f5e"
              lineWidth={3.5}
            />
            {/* Right severed stub */}
            <Line
              points={botCenterSeg.broken.right}
              color="#f43f5e"
              lineWidth={3.5}
            />
            {/* Lower fringe broken */}
            {botLowerSeg.broken && (
              <>
                <Line points={botLowerSeg.broken.left} color="#fb7185" lineWidth={1.8} />
                <Line points={botLowerSeg.broken.right} color="#fb7185" lineWidth={1.8} />
              </>
            )}
            {/* Upper fringe broken */}
            {botUpperSeg.broken && (
              <>
                <Line points={botUpperSeg.broken.left} color="#fb7185" lineWidth={1.8} />
                <Line points={botUpperSeg.broken.right} color="#fb7185" lineWidth={1.8} />
              </>
            )}

            {/* Crackling lightning snap arcs */}
            {flickerTick % 2 === 1 && (
              <Line
                points={botCenterSeg.broken.spark}
                color="#f59e0b"
                lineWidth={2.2}
              />
            )}

            {/* Rupture Sparks */}
            <Sparkles
              position={botMid}
              count={20}
              scale={[0.7, 0.5, 0.5]}
              size={3.5}
              speed={2.5}
              color="#f43f5e"
            />
          </>
        )}
      </group>

      {/* 4. SHARED ELECTRON PULSES (gliding along intact lines) */}
      {showPulse && !isBroken && (
        <group name="electron-density-pulses">
          <Sphere position={pulsePosTop} args={[0.07, 16, 16]}>
            <meshStandardMaterial
              color="#a5f3fc"
              emissive="#22d3ee"
              emissiveIntensity={1.5}
              roughness={0.1}
            />
          </Sphere>
          <Sphere position={pulsePosBot} args={[0.07, 16, 16]}>
            <meshStandardMaterial
              color="#7dd3fc"
              emissive="#0284c7"
              emissiveIntensity={1.5}
              roughness={0.1}
            />
          </Sphere>
        </group>
      )}

      {/* 5. 3D FLOATING RUPTURE BILLBOARD BADGE WHEN BROKEN */}
      {isBroken && (
        <group position={[0, topMid[1] + 0.35, topMid[2]]}>
          <Billboard follow lockX={false} lockY={false} lockZ={false}>
            <mesh position={[0, 0, -0.02]}>
              <planeGeometry args={[1.9, 0.6]} />
              <meshBasicMaterial color="#450a0a" transparent opacity={0.88} />
            </mesh>
            <Text
              position={[0, 0.12, 0]}
              fontSize={0.16}
              color="#fecaca"
              anchorX="center"
              anchorY="middle"
              fontWeight="bold"
            >
              ⚡ PI-BOND SEVERED! ⚡
            </Text>
            <Text
              position={[0, -0.12, 0]}
              fontSize={0.11}
              color="#fca5a5"
              anchorX="center"
              anchorY="middle"
            >
              Zero p-p Overlap | Barrier: 260 kJ/mol
            </Text>
          </Billboard>
        </group>
      )}

      {/* 6. ORBITAL PHASE (+ / -) SIGNS */}
      {showSigns && (
        <group name="orbital-phase-signs">
          {/* C1 Top (+) */}
          <Billboard position={[-1, 1.4, 0]}>
            <mesh position={[0, 0, -0.01]}>
              <circleGeometry args={[0.13, 16]} />
              <meshBasicMaterial color="#0369a1" />
            </mesh>
            <Text fontSize={0.15} color="#e0f2fe" fontWeight="bold" anchorX="center" anchorY="middle">
              +
            </Text>
          </Billboard>

          {/* C1 Bottom (-) */}
          <Billboard position={[-1, -1.4, 0]}>
            <mesh position={[0, 0, -0.01]}>
              <circleGeometry args={[0.13, 16]} />
              <meshBasicMaterial color="#1e3a8a" />
            </mesh>
            <Text fontSize={0.18} color="#e0f2fe" fontWeight="bold" anchorX="center" anchorY="middle">
              &minus;
            </Text>
          </Billboard>

          {/* C2 Top (+) */}
          <Billboard position={[1, 1.4 * cosVal, 1.4 * sinVal]}>
            <mesh position={[0, 0, -0.01]}>
              <circleGeometry args={[0.13, 16]} />
              <meshBasicMaterial color={isBroken ? '#991b1b' : '#0369a1'} />
            </mesh>
            <Text fontSize={0.15} color="#e0f2fe" fontWeight="bold" anchorX="center" anchorY="middle">
              +
            </Text>
          </Billboard>

          {/* C2 Bottom (-) */}
          <Billboard position={[1, -1.4 * cosVal, -1.4 * sinVal]}>
            <mesh position={[0, 0, -0.01]}>
              <circleGeometry args={[0.13, 16]} />
              <meshBasicMaterial color={isBroken ? '#831843' : '#1e3a8a'} />
            </mesh>
            <Text fontSize={0.18} color="#e0f2fe" fontWeight="bold" anchorX="center" anchorY="middle">
              &minus;
            </Text>
          </Billboard>
        </group>
      )}
    </group>
  );
};

