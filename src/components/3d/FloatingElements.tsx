'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float } from '@react-three/drei';

interface FloatingElementProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  position, 
  rotation, 
  scale, 
  color, 
  speed 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere: React.FC<FloatingElementProps> = ({ 
  position, 
  rotation, 
  scale, 
  color, 
  speed 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus: React.FC<FloatingElementProps> = ({ 
  position, 
  rotation, 
  scale, 
  color, 
  speed 
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.008;
      meshRef.current.rotation.z += speed * 0.012;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.4;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <torusGeometry args={[0.6, 0.2, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.4} 
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const FloatingElements: React.FC = () => {
  const elements = useMemo(() => [
    {
      Component: FloatingElement,
      position: [-3, 2, -2] as [number, number, number],
      rotation: [0.2, 0.5, 0] as [number, number, number],
      scale: 0.8,
      color: '#3b82f6',
      speed: 1.2
    },
    {
      Component: FloatingSphere,
      position: [3, -1, -3] as [number, number, number],
      rotation: [0, 0.3, 0] as [number, number, number],
      scale: 1.2,
      color: '#8b5cf6',
      speed: 0.8
    },
    {
      Component: FloatingTorus,
      position: [-2, -2, -1] as [number, number, number],
      rotation: [0.5, 0, 0.3] as [number, number, number],
      scale: 0.6,
      color: '#06b6d4',
      speed: 1.5
    },
    {
      Component: FloatingElement,
      position: [2, 3, -4] as [number, number, number],
      rotation: [0.1, 0.8, 0.2] as [number, number, number],
      scale: 0.5,
      color: '#10b981',
      speed: 0.9
    },
    {
      Component: FloatingSphere,
      position: [0, 1, -5] as [number, number, number],
      rotation: [0.3, 0.1, 0.4] as [number, number, number],
      scale: 0.7,
      color: '#f59e0b',
      speed: 1.1
    }
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {elements.map(({ Component, ...props }, index) => (
          <Component key={index} {...props} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;
