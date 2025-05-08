import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
console.log('DB connection string:', process.env.DATABASE_URL);