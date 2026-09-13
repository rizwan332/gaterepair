import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Clock, Phone } from 'lucide-react'
import { videos } from '@/content/video-manifest'
import { projects } from '@/content/projects'
import { business } from '@/content/business'
import {
  categoryLink,
  relatedVideos,
  videoBySlug,
  videoPageMeta,
  watchTitle,
} from '@/content/video-pages'
import { VIDEO_HUB_PATH, watchPath } from '@/lib/video-paths'
import { VideoCard, formatDuration } from '@/components/sections/video-card'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { breadcrumbSchema, videoSchema } from '@/lib/schema'
import { fitDescription, openGraphFor } from '@/lib/seo'
import { cdn } from '@/lib/cdn'

export const dynamicParams = false

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const video = videoBySlug(slug)
  if (!video) return {}

  const path = watchPath(video.slug)
  return {
    title: { absolute: watchTitle(video) },
    // No location in the description: most of this footage is California work
    // (MEDIA-PROVENANCE.md), so the page describes the repair, not the place.
    description: fitDescription(video.description, ['Filmed on the job by Shield Gate Repair.']),
    alternates: { canonical: path },
    openGraph: openGraphFor(path),
  }
}

/**
 * Video watch page — the one URL each video is indexed under.
 *
 * What makes this a watch page rather than another text page with a video on
 * it, and why each of these is deliberate (see content/video-pages.ts for the
 * Search Console problem this solves):
 *
 *  - The video is the first thing under the heading and is sized to dominate
 *    the viewport. Google indexes a video only when it is the page's main
 *    content, and judges that partly by position and size.
 *
 *  - It is a real <video> element in the server-rendered HTML. The click-to-
 *    load facade used everywhere else is exactly what hid these videos from
 *    Googlebot. `preload="none"` keeps the cost the same as the facade: the
 *    browser fetches the poster and no video bytes until someone presses play.
 *
 *  - VideoObject is emitted here and nowhere else, so each video has exactly one
 *    page claiming it.
 *
 * The description is the same hand-written copy as content/video-meta.ts, not a
 * padded rewrite. No transcript is shown because none exists for these clips,
 * and inventing one would describe footage nobody has checked.
 */
export default async function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const video = videoBySlug(slug)
  if (!video) notFound()

  const path = watchPath(video.slug)
  const { uploadDate } = videoPageMeta(video.slug)
  const topic = categoryLink(video.category)
  const caseStudy = projects.find((p) => p.videoSlug === video.slug)
  const related = relatedVideos(video, 6)
  const poster = cdn(`${video.poster}.jpg`)
  const src = cdn(video.src)

  return (
    <>
      <section className="surface-dark relative isolate overflow-hidden text-white">
        <div className="container-page py-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-ink-400">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={VIDEO_HUB_PATH} className="hover:text-white">
                  Repair videos
                </Link>
              </li>
            </ol>
          </nav>

          <h1 className="max-w-4xl text-balance font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {video.title}
          </h1>

          <div className="mt-6 max-w-5xl overflow-hidden rounded-[var(--radius-card)] bg-black shadow-[var(--shadow-card)]">
            <video
              controls
              playsInline
              preload="none"
              poster={poster}
              width={1280}
              height={720}
              className="aspect-video h-auto w-full bg-black"
            >
              <source src={src} type="video/mp4" />
              Your browser cannot play this video.{' '}
              <a href={src} className="underline">
                Download it
              </a>{' '}
              instead.
            </video>
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-300">
            {video.durationSeconds > 0 && (
              <span className="tabular inline-flex items-center gap-1.5">
                <Clock className="size-4 text-gold-400" aria-hidden />
                {formatDuration(video.durationSeconds)}
              </span>
            )}
            <span>Filmed on the job by {business.name}</span>
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              What this video shows
            </h2>
            <p className="prose-measure text-lg leading-relaxed text-ink-800">{video.description}</p>
          </div>

          <aside className="space-y-3">
            {caseStudy && (
              <Link
                href={`/projects/${caseStudy.slug}`}
                className="card-light group flex items-start justify-between gap-4 p-5"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Read the full case study
                  </span>
                  <span className="mt-1 block font-semibold text-ink-950">{caseStudy.seoTitle}</span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink-400 group-hover:text-ink-900" aria-hidden />
              </Link>
            )}
            {topic && (
              <Link href={topic.href} className="card-light group flex items-start justify-between gap-4 p-5">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">
                    More on this repair
                  </span>
                  <span className="mt-1 block font-semibold text-ink-950">{topic.label}</span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink-400 group-hover:text-ink-900" aria-hidden />
              </Link>
            )}
            <a
              href={business.phone.href}
              className="flex items-center gap-3 rounded-[var(--radius-card)] bg-gold-500 p-5 font-semibold text-ink-950 transition-colors hover:bg-gold-400"
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              <span>
                Gate doing the same thing? Call{' '}
                <span className="tabular whitespace-nowrap">{business.phone.display}</span>
              </span>
            </a>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">More repair videos</h2>
              <Link
                href={VIDEO_HUB_PATH}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-ink-700"
              >
                All {videos.length} videos
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((v) => (
                <li key={v.slug}>
                  <VideoCard video={v} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            videoSchema({
              title: video.title,
              description: video.description,
              thumbnailUrl: `${video.poster}.jpg`,
              contentUrl: video.src,
              durationSeconds: video.durationSeconds,
              uploadDate,
            }),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Repair videos', url: VIDEO_HUB_PATH },
              { name: watchTitle(video), url: path },
            ]),
          ]),
        }}
      />
    </>
  )
}
