'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
}

const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  intensity = 0.1,
  perspective = 1000,
  scale = 1,
  rotateX = 0,
  rotateY = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (centerY - e.clientY) / (rect.height / 2);
    
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const rotationX = rotateX + mousePosition.y * intensity * 20;
  const rotationY = rotateY + mousePosition.x * intensity * 20;
  const translateZ = isHovered ? 20 : 0;

  return (
    <motion.div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scale }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d',
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Enhanced Card component with 3D effects
interface EnhancedCard3DProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  glowColor?: string;
}

const EnhancedCard3D: React.FC<EnhancedCard3DProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  glowColor = '#3b82f6'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <Card3D
      className={`relative ${className}`}
      intensity={0.15}
      scale={hover ? 1.02 : 1}
    >
      <motion.div
        className={`
          bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
          ${paddingClasses[padding]}
          ${hover ? 'hover:shadow-2xl transition-all duration-300' : ''}
        `}
        style={{
          boxShadow: hover 
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px ${glowColor}20`
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
        whileHover={{
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px ${glowColor}40, 0 0 30px ${glowColor}20`,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Card3D>
  );
};

export { Card3D, EnhancedCard3D };
