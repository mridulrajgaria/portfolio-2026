"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleGrid() {
  const pointsRef = useRef<THREE.Points>(null);

  const count = 2000;
  
  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Spread particles across a wide grid
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
      
      phases[i] = Math.random() * Math.PI * 2;
    }
    
    return [positions, phases];
  }, [count]);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    timeRef.current += delta;
    const time = timeRef.current;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Add subtle wave motion based on mouse position
    const mouseX = (state.mouse.x * 2);
    const mouseY = (state.mouse.y * 2);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle sine wave motion on z axis
      positions[i3 + 2] += Math.sin(time * 0.5 + phases[i]) * 0.01;
      
      // Slight parallax reaction to mouse
      positions[i3] += (mouseX - positions[i3]) * 0.001;
      positions[i3 + 1] += (mouseY - positions[i3 + 1]) * 0.001;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = time * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
  );
}
