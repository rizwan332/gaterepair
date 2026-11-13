import { media, type MediaImage } from '@/content/media-manifest'
import { videos, type SiteVideo } from '@/content/video-manifest'

/**
 * Photographs and video for each symptom page.
 *
 * Symptom pages shipped text-only: `SymptomPage` has no media fields, so all
 * 25 pages carried no hero photograph and no video while every other page type
 * on the site carries both. The client raised it on 13 Nov 2026.
 *
 * ── HOW THESE WERE CHOSEN ───────────────────────────────────────────────────
 * By looking at every photograph, not by reading its alt text. The first pass
 * was built from alt text and was wrong, because the alt text in
 * content/media-manifest.ts does not reliably describe its file. Measured
 * 13 Nov 2026: `emergency-gate-repair-08` is captioned "a slide gate off its
 * track" and shows a technician at a control box; `gate-installation-13` is
 * captioned "safety photo-eyes installed either side" and shows an ornate iron
 * gate with no photo-eye in frame; `access-control-06` is captioned "a vehicle
 * loop detector module" and shows a keypad on a post. That is a separate
 * defect, flagged to the client, and it is why nothing here trusts a caption.
 *
 * `videos` are different: their titles are hand-written and specific
 * ("LiftMaster Board Replacement — When the Battery Keeps Going Flat"), so the
 * clip mapping is as precise as the clip library allows.
 *
 * ── WHAT "RELEVANT" MEANS HERE ──────────────────────────────────────────────
 * The first image is the hero, which is decorative (empty alt) and sets the
 * scene: it must show the right kind of gate and operator, swing or slide.
 * Everything after it goes in the gallery under "what it looks like", where a
 * visitor is comparing the photograph with their own gate — so those must show
 * the fault itself or they are worse than nothing.
 *
 * Where the library has no photograph of the fault, `gallery` is empty and the
 * section does not render. The library currently has no shot of a photo-eye, a
 * loop detector, a capacitor, a remote or a solar array, so those pages carry
 * a hero and video only. Those gaps are listed for the client to photograph.
 */
type SymptomMedia = {
  /** Decorative hero. The right gate and operator type, well composed. */
  hero: string
  /** Shows the fault itself. Empty where the library has nothing. */
  gallery: string[]
  videos: string[]
}

export const SYMPTOM_MEDIA: Record<string, SymptomMedia> = {
  'automatic-gate-not-working': {
    hero: 'electric-gate-repair-15',
    gallery: ['electric-gate-repair-13', 'elite-04'],
    videos: ['gate-motor-repair-services-video', 'automatic-gate-repair-services-video-2'],
  },
  'gate-battery-keeps-dying': {
    hero: 'electric-gate-repair-04',
    gallery: ['electric-gate-repair-09', 'elite-03'],
    videos: [
      'liftmaster-gate-motor-repair-21',
      'viking-gate-motor-repair-video',
      'liftmaster-gate-motor-repair-20',
    ],
  },
  'gate-chain-broken': {
    hero: 'all-o-matic-05',
    gallery: ['all-o-matic-08', 'ramset-05'],
    videos: ['all-o-matic-gate-motor-repair-21', 'all-o-matic-gate-motor-repair-video-2'],
  },
  'gate-circuit-board-not-working': {
    hero: 'electric-gate-repair-04',
    gallery: ['electric-gate-repair-09', 'all-o-matic-08', 'elite-03'],
    videos: [
      'elite-gate-motor-repair-video',
      'liftmaster-gate-motor-repair-video-2',
      'liftmaster-gate-motor-repair-20',
    ],
  },
  'gate-hinge-broken': {
    hero: 'iron-gate-repair-09',
    gallery: ['iron-gate-repair-04', 'iron-gate-repair-02'],
    videos: ['iron-gate-repair-services-video', 'iron-gate-repair-services-video-2'],
  },
  'gate-keypad-not-working': {
    hero: 'access-control-10',
    gallery: ['access-control-02', 'access-control-05', 'access-control-08'],
    // No clip exists of a keypad or entry panel being diagnosed.
    videos: [],
  },
  'gate-loop-detector-not-working': {
    hero: 'commercial-gate-repair-02',
    // No photograph of a loop detector or its cabinet. NEEDS A PHOTO.
    gallery: [],
    videos: ['commercial-gate-repair-services-video-2'],
  },
  'gate-motor-not-working': {
    hero: 'all-o-matic-05',
    gallery: ['electric-gate-repair-03', 'elite-04'],
    videos: ['gate-motor-repair-services-video', 'gate-motor-repair-services-video-2'],
  },
  'gate-not-working-after-power-outage': {
    hero: 'electric-gate-repair-04',
    gallery: ['electric-gate-repair-09', 'electric-gate-repair-15'],
    videos: ['electric-gate-repair-services-video-2', 'electric-gate-repair-services-video'],
  },
  'gate-not-working-after-storm': {
    hero: 'electric-gate-repair-13',
    gallery: ['iron-gate-repair-04', 'electric-gate-repair-09'],
    videos: ['liftmaster-gate-motor-repair-20', 'electric-gate-repair-services-video'],
  },
  'gate-opener-has-no-power': {
    hero: 'electric-gate-repair-04',
    gallery: ['electric-gate-repair-15', 'elite-03'],
    videos: ['electric-gate-repair-services-video-2', 'gate-motor-repair-services-video'],
  },
  'gate-opens-by-itself': {
    hero: 'commercial-gate-repair-02',
    // The cause is a loop or free-exit sensor, and we hold no photograph of
    // either. NEEDS A PHOTO.
    gallery: [],
    videos: ['commercial-gate-repair-services-video-2'],
  },
  'gate-photo-eye-not-working': {
    hero: 'automatic-gate-repair-18',
    // No photograph of a photo-eye or its bracket. NEEDS A PHOTO.
    gallery: [],
    videos: ['automatic-gate-repair-services-video'],
  },
  'gate-post-leaning': {
    hero: 'iron-gate-repair-04',
    gallery: ['iron-gate-repair-02'],
    videos: ['gate-installation-services-video'],
  },
  'gate-remote-not-working': {
    hero: 'access-control-10',
    // Nothing shows a remote being paired or a receiver swapped. NEEDS A PHOTO.
    gallery: [],
    videos: [],
  },
  'gate-reverses-when-closing': {
    hero: 'all-o-matic-05',
    gallery: ['all-o-matic-08'],
    videos: ['automatic-gate-repair-services-video', 'all-o-matic-gate-motor-repair-video'],
  },
  'gate-roller-or-wheel-broken': {
    hero: 'ramset-06',
    gallery: ['ramset-11', 'ramset-12'],
    videos: ['ramset-gate-motor-repair-20'],
  },
  'gate-sagging-or-dragging': {
    hero: 'iron-gate-repair-09',
    gallery: ['iron-gate-repair-04', 'iron-gate-repair-02'],
    videos: ['iron-gate-repair-services-video-2'],
  },
  'gate-stops-halfway': {
    hero: 'all-o-matic-05',
    gallery: ['all-o-matic-08', 'ramset-05'],
    videos: [
      'all-o-matic-gate-motor-repair-21',
      'liftmaster-gate-motor-repair-video-2',
      'all-o-matic-gate-motor-repair-video',
    ],
  },
  'gate-track-damaged': {
    hero: 'ramset-11',
    gallery: ['ramset-12', 'ramset-06'],
    videos: ['ramset-gate-motor-repair-20', 'all-o-matic-gate-motor-repair-video-2'],
  },
  'gate-wont-close': {
    hero: 'automatic-gate-repair-18',
    gallery: ['all-o-matic-08'],
    videos: ['automatic-gate-repair-services-video', 'automatic-gate-repair-services-video-2'],
  },
  'gate-wont-open': {
    hero: 'electric-gate-repair-15',
    gallery: ['electric-gate-repair-09', 'elite-04'],
    videos: ['gate-motor-repair-services-video', 'emergency-gate-repair-services-video-2'],
  },
  'sliding-gate-off-track': {
    hero: 'ramset-06',
    gallery: ['ramset-11', 'ramset-12'],
    videos: ['ramset-gate-motor-repair-20', 'all-o-matic-gate-motor-repair-video-2'],
  },
  'sliding-gate-stuck': {
    hero: 'ramset-05',
    gallery: ['ramset-06', 'all-o-matic-08'],
    videos: ['all-o-matic-gate-motor-repair-20', 'elite-gate-motor-repair-video-2'],
  },
  'swing-gate-stuck': {
    hero: 'electric-gate-repair-03',
    gallery: ['elite-04', 'iron-gate-repair-04'],
    videos: ['doorking-gate-motor-repair-20', 'faac-gate-motor-repair-video'],
  },
}

const allImages = Object.values(media).flat()

/**
 * Resolve a symptom's media, failing the build on a typo.
 *
 * A silently dropped slug would put the page back where it started — no
 * photograph, no video — and nothing would say so. Throwing means a renamed
 * image or clip is caught at build time rather than by a visitor.
 */
export function symptomMedia(slug: string): {
  hero?: MediaImage
  gallery: MediaImage[]
  videos: SiteVideo[]
} {
  const entry = SYMPTOM_MEDIA[slug]
  if (!entry) return { gallery: [], videos: [] }

  const image = (s: string) => {
    const hit = allImages.find((i) => i.slug === s)
    if (!hit) throw new Error(`Symptom "${slug}" names image "${s}", which does not exist.`)
    return hit
  }
  const video = (s: string) => {
    const hit = videos.find((v) => v.slug === s)
    if (!hit) throw new Error(`Symptom "${slug}" names video "${s}", which does not exist.`)
    return hit
  }

  return {
    hero: image(entry.hero),
    gallery: entry.gallery.map(image),
    videos: entry.videos.map(video),
  }
}
