/**
 * Builds public/dfw-gate-repair.html, the Google Ads landing page.
 *
 *   npm run ads-landing        (also runs automatically before `next build`)
 *
 * ── WHY A STATIC PAGE ───────────────────────────────────────────────────────
 * The site owner wants a 100 mobile PageSpeed score on the Ads page (26 Oct
 * 2026). As a Next.js route it topped out around 80: the page waited ~1 s on
 * React's style/layout and hydration before it painted. The plain-HTML ad page
 * (/samedaygaterepair) painted three times faster. So this page is plain HTML,
 * with a small inline script and no framework, served by the rewrite in
 * netlify.toml exactly as /samedaygaterepair is.
 *
 * ── WHY GENERATED, NOT HAND-WRITTEN ─────────────────────────────────────────
 * Everything on it comes from the same modules the rest of the site uses:
 * phone number and facts (content/business.ts), services and their photos,
 * the videos, the cities, and attribution (lib/attribution.ts, bundled into
 * the page script). Change any of those and the next build updates this page
 * too, so it cannot drift from the site.
 *
 * Edit the layout and copy HERE. The output file is overwritten every build.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { buildSync } from 'esbuild'
import { business } from '../content/business'
import { fact } from '../lib/business'
import { services } from '../content/services'
import { serviceJobPhoto } from '../content/service-photos'
import { publishedTestimonials, thumbnailFor } from '../content/testimonials'
import { tier1Cities } from '../content/cities'
import { organizationSchema } from '../lib/schema'
import { cdn } from '../lib/cdn'
import type { MediaImage } from '../content/media-manifest'

const ROOT = process.cwd()
const PATH = '/dfw-gate-repair'
const URL_ = `https://shieldgaterepair.com${PATH}`
const OUT = path.join(ROOT, 'public', 'dfw-gate-repair.html')

const TITLE = 'Gate Not Working? 24/7 Gate Repair in DFW | Call Now'
const DESCRIPTION =
  'Professional gate repair across Dallas–Fort Worth. No service call fee, licensed and insured, 16+ years. Call or text for fast service.'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const phone = business.phone
const smsHref = `sms:${phone.href.replace('tel:', '')}`

// ── Icons (lucide paths, inline) ──────────────────────────────────────────
const icon = (body: string, cls = 'i', fill = false) =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`
const I = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
}

// ── Pieces ─────────────────────────────────────────────────────────────────
function picture(image: MediaImage, sizes: string, alt: string) {
  const set = (ext: string) => image.widths.map((w) => `${cdn(`${image.src}-${w}.${ext}`)} ${w}w`).join(', ')
  const last = image.widths[image.widths.length - 1]
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="${sizes}"><source type="image/webp" srcset="${set('webp')}" sizes="${sizes}"><img src="${cdn(`${image.src}-${last}.webp`)}" alt="${esc(alt)}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async"></picture>`
}

function callButton(label: string, cls = 'btn btn-gold') {
  return `<a class="${cls}" href="${phone.href}">${icon(I.phone)}${label}</a>`
}

const noFee = fact(business.noServiceCallFee)
const trust: [string, string][] = [
  ...(noFee ? ([['No Service', 'Call Fee']] as [string, string][]) : []),
  ['Licensed &amp;', 'Insured'],
  ['All Major', 'Gate Brands'],
]

const heroArt = readFileSync(path.join(ROOT, 'public/images/hero/gate-dusk.svg'), 'utf8').replace(/<!--[\s\S]*?-->/g, '')

// Eight videos: the owner's five first (content/testimonials.ts), then three.
// The first two are on screen on a phone, so they load straight away through
// the site's own image optimiser (same origin, AVIF).
const videos = publishedTestimonials.slice(0, 8)
const videoCards = videos
  .map((t, i) => {
    const thumb = thumbnailFor(t.youtubeId, t.isShort, true)
    const src = `/_next/image?url=${encodeURIComponent(thumb)}&w=640&q=70`
    const meta = [t.customerName && `<b>${esc(t.customerName)}</b>`, t.city && esc(t.city), t.brand && `<span class="chip">${esc(t.brand)}</span>`]
      .filter(Boolean)
      .join('')
    return `<li><button type="button" class="vid" data-yt="${t.youtubeId}" aria-label="Play video: ${esc(t.title)}"><img src="${src}" alt="" width="640" height="360" ${i < 2 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="shade"></span><span class="playbtn">${icon(I.play, 'i', true)}</span><span class="cap"><span class="t">${esc(t.title)}</span>${meta ? `<span class="m">${meta}</span>` : ''}</span></button></li>`
  })
  .join('')

const BRANDS: [string, string, number, number][] = [
  ['liftmaster', 'LiftMaster', 420, 73],
  ['us-automatic', 'US Automatic', 213, 120],
  ['faac', 'FAAC', 420, 110],
  ['viking', 'Viking', 194, 120],
  ['apollo', 'Nice Apollo', 238, 120],
  ['ramset', 'Ramset', 271, 120],
]
const brandItems = BRANDS.map(
  ([slug, name, w, h]) =>
    `<li><a href="/brands/${slug}" aria-label="${esc(name)} gate repair"><img src="/logos/${slug}.webp" alt="${esc(name)} gate operators" width="${w}" height="${h}" loading="lazy" decoding="async"></a></li>`,
).join('')

const serviceTiles = services
  .map((s) => {
    const img = serviceJobPhoto(s.slug)
    return `<li><div class="ph">${img ? picture(img, '(min-width: 768px) 20vw, 50vw', img.alt) : ''}</div><p>${esc(s.name)}</p></li>`
  })
  .join('')

const FAQS = [
  ['Can you help if I am locked in or out right now?', 'Yes. Call and a person answers 24/7. We can usually talk you through the manual release on the phone.'],
  ['Which gate brands do you repair?', 'LiftMaster, US Automatic, Nice Apollo, FAAC, Viking, Ramset, Elite, All-O-Matic and more, plus keypads, intercoms and sensors.'],
  ['Will I know the price before you start?', 'Yes. We diagnose first and give you the price before any work begins.'],
]
const faqItems = FAQS.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

const rating = fact(business.rating)

// GTM: waits for the first tap/key/scroll or 4 s after load (owner approved
// 26 Oct 2026). Same loader as app/layout.tsx, always in deferred mode here.
const gtm = business.gtmId
  ? `<script>(function(w,d,s,l,i){w[l]=w[l]||[];var done=0;function load(){if(done)return;done=1;w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);}w.__loadGtm=load;w.__gtmDeferred=1;['pointerdown','keydown','scroll','touchstart'].forEach(function(e){w.addEventListener(e,load,{once:true,passive:true})});w.addEventListener('load',function(){setTimeout(load,4000)});})(window,document,'script','dataLayer','${business.gtmId}');</script>`
  : ''
const gtmNoScript = business.gtmId
  ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${business.gtmId}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>`
  : ''

const clientJs = buildSync({
  entryPoints: [path.join(ROOT, 'scripts/ads-landing/client.ts')],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2019'],
  write: false,
}).outputFiles[0].text

const CSS = `
@font-face{font-family:"Archivo Black";src:url(/fonts/archivo-black-latin.woff2) format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:"Space Grotesk";src:url(/fonts/space-grotesk-700-latin.woff2) format("woff2");font-weight:700;font-display:swap}
:root{--ink50:#f7f7f8;--ink100:#ecedef;--ink200:#d8dade;--ink300:#b4b8bf;--ink500:#626873;--ink600:#464b54;--ink700:#32363d;--ink800:#212429;--ink900:#131519;--ink950:#08090b;--gold400:#f8c64d;--gold500:#f5b32a;--gold600:#d99a15;--gold700:#b47c10;--ok:#4ade80;--card:0 1px 2px rgb(8 9 11/.05),0 8px 24px -12px rgb(8 9 11/.16);--disp:"Space Grotesk",ui-sans-serif,system-ui,sans-serif}
*,*:before,*:after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;font:16px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink900);background:#fff;-webkit-font-smoothing:antialiased;padding-bottom:calc(3.5rem + env(safe-area-inset-bottom))}
img{max-width:100%;display:block}a{color:inherit}h1,h2,h3,p,ul{margin:0}ul{padding:0;list-style:none}
.wrap{max-width:80rem;margin:0 auto;padding:0 1rem}
.i{width:1.25rem;height:1.25rem;flex-shrink:0}
.strip{background:var(--ink900);color:#fff;font:600 .625rem/2.25rem var(--disp);letter-spacing:.03em;text-transform:uppercase;text-align:center;white-space:nowrap}
.hdr{background:#fff;border-bottom:1px solid var(--ink100)}.hdr .wrap{display:flex;align-items:center;justify-content:space-between;height:4rem}
.hdr img{height:2.25rem;width:auto}.hdr .call{display:inline-flex;align-items:center;gap:.5rem;height:2.75rem;padding:0 .9rem;border-radius:.75rem;background:var(--gold500);color:var(--ink950);font-weight:700;text-decoration:none}
.hdr .call span{display:none}
.hero{position:relative;isolation:isolate;overflow:hidden;background:var(--ink950);color:#fff}
.art{position:absolute;inset:0;z-index:-1}.art svg{width:100%;height:100%}
.art:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgb(8 9 11/.25) 0%,rgb(8 9 11/.45) 40%,rgb(8 9 11/.75) 75%,rgb(8 9 11/.9) 100%)}
.hero .in{max-width:48rem;margin:0 auto;padding:clamp(1.25rem,6vw,4rem) 1rem clamp(1.5rem,5vw,4rem)}
h1{font:400 clamp(1.7rem,7.6vw,3.6rem)/1.08 "Archivo Black",Impact,"Arial Black",sans-serif;text-align:center;text-shadow:0 2px 14px rgb(0 0 0/.55)}
.trust{margin-top:clamp(.9rem,3.6vw,2rem);display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(.4rem,2vw,1.5rem)}
.trust li{display:flex;align-items:center;gap:clamp(.35rem,1.6vw,.9rem);font-size:clamp(.8rem,3.3vw,1.4rem);font-weight:600;line-height:1.2}
.trust .i{width:clamp(1.3rem,5.4vw,3rem);height:clamp(1.3rem,5.4vw,3rem);color:var(--ok)}.trust b{display:block;font-weight:600}
.ctas{width:90%;max-width:28rem;margin:clamp(1rem,4vw,2.25rem) auto 0;display:flex;flex-direction:column;gap:.5rem}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.6rem;border-radius:.875rem;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:.025em;white-space:nowrap}
.btn-gold{background:var(--gold500);color:var(--ink950);height:clamp(3.25rem,10.5vw,4rem);font-size:clamp(.95rem,4.1vw,1.35rem);font-variant-numeric:tabular-nums;box-shadow:0 10px 30px -10px rgb(245 179 42/.7)}
.btn-gold:hover{background:var(--gold400)}
.btn-ghost{height:clamp(2.9rem,9.5vw,3.6rem);font-size:clamp(.9rem,3.9vw,1.25rem);color:#fff;background:rgb(255 255 255/.08);border:1px solid rgb(255 255 255/.22)}
.btn-gold .i,.btn-ghost .i{width:1.5rem;height:1.5rem}
.tag{margin-top:clamp(.75rem,3vw,1.5rem);text-align:center;font-size:clamp(.85rem,3.3vw,1.3rem);color:var(--ink100)}
.sec{padding:3.5rem 0}.tint{background:var(--ink50)}
.eyebrow{display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem;color:var(--gold600);font:700 .875rem/1 var(--disp);letter-spacing:.06em;text-transform:uppercase}.eyebrow .i{width:1rem;height:1rem}
h2{font:700 1.5rem/1.2 var(--disp);color:var(--ink950)}
.vids{padding:2rem 0 1rem}.vids .head{display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;margin-bottom:1rem}
.arrows{display:none;gap:.5rem}.arrows button{width:2.75rem;height:2.75rem;border-radius:999px;border:1px solid var(--ink200);background:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}
#rail{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -1rem;padding:0 1rem .5rem;scrollbar-width:none}#rail::-webkit-scrollbar{display:none}
#rail li{flex:0 0 64vw;scroll-snap-align:start}
.vid{position:relative;display:block;width:100%;aspect-ratio:16/9;padding:0;border:0;border-radius:1rem;overflow:hidden;background:var(--ink950);cursor:pointer;color:#fff;text-align:left;box-shadow:var(--card)}
.vid img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.85}
.shade{position:absolute;inset:0;background:linear-gradient(0deg,rgb(8 9 11/.9) 0%,rgb(8 9 11/.28) 58%,transparent 100%)}
.playbtn{position:absolute;left:50%;top:34%;transform:translate(-50%,-50%);width:2.75rem;height:2.75rem;border-radius:999px;background:var(--gold500);color:var(--ink950);display:flex;align-items:center;justify-content:center}.playbtn .i{width:1.2rem;height:1.2rem;margin-left:2px}
.cap{position:absolute;left:0;right:0;bottom:0;padding:.75rem}.cap .t{display:block;font:700 .875rem/1.2 var(--disp)}
.cap .m{display:flex;flex-wrap:wrap;gap:.25rem .6rem;margin-top:.35rem;font-size:.75rem;color:var(--ink300)}.cap b{color:#fff}
.chip{background:rgb(255 255 255/.1);border-radius:.25rem;padding:0 .35rem;color:var(--ink100);font-weight:600}
.yt-frame{width:100%;aspect-ratio:16/9;border:0;border-radius:1rem;display:block}
.brands{padding:.5rem 0 1.75rem;border-bottom:1px solid var(--ink100)}.brands h2{text-align:center;font-size:1.125rem;margin-bottom:1.25rem}
.brands ul{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;align-items:center}.brands li{display:flex;justify-content:center}
.brands a{padding:.25rem;opacity:.8}.brands a:hover{opacity:1}.brands img{height:2rem;width:auto;max-width:7rem;object-fit:contain}
.slogan{margin:.25rem 0 1.5rem;font:700 1.25rem/1.3 var(--disp);color:var(--gold700)}
.tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem}.tiles li{overflow:hidden;border-radius:.75rem;border:1px solid var(--ink100);background:#fff}
.ph{position:relative;aspect-ratio:4/3;background:var(--ink100)}.ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.tiles p{padding:.6rem .75rem;font-size:.8125rem;font-weight:600;line-height:1.35;color:var(--ink950)}
.callbig{margin-top:2rem;display:flex;width:100%;height:auto;padding:1rem;font-size:1.2rem;text-transform:none}
.est{display:grid;gap:2rem}.est .lead{margin-top:.5rem;color:var(--ink700)}
.form{border-radius:1rem;padding:1.25rem;background:#fff;box-shadow:var(--card);border:1px solid var(--ink100)}
.form label{display:block;margin-bottom:.4rem;font-size:.875rem;font-weight:500;color:var(--ink900)}.req{color:#dc2626;margin-left:.2rem}
.form input,.form textarea{width:100%;font:inherit;color:var(--ink950);background:#fff;border:1px solid var(--ink200);border-radius:.5rem;padding:.75rem 1rem}
.form input:focus,.form textarea:focus{outline:2px solid var(--gold500);outline-offset:1px}
.f{margin-bottom:1.1rem}.help{margin-top:.35rem;font-size:.75rem;color:var(--ink500)}.err{margin-top:.35rem;font-size:.75rem;font-weight:600;color:#b91c1c}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.alert{margin-bottom:1.1rem;border-radius:.5rem;background:#fef2f2;padding:1rem;font-size:.875rem;color:#991b1b}
.submit{width:100%;height:3.5rem;border:0;border-radius:.75rem;background:var(--gold500);color:var(--ink950);font-family:inherit;font-size:1rem;font-weight:600;cursor:pointer}.submit:disabled{opacity:.6}
.or{margin-top:1rem;text-align:center;font-size:.875rem;color:var(--ink600)}.or a{font-weight:600;color:var(--ink900);text-decoration-color:var(--gold400)}
.done{border-radius:1rem;border:1px solid rgb(22 163 74/.3);background:rgb(22 163 74/.05);padding:2rem;text-align:center}.done h3{font:700 1.5rem/1.2 var(--disp)}.done p{margin-top:.75rem;color:var(--ink700)}
.area{padding:2.5rem 0}.area h2{font-size:1.25rem}.area p{margin-top:.5rem;font-size:.9375rem;color:var(--ink700)}
.faq{padding:3rem 0}.faq h2{margin-bottom:1.25rem}
details{border-bottom:1px solid var(--ink100);padding:1rem 0}summary{cursor:pointer;font-weight:600;color:var(--ink950);list-style:none;display:flex;justify-content:space-between;gap:1rem}
summary::-webkit-details-marker{display:none}summary:after{content:"+";font-size:1.25rem;line-height:1;color:var(--gold600)}details[open] summary:after{content:"−"}details p{margin-top:.6rem;color:var(--ink700)}
.band{background:var(--gold500)}.band .wrap{padding-top:2.5rem;padding-bottom:2.5rem;display:flex;flex-direction:column;gap:1rem}.band p{margin-top:.25rem;color:var(--ink900)}
.btn-dark{background:var(--ink950);color:#fff;height:3.5rem;padding:0 1.5rem;font-size:1.05rem;text-transform:none}
.foot{background:var(--ink950);color:var(--ink300);font-size:.875rem}.foot .wrap{padding-top:2.5rem;padding-bottom:2.5rem;display:grid;gap:1rem}
.foot img{height:2.5rem;width:auto}.foot nav{display:flex;flex-wrap:wrap;gap:.5rem 1.25rem}.foot a{color:#fff;text-decoration:none}.foot a:hover{color:var(--gold400)}
.bar{position:fixed;left:0;right:0;bottom:0;z-index:50;display:grid;grid-template-columns:repeat(3,1fr);background:var(--ink900);padding-bottom:env(safe-area-inset-bottom)}
.bar a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.15rem;height:3.5rem;color:#fff;font-size:.75rem;text-decoration:none}.bar a:first-child{background:var(--gold500);color:var(--ink950);font-weight:600}
:focus-visible{outline:2px solid var(--gold500);outline-offset:2px}
@media (min-width:400px){.strip{font-size:.6875rem}}
@media (min-width:640px){.wrap{padding:0 1.5rem}.strip{font-size:.8125rem;letter-spacing:.08em}.hdr .call span{display:inline}.arrows{display:flex}#rail{margin:0;padding:0 0 .5rem}#rail li{flex-basis:16rem}h2{font-size:1.875rem}.brands ul{grid-template-columns:repeat(6,1fr)}.brands img{height:2.5rem;max-width:9rem}.callbig{width:auto;padding:1rem 2.5rem}.band .wrap{flex-direction:row;align-items:center;justify-content:space-between}}
@media (min-width:768px){body{padding-bottom:0}.bar{display:none}.sec{padding:5.5rem 0}.vids{padding:3rem 0 1rem}.tiles{grid-template-columns:repeat(5,1fr)}.hdr .wrap{height:5rem}.hdr img{height:2.75rem}}
@media (min-width:1024px){#rail li{flex-basis:18rem}.est{grid-template-columns:1fr 1.1fr;align-items:start}}
`.replace(/\n/g, '')

const html = `<!doctype html>
<!--
  GENERATED by scripts/build-ads-landing.ts on every build. Do not edit here.
  Google Ads landing page, served at ${URL_} via the rewrite in netlify.toml.
-->
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(TITLE)}</title>
<meta name="description" content="${esc(DESCRIPTION)}">
<link rel="canonical" href="${URL_}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="theme-color" content="#08090b">
<meta name="format-detection" content="telephone=yes">
<link rel="icon" href="/icon.png" type="image/png">
<link rel="apple-touch-icon" href="/apple-icon.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="${esc(business.name)}">
<meta property="og:url" content="${URL_}">
<meta property="og:title" content="${esc(TITLE)}">
<meta property="og:description" content="${esc(DESCRIPTION)}">
<meta property="og:image" content="https://shieldgaterepair.com/opengraph-image">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://shieldgaterepair.com/opengraph-image">
<link rel="preload" href="/fonts/archivo-black-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${CSS}</style>
${gtm}
<script type="application/ld+json">${JSON.stringify(organizationSchema())}</script>
<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
</head>
<body>
${gtmNoScript}
<div class="strip">DFW &amp; Surrounding Areas&nbsp;&nbsp;|&nbsp;&nbsp;Residential &amp; Commercial</div>
<header class="hdr"><div class="wrap">
<a href="/" aria-label="${esc(business.name)} home"><img src="/brand/logo-dark.webp" alt="${esc(business.name)}" width="468" height="158"></a>
<a class="call" href="${phone.href}" aria-label="Call ${phone.display}">${icon(I.phone)}<span>${phone.display}</span></a>
</div></header>
<main id="main">
<section class="hero">
<div class="art" aria-hidden="true">${heroArt}</div>
<div class="in">
<h1>Expert Automatic Gate Repair</h1>
<ul class="trust">${trust.map(([a, b]) => `<li>${icon(I.check)}<span><b>${a}</b><b>${b}</b></span></li>`).join('')}</ul>
<div class="ctas">
${callButton(`Call Now — ${phone.display}`)}
<a class="btn btn-ghost" href="#estimate">${icon(I.calendar)}Get a Free Estimate</a>
</div>
<p class="tag">Professional Gate Repair &bull; Residential &amp; Commercial</p>
</div>
</section>
${rating ? `<section class="wrap" style="padding-top:2rem"><p><b>${rating.score} on Google</b> from ${rating.count} reviews</p></section>` : ''}
<section class="vids"><div class="wrap">
<div class="head"><div><p class="eyebrow">${icon(I.shield)}Real customer reviews</p><h2>See Why DFW Homeowners Trust Us</h2></div>
<div class="arrows"><button type="button" data-rail="-1" aria-label="Previous videos">${icon(I.left)}</button><button type="button" data-rail="1" aria-label="More videos">${icon(I.right)}</button></div></div>
<ul id="rail" tabindex="0" aria-label="Customer video testimonials">${videoCards}</ul>
</div></section>
<section class="brands"><div class="wrap"><h2>All Major Gate Brands</h2><ul>${brandItems}</ul></div></section>
<section class="sec tint"><div class="wrap">
<h2>Our services</h2>
<p class="slogan">We Repair Before We Replace.</p>
<ul class="tiles">${serviceTiles}</ul>
${callButton(`Call Now: ${phone.display}`, 'btn btn-gold callbig')}
</div></section>
<section id="estimate" class="sec" style="scroll-margin-top:1rem"><div class="wrap est">
<div><h2>Get a free estimate</h2><p class="lead">Leave your number and we will call you back. Calling is faster.</p>${callButton(`Call Now: ${phone.display}`, 'btn btn-gold callbig')}</div>
<div>
<form id="estimate-form" class="form" method="post" action="/api/leads" novalidate>
<div class="hp" aria-hidden="true"><label for="company">Company</label><input id="company" name="company" type="text" tabindex="-1" autocomplete="off"></div>
<div class="f"><label for="name">Your name<span class="req" aria-hidden="true">*</span></label><input id="name" name="name" autocomplete="name" aria-required="true" aria-describedby="name-error"><p id="name-error" class="err" data-error="name" role="alert" hidden></p></div>
<div class="f"><label for="phone">Phone<span class="req" aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" aria-required="true" aria-describedby="phone-help phone-error"><p id="phone-help" class="help">We'll call you back on this number. We never sell your details.</p><p id="phone-error" class="err" data-error="phone" role="alert" hidden></p></div>
<div class="f"><label for="email">Email (optional)</label><input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-error"><p id="email-error" class="err" data-error="email" role="alert" hidden></p></div>
<div class="f"><label for="address">Address of the gate (optional)</label><input id="address" name="address" autocomplete="street-address" placeholder="Street, city" maxlength="300"></div>
<div class="f"><label for="message">What's the gate doing? (optional)</label><textarea id="message" name="message" rows="3" maxlength="4000"></textarea></div>
<p class="alert" data-status role="alert" hidden></p>
<button type="submit" class="submit">Request Service</button>
<p class="or">Or call <a href="${phone.href}">${phone.display}</a>. Someone always answers.</p>
</form>
<div id="estimate-done" class="done" hidden><h3>Got it. We’ll call you.</h3><p>A technician will call you back on the number you gave us. If it’s an emergency and you’d rather not wait, call ${phone.display}. Someone always answers.</p>${callButton('Call now instead', 'btn btn-gold callbig')}</div>
</div>
</div></section>
<section class="area tint"><div class="wrap"><h2>Serving Dallas–Fort Worth and surrounding cities</h2><p>${tier1Cities.map((c) => esc(c.name)).join(', ')} and nearby communities.</p></div></section>
<section class="faq"><div class="wrap"><h2>Before you call</h2>${faqItems}</div></section>
<section class="band"><div class="wrap"><div><h2>Gate not working? Call now.</h2><p>A person answers, day or night.</p></div>${callButton(phone.display, 'btn btn-dark')}</div></section>
</main>
<footer class="foot"><div class="wrap">
<img src="/brand/logo-light.webp" alt="${esc(business.name)}" width="468" height="158" loading="lazy">
<p>${esc(business.availability)}. <a href="${phone.href}">${phone.display}</a></p>
<nav aria-label="Site"><a href="/">Home</a><a href="/services">Services</a><a href="/brands">Brands</a><a href="/service-areas">Service Areas</a><a href="/contact">Contact</a><a href="/privacy-policy">Privacy Policy</a></nav>
<p>&copy; ${new Date().getFullYear()} ${esc(business.name)}</p>
</div></footer>
<nav class="bar" aria-label="Quick contact">
<a href="${phone.href}">${icon(I.phone)}Call Now</a>
<a href="${smsHref}">${icon(I.message)}Text Us</a>
<a href="#estimate">${icon(I.clipboard)}Estimate</a>
</nav>
<script>${clientJs}</script>
</body>
</html>
`

writeFileSync(OUT, html)
console.log(`Wrote ${path.relative(ROOT, OUT)} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`)
