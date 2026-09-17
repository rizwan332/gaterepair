import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { modelPages, modelByParams } from '@/content/models'
import { ModelPageView, modelMetadata } from '@/components/sections/model-page'

/**
 * Model pages: /brands/<brand>/<model>-repair.
 *
 * Nested under the brand rather than top-level so the URL carries the same
 * hierarchy the links and breadcrumbs do — brand, then model. Content lives in
 * content/models/; indexing is decided by lib/model-quality.ts.
 */

// Only the pages that exist. An unknown model under a real brand is a 404, not
// an empty template.
export const dynamicParams = false

export function generateStaticParams() {
  return modelPages.map((m) => ({ slug: m.brandSlug, model: m.slug }))
}

type Params = { params: Promise<{ slug: string; model: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, model } = await params
  const page = modelByParams(slug, model)
  return page ? modelMetadata(page) : {}
}

export default async function ModelRoute({ params }: Params) {
  const { slug, model } = await params
  const page = modelByParams(slug, model)
  if (!page) notFound()
  return <ModelPageView page={page} />
}
