/**
 * Published repair price ranges.
 *
 * This page is the largest content gap in the DFW market. Of 14 competitors
 * audited, exactly one publishes any number (a "$45 service call" hook) and one
 * has a single article covering *installation* cost. Nobody publishes repair
 * ranges. Queries like "gate repair cost dallas" have no serious local page
 * competing for them.
 *
 * ⚠️ EVERY NUMBER BELOW IS A PLACEHOLDER. The client will supply real figures.
 * `pricingConfirmed` gates rendering — while false, the pricing page shows the
 * structure with a "coming soon" state instead of fake numbers. Publishing
 * invented prices in a trade defined by mistrust would do real damage.
 */

export const pricingConfirmed = false as boolean

/** Repeated verbatim at the top and bottom of the pricing page. */
export const pricingDisclaimer =
  'These are preliminary ranges for planning purposes, based on jobs we have completed across Dallas–Fort Worth. ' +
  'They are not a binding quote. Gate repair pricing depends on the operator, the parts needed and the condition ' +
  'of the gate itself — the real number comes after a technician sees it.'

export type PriceBand = {
  slug: string
  label: string
  low: number
  high: number
  /** What the customer is actually experiencing, in their words. */
  symptom: string
  note: string
  /** Roughly how long the job takes, for the "will this be sorted today?" question. */
  typicalVisit: string
}

export const priceBands: PriceBand[] = [
  {
    slug: 'diagnostic',
    label: 'Diagnostic / service call',
    low: 0,
    high: 0,
    symptom: 'Something is wrong and you need someone to find out what.',
    note: 'PLACEHOLDER — confirm with client. Also confirm whether the fee is waived when the repair is booked.',
    typicalVisit: '30–60 minutes',
  },
  {
    slug: 'remote-keypad',
    label: 'Remote or keypad reprogramming',
    low: 0,
    high: 0,
    symptom: 'The keypad works but the remote does not, or neither is being recognised.',
    note: 'PLACEHOLDER — usually the least expensive call on the list.',
    typicalVisit: '30 minutes',
  },
  {
    slug: 'safety-sensor',
    label: 'Photo-eye / safety sensor replacement',
    low: 0,
    high: 0,
    symptom: 'The gate opens but reverses immediately, or refuses to close at all.',
    note: 'PLACEHOLDER',
    typicalVisit: '45–90 minutes',
  },
  {
    slug: 'limit-switch',
    label: 'Limit switch adjustment or replacement',
    low: 0,
    high: 0,
    symptom: 'The gate opens partway and stops, or overtravels and strains.',
    note: 'PLACEHOLDER',
    typicalVisit: '45–90 minutes',
  },
  {
    slug: 'capacitor',
    label: 'Capacitor replacement',
    low: 0,
    high: 0,
    symptom: 'The motor hums or clicks once but the gate does not move.',
    note: 'PLACEHOLDER',
    typicalVisit: '30–60 minutes',
  },
  {
    slug: 'control-board',
    label: 'Control board replacement',
    low: 0,
    high: 0,
    symptom: 'Nothing responds, or the board is showing an error code.',
    note: 'PLACEHOLDER — the repair-vs-replace decision usually turns on this one.',
    typicalVisit: '1–2 hours',
  },
  {
    slug: 'off-track',
    label: 'Off-track / gate realignment',
    low: 0,
    high: 0,
    symptom: 'The gate has come off its track or is dragging and binding.',
    note: 'PLACEHOLDER — common in North Texas where clay soil shifts gate posts seasonally.',
    typicalVisit: '1–3 hours',
  },
  {
    slug: 'hinge-weld',
    label: 'Hinge repair or re-weld',
    low: 0,
    high: 0,
    symptom: 'The gate is sagging, or a hinge or frame joint has cracked.',
    note: 'PLACEHOLDER',
    typicalVisit: '2–4 hours',
  },
  {
    slug: 'chain-track',
    label: 'Chain, sprocket or track replacement',
    low: 0,
    high: 0,
    symptom: 'Grinding or slipping while the gate travels.',
    note: 'PLACEHOLDER',
    typicalVisit: '2–4 hours',
  },
  {
    slug: 'hydraulic-service',
    label: 'Hydraulic seal and fluid service (FAAC)',
    low: 0,
    high: 0,
    symptom: 'A FAAC operator is slow, weak, or leaking fluid.',
    note: 'PLACEHOLDER — no other DFW company advertises this repair at all.',
    typicalVisit: '2–4 hours',
  },
  {
    slug: 'intercom-access',
    label: 'Intercom or access control repair',
    low: 0,
    high: 0,
    symptom: 'The call box, telephone entry or card reader has stopped working.',
    note: 'PLACEHOLDER',
    typicalVisit: '1–3 hours',
  },
  {
    slug: 'operator-replacement',
    label: 'Full operator replacement',
    low: 0,
    high: 0,
    symptom: 'The operator is beyond economical repair.',
    note: 'PLACEHOLDER — reference point: one DFW competitor publishes $2,500–$7,500 for a residential opener install.',
    typicalVisit: 'Half to full day',
  },
]

/** Answers the question the customer is actually asking. */
export const repairVsReplace = {
  heading: 'When repair beats replacement — and when it does not',
  body:
    'An operator under about ten years old is almost always worth repairing. Boards, capacitors, limit switches ' +
    'and gearboxes are all serviceable parts, and a board swap is a fraction of the cost of a new unit. Past ' +
    'fifteen years, parts get scarce and you start paying for the same visit twice a year — that is when ' +
    'replacement becomes the cheaper decision, and not before. We will tell you which side of that line your ' +
    'gate is on. If it is a repair, we do not sell you an operator.',
}
