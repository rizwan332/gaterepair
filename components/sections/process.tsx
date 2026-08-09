import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Reveal } from '@/components/ui/reveal'

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

  // Light. This used to be a second full-bleed near-black block, which meant the
  // page hit a wall of dark roughly every other section. Dark now appears once
  // (the video wall, where it genuinely helps video read) plus the hero scrim —
  // punctuation rather than background.
  return (
    <section className="section relative isolate overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="container-page relative">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">How it works</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              What Happens When You Call
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              Six commitments, not six stock icons. Every competitor in this market runs an
              &ldquo;inspection &rarr; diagnosis &rarr; repair&rdquo; graphic; none of them says what you
              actually receive at each step, which is the only part that reduces anxiety.
            </p>
          </div>
        </Reveal>

        {/* A connected timeline rather than a grid of equal boxes. The hairline
            threading the markers is what makes this read as a process instead
            of six unrelated cards. */}
        <ol className="relative">
          <span
            className="absolute left-[1.4375rem] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-500/60 via-white/15 to-transparent md:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={Math.min(i, 4) * 0.05}>
              <div className="relative flex gap-6 pb-10 last:pb-0 md:gap-8">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-ink-950 ring-1 ring-inset ring-black/10">
                  <span className="font-display text-sm font-bold text-gold-400 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <div className="min-w-0 pt-2.5">
                  <h3 className="font-display text-xl font-semibold text-ink-950">{step.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
