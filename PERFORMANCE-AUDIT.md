# Mobile Performance Audit — production, 31 August 2026

**Target** — `https://shieldgaterepair.com/` (homepage, mobile)
**Method** — Lighthouse 12, mobile form factor, simulated throttling, headless Chrome,
run against the live production site. Plus direct measurement of every transferred
asset over the wire with Brotli negotiated.
**Status** — **audit only. No source file was modified.**

---

## Two things to read before the numbers

### 1. Production is already running the `seo-audit-remediation` branch

`main` is at `757d3c7`. The live site is not. Confirmed from the served HTML:

| Signal | Live value | Comes from |
|---|---|---|
| `<title>` | `Gate Repair Dallas–Fort Worth \| Same-Day, Open 24/7` | commit `bd762ef` |
| `<h1>` | `Automatic Gate Repair in Dallas–Fort Worth` | commit `bd762ef` |
| `<body class>` | includes `pb-[calc(3.5rem+env(safe-area-inset-bottom))]` | commit `d97beb9` |
| Header logo | plain `<img>`, not `next/image` | commit `d97beb9` |
| Elements at `opacity:0` | 0 | commit `d97beb9` |
| `data-reveal` elements | 42 | commit `d97beb9` |

So the three commits pushed on 28 Aug are live, and the ~35 KB of JavaScript removed
with `framer-motion` is **already reflected** in the numbers below.

This also means the brief's "do not change titles / H1 / schema" instruction arrives
*after* those were deliberately changed and deployed, with sign-off, in the SEO
remediation work. Nothing in this performance audit proposes touching them again —
but they are not what they were a week ago, and that should be a known fact rather
than a surprise.

### 2. The measured score is 44, not 64

| | Score |
|---|---|
| Quoted in the brief | 64 |
| Measured today, Lighthouse mobile, production | **44** |

The gap is not explained. Plausible causes, in order of likelihood: the 64 was measured
on desktop or on a different URL; it was measured on a warm/unthrottled run; or it
predates a change in what the tag container loads. PageSpeed Insights' own unkeyed API
quota is exhausted, so I could not cross-check against Google's servers today.

**Recommend:** re-run PSI mobile on `https://shieldgaterepair.com/` and confirm which
number is real before treating 64 → 90 as the goal. The work below is worth doing
either way; the baseline just needs to be honest.

---

## Measured baseline

### Core Web Vitals and lab metrics

| Metric | Measured | Target | Verdict |
|---|---:|---:|---|
| **LCP** | **6.1 s** | ≤ 2.5 s | ✗ **critical** |
| **TBT** | **3,140 ms** | ≤ 200 ms | ✗ **critical** |
| FCP | 2.3 s | ≤ 1.8 s | ✗ poor |
| Speed Index | 4.2 s | ≤ 3.4 s | ✗ poor |
| TTI | 11.3 s | — | ✗ poor |
| **CLS** | **0** | ≤ 0.1 | ✓ **perfect** |
| TTFB | ~100 ms | ≤ 800 ms | ✓ excellent |

CLS at exactly 0 and a 100 ms TTFB are both genuinely good and should not be traded
away for anything below.

### Page weight — 1,463 KiB across 46 requests

| Type | Requests | Transfer |
|---|---:|---:|
| **Script** | 17 | **668 KB** |
| **Image** | 17 | **662 KB** |
| Font | 2 | 71 KB |
| Document (HTML) | 1 | 43.5 KB |
| Other | 8 | 41.6 KB |
| Stylesheet | 1 | 12.2 KB |
| — of which **third-party** | **17** | **614 KB** |

First-party JavaScript measured directly over the wire is only **172 KB Brotli across
13 files**. The remaining ~496 KB of script is the Google tag stack.

---

## Root causes, ranked by cost

### R-01 · The Google tag stack costs 2.6 s of blocking time — 83% of TBT

| Entity | Transfer | Blocking | Main thread |
|---|---:|---:|---:|
| **Google Tag Manager** | **496,753 B** | **2,614 ms** | **2,937 ms** |
| Google/Doubleclick Ads | 3,572 B | 6 ms | 63 ms |
| YouTube | 111,537 B | 0 ms | 0 ms |
| Google Analytics | 552 B | 0 ms | 0 ms |

Script evaluation, worst offenders:

```
1,397 ms   gtag/js?id=G-BFR37L657V      (GA4)
  992 ms   gtag/js?id=AW-18000649811    (Google Ads)
  549 ms   gtm.js?id=GTM-MBBT87D8       (container)
  890 ms   /_next/static/chunks/517-*.js  (first-party — React/Next runtime)
```

Total main-thread work is 3,787 ms of script evaluation. **The tag stack is roughly
three-quarters of it.** No first-party optimisation can move TBT meaningfully while
this is loading the way it does.

**This is locked by the brief**, and correctly so — attribution is worth more than a
Lighthouse number. Options are set out under "Needs your decision" below. I am not
touching it unilaterally.

### R-02 · The asset CDN is built, paid for, and switched off in production

The LCP element is the hero photograph:

```
<img src="https://shieldgaterepair.com/images/homepage/homepage-04-800.avif" …>
        ^^^^^^^^^^^^^^^^^^^^^^^^^^ origin, not CloudFront
```

`lib/cdn.ts`, `scripts/sync-cdn.sh`, `npm run verify:cdn` and a CloudFront
distribution (`d7t2eyla4jb9a.cloudfront.net`, recorded in `.env.example`) all exist.
**`NEXT_PUBLIC_CDN_URL` is not set in the Netlify production environment**, so
`cdn()` falls through to local `/images` paths and every image is served from the
Netlify origin.

Consequence, from the LCP phase breakdown:

| Phase | Time |
|---|---:|
| TTFB | 909 ms |
| Load Delay | 575 ms |
| **Load Time** | **4,087 ms** |
| Render Delay | 500 ms |

4,087 ms to load a 135 KB image. It is not the file size — it is that the image is
queued behind ~500 KB of tag-stack JavaScript on a throttled connection, from an
origin that is not a CDN, with no separate connection to parallelise on.

**This is the single highest-value, lowest-risk fix available.** It is an environment
variable. It changes no markup, no URL, no tag, no design. The preconnect for the CDN
origin is already in `app/layout.tsx` and currently does nothing because the variable
is empty.

### R-03 · 662 KB of images across 17 requests

Lighthouse flags 210 ms recoverable from "properly size images". The hero alone is
135 KB at the 800w AVIF variant. The YouTube facade thumbnails account for 111 KB —
those are below the fold and cost 0 ms blocking, so they are a bandwidth item, not a
latency one.

### R-04 · 424 KB of HTML, 1,461 DOM elements, 2,187 ms in Style & Layout

The document is 424 KB raw / 43.5 KB Brotli. Transfer is fine; **parse and layout are
not**. Composition:

| Part | Size | Note |
|---|---:|---|
| RSC flight payload (`self.__next_f`) | **200 KB** | the serialised server tree, inherent to App Router |
| `class` attributes | 85 KB | 1,015 Tailwind class strings |
| Inline `<svg>` | 43.6 KB | **117 icons, many repeated** |
| JSON-LD | 25 KB | **serialised twice** — once as `ld+json`, once inside the flight payload |
| `srcset` attributes | 15 KB | 71 of them |

DOM size (1,461 elements) is under Lighthouse's 1,500 warning threshold, so it passes —
but 2,187 ms of Style & Layout on a page with zero layout shift points at sheer volume.

### R-05 · 71 KB of fonts, both preloaded

Two `woff2` files (48.4 KB + 22.3 KB), both `<link rel=preload>`. Space Grotesk is
requested at three weights (500/600/700); Inter is a variable font. `display: swap` is
set correctly and self-hosting via `next/font` is already right — so text never blocks.
This is a bandwidth item competing with the LCP image, not a render-blocking one.

### Checked and found correct — no action

| Area | Finding |
|---|---|
| Brotli compression | On. HTML 424 KB → 42.9 KB (10.1%) |
| Static asset caching | `public, max-age=31536000, immutable` on `/_next/static` ✓ |
| HTML caching | `public, max-age=0, must-revalidate` ✓ correct for HTML |
| TTFB | ~100 ms, Netlify durable edge cache hit ✓ |
| CLS | 0 — width/height and `aspect-ratio` set throughout ✓ |
| `polyfills.js` (38 KB) | carries `noModule` — modern browsers never download it ✓ |
| Font loading | self-hosted, `display: swap`, preloaded ✓ |
| Video | poster-first facades; zero video bytes until click ✓ |
| Image formats | AVIF + WebP with full `srcset`/`sizes` ✓ |
| Server response | "Initial server response time was short" ✓ |

---

## Plan

### Tier 1 — no risk to design, SEO, URLs or tracking

| # | Action | Expected | Owner |
|---|---|---|---|
| 1 | **Set `NEXT_PUBLIC_CDN_URL` in Netlify** and redeploy | **LCP −1.5 to −3 s** | **You** (Netlify UI) |
| 2 | Verify CDN objects are current — `npm run verify:cdn` | correctness | Me |
| 3 | Lazy-load YouTube facade thumbnails (below fold) | −111 KB | Me |
| 4 | Drop unused Space Grotesk weights after auditing real usage | −10 to −20 KB | Me |
| 5 | Deduplicate the 117 inline SVG icons into a sprite | −25 to −35 KB HTML, less parse | Me |
| 6 | Stop double-serialising JSON-LD into the flight payload | −13 KB HTML | Me |

None of these touch a tag, a URL, a heading, a canonical, or a pixel of design.

### Tier 2 — needs your decision

| # | Option | Gain | Risk |
|---|---|---|---|
| 7 | **Delay GTM until first interaction or ~3 s** | **TBT −2.6 s**, score +25–35 | **Loses pageview attribution on bounced sessions.** Ads conversions still fire on click/submit. |
| 8 | Load GA4 and Ads gtag via GTM's own consent/trigger timing instead of on container load | TBT −1 to −2 s | Requires GTM container changes — locked by the brief |
| 9 | Split the homepage: defer below-fold sections | Style & Layout −1 s | Content must stay server-rendered for SEO; needs care |

**My recommendation on #7: do not do it.** Your brief says tracking accuracy beats
PageSpeed score, and I agree — a 44 → 75 score is not worth uncertainty in Ads
attribution while campaigns are live. The honest position is that **this site cannot
reach 90 on mobile while the tag stack loads as it does**, and that is a defensible
business trade, not a failure.

If you want the score anyway, #8 is the safer half of it — but it is a GTM container
change, which the brief locks, so it needs you or your Ads person in the GTM UI, not me
in the codebase.

### Realistic outcome

| Scope | Expected mobile score |
|---|---|
| Today | 44 |
| Tier 1 only | **60–70** (LCP ~2.5–3 s, TBT unchanged at ~3 s) |
| Tier 1 + #7 | 80–90 (TBT ~400 ms) — at the attribution cost above |

Tier 1 fixes LCP. Only Tier 2 fixes TBT. That is the whole shape of it.

---

## Before / after

Filled in after Tier 1 ships. Every "before" figure below is measured, not estimated.

| Metric | Before | After | Improvement |
|---|---:|---:|---:|
| PageSpeed Mobile (measured) | 44 | — | — |
| PageSpeed Mobile (per brief) | 64 | — | — |
| LCP | 6.1 s | — | — |
| FCP | 2.3 s | — | — |
| CLS | 0 | — | — |
| TBT | 3,140 ms | — | — |
| TTFB | ~100 ms | — | — |
| Speed Index | 4.2 s | — | — |
| Total page size | 1,463 KiB | — | — |
| Requests | 46 | — | — |
| JS size | 668 KB (172 KB first-party) | — | — |
| CSS size | 12.2 KB | — | — |
| Image size | 662 KB | — | — |
| Font size | 71 KB | — | — |
| Third-party size | 614 KB | — | — |

---

## Regression tests to run before any deploy

Nothing here has been changed yet, so nothing needs re-testing today. When Tier 1
ships, the gates are:

**SEO** — `<title>`, meta description, canonical, H1, H2/H3, JSON-LD, robots, sitemap,
alt attributes, internal links: byte-identical before vs after. `npm run check:links`
clean across all 259 pages.

**Tracking** — GTM container ID `GTM-MBBT87D8`, GA4 `G-BFR37L657V`, Ads
`AW-18000649811` unchanged. Both triggers are `CUSTOM_EVENT` on `call_click` and
`generate_lead`, so neither depends on selectors or link text. Verify in Tag Assistant:
container loads, both tags fire, phone click fires `call_click`, form submit fires
`generate_lead`.

**Design** — header, nav, hero, buttons, forms, footer, responsive behaviour identical
at 375 px, 768 px, 1280 px.

**URLs** — no route, slug, redirect or canonical altered. `next.config.ts` redirect map
untouched.
