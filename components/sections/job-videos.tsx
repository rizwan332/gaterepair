import Link from 'next/link'
import { Play, ArrowUpRight } from 'lucide-react'
import { jobVideoThumb, type JobVideo } from '@/content/job-videos'

/**
 * Video from real jobs.
 *
 * ── THE HEADING IS THE POINT ────────────────────────────────────────────────
 * These are the client filming his own work — a corroded board coming out, a
 * chain going on, a gate running again at the end. Nobody is speaking to camera
 * and nobody is endorsing anything, so this section never says "testimonial",
 * "review" or "what our customers say". It says what the clips are.
 *
 * That distinction is why they are not simply appended to the testimonial
 * carousel, where the surrounding heading would make a claim about them that
 * is not true.
 *
 * ── NO THIRD-PARTY SCRIPT ───────────────────────────────────────────────────
 * Cards link out to YouTube rather than embedding a player. An embed loads
 * several hundred kilobytes of Google JavaScript per video before anyone
 * clicks, which on seventeen of them would be the heaviest thing on the page.
 * The thumbnail is a single image, and the link opens in a new tab so a visitor
 * reading a case study does not lose it.
 */
export function JobVideos({
  items,
  title,
  intro,
  tone = 'light',
  limit,
}: {
  items: JobVideo[]
  title: string
  intro?: string
  tone?: 'light' | 'tint' | 'dark'
  limit?: number
}) {
  const shown = typeof limit === 'number' ? items.slice(0, limit) : items
  if (shown.length === 0) return null

  const dark = tone === 'dark'

  return (
    <section
      className={`section ${dark ? 'surface-dark' : tone === 'tint' ? 'bg-ink-50' : 'bg-white'}`}
    >
      <div className="container-page">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
            On video
          </p>
          <h2
            className={`font-display text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-ink-950'}`}
          >
            {title}
          </h2>
          {intro && (
            <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-700'}`}>
              {intro}
            </p>
          )}
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v) => (
            <li key={v.youtubeId}>
              <div
                className={`flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border ${
                  dark ? 'border-white/10 bg-white/[0.04]' : 'border-ink-100 bg-white shadow-[var(--shadow-card)]'
                }`}
              >
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-video overflow-hidden bg-ink-900"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={jobVideoThumb(v.youtubeId)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={360}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink-950/25 transition-colors group-hover:bg-ink-950/10">
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      <Play className="ml-0.5 size-6 fill-ink-950 text-ink-950" aria-hidden />
                    </span>
                  </span>
                  <span className="sr-only">
                    {v.label} — watch on YouTube (opens in a new tab)
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {v.brand && (
                      <span
                        className={`rounded-md px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide ${
                          dark ? 'bg-white/10 text-gold-300' : 'bg-ink-950 text-gold-400'
                        }`}
                      >
                        {v.brand}
                      </span>
                    )}
                    {v.city && (
                      <span
                        className={`rounded-md px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wide ${
                          dark ? 'bg-white/5 text-ink-300' : 'bg-ink-100 text-ink-600'
                        }`}
                      >
                        {v.city.replace(/, Texas$/, '')}
                      </span>
                    )}
                  </div>

                  <p
                    className={`flex-1 text-[0.9375rem] font-medium leading-snug ${dark ? 'text-ink-100' : 'text-ink-900'}`}
                  >
                    {v.label}
                  </p>

                  {/* The write-up this clip belongs to, so a video is never a
                      dead end — the case study has the diagnosis, the parts and
                      the photographs. */}
                  <Link
                    href={`/projects/${v.caseStudySlug}`}
                    className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      dark ? 'text-gold-300 hover:text-gold-200' : 'text-ink-900 hover:text-gold-600'
                    }`}
                  >
                    Read the case study
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
