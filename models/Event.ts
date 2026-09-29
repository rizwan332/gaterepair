import mongoose, { Schema, type InferSchemaType } from 'mongoose'

/**
 * Every lead-producing action, recorded server-side.
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 * Until now, only form submissions reached the database. Call clicks — which
 * on this site are the majority of the leads, because the business runs on
 * emergency phone traffic — were pushed into the GTM dataLayer and nowhere
 * else. GA4 aggregates, samples and applies thresholding, so there was no way
 * to answer "how many leads did Instagram produce last month" with a number
 * anyone could check, and no per-lead record to look at.
 *
 * This collection is the raw log: one row per action, never deduplicated,
 * never overwritten. The dashboard derives its deduplicated view from it. Two
 * layers rather than one because the raw log is the thing you go back to when
 * a number looks wrong, and a deduplicated table cannot be un-deduplicated.
 *
 * ── WHAT IS DELIBERATELY NOT STORED ─────────────────────────────────────────
 * No IP address, no user agent string, no fingerprint. `ipHash` is a salted
 * one-way hash kept only so abuse can be rate-limited and obvious duplicates
 * spotted; it cannot be reversed to an address. `visitorId` is a random value
 * generated in the browser, not derived from anything about the person.
 *
 * The business has no need for more than that, and a lead log on a small
 * contractor's site is not a place to accumulate personal data that would have
 * to be defended later.
 */
const eventSchema = new Schema(
  {
    /**
     * What happened. `call_click` and `sms_click` are intent rather than a
     * confirmed conversation — see the note in lib/leads.ts about what can
     * honestly be claimed from them.
     */
    type: {
      type: String,
      required: true,
      enum: ['call_click', 'sms_click', 'form_submit', 'directions_click'],
      index: true,
    },

    /** Random per-browser id. Groups repeat actions into one lead. */
    visitorId: { type: String, required: true, trim: true, maxlength: 64, index: true },

    // ── Where they came from ────────────────────────────────────────────────
    /** Canonical bucket from lib/lead-source.ts. */
    source: { type: String, trim: true, maxlength: 40, index: true },
    sourceGroup: { type: String, trim: true, maxlength: 24, index: true },
    /** Which signal decided it: click-id, utm, referrer or none. */
    sourceBasis: { type: String, trim: true, maxlength: 16 },

    // ── Which page produced it ──────────────────────────────────────────────
    /** The page they were on when they acted. */
    pagePath: { type: String, trim: true, maxlength: 300, index: true },
    /** city / model / symptom / service / brand / landing / other. */
    pageType: { type: String, trim: true, maxlength: 24, index: true },
    /** The subject of that page — city slug, model key, symptom slug. */
    pageSubject: { type: String, trim: true, maxlength: 120, index: true },
    /** First page of the visit, which on paid traffic is the ad destination. */
    landingPage: { type: String, trim: true, maxlength: 300 },

    // ── Raw attribution, kept so a classification can be re-checked ─────────
    referrer: { type: String, trim: true, maxlength: 300 },
    gclid: { type: String, trim: true, maxlength: 200 },
    fbclid: { type: String, trim: true, maxlength: 200 },
    ttclid: { type: String, trim: true, maxlength: 200 },
    msclkid: { type: String, trim: true, maxlength: 200 },
    utmSource: { type: String, trim: true, maxlength: 120 },
    utmMedium: { type: String, trim: true, maxlength: 120 },
    utmCampaign: { type: String, trim: true, maxlength: 200 },
    utmTerm: { type: String, trim: true, maxlength: 200 },
    utmContent: { type: String, trim: true, maxlength: 200 },

    /** Salted one-way hash. Not reversible to an address. */
    ipHash: { type: String, trim: true, maxlength: 64, index: true },
  },
  { timestamps: true },
)

// The dashboard's two main queries: a date range, and a date range within one
// source or page type.
eventSchema.index({ createdAt: -1 })
eventSchema.index({ source: 1, createdAt: -1 })
eventSchema.index({ pageType: 1, createdAt: -1 })
eventSchema.index({ visitorId: 1, type: 1, createdAt: -1 })

export type GateEvent = InferSchemaType<typeof eventSchema>

export const EventModel = mongoose.models.Event ?? mongoose.model('Event', eventSchema)
