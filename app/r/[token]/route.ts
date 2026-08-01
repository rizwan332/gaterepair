import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ReviewRequestModel } from '@/models/ReviewRequest'
import { business } from '@/content/business'
import { fact } from '@/lib/business'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Public short link from a review request SMS.
 *
 * Records the click, then redirects straight into the Google review dialog.
 *
 * Two things this deliberately does NOT do:
 *
 *  - **No interstitial page.** Every extra tap between the SMS and the review
 *    box loses people. The redirect is the whole product.
 *  - **No filtering by sentiment.** Routing happy customers to Google and
 *    unhappy ones to a private form is review gating, and it violates Google's
 *    policy — profiles get penalised for it. The "reply first if anything was
 *    wrong" line in the message is the honest version of the same idea, and it
 *    happens before the click rather than after.
 *
 * Tracking failures never block the redirect. A customer who is willing to
 * write a review must always reach the review box, even if the database is
 * down.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const destination = fact(business.googleReviewUrl)

  if (token) {
    try {
      await connectToDatabase()
      await ReviewRequestModel.updateOne(
        { token },
        {
          $set: { clickedAt: new Date(), status: 'clicked' },
          $inc: { clickCount: 1 },
        },
      )
    } catch (error) {
      console.error('[review-link] tracking failed, redirecting anyway', error)
    }
  }

  // Until the client supplies the Google review URL there is nowhere to send
  // people. Fall back to the contact page rather than a dead end.
  return NextResponse.redirect(destination || `${business.url}/contact`, 302)
}
