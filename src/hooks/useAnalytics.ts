'use client';

import { useCallback } from 'react';

export const useAnalytics = () => {
  const trackEvent = useCallback(async (event: string, data?: Record<string, unknown>) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: event,
          data,
        }),
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }, []);

  const trackPageView = useCallback(async (page: string) => {
    await trackEvent('page_view', { page });
  }, [trackEvent]);

  const trackProjectView = useCallback(async (projectId: string) => {
    await trackEvent('project_view', { projectId });
  }, [trackEvent]);

  const trackButtonClick = useCallback(async (buttonName: string, location?: string) => {
    await trackEvent('button_click', { buttonName, location });
  }, [trackEvent]);

  const trackFormSubmit = useCallback(async (formName: string, success: boolean) => {
    await trackEvent('form_submit', { formName, success });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackProjectView,
    trackButtonClick,
    trackFormSubmit,
  };
};
