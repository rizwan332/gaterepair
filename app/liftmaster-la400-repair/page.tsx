import type { Metadata } from 'next'
import { LandingPage, landingMetadata } from '@/components/sections/landing-page'

/**
 * Google Ads landing page. Content lives in content/landing-pages.ts; the
 * whole page renders from <LandingPage>. This file exists only because the
 * route has to be top-level — see the note in components/sections/landing-page.tsx.
 */
const SLUG = 'liftmaster-la400-repair'

export const metadata: Metadata = landingMetadata(SLUG)

export default function Page() {
  return <LandingPage slug={SLUG} />
}
