import type { SymptomPage } from './types'

/**
 * The four faults that describe a gate not going where it should.
 *
 * These four carry the most search volume in Section 4 of the keyword list and
 * they are the four most easily turned into near-duplicates, because the
 * candidate causes genuinely overlap. What keeps them distinct is that each
 * page is written from the reader's evidence rather than from the parts list:
 * someone whose gate opens and then refuses to close has already ruled out
 * power, and a page that starts by telling them to check the breaker has
 * wasted the only thing they came for.
 */
export const movementSymptoms: SymptomPage[] = [
  {
    slug: 'automatic-gate-not-working',
    label: 'Automatic gate not working at all',
    searchedAs: [
      'Automatic Gate Not Working',
      'Electric Gate Not Working',
      'Gate Opener Not Working',
      'Gate Motor Not Working',
    ],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'A gate that is dead in the closed position locks you in or out; dead in the open position leaves the property unsecured. Either way it is worth the ten minutes of checks below before anyone is called out.',

    title: 'Automatic Gate Not Working? Causes & Fixes | DFW',
    metaDescription:
      'Your automatic gate has stopped working completely. Here is how to tell power, board, capacitor and mechanical faults apart in ten minutes — in DFW.',
    h1: 'Automatic Gate Not Working — How to Find Out Why',
    heroIntro:
      'A gate that does nothing at all is usually one of four things, and three of them you can identify yourself in ten minutes. This page walks the same order a technician works in, so you know what you are dealing with before you pay anyone to look.',
    heroPoints: [
      'We separate mechanical binding from electrical failure before touching a board — release the operator and push the gate by hand',
      'Capacitors are tested under load, not swapped on suspicion',
      'If the answer turns out to be a tripped GFCI, we would rather you found it than paid us to',
    ],

    whatIsHappening: [
      {
        heading: 'A gate operator is two systems, and only one of them is electrical',
        body: [
          'Every automatic gate is a gate plus an operator. The gate is the leaf, the hinges or rollers, the posts and the track — pure mechanics that would still move if you disconnected every wire on the property. The operator is the motor, gearbox, control board and safety devices that move it for you.',
          'Almost every wasted call-out on a dead gate comes from confusing the two. An operator straining against a gate that has seized on its track will trip out, overheat, or click and stop — behaviour identical to a failed capacitor. The difference costs a few hundred dollars, and it takes thirty seconds to tell them apart: release the operator and push the gate by hand. If it fights you, the fault is mechanical and no electrical part will fix it.',
        ],
      },
      {
        heading: 'Dead, and dead-sounding, are different diagnoses',
        body: [
          'Silence means the board is not receiving power or has failed outright: no hum, no click, no LED, nothing at the keypad. That points upstream — the breaker, the GFCI outlet, the transformer, the battery on a solar unit, or the board itself.',
          'Noise without movement means the board is alive and trying. A hum is the motor energised but unable to turn, which is a seized gearbox, a failed start capacitor, or mechanical binding. A single click and then silence is usually a relay on the board or a capacitor that can no longer start the motor. The distinction matters because it tells you which half of the system to open first.',
        ],
      },
    ],

    causes: [
      {
        cause: 'No incoming power — tripped breaker, GFCI, or a switched-off disconnect',
        likelihood: 'most common',
        howToTell:
          'Nothing at all: no LED on the control board, no beep, no response from keypad or remote. Check the GFCI outlet the operator is plugged into — they are often in a weather box on the post or inside the garage and they trip in storms.',
        fix: 'Reset the GFCI or breaker. If it trips again immediately, stop: something downstream is faulting to earth and it needs a technician rather than another reset.',
        ownerCanFix: true,
      },
      {
        cause: 'Dead or exhausted battery on a solar or battery-backed operator',
        likelihood: 'most common',
        howToTell:
          'Common on acreage installations. The gate worked in the afternoon and is dead by morning, or it has been getting progressively slower for weeks. Many boards show a low-voltage LED or beep a pattern.',
        fix: 'Battery replacement, sized for the number of cycles you actually run. If the panel is shaded by a tree that has grown since installation, that gets fixed at the same time or the new battery follows the old one.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed start capacitor',
        likelihood: 'common',
        howToTell:
          'The classic signature is a hum with no movement, or a gate that starts only if you give it a push. On AC operators the capacitor is a cylinder inside the housing, and a failed one is often visibly swollen or leaking.',
        fix: 'Replacement is a small part and a short visit. A capacitor must be tested under load — testing it cold reads fine on units that fail the moment they are asked to start a motor.',
        ownerCanFix: false,
      },
      {
        cause: 'Mechanical binding — the gate itself has seized',
        likelihood: 'common',
        howToTell:
          'Release the operator per the manufacturer’s instructions and push the gate by hand. It should move smoothly with one hand. If it drags, catches at a point, or will not budge, the operator is innocent.',
        fix: 'Depends what is binding: a fouled or bent track, a failed roller, a dropped hinge, or a post that has moved. All are mechanical repairs, and all of them destroy operators if they are left and the operator is asked to fight them.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed control board',
        likelihood: 'common',
        howToTell:
          'Power is confirmed at the board but nothing responds, or the board’s LEDs are dark or showing a fault code. On older operators this is more likely simply because the board has been outdoors through fifteen Texas summers.',
        fix: 'Board replacement where one is still made for the model. On discontinued operators this is the point where we tell you honestly whether the unit has a future.',
        ownerCanFix: false,
      },
      {
        cause: 'Burnt-out motor or seized gearbox',
        likelihood: 'less common',
        howToTell:
          'Usually the end of a story rather than a surprise: the gate has been slow, noisy or struggling for months, and there may be a burnt smell at the housing. Power reaches the motor and the motor does nothing.',
        fix: 'Motor or gearbox replacement, and at this point the economics of a new operator deserve an honest comparison — particularly if the unit is out of production.',
        ownerCanFix: false,
      },
      {
        cause: 'Transformer failure',
        likelihood: 'less common',
        howToTell:
          'The operator is completely dead but the supply to it tests live. Common after a nearby lightning strike or a supply surge.',
        fix: 'Transformer replacement. Worth asking whether surge protection is fitted, because an unprotected board is usually the next thing to go.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Check the obvious power sources',
        body: 'Find the GFCI outlet feeding the operator — often in a weatherproof box on the post, sometimes in the garage — and press reset. Check the breaker. On a solar unit, look for a low-battery indicator on the board. This one step resolves a meaningful share of dead-gate calls at no cost.',
      },
      {
        step: 'Release the operator and push the gate by hand',
        body: 'Every operator has a manual release, usually a key or lever on the housing. With it released the gate should move freely with one hand. If it does not, the fault is mechanical and you can stop looking at electrical causes entirely.',
      },
      {
        step: 'Listen carefully when you trigger it',
        body: 'Total silence, a hum, or a single click are three different diagnoses. Stand at the operator and have someone press the remote. What you hear narrows the fault more than anything else you can do without tools.',
      },
      {
        step: 'Look at the board’s indicator lights',
        body: 'Most modern boards show power and fault status, and many flash a code. Photograph the board and the flashing pattern before calling — it frequently identifies the fault before a technician arrives, which shortens the visit.',
      },
    ],

    doNot: [
      'Do not keep resetting a breaker that trips again immediately. It is doing its job; something is faulting to earth.',
      'Do not force a gate that is bound on its track. You will bend the track, damage the rollers, or pull a post — all more expensive than what stopped it.',
      'Do not open a control board enclosure in the rain, or with the supply live, unless you are qualified to.',
      'Do not bypass or disconnect a safety sensor to make the gate move. That is the protection that stops it closing on a car or a child.',
    ],

    outlook: {
      summary:
        'A completely dead gate sounds like the worst outcome and usually is not. The two most common causes — no incoming power and a flat battery — are the cheapest on the list, and a capacitor is a small part. The genuinely expensive answers, a failed motor or an obsolete board, normally announce themselves with months of warning noise first.',
      usuallyRepair: [
        'Power supply faults, tripped GFCIs and failed transformers',
        'Batteries and solar charging faults',
        'Capacitors, relays and limit switches',
        'Control boards, where the model is still supported',
        'Mechanical binding — track, rollers, hinges and posts',
      ],
      sometimesReplace: [
        'A burnt-out motor on an operator already past its expected life',
        'A failed board on a discontinued operator with no supported replacement',
        'An operator that was under-specified for the gate it moves and has failed repeatedly for the same reason',
      ],
    },

    dfw: [
      {
        heading: 'Heat, storms and clay — the three things that kill gates here',
        body: [
          'Dallas–Fort Worth runs long stretches above 100°F, and a gate operator is a sealed box in full sun. Heat shortens the life of capacitors and batteries specifically, which is why those two dominate the summer call sheet rather than being spread evenly across the year.',
          'Storm season does the other half. Surges take out boards and transformers, and a GFCI tripped by a storm is the single most common reason a gate is dead the morning after one. Then there is the Blackland clay much of the metroplex sits on, which swells and shrinks by season and slowly moves gate posts — producing the mechanical binding that makes a healthy operator look broken.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate is completely dead. Is it going to need replacing?',
        a: 'Usually not. The most common causes of a totally dead gate are a tripped GFCI, a flat battery and a failed capacitor — all inexpensive. A dead gate is not a worse sign than a gate that half-works; if anything it is often simpler, because a single point of failure is easier to find than an intermittent one.',
      },
      {
        q: 'How can I tell whether it is the gate or the opener?',
        a: 'Release the operator with its manual release and push the gate by hand. A healthy gate moves smoothly with one hand. If it drags or catches, the problem is mechanical — the track, rollers, hinges or a post — and no electrical part will fix it. That single test saves more wasted money than anything else on this page.',
      },
      {
        q: 'The gate worked yesterday and is dead today. What changed?',
        a: 'Look for what happened in between. A storm is the most common answer in this region: a surge takes out a board or a transformer, or simply trips the GFCI. On solar operators a cold night after a cloudy day will finish a battery that was already weak. Both are the first things we check on a gate that failed overnight.',
      },
      {
        q: 'Can you fix an old operator or do I have to buy a new one?',
        a: 'Often it can be repaired, and we will tell you plainly when it cannot. The mechanical parts of an installation — posts, hinges, track — normally outlast the electronics by decades, so even when an operator has to be replaced the rest of the installation is usually reusable, which puts the cost far below a full replacement.',
      },
      {
        q: 'Is it safe to leave the gate open until someone can come out?',
        a: 'It is safe, but the property is not secured, so tell us if that is the situation and we will treat it as urgent. What is not safe is wiring it to stay closed with the safety devices disconnected, or propping a heavy leaf in a position its hinges were not designed to hold.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'emergency-gate-repair'],
    relatedSymptoms: ['gate-opener-has-no-power', 'gate-wont-open', 'gate-circuit-board-not-working'],
    sources: [
      {
        label: 'LiftMaster residential and commercial gate operator manuals (troubleshooting sections)',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'UL 325 — Standard for Door, Drapery, Gate, Louver, and Window Operators and Systems',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
    ],
    toConfirm: [
      'Whether Shield stocks common capacitor and transformer sizes on the van, so "same-day" is accurate for these faults specifically.',
      'Whether the technicians recommend fitting surge protection as standard after a storm-related board failure, and the typical cost.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-wont-open',
    label: 'Gate won’t open',
    searchedAs: ['Gate Won’t Open', "Gate Won't Open", 'Gate Closes But Won’t Open', "Gate Closes But Won't Open"],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'You cannot get in or out. If a vehicle is trapped behind the gate, every operator has a manual release that will let you move it by hand — find that before anything else.',

    title: 'Gate Won’t Open? Causes and Fixes | Dallas–Fort Worth',
    metaDescription:
      'Gate closes fine but will not open? Usually the open limit, the remote receiver or a safety input — not the motor. Diagnose it before you call. DFW.',
    h1: 'Gate Won’t Open — What It Usually Means',
    heroIntro:
      'A gate that closes normally but refuses to open has already proved its motor, its board and its power supply are fine. That single fact eliminates most of what a general troubleshooting guide would have you check, and points at a much shorter list.',
    heroPoints: [
      'A gate that closes but will not open is a different fault from a dead gate — we diagnose it as one',
      'We test the open limit and the receiver before anyone talks about a motor',
      'Manual release walked through over the phone if you are trapped in or out',
    ],

    whatIsHappening: [
      {
        heading: 'Closing proves more than people realise',
        body: [
          'If your gate still closes on command, the power supply is good, the transformer is good, the board is executing commands, the motor turns and the gearbox drives. Those are the expensive parts, and a gate that closes has just demonstrated all of them working.',
          'What remains is everything specific to the open direction: the open limit switch or encoder position that tells the operator where "open" is, the input that carries the open command, and anything mechanical that obstructs travel in that direction only. That is a short list, and it is mostly inexpensive.',
        ],
      },
      {
        heading: 'Why direction-specific faults happen at all',
        body: [
          'An operator does not have one motor for opening and another for closing — it reverses the same one. So a fault that affects only one direction is almost never the motor. It is either a limit that has drifted, a command that is not arriving, or a physical obstruction the gate only meets partway through its opening arc.',
          'Limits drift for ordinary reasons. A swing gate settles on its hinges over its first year; a slide gate’s chain stretches; clay soil moves a post a fraction of an inch each season. The operator keeps using the position it was taught on installation day, and eventually that position no longer matches the gate.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Open limit switch or encoder position out of adjustment',
        likelihood: 'most common',
        howToTell:
          'The gate closes perfectly and either does not start opening at all, or moves an inch and stops as though it believes it is already open. On operators with a learn mode, a limit that has drifted is the first suspect.',
        fix: 'Re-setting the open limit, then re-learning the travel. A short visit, and worth doing properly rather than nudging — a limit set to compensate for a sagging gate hides the sag until it gets worse.',
        ownerCanFix: false,
      },
      {
        cause: 'Remote or receiver fault affecting the open command',
        likelihood: 'most common',
        howToTell:
          'Test a different trigger. If the keypad opens it but the remote does not, or the wall button works and nothing else does, the fault is in how the command arrives, not in the gate. A remote that opens the gate from two feet away but not from the road is a weak battery or a failing receiver.',
        fix: 'Battery, reprogramming, or receiver replacement. This is routinely the cheapest fix on the page and it is worth ruling out first.',
        ownerCanFix: true,
      },
      {
        cause: 'Obstruction in the opening path only',
        likelihood: 'common',
        howToTell:
          'Watch the gate’s full opening arc with the operator released. Gravel built up behind a slide gate, a branch grown into a swing gate’s path, or a vehicle parked inside the arc will stop travel in one direction while closing stays clear.',
        fix: 'Clearing it, which frequently costs nothing. Worth checking after storms and after landscaping work, which are the two usual sources.',
        ownerCanFix: true,
      },
      {
        cause: 'Open-direction safety input triggered',
        likelihood: 'common',
        howToTell:
          'Some installations have a photo-eye or edge sensor protecting the opening arc, particularly where a gate swings toward a footpath. A fault or misalignment there blocks opening only. Check the board for a triggered safety indicator.',
        fix: 'Realignment or sensor replacement. Never bypassing — that sensor exists because something can be standing where the gate is about to go.',
        ownerCanFix: false,
      },
      {
        cause: 'Mechanical binding that only manifests in the open direction',
        likelihood: 'common',
        howToTell:
          'Release the operator and push the gate open by hand. A slide gate whose track is fouled at the open end, or a swing gate whose hinge has dropped so the leaf grounds as it swings back, will fight you in one direction and move freely in the other.',
        fix: 'Track clearing, roller replacement, or resetting a hinge or post. Mechanical, and the operator was never the problem.',
        ownerCanFix: false,
      },
      {
        cause: 'Access control or timer holding the gate closed',
        likelihood: 'less common',
        howToTell:
          'More common on commercial and HOA installations. A telephone entry system, timer, or access control panel can be configured to refuse opening outside set hours or after a failed credential. The gate is not faulty — it is obeying a rule.',
        fix: 'A configuration change at the controller. Worth checking before a technician is dispatched for a fault that does not exist.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Try every different way of opening it',
        body: 'Remote, keypad, phone app, intercom and the wall button inside. If any one of them works, the gate is mechanically fine and you have narrowed the fault to a single input — which is both the cheapest and fastest thing to fix.',
      },
      {
        step: 'Change the remote battery',
        body: 'A dying remote battery classically produces exactly this symptom: it works close up and not from the car. It costs a few dollars and it resolves a surprising share of these calls.',
      },
      {
        step: 'Walk the opening path',
        body: 'With the operator released, push the gate through its full opening travel by hand. Look for gravel, a grown branch, a dropped hinge grounding the leaf, or a vehicle parked inside a swing arc. If it fights you by hand, the fault is mechanical.',
      },
      {
        step: 'Find the manual release before you need it',
        body: 'If you are trapped, every operator has a manual release — usually a key or lever on the housing. Knowing where yours is turns an emergency into an inconvenience. Call us and we will walk you through it on your model.',
      },
    ],

    doNot: [
      'Do not pull or drive through a gate that will not open. A gate leaf is heavy and a vehicle will win, expensively.',
      'Do not disable the safety sensor protecting the opening arc to force it through.',
      'Do not keep pressing the remote repeatedly. If an obstruction is stopping it, repeated attempts drive the operator into that obstruction.',
      'Do not adjust limit switches by trial and error unless you know the model’s learn procedure — a mis-set limit can drive the gate past its stop.',
    ],

    outlook: {
      summary:
        'This is one of the better faults to have. A gate that still closes has proved the expensive half of the system works, and the causes that remain are limits, commands and obstructions — nearly all of them inexpensive and often same-day. Expect a small part or an adjustment rather than an operator.',
      usuallyRepair: [
        'Open limit switches and travel re-learning',
        'Remotes, receivers and keypads',
        'Obstructions in the opening path',
        'Safety sensors covering the open arc',
        'Track, roller and hinge faults that bind in one direction',
      ],
      sometimesReplace: [
        'A receiver on an operator whose remotes are no longer manufactured',
        'An operator whose limit hardware has failed and is no longer available as a part',
      ],
    },

    dfw: [
      {
        heading: 'Why open limits drift in this soil',
        body: [
          'Much of Dallas–Fort Worth sits on Blackland Prairie clay, which swells in the wet and shrinks hard through a Texas summer. A gate post set in that ground moves a little each season, and a gate leaf is a long lever amplifying the movement at its far end.',
          'The operator, meanwhile, is still using the open position it learned on installation day. After a few seasons the taught position and the gate’s actual position no longer agree, and the symptom that appears first is usually a gate that will not complete — or start — its opening travel. It reads like an electrical fault and it began in the ground.',
        ],
      },
    ],

    faqs: [
      {
        q: 'The gate closes fine but will not open. Is the motor dead?',
        a: 'Almost certainly not. Opening and closing use the same motor running in opposite directions, so a motor that closes the gate is working. A fault affecting one direction only points at the open limit, the command reaching the operator, or something physically in the opening path — all much cheaper than a motor.',
      },
      {
        q: 'My remote will not open the gate but the keypad does. What is wrong?',
        a: 'The gate is fine and the fault is in the remote path. Start with the remote battery, which is the most common cause and costs a few dollars. If a fresh battery does not fix it, the remote needs reprogramming or the receiver is failing — both small jobs.',
      },
      {
        q: 'I am trapped behind the gate. What do I do right now?',
        a: 'Every gate operator has a manual release, usually a key or lever on the operator housing, that disconnects the motor so you can push the gate by hand. If you are not sure where yours is or how it works, call us and we will talk you through it for your model. Do not try to force or drive through the gate.',
      },
      {
        q: 'The gate opens a few inches and stops. Is that the same problem?',
        a: 'It is closely related. Stopping immediately after starting usually means the operator believes it has reached the open position — a limit or encoder fault — or it has met resistance and its obstruction detection has stopped it. If it stops much further into the travel, see our page on a gate that stops halfway.',
      },
      {
        q: 'Could a power cut have caused this?',
        a: 'It can. Some operators lose their learned limit positions after a power interruption and need their travel re-learned before they will run a full cycle again. If the gate started behaving this way straight after an outage or a storm, mention it — it points us at the right answer immediately.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'access-control-repair'],
    relatedSymptoms: ['gate-wont-close', 'gate-stops-halfway', 'gate-remote-not-working'],
    sources: [
      {
        label: 'LiftMaster gate operator manuals — limit adjustment and travel learn procedures',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'DoorKing gate operator owner’s manuals — troubleshooting',
        url: 'https://www.doorking.com/gate-operators',
      },
    ],
    toConfirm: [
      'Whether Shield will talk an owner through a manual release over the phone at no charge — stated as policy on this page.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-wont-close',
    label: 'Gate won’t close',
    searchedAs: ['Gate Won’t Close', "Gate Won't Close", 'Gate Opens But Won’t Close', "Gate Opens But Won't Close"],
    applies: 'both',
    urgency: 'security',
    urgencyNote:
      'The property is not secured while the gate stands open. This is the one fault on this site we treat as urgent by default, whatever the cause turns out to be.',

    title: 'Gate Won’t Close? Causes and Fixes | Dallas–Fort Worth',
    metaDescription:
      'A gate that opens but will not close is usually a photo-eye, not a motor. How to check the safety sensors, limits and obstructions yourself — DFW.',
    h1: 'Gate Won’t Close — What It Usually Means',
    heroIntro:
      'Four times out of five this is a safety sensor doing exactly what it was designed to do. The gate is not broken so much as refusing, and the thing it is refusing about is usually visible from where you are standing.',
    heroPoints: [
      'We start at the photo-eyes, because that is where this fault almost always is',
      'Sensors get realigned or replaced — never bypassed to make a gate close',
      'An open gate is an unsecured property, so we treat this one as urgent',
    ],

    whatIsHappening: [
      {
        heading: 'A gate that will not close is usually obeying its safety system',
        body: [
          'Powered gates are required to detect obstructions before and during closing. In practice that means photo-eyes — an infrared beam across the opening — and often an edge sensor on the leading edge of the gate. If either believes something is in the way, the operator will not close, and many will not even attempt it.',
          'That is the correct behaviour. A closing gate is hundreds of pounds moving under power, and the sensor is the only thing standing between it and whatever is in the gap. So the question on this page is almost never "how do I make it close" — it is "what does the sensor think it can see".',
        ],
      },
      {
        heading: 'Why sensors see things that are not there',
        body: [
          'A photo-eye is a transmitter and a receiver aimed at each other, often across twelve feet or more. Anything that breaks or scatters that beam reads as an obstruction: a spider web across the lens, condensation on a foggy morning, a bump from a car door that knocked the housing a few degrees out of alignment, dust and pollen build-up, or direct low sun flooding the receiver.',
          'The giveaway is a pattern. A gate that will not close only on foggy mornings, or only in late afternoon when the sun is low behind the receiver, is telling you precisely what is wrong. A gate that will not close at any time of day has usually suffered actual misalignment or a failed sensor.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Photo-eye blocked, dirty or misaligned',
        likelihood: 'most common',
        howToTell:
          'Look along the beam path for anything crossing it, then look at the lenses themselves — spider webs, dust and mud are the usual culprits. Most photo-eyes have an indicator LED that changes state when the beam is broken; if it shows blocked with nothing in the way, it is dirty or out of alignment.',
        fix: 'Cleaning the lenses and realigning the housings. Frequently a five-minute job, and one a careful owner can often do themselves.',
        ownerCanFix: true,
      },
      {
        cause: 'Failed photo-eye or damaged sensor wiring',
        likelihood: 'common',
        howToTell:
          'Lenses are clean and aligned, and the sensor still reports an obstruction — or shows no power at all. Wiring to gate-mounted sensors flexes every single cycle and eventually fractures, usually where it leaves the housing.',
        fix: 'Sensor or cable replacement. Small parts, and worth doing properly rather than repeatedly realigning a sensor whose cable is the actual fault.',
        ownerCanFix: false,
      },
      {
        cause: 'Close limit switch out of adjustment',
        likelihood: 'common',
        howToTell:
          'The gate starts closing and stops short of the post, or does not attempt to close because it believes it already is. Distinguished from a sensor fault by the gate actually moving before it stops.',
        fix: 'Re-setting the close limit and re-learning the travel. If the gate has sagged, the limit is a symptom and the sag needs fixing too.',
        ownerCanFix: false,
      },
      {
        cause: 'Obstruction in the closing path',
        likelihood: 'common',
        howToTell:
          'Walk the closing path with the operator released. Gravel washed into a slide gate’s track, an overgrown shrub, a stone, or the gate grounding on a driveway that has heaved will all stop it.',
        fix: 'Clearing the obstruction, and addressing the reason it is there. A slide gate track that fills with grit after every storm needs a drainage answer, not a monthly sweep.',
        ownerCanFix: true,
      },
      {
        cause: 'Edge sensor triggered or failed',
        likelihood: 'less common',
        howToTell:
          'An edge sensor is a pressure-sensitive strip on the leading edge of the gate. A damaged one, or one whose cable has fractured, reports permanent contact — so the operator behaves as though the gate is already touching something.',
        fix: 'Edge sensor replacement. These take physical abuse by design, so they are a genuine wear item on a busy gate.',
        ownerCanFix: false,
      },
      {
        cause: 'Timer-to-close disabled or set to hold open',
        likelihood: 'less common',
        howToTell:
          'The gate closes normally when commanded but never closes on its own, and always has to be told. That is a configuration setting, not a fault. Common after a board replacement, when the setting was not restored.',
        fix: 'Enabling and setting the timer-to-close at the board. A configuration change rather than a part.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Look along the photo-eye beam',
        body: 'Find the two sensor housings facing each other across the opening, usually low down on the posts. Check for anything crossing the beam — a bin, a parked bumper, a grown shrub, a spider web across a lens. This is the single most productive check on this page.',
      },
      {
        step: 'Clean both lenses',
        body: 'A soft dry cloth on both the transmitter and the receiver. Pollen, dust and mud accumulate, and in this region spiders build across the gap between the housings remarkably quickly. Many gates close normally straight afterwards.',
      },
      {
        step: 'Check whether the fault has a pattern',
        body: 'Does it only happen on foggy mornings, or only in late afternoon sun? A time-of-day pattern points squarely at the photo-eyes and tells us which one — low sun behind a receiver overwhelms it, and condensation scatters the beam. Tell us the pattern and we will arrive knowing the answer.',
      },
      {
        step: 'Watch what the gate does when you command it',
        body: 'Does it not move at all, or start closing and stop? Not moving points at a safety input blocking the command. Starting and stopping points at a limit, an obstruction, or obstruction-force detection. Two different diagnoses.',
      },
    ],

    doNot: [
      'Do not disconnect, tape over, or bypass a photo-eye to make the gate close. It is the only thing preventing the gate closing on a car, a pet or a child, and disabling it is both dangerous and a code violation.',
      'Do not increase the obstruction-force setting to push the gate past whatever is stopping it.',
      'Do not leave the gate standing open overnight without telling us — we would rather secure it than leave the property open.',
      'Do not spray lubricant on photo-eye lenses. It attracts dust and makes the problem permanent.',
    ],

    outlook: {
      summary:
        'This is the most fixable fault on this site and one of the cheapest. The overwhelming majority are photo-eyes — dirty, misaligned, or wired through a cable that has finally fractured — and all of those are small parts and short visits. Genuine operator failure is well down the list of causes.',
      usuallyRepair: [
        'Photo-eye cleaning, realignment and replacement',
        'Sensor cabling that has fatigued at the flex point',
        'Close limit adjustment and travel re-learning',
        'Obstructions and the drainage or landscaping causing them',
        'Edge sensors and timer-to-close configuration',
      ],
      sometimesReplace: [
        'A sensor type no longer manufactured, where a current equivalent is the sensible upgrade',
        'An installation whose safety devices predate current standards and cannot be made compliant as they are',
      ],
    },

    dfw: [
      {
        heading: 'Fog, low sun and Texas spiders',
        body: [
          'Three local conditions produce most of the photo-eye faults we see. Morning fog near the lakes — Lewisville, Ray Hubbard, Grapevine — puts condensation on lenses and scatters the beam, which is why lakeside gates classically refuse to close early and behave perfectly by lunchtime.',
          'Low sun is the second: a receiver facing west gets flooded in late afternoon and reads a fault. The third is simply that this region has a long warm season and spiders build webs across the gap between two sensor housings faster than anyone expects. None of these is an operator fault, and all of them get misdiagnosed as one.',
        ],
      },
      {
        heading: 'Storm grit and slide gate tracks',
        body: [
          'Heavy DFW downpours wash grit and gravel into slide gate tracks, and on exposed sites the wind delivers more. A track with debris in it stops the gate short of closed, and the operator reads the resistance as an obstruction — correctly. The gate is not faulty and neither is the sensor; the track needs clearing and, if it happens repeatedly, the drainage around it needs looking at.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate opens but will not close. What is the most likely cause?',
        a: 'A photo-eye — the infrared safety beam across the opening. Something is breaking it or the sensors are dirty or knocked out of alignment. Check the beam path and clean both lenses before anything else; that resolves a large share of these calls at no cost.',
      },
      {
        q: 'Can I just disconnect the sensor so the gate closes?',
        a: 'No, and we will not do it either. That sensor is what stops several hundred pounds of gate closing on a vehicle, a pet or a child, and disabling it is both dangerous and contrary to the safety standard gates are built to. If a sensor is faulty, the fix is to repair or replace it.',
      },
      {
        q: 'It only fails to close in the morning. Why?',
        a: 'Almost certainly condensation on the photo-eye lenses. Moisture scatters the infrared beam, the operator reads an obstruction, and once the sun burns the fog off it behaves perfectly. It is genuinely fixable — repositioning, hooding, or a sensor type that tolerates moisture — and it does not mean the gate needs replacing.',
      },
      {
        q: 'The gate starts closing then stops and reopens. Is that the same fault?',
        a: 'Related but distinct. Reversing mid-travel usually means obstruction detection triggered by real resistance — a fouled track, a dropped hinge, or a force setting that no longer matches a gate that has aged. See our page on a gate that reverses when closing.',
      },
      {
        q: 'How quickly can someone come out? The gate is stuck open.',
        a: 'We treat an open gate as urgent because the property is not secured, and we aim to get someone out the same day. If the fix needs a part we do not carry, we will secure the entrance in a safe state rather than leave it standing open indefinitely.',
      },
    ],

    relatedServices: ['automatic-gate-repair', 'emergency-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-photo-eye-not-working', 'gate-reverses-when-closing', 'gate-stops-halfway'],
    sources: [
      {
        label: 'UL 325 — entrapment protection requirements for powered gate operators',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
      {
        label: 'LiftMaster photoelectric sensor installation and alignment instructions',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Whether Shield offers a no-charge photo-eye clean and realign as part of a service visit, which this page implies.',
      'Confirm the same-day commitment for gates stuck open, which is stated here as policy.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-stops-halfway',
    label: 'Gate stops halfway',
    searchedAs: ['Gate Stops Halfway', 'Gate Opens Halfway Then Stops'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'A gate stopped mid-travel usually blocks the drive entirely and cannot be driven around. Find the manual release before trying anything else.',

    title: 'Gate Stops Halfway — Causes and Fixes | DFW Repair',
    metaDescription:
      'A gate that opens halfway and stops is nearly always meeting resistance at the same point. Here is how to find it, and why forcing it makes the repair worse.',
    h1: 'Gate Stops Halfway Through Its Travel',
    heroIntro:
      'A gate that stops at the same point every time is not random, and that consistency is the most useful diagnostic information you have. Something is physically there, and the operator is doing what it should by stopping.',
    heroPoints: [
      'We find the point it stops at before we touch a setting — the position identifies the fault',
      'Obstruction force gets diagnosed, never quietly turned up to mask a mechanical problem',
      'Track, roller and hinge wear fixed at the cause rather than compensated for at the board',
    ],

    whatIsHappening: [
      {
        heading: 'Obstruction detection is the operator protecting itself and you',
        body: [
          'Every compliant gate operator monitors how hard it is working. If the load rises beyond what it expects for that point in the travel, it concludes something is in the way and stops — often reversing. This is entrapment protection and it is required by the safety standard gate operators are built to.',
          'So a gate stopping halfway is usually not a malfunction. It is the operator correctly reporting that moving the gate got harder than it should be. The useful question is what changed, and where.',
        ],
      },
      {
        heading: 'Why the stopping point tells you almost everything',
        body: [
          'If the gate stops at the same place every time, the cause is at that place. A slide gate that halts at one point has a fouled or damaged section of track, a failing roller reaching that spot, or a chain issue at that part of its run. A swing gate that stops at the same angle is grounding on a high point in the driveway, meeting a grown shrub, or reaching the part of its arc where a dropped hinge makes the leaf scrape.',
          'If it stops at a different place each time, the diagnosis changes completely. Random stopping points suggest an intermittent electrical fault, a failing capacitor that cannot sustain load, a dying battery on a solar unit, or a motor that is overheating and cutting out thermally. Note which of the two you have before calling — it halves the diagnostic time.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Physical obstruction or debris at one point in the travel',
        likelihood: 'most common',
        howToTell:
          'It stops at the same place every time. Release the operator and push the gate by hand through that point — you will usually feel exactly where it binds. On slide gates, look in the track at the stopping point.',
        fix: 'Clearing the track or the path. Often free, and often recurring if the reason debris collects there is not addressed.',
        ownerCanFix: true,
      },
      {
        cause: 'Worn or seized roller, or damaged track',
        likelihood: 'most common',
        howToTell:
          'Slide gates. The gate is harder to push by hand at one point, or you can hear grinding as it passes a particular spot. A seized roller often shows a flat spot or rust streaking.',
        fix: 'Roller replacement or track repair. Important to fix rather than compensate for — an operator asked to drag a gate over a bad roller will fail, and that failure is much more expensive.',
        ownerCanFix: false,
      },
      {
        cause: 'Gate sagging or grounding as it swings',
        likelihood: 'common',
        howToTell:
          'Swing gates. Look for a scrape mark on the driveway in an arc, or a gap at the top of the hinge side that is wider than it used to be. The gate stops at the point where the leaf meets the ground.',
        fix: 'Resetting the hinge, re-squaring the leaf, or addressing the post. Fitting a stronger operator to drag a sagging gate is the common mistake and it fails again.',
        ownerCanFix: false,
      },
      {
        cause: 'Failing capacitor or weak battery — cannot sustain load',
        likelihood: 'common',
        howToTell:
          'It stops at a different point each time, and often gets further on a cool morning than on a hot afternoon. On solar units it manages a full cycle after a sunny day and stalls after a cloudy one.',
        fix: 'Capacitor or battery replacement. Both are small parts, and both are heat-shortened in this climate.',
        ownerCanFix: false,
      },
      {
        cause: 'Obstruction-force setting no longer matched to the gate',
        likelihood: 'common',
        howToTell:
          'Nothing is physically in the way, the gate pushes freely by hand, and it still stops. The setting was dialled in when the gate was new and the gate has since aged, or a heavier leaf was fitted without the setting being revisited.',
        fix: 'Re-commissioning the force settings against the gate as it is now — not simply turning them up, which would defeat the entrapment protection they exist to provide.',
        ownerCanFix: false,
      },
      {
        cause: 'Motor overheating and thermally cutting out',
        likelihood: 'less common',
        howToTell:
          'It works first thing, fails later in the day, and recovers after an hour of rest. Strongly seasonal — this appears in July and vanishes in October.',
        fix: 'Usually a symptom of the motor working harder than it should, so the mechanical cause gets found first. A motor cutting out thermally on an easy gate is a motor nearing the end.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Note whether it stops at the same place every time',
        body: 'Run the gate three times and watch. Same point every time means a physical cause at that point. Different points means an electrical or thermal cause. This single observation changes the whole diagnosis, and it is the most useful thing you can tell us on the phone.',
      },
      {
        step: 'Push the gate through the stopping point by hand',
        body: 'With the operator released, walk the gate through its full travel. You will usually feel the bind exactly where the operator stops. If it moves freely by hand through that point, the cause is electrical rather than mechanical.',
      },
      {
        step: 'Look at the track or the ground at the stopping point',
        body: 'On a slide gate, inspect the track where the gate halts — grit, a stone, a bent section, or a roller sitting badly. On a swing gate, look for an arc-shaped scrape on the driveway showing where the leaf grounds.',
      },
      {
        step: 'Check whether it is worse when hot',
        body: 'If it completes a full cycle in the morning and stops halfway in the afternoon, that points at a capacitor, a battery, or a motor cutting out thermally rather than at anything mechanical.',
      },
    ],

    doNot: [
      'Do not turn up the obstruction-force setting to push the gate past the stop. That setting is entrapment protection, and raising it to overcome a real mechanical fault is how gates injure people.',
      'Do not repeatedly re-trigger a gate that is stalling. Each attempt drives the operator into the obstruction and adds wear to the motor and gearbox.',
      'Do not lubricate a slide gate track. Track is designed to run dry — oil traps grit and accelerates roller wear.',
      'Do not lift or lever a sagging gate past its grounding point. You will strain the hinge that is already failing.',
    ],

    outlook: {
      summary:
        'Most of these are mechanical and most are inexpensive — debris, a roller, a hinge that has dropped. The important thing is that they are genuinely fixed rather than compensated for at the control board, because an operator repeatedly dragging a gate over a bad roller is an operator being destroyed slowly.',
      usuallyRepair: [
        'Track clearing, track repair and roller replacement',
        'Hinge resetting and re-squaring a sagging leaf',
        'Capacitors and batteries',
        'Force and limit re-commissioning against the gate as it is now',
      ],
      sometimesReplace: [
        'A motor that has been cutting out thermally for a season and is near the end of its life',
        'An operator under-specified for the gate, where the repeated stalling is the specification rather than a fault',
      ],
    },

    dfw: [
      {
        heading: 'Why this fault peaks in July and after storms',
        body: [
          'Two DFW patterns drive most of these calls. The first is heat: capacitors and batteries degrade faster in a long run of triple-digit days, and a motor already working hard against a stiff gate will cut out thermally in the afternoon and recover overnight. That produces the classic "works in the morning, stops halfway by 3pm" report, and it is seasonal rather than random.',
          'The second is storm debris. Heavy downpours wash grit and gravel into slide gate tracks, and in the wind-exposed parts of the metroplex — the lake shorelines especially — it keeps arriving. A gate that starts stopping at the same point a day after a storm almost always has something in the track.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate opens halfway and stops. Is the motor failing?',
        a: 'Usually not. Far more often the operator is correctly detecting that the gate got harder to move at that point and stopping, which is the entrapment protection working. Release the operator and push the gate through the stopping point by hand — if it binds, the fault is mechanical and the motor is innocent.',
      },
      {
        q: 'It stops in a different place every time. Does that mean something different?',
        a: 'Yes, and it is a useful distinction. A consistent stopping point means a physical cause at that point. Random stopping points point at an electrical cause that cannot sustain load — a failing capacitor, a weak battery, or a motor cutting out on thermal overload.',
      },
      {
        q: 'Can I just turn up the force setting so it pushes through?',
        a: 'Please do not, and we will not either. That setting is what stops the gate crushing something it meets. Raising it to overcome a genuine mechanical fault removes the protection and leaves the underlying problem to get worse — usually until the operator itself fails.',
      },
      {
        q: 'It only does this in the afternoon. Why would time of day matter?',
        a: 'Heat. A capacitor or battery that is marginal will manage a cycle in the cool of the morning and fail under the same load once the housing has been in full Texas sun all day, and a motor working harder than it should will cut out thermally and recover after an hour. It is one of the more reliable diagnostic clues we get.',
      },
      {
        q: 'How much does this normally cost to fix?',
        a: 'We will give you the figure before starting, but the common answers here — clearing a track, replacing a roller, replacing a capacitor — are among the cheaper repairs we do. The expensive outcome is leaving it, because an operator that drags a gate over a failing roller for six months ends up needing replacing itself.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['sliding-gate-off-track', 'gate-sagging-or-dragging', 'gate-reverses-when-closing'],
    sources: [
      {
        label: 'UL 325 — inherent entrapment protection and force limits',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
      {
        label: 'LiftMaster gate operator manuals — force adjustment and obstruction detection',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Typical parts cost for roller replacement and track repair, so the cost question can be answered with a range rather than a deflection.',
    ],
    indexable: true,
  },
]
