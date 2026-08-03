import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { reviews, reviewsConfirmed } from '@/content/reviews'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { videos } from '@/content/video-manifest'
import { PageHero } from '@/components/sections/page-hero'
import { ReviewCard } from '@/components/sections/reviews'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { VideoTestimonials } from '@/components/sections/video-testimonials'
import { LazyVideo } from '@/components/ui/lazy-video'
import { Reveal } from '@/components/ui/reveal'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema, reviewSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Customer Reviews | Shield Gate Repair Dallas–Fort Worth',
  description:
    'Real reviews from Dallas–Fort Worth gate repair customers, with the job and the city attached to each one. Plus customer video.',
  alternates: { canonical: '/reviews' },
}

export default function ReviewsPage() {
  const rating = fact(business.rating)
  const testimonial = videos.find((v) => v.category === 'testimonial')

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Dallas–Fort Worth Customers Say"
        intro="Every review here is tied to a real job, a real city and a real date. We would rather show you six specific ones than claim a number you cannot check."
        image={media['emergency-gate-repair']?.[0]}
      />

      {rating && rating.count > 0 && (
        <section className="border-b border-ink-100 bg-ink-50">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-6">
            <span className="flex items-center gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold-500 text-gold-500" />
              ))}
            </span>
            <p className="tabular text-lg text-ink-800">
              <span className="font-semibold">{rating.score}</span> from{' '}
              <span className="font-semibold">{rating.count.toLocaleString()}</span> Google reviews
            </p>
          </div>
        </section>
      )}

      {/* Real customer videos from the client's YouTube channel. The written-
          review grid that used to sit here was placeholder cards — the client
          has no Google reviews, so it was rendering an apology instead of
          proof. These are the actual thing he does have. */}
      <VideoTestimonials />

      {reviewsConfirmed && reviews.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-8 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Written reviews
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <Reveal key={review.id} delay={Math.min(i, 3) * 0.05}>
                  {/* Dark cards on a light page would fight the surface, so the
                      card treatment flips with its background. */}
                  <div className="h-full [&>figure]:!bg-white [&>figure]:!shadow-[0_0_0_1px_rgb(8_9_11/0.07),var(--shadow-card)] [&_blockquote]:!text-ink-700 [&_figcaption]:!border-ink-100 [&_p:last-child]:!text-ink-500 [&_p:nth-last-child(2)]:!text-ink-950">
                    <ReviewCard review={review} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonial && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <h2 className="mb-3 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              A customer on camera
            </h2>
            <p className="prose-measure mb-8 text-lg leading-relaxed text-ink-700">
              Written reviews are easy to fake, which is why nobody fully believes them any more. No gate
              repair company in Dallas&ndash;Fort Worth embeds a single video &mdash; not one. Here is ours.
            </p>
            <div className="max-w-2xl">
              <LazyVideo video={testimonial} />
            </div>
          </div>
        </section>
      )}

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              breadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Reviews', url: '/reviews' },
              ]),
              // Emitted only when the reviews are real and verified. Review
              // markup on placeholder content is a structured-data violation.
              ...(reviewsConfirmed ? [reviewSchema(reviews)] : []),
            ].flat(),
          ),
        }}
      />
    </>
  )
}
