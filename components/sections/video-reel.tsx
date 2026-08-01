import { videos } from '@/content/video-manifest'
import { LazyVideo } from '@/components/ui/lazy-video'
import { Button } from '@/components/ui/button'

/**
 * Video reel — positioned high on the homepage, deliberately.
 *
 * Of the 14 DFW competitors audited, **zero** embed any video. Star Gate has a
 * YouTube channel it never embeds; Everlast lists testimonials without playing
 * them. This is the single largest uncontested advantage the client has, so it
 * does not get buried at position twelve like a gallery afterthought.
 *
 * Each clip is poster-first and downloads nothing until the visitor asks for
 * it, so the section costs one image per tile rather than several megabytes.
 */
export function VideoReel() {
  // Lead with the brands nobody else covers, then general repair work.
  const priority = ['faac', 'all-o-matic', 'ramset', 'liftmaster', 'emergency-gate-repair', 'iron-gate-repair']
  const featured = priority
    .map((cat) => videos.find((v) => v.category === cat))
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
    .slice(0, 6)

  if (featured.length === 0) return null

  // Deliberately on near-black: video reads better against it, and it makes the
  // one section no competitor can match the visual centre of the page.
  return (
    <section className="section bg-ink-950 text-white">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">Real work</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Watch Us Actually Do the Work</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-200">
            Not stock footage. Not a slideshow. Real Shield technicians repairing real gates across
            Dallas&ndash;Fort Worth &mdash; LiftMaster board swaps, FAAC hydraulic work, Ramset operator
            replacements, emergency call-outs.
          </p>
          <p className="mt-3 text-[0.9375rem] italic text-ink-400">
            Every other gate company in this market shows you a stock photo of a gate. We&rsquo;ll show you
            the repair.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((video) => (
            <LazyVideo key={video.slug} video={video} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/gallery" variant="ghostDark" size="md">
            See more of our work
          </Button>
        </div>
      </div>
    </section>
  )
}
