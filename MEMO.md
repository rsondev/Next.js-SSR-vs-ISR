From: Romerson Adora, MSIT
Subject: Next.js SSR vs ISR Load Test

Setup. I built a Next.js 14 (App Router) application with two pages. The /ssr page uses force-dynamic and queries a MySQL products table through a mysql2 connection pool on every request. The /isr page exports revalidate = 60, so it is pre-rendered and regenerated at most every 60 seconds. I created the database from schema.sql, set credentials in .env.local, then ran npm run build and npm start on localhost:3000.

Load test results. Using k6, I ramped from 0 to 20, then 50 virtual users, then back to 0 over 50 seconds. SSR handled 1,384 requests at 27.5 requests/s, with average latency of 22.77 ms, p95 of 65.21 ms, and 0% errors. ISR handled 1,409 requests at 27.8 requests/s, with average latency of 1.62 ms, p95 of 2.83 ms, and 0% errors.

Observed differences. Throughput was nearly identical because each virtual user pauses one second per iteration, which caps the request rate. Latency differed sharply: ISR’s average was about 14 times lower than SSR’s, and its p95 about 23 times lower. SSR rendered a fresh page and queried MySQL on every request, while ISR served cached HTML with no database work. The tradeoff is freshness, since ISR content can be up to 60 seconds old. SSR suits frequently changing data, while ISR suits mostly static content.