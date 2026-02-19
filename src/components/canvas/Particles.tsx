"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MedicalMesh({ count = 40 }) {
  const group = useRef<THREE.Group>(null!);
  
  // Hexagonal/Pharma style shapes create karna
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 5 + 2;
      const geometry = new THREE.IcosahedronGeometry(radius, 0); 
      temp.push(geometry);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    group.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={group}>
      {lines.map((geo, i) => (
        <mesh key={i} geometry={geo} position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15]}>
          <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
}