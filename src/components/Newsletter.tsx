'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAnalytics } from '@/hooks/useAnalytics';

const Newsletter: React.FC = () => {
  const { trackFormSubmit, trackButtonClick } = useAnalytics();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setEmail('');
        setName('');
        await trackFormSubmit('newsletter_subscribe', true);
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
        await trackFormSubmit('newsletter_subscribe', false);
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
      await trackFormSubmit('newsletter_subscribe', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
        >
          <Mail className="w-8 h-8" />
        </motion.div>

        <h3 className="text-3xl font-bold mb-4">
          Stay Updated with My Journey
        </h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest updates on my projects, tech insights, and career journey. 
          No spam, just valuable content delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Status Message */}
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg mb-4 ${
                status === 'success' 
                  ? 'bg-green-500/20 text-green-100' 
                  : 'bg-red-500/20 text-red-100'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm font-medium">{message}</span>
            </motion.div>
          )}

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
            onClick={() => trackButtonClick('newsletter_subscribe', 'newsletter_section')}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now
              </>
            )}
          </Button>
        </form>

        <p className="text-blue-200 text-sm mt-4">
          Join 500+ developers who follow my journey
        </p>
      </div>
    </motion.div>
  );
};

export default Newsletter;
