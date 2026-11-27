#!/usr/bin/env bash
# One-command setup / update for the CV site on an Ubuntu or Debian VPS.
#
#   ssh root@YOUR_VPS        (or: ssh ubuntu@YOUR_VPS and use "sudo bash" below)
#   curl -fsSL https://raw.githubusercontent.com/aboziyad2251/MyCV/main/deploy/install.sh | bash
#
# It picks the right setup by itself:
#   * Nginx Proxy Manager already running  -> runs only the site container on NPM's Docker network;
#                                             you add one Proxy Host in NPM (instructions printed at the end)
#   * ports 80/443 free                     -> runs the site behind Caddy with automatic HTTPS
#   * something else on 80/443              -> stops without changing anything
#
# Run it again any time to pull the latest version from GitHub and redeploy.
# Optional overrides: DOMAIN=... ACME_EMAIL=... APP_DIR=... BRANCH=... HOST_PORT=...
set -euo pipefail

DOMAIN="${DOMAIN:-moh-cv.kohlestate-ksa.online}"
ACME_EMAIL="${ACME_EMAIL:-tarj123@gmail.com}"
REPO_URL="${REPO_URL:-https://github.com/aboziyad2251/MyCV.git}"
BRANCH="${BRANCH:-main}"
APP_DIR="${APP_DIR:-/opt/moh-cv}"

say()  { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[!]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[x]\033[0m %s\n' "$*" >&2; exit 1; }
port_busy() { ss -ltnH "( sport = :$1 )" 2>/dev/null | grep -q .; }

[ "$(id -u)" -eq 0 ] || die "Run as root (use sudo)."

say "Installing base packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq ca-certificates curl git dnsutils iproute2 >/dev/null

if ! command -v docker >/dev/null 2>&1; then
  say "Installing Docker"
  curl -fsSL https://get.docker.com | sh
fi
systemctl enable --now docker >/dev/null 2>&1 || true
docker compose version >/dev/null 2>&1 || die "Docker Compose plugin is missing."

say "Checking DNS for $DOMAIN"
SERVER_IP="$(curl -4 -fsS --max-time 10 https://api.ipify.org || true)"
DNS_IP="$(dig +short A "$DOMAIN" | tail -n1 || true)"
echo "    This server's public IP: ${SERVER_IP:-unknown}"
echo "    $DOMAIN -> ${DNS_IP:-no A record}"
if [ -n "$SERVER_IP" ] && [ "$SERVER_IP" != "$DNS_IP" ]; then
  warn "DNS does not point to this server. In OVHcloud > Domain names > kohlestate-ksa.online > DNS zone,"
  warn "set the A record 'moh-cv' to $SERVER_IP (the public IP, not the Tailscale 100.x address)."
  warn "The HTTPS certificate can only be issued after that change has spread."
fi

say "Choosing the setup"
NPM_CONTAINER="$(docker ps --format '{{.Names}} {{.Image}}' \
  | awk 'tolower($0) ~ /nginx-proxy-manager|nginx_proxy_manager|jc21\/nginx/ {print $1; exit}')"

if [ -n "$NPM_CONTAINER" ]; then
  MODE="npm"
  echo "    Found Nginx Proxy Manager ($NPM_CONTAINER): the site will run behind it."
elif port_busy 80 || port_busy 443; then
  if docker ps --format '{{.Names}}' | grep -q '^moh-cv-caddy'; then
    MODE="caddy"
  else
    warn "Something else already listens on port 80/443:"
    ss -ltnp '( sport = :80 or sport = :443 )' || true
    die "Not changing anything. Free those ports, or deploy with Coolify / your proxy (see README)."
  fi
else
  MODE="caddy"
  echo "    Ports 80/443 are free: the site will run behind Caddy (automatic HTTPS)."
fi

say "Getting the site code ($BRANCH)"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch --quiet origin "$BRANCH"
  git -C "$APP_DIR" checkout --quiet "$BRANCH"
  git -C "$APP_DIR" reset --quiet --hard "origin/$BRANCH"
else
  git clone --quiet --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
fi
cd "$APP_DIR"

if [ "$MODE" = "npm" ]; then
  ENV_FILE="deploy/.env"
  # Keep the choices from an earlier run.
  # shellcheck source=/dev/null
  [ -f "$ENV_FILE" ] && . "$ENV_FILE"

  if [ -z "${PROXY_NETWORK:-}" ]; then
    NPM_NETS="$(docker inspect -f '{{range $k, $v := .NetworkSettings.Networks}}{{println $k}}{{end}}' "$NPM_CONTAINER" | sed '/^$/d')"
    if printf '%s\n' "$NPM_NETS" | grep -qx host; then
      die "Nginx Proxy Manager uses host networking; point it at http://127.0.0.1:<port> instead (see README)."
    fi
    PROXY_NETWORK="$(printf '%s\n' "$NPM_NETS" | grep -vx bridge | head -n1 || true)"
    if [ -z "$PROXY_NETWORK" ]; then
      # NPM is only on Docker's default bridge, where names don't resolve. Give it a shared network.
      PROXY_NETWORK="npm_proxy"
      docker network inspect "$PROXY_NETWORK" >/dev/null 2>&1 || docker network create "$PROXY_NETWORK" >/dev/null
      docker network connect "$PROXY_NETWORK" "$NPM_CONTAINER" 2>/dev/null || true
      echo "    Connected $NPM_CONTAINER to the new Docker network '$PROXY_NETWORK' (its other networks are unchanged)."
    fi
  fi

  if [ -z "${HOST_PORT:-}" ]; then
    HOST_PORT=3020
    while port_busy "$HOST_PORT"; do HOST_PORT=$((HOST_PORT + 1)); done
  fi
  printf 'PROXY_NETWORK=%s\nHOST_PORT=%s\n' "$PROXY_NETWORK" "$HOST_PORT" > "$ENV_FILE"
  echo "    Docker network: $PROXY_NETWORK   local port: 127.0.0.1:$HOST_PORT"

  say "Building and starting the site"
  docker compose -f deploy/docker-compose.npm.yml --env-file "$ENV_FILE" up -d --build --remove-orphans

  say "Checking the site responds"
  ok=""
  for _ in $(seq 1 15); do
    if curl -fsS --max-time 3 "http://127.0.0.1:$HOST_PORT/" | grep -q "Abotargah"; then ok=1; break; fi
    sleep 2
  done
  [ -n "$ok" ] && echo "    OK: http://127.0.0.1:$HOST_PORT serves the CV." || warn "The site did not answer yet; check: docker logs moh-cv-web"

  cat <<EOF

==> Last step, once, in Nginx Proxy Manager (admin UI on port 81)
    Hosts > Proxy Hosts > Add Proxy Host
      Details:  Domain Names            $DOMAIN
                Scheme                  http
                Forward Hostname / IP   moh-cv-web
                Forward Port            80
                Block Common Exploits   on
      SSL:      Request a new SSL Certificate (Let's Encrypt)
                Force SSL on, HTTP/2 Support on, HSTS on
                Email                   $ACME_EMAIL
    Save, then open https://$DOMAIN

Updates: run this script again (it keeps the same network and port).
Logs:    docker logs -f moh-cv-web
EOF
  exit 0
fi

# ---- Caddy mode (ports 80/443 free) ----
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  say "Opening firewall ports 80 and 443"
  ufw allow 80/tcp >/dev/null; ufw allow 443/tcp >/dev/null; ufw allow 443/udp >/dev/null
fi

say "Building and starting the site"
DOMAIN="$DOMAIN" ACME_EMAIL="$ACME_EMAIL" docker compose -f deploy/docker-compose.yml up -d --build --remove-orphans

say "Status"
docker compose -f deploy/docker-compose.yml ps
echo
echo "Done. Open https://$DOMAIN (the first visit can take a minute while the certificate is issued)."
echo "Logs:   cd $APP_DIR && docker compose -f deploy/docker-compose.yml logs -f"
echo "Update: re-run this script (or push to main if GitHub auto-deploy is set up)."
