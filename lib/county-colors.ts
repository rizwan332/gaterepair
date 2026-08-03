/**
 * Colour assignment for the coverage map, one hue per county.
 *
 * Twelve categorical hues, ordered so that adjacent entries are far apart in
 * hue — counties that touch geographically get visibly different colours
 * without needing a real graph-colouring pass.
 *
 * All twelve clear 3:1 against the light basemap, and each pin is drawn with a
 * white ring so it stays separable where pins overlap in the dense middle of
 * the metroplex. Colour is never the only signal: every pin also carries its
 * city name in the popup and in the accessible label, because roughly 1 in 12
 * men cannot reliably separate the red and green ends of a categorical ramp.
 */

export const COUNTY_PALETTE = [
  '#2563eb', // blue
  '#e11d48', // rose
  '#059669', // emerald
  '#d97706', // amber
  '#7c3aed', // violet
  '#0891b2', // cyan
  '#c2410c', // orange
  '#4d7c0f', // olive
  '#be185d', // pink
  '#1d4ed8', // indigo
  '#0f766e', // teal
  '#a16207', // bronze
] as const

/** Counties with only a handful of cities share this, to keep the legend short. */
export const OTHER_COLOR = '#64748b'

/**
 * Stable colour per county.
 *
 * Sorted by city count then name so the mapping does not shuffle when a city is
 * added — a legend that reassigns colours between deploys is worse than no
 * legend, because anyone who learned it once is now reading it wrong.
 */
export function buildCountyColors(
  counts: Record<string, number>,
  maxNamed = COUNTY_PALETTE.length,
): { colors: Record<string, string>; named: string[]; otherCount: number } {
  const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b))
  const named = sorted.slice(0, maxNamed)
  const colors: Record<string, string> = {}

  named.forEach((county, i) => {
    colors[county] = COUNTY_PALETTE[i % COUNTY_PALETTE.length]
  })
  for (const county of sorted.slice(maxNamed)) colors[county] = OTHER_COLOR

  return {
    colors,
    named,
    otherCount: sorted.slice(maxNamed).reduce((n, c) => n + counts[c], 0),
  }
}
