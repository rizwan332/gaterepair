# Brand logo sources

`npm run logos` normalises every file here into `public/logos/<slug>.webp`.
`lib/brand-logos.ts` picks those up by filename, so the directory is the
manifest — a brand with no file here falls back to a wordmark.

## Provenance

Twelve logos are the client's own, lifted from Shield Gate Repair's existing
California site. The five added on 10 Nov 2026 are the manufacturers' published
artwork, because the client's library has nothing for them:

| slug | source |
| --- | --- |
| `mighty-mule` | `mightymule.com` header logo (SVG) |
| `bft` | `bft-automation.com` header logo (SVG) |
| `nice` | `niceforyou.com` header logo (SVG) |
| `ghost-controls` | `ghostcontrols.com` header logo (PNG) |
| `gto` | `gatecrafters.com` — see below |

Naming a manufacturer whose equipment you genuinely repair is nominative use,
and showing the mark is how a visitor matches the badge on their own gate. It
is still the manufacturers' artwork, not ours.

## The two that needed hand-preparing

**`ghost-controls.png`** — Ghost Controls publish only the dark-background
lockup, in which GHOST is white and so disappears entirely against our white
logo row. Those white pixels are recoloured to #1a1a1a here, which is their
light-background lockup; the mark and CONTROLS keep their blue untouched. If
the official light version differs, replace this file and re-run.

**`gto.png`** — GTO Access Systems no longer exists as a live brand. It went to
Nortek and then to Nice, `gtoaccess.com` and `gtopro.com` are both dead, and
Mighty Mule carries the product line now. The only artwork still online is a
combined "Linear Pro Access / GTO" lockup on a reseller's site, cropped here to
the GTO half. The source is 214x40, so this one logo is softer than the rest —
a higher-resolution original would be worth having if the client can find one.
