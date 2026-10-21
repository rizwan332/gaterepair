import type { Metadata } from 'next'
import { CalendarDays, CheckCircle2, Phone, ShieldCheck, Star } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { media, type MediaImage } from '@/content/media-manifest'
import { projects } from '@/content/projects'
import { caseStudyPhotos } from '@/content/case-study-media'
import { publishedTestimonials } from '@/content/testimonials'
import { services } from '@/content/services'
import { tier1Cities } from '@/content/cities'
import { openGraphFor, HELD_BACK_ROBOTS } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { GateProblemForm } from '@/components/forms/gate-problem-form'

/**
 * Google Ads landing page: /dfw-gate-repair.
 *
 * Revised 21 Oct 2026 to the client's ten-point brief: short first screen,
 * Call Now as the one primary action, a unique real photo per service, less
 * copy, trust (testimonials, before/after, warranty), the three advantages,
 * DFW coverage, and nothing that pulls the visitor off the page. Service,
 * brand and city items are deliberately NOT links here: on a paid page every
 * exit is a click paid for and lost. The header and footer still lead to the
 * full site for anyone who wants it.
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
 * Only confirmed facts from content/business.ts. Google rating and warranty
 * term render when confirmed; "On site today" stays off until confirmed.
 */

export const metadata: Metadata = {
  title: { absolute: 'Gate Not Working? 24/7 Gate Repair in DFW | Call Now' },
  description:
    'Professional gate repair across Dallas–Fort Worth. No service call fee, licensed and insured, 16+ years. Call or text for fast service.',
  alternates: { canonical: '/dfw-gate-repair' },
  openGraph: openGraphFor('/dfw-gate-repair'),
  robots: HELD_BACK_ROBOTS,
}

/** A client job photo in the shape ResponsiveImage takes. */
function jobPhoto(projectSlug: string, index: number): MediaImage | undefined {
  const project = projects.find((p) => p.slug === projectSlug)
  const photo = project?.photoSet ? caseStudyPhotos[project.photoSet]?.[index] : undefined
  if (!photo) return undefined
  return {
    slug: photo.slug,
    src: photo.src,
    widths: photo.widths,
    width: photo.width,
    height: photo.height,
    blurDataURL: photo.blurDataURL,
    alt: photo.caption || project!.title,
    altWritten: Boolean(photo.caption),
  }
}

/**
 * One distinct photo per service, chosen by hand so each shows that service.
 * Real Texas job photos wherever the client supplied one; the two services
 * with no documented job use their own library category. No photo repeats,
 * and none is reused in the before/after section.
 */
const SERVICE_PHOTO: Record<string, () => MediaImage | undefined> = {
  'gate-motor-repair': () => jobPhoto('liftmaster-la400-arm-replacement-university-park-tx', 2),
  'emergency-gate-repair': () => jobPhoto('liftmaster-csl24ul-off-track-dallas-tx', 0),
  'automatic-gate-repair': () => jobPhoto('eagle-2000-restored-coppell-tx', 0),
  'sliding-gate-repair': () => jobPhoto('ramset-gearbox-repair-richardson-tx', 0),
  'swing-gate-repair': () => jobPhoto('us-automatic-arm-battery-prosper-tx', 2),
  'electric-gate-repair': () => jobPhoto('liftmaster-solar-upgrade-wills-point-tx', 3),
  'iron-gate-repair': () => media['iron-gate-repair']?.[0],
  'commercial-gate-repair': () => jobPhoto('liftmaster-community-gate-reset-mildred-tx', 0),
  'access-control-repair': () => media['access-control']?.[0],
  'gate-installation': () => jobPhoto('liftmaster-csl24ul-installation-dallas-tx', 4),
}

/** Pairs whose own captions say which photo is before and which is after. */
const BEFORE_AFTER = [
  { project: 'swing-gate-circuit-board-southlake-tx', before: 0, after: 2, city: 'Southlake', label: 'Corroded control board replaced' },
  { project: 'us-automatic-solar-refurbishment-fort-worth-tx', before: 0, after: 2, city: 'Fort Worth', label: 'US Automatic board refurbished, not replaced' },
]

const FAQS = [
  {
    q: 'Can you help if I am locked in or out right now?',
    a: 'Yes. Call and a person answers 24/7. We can usually talk you through the manual release on the phone.',
  },
  {
    q: 'Which gate brands do you repair?',
    a: 'LiftMaster, US Automatic, DoorKing, FAAC, Viking, Elite, Eagle, Ramset, All-O-Matic and more, plus keypads, intercoms and sensors.',
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
  const noFee = fact(business.noServiceCallFee)
  const rating = fact(business.rating)
  const warranty = fact(business.warrantyTerm)

  // The client's exact trust points (brief of 22 Oct 2026). "No service call
  // fee" still reads from the confirmed fact so it can never outlive the offer.
  const trustPoints = [...(noFee ? ['No Service Call Fee'] : []), 'Licensed & Insured', 'All Major Gate Brands']

  return (
    <>
      {/* ── First screen: the client's exact copy, everything above the fold ─ */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        {hero && (
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage image={hero} alt="" priority fill sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_9_11/0.55)_0%,rgb(8_9_11/0.78)_38%,rgb(8_9_11/0.92)_100%)]" />
          </div>
        )}
        <div className="container-page relative pb-8 pt-6 md:py-20 [@media(max-height:620px)]:pb-6 [@media(max-height:620px)]:pt-4">
          <div className="max-w-2xl">
            <p className="font-display text-[0.8125rem] font-semibold uppercase leading-relaxed tracking-[0.16em] sm:text-sm">
              <span className="block text-gold-400">DFW &amp; Surrounding Areas</span>
              <span className="block text-white">Residential &amp; Commercial</span>
            </p>

            <h1 className="mt-2.5 font-display text-[1.9rem] font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_12px_rgb(0_0_0/0.45)] sm:text-6xl lg:text-7xl [@media(max-height:620px)]:text-[1.65rem]">
              Gate Problems?
              <span className="block text-gold-400">We Have the Solution.</span>
            </h1>

            <p className="mt-3 font-display text-[1.0625rem] font-semibold leading-snug text-white sm:text-2xl [@media(max-height:620px)]:mt-2 [@media(max-height:620px)]:text-[0.9375rem]">
              Expert Automatic Gate Repair.
              <span className="block">Fast, Reliable Service.</span>
              <span className="block text-gold-400">We Repair Before We Replace.</span>
            </p>

            <ul className="mt-4 grid grid-cols-3 gap-2 sm:max-w-xl [@media(max-height:620px)]:mt-3">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-center gap-2 text-[0.8125rem] font-medium leading-tight text-white sm:text-base">
                  <CheckCircle2 className="size-6 shrink-0 text-success-400 sm:size-8" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-2.5 sm:max-w-xl [@media(max-height:620px)]:mt-3.5">
              <Button href={business.phone.href} size="lg" className="h-14 w-full whitespace-nowrap px-4 text-[1.0625rem] font-bold uppercase tracking-wide tabular shadow-[0_10px_30px_-10px_rgb(245_179_42/0.7)] sm:h-[3.75rem] sm:text-xl">
                <Phone className="size-6" aria-hidden />
                Call Now — {business.phone.display}
              </Button>
              <Button href="#estimate" variant="ghostDark" size="lg" className="h-12 w-full font-bold uppercase tracking-wide sm:h-14">
                <CalendarDays className="size-5" aria-hidden />
                Get a Free Estimate
              </Button>
            </div>

            <p className="mt-4 text-center text-sm text-ink-300 sm:text-left">
              Professional Gate Repair &bull; Residential &amp; Commercial
            </p>
          </div>
        </div>
      </section>

      {/* Advantages strip, straight under the first screen. The hero carries
          the client's exact three trust points; his earlier brief also asks for
          16+ years, which lives here so the hero copy stays as he wrote it. */}
      <section className="bg-gold-500">
        <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-2 py-4 text-sm font-semibold text-ink-950 sm:flex sm:justify-center sm:gap-x-8">
          {[
            ...(fact(business.yearsInBusiness) ? [`${fact(business.yearsInBusiness)}+ Years Experience`] : []),
            'Written Warranty',
            'Open 24/7',
            'Repair Before Replace',
          ].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 shrink-0" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Brands: recognition, not navigation ─────────────────────────── */}
      <section className="border-b border-ink-100 bg-white py-7">
        <div className="container-page">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-ink-500">
            We repair all major brands
          </p>
          <ul className="grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
            {(
              [
                ['liftmaster', 'LiftMaster'],
                ['doorking', 'DoorKing'],
                ['faac', 'FAAC'],
                ['viking', 'Viking'],
                ['eagle', 'Eagle'],
                ['ramset', 'Ramset'],
              ] as const
            ).map(([slug, name]) => (
              <li key={slug} className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/logos/${slug}.webp`} alt={`${name} gate operators`} className="h-8 w-auto max-w-[7rem] object-contain opacity-80" loading="lazy" />
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

      {/* ── Before & after: real jobs, captions are the client's own ────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950 sm:text-3xl">Before &amp; after</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {BEFORE_AFTER.map((job) => {
              const before = jobPhoto(job.project, job.before)
              const after = jobPhoto(job.project, job.after)
              if (!before || !after) return null
              return (
                <li key={job.project} className="overflow-hidden rounded-[var(--radius-card)] border border-ink-100 bg-white">
                  <div className="grid grid-cols-2 gap-px bg-ink-100">
                    {[
                      { img: before, tag: 'Before' },
                      { img: after, tag: 'After' },
                    ].map(({ img, tag }) => (
                      <figure key={tag} className="relative aspect-[4/3] bg-ink-100">
                        <ResponsiveImage image={img} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                        <figcaption
                          className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-xs font-bold ${
                            tag === 'After' ? 'bg-success-500 text-white' : 'bg-ink-950/80 text-white'
                          }`}
                        >
                          {tag}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="px-4 py-3 text-sm">
                    <span className="font-semibold text-ink-950">{job.label}</span>
                    <span className="text-ink-500"> · {job.city}, TX</span>
                  </p>
                </li>
              )
            })}
          </ul>

          {/* Warranty, stated exactly as the warranty page does. */}
          <div className="mt-6 flex items-start gap-3 rounded-[var(--radius-card)] bg-success-500/[0.07] p-4 ring-1 ring-inset ring-success-500/20">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-success-600" aria-hidden />
            <p className="text-[0.9375rem] leading-relaxed text-ink-800">
              <span className="font-semibold text-ink-950">Written warranty on parts and workmanship</span>
              {warranty ? ` (${warranty})` : ''}. If a part we fitted fails or our work needs putting right, we come back
              at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 & 9. Services: a unique real photo each, no exits ───────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950 sm:text-3xl">What we repair</h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {services.map((s) => {
              const img = SERVICE_PHOTO[s.slug]?.()
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
