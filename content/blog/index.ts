import type { BlogBlock, BlogCategory, BlogPost } from './types'
import { repairOrReplaceGateOpener } from './posts/repair-or-replace-gate-opener'
import { hoaGateMaintenanceChecklist } from './posts/hoa-gate-maintenance-checklist'
import { swingVsSlidingGateOpener } from './posts/swing-vs-sliding-gate-opener'
import { slidingGateMotorRunsGateWontMove } from './posts/sliding-gate-motor-runs-gate-wont-move'
import { howToManuallyOpenAutomaticGate } from './posts/how-to-manually-open-automatic-gate'
import { gateRemoteRangeShort } from './posts/gate-remote-range-short'
import { protectAutomaticGateIceStorm } from './posts/protect-automatic-gate-ice-storm'
import { gateOpenerBatteryBackup } from './posts/gate-opener-battery-backup'
import { automaticGateSafetyKidsPets } from './posts/automatic-gate-safety-kids-pets'
import { residentialGateOpenerMaintenance } from './posts/residential-gate-opener-maintenance'
import { wroughtIronGateRustRepair } from './posts/wrought-iron-gate-rust-repair'
import { gateAccessControlOptions } from './posts/gate-access-control-options'
import { solarGateOpenerWinter } from './posts/solar-gate-opener-winter'
import { gateRepairMisdiagnosis } from './posts/gate-repair-misdiagnosis'
import { highTrafficGateOperator } from './posts/high-traffic-gate-operator'

export type { BlogPost, BlogBlock, BlogCategory } from './types'

/** Every post, in any status. Add new posts here. */
export const allPosts: BlogPost[] = [
  repairOrReplaceGateOpener,
  hoaGateMaintenanceChecklist,
  swingVsSlidingGateOpener,
  slidingGateMotorRunsGateWontMove,
  howToManuallyOpenAutomaticGate,
  gateRemoteRangeShort,
  protectAutomaticGateIceStorm,
  gateOpenerBatteryBackup,
  automaticGateSafetyKidsPets,
  residentialGateOpenerMaintenance,
  wroughtIronGateRustRepair,
  gateAccessControlOptions,
  solarGateOpenerWinter,
  gateRepairMisdiagnosis,
  highTrafficGateOperator,
]

export const CATEGORY_LABEL: Record<BlogCategory, string> = {
  costs: 'Costs & pricing',
  troubleshooting: 'Troubleshooting',
  'buying-guides': 'Buying guides',
  'hoa-commercial': 'HOA & commercial',
  seasonal: 'Storms & seasons',
  'job-stories': 'From our jobs',
}

/**
 * Whether unpublished posts are rendered. Only ever true locally: Netlify
 * never sets BLOG_PREVIEW, so a draft cannot reach production by accident.
 */
export const blogPreview = process.env.BLOG_PREVIEW === '1'

export const isPublished = (p: BlogPost) => p.status === 'published'

/** Today in Dallas, YYYY-MM-DD, at build time. */
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date())

/**
 * Published posts whose date has come, newest first. What the live site lists
 * and indexes. A post dated ahead appears on the first build on or after its
 * date; netlify/functions/daily-rebuild.mts triggers that build each morning.
 */
export const publishedPosts: BlogPost[] = allPosts
  .filter((p) => isPublished(p) && (p.publishedAt ?? '') <= today)
  .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))

/** What this build renders: published only, plus drafts when previewing. */
export const visiblePosts: BlogPost[] = blogPreview
  ? [...publishedPosts, ...allPosts.filter((p) => !publishedPosts.includes(p))]
  : publishedPosts

export const postBySlug = (slug: string) => visiblePosts.find((p) => p.slug === slug)

export const postPath = (p: Pick<BlogPost, 'slug'>) => `/blog/${p.slug}`

/** The nav and footer link appear only once there is something to read. */
export const blogIsLive = publishedPosts.length > 0

/** Plain text of a post, for word counts and reading time. */
export function postText(p: BlogPost): string {
  const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  const blockText = (b: BlogBlock): string[] => {
    switch (b.type) {
      case 'p':
      case 'h2':
      case 'h3':
        return [b.text]
      case 'ul':
      case 'ol':
        return b.items
      case 'callout':
        return [b.title, b.text]
      case 'table':
        return [...b.head, ...b.rows.flat()]
      case 'cta':
        return []
    }
  }
  return [p.intro, ...p.body.flatMap(blockText), ...(p.faqs ?? []).flatMap((f) => [f.q, f.a])].map(strip).join(' ')
}

export const wordCount = (p: BlogPost) => postText(p).split(/\s+/).filter(Boolean).length

/** At 220 words a minute, rounded up. Shown on the card and under the H1. */
export const readingMinutes = (p: BlogPost) => Math.max(1, Math.ceil(wordCount(p) / 220))
