/**
 * Brand × city pages: which ones exist, computed rather than declared.
 *
 * Two kinds, both needing written copy and an indexed city:
 *  - proof pages (content/brand-city.ts): at least one verified job on that
 *    brand in that city, with its own photographs. The gate from
 *    BRAND-CITY-ARCHITECTURE.md §4, lowered from two jobs to one on 31 Oct 2026
 *    at the client's request;
 *  - area pages (content/brand-city-areas): the brand is one the city's
 *    profile lists in `gateProfile.commonBrands`. Added 1 Nov 2026 at the
 *    client's request for a page per relevant brand in every city. They cite
 *    no local job; the route shows the nearest documented ones instead.
 * Proof copy wins where a pair has both.
 *
 * shortcut: §4's measured-demand rule is not checked, because Search Console
 * is not connected yet. Once it is, check each page's 90-day impressions and
 * 301 any page with none into its city page.
 *
 * Relative imports: the validators load this under plain tsx.
 */

import { projects, type Project } from '../content/projects'
import { brands, type Brand } from '../content/brands'
import { indexedCities, type City } from '../content/cities'
import { brandCityCopy, type BrandCityCopy } from '../content/brand-city'
import { brandCityAreaCopy } from '../content/brand-city-areas'

export type BrandCityPage = { city: City; brand: Brand; jobs: Project[]; copy: BrandCityCopy }

export const MIN_BRAND_CITY_JOBS = 1

export const brandCityJobs = (city: City, brand: Brand) =>
  projects.filter(
    (p) => p.verified && p.photoSet && p.citySlug === city.slug && p.brand?.toLowerCase() === brand.name.toLowerCase(),
  )

/** The city profile names this brand as one used on its gates. */
export const isRelevantBrand = (city: City, brand: Brand) =>
  (city.gateProfile?.commonBrands ?? []).some((n) => n.toLowerCase() === brand.name.toLowerCase())

const allCopy: Record<string, BrandCityCopy> = { ...brandCityAreaCopy, ...brandCityCopy }

export const brandCityPages: BrandCityPage[] = Object.entries(allCopy).flatMap(([key, copy]) => {
  const [citySlug, brandSlug] = key.split('/')
  const city = indexedCities.find((c) => c.slug === citySlug)
  const brand = brands.find((b) => b.slug === brandSlug)
  if (!city || !brand) return []
  const jobs = brandCityJobs(city, brand)
  const proven = key in brandCityCopy && jobs.length >= MIN_BRAND_CITY_JOBS
  return proven || (key in brandCityAreaCopy && isRelevantBrand(city, brand)) ? [{ city, brand, jobs, copy }] : []
})

// URL words per brand where the slug alone is not what people search ("nice apollo gate repair").
const URL_BRAND: Record<string, string> = { apollo: 'nice-apollo' }

/** Flat, e.g. /liftmaster-gate-repair-plano-tx, the client's URL scheme (2 Nov 2026). The old nested URLs 301 here. */
export const brandCityPath = (p: { city: { slug: string }; brand: { slug: string } }) =>
  `/${URL_BRAND[p.brand.slug] ?? p.brand.slug}-gate-repair-${p.city.slug}-tx`

const bySlug = new Map(brandCityPages.map((p) => [`${p.city.slug}/${p.brand.slug}`, p]))
const bySegment = new Map(brandCityPages.map((p) => [brandCityPath(p).slice(1), p]))

export const brandCityPageFor = (citySlug: string, brandSlug: string) => bySlug.get(`${citySlug}/${brandSlug}`)

/** The page for a top-level URL segment such as `liftmaster-gate-repair-plano-tx`. */
export const brandCityPageForSegment = (segment: string) => bySegment.get(segment)

export const brandCityPagesForCity = (citySlug: string) => brandCityPages.filter((p) => p.city.slug === citySlug)
