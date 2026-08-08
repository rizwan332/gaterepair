'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, BadgeCheck, ArrowRight } from 'lucide-react'
import { thumbnailFor, type Testimonial } from '@/content/testimonials'

/**
 * Video testimonial cards.
 *
 * Loading is facade-first: we render YouTube's thumbnail and only inject the
 * iframe on click. Embedding a dozen players directly would pull in over a
 * megabyte of third-party JavaScript and wreck LCP on exactly the mobile
 * connections the client says most customers arrive on. `youtube-nocookie`
 * keeps it out of ad-tracking territory until there is a consent banner.
 *
 * Cards are titled with the client's own video titles. No invented customer
 * names and no invented pull quotes — see the note in content/testimonials.ts.
 *
 * Every "see more" CTA points at /testimonials, never at YouTube. Sending
 * someone to the channel hands them to an infinite feed of other people's
 * videos at the exact moment they were close to calling.
 */

export function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial
  featured?: boolean
}) {
  const [playing, setPlaying] = useState(false)

  /**
   * Every card is 16:9, Shorts included.
   *
   * Letting the aspect follow the source was the earlier approach and it made
   * a mess of every layout it touched: in a grid one 9:16 card set the height
   * of its whole row, in a carousel it set the height of the whole rail, and
   * in a masonry flow it left columns ending at wildly different points. Three
   * layouts all bending around three videos.
   *
   * The thumbnail is already object-cover, so a vertical still centre-crops
   * into the frame cleanly — and these are talking-head testimonials, so the
   * subject is in the middle of the shot. On play the Short letterboxes inside
   * the 16:9 iframe, which is exactly what YouTube itself does with a Short on
   * a desktop page.
   *
   * `isShort` is still used for the thumbnail URL, where hqdefault would bake
   * in its own black bars.
   */
  const aspect = 'aspect-video'

  if (playing) {
    return (
      <div className={`relative ${aspect} overflow-hidden rounded-[var(--radius-card)] bg-ink-950`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${testimonial.title}`}
      className={`group relative block ${aspect} w-full overflow-hidden rounded-[var(--radius-card)] bg-ink-950 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube
          thumbnail; next/image would need a remote pattern and buys nothing
          here since the file is already correctly sized and CDN-cached. */}
      <img
        src={thumbnailFor(testimonial.youtubeId, testimonial.isShort)}
        alt=""
        loading="lazy"
        decoding="async"
        width={480}
        height={360}
        className="absolute inset-0 size-full object-cover opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_9_11/0.9)_0%,rgb(8_9_11/0.28)_58%,transparent_100%)]" />

      <span
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110 ${
          featured ? 'size-16 sm:size-20' : 'size-14'
        }`}
      >
        <Play
          className={`ml-0.5 fill-ink-950 text-ink-950 ${featured ? 'size-7 sm:size-8' : 'size-6'}`}
          aria-hidden
        />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
        <span
          className={`block font-display font-bold leading-tight text-white ${
            featured ? 'text-lg sm:text-2xl' : 'text-base'
          }`}
        >
          {testimonial.title}
        </span>
        <span className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-ink-300">
          {testimonial.customerName && (
            <span className="inline-flex items-center gap-1 font-medium text-white">
              {testimonial.customerName}
              <BadgeCheck className="size-3.5 text-gold-400" aria-hidden />
            </span>
          )}
          {testimonial.city && <span>{testimonial.city}</span>}
          {testimonial.brand && (
            <span className="rounded bg-white/10 px-1.5 py-0.5 font-medium text-ink-100">
              {testimonial.brand}
            </span>
          )}
          {testimonial.jobType && <span>{testimonial.jobType}</span>}
        </span>
      </span>
    </button>
  )
}

/**
 * Compact testimonial strip for use on service, brand and city pages.
 *
 * `cta` links internally to /testimonials. It is never a link to YouTube.
 */
export function VideoTestimonials({
  items,
  title = 'Customers, on camera, at their own gates',
  eyebrow = 'In their own words',
  intro = 'Anyone can print a five-star rating. These are our actual customers, filmed at the job, saying what happened in their own words.',
  showCta = true,
  tone = 'light',
}: {
  items: Testimonial[]
  title?: string
  eyebrow?: string
  intro?: string
  showCta?: boolean
  tone?: 'light' | 'tint'
}) {
  if (items.length === 0) return null

  const [featured, ...rest] = items

  return (
    <section
      className={`section ${
        tone === 'tint' ? 'bg-gradient-to-b from-white via-sky-50 to-white' : 'bg-white'
      }`}
    >
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">{intro}</p>
          </div>
          {showCta && (
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
            >
              Watch all testimonials
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <TestimonialCard testimonial={featured} featured />
          {rest.length > 0 && (
            <ul className="grid gap-5 sm:grid-cols-2">
              {rest.map((t) => (
                <li key={t.id}>
                  <TestimonialCard testimonial={t} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
