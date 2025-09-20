'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';
import { useVisitorCount } from '@/hooks/useVisitorCount';

const VisitorCounter: React.FC = () => {
  const { count, loading, error } = useVisitorCount();

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
      >
        <Users className="w-4 h-4" />
        <span className="text-sm">Loading visitors...</span>
      </motion.div>
    );
  }

  if (error) {
    return null; // Fail silently
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
    >
      <Users className="w-4 h-4" />
      <span className="text-sm">
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {count?.toLocaleString() || '0'}
        </span>
        {' '}visitors
      </span>
      <TrendingUp className="w-3 h-3 text-green-500" />
    </motion.div>
  );
};

export default VisitorCounter;
