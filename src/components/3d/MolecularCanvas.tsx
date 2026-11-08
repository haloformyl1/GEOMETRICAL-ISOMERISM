import React, { Suspense, useMemo } from 'react';
import { Environment, Grid, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ErrorState } from '../ui/States';
import { AppCanvas as Canvas } from '../ui/AppCanvas';

interface MolecularCanvasProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
  resetKey?: number;
  ariaLabel?: string;
}

export const MolecularCanvas: React.FC<MolecularCanvasProps> = ({
  children,
  cameraPosition = [0, 0.4, 4.4],
  cameraTarget = [0, 0, 0],
  resetKey = 0,
  ariaLabel = 'Interactive 3D molecular stereochemistry model',
}) => {
  const webGLAvailable = useMemo(() => {
    if (typeof document === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    } catch {
      return false;
    }
  }, []);

  if (!webGLAvailable) {
    return (
      <ErrorState
        title="WebGL is unavailable"
        message="Use a browser with hardware-accelerated WebGL to view this interactive 3D molecule."
      />
    );
  }

  return (
    <div
      className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--canvas-background)]"
      role="img"
      aria-label={ariaLabel}
    >
      <Canvas
        dpr={[1, 1.5]}
        shadows
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#06131d']} />
        <PerspectiveCamera
          key={`camera-${resetKey}`}
          makeDefault
          position={cameraPosition}
          fov={46}
          near={0.1}
          far={100}
        />
        <OrbitControls
          key={`controls-${resetKey}`}
          enableDamping
          dampingFactor={0.08}
          enablePan
          enableRotate
          enableZoom
          target={cameraTarget}
          maxDistance={14}
          minDistance={1.8}
          makeDefault
        />

        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 10, 6]} intensity={1.6} castShadow />
        <directionalLight position={[-8, -5, -6]} intensity={0.5} color="#7dd3fc" />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <group position={[0, 0, 0]}>
            <Grid
              infiniteGrid
              fadeDistance={18}
              fadeStrength={2.5}
              sectionColor="#2d718f"
              cellColor="#173d4f"
              sectionSize={2}
              position={[0, -1.8, 0]}
            />
            {children}
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};
