# moh-cv — Mohammad Abotargah

Bilingual CV website for **https://moh-cv.kohlestate-ksa.online**

- English at `/`, Arabic (full right-to-left) at `/ar/`. Arabic browsers are sent to `/ar/` on their first visit; the language switch is remembered.
- Static site built with [Astro](https://astro.build). No server code, no database, no external requests: fonts (IBM Plex Sans, Sans Arabic, Mono) are bundled.
- Download button serves `public/Mohammad_Abotargah_CV.pdf`.
- SEO: canonical + hreflang links, OpenGraph preview image (`public/og.png`), JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- Prints as a clean CV (Ctrl/Cmd + P).

## Update the content

All text lives in **`src/data/cv.ts`**, English and Arabic side by side. Edit it, then rebuild. To update the downloadable CV, replace `public/Mohammad_Abotargah_CV.pdf` (keep the file name).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # serve ./dist locally
```

## Deploy on the VPS with Coolify

The repo ships a `Dockerfile` (Node build → nginx serving `dist/`) and `nginx.conf`.

1. **DNS** (OVHcloud → Web Cloud → Domain names → `kohlestate-ksa.online` → DNS zone): add an **A** record, sub-domain `moh-cv`, target = the VPS IPv4 address. Wait until `nslookup moh-cv.kohlestate-ksa.online` returns that IP.
2. **Coolify** → Projects → New resource → Public/Private Repository → `aboziyad2251/MyCV`, branch `main`.
3. Build pack: **Dockerfile**. Exposed port: **80**.
4. Domain: `https://moh-cv.kohlestate-ksa.online`. Coolify requests the Let's Encrypt certificate.
5. Deploy, and turn on **Auto deploy** so every push to `main` goes live.

### Without Coolify (plain Docker on the VPS)

```bash
git clone https://github.com/aboziyad2251/MyCV.git && cd MyCV
docker build -t moh-cv .
docker run -d --name moh-cv --restart unless-stopped -p 8080:80 moh-cv
```

Then point your reverse proxy (nginx/Caddy/Traefik) for `moh-cv.kohlestate-ksa.online` at `127.0.0.1:8080` with HTTPS.

## Structure

```
src/data/cv.ts            all CV content (EN + AR)
src/components/CV.astro   page sections
src/layouts/Base.astro    <head>, SEO, fonts, language redirect
src/styles/global.css     design tokens and layout (RTL-aware)
src/pages/index.astro     English page
src/pages/ar/index.astro  Arabic page
public/                   CV PDF, favicon, og.png, robots.txt, sitemap.xml
```
