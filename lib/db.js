import mysql from 'mysql2/promise';

const g = globalThis;

export const pool =
  g.mysqlPool ||
  mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
  });

if (process.env.NODE_ENV !== 'production') g.mysqlPool = pool;
