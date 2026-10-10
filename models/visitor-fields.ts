import { Schema } from 'mongoose'

/**
 * IP, location and device, shared by the Event and Lead schemas so the two
 * collections can never disagree about what they record. Filled from
 * lib/visitor-context.ts on the server; never accepted from the browser.
 *
 * Records written before 10 Oct 2026 have none of these fields, and the
 * dashboard shows a dash for them rather than guessing.
 */
const geoSchema = new Schema(
  {
    city: { type: String, trim: true, maxlength: 120 },
    region: { type: String, trim: true, maxlength: 120 },
    regionCode: { type: String, trim: true, maxlength: 12 },
    country: { type: String, trim: true, maxlength: 120 },
    countryCode: { type: String, trim: true, maxlength: 4 },
    postalCode: { type: String, trim: true, maxlength: 20 },
    timezone: { type: String, trim: true, maxlength: 64 },
    latitude: Number,
    longitude: Number,
  },
  { _id: false },
)

export const visitorFields = {
  ip: { type: String, trim: true, maxlength: 64 },
  geo: { type: geoSchema, default: undefined },
  device: { type: String, enum: ['mobile', 'tablet', 'desktop', 'bot', 'unknown'] },
  browser: { type: String, trim: true, maxlength: 40 },
  os: { type: String, trim: true, maxlength: 40 },
  userAgent: { type: String, trim: true, maxlength: 400 },
}
