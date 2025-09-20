'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Text3D, Center, Float } from '@react-three/drei';

interface TechIcon3DProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  icon: string;
}

const TechIcon3D: React.FC<TechIcon3DProps> = ({ 
  position, 
  rotation, 
  scale, 
  color, 
  speed,
  icon
}) => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * 0.01;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.2}>
      <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
        {/* Outer ring */}
        <mesh>
          <torusGeometry args={[1.2, 0.1, 8, 100]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.8} 
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Inner sphere */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5} 
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Icon text */}
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {icon}
            <meshStandardMaterial 
              color="white" 
              metalness={0.9} 
              roughness={0.1}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
};

const TechIcons3D: React.FC = () => {
  const icons = [
    {
      position: [-4, 2, -2] as [number, number, number],
      rotation: [0.2, 0.5, 0] as [number, number, number],
      scale: 0.8,
      color: '#3b82f6',
      speed: 1.0,
      icon: '📱'
    },
    {
      position: [4, -1, -3] as [number, number, number],
      rotation: [0, 0.3, 0] as [number, number, number],
      scale: 1.0,
      color: '#8b5cf6',
      speed: 0.8,
      icon: '</>'
    },
    {
      position: [-2, -2, -1] as [number, number, number],
      rotation: [0.5, 0, 0.3] as [number, number, number],
      scale: 0.7,
      color: '#06b6d4',
      speed: 1.2,
      icon: '🗄️'
    },
    {
      position: [2, 3, -4] as [number, number, number],
      rotation: [0.1, 0.8, 0.2] as [number, number, number],
      scale: 0.6,
      color: '#10b981',
      speed: 0.9,
      icon: '⚡'
    }
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {icons.map((icon, index) => (
          <TechIcon3D key={index} {...icon} />
        ))}
      </Canvas>
    </div>
  );
};

export default TechIcons3D;
