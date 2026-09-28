import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, Phone, ShieldAlert, Wrench } from 'lucide-react'
import { business } from '@/content/business'
import { symptomPath } from '@/content/symptoms'
import type { SymptomPage } from '@/content/symptoms/types'
import { indexableSymptomPages } from '@/lib/symptom-quality'
import { openGraphFor } from '@/lib/seo'
import { breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { TrustBadges } from '@/components/ui/trust-badges'
import { ClosingCTA } from '@/components/sections/closing-cta'

/**
 * The symptom index: /gate-problems.
 *
 * Its job is triage. Someone arriving here has a gate misbehaving and does not
 * know the vocabulary, so the page is organised by what they can observe — it
 * will not move, it moves wrong, nothing responds, something is broken — rather
 * than by the system that has failed, which is how a technician would group it
 * and is useless to the person holding the remote.
 *
 * It is also the hub that gives the 20 symptom pages a parent in the link
 * graph, so they are not 20 orphans hanging off the service pages.
 */

const PATH = '/gate-problems'

const TITLE = 'Gate Problems & Symptoms — Diagnose It | DFW'
const DESCRIPTION =
  'Gate won’t open, won’t close, stops halfway or opens by itself? Find your symptom, what causes it, and what you can check yourself before calling.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: openGraphFor(PATH, { title: TITLE, description: DESCRIPTION }),
}

/**
 * Groups written the way an owner describes the problem, not the way a
 * technician classifies it.
 */
const GROUPS: { heading: string; blurb: string; slugs: string[] }[] = [
  {
    heading: 'It will not move',
    blurb: 'Nothing happens, or the gate goes one way and not the other.',
    slugs: ['automatic-gate-not-working', 'gate-wont-open', 'gate-wont-close', 'swing-gate-stuck'],
  },
  {
    heading: 'It moves, but wrongly',
    blurb: 'It starts and stops, changes its mind, or does things nobody asked for.',
    slugs: ['gate-stops-halfway', 'gate-reverses-when-closing', 'gate-opens-by-itself', 'sliding-gate-off-track'],
  },
  {
    heading: 'Nothing responds',
    blurb: 'The gate is fine — it is the power, the remote or the keypad.',
    slugs: [
      'gate-opener-has-no-power',
      'gate-remote-not-working',
      'gate-keypad-not-working',
      'gate-battery-keeps-dying',
      'gate-circuit-board-not-working',
      'gate-not-working-after-storm',
    ],
  },
  {
    heading: 'Something is worn or broken',
    blurb: 'A physical part of the gate has failed — usually with warning noises first.',
    slugs: [
      'gate-roller-or-wheel-broken',
      'gate-chain-broken',
      'gate-sagging-or-dragging',
      'gate-post-leaning',
      'gate-photo-eye-not-working',
      'gate-loop-detector-not-working',
    ],
  },
]

const URGENCY_BADGE = {
  security: { label: 'Security risk', className: 'bg-red-50 text-red-800 ring-red-200' },
  safety: { label: 'Safety risk', className: 'bg-red-50 text-red-800 ring-red-200' },
  access: { label: 'Blocks access', className: 'bg-amber-50 text-amber-800 ring-amber-200' },
  inconvenience: { label: 'Not urgent', className: 'bg-ink-50 text-ink-600 ring-ink-200' },
} as const

export default function GateProblemsPage() {
  const pages = indexableSymptomPages()
  const bySlug = new Map(pages.map((p) => [p.slug, p]))

  // Anything not placed in a group still gets surfaced, so adding a symptom
  // page can never silently orphan it.
  const grouped = new Set(GROUPS.flatMap((g) => g.slugs))
  const ungrouped = pages.filter((p) => !grouped.has(p.slug))

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gate Problems', url: PATH },
  ]

  const card = (page: SymptomPage) => {
    const badge = URGENCY_BADGE[page.urgency]
    return (
      <li key={page.slug}>
        <Link
          href={symptomPath(page)}
          className="group flex h-full flex-col rounded-[var(--radius-card)] border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-gold-300"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold leading-snug text-ink-950">{page.label}</h3>
            <ArrowRight
              className="mt-0.5 size-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{page.heroIntro.split('. ')[0]}.</p>
          <span
            className={`mt-4 inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badge.className}`}
          >
            {badge.label}
          </span>
        </Link>
      </li>
    )
  }

  return (
    <>
      <section className="surface-dark">
        <div className="container-page py-12 md:py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-gold-400">Diagnose your gate</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            What is your gate doing?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">
            Find the symptom below. Each page explains what usually causes it, what you can safely check yourself,
            and when it genuinely needs a technician. A fair number of these you will fix without us.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phone.href} size="lg" variant="primary" className="tabular">
              <Phone className="size-5" aria-hidden />
              Call Now &mdash; {business.phone.display}
            </Button>
            <Button href="/emergency" size="lg" variant="ghostDark">
              Gate stuck open? Emergency repair
            </Button>
          </div>
          <TrustBadges className="mt-8" />
        </div>
      </section>

      <section className="container-page py-10">
        <div className="flex gap-4 rounded-[var(--radius-card)] border border-red-300 bg-red-50 p-5 text-red-900 sm:p-6">
          <ShieldAlert className="mt-0.5 size-6 shrink-0" aria-hidden />
          <div>
            <p className="font-display text-base font-semibold">If your gate is stuck open, call rather than read</p>
            <p className="mt-1.5 text-sm leading-relaxed">
              An open gate means the property is not secured, and that is the one fault we treat as urgent whatever
              the cause turns out to be.
            </p>
          </div>
        </div>
      </section>

      {GROUPS.map((group, i) => {
        const items = group.slugs.map((s) => bySlug.get(s)).filter((p): p is SymptomPage => Boolean(p))
        if (items.length === 0) return null
        return (
          <section key={group.heading} className={i % 2 === 1 ? 'border-y border-ink-100 bg-ink-50/50' : ''}>
            <div className="container-page py-12 md:py-14">
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">{group.heading}</h2>
              <p className="mt-2.5 max-w-2xl leading-relaxed text-ink-700">{group.blurb}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(card)}</ul>
            </div>
          </section>
        )
      })}

      {ungrouped.length > 0 && (
        <section className="container-page py-12 md:py-14">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Other faults</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{ungrouped.map(card)}</ul>
        </section>
      )}

      <section className="border-t border-ink-100">
        <div className="container-page py-12 md:py-16">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            Two things worth knowing before you start
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-950">
                <Wrench className="size-5 text-gold-600" aria-hidden />
                Find your manual release first
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Every gate operator has one &mdash; usually a key or lever on the housing &mdash; and it disconnects
                the motor so the gate can be moved by hand. Knowing where yours is turns being trapped into an
                inconvenience. Call us and we will talk you through it for your model.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-950">
                <AlertTriangle className="size-5 text-red-600" aria-hidden />
                Never bypass a safety sensor
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Taping over or disconnecting a photo-eye to make a gate close removes the only thing stopping several
                hundred pounds of steel closing on a vehicle, a pet or a child. If a sensor is faulty it is
                inexpensive to fix &mdash; and we will not re-commission a gate without working protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webPageSchema({ url: PATH, name: TITLE, description: DESCRIPTION }),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />
    </>
  )
}
