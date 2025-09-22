'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import Button3D from '@/components/3d/Button3D';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [splineLoadError, setSplineLoadError] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setWebGLAvailable(isWebGLAvailable());
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const renderBackground = () => {
    if (!webGLAvailable || !isMounted) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 animate-pulse" />
      );
    }

    return (
      <>
        {!splineLoadError ? (
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 animate-pulse" />
          }>
            <Spline
              scene="https://prod.spline.design/lxckCLTLO02KHHxf/scene.splinecode"
              onError={() => setSplineLoadError(true)}
              onLoad={() => console.log('Spline scene loaded successfully')}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900" />
        )}
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 sm:px-12">
      {/* Background Spline */}
      <div className="absolute inset-0 z-0">{renderBackground()}</div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-1 pointer-events-none 
        bg-gradient-to-t from-white/70 via-white/20 to-transparent 
        dark:from-black/80 dark:via-black/40 dark:to-transparent" />

      {/* Left-aligned text content */}
      <motion.div
        className="relative z-10 text-left max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* SaaS-style label above name */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-blue-400 dark:text-blue-300 mb-6 px-4 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/50"
        >
          <Sparkles className="w-4 h-4" />
          Welcome to my digital realm
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Muhammad Bilal
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-white leading-relaxed font-medium"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Software Engineer specializing in{' '}
          <span className="font-bold text-blue-300">Mobile</span> &{' '}
          <span className="font-bold text-purple-300">IoT solutions</span>.  
          I build experiences that scale, perform, and inspire trust.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
        >
          {/* Updated button styles */}
          <a
            href="#contact"
            className="px-6 py-3 border border-white/50 text-white rounded-md hover:bg-white/10 transition-all font-medium text-center"
          >
            Let’s Talk
          </a>
          <a
            href="https://github.com/miabilal/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/50 text-white rounded-md hover:bg-white/10 transition-all font-medium text-center"
          >
            View Work
          </a>
          <a
            href="/Bilal.pdf"
            className="px-6 py-3 border border-white/50 text-white rounded-md hover:bg-white/10 transition-all font-medium text-center flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
