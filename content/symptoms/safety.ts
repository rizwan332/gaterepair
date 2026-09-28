import type { SymptomPage } from './types'

/**
 * Faults in the devices that decide whether a gate is allowed to move.
 *
 * These sit deliberately close to 'gate-wont-close' and are written from the
 * opposite direction to stay distinct from it. That page answers "my gate is
 * doing this"; these answer "this device is doing this" — how the part works,
 * what its indicator means, what its failure modes are. Someone who already
 * knows a photo-eye is involved needs the second page, not the first, and the
 * overlap check in lib/symptom-quality.ts holds the line between them.
 */
export const safetySymptoms: SymptomPage[] = [
  {
    slug: 'gate-reverses-when-closing',
    label: 'Gate reverses when closing',
    searchedAs: ['Gate Reverses When Closing'],
    applies: 'both',
    urgency: 'security',
    urgencyNote:
      'The gate ends up open every time, so the property is not secured — and unlike a gate that simply will not move, this one is repeatedly driving itself into whatever is stopping it.',

    title: 'Gate Reverses When Closing — Causes & Fixes | DFW',
    metaDescription:
      'A gate that starts closing then reopens has detected resistance. Here is how to tell a real obstruction from a force setting that no longer fits your gate.',
    h1: 'Gate Reverses When Closing',
    heroIntro:
      'Reversing is not a malfunction — it is the operator finding more resistance than it expects and backing off, exactly as it is built to. The job is working out whether the resistance is real, and this page shows you how to tell.',
    heroPoints: [
      'We measure the actual closing force rather than guessing at the dial',
      'A gate that has aged gets its force re-commissioned to the gate it is now',
      'Real resistance gets fixed at the hinge, track or post — not tuned out at the board',
    ],

    whatIsHappening: [
      {
        heading: 'Reversing and refusing to move are different signals',
        body: [
          'A gate that will not begin to close is being blocked by a safety input before it starts — normally a photo-eye reporting a clear obstruction. A gate that begins closing and then reverses got further: it started, met resistance partway, and its obstruction detection decided something was in the way.',
          'That difference matters because it points at different hardware. The first is a sensor question. The second is a force question, and force is measured by the operator watching how hard its own motor is working. So the diagnosis is about what changed between the gate the operator was taught and the gate it has now.',
        ],
      },
      {
        heading: 'Why a healthy gate starts reversing without anything being in the way',
        body: [
          'Obstruction force is commissioned against the gate as it is on the day of installation. Over the following years the gate changes: a swing leaf settles on its hinges, a slide gate’s rollers wear, a chain stretches, grit builds in a track, hinges dry out, and in this region a post moves with the clay it is set in. Each adds a little resistance.',
          'None of these on its own is enough to stop a gate. Together they lift the effort required past the threshold the operator was taught, and the operator does the only thing it can: it concludes something is in the way and reverses. Nothing is in the way, and nothing has failed — the gate has simply got stiffer than its own settings expect. That is a real fault with a real fix, and the fix is not turning the dial up.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Genuine resistance from track, roller, hinge or post wear',
        likelihood: 'most common',
        howToTell:
          'Release the operator and close the gate by hand. It should move smoothly with one hand through its whole travel. If you feel it getting heavier at the point where the operator gives up, the resistance is real and the operator is right.',
        fix: 'Fix the mechanical cause — clear or repair the track, replace the worn roller, reset the dropped hinge, address the post. Then re-commission the force against the repaired gate.',
        ownerCanFix: false,
      },
      {
        cause: 'Obstruction force set for a gate that no longer exists',
        likelihood: 'most common',
        howToTell:
          'The gate pushes freely by hand through its entire travel and still reverses. Very common on installations five years and older, and on gates where a heavier leaf was fitted without the operator being re-commissioned.',
        fix: 'Re-commissioning the force and travel settings against the gate as it is today — within the limits the safety standard allows, never simply raised until the symptom stops.',
        ownerCanFix: false,
      },
      {
        cause: 'Photo-eye triggering partway through the closing travel',
        likelihood: 'common',
        howToTell:
          'Watch the gate as it reverses and note where it is when it changes direction. If it reverses at the same point where the leaf passes the beam, the sensor is being clipped by the gate itself — usually because a housing was knocked or a gate has sagged into the beam path.',
        fix: 'Repositioning the sensor, or correcting the sag that has brought the gate into the beam.',
        ownerCanFix: true,
      },
      {
        cause: 'Edge sensor making intermittent contact',
        likelihood: 'common',
        howToTell:
          'The reversal point moves around rather than being consistent. An edge sensor with a damaged strip or a fatigued cable makes and breaks contact as the gate moves and vibrates.',
        fix: 'Edge sensor or cable replacement. These are mounted on the moving leaf and flex every cycle, so they are a genuine wear item.',
        ownerCanFix: false,
      },
      {
        cause: 'Gate grounding on a driveway that has heaved or settled',
        likelihood: 'common',
        howToTell:
          'Swing gates especially. Look for an arc-shaped scrape on the driveway surface. The gate clears the ground for most of its travel and touches down near the closed position, which is exactly when the reversal happens.',
        fix: 'Re-squaring or raising the leaf, resetting the hinge, or addressing the slab. Common on concrete over expansive clay.',
        ownerCanFix: false,
      },
      {
        cause: 'Failing capacitor or weak battery misread as an obstruction',
        likelihood: 'less common',
        howToTell:
          'The gate reverses more readily when hot, or later in the day, and manages a clean close first thing. An operator that cannot deliver full torque looks — from the board’s perspective — exactly like a gate that has become hard to move.',
        fix: 'Capacitor or battery replacement. Worth ruling in before force settings are touched, because adjusting force to compensate for a dying capacitor hides a fault that is about to get worse.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Note exactly where it reverses',
        body: 'Run the gate and watch. A consistent reversal point means a physical cause at that point — or a photo-eye the leaf passes there. A reversal point that moves suggests an intermittent electrical or sensor fault. Tell us which, and the visit gets much shorter.',
      },
      {
        step: 'Close the gate by hand',
        body: 'With the operator released, push the gate closed. It should move smoothly with one hand all the way. Increasing heaviness near the reversal point means the operator is correctly detecting real resistance, and the fix is mechanical.',
      },
      {
        step: 'Look for a scrape arc on the ground',
        body: 'A curved scuff mark on the driveway under a swing gate is proof the leaf is grounding. That is a sagging gate, and the reversal is a consequence rather than the fault.',
      },
      {
        step: 'Check whether heat makes it worse',
        body: 'If it closes cleanly in the morning and reverses in the afternoon, the cause is more likely a capacitor or battery that cannot deliver full torque when hot than anything mechanical.',
      },
    ],

    doNot: [
      'Do not increase the obstruction-force setting to stop the reversing. That setting is entrapment protection — it is what makes the gate stop instead of crushing what it meets.',
      'Do not disconnect the edge sensor or photo-eye to get a clean close.',
      'Do not keep cycling the gate. Each reversal is the operator driving the gate into real resistance and then reversing under load, which wears the motor, the gearbox and the gate.',
      'Do not shim or wedge the gate to stop it grounding — that transfers the load into the hinge that is already failing.',
    ],

    outlook: {
      summary:
        'Almost always repairable, and usually mechanically. The important judgement is honesty about which of the two main causes you have: a genuinely stiff gate needs a mechanical repair, and a correctly-working gate whose settings have aged needs re-commissioning. Turning the force up addresses neither and removes a safety function while it does it.',
      usuallyRepair: [
        'Track clearing, roller and chain replacement',
        'Hinge resetting and re-squaring a sagging leaf',
        'Force and travel re-commissioning within standard limits',
        'Photo-eye repositioning and edge sensor replacement',
        'Capacitors and batteries',
      ],
      sometimesReplace: [
        'An operator under-specified for the gate’s weight, where reversing is the specification showing itself rather than a fault',
        'An edge sensor type no longer manufactured, where a current equivalent is the sensible upgrade',
      ],
    },

    dfw: [
      {
        heading: 'Expansive clay makes this a seasonal complaint',
        body: [
          'Gates in Dallas–Fort Worth get measurably stiffer through late summer. The Blackland Prairie clay much of the metroplex sits on shrinks hard in a long dry spell, posts move with it, and a gate that was square in April is very slightly out of square by September. Driveways over that clay heave and settle on the same cycle.',
          'The result is a wave of reversing gates that have nothing in the way and nothing broken — they have simply moved outside the settings they were commissioned to. It is also why we re-check the posts and the ground before we touch a force setting on a gate that has behaved perfectly for years.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate starts to close then opens again, but there is nothing in the way. Why?',
        a: 'The operator measures how hard its motor is working and reverses if that exceeds what it was taught. If the gate has become stiffer over the years — worn rollers, a settled hinge, a post that has moved — the effort now exceeds the old threshold even with nothing in the path. The fix is to repair the stiffness and re-commission the settings.',
      },
      {
        q: 'Can you just turn the force up so it closes?',
        a: 'We will not, and you should be wary of anyone who offers to. That setting is what makes the gate stop rather than crush a car, a pet or a person. Raising it to mask a mechanical fault removes the protection and leaves the fault to get worse. Re-commissioning within the standard’s limits is a different thing, and that we will do.',
      },
      {
        q: 'It reverses at the same spot every time. What does that tell you?',
        a: 'That the cause is at that spot. Either something physical is there — a fouled section of track, a roller reaching its worn point, the leaf grounding on the driveway — or the gate is passing a photo-eye whose housing has been knocked into the leaf’s path. A consistent reversal point is the most useful clue you can give us.',
      },
      {
        q: 'Is a reversing gate dangerous?',
        a: 'The reversing itself is the safety system working correctly. What is not good is leaving it: each cycle drives the gate into real resistance under power, which wears the operator and the gate, and the property sits unsecured because the gate ends up open every time.',
      },
      {
        q: 'Why did this start suddenly when nothing has changed?',
        a: 'Usually because the change was gradual and the threshold was crossed suddenly. Wear accumulates invisibly for years until the effort finally exceeds the setting, and then it appears overnight. In this region a dry spell moving a post is the most common trigger for a gate that was fine last month.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-wont-close', 'gate-sagging-or-dragging', 'gate-stops-halfway'],
    sources: [
      {
        label: 'UL 325 — inherent entrapment protection, force limits and reversal requirements',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
      {
        label: 'LiftMaster gate operator manuals — obstruction force adjustment procedures',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Whether Shield’s technicians carry a force gauge, which this page implies by saying force is measured rather than estimated.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-opens-by-itself',
    label: 'Gate opens by itself',
    searchedAs: ['Gate Opens By Itself'],
    applies: 'both',
    urgency: 'security',
    urgencyNote:
      'A gate opening on its own is a security failure first and a fault second. Until it is diagnosed, treat the property as unsecured overnight.',

    title: 'Gate Opens By Itself — Why, and How to Stop It | DFW',
    metaDescription:
      'A gate that opens on its own is usually a stuck input, a loop detector or a cloned remote — not a ghost. Here is how to find which, and secure it meanwhile.',
    h1: 'Gate Opens By Itself',
    heroIntro:
      'A gate that opens unbidden has received an open command from somewhere, or believes it has. There are only a handful of places that command can come from, and working through them in order finds it.',
    heroPoints: [
      'We trace which input is firing rather than replacing parts on suspicion',
      'Loop detectors get checked for water ingress — the most common cause after storms',
      'If a remote has been cloned or lost, we can clear and re-pair the receiver',
    ],

    whatIsHappening: [
      {
        heading: 'The operator is not choosing to open — something is telling it to',
        body: [
          'A gate operator opens when it sees an open command on one of its inputs. It cannot distinguish a genuine command from a false one; a shorted wire, a wet connector and a legitimate remote press all look identical at the terminal. So "the gate opened by itself" is really "an input closed and I do not know which one".',
          'The inputs worth suspecting are few: the radio receiver, the keypad or telephone entry, the exit loop buried in the driveway, any free-exit or fire service input, and the physical wiring between them and the board. That is a short list, and each has a distinguishable signature.',
        ],
      },
      {
        heading: 'Randomness usually has a pattern once you look',
        body: [
          'Owners almost always describe this as random, and it almost never is. A gate opening within a minute of a vehicle passing on the road points at a loop detector too sensitive or a loop that has cracked. Opening after rain points at water in a connector, a junction box or the loop itself. Opening at the same time of day points at a timer or an access control schedule.',
          'Opening when a neighbour arrives home points at a shared or cloned remote code — a genuine issue on older fixed-code receivers, which had a limited number of codes and no rolling encryption. Establishing the pattern is most of the diagnosis, and it is something only you can observe.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Loop detector fault or water in the loop',
        likelihood: 'most common',
        howToTell:
          'Strongly associated with rain. An exit loop is a wire loop cut into the driveway; if water reaches a break in the insulation or the splice in its junction box, the detector sees a permanent or fluctuating change and calls for open. Most detectors have an LED that shows detection — watch it with nothing over the loop.',
        fix: 'Drying and resealing the splice, re-tuning the detector sensitivity, or re-cutting the loop where the wire itself has failed.',
        ownerCanFix: false,
      },
      {
        cause: 'Stuck or shorted input wiring',
        likelihood: 'common',
        howToTell:
          'The gate opens immediately every time it finishes closing, or opens constantly. A wire that has chafed through to ground, a corroded terminal, or a rodent-damaged run produces a permanently asserted command.',
        fix: 'Tracing and repairing the run. Terminal corrosion is common on installations where the enclosure seal has aged, which is worth fixing at the same time.',
        ownerCanFix: false,
      },
      {
        cause: 'Remote stuck, lost, or sat on',
        likelihood: 'common',
        howToTell:
          'The simplest cause and worth eliminating first. A remote wedged in a car door pocket, under a seat, or in a bag with a button held down will open the gate whenever it is in range. Collect every remote you know of and see if the behaviour stops.',
        fix: 'Find the remote. If one is missing, clear the receiver’s memory and re-pair only the remotes you still hold.',
        ownerCanFix: true,
      },
      {
        cause: 'Fixed-code receiver responding to someone else’s transmitter',
        likelihood: 'less common',
        howToTell:
          'Older receivers used a small number of fixed codes set by DIP switches, so a neighbour’s remote or a passing vehicle’s transmitter could legitimately open your gate. Suspect this on pre-rolling-code equipment, especially in dense neighbourhoods.',
        fix: 'Upgrading to a rolling-code receiver and remotes. This is a security fix as much as a fault fix.',
        ownerCanFix: false,
      },
      {
        cause: 'Access control schedule or timer holding the gate open',
        likelihood: 'less common',
        howToTell:
          'It happens at the same time each day, or on the same days. Common on commercial and HOA sites where a schedule opens the entrance for deliveries or business hours and has been left in place or mis-set.',
        fix: 'A configuration change at the controller. Not a fault at all, but it accounts for a meaningful share of these calls on commercial sites.',
        ownerCanFix: false,
      },
      {
        cause: 'Control board fault or lightning damage',
        likelihood: 'rare',
        howToTell:
          'Everything else has been eliminated, and often there was a storm or a nearby strike beforehand. A damaged board can assert an output without any input at all.',
        fix: 'Board replacement, and fitting surge protection if none is present — an unprotected board tends not to be the last one.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Account for every remote',
        body: 'Gather all of them, including any in vehicles you do not drive daily and any given to cleaners, gardeners or family. A button held down by a car seat is the single most common answer, and finding it costs nothing.',
      },
      {
        step: 'Note whether it correlates with rain',
        body: 'If the openings started after a storm, or happen only when it is wet, the loop detector or a wet junction is almost certainly the cause. This is the most useful single observation you can make.',
      },
      {
        step: 'Watch for a time-of-day or traffic pattern',
        body: 'Does it open shortly after a vehicle passes on the road? Does it happen at the same hour? Traffic points at loop sensitivity; a fixed hour points at a timer or schedule. Keep a note for two days — it usually resolves the diagnosis.',
      },
      {
        step: 'Look at the loop detector’s indicator',
        body: 'With nothing over the loop, the detector should show no detection. If its LED shows detection with an empty driveway, or flickers, you have found the fault without opening anything.',
      },
    ],

    doNot: [
      'Do not simply disconnect the loop to stop the openings — that removes the free-exit safety function that lets vehicles out.',
      'Do not leave a gate that opens on its own unaddressed overnight on the assumption it is harmless. It is a security failure.',
      'Do not reprogram or clear a receiver without a list of the remotes you need to re-pair, or you will lock out legitimate users.',
      'Do not assume it is a ghost or a neighbour being malicious before checking the loop and the remotes.',
    ],

    outlook: {
      summary:
        'Nearly always repairable and often cheaply. The two commonest causes — a stuck remote and a wet loop splice — cost little or nothing to resolve. The one case worth treating as an upgrade rather than a repair is an old fixed-code receiver, where the right answer is modern rolling-code equipment for security reasons regardless.',
      usuallyRepair: [
        'Loop splices, loop detector tuning and re-cut loops',
        'Damaged or corroded input wiring',
        'Receiver memory clearing and remote re-pairing',
        'Access control schedules and timers',
      ],
      sometimesReplace: [
        'A fixed-code receiver, which should be upgraded to rolling code on security grounds',
        'A control board damaged by a surge, ideally with surge protection added',
      ],
    },

    dfw: [
      {
        heading: 'Why this arrives with the storm season',
        body: [
          'The single strongest predictor of a self-opening gate in this region is rainfall. Driveway loops are saw-cut into the slab and sealed, and that seal degrades in a climate that swings between saturated ground and hard-baked clay. Once water reaches the splice or a nick in the loop wire, the detector reads a change and calls for open — often repeatedly, for as long as it stays wet.',
          'Lightning is the second storm mechanism. Surges take out boards and detectors across the metroplex every season, and a damaged board can assert an open output with no input at all. If the behaviour started the night of a storm, that is where we look first.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate opens on its own at random. Is someone opening it?',
        a: 'Possible but unlikely. Far more often it is a remote with a button held down somewhere, or a driveway loop that has taken in water and is reporting a vehicle that is not there. Both are common, and both are cheap to resolve. Gather every remote first — it costs nothing and settles the question quickly.',
      },
      {
        q: 'It only happens when it rains. What does that mean?',
        a: 'Water has reached the exit loop or its splice. The loop is a wire cut into the driveway and sealed, and once that seal fails the detector sees a change in the loop and calls for open. Drying and resealing the splice, or re-cutting the loop where the wire has failed, fixes it.',
      },
      {
        q: 'Could a neighbour’s remote open my gate?',
        a: 'On older equipment, genuinely yes. Fixed-code receivers used a limited set of codes chosen by DIP switches, so duplicates in one neighbourhood were possible. Modern rolling-code systems make this effectively impossible, and if you are on fixed code we would recommend upgrading for security reasons whether or not it is the cause here.',
      },
      {
        q: 'Can you secure the gate while you diagnose it?',
        a: 'Yes. We can isolate the suspect input so the gate stays closed and is operated only by the controls you trust, which secures the property while we trace the fault. What we will not do is disable free-exit safety functions and leave it that way.',
      },
      {
        q: 'How long does it take to find the cause?',
        a: 'Usually one visit, and the pattern you have observed decides how fast. "It happens after rain" or "it happens when a car passes" points us straight at the loop; "it happens at 7am daily" points at a schedule. If you can note when it happens for a couple of days before we arrive, it genuinely shortens the job.',
      },
    ],

    relatedServices: ['access-control-repair', 'automatic-gate-repair', 'commercial-gate-repair'],
    relatedSymptoms: ['gate-loop-detector-not-working', 'gate-remote-not-working', 'gate-not-working-after-storm'],
    sources: [
      {
        label: 'DoorKing loop detector and vehicle detector installation manuals',
        url: 'https://www.doorking.com/gate-operators',
      },
      {
        label: 'LiftMaster receiver and remote programming instructions (rolling code)',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Whether Shield can isolate an input to secure a gate pending diagnosis, which this page offers as a service.',
      'Whether loop re-cutting is done in house or subcontracted, since it involves saw-cutting a driveway.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-photo-eye-not-working',
    label: 'Photo eye / safety sensor not working',
    searchedAs: ['Gate Photo Eye Not Working', 'Gate Sensor Not Working'],
    applies: 'both',
    urgency: 'safety',
    urgencyNote:
      'A gate with a failed photo-eye has lost its entrapment protection. Until it is repaired, the gate should not be left operating unattended around vehicles, pets or children.',

    title: 'Gate Photo Eye Not Working — Diagnose It | DFW',
    metaDescription:
      'Photo eye faulting, or a gate that will not close? How through-beam and reflective sensors fail, what the indicator LEDs mean, and what can be realigned.',
    h1: 'Gate Photo Eye and Safety Sensor Faults',
    heroIntro:
      'The photo-eye is the device that stops a gate closing on a car, a pet or a person, and it is also the most frequently misdiagnosed part on a gate. This page is about the sensor itself — how it works, how it fails, and what its indicator is telling you.',
    heroPoints: [
      'We align sensors with the gate cycling, not by eye at rest',
      'Sensor cable is tested at the flex point, where it actually fails',
      'Failed sensors get replaced to current standard — never bypassed',
    ],

    whatIsHappening: [
      {
        heading: 'Two designs, two different failure modes',
        body: [
          'A through-beam photo-eye is two units facing each other: a transmitter on one side of the opening and a receiver on the other, wired separately. A retro-reflective photo-eye is a single unit with a reflector opposite it, so the beam makes a round trip. Both report an obstruction when the beam is interrupted.',
          'They fail differently, which matters when diagnosing. Through-beam units go out of alignment when either housing is knocked, and need power run to both sides. Reflective units are more tolerant of small knocks but far more sensitive to a dirty or fogged reflector, and they can be fooled by a shiny surface elsewhere in their field. Knowing which you have narrows the fault immediately.',
        ],
      },
      {
        heading: 'The indicator LED is the diagnosis, if you can read it',
        body: [
          'Nearly every photo-eye has a status LED, and on most designs a steady light means the beam is made and a flashing or extinguished light means it is broken. Some units use a second colour for alignment quality — lit but marginal, which is the state that produces a gate working perfectly in the morning and failing at dusk.',
          'That marginal state is the one worth understanding. A beam that is only just landing on the receiver will be broken by a speck of pollen, a heat shimmer off a driveway, or a housing expanding a fraction of a degree in the sun. The sensor is not faulty and neither is the gate, but the alignment has no margin, and the fix is alignment rather than replacement.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Dirty lens or reflector',
        likelihood: 'most common',
        howToTell:
          'Look directly at the lens faces. Dust, pollen, mud spatter from the drive, and in this region spider webs strung between the two housings. A reflective unit’s reflector is just as important as its lens and is usually the dirtier of the two.',
        fix: 'Clean both faces with a soft dry cloth. Frequently a complete fix, and one an owner can do safely.',
        ownerCanFix: true,
      },
      {
        cause: 'Misalignment after a knock',
        likelihood: 'most common',
        howToTell:
          'The LED shows a broken beam with nothing in the path. Housings sit low on posts precisely where car doors, mowers, trash bins and bicycle handlebars find them, so a few degrees of movement is routine.',
        fix: 'Realignment, done with the gate cycling so the alignment holds through the vibration of real operation rather than only at rest.',
        ownerCanFix: true,
      },
      {
        cause: 'Fractured sensor cable at the flex point',
        likelihood: 'common',
        howToTell:
          'Intermittent faults that come and go with no pattern in the weather, or a sensor with no power at all. On gate-mounted sensors the cable flexes every single cycle and eventually breaks inside the insulation, usually where it exits the housing or crosses the hinge.',
        fix: 'Cable replacement with a proper flex-rated run and strain relief. Realigning a sensor whose cable is the fault is a repair that lasts until the next cold morning.',
        ownerCanFix: false,
      },
      {
        cause: 'Water ingress into the housing or terminal',
        likelihood: 'common',
        howToTell:
          'Faults that begin during or after rain and clear when things dry out. Look for condensation inside the lens, or green corrosion at the terminals.',
        fix: 'Drying and resealing, or replacing a housing whose seal has failed. If the enclosure gasket has perished, replacing the sensor without addressing the seal only restarts the clock.',
        ownerCanFix: false,
      },
      {
        cause: 'Low sun or a reflective surface overwhelming the receiver',
        likelihood: 'common',
        howToTell:
          'Strictly time-of-day. A west-facing receiver floods in late afternoon; a reflective unit can also be confused by a parked car’s chrome or a wet driveway bouncing the beam.',
        fix: 'Hooding or repositioning the sensor, or changing to a design less susceptible to the geometry of that entrance.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed sensor',
        likelihood: 'less common',
        howToTell:
          'The last conclusion, not the first. Lenses clean, alignment good, cable sound, and the unit still reports a permanent obstruction or shows no life at all.',
        fix: 'Replacement with a current, compliant sensor. Worth taking the opportunity to bring an older installation up to present standards while the technician is there.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Identify which type you have',
        body: 'Two facing units wired separately is through-beam. One unit and a plain reflector opposite is retro-reflective. This changes what is worth checking, and it is the first thing we will ask you on the phone.',
      },
      {
        step: 'Clean every optical face',
        body: 'Lens on the transmitter, lens on the receiver, and the reflector if you have one. A soft dry cloth only — no solvents and no lubricant sprays, which attract dust and make the problem permanent.',
      },
      {
        step: 'Read the indicator LED',
        body: 'With the beam path clear, the LED should show a made beam. If it shows blocked, or flickers, you have confirmed a sensor-side fault without any tools. Photograph it before calling.',
      },
      {
        step: 'Check whether the fault has a time or weather pattern',
        body: 'Failing only in fog points at condensation; only in late afternoon points at low sun; only in the wet points at water ingress. Anything that repeats on a schedule is an alignment or environment problem rather than a failed part.',
      },
    ],

    doNot: [
      'Do not tape over, unplug, or jumper out a photo-eye to make the gate work. It is the entrapment protection required by the safety standard, and every year people are seriously injured by gates whose sensors were bypassed.',
      'Do not spray lubricant or glass cleaner into the housing.',
      'Do not aim a sensor by trial and error while the gate is running — stand clear of the opening.',
      'Do not replace a sensor without checking its cable first; the cable is more often the fault than the sensor on gate-mounted units.',
    ],

    outlook: {
      summary:
        'This is among the cheapest categories of gate repair. Most faults are cleaning or alignment, both of which are minutes; the next most common is a cable, which is a small part and a short visit. Outright sensor failure is real but well down the list, and even then the part is inexpensive.',
      usuallyRepair: [
        'Cleaning lenses and reflectors',
        'Realignment, done under cycling conditions',
        'Sensor cable replacement with proper strain relief',
        'Drying and resealing housings and terminals',
        'Hooding or repositioning to defeat low sun',
      ],
      sometimesReplace: [
        'A sensor whose housing seal has perished and takes water repeatedly',
        'Non-compliant or obsolete sensors on an older installation, which should be brought to current standard',
      ],
    },

    dfw: [
      {
        heading: 'Fog, pollen, spiders and low sun',
        body: [
          'Four local conditions account for most of the photo-eye work in this metroplex. Lake fog — around Lewisville, Grapevine and Ray Hubbard especially — puts condensation on lenses and scatters the beam, producing gates that fail early and behave perfectly by mid-morning. Spring pollen coats optical faces across the whole region within days.',
          'This area also has a long warm season and a lot of spiders, and the gap between two photo-eye housings is close to an ideal web anchor. Finally, an entrance facing west gets its receiver flooded by low sun in the late afternoon, which is why so many of these calls describe a fault that appears at a specific hour and cannot be reproduced when a technician arrives at noon.',
        ],
      },
    ],

    faqs: [
      {
        q: 'Can I just disconnect the photo eye so my gate works?',
        a: 'No. That sensor is what stops several hundred pounds of gate closing on a vehicle, a pet or a child, and bypassing it is both dangerous and contrary to the safety standard gates are built to. If it is faulty, it is inexpensive to repair or replace, and we will not re-commission a gate without working entrapment protection.',
      },
      {
        q: 'The sensor light is on but the gate still will not close. What else could it be?',
        a: 'A lit indicator usually means the beam is made, so the fault is downstream: the cable between the sensor and the board, a terminal that has corroded, or the board input itself. On gate-mounted sensors the cable is the most likely of the three, because it flexes on every cycle.',
      },
      {
        q: 'My gate has no photo eyes at all. Do I have to add them?',
        a: 'We will not re-commission a powered gate without working entrapment protection, so in practice yes. Many older installations were fitted before current practice, and we still find sensors that were disconnected years ago because they nuisance-tripped. Fitting current sensors is a small part of the overall job and we will quote it before starting.',
      },
      {
        q: 'It only fails on foggy mornings. Is the sensor faulty?',
        a: 'Usually not — it is alignment with no margin. Condensation scatters a beam that is only just landing on the receiver, while a well-aligned beam has enough signal to tolerate it. Realignment, sometimes with a hood, normally fixes it permanently without a new part.',
      },
      {
        q: 'How often should photo eyes be cleaned?',
        a: 'Twice a year covers most properties, with an extra wipe after the spring pollen and after any storm that spatters the posts with mud. It is a two-minute job with a dry cloth and it prevents a large share of the "gate will not close" calls we get.',
      },
    ],

    relatedServices: ['automatic-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-wont-close', 'gate-reverses-when-closing', 'gate-loop-detector-not-working'],
    sources: [
      {
        label: 'UL 325 — external entrapment protection device requirements',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
      {
        label: 'LiftMaster photoelectric sensor installation and alignment instructions',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Which photo-eye models Shield stocks as standard replacements, so the page can name the upgrade path.',
      'Whether a twice-yearly sensor clean is part of any maintenance offering.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-loop-detector-not-working',
    label: 'Loop detector not working',
    searchedAs: ['Gate Loop Detector Not Working'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'A failed exit loop usually means vehicles cannot get out without a remote. On a commercial site that backs traffic onto the road, which makes it urgent rather than merely inconvenient.',

    title: 'Gate Loop Detector Not Working — Causes | DFW Repair',
    metaDescription:
      'Exit loop not opening the gate, or opening it constantly? How loops and detectors fail, what the LED means, and when a loop needs re-cutting, not tuning.',
    h1: 'Gate Loop Detector Faults',
    heroIntro:
      'A loop detector is a wire loop cut into your driveway and a small board that senses metal above it. When it misbehaves the cause is nearly always water, a cracked slab, or sensitivity that no longer matches the vehicles using it.',
    heroPoints: [
      'We test the loop’s inductance rather than swapping the detector and hoping',
      'Water in a splice gets found and sealed — the most common cause in this climate',
      'We will tell you honestly when a loop needs re-cutting instead of re-tuning',
    ],

    whatIsHappening: [
      {
        heading: 'How a loop actually senses a vehicle',
        body: [
          'A loop is several turns of wire laid in a saw-cut slot in the driveway and sealed over. The detector energises that loop and watches its inductance. A large mass of metal above it — a vehicle — changes the inductance, the detector notices the change, and it closes a contact that tells the gate to open or holds it open while the vehicle passes.',
          'That means a loop detects metal, not weight and not presence. A motorcycle, a bicycle or a person will often not trigger it at all, which is normal behaviour rather than a fault. It also means anything that changes the loop’s electrical characteristics — water, a break, a crack in the slab that stretches the wire — looks exactly like a vehicle.',
        ],
      },
      {
        heading: 'Two opposite symptoms, one family of causes',
        body: [
          'A loop fault shows up in one of two ways. Either the detector stops seeing vehicles, so the gate will not open for a car sitting right on top of the loop, or it sees a vehicle permanently, so the gate opens by itself or refuses to close.',
          'Both come from the same short list: water in the loop or its splice, a broken conductor, a cracked slab, or a detector whose sensitivity has drifted or was set for different traffic. Which symptom you get depends on whether the change pushed the inductance up or down, which is why a single wet splice can present either way.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Water in the loop splice or junction box',
        likelihood: 'most common',
        howToTell:
          'Symptoms track the weather — the detector misbehaves during and after rain and settles once things dry. The splice between the loop and its feeder is the usual entry point, and it is normally in a box near the post.',
        fix: 'Drying, re-making and properly sealing the splice. Inexpensive, and by far the most common resolution in this region.',
        ownerCanFix: false,
      },
      {
        cause: 'Sensitivity set too high or too low',
        likelihood: 'most common',
        howToTell:
          'Set too high and the detector triggers on traffic passing on the road or on a vehicle in the next lane. Set too low and it misses small cars while detecting trucks reliably. Both are common after a detector has been replaced without re-tuning.',
        fix: 'Re-tuning the detector to the loop and the traffic that actually uses it, then verifying with the smallest vehicle that needs to trigger it.',
        ownerCanFix: false,
      },
      {
        cause: 'Broken loop conductor',
        likelihood: 'common',
        howToTell:
          'The detector shows a fault or open-loop indication rather than simply not detecting. Frequently follows slab movement, heavy vehicle traffic over the cut, or resurfacing work.',
        fix: 'Re-cutting and re-laying the loop. A bigger job than a splice repair because it involves saw-cutting the driveway, and we will say plainly when it is the honest answer rather than another tune.',
        ownerCanFix: false,
      },
      {
        cause: 'Cracked slab stretching or shorting the loop',
        likelihood: 'common',
        howToTell:
          'Look for a crack crossing the visible loop cut. Slab movement over expansive clay is the usual cause, and the loop fails where the crack crosses it.',
        fix: 'Re-cutting the loop away from the crack where possible, and sealing the crack. If the slab is actively moving, that gets addressed first or the new loop follows the old one.',
        ownerCanFix: false,
      },
      {
        cause: 'Detector board failure, often after a surge',
        likelihood: 'less common',
        howToTell:
          'The loop tests healthy but the detector shows no life or a permanent fault. Common after nearby lightning, which this region delivers reliably.',
        fix: 'Detector replacement — a plug-in module on most installations, so a short visit.',
        ownerCanFix: false,
      },
      {
        cause: 'Vehicle simply does not contain enough metal over the loop',
        likelihood: 'less common',
        howToTell:
          'Consistent: one particular car never triggers it while everything else does, or motorcycles never do. Low-slung aluminium-bodied and some EV platforms present less detectable mass than the detector was tuned for.',
        fix: 'Re-tuning, or relocating or resizing the loop. Worth knowing this is a tuning question rather than a broken loop.',
        ownerCanFix: true,
      },
    ],

    checkFirst: [
      {
        step: 'Watch the detector’s LED with an empty driveway',
        body: 'Most detectors show detection state on an LED, and many show a distinct fault or open-loop pattern. Detection showing with nothing over the loop, or a fault pattern, tells you which of the two symptom families you have before anyone opens anything.',
      },
      {
        step: 'Test with a large vehicle and a small one',
        body: 'If a truck triggers it and a compact car does not, the loop is intact and the sensitivity is wrong. If nothing triggers it, the loop or the detector has failed. That is a genuinely useful split and it costs you two minutes.',
      },
      {
        step: 'Check whether it tracks the weather',
        body: 'Note whether the fault appears in the wet and clears when dry. Water in a splice is the most common cause in this climate and the weather correlation identifies it almost on its own.',
      },
      {
        step: 'Look at the driveway for cracks across the loop cut',
        body: 'The saw-cut loop is usually visible as a sealed rectangle in the slab. A crack crossing that line is a strong candidate for a broken conductor, and it tells us to quote a re-cut rather than a tune.',
      },
    ],

    doNot: [
      'Do not disconnect a faulty loop to stop nuisance openings. The exit loop is what lets vehicles out without a remote, and on a commercial site removing it can trap traffic.',
      'Do not turn detector sensitivity to maximum to catch a car that is not being seen — that is how gates start opening for traffic on the road.',
      'Do not resurface or seal a driveway over a loop without telling the contractor it is there.',
      'Do not assume a gate opening by itself is a loop fault without checking remotes first; both produce the same symptom.',
    ],

    outlook: {
      summary:
        'Most loop faults are repaired at the splice or the detector and cost little. The expensive outcome is a broken conductor in the slab, which needs the loop re-cut, and we would rather tell you that plainly than take payment for a third re-tune of a loop that is electrically broken.',
      usuallyRepair: [
        'Wet splices and junction boxes',
        'Detector sensitivity tuning',
        'Plug-in detector module replacement',
        'Loop feeder cable between the slab and the enclosure',
      ],
      sometimesReplace: [
        'A loop with a broken conductor, which needs re-cutting rather than repairing',
        'A loop crossed by an active slab crack, where relocating it is the only durable answer',
      ],
    },

    dfw: [
      {
        heading: 'Expansive clay is hard on buried loops',
        body: [
          'Driveways across much of Dallas–Fort Worth are laid over Blackland Prairie clay that swells and shrinks by season. Slabs crack along that movement, and a loop cut into a slab that is moving will eventually be stretched or severed where a crack crosses it. This is why loop failures here are disproportionately physical rather than electronic.',
          'The same seasonal swing drives water into the cut. A wet spring after a dry autumn opens and then floods the sealant line, and the splice is the first thing to suffer. Storm surges take out the detector modules themselves. Between the three, loops in this metroplex need checking more often than the equipment’s design life would suggest.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My car sits on the loop and the gate does not open. Is the loop broken?',
        a: 'Not necessarily. First check whether a larger vehicle triggers it. If a truck works and a small car does not, the loop is intact and the detector sensitivity needs re-tuning. If nothing triggers it, then the loop or the detector has genuinely failed and we can tell which by testing the loop.',
      },
      {
        q: 'Why does my gate open by itself after rain?',
        a: 'Water has almost certainly reached the loop or its splice. The detector senses a change in the loop and reads it as a vehicle, so it calls for open — sometimes repeatedly, for as long as things stay wet. Drying and resealing the splice is usually all it takes.',
      },
      {
        q: 'Do I need to cut up my driveway to fix this?',
        a: 'Usually not. Most loop faults are at the splice or in the detector, both of which are repaired without touching the slab. Cutting is only needed when the loop conductor itself is broken, and we will show you the test result that says so before recommending it.',
      },
      {
        q: 'My motorcycle never opens the gate. Is that a fault?',
        a: 'That is normal. A loop detects metal mass, and a motorcycle presents far less of it than a car. Sensitivity can sometimes be raised enough to catch one, but raising it too far causes the gate to open for traffic on the road, so on many sites the honest answer is to use a remote or keypad instead.',
      },
      {
        q: 'How long should a loop last?',
        a: 'A properly installed loop in stable ground lasts many years. In this region the limiting factor is usually the slab rather than the wire — once a driveway starts cracking over moving clay, the loop’s life is tied to the concrete’s. That is worth knowing before paying for a premium detector to sit on a failing loop.',
      },
    ],

    relatedServices: ['access-control-repair', 'commercial-gate-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-opens-by-itself', 'gate-wont-open', 'gate-not-working-after-storm'],
    sources: [
      {
        label: 'DoorKing vehicle loop detector installation and tuning manuals',
        url: 'https://www.doorking.com/gate-operators',
      },
      {
        label: 'EMX Industries inductive loop detector application notes',
        url: 'https://emxinc.com/product-category/vehicle-detection/',
      },
    ],
    toConfirm: [
      'Whether loop saw-cutting is performed in house or subcontracted, and the typical lead time.',
      'Whether Shield carries plug-in detector modules on the van for same-visit replacement.',
    ],
    indexable: true,
  },
]
