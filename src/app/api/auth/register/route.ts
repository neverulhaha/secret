// src/app/api/auth/register/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // 1. Регистрация через Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    });

    if (error) {
      console.error('Supabase Auth Error:', error);
      return new NextResponse(
        JSON.stringify({ error: error.message }),
        { 
          status: 400, 
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // 2. Проверка подтверждения email
    if (!data.session || !data.user) {
      return new NextResponse(
        JSON.stringify({ 
          message: 'Требуется подтверждение email',
          user: data.user 
        }),
        { 
          status: 202, 
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // 3. Возвращаем успешный ответ
    return new NextResponse(
      JSON.stringify({ user: data.user }),
      { 
        status: 201,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error: any) {
    console.error('General Error:', error);
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}