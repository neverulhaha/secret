
import { createClient } from '@supabase/supabase-js'
import { hash } from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, password } = req.body

    // Валидация email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Проверка существующего пользователя
    const { data: existingUser, error: lookupError } = await supabase
      .from('lunar_users')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' })
    }

    // Хеширование пароля
    const hashedPassword = await hash(password, 10)

    // Создание пользователя
    const { data: newUser, error: createError } = await supabase
      .from('lunar_users')
      .insert([{ name, email, password_hash: hashedPassword }])
      .select()

    if (createError) throw createError

    return res.status(201).json({ 
      message: 'Registration successful', 
      user: newUser[0] 
    })

  } catch (error: any) {
    console.error('Registration error:', error)
    return res.status(500).json({ 
      error: error.message || 'Registration failed' 
    })
  }
}