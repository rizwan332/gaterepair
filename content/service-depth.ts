/**
 * Long-form depth for service pages, keyed by slug.
 *
 * Why this exists: the service pages were 794 words with **zero H3s** — shorter
 * than Star Gate's best page (~1,100 words), which is the strongest writing in
 * the DFW market. These pages target the highest-volume commercial terms, so
 * being shallower than the competitor we claim to beat is the largest remaining
 * organic gap.
 *
 * Structure matters as much as length. Each `Passage` renders as an H3 with its
 * own self-contained answer, which is what lets Google surface a specific
 * passage rather than the whole page. Length alone would just be padding.
 *
 * Geographic rule: North Texas *conditions* (expansive clay, summer heat, storm
 * season) are legitimate to discuss — they are facts about the service area.
 * Specific past jobs are not claimed, because the photo library is California
 * work. See MEDIA-PROVENANCE.md.
 */

import type { Passage } from './services'

export type ServiceDepth = {
  causes: Passage[]
  maintenance: Passage[]
  repairVsReplace?: string[]
  extraFaqs?: { q: string; a: string }[]
}

export const SERVICE_DEPTH: Record<string, ServiceDepth> = {
  // ------------------------------------------------------------------------
  'gate-motor-repair': {
    causes: [
      {
        heading: 'Capacitor failure — the most common fault, and the cheapest',
        body: [
          'A single-phase gate motor cannot start on its own. It needs a capacitor to give the windings a phase shift and get the rotor turning. When that capacitor degrades — and they all degrade, typically within eight to twelve years — the motor still receives power but can no longer break away from standstill. What you hear is a hum, sometimes a click, and nothing moves.',
          'It is worth knowing this because a humming motor is the symptom most often misdiagnosed as a dead operator. A capacitor is one of the least expensive parts on a gate and takes minutes to swap. If someone quotes you a replacement operator for a gate that hums, get a second opinion before you agree to it.',
          'Heat accelerates the failure. In North Texas a capacitor spends four months a year in an enclosure sitting in direct afternoon sun, which is why we see a seasonal spike in exactly this fault every August.',
        ],
      },
      {
        heading: 'Control board failure and what the error codes actually mean',
        body: [
          'The control board is the operator\'s logic: it reads the safety devices, decides when the gate may move, drives the relays and tracks position. Boards fail from voltage spikes, water ingress through a perished gasket, insect nests bridging terminals, and simple age.',
          'Most modern boards blink a diagnostic code rather than dying silently. A board reporting an obstruction is usually telling the truth — the fault is a photo-eye or a safety loop, not the board itself. A board reporting a limit error usually means the switches have drifted rather than failed. Reading the code before replacing anything is the difference between a fifteen-minute adjustment and an unnecessary board.',
          'When a board genuinely has failed, replacement is straightforward on any operator still supported by its manufacturer, and dramatically cheaper than a new operator.',
        ],
      },
      {
        heading: 'Limit switch drift — why a gate slowly stops closing properly',
        body: [
          'Limit switches tell the operator where the gate\'s travel begins and ends. On mechanical limits, cams turn on a threaded shaft and can slip a fraction of a turn at a time; on magnetic and encoder-based systems, position can be lost after a power interruption or a forced manual move.',
          'The tell is gradual rather than sudden: the gate stops slightly short, then a little shorter, until it no longer latches or no longer clears the driveway. People often live with this for months and then call when it finally stops closing altogether.',
          'Adjustment is usually all that is required. If the switch itself has failed it is an inexpensive part. What matters is diagnosing it as a limit problem rather than assuming the operator is losing power.',
        ],
      },
      {
        heading: 'The gate itself, not the operator',
        body: [
          'This is the single most expensive misdiagnosis in the trade. An operator is sized to move a gate that swings or rolls freely. When hinges wear, rollers flat-spot, a track fills with grit, or a post moves, the gate becomes progressively harder to move — and the operator strains on every cycle until something in it gives out.',
          'Replace the operator without fixing the gate and the new one fails the same way, usually within a year. This is why we release the operator and move the gate by hand before touching anything electrical. If it does not move freely, we have found the real fault regardless of what the board is reporting.',
          'North Texas makes this common. Expansive clay soil swells through a wet spring and shrinks hard through a dry August, and gate posts move with it. A gate that closed perfectly in April can be binding by August with nothing having been touched.',
        ],
      },
      {
        heading: 'Thermal cutout and motor wear',
        body: [
          'Operators have a thermal cutout that shuts the motor down before it cooks itself. A gate that works normally in the morning and stops responding on a hot afternoon is usually tripping that cutout — and the cutout is doing its job. The question is why the motor is running that hot.',
          'Usually it is load: the gate is harder to move than it should be, so every cycle draws more current and generates more heat. Occasionally it is the motor itself, with worn brushes or failing bearings. Either way, a gate that overheats intermittently is giving you notice before it fails completely, and it is far cheaper to investigate at that point.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'What you can do yourself, twice a year',
        body: [
          'Release the operator and move the gate by hand. It should move smoothly with light effort through its whole travel. Anything that binds, grinds or needs a shove is a problem developing, and catching it here is the cheapest it will ever be.',
          'Wipe the photo-eye lenses. Spider webs and dust across a photo-eye are the single most common cause of a gate that opens but refuses to close, and it costs nothing to prevent.',
          'Clear the track on a slide gate. Gravel and grit grind rollers flat and make the operator work far harder than it should.',
          'Look inside the operator housing for wasp and ant nests. Insects bridging board terminals cause faults that look electrically catastrophic and are not.',
        ],
      },
      {
        heading: 'What needs a technician',
        body: [
          'Chain tension, limit positions, clutch settings, safety-device testing and battery load-testing all need someone who knows the specific operator. On a residential gate, once a year is sensible. On a commercial or multi-family entrance running hundreds of cycles a day, quarterly is realistic — those gates wear parts on a completely different timeline.',
        ],
      },
    ],
    repairVsReplace: [
      'Under about ten years old: repair, almost always. Boards, capacitors, limit switches and gearboxes are all serviceable, and parts are current.',
      'Ten to fifteen years: repair is usually still the better economics, but ask about parts availability before committing to a large job.',
      'Past fifteen years: it depends on the manufacturer. Some operators are still fully supported at twenty-five years; others become scavenger hunts. When you start paying for the same visit twice a year, replacement is the cheaper decision.',
      'Any age, if the housing or drive assembly is physically destroyed: replace.',
    ],
    extraFaqs: [
      {
        q: 'My gate hums but will not move. Is the motor dead?',
        a: 'Usually not. That symptom points at the capacitor far more often than the motor, and a capacitor is one of the least expensive parts on the whole gate. The other possibility is that the gate itself is binding and the operator cannot overcome it — which is a gate problem, not a motor problem. Either way, "the motor is dead, you need a new operator" is a conclusion that should come after testing, not before.',
      },
      {
        q: 'How long does a gate operator normally last?',
        a: 'A residential operator on a well-hung gate commonly runs fifteen to twenty years with basic servicing. The parts that fail along the way — capacitors, boards, limit switches — are all inexpensive relative to replacement. What shortens that life is a gate the operator has to fight, which is why gate alignment matters more to operator longevity than the brand on the housing.',
      },
      {
        q: 'Do you work on gate operators you did not install?',
        a: 'Yes, and that is most of what we do. We regularly work on equipment where the original installer is long gone and no documentation exists.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'emergency-gate-repair': {
    causes: [
      {
        heading: 'Why a gate stuck open is urgent even when nothing looks broken',
        body: [
          'An open gate is an open property. For a home it means the driveway, side access and often the garage are exposed; for an apartment community it means the controlled-access amenity residents are paying for has stopped existing; for a business it means the yard is open overnight.',
          'We treat gate-stuck-open as urgent regardless of the underlying fault, because the security exposure is the same whether the cause is a failed board or a spider on a photo-eye.',
        ],
      },
      {
        heading: 'Gate stuck closed — get in or out first',
        body: [
          'Almost every automatic operator has a manual release: usually a key-operated lever or a pull handle on the housing that disengages the drive so the gate can be moved by hand. Location and mechanism vary by manufacturer, which is why it is worth calling before forcing anything.',
          'We will talk you through the release for your specific unit on the phone, before a technician is dispatched. Forcing a gate against an engaged drive is how a nuisance fault becomes a bent gate and a stripped gearbox.',
        ],
      },
      {
        heading: 'A gate closing on vehicles or people — stop using it',
        body: [
          'If a gate is closing on obstructions, its safety devices have failed and the gate should not be operated until it is repaired. Photo-eyes, safety edges and reversing loops exist because automatic gates are heavy powered machinery capable of causing serious injury.',
          'Disable the automatic operation, leave the gate in a safe position, and call. This is the one fault where waiting is genuinely dangerous rather than merely inconvenient.',
        ],
      },
      {
        heading: 'Vehicle impact',
        body: [
          'Impact damage almost always involves more than the visible bend. Posts get pushed out of plumb, hinges are distorted, tracks are knocked out of line and the operator is left trying to move a gate that no longer travels true.',
          'Repair sequence matters: structure first, then alignment, then the operator, then the safety devices. Fitting a new operator to a distorted gate simply destroys the new operator too.',
        ],
      },
      {
        heading: 'Electrical emergencies',
        body: [
          'Sparking, a burning smell or smoke means killing power at the breaker before anything else. Do not operate the gate and do not open the housing. These are usually a shorted transformer, a failed board or water ingress into a live enclosure, and all of them are repairable — after the circuit is safely isolated.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'Know where your manual release is before you need it',
        body: [
          'The worst time to learn how to release your gate is when you are already blocked in. Find the release now, try it once, and make sure whoever else uses the property knows where it is. On most operators it is a keyed lever behind a small cover on the housing.',
        ],
      },
      {
        heading: 'Test your safety devices quarterly',
        body: [
          'Wave an object through the photo-eye beam while the gate closes. It should stop and reverse immediately. If it does not, the gate is unsafe and needs attention before it is used again — this is a five-second test that prevents the most serious class of gate accident.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'What counts as an emergency?',
        a: 'A gate stuck open, a gate trapping vehicles or people, a gate closing on obstructions, visible electrical faults, impact damage, and any commercial entrance failure during operating hours. If you are unsure, call — we would rather tell you it can wait until tomorrow than have you sit on something that cannot.',
      },
      {
        q: 'Will an after-hours call cost more?',
        a: 'Ask when you call and we will tell you plainly before anyone is dispatched, not after the work is done.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'automatic-gate-repair': {
    causes: [
      {
        heading: 'Safety sensors — why a gate opens but will not close',
        body: [
          'This is the single most common automatic gate fault and one of the least expensive to fix. Photo-eyes sit either side of the opening and hold the gate open whenever the beam is broken. They are also, by design, paranoid: anything interrupting or misaligning that beam produces the same result as a genuine obstruction.',
          'Common causes are a spider web across the lens, a bracket knocked by a vehicle or a mower, low winter sun striking the receiver directly, dust build-up, and a loose terminal in the wiring run. In most cases cleaning and realignment is the whole repair.',
          'It is worth stressing that a gate refusing to close is the safety system working correctly. The fix is to remove what it is reacting to — never to bypass it.',
        ],
      },
      {
        heading: 'Loop detectors and buried loops',
        body: [
          'Many automatic gates use a wire loop buried in the driveway to detect vehicles, either to open the gate or to hold it open while a car passes. Loops break when the ground moves, when the surface cracks, or when other work is done on the driveway; detectors fail from surges and age.',
          'A gate that ignores approaching vehicles, or closes while a car is still in the opening, is usually a loop or detector problem rather than an operator problem. Testing the detection side first avoids replacing perfectly healthy equipment.',
        ],
      },
      {
        heading: 'Rollers, hinges and track wear',
        body: [
          'Mechanical wear rarely announces itself. It shows up as noise, then as sluggish travel, then as an operator that stalls or trips its thermal cutout. Slide gate rollers develop flats, tracks fill with grit, and swing gate hinges wear until the leaf drops and drags.',
          'Catching this early is the difference between a set of rollers and a gearbox. A gate that has started making a noise it did not used to make is telling you something worth listening to.',
        ],
      },
      {
        heading: 'Remotes, receivers and keypads',
        body: [
          'When the keypad works and the remote does not — or vice versa — the operator is fine and the fault is in that specific input. Remotes lose programming, batteries fail, receivers degrade, and keypads wear out at the buttons people press most.',
          'This is normally the least expensive category of call we take, and it is worth ruling out before anyone starts talking about the operator.',
        ],
      },
      {
        heading: 'Gates that open on their own',
        body: [
          'A gate opening unprompted is usually a stuck remote button in a car or a drawer, a failing receiver picking up ambient RF, or a loop detector falsely triggering. It is unsettling and it is also a genuine security issue, so it is worth diagnosing rather than living with.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'A five-minute monthly check',
        body: [
          'Watch a full open-and-close cycle and listen. New noises, hesitation or a change in speed are all early warnings. Wipe the photo-eye lenses, clear anything from the track, and check that the gate closes fully against its stop.',
        ],
      },
      {
        heading: 'Lubrication — less than people think',
        body: [
          'Hinges and rollers benefit from occasional lubrication. Chains generally do not need household oil, and grease attracts the grit that wears sprockets. If you are unsure, leave it — over-lubrication causes more service calls in this trade than under-lubrication.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'Why does my gate open but refuse to close?',
        a: 'Nine times out of ten it is a safety sensor seeing something that is not there. Photo-eyes hold the gate open whenever their beam is interrupted, and a spider web, a knocked bracket or low sun in the receiver all produce exactly that. It is one of the least expensive faults we fix, and it means your safety system is working.',
      },
      {
        q: 'Can I disable the safety sensors to make it close?',
        a: 'No, and we will not do it either. Those devices exist because an automatic gate is heavy powered machinery. Bypassing them transfers the risk to whoever is next in the opening.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'electric-gate-repair': {
    causes: [
      {
        heading: 'Supply, breakers and transformers',
        body: [
          'Before anything is blamed on the operator, the power path has to be confirmed: supply voltage at the source, at the transformer, and at the board. Gate circuits are frequently on a breaker nobody remembers, sometimes shared with landscape lighting or an irrigation controller, and a tripped breaker presents identically to a dead operator.',
          'Transformers fail with age and with surges. A transformer putting out low voltage produces intermittent, baffling behaviour — the gate works sometimes, struggles other times, and appears to have a mind of its own.',
        ],
      },
      {
        heading: 'Buried cable faults on long runs',
        body: [
          'Gates are often a long way from the building, and the cable between them is buried. That run gets damaged by landscaping, fence work, rodents and ground movement, and the damage is rarely visible.',
          'The symptom is intermittency: a gate that works, then does not, then does again after rain or after a hot afternoon. Tracing the fault properly is almost always cheaper than the default of replacing the entire run, and it is the part of this work most companies skip.',
        ],
      },
      {
        heading: 'Corrosion and moisture ingress',
        body: [
          'Outdoor enclosures rely on gaskets that perish. Once moisture is inside, terminals corrode, boards develop tracking faults and connections that test fine on a dry day fail on a wet one. Storm season in North Texas makes this a seasonal pattern rather than a random one.',
          'The repair is not just replacing the corroded part but restoring the enclosure seal, otherwise the same fault returns.',
        ],
      },
      {
        heading: 'Solar and battery-backed gates',
        body: [
          'Solar gates are common on long rural driveways where trenching mains power was never practical. They run on a battery that the panel keeps topped up, and battery life is finite.',
          'A tired battery runs a handful of cycles then sags below the operator\'s threshold. To the owner this reads exactly like a dying motor — the gate gets slower and weaker and eventually stops. Load-testing the battery takes minutes and is the first thing that should happen on any solar gate call.',
          'The other common solar fault is charging rather than storage: a panel shaded by a tree that has grown, or a charge controller that has failed. Both are inexpensive compared with the operator replacement they are often mistaken for.',
        ],
      },
      {
        heading: 'Shorts and tripping breakers',
        body: [
          'A gate circuit that trips its breaker has a short somewhere, and continuing to reset it is not a solution. Isolating accessories one at a time — keypad, loop detector, photo-eyes, call box — identifies which leg is faulty without replacing the whole system on suspicion.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'Know where your gate breaker is',
        body: [
          'It sounds obvious and it saves a call-out. If the gate is completely dead, checking the breaker takes thirty seconds. Label it once and you will never wonder again.',
        ],
      },
      {
        heading: 'Batteries are consumables',
        body: [
          'On solar and battery-backed gates, plan on replacing the battery every three to five years. It is far cheaper to replace on schedule than to discover it at the point the gate stops working, and it prevents the deep-discharge cycles that shorten the replacement\'s life too.',
        ],
      },
      {
        heading: 'Keep the enclosure sealed',
        body: [
          'If the operator housing has a cracked cover, a perished gasket or a missing screw, water gets in and the expensive parts corrode. Reporting a damaged housing early is one of the highest-value things a property owner can do.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'My solar gate stops working after a few opens. Is the motor failing?',
        a: 'Almost certainly the battery, not the motor. Solar gate batteries have a finite life and a tired one will run a few cycles then drop below the voltage the operator needs. It looks exactly like a failing motor and costs a fraction as much to fix. We load-test rather than guess.',
      },
      {
        q: 'My gate only plays up when it rains. Why?',
        a: 'Moisture ingress. Either the operator enclosure is no longer sealed, or a buried cable run has damaged insulation and is going to ground when the soil is wet. Both are traceable and both are cheaper to fix than the intermittent fault they cause suggests.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'iron-gate-repair': {
    causes: [
      {
        heading: 'Hinge wear and sagging leaves',
        body: [
          'A wrought iron driveway gate is heavy, and every gram of that weight hangs on its hinges through tens of thousands of cycles. Hinge pins wear oval, bushings wear through, and the leaf gradually drops until it drags on the driveway or no longer meets its latch.',
          'Because it happens slowly, people usually blame the operator, which by that point is genuinely struggling — it is being asked to drag a gate across concrete. Re-hanging the gate and replacing the hinges fixes both problems, and it is considerably cheaper than the operator replacement often quoted for the symptom.',
        ],
      },
      {
        heading: 'Cracked welds and metal fatigue',
        body: [
          'Welds crack at the joints that carry the most cyclic load — usually the corners of the frame and the point where the operator arm attaches. This is normal fatigue on a gate that has been in service for decades, not a sign the gate was badly made.',
          'Repair means cutting out the failed weld, re-welding properly, grinding back and refinishing so the repair is not visible. A cracked frame joint left running will propagate, and eventually the leaf distorts far enough that straightening becomes a much larger job.',
        ],
      },
      {
        heading: 'Post movement in expansive clay',
        body: [
          'Much of North Texas sits on expansive clay that swells when wet and shrinks hard through a dry summer. Gate posts move with it — sometimes a surprising amount over a single season.',
          'The result is a gate that closed square in spring and binds by August with nothing having been touched. Straightening or adjusting the gate without addressing the post means the same problem returns the following year. Where footings have moved significantly, resetting them is the durable repair.',
        ],
      },
      {
        heading: 'Rust, particularly at the bottom rail',
        body: [
          'Iron gates are usually built from hollow section, and water finds its way inside. It sits in the bottom rail, and corrosion works outward from within — which is why a gate can look sound and still be structurally compromised at the bottom.',
          'Repair means cutting out the affected section, welding in new material, sealing it properly so water cannot re-enter, and refinishing. Patching over rust without removing it simply hides the problem for a season.',
        ],
      },
      {
        heading: 'Impact damage and decorative repair',
        body: [
          'Custom ironwork is generally worth repairing rather than replacing, because you cannot buy it off a shelf. Bent sections can be straightened or replaced, broken scrollwork can be fabricated to match, and a well-executed repair is invisible once refinished.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'Touch up the finish before rust starts',
        body: [
          'Chips in the coating are where corrosion begins. Cleaning and touching up a chip takes minutes; cutting out a rusted bottom rail takes a day. Walk the gate once a year and address anything down to bare metal.',
        ],
      },
      {
        heading: 'Watch the gap at the bottom',
        body: [
          'The clearance between the gate and the driveway is the easiest early warning of hinge wear or post movement. If that gap has visibly changed, something has moved — and it is much cheaper to correct before the gate is dragging.',
        ],
      },
      {
        heading: 'Keep water out of the hollow sections',
        body: [
          'If your gate has drainage holes at the bottom, keep them clear. If it does not and it is holding water, that is worth raising — a few drilled and sealed drain points can add years to a gate\'s life.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'My iron gate is dragging. Is the gate bent?',
        a: 'More often the hinges have worn or the post has moved. North Texas clay shifts gate posts seasonally and decades-old hinges develop play. Straightening or forcing the gate without fixing the post or the hinge means it will be dragging again within a season.',
      },
      {
        q: 'Can you match the finish on an older gate?',
        a: 'In most cases yes. We grind, prime and refinish the repaired section so it blends rather than leaving a visible patch.',
      },
      {
        q: 'Is it worth repairing an old custom gate, or should I replace it?',
        a: 'Repair, in almost every case. Custom ironwork cannot be bought off a shelf, and the parts that fail — welds, hinges, bottom rails — are all repairable. Replacement makes sense only when the gate is comprehensively corroded rather than locally damaged.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'commercial-gate-repair': {
    causes: [
      {
        heading: 'Duty cycle — why commercial gates fail differently',
        body: [
          'A residential driveway gate might run six cycles a day. An apartment entrance runs several hundred. A logistics yard can run more. Every part in the drive train wears on cycle count, not on calendar age, so a component rated for a decade of residential use can be finished in months on a commercial entrance.',
          'This is why "we just replaced that part" is such a common complaint on commercial gates, and why replacing it again is rarely the right answer. When the same component fails repeatedly, either the operator is under-specified for the traffic or something about the gate is making it work harder than it should.',
        ],
      },
      {
        heading: 'Loop detectors and vehicle detection',
        body: [
          'Commercial entrances depend on buried loops to detect vehicles — to open, to hold open while a truck passes, and to prevent the gate closing on a vehicle. Loops crack with ground movement and with surface work; detectors fail from surges and heat.',
          'A gate ignoring approaching vehicles, or closing while one is still in the opening, is a detection fault rather than an operator fault. On a site where trucks are queuing it is also usually the fastest thing to put right.',
        ],
      },
      {
        heading: 'Access control integration',
        body: [
          'On most commercial sites the gate is one component in a larger system: card readers, telephone entry, intercoms, fobs, keypads and a controller. When credentials stop working but the gate still opens on a manual command, the fault is in the access control rather than the gate.',
          'Diagnosing both sides in a single visit avoids paying twice — and it avoids the common outcome where an operator is replaced and the actual problem, a failed reader or controller, is still there afterwards.',
        ],
      },
      {
        heading: 'Barrier arms',
        body: [
          'Barrier arms fail at the motor, the board, or the counterbalance spring. Counterbalance in particular is often overlooked: an out-of-balance arm makes the motor work far harder than it was designed to and shortens its life dramatically.',
          'Arms also take a lot of impact damage, which usually means a broken arm and a distorted mount rather than an operator fault.',
        ],
      },
      {
        heading: 'Multi-gate properties',
        body: [
          'When several gates on one site misbehave together, the cause is almost always shared: a common power supply, a single controller, or a network fault. Diagnosing them as separate problems wastes a great deal of time and money.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'Scheduled maintenance actually pays here',
        body: [
          'On a high-cycle entrance, planned servicing is cheaper than reactive repair by a wide margin — because the failures are predictable. Chains stretch, rollers wear, hinges loosen and safety devices drift out of alignment on a schedule you can anticipate.',
          'Quarterly is realistic for a busy apartment or logistics entrance; twice a year suits a lower-traffic commercial site.',
        ],
      },
      {
        heading: 'What property managers should log',
        body: [
          'Keeping a simple record of failures — date, symptom, part replaced — turns a series of unrelated call-outs into a pattern. That pattern is usually what identifies an under-specified operator or a developing gate fault, and it makes the case for a permanent fix much easier to put to a board.',
        ],
      },
      {
        heading: 'Safety compliance',
        body: [
          'Commercial and multi-family gates carry a genuine duty of care. Photo-eyes, safety edges and reversing loops should be tested regularly and documented. A gate that closes on a vehicle at a residential property is an expensive problem; at a managed property it is a considerably more serious one.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'Our apartment gate keeps breaking. Is it a bad operator?',
        a: 'Sometimes, but more often the operator was correctly specified when the property was quieter and is now well past its intended duty cycle — or the gate itself is making it work far harder than it should. Replacing the same part repeatedly is the tell. We assess actual cycle count against the installed unit and tell you whether the answer is a repair, a service schedule, or a properly specified operator.',
      },
      {
        q: 'Do you work with property managers and HOA boards?',
        a: 'Yes, including multi-gate properties, scheduled maintenance agreements and itemised written quotes suitable for board approval.',
      },
      {
        q: 'How fast can you respond to a commercial entrance failure?',
        a: 'We treat a commercial gate down during operating hours as urgent — it is a business-stopping problem, not an inconvenience. Call and we will give you a real arrival window.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'access-control-repair': {
    causes: [
      {
        heading: 'The analogue phone line problem',
        body: [
          'Older telephone entry systems were built to dial out over an analogue copper line. When a property moves to VoIP, fibre or a modern PBX, the signalling those units expect is no longer present and they simply stop dialling — even though the hardware is undamaged and everything else about the gate works.',
          'This catches out a great many communities, usually months after the phone change, because nobody connects the two events. The fix is normally a cellular module rather than a whole new system, which is considerably cheaper than the replacement often quoted.',
        ],
      },
      {
        heading: 'Readers, fobs and credentials',
        body: [
          'When credentials stop being accepted but the gate still opens on a manual command, the gate is fine. The fault is in the reader, the wiring to it, or the controller that decides what is valid.',
          'Readers fail from weather, surge and simple wear. Fobs and cards demagnetise or lose battery. Controllers lose their credential database after a power event if the backup battery has failed — which is why an apparently random loss of all access is worth investigating as a controller problem rather than a mass fob failure.',
        ],
      },
      {
        heading: 'Keypads',
        body: [
          'Keypads wear at the buttons people press most, which is why a code with a repeated digit often fails first. Membrane keypads perish in sun; metal keypads survive longer but are not immune. Replacement is straightforward and inexpensive.',
        ],
      },
      {
        heading: 'Intercom audio faults',
        body: [
          'One-way audio, distortion or excessive noise is usually the speaker, the microphone, or line quality rather than the whole unit. On systems that have been converted to VoIP, audio quality problems are frequently the network rather than the hardware — which is worth establishing before replacing anything.',
        ],
      },
      {
        heading: 'Directory and programming loss',
        body: [
          'Where a management company has changed and no records were handed over, the directory and access codes often become a black box. On most common systems we can access, rebuild and document the programming rather than replacing hardware that works perfectly well.',
          'A gate letting in codes that should have been revoked is a security problem rather than a maintenance one, and should be treated with the same urgency as a gate stuck open.',
        ],
      },
      {
        heading: 'Surge damage',
        body: [
          'Access control sits at the end of long cable runs across open ground, which makes it unusually exposed to storm surge. Damaged controllers after a storm are common in North Texas, and surge protection is worth fitting at the same time as the repair rather than waiting for the next one.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'Audit your credential list annually',
        body: [
          'Old residents, former staff and lost fobs accumulate. An annual audit is the single most valuable access control maintenance task and costs nothing but time.',
        ],
      },
      {
        heading: 'Keep the programming documented',
        body: [
          'Master codes, installer codes and directory structure should live somewhere other than one person\'s memory. The most expensive access control call-outs we attend are the ones where nobody knows how the system was set up.',
        ],
      },
      {
        heading: 'Tell us before you change phone providers',
        body: [
          'If a property is moving off an analogue line and has an older telephone entry system, planning the cellular conversion in advance is far cheaper and less disruptive than discovering it when the call box goes silent.',
        ],
      },
    ],
    extraFaqs: [
      {
        q: 'Our call box stopped working after we changed phone providers. Why?',
        a: 'Older telephone entry systems rely on an analogue line. Moving to VoIP or fibre removes the signalling they expect and they stop dialling out. The usual fix is a cellular module rather than a whole new system.',
      },
      {
        q: 'Can you reprogram a system when the previous manager left no records?',
        a: 'Usually yes. We can access and rebuild the directory, codes and credentials on most common systems, and we document it so the next person is not in the same position.',
      },
      {
        q: 'The gate opens but our cards do not work. Is the gate broken?',
        a: 'No — if it opens on a manual command the operator is healthy. The fault is in the reader, its wiring, or the controller. Diagnosing both together in one visit avoids two separate call-outs.',
      },
    ],
  },

  // ------------------------------------------------------------------------
  'gate-installation': {
    causes: [
      {
        heading: 'Why footings decide whether the gate lasts',
        body: [
          'Almost everything that goes wrong with a gate in its first five years traces back to the groundwork. Posts carry enormous leverage — a long leaf multiplies its own weight into the footing every time it swings — and North Texas clay is actively hostile to shallow foundations.',
          'Footings set to proper depth and diameter for the soil are the difference between a gate that stays square for twenty years and one that needs adjusting every season. It is also the part of the job that is invisible once finished, which is exactly why it is the part most often economised on.',
        ],
      },
      {
        heading: 'Specifying the operator to the gate, not to a price',
        body: [
          'Operators are rated by gate weight, gate length and duty cycle. Fitting a residential-rated unit to a heavy custom gate, or to an entrance that will run hundreds of cycles a day, produces an operator that is working at its limit from the first day and fails early.',
          'Weight is frequently underestimated, particularly on gates that will later be clad or have infill panels added. Specifying with headroom costs a little more once and saves a great deal later.',
        ],
      },
      {
        heading: 'Power, conduit and doing the trenching once',
        body: [
          'Getting mains power to a gate is the single most disruptive part of an installation, and it is worth doing properly the first time — correctly sized conduit, spare capacity for future accessories, and depth that will survive landscaping.',
          'Where trenching genuinely is not practical, solar with battery backup is a proven solution on long rural driveways. It needs the panel sited for real sun rather than convenience, and the battery treated as a consumable.',
        ],
      },
      {
        heading: 'Safety devices are not optional',
        body: [
          'A powered gate needs photo-eyes and, depending on configuration, safety edges and reversing loops. These are the parts of an installation a homeowner cannot easily assess, and they are the parts a cheap quote quietly omits.',
          'Beyond the obvious duty of care, a gate without proper safety devices is a liability question at a residence and a considerably more serious one at a managed property.',
        ],
      },
      {
        heading: 'Automating an existing gate',
        body: [
          'Retrofitting an operator to a manual gate is often viable and considerably cheaper than a new gate, but it depends on three things: the gate\'s weight, the condition of its hinges and posts, and whether power can sensibly reach the location.',
          'A gate that does not swing freely by hand will not swing freely under power. Where the hinges or posts need work, doing that first is not an upsell — it is the difference between an installation that works and one that fails within a year.',
        ],
      },
    ],
    maintenance: [
      {
        heading: 'The first year matters most',
        body: [
          'New installations settle. Checking alignment, limits and safety devices after the first season catches small movements before they become wear, and it is the cheapest service visit a gate will ever have.',
        ],
      },
      {
        heading: 'Keep the documentation',
        body: [
          'Operator model, installation date, programming codes and safety device positions are worth keeping somewhere findable. Most of the difficult service calls we attend involve equipment nobody has any records for.',
        ],
      },
    ],
    repairVsReplace: [
      'Gate structurally sound, operator failed: replace the operator only.',
      'Gate sound but posts have moved: reset the footings before anything else — a new operator on a misaligned gate fails the same way.',
      'Gate corroded through at the bottom rail but otherwise good: repair. Custom ironwork is worth saving.',
      'Gate comprehensively corroded or repeatedly damaged: replacement becomes the cheaper decision.',
    ],
    extraFaqs: [
      {
        q: 'Why does gate installation cost more than I expected?',
        a: 'Because most of the cost is not the gate. It is the footings, the trenching, the conduit, the power run, the safety devices and the commissioning. Skipping any of it is how you end up with a gate that needs repairing every year. For reference, published figures in the Dallas market put a residential automatic opener installation somewhere in the $2,500–$7,500 range depending on site conditions.',
      },
      {
        q: 'Can you automate the gate I already have?',
        a: 'Often yes. It depends on the gate\'s weight, the condition of the hinges and posts, and whether power can reach the location sensibly. We assess all three before quoting, because automating a gate that does not swing freely by hand simply transfers the problem to the new operator.',
      },
      {
        q: 'How long does an installation take?',
        a: 'A straightforward operator retrofit to a sound existing gate is often a day. A new gate with footings, trenching and access control is typically two to three days, plus curing time for concrete before the gate is hung.',
      },
    ],
  },
}
