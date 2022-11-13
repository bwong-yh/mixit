import * as dotenv from 'dotenv';
dotenv.config();
import * as pg from 'pg';

const { Pool } = pg.default;

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: 'localhost',
  port: 5432,
});

export default pool;
