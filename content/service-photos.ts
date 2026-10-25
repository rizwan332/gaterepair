import { media, type MediaImage } from './media-manifest'
import { projects } from './projects'
import { caseStudyPhotos } from './case-study-media'

/**
 * One hand-picked photo per service, in two sets that never overlap.
 *
 * Why this exists (22 Oct 2026): services share media categories. Automatic,
 * sliding and swing all draw from 'automatic-gate-repair', and every section
 * that showed a service took `media[category][0]`, so the homepage showed one
 * photograph five times and another four times while the library holds
 * hundreds. Picking per service, once, here, is the only way to guarantee no
 * repeats across sections.
 *
 *  - `serviceJobPhoto`: the client's own Texas job photos (library photos only
 *    for the two services with no documented job). Used by the phone service
 *    tiles on the homepage and the Ads landing page.
 *  - `serviceAltPhoto`: a different library photo per service, used by the
 *    ServicesGrid ("What We Fix") so the two homepage service sections never
 *    show the same picture.
 *
 * Neither set uses the first photo of a case study, which the case-study
 * cards already show, or the homepage's own featured photographs.
 */

/** A client job photo in the shape ResponsiveImage takes. */
export function jobPhoto(projectSlug: string, index: number): MediaImage | undefined {
  const project = projects.find((p) => p.slug === projectSlug)
  const photo = project?.photoSet ? caseStudyPhotos[project.photoSet]?.[index] : undefined
  if (!photo) return undefined
  return {
    slug: photo.slug,
    src: photo.src,
    widths: photo.widths,
    width: photo.width,
    height: photo.height,
    blurDataURL: photo.blurDataURL,
    alt: photo.caption || project!.title,
    altWritten: Boolean(photo.caption),
  }
}

// Re-picked 26 Oct 2026 by looking at every photo, so each one shows the
// service it sits under (an operator for motor repair, a slide gate for
// sliding, a keypad for access control), not just a photo nobody else uses.
const JOB: Record<string, () => MediaImage | undefined> = {
  'gate-motor-repair': () => jobPhoto('viking-refurbishment-richardson-tx', 3), // Viking operator opened up beside the gate
  'emergency-gate-repair': () => jobPhoto('liftmaster-csl24ul-off-track-dallas-tx', 1), // off-track slide gate call-out
  'automatic-gate-repair': () => jobPhoto('eagle-sliding-gate-repair-mesquite-tx', 2), // automatic iron slide gate and its Eagle operator
  'sliding-gate-repair': () => jobPhoto('liftmaster-chain-replacement-dallas-tx', 1), // sliding gate with operator and new chain
  'swing-gate-repair': () => jobPhoto('liftmaster-la400-arm-replacement-university-park-tx', 3), // swing gate, arm and tools mid-repair
  'electric-gate-repair': () => jobPhoto('swing-gate-circuit-board-southlake-tx', 2), // replacement control board in the enclosure
  'iron-gate-repair': () => media['iron-gate-repair']?.[9], // welding an ornate iron gate; no Texas iron job photographed yet
  'commercial-gate-repair': () => jobPhoto('liftmaster-community-gate-reset-mildred-tx', 4), // community entrance barrier gate
  'access-control-repair': () => jobPhoto('liftmaster-community-gate-reset-mildred-tx', 1), // entry keypad at the community gate
  'gate-installation': () => jobPhoto('liftmaster-csl24ul-installation-dallas-tx', 6), // finished CSL24UL install on the slide gate
}

const ALT: Record<string, () => MediaImage | undefined> = {
  'gate-motor-repair': () => media['electric-gate-repair']?.[2], // technician working on an operator
  'emergency-gate-repair': () => media['emergency-gate-repair']?.[7], // technician at a commercial operator
  'automatic-gate-repair': () => media['automatic-gate-repair']?.[3], // automatic gate with its operator
  'sliding-gate-repair': () => media['automatic-gate-repair']?.[1], // slide gate and operator
  'swing-gate-repair': () => media['emergency-gate-repair']?.[2], // swing gate operator arm
  'electric-gate-repair': () => media['electric-gate-repair']?.[5], // open control box on a gate
  'iron-gate-repair': () => media['iron-gate-repair']?.[4], // ornate iron gate being repaired
  'commercial-gate-repair': () => media['commercial-gate-repair']?.[1], // commercial slide gate, service truck
  'access-control-repair': () => media['access-control']?.[1], // telephone entry call box
  'gate-installation': () => media['gate-installation']?.[2], // new swing gates with operators
}

export const serviceJobPhoto = (slug: string) => JOB[slug]?.()
export const serviceAltPhoto = (slug: string) => ALT[slug]?.()
