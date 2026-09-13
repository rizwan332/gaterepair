import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { brands } from '@/content/brands'
import { indexedCities } from '@/content/cities'
import { projects } from '@/content/projects'
import { landingPages } from '@/content/landing-pages'
import { videos } from '@/content/video-manifest'
import { videoPageMeta } from '@/content/video-pages'
import { watchPath } from '@/lib/video-paths'

/**
 * Next writes sitemap video fields into the XML verbatim — it does not escape
 * them (node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js).
 * One "&" in a video description would make the whole sitemap invalid XML, and
 * Google rejects an invalid sitemap outright rather than skipping the entry.
 */
const xml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Only cities with genuinely local content appear — `indexedCities`, not
 * `publishedCities`. The other 176 still have pages and still answer requests;
 * they are listed on /service-areas and linked from every neighbouring city
 * page, and they carry `noindex, follow` so their links still flow. Submitting
 * 176 near-identical pages is the fastest way to get the whole site treated as
 * scaled content, and until 6 Sep 2026 that is exactly what this file did — the
 * comment here already said otherwise, but `publishedCities` was assigned the
 * unfiltered list.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()

  const staticRoutes = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/brands', priority: 0.9 },
    { path: '/service-areas', priority: 0.8 },
    { path: '/testimonials', priority: 0.9 },
    { path: '/projects', priority: 0.9 },
    { path: '/repair-videos', priority: 0.8 },
    { path: '/emergency', priority: 0.95 },
    // Static HTML page in public/, served through the rewrite in netlify.toml.
    { path: '/samedaygaterepair', priority: 0.9 },
    { path: '/faq', priority: 0.85 },
    { path: '/warranty', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    // Indexable and linked from the footer, so it belongs here. Leaving it out
    // while leaving it indexable was the inconsistency, not the page itself.
    { path: '/privacy-policy', priority: 0.3 },
  ]

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r.priority,
    })),
    // Google Ads landing pages, but only the ones that answer a genuinely
    // model-specific query rather than restating their brand page. All eight
    // are served and all eight remain live Ads destinations; the other five
    // carry `noindex, follow` instead. See `indexable` in
    // content/landing-pages.ts for what separates them.
    ...landingPages
      .filter((p) => p.indexable)
      .map((p) => ({
        url: `${base}/${p.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        // Below the brand pages, not above them. These answer one model query;
        // the brand page is the fuller answer and should be crawled first.
        priority: 0.8,
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
    // One watch page per video, each with a video sitemap entry. This is the
    // only place a video is declared — see content/video-pages.ts for why.
    ...videos.map((v) => ({
      url: `${base}${watchPath(v.slug)}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      videos: [
        {
          title: xml(v.title),
          thumbnail_loc: `${base}${v.poster}.jpg`,
          description: xml(v.description),
          content_loc: `${base}${v.src}`,
          duration: v.durationSeconds,
          publication_date: videoPageMeta(v.slug).uploadDate,
        },
      ],
    })),
    ...indexedCities.map((c) => ({
      url: `${base}/gate-repair-${c.slug}-tx`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: c.tier === 1 ? 0.9 : 0.7,
    })),
  ]
}
