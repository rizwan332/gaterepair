import mongoose, { Schema, type InferSchemaType } from 'mongoose'

/**
 * Lead capture — the only thing MongoDB is used for on this site.
 *
 * Page content lives in typed files in the repo so every page is statically
 * generated with no runtime database dependency. Leads are the genuinely
 * dynamic, write-heavy data, which is what Mongo is actually good at here.
 *
 * The attribution fields are not optional extras: without gclid and the landing
 * page, Google Ads reporting stops at campaign level and you cannot tell which
 * keyword produced revenue.
 */
const leadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    email: { type: String, trim: true, lowercase: true, maxlength: 200 },
    city: { type: String, trim: true, maxlength: 120 },

    gateType: { type: String, enum: ['swing', 'slide', 'barrier-arm', 'unsure'], default: 'unsure' },
    problem: { type: String, trim: true, maxlength: 80 },
    brand: { type: String, trim: true, maxlength: 60 },
    urgency: { type: String, enum: ['emergency', 'this-week', 'quoting'], default: 'this-week' },
    message: { type: String, trim: true, maxlength: 4000 },

    // Attribution
    sourcePage: { type: String, trim: true, maxlength: 300 },
    gclid: { type: String, trim: true, maxlength: 200 },
    utmSource: { type: String, trim: true, maxlength: 120 },
    utmMedium: { type: String, trim: true, maxlength: 120 },
    utmCampaign: { type: String, trim: true, maxlength: 200 },
    utmTerm: { type: String, trim: true, maxlength: 200 },

    status: { type: String, enum: ['new', 'contacted', 'booked', 'closed', 'lost'], default: 'new' },
  },
  { timestamps: true },
)

// Emergencies first, then newest.
leadSchema.index({ createdAt: -1 })
leadSchema.index({ urgency: 1, status: 1, createdAt: -1 })

export type Lead = InferSchemaType<typeof leadSchema>

export const LeadModel = mongoose.models.Lead ?? mongoose.model('Lead', leadSchema)
