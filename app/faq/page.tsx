import type { Metadata } from 'next'
import Link from 'next/link'
import { GENERAL_FAQ_CATEGORIES } from '@/content/general-faqs'
import { services } from '@/content/services'
import { SERVICE_DEPTH } from '@/content/service-depth'
import { brands } from '@/content/brands'
import { BRAND_DEPTH } from '@/content/brand-depth'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { media } from '@/content/media-manifest'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gate Repair FAQs | Shield Gate Repair Dallas–Fort Worth',
  description:
    'Straight answers on gate repair: what your gate is doing and why, repair versus replacement, safety, maintenance, and what to do while you wait for a technician.',
  alternates: { canonical: '/faq' },
}

/**
 * FAQ hub.
 *
 * Every competitor scatters FAQs across service pages; none has a hub. This
 * aggregates the general questions plus every service and brand FAQ into one
 * indexable surface with FAQPage schema — which is the featured-snippet
 * surface nobody in this market is competing for.
 *
 * Built on <details>/<summary> so there is no client JavaScript, answers are in
 * the DOM at render time for crawlers, and it is keyboard operable for free.
 */
export default function FaqPage() {
  const serviceGroups = services.map((s) => ({
    slug: s.slug,
    label: s.name,
    href: `/services/${s.slug}`,
    faqs: [...s.faqs, ...(SERVICE_DEPTH[s.slug]?.extraFaqs ?? [])],
  }))

  const brandGroups = brands
    .map((b) => ({
      slug: b.slug,
      label: `${b.name} operators`,
      href: `/brands/${b.slug}`,
      faqs: [...b.faqs, ...(BRAND_DEPTH[b.slug]?.extraFaqs ?? [])],
    }))
    .filter((g) => g.faqs.length > 0)

  const allFaqs = [
    ...GENERAL_FAQ_CATEGORIES.flatMap((c) => c.faqs),
    ...serviceGroups.flatMap((g) => g.faqs),
    ...brandGroups.flatMap((g) => g.faqs),
  ]

  // Deduplicate — several questions legitimately appear on more than one page.
  const seen = new Set<string>()
  const uniqueFaqs = allFaqs.filter((f) => {
    if (seen.has(f.q)) return false
    seen.add(f.q)
    return true
  })

  const sections = [
    ...GENERAL_FAQ_CATEGORIES.map((c) => ({ slug: c.slug, label: c.label, href: undefined, faqs: c.faqs })),
    ...serviceGroups,
    ...brandGroups,
  ]

  return (
    <>
      <PageHero
        eyebrow="Answers"
        title={`${uniqueFaqs.length} Straight Answers About Gate Repair`}
        intro="Most of what people want to know before calling a gate company is whether they are about to be sold something they do not need. These are the honest answers, including the ones that cost us work."
        image={media['automatic-gate-repair']?.[0]}
      />

      {/* Anchor index. On a page this long, a jump list is the difference
          between a useful reference and a wall. */}
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="container-page py-6">
          <nav aria-label="Jump to a topic">
            <ul className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <li key={section.slug}>
                  <a
                    href={`#${section.slug}`}
                    className="inline-block rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-sm text-ink-700 transition-colors hover:border-ink-300 hover:text-ink-950"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl space-y-14">
            {sections.map((section) => (
              <div key={section.slug} id={section.slug} className="scroll-mt-28">
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl font-bold text-ink-950">{section.label}</h2>
                  {section.href && (
                    <Link
                      href={section.href}
                      className="text-sm font-medium text-ink-600 underline decoration-gold-400 underline-offset-2 hover:text-ink-950"
                    >
                      Full page →
                    </Link>
                  )}
                </div>
                <div className="divide-y divide-ink-100 border-y border-ink-100">
                  {section.faqs.map((faq) => (
                    <details key={faq.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-medium text-ink-950 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <span
                          className="mt-1 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45"
                          aria-hidden
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 leading-relaxed text-ink-700">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(uniqueFaqs),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'FAQs', url: '/faq' },
            ]),
          ]),
        }}
      />
    </>
  )
}
