#!/usr/bin/env bash
# One-command setup for the CV site on a fresh Ubuntu / Debian VPS (e.g. a new OVHcloud VPS).
#
#   ssh ubuntu@YOUR_VPS_IP
#   curl -fsSL https://raw.githubusercontent.com/aboziyad2251/MyCV/main/deploy/install.sh | sudo bash
#
# Run it again any time to pull the latest version from GitHub and redeploy.
# Optional overrides: DOMAIN=... ACME_EMAIL=... APP_DIR=... BRANCH=...
set -euo pipefail

DOMAIN="${DOMAIN:-moh-cv.kohlestate-ksa.online}"
ACME_EMAIL="${ACME_EMAIL:-tarj123@gmail.com}"
REPO_URL="${REPO_URL:-https://github.com/aboziyad2251/MyCV.git}"
BRANCH="${BRANCH:-main}"
APP_DIR="${APP_DIR:-/opt/moh-cv}"

say()  { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[!]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[x]\033[0m %s\n' "$*" >&2; exit 1; }

[ "$(id -u)" -eq 0 ] || die "Run as root (use sudo)."

say "Installing base packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq ca-certificates curl git dnsutils >/dev/null

if ! command -v docker >/dev/null 2>&1; then
  say "Installing Docker"
  curl -fsSL https://get.docker.com | sh
fi
systemctl enable --now docker >/dev/null 2>&1 || true
docker compose version >/dev/null 2>&1 || die "Docker Compose plugin is missing."

say "Checking DNS for $DOMAIN"
SERVER_IP="$(curl -4 -fsS https://api.ipify.org || true)"
DNS_IP="$(dig +short A "$DOMAIN" | tail -n1 || true)"
echo "    This server: ${SERVER_IP:-unknown}"
echo "    $DOMAIN -> ${DNS_IP:-no A record}"
if [ -n "$SERVER_IP" ] && [ "$SERVER_IP" != "$DNS_IP" ]; then
  warn "DNS does not point to this server yet. In OVHcloud > Domain names > kohlestate-ksa.online > DNS zone,"
  warn "set the A record 'moh-cv' to $SERVER_IP. HTTPS starts working once DNS has updated (Caddy retries)."
fi

say "Checking ports 80 and 443"
if ss -ltnH '( sport = :80 or sport = :443 )' | grep -v docker-proxy | grep -q .; then
  if ! docker ps --format '{{.Names}}' | grep -q '^moh-cv-caddy'; then
    warn "Something else already listens on port 80/443 (another web server, or Coolify/Traefik):"
    ss -ltnp '( sport = :80 or sport = :443 )' || true
    die "Stop it first, or deploy with Coolify instead (see README)."
  fi
fi

if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  say "Opening firewall ports 80 and 443"
  ufw allow 80/tcp >/dev/null; ufw allow 443/tcp >/dev/null; ufw allow 443/udp >/dev/null
fi

say "Getting the site code ($BRANCH)"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch --quiet origin "$BRANCH"
  git -C "$APP_DIR" checkout --quiet "$BRANCH"
  git -C "$APP_DIR" reset --quiet --hard "origin/$BRANCH"
else
  git clone --quiet --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
fi

say "Building and starting the site"
cd "$APP_DIR"
DOMAIN="$DOMAIN" ACME_EMAIL="$ACME_EMAIL" docker compose -f deploy/docker-compose.yml up -d --build --remove-orphans
docker image prune -f >/dev/null 2>&1 || true

say "Status"
docker compose -f deploy/docker-compose.yml ps
echo
echo "Done. Open https://$DOMAIN"
echo "Logs:   cd $APP_DIR && docker compose -f deploy/docker-compose.yml logs -f"
echo "Update: re-run this script (or push to main if GitHub auto-deploy is set up)."
