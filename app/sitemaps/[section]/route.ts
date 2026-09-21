import { SECTIONS, renderUrlset, sectionByFile } from '@/lib/sitemap'

/**
 * The section sitemaps: /sitemaps/pages.xml, /sitemaps/cities.xml and so on.
 *
 * One dynamic route rather than seven files, because the sections are data —
 * adding one means adding an entry to SECTIONS in lib/sitemap.ts and nothing
 * else. `dynamicParams = false` so anything not in that list is a 404 rather
 * than an empty sitemap, which would otherwise be an easy way to publish a
 * URL that silently says "this section has no pages".
 */
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return SECTIONS.map((section) => ({ section: section.file }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  const match = sectionByFile(section)
  if (!match) return new Response('Not found', { status: 404 })

  return new Response(renderUrlset(match.entries()), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
