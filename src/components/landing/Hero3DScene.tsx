import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/**
 * "Chip city" — a dense grid of extruded blocks with varying heights,
 * lit moodily from one side. Matches the demo's macro / PCB aesthetic:
 * dark, monochrome, slow camera drift, a single warm rim light.
 */
function ChipCity() {
  const group = useRef<THREE.Group>(null);

  const blocks = useMemo(() => {
    const items: { x: number; z: number; h: number; w: number; d: number; tone: number }[] = [];
    const N = 22; // grid side
    const STEP = 0.42;
    const offset = ((N - 1) * STEP) / 2;
    // Seeded pseudo-random for stable layout
    let seed = 1337;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const r = rand();
        // Skip a few cells to break the grid
        if (r < 0.07) continue;
        // Center bias — taller closer to middle
        const dx = i - N / 2;
        const dz = j - N / 2;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const centerBoost = Math.max(0, 1 - dist / (N * 0.55));
        const h = 0.05 + Math.pow(rand(), 1.6) * 0.9 + centerBoost * 0.6;
        items.push({
          x: i * STEP - offset,
          z: j * STEP - offset,
          h,
          w: STEP * 0.82,
          d: STEP * 0.82,
          tone: 0.08 + rand() * 0.05,
        });
      }
    }
    return items;
  }, []);

  useFrame((state, dt) => {
    if (!group.current) return;
    // Slow camera-like orbit on the group
    group.current.rotation.y += dt * 0.05;
    // Subtle breathing scale
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.012;
    group.current.scale.setScalar(s);
  });

  return (
    <group ref={group} rotation={[-0.55, 0, 0.15]} position={[0, -0.6, 0]}>
      {blocks.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]} castShadow={false} receiveShadow={false}>
          <boxGeometry args={[b.w, b.h, b.d]} />
          <meshStandardMaterial
            color={new THREE.Color(b.tone, b.tone + 0.005, b.tone + 0.01)}
            roughness={0.55}
            metalness={0.7}
          />
        </mesh>
      ))}
      {/* Ground plate */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#172B36" roughness={0.9} metalness={0.4} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const N = 220;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((state, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.02;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.025} color="#F1F6F4" transparent opacity={0.55} depthWrite={false} />
    </points>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 2.4, 5.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#172B36"]} />
      <fog attach="fog" args={["#172B36", 5.5, 11]} />

      {/* Key light — warm rim from the right */}
      <directionalLight position={[5, 4, 2]} intensity={1.4} color="#FFC801" />
      {/* Cool fill */}
      <directionalLight position={[-4, 2.5, -3]} intensity={0.7} color="#114C5A" />
      <ambientLight intensity={0.18} />

      <Suspense fallback={null}>
        <ChipCity />
        <Particles />
        <Environment preset="night" />
      </Suspense>

      <EffectComposer multisampling={0}>
        <Bloom intensity={0.55} luminanceThreshold={0.6} luminanceSmoothing={0.3} mipmapBlur />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  );
}
