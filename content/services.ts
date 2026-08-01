/**
 * Service pages, derived from the client's actual photo library rather than a
 * generic keyword list. Every service here has real photography behind it, and
 * most have video — which no DFW competitor has at all.
 *
 * `legacyPath` preserves the existing WordPress URLs for 1:1 301s.
 */

export type Symptom = { seeing: string; means: string }

export type Service = {
  slug: string
  legacyPath: string | null
  name: string
  /** Photo category in media-manifest.ts */
  mediaCategory: string
  navLabel: string
  headline: string
  /** Opens on the reader's problem, never on the company. */
  intro: string
  /** No DFW competitor publishes a symptom table. This is how people search. */
  symptoms: Symptom[]
  process: string[]
  faqs: { q: string; a: string }[]
  relatedBrands: string[]
  priority: number
}

export const services: Service[] = [
  {
    slug: 'gate-motor-repair',
    legacyPath: '/gate-motor-repair-services/',
    name: 'Gate Motor & Operator Repair',
    mediaCategory: 'automatic-gate-repair',
    navLabel: 'Gate Motor Repair',
    headline: 'Gate Motor & Operator Repair in Dallas–Fort Worth',
    intro:
      'Your gate hums but does not move. Or it clicks and stops. Or it opens halfway and gives up. Nine times out ' +
      'of ten that is the control board, a limit switch, or a failed capacitor — not the whole operator. We ' +
      'diagnose which, tell you what it costs, and usually fix it the same day.',
    symptoms: [
      { seeing: 'Motor hums, gate does not move', means: 'Seized gearbox, failed capacitor, or the gate is binding on its track' },
      { seeing: 'Clicks once, then nothing', means: 'Dead capacitor or a control board relay' },
      { seeing: 'Opens partway then stops or reverses', means: 'Limit switch out of adjustment, or a safety sensor seeing an obstruction' },
      { seeing: 'Keypad works, remote does not', means: 'Receiver or remote programming — often the cheapest fix on this list' },
      { seeing: 'Beeps and will not respond', means: 'Battery backup fault or a board error code' },
      { seeing: 'Works fine, then dies in the heat', means: 'Thermal cutout — usually a failing motor under load, worth catching early' },
      { seeing: 'Nothing at all', means: 'Power, breaker, transformer, or a board that has finally gone' },
    ],
    process: [
      'Push the gate by hand with the operator released — this separates a mechanical bind from an electrical fault before we touch anything electrical',
      'Confirm incoming power at the board and check the transformer',
      'Test the capacitor under load',
      'Run the gate through full travel and check limit switch positions',
      'Check safety loops and photo-eyes for false obstruction signals',
      'Read board diagnostics and error codes',
      'Quote the repair before starting work',
    ],
    faqs: [
      {
        q: 'How do I know if I need a repair or a whole new operator?',
        a: 'Age and parts availability, not symptoms. An operator under about ten years old is almost always worth repairing — boards, capacitors, limit switches and gearboxes are all serviceable. Past fifteen years, parts get scarce and repeat visits start to add up. We will tell you which side of that line your gate is on, and if it is a repair we do not sell you an operator.',
      },
      {
        q: 'Can you fix it on the first visit?',
        a: 'Usually. Our trucks carry control boards, capacitors, limit switches, sensors and remotes for the operators that are common in Dallas–Fort Worth. If a part has to be ordered we tell you on the day rather than after.',
      },
      {
        q: 'My gate worked this morning and now it does not. What changed?',
        a: 'In North Texas, heat and ground movement are the usual culprits. Thermal cutouts trip on hot afternoons when a motor is already working harder than it should, and clay soil shifts gate posts between wet and dry seasons so a gate that closed cleanly in spring starts binding in August.',
      },
    ],
    relatedBrands: ['liftmaster', 'faac', 'all-o-matic', 'elite', 'viking', 'eagle', 'ramset'],
    priority: 1,
  },
  {
    slug: 'emergency-gate-repair',
    legacyPath: '/emergency-gate-repair-services/',
    name: 'Emergency Gate Repair',
    mediaCategory: 'emergency-gate-repair',
    navLabel: 'Emergency Repair',
    headline: '24/7 Emergency Gate Repair in Dallas–Fort Worth',
    intro:
      'A gate stuck open is a security problem. A gate stuck closed is an access problem, and if it is a business ' +
      'entrance it is a revenue problem. We answer the phone around the clock and we do not treat "today" as a ' +
      'flexible concept.',
    symptoms: [
      { seeing: 'Gate stuck fully open overnight', means: 'Security exposure — treat as urgent regardless of cause' },
      { seeing: 'Gate stuck closed, vehicles trapped', means: 'Manual release available on most operators — call and we will talk you through it' },
      { seeing: 'Gate closing on vehicles or people', means: 'Safety device failure. Stop using the gate and call immediately' },
      { seeing: 'Gate hit by a vehicle', means: 'Structural and operator damage — needs assessment before any further use' },
      { seeing: 'Sparking, burning smell, or smoke', means: 'Kill power at the breaker and call. Do not attempt to operate' },
      { seeing: 'Commercial entrance down in business hours', means: 'High-cycle operator failure — usually a serviceable part' },
    ],
    process: [
      'Phone triage — we ask what the gate is doing and, if it is safe, walk you through the manual release so you can get in or out',
      'Dispatch with an arrival window, not a vague promise',
      'Make safe first: secure the gate, isolate power if there is any electrical risk',
      'Diagnose and quote on site',
      'Repair, or a temporary secure state if a part has to be ordered',
    ],
    faqs: [
      {
        q: 'Can I get my gate open myself while I wait?',
        a: 'Usually yes. Almost every operator has a manual release — typically a key-operated lever or a pull handle on the housing. Call us and we will talk you through it for your specific unit before the technician arrives.',
      },
      {
        q: 'Do you actually answer at night?',
        a: 'Yes. Emergency gate failures do not keep business hours, and a gate stuck open overnight is exactly when the call matters most.',
      },
      {
        q: 'My gate is stuck open. Is that urgent even if nothing is broken?',
        a: 'We treat it as urgent. An open gate is an open property, and that is the situation people most often call us about at unsociable hours.',
      },
    ],
    relatedBrands: ['liftmaster', 'faac', 'all-o-matic', 'elite'],
    priority: 2,
  },
  {
    slug: 'automatic-gate-repair',
    legacyPath: '/automatic-gate-repair-services/',
    name: 'Automatic Gate Repair',
    mediaCategory: 'automatic-gate-repair',
    navLabel: 'Automatic Gates',
    headline: 'Automatic Gate Repair in Dallas–Fort Worth',
    intro:
      'Automatic gates fail in a small number of predictable ways, and most of them are cheaper to fix than people ' +
      'expect. We diagnose the actual fault instead of quoting a replacement because it is easier to sell.',
    symptoms: [
      { seeing: 'Gate will not open', means: 'Power, board, capacitor, or a jammed track' },
      { seeing: 'Gate will not close', means: 'Almost always a safety sensor seeing something that is not there' },
      { seeing: 'Gate opens and immediately reverses', means: 'Photo-eye misalignment or an obstruction in the beam path' },
      { seeing: 'Gate moves slowly or strains', means: 'Binding gate, worn rollers, or dropping hydraulic pressure' },
      { seeing: 'Gate is noisy', means: 'Chain, sprocket, roller or hinge wear — worth fixing before it takes the gearbox with it' },
      { seeing: 'Gate opens on its own', means: 'Faulty receiver, stuck remote button, or a loop detector fault' },
    ],
    process: [
      'Separate gate faults from operator faults by moving the gate by hand',
      'Check track, rollers, hinges and posts for alignment',
      'Electrical diagnostics on the operator',
      'Safety device test — photo-eyes, loops, edge sensors',
      'Full cycle test after repair',
    ],
    faqs: [
      {
        q: 'Why does my gate open but refuse to close?',
        a: 'Nine times out of ten it is a safety sensor. Photo-eyes are designed to stop a gate closing on a person or vehicle, so anything blocking or misaligning the beam — a spider web, a knocked bracket, sun glare at the wrong angle — will hold the gate open. It is one of the least expensive faults we fix.',
      },
      {
        q: 'The gate is fine but the remote is not. Is that expensive?',
        a: 'No — this is usually the cheapest call on our list. It is normally the remote itself or the receiver, not the operator.',
      },
    ],
    relatedBrands: ['liftmaster', 'faac', 'all-o-matic', 'elite', 'viking', 'eagle'],
    priority: 3,
  },
  {
    slug: 'electric-gate-repair',
    legacyPath: '/electric-gate-repair-services/',
    name: 'Electric Gate Repair',
    mediaCategory: 'electric-gate-repair',
    navLabel: 'Electric Gates',
    headline: 'Electric Gate Repair in Dallas–Fort Worth',
    intro:
      'Electrical faults are where most gate companies start guessing and swapping parts. We test before we ' +
      'replace, which usually means you pay for one component instead of three.',
    symptoms: [
      { seeing: 'No power to the gate at all', means: 'Breaker, transformer, or damaged supply run' },
      { seeing: 'Intermittent operation', means: 'Loose connection, corroded terminal, or a failing board' },
      { seeing: 'Works after rain, fails when dry (or vice versa)', means: 'Moisture ingress or a damaged buried cable' },
      { seeing: 'Tripping the breaker', means: 'Short in the operator, wiring or an accessory — stop using the gate' },
      { seeing: 'Solar gate dying after a few cycles', means: 'Battery at end of life or a charging fault, not the operator' },
      { seeing: 'Burning smell from the housing', means: 'Kill power immediately and call' },
    ],
    process: [
      'Verify supply voltage at the source and at the operator',
      'Inspect wiring runs, junctions and terminals for corrosion and rodent damage',
      'Test transformer output',
      'Load-test batteries on DC and solar installations',
      'Isolate accessories to find shorts',
    ],
    faqs: [
      {
        q: 'My solar gate stops working after a few opens. Is the motor failing?',
        a: 'Usually the battery, not the motor. Solar gate batteries have a finite life and a tired one will run a few cycles then sag below the operator threshold. We load-test rather than guess.',
      },
      {
        q: 'Do you repair damaged underground gate wiring?',
        a: 'Yes. Buried runs get damaged by landscaping, rodents and ground movement more often than people expect. We trace the fault rather than replacing the whole run by default.',
      },
    ],
    relatedBrands: ['liftmaster', 'linear', 'viking', 'eagle'],
    priority: 4,
  },
  {
    slug: 'iron-gate-repair',
    legacyPath: '/iron-gate-repair-services/',
    name: 'Iron Gate Repair & Welding',
    mediaCategory: 'iron-gate-repair',
    navLabel: 'Iron Gates & Welding',
    headline: 'Iron Gate Repair & Welding in Dallas–Fort Worth',
    intro:
      'Wrought iron gates sag, crack at the welds, and rust from the bottom rail up. All of it is repairable, and ' +
      'repairing is almost always cheaper than replacing a custom gate you cannot buy off a shelf.',
    symptoms: [
      { seeing: 'Gate is sagging or dragging on the ground', means: 'Hinge wear or post movement — very common in North Texas clay' },
      { seeing: 'Cracked welds at the frame joints', means: 'Metal fatigue from years of cycling, usually re-weldable' },
      { seeing: 'Rust at the bottom rail', means: 'Water sitting in the hollow section — cut, replace and reseal' },
      { seeing: 'Gate post leaning', means: 'Footing movement, needs resetting rather than patching' },
      { seeing: 'Bent or damaged after vehicle impact', means: 'Straighten, re-weld and refinish' },
      { seeing: 'Decorative elements broken off', means: 'Fabricate and weld to match' },
    ],
    process: [
      'Assess the gate, the hinges and the posts as one system — the gate is rarely the root cause',
      'Reset or reinforce posts where footings have moved',
      'Cut out failed sections and re-weld',
      'Grind, prime and refinish so the repair is not visible',
    ],
    faqs: [
      {
        q: 'My iron gate has started dragging. Is the gate bent?',
        a: 'Usually the post has moved, not the gate. North Texas clay expands and contracts hard between wet spring and dry summer, and gate posts move with it. Straightening the gate without addressing the post means it will drag again next season.',
      },
      {
        q: 'Can you match the finish on an older gate?',
        a: 'In most cases yes. We grind, prime and refinish the repaired section so it blends rather than leaving a patch.',
      },
    ],
    relatedBrands: [],
    priority: 5,
  },
  {
    slug: 'commercial-gate-repair',
    legacyPath: '/commercial-gate-repair-services/',
    name: 'Commercial & HOA Gate Repair',
    mediaCategory: 'commercial-gate-repair',
    navLabel: 'Commercial & HOA',
    headline: 'Commercial, HOA & Industrial Gate Repair in Dallas–Fort Worth',
    intro:
      'A commercial gate runs hundreds of cycles a day. Parts that last fifteen years on a driveway last months on ' +
      'an apartment entrance. We service them on that reality, not on a residential schedule.',
    symptoms: [
      { seeing: 'Entrance gate failing repeatedly', means: 'Duty cycle exceeding the operator, or a gate fault making it work harder than it should' },
      { seeing: 'Loop detector not seeing vehicles', means: 'Loop break, detector fault or interference' },
      { seeing: 'Barrier arm not lifting', means: 'Motor, board or counterbalance' },
      { seeing: 'Access control not releasing the gate', means: 'Fault is in the reader or controller, not the operator' },
      { seeing: 'Gate slow under heavy use', means: 'Chain, roller or gearbox wear' },
      { seeing: 'Multiple gates on one property failing', means: 'Usually a shared power or controller issue' },
    ],
    process: [
      'Assess duty cycle against the installed operator — repeat failures are often a specification problem',
      'Inspect the gate, rollers and track for anything increasing load',
      'Test loops, detectors and access control integration',
      'Repair, and recommend what will stop it recurring',
      'Scheduled maintenance options for high-cycle entrances',
    ],
    faqs: [
      {
        q: 'Our apartment gate breaks constantly. Is it a bad operator?',
        a: 'Sometimes, but more often the operator is under-specified for the duty cycle, or the gate itself is making it work far harder than it should. Replacing the same part every few months is a symptom. We look at why the load is high before recommending anything.',
      },
      {
        q: 'Do you work with property managers and HOA boards?',
        a: 'Yes, including multi-gate properties, scheduled maintenance and documented quotes for board approval.',
      },
    ],
    relatedBrands: ['hysecurity', 'ramset', 'doorking', 'viking'],
    priority: 6,
  },
  {
    slug: 'access-control-repair',
    legacyPath: null,
    name: 'Access Control & Intercom Repair',
    mediaCategory: 'access-control',
    navLabel: 'Access Control',
    headline: 'Gate Access Control & Intercom Repair in Dallas–Fort Worth',
    intro:
      'When the call box stops working, the gate is fine — the system that tells it to open is not. That is a ' +
      'different repair, and a lot of gate companies will not touch it.',
    symptoms: [
      { seeing: 'Call box does not dial out', means: 'Telephone line, cellular module or board fault' },
      { seeing: 'Keypad code not accepted', means: 'Programming loss or keypad failure' },
      { seeing: 'Card or fob reader not reading', means: 'Reader, wiring or controller fault' },
      { seeing: 'Intercom audio one-way or distorted', means: 'Speaker, microphone or line quality' },
      { seeing: 'Gate opens for the wrong codes', means: 'Directory or programming corruption — a security issue, treat as urgent' },
      { seeing: 'System dead after a storm', means: 'Surge damage to the controller' },
    ],
    process: [
      'Confirm whether the fault is in the access system or the operator — these are separate',
      'Test line, cellular signal or network as applicable',
      'Check reader, keypad and intercom hardware',
      'Verify and restore programming and directory',
      'Surge protection check on storm-damaged systems',
    ],
    faqs: [
      {
        q: 'Our call box stopped working after we changed phone providers. Why?',
        a: 'Older telephone entry systems rely on an analogue line. Moving to VoIP or fibre often breaks them, because the signalling they expect is no longer there. The usual fix is a cellular module rather than a whole new system.',
      },
      {
        q: 'Can you reprogram a system when the previous manager left no records?',
        a: 'Usually yes — we can access and rebuild the directory and codes on most common systems.',
      },
    ],
    relatedBrands: ['doorking', 'liftmaster', 'viking'],
    priority: 7,
  },
  {
    slug: 'gate-installation',
    legacyPath: '/gate-installation-services/',
    name: 'Gate Installation',
    mediaCategory: 'gate-installation',
    navLabel: 'Installation',
    headline: 'Automatic Gate Installation in Dallas–Fort Worth',
    intro:
      'A gate installed properly runs for twenty years. A gate installed badly becomes somebody\'s repeat repair ' +
      'call. The difference is almost entirely in the groundwork nobody sees.',
    symptoms: [
      { seeing: 'Replacing a gate that keeps failing', means: 'Worth checking the posts and footings before spending on a new gate' },
      { seeing: 'Automating an existing manual gate', means: 'Gate weight and hinge condition determine which operator is viable' },
      { seeing: 'New build or new driveway', means: 'Best time to run conduit and set footings properly' },
      { seeing: 'Upgrading to access control', means: 'Operator and access system need to be specified together' },
    ],
    process: [
      'Site assessment — soil, slope, drainage, power availability, gate weight',
      'Specify the operator to the gate and the duty cycle, not to a price point',
      'Set footings to depth for North Texas clay',
      'Run conduit and power properly the first time',
      'Install safety devices to current standards',
      'Full commissioning, programming and handover',
    ],
    faqs: [
      {
        q: 'Why does gate installation cost more than I expected?',
        a: 'Because most of the cost is not the gate. It is the footings, the trenching, the conduit, the power run, the safety devices and the commissioning. Skipping any of it is how you end up with a gate that needs repairing every year. For reference, published figures in the Dallas market put a residential automatic opener installation somewhere in the $2,500–$7,500 range depending on site conditions.',
      },
      {
        q: 'Can you automate the gate I already have?',
        a: 'Often yes. It depends on the gate\'s weight, the condition of the hinges and posts, and whether power can reach the location sensibly. We assess all three before quoting.',
      },
    ],
    relatedBrands: ['liftmaster', 'faac', 'all-o-matic', 'viking'],
    priority: 8,
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)
