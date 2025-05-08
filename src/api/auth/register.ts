import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    console.log('[REGISTER] Starting registration process');
    
    const requestBody = await request.text();
    console.log('[REGISTER] Raw request body:', requestBody);
    
    const { name, email, password } = JSON.parse(requestBody);
    console.log('[REGISTER] Parsed data:', { name, email });

    if (!email || !password || !name) {
      console.error('[REGISTER] Validation failed');
      return NextResponse.json(
        { error: "Все поля обязательны" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('[REGISTER] Password hashed');

    const result = await query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    );
    
    console.log('[REGISTER] DB insertion successful:', result.rows[0]);
    
    return NextResponse.json(result.rows[0], { status: 201 });

  } catch (error: any) {
    console.error('[REGISTER] Error:', error);
    
    if (error.code === '23505') {
      return NextResponse.json(
        { error: "Пользователь с таким email уже существует" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Ошибка сервера: " + error.message },
      { status: 500 }
    );
  }
}