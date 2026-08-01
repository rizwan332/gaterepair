import mongoose, { Schema, type InferSchemaType } from 'mongoose'

/**
 * Review requests — the compounding asset.
 *
 * Everlast leads this market on 2,600 reviews. That gap cannot be closed by
 * building anything on the website; it closes only by asking customers, every
 * job, forever. This model exists so that asking is systematic rather than
 * something a technician remembers when they happen to think of it.
 *
 * Design decisions worth keeping:
 *
 *  - **Token, not customer ID, in the public URL.** The short link is sent by
 *    SMS and will end up in screenshots and forwarded messages. It must not
 *    leak a sequential identifier or anything about the customer.
 *  - **Click tracking separate from send tracking.** Knowing that 40 requests
 *    were sent and 6 clicked is what tells you the message copy is wrong. Only
 *    Google can tell you how many completed.
 *  - **Technician attribution.** Review generation varies enormously between
 *    technicians. Attributing it is how that becomes manageable rather than
 *    mysterious.
 */
const reviewRequestSchema = new Schema(
  {
    /** Opaque public token used in /r/<token>. Indexed and unique. */
    token: { type: String, required: true, unique: true, index: true },

    customerName: { type: String, trim: true, maxlength: 120 },
    /** Destination for the request. Stored so a resend does not need re-entry. */
    phone: { type: String, trim: true, maxlength: 40 },
    email: { type: String, trim: true, lowercase: true, maxlength: 200 },

    city: { type: String, trim: true, maxlength: 120 },
    service: { type: String, trim: true, maxlength: 120 },
    /** Who did the work — the field that makes this measurable per person. */
    technician: { type: String, trim: true, maxlength: 120 },
    /** Optional link back to the originating lead. */
    leadId: { type: Schema.Types.ObjectId, ref: 'Lead' },

    channel: { type: String, enum: ['sms', 'email', 'manual'], default: 'sms' },

    sentAt: { type: Date },
    /** Second ask, ~48h later. The single highest-yield follow-up in this flow. */
    followUpSentAt: { type: Date },
    clickedAt: { type: Date },
    clickCount: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ['queued', 'sent', 'clicked', 'completed', 'declined', 'failed'],
      default: 'queued',
      index: true,
    },
    /** Set manually once the review appears on the GBP. */
    completedAt: { type: Date },
    notes: { type: String, trim: true, maxlength: 2000 },
  },
  { timestamps: true },
)

reviewRequestSchema.index({ createdAt: -1 })
reviewRequestSchema.index({ technician: 1, status: 1 })

export type ReviewRequest = InferSchemaType<typeof reviewRequestSchema>

export const ReviewRequestModel =
  mongoose.models.ReviewRequest ?? mongoose.model('ReviewRequest', reviewRequestSchema)
