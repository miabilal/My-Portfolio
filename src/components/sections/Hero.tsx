'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Code, Smartphone, Database, Zap } from 'lucide-react';
import Button3D from '@/components/3d/Button3D';
import { contactInfo } from '@/data/portfolio';
import PerformanceOptimized3D, { useIsMobile, PerformanceMonitor } from '@/components/3d/PerformanceOptimized3D';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.1 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <PerformanceOptimized3D enable3D={!isMobile} isMobile={isMobile}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </PerformanceOptimized3D>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-6"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Muhammad Bilal
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building innovative mobile applications, IoT solutions, and scalable software systems. 
            I specialize in Flutter, Swift,SwiftUI,UiKit, and Kotlin that make a real impact.
          </motion.p>

          {/* Tech Icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            className="flex justify-center items-center space-x-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Smartphone className="w-8 h-8 text-blue-600" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Code className="w-8 h-8 text-green-600" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Database className="w-8 h-8 text-purple-600" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Zap className="w-8 h-8 text-yellow-600" />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button3D
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              glowColor="#3b82f6"
              intensity={0.2}
            >
              Get In Touch
            </Button3D>
            <Button3D
              href={`https://github.com/${contactInfo.github}`}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              glowColor="#8b5cf6"
              intensity={0.15}
            >
              View My Work
            </Button3D>
            <Button3D
              href={`mailto:${contactInfo.email}`}
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
              glowColor="#06b6d4"
              intensity={0.1}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button3D>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll to explore
            </span>
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Performance Monitor (Development Only) */}
      <PerformanceMonitor />
    </section>
  );
};

export default Hero;
