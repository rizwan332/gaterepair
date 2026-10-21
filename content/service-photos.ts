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

const JOB: Record<string, () => MediaImage | undefined> = {
  'gate-motor-repair': () => jobPhoto('liftmaster-la400-arm-replacement-university-park-tx', 2),
  'emergency-gate-repair': () => jobPhoto('liftmaster-csl24ul-off-track-dallas-tx', 1),
  'automatic-gate-repair': () => jobPhoto('eagle-2000-restored-coppell-tx', 3),
  'sliding-gate-repair': () => jobPhoto('ramset-gearbox-repair-richardson-tx', 3),
  'swing-gate-repair': () => jobPhoto('us-automatic-arm-battery-prosper-tx', 2),
  'electric-gate-repair': () => jobPhoto('liftmaster-solar-upgrade-wills-point-tx', 3),
  'iron-gate-repair': () => media['iron-gate-repair']?.[0],
  'commercial-gate-repair': () => jobPhoto('liftmaster-community-gate-reset-mildred-tx', 1),
  'access-control-repair': () => media['access-control']?.[0],
  'gate-installation': () => jobPhoto('liftmaster-csl24ul-installation-dallas-tx', 4),
}

const ALT: Record<string, () => MediaImage | undefined> = {
  'gate-motor-repair': () => media['automatic-gate-repair']?.[1],
  'emergency-gate-repair': () => media['emergency-gate-repair']?.[2],
  'automatic-gate-repair': () => media['automatic-gate-repair']?.[6],
  'sliding-gate-repair': () => media['gate-installation']?.[7],
  'swing-gate-repair': () => media['gate-installation']?.[11],
  'electric-gate-repair': () => media['electric-gate-repair']?.[1],
  'iron-gate-repair': () => media['iron-gate-repair']?.[7],
  'commercial-gate-repair': () => media['commercial-gate-repair']?.[1],
  'access-control-repair': () => media['access-control']?.[1],
  'gate-installation': () => media['gate-installation']?.[3],
}

export const serviceJobPhoto = (slug: string) => JOB[slug]?.()
export const serviceAltPhoto = (slug: string) => ALT[slug]?.()
