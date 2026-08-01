import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { publishedCities } from '@/content/cities'
import { projects } from '@/content/projects'

/**
 * Only published cities appear. Cities that exist in the service area but have
 * no localised content are listed on /service-areas and deliberately kept out
 * of the sitemap — submitting 176 near-identical pages is the fastest way to
 * get the whole site treated as scaled content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()

  const staticRoutes = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/brands', priority: 0.9 },
    { path: '/service-areas', priority: 0.8 },
    { path: '/reviews', priority: 0.8 },
    { path: '/projects', priority: 0.9 },
    { path: '/emergency', priority: 0.95 },
    { path: '/faq', priority: 0.85 },
    { path: '/warranty', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/gallery', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
  ]

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...brands.map((b) => ({
      url: `${base}/brands/${b.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      // FAAC, All-O-Matic and Ramset are uncontested in this market — they get
      // the higher crawl priority.
      priority: b.contested ? 0.8 : 0.9,
    })),
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
    ...publishedCities.map((c) => ({
      url: `${base}/gate-repair-${c.slug}-tx`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: c.tier === 1 ? 0.9 : 0.7,
    })),
  ]
}
