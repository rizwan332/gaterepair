import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { GENERAL_FAQ_CATEGORIES } from '@/content/general-faqs'

/**
 * Homepage FAQ.
 *
 * The homepage had thirteen H2s and not one of them was a question, so the page
 * with the most authority on the site offered nothing extractable to People Also
 * Ask, paragraph snippets or AI Overviews. Every FAQ lived on /faq, the service
 * pages and the brand pages instead.
 *
 * ── ON THE QUESTIONS ────────────────────────────────────────────────────────
 * Nothing here is newly written. Each entry is pulled by exact question text
 * from content/general-faqs.ts, which is the same source /faq aggregates, so
 * there is one copy of every answer and editing it there updates both surfaces.
 *
 * Deliberately NOT included: "How much does gate repair cost in Dallas–Fort
 * Worth?" — the strongest PAA target of the set and the obvious first question.
 * No confirmed cost figure, range or diagnostic fee exists anywhere in
 * content/business.ts, and inventing one to win a snippet is exactly the trade
 * this codebase refuses everywhere else. Add it to QUESTIONS the moment the
 * client supplies a real number.
 *
 * Built on <details>/<summary> so there is no client JavaScript, the answers are
 * in the DOM at render time for crawlers, and it is keyboard operable for free —
 * the same construction /faq already uses.
 */

/**
 * Selected for search demand and answer quality, in the order someone in
 * trouble would ask them: what do I do right now, will anyone pick up, how long,
 * what will it cost me to find out, will you commit to a number, and the
 * repair-versus-replace question that is this business's whole positioning.
 */
const QUESTIONS = [
  'My gate is stuck right now. What should I do first?',
  'Do you actually answer the phone at night?',
  'How quickly can you get to me?',
  'Do you charge to come out and look?',
  'Will you quote over the phone?',
  'How do I know if I really need a new operator?',
]

const ALL_FAQS = GENERAL_FAQ_CATEGORIES.flatMap((c) => c.faqs)

/**
 * Resolved by exact question text rather than by index, so reordering or
 * recategorising general-faqs.ts cannot silently swap an answer here. Anything
 * that no longer matches drops out rather than rendering the wrong pairing.
 */
export const homeFaqs = QUESTIONS.map((q) => ALL_FAQS.find((f) => f.q === q)).filter(
  (f): f is { q: string; a: string } => Boolean(f),
)

export function HomeFaq() {
  if (homeFaqs.length === 0) return null

  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Before you call
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Gate Repair Questions We Get Every Week
          </h2>
        </div>

        <ul className="grid gap-3 lg:grid-cols-2">
          {homeFaqs.map((faq) => (
            <li key={faq.q}>
              <details className="card-light group h-full p-6 [&[open]]:bg-white">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="mt-1 shrink-0 text-xl leading-none text-gold-600 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink-700">{faq.a}</p>
              </details>
            </li>
          ))}
        </ul>

        <Link
          href="/faq"
          className="mt-8 inline-flex items-center gap-1.5 font-semibold text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
        >
          See every question we answer
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
