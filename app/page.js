export default function Home() {
  return (
    <main>
      <h1>Next.js SSR vs ISR Demo</h1>
      <p>Romerson Adora – MSIT, Web Systems, Frameworks and Technologies</p>
      <ul>
        <li><a href="/ssr">/ssr</a> – rendered on every request, queries MySQL</li>
        <li><a href="/isr">/isr</a> – static page regenerated every 60 seconds</li>
      </ul>
    </main>
  );
}
