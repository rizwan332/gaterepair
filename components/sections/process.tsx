import { business } from '@/content/business'
import { fact } from '@/lib/business'

/**
 * What actually happens when you call.
 *
 * Written as a sequence of commitments rather than a generic
 * "Inspection → Diagnosis → Repair" graphic. Competitors all run some version
 * of the graphic; none of them says what the customer will actually receive at
 * each step, which is the only part that reduces anxiety.
 */
export function Process() {
  const warranty = fact(business.warrantyTerm)

  const steps = [
    {
      title: 'You call',
      body: 'A person answers, day or night. We ask what the gate is doing and, if you are stuck, we talk you through the manual release so you can get in or out before anyone arrives.',
    },
    {
      title: 'We give you a window',
      body: 'A real arrival window, and a message when the technician is on the way.',
    },
    {
      title: 'We diagnose on site',
      body: 'We move the gate by hand before touching anything electrical — that separates a mechanical bind from an operator fault, and it is the step most call-outs skip.',
    },
    {
      title: 'You get a price before we start',
      body: 'Itemised. Repair versus replace, explained in plain English, with the reasoning rather than just the number.',
    },
    {
      title: 'We fix it',
      body: 'Most repairs finish on the same visit because the common parts are already on the truck.',
    },
    {
      title: 'You get it in writing',
      body: warranty
        ? `Parts used, work done, and a ${warranty} written warranty on parts and workmanship.`
        : 'Parts used, work done, and a written warranty on parts and workmanship.',
    },
  ]

  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">How it works</p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            What Happens When You Call
          </h2>
        </div>

        <ol className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-14">
              <span
                className="absolute left-0 top-0 inline-flex size-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-gold-400"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mb-2 pt-1.5 font-display text-lg font-semibold text-ink-950">{step.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
