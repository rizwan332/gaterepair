'use client'

import { useState } from 'react'
import { Play, BadgeCheck, ArrowUpRight } from 'lucide-react'
import {
  publishedTestimonials,
  thumbnailFor,
  YOUTUBE_CHANNEL,
  type Testimonial,
} from '@/content/testimonials'

/**
 * Video testimonial wall — the client's own customer videos.
 *
 * Loading is facade-first: we render YouTube's thumbnail and only inject the
 * iframe on click. Embedding five players directly would pull in roughly half a
 * megabyte of third-party JavaScript and tank LCP on exactly the mobile
 * connections the client says most customers arrive on. `youtube-nocookie`
 * keeps it out of ad-tracking territory until there is a consent banner.
 *
 * Cards are titled with the client's own video titles. No invented customer
 * names and no invented pull quotes — see the note in content/testimonials.ts.
 * The customer is on camera; that is the proof, and a caption cannot improve on
 * it. If a name or quote is added to the data it renders here automatically.
 */

function Player({ testimonial, featured }: { testimonial: Testimonial; featured?: boolean }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-card)] bg-ink-950">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0`}
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
      className="group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-card)] bg-ink-950"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube
          thumbnail; next/image would need a remote pattern and buys nothing
          here since the file is already correctly sized and CDN-cached. */}
      <img
        src={thumbnailFor(testimonial.youtubeId)}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_9_11/0.88)_0%,rgb(8_9_11/0.25)_55%,transparent_100%)]" />

      <span
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110 ${
          featured ? 'size-20' : 'size-14'
        }`}
      >
        <Play className={`ml-0.5 fill-ink-950 text-ink-950 ${featured ? 'size-8' : 'size-6'}`} aria-hidden />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
        <span
          className={`block font-display font-bold leading-tight text-white ${
            featured ? 'text-xl sm:text-2xl' : 'text-base'
          }`}
        >
          {testimonial.title}
        </span>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-ink-300">
          {testimonial.customerName && (
            <span className="inline-flex items-center gap-1 font-medium text-white">
              {testimonial.customerName}
              <BadgeCheck className="size-3.5 text-gold-400" aria-hidden />
            </span>
          )}
          {testimonial.city && <span>{testimonial.city}</span>}
          {testimonial.jobType && <span>{testimonial.jobType}</span>}
        </span>
      </span>
    </button>
  )
}

export function VideoTestimonials() {
  const items = publishedTestimonials
  if (items.length === 0) return null

  const [featured, ...rest] = items

  return (
    <section className="section bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
              In their own words
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              Customers, on camera, at their own gates
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Anyone can print a five-star rating. These are our actual customers, filmed at the job,
              saying what happened in their own words.
            </p>
          </div>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
          >
            More on YouTube
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Player testimonial={featured} featured />
          {rest.length > 0 && (
            <ul className="grid gap-5 sm:grid-cols-2">
              {rest.map((t) => (
                <li key={t.id}>
                  <Player testimonial={t} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
