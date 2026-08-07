import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Video, ShieldCheck, Clock } from 'lucide-react'
import { publishedTestimonials } from '@/content/testimonials'
import { business } from '@/content/business'
import { TestimonialCard } from '@/components/sections/video-testimonials'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { TrustBadges } from '@/components/ui/trust-badges'
import { AssuranceRow } from '@/components/sections/assurance-row'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Customer Testimonials | ${publishedTestimonials.length} Real Gate Repair Videos | Shield Gate Repair`,
  description:
    `Watch ${publishedTestimonials.length} Shield Gate Repair customers describe their gate repair on camera. ` +
    `Real jobs, real customers, filmed on site across Dallas–Fort Worth. Call ${business.phone.display}.`,
  alternates: { canonical: '/testimonials' },
  openGraph: {
    title: 'Customer Testimonials | Shield Gate Repair',
    description: `${publishedTestimonials.length} real customers on camera describing their gate repair.`,
    type: 'website',
  },
}

/**
 * Testimonials page.
 *
 * Every testimonial CTA across the site lands here rather than on the YouTube
 * channel. Sending a visitor to YouTube at the moment they are closest to
 * calling hands them to an infinite feed of other people's videos, and gives up
 * the phone number, the schema and the conversion path in one click.
 *
 * The grid is deliberately plain: twelve equal cards, one featured. There is no
 * carousel, because a carousel hides most of the proof behind an interaction
 * most visitors never perform.
 */
export default function TestimonialsPage() {
  const items = publishedTestimonials
  const [featured, ...rest] = items
  const brands = [...new Set(items.map((t) => t.brand).filter(Boolean))] as string[]

  return (
    <>
      <section className="border-b border-ink-100 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="container-page py-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Testimonials
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
            Customers, on camera, at their own gates
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            Anyone can print a five-star rating. These are our actual customers, filmed on site after
            the repair, describing what happened in their own words. Nothing here is scripted and
            nothing is stock.
          </p>

          <AssuranceRow
            className="mt-9 max-w-3xl"
            points={[
              {
                icon: Video,
                title: 'Filmed at the gate',
                body: 'Every video was shot on site, after the repair, at the customer\u2019s own gate.',
              },
              {
                icon: ShieldCheck,
                title: 'Nothing scripted',
                body: 'No actors, no stock footage, and no names or quotes we invented.',
              },
              {
                icon: Clock,
                title: 'Someone always answers',
                body: 'Call any hour, any day of the year, and you get a person.',
              },
            ]}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.phone.href}
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold-500 px-6 font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" aria-hidden />
              {business.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-xl border border-ink-200 bg-white px-6 font-semibold text-ink-900 transition-colors hover:border-ink-300"
            >
              Get a free estimate
            </Link>
          </div>

          <TrustBadges tone="light" className="mt-7" />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          {featured && (
            <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <TestimonialCard testimonial={featured} featured />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                  Most recent
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-700">
                  Filmed on site after the repair. Press play to hear it from the customer rather than
                  from us.
                </p>
                {featured.brand && (
                  <p className="mt-5 text-sm text-ink-600">
                    Operator brand:{' '}
                    <Link
                      href={`/brands/${featured.brand.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-medium text-ink-950 underline decoration-gold-400 underline-offset-2"
                    >
                      {featured.brand}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          )}

          {/*
            A CSS multi-column flow, not a grid.

            Three of these videos are Shorts and render 9:16. In a fixed grid a
            single tall card sets the height of its whole row, so the two 16:9
            cards beside it kept their size and left a card-sized hole
            underneath — which is what the client saw.

            Columns let each card keep its true aspect and pack vertically, so
            mixed heights produce no gaps. `break-inside-avoid` stops a card
            being split across a column boundary; the margin does the vertical
            spacing, since `gap` does not apply to column flow.

            Trade-off: reading order becomes column-major rather than row-major.
            For a gallery of equally-weighted testimonials that costs nothing.
          */}
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {rest.map((t) => (
              <li key={t.id} className="mb-5 break-inside-avoid">
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-500">
            Videos load only when you press play, so this page stays fast on mobile data. Each one is
            a real Shield Gate Repair job filmed with the customer&rsquo;s permission.
          </p>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Testimonials', url: '/testimonials' },
            ]),
          ),
        }}
      />
    </>
  )
}
