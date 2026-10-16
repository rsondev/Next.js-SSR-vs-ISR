import { pool } from '../../lib/db';

// Force server-side rendering on every request
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  const [rows] = await pool.query('SELECT id, name, price FROM products ORDER BY id LIMIT 50');
  const renderedAt = new Date().toISOString();

  return (
    <main>
      <h1>SSR Page (MySQL)</h1>
      <p>Rendered at: <strong>{renderedAt}</strong> (changes on every refresh)</p>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead><tr><th>ID</th><th>Name</th><th>Price (PHP)</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}><td>{r.id}</td><td>{r.name}</td><td>{r.price}</td></tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
