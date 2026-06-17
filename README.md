# Tex Vet Trees

Marketing site for **Tex Vet Trees** — veteran owned and operated tree service and
landscaping serving Central and North Texas.

Built with React 19, Vite, and Tailwind CSS v4. It's a fully static single-page site
(no backend, no API keys required).

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy to Vercel

The repo includes `vercel.json` and is configured for zero-config deployment:

- Framework: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

Import the project in Vercel (or run `vercel`) and deploy — no environment
variables are needed.
