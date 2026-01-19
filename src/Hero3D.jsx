import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function Particles() {
  const mesh = useRef();
  const count = 12000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8;
    colors[i] = Math.random();
  }

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime() * 0.02;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.015}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight intensity={0.3} />
      <Particles />
    </Canvas>
  );
}
