/** Self-check for the Search Console selectors: npx tsx scripts/check-search-console.ts */
import assert from 'node:assert/strict'
import { lowCtrPages, positionOpportunities, searchWindows, type GscRow } from '../lib/search-console'

const row = (key: string, impressions: number, position: number, ctr = 0.01): GscRow => ({
  keys: [key],
  clicks: 0,
  impressions,
  ctr,
  position,
})

assert.deepEqual(
  positionOpportunities([row('top', 900, 3.9), row('a', 10, 4), row('b', 50, 20), row('far', 900, 20.1)]).map((r) => r.keys[0]),
  ['b', 'a'],
)
assert.deepEqual(
  lowCtrPages([row('few', 99, 5, 0), row('good', 500, 5, 0.05), row('bad', 500, 5, 0.001)], 0.01).map((r) => r.keys[0]),
  ['bad'],
)

const w = searchWindows(new Date('2026-11-10T12:00:00Z'))
assert.deepEqual(w, {
  current: { start: '2026-10-11', end: '2026-11-07' },
  previous: { start: '2026-09-13', end: '2026-10-10' },
})
console.log('search console checks passed')
