import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

console.log('DB Connection:', {
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER
});

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: corsHeaders
  });
}

export async function POST(request: Request) {
  const headers = { ...corsHeaders };

  if (request.method !== 'POST') {
    return new NextResponse('Method Not Allowed', {
      status: 405,
      headers: {
        ...headers,
        'Allow': 'POST'
      }
    });
  }

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Все поля обязательны" }),
        { status: 400, headers }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: "Некорректный email" }),
        { status: 400, headers }
      );
    }

    const existingUser = await query(
      'SELECT email FROM lunar_users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return new NextResponse(
        JSON.stringify({ error: "Email уже используется" }),
        { status: 409, headers }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await query(
      `INSERT INTO lunar_users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    ).catch(error => {
      console.error('Database Error:', error);
      throw error;
    });

    return new NextResponse(
      JSON.stringify(result.rows[0]),
      { 
        status: 201,
        headers
      }
    );

  } catch (error: any) {
    console.error('Ошибка регистрации:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: error.message.includes("уже используется") 
          ? "Email уже используется" 
          : "Ошибка сервера"
      }),
      { status: 500, headers }
    );
  }
}