import { CallHero } from '@/components/sections/call-hero'
import { media } from '@/content/media-manifest'

/**
 * Hero — the five-second moment.
 *
 * Three deliberate choices:
 *
 * 1. The LCP element is a photograph, never a video. A full-bleed background
 *    video is incompatible with the performance target; the source clips run
 *    1.5–8 MB and would land directly on LCP. Video earns its keep below the
 *    fold, where it is the one thing no DFW competitor has.
 *
 * 2. The headline opens on the reader's situation, not the company. The best
 *    competitor hero in this market — Star Gate's "Dallas Gate Repair & Fence
 *    Installation: Same-Day Emergency Service" — is still a service
 *    description. Metro's is "Metro Gate Repair Gate Repair Dallas TX".
 *
 * 3. Proof sits *inside* the hero rather than in a strip below it. The previous
 *    version pushed every trust signal below the fold, which reproduced the
 *    exact failure the old WordPress site was rejected for.
 */
/**
 * The hero photograph, resolved at module scope so the homepage can preload
 * exactly the image this component renders.
 *
 * It has to be exported rather than duplicated: the LCP element is a hand-built
 * <picture> served from the CDN, so Next emits no preload for it, and a preload
 * whose srcset does not match the rendered <source> character for character
 * makes the browser download the image twice. One source of truth avoids that.
 *
 * The client picked the homepage imagery himself (3 Aug 2026). `homepage-03`
 * is the technician mid-repair on an All-O-Matic controller — the right hero
 * for a company whose whole argument is that it repairs rather than replaces,
 * and the only one of the three with no identifying background detail.
 *
 * `homepage-04` is the shot he originally sent as a 160px screenshot
 * (client-assets/reference/Home-Page.webp) and re-supplied on 4 Aug 2026 at
 * 5712px: a Texas brick house, a US flag, and a real driveway gate. It is the
 * only hero candidate that is unambiguously Dallas–Fort Worth, and at full
 * resolution it is the only one that holds up on a wide desktop.
 *
 * Falls back through the earlier picks so the hero never renders empty if the
 * media library is regenerated before this image is processed.
 */
export const heroImage =
  media['homepage']?.[3] ??
  media['homepage']?.[2] ??
  media['gate-installation']?.[3] ??
  media['gate-installation']?.[0]

/** Must match the `sizes` passed to the hero's ResponsiveImage exactly. */
export const HERO_SIZES = '100vw'

export function Hero() {
  // The client's 22 Oct 2026 mockup, shared with the Ads landing page. The
  // image and sizes are the ones app/page.tsx preloads, unchanged, so the LCP
  // preload still matches. The small gold top line is the H1 here; see
  // CallHero for why.
  return <CallHero image={heroImage} sizes={HERO_SIZES} headingMode="top-line" estimateHref="/contact" />
}
