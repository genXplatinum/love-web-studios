import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

/**
 * The home-page object is deliberately a product-like sculpture rather than
 * decoration. Cursor movement changes its attitude, while scrolling moves it
 * out of the way as the story enters the page.
 */
export default function ChromeFlow({ reduced = false }) {
  const rig = useRef();
  const sculpture = useRef();
  const ring = useRef();
  const satellite = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const base = useRef({ scale: 1, x: 1.45, y: 0.1 });

  useEffect(() => {
    const setBase = () => {
      const mobile = window.innerWidth < 760;
      base.current = mobile
        ? { scale: 0.54, x: 0.38, y: 0.5 }
        : { scale: 1, x: 1.45, y: 0.1 };
    };

    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    setBase();
    window.addEventListener('resize', setBase);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('resize', setBase);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    const heroProgress = Math.min(window.scrollY / (window.innerHeight * 0.92), 1);
    const drift = reduced ? 0 : Math.sin(elapsed * 0.42) * 0.08;

    if (rig.current) {
      const targetX = base.current.x + pointer.current.x * 0.28 + heroProgress * 1.2;
      const targetY = base.current.y + pointer.current.y * 0.2 + drift + heroProgress * 0.56;
      rig.current.position.x = MathUtils.lerp(rig.current.position.x, targetX, 0.052);
      rig.current.position.y = MathUtils.lerp(rig.current.position.y, targetY, 0.052);

      const scale = base.current.scale * MathUtils.lerp(1, 0.62, heroProgress);
      rig.current.scale.setScalar(MathUtils.lerp(rig.current.scale.x, scale, 0.06));
      rig.current.rotation.y = MathUtils.lerp(
        rig.current.rotation.y,
        pointer.current.x * 0.34 + heroProgress * 0.72,
        0.05,
      );
      rig.current.rotation.x = MathUtils.lerp(rig.current.rotation.x, -pointer.current.y * 0.18, 0.05);
    }

    if (sculpture.current) {
      sculpture.current.rotation.z = elapsed * 0.11;
      sculpture.current.rotation.x = elapsed * 0.07;
    }
    if (ring.current) ring.current.rotation.z = -elapsed * 0.18;
    if (satellite.current) {
      satellite.current.position.x = Math.cos(elapsed * 0.5) * 1.8;
      satellite.current.position.y = Math.sin(elapsed * 0.5) * 1.1;
      satellite.current.rotation.x = elapsed * 0.36;
      satellite.current.rotation.y = elapsed * 0.2;
    }
  });

  return (
    <group ref={rig} position={[1.45, 0.1, 0]}>
      <group ref={sculpture}>
        <mesh rotation={[0.5, -0.3, 0.1]} castShadow>
          <torusKnotGeometry args={[1.02, 0.3, 240, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#f2f3f7"
            metalness={0.92}
            roughness={0.14}
            clearcoat={0.8}
            clearcoatRoughness={0.12}
          />
        </mesh>
        <mesh rotation={[-0.85, 0.55, 0.32]} scale={0.68}>
          <torusGeometry args={[1.35, 0.045, 16, 128]} />
          <meshStandardMaterial color="#b8c4ff" emissive="#4559c6" emissiveIntensity={1.15} />
        </mesh>
      </group>
      <mesh ref={ring} rotation={[1.08, 0.22, 0]} scale={1.34}>
        <torusGeometry args={[1.6, 0.035, 12, 128]} />
        <meshStandardMaterial color="#ff6b4a" emissive="#a93420" emissiveIntensity={0.8} />
      </mesh>
      <mesh ref={satellite} position={[1.8, 0, -0.45]}>
        <octahedronGeometry args={[0.18, 2]} />
        <meshStandardMaterial color="#3f51d7" emissive="#2334a8" emissiveIntensity={1.1} metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}
