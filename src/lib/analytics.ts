import { prisma } from './database';

export interface AnalyticsEvent {
  event: string;
  data?: Record<string, unknown>;
  ip?: string;
  userAgent?: string;
}

export const trackEvent = async (event: AnalyticsEvent) => {
  try {
    await prisma.analytics.create({
      data: {
        event: event.event,
        data: event.data ? JSON.stringify(event.data) : null,
        ip: event.ip || 'unknown',
        userAgent: event.userAgent || null,
      },
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};

export const trackPageView = async (page: string, ip?: string, userAgent?: string) => {
  try {
    // Track in analytics
    await trackEvent({
      event: 'page_view',
      data: { page },
      ip,
      userAgent,
    });

    // Track in visitors table
    await prisma.visitor.create({
      data: {
        ip: ip || 'unknown',
        userAgent: userAgent || null,
        page,
      },
    });
  } catch (error) {
    console.error('Page view tracking failed:', error);
  }
};

export const trackProjectView = async (projectId: string, ip?: string, userAgent?: string) => {
  try {
    await prisma.projectView.create({
      data: {
        projectId,
        ip: ip || 'unknown',
        userAgent: userAgent || null,
      },
    });

    await trackEvent({
      event: 'project_view',
      data: { projectId },
      ip,
      userAgent,
    });
  } catch (error) {
    console.error('Project view tracking failed:', error);
  }
};

export const getAnalytics = async () => {
  try {
    const [
      totalVisitors,
      pageViews,
      projectViews,
      recentEvents,
      topPages,
      topProjects
    ] = await Promise.all([
      prisma.visitor.count(),
      prisma.analytics.count({ where: { event: 'page_view' } }),
      prisma.projectView.count(),
      prisma.analytics.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.visitor.groupBy({
        by: ['page'],
        _count: { page: true },
        orderBy: { _count: { page: 'desc' } },
        take: 5,
      }),
      prisma.projectView.groupBy({
        by: ['projectId'],
        _count: { projectId: true },
        orderBy: { _count: { projectId: 'desc' } },
        take: 5,
      }),
    ]);

    return {
      totalVisitors,
      pageViews,
      projectViews,
      recentEvents,
      topPages,
      topProjects,
    };
  } catch (error) {
    console.error('Failed to get analytics:', error);
    return null;
  }
};
