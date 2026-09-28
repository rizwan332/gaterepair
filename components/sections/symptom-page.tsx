import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  ShieldAlert,
  Wrench,
  XCircle,
} from 'lucide-react'
import { business } from '@/content/business'
import { serviceBySlug, type Service } from '@/content/services'
import { brandBySlug } from '@/content/brands'
import { modelByKey, modelPath } from '@/content/models'
import { indexedCities } from '@/content/cities'
import { symptomBySlug, symptomPath } from '@/content/symptoms'
import type { SymptomPage } from '@/content/symptoms/types'
import { assessSymptom, isSymptomIndexable } from '@/lib/symptom-quality'
import { openGraphFor, INDEXABLE_ROBOTS, HELD_BACK_ROBOTS } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { TrustBadges } from '@/components/ui/trust-badges'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { GateProblemForm } from '@/components/forms/gate-problem-form'

/**
 * Renderer for every symptom page (/gate-problems/<slug>).
 *
 * ── ORDER ────────────────────────────────────────────────────────────────────
 * This reader is different from the one on a model page. They are not
 * researching a product, they are standing next to a gate that is doing
 * something wrong, possibly in the dark, possibly unable to leave. So the page
 * opens with what it usually turns out to be and what it means for their
 * security right now, then gives them the checks they can do themselves, and
 * only then explains the mechanism.
 *
 * Putting the owner's own checks *above* the causes is deliberate and it costs
 * us some calls. It is the right order for the reader, it is what makes the
 * page worth linking to, and a page that tells someone how to clean a photo-eye
 * earns the call for the fault they cannot fix.
 *
 * ── WHAT IS SHARED AND WHAT IS NOT ───────────────────────────────────────────
 * The diagnostic prose comes from content/symptoms/*. This file supplies only
 * the frame: headings, the urgency banner, CTAs, the form and the links.
 * Nothing written here counts toward a page's right to be indexed —
 * lib/symptom-quality.ts measures the content fields alone.
 */

const URGENCY = {
  security: {
    label: 'Security risk',
    body: 'Your property is not secured while this is unfixed.',
    className: 'border-red-300 bg-red-50 text-red-900',
    icon: ShieldAlert,
  },
  safety: {
    label: 'Safety risk',
    body: 'This fault can injure someone. Treat the gate as out of service.',
    className: 'border-red-300 bg-red-50 text-red-900',
    icon: AlertTriangle,
  },
  access: {
    label: 'Access blocked',
    body: 'People or vehicles cannot get in or out until this is resolved.',
    className: 'border-amber-300 bg-amber-50 text-amber-900',
    icon: AlertTriangle,
  },
  inconvenience: {
    label: 'Not urgent',
    body: 'Annoying rather than dangerous — and often fixable without a call-out.',
    className: 'border-ink-200 bg-ink-50 text-ink-800',
    icon: Wrench,
  },
} as const

const LIKELIHOOD = {
  'most common': 'bg-gold-500/15 text-gold-700 ring-gold-500/25',
  common: 'bg-ink-100 text-ink-700 ring-ink-200',
  'less common': 'bg-ink-50 text-ink-600 ring-ink-200',
  rare: 'bg-ink-50 text-ink-500 ring-ink-200',
} as const

export function symptomMetadata(page: SymptomPage): Metadata {
  const path = symptomPath(page)
  return {
    title: { absolute: page.title },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: openGraphFor(path, { title: page.title, description: page.metaDescription }),
    // Held back until it clears the gate. `follow`, so its links to services,
    // models and cities still count while it is. The indexable branch states
    // the directives rather than passing undefined — see INDEXABLE_ROBOTS.
    robots: assessSymptom(page).indexable ? INDEXABLE_ROBOTS : HELD_BACK_ROBOTS,
  }
}

function CallButtons({ label, tone }: { label: string; tone: 'dark' | 'light' }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href={business.phone.href} size="lg" variant={tone === 'dark' ? 'primary' : 'dark'} className="tabular">
        <Phone className="size-5" aria-hidden />
        Call Now &mdash; {business.phone.display}
      </Button>
      <Button href="#estimate" size="lg" variant={tone === 'dark' ? 'ghostDark' : 'secondary'}>
        Request a Free Estimate
        <span className="sr-only"> for {label}</span>
      </Button>
    </div>
  )
}

export function SymptomPageView({ page }: { page: SymptomPage }) {
  const path = symptomPath(page)
  const urgency = URGENCY[page.urgency]
  const UrgencyIcon = urgency.icon

  const relatedServices = page.relatedServices
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is Service => Boolean(s))

  const relatedSymptoms = page.relatedSymptoms
    .map((slug) => symptomBySlug(slug))
    .filter((s): s is SymptomPage => Boolean(s))
    .filter(isSymptomIndexable)

  const relatedModels = (page.relatedModels ?? []).map(modelByKey).filter(Boolean)
  const relatedBrands = (page.relatedBrands ?? []).map(brandBySlug).filter(Boolean)

  // The city half of every Section 4 keyword lives on the city pages. Linking
  // a sample of them from here is what joins "gate won't close" to "gate won't
  // close Plano TX" without building 95 copies of this page.
  const cities = indexedCities.slice(0, 12)

  const ownerFixable = page.causes.filter((c) => c.ownerCanFix)

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gate Problems', url: '/gate-problems' },
    { name: page.label, url: path },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="surface-dark relative isolate overflow-hidden">
        <div className="container-page relative py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-300">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="inline-flex items-center gap-1">
                  {i > 0 && <ChevronRight className="size-3.5 text-ink-500" aria-hidden />}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink-100">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <div>
              <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">{page.heroIntro}</p>

              {/* The phrases this page owns, stated once in prose rather than
                  listed as keywords. */}
              {page.searchedAs.length > 1 && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-400">
                  Also described as{' '}
                  {page.searchedAs
                    .filter((s, i, all) => all.findIndex((x) => x.toLowerCase() === s.toLowerCase()) === i)
                    .slice(0, 4)
                    .map((s) => `“${s.toLowerCase()}”`)
                    .join(', ')}
                  .
                </p>
              )}

              <div className="mt-8">
                <CallButtons label={page.label} tone="dark" />
              </div>
              <TrustBadges className="mt-8" />
            </div>

            {/* The Shield panel — why this page is worth reading, above the fold. */}
            <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <p className="font-display text-xl font-semibold text-white">
                How we approach {page.label.toLowerCase()}
              </p>
              <ul className="mt-5 space-y-4">
                {page.heroPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-200">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgency ──────────────────────────────────────────────────────── */}
      <section className="container-page pt-10">
        <div className={`flex gap-4 rounded-[var(--radius-card)] border p-5 sm:p-6 ${urgency.className}`}>
          <UrgencyIcon className="mt-0.5 size-6 shrink-0" aria-hidden />
          <div>
            <p className="font-display text-base font-semibold">{urgency.label}</p>
            <p className="mt-1.5 text-sm leading-relaxed">{page.urgencyNote}</p>
          </div>
        </div>
      </section>

      {/* ── Check these first ────────────────────────────────────────────── */}
      <section className="container-page py-12 md:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
          Check these first &mdash; before you call anyone
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          {ownerFixable.length > 0
            ? `Some causes of ${page.label.toLowerCase()} you can resolve yourself in minutes. We would rather you found one than paid us to.`
            : 'These checks narrow the fault before anyone is dispatched, which shortens the visit and the bill.'}
        </p>

        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {page.checkFirst.map((check, i) => (
            <li
              key={check.step}
              className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-lg font-semibold tabular text-gold-600">{i + 1}</span>
                <h3 className="font-display text-base font-semibold text-ink-950">{check.step}</h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-700">{check.body}</p>
            </li>
          ))}
        </ol>

        {/* Safety warnings sit immediately after the checks, where someone who
            is about to try something is actually looking. */}
        <div className="mt-8 rounded-[var(--radius-card)] border border-red-200 bg-red-50/60 p-6">
          <h3 className="flex items-center gap-2 font-display text-base font-semibold text-red-900">
            <AlertTriangle className="size-5" aria-hidden />
            What not to do
          </h3>
          <ul className="mt-4 space-y-2.5">
            {page.doNot.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-red-900">
                <XCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Call band ────────────────────────────────────────────────────── */}
      <section className="surface-dark">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white sm:text-2xl">
              Checked all that and it is still {page.label.toLowerCase()}?
            </p>
            <p className="mt-2 text-ink-300">Tell us what you found &mdash; it shortens the visit.</p>
          </div>
          <CallButtons label={page.label} tone="dark" />
        </div>
      </section>

      {/* ── What is happening ────────────────────────────────────────────── */}
      <section className="container-page py-12 md:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">What is actually happening</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {page.whatIsHappening.map((passage) => (
            <div key={passage.heading}>
              <h3 className="font-display text-lg font-semibold text-ink-950">{passage.heading}</h3>
              {passage.body.map((para) => (
                <p key={para.slice(0, 40)} className="mt-3 leading-relaxed text-ink-700">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Causes ───────────────────────────────────────────────────────── */}
      <section className="border-y border-ink-100 bg-ink-50/50">
        <div className="container-page py-12 md:py-16">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            What causes it, most likely first
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Each of these looks different at the gate. The &ldquo;how to tell&rdquo; line is what separates it from
            the one above.
          </p>

          <div className="mt-8 space-y-4">
            {page.causes.map((cause) => (
              <article
                key={cause.cause}
                className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink-950">{cause.cause}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${LIKELIHOOD[cause.likelihood]}`}
                  >
                    {cause.likelihood}
                  </span>
                  {cause.ownerCanFix && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-success-500/10 px-2.5 py-0.5 text-xs font-medium text-success-700 ring-1 ring-inset ring-success-500/20">
                      <CheckCircle2 className="size-3" aria-hidden />
                      You can often fix this
                    </span>
                  )}
                </div>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">How to tell</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">{cause.howToTell}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">The fix</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">{cause.fix}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repair or replace ────────────────────────────────────────────── */}
      <section className="container-page py-12 md:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Repair, or replace?</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">{page.outlook.summary}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-success-500/25 bg-success-500/[0.04] p-6">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-950">
              <Wrench className="size-5 text-success-600" aria-hidden />
              Usually a repair
            </h3>
            <ul className="mt-4 space-y-2.5">
              {page.outlook.usuallyRepair.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-ink-200 bg-white p-6">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-950">
              <AlertTriangle className="size-5 text-gold-600" aria-hidden />
              Sometimes a replacement
            </h3>
            <ul className="mt-4 space-y-2.5">
              {page.outlook.sometimesReplace.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── DFW ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-ink-100 bg-ink-50/50">
        <div className="container-page py-12 md:py-16">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            Why this happens in Dallas&ndash;Fort Worth
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {page.dfw.map((passage) => (
              <div key={passage.heading}>
                <h3 className="font-display text-lg font-semibold text-ink-950">{passage.heading}</h3>
                {passage.body.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-3 leading-relaxed text-ink-700">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* City links. This is the join between "gate won't close" and
              "gate won't close Plano TX" — carried by links to real city
              pages rather than by 95 copies of this one. */}
          <div className="mt-10">
            <h3 className="font-display text-base font-semibold text-ink-950">
              We fix this across the metroplex
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/gate-repair-${city.slug}-tx`}
                    className="inline-flex rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-gold-300 hover:text-ink-950"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="inline-flex rounded-full border border-ink-300 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-900 transition-colors hover:border-gold-400"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related ──────────────────────────────────────────────────────── */}
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {relatedSymptoms.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-950">Related faults</h2>
              <ul className="mt-4 space-y-2.5">
                {relatedSymptoms.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={symptomPath(s)}
                      className="group inline-flex items-start gap-2 text-ink-700 hover:text-ink-950"
                    >
                      <ArrowRight
                        className="mt-1 size-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                      <span>{s.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedServices.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-950">The service that covers this</h2>
              <ul className="mt-4 space-y-2.5">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group inline-flex items-start gap-2 text-ink-700 hover:text-ink-950"
                    >
                      <ArrowRight
                        className="mt-1 size-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                      <span>{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {(relatedBrands.length > 0 || relatedModels.length > 0) && (
          <div className="mt-10 border-t border-ink-100 pt-8">
            <h2 className="font-display text-xl font-semibold text-ink-950">
              Operators this fault is characteristic of
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relatedBrands.map((b) => (
                <li key={b!.slug}>
                  <Link
                    href={`/brands/${b!.slug}`}
                    className="inline-flex rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 hover:border-gold-300 hover:text-ink-950"
                  >
                    {b!.name}
                  </Link>
                </li>
              ))}
              {relatedModels.map((m) => (
                <li key={m!.slug}>
                  <Link
                    href={modelPath(m!)}
                    className="inline-flex rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 hover:border-gold-300 hover:text-ink-950"
                  >
                    {m!.model}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-ink-100 bg-ink-50/50">
        <div className="container-page py-12 md:py-16">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            {page.label} &mdash; common questions
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion faqs={page.faqs} />
          </div>
        </div>
      </section>

      {/* ── Estimate ─────────────────────────────────────────────────────── */}
      <section id="estimate" className="container-page scroll-mt-24 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
              Tell us what your gate is doing
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              Include what you found in the checks above &mdash; where it stops, what you heard, whether it moves by
              hand. It genuinely shortens the visit, and it means we arrive with the right part more often.
            </p>
            <div className="mt-8">
              <CallButtons label={page.label} tone="light" />
            </div>
          </div>
          <GateProblemForm sourcePage={path} />
        </div>
      </section>

      <ClosingCTA />

      {/* ── Schema ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({
              name: `${page.label} — repair in Dallas–Fort Worth`,
              description: page.metaDescription,
              url: path,
            }),
            faqSchema(page.faqs),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />
    </>
  )
}
