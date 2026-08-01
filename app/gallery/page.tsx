import type { Metadata } from 'next'
import { media, mediaCategories } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'
import { PageHero } from '@/components/sections/page-hero'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { LazyVideo } from '@/components/ui/lazy-video'
import { breadcrumbSchema, videoSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Our Work | Real Gate Repair Photos & Video | Shield Gate Repair',
  description:
    'Real photographs and video from Shield Gate Repair jobs across Dallas–Fort Worth. No stock imagery, ' +
    'no AI-generated pictures — just the work.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  const totalPhotos = Object.values(media).reduce((n, list) => n + list.length, 0)

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Real Jobs, Real Photos, Real Video"
        intro={`${totalPhotos} photographs and ${videos.length} videos from actual Shield call-outs across Dallas–Fort Worth. Not one of them is stock or AI-generated — which is more than most gate companies in this market can say.`}
        image={media['iron-gate-repair']?.[2]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-3 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            {videos.length} repairs on video
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-ink-700">
            No other gate repair company in Dallas&ndash;Fort Worth publishes video of their work. These are
            ours.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <LazyVideo key={video.slug} video={video} />
            ))}
          </div>
        </div>
      </section>

      {Object.entries(media).map(([slug, images], i) => (
        <PhotoGallery
          key={slug}
          tone={i % 2 === 0 ? 'muted' : 'light'}
          title={mediaCategories[slug as keyof typeof mediaCategories]?.label ?? slug}
          images={images}
        />
      ))}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Our Work', url: '/gallery' },
            ]),
            ...videos.map((v) =>
              videoSchema({
                title: v.title,
                description: v.description || `${v.label} by Shield Gate Repair in Dallas–Fort Worth.`,
                thumbnailUrl: `${v.poster}.jpg`,
                contentUrl: v.src,
                durationSeconds: v.durationSeconds,
                uploadDate: '2026-08-01',
              }),
            ),
          ]),
        }}
      />
    </>
  )
}
