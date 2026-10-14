import type { SymptomPage } from './types'

/**
 * Power, battery, board and motor faults.
 *
 * The motor page and the power-outage page were added after the original
 * four. The motor page owns "the operator is getting power and the motor is
 * the thing misbehaving" (hum, click, spins without moving the gate); the
 * outage page owns "the power is back but the gate is not", which has a
 * different short list from a gate that has no power at all.
 *
 * The distinction these four pages have to hold is between "no power arriving"
 * (supply), "power arriving but not stored" (battery and charging), "power
 * arriving and stored but not acted on" (board), and "something specific
 * happened" (storm). Owners describe all four as "it has no power", so each
 * page opens by separating itself from the other three rather than assuming
 * the reader arrived at the right one.
 */
export const powerSymptoms: SymptomPage[] = [
  {
    slug: 'gate-opener-has-no-power',
    label: 'Gate opener has no power',
    searchedAs: ['Gate Opener Has No Power'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'Find the manual release first — it lets you move the gate by hand regardless of what is wrong electrically, and it turns a trapped vehicle into a solvable afternoon.',

    title: 'Gate Opener Has No Power — What to Check | DFW',
    metaDescription:
      'No lights, no response, no sound from your gate opener? Work through GFCI, breaker, transformer and battery in order before paying anyone to look at it.',
    h1: 'Gate Opener Has No Power',
    heroIntro:
      'A gate operator with no signs of life is usually not broken — it is disconnected from something. The order below is the order a technician uses, and the first two steps cost nothing and resolve a large share of these calls.',
    heroPoints: [
      'We check supply before we open anything, because most of these are upstream of the operator',
      'Transformers and boards are tested, not swapped on suspicion',
      'If it turns out to be a tripped GFCI, we would rather you found it than paid for a visit',
    ],

    whatIsHappening: [
      {
        heading: 'Power reaches a gate operator through more links than people expect',
        body: [
          'Between the breaker panel and the control board there is usually a breaker, a buried run to the gate, often a weatherproof GFCI outlet near the post, a transformer stepping the supply down to what the board uses, and the board’s own fuse. Any one of those breaking the chain produces the same symptom: nothing at all.',
          'This is why "no power" is a sequence rather than a diagnosis. Each link is testable, and they are cheapest to check in order from the panel outward. Starting at the board — the most expensive part — is how people end up replacing a working board because the GFCI twenty feet away had tripped.',
        ],
      },
      {
        heading: 'Surges and drained batteries also look like “no power”',
        body: [
          'A power cut does two things to a gate. The obvious one is that a mains-powered operator stops; the less obvious one is that the restoration surge, when the supply comes back, is hard on transformers and boards. A meaningful share of "dead after the outage" calls are actually "damaged by the surge when it came back".',
          'The second effect is memory. Some operators lose their learned travel limits after an interruption and will not run a full cycle until the travel is re-learned, which presents as a gate that has power and lights but will not move properly. And on battery-backed units, an extended outage drains a backup battery that was already near the end of its life — so the gate works through the outage and dies a day later.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Tripped GFCI outlet',
        likelihood: 'most common',
        howToTell:
          'Absolutely nothing from the operator — no LED, no beep, no click. The GFCI is often in a weatherproof box on the post or the nearest wall, sometimes in a garage, and it trips readily in storms and damp.',
        fix: 'Press reset. If it holds, you are done at no cost. If it trips again straight away, stop resetting it — something downstream is faulting to earth and needs tracing.',
        ownerCanFix: true,
      },
      {
        cause: 'Tripped breaker or a switched-off disconnect',
        likelihood: 'most common',
        howToTell:
          'Check the panel for a breaker that is off or sitting mid-position. On some installations there is also a local disconnect switch near the operator that can be switched off by a contractor and forgotten.',
        fix: 'Reset the breaker or restore the disconnect. As above, a breaker that trips immediately is reporting a real fault rather than being inconvenient.',
        ownerCanFix: true,
      },
      {
        cause: 'Flat or failed backup battery',
        likelihood: 'common',
        howToTell:
          'On battery-backed and solar operators. Classic pattern: it worked during the outage and died afterwards, or it has been getting slower for weeks and has now stopped. Many boards show a low-voltage LED or beep a pattern.',
        fix: 'Battery replacement sized for your actual cycle count. If it is a solar unit, the panel and its charge controller get checked at the same time.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed transformer',
        likelihood: 'common',
        howToTell:
          'Supply into the operator tests live but the board has nothing. Frequently follows a surge or a lightning event, which this region supplies every storm season.',
        fix: 'Transformer replacement. Worth asking about surge protection at the same time, because an unprotected board is often the next casualty.',
        ownerCanFix: false,
      },
      {
        cause: 'Blown board fuse',
        likelihood: 'common',
        howToTell:
          'Power confirmed to the board and still nothing. Most boards have a replaceable fuse, and it blows for a reason — usually a shorted accessory such as a damaged sensor cable or a rodent-chewed run.',
        fix: 'Replacing the fuse and, more importantly, finding what blew it. A fuse replaced without tracing the cause blows again within days.',
        ownerCanFix: false,
      },
      {
        cause: 'Damaged buried supply run',
        likelihood: 'less common',
        howToTell:
          'Common on acreage properties where the gate sits hundreds of feet from the meter. Landscaping work, fence posts, burrowing animals and simple age all break buried runs, and the symptom is total silence with a healthy panel.',
        fix: 'Locating and repairing the break, or re-running the cable. On very long runs this is where a solar conversion sometimes becomes the more sensible option, and we will say so if it is.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Find and reset the GFCI',
        body: 'Look for a weatherproof outlet box on the gate post, the nearest wall, or in the garage. Press reset firmly. This single step resolves a meaningful proportion of dead-gate calls and costs nothing.',
      },
      {
        step: 'Check the breaker panel',
        body: 'Look for a breaker that is off or sitting between positions. Switch it fully off and then on again rather than nudging it. Also check for a local disconnect switch near the operator itself.',
      },
      {
        step: 'Look for any sign of life at the board',
        body: 'Open the operator cover if it is safe and dry to do so, and look for an LED. A board with a lit LED has power and the fault is elsewhere; a completely dark board points upstream. Photograph anything flashing.',
      },
      {
        step: 'Locate the manual release',
        body: 'Regardless of the electrical cause, the manual release lets you move the gate by hand so you are not trapped. It is usually a key or lever on the operator housing. If you cannot find it, call us and we will talk you through it for your model.',
      },
    ],

    doNot: [
      'Do not repeatedly reset a breaker or GFCI that trips again immediately — it is detecting a genuine fault to earth.',
      'Do not open a control board enclosure in the rain or with wet hands.',
      'Do not bridge or bypass a blown fuse with foil or a higher-rated fuse. The fuse is protecting a board worth far more than it is.',
      'Do not dig for a buried cable run without knowing what else is in the trench.',
    ],

    outlook: {
      summary:
        'This is one of the cheapest faults to have and one of the most commonly over-repaired. The two leading causes cost nothing to fix, and the next three — battery, transformer, fuse — are small parts. Replacing an operator for "no power" should be a very rare outcome and is worth a second opinion.',
      usuallyRepair: [
        'GFCI and breaker resets',
        'Batteries and solar charge faults',
        'Transformers and board fuses',
        'Buried supply runs',
      ],
      sometimesReplace: [
        'A board damaged by a surge on a discontinued operator with no supported replacement',
        'A supply run so long and so degraded that a solar conversion is the better investment',
      ],
    },

    dfw: [
      {
        heading: 'Storm season is when this page gets busy',
        body: [
          'Dallas–Fort Worth gets a reliable run of severe storms each spring and autumn, and gate operators sit outdoors at the far end of a long buried run — close to ideal conditions for both surges and moisture-tripped GFCIs. The morning after a line of storms is consistently the busiest window for dead-gate calls in this market.',
          'The other local factor is distance. On the acreage properties north and west of the metroplex — Argyle, Lucas, Parker and the Ellis County side — the gate is often hundreds of feet from the meter, which means a long buried run to fail and a strong case for solar with a properly sized battery instead.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate has no power at all. Where do I start?',
        a: 'With the GFCI outlet feeding the operator, then the breaker. Between them they account for a large share of completely dead gates and they cost nothing to check. Only after those are ruled out is it worth looking at the transformer, the fuse or the board.',
      },
      {
        q: 'Is a dead gate after a power cut the same fault?',
        a: 'It overlaps, but it has its own short list — a release left disengaged, a battery drained during the outage, a fail-safe setting, or a restoration surge — so it has its own page. If the operator is completely dark and there was no outage, the order on this page is the right one.',
      },
      {
        q: 'I keep resetting the GFCI and it keeps tripping. What now?',
        a: 'Stop resetting it. A GFCI that trips immediately is detecting current leaking to earth, which usually means water has reached something or a cable has been damaged. It is doing its job, and repeatedly resetting it risks both the equipment and you.',
      },
      {
        q: 'Can I still open the gate while it has no power?',
        a: 'Yes. Every operator has a manual release that disconnects the motor so the gate can be pushed by hand. It is normally a key or lever on the operator housing. If you cannot find yours, call us — we will identify your model and talk you through it rather than leaving you trapped.',
      },
      {
        q: 'How do I know if it is the battery or the charger?',
        a: 'The pattern usually tells us. A battery at the end of its life fails gradually — fine in the afternoon, struggling at dawn — while a charging fault tends to produce a unit that never recovers after a cloudy day. On a solar installation we check both, because replacing a battery under a shaded panel only restarts the same clock.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'emergency-gate-repair'],
    relatedSymptoms: [
      'automatic-gate-not-working',
      'gate-not-working-after-power-outage',
      'gate-battery-keeps-dying',
      'gate-not-working-after-storm',
    ],
    sources: [
      {
        label: 'LiftMaster gate operator installation manuals — power, transformer and fuse specifications',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'NFPA 70 (National Electrical Code) — GFCI requirements for outdoor receptacles',
        url: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70',
      },
    ],
    toConfirm: [
      'Whether Shield carries common transformer ratings on the van, which decides whether this is genuinely a same-visit fix.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-not-working-after-storm',
    label: 'Gate not working after a storm',
    searchedAs: ['Gate Not Working After Storm'],
    applies: 'both',
    urgency: 'safety',
    urgencyNote:
      'Storm-damaged gates can have intact-looking operators and damaged safety devices, which is the dangerous combination. Do not cycle it repeatedly to see if it recovers.',

    title: 'Gate Not Working After a Storm — What to Do | DFW',
    metaDescription:
      'Storms take out gates three ways: surge damage, water ingress and physical impact. Here is what to check, what not to touch, and why it is a safety issue.',
    h1: 'Gate Not Working After a Storm',
    heroIntro:
      'Storms damage gates in three distinct ways, and they need different responses. The one that matters most is the least visible: a gate that still moves but has lost its safety devices is more dangerous than one that has stopped.',
    heroPoints: [
      'Safety devices are verified before we hand a storm-damaged gate back',
      'Surge damage is traced through transformer, board and detector rather than guessed at',
      'We document damage properly if you are making an insurance claim',
    ],

    whatIsHappening: [
      {
        heading: 'Three mechanisms, three different repairs',
        body: [
          'The first is electrical surge. Lightning does not need to strike the gate — a strike on the network induces a spike that travels the supply, and the transformer, control board and loop detector are the usual casualties. This can leave a gate completely dead or working with one function missing.',
          'The second is water. Driven rain finds its way into enclosures whose seals have aged, into photo-eye housings, and into loop splices in the driveway. These faults often appear a day or two later rather than immediately, and they may come and go as things dry.',
          'The third is physical. Wind moves gate leaves hard against their stops, debris hits them, and a large leaf acts as a sail. That bends track, knocks photo-eyes out of alignment, strains hinges and occasionally shifts a post. Physical damage is the one that most often leaves a gate that still runs but is no longer safe.',
        ],
      },
      {
        heading: 'Why a gate that still works may be the more dangerous outcome',
        body: [
          'A dead gate announces itself. A storm-damaged gate that still opens and closes may have a photo-eye knocked out of alignment, an edge sensor with a severed cable, or a loop detector reading permanently — and those faults remove the protection that stops the gate closing on a vehicle or a person without preventing it from closing.',
          'That is why the checks on this page are about the safety devices rather than about getting the gate moving again. A gate that has been through a storm should have its entrapment protection verified before it goes back into normal service, and that is not something that can be confirmed by watching it complete one cycle.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Surge damage to the transformer or control board',
        likelihood: 'most common',
        howToTell:
          'The gate is completely dead, or one function has vanished while others work. Supply to the operator tests live. There may be a burnt smell or visible scorching on the board.',
        fix: 'Transformer or board replacement, and fitting surge protection if none exists. Without protection, the replacement board is exposed to the next storm exactly as the first one was.',
        ownerCanFix: false,
      },
      {
        cause: 'Tripped GFCI from moisture',
        likelihood: 'most common',
        howToTell:
          'Total silence from the operator, and the GFCI near the post has tripped. This is the single most common reason a gate is dead the morning after a storm, and it is free to fix.',
        fix: 'Reset it. If it holds, nothing further is needed. If it trips again, water has reached something and that needs tracing rather than resetting.',
        ownerCanFix: true,
      },
      {
        cause: 'Photo-eyes knocked out of alignment by wind or debris',
        likelihood: 'common',
        howToTell:
          'The gate will not close, or closes and reverses. Look at the sensor housings — a knock of a few degrees is enough and is often not visually obvious. Check the indicator LEDs.',
        fix: 'Realignment, or replacement where the housing or cable is damaged. This is also the check most often skipped after a storm, which is why it is on this page twice.',
        ownerCanFix: true,
      },
      {
        cause: 'Water in the loop splice or detector',
        likelihood: 'common',
        howToTell:
          'The gate opens by itself, or will not close, starting during or shortly after heavy rain. The loop detector LED shows detection with an empty driveway.',
        fix: 'Drying and resealing the splice, or replacing a detector module damaged by surge.',
        ownerCanFix: false,
      },
      {
        cause: 'Physical damage — bent track, strained hinge, moved post',
        likelihood: 'common',
        howToTell:
          'Release the operator and move the gate by hand. Binding, scraping or a changed gap at the hinge side means the gate itself took the damage. Look for debris strike marks and for a leaf that no longer sits square in its opening.',
        fix: 'Mechanical repair — straightening or replacing track, resetting hinges, re-squaring the leaf, addressing the post. The operator should not be re-commissioned until the gate is square again.',
        ownerCanFix: false,
      },
      {
        cause: 'Lost travel limits after the power interruption',
        likelihood: 'less common',
        howToTell:
          'Lights and response are normal but the gate will not complete a cycle, or moves a short distance and stops. Some operators discard learned positions after an interruption.',
        fix: 'Re-learning the travel. A short visit and no parts, provided the gate itself is undamaged.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Check the GFCI and breaker first',
        body: 'The most common post-storm fault is also the cheapest. Reset the GFCI near the operator and check the panel. A large share of gates are working again at this point.',
      },
      {
        step: 'Inspect the safety sensors before doing anything else',
        body: 'Look at both photo-eye housings for knocks, water inside the lens, or damaged cabling, and check their indicator LEDs. If a sensor is damaged, do not return the gate to normal operation until it is repaired — that is the protection that stops it closing on something.',
      },
      {
        step: 'Walk the gate by hand',
        body: 'With the operator released, move the gate through its full travel. Binding, scraping or new noise means physical damage. Look for debris in the track and for a leaf that no longer sits square.',
      },
      {
        step: 'Photograph everything before it is touched',
        body: 'If you may claim on insurance, photograph the damage, the debris and the position of the gate before anything is moved or repaired. It is much harder to evidence afterwards, and it costs a minute now.',
      },
    ],

    doNot: [
      'Do not repeatedly cycle a storm-damaged gate to see whether it recovers. If a safety device is damaged, each cycle is a gate closing without protection.',
      'Do not reset a GFCI more than once if it keeps tripping — water has reached something.',
      'Do not touch a gate that is near a downed power line or a damaged supply. Call the utility first.',
      'Do not straighten bent track or lever a moved post by hand; both are structural and both get worse when improvised.',
    ],

    outlook: {
      summary:
        'Most storm damage is repairable and a good deal of it is inexpensive — a reset, a realignment, a dried splice. Surge damage to boards is the costly end, and it is the one worth preventing: if a storm has taken a board out once, surge protection is cheaper than the next board.',
      usuallyRepair: [
        'GFCI and breaker resets',
        'Photo-eye realignment and replacement',
        'Loop splices and detector modules',
        'Transformers, fuses and boards where still supported',
        'Track, hinge and alignment damage',
      ],
      sometimesReplace: [
        'A board on a discontinued operator with no supported replacement',
        'An operator that took a direct strike, where multiple subsystems are damaged at once',
      ],
    },

    dfw: [
      {
        heading: 'This metroplex earns its storm reputation',
        body: [
          'North Texas sits in one of the most active severe-weather corridors in the country, with a spring and an autumn season of straight-line winds, large hail and heavy lightning. Gate equipment is outdoors, tall, metallic and at the end of a long buried run, which is close to the worst combination available.',
          'The wind is the underrated part. A solid gate leaf is a sail, and the straight-line winds that come off these storm lines routinely exceed what a gate’s stops and hinges were designed to absorb. Hail damages photo-eye lenses and enclosure seals. A gate that survived the storm intact still deserves a look at its sensors, because the damage that matters most is the kind that leaves it working.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate died the night of a storm. Is it the lightning?',
        a: 'Sometimes, but check the GFCI first — moisture tripping the outlet near the post is the most common post-storm cause and it is free to fix. If the GFCI is fine and the supply is live but the operator is dead, then surge damage to the transformer or board becomes the likely answer.',
      },
      {
        q: 'The gate still works after the storm. Do I need it checked?',
        a: 'Yes, and specifically the safety devices. Wind and debris knock photo-eyes out of alignment and damage sensor cables without stopping the gate, which leaves a gate that closes normally but no longer detects an obstruction. That is the one storm outcome that is genuinely dangerous.',
      },
      {
        q: 'Will my insurance cover storm damage to a gate?',
        a: 'That is between you and your insurer, but photograph everything before anything is moved or repaired — the damage, the debris, and the gate’s position. We can provide a written description of the fault and the repair for a claim. Evidence is much harder to produce after the repair.',
      },
      {
        q: 'How do I stop this happening again?',
        a: 'Surge protection is the single most effective step if a board or transformer has been lost, and it costs a fraction of the part it protects. Beyond that, keeping enclosure seals in good condition and having sensor cabling properly strain-relieved deals with the water and flex damage that follow storms.',
      },
      {
        q: 'It worked for a day after the storm and then failed. Why the delay?',
        a: 'Water. Moisture that got into an enclosure, a photo-eye housing or a loop splice during the storm takes time to reach a terminal and start causing trouble, and the fault may come and go as things dry out. Delayed failures after rain are one of the more reliable signatures we see.',
      },
    ],

    relatedServices: ['emergency-gate-repair', 'automatic-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-opener-has-no-power', 'gate-circuit-board-not-working', 'gate-photo-eye-not-working'],
    sources: [
      {
        label: 'NOAA Storm Prediction Center — severe weather climatology for North Texas',
        url: 'https://www.spc.noaa.gov/climo/',
      },
      {
        label: 'UL 325 — entrapment protection device requirements',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
    ],
    toConfirm: [
      'Whether Shield provides written damage documentation for insurance claims, which this page offers.',
      'Which surge protection device is fitted as standard after a storm-related board failure, and its cost.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-battery-keeps-dying',
    label: 'Gate battery keeps dying',
    searchedAs: ['Gate Battery Keeps Dying'],
    applies: 'both',
    urgency: 'inconvenience',
    urgencyNote:
      'Rarely an emergency, but it is a fault that gets worse predictably — a battery on its way out will eventually leave the gate dead at the least convenient moment.',

    title: 'Gate Battery Keeps Dying — Why, and the Fix | DFW',
    metaDescription:
      'A gate battery that keeps dying is usually undersized, overheated, or charging through a shaded panel. How to tell which, and how long a battery should last.',
    h1: 'Gate Battery Keeps Dying',
    heroIntro:
      'Batteries do not usually fail at random. A gate battery that keeps dying is normally being asked for more cycles than it was sized for, charged by something that is no longer charging properly, or cooked by a Texas summer.',
    heroPoints: [
      'Replacement batteries are sized to your actual cycle count, not to the box',
      'We check the panel and charge controller before fitting a new battery under them',
      'Honest about expected life in this climate rather than quoting the datasheet',
    ],

    whatIsHappening: [
      {
        heading: 'What the battery is actually doing on your gate',
        body: [
          'On a mains-powered operator the battery is backup: it sits charged and does nothing until the power fails. On a solar operator it is the entire power supply, charged during the day and drawn down by every cycle. Those are very different duty cycles and they fail in different ways, so the first question is always which you have.',
          'A backup battery that dies has usually been sitting at partial charge for years, or has been cycled deeply during outages it was not sized for. A solar battery that dies is usually being asked for more cycles per day than the panel can replace, and the gap shows up first as a gate that works in the afternoon and struggles at dawn.',
        ],
      },
      {
        heading: 'Heat is the variable people underestimate',
        body: [
          'Sealed lead-acid batteries — the type on most gate operators — lose life roughly in proportion to how hot they run. Manufacturers quote life at around 25°C. A battery in a sealed enclosure in full Texas sun spends much of the summer far above that, and the practical result is that a battery rated for five years in a temperate climate may manage two or three here.',
          'This is worth knowing before concluding something is faulty. A battery replaced eighteen months ago that has just died is disappointing but not necessarily evidence of a defect, particularly if the enclosure faces west. Where it does point at a fault is when the interval keeps shortening, which usually means the charging side rather than the battery.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Battery undersized for the number of cycles actually used',
        likelihood: 'most common',
        howToTell:
          'The gate worked fine for years and started struggling after the household changed — a second car, a work-from-home pattern, a short-term rental, a new business on a commercial site. The load went up and the battery did not.',
        fix: 'A correctly sized battery, chosen from the real daily cycle count rather than an assumed one. On solar systems the panel may need sizing up alongside it.',
        ownerCanFix: false,
      },
      {
        cause: 'Solar panel shaded, dirty or aimed wrong',
        likelihood: 'most common',
        howToTell:
          'Performance has degraded over years rather than suddenly, and is worse in winter when the sun is low. Look at the panel in the middle of the day — a tree that has grown since installation is the classic cause, as is a layer of dust and pollen nobody has ever cleaned off.',
        fix: 'Clearing the shading, cleaning the panel, or relocating it. A new battery under a shaded panel will follow the old one.',
        ownerCanFix: true,
      },
      {
        cause: 'Heat degradation in an enclosure in full sun',
        likelihood: 'common',
        howToTell:
          'Batteries dying every two to three years, with failures concentrated at the end of summer. West and south-facing enclosures suffer most.',
        fix: 'Shading or ventilating the enclosure, relocating the battery where possible, and choosing a battery type more tolerant of heat. Expectations get set honestly rather than promising temperate-climate life.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed charge controller or charging circuit',
        likelihood: 'common',
        howToTell:
          'The interval between replacements keeps shortening, or a brand-new battery fails within months. Measured charge voltage that never reaches the correct level is the confirmation.',
        fix: 'Charge controller or charging circuit repair. This is the fault most often missed, because the battery is the visible part and gets replaced repeatedly instead.',
        ownerCanFix: false,
      },
      {
        cause: 'Parasitic drain from an accessory',
        likelihood: 'less common',
        howToTell:
          'The battery goes flat even when the gate is barely used. An always-on accessory — a camera, an intercom, a keypad backlight, a loop detector — can quietly exceed what the panel replaces.',
        fix: 'Measuring the standing draw and either powering the accessory separately or sizing the system for it. Adding accessories to a solar gate without revisiting the power budget is a common cause.',
        ownerCanFix: false,
      },
      {
        cause: 'Wrong battery type or mismatched pair',
        likelihood: 'less common',
        howToTell:
          'Often follows a well-meaning DIY replacement. Two batteries of different age or capacity in series will drag each other down, and a starting battery fitted where a deep-cycle type is needed fails quickly.',
        fix: 'Fitting the correct type, and replacing both batteries together where a pair is used.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Look at the panel in the middle of the day',
        body: 'On a solar gate, stand at the panel at midday and look for shade falling across any part of it. Partial shading disproportionately reduces output. Also check for a layer of dust or pollen, which is easily cleaned and easily overlooked.',
      },
      {
        step: 'Note the pattern across the day',
        body: 'If the gate is strong in the afternoon and weak at dawn, the battery is running down overnight and not being fully replaced — a sizing or charging issue. If it is weak all day, the battery is at the end of its life.',
      },
      {
        step: 'Count what has been added since installation',
        body: 'Cameras, intercoms, keypads and detectors all draw continuously. If any have been added since the system was specified, the power budget has changed and nobody recalculated it.',
      },
      {
        step: 'Check the date on the battery',
        body: 'Most have a manufacture date stamped or stickered on them. In this climate two to three years of service is normal rather than premature, and knowing the real age prevents chasing a fault that is simply age.',
      },
    ],

    doNot: [
      'Do not fit a car starting battery in place of a deep-cycle type. They are built for a different job and fail quickly in this one.',
      'Do not replace one battery of a pair. The old one will pull the new one down and you will buy both anyway.',
      'Do not charge a sealed lead-acid battery with an unregulated charger — overcharging shortens life dramatically and can vent gas.',
      'Do not keep replacing batteries without testing the charging side. Three batteries in two years is a charger fault, not bad luck.',
    ],

    outlook: {
      summary:
        'Almost always repairable and usually inexpensive, but worth diagnosing properly rather than treating as a consumable. Repeated battery replacement is the most common avoidable expense on solar gates in this region, and the cause is usually a shaded panel or a failed charge controller that costs less to fix than two batteries.',
      usuallyRepair: [
        'Battery replacement, correctly sized',
        'Panel cleaning, re-aiming or relocation',
        'Charge controller repair or replacement',
        'Power budget re-calculation after accessories are added',
      ],
      sometimesReplace: [
        'A solar system genuinely too small for the traffic it now carries, where a larger panel and battery are the honest answer',
        'An operator whose internal charging circuit has failed and is no longer supported as a part',
      ],
    },

    dfw: [
      {
        heading: 'Why gate batteries have short lives in this metroplex',
        body: [
          'Dallas–Fort Worth delivers long runs of triple-digit days, and a sealed battery in a metal enclosure in direct sun runs far above the temperature its rated life assumes. The practical consequence is that a battery advertised for five years frequently gives two or three here, and failures cluster at the end of summer rather than being spread across the year.',
          'The second factor is where solar gates are concentrated. The acreage properties north and west — Argyle, Lucas, Parker and the Ellis County side — have entrances hundreds of feet from the meter, which is exactly where solar makes sense and also where a shaded panel goes unnoticed because nobody walks past it. Between the heat and the trees, this is one of the most common recurring faults in the region.',
        ],
      },
    ],

    faqs: [
      {
        q: 'How long should a gate battery last?',
        a: 'In this climate, two to three years is normal for a sealed lead-acid battery in an enclosure that gets sun — less than the five often quoted, because rated life assumes around 25°C and a Texas enclosure runs far hotter. If yours are lasting less than about eighteen months, something beyond age is going on.',
      },
      {
        q: 'I have replaced the battery twice and it keeps dying. What am I missing?',
        a: 'Almost certainly the charging side. A shaded or dirty solar panel, or a failed charge controller, will kill a succession of perfectly good batteries. The interval shortening each time is the tell. Fixing the charging is usually cheaper than the two batteries you have already bought.',
      },
      {
        q: 'The gate works in the afternoon but is weak in the morning. Why?',
        a: 'The battery is running down overnight and the panel is not fully replacing it during the day. That is either a sizing problem — more cycles than the system was designed for — or a charging problem. Either way it is diagnosable, and it is the clearest early warning you get before the gate stops entirely.',
      },
      {
        q: 'Can I add a camera or intercom to my solar gate?',
        a: 'Often yes, but the power budget has to be recalculated. Accessories draw continuously, and adding one to a solar system that was sized without it is a frequent cause of batteries that suddenly stop lasting. We would rather size the panel and battery for what you want than fit it and let the battery absorb the difference.',
      },
      {
        q: 'Would mains power be better than solar?',
        a: 'It depends on the distance. On a short run, mains is simpler and removes the battery question almost entirely. On a gate several hundred feet from the meter, the cost of trenching a supply usually exceeds a properly sized solar system, and solar keeps working during the outages this region gets every storm season.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-opener-has-no-power', 'automatic-gate-not-working', 'gate-stops-halfway'],
    sources: [
      {
        label: 'US Automatic solar gate operator installation manuals — battery and panel sizing',
        url: 'https://www.usautomatic.com/support/',
      },
      {
        label: 'Battery Council International — sealed lead-acid temperature and service life guidance',
        url: 'https://batterycouncil.org/',
      },
    ],
    toConfirm: [
      'Which battery types and capacities Shield fits as standard, so the sizing advice here can name them.',
      'Whether Shield offers a power-budget calculation when accessories are added to a solar gate.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-circuit-board-not-working',
    label: 'Gate circuit board not working',
    searchedAs: ['Gate Circuit Board Not Working'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'A failed board usually means no function at all. Before assuming the worst, confirm power is actually reaching it — a dark board is more often unpowered than dead.',

    title: 'Gate Circuit Board Not Working — Repair or Replace',
    metaDescription:
      'Gate control board dead, showing a fault code, or partly working? How to tell a failed board from a power problem, and when an obsolete board ends it.',
    h1: 'Gate Circuit Board Faults',
    heroIntro:
      'The control board is the most expensive part people diagnose first and should diagnose last. A board that appears dead is very often a board that is not being powered, and telling those apart is the whole of this page.',
    heroPoints: [
      'We confirm supply and transformer output before condemning a board',
      'Fault codes get read and interpreted, not cleared and hoped away',
      'Straight answer on whether your board is still made — before you spend anything',
    ],

    whatIsHappening: [
      {
        heading: 'What the board does, and what it cannot do alone',
        body: [
          'The control board takes commands in — from remotes, keypads, loops, intercoms and wall buttons — checks its safety inputs, and drives the motor in the right direction for the right distance. It also stores the learned travel limits and the force settings, and on most modern units it reports faults through LEDs or a display.',
          'What that means practically is that a board failure can look like almost anything: a dead gate, a gate that ignores one input, a gate that runs the wrong distance, or a gate that opens by itself. This is precisely why it should be diagnosed after the simpler causes rather than before them — the symptom alone does not identify it.',
        ],
      },
      {
        heading: 'Dark board, dead board, and faulted board are three states',
        body: [
          'A dark board — no LEDs at all — usually means no power is arriving. That points at the GFCI, the breaker, the transformer, or the board’s own fuse, and in most cases the board itself is fine and inexpensive to prove so.',
          'A board with power indication but no response has genuinely failed, or has a failed output stage or relay. A board showing a fault code is the most useful state of all: it is telling you what it thinks is wrong, and most manufacturers publish the codes. Photographing the LED pattern before calling frequently shortens the visit, and occasionally resolves it over the phone.',
        ],
      },
    ],

    causes: [
      {
        cause: 'The board is not actually faulty — no power is reaching it',
        likelihood: 'most common',
        howToTell:
          'No LEDs at all. Check the GFCI, the breaker, the transformer output and the board fuse before anything else. A large share of "dead board" calls end here.',
        fix: 'Whichever upstream link has broken — usually a reset, a fuse or a transformer. Far cheaper than a board.',
        ownerCanFix: true,
      },
      {
        cause: 'Surge or lightning damage',
        likelihood: 'most common',
        howToTell:
          'Failure coincides with a storm. There may be visible scorching, a burnt smell, or a board that powers up but has lost one specific function — a dead radio input with everything else working is a classic surge signature.',
        fix: 'Board replacement, with surge protection fitted at the same time. Replacing an unprotected board leaves it exposed to exactly what killed the last one.',
        ownerCanFix: false,
      },
      {
        cause: 'Water ingress and terminal corrosion',
        likelihood: 'common',
        howToTell:
          'Green or white deposits on terminals, condensation inside the enclosure, or intermittent faults that track the weather. Very common where the enclosure gasket has perished.',
        fix: 'Cleaning and re-terminating where the damage is limited, board replacement where it is not — and replacing the enclosure seal, without which the new board starts the same clock.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed relay or output stage',
        likelihood: 'common',
        howToTell:
          'The board is alive and accepts commands but the motor does not run, or runs in one direction only. Sometimes audible as a click with no motor response.',
        fix: 'On some boards a relay is replaceable; on most, the board is. Worth asking, because it can be the difference between a small part and a large one.',
        ownerCanFix: false,
      },
      {
        cause: 'Blown board fuse from a shorted accessory',
        likelihood: 'common',
        howToTell:
          'Board dead, supply healthy, and the fuse is open. The cause is usually downstream — a chafed photo-eye cable, a rodent-damaged run, or a waterlogged keypad.',
        fix: 'Replacing the fuse and finding what blew it. A fuse replaced without tracing the short blows again immediately, which is the usual reason this fault repeats.',
        ownerCanFix: false,
      },
      {
        cause: 'Board obsolete and no longer manufactured',
        likelihood: 'less common',
        howToTell:
          'Not a failure mode so much as a constraint. Operators from the 1990s and earlier frequently have no supported board available, whatever their mechanical condition.',
        fix: 'An honest conversation. The mechanical installation — posts, hinges, track — usually outlasts the electronics by decades, so fitting a current operator to the existing gate is generally far cheaper than a full replacement.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Confirm power is reaching the board',
        body: 'Check the GFCI, the breaker and, if you can do so safely and dry, look for any LED on the board. A completely dark board is far more often unpowered than failed, and this check prevents the most expensive misdiagnosis on the page.',
      },
      {
        step: 'Photograph any fault code or LED pattern',
        body: 'Most boards flash a pattern that maps to a published fault. A clear photograph of the board and its LEDs, including the label with the model number, often identifies the fault before anyone arrives.',
      },
      {
        step: 'Find the model and serial label',
        body: 'It is usually inside the operator housing. This is what determines whether a replacement board still exists, and it is the first thing we will ask for — knowing it means we can tell you your options before quoting.',
      },
      {
        step: 'Look for water and corrosion',
        body: 'Condensation on the inside of the cover, green deposits on terminals, or a perished door seal all point at water. It changes the repair, because sealing the enclosure has to be part of it.',
      },
    ],

    doNot: [
      'Do not fit a higher-rated fuse to stop one blowing. The fuse is protecting a board worth many times its value.',
      'Do not work inside a board enclosure with the supply live or in the rain.',
      'Do not buy a replacement board online before confirming the exact model and revision — gate boards vary between revisions of the same operator.',
      'Do not let anyone replace a board without checking the transformer and supply first; a board that failed because of a supply fault will fail again.',
    ],

    outlook: {
      summary:
        'The honest position is that a genuine board failure is one of the more expensive gate repairs, and also one of the most over-diagnosed. Prove the supply first. When a board has genuinely failed and is still manufactured, replacement is straightforward; when it is obsolete, the right comparison is a current operator on your existing gate rather than a whole new installation.',
      usuallyRepair: [
        'Supply, transformer and fuse faults that present as a dead board',
        'Terminal corrosion and enclosure sealing',
        'Board replacement on current and supported operators',
        'Surge protection fitted alongside a replacement',
      ],
      sometimesReplace: [
        'An operator whose board is discontinued with no supported equivalent',
        'A board that has failed twice on an unprotected supply, where protection is the actual fix',
      ],
    },

    dfw: [
      {
        heading: 'Storm surges and enclosure seals',
        body: [
          'The dominant cause of board failure in this region is electrical surge from the storm seasons, and it does not require a direct strike — a hit on the network induces a spike that arrives down the supply. Gates sit at the end of long outdoor runs, which makes them a favourable path. Fitting surge protection after the first failure is the single most cost-effective thing an owner can do.',
          'The second is heat and humidity working on enclosure seals. Gaskets perish faster through fifteen Texas summers than through the same number of milder ones, and once the seal goes, condensation and driven rain reach the terminals. A board replaced without renewing that seal is a board on a timer.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate board has no lights. Does it need replacing?',
        a: 'Probably not yet. A completely dark board is more often unpowered than dead — check the GFCI, the breaker, the transformer and the board fuse first. That sequence resolves a large share of suspected board failures at a fraction of the cost.',
      },
      {
        q: 'How much is a new control board?',
        a: 'It varies widely by manufacturer and model, so we quote it against your actual board rather than a range that could mislead you. What we can say is that it is worth confirming the board has genuinely failed first, because the upstream causes that mimic a dead board are much cheaper.',
      },
      {
        q: 'My operator is from the 1990s. Can I still get a board?',
        a: 'Sometimes, and sometimes not — and we will tell you which before you spend anything. When no board is available, the good news is usually that the mechanical installation is fine. Fitting a current operator to your existing gate and posts is normally far cheaper than replacing the whole installation.',
      },
      {
        q: 'The board keeps blowing its fuse. Why?',
        a: 'Something downstream is shorting — most often a photo-eye cable that has chafed through at its flex point, a rodent-damaged run, or a keypad that has taken water. Replacing the fuse without finding the short just repeats the process. Tracing it is a short job and it is the actual repair.',
      },
      {
        q: 'Can a board be repaired rather than replaced?',
        a: 'Occasionally. Some boards have replaceable relays or fuses that account for the fault, and where that is the case it is a much smaller job. Component-level repair of a failed board is rarely economic, but it is always worth asking rather than assuming.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-opener-has-no-power', 'gate-not-working-after-storm', 'automatic-gate-not-working'],
    sources: [
      {
        label: 'LiftMaster gate operator manuals — control board diagnostics and fault codes',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'DoorKing gate operator owner’s manuals — circuit board troubleshooting',
        url: 'https://www.doorking.com/gate-operators',
      },
    ],
    toConfirm: [
      'Whether Shield offers a diagnostic-only visit that confirms board failure before committing to the part.',
      'Which surge protection device is fitted alongside a replacement board, and its cost.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-motor-not-working',
    label: 'Gate motor not working',
    searchedAs: ['Gate Motor Not Working'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'A gate whose motor will not drive it is stuck wherever it stopped. The manual release still works whatever the motor is doing, so find it before anything else — and keep clear of the gate while anyone is testing it.',

    title: 'Gate Motor Not Working? Hum, Click or Silence | DFW',
    metaDescription:
      'Gate motor hums, clicks, spins without moving the gate, or cuts out when hot? What each sign points to — capacitor, gearbox, brushes — and what to check.',
    h1: 'Gate Motor Not Working — Reading What It Does',
    heroIntro:
      'When people say the gate motor is not working, they usually mean one of four different things: it hums, it clicks, it runs without moving the gate, or it does nothing at all. Each of those points somewhere different, and only one of them is usually the motor itself.',
    heroPoints: [
      'We confirm voltage at the motor terminals under load before condemning a motor',
      'A motor that spins without moving the gate gets its drive train inspected, not replaced',
      'Heat cut-outs are traced back to the load that caused them, so the new motor is not cooked too',
    ],

    whatIsHappening: [
      {
        heading: 'Two kinds of gate motor, and they fail in different ways',
        body: [
          'Most operators in Dallas–Fort Worth use one of two motor types. Heavier commercial units and many older residential operators — a lot of DoorKing, Elite and older LiftMaster equipment — run a mains-voltage AC motor that needs a start capacitor to get turning. Battery-backed and solar operators, including most current US Automatic, Viking, Mighty Mule and LiftMaster residential units, run a low-voltage DC motor fed from a battery that the mains or a panel keeps charged.',
          'An AC motor that cannot start usually hums: it is energised but has no starting kick, which is the capacitor’s job. A DC motor has no capacitor; when it struggles it tends to click, stutter or run slowly, and the cause is more often supply voltage, worn brushes, or the encoder that tells the board how far the motor has turned. Knowing which kind you have halves the list before anyone opens the housing — the label on the operator or the manual will say.',
        ],
      },
      {
        heading: 'Motor running and gate not moving is a drive-train question',
        body: [
          'Between the motor and the gate sits a gearbox and a coupling: a chain and sprocket, a gear rack and pinion, or a swing arm on an output shaft. If you can hear the motor spinning freely and the gate stays put, the motor is doing its job and something between it and the gate has let go. That might be as simple as a manual release left part-way engaged, or as serious as stripped gear teeth inside the gearbox.',
          'This distinction matters for cost. A motor replacement on a discontinued operator can lead straight to a conversation about a new unit, while a sheared drive pin, a slipping clutch or a loose sprocket set screw is a short repair. Listening carefully at the housing while someone presses the remote is worth doing before anyone quotes for a motor.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Manual release left disengaged or only partly re-engaged',
        likelihood: 'most common',
        howToTell:
          'The motor runs with a free, high-pitched whirr and the gate does not move, or moves a little and slips. Common straight after anyone has opened the gate by hand — during an outage, for a delivery, or after a service visit.',
        fix: 'Re-engage the release fully, following the procedure for your model, and cycle the gate once while standing clear. If the release will not lock back in, the mechanism itself is worn and needs a technician.',
        ownerCanFix: true,
      },
      {
        cause: 'Failed start or run capacitor (AC motors)',
        likelihood: 'most common',
        howToTell:
          'A steady hum with no rotation, often with the board timing out after a few seconds. A nudge to the gate sometimes gets it going. The capacitor may be bulged on top or weeping oil, though a dead one can look perfectly normal.',
        fix: 'Replacing the capacitor with one of the correct microfarad and voltage rating. It is a small part, but it holds a charge after power is off and should be handled by someone who knows how to discharge it safely.',
        ownerCanFix: false,
      },
      {
        cause: 'Low supply voltage to a DC motor',
        likelihood: 'common',
        howToTell:
          'The motor clicks, stutters, starts and stops, or runs noticeably slower than it used to. Worse in the early morning and after cloudy days on solar units. The battery may read healthy at rest and collapse the moment the motor draws current.',
        fix: 'Load-testing and usually replacing the battery, then checking why it ran down — a failing charger, a shaded panel, or a long low-voltage run with undersized cable.',
        ownerCanFix: false,
      },
      {
        cause: 'Thermal overload cutting the motor out',
        likelihood: 'common',
        howToTell:
          'The motor runs normally for the first few cycles of the day, then stops mid-travel and refuses to restart until it has cooled for twenty minutes to an hour. The housing is hot to the touch. Most frequent on busy gates in July and August.',
        fix: 'The cut-out is protecting the windings, so the repair is whatever made the motor work too hard: a stiff gate, a tight chain, a cycle count above the operator’s duty rating, or a housing baking in direct sun with blocked vents.',
        ownerCanFix: false,
      },
      {
        cause: 'Stripped gears, sheared pin or slipping clutch in the drive train',
        likelihood: 'common',
        howToTell:
          'The motor runs at normal speed, the release is engaged, and the gate does not move or moves in jerks. You may hear grinding or a rhythmic clack from the gearbox. On operators with an adjustable friction clutch, a clutch set too light or worn slips under load.',
        fix: 'Opening the gearbox and replacing the damaged gear, pin, key or coupling. Worth asking why it failed, because a gearbox that stripped against a binding gate will strip again.',
        ownerCanFix: false,
      },
      {
        cause: 'Worn motor brushes or a failed encoder (DC motors)',
        likelihood: 'less common',
        howToTell:
          'A DC motor that runs, stops dead at a random point, and restarts if the gate is moved slightly — a dead spot on worn brushes. An encoder fault usually shows as the motor running briefly and the board stopping it with a travel or position error.',
        fix: 'Brush replacement where the motor design allows it, or a motor and encoder assembly where it does not. On many current operators the encoder is built into the motor and they are replaced together.',
        ownerCanFix: false,
      },
      {
        cause: 'Burnt windings',
        likelihood: 'rare',
        howToTell:
          'Usually after a long period of overheating or a gate that was dragged for months. There may be a sharp burnt-varnish smell at the housing, and the motor does nothing even with correct voltage measured at its terminals.',
        fix: 'Motor replacement. On an operator that is still in production this is a contained repair; on a discontinued one it is the moment to compare the cost against a new operator honestly.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Stand clear and listen at the operator',
        body: 'Have someone press the remote while you stand beside — not in front of — the operator. A hum, a click, a free whirr with no movement, and silence each point to a different part of the system. Note which you hear and for how long.',
      },
      {
        step: 'Check the manual release position',
        body: 'Look at the release lever, key or knob on the housing. If it has been used recently, make sure it is fully back in the operating position as the manual for your model describes. A half-engaged release is the cheapest answer on this page.',
      },
      {
        step: 'Release it and move the gate by hand',
        body: 'With the operator disengaged, push the gate through its full travel. If it is heavy, stiff or catches, the motor is being asked to do too much and the gate needs attention first. If it glides, the fault is in the operator.',
      },
      {
        step: 'Feel the housing and note the time of day',
        body: 'A hot housing and a gate that works in the morning but not mid-afternoon points at a thermal cut-out. Tell us when it fails and how many times it had run that day — it shortens the visit considerably.',
      },
    ],

    doNot: [
      'Do not touch capacitor terminals, even with the power off. A charged capacitor can deliver a painful shock.',
      'Do not hold a hot motor in service by repeatedly re-triggering it. The thermal cut-out is preventing a burnt winding.',
      'Do not put your hands near the chain, sprockets or arm while someone else operates the gate to test it.',
      'Do not tighten a slip clutch or raise force settings to make a struggling motor push through — those settings are part of the entrapment protection.',
    ],

    outlook: {
      summary:
        'Most calls about a gate motor end without a new motor. Capacitors, batteries, a release left out, and drive-train parts account for the large majority, and they are modest repairs. A motor that genuinely has failed is usually the last link in a chain that started with a gate that had become hard to move, and that chain has to be fixed with it.',
      usuallyRepair: [
        'Start and run capacitors on AC operators',
        'Batteries and charging faults on DC operators',
        'Manual release mechanisms and couplings',
        'Gearbox gears, drive pins, sprockets and clutches',
        'Brushes and encoders where the motor design allows',
      ],
      sometimesReplace: [
        'A burnt motor on an operator that is no longer supported by its manufacturer',
        'An operator running far beyond its duty cycle, where a heavier-rated unit is the real fix',
        'A gearbox and motor both worn out after years of dragging a binding gate',
      ],
    },

    dfw: [
      {
        heading: 'Heat, duty cycle and fire ants',
        body: [
          'A gate operator housing in full Texas sun can run far hotter inside than the air around it, and every degree counts against a motor that is already near its thermal limit. This is why thermal cut-outs cluster in late summer here and largely disappear by October — the motor did not change, the starting temperature did.',
          'The other local culprit is less obvious. Fire ants are drawn to electrical equipment and readily colonise operator housings and control boxes, packing them with soil and bodies that bridge relay contacts and motor connections. A motor that stopped working and a housing full of ants are frequently the same fault, and the repair includes cleaning out and sealing the enclosure.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate motor hums but the gate will not move. Is the motor dead?',
        a: 'Usually not. A hum means power is reaching the motor and it cannot start turning. On AC operators that is classically the start capacitor; on any operator it can also be a gate so stiff the motor cannot overcome it. Release the operator and push the gate by hand — if it moves freely, the capacitor is the prime suspect.',
      },
      {
        q: 'I can hear the motor running but the gate stays where it is. What broke?',
        a: 'Something between the motor and the gate. Check first that the manual release is fully engaged. If it is, the likely causes are inside the drive train — a stripped gear, a sheared pin, a slipping clutch or a sprocket loose on its shaft. The motor itself is very likely fine.',
      },
      {
        q: 'The motor works in the morning and quits in the afternoon. Why?',
        a: 'That pattern is almost always the thermal overload. The motor heats up over the day’s cycles and the sun, trips its protection, and recovers when it cools. The useful question is why it is running hot — a stiff gate, too many cycles for the operator’s rating, or a housing that cannot shed heat.',
      },
      {
        q: 'Can a gate motor be repaired, or does the whole opener have to go?',
        a: 'The motor is one replaceable part of the operator, and on current models it can be swapped on its own. Whether that is worth doing depends on the age of the operator and whether parts are still made for it. We will tell you which side of that line your unit is on before any work starts.',
      },
    ],

    relatedServices: ['gate-motor-repair', 'automatic-gate-repair', 'electric-gate-repair'],
    relatedSymptoms: ['automatic-gate-not-working', 'gate-stops-halfway', 'gate-circuit-board-not-working'],
    sources: [
      {
        label: 'LiftMaster gate operator manuals — manual release, motor and duty cycle specifications',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'DoorKing gate operator owner’s manuals — motor, capacitor and clutch troubleshooting',
        url: 'https://www.doorking.com/gate-operators',
      },
      {
        label: 'Texas A&M AgriLife Extension — fire ants and electrical equipment',
        url: 'https://fireant.tamu.edu/',
      },
    ],
    toConfirm: [
      'Whether Shield stocks common capacitor ratings and DC replacement motors for the brands it services most.',
      'Whether ant-proofing or sealing the operator enclosure is offered as part of a motor repair.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-not-working-after-power-outage',
    label: 'Gate not working after a power outage',
    searchedAs: ['Gate Not Working After Power Outage'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'If the gate is stuck open after an outage, the property is unsecured; if it is stuck closed, you may be trapped. Either way the manual release lets you move it by hand while the cause is found.',

    title: 'Gate Not Working After a Power Outage? | DFW Help',
    metaDescription:
      'Power is back but the gate is not? Re-engaged release, drained backup battery, fail-safe mode, lost settings or restoration surge — what to check, in order.',
    h1: 'Gate Not Working After a Power Outage',
    heroIntro:
      'The lights came back on and the gate did not. That is a different situation from a gate with no power at all, because the outage itself usually left something behind — a release still disengaged, a battery run flat, a setting lost, or a surge when the supply returned.',
    heroPoints: [
      'We ask what happened during the outage first, because it usually explains what happened after',
      'Backup batteries are load-tested after a deep drain rather than assumed to recover',
      'Fail-safe and fail-secure settings are checked so the gate behaves as you expect next time',
    ],

    whatIsHappening: [
      {
        heading: 'The outage is over, but its side-effects are not',
        body: [
          'A mains-powered operator with no battery simply stops when the supply drops, and in principle should carry on when it returns. In practice several things happen around an outage that stop that. People open the gate by hand to get out and leave the release disengaged. A battery-backed operator keeps working on its battery until the battery is exhausted. Boards that keep a clock or a schedule lose the time. And the moment the supply returns, the voltage can spike or sag before it settles.',
          'That is why the best first question is not “what is broken” but “what happened while the power was off”. A gate that ran on battery for six hours and then died has a different answer from one that was pushed open by hand at midnight, and both are different from one that was fine until the instant the power came back.',
        ],
      },
      {
        heading: 'Battery backup, fail-safe and fail-secure',
        body: [
          'Many operators can be set to do something specific when the mains fails. Some are configured to open on battery and stay open until mains returns — common on commercial and multi-family entrances where emergency access matters. Others hold the gate closed and run a limited number of cycles on battery. Which one your gate does is a setting, not a fault, but it explains a lot of post-outage calls about a gate that is “stuck open”.',
          'The other thing a long outage does is drain the backup battery far deeper than normal use ever does. Sealed lead-acid batteries, which most gate operators use, do not enjoy being run flat; an older battery may never recover its full capacity, and the gate behaves erratically for days afterwards until it is replaced.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Manual release still disengaged after someone opened the gate by hand',
        likelihood: 'most common',
        howToTell:
          'The gate moves freely when pushed and the operator can be heard running, but nothing happens to the gate. Ask everyone in the household whether they used the release during the outage — it is easy to forget.',
        fix: 'Re-engage the release following your operator’s instructions, then run one full cycle while standing clear. Some operators need the gate pushed slightly until the drive re-meshes.',
        ownerCanFix: true,
      },
      {
        cause: 'GFCI or breaker tripped when the supply returned',
        likelihood: 'most common',
        howToTell:
          'The house has power but the operator has none, or is running on battery and beeping a warning. Restoration surges and the inrush of every appliance starting at once commonly trip outdoor GFCIs.',
        fix: 'Reset the GFCI or breaker once. If it holds, the outage was the only cause. If it trips again, stop — there is a genuine fault to earth and it needs tracing rather than resetting.',
        ownerCanFix: true,
      },
      {
        cause: 'Backup battery run flat by the outage',
        likelihood: 'common',
        howToTell:
          'The gate kept working for some hours during the outage, then stopped. Now mains is back it is slow, beeps a low-battery pattern, or runs one cycle and quits. A battery more than three or four years old is unlikely to recover from a deep drain.',
        fix: 'Give it a few hours on mains to recharge. If it is no better by the next day, the battery needs load-testing and almost certainly replacing — then the charger is checked to make sure it is actually charging.',
        ownerCanFix: false,
      },
      {
        cause: 'Operator still in fail-safe or battery mode',
        likelihood: 'common',
        howToTell:
          'The gate opened when the power failed and has stayed open since, ignoring commands, or the board is still showing a battery or AC-fail indicator although mains is on. Common on entrances configured for emergency access.',
        fix: 'Some operators return to normal automatically once mains is stable; others need a close command, a reset, or a fault cleared at the board. Where the board still thinks mains is absent, the transformer or its fuse is the next thing to check.',
        ownerCanFix: false,
      },
      {
        cause: 'Surge or brownout damage when the supply returned',
        likelihood: 'common',
        howToTell:
          'The gate was fine on battery or untouched throughout, and failed the moment the power came back — dark board, blown fuse, or erratic behaviour. Also common after the flickering on-off-on restorations that utilities sometimes go through.',
        fix: 'Tracing it through the transformer, fuse, surge protector and board, and replacing what failed. Adding or replacing surge protection at the same time is worth discussing.',
        ownerCanFix: false,
      },
      {
        cause: 'Lost travel position, clock or access settings',
        likelihood: 'less common',
        howToTell:
          'The gate runs but stops short, overruns, or makes one slow cycle as though searching for its limits. Or the gate works from the remote but a timer, hold-open schedule, telephone entry system or app link has stopped behaving.',
        fix: 'Many operators find their position again on the first slow cycle after power returns, and that is normal. If it does not, the travel is re-learned and the clock, schedules and network connections are restored.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Ask what happened during the outage',
        body: 'Did anyone open the gate by hand? Did it keep working on battery for a while, and roughly how long? Did it fail during the outage or only once the power was back? These answers point at a different cause each, and they are the first thing we will ask.',
      },
      {
        step: 'Check the manual release is fully engaged',
        body: 'Look at the release on the operator housing and make sure it is in its normal operating position. If the gate swings or slides freely when pushed with the release “engaged”, it is not.',
      },
      {
        step: 'Reset the GFCI and breaker once',
        body: 'Find the outdoor GFCI feeding the operator and the breaker in the panel. Reset each once. A single trip from the outage is normal; one that trips again straight away is reporting a real fault.',
      },
      {
        step: 'Give a battery-backed operator time',
        body: 'If the battery was run down, leave the operator on mains for a few hours before judging it. A healthy battery recovers; a tired one does not, and that tells you something useful when you call.',
      },
    ],

    doNot: [
      'Do not keep cycling a gate that is running slowly on a drained battery — you are deepening the discharge and shortening the battery’s life.',
      'Do not reset a GFCI or breaker more than once if it trips again immediately.',
      'Do not start a generator and back-feed the house to run the gate. Back-feeding endangers utility workers and anyone touching the supply.',
      'Do not leave the gate disconnected from its operator long-term to get around the problem — a free-moving leaf can swing or roll in the wind.',
    ],

    outlook: {
      summary:
        'Most gates that fail after an outage need nothing more than a release re-engaged, a GFCI reset, or a battery that had come to the end of its life anyway. Surge damage is the expensive exception, and it is usually confined to the board, transformer or fuse rather than the motor.',
      usuallyRepair: [
        'Release mechanisms that will not re-engage cleanly',
        'Backup batteries and chargers',
        'Transformers, fuses and surge protectors',
        'Travel re-learning, clock and schedule restoration',
        'Fail-safe and fail-secure configuration',
      ],
      sometimesReplace: [
        'A control board damaged by a restoration surge on an operator no longer supported',
        'An access control or entry system whose memory was lost and cannot be recovered from a backup',
      ],
    },

    dfw: [
      {
        heading: 'Outages here come with storms and with heat',
        body: [
          'In Dallas–Fort Worth outages arrive in two seasons. Spring and autumn storms bring lines down and leave restorations that flicker on and off before they hold, which is hard on boards and transformers. Summer brings demand peaks during long triple-digit stretches, and winter can bring the kind of grid emergency the region saw in February 2021, when outages lasted long enough to drain any backup battery completely.',
          'Long outages are what turn a healthy-looking battery into a dead one. If you live somewhere that loses power more than once or twice a year — common on the rural edges of the metroplex — it is worth sizing the backup battery for the outage you actually get, and knowing in advance whether you want the gate to fail open or fail closed.',
        ],
      },
    ],

    faqs: [
      {
        q: 'The power is back. Why is my gate still not working?',
        a: 'Most often because something changed during the outage: the release was used and not fully re-engaged, the outdoor GFCI tripped when power returned, or a backup battery was run flat and has not recovered. Check those three first. If none applies and the board is dark or erratic, the restoration may have damaged the transformer or board.',
      },
      {
        q: 'My gate opened by itself when the power went out. Is that a fault?',
        a: 'Probably not. Many battery-backed operators can be configured to open on mains failure and stay open, so that emergency services and residents are never locked out. It is a setting, and if you would rather the gate stayed closed during an outage, it can usually be changed.',
      },
      {
        q: 'It made one slow trip and then started working normally. Is that okay?',
        a: 'Yes. Some operators run a slow first cycle after power is restored to find their open and closed positions again. If it then works normally, nothing is wrong. If it stops short or overruns repeatedly, the travel needs re-learning.',
      },
      {
        q: 'How do I stop this happening next time?',
        a: 'Three things help: a backup battery sized for the outages you actually get and replaced on schedule, surge protection on the supply to the operator, and knowing where the manual release is and how to put it back. It is also worth deciding deliberately whether you want the gate to fail open or closed.',
      },
    ],

    relatedServices: ['electric-gate-repair', 'gate-motor-repair', 'automatic-gate-repair', 'emergency-gate-repair'],
    relatedSymptoms: ['gate-opener-has-no-power', 'gate-battery-keeps-dying', 'gate-not-working-after-storm'],
    sources: [
      {
        label: 'LiftMaster gate operator manuals — battery backup and AC power-loss behaviour settings',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'UL 325 — Standard for Door, Drapery, Gate, Louver, and Window Operators and Systems',
        url: 'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL325',
      },
      {
        label: 'ERCOT — February 2021 extreme cold weather event review',
        url: 'https://www.ercot.com/',
      },
    ],
    toConfirm: [
      'Whether Shield fits or recommends surge protectors as standard on operator power supplies.',
      'Whether battery backup retrofits are offered for mains-only operators.',
    ],
    indexable: true,
  },
]
