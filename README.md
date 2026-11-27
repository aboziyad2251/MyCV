# moh-cv — Mohammad Abotargah CV website

Bilingual (English / العربية, full RTL) CV site. Next.js 14 + TypeScript + Tailwind, exported as static HTML and served by nginx.

Live: https://moh-cv.kohlestate-ksa.online

## Edit content
All text lives in `content/cv.ts` (both languages side by side). Change it there and rebuild.
Replace `public/Mohammad_Abotargah_CV.pdf` to update the downloadable CV.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy on Coolify (VPS)
1. **DNS**: at the registrar for `kohlestate-ksa.online`, add an `A` record: host `moh-cv` → your VPS IP. Wait for it to resolve (`nslookup moh-cv.kohlestate-ksa.online`).
2. **Coolify** → Projects → New resource → *Public/Private Repository* → `aboziyad2251/MyCV`, branch `main`.
3. Build pack: **Dockerfile** (uses the `Dockerfile` in this repo). Port: **80**.
4. Domains: `https://moh-cv.kohlestate-ksa.online`. Coolify issues the Let's Encrypt certificate automatically.
5. Deploy. Turn on *Auto deploy* so every push to `main` redeploys.

## Notes
- Contact form opens the visitor's email app (static site, no backend). WhatsApp and phone are shown too.
- Language: auto-detects Arabic browsers; `#ar` in the URL forces Arabic; choice is remembered.
- SEO: OpenGraph, JSON-LD `Person`, robots.txt, sitemap.xml.
