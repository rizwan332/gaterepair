/**
 * General FAQs for the /faq hub.
 *
 * Service and brand FAQs are aggregated in from their own files — this covers
 * the questions that belong to the business rather than to a specific repair:
 * cost, scheduling, warranty, safety, what to do while you wait.
 *
 * Every competitor scatters FAQs across service pages. None has a hub, which
 * means none is competing for the featured-snippet surface these produce.
 */

export type FaqCategory = {
  slug: string
  label: string
  faqs: { q: string; a: string }[]
}

export const GENERAL_FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: 'getting-help',
    label: 'Getting help',
    faqs: [
      {
        q: 'My gate is stuck right now. What should I do first?',
        a: 'Find the manual release. Almost every automatic operator has one — usually a key-operated lever or a pull handle on the housing — that disengages the drive so the gate can be moved by hand. Call us and we will talk you through it for your specific unit before a technician is dispatched, so you are not blocked in while you wait. Do not force the gate against an engaged drive; that turns a nuisance fault into a bent gate and a damaged gearbox.',
      },
      {
        q: 'Do you actually answer the phone at night?',
        a: 'Yes. Gate failures do not keep business hours, and a gate stuck open overnight is exactly when the call matters most. You will get a person, not a voicemail box.',
      },
      {
        q: 'How quickly can you get to me?',
        a: 'It depends where you are in the Metroplex. Rather than advertise a single number that sounds good and is not achievable everywhere, we give you a real arrival window when you call — based on where the nearest technician actually is — and a message when they are on the way. We run 24 hours a day, seven days a week.',
      },
      {
        q: 'Do you charge to come out and look?',
        a: 'Ask when you call and we will tell you plainly before anyone is dispatched — including whether the diagnostic is waived if you go ahead with the repair. What we will not do is discover a fee for you after the work is done.',
      },
      {
        q: 'Will you quote over the phone?',
        a: 'We will tell you what the likely fault is and roughly what that repair usually costs. We will not give you a final number without seeing the gate, because anyone who does is either guessing or planning to change it once they are standing in your driveway.',
      },
    ],
  },
  {
    slug: 'repair-vs-replace',
    label: 'Repair or replace',
    faqs: [
      {
        q: 'How do I know if I really need a new operator?',
        a: 'Age and parts availability, not symptoms. An operator under about ten years old is almost always worth repairing — boards, capacitors, limit switches and gearboxes are all serviceable parts. Between ten and fifteen years it usually still makes sense, but parts availability is worth asking about. Past fifteen years it depends on the manufacturer: some units are fully supported at twenty-five years, others become scavenger hunts. The honest test is whether you are starting to pay for the same visit twice a year.',
      },
      {
        q: 'I was told my gate operator cannot be repaired. Should I get a second opinion?',
        a: 'Ask which specific component was tested and found faulty. If the answer is vague, it is worth a second opinion. Operators are often condemned because that type is outside what the technician services — hydraulics in particular — rather than because the unit is beyond help. Boards, capacitors, limit switches and gearboxes are all replaceable parts on most operators still supported by their manufacturer.',
      },
      {
        q: 'Why does the same part keep failing on my gate?',
        a: 'Almost never a defective part. On a commercial or multi-family entrance it usually means the operator is running well past the duty cycle it was specified for. On a residential gate it usually means the gate itself has become harder to move — worn hinges, flat-spotted rollers, a track full of grit, or a post that has shifted — and the operator is being destroyed by the load. Replacing the part again treats the symptom.',
      },
      {
        q: 'Is it cheaper to repair an old iron gate or replace it?',
        a: 'Repair, in almost every case. Custom ironwork cannot be bought off a shelf, and the parts that fail — welds, hinges, bottom rails — are all repairable. Replacement makes sense only when a gate is comprehensively corroded rather than locally damaged.',
      },
    ],
  },
  {
    slug: 'safety',
    label: 'Safety',
    faqs: [
      {
        q: 'My gate closed on my car. Is that normal?',
        a: 'No, and you should stop using the gate until it is repaired. A gate that closes on an obstruction has a failed safety device — a photo-eye, a safety edge or a reversing loop. Automatic gates are heavy powered machinery and this is the one fault where waiting is genuinely dangerous rather than merely inconvenient.',
      },
      {
        q: 'Can you disable the sensors so my gate will close?',
        a: 'No. We will not do it. Those devices exist because a gate can seriously injure someone, and bypassing them transfers the risk to whoever is next in the opening. If your gate will not close, the fix is to find and remove whatever the sensor is reacting to — which is usually a spider web, a knocked bracket or sun glare, and is one of the cheapest repairs we do.',
      },
      {
        q: 'How often should safety devices be tested?',
        a: 'Quarterly on a residential gate, and more often on a commercial or multi-family entrance. The test takes five seconds: wave something through the photo-eye beam while the gate is closing. It should stop and reverse immediately.',
      },
    ],
  },
  {
    slug: 'maintenance',
    label: 'Maintenance',
    faqs: [
      {
        q: 'What maintenance can I do myself?',
        a: 'Four things, twice a year. Release the operator and move the gate by hand — it should move smoothly through its whole travel, and anything that binds is a problem developing. Wipe the photo-eye lenses. Clear the track on a slide gate. Look inside the housing for wasp and ant nests, which bridge board terminals and cause faults that look catastrophic and are not.',
      },
      {
        q: 'Should I be oiling the chain?',
        a: 'Generally no. Household oil attracts the grit that wears sprockets, and over-lubrication causes more service calls in this trade than under-lubrication. Hinges and rollers benefit from occasional attention; chains are usually best left alone.',
      },
      {
        q: 'How often does a gate need professional servicing?',
        a: 'Once a year on a residential gate. Quarterly on a commercial or multi-family entrance running hundreds of cycles a day — those gates consume parts on cycle count rather than calendar age, and planned servicing is dramatically cheaper than the failures it prevents.',
      },
      {
        q: 'How long should a gate operator last?',
        a: 'Fifteen to twenty years is normal on a well-hung residential gate with basic servicing. What shortens that is a gate the operator has to fight, which is why gate alignment matters more to operator life than the brand on the housing.',
      },
    ],
  },
  {
    slug: 'commercial',
    label: 'Commercial, HOA and property management',
    faqs: [
      {
        q: 'Do you work with HOAs and property managers?',
        a: 'Yes, including multi-gate properties, scheduled maintenance agreements and itemised written quotes suitable for board approval. We are happy to deal directly with a management company rather than through residents.',
      },
      {
        q: 'Our access codes stopped working but the gate still opens. What is wrong?',
        a: 'If the gate opens on a manual command, the operator is healthy and the fault is in the access control — the reader, its wiring, or the controller. This distinction matters because they are diagnosed completely differently, and treating it as a gate fault means paying to have healthy equipment looked at.',
      },
      {
        q: 'We changed phone providers and our call box stopped working.',
        a: 'Very common, and it usually surfaces months later so nobody connects the two events. Older telephone entry systems need an analogue line; moving to VoIP or fibre removes the signalling they expect. The fix is normally a cellular module rather than a whole new system.',
      },
      {
        q: 'Nobody has the programming records for our access system. Can it be recovered?',
        a: 'Usually yes. We can access and rebuild the directory, codes and credentials on most common systems — and we document it afterwards so the next person is not in the same position.',
      },
    ],
  },
]
