import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { GateProblemForm } from '@/components/forms/gate-problem-form'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Get a Free Gate Repair Estimate | Shield Gate Repair Dallas',
  description: `Tell us what your gate is doing and we'll call you back. Same-day service across Dallas–Fort Worth. Or call ${business.phone.display} — someone always answers.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const address = fact(business.address)
  const responseBand = fact(business.responseBand)

  return (
    <>
      <section className="bg-ink-950 py-14 md:py-20">
        <div className="container-page">
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Tell Us What Your Gate Is Doing
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-100">
            A few quick questions and we&rsquo;ll tell you what we think is wrong before anyone is
            dispatched. If it&rsquo;s an emergency, call instead &mdash; the phone is faster and someone
            always answers.
          </p>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
          <GateProblemForm sourcePage="/contact" />

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6">
              <h2 className="mb-4 font-display text-lg font-semibold text-ink-950">
                Faster: just call us
              </h2>
              <a
                href={business.phone.href}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gold-500 font-semibold text-ink-950"
              >
                <Phone className="size-5" aria-hidden />
                {business.phone.display}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                If your gate is stuck, we can usually talk you through the manual release on the phone so
                you can get in or out before the technician arrives.
              </p>
            </div>

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
                      : business.serviceArea.primary}
                  </span>
                </li>
                {responseBand && (
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden />
                    <span className="text-ink-700">Typical arrival {responseBand}</span>
                  </li>
                )}
              </ul>
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
