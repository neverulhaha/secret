// src/app/api/auth/register/route.ts
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });

  try {
    const { name, email, password } = await request.json();
    console.log('[REGISTER] Received data:', { name, email });

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Все поля обязательны" }),
        { status: 400, headers }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('[REGISTER] Password hashed');

    const result = await query(
      `INSERT INTO lunar_users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    console.log('[REGISTER] User created:', result.rows[0]);
    return new NextResponse(
      JSON.stringify(result.rows[0]),
      { status: 201, headers }
    );

  } catch (error: any) {
    console.error('[REGISTER] Error:', error);

    if (error.code === '23505') {
      return new NextResponse(
        JSON.stringify({ error: "Email уже используется" }),
        { status: 409, headers }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: "Ошибка сервера" }),
      { status: 500, headers }
    );
  }
}

export async function GET() {
  return new NextResponse(
    JSON.stringify({ error: "Метод не разрешен" }),
    { status: 405 }
  );
}