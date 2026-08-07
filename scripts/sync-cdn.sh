#!/usr/bin/env bash
#
# Push public/images and public/videos to S3, then invalidate CloudFront.
#
# Credentials are NEVER stored here. Export them before running, or configure a
# profile with `aws configure`:
#
#   export AWS_ACCESS_KEY_ID=...
#   export AWS_SECRET_ACCESS_KEY=...
#   ./scripts/sync-cdn.sh
#
# ── WHY ONE SYNC PER EXTENSION ──────────────────────────────────────────────
# S3 does not sniff content types. A file uploaded without an explicit
# --content-type arrives as binary/octet-stream and the browser refuses to
# render it, so each extension is synced separately with its type set.
#
# ── ON CACHE-CONTROL ────────────────────────────────────────────────────────
# Objects are stored immutable for a year, which is what makes the CDN worth
# having. The filenames are NOT content-hashed, though, so re-running the asset
# pipeline can produce different bytes under the same key — hence the
# invalidation at the end. CloudFront allows 1,000 invalidation paths per month
# free, and this uses two.

set -euo pipefail

BUCKET="${CDN_BUCKET:-shield-gate-repair-assets}"
DISTRIBUTION="${CDN_DISTRIBUTION_ID:-EQLQJEJ0EPUUW}"
MASTERS="${MASTERS_BUCKET:-shield-gate-repair-masters}"
REGION="${AWS_DEFAULT_REGION:-us-east-1}"
CACHE="public, max-age=31536000, immutable"

if ! command -v aws > /dev/null; then
  echo "aws CLI not found." >&2
  exit 1
fi

echo "Syncing images to s3://$BUCKET/images"
for ext in avif webp jpg jpeg png; do
  case "$ext" in
    avif) ct="image/avif" ;;
    webp) ct="image/webp" ;;
    jpg | jpeg) ct="image/jpeg" ;;
    png) ct="image/png" ;;
  esac
  aws s3 sync public/images "s3://$BUCKET/images" \
    --region "$REGION" --exclude "*" --include "*.$ext" \
    --content-type "$ct" --cache-control "$CACHE" --only-show-errors
done

echo "Syncing videos to s3://$BUCKET/videos"
aws s3 sync public/videos "s3://$BUCKET/videos" \
  --region "$REGION" --exclude "*" --include "*.mp4" \
  --content-type "video/mp4" --cache-control "$CACHE" --only-show-errors

# Logo and brand marks. Mirrored for completeness; the site still serves these
# from /public because they are needed before first paint and a second origin
# costs a DNS lookup and TLS handshake on the critical path.
echo "Syncing brand marks"
for dir in brand logos; do
  for ext in webp png jpg svg ico; do
    case "$ext" in
      webp) ct="image/webp" ;;
      png) ct="image/png" ;;
      jpg) ct="image/jpeg" ;;
      svg) ct="image/svg+xml" ;;
      ico) ct="image/x-icon" ;;
    esac
    aws s3 sync "public/$dir" "s3://$BUCKET/$dir" \
      --region "$REGION" --exclude "*" --include "*.$ext" \
      --content-type "$ct" --cache-control "$CACHE" --only-show-errors
  done
done

# ── Source masters ──────────────────────────────────────────────────────────
# client-assets holds the originals everything else is derived from. The .mov
# files in particular are NOT in git — they exceed GitHub's 100MB limit — so
# this bucket is their only backup. Private, versioned, never served publicly.
if [ -d client-assets ]; then
  echo "Syncing masters to s3://$MASTERS/client-assets"
  for ext in mov jpeg jpg png webp; do
    case "$ext" in
      mov) ct="video/quicktime" ;;
      jpeg | jpg) ct="image/jpeg" ;;
      png) ct="image/png" ;;
      webp) ct="image/webp" ;;
    esac
    aws s3 sync client-assets "s3://$MASTERS/client-assets" \
      --region "$REGION" --exclude "*" --include "*.$ext" \
      --content-type "$ct" --only-show-errors
  done
fi

echo "Invalidating CloudFront"
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION" \
  --paths "/images/*" "/videos/*" \
  --query 'Invalidation.Id' --output text

echo "Done."
