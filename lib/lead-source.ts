/**
 * Working out where a lead actually came from.
 *
 * ── WHY THIS IS NOT JUST `document.referrer` ─────────────────────────────────
 * The sources this business most wants to count — Instagram, Facebook, TikTok
 * — are the ones a referrer is least able to tell you about. Links tapped
 * inside a social app open in that app's own browser, which routinely sends no
 * referrer at all, or sends a shortener like `l.instagram.com` that says only
 * "a link was clicked somewhere on Instagram".
 *
 * So classification works from three signals in order of trustworthiness:
 *
 *   1. CLICK ID   — fbclid, gclid, ttclid and friends. The platform appends
 *                   these itself, so they survive in-app browsers and cannot
 *                   be forgotten by whoever posted the link. Most reliable.
 *   2. UTM        — only present if someone tagged the link. Reliable when it
 *                   is there, absent whenever a link went out untagged.
 *   3. REFERRER   — works for ordinary web-to-web traffic, and is how AI
 *                   assistants are identified. Unreliable from apps.
 *
 * Anything with none of the three is `direct`, and a meaningful share of that
 * is people who saw a social post and typed the address later. That is not a
 * bug to be fixed in code — see `unattributable` below.
 *
 * Relative imports, not `@/`: the API routes and scripts both load this.
 */

/** The canonical buckets. One lead gets exactly one. */
export type LeadSource =
  | 'google-ads'
  | 'google-organic'
  | 'bing'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'youtube'
  | 'x'
  | 'pinterest'
  | 'nextdoor'
  | 'chatgpt'
  | 'perplexity'
  | 'gemini'
  | 'claude'
  | 'copilot'
  | 'ai-other'
  | 'referral'
  | 'direct'

/** Coarser grouping, for the headline numbers on the dashboard. */
export type SourceGroup = 'paid' | 'organic-search' | 'social' | 'ai' | 'referral' | 'direct'

export const SOURCE_GROUP: Record<LeadSource, SourceGroup> = {
  'google-ads': 'paid',
  'google-organic': 'organic-search',
  bing: 'organic-search',
  facebook: 'social',
  instagram: 'social',
  tiktok: 'social',
  linkedin: 'social',
  youtube: 'social',
  x: 'social',
  pinterest: 'social',
  nextdoor: 'social',
  chatgpt: 'ai',
  perplexity: 'ai',
  gemini: 'ai',
  claude: 'ai',
  copilot: 'ai',
  'ai-other': 'ai',
  referral: 'referral',
  direct: 'direct',
}

export const SOURCE_LABEL: Record<LeadSource, string> = {
  'google-ads': 'Google Ads',
  'google-organic': 'Google (organic)',
  bing: 'Bing',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  x: 'X / Twitter',
  pinterest: 'Pinterest',
  nextdoor: 'Nextdoor',
  chatgpt: 'ChatGPT',
  perplexity: 'Perplexity',
  gemini: 'Gemini',
  claude: 'Claude',
  copilot: 'Copilot',
  'ai-other': 'Other AI',
  referral: 'Referral',
  direct: 'Direct / untracked',
}

/**
 * Click-id parameters, in priority order.
 *
 * These are appended by the platform to outbound links, which is what makes
 * them the strongest signal available: they arrive even when the referrer does
 * not, and they do not depend on anyone remembering to tag a link.
 *
 * `fbclid` covers both Facebook and Instagram — Meta uses one parameter across
 * both properties, so it cannot tell them apart on its own. Where it matters,
 * a utm_source on the link is what separates them, which is handled below.
 */
export const CLICK_IDS = [
  { param: 'gclid', source: 'google-ads' },
  { param: 'gbraid', source: 'google-ads' },
  { param: 'wbraid', source: 'google-ads' },
  { param: 'msclkid', source: 'bing' },
  { param: 'fbclid', source: 'facebook' },
  { param: 'ttclid', source: 'tiktok' },
  { param: 'li_fat_id', source: 'linkedin' },
  { param: 'twclid', source: 'x' },
  { param: 'epik', source: 'pinterest' },
  { param: 'igshid', source: 'instagram' },
] as const satisfies readonly { param: string; source: LeadSource }[]

/** Referrer hostname fragments → source. Longest match wins. */
const REFERRER_MAP: [string, LeadSource][] = [
  // AI assistants. Checked before search engines because gemini.google.com
  // would otherwise be swallowed by the google.* rule below.
  ['chatgpt.com', 'chatgpt'],
  ['chat.openai.com', 'chatgpt'],
  ['openai.com', 'chatgpt'],
  ['perplexity.ai', 'perplexity'],
  ['gemini.google.com', 'gemini'],
  ['bard.google.com', 'gemini'],
  ['claude.ai', 'claude'],
  ['copilot.microsoft.com', 'copilot'],
  ['bing.com/chat', 'copilot'],
  ['you.com', 'ai-other'],
  ['phind.com', 'ai-other'],
  ['poe.com', 'ai-other'],

  // Social. The l./lm. hosts are Meta's outbound link wrappers.
  ['instagram.com', 'instagram'],
  ['l.instagram.com', 'instagram'],
  ['facebook.com', 'facebook'],
  ['l.facebook.com', 'facebook'],
  ['lm.facebook.com', 'facebook'],
  ['messenger.com', 'facebook'],
  ['tiktok.com', 'tiktok'],
  ['linkedin.com', 'linkedin'],
  ['lnkd.in', 'linkedin'],
  ['youtube.com', 'youtube'],
  ['youtu.be', 'youtube'],
  ['twitter.com', 'x'],
  ['t.co', 'x'],
  ['x.com', 'x'],
  ['pinterest.', 'pinterest'],
  ['nextdoor.com', 'nextdoor'],

  // Search.
  ['google.', 'google-organic'],
  ['bing.com', 'bing'],
  ['duckduckgo.com', 'bing'],
  ['search.yahoo.com', 'bing'],
  ['ecosia.org', 'bing'],
]

/** utm_source values → source, for links we tagged ourselves. */
const UTM_MAP: [string, LeadSource][] = [
  ['instagram', 'instagram'],
  ['ig', 'instagram'],
  ['facebook', 'facebook'],
  ['fb', 'facebook'],
  ['meta', 'facebook'],
  ['tiktok', 'tiktok'],
  ['linkedin', 'linkedin'],
  ['youtube', 'youtube'],
  ['twitter', 'x'],
  ['x', 'x'],
  ['pinterest', 'pinterest'],
  ['nextdoor', 'nextdoor'],
  ['chatgpt', 'chatgpt'],
  ['openai', 'chatgpt'],
  ['perplexity', 'perplexity'],
  ['gemini', 'gemini'],
  ['google', 'google-organic'],
  ['bing', 'bing'],
]

export type AttributionInput = {
  /** Click-id and utm values as captured on arrival. */
  params?: Record<string, string | undefined>
  /** document.referrer at first touch. */
  referrer?: string
  /** utm_source, if it was captured separately. */
  utmSource?: string
  utmMedium?: string
}

export type Classification = {
  source: LeadSource
  group: SourceGroup
  label: string
  /** Which of the three signals decided it — useful when a number looks wrong. */
  basis: 'click-id' | 'utm' | 'referrer' | 'none'
  /**
   * True when we genuinely do not know. Reported honestly on the dashboard
   * rather than being quietly folded into "direct" as though it were a real
   * channel — see the note on dark traffic below.
   */
  unattributable: boolean
}

const host = (referrer?: string): string => {
  if (!referrer) return ''
  try {
    return new URL(referrer).hostname.toLowerCase()
  } catch {
    return referrer.toLowerCase()
  }
}

/**
 * Classify one visit.
 *
 * ── ON DARK TRAFFIC ─────────────────────────────────────────────────────────
 * Someone sees an Instagram post on Monday and rings on Thursday from memory.
 * No referrer, no click id, no utm — it is indistinguishable from someone who
 * had the number on a fridge magnet. That traffic is real, it is often large,
 * and no amount of code recovers it. The only instruments that reach it are a
 * "how did you hear about us" field on the form and the question a technician
 * asks on the phone, which is why the lead schema carries `heardAbout`.
 *
 * Reporting it as `direct` with `unattributable: true` is deliberate: it keeps
 * it visible as an unknown rather than letting it look like a channel that is
 * performing.
 */
export function classifyLead(input: AttributionInput): Classification {
  const params = input.params ?? {}

  // 1. Click ids — the platform put these there itself.
  for (const { param, source } of CLICK_IDS) {
    if (params[param]) {
      // Meta uses fbclid across Facebook and Instagram. If the link was also
      // tagged, trust the tag to tell the two apart.
      let resolved: LeadSource = source
      if (source === 'facebook') {
        const tagged = (input.utmSource ?? params.utm_source ?? '').toLowerCase()
        if (tagged.includes('insta') || tagged === 'ig') resolved = 'instagram'
      }
      return decorate(resolved, 'click-id')
    }
  }

  // 2. utm_source — present only if the link was tagged.
  const utm = (input.utmSource ?? params.utm_source ?? '').toLowerCase().trim()
  if (utm) {
    const hit = UTM_MAP.find(([key]) => utm === key || utm.includes(key))
    if (hit) {
      // A tagged Google link with paid medium is Ads, not organic.
      const medium = (input.utmMedium ?? params.utm_medium ?? '').toLowerCase()
      if (hit[1] === 'google-organic' && /cpc|ppc|paid/.test(medium)) return decorate('google-ads', 'utm')
      return decorate(hit[1], 'utm')
    }
    return decorate('referral', 'utm')
  }

  // 3. Referrer.
  const h = host(input.referrer)
  if (h) {
    const matches = REFERRER_MAP.filter(([fragment]) => h.includes(fragment))
    if (matches.length > 0) {
      // Longest fragment wins so gemini.google.com beats google.
      const best = matches.reduce((a, b) => (b[0].length > a[0].length ? b : a))
      return decorate(best[1], 'referrer')
    }
    return decorate('referral', 'referrer')
  }

  return decorate('direct', 'none')
}

function decorate(source: LeadSource, basis: Classification['basis']): Classification {
  return {
    source,
    group: SOURCE_GROUP[source],
    label: SOURCE_LABEL[source],
    basis,
    unattributable: basis === 'none',
  }
}
