'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, Float32BufferAttribute, Color } from 'three';

interface ParticleFieldProps {
  count?: number;
  speed?: number;
  colors?: string[];
}

const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 200, 
  speed = 0.5,
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
}) => {
  const pointsRef = useRef<Points>(null);
  
  const { positions, colors: particleColors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const particleColors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random positions in a large sphere
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random colors
      const color = new Color(colors[Math.floor(Math.random() * colors.length)]);
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;
    }
    
    return { positions, colors: particleColors };
  }, [count, colors]);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * speed * 0.1;
      pointsRef.current.rotation.x = state.clock.elapsedTime * speed * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particleColors}
          itemSize={3}
          args={[particleColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const ParticleFieldWrapper: React.FC<ParticleFieldProps> = (props) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} />
        <ParticleField {...props} />
      </Canvas>
    </div>
  );
};

export default ParticleFieldWrapper;
