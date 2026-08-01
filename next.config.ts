import type { NextConfig } from 'next'
import { brands } from './content/brands'
import { services } from './content/services'

/**
 * Migration map.
 *
 * The existing WordPress site has 45 indexed pages. Losing them at cutover
 * loses whatever authority the domain has, and the brand URLs in particular are
 * well-formed and topically valuable — so every one of them maps 1:1 to its new
 * home rather than being dumped on the homepage.
 *
 * NOT redirected: the 14 California county pages (`/los-angeles-county`,
 * `/gate-repair-fresno`, …). Pointing a Los Angeles page at a Dallas page is a
 * geographic relevance mismatch that does more harm than retiring it cleanly.
 * That decision is blocked on the client confirming whether California is a
 * live market — see STRATEGY.md §0.
 */

const trim = (p: string) => p.replace(/\/$/, '')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [400, 640, 828, 1080, 1200, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      ...brands.map((b) => ({
        source: trim(b.legacyPath),
        destination: `/brands/${b.slug}`,
        permanent: true,
      })),
      ...services
        .filter((s) => s.legacyPath)
        .map((s) => ({
          source: trim(s.legacyPath!),
          destination: `/services/${s.slug}`,
          permanent: true,
        })),
      { source: '/gate-repair-dallas-fort-worth', destination: '/service-areas', permanent: true },
      { source: '/shield-gate-repair', destination: '/', permanent: true },
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/locations', destination: '/service-areas', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/emergency-gate-repair-services', destination: '/emergency', permanent: true },
    ]
  },
}

export default nextConfig
