/**
 * Brand × city pages: which ones exist, computed rather than declared.
 *
 * The gate from BRAND-CITY-ARCHITECTURE.md §4, in code, so a content entry
 * alone cannot create a page:
 *  - the city page is already indexed;
 *  - at least one verified job on that brand in that city, with its own
 *    photographs (the first-party proof the page exists to show). Lowered
 *    from two on 31 Oct 2026 at the client's request, for a pilot of the
 *    pairs we have real work for;
 *  - copy written for the pair in content/brand-city.ts.
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

export type BrandCityPage = { city: City; brand: Brand; jobs: Project[]; copy: BrandCityCopy }

export const MIN_BRAND_CITY_JOBS = 1

export const brandCityJobs = (city: City, brand: Brand) =>
  projects.filter(
    (p) => p.verified && p.photoSet && p.citySlug === city.slug && p.brand?.toLowerCase() === brand.name.toLowerCase(),
  )

export const brandCityPages: BrandCityPage[] = Object.entries(brandCityCopy).flatMap(([key, copy]) => {
  const [citySlug, brandSlug] = key.split('/')
  const city = indexedCities.find((c) => c.slug === citySlug)
  const brand = brands.find((b) => b.slug === brandSlug)
  if (!city || !brand) return []
  const jobs = brandCityJobs(city, brand)
  return jobs.length >= MIN_BRAND_CITY_JOBS ? [{ city, brand, jobs, copy }] : []
})

export const brandCityPath = (p: { city: { slug: string }; brand: { slug: string } }) =>
  `/gate-repair-${p.city.slug}-tx/${p.brand.slug}`

export const brandCityPageFor = (citySlug: string, brandSlug: string) =>
  brandCityPages.find((p) => p.city.slug === citySlug && p.brand.slug === brandSlug)
