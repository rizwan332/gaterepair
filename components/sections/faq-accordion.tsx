/**
 * FAQ accordion built on <details>/<summary>.
 *
 * No client JavaScript, keyboard-operable for free, and the answers are in the
 * DOM at render time so they are always crawlable — which matters because these
 * carry FAQPage schema and no competitor in this market has any.
 */
export function FaqAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  className,
}: {
  faqs: { q: string; a: string }[]
  title?: string
  className?: string
}) {
  if (faqs.length === 0) return null

  return (
    <section className={`section bg-white ${className ?? ''}`}>
      <div className="container-page">
        <h2 className="mb-10 font-display text-3xl font-bold text-ink-950 sm:text-4xl">{title}</h2>
        <div className="max-w-3xl divide-y divide-ink-100 border-y border-ink-100">
          {faqs.map((faq) => (
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
              <p className="prose-measure mt-3 leading-relaxed text-ink-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
