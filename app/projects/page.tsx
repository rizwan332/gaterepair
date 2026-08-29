import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import { projects } from '@/content/projects'
import { media } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import { Reveal } from '@/components/ui/reveal'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  // 45 chars with the appended brand. The old "Project Case Studies | Real Gate
  // Repairs, Start to Finish" reached 78 and lost its tail.
  title: 'Gate Repair Case Studies',
  description:
    'Gate repairs documented properly — the fault, how it was diagnosed, what was actually wrong, and what it took to fix. Including several that had already been quoted as replacements.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real Repairs, Documented Properly"
        intro="Not a gallery of finished gates. Each of these walks through what was actually wrong, how we worked it out, and what it took to fix — including several that had already been quoted as full replacements."
        image={media['all-o-matic']?.[4]}
        meta="Every one filmed or photographed on the job"
      />

      <section className="section bg-ink-50">
        <div className="container-page">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              const image = media[project.mediaCategory]?.[project.imageIndexes[0]]
              const hasVideo = Boolean(project.videoSlug && videos.some((v) => v.slug === project.videoSlug))
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
                      <h2 className="font-display text-lg font-semibold leading-snug text-ink-950">
                        {project.title}
                      </h2>
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

          {/* The client asked for California to come off the site (3 Aug 2026),
              so the former market is no longer named. What stays is the part we
              cannot drop without it becoming a false claim: these are our team's
              jobs, and they are not represented as Dallas jobs. Saying "our
              technicians did this work" is true; captioning an identifiable
              driveway as a Dallas address would not be. See MEDIA-PROVENANCE.md. */}
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-500">
            These case studies document work carried out by our own technicians. We serve DFW and the
            surrounding areas with the same team and the same approach, and new local projects are added
            here as they are completed.
          </p>
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Case Studies', url: '/projects' },
            ]),
          ),
        }}
      />
    </>
  )
}
