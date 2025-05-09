import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { hash } from 'bcryptjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
    }

    const { data: existingUser } = await supabase
      .from('lunar_users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return new NextResponse(JSON.stringify({ error: 'User already exists' }), {
        status: 409,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
    }

    const hashedPassword = await hash(password, 10);
    const { data: user, error } = await supabase
      .from('lunar_users')
      .insert([{ name, email, password_hash: hashedPassword }])
      .select();

    if (error) throw error;

    return new NextResponse(JSON.stringify({ user: user[0] }), {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });

  } catch (error: any) {
    return new NextResponse(JSON.stringify({ 
      error: error.message || 'Registration failed' 
    }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}