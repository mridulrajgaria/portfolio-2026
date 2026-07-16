"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line, Sparkles, Float } from "@react-three/drei";

export default function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Points>(null);

  // Layers of a CNN (Thicker, more expansive)
  const layers = [12, 18, 16, 12, 6]; 
  const layerSpacing = 3.5;
  
  // Calculate node positions
  const { positions, lines } = useMemo(() => {
    const pos: number[] = [];
    const lin: number[][][] = [];
    const layerOffsets = layers.map((_, i) => (i - layers.length / 2) * layerSpacing);

    let prevLayerNodes: number[][] = [];
    
    layers.forEach((nodeCount, layerIdx) => {
      const currentLayerNodes: number[][] = [];
      const x = layerOffsets[layerIdx];
      
      for (let i = 0; i < nodeCount; i++) {
        // Distribute on Y axis with more spread
        const y = (i - nodeCount / 2) * 1.2;
        // Random Z for massive depth
        const z = (Math.random() - 0.5) * 4;
        
        const nodePos = [x, y, z];
        pos.push(...nodePos);
        currentLayerNodes.push(nodePos);
        
        // Connect to previous layer
        if (prevLayerNodes.length > 0) {
          prevLayerNodes.forEach(prevNode => {
            // Drop fewer connections for a denser, richer web
            if (Math.random() > 0.3) {
              lin.push([prevNode, nodePos]);
            }
          });
        }
      }
      prevLayerNodes = currentLayerNodes;
    });
    
    return {
      positions: new Float32Array(pos),
      lines: lin,
    };
  }, [layers, layerSpacing]);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (group.current) {
      timeRef.current += delta;
      
      // Premium slow ambient drift
      group.current.rotation.y += delta * 0.1;
      
      // Smooth interactive mouse parallax
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      
      // Lerp towards target for buttery smooth feeling
      group.current.rotation.y += (targetX - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-targetY - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={group} scale={0.7} position={[6, 0, -2]}>
        {/* Floating background data particles */}
        <Sparkles count={300} scale={20} size={1.5} speed={0.4} opacity={0.3} color="#06d6a0" />
        <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.2} color="#0077b6" />

        {/* The Matrix Nodes */}
        <points ref={nodesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              args={[positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial size={0.18} color="#06d6a0" transparent opacity={0.9} sizeAttenuation={true} />
        </points>

        {/* Neural Synapse Lines */}
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line as any}
            color="#0077b6"
            opacity={0.15}
            transparent
            lineWidth={0.8}
          />
        ))}
      </group>
    </Float>
  );
}
