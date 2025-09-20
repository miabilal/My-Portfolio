import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { prisma } from '@/lib/database';
import { trackEvent } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Send email
    const emailResult = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    // Track analytics
    await trackEvent({
      event: 'contact_form_submit',
      data: { contactId: contact.id, subject },
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || undefined,
    });

    if (emailResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
        contactId: contact.id,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Message saved but email sending failed. I\'ll still receive your message.',
        contactId: contact.id,
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
