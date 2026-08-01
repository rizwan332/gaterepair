import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AlertTriangle, Search, Wrench, CheckCircle2, Lightbulb, ArrowUpRight } from 'lucide-react'
import { projects, projectBySlug } from '@/content/projects'
import { serviceBySlug } from '@/content/services'
import { brands } from '@/content/brands'
import { media } from '@/content/media-manifest'
import { videos } from '@/content/video-manifest'
import { PageHero } from '@/components/sections/page-hero'
import { ClosingCTA } from '@/components/sections/closing-cta'
import { PhotoGallery } from '@/components/sections/photo-gallery'
import { LazyVideo } from '@/components/ui/lazy-video'
import { Reveal } from '@/components/ui/reveal'
import { breadcrumbSchema, videoSchema, serviceSchema } from '@/lib/schema'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  }
}

/**
 * Case study template.
 *
 * Structured as Problem → Diagnosis → Solution → Outcome → Takeaway, because
 * that is the sequence a reader deciding whether to trust us actually cares
 * about. Star Gate's equivalent is a photo, a title and one line.
 *
 * The takeaway block is the differentiator: it gives away the diagnostic
 * insight rather than withholding it. That is deliberate — demonstrating you
 * know why something failed is far more persuasive than asserting you are
 * experienced, and it is the part no competitor will copy because it requires
 * technicians who can explain their work.
 */
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectBySlug(slug)
  if (!project) notFound()

  const images = project.imageIndexes
    .map((i) => media[project.mediaCategory]?.[i])
    .filter((img): img is NonNullable<typeof img> => Boolean(img))
  const video = project.videoSlug ? videos.find((v) => v.slug === project.videoSlug) : undefined
  const service = serviceBySlug(project.service)
  const brand = project.brand
    ? brands.find((b) => b.name.toLowerCase() === project.brand!.toLowerCase())
    : undefined
  const related = projects
    .filter((p) => p.slug !== project.slug && (p.service === project.service || p.brand === project.brand))
    .slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={project.title}
        intro={project.summary}
        image={images[0]}
        meta={[
          project.brand,
          project.propertyType,
          project.city,
          project.completedOn
            ? new Date(project.completedOn).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
            : undefined,
        ]
          .filter(Boolean)
          .join(' · ')}
      />

      <article>
        <Section icon={AlertTriangle} title="The problem" tone="light" paras={project.problem} />
        <Section icon={Search} title="How we diagnosed it" tone="muted" paras={project.diagnosis} ordered />
        <Section icon={Wrench} title="What we did" tone="light" paras={project.solution} ordered />

        {video && (
          <section className="section surface-dark glow-gold relative isolate overflow-hidden text-white">
            <div className="container-page relative">
              <Reveal>
                <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">Watch this repair</h2>
                <p className="prose-measure mb-8 text-lg text-ink-300">
                  No other gate repair company in Dallas&ndash;Fort Worth publishes video of their work.
                </p>
                <div className="max-w-3xl">
                  <LazyVideo video={video} />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <section className="section bg-white">
          <div className="container-page">
            <Reveal>
              <div className="flex max-w-3xl gap-5 rounded-[var(--radius-card)] bg-success-500/5 p-7 ring-1 ring-inset ring-success-500/25">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-success-600" aria-hidden />
                <div>
                  <h2 className="mb-2 font-display text-xl font-semibold text-ink-950">The outcome</h2>
                  <p className="leading-relaxed text-ink-700">{project.outcome}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <div className="max-w-3xl border-l-2 border-gold-500 pl-6 md:pl-8">
                <h2 className="mb-4 inline-flex items-center gap-2.5 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                  <Lightbulb className="size-6 text-gold-600" aria-hidden />
                  What you should take from this
                </h2>
                <p className="text-lg leading-relaxed text-ink-800">{project.takeaway}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {images.length > 1 && (
          <PhotoGallery title="From the job" images={images} tone="light" />
        )}
      </article>

      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="flex flex-wrap gap-3">
            {service && (
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
              >
                More on {service.name.toLowerCase()}
                <ArrowUpRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            )}
            {brand && (
              <Link
                href={`/brands/${brand.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-300 hover:text-ink-950"
              >
                {brand.name} repair
                <ArrowUpRight className="size-3.5 text-ink-400" aria-hidden />
              </Link>
            )}
          </div>

          {related.length > 0 && (
            <>
              <h2 className="mb-6 mt-12 font-display text-2xl font-bold text-ink-950">Related case studies</h2>
              <ul className="grid gap-5 md:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/projects/${r.slug}`} className="card-light block h-full p-5">
                      <h3 className="font-display text-base font-semibold leading-snug text-ink-950">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{r.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              breadcrumbSchema([
                { name: 'Home', url: '/' },
                { name: 'Case Studies', url: '/projects' },
                { name: project.title, url: `/projects/${project.slug}` },
              ]),
              service
                ? serviceSchema({
                    name: service.name,
                    description: project.summary,
                    url: `/projects/${project.slug}`,
                  })
                : null,
              video
                ? videoSchema({
                    title: video.title,
                    description: video.description,
                    thumbnailUrl: `${video.poster}.jpg`,
                    contentUrl: video.src,
                    durationSeconds: video.durationSeconds,
                    uploadDate: '2026-08-01',
                  })
                : null,
            ].filter(Boolean),
          ),
        }}
      />
    </>
  )
}

function Section({
  icon: Icon,
  title,
  paras,
  tone,
  ordered,
}: {
  icon: typeof AlertTriangle
  title: string
  paras: string[]
  tone: 'light' | 'muted'
  ordered?: boolean
}) {
  const Body = ordered ? 'ol' : 'div'
  return (
    <section className={`section ${tone === 'muted' ? 'bg-ink-50' : 'bg-white'}`}>
      <div className="container-page">
        <Reveal>
          <h2 className="mb-6 inline-flex items-center gap-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            <Icon className="size-6 text-gold-600" aria-hidden />
            {title}
          </h2>
          <Body className="prose-measure space-y-4">
            {paras.map((para, i) =>
              ordered ? (
                <li key={i} className="flex gap-4 leading-relaxed text-ink-700">
                  <span
                    className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ink-950 text-[0.6875rem] font-bold text-gold-400"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span>{para}</span>
                </li>
              ) : (
                <p key={i} className="leading-relaxed text-ink-700">
                  {para}
                </p>
              ),
            )}
          </Body>
        </Reveal>
      </div>
    </section>
  )
}
