// Incremental Static Regeneration: rebuilt at most once every 60 seconds
export const revalidate = 60;

export default function ISRPage() {
  const generatedAt = new Date().toISOString();

  return (
    <main>
      <h1>ISR Page (Static Content)</h1>
      <p>Generated at: <strong>{generatedAt}</strong></p>
      <p>
        This page is pre-rendered at build time and served from cache. Next.js
        regenerates it in the background at most once every 60 seconds.
      </p>
    </main>
  );
}
