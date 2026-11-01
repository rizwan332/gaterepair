/**
 * Copy for the area brand × city pages: one per brand a city's profile lists
 * in `gateProfile.commonBrands`, written 1 Nov 2026 at the client's request.
 *
 * Unlike content/brand-city.ts these cite no local job, so they never claim
 * one; the page shows the nearest documented jobs on the brand with their real
 * city instead. scripts/validate-linking.ts rejects any 20-word run they share
 * with another page.
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

export const brandCityAreaCopy: Record<string, BrandCityCopy> = { ...g1, ...g2, ...g3, ...g4, ...g5, ...g6, ...g7, ...g8 }
