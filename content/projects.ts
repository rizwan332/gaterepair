/**
 * Project case studies.
 *
 * Star Gate is the only DFW competitor with project pages: four cards carrying
 * a photo, a title and one line — no before/after, no city, no date, no
 * problem/solution narrative and no schema. The bar is low and this clears it
 * comfortably.
 *
 * ── On accuracy ──────────────────────────────────────────────────────────
 * Each project is built around media we actually hold, and the narrative
 * describes the repair that media shows. What we do NOT hold is the customer,
 * the street, or the date — so those are absent rather than invented.
 *
 * `market` is set from confirmed fact: the company operated in California and
 * is expanding into Dallas–Fort Worth, and this photography is California work.
 * Labelling it as such is both honest and better SEO than a vague placeless
 * page — see MEDIA-PROVENANCE.md.
 *
 * When the client supplies real job records (city, date, customer permission),
 * fill `city`, `completedOn` and set `verified: true`. The template already
 * renders them.
 */

export type Project = {
  slug: string
  title: string
  /** One line for the index card. Leads with the fault, not the service. */
  summary: string
  /** Which market the work was carried out in. */
  market: 'california' | 'texas'
  /** Real city, once the client confirms it. */
  city?: string
  /** ISO date, once confirmed. */
  completedOn?: string
  /** True only when the client has confirmed the job record. */
  verified: boolean

  service: string
  brand?: string
  gateType: 'swing' | 'slide' | 'iron' | 'commercial' | 'access-control'
  propertyType: 'residential' | 'commercial' | 'hoa' | 'industrial'

  /** Media category to pull photographs from. */
  mediaCategory: string
  /** Indexes within that category, so each project shows different images. */
  imageIndexes: number[]
  /** Video slug, where footage of this repair type exists. */
  videoSlug?: string

  problem: string[]
  diagnosis: string[]
  solution: string[]
  outcome: string
  /** What a reader should take away — the part competitors never write. */
  takeaway: string
}

export const projects: Project[] = [
  {
    // Client-supplied 6 Aug 2026 with his own account, including the competing
    // estimates and his own price. Those figures are his, reported as this job's
    // numbers rather than as a rate — content/pricing.ts is still unconfirmed
    // and nothing here should be read as a price list.
    slug: 'commercial-gate-impact-damage-repair',
    title: 'Two Companies Quoted $25,000 to Replace It. We Repaired It for $6,880.',
    summary:
      'A delivery truck hit a 35-foot heavy-duty commercial slide gate. Two companies said replace. We replaced the parts that were actually damaged.',
    market: 'texas',
    verified: false,
    service: 'commercial-gate-repair',
    gateType: 'commercial',
    propertyType: 'commercial',
    mediaCategory: 'commercial-gate-repair',
    imageIndexes: [7, 6, 9, 14, 8, 13],
    videoSlug: 'commercial-gate-repair-services-20',
    problem: [
      'A FedEx truck struck the entrance gate at a distribution facility. The gate is 35 feet of heavy-duty steel — the sort of gate that protects a yard full of freight, and the sort that a business genuinely cannot operate without.',
      'The customer had already had two companies out. Both recommended replacing the gate completely, and neither quoted less than $25,000.',
    ],
    diagnosis: [
      'Impact damage on a gate this size looks catastrophic, and that appearance does a lot of work in a replacement quote. What matters is which parts actually took the load.',
      'Here the damage was concentrated: the rollers the gate runs on, and two of the posts. The gate structure itself — the expensive part, the part that takes weeks to fabricate and a crane day to install — was sound.',
      'Replacing a structurally sound 35-foot gate because its rollers and posts were destroyed replaces the one part of the assembly that did not fail.',
    ],
    solution: [
      'We recommended repairing it, replacing only what the impact had actually damaged, and we were back the next day to do the work.',
      'Replaced: six 2-inch rollers, a ten-foot 4x4 post, and a 2x6 heavy-duty post.',
      'The price was $6,880 against estimates that started at $25,000 — and the customer received a five-year warranty on the work.',
    ],
    outcome:
      'The gate runs correctly on its original structure. The facility was back to a secure yard the day after the assessment rather than waiting weeks for a fabricated replacement.',
    takeaway:
      'On a commercial gate the structure is almost always the most expensive component and almost never the thing an impact destroys. Rollers, posts and hardware take the load and are designed to be replaceable. Before accepting a five-figure replacement quote, it is worth asking a straight question: which parts are actually damaged, and which are being replaced because they happen to be attached to them?',
  },
  {
    // Client-supplied 6 Aug 2026 with his own account of the job.
    slug: 'ramset-slide-gate-broken-rollers',
    title: 'A Ramset Gate That Stopped in the Wrong Place — It Was the Wheels',
    summary:
      'Broken rollers had changed where the gate physically sat, so it stopped and opened in the wrong positions. New wheels, and the operator was fine all along.',
    market: 'texas',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'Ramset',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'ramset',
    imageIndexes: [5, 6, 8, 9, 10, 11],
    videoSlug: 'ramset-gate-motor-repair-20',
    problem: [
      'A large sliding gate had started stopping and opening in the wrong places. It would not close fully, or it would run past where it should have stopped — the sort of fault that looks unmistakably like the operator has lost its settings.',
    ],
    diagnosis: [
      'It was the wheels. The rollers the gate runs on had broken, and a slide gate with failing rollers does not simply get noisier — it changes position. The gate drops and shifts on its track, so every point in its travel is now physically somewhere slightly different to where it used to be.',
      'That matters because a gate operator does not know where your gate is. It knows where its limits were set. Move the gate relative to its track and the limits it learned no longer correspond to the positions they were set for, so the gate stops short, overtravels, or refuses to close.',
      'This is why we release the operator and move the gate by hand before touching anything electrical. Rolling this gate manually showed the problem immediately, and no amount of resetting limits would have fixed it — the settings were correct, the gate had moved.',
    ],
    solution: [
      'We jacked the gate to take its weight off the track, replaced the broken rollers, and set the gate back down square on its rail.',
      'With the gate sitting where it was supposed to sit again, the existing limits lined up with the correct physical positions.',
    ],
    outcome:
      'The gate opens and closes to the right positions on its original Ramset operator. No control board, no limit switches, no operator replacement — the electrics were never the fault.',
    takeaway:
      'A gate that stops in the wrong place looks like an electrical fault and very often is not. Rollers, hinges, a post that has shifted and a sagging leaf all move the gate relative to the limits that were set for it, and every one of them produces symptoms that read as a confused operator. If someone quotes you a control board for this without having moved the gate by hand first, they have not diagnosed it.',
  },
  {
    // Client-supplied 6 Aug 2026 with his own account of the job.
    slug: 'doorking-dual-swing-gearbox-rebuild',
    title: 'DoorKing Dual Swing Gearbox Repaired, Not Replaced',
    summary:
      'A failed gearbox on a DoorKing dual swing operator — repaired and fully serviced, and the customer left with a three-year warranty on the work.',
    market: 'texas',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'DoorKing',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'doorking',
    imageIndexes: [0, 1, 2, 3, 4],
    videoSlug: 'doorking-gate-motor-repair-20',
    problem: [
      'A DoorKing dual swing gate operator at a residential entrance had stopped working correctly. Dual swing installations are less forgiving than single-leaf gates: both leaves have to move together, so a fault on one side shows up as the whole entrance misbehaving rather than as one obviously broken half.',
    ],
    diagnosis: [
      'The fault was in the gearbox, which sounds terminal and is the point at which diagnosis often stops and quoting begins.',
      'It is rarely terminal. A DoorKing operator is built to be serviced, and a gearbox is a serviceable assembly rather than a sealed unit you throw away with the motor and the control board still working perfectly.',
    ],
    solution: [
      'We repaired the gearbox and carried out a full service on the whole unit rather than only the part that had failed. On a dual swing installation that matters: the two sides share the load, and leaving one half unserviced means the next failure is already scheduled.',
      'The customer received a three-year warranty on the work.',
    ],
    outcome:
      'Both leaves run correctly again on the original DoorKing operator, and the customer holds a three-year warranty on the repair.',
    takeaway:
      'A failed gearbox is the point where most quotes turn into a replacement operator. It is worth asking whether the gearbox itself was diagnosed, or whether it was simply the most expensive-sounding part in an estimate — because on a DoorKing unit it is a repairable assembly, and repairing it leaves a working motor and control board exactly where they are.',
  },
  {
    // Client-supplied 5 Aug 2026, with his own account of the job. The first
    // case study in this file carried out in Texas rather than California —
    // hence market: 'texas' and the photography being genuinely local.
    slug: 'liftmaster-corroded-board-solar-upgrade',
    title: 'Moisture-Corroded LiftMaster Board Replaced, Solar System Resized',
    summary:
      'Corrosion on the control board had killed the operator — and the solar system was never big enough to keep the batteries charged in the first place.',
    market: 'texas',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [13, 14, 15, 16],
    videoSlug: 'liftmaster-gate-motor-repair-20',
    problem: [
      'A double farm gate at the end of a long rural driveway had stopped responding. The operator was a solar-powered LiftMaster running off a battery bank, and the owner had noticed it getting less reliable for some time before it stopped altogether — slower to open, occasionally refusing the second cycle, and worse first thing in the morning.',
      'That pattern matters, because it is the signature of a power problem rather than a dead motor, and it had been developing long before the day the gate finally stopped.',
    ],
    diagnosis: [
      'Opening the enclosure showed the cause immediately: moisture had been getting into the housing, and the control board carried visible corrosion. Once water reaches a board it does not fail cleanly — it fails intermittently first, as corrosion creeps across terminals and traces, which is exactly the slow decline the owner had described.',
      'The board was beyond salvaging. But replacing it alone would have been treating half the fault.',
      'Testing the power side showed the solar installation had never been large enough for this gate. The panel could not put back what a heavy double gate on a rural driveway takes out per cycle, so the batteries had been running in a permanent state of partial charge. On a lead-acid battery that is not just an inconvenience: chronic undercharging shortens battery life and leaves the operator working at low voltage, which stresses the very electronics that had just failed.',
    ],
    solution: [
      'We replaced the control board and resealed the enclosure so the new one is not going the same way as the old one. A board fitted into a housing that still lets water in is a repair with an expiry date.',
      'We then installed an additional solar system sized to what this gate actually draws, so the batteries reach full charge rather than hovering permanently below it.',
    ],
    outcome:
      'The gate runs normally again, and the power system behind it is now sized for the load rather than running at a permanent deficit.',
    takeaway:
      'Two faults were in play here and only one of them was visible. Replacing a corroded board is the obvious repair, and on its own it would have looked like a fix for a while — but the undersized solar array that had been stressing the electronics would still have been there, quietly working on the new board. Diagnosing the power system is what turns this from a repeat call-out into a repair.',
  },
  {
    slug: 'faac-hydraulic-operator-rebuild',
    title: 'FAAC Hydraulic Operator Rebuilt After Two Replacement Quotes',
    summary: 'A slow, weak FAAC that two companies had condemned — repaired with a seal kit and a pressure reset.',
    market: 'california',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'FAAC',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'faac',
    imageIndexes: [1, 2, 5],
    videoSlug: 'faac-gate-motor-repair-video',
    problem: [
      'The gate had been getting progressively slower over about eighteen months. By the time we were called it was opening roughly two-thirds of the way and stopping, and the owner had been told twice that the operator was finished and needed replacing with a different brand.',
    ],
    diagnosis: [
      'Fluid level was low and the fluid itself was well past its service life. Operating pressure tested well below the manufacturer figure.',
      'The ram seals had been weeping long enough to leave a residue trail down the housing — visible once the cover came off, and the reason the level had dropped.',
      'Nothing was wrong with the motor, the board or the gate itself. The gate moved freely by hand through its full travel.',
    ],
    solution: [
      'Replaced the seal kit, flushed and refilled with correct-specification fluid, and reset operating pressure to manufacturer figures.',
      'Ran the gate through a full cycle sequence and re-checked pressure warm, since hydraulic behaviour changes as fluid comes up to temperature.',
    ],
    outcome: 'Full travel speed and force restored. A fraction of the cost of the replacement operator that had been quoted twice.',
    takeaway:
      'A FAAC that has become slow is almost always reporting hydraulic pressure, not a dying motor. The reason it gets quoted for replacement so often is that most technicians do not service hydraulics — which is a statement about the company, not about the gate.',
  },
  {
    slug: 'all-o-matic-clutch-misdiagnosis',
    title: 'All-O-Matic Stalling Mid-Travel — The Clutch Was Working Correctly',
    summary: 'A gate that kept stopping halfway. The operator was fine; the gate was binding.',
    market: 'california',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'All-O-Matic',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'all-o-matic',
    imageIndexes: [3, 4, 5],
    videoSlug: 'all-o-matic-gate-motor-repair-video',
    problem: [
      'The gate would start normally, travel roughly half its length, then stall and reverse. It had been intermittent for weeks and had become constant.',
    ],
    diagnosis: [
      'Released the operator and moved the gate by hand. It moved freely for the first half of its travel and then became noticeably harder — exactly where it was stalling under power.',
      'The rollers on the leading edge had developed flats and the track had collected enough grit to bind them.',
      'The clutch was slipping precisely as designed. It was the safety feature doing its job, not a fault.',
    ],
    solution: [
      'Replaced the worn rollers, cleared and cleaned the full length of the track, and re-checked the gate by hand through complete travel.',
      'Reset the clutch to specification after the gate moved freely — not before, because setting a clutch against a binding gate simply hides the problem.',
    ],
    outcome: 'Gate returned to full travel with the clutch at its correct setting and its protection intact.',
    takeaway:
      'Tightening the clutch would have "fixed" this in five minutes and removed the feature that stops the gate crushing an obstruction. Any technician who reaches for the clutch before checking the gate by hand is treating a symptom and disabling a safeguard.',
  },
  {
    slug: 'liftmaster-capacitor-not-motor',
    title: 'LiftMaster Humming But Not Moving — A Capacitor, Not an Operator',
    summary: 'The single most over-replaced fault in the trade, fixed in under an hour.',
    market: 'california',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'LiftMaster',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'liftmaster',
    imageIndexes: [1, 4, 9],
    videoSlug: 'liftmaster-gate-motor-repair-video',
    problem: [
      'The gate had stopped moving entirely. Power was reaching the unit and the motor could be heard humming when a command was given, but nothing moved.',
    ],
    diagnosis: [
      'Confirmed supply voltage at the board — normal.',
      'Moved the gate by hand with the operator released — free through full travel, ruling out a mechanical bind.',
      'Tested the run capacitor under load. It was reading well below its rated value, which is exactly the condition that produces a motor that hums and will not break away from standstill.',
    ],
    solution: ['Replaced the capacitor with a correctly rated part and ran the gate through several full cycles to confirm the fix held warm.'],
    outcome: 'Normal operation restored the same visit, with one of the least expensive parts on the gate.',
    takeaway:
      'A humming motor is the most commonly misdiagnosed symptom in gate repair. It points at the capacitor far more often than the motor — and a capacitor costs a tiny fraction of the operator that frequently gets quoted for it. If you are told a humming gate needs a new operator, get a second opinion.',
  },
  {
    slug: 'doorking-voip-call-box',
    title: 'DoorKing Call Box Went Silent Three Months After a Phone Upgrade',
    summary: 'The system was undamaged. The analogue line it needed had quietly disappeared.',
    market: 'california',
    verified: false,
    service: 'access-control-repair',
    brand: 'DoorKing',
    gateType: 'access-control',
    propertyType: 'hoa',
    mediaCategory: 'access-control',
    imageIndexes: [0, 2, 11],
    problem: [
      'Residents could no longer be called from the entry panel. The gate opened normally on codes and fobs, and the panel powered up and displayed correctly — it simply would not dial out.',
      'The community had changed phone providers roughly three months earlier. Nobody had connected the two events.',
    ],
    diagnosis: [
      'Confirmed the gate operator and access controller were both healthy by opening on a manual command and on a valid credential.',
      'Tested the line to the entry panel. The provider had migrated the property to VoIP, and the signalling the DoorKing unit expects for dial-out was no longer present.',
      'The hardware was undamaged throughout.',
    ],
    solution: [
      'Fitted a cellular module so the unit dials out over the mobile network independently of the building phone service.',
      'Rebuilt and documented the resident directory, which had partly degraded, and left a written record with the management company.',
    ],
    outcome: 'Dial-out restored without replacing the entry system, and the community is no longer dependent on the phone provider for gate access.',
    takeaway:
      'This catches out a great many communities, and almost always months after the phone change so the cause is not obvious. If your call box stopped working some time after a phone or internet upgrade, the fix is usually a cellular module — not the system replacement it typically gets quoted for.',
  },
  {
    slug: 'commercial-loop-detector-fault',
    title: 'Commercial Gate Ignoring Trucks — A Broken Loop, Not a Broken Operator',
    summary: 'Vehicles queuing at a yard entrance because of a cracked wire in the driveway.',
    market: 'california',
    verified: false,
    service: 'commercial-gate-repair',
    gateType: 'commercial',
    propertyType: 'industrial',
    mediaCategory: 'commercial-gate-repair',
    imageIndexes: [1, 4, 5],
    videoSlug: 'commercial-gate-repair-services-video-2',
    problem: [
      'The gate had stopped detecting approaching vehicles. Drivers were having to get out and use the keypad, and on a site running deliveries all day that was costing real time.',
      'It had been intermittent for a fortnight before failing completely.',
    ],
    diagnosis: [
      'The operator itself cycled correctly on manual command — so the fault was in detection, not in the gate.',
      'Tested the loop detector, which was healthy, then tested the buried loop itself. Resistance was out of range, consistent with a break in the loop wire.',
      'Surface cracking across the driveway lined up with where the loop runs, which is the usual cause: ground movement shears the wire.',
    ],
    solution: [
      'Cut in and installed a replacement loop, sealed correctly, and re-tuned the detector to the new loop.',
      'Tested with the site\'s own vehicles rather than a car, because detection sensitivity differs considerably between a saloon and a loaded truck.',
    ],
    outcome: 'Reliable vehicle detection restored across the range of vehicles actually using the entrance.',
    takeaway:
      'A gate that ignores vehicles is usually a detection problem, not an operator problem — and it is generally the fastest and cheapest thing on a commercial site to put right. Testing the loop before condemning the operator saves a great deal of money.',
  },
  {
    slug: 'iron-gate-post-movement',
    title: 'Iron Gate Dragging on the Driveway — The Post Had Moved, Not the Gate',
    summary: 'Straightening the gate would have hidden the problem for one season.',
    market: 'california',
    verified: false,
    service: 'iron-gate-repair',
    gateType: 'iron',
    propertyType: 'residential',
    mediaCategory: 'iron-gate-repair',
    imageIndexes: [2, 5, 7],
    videoSlug: 'iron-gate-repair-services-video-2',
    problem: [
      'A heavy wrought iron leaf had begun catching on the driveway and no longer met its latch. The operator was straining audibly on every cycle.',
    ],
    diagnosis: [
      'Checked the gate against a level and against its own frame — the leaf itself was still true.',
      'Checked the post. It was out of plumb, and the footing had moved.',
      'Hinge wear had accelerated as a result, because the leaf was hanging at an angle it was never designed to carry.',
    ],
    solution: [
      'Reset the post footing to proper depth, re-plumbed it, replaced the worn hinges, and re-hung the leaf square.',
      'Re-checked the operator afterwards. With the gate swinging freely again the strain disappeared and no operator work was needed.',
    ],
    outcome: 'Gate closing square against its latch with the original operator untouched.',
    takeaway:
      'Ground movement shifts gate posts, and expansive clay soils make this common. Straightening or adjusting the gate without addressing the post produces a repair that lasts until the next dry season — and in the meantime the operator is being destroyed by the load.',
  },
  {
    slug: 'solar-gate-battery',
    title: 'Solar Gate Failing After a Few Cycles — A Battery, Not a Motor',
    summary: 'A long rural driveway where the gate got weaker every week.',
    market: 'california',
    verified: false,
    service: 'electric-gate-repair',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'electric-gate-repair',
    imageIndexes: [3, 5, 6],
    videoSlug: 'electric-gate-repair-services-video',
    problem: [
      'The gate would open two or three times and then become too weak to complete its travel. Leaving it overnight restored a few more cycles. The owner had been told the motor was failing.',
    ],
    diagnosis: [
      'Load-tested the battery. It held voltage at rest and collapsed under load — the classic signature of a battery at end of life.',
      'Checked charge input. The solar panel had been progressively shaded by a tree that had grown since installation, so the battery had been running in permanent deficit and cycling deeply for a long time.',
      'The motor and board tested normally throughout.',
    ],
    solution: [
      'Replaced the battery and relocated the panel to a position with genuine unobstructed sun rather than convenient mounting.',
      'Verified charge current at the controller and confirmed the battery was recovering to full between cycles.',
    ],
    outcome: 'Consistent operation restored, and the new battery is no longer being deep-cycled — which is what shortened the life of the last one.',
    takeaway:
      'On solar gates the power system is the first thing to test, not the last. A tired battery produces symptoms indistinguishable from a failing motor and costs a fraction as much to fix. It is also worth checking what has grown near the panel since installation.',
  },
  {
    slug: 'emergency-gate-stuck-open',
    title: 'Gate Stuck Open Overnight at a Residential Property',
    summary: 'A security exposure treated as urgent regardless of the underlying fault.',
    market: 'california',
    verified: false,
    service: 'emergency-gate-repair',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'emergency-gate-repair',
    imageIndexes: [0, 5, 9],
    videoSlug: 'emergency-gate-repair-services-video',
    problem: [
      'The gate had opened normally and then failed to close, leaving the property open. The call came in after hours.',
    ],
    diagnosis: [
      'Talked the owner through securing the gate by hand on the phone before dispatch, so the property was not left open while a technician travelled.',
      'On site, the board was reporting an obstruction. Both photo-eyes were physically intact but one had been knocked out of alignment — a bracket had been clipped, most likely by a vehicle.',
      'The operator, drive and gate were all healthy.',
    ],
    solution: [
      'Realigned and re-secured the photo-eye bracket, then tested the safety circuit deliberately by interrupting the beam during a close cycle to confirm it stopped and reversed.',
    ],
    outcome: 'Gate closing normally with its safety system verified working — not bypassed.',
    takeaway:
      'A gate that refuses to close is usually the safety system doing exactly what it exists for. The correct repair is to remove what it is reacting to. Bypassing a photo-eye to "make it close" transfers the risk to whoever is next in the opening, and we will not do it.',
  },
  {
    slug: 'ramset-high-cycle-entrance',
    title: 'Ramset Operator Failing Every Few Months at an Apartment Entrance',
    summary: 'Not a defective unit — an operator running far past the duty cycle it was specified for.',
    market: 'california',
    verified: false,
    service: 'commercial-gate-repair',
    brand: 'Ramset',
    gateType: 'commercial',
    propertyType: 'hoa',
    mediaCategory: 'ramset',
    imageIndexes: [0, 2, 4],
    videoSlug: 'ramset-gate-motor-repair-video',
    problem: [
      'The same drive components had been replaced three times in under two years. Management were being told each time that it was a faulty part.',
    ],
    diagnosis: [
      'Estimated actual cycle count from resident numbers and delivery traffic. The entrance was running several times the volume the installed operator was specified for.',
      'The gate itself had also gained weight — infill panels had been added at some point after installation, which nobody had accounted for.',
      'Chain and sprocket wear was consistent with the traffic rather than with a defect.',
    ],
    solution: [
      'Replaced the worn drive components, then set out the options in writing for the board: a scheduled service interval matched to the real cycle count, or a correctly specified operator.',
      'Provided an itemised quote suitable for board approval rather than a verbal estimate.',
    ],
    outcome: 'Entrance returned to service, with the underlying cause documented so the decision could be made on evidence rather than on the third repair invoice.',
    takeaway:
      'When the same part fails repeatedly on a commercial gate it is almost never a defective part. It is duty cycle, or a gate that has become heavier or harder to move. Replacing the component again treats the symptom; measuring the traffic finds the cause.',
  },
  {
    slug: 'gate-installation-footings',
    title: 'New Automatic Gate Installation — Where the Cost Actually Goes',
    summary: 'Footings, conduit and safety devices: the parts nobody sees and everything depends on.',
    market: 'california',
    verified: false,
    service: 'gate-installation',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'gate-installation',
    imageIndexes: [1, 4, 8, 12],
    videoSlug: 'gate-installation-services-video',
    problem: [
      'A new driveway gate on a property with no existing power at the entrance, and soil conditions that punish shallow foundations.',
    ],
    diagnosis: [
      'Assessed soil, slope, drainage, gate weight and the practical route for power before anything was specified.',
      'Sized the operator to the gate weight and expected duty cycle with headroom, rather than to a price point — under-specifying is the most common cause of an installation that becomes an annual repair call.',
    ],
    solution: [
      'Set footings to proper depth and diameter for the soil conditions.',
      'Ran correctly sized conduit at depth that will survive future landscaping, with spare capacity for accessories added later.',
      'Installed photo-eyes to standard and commissioned the full system, including limit programming and a documented handover.',
    ],
    outcome: 'A gate specified with headroom on foundations that will hold — which is the difference between twenty years of service and a call-out every spring.',
    takeaway:
      'Most of what an installation costs is invisible once it is finished. When one quote is dramatically cheaper than another, the difference is usually footing depth, conduit, and whether the safety devices are actually being installed. Those are precisely the things you cannot inspect afterwards.',
  },
  {
    slug: 'elite-board-replacement',
    title: 'Elite Operator Dead With No Response — Board Confirmed Before Replacing',
    summary: 'Tested first, replaced second. The order matters more than people think.',
    market: 'california',
    verified: false,
    service: 'gate-motor-repair',
    brand: 'Elite',
    gateType: 'slide',
    propertyType: 'residential',
    mediaCategory: 'elite',
    imageIndexes: [1, 3, 6],
    videoSlug: 'elite-gate-motor-repair-video',
    problem: ['The gate had stopped responding to every input — remote, keypad and the manual button on the operator.'],
    diagnosis: [
      'Confirmed supply voltage at the transformer and at the board input. Both normal, ruling out the breaker and the power run.',
      'No diagnostic LED activity at all, which distinguishes a dead board from a board reporting a fault.',
      'Checked for insect nesting and moisture ingress in the enclosure, both of which cause board failures that look catastrophic and are preventable.',
    ],
    solution: [
      'Replaced the control board, reprogrammed limits and re-paired the remotes and keypad.',
      'Replaced the perished enclosure gasket, since the moisture that killed the board would have killed the new one on the same timeline.',
    ],
    outcome: 'Full function restored, with the cause of the failure addressed rather than just its consequence.',
    takeaway:
      'Replacing a board without finding out why it failed means replacing it again. A perished gasket, a cracked housing or a wasp nest is usually the actual cause, and it costs almost nothing to fix at the same time.',
  },
  {
    slug: 'viking-heavy-gate-load',
    title: 'Viking Operator on a Heavy Gate — The Gate Was the Problem',
    summary: 'A heavy leaf that had become harder to move was destroying an otherwise healthy operator.',
    market: 'california',
    verified: false,
    service: 'automatic-gate-repair',
    brand: 'Viking',
    gateType: 'swing',
    propertyType: 'residential',
    mediaCategory: 'viking',
    imageIndexes: [0, 2, 3],
    videoSlug: 'viking-gate-motor-repair-video',
    problem: [
      'The gate had become slow and was occasionally stopping short. It had been getting gradually worse rather than failing suddenly.',
    ],
    diagnosis: [
      'Released the operator and moved the gate by hand. It required significantly more effort than it should, particularly through the last third of travel.',
      'Hinge wear on a heavy leaf, compounded by the leaf hanging slightly low.',
      'The operator was being asked to overcome that resistance on every cycle, which is why it appeared to be weakening.',
    ],
    solution: [
      'Replaced the hinges, re-hung the leaf true, and re-checked by hand through full travel before touching the operator.',
      'Re-learned the operator limits once the gate moved freely, since the previous positions had been set against a binding gate.',
    ],
    outcome: 'Full speed and force restored with no operator components replaced.',
    takeaway:
      'An operator is sized to move a gate that swings freely. When the gate gets harder to move, the operator looks like it is failing — and replacing it simply hands the same problem to a new unit. Always check the gate by hand first.',
  },
]

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
export const projectsForService = (service: string) => projects.filter((p) => p.service === service)
export const projectsForBrand = (brand: string) =>
  projects.filter((p) => p.brand?.toLowerCase() === brand.toLowerCase())
