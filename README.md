# StackRadar Frontend — Next.js

## Setup

```bash
npm install
```

## Run Locally

Make sure backend is running first on port 8000, then:

```bash
npm run dev
```

App runs at: http://localhost:3000

## Environment Variables

Local: `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Production: `.env.production`
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

## Deploy on Vercel

1. Push frontend folder to GitHub
2. Import project on vercel.com
3. Add environment variable:
   - Key: NEXT_PUBLIC_API_URL
   - Value: your Render backend URL
4. Deploy

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Axios
