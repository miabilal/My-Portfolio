import { NextResponse } from 'next/server';
import { prisma } from '@/lib/database';

export async function GET() {
  try {
    const count = await prisma.visitor.count();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Visitor count error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
