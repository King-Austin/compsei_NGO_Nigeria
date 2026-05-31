# COMPSEI — Community Psychosocial Support Empowerment Initiative

> Official website for COMPSEI, a Nigerian NGO addressing psychosocial, environmental, and community-level challenges through education, empowerment, and advocacy.

**Live site:** [compsei.com.ng](https://compsei.com.ng)

---

## Overview

This is the source code for the COMPSEI website — a statically generated, SEO-optimised web presence built with **Next.js 14 App Router**. Every page is pre-rendered at build time, ships full HTML to search engines and users, and is deployed to Vercel at zero cost.

### What COMPSEI does

- Psychosocial support and mental health advocacy in underserved Nigerian communities
- Climate resilience programs addressing the mental health impact of flooding and displacement
- Community empowerment — skills training, safe spaces, and economic inclusion for women and youth
- Anti-stigma campaigns and peer support group facilitation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables (teal/gold theme) |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Contact | WhatsApp `wa.me` deep link (no backend required) |
| Deployment | Vercel |

---

## Project Structure

```
compsei/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout — global metadata, Header, Footer, Providers
│   ├── template.tsx        # Page transition wrapper (Framer Motion)
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/         # Individual blog posts (generateStaticParams)
│   ├── challenges/
│   ├── contact/
│   │   ├── page.tsx        # Contact page (Server Component)
│   │   └── ContactForm.tsx # WhatsApp form (Client Component)
│   ├── get-involved/
│   ├── impact/
│   ├── partners/
│   ├── programs/
│   ├── resources/
│   ├── team/
│   ├── sitemap.ts          # Auto-generates /sitemap.xml
│   └── robots.ts           # Auto-generates /robots.txt
├── components/
│   ├── ui/                 # shadcn/ui components (Button, Card, Toast, etc.)
│   ├── Header.tsx          # Site navigation (Client Component)
│   ├── Footer.tsx          # Site footer (Server Component)
│   ├── Providers.tsx       # QueryClient, ThemeProvider, Toasters (Client)
│   ├── JsonLd.tsx          # JSON-LD structured data (NGO + Article schema)
│   └── animations.tsx      # Shared Framer Motion variants
├── content/
│   └── blog/
│       └── index.ts        # Blog post data (6 articles)
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
└── public/
    └── images/             # All site images (next/image optimisation)
```

---

## SEO Features

- **Server-side rendering** — full HTML delivered to crawlers on every page
- **`/sitemap.xml`** — auto-generated, covers all 17 routes (11 pages + 6 blog posts)
- **`/robots.txt`** — auto-generated, references sitemap
- **Open Graph + Twitter Card** metadata on every page
- **JSON-LD structured data** — NGO schema site-wide; Article schema on each blog post
- **`next/image`** — automatic WebP/AVIF conversion and lazy loading
- **Canonical URLs** — set via `alternates.canonical` in each page's metadata export
- **Blog section** — 6 original articles on psychosocial support, climate resilience, and community empowerment indexed as independent URLs

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/King-Austin/compsei_NGO_Nigeria.git
cd compsei_NGO_Nigeria

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → http://localhost:3000
```

### Other commands

```bash
npm run build    # Production build (static generation)
npm run start    # Serve the production build locally
npm run lint     # ESLint
```

---

## Contact Form

The contact form requires no backend. On submission it opens WhatsApp with a pre-filled message to **+234 810 252 2048**. The `wa.me` URL is built client-side in `app/contact/ContactForm.tsx`.

---

## Blog

Six original articles live in `content/blog/index.ts` as plain TypeScript data (no MDX). Adding a new post is as simple as appending an object to the array — the blog listing and sitemap both update automatically on the next build.

| Post | Category |
|---|---|
| What Is Psychosocial Support? A Nigerian Perspective | Psychosocial Support |
| Climate Change and Mental Health in Nigeria | Climate Resilience |
| Community Empowerment for Women and Youth | Community Empowerment |
| Breaking Mental Health Stigma Through Advocacy | Advocacy |
| The Power of Peer Support Groups | Psychosocial Support |
| Flooding, Displacement, and Psychosocial Recovery | Disaster Resilience |

---

## Deployment

The site deploys automatically to Vercel on every push to `main`. No additional configuration is needed — `vercel.json` declares the Next.js framework so Vercel uses the correct build pipeline.

To deploy manually:
1. Push to `main`
2. Vercel picks it up and runs `next build`
3. All 17 routes are pre-rendered as static HTML and served from Vercel's edge network

---

## Contributing

1. Branch off `main` — use descriptive branch names (`fix/...`, `feature/...`)
2. Run `npm run build` locally before opening a PR — the build must pass with zero errors
3. Keep pages as Server Components where possible; add `'use client'` only for interactivity or Framer Motion

---

## License

All rights reserved. COMPSEI, 2024–2025. Website source code is maintained for operational purposes; content and branding belong to the Community Psychosocial Support Empowerment Initiative, Nigeria.
