/**
 * One-off: re-classifies past "direct" events with the in-app browser step
 * lib/lead-source.ts now has, so a tap inside Instagram or Facebook that sent
 * no referrer is counted under that app. Form leads need nothing: they are
 * classified when the dashboard loads.
 *
 *   MONGODB_URI=... npx tsx scripts/reclassify-direct-events.ts           (dry run, lists changes)
 *   MONGODB_URI=... npx tsx scripts/reclassify-direct-events.ts --apply   (writes)
 */

import mongoose from 'mongoose'
import { connectToDatabase } from '../lib/mongodb'
import { classifyLead } from '../lib/lead-source'
import { EventModel } from '../models/Event'

async function main() {
  const apply = process.argv.includes('--apply')
  await connectToDatabase()
  const docs = await EventModel.find({ source: 'direct', userAgent: { $exists: true } }, { userAgent: 1, createdAt: 1, type: 1 }).lean()
  let changed = 0
  for (const d of docs as any[]) {
    const c = classifyLead({ userAgent: d.userAgent })
    if (c.source === 'direct') continue
    changed++
    console.log(`  ${d.createdAt?.toISOString()}  ${d.type}  direct -> ${c.source}`)
    if (apply) await EventModel.updateOne({ _id: d._id }, { $set: { source: c.source, sourceGroup: c.group, sourceBasis: c.basis } })
  }
  console.log(`${changed} of ${docs.length} direct events came from an app's built-in browser${apply ? ', updated' : '. Dry run: re-run with --apply to write.'}`)
  await mongoose.disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
