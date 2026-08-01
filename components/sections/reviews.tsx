import Link from 'next/link'
import { Star, Quote, ArrowRight, AlertTriangle } from 'lucide-react'
import { reviews, reviewsConfirmed, type Review } from '@/content/reviews'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { videos } from '@/content/video-manifest'
import { LazyVideo } from '@/components/ui/lazy-video'
import { Reveal } from '@/components/ui/reveal'

/**
 * Social proof.
 *
 * This section did not exist, and its absence was the single largest defect on
 * the site: the previous WordPress build was rejected for "lacked trust", and
 * the rebuild shipped a homepage where the word "review" appeared zero times.
 *
 * While `reviewsConfirmed` is false the section renders an honest placeholder
 * rather than invented testimonials, and emits no Review schema. Everything is
 * wired — paste the real Google reviews into content/reviews.ts and flip the
 * flag.
 */
export function Reviews({ limit = 6 }: { limit?: number }) {
  const rating = fact(business.rating)
  const shown = reviews.slice(0, limit)
  const testimonial = videos.find((v) => v.category === 'testimonial')

  return (
    <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
      <div className="container-page relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
              What customers say
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Don&rsquo;t Take Our Word For It
            </h2>
            {rating && rating.count > 0 ? (
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-gold-400 text-gold-400" />
                  ))}
                </span>
                <p className="tabular text-lg text-ink-200">
                  <span className="font-semibold text-white">{rating.score}</span> from{' '}
                  <span className="font-semibold text-white">{rating.count.toLocaleString()}</span> Google
                  reviews
                </p>
              </div>
            ) : (
              <p className="mt-5 text-lg leading-relaxed text-ink-200">
                Real reviews from real Dallas&ndash;Fort Worth customers, with the job and the city attached
                to each one.
              </p>
            )}
          </div>
        </Reveal>

        {!reviewsConfirmed && (
          <Reveal delay={0.05}>
            <div className="mt-8 flex max-w-2xl gap-3.5 rounded-[var(--radius-card)] border border-gold-500/40 bg-gold-500/[0.07] p-5">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
              <p className="text-sm leading-relaxed text-ink-200">
                <span className="font-semibold text-white">Awaiting real review data.</span> The layout and
                schema are complete; these cards are structural placeholders. Nothing here is published as a
                customer statement and no review markup is emitted until verified Google reviews replace
                them.
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((review, i) => (
            <Reveal key={review.id} delay={Math.min(i, 3) * 0.05}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {testimonial && (
          <Reveal>
            <div className="mt-14">
              <div className="rule-fade mb-14" aria-hidden />
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    A customer, in their own words
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-300">
                    Written reviews are easy to fake, which is why nobody fully believes them any more. This
                    is an actual Shield customer on camera. No competitor in Dallas&ndash;Fort Worth embeds
                    a single video &mdash; not one.
                  </p>
                </div>
                <LazyVideo video={testimonial} />
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              Read all reviews
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="card-dark flex h-full flex-col p-6">
      <Quote className="mb-4 size-7 text-gold-500/50" aria-hidden />
      <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-ink-100">
        {review.body}
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-gold-400 text-gold-400" aria-hidden />
          ))}
        </div>
        <p className="mt-2 text-sm font-semibold text-white">{review.author}</p>
        <p className="tabular text-xs text-ink-400">
          {review.city} ·{' '}
          {new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          {review.brand && <> · {review.brand}</>}
        </p>
      </figcaption>
    </figure>
  )
}
