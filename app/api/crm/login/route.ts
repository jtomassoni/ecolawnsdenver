import { NextRequest, NextResponse } from 'next/server';
import { validateCredentials, createSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    if (!username || !password || !validateCredentials(username, password)) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }
    await createSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: 'Login failed' }, { status: 500 });
  }
}
