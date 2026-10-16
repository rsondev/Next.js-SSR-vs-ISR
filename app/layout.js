export const metadata = { title: 'Next.js SSR vs ISR' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '40px auto', padding: '0 16px' }}>
        <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <a href="/">Home</a>
          <a href="/ssr">SSR (MySQL)</a>
          <a href="/isr">ISR (Static)</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
