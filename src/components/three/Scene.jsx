import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Lightformer } from '@react-three/drei';
import ChromeFlow from './ChromeFlow';

export default function Scene() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 6.5], fov: 37 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearColor('#111217', 1)}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.42} />
        <directionalLight position={[5, 5, 4]} intensity={3.4} color="#ffffff" />
        <directionalLight position={[-5, 1, 2]} intensity={2.2} color="#3f51d7" />
        <pointLight position={[2, -2, 2]} intensity={12} distance={8} color="#b8c4ff" />

        <ChromeFlow reduced={reduced} />

        <Environment resolution={128} frames={1}>
          <Lightformer form="rect" intensity={6} position={[0, 5, 3]} scale={[9, 4, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={3.2} position={[-5, 0, 2]} scale={[3, 8, 1]} color="#3f51d7" />
          <Lightformer form="rect" intensity={2.8} position={[5, -1, 2]} scale={[4, 7, 1]} color="#ff6b4a" />
          <Lightformer form="ring" intensity={2.4} position={[2, 2, -1]} scale={3} color="#b8c4ff" />
        </Environment>

        <ContactShadows
          position={[0, -2.25, 0]}
          opacity={0.38}
          scale={14}
          blur={2.8}
          far={4.8}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}
