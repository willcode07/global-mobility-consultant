# Nexo Mobility

Marketing website for **Nexo Mobility** — boutique consulting for Spanish companies expanding into the United States.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and `next-intl` (English, Spanish & Catalan). Single-page scrollable marketing site. Static-export compatible for GitHub Pages; Vercel-ready by default.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — add email, LinkedIn, HubSpot
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en/`).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email in footer and form mailto fallback |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile/company URL |
| `NEXT_PUBLIC_EXPANSION_GUIDE_URL` | Optional PDF/link for resources |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` / `NEXT_PUBLIC_HUBSPOT_FORM_ID` | HubSpot form submit |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://nexo-mobility.com`) |

## Project structure

```
app/[locale]/          # Locale home (single scrollable page)
components/            # Section components and shared primitives
messages/en.json       # English copy
messages/es.json       # Spanish copy
messages/ca.json       # Catalan copy
public/brand/          # Logo mark + favicons
public/images/         # Hero imagery
lib/site.ts            # Site config / env helpers
```

Homepage sections (anchor targets): `#services`, `#industries`, `#about`, `#contact` (plus `#what-we-do`, `#how-we-work`, `#cases`, `#why`, `#faq`).

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production static export (GitHub Pages / any host) |
| `npm run lint` | ESLint |

## Content

All marketing copy lives in `messages/en.json`, `messages/es.json`, and `messages/ca.json`, including service packages, add-on pricing, and FAQs.

## Custom domain

Live at [https://nexo-mobility.com](https://nexo-mobility.com). DNS is configured at GoDaddy; GitHub Pages serves the static export with `public/CNAME`.

## License

Private — all rights reserved.
