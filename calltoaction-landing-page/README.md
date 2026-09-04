# Shield Gate Repair — Google Ads landing page

A single self-contained page for paid traffic. **Nothing in this folder is part
of the main website** and nothing outside this folder was touched to build it.

```
calltoaction-landing-page/
  index.html        the whole page — markup, CSS and JS inline
  netlify.toml      cache headers for its own separate deploy
  assets/img/       hero and technician photos, logo, video thumbnails
```

## Why it is one file

No build step, no framework, no webfont, no CSS request, no JS library.

The CSS is inline because an external stylesheet is render-blocking — on the
main site that audit is worth 420 ms. The FAQ accordion is `<details>`, so it
costs no JavaScript at all. Total first-party JavaScript on this page is about
60 lines: tracking and the form.

Ads traffic is expensive per click. Every 100 ms of load time on it is paid for
twice — once to Google, once in the visitors who leave before the page paints.

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

**If you would rather the page stayed out of Google entirely** — a reasonable
choice, since a second gate-repair page on the same brand can compete with the
main site — replace the robots meta with:

```html
<meta name="robots" content="noindex,follow">
```

Ads serve fine on a noindexed page. That decision is yours; I left it
indexable because the brief asked for it to be SEO-friendly.

## The form

Uses **Netlify Forms** — no backend to run. Submissions appear under
*Forms* in the Netlify dashboard for whichever site this deploys to.

- `data-netlify="true"` and the hidden `form-name` input are what Netlify's
  deploy step detects.
- The JS posts the same encoding by `fetch`, so the visitor stays on the page
  and sees the success state instead of being navigated away.
- A honeypot field (`company`) catches the cheapest bots.

**Turn on form notifications** so leads reach a human:
Site settings → Forms → Form notifications → add an email to
`office@shieldgaterepair.com`.

Hosting this somewhere other than Netlify? Change one constant:

```js
var ENDPOINT = '/';   // point at your own handler
```

## Conversion tracking

The page loads the real container, **GTM-MBBT87D8** — the same one the main
site uses. It pushes exactly the events the corrected container triggers on:

| Event | Fires when |
|---|---|
| `call_click` | any `tel:` link — header, hero, problem section, steps, final CTA, sticky bar, footer |
| `sms_click` | any `sms:` link |
| `quote_click` | a "Get a Quote" button that scrolls to the form |
| `generate_lead` | the form submission **succeeded** |

Two things worth knowing:

**`generate_lead` fires on success, not on click.** Counting attempts as leads
inflates the conversion data that Ads bidding runs on.

**One delegated listener**, not a handler per button, so a CTA added later is
tracked automatically with nothing to keep in sync.

### ⚠️ This will not record anything until the container is fixed

`GTM-AUDIT.md` in the repo root documents it in full: every conversion tag in
the live container is currently dead. The phone trigger still watches for
`tel:+18007709642`, a number the business stopped using on 3 Aug 2026, and the
form trigger waits on `gtm.formSubmit`, which a JavaScript form never emits.

The fixed container is already generated — `GTM-MBBT87D8-modernized.json` —
and its triggers are `call_click` and `generate_lead`, which is why this page
pushes those two names. **Import it before spending on ads**, or this page will
convert and record nothing.

## What is deliberately absent

No star rating, no review count, no licence number, no warranty term, no
"30–60 minute response", no "authorized dealer". None of those has been
confirmed by the client, and a fabricated rating breaches both the FTC rule on
endorsements (16 CFR Part 465) and Google Ads misrepresentation policy.

The testimonials are the client's own YouTube videos with **no names and no
quotes attached**, matching the main site. Nobody here has transcribed them or
has permission to name the people on camera, and putting an invented name to a
real identifiable face is precisely what that FTC rule covers. The customer
being visibly on camera is stronger than a caption anyway.

Everything the page does claim is confirmed in `content/business.ts`:
16+ years, open 24/7, licensed and insured, the nine operator brands, and the
fourteen Tier-1 cities.

### On the city list

The fourteen cities are the client's own Tier-1 list, copied from
`content/cities.ts`. **Do not add cities on the reasoning that we probably
cover them.** Fort Worth was added that way once, is not on the client's list,
and the main repo now runs a CI guard specifically to stop it happening again.
"Dallas–Fort Worth" on this page is the name of the metro area, not a claim to
serve the city of Fort Worth.

## Changing the images

The photos are copied from `public/images/homepage/` in the main repo —
`homepage-04` (Texas brick house, US flag, driveway gate) as the hero, and
`homepage-03` (technician mid-repair on an All-O-Matic controller) available as
`tech-*` if you want it in a section.

If you swap the hero, the `<link rel="preload">` in `<head>` and the
`<picture>` srcset must match **character for character**. A preload that
disagrees with the rendered source makes the browser download the image twice.
