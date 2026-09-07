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

## Localization

First-time visitors start in English. The homepage flag selector and profile language settings share a saved preference for English, German or Slovenian.

English source strings are translation keys. Add Slovenian equivalents to `src/locales/sl.ts` and German equivalents to `src/locales/de.ts` and render labels through `useLocale().translate(...)`, including placeholders and dynamic messages. Keep complete sentences together so count patterns can use language-specific singular and plural forms (including the Slovenian dual). Translate option labels while keeping their original `value` for filters and saved data. Vue tracks locale changes directly; no DOM translation observer is needed.

Run `npm run test:locales` to check translations, reactive language switching, option values, and matching translation catalogs, saved language preferences, and rendering of all routes in all three languages. `LOCALE_AUDIT=1 npm run test:locales` also lists unchanged rendered text for review (including proper names and technical identifiers).

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

The proof-of-concept view switch is available in both application shells and on the profile page. Set `prototypeViewSwitchEnabled` in `src/config/prototype.ts` to `false` to remove these switches after the prototype phase.
