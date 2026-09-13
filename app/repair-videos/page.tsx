import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { videos } from '@/content/video-manifest'
import { videoGroups } from '@/content/video-pages'
import { VIDEO_HUB_PATH } from '@/lib/video-paths'
import { PageHero } from '@/components/sections/page-hero'
import { VideoCard } from '@/components/sections/video-card'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { breadcrumbSchema } from '@/lib/schema'
import { openGraphFor } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'Gate Repair Videos — Real Jobs, Filmed On Site' },
  description:
    'Short videos of real gate repairs on LiftMaster, FAAC, All-O-Matic, Ramset and more — the fault, the diagnosis and the fix, filmed on the job.',
  alternates: { canonical: VIDEO_HUB_PATH },
  openGraph: openGraphFor(VIDEO_HUB_PATH),
}

/**
 * Video hub.
 *
 * Every watch page is linked from here, so none of them depends on a sitemap
 * alone to be found. Grouped by the service or brand each clip belongs to, with
 * a link through to that page — the same relationship the watch pages use.
 *
 * The copy makes no location claim. Most of this footage is from the client's
 * California work (MEDIA-PROVENANCE.md), so "filmed across Dallas–Fort Worth"
 * would be false for most of what is on the page.
 */
export default function RepairVideosPage() {
  const groups = videoGroups()

  return (
    <>
      <PageHero
        eyebrow="Repair videos"
        title="Gate Repair Videos"
        intro="Every clip here was filmed on one of our own jobs: the fault, how it was diagnosed, and what it took to fix. No stock footage, and nothing staged."
        meta={`${videos.length} videos`}
      />

      <section className="section bg-ink-50">
        <div className="container-page space-y-16">
          {groups.map((group) => (
            <div key={group.key}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
                <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">{group.label}</h2>
                {group.href !== VIDEO_HUB_PATH && (
                  <Link
                    href={group.href}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-ink-700"
                  >
                    More on {group.label.toLowerCase()}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                )}
              </div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.videos.map((video) => (
                  <li key={video.slug}>
                    <VideoCard video={video} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Repair videos', url: VIDEO_HUB_PATH },
            ]),
          ]),
        }}
      />
    </>
  )
}
