import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Все поля обязательны" }),
        { status: 400, headers: new Headers(headers) }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await query(
      `INSERT INTO lunar_users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    return new NextResponse(
      JSON.stringify(result.rows[0]),
      { 
        status: 201,
        headers: new Headers(headers)
      }
    );

  } catch (error: any) {
    console.error('Ошибка регистрации:', error);
    
    if (error.code === '23505') {
      return new NextResponse(
        JSON.stringify({ error: "Email уже используется" }),
        { status: 409, headers: new Headers(headers) }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: "Ошибка сервера" }),
      { status: 500, headers: new Headers(headers) }
    );
  }
}