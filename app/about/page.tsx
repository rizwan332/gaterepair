import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Wrench, Video } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { Reveal } from '@/components/ui/reveal'
import { media } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'
import { projects } from '@/content/projects'
import { brands } from '@/content/brands'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'
import { publishedTestimonials } from '@/content/testimonials'
import { VideoTestimonials } from '@/components/sections/video-testimonials'

export const metadata: Metadata = {
  title: 'About Shield Gate Repair | Gate Specialists Serving Dallas–Fort Worth',
  description:
    'Who we are, where we came from, and why we repair gate operators rather than replacing them. Now serving Dallas–Fort Worth.',
  alternates: { canonical: '/about' },
}

/**
 * About page.
 *
 * The client's instruction on 3 Aug 2026 was "change the story please we are
 * not located in California". Every California reference is gone.
 *
 * The opening section is the client's own supplied copy, used verbatim. It is
 * the one block on this site that should not be edited for tone or length
 * without asking him first — he wrote it, and it is the company's own
 * description of itself.
 *
 * It also confirms `yearsInBusiness` (16), which was previously unconfirmed and
 * therefore suppressed everywhere it appeared.
 */
export default function AboutPage() {
  const years = fact(business.yearsInBusiness)
  const license = fact(business.license)
  const rating = fact(business.rating)
  const totalPhotos = Object.values(media).reduce((n, list) => n + list.length, 0)

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We Repair Gate Operators Rather Than Replacing Them"
        intro="That sentence is the whole company. Everything else on this page explains what it takes to be able to say it."
        image={media['all-o-matic']?.[4]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="prose-measure space-y-5 text-lg leading-relaxed text-ink-800">
            <Reveal>
              <h2 className="mb-5 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                About Shield Gate Repair
              </h2>
            </Reveal>
            {/* Client's copy, supplied 3 Aug 2026. Verbatim — do not reword,
                trim or "improve" it. Paragraph breaks are his. */}
            <p>
              For over 16 years, Shield Gate Repair has proudly served the DFW Metroplex and surrounding
              areas, providing reliable automatic gate repair services for homeowners and businesses.
            </p>
            <p>
              Our experienced technicians service all major gate brands and are committed to delivering
              honest recommendations, quality workmanship, and long-lasting repairs. Whether it&rsquo;s a
              sliding gate, swing gate, gate opener, or access control system, we have the knowledge and
              equipment to get it working properly.
            </p>
            <p>
              When you choose Shield Gate Repair, you&rsquo;re choosing a company that values
              professionalism, reliability, and customer satisfaction on every job.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
        <div className="container-page relative">
          <Reveal>
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
              Why we repair instead of replace
            </h2>
            <div className="prose-measure space-y-5 text-lg leading-relaxed text-ink-200">
              <p>
                Diagnosing a gate operator takes time, instruments and knowing the equipment. Replacing
                one takes none of those things, which is why a perfectly serviceable unit is sometimes
                written off before anyone has measured anything.
              </p>
              <p>
                A control board is a few hundred dollars. A new operator is a few thousand. The difference
                between those two numbers is almost entirely a question of whether the technician standing
                in your driveway can be bothered to test before recommending.
              </p>
              <p className="font-medium text-white">
                We have built the business the other way round. If it is a repair, we do not sell you an
                operator &mdash; and when replacement genuinely is the cheaper decision, we will tell you
                that too, with the reasoning.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Wrench,
                stat: `${brands.length}`,
                label: 'operator brands serviced',
                note: 'Including FAAC, All-O-Matic and Ramset, and the hydraulic units',
              },
              {
                icon: Video,
                stat: `${videos.length}`,
                label: 'repairs filmed',
                note: 'Filmed on our own jobs, not stock footage',
              },
              {
                icon: MapPin,
                stat: `${projects.length}`,
                label: 'case studies documented',
                note: 'The fault, the diagnosis, and what it actually took to fix',
              },
            ].map((item) => (
              <div key={item.label} className="card-dark p-6">
                <item.icon className="mb-4 size-6 text-gold-400" aria-hidden />
                <p className="tabular font-display text-3xl font-bold text-white">{item.stat}</p>
                <p className="mt-1 font-medium text-ink-200">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              How we work
            </h2>
          </Reveal>
          <ul className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'The gate before the operator',
                body: 'We release the operator and move the gate by hand before touching anything electrical. It separates a mechanical bind from an electrical fault, and it is the step most call-outs skip — which is how healthy operators get replaced.',
              },
              {
                title: 'A price before we start',
                body: 'Diagnose, quote, then you decide. The number we say is the number you pay, and you hear it before any work begins rather than after.',
              },
              {
                title: 'Parts on the truck',
                body: 'Control boards, capacitors, limit switches, sensors and remotes for the operators we see most. Most repairs finish on the first visit, and when a part genuinely has to be ordered we say so on the day.',
              },
              {
                title: 'In writing, every time',
                body: 'Parts used, work done, and the warranty terms. If it fails, we come back.',
              },
            ].map((item) => (
              <li key={item.title} className="card-light p-7">
                <h3 className="mb-2.5 font-display text-lg font-semibold text-ink-950">{item.title}</h3>
                <p className="leading-relaxed text-ink-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink-950">Credentials</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              license ? { label: 'Texas licence', value: license } : null,
              years && years > 0 ? { label: 'Years in business', value: `${years}+` } : null,
              rating && rating.count > 0
                ? { label: 'Google rating', value: `${rating.score} · ${rating.count.toLocaleString()} reviews` }
                : null,
              { label: 'Availability', value: 'Open 24 hours, 7 days' },
              { label: 'Service area', value: business.serviceArea.primary },
              { label: 'Real job photography', value: `${totalPhotos} images` },
            ]
              .filter(Boolean)
              .map((item) => (
                <li key={item!.label} className="card-light p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    {item!.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-ink-950">{item!.value}</p>
                </li>
              ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { href: '/projects', label: 'See our case studies' },
              { href: '/warranty', label: 'Read our warranty' },
              { href: '/testimonials', label: 'Customer testimonials' },
              { href: '/service-areas', label: 'Where we work' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials
        items={publishedTestimonials.slice(0, 3)}
        eyebrow="Customer videos"
        title="Do not take our word for it"
        intro="Everything above is us describing ourselves. These are customers describing us."
        tone="tint"
      />

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema(),
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
            ]),
          ]),
        }}
      />
    </>
  )
}
