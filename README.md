# Vintro clickable prototype

A mobile-first Vue 3 prototype for vehicle service history, maintenance planning, specifications, and ownership transfer. All data and interactions are local mocks.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The repository is configured for GitHub → Vercel deployment.

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel will read `vercel.json` and detect Vite automatically.
4. Deploy without adding environment variables; the prototype uses local mock data.

Deployment settings are explicitly configured as:

- Node.js: `20.x`
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback: all application routes rewrite to `index.html`

Local secrets, `.env` files, dependencies, and build output are excluded from Git through `.gitignore`.
