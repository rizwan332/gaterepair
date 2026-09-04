# Shield Gate Repair — Google Ads landing page

A single self-contained page for paid traffic. **Nothing in this folder is part
of the main website** and nothing outside this folder was touched to build it.

```
calltoaction-landing-page/
  index.html        the whole page — markup, CSS and JS inline
  netlify.toml      cache headers for its own separate deploy
  assets/img/       hero, gallery, logos, video thumbnails
```

## Page structure

Announcement bar → sticky header → hero (photo, dual CTA, desktop trust card)
→ brand logo strip → stats band → problem/solution → 8 service cards →
**gate gallery** → why choose us → 3 steps → video testimonials → service areas
→ FAQ → final CTA + form → footer → sticky mobile call bar.

Ten `tel:` CTAs, spaced so one is always within reach on a phone.

## Why it is one file

No build step, no framework, no webfont, no CSS request, no JS library.

The CSS is inline because an external stylesheet is render-blocking — on the
main site that audit is worth 420 ms. The FAQ accordion is `<details>`, so it
costs no JavaScript. Total first-party JS is about 90 lines: tracking, the
form, and one `IntersectionObserver` for scroll reveals.

The header is opaque rather than translucent-with-`backdrop-filter`. Removing
exactly that from the main site took LCP from 8.5 s to 2.4 s, and there was no
reason to reintroduce it here.

Ads traffic is expensive per click. Every 100 ms of load time is paid for
twice — once to Google, once in the visitors who leave before it paints.

## Deploying

Deploy as a **separate Netlify site**, not into the main one:

| Setting | Value |
|---|---|
| Base directory | `calltoaction-landing-page` |
| Publish directory | `calltoaction-landing-page` |
| Build command | *(leave empty)* |

Then point a subdomain at it — `go.shieldgaterepair.com` or similar — and set
that as the Final URL in Google Ads.

⚠️ **Do not deploy this into the main site's `public/` folder.** That would put
it inside the Next.js build and make it part of the website, which is the one
thing the brief rules out.

### After deploying, update the canonical

`index.html` has:

```html
<link rel="canonical" href="https://shieldgaterepair.com/lp/gate-repair-dfw/">
```

Change it to wherever the page actually lives. A canonical pointing at a URL
that does not serve the page is exactly the fault that cost the main site 102
indexed pages — see the note on `business.url` in `content/business.ts`.

**To keep the page out of Google entirely** — a reasonable choice, since a
second gate-repair page on the same brand can compete with the main site —
replace the robots meta with:

```html
<meta name="robots" content="noindex,follow">
```

Ads serve fine on a noindexed page. I left it indexable because the brief asked
for it to be SEO-friendly; the call is yours.

## The form

Uses **Netlify Forms** — no backend to run. Submissions appear under *Forms* in
the Netlify dashboard for whichever site this deploys to.

- `data-netlify="true"` and the hidden `form-name` input are what Netlify's
  deploy step detects.
- The JS posts the same encoding by `fetch`, so the visitor stays on the page
  and sees the success state instead of being navigated away.
- A honeypot field (`company`) catches the cheapest bots.

**Turn on form notifications** so leads reach a human:
Site settings → Forms → Form notifications → send to `office@shieldgaterepair.com`.

Hosting elsewhere? Change one constant: `var ENDPOINT = '/'`.

## Conversion tracking

The page loads the real container, **GTM-MBBT87D8** — the same one the main
site uses — and pushes exactly the events the corrected container triggers on:

| Event | Fires when |
|---|---|
| `call_click` | any `tel:` link — all ten of them |
| `sms_click` | any `sms:` link |
| `quote_click` | a "Get a Quote" button that scrolls to the form |
| `generate_lead` | the form submission **succeeded** |

**`generate_lead` fires on success, not on click.** Counting attempts as leads
inflates the conversion data that Ads bidding runs on.

**One delegated listener**, not a handler per button, so a CTA added later is
tracked automatically with nothing to keep in sync.

### ⚠️ This records nothing until the container is fixed

`GTM-AUDIT.md` in the repo root documents it in full: every conversion tag in
the live container is currently dead. The phone trigger still watches for
`tel:+18007709642`, a number the business stopped using on 3 Aug 2026, and the
form trigger waits on `gtm.formSubmit`, which a JavaScript form never emits.

The fixed container is already generated — `GTM-MBBT87D8-modernized.json` — and
its triggers are `call_click` and `generate_lead`, which is why this page
pushes those names. **Import it before spending on ads**, or this page will
convert and record nothing.

## About the imagery

**The gallery shows gate *types*, not "our recent DFW jobs" — and that wording
matters.**

`content/alt-text.ts` records that the photo library is Southern California
work: spot-checking it found palm trees, Spanish tile roofs, coastal live oaks
and a Santa Monica security-patrol sign. Captioning those as Dallas–Fort Worth
would be false. So the captions name the equipment ("Cantilever & industrial",
"Barrier arms") and the alt text is copied verbatim from that file, which was
written specifically to describe what is in frame without a geographic claim.

The **hero** is the exception and is safe: `homepage-04` was chosen by the
client as the one image that is unambiguously DFW — Texas brick house, US flag,
real driveway gate.

If you swap the hero, the `<link rel="preload">` and the `<picture>` srcset
must match **character for character**, or the browser downloads it twice.

## What is deliberately absent

No star rating, no review count, no licence number, no warranty term, no
"30–60 minute response", no "authorized dealer", no customer total, no
satisfaction percentage. None of those has been confirmed by the client.

A fabricated rating breaches both the FTC rule on endorsements (16 CFR Part
465) and Google Ads misrepresentation policy — the fastest way to get an
account suspended. The competitor page you shared leans on "3,000+ Happy
Customers" and "97% Satisfaction Rate"; we cannot copy those without the
figures behind them.

The testimonials are the client's own YouTube videos with **no names and no
quotes attached**, matching the main site. Nobody here has transcribed them or
has permission to name the people on camera. The customer being visibly on
camera is stronger than a caption anyway.

### The four stat numbers are all checkable

| Stat | Source |
|---|---|
| 16+ years | `business.yearsInBusiness` — confirmed, client's own About copy |
| 24/7 | `business.availability` — confirmed |
| 190 cities | `content/cities.ts` |
| 17 operator brands | `content/brands.ts` |

The logo strip says **"Brands we service"** and never "authorized dealer" —
`business.authorizedDealer` is unconfirmed, and claiming a dealer agreement
that does not exist is a trademark problem on top of an Ads one.

### On the city list

The fourteen cities are the client's own Tier-1 list, copied from
`content/cities.ts`. **Do not add cities on the reasoning that we probably
cover them.** Fort Worth was added that way once, is not on the client's list,
and the main repo now runs a CI guard specifically to stop it recurring.
"Dallas–Fort Worth" on this page is the name of the metro area, not a claim to
serve the city of Fort Worth.
