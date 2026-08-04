import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, PlayCircle, Video } from 'lucide-react'
import { publishedTestimonials } from '@/content/testimonials'
import { business } from '@/content/business'
import { TestimonialCard } from '@/components/sections/video-testimonials'
import { ClosingCTA } from '@/components/sections/closing-cta'
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
            {items.length} customers, on camera, at their own gates
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            Anyone can print a five-star rating. These are our actual customers, filmed on site after
            the repair, describing what happened in their own words. Nothing here is scripted and
            nothing is stock.
          </p>

          <dl className="mt-9 grid max-w-xl grid-cols-3 gap-4 sm:gap-8">
            <Stat icon={Video} value={String(items.length)} label="customer videos" />
            <Stat icon={PlayCircle} value={String(brands.length)} label="operator brands" />
            <Stat icon={Phone} value="24/7" label="including holidays" />
          </dl>

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

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((t) => (
              <li key={t.id}>
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

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Phone
  value: string
  label: string
}) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="flex items-baseline gap-1.5 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
          <Icon className="size-5 self-center text-gold-500" aria-hidden />
          <span className="tabular">{value}</span>
        </span>
        <span className="mt-1 block text-sm text-ink-600">{label}</span>
      </dd>
    </div>
  )
}
