import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'
import { Clock, Wrench, Receipt, Scale, ShieldCheck, FileCheck } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * Six reasons, each answering a specific objection rather than making a claim.
 *
 * The fear in this trade is not price — it is being taken advantage of by a
 * stranger while you are stuck. Every card below answers that fear with
 * something checkable. Competitor equivalents in this market are almost all
 * unfalsifiable adjectives ("expert craftsmanship", "commitment to
 * excellence"), which is exactly why they do not work.
 */
export function WhyShield() {
  const license = fact(business.license)
  const insurance = fact(business.insurance)
  const warranty = fact(business.warrantyTerm)

  const cards = [
    {
      icon: Clock,
      title: 'We show up when we say',
      body: 'You get an arrival window, not a vague “sometime today”. If we are running late you get a call — not silence.',
    },
    {
      icon: Wrench,
      title: 'Most repairs done in one visit',
      body: 'Our trucks carry control boards, capacitors, limit switches, hinges, sensors and remotes for the operators common in DFW. No “we will order the part and come back Thursday”.',
    },
    {
      icon: Receipt,
      title: 'Price before we start',
      body: (
        <>
          We diagnose, we quote, you decide. The number we say is the number you pay — and you get it
          before any work starts.{' '}
          <Link
            href="/contact"
            className="font-medium text-ink-900 underline decoration-gold-400 underline-offset-2 hover:text-ink-700"
          >
            Request a free estimate
          </Link>
          .
        </>
      ),
    },
    {
      icon: Scale,
      title: 'Repair first, replace only if it is honest',
      body: 'A control board is a few hundred dollars. A new operator is a few thousand. We tell you which one you actually need, and if it is a repair we do not sell you an operator.',
    },
    {
      icon: ShieldCheck,
      title: license || insurance ? 'Licensed, insured, background-checked' : 'Insured and accountable',
      body: license
        ? `Texas license ${license}. Every technician is background-checked before setting foot on your property.`
        : 'Fully insured, and every technician is accountable for the work they do on your property.',
    },
    {
      icon: FileCheck,
      title: 'Written warranty, every job',
      body: warranty
        ? `${warranty} on parts and workmanship, in writing. If it fails, we come back.`
        : 'Parts and workmanship covered in writing on every repair. If it fails, we come back.',
    },
  ]

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">Why Shield</p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Six Reasons People Call Us Back
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              as="li"
              delay={Math.min(i, 3) * 0.05}
              key={title}
              className="card-light h-full p-7"
            >
              <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-display text-lg font-semibold text-ink-950">{title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-700">{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
