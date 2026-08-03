import { cities, countyPeers, type City } from '@/content/cities'

/**
 * Service-area map — a drawn graphic, not Google Maps.
 *
 * The client rejected an embedded Google map ("no need legit map") and pointed
 * at a competitor using an illustrated coverage graphic. That is the better
 * call regardless: an embed costs an API key, a billing account, ~200KB of
 * third-party JS and a consent problem, and all it proves is that the city
 * exists. This proves something the customer actually cares about — that we
 * cover their town and the ones around it.
 *
 * Geometry is deterministic from the city slug, so a given city always renders
 * the same map. It is a schematic of the coverage relationship, not a
 * survey-accurate plot, and it is labelled as one.
 */

/** Stable 32-bit hash — same slug always yields the same layout. */
function hash(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Deterministic float in [0,1) from a seed and salt. */
function rand(seed: number, salt: number): number {
  const x = Math.imul(seed ^ (salt * 0x9e3779b9), 0x85ebca6b) >>> 0
  return x / 0x100000000
}

export function ServiceAreaMap({ city }: { city: City }) {
  const peers = countyPeers(city, 7)
  const seed = hash(city.slug)

  // Peers are laid out on a jittered ring around the centre. The jitter is
  // seeded so the map is stable across builds, and the ring keeps labels from
  // colliding without needing a real collision pass.
  const placed = peers.map((peer, i) => {
    const spread = (2 * Math.PI) / Math.max(peers.length, 1)
    const angle = i * spread + (rand(seed, i + 1) - 0.5) * spread * 0.55
    const radius = 118 + rand(seed, i + 40) * 52
    return {
      peer,
      x: 260 + Math.cos(angle) * radius * 1.32,
      y: 180 + Math.sin(angle) * radius * 0.82,
    }
  })

  const countyCount = cities.filter((c) => c.county === city.county).length

  return (
    <section className="section">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <figure className="overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-sky-50 via-white to-gold-50/40 shadow-[var(--shadow-lift)]">
            <svg
              viewBox="0 0 520 360"
              className="h-auto w-full"
              role="img"
              aria-label={`Coverage map showing ${city.name} and nearby cities we serve in ${city.county}`}
            >
              <defs>
                <radialGradient id={`glow-${city.slug}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-gold-400)" stopOpacity="0.30" />
                  <stop offset="70%" stopColor="var(--color-gold-400)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--color-gold-400)" stopOpacity="0" />
                </radialGradient>
                <pattern id={`grid-${city.slug}`} width="26" height="26" patternUnits="userSpaceOnUse">
                  <path d="M26 0H0V26" fill="none" stroke="var(--color-ink-200)" strokeWidth="0.5" opacity="0.5" />
                </pattern>
              </defs>

              <rect width="520" height="360" fill={`url(#grid-${city.slug})`} />
              <ellipse cx="260" cy="180" rx="215" ry="150" fill={`url(#glow-${city.slug})`} />
              <ellipse
                cx="260"
                cy="180"
                rx="196"
                ry="134"
                fill="none"
                stroke="var(--color-gold-500)"
                strokeWidth="1.5"
                strokeDasharray="7 7"
                opacity="0.55"
              />

              {/* Spokes first so pins draw over them. */}
              {placed.map(({ peer, x, y }) => (
                <line
                  key={`l-${peer.slug}`}
                  x1="260"
                  y1="180"
                  x2={x}
                  y2={y}
                  stroke="var(--color-ink-300)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  opacity="0.7"
                />
              ))}

              {placed.map(({ peer, x, y }) => (
                <g key={peer.slug}>
                  <circle cx={x} cy={y} r="4.5" fill="var(--color-ink-400)" />
                  <text
                    x={x}
                    y={y - 11}
                    textAnchor="middle"
                    className="fill-ink-600"
                    style={{ fontSize: '12.5px', fontWeight: 500 }}
                  >
                    {peer.name}
                  </text>
                </g>
              ))}

              {/* Focus city last — always on top, always the brightest thing. */}
              <circle cx="260" cy="180" r="13" fill="var(--color-gold-500)" opacity="0.28" />
              <circle cx="260" cy="180" r="7.5" fill="var(--color-gold-500)" stroke="white" strokeWidth="2.5" />
              <text
                x="260"
                y="158"
                textAnchor="middle"
                className="fill-ink-950"
                style={{ fontSize: '17px', fontWeight: 700 }}
              >
                {city.name}
              </text>
            </svg>
            <figcaption className="border-t border-ink-100 bg-white/70 px-5 py-3 text-xs text-ink-500">
              Coverage schematic — shows which nearby cities we serve, not exact distances or boundaries.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-balance font-display text-3xl font-semibold text-ink-950 md:text-4xl">
              We cover {city.name} and the rest of {city.county}
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              {city.name} is one of {countyCount} {city.county} {countyCount === 1 ? 'city' : 'cities'} we
              service. Our technicians work across the whole Dallas–Fort Worth Metroplex, so a call from{' '}
              {city.name} goes to the same team, with the same parts on the truck, as a call from Dallas.
            </p>

            {peers.length > 0 && (
              <>
                <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Also serving nearby
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {peers.map((peer) => (
                    <li key={peer.slug}>
                      <a
                        href={`/gate-repair-${peer.slug}-tx`}
                        className="inline-flex rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-gold-400 hover:bg-gold-50 hover:text-ink-950"
                      >
                        {peer.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
