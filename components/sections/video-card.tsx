import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'
import type { SiteVideo } from '@/content/video-manifest'
import { watchPath } from '@/lib/video-paths'
import { cdn } from '@/lib/cdn'

export function formatDuration(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

/**
 * A link to one video's watch page — used on the hub and under "More repair
 * videos". It is a link, not a player: playing happens on the watch page, which
 * is the one URL each video is indexed under.
 *
 * The poster is decorative (`alt=""`) because the title is the link text.
 */
export function VideoCard({ video }: { video: SiteVideo }) {
  return (
    <Link href={watchPath(video.slug)} className="card-light group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-ink-950">
        <Image
          src={cdn(`${video.poster}.jpg`)}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={video.blurDataURL}
          // Already sized and encoded by scripts/process-videos.ts — see LazyVideo.
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-lg">
          <Play className="ml-0.5 size-5 fill-current" aria-hidden />
        </span>
        {video.durationSeconds > 0 && (
          <span className="tabular absolute bottom-2 right-2 rounded bg-ink-950/85 px-1.5 py-0.5 text-xs font-medium text-white">
            {formatDuration(video.durationSeconds)}
          </span>
        )}
      </div>
      <span className="p-4 font-semibold leading-snug text-ink-950">{video.title}</span>
    </Link>
  )
}
