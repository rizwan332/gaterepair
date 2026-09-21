import { renderIndex } from '@/lib/sitemap'

/**
 * The sitemap index at /sitemap.xml.
 *
 * A route handler rather than Next's `app/sitemap.ts` convention, because that
 * convention emits a `<urlset>` and this has to emit a `<sitemapindex>`. The
 * URL is unchanged, so robots.txt, Search Console and anything else already
 * pointing here keeps working — only the contents change, from ~160 URLs to
 * seven links to the section sitemaps in lib/sitemap.ts.
 *
 * `force-static` so it is prerendered at build time like every other page here.
 */
export const dynamic = 'force-static'

export function GET() {
  return new Response(renderIndex(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Crawlers re-read this often; a short cache keeps it cheap without
      // holding a stale index after a deploy.
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
