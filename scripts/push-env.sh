#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

declare -a NAMES=(
  RESEND_API_KEY
  LEADS_EMAIL
  RESEND_FROM
  DOWNLOAD_TOKEN_SECRET
  STRIPE_SECRET_KEY
  STRIPE_PUBLISHABLE_KEY
)

declare -a ENVS=(production preview development)

# Read each var value from .env.local
get_val() {
  local name="$1"
  grep -E "^${name}=" .env.local | sed -E "s/^${name}=//"
}

for name in "${NAMES[@]}"; do
  value="$(get_val "$name")"
  if [ -z "$value" ]; then
    echo "Skipping $name: not found in .env.local"
    continue
  fi
  for env in "${ENVS[@]}"; do
    echo "→ $name [$env]"
    # Remove existing var first (ignore errors if it doesn't exist), then add
    printf "y\n" | npx vercel env rm "$name" "$env" --yes >/dev/null 2>&1 || true
    printf "%s" "$value" | npx vercel env add "$name" "$env" --yes >/dev/null 2>&1
  done
done

echo
echo "Production env vars:"
npx vercel env ls production
