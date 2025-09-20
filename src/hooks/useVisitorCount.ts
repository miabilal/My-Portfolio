'use client';

import { useState, useEffect } from 'react';

export const useVisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }
        const data = await response.json();
        setCount(data.count);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return { count, loading, error };
};
