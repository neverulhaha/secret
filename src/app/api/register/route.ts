import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_ROLE_KEY
) {
  console.error('Supabase credentials:', {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 5) + '...'
  });
  throw new Error('Missing Supabase environment variables');
}
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Некорректный формат email');
    }

    const { data: existingUser } = await supabase
      .from('lunar_users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      throw new Error('Пользователь с таким email уже существует');
    }
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

    return new NextResponse(
      JSON.stringify({ message: 'Registration successful', user: data[0] }),
      { 
        status: 201,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error: any) {
    console.error('Registration error:', error);
    return new NextResponse(
      JSON.stringify({ error: error.message || 'Registration failed' }),
      { 
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
export async function OPTIONS() {
  return new NextResponse(null, { 
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json'
    }
  });
}