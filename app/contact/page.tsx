import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin, BadgeCheck } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { videos } from '@/content/video-manifest'
import { GateProblemForm } from '@/components/forms/gate-problem-form'
import { LazyVideo } from '@/components/ui/lazy-video'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Request Gate Repair Service | Shield Gate Repair Dallas–Fort Worth',
  description: `Call ${business.phone.display} or send your name and number and we'll call you back. Residential and commercial gate repair across Dallas–Fort Worth, open 24/7.`,
  alternates: { canonical: '/contact' },
}

/**
 * Contact page.
 *
 * Restructured 6 Aug 2026 to the client's brief: the phone CTA sits ABOVE the
 * form rather than beside it, because the phone converts better than the form
 * on paid traffic and the previous layout put it in a right-hand column that a
 * phone renders *below* the whole form.
 *
 * The form itself dropped from nine fields to five (see GateProblemForm).
 */
export default function ContactPage() {
  const address = fact(business.address)
  const years = fact(business.yearsInBusiness)
  // A real repair, not a stock clip. Falls back through the library so the
  // panel never renders an empty frame if a video slug is renamed.
  const video =
    videos.find((v) => v.slug === 'automatic-gate-repair-services-video') ?? videos[0]

  const badges = [
    'Licensed & Insured',
    years ? `${years}+ Years Experience` : 'Experienced Technicians',
    'Open 24/7',
    'Residential & Commercial',
  ]

  return (
    <>
      <section className="bg-ink-950 py-14 md:py-18">
        <div className="container-page">
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Request Gate Repair Service
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-100">
            Call us and someone answers &mdash; day or night. Or leave your name and number and a
            technician will call you back.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {badges.map((label) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-ink-100">
                <BadgeCheck className="size-[1.125rem] shrink-0 text-success-400" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Phone CTA above the form, per the brief. On mobile this is the first
          thing under the headline instead of being pushed below five fields. */}
      <section className="border-b border-ink-100 bg-gold-500 py-7">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-ink-950 sm:text-2xl">
              Fastest way to get help: call us.
            </p>
            <p className="mt-1 text-sm text-ink-800">
              {business.availability} &mdash; someone always answers.
            </p>
          </div>
          <a
            href={business.phone.href}
            className="tabular inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-ink-950 px-8 text-lg font-semibold text-white transition-colors hover:bg-ink-900"
          >
            <Phone className="size-5" aria-hidden />
            {business.phone.display}
          </a>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">
              Or send us your details
            </h2>
            <GateProblemForm sourcePage="/contact" />
          </div>

          <aside className="space-y-6">
            {video && (
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink-100 bg-white p-4">
                <h2 className="mb-3 font-display text-lg font-semibold text-ink-950">
                  This is our own work
                </h2>
                <LazyVideo video={video} />
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  Filmed on a real Shield Gate Repair job. Nothing on this site is stock footage.
                </p>
              </div>
            )}

            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
              <h2 className="mb-4 font-display text-lg font-semibold text-ink-950">Details</h2>
              <ul className="space-y-3.5 text-sm">
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                  <span className="text-ink-700">{business.availability}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                  <a href={`mailto:${business.email}`} className="text-ink-700 hover:text-ink-950">
                    {business.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                  <span className="text-ink-700">
                    {address && address.street
                      ? `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`
                      : business.serviceArea.display}
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-600">
                If your gate is stuck, we can usually talk you through the manual release on the phone so
                you can get in or out before the technician arrives.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Contact', url: '/contact' },
            ]),
          ),
        }}
      />
    </>
  )
}
