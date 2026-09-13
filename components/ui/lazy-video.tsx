'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import type { SiteVideo } from '@/content/video-manifest'
import { cdn } from '@/lib/cdn'
import { watchPath } from '@/lib/video-paths'

/**
 * Poster-first video tile.
 *
 * No <video> element and no bytes are requested until the visitor clicks. The
 * poster is a normal responsive image, so a page can carry six of these for the
 * cost of six images rather than 20 MB of MP4 — which is what makes it viable
 * to put video high on the page instead of hiding it at the bottom.
 *
 * ── THIS TILE IS NOT WHAT GOOGLE INDEXES ────────────────────────────────────
 * Because the <video> only exists after a click, Googlebot never sees one here.
 * That is fine now, and it was the bug before: these tiles used to sit beside
 * VideoObject schema describing a video that was not in the HTML. Each video's
 * indexable home is its watch page (app/repair-videos/[slug]), which renders a
 * real <video> — the caption link below is how both visitors and crawlers get
 * there.
 */
export function LazyVideo({ video, className }: { video: SiteVideo; className?: string }) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)

  return (
    <figure
      className={`group relative overflow-hidden rounded-[var(--radius-card)] bg-ink-950 shadow-[var(--shadow-card)] ${className ?? ''}`}
    >
      <div className="relative aspect-video">
        {active ? (
          <video
            ref={ref}
            src={cdn(video.src)}
            poster={cdn(`${video.poster}.jpg`)}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="size-full object-cover"
          >
            Your browser does not support embedded video.{' '}
            <a href={cdn(video.src)} className="underline">
              Download the clip
            </a>
            .
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group/btn absolute inset-0 size-full cursor-pointer"
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={cdn(`${video.poster}.jpg`)}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={video.blurDataURL}
              // Already sized and encoded by scripts/process-videos.ts. Sending
              // it through the optimizer would pull it back out of the CDN and
              // re-encode it, which costs egress and CPU to produce the same
              // file.
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-lg transition-transform duration-200 group-hover:scale-110">
              <Play className="ml-0.5 size-7 fill-current" aria-hidden />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-4 text-left">
              <span className="block text-sm font-semibold text-white">{video.label}</span>
              {video.durationSeconds > 0 && (
                <span className="mt-0.5 block text-xs text-ink-300">
                  {Math.floor(video.durationSeconds / 60)}:
                  {String(video.durationSeconds % 60).padStart(2, '0')}
                </span>
              )}
            </span>
          </button>
        )}
      </div>

      {/* Inside the figure, so it sits on the tile's own dark ground and reads
          the same on the white service pages and the dark homepage reel. */}
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4">
        <span className="truncate py-2.5 text-xs text-ink-300">{video.title}</span>
        <Link
          href={watchPath(video.slug)}
          className="inline-flex min-h-11 shrink-0 items-center gap-1 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300"
        >
          Video page
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </figcaption>
    </figure>
  )
}
