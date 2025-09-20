import { NextRequest, NextResponse } from 'next/server';
import { trackPageView, trackProjectView, getAnalytics } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || undefined;

    switch (type) {
      case 'page_view':
        await trackPageView(data.page, ip, userAgent);
        break;
      case 'project_view':
        await trackProjectView(data.projectId, ip, userAgent);
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid tracking type' },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const analytics = await getAnalytics();
    
    if (!analytics) {
      return NextResponse.json(
        { error: 'Failed to fetch analytics' },
        { status: 500 }
      );
    }

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
