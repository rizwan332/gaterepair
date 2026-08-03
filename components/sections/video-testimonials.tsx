'use client'

import { useState } from 'react'
import { Play, Quote, BadgeCheck } from 'lucide-react'
import {
  publishedTestimonials,
  thumbnailFor,
  type Testimonial,
} from '@/content/testimonials'

/**
 * Video testimonial wall.
 *
 * Structure follows the reference the client pointed at: a large featured
 * testimonial with the customer's quote pulled out beside it, then a grid of
 * the rest. The quote is the point — a wall of unlabelled thumbnails asks the
 * visitor to gamble ninety seconds before they learn anything, and most of them
 * will not.
 *
 * Loading is facade-first: we render YouTube's thumbnail and only inject the
 * iframe on click. Embedding eleven players directly would pull in roughly a
 * megabyte of third-party JavaScript and tank LCP on exactly the mobile
 * connections the client says most customers arrive on. `youtube-nocookie`
 * keeps it out of ad-tracking territory until there is a consent banner.
 */

function Player({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-[var(--radius-card)] bg-ink-950 ${className ?? ''}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0`}
          title={`${testimonial.customerName} — customer testimonial`}
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
      aria-label={`Play testimonial from ${testimonial.customerName}`}
      className={`group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-card)] bg-ink-950 ${className ?? ''}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube
          thumbnail; next/image would need a remote pattern and buys nothing
          here since the file is already correctly sized and cached by Google. */}
      <img
        src={thumbnailFor(testimonial.youtubeId)}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_9_11/0.85)_0%,rgb(8_9_11/0.2)_55%,transparent_100%)]" />

      <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110">
        <Play className="ml-0.5 size-7 fill-ink-950 text-ink-950" aria-hidden />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-5 text-left">
        <span className="flex items-center gap-1.5 font-display text-lg font-bold text-white">
          {testimonial.customerName}
          {testimonial.verified && <BadgeCheck className="size-4 text-gold-400" aria-hidden />}
        </span>
        <span className="mt-0.5 block text-sm text-ink-300">
          {testimonial.city}
          {testimonial.jobType ? ` · ${testimonial.jobType}` : ''}
          {testimonial.duration ? ` · ${testimonial.duration}` : ''}
        </span>
      </span>
    </button>
  )
}

export function VideoTestimonials() {
  const items = publishedTestimonials
  // Nothing confirmed yet — render nothing rather than an empty shell. An
  // "our testimonials are coming soon" block is worse than no section at all.
  if (items.length === 0) return null

  const [featured, ...rest] = items

  return (
    <section className="section bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            In their own words
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
            Customers, on camera, at their own gates
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Anyone can print a five-star rating. These are our actual customers, filmed at the job, saying
            what happened in their own words.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
          <Player testimonial={featured} />
          <figure>
            <Quote className="size-9 text-gold-500" aria-hidden />
            <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-ink-950 md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            {featured.summary && (
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{featured.summary}</p>
            )}
            <figcaption className="mt-6 text-sm font-medium text-ink-600">
              {featured.customerName} &mdash; {featured.city}
              {featured.brand ? ` · ${featured.brand} operator` : ''}
            </figcaption>
          </figure>
        </div>

        {rest.length > 0 && (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((t) => (
              <li key={t.id}>
                <Player testimonial={t} />
                <p className="mt-4 leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
