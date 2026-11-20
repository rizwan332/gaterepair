import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Project } from '@/content/projects'

/**
 * Nearby documented jobs, as links rather than reprinted prose.
 *
 * The brand × city and service × city pages have no documented job of their own
 * in most towns, so they used to borrow the nearest ones and render them in
 * full through `CaseStudies` and `JobVideos`. The fallback was honest — each job
 * was labelled with its real city — but Google reads the words, not the label.
 *
 * Measured 20 Nov 2026 on /liftmaster-gate-repair-plano-tx: 687 of its 1,462
 * words also appear on /brands/liftmaster, 327 of them from exactly these two
 * borrowed blocks. There are 197 LiftMaster city pages and only a handful of
 * documented LiftMaster jobs, so the same case study was printed on nearly all
 * of them. Google was then picking a child over the parent for "liftmaster gate
 * repair" — the brand page fell from position 10.8 in October to 32.8.
 *
 * Linking keeps the proof and the internal links at roughly eight words a job
 * instead of a hundred.
 */
export function NearbyProof({ title, items, cityName }: { title: string; items: Project[]; cityName: string }) {
  if (items.length === 0) return null
  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <h2 className="mb-3 font-display text-2xl font-bold text-ink-950">{title}</h2>
        <p className="mb-6 max-w-prose text-ink-700">
          We have not documented a job in {cityName} yet. These are the nearest ones we have, each under the city it
          was in.
        </p>
        <ul className="flex flex-col gap-2.5">
          {items.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-300 hover:text-ink-950"
              >
                {p.seoTitle}
                {p.city ? <span className="text-ink-500">· {p.city.replace(/, Texas$/, '')}</span> : null}
                <ArrowRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
