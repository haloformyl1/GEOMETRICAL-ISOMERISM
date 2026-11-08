import React, { useState, forwardRef } from 'react';
import { Canvas, type CanvasProps } from '@react-three/fiber';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import * as THREE from 'three';

interface AppCanvasProps extends CanvasProps {
  showCameraControls?: boolean;
}

export const AppCanvas = forwardRef<HTMLCanvasElement, AppCanvasProps>(
  ({ children, onCreated, showCameraControls = true, ...props }, ref) => {
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    const [initialPos, setInitialPos] = useState<THREE.Vector3 | null>(null);
    const [initialZoom, setInitialZoom] = useState<number>(1);
    const [controls, setControls] = useState<any>(null);

    const handleCreated = (state: any) => {
      setCamera(state.camera);
      setInitialPos(state.camera.position.clone());
      setInitialZoom(state.camera.zoom);
      if (state.controls) {
        setControls(state.controls);
      }
      if (onCreated) {
        onCreated(state);
      }
    };

    const handleZoom = (factor: number) => {
      if (camera) {
        if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
          camera.zoom = Math.max(0.1, Math.min(20, camera.zoom * factor));
          camera.updateProjectionMatrix();
        }
      }
    };

    const handleReset = () => {
      if (camera && initialPos) {
        camera.position.copy(initialPos);
        if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
          camera.zoom = initialZoom;
          camera.updateProjectionMatrix();
        }
        if (controls && controls.target) {
          controls.target.set(0, 0, 0);
          controls.update();
        }
      }
    };

    return (
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Canvas
          ref={ref}
          onCreated={handleCreated}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          {...props}
        >
          {children}
        </Canvas>

        {showCameraControls && (
          <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-2 sm:bottom-4 sm:right-4">
            <button
              type="button"
              onClick={() => handleZoom(1.2)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
              aria-label="Zoom In"
              title="Zoom In"
            >
              <ZoomIn className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => handleZoom(1 / 1.2)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
              aria-label="Zoom Out"
              title="Zoom Out"
            >
              <ZoomOut className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
              aria-label="Reset View"
              title="Reset View"
            >
              <RotateCcw className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    );
  }
);

AppCanvas.displayName = 'AppCanvas';
