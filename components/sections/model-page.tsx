import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck,
  Phone,
  RefreshCw,
  SlidersHorizontal,
  Wrench,
} from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { brandBySlug } from '@/content/brands'
import { media, type MediaImage } from '@/content/media-manifest'
import { videos, type SiteVideo } from '@/content/video-manifest'
import { projectBySlug, projectsForBrand, type Project } from '@/content/projects'
import { serviceBySlug, type Service } from '@/content/services'
// Indexed cities rather than a fixed tier — see the note on the brand page.
import { indexedCities } from '@/content/cities'
import { testimonialsForBrand } from '@/content/testimonials'
import { modelByKey, modelKey, modelPath, modelsForBrand } from '@/content/models'
import type { ModelPage } from '@/content/models/types'
import { assessModel, isModelIndexable } from '@/lib/model-quality'
import { openGraphFor } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { TrustBadges } from '@/components/ui/trust-badges'
import { LazyVideo } from '@/components/ui/lazy-video'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { CaseStudies } from '@/components/sections/case-studies'
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { GateProblemForm } from '@/components/forms/gate-problem-form'

/**
 * Renderer for every model page (/brands/<brand>/<model>-repair).
 *
 * ── ORDER ────────────────────────────────────────────────────────────────────
 * The visitor has read a model number off their own gate and searched it. The
 * page answers, in this order: yes, we work on exactly that operator (hero and
 * the Shield panel beside the H1, both above the fold); here is how to be sure
 * it is yours; here is what yours is doing and why; call. Everything after the
 * first call band is depth for the reader who wants proof before phoning —
 * how the operator works, the parts, repair-or-replace, our evidence, the
 * process — with a call path after each block rather than only at the end.
 *
 * ── WHAT IS SHARED AND WHAT IS NOT ───────────────────────────────────────────
 * The model-specific prose comes from content/models/*. This file supplies
 * only the frame around it: headings that name the model, the Shield panel,
 * CTAs, the form, and links. That split is what lib/model-quality.ts measures —
 * nothing written here counts toward a page's right to be indexed.
 */

const VERDICT = {
  repair: { label: 'Repaired', icon: Wrench },
  'replace-part': { label: 'Part replaced', icon: RefreshCw },
  adjust: { label: 'Adjusted', icon: SlidersHorizontal },
  service: { label: 'Serviced', icon: ClipboardCheck },
} as const

const GATE_TYPE_LABEL: Record<ModelPage['gateType'], string> = {
  swing: 'Swing gate operator',
  slide: 'Slide gate operator',
  barrier: 'Barrier gate operator',
  'underground-swing': 'Underground swing operator',
  'articulated-swing': 'Articulated-arm swing operator',
  'telephone-entry': 'Telephone entry system',
  'vertical-pivot': 'Vertical pivot operator',
}

const allImages: MediaImage[] = Object.values(media).flat()
const imageBySlug = (slug: string) => allImages.find((i) => i.slug === slug)

const linkClass =
  'inline-flex items-center gap-1.5 text-ink-800 underline decoration-gold-400 underline-offset-4 hover:text-ink-950'

export function modelMetadata(page: ModelPage): Metadata {
  const path = modelPath(page)
  return {
    // `absolute` — the titles are written to the 60-character budget already,
    // and the layout's ' | Shield Gate Repair' suffix would push every one over.
    title: { absolute: page.title },
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: openGraphFor(path, { title: page.title, description: page.metaDescription }),
    // Held back until it clears the quality gate. `follow`, so its links to the
    // brand page, services and cities still count while it is.
    robots: assessModel(page).indexable
      ? undefined
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
  }
}

function CallButtons({ model, tone }: { model: string; tone: 'dark' | 'light' }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href={business.phone.href} size="lg" variant={tone === 'dark' ? 'primary' : 'dark'} className="tabular">
        <Phone className="size-5" aria-hidden />
        Call Now &mdash; {business.phone.display}
      </Button>
      <Button href="#estimate" size="lg" variant={tone === 'dark' ? 'ghostDark' : 'secondary'}>
        Request a Free Estimate
        <span className="sr-only"> for {model} repair</span>
      </Button>
    </div>
  )
}

export function ModelPageView({ page }: { page: ModelPage }) {
  const brand = brandBySlug(page.brandSlug)!
  const name = `${brand.name} ${page.model}`
  const path = modelPath(page)
  const years = fact(business.yearsInBusiness)
  const warrantyTerm = fact(business.warrantyTerm)

  // ── Evidence ──────────────────────────────────────────────────────────────
  // Only images listed on the model are ever presented as this model. Brand
  // photographs are used as a hero backdrop (decorative, empty alt) and, when
  // there is nothing model-specific, as a gallery that says plainly it covers
  // other models too.
  const modelImages = (page.imageSlugs ?? []).map(imageBySlug).filter((i): i is MediaImage => Boolean(i))
  const brandImages = brand.mediaCategory ? (media[brand.mediaCategory] ?? []) : []
  const featured = brand.featuredImage ? brandImages.find((i) => i.slug === brand.featuredImage) : undefined
  const heroImage = modelImages[0] ?? featured ?? brandImages[0]

  const modelVideos = (page.videoSlugs ?? [])
    .map((slug) => videos.find((v) => v.slug === slug))
    .filter((v): v is SiteVideo => Boolean(v))
  const modelProjects = (page.projectSlugs ?? [])
    .map((slug) => projectBySlug(slug))
    .filter((p): p is Project => Boolean(p))
  const brandProjects = modelProjects.length > 0 ? [] : projectsForBrand(brand.name)

  // ── Links ─────────────────────────────────────────────────────────────────
  // Named neighbours first, then the rest of the brand. Only pages that clear
  // the quality gate — there is no reason to spend a link on a page we are not
  // asking Google to index.
  const seen = new Set([modelKey(page)])
  const relatedModels = [
    ...page.relatedModels.map(modelByKey),
    ...modelsForBrand(brand.slug),
  ]
    .filter((m): m is ModelPage => Boolean(m))
    .filter((m) => {
      if (seen.has(modelKey(m)) || !isModelIndexable(m)) return false
      seen.add(modelKey(m))
      return true
    })
    .slice(0, 6)
  const relatedServices = page.relatedServices
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is Service => Boolean(s))

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/brands' },
    { name: brand.name, url: `/brands/${brand.slug}` },
    { name: `${page.model} Repair`, url: path },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="surface-dark relative isolate overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 -z-10">
            <ResponsiveImage image={heroImage} alt="" priority fill sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_9_11/0.9)_0%,rgb(8_9_11/0.78)_50%,rgb(8_9_11/0.55)_100%)]"
              aria-hidden
            />
          </div>
        )}

        <div className="container-page relative py-10 md:py-16 lg:py-20">
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

          <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start lg:gap-14">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
                {GATE_TYPE_LABEL[page.gateType]}
              </p>
              <h1 className="font-display text-[2.1rem] font-bold leading-[1.08] text-white sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-100 sm:text-xl">{page.heroIntro}</p>
              <div className="mt-8">
                <CallButtons model={name} tone="dark" />
              </div>
              <TrustBadges className="mt-8" />
            </div>

            {/* The Shield panel. Visible without scrolling at every width: it
                is the answer to "do these people actually work on mine?". */}
            <aside className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Shield Gate Repair</p>
              <p className="mt-2 font-display text-2xl font-bold leading-tight text-ink-950">
                Yes &mdash; we repair the {name}.
              </p>
              <ul className="mt-5 space-y-3">
                {page.heroPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={business.phone.href}
                className="tabular mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gold-500 font-semibold text-ink-950 transition-colors hover:bg-gold-400"
              >
                <Phone className="size-5" aria-hidden />
                {business.phone.display}
              </a>
              <p className="mt-3 text-center text-sm text-ink-600">
                Open 24/7{years ? ` · ${years}+ years` : ''} · Licensed &amp; insured
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Is this your operator? ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Is this a {name}?
            </h2>
            {page.identify.body.map((para) => (
              <p key={para} className="mt-4 text-lg leading-relaxed text-ink-700">
                {para}
              </p>
            ))}
            <ul className="mt-6 space-y-2.5">
              {page.identify.lookFor.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-800">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            {page.aliases.length > 0 && (
              <p className="mt-6 text-sm leading-relaxed text-ink-600">
                <span className="font-semibold text-ink-800">Also labelled:</span> {page.aliases.join(', ')}
              </p>
            )}
            {page.status !== 'current' && (
              <p className="mt-6 flex gap-3 rounded-lg border border-gold-200 bg-gold-50 p-4 text-[0.9375rem] leading-relaxed text-ink-800">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden />
                <span>
                  <span className="font-semibold">
                    {page.status === 'discontinued' ? 'No longer made' : 'Superseded'} &mdash; still repairable.
                  </span>{' '}
                  {page.statusNote}
                </span>
              </p>
            )}
          </div>

          {page.specs.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                {page.model} at a glance
              </h2>
              <dl className="mt-6 divide-y divide-ink-100 rounded-[var(--radius-card)] border border-ink-100">
                {page.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 px-5 py-3.5">
                    <dt className="text-sm font-medium text-ink-500">{spec.label}</dt>
                    <dd className="text-[0.9375rem] text-ink-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-ink-500">
                From {brand.name}&rsquo;s published documentation. Your unit&rsquo;s label and manual take
                precedence.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Symptoms ─────────────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            What your {page.model} is doing, and what usually causes it
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {page.symptoms.map((s) => (
              <li key={s.symptom} className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink-950">{s.symptom}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">Usually: </span>
                  {s.causes}
                </p>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">What we do: </span>
                  {s.whatWeDo}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── First call band ──────────────────────────────────────────────── */}
      <section className="bg-gold-500 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="font-display text-xl font-bold text-ink-950 sm:text-2xl">
            {page.model} down? Tell us what it is doing &mdash; we will tell you what it needs.
          </p>
          <a
            href={business.phone.href}
            className="tabular inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-ink-950 px-8 text-lg font-semibold text-white transition-colors hover:bg-ink-900"
          >
            <Phone className="size-5" aria-hidden />
            {business.phone.display}
          </a>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-12 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            How the {page.model} works &mdash; and what that means for repair
          </h2>
          <div className="space-y-12">
            {page.overview.map((passage) => (
              <article key={passage.heading} className="border-l-2 border-gold-500/40 pl-6 md:pl-8">
                <h3 className="mb-4 font-display text-xl font-semibold text-ink-950 sm:text-2xl">
                  {passage.heading}
                </h3>
                <div className="prose-measure space-y-4">
                  {passage.body.map((para, i) => (
                    <p key={i} className="leading-relaxed text-ink-700">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parts ────────────────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            {page.model} parts we repair, adjust or replace
          </h2>
          <p className="prose-measure mt-4 text-lg text-ink-700">
            A failed part is not a failed operator. These are the components that actually wear or fail on
            the {page.model}, and what we do about each.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.components.map((c) => {
              const verdict = VERDICT[c.verdict]
              return (
                <li key={c.part} className="flex flex-col rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-ink-950">{c.part}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700">
                      <verdict.icon className="size-3.5" aria-hidden />
                      {verdict.label}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">{c.whatItDoes}</p>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-700">
                    <span className="font-semibold text-ink-900">Signs it has failed: </span>
                    {c.failureSigns}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── Repair or replace ────────────────────────────────────────────── */}
      <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
        <div className="container-page relative">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Repair or replace your {page.model}? The honest answer
          </h2>
          <p className="prose-measure mt-5 text-lg leading-relaxed text-ink-200">{page.repairOrReplace.summary}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-display text-xl font-semibold text-white">Repair it when</h3>
              <ul className="space-y-3.5">
                {page.repairOrReplace.repair.map((line) => (
                  <li key={line} className="flex gap-3.5">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success-400" aria-hidden />
                    <span className="leading-relaxed text-ink-200">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-xl font-semibold text-white">Replace or upgrade when</h3>
              <ul className="space-y-3.5">
                {page.repairOrReplace.replace.map((line) => (
                  <li key={line} className="flex gap-3.5">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                    <span className="leading-relaxed text-ink-200">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <CallButtons model={name} tone="dark" />
          </div>
        </div>
      </section>

      {/* ── Evidence ─────────────────────────────────────────────────────── */}
      {modelVideos.length > 0 && (
        <section className="section bg-white">
          <div className="container-page">
            <h2 className="mb-8 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Watch us work on a {page.model}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {modelVideos.map((video) => (
                <LazyVideo key={video.slug} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {modelProjects.length > 0 ? (
        <CaseStudies
          items={modelProjects}
          title={`${name} repairs we have documented`}
          intro="The fault, how it was diagnosed, and what it actually took to fix."
          tone="tint"
        />
      ) : (
        <CaseStudies
          items={brandProjects}
          title={`${brand.name} repairs we have documented`}
          intro={`Other ${brand.name} operators, written up in full — the same diagnose-first approach we take on a ${page.model}.`}
          tone="tint"
        />
      )}

      {modelImages.length > 0 ? (
        <PhotoGallery
          images={modelImages}
          title={`Our photographs of the ${page.model}`}
          intro="Taken by our technicians on our own jobs. None of it is stock."
        />
      ) : (
        brandImages.length > 0 && (
          <PhotoGallery
            images={brandImages.slice(0, 4)}
            title={`Our ${brand.name} work`}
            intro={`Photographs from our own ${brand.name} jobs — a mix of models, not all of them the ${page.model}. None of it is stock.`}
          />
        )
      )}

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            How we diagnose and repair a {page.model}
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {page.process.map((s, i) => (
              <li key={s.step} className="relative pl-12">
                <span
                  className="absolute left-0 top-0 inline-flex size-8 items-center justify-center rounded-full bg-ink-950 text-sm font-bold text-gold-400"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-ink-950">{s.step}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Warranty and service ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              {brand.name} warranty on the {page.model}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">{page.warranty.manufacturer}</p>
            <ul className="mt-5 space-y-2.5">
              {page.warranty.notes.map((note) => (
                <li key={note} className="flex gap-3 leading-relaxed text-ink-700">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-ink-100 bg-ink-50 p-6 sm:p-8">
            <h2 className="inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950">
              <FileCheck className="size-6 text-success-600" aria-hidden />
              Our warranty on the repair
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              Every repair is backed by a clear written warranty
              {warrantyTerm ? ` — ${warrantyTerm} on parts and workmanship` : ''}. No hidden terms and no
              confusing fine print: what is covered is explained before we begin, and it is separate from
              whatever {brand.name} covers on the operator itself.
            </p>
            <Link href="/warranty" className={`mt-5 font-semibold ${linkClass}`}>
              What our warranty covers
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DFW ──────────────────────────────────────────────────────────── */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <h2 className="mb-10 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            The {page.model} in Dallas&ndash;Fort Worth conditions
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {page.dfw.map((passage) => (
              <article key={passage.heading}>
                <h3 className="mb-3 font-display text-xl font-semibold text-ink-950">{passage.heading}</h3>
                <div className="space-y-3">
                  {passage.body.map((para, i) => (
                    <p key={i} className="leading-relaxed text-ink-700">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <h3 className="mb-5 mt-14 font-display text-lg font-semibold text-ink-950">
            {name} repair across {business.serviceArea.display}
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {indexedCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/gate-repair-${city.slug}-tx`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
                >
                  {/* Same pattern as the brand and service pages: the chip reads
                      as a city, the anchor text carries what it is relevant for. */}
                  <span className="sr-only">{name} repair in </span>
                  {city.name}
                  <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialCarousel
        items={testimonialsForBrand(brand.name, Number.MAX_SAFE_INTEGER)}
        intro={`Real Shield Gate Repair customers describing the job in their own words, ${brand.name} jobs first.`}
        tone="tint"
      />

      <FaqAccordion faqs={page.faqs} title={`${name} repair questions`} />

      {/* ── Estimate form and links ──────────────────────────────────────── */}
      <section id="estimate" className="section scroll-mt-24 bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Request a free estimate for your {page.model}
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-700">
              Leave your name and number, and tell us what the gate is doing. A technician will call you back.
              If the gate is stuck open or shut, calling is faster &mdash; someone always answers.
            </p>
            <div className="mt-7">
              <GateProblemForm sourcePage={path} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-ink-950">Faster: call us</h3>
              <a
                href={business.phone.href}
                className="tabular inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gold-500 font-semibold text-ink-950"
              >
                <Phone className="size-5" aria-hidden />
                {business.phone.display}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{business.availability}</p>
            </div>

            <nav
              aria-label={`Related to ${name}`}
              className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-ink-950">Related pages</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href={`/brands/${brand.slug}`} className={linkClass}>
                    All {brand.name} gate operator repair
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
                {relatedModels.map((m) => {
                  const b = brandBySlug(m.brandSlug)
                  return (
                    <li key={modelKey(m)}>
                      <Link href={modelPath(m)} className={linkClass}>
                        {b?.name} {m.model} repair
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </li>
                  )
                })}
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={linkClass}>
                      {s.name}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/emergency" className={linkClass}>
                    24/7 emergency gate repair
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema({ name: `${name} Repair`, description: page.heroIntro, url: path }),
            faqSchema(page.faqs),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />
    </>
  )
}
