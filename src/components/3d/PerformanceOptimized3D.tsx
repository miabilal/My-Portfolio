'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load 3D components for better performance
const FloatingElements = lazy(() => import('./FloatingElements'));
const ParticleField = lazy(() => import('./ParticleField'));

interface PerformanceOptimized3DProps {
  children: React.ReactNode;
  enable3D?: boolean;
  isMobile?: boolean;
}

const PerformanceOptimized3D: React.FC<PerformanceOptimized3DProps> = ({
  children,
  enable3D = true,
  isMobile = false
}) => {
  // Disable 3D effects on mobile for better performance
  if (isMobile || !enable3D) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* 3D Background Elements */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />}>
        <FloatingElements />
        <ParticleField count={100} speed={0.2} />
      </Suspense>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Mobile detection hook
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  const [fps, setFps] = React.useState(0);
  const frameCount = React.useRef(0);
  const lastTime = React.useRef(performance.now());

  React.useEffect(() => {
    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime.current >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / (currentTime - lastTime.current)));
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <motion.div
      className="fixed top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      FPS: {fps}
    </motion.div>
  );
};

export default PerformanceOptimized3D;
