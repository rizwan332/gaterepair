import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import type { Project } from '@/content/projects'
import { media } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { Reveal } from '@/components/ui/reveal'

/**
 * Case study cards, shared by the homepage and the service pages.
 *
 * Both places previously had no route into the case studies at all — they were
 * reachable only from /projects — which meant the strongest sales argument on
 * the site was three clicks from the front door. The card markup mirrors
 * /projects deliberately: same shape, so a visitor who has seen one recognises
 * the other.
 */
export function CaseStudies({
  items,
  eyebrow = 'Case studies',
  title,
  intro,
  tone = 'light',
  limit = 3,
}: {
  items: Project[]
  eyebrow?: string
  title: string
  intro?: string
  tone?: 'light' | 'tint'
  limit?: number
}) {
  const shown = items.slice(0, limit)
  if (shown.length === 0) return null

  return (
    <section className={`section ${tone === 'tint' ? 'bg-ink-50' : 'bg-white'}`}>
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">
                {eyebrow}
              </p>
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">{title}</h2>
              {intro && <p className="mt-4 text-lg leading-relaxed text-ink-700">{intro}</p>}
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 underline decoration-gold-400 underline-offset-4 hover:decoration-gold-600"
            >
              All case studies
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => {
            const image = media[project.mediaCategory]?.[project.imageIndexes[0]]
            const hasVideo = Boolean(
              project.videoSlug && videos.some((v) => v.slug === project.videoSlug),
            )
            return (
              <Reveal as="li" key={project.slug} delay={Math.min(i, 5) * 0.04}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="card-light group flex h-full flex-col overflow-hidden"
                >
                  {image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                      <ResponsiveImage
                        image={image}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {hasVideo && (
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-gold-300 backdrop-blur-sm">
                          <Play className="size-3 fill-current" aria-hidden />
                          Video
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.brand && (
                        <span className="rounded-md bg-ink-950 px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-gold-400">
                          {project.brand}
                        </span>
                      )}
                      <span className="rounded-md bg-ink-100 px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-600">
                        {project.propertyType}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink-950">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                      {project.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
                      Read the case study
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
