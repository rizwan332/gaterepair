/**
 * Copy for the client's 20 priority cities, written 2 Nov 2026: the brand
 * pages their profiles did not already cover (lib/brand-city.ts PRIORITY_BRANDS)
 * and the 15 service pages per city (lib/service-city.ts). Plano was written
 * first, by hand, in content/service-city.ts and brand-city-areas/group-3.ts.
 *
 * Keys are `<city>/<brand>` or `<city>/<service>`; services all end in
 * -repair or -installation, brand slugs never do.
 */

import type { BrandCityCopy } from '../brand-city'
import g1 from './group-1'
import g2 from './group-2'
import g3 from './group-3'
import g4 from './group-4'
import g5 from './group-5'
import g6 from './group-6'
import g7 from './group-7'
import g8 from './group-8'

const all: Record<string, BrandCityCopy & { description: string }> = { ...g1, ...g2, ...g3, ...g4, ...g5, ...g6, ...g7, ...g8 }
const isService = (key: string) => /-(repair|installation)$/.test(key)

export const priorityBrandCopy = Object.fromEntries(Object.entries(all).filter(([k]) => !isService(k)))
export const priorityServiceCopy = Object.fromEntries(Object.entries(all).filter(([k]) => isService(k)))
