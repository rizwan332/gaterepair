'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import type { SiteVideo } from '@/content/video-manifest'

/**
 * Poster-first video tile.
 *
 * No <video> element and no bytes are requested until the visitor clicks. The
 * poster is a normal responsive image, so a page can carry six of these for the
 * cost of six images rather than 20 MB of MP4 — which is what makes it viable
 * to put video high on the page instead of hiding it at the bottom.
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
            src={video.src}
            poster={`${video.poster}.jpg`}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="size-full object-cover"
          >
            Your browser does not support embedded video.{' '}
            <a href={video.src} className="underline">
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
              src={`${video.poster}.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={video.blurDataURL}
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
    </figure>
  )
}
