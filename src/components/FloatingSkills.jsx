import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function FloatingObjects() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.x = state.clock.elapsedTime * 0.1;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-3, 1, 0]}>
          <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
        </Sphere>
        
        <Sphere args={[0.8, 32, 32]} position={[3, -1, 0]}>
          <MeshDistortMaterial color="#10b981" attach="material" distort={0.4} speed={1.5} roughness={0.2} metalness={0.8} />
        </Sphere>

        <mesh position={[0, 2, -2]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function FloatingSkills() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingObjects />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
