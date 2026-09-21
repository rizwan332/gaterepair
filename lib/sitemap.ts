import { business } from '../content/business'
import { services } from '../content/services'
import { brands } from '../content/brands'
import { indexedCities } from '../content/cities'
import { projects } from '../content/projects'
import { landingPages } from '../content/landing-pages'
import { videos } from '../content/video-manifest'
import { videoPageMeta } from '../content/video-pages'
import { watchPath } from './video-paths'
import { indexableModelPages } from './model-quality'
import { modelPath } from '../content/models'
import { assetUrl } from './cdn'

/**
 * The sitemap, split by section behind an index at /sitemap.xml.
 *
 * ── WHY SPLIT ───────────────────────────────────────────────────────────────
 * Not for size: Google's limit is 50,000 URLs per file and this site has ~160.
 * It is for diagnosis. Search Console reports discovered-versus-indexed PER
 * SUBMITTED SITEMAP, so one flat file gives a single number that moves for
 * reasons nobody can see from the outside — which is the question that
 * prompted this: why 252 URLs one week and 159 the next. Split, the answer is
 * readable directly: 25 of 25 cities indexed, 40 of 43 model pages, 33 of 33
 * videos.
 *
 * The count moves because this lists what is INDEXABLE, which is a deliberate
 * set. A page carrying `noindex` must never appear here — Search Console flags
 * it and scripts/validate-meta.ts fails the build over it. The fall from ~252
 * to ~105 on 14 Sep was 176 thin city pages being withdrawn on purpose; the
 * climb back to ~160 is model pages and enriched cities arriving on merit.
 * Every city enriched from here re-enters cities.xml on the next build.
 *
 * ── ONE SOURCE OF TRUTH ─────────────────────────────────────────────────────
 * The index, the seven child sitemaps, validate:meta and the SEO snapshot all
 * read SECTIONS below. Nothing parses build output to discover what was
 * submitted, so the guard and the artifact cannot drift apart.
 *
 * Relative imports, not `@/`: the validators load this under plain tsx.
 */

export type SitemapVideo = {
  title: string
  thumbnail_loc: string
  description: string
  content_loc: string
  duration: number
  publication_date: string
}

export type SitemapEntry = {
  /** Absolute URL. */
  url: string
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  priority: number
  videos?: SitemapVideo[]
}

export type SitemapSection = {
  /** File name under /sitemaps/, including the .xml extension. */
  file: string
  /** What it holds. Written into the index as a comment. */
  label: string
  entries: () => SitemapEntry[]
}

const BASE = business.url

/**
 * XML text escaping.
 *
 * Video titles and descriptions are hand-written editorial copy, and a single
 * "&" in one of them makes the whole file invalid — Google rejects an invalid
 * sitemap outright rather than skipping the offending entry. Applied to every
 * text node rather than only the ones that look risky today.
 */
export const escapeXml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

/** Static routes that are not generated from a content collection. */
const STATIC_ROUTES: { path: string; priority: number }[] = [
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
  { path: '/privacy-policy', priority: 0.3 },
]

export const SECTIONS: SitemapSection[] = [
  {
    file: 'pages.xml',
    label: 'Core pages and the indexable Google Ads landing pages',
    entries: () => [
      ...STATIC_ROUTES.map((r) => ({
        url: `${BASE}${r.path}`,
        changeFrequency: 'weekly' as const,
        priority: r.priority,
      })),
      // Only the landing pages that answer a genuinely model-specific query
      // rather than restating their brand page. The rest are served and remain
      // live Ads destinations, but carry `noindex, follow` — see `indexable`
      // in content/landing-pages.ts.
      ...landingPages
        .filter((p) => p.indexable)
        .map((p) => ({
          url: `${BASE}/${p.slug}`,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        })),
    ],
  },
  {
    file: 'services.xml',
    label: 'Service pages',
    entries: () =>
      services.map((s) => ({
        url: `${BASE}/services/${s.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      })),
  },
  {
    file: 'brands.xml',
    label: 'Operator brand pages',
    entries: () =>
      brands.map((b) => ({
        url: `${BASE}/brands/${b.slug}`,
        changeFrequency: 'monthly' as const,
        // FAAC, All-O-Matic and Ramset are uncontested in this market — they
        // get the higher crawl priority.
        priority: b.contested ? 0.8 : 0.9,
      })),
  },
  {
    file: 'models.xml',
    label: 'Operator model pages that clear the quality gate',
    entries: () =>
      // The rest are served `noindex` and deliberately absent — see
      // lib/model-quality.ts.
      indexableModelPages().map((m) => ({
        url: `${BASE}${modelPath(m)}`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  },
  {
    file: 'cities.xml',
    label: 'City pages carrying genuinely local content',
    entries: () =>
      indexedCities.map((c) => ({
        url: `${BASE}/gate-repair-${c.slug}-tx`,
        changeFrequency: 'monthly' as const,
        priority: c.tier === 1 ? 0.9 : 0.7,
      })),
  },
  {
    file: 'projects.xml',
    label: 'Case studies',
    entries: () =>
      projects.map((p) => ({
        url: `${BASE}/projects/${p.slug}`,
        changeFrequency: 'yearly' as const,
        priority: 0.8,
      })),
  },
  {
    file: 'videos.xml',
    label: 'Video watch pages, with their video entries',
    entries: () =>
      // One watch page per video. This is the only place a video is declared —
      // see content/video-pages.ts for why.
      videos.map((v) => ({
        url: `${BASE}${watchPath(v.slug)}`,
        changeFrequency: 'yearly' as const,
        priority: 0.6,
        videos: [
          {
            title: v.title,
            // Via assetUrl so that if the CDN is switched on, the sitemap
            // points at the same file the player and the VideoObject do.
            thumbnail_loc: assetUrl(`${v.poster}.jpg`),
            description: v.description,
            content_loc: assetUrl(v.src),
            duration: v.durationSeconds,
            publication_date: videoPageMeta(v.slug).uploadDate,
          },
        ],
      })),
  },
]

export const sectionPath = (file: string) => `/sitemaps/${file}`

export const sectionByFile = (file: string) => SECTIONS.find((s) => s.file === file)

/** Every URL submitted across all sections. What validate:meta checks against. */
export const allSitemapUrls = (): string[] => SECTIONS.flatMap((s) => s.entries().map((e) => e.url))

const VIDEO_NS = ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'

export function renderUrlset(entries: SitemapEntry[], lastModified = new Date()): string {
  const lastmod = lastModified.toISOString()
  const hasVideo = entries.some((e) => e.videos?.length)

  const urls = entries.map((entry) => {
    // Tag order follows the sitemap-video/1.1 schema, which defines a
    // sequence: thumbnail_loc, then title, then description. Next's own
    // generator emitted them in object-key order, which put title first —
    // tolerated in practice, invalid against the XSD.
    const videoBlocks = (entry.videos ?? []).map((v) =>
      [
        '    <video:video>',
        `      <video:thumbnail_loc>${escapeXml(v.thumbnail_loc)}</video:thumbnail_loc>`,
        `      <video:title>${escapeXml(v.title)}</video:title>`,
        `      <video:description>${escapeXml(v.description)}</video:description>`,
        `      <video:content_loc>${escapeXml(v.content_loc)}</video:content_loc>`,
        `      <video:duration>${v.duration}</video:duration>`,
        `      <video:publication_date>${v.publication_date}</video:publication_date>`,
        '    </video:video>',
      ].join('\n'),
    )

    return [
      '  <url>',
      `    <loc>${escapeXml(entry.url)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${entry.changeFrequency}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      ...videoBlocks,
      '  </url>',
    ].join('\n')
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${hasVideo ? VIDEO_NS : ''}>`,
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

export function renderIndex(lastModified = new Date()): string {
  const lastmod = lastModified.toISOString()
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...SECTIONS.map((section) =>
      [
        `  <!-- ${section.label} -->`,
        '  <sitemap>',
        `    <loc>${escapeXml(`${BASE}${sectionPath(section.file)}`)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '  </sitemap>',
      ].join('\n'),
    ),
    '</sitemapindex>',
    '',
  ].join('\n')
}
