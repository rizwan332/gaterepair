// Self-check for lib/lead-source.ts: in-app browsers are recognised, and signals keep their priority.
import { classifyLead } from '../lib/lead-source'

const IG = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 335.0.0.0 (iPhone14,2; iOS 17_5; en_US; FBAV/335.0)'
const FB = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/470.0.0;FBBV/1]'
const TT = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36 musical_ly_2023 BytedanceWebview/d8a21c6'
const SAFARI = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1'

const cases: [Parameters<typeof classifyLead>[0], string, string][] = [
  [{ userAgent: IG }, 'instagram', 'app'],
  [{ userAgent: FB }, 'facebook', 'app'],
  [{ userAgent: TT }, 'tiktok', 'app'],
  [{ userAgent: SAFARI }, 'direct', 'none'],
  [{ userAgent: IG, params: { gclid: 'x' } }, 'google-ads', 'click-id'],
  [{ userAgent: FB, referrer: 'https://www.google.com/' }, 'google-organic', 'referrer'],
  [{ referrer: 'https://www.yelp.com/biz/shield' }, 'referral', 'referrer'],
  [{ referrer: 'https://shieldgaterepair.com/contact' }, 'direct', 'none'],
]
let failed = 0
for (const [input, source, basis] of cases) {
  const c = classifyLead(input)
  if (c.source !== source || c.basis !== basis) {
    failed++
    console.error(`expected ${source}/${basis}, got ${c.source}/${c.basis} for ${JSON.stringify(input).slice(0, 80)}`)
  }
}
console.log(failed ? `${failed} lead-source check(s) failed` : `lead-source: ${cases.length} checks passed`)
process.exit(failed ? 1 : 0)
