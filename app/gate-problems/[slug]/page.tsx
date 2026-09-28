import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { symptomPages, symptomBySlug } from '@/content/symptoms'
import { SymptomPageView, symptomMetadata } from '@/components/sections/symptom-page'

/**
 * Symptom pages: /gate-problems/<slug>.
 *
 * Top-level rather than nested under a service, because a symptom does not
 * belong to one service — "gate won't close" can end at the motor page, the
 * access control page or the iron work page depending on the cause, and
 * nesting it under one of them would assert a diagnosis the page exists to
 * make.
 *
 * Content lives in content/symptoms/; indexing is decided by
 * lib/symptom-quality.ts.
 */

// Only the pages that exist. An unknown symptom is a 404, not an empty page.
export const dynamicParams = false

export function generateStaticParams() {
  return symptomPages.map((p) => ({ slug: p.slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const page = symptomBySlug(slug)
  return page ? symptomMetadata(page) : {}
}

export default async function SymptomRoute({ params }: Params) {
  const { slug } = await params
  const page = symptomBySlug(slug)
  if (!page) notFound()
  return <SymptomPageView page={page} />
}
