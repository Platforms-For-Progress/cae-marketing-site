import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  ssl: { rejectUnauthorized: false },
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

// query(`CREATE TABLE IF NOT EXISTS subscribe (email VARCHAR(255) PRIMARY KEY)`);
// query(
//   `CREATE TABLE IF NOT EXISTS contact (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), message TEXT)`
// );
