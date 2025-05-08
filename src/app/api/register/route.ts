import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase environment variables');
}
export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const { data, error } = await supabase
      .from('lunar_users')
      .insert([
        {
          name,
          email,
          password_hash: hashedPassword
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(
      { message: 'Registration successful', user: data[0] },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Registration failed' },
      { status: 400 }
    );
  }
}