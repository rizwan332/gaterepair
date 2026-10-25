import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Star } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { media } from '@/content/media-manifest'
import { jobPhoto, serviceJobPhoto } from '@/content/service-photos'
import { publishedTestimonials } from '@/content/testimonials'
import { services } from '@/content/services'
import { tier1Cities } from '@/content/cities'
import { openGraphFor, HELD_BACK_ROBOTS } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { CallHero } from '@/components/sections/call-hero'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { GateProblemForm } from '@/components/forms/gate-problem-form'

/**
 * Google Ads landing page: /dfw-gate-repair.
 *
 * Revised 21 Oct 2026 to the client's ten-point brief: short first screen,
 * Call Now as the one primary action, a unique real photo per service, less
 * copy, trust (testimonials; the before/after and warranty block was removed at
 * the site owner's request, 26 Oct 2026), the three advantages,
 * DFW coverage, and nothing that pulls the visitor off the page. Service
 * and city items are deliberately NOT links here: on a paid page every
 * exit is a click paid for and lost. The header and footer still lead to the
 * full site for anyone who wants it. Brand logos DO link to their brand
 * pages, at the site owner's request (22 Oct 2026).
 *
 * ── WHY IT CANNOT HURT SEO ──────────────────────────────────────────────────
 * noindex, absent from the sitemap and linked from nowhere on the site.
 *
 * ── TRACKING ────────────────────────────────────────────────────────────────
 * The site-wide listener records every tel:/sms: tap to /api/events and pushes
 * call_click / sms_click to GTM (Google Ads Phone Clicks / SMS Clicks); the form
 * posts to /api/leads and pushes generate_lead (Google Ads contact form, with
 * Enhanced Conversions). lib/page-type.ts reports these as "Ads: dfw-gate-repair".
 *
 * ── CLAIMS ──────────────────────────────────────────────────────────────────
 * Only confirmed facts from content/business.ts. Google rating renders
 * when confirmed; "On site today" stays off until confirmed.
 */

export const metadata: Metadata = {
  title: { absolute: 'Gate Not Working? 24/7 Gate Repair in DFW | Call Now' },
  description:
    'Professional gate repair across Dallas–Fort Worth. No service call fee, licensed and insured, 16+ years. Call or text for fast service.',
  alternates: { canonical: '/dfw-gate-repair' },
  openGraph: openGraphFor('/dfw-gate-repair'),
  robots: HELD_BACK_ROBOTS,
}

const FAQS = [
  {
    q: 'Can you help if I am locked in or out right now?',
    a: 'Yes. Call and a person answers 24/7. We can usually talk you through the manual release on the phone.',
  },
  {
    q: 'Which gate brands do you repair?',
    a: 'LiftMaster, US Automatic, Nice Apollo, FAAC, Viking, Ramset, Elite, All-O-Matic and more, plus keypads, intercoms and sensors.',
  },
  {
    q: 'Will I know the price before you start?',
    a: 'Yes. We diagnose first and give you the price before any work begins.',
  },
]

function CallNow({ compact = false }: { compact?: boolean }) {
  return (
    <Button
      href={business.phone.href}
      size="lg"
      className={`h-auto w-full flex-col gap-0.5 tabular sm:w-auto sm:px-10 ${compact ? 'py-3' : 'py-4'}`}
    >
      <span className="inline-flex items-center gap-2.5 text-xl font-bold">
        <Phone className="size-6" aria-hidden />
        Call Now: {business.phone.display}
      </span>
      {!compact && <span className="text-sm font-medium">Speak with a gate repair specialist</span>}
    </Button>
  )
}

export default function DfwGateRepairLanding() {
  // Background: the client's own double swing gate installation at Lake Kiowa,
  // Texas. A real DFW-area job photo, not stock and not generated.
  const hero = jobPhoto('liftmaster-la400-double-swing-installation-lake-kiowa-tx', 5) ?? media['gate-installation']?.[0]
  const rating = fact(business.rating)


  return (
    <>
      <CallHero image={hero} estimateHref="#estimate" />

      {/* ── Brands: each logo opens its brand page ───────────────────────── */}
      <section className="border-b border-ink-100 bg-white py-7">
        <div className="container-page">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
            We repair all major brands
          </p>
          <ul className="grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
            {(
              [
                ['liftmaster', 'LiftMaster'],
                ['us-automatic', 'US Automatic'],
                ['faac', 'FAAC'],
                ['viking', 'Viking'],
                ['apollo', 'Nice Apollo'],
                ['ramset', 'Ramset'],
              ] as const
            ).map(([slug, name]) => (
              <li key={slug} className="flex justify-center">
                <Link
                  href={`/brands/${slug}`}
                  aria-label={`${name} gate repair`}
                  className="rounded-md p-1 opacity-80 transition hover:opacity-100 focus-visible:opacity-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/logos/${slug}.webp`} alt={`${name} gate operators`} className="h-8 w-auto max-w-[7rem] object-contain sm:h-10 sm:max-w-[9rem]" loading="lazy" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Trust: rating (when confirmed), customer videos ─────────── */}
      {rating && (
        <section className="bg-white pt-10">
          <div className="container-page flex items-center gap-3">
            <span className="flex text-gold-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </span>
            <p className="font-semibold text-ink-900">
              {rating.score} on Google from {rating.count} reviews
            </p>
          </div>
        </section>
      )}

      <TestimonialCarousel
        items={publishedTestimonials}
        eyebrow="Real customers"
        title="What our customers say"
        intro="Filmed at their own gates across Dallas–Fort Worth."
        tone="tint"
        showCta={false}
      />

      {/* ── 3 & 9. Services: a unique real photo each, no exits ───────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950 sm:text-3xl">What we repair</h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {services.map((s) => {
              const img = serviceJobPhoto(s.slug)
              return (
                <li key={s.slug} className="overflow-hidden rounded-xl border border-ink-100 bg-white">
                  <div className="relative aspect-[4/3] bg-ink-100">
                    {img && <ResponsiveImage image={img} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />}
                  </div>
                  <p className="px-3 py-2.5 text-[0.8125rem] font-semibold leading-snug text-ink-950">{s.name}</p>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallNow compact />
          </div>
        </div>
      </section>

      {/* ── Estimate form ────────────────────────────────────────────────── */}
      <section id="estimate" className="section scroll-mt-24 bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">Get a free estimate</h2>
            <p className="mt-2 text-ink-700">Leave your number and we will call you back. Calling is faster.</p>
            <div className="mt-5">
              <CallNow compact />
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-card)] ring-1 ring-ink-100">
            <GateProblemForm sourcePage="/dfw-gate-repair" />
          </div>
        </div>
      </section>

      {/* ── 8. Service area: stated, not linked ──────────────────────────── */}
      <section className="bg-ink-50 py-10">
        <div className="container-page">
          <h2 className="font-display text-xl font-bold text-ink-950">Serving Dallas&ndash;Fort Worth and surrounding cities</h2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">
            {tier1Cities.map((c) => c.name).join(', ')} and nearby communities.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={FAQS} title="Before you call" />

      <section className="bg-gold-500">
        <div className="container-page flex flex-col items-start gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">Gate not working? Call now.</h2>
            <p className="mt-1 text-ink-900">A person answers, day or night.</p>
          </div>
          <Button href={business.phone.href} variant="dark" size="lg" className="w-full tabular sm:w-auto">
            <Phone className="size-5" aria-hidden />
            {business.phone.display}
          </Button>
        </div>
      </section>
    </>
  )
}
