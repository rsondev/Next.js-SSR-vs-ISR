// Optional: adds 500 extra rows so the SSR query does more work
require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');
(async () => {
  const c = await mysql.createConnection({
    host: process.env.DB_HOST, port: process.env.DB_PORT,
    user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME,
  });
  for (let i = 0; i < 500; i++) {
    await c.query('INSERT INTO products (name, price) VALUES (?, ?)', [`Item ${i}`, (Math.random() * 1000).toFixed(2)]);
  }
  console.log('Seeded 500 rows');
  await c.end();
})();
