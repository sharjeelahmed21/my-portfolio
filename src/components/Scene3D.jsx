import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';

function AbstractWorkspace() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main "Laptop/Screen" representation */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Keyboard base */}
        <mesh position={[0, -1.25, 1.2]} rotation={[-Math.PI / 2.5, 0, 0]} castShadow>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Screen Glow */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[3.8, 2.3]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
        </mesh>
        
        {/* Abstract Floating Elements (Code Blocks/Data) */}
        <mesh position={[-2.5, 1, 0.5]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
        <mesh position={[2, -0.5, 1.5]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] absolute right-0 top-0 pointer-events-none md:pointer-events-auto z-0 opacity-40 md:opacity-100">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <AbstractWorkspace />
        
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#3b82f6" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
