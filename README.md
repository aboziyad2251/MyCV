# moh-cv — Mohammad Abotargah

Bilingual CV website for **https://moh-cv.kohlestate-ksa.online**

- English at `/`, Arabic (full right-to-left) at `/ar/`. Arabic browsers are sent to `/ar/` on their first visit; the language switch is remembered.
- Static site built with [Astro](https://astro.build). No server code, no database, no external requests: fonts (IBM Plex Sans, Sans Arabic, Mono) are bundled.
- Download button serves `public/Mohammad_Abotargah_CV.pdf`.
- SEO: canonical + hreflang links, OpenGraph preview image (`public/og.png`), JSON-LD `Person`, `robots.txt`, `sitemap.xml`.
- **Two themes:** light (cool white + blue) and dark (deep navy + electric blue / cyan). The default follows the visitor's device setting; the sun/moon button switches it and the choice is remembered.
- **Phone = app:** on phones and tablets the layout switches automatically to an app-style screen with a bottom tab bar (Profile · Career · Projects · Skills · Contact). It can be installed to the home screen (web app manifest + offline cache in `public/sw.js`), and opens full-screen like an app.
- Prints as a clean CV (Ctrl/Cmd + P), always in the light palette.

## Update the content

All text lives in **`src/data/cv.ts`**, English and Arabic side by side. Edit it, then rebuild. To update the downloadable CV, replace `public/Mohammad_Abotargah_CV.pdf` (keep the file name).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # serve ./dist locally
```

## Deploy on the new OVHcloud VPS (recommended)

Everything needed is in `deploy/`: Docker Compose runs the site behind **Caddy**, which gets and renews the HTTPS certificate on its own.

1. **DNS**: OVHcloud → Web Cloud → Domain names → `kohlestate-ksa.online` → DNS zone. The **A** record `moh-cv` must point to the **new** VPS IPv4 address.
2. **One command on the VPS** (Ubuntu or Debian, fresh install):

   ```bash
   ssh ubuntu@NEW_VPS_IP
   curl -fsSL https://raw.githubusercontent.com/aboziyad2251/MyCV/main/deploy/install.sh | sudo bash
   ```

   The script installs Docker if needed, checks that DNS points to this server, clones the repo into `/opt/moh-cv`, builds the site and starts it. It picks the setup by itself:

   - **Nginx Proxy Manager already running** (the current VPS): only the site container starts (`moh-cv-web`, on NPM's Docker network; no host port is published). Then add one Proxy Host in NPM: domain `moh-cv.kohlestate-ksa.online` → `http://moh-cv-web:80`, SSL tab → new Let's Encrypt certificate, Force SSL on. The script prints these steps.
   - **Ports 80/443 free:** the site runs behind Caddy, which issues HTTPS on its own (`deploy/docker-compose.yml`).
   - **Anything else on 80/443:** it stops without changing anything.

   It is safe to run again; running it again pulls the latest `main` and redeploys.
3. Open https://moh-cv.kohlestate-ksa.online

### Auto-deploy on every push (optional)

`.github/workflows/deploy.yml` re-runs the install script over SSH whenever `main` changes. It stays off until you add three repository secrets (GitHub → Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `VPS_HOST` | new VPS IP address |
| `VPS_USER` | `ubuntu` (OVH default; has passwordless sudo) |
| `VPS_SSH_KEY` | a private key whose public key is in `~/.ssh/authorized_keys` on the VPS |

To make a deploy key: `ssh-keygen -t ed25519 -f moh-cv-deploy -N ""`, append `moh-cv-deploy.pub` to the VPS user's `~/.ssh/authorized_keys`, and paste the contents of `moh-cv-deploy` into `VPS_SSH_KEY`.

`.github/workflows/ci.yml` builds the site on every pull request and push, so a broken change shows up before it goes live.

### Useful commands on the VPS

```bash
cd /opt/moh-cv
docker compose -f deploy/docker-compose.yml ps        # status
docker compose -f deploy/docker-compose.yml logs -f   # logs (Caddy shows certificate progress)
docker compose -f deploy/docker-compose.yml down      # stop
```

### Alternative: Coolify

If the VPS runs Coolify instead (it uses ports 80/443 itself, so don't run both): New resource → Public Repository → `aboziyad2251/MyCV`, branch `main`, build pack **Dockerfile**, port **80**, domain `https://moh-cv.kohlestate-ksa.online`, Auto deploy on.

## Structure

```
src/data/cv.ts            all CV content (EN + AR)
src/components/CV.astro   page sections
src/layouts/Base.astro    <head>, SEO, fonts, language redirect
src/styles/global.css     design tokens and layout (RTL-aware)
src/pages/index.astro     English page
src/pages/ar/index.astro  Arabic page
public/                   CV PDF, favicon, icons/, og.png, manifests, sw.js, robots.txt, sitemap.xml
deploy/                   install.sh (VPS setup), docker-compose.npm.yml (behind Nginx Proxy Manager), docker-compose.yml + Caddyfile (standalone)
.github/workflows/        ci.yml (build check), deploy.yml (auto-deploy over SSH)
```
