import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, CalendarClock, Clock, FileText, Home, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { media } from '@/content/media-manifest'
import { publishedTestimonials } from '@/content/testimonials'
import { jobVideos } from '@/content/job-videos'
import { services } from '@/content/services'
import { tier1Cities } from '@/content/cities'
import { openGraphFor, HELD_BACK_ROBOTS } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { JobVideos } from '@/components/sections/job-videos'
import { Process } from '@/components/sections/process'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { GateProblemForm } from '@/components/forms/gate-problem-form'

/**
 * Google Ads landing page: /dfw-gate-repair.
 *
 * Built 21 Oct 2026 from the client's mockup ("Google Ads landing page,
 * focused on phone calls"). One job: turn a paid click into a call.
 *
 * ── WHY IT CANNOT HURT SEO ──────────────────────────────────────────────────
 * noindex, absent from the sitemap and linked from nowhere on the site, so it
 * never competes with the homepage or the city pages for any search. It exists
 * for ad traffic only. It links OUT to the brand, service and city pages, so a
 * visitor who wants to read more can, and nothing about those pages changes.
 *
 * ── TRACKING ────────────────────────────────────────────────────────────────
 * Nothing page-specific is needed. The site-wide listener records every tel:
 * and sms: tap to /api/events and pushes call_click / sms_click to GTM; the form
 * posts to /api/leads and pushes generate_lead. lib/page-type.ts names this
 * path, so the dashboard reports these leads as "Ads: dfw-gate-repair".
 *
 * ── CLAIMS ──────────────────────────────────────────────────────────────────
 * "No service call fee" and "On site today" come from the mockup but are
 * unconfirmed, so they are facts in content/business.ts that render only when
 * confirmed. Everything else here is already stated elsewhere on the site.
 */

export const metadata: Metadata = {
  title: { absolute: '24/7 Gate Repair in Dallas–Fort Worth | Call Now' },
  description:
    'Automatic gate repair across Dallas–Fort Worth, 24/7. Licensed and insured technicians with parts on the truck. Call or text for fast service.',
  alternates: { canonical: '/dfw-gate-repair' },
  openGraph: openGraphFor('/dfw-gate-repair'),
  robots: HELD_BACK_ROBOTS,
}

const LOGOS = ['liftmaster', 'doorking', 'faac', 'viking', 'eagle', 'ramset'] as const
const LOGO_NAME: Record<(typeof LOGOS)[number], string> = {
  liftmaster: 'LiftMaster',
  doorking: 'DoorKing',
  faac: 'FAAC',
  viking: 'Viking',
  eagle: 'Eagle',
  ramset: 'Ramset',
}

const FAQS = [
  {
    q: 'Do you repair all gate brands?',
    a: 'We repair the major operator brands used across Dallas–Fort Worth, including LiftMaster, US Automatic, DoorKing, FAAC, Viking, Elite, Eagle, Ramset and All-O-Matic, plus the keypads, intercoms, loops and sensors that control them.',
  },
  {
    q: 'Can you help if I am locked in or out right now?',
    a: 'Yes. Call and a person answers 24/7. Most operators have a manual release, and we can usually talk you through it on the phone so you can get in or out before a technician arrives.',
  },
  {
    q: 'Do you work on HOA, apartment and commercial gates?',
    a: 'Yes. We repair residential driveway gates and the high-cycle entrances on HOA communities, apartment complexes and commercial properties.',
  },
  {
    q: 'Will I know the price before you start?',
    a: 'Yes. We diagnose the fault first and tell you what it needs and what it costs before any work begins.',
  },
]

function CallButton({ size = 'lg' }: { size?: 'md' | 'lg' }) {
  return (
    <Button href={business.phone.href} size={size} className="h-auto w-full flex-col gap-0.5 py-3.5 tabular sm:w-auto sm:px-10">
      <span className="inline-flex items-center gap-2.5 text-lg font-bold sm:text-xl">
        <Phone className="size-5" aria-hidden />
        Call Now: {business.phone.display}
      </span>
      <span className="text-sm font-medium">Speak with a gate repair specialist</span>
    </Button>
  )
}

export default function DfwGateRepairLanding() {
  const hero = media['automatic-gate-repair']?.[2] ?? media['gate-installation']?.[0]
  const noFee = fact(business.noServiceCallFee)
  const sameDay = fact(business.sameDayOnSite)
  const years = fact(business.yearsInBusiness)

  // Benefits: confirmed facts only. The two mockup claims appear when the
  // client confirms them in content/business.ts.
  const benefits = [
    ...(noFee ? [{ icon: BadgeCheck, text: noFee }] : []),
    { icon: ShieldCheck, text: 'Licensed & insured' },
    { icon: Clock, text: sameDay ?? 'Open 24/7, every day' },
    ...(years ? [{ icon: CalendarClock, text: `${years}+ years across DFW` }] : []),
    { icon: Home, text: 'Residential & commercial' },
  ].slice(0, 4)

  return (
    <>
      {/* ── Hero: call first ─────────────────────────────────────────────── */}
      <section className="surface-dark relative isolate overflow-hidden">
        {hero && (
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage image={hero} alt="" priority fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_9_11/0.72)_0%,rgb(8_9_11/0.9)_55%,rgb(8_9_11/0.97)_100%)]" />
          </div>
        )}
        <div className="container-page relative py-10 md:py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-3.5 py-1.5 text-sm font-bold text-ink-950">
              <MapPin className="size-4" aria-hidden />
              DFW Gate Repair Specialists
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Automatic Gate Repair in <span className="text-gradient-gold">Dallas&ndash;Fort Worth</span>
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
              Fast. Reliable. {sameDay ? 'On site today.' : 'Answered 24/7.'}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[0.9375rem] leading-snug text-white sm:text-base">
                  <Icon className="size-7 shrink-0 text-success-400" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton />
              <Button href="#estimate" variant="ghostDark" size="lg" className="w-full sm:w-auto">
                <FileText className="size-5" aria-hidden />
                Request a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands ───────────────────────────────────────────────────────── */}
      <section className="border-b border-ink-100 bg-white py-8">
        <div className="container-page">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
            Operators we repair every day
          </p>
          <ul className="grid grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-6">
            {LOGOS.map((slug) => (
              <li key={slug} className="flex justify-center">
                <Link href={`/brands/${slug}`} className="opacity-80 transition-opacity hover:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/logos/${slug}.webp`} alt={`${LOGO_NAME[slug]} gate repair`} className="h-8 w-auto max-w-[7rem] object-contain" loading="lazy" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Real jobs on video ───────────────────────────────────────────── */}
      <JobVideos
        items={jobVideos}
        limit={3}
        title="See our recent gate repair jobs"
        intro="Real videos from our own jobs across Dallas–Fort Worth."
      />

      {/* ── Customers ────────────────────────────────────────────────────── */}
      <TestimonialCarousel
        items={publishedTestimonials}
        eyebrow="Customer videos"
        title="What our customers say"
        intro="Filmed at their own gates, in their own words."
        tone="tint"
      />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-3xl font-bold text-ink-950">Our gate repair services</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-center justify-between gap-3 rounded-[var(--radius-card)] border border-ink-100 bg-white p-4 transition-all hover:border-ink-200 hover:shadow-[var(--shadow-card)]"
                >
                  <span>
                    <span className="block font-display font-semibold text-ink-950">{s.name}</span>
                    {s.cardLine && <span className="mt-0.5 block text-sm text-ink-600">{s.cardLine}</span>}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CallButton size="md" />
          </div>
        </div>
      </section>

      <Process />

      {/* ── Estimate form ────────────────────────────────────────────────── */}
      <section id="estimate" className="section scroll-mt-24 bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink-950">Request a free estimate</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-700">
              Leave your name and number and we will call you back. For anything urgent, calling is faster.
            </p>
            <div className="mt-6">
              <CallButton size="md" />
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-ink-100">
            <GateProblemForm sourcePage="/dfw-gate-repair" />
          </div>
        </div>
      </section>

      {/* ── Service areas ────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-2 font-display text-2xl font-bold text-ink-950">Serving all of Dallas&ndash;Fort Worth</h2>
          <p className="mb-6 text-ink-600">Including these cities and the communities around them.</p>
          <ul className="flex flex-wrap gap-2">
            {tier1Cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/gate-repair-${c.slug}-tx`}
                  className="inline-block rounded-lg border border-ink-100 bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-800 hover:border-gold-400 hover:text-ink-950"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="inline-block px-3 py-1.5 text-sm font-semibold text-ink-900 underline decoration-gold-400 underline-offset-2">
                All service areas
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <FaqAccordion faqs={FAQS} title="Before you call" />

      {/* ── Final call ───────────────────────────────────────────────────── */}
      <section className="bg-gold-500">
        <div className="container-page flex flex-col items-start gap-5 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">Gate not working? Call now.</h2>
            <p className="mt-1.5 text-ink-900">A person answers, day or night.</p>
          </div>
          <Button href={business.phone.href} variant="dark" size="lg" className="tabular">
            <Phone className="size-5" aria-hidden />
            {business.phone.display}
          </Button>
        </div>
      </section>
    </>
  )
}
