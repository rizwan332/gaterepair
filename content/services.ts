/**
 * Service pages, derived from the client's actual photo library rather than a
 * generic keyword list. Every service here has real photography behind it, and
 * most have video — which no DFW competitor has at all.
 *
 * `legacyPath` preserves the existing WordPress URLs for 1:1 301s.
 */

export type Symptom = { seeing: string; means: string }

/** A named sub-topic rendered as an H3 with its own passage of prose. */
export type Passage = { heading: string; body: string[] }

export type Service = {
  slug: string
  legacyPath: string | null
  name: string
  /**
   * Overrides the generated `<title>` where the default would compete with
   * another page for the same query.
   *
   * Only `emergency-gate-repair` sets it today: /emergency is the phone-first
   * page that should win "emergency gate repair Dallas–Fort Worth", and this
   * page was targeting the identical phrase with an almost identical title.
   * It now takes the diagnostic long tail instead and links up to /emergency
   * for the call.
   */
  seoTitle?: string
  /** Photo category in media-manifest.ts */
  mediaCategory: string
  navLabel: string
  /** One line for the service cards on city pages: what this covers, in the customer's words. */
  cardLine?: string
  headline: string
  /** Opens on the reader's problem, never on the company. */
  intro: string
  /** No DFW competitor publishes a symptom table. This is how people search. */
  symptoms: Symptom[]
  /**
   * Root causes behind the symptoms, as H3 passages.
   *
   * These carry most of the page's weight. Star Gate — the best-written
   * competitor in this market — runs ~1,100 words on its strongest service
   * page with no H3 structure at all. Passage-level headings are what let
   * Google surface a specific answer rather than the whole page.
   */
  causes?: Passage[]
  process: string[]
  /** Practical advice a homeowner can act on without paying anyone. */
  maintenance?: Passage[]
  /** When repair stops being the economical choice. */
  repairVsReplace?: string[]
  faqs: { q: string; a: string }[]
  relatedBrands: string[]
  priority: number
  /**
   * Set on the gate-type services (sliding, swing). The page then draws its
   * case studies and operator models by gate type rather than by service tag,
   * because a sliding-gate job is filed under whatever was repaired on it —
   * chain, board, wheels — but it is still sliding-gate evidence.
   */
  gateType?: 'slide' | 'swing'
}

export const services: Service[] = [
  {
    slug: 'gate-motor-repair',
    legacyPath: '/gate-motor-repair-services/',
    // "Opener" leads because it is the customer's word — "gate opener repair"
    // and "gate motor repair" are the same job searched two ways, and this one
    // page owns both rather than splitting them into two thin pages. The slug
    // stays: it is the URL the WordPress 301 and every inbound link point at.
    name: 'Gate Opener & Motor Repair',
    mediaCategory: 'automatic-gate-repair',
    navLabel: 'Gate Opener & Motor',
    cardLine: 'Openers that hum, click, stall or will not respond',
    headline: 'Gate Opener & Motor Repair in Dallas–Fort Worth',
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
        a: 'In Dallas–Fort Worth, heat and ground movement are the usual culprits. Thermal cutouts trip on hot afternoons when a motor is already working harder than it should, and clay soil shifts gate posts between wet and dry seasons so a gate that closed cleanly in spring starts binding in August.',
      },
    ],
    relatedBrands: ['liftmaster', 'faac', 'all-o-matic', 'elite', 'viking', 'eagle', 'ramset'],
    priority: 1,
  },
  {
    slug: 'emergency-gate-repair',
    // null rather than the WordPress path. A legacyPath here generates a 301
    // in next.config.ts that is listed BEFORE the explicit
    // `/emergency-gate-repair-services → /emergency` rule, and the first match
    // wins — so the old emergency URL's equity was landing on this diagnostic
    // page instead of /emergency, the page built to win "emergency gate repair".
    legacyPath: null,
    name: 'Emergency Gate Repair',
    seoTitle: 'After-Hours Gate Faults: What Breaks and What to Do',
    mediaCategory: 'emergency-gate-repair',
    navLabel: 'Emergency Repair',
    cardLine: 'Gate stuck open or shut — day or night',
    // Re-angled away from "24/7 Emergency Gate Repair in Dallas–Fort Worth",
    // which was the same claim /emergency makes in the same words.
    headline: 'What Fails on a Gate Out of Hours — and What to Do First',
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
    cardLine: 'Automatic and driveway gates that will not open or close',
    // Was 'Automatic Gate Repair in Dallas–Fort Worth', identical to the
    // homepage H1 — the two pages were competing for the same head term and the
    // homepage should win it. This differentiates on intent instead of phrase:
    // the homepage answers "who fixes gates near me", this page answers "what
    // is actually wrong with mine", which is what the symptom table below it
    // delivers and the homepage does not.
    // Driveway gates are the bulk of residential automatic gate work, and
    // "driveway gate repair" is the homeowner's phrase for this same page. The
    // title carries both rather than spawning a near-duplicate driveway page.
    seoTitle: 'Automatic & Driveway Gate Repair | Dallas–Fort Worth',
    headline: 'Automatic & Driveway Gate Repair: What Fails, and What It Costs to Fix',
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
  /**
   * Sliding and swing gate repair — added 7 Oct 2026.
   *
   * These are gate TYPES, not faults, and they earn their own pages because
   * the hardware is genuinely different: a slide gate rides on wheels in a
   * track and is pulled by a chain; a swing gate hangs on hinges from a post
   * and is pushed by an arm. Someone searching "sliding gate repair" has a
   * different gate, a different set of failures and a different repair from
   * someone searching "swing gate repair", and until now both landed on the
   * general automatic-gate page.
   *
   * They are evidence-led rather than keyword-led: ten of the client's
   * documented Texas jobs are sliding gates and eight are swing gates, and the
   * pages draw those jobs in by `gateType`.
   */
  {
    slug: 'sliding-gate-repair',
    legacyPath: null,
    name: 'Sliding Gate Repair',
    gateType: 'slide',
    mediaCategory: 'automatic-gate-repair',
    navLabel: 'Sliding Gates',
    cardLine: 'Wheels, track, chain and gates off their track',
    headline: 'Sliding Gate Repair in Dallas–Fort Worth',
    intro:
      'A sliding gate fails in one of two places: the hardware it rides on — wheels, track, guide rollers and chain — ' +
      'or the operator that pulls it. Most of our sliding gate calls are the first kind, and most are repaired ' +
      'rather than replaced. In Mesquite the Eagle opener was three years old and working perfectly; the wheels ' +
      'underneath it had completely failed.',
    symptoms: [
      { seeing: 'Gate has come off its track or leans out of line', means: 'Debris in the track, a worn V-groove wheel, or a bent or damaged track' },
      { seeing: 'Grinding, scraping or a heavy rumble as it moves', means: 'Wheel bearings failing, a flat-spotted wheel, or the gate rubbing a guide roller' },
      { seeing: 'Starts, stops partway and reverses', means: 'The gate is binding on the track or a roller, and the operator reads the extra load as an obstruction' },
      { seeing: 'Chain slack, jumping the sprocket or snapped', means: 'A stretched or rusted chain, a worn idler, or chain brackets out of line' },
      { seeing: 'Motor runs but the gate does not move', means: 'Chain off the sprocket, a broken drive sprocket, or a slipping clutch' },
      { seeing: 'Gate rolls on its own or will not stay shut', means: 'Track slope, a missing or broken gate stop, or a worn latch' },
    ],
    process: [
      'Release the operator and roll the gate by hand — this separates a gate hardware fault from an operator fault before anything electrical is touched',
      'Walk the full track: wheels, V-groove, guide rollers, gate stops, and any debris, rock or settlement in the path',
      'Check chain tension, idlers, drive sprocket and the brackets that keep the chain level',
      'Test the operator, limits and safety devices — photo-eyes and edges — with the gate under its real load',
      'Reset limits after any hardware work and run full open and close cycles',
    ],
    faqs: [
      {
        q: 'My sliding gate came off its track. Should I try to push it back on?',
        a: 'Not if it is fully off. A sliding gate is heavy, and once it has left the track it can tip. Switch the operator off, keep people and cars clear, and call — an off-track gate cannot be secured, so we treat it as an emergency. If it is only binding, releasing the operator and rolling it gently by hand tells you whether it moves freely. On a recent Dallas call, rocks and debris in the track had lifted a heavy gate clean off; the LiftMaster operator itself was fine.',
      },
      {
        q: 'Do I need a new operator if my sliding gate is struggling?',
        a: 'Usually not. A slide operator that strains is almost always fighting worn wheels, a dirty or damaged track, or a chain set wrong. Fix the gate and the operator goes back to normal. Replace the operator without fixing the gate and the new one wears out early for exactly the same reason.',
      },
      {
        q: 'Is a rusted gate chain worth replacing on its own?',
        a: 'Yes — it is one of the most common sliding gate repairs and one of the cheapest. In Dallas we replaced a heavily rusted chain on a LiftMaster slide gate the previous owner had never maintained, and kept the operator. Left to fail, a chain takes the sprockets with it and sometimes the operator.',
      },
    ],
    relatedBrands: ['liftmaster', 'eagle', 'viking', 'ramset', 'elite', 'all-o-matic', 'us-automatic'],
    priority: 2,
  },
  {
    slug: 'swing-gate-repair',
    legacyPath: null,
    name: 'Swing Gate Repair',
    gateType: 'swing',
    mediaCategory: 'iron-gate-repair',
    navLabel: 'Swing Gates',
    cardLine: 'Sagging gates, arms, hinges and double gates',
    headline: 'Swing Gate Repair in Dallas–Fort Worth',
    intro:
      'A swing gate hangs its whole weight on hinges and a post, and an arm pushes it through every cycle. When ' +
      'something gives, it is usually one of those three — not the operator. In Dallas–Fort Worth the clay soil ' +
      'moves posts between wet and dry seasons, so a gate that closed cleanly in spring can be dragging by August.',
    symptoms: [
      { seeing: 'Gate sags, or the latch no longer lines up', means: 'Worn hinges, a post that has moved, or a gate frame that has racked out of square' },
      { seeing: 'Gate drags on the driveway', means: 'A leaning post or hinge wear — the operator is now fighting the ground on every cycle' },
      { seeing: 'Arm moves but the gate barely does', means: 'A bent or worn operator arm, a loose or broken bracket, or a stripped drive' },
      { seeing: 'One leaf of a double gate lags or will not close', means: 'An arm or board fault on that side, or the two leaves have drifted out of sync' },
      { seeing: 'Gate will not hold closed, or swings in the wind', means: 'A missing gate stop or latch, or an operator left in manual release' },
      { seeing: 'Hums at the start of travel and stalls', means: 'A failing capacitor, or a gate that has become too heavy to start moving' },
    ],
    process: [
      'Release the arm and swing each leaf by hand — a gate that is stiff with the operator disconnected has a hardware problem, not an operator problem',
      'Check hinges, posts and gate stops, and whether the post has moved in the ground',
      'Inspect arm mounting geometry, brackets and pivot points for wear and bending',
      'Test the operator, limits and obstruction sensing, and the battery on solar and DC systems',
      'Synchronise double leaves and run full open and close cycles',
    ],
    faqs: [
      {
        q: 'Can you replace just the arm on a LiftMaster LA400 or a US Automatic opener?',
        a: 'Yes, and it is often all that is needed. In University Park we replaced a damaged LA400 arm and bracket on a gate that had stood unused for a year, and kept the operator. In Prosper a bent US Automatic arm was tested with power restored before we decided to replace it — the operator stayed in service.',
      },
      {
        q: 'Only one side of my double swing gate closes. What is wrong?',
        a: 'Usually a fault on that one side — its arm, its connection to the board, or a leaf that has dropped on its hinges and now binds. Occasionally the leaves are simply out of sequence. It is a one-visit repair in most cases, not a new system.',
      },
      {
        q: 'Can a sagging gate be fixed without replacing it?',
        a: 'Almost always. Worn hinges can be replaced or upgraded to adjustable ones, a moving post can be reset, and a racked frame can be squared and re-welded. Fixing the sag also takes load off the operator, which is often why the gate started struggling in the first place.',
      },
    ],
    relatedBrands: ['liftmaster', 'us-automatic', 'viking', 'eagle', 'elite', 'faac', 'doorking'],
    priority: 2,
  },
  {
    slug: 'electric-gate-repair',
    legacyPath: '/electric-gate-repair-services/',
    name: 'Electric Gate Repair',
    mediaCategory: 'electric-gate-repair',
    navLabel: 'Electric Gates',
    cardLine: 'Power faults, wiring, solar and battery systems',
    // Electric driveway gates and solar openers are this page's real subject —
    // the symptom table below already covers solar batteries and DC operators.
    seoTitle: 'Electric Gate Repair — Driveway & Solar | DFW',
    headline: 'Electric Gate Repair in Dallas–Fort Worth — Driveway, Solar & DC Gates',
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
    cardLine: 'Welding, hinges, posts and damaged iron gates',
    headline: 'Iron Gate Repair & Welding in Dallas–Fort Worth',
    intro:
      'Wrought iron gates sag, crack at the welds, and rust from the bottom rail up. All of it is repairable, and ' +
      'repairing is almost always cheaper than replacing a custom gate you cannot buy off a shelf.',
    symptoms: [
      { seeing: 'Gate is sagging or dragging on the ground', means: 'Hinge wear or post movement — very common in Dallas–Fort Worth clay' },
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
        a: 'Usually the post has moved, not the gate. Dallas–Fort Worth clay expands and contracts hard between wet spring and dry summer, and gate posts move with it. Straightening the gate without addressing the post means it will drag again next season.',
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
    cardLine: 'Apartments, HOA entrances and industrial gates',
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
    // "Access control repair" without the gate qualifier is a different trade —
    // badge readers on office doors. The H1 already says "Gate Access Control";
    // the title tag needs to as well or the page reads as relevant to the wrong
    // query. 44 characters.
    seoTitle: 'Gate Access Control & Intercom Repair | DFW',
    mediaCategory: 'access-control',
    navLabel: 'Access Control',
    cardLine: 'Keypads, call boxes, card readers and intercoms',
    headline: 'Gate Access Control & Intercom Repair in Dallas–Fort Worth',
    intro:
      'When the call box stops working, the gate is fine — the system that tells it to open is not. That is a ' +
      'different repair, needing access control and telephone entry knowledge rather than gate mechanics.',
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
    cardLine: 'New automatic gates and opener installation',
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
      'Set footings to depth for Dallas–Fort Worth clay',
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
