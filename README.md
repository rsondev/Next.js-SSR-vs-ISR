# Next.js SSR vs ISR + k6

## Run on localhost
1. Install Node.js 18+, MySQL 8, and k6.
2. `mysql -u root -p < sql/schema.sql`
3. Edit `.env.local` with your MySQL password.
4. `npm install`
5. (Optional) `npm run seed`
6. `npm run build && npm start`
7. Open http://localhost:3000/ssr and http://localhost:3000/isr
8. `k6 run k6/loadtest.js` (SSR) and `k6 run -e TARGET=http://localhost:3000/isr k6/loadtest.js` (ISR)
