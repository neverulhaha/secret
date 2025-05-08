import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};

const headers = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Content-Type': 'application/json'
});

export async function POST(request: Request) {
  try {
    console.log('[REGISTER] Starting registration process');
    
    const requestBody = await request.text();
    console.log('[REGISTER] Raw request body:', requestBody);
    
    const { name, email, password } = JSON.parse(requestBody);
    console.log('[REGISTER] Parsed data:', { name, email });

    if (!email || !password || !name) {
      console.error('[REGISTER] Validation failed');
      return new Response(
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
    
    console.log('[REGISTER] DB insertion successful:', result.rows[0]);
    
    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers
    });
    
  } catch (error: any) {
    console.error('[REGISTER] Error:', error);
    
    if (error.code === '23505') {
      return new Response(
        JSON.stringify({ error: "Пользователь с таким email уже существует" }),
        { status: 409, headers }
      );
    }

    return new Response(
      JSON.stringify({ error: "Ошибка сервера: " + error.message }),
      { status: 500, headers }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ error: "Метод не реализован" }), 
    { status: 501, headers }
  );
}

export async function PUT() {
  return new Response(
    JSON.stringify({ error: "Метод не реализован" }), 
    { status: 501, headers }
  );
}