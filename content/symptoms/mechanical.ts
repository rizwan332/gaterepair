import type { SymptomPage } from './types'

/**
 * Faults in the gate rather than the operator.
 *
 * These six matter disproportionately, because they are the faults most often
 * "solved" by replacing an operator that was never broken. A gate dragging on
 * the ground, riding a failed roller or hanging off a leaning post will destroy
 * whatever is asked to move it, and fitting a stronger operator accelerates
 * that. Every page here says so, because it is the most expensive mistake an
 * owner can make and the easiest one for a contractor to sell.
 */
export const mechanicalSymptoms: SymptomPage[] = [
  {
    slug: 'sliding-gate-off-track',
    label: 'Sliding gate off track',
    searchedAs: ['Sliding Gate Off Track', 'Sliding Gate Stuck', 'Gate Track Damaged'],
    applies: 'slide',
    urgency: 'safety',
    urgencyNote:
      'A slide gate off its track is unsupported and can fall. Keep people and vehicles away from it and do not try to lift it back on by hand.',

    title: 'Sliding Gate Off Track — Causes and Repair | DFW',
    metaDescription:
      'A slide gate off its track or jammed is usually debris, a failed roller or a bent track. Why forcing it makes it worse, and what a proper repair involves.',
    h1: 'Sliding Gate Off Track or Stuck',
    heroIntro:
      'A slide gate that has come off its track has almost always been telling you for months — grinding, stiffening, or catching at the same point. The derailment is the end of that story rather than a sudden event.',
    heroPoints: [
      'We re-seat the gate safely rather than levering it back and hoping',
      'The track gets straightened or replaced, not packed out to hide a bend',
      'We find why it came off, because a re-seated gate on a bad roller comes off again',
    ],

    whatIsHappening: [
      {
        heading: 'What actually holds a slide gate up',
        body: [
          'A rolling slide gate sits on wheels that run in or on a track set into the driveway, with guide rollers at the post keeping it upright. A cantilever slide gate has no ground track at all: it hangs from trucks running inside a track built into the gate frame, supported entirely by posts to one side.',
          'Both designs depend on everything staying in alignment. The load is concentrated on a small number of small parts, and when one of them wears or shifts, the gate starts riding wrong — which loads the next part badly, and so on. That is why these failures cascade, and why a gate that comes off its track usually has more than one thing wrong by then.',
        ],
      },
      {
        heading: 'Derailment is rarely the first symptom',
        body: [
          'The warning signs run in a predictable order: a new grinding or squealing noise, then the gate becoming heavier to move by hand, then catching at one particular point, then the operator stopping or reversing there, and finally the gate leaving the track. Owners often report the last step as sudden, but the first appeared months earlier.',
          'This matters for the repair. A gate lifted back onto its track without addressing the worn roller or bent section that caused the derailment will come off again, usually sooner, and each derailment damages more. The repair that lasts is the one that fixes the cause rather than the position.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Debris in the track',
        likelihood: 'most common',
        howToTell:
          'Look along the track for gravel, stones, grit or leaf litter, particularly at the point where the gate catches. Very common after storms and on wind-exposed sites.',
        fix: 'Clearing the track, and dealing with why debris collects there — drainage, a gravel drive feeding the slot, or landscaping. Sweeping it monthly is a symptom, not a fix.',
        ownerCanFix: true,
      },
      {
        cause: 'Worn, seized or collapsed roller',
        likelihood: 'most common',
        howToTell:
          'Grinding or squealing at one point in the travel, or a gate noticeably heavier to push by hand. A seized roller often has a visible flat spot or rust streak; a collapsed bearing lets the gate sit low on one side.',
        fix: 'Roller replacement, in pairs or sets rather than singly — a new roller running alongside three worn ones takes a disproportionate share of the load and fails early.',
        ownerCanFix: false,
      },
      {
        cause: 'Bent or damaged track',
        likelihood: 'common',
        howToTell:
          'Sight along the track at eye level; a bend is usually visible. Common where vehicles drive over the track at an angle, or after a heavy delivery vehicle has crossed it.',
        fix: 'Straightening where it can be done properly, replacing the damaged section where it cannot. Packing or shimming around a bend transfers the load into the rollers and simply moves the failure.',
        ownerCanFix: false,
      },
      {
        cause: 'Guide rollers worn or out of adjustment',
        likelihood: 'common',
        howToTell:
          'The gate wobbles laterally as it runs, or leans away from the posts. Guide rollers keep the gate upright, and when they wear, the gate starts working its way off line.',
        fix: 'Adjusting or replacing the guide rollers. Small parts, and a common cause of a gate that derails despite a perfectly good track.',
        ownerCanFix: false,
      },
      {
        cause: 'Slab movement lifting or dropping the track',
        likelihood: 'common',
        howToTell:
          'The track is intact but no longer level — check with a straightedge or by eye along its length. Look for cracks in the driveway crossing the track line.',
        fix: 'Re-setting the track to level, and addressing the slab where possible. On actively moving ground this is the point at which a cantilever design sometimes becomes the better long-term answer.',
        ownerCanFix: false,
      },
      {
        cause: 'Cantilever trucks or rollers worn out',
        likelihood: 'less common',
        howToTell:
          'Cantilever gates only. The gate sags at its free end, or the nose drops noticeably as it opens. There is no ground track to inspect — the wear is inside the gate frame at the posts.',
        fix: 'Truck and roller replacement, and checking the posts, which carry the entire load on this design and are where the real damage shows up if it has been left.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Stop using the gate',
        body: 'A gate off its track is unsupported and heavy. Stop cycling it, keep vehicles and people away from it, and do not park where it would land. Each additional attempt to run it does more damage.',
      },
      {
        step: 'Look along the track',
        body: 'From one end, at eye level. You are looking for debris, a visible bend, and whether the track still runs level. This takes a minute and usually identifies the cause.',
      },
      {
        step: 'Check the rollers for flat spots and play',
        body: 'With the gate safely at rest, look at each roller. Flat spots, rust streaking, visible wobble or a roller that does not turn freely all point at the part that caused the derailment.',
      },
      {
        step: 'Think back to when the noise started',
        body: 'Grinding, squealing or increasing heaviness usually precedes a derailment by months. Telling us when it started and where in the travel it happened narrows the repair considerably.',
      },
    ],

    doNot: [
      'Do not try to lift a slide gate back onto its track by hand. They routinely weigh several hundred pounds and are awkward enough to cause serious crush injuries.',
      'Do not drive a vehicle against the gate to reposition it.',
      'Do not keep operating a gate that is grinding or catching — you are converting a roller replacement into a track replacement.',
      'Do not lubricate the track. It is designed to run dry; oil holds grit and accelerates roller wear.',
    ],

    outlook: {
      summary:
        'Caught early — at the grinding stage — this is a roller replacement and among the cheaper repairs on the site. Left until the gate derails, it becomes a track repair, often with damage to the gate frame and the operator that was dragging it. The cost difference between those two moments is the largest on this site.',
      usuallyRepair: [
        'Track clearing and drainage around the slot',
        'Roller and guide roller replacement',
        'Track straightening and section replacement',
        'Re-levelling a track lifted by slab movement',
        'Cantilever truck replacement',
      ],
      sometimesReplace: [
        'A gate frame distorted by repeated derailment',
        'A ground-track installation on actively moving slab, where converting to cantilever is the durable answer',
        'An operator destroyed by months of dragging a binding gate',
      ],
    },

    dfw: [
      {
        heading: 'Storm grit and moving slabs',
        body: [
          'Two local conditions put slide gates under more strain here than the design assumes. Heavy DFW downpours wash grit and gravel into ground tracks, and on the wind-exposed sites — the Lake Ray Hubbard shoreline around Rowlett, the open ground north and west — the wind keeps delivering more between storms. A track that fills after every storm is not a maintenance failure, it is a drainage problem.',
          'The second is the Blackland Prairie clay under most driveways in this metroplex. It swells and shrinks by season, slabs crack and shift along that movement, and a track set into a moving slab does not stay level. That is why re-levelling comes up so often here, and why on some properties a cantilever gate with no ground track is genuinely the better investment.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My slide gate came off its track. Can I put it back myself?',
        a: 'Please do not. A slide gate commonly weighs several hundred pounds, it is unsupported once it is off, and the injuries from getting it wrong are serious. It also almost never goes back on cleanly, because whatever caused the derailment is still there.',
      },
      {
        q: 'The gate grinds at one spot but still works. Is that urgent?',
        a: 'It is the cheapest moment to fix it. Grinding at a consistent point is usually a worn roller or debris, and both are small repairs now. Left alone, that same fault progresses to a gate that catches, then stops, then derails — at which point the track and sometimes the operator are involved too.',
      },
      {
        q: 'Why does my track keep filling with gravel?',
        a: 'Usually drainage or the driveway surface. Water running toward the track carries grit into it, and a gravel or decomposed-granite drive feeds it directly. Clearing it monthly treats the symptom; changing where the water goes, or edging the drive, treats the cause.',
      },
      {
        q: 'Should I replace all the rollers or just the bad one?',
        a: 'As a set, or at least in pairs. A single new roller running alongside worn ones carries a disproportionate share of the load and wears out early, which means paying for the visit twice. The parts are not the expensive element of this repair.',
      },
      {
        q: 'Is a cantilever gate better for my driveway?',
        a: 'It can be, specifically where the slab is moving. A cantilever gate has no ground track, so it is unaffected by a driveway that cracks and shifts — which describes a lot of properties over this region’s clay. It costs more to install and puts all the load on the posts, so it is a judgement call we would rather make after seeing the ground.',
      },
    ],

    relatedServices: ['sliding-gate-repair', 'automatic-gate-repair', 'iron-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-roller-or-wheel-broken', 'gate-stops-halfway', 'gate-chain-broken'],
    sources: [
      {
        label: 'ASTM F2200 — Standard Specification for Automated Vehicular Gate Construction',
        url: 'https://www.astm.org/f2200-21.html',
      },
      {
        label: 'DoorKing slide gate operator installation manuals — track and gate requirements',
        url: 'https://www.doorking.com/gate-operators',
      },
    ],
    toConfirm: [
      'Whether Shield does track replacement in house or subcontracts the concrete work.',
      'Whether cantilever conversion is a service offered, since this page recommends it in some conditions.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-roller-or-wheel-broken',
    label: 'Gate roller or wheel broken',
    searchedAs: ['Gate Roller Broken', 'Gate Wheel Broken'],
    applies: 'slide',
    urgency: 'safety',
    urgencyNote:
      'A gate running on a broken roller is being carried by fewer supports than it was designed for, and the next failure is usually the gate leaving the track.',

    title: 'Gate Roller or Wheel Broken — Repair Guide | DFW',
    metaDescription:
      'Grinding, squealing or a gate that has dropped on one side? How gate rollers fail, why they should be replaced as a set, and what happens if they are left.',
    h1: 'Gate Roller or Wheel Broken',
    heroIntro:
      'Rollers are small, inexpensive and carry the entire weight of your gate. They are also the part most often left until they take something more expensive with them.',
    heroPoints: [
      'Rollers replaced as a set, because one new roller among worn ones fails early',
      'We check the track at the same time — a bad track destroys new rollers',
      'Sealed bearings specified for this climate, not the cheapest part that fits',
    ],

    whatIsHappening: [
      {
        heading: 'A few small bearings carrying a very large load',
        body: [
          'A rolling slide gate is supported by a small number of wheels, each with a bearing inside it, running along a steel track. A cantilever gate uses trucks with multiple rollers inside the gate frame. Either way, the entire weight of the gate — often several hundred pounds, more for solid ornamental ironwork — rests on those bearings and the small contact patch where each wheel meets steel.',
          'Those bearings are exposed to rain, grit and temperature swings, and on a busy entrance they turn thousands of times a year. They are genuinely a wear item, and the useful mental model is that of tyres rather than of structure: they are expected to be replaced periodically, and running them to destruction damages what they are attached to.',
        ],
      },
      {
        heading: 'How a failing roller sounds and feels before it breaks',
        body: [
          'The first sign is almost always noise — a grinding, squealing or rumbling that appears at one part of the travel and gradually spreads. Next the gate becomes heavier to move by hand, because a seized roller is being dragged rather than rolled. Then it starts catching at a particular point, which the operator reports as an obstruction by stopping or reversing.',
          'By the time a roller visibly breaks or the gate drops on one side, the track has usually been taking damage for a while as well — a seized wheel scores the steel it is dragged along. This is why the repair is often quoted as rollers *and* track inspection rather than rollers alone.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Bearing worn out through normal service',
        likelihood: 'most common',
        howToTell:
          'Grinding or rumbling noise, a wheel with visible play when you try to rock it, or one that does not spin freely by hand with the gate at rest.',
        fix: 'Roller replacement as a set. With a sealed bearing appropriate to an outdoor gate rather than the cheapest part that physically fits.',
        ownerCanFix: false,
      },
      {
        cause: 'Grit contamination destroying the bearing',
        likelihood: 'most common',
        howToTell:
          'Premature failure — rollers lasting a fraction of what they should. Look at the track for accumulated grit, and at the site for a gravel drive or water running into the slot.',
        fix: 'Replacement rollers plus dealing with where the grit comes from — and that second half is genuinely yours to do. Keeping the track clear, edging a gravel drive away from the slot and correcting water that runs into it will multiply the life of whatever we fit. Sealed bearings help; an unsealed bearing in a track that is refilled every storm is a consumable.',
        ownerCanFix: true,
      },
      {
        cause: 'Seized roller dragged along the track',
        likelihood: 'common',
        howToTell:
          'A flat spot worn on the wheel, rust streaking, and often score marks visible along the track itself. The gate is noticeably heavy to push by hand.',
        fix: 'Roller replacement and track inspection. The scoring left behind may need dressing, because a rough track chews through new rollers.',
        ownerCanFix: false,
      },
      {
        cause: 'Wrong roller specified for the gate weight',
        likelihood: 'common',
        howToTell:
          'Repeated failures at short intervals with no obvious grit problem. Common where an ornamental or infilled gate was fitted to hardware chosen for a lighter leaf, or where an owner sourced replacements on price.',
        fix: 'Fitting rollers rated for the actual gate weight. This is the fault that looks like bad luck and is actually specification.',
        ownerCanFix: false,
      },
      {
        cause: 'Impact damage',
        likelihood: 'common',
        howToTell:
          'Sudden onset after a vehicle strike or a heavy object hitting the gate. A visibly cracked wheel, a bent axle, or a gate sitting crooked immediately afterwards.',
        fix: 'Replacing the damaged roller and checking the frame and track for related damage — impacts rarely confine themselves to one part.',
        ownerCanFix: false,
      },
      {
        cause: 'Corrosion seizing the bearing',
        likelihood: 'less common',
        howToTell:
          'More common on waterfront and low-lying properties. The wheel is stiff or locked, with visible rust around the hub, despite no great age or mileage.',
        fix: 'Replacement with sealed, corrosion-resistant hardware. On lakeside installations this is a specification question rather than a maintenance failure.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Listen, then locate',
        body: 'Run the gate slowly and note where the noise occurs in the travel. A roller failing makes its noise at a consistent position relative to the gate rather than the driveway, which distinguishes it from debris in the track.',
      },
      {
        step: 'Push the gate by hand with the operator released',
        body: 'A healthy gate moves with one hand. If it is heavy, or heavier at one point, a roller is dragging rather than rolling. This also tells us whether the operator has been fighting it.',
      },
      {
        step: 'Inspect each wheel',
        body: 'With the gate at rest, look for flat spots, cracks, rust around the hub, and play when you try to rock the wheel. A wheel that will not spin freely by hand has failed even if it looks intact.',
      },
      {
        step: 'Look for scoring along the track',
        body: 'Bright or rough marks along the steel mean a wheel has been dragged rather than rolling. That tells us the track needs attention too, and it is worth knowing before the quote rather than after.',
      },
    ],

    doNot: [
      'Do not keep running a gate that is grinding. Every cycle converts a roller replacement into a track repair.',
      'Do not grease a sealed bearing through its seal — you will destroy the seal and let grit in.',
      'Do not replace one roller and leave the rest. The new one carries more load and fails early.',
      'Do not lift or support the gate on jacks or blocks to inspect it; slide gates are heavy and unstable off their supports.',
    ],

    outlook: {
      summary:
        'Rollers are inexpensive and this is a straightforward repair when it is done at the noise stage. What makes it costly is delay: a seized roller scores the track, a scored track eats the new rollers, and an operator dragging a heavy gate for months becomes a second repair. Doing it early is one of the clearest value decisions in gate maintenance.',
      usuallyRepair: [
        'Roller and wheel replacement as a set',
        'Guide roller adjustment and replacement',
        'Track dressing where scoring is light',
        'Cantilever truck replacement',
      ],
      sometimesReplace: [
        'Track that has been scored deeply enough to keep destroying rollers',
        'Hardware that was under-specified for the gate weight from the start',
        'An operator that has been dragging a seized gate long enough to damage its gearbox',
      ],
    },

    dfw: [
      {
        heading: 'Grit is the local enemy of a gate bearing',
        body: [
          'Roller life in this metroplex is determined less by cycles than by grit. Heavy storms wash sand and gravel into ground tracks, decomposed-granite and gravel drives feed the slot continuously, and wind-exposed sites — the lake shorelines in particular — get topped up between storms. An unsealed bearing in those conditions is a consumable rather than a component.',
          'Heat is the second factor. Bearing grease thins in extended triple-digit weather and migrates out of a marginal seal, after which the bearing runs dry. This is why we specify sealed rollers appropriate to the conditions rather than whatever fits, and why roller replacement here comes round more often than a manufacturer’s figures would suggest.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate squeals when it opens. Is that the roller?',
        a: 'Usually, yes — especially if the noise happens at the same point in the gate’s travel every time. A squeal or grind is a bearing telling you it is on its way out, and it is the cheapest moment to deal with it. Debris in the track sounds similar but occurs at a fixed point on the driveway rather than on the gate.',
      },
      {
        q: 'Can I just replace the broken one?',
        a: 'You can, but it is usually a false economy. The remaining rollers are the same age and have done the same work, and a single new roller among worn ones takes more than its share of the load and fails early. The parts are the cheap part of this job; the visit is not.',
      },
      {
        q: 'How long should gate rollers last?',
        a: 'It depends far more on grit than on time. In clean conditions many years; on a gravel drive or a wind-exposed site with an unsealed bearing, a fraction of that. If yours are failing every year or two, the honest answer is usually to change the specification or deal with what is getting into the track, not to keep buying rollers.',
      },
      {
        q: 'The gate still works. Can I leave it until it stops?',
        a: 'We would advise not. A seized roller scores the track it is dragged along, and a scored track destroys the next set of rollers. Meanwhile the operator is working against a gate that has become heavy, which is how gearboxes fail. Left long enough, a small parts job becomes three repairs.',
      },
      {
        q: 'What does it cost?',
        a: 'We will give you the figure before starting. Rollers themselves are among the least expensive parts on a gate — the variable is whether the track has been damaged as well, which is why we inspect it at the same time rather than quoting rollers and finding more later.',
      },
    ],

    relatedServices: ['sliding-gate-repair', 'automatic-gate-repair', 'iron-gate-repair'],
    relatedSymptoms: ['sliding-gate-off-track', 'gate-stops-halfway', 'gate-chain-broken'],
    sources: [
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
      {
        label: 'DoorKing slide gate operator manuals — gate hardware and weight specifications',
        url: 'https://www.doorking.com/gate-operators',
      },
    ],
    toConfirm: [
      'Which roller specifications Shield fits as standard, and whether sealed bearings are default.',
      'Typical roller set cost, so the cost question can be answered with a range.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-chain-broken',
    label: 'Gate chain broken',
    searchedAs: ['Gate Chain Broken'],
    applies: 'slide',
    urgency: 'security',
    urgencyNote:
      'A broken drive chain usually leaves the gate wherever it stopped, frequently open — and the loose chain end is itself a hazard at ankle height.',

    title: 'Gate Chain Broken or Slipping — Repair | DFW',
    metaDescription:
      'A slide gate drive chain that has snapped or jumped its sprocket is usually a tension or alignment problem. What causes it, and why a new chain alone fails.',
    h1: 'Gate Chain Broken or Slipping',
    heroIntro:
      'Chain-driven slide gates fail at the chain, and the chain almost never fails on its own. It is nearly always reporting a tension, alignment or resistance problem that has been building for a while.',
    heroPoints: [
      'We find why the chain broke before fitting a new one',
      'Tension set to specification, not by feel — both too slack and too tight destroy chains',
      'Sprockets checked for hooked teeth, which chew through new chain quickly',
    ],

    whatIsHappening: [
      {
        heading: 'How a chain drive moves a slide gate',
        body: [
          'On most chain-driven slide gates a length of roller chain is fixed at each end of the gate and runs horizontally along it, passing around a drive sprocket on the operator and usually over idler sprockets that keep it aligned. When the operator turns, it effectively pulls itself along the chain, and the gate moves.',
          'That means the chain carries the full driving force of the operator, concentrated in one line at one height. Anything that increases the force needed to move the gate — a seized roller, a fouled track, a gate out of level — is felt directly by the chain, and the chain is the component that gives way first. It is, in effect, the fuse.',
        ],
      },
      {
        heading: 'Slack, tight, and misaligned all fail differently',
        body: [
          'A chain that is too slack whips as the gate accelerates, rides up the sprocket teeth and eventually jumps off — which usually presents as a gate that suddenly stops moving while the operator keeps running. A chain that is too tight runs in permanent tension, wearing the sprockets and the chain pins rapidly and failing by stretching then snapping.',
          'A chain that is out of alignment — because a sprocket has shifted, a mount has loosened, or the gate has sagged so the chain no longer runs level — wears on one side of its rollers and fails prematurely no matter how well tensioned it is. Diagnosing which of the three you have is what determines whether the new chain lasts.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Chain stretched beyond adjustment through normal wear',
        likelihood: 'most common',
        howToTell:
          'The chain has needed tightening repeatedly over the last year, and there is little or no adjustment left. Visible sag between sprockets with the gate at rest.',
        fix: 'Chain replacement, with the sprockets inspected at the same time. Chain and sprockets wear as a pair, and a new chain on hooked sprockets stretches quickly.',
        ownerCanFix: false,
      },
      {
        cause: 'Incorrect tension',
        likelihood: 'most common',
        howToTell:
          'Too slack: the chain visibly whips or slaps as the gate moves, and may jump the sprocket. Too tight: the operator sounds strained throughout, and there is no perceptible give in the chain at rest.',
        fix: 'Re-tensioning to the manufacturer’s specification. This is not a feel judgement — both extremes destroy chains and sprockets, and the figure is published for each operator.',
        ownerCanFix: false,
      },
      {
        cause: 'Worn sprockets with hooked teeth',
        likelihood: 'common',
        howToTell:
          'Look at the drive sprocket teeth in profile. Healthy teeth are symmetrical; worn ones develop a hooked, shark-fin shape. A new chain fitted to hooked sprockets will fail early.',
        fix: 'Sprocket replacement alongside the chain. Doing one without the other is the most common reason a chain repair does not last.',
        ownerCanFix: false,
      },
      {
        cause: 'Underlying resistance — seized roller, fouled track, gate out of level',
        likelihood: 'common',
        howToTell:
          'Release the operator and push the gate by hand. If it is heavy or catches, the chain was breaking under a load it should never have seen, and replacing it alone guarantees a repeat.',
        fix: 'Fix the mechanical cause first — rollers, track, levelling — then the chain. The chain was the symptom, not the disease.',
        ownerCanFix: false,
      },
      {
        cause: 'Corrosion and lack of lubrication',
        likelihood: 'common',
        howToTell:
          'Stiff links that do not articulate freely, orange rust across the chain, or a chain that has clearly never been lubricated. Common on waterfront and exposed sites.',
        fix: 'Replacement, then a lubrication regime appropriate to an outdoor chain. A dry chain in this climate has a short life regardless of quality.',
        ownerCanFix: true,
      },
      {
        cause: 'Impact or vandalism',
        likelihood: 'less common',
        howToTell:
          'Sudden failure with visible damage — a bent link, a torn mounting bracket, or a chain that has been deliberately cut. Look at the end fixings as well as the chain itself.',
        fix: 'Replacing the chain and repairing the mountings. If the chain is reachable from outside, this is also a conversation about guarding it.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Secure the gate and the loose chain',
        body: 'A broken chain leaves a heavy gate free to roll and a chain end at ankle height. Make the area safe before inspecting anything, and do not leave a partially opened gate to drift.',
      },
      {
        step: 'Push the gate by hand with the operator released',
        body: 'This is the important one. If the gate is heavy or catches, the chain failed because it was dragging a gate that had become hard to move — and fitting a new chain alone will simply break it again.',
      },
      {
        step: 'Look at the sprocket teeth',
        body: 'Compare the drive sprocket teeth to a symmetrical shape. Hooked, worn teeth mean the sprocket needs replacing with the chain. This is the single most useful thing you can photograph before we arrive.',
      },
      {
        step: 'Check the chain’s condition along its length',
        body: 'Stiff links, heavy rust, or a section that has clearly stretched more than the rest all indicate the chain was at the end of its life rather than unlucky.',
      },
    ],

    doNot: [
      'Do not rejoin a broken chain with a connecting link and carry on. The rest of the chain is the same age and under the same load, and the next failure follows quickly.',
      'Do not overtighten a chain to stop it jumping — that transfers the problem into the sprockets and bearings.',
      'Do not operate the gate with a damaged or partially attached chain.',
      'Do not use a heavy oil or grease on a gate chain in this climate; it collects grit and turns into an abrasive paste.',
    ],

    outlook: {
      summary:
        'Chain and sprockets are inexpensive and the repair is quick — provided the reason for the failure is dealt with. The mistake that costs money here is treating a broken chain as a chain problem when it was reporting a seized roller or a fouled track, because that fault is still there and still destroying things.',
      usuallyRepair: [
        'Chain replacement and correct tensioning',
        'Drive and idler sprocket replacement',
        'Mounting bracket repair',
        'The underlying roller, track or levelling fault',
      ],
      sometimesReplace: [
        'An operator whose drive sprocket shaft or gearbox has been damaged by running against a jammed gate',
        'A chain drive on a gate that has outgrown it, where a different drive type suits the weight better',
      ],
    },

    dfw: [
      {
        heading: 'Why chains have a hard life in this climate',
        body: [
          'A gate chain here faces grit, heat and humidity at once. Storm-washed sand and grit from gravel drives get into the chain’s rollers, where they act as a grinding compound; summer heat thins whatever lubricant is present and drives it out; and humidity does the rest on an unlubricated chain. Waterfront sites around the lakes are the worst of it.',
          'The other local factor is what the chain is being asked to pull. Slab movement over Blackland clay puts slide gates out of level, and a gate running slightly uphill or binding at one point loads the chain far beyond its design duty. A chain that keeps breaking on a site like that is not a quality problem — it is doing its job as the weakest link while something else is wrong.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate chain snapped. Can it just be rejoined?',
        a: 'It can physically, but we would not recommend it. The rest of the chain is the same age, has done the same work and is under the same load, so a repair link usually buys weeks. More importantly, a chain rarely breaks without a reason — and rejoining it leaves that reason in place.',
      },
      {
        q: 'The chain keeps coming off the sprocket. Why?',
        a: 'Most often tension that is too slack, letting the chain whip and ride up the teeth. The other common causes are a worn sprocket with hooked teeth and a misalignment — a loose mount or a gate that has sagged so the chain no longer runs level. All three are fixable, and guessing between them is how the problem repeats.',
      },
      {
        q: 'Do the sprockets need changing too?',
        a: 'Often yes. Chain and sprockets wear together, and a new chain on worn, hooked sprocket teeth stretches quickly and fails early. It is worth looking at the teeth before deciding — it is the difference between a repair that lasts years and one that lasts months.',
      },
      {
        q: 'How often should a gate chain be lubricated?',
        a: 'A few times a year in this climate, with a lubricant intended for chain rather than a general-purpose grease. Heavy grease collects grit and becomes abrasive, which does more harm than no lubricant at all. This is genuinely something an owner can do.',
      },
      {
        q: 'My chain has broken twice in a year. Is the operator too weak?',
        a: 'More likely the gate has become too hard to move. A chain is the weakest link by design, so repeated failures usually mean it is being asked to drag a gate with a seized roller, a fouled track, or one that is out of level. We would check that before assuming the operator is at fault.',
      },
    ],

    relatedServices: ['sliding-gate-repair', 'gate-motor-repair', 'automatic-gate-repair', 'commercial-gate-repair'],
    relatedSymptoms: ['sliding-gate-off-track', 'gate-roller-or-wheel-broken', 'gate-stops-halfway'],
    sources: [
      {
        label: 'DoorKing slide gate operator manuals — chain installation and tensioning specifications',
        url: 'https://www.doorking.com/gate-operators',
      },
      {
        label: 'ANSI/ASME B29.1 — precision power transmission roller chain standard',
        url: 'https://www.asme.org/codes-standards/find-codes-standards/b29-1-precision-power-transmission-roller-chains',
      },
    ],
    toConfirm: [
      'Which chain size and grade Shield fits as standard for residential and commercial slide gates.',
      'Whether chain lubrication is included in any maintenance offering.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-sagging-or-dragging',
    label: 'Gate sagging or dragging',
    searchedAs: ['Gate Sagging', 'Gate Dragging On Ground', 'Gate Hinge Broken'],
    applies: 'swing',
    urgency: 'safety',
    urgencyNote:
      'A sagging gate is being held by hinges taking more load than they were designed for. Hinge failure on a heavy leaf is a genuine injury risk, not just an inconvenience.',

    title: 'Gate Sagging or Dragging on the Ground | DFW Repair',
    metaDescription:
      'A swing gate that drags, scrapes or no longer latches has dropped on its hinges. Why fitting a stronger operator makes it worse, and what actually fixes it.',
    h1: 'Gate Sagging or Dragging on the Ground',
    heroIntro:
      'A swing gate that scrapes the driveway or no longer lines up with its latch has dropped. The important thing to understand is that the operator is now fighting gravity on every cycle — and that fight is what destroys operators.',
    heroPoints: [
      'We fix the sag at the hinge and post, not by turning up the operator',
      'Posts checked for movement before the leaf is re-squared, or it drops again',
      'Honest about when a gate frame has racked beyond adjustment',
    ],

    whatIsHappening: [
      {
        heading: 'A swing gate is a lever, and the hinge is the fulcrum',
        body: [
          'A swing gate leaf is supported at one edge and extends out, sometimes twelve feet or more. All of its weight acts through the hinges, and because the load is offset, the hinges and the post carry a turning force far greater than the gate’s weight alone. A heavy ornamental leaf can put a remarkable load on two small hinges.',
          'Over time that load does what loads do: hinge pins wear, hinge welds fatigue, and the post the hinges are fixed to leans very slightly. Each is small, and they add up at the far end of the leaf into a visible droop — which is why the first thing anyone notices is the gate touching the ground or failing to meet its latch.',
        ],
      },
      {
        heading: 'Why sag destroys operators',
        body: [
          'When a gate drops, the operator has to lift as well as swing it. That extra load appears on every single cycle, and it does not go away. It shows up first as an operator that sounds strained, then as one that stops or reverses partway, then as a failed gearbox, a burnt motor or a bent operator arm.',
          'This is the mechanism behind the most expensive avoidable mistake in gate repair: fitting a stronger operator to a sagging gate. The stronger unit overcomes the sag for a while, but the extra force goes into the hinges and post that were already failing — and when they give way, a heavy leaf comes down. Fixing the sag is both the cheaper and the safer route.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Worn hinge pins or bushings',
        likelihood: 'most common',
        howToTell:
          'Lift the free end of the gate slightly — if there is noticeable vertical play at the hinges, the pins or bushings are worn. Often accompanied by a creak that has got worse over a year or two.',
        fix: 'Hinge rebuild or replacement. On ornamental ironwork this is done in a way that preserves the appearance, which matters on the kind of frontage these gates belong to.',
        ownerCanFix: false,
      },
      {
        cause: 'Post leaning or shifting in the ground',
        likelihood: 'most common',
        howToTell:
          'Check the post against a level, and look at the gap along the leading edge — a gap that is wider at the top than the bottom points at the post rather than the hinges.',
        fix: 'Resetting or re-footing the post. Re-squaring a leaf on a post that is still moving is temporary, so the post gets addressed first.',
        ownerCanFix: false,
      },
      {
        cause: 'Gate frame racked out of square',
        likelihood: 'common',
        howToTell:
          'Measure the frame diagonally corner to corner in both directions. Equal measurements mean it is square; a significant difference means the frame itself has distorted, which is common on lighter welded frames carrying heavy infill.',
        fix: 'Re-squaring and, usually, adding a diagonal brace or anti-sag cable so it stays square. Without the brace it racks again.',
        ownerCanFix: false,
      },
      {
        cause: 'Driveway heaved or settled under the gate’s arc',
        likelihood: 'common',
        howToTell:
          'The gate is square and the hinges are sound, but it still grounds — at one specific point in its arc. Look for a raised slab edge or a scrape mark that starts and stops rather than running the whole sweep.',
        fix: 'Adjusting the gate’s height where there is room, or addressing the slab. Very common over expansive clay, where the concrete moves and the gate does not.',
        ownerCanFix: false,
      },
      {
        cause: 'Hinge weld cracked or fixing pulled',
        likelihood: 'common',
        howToTell:
          'Visible cracking at the weld, a hinge plate standing proud of the post, or bolts that have elongated their holes. Sudden worsening after years of slow decline.',
        fix: 'Re-welding or re-fixing, with the load path checked. A cracked hinge weld on a heavy leaf is the fault we treat most urgently on this page.',
        ownerCanFix: false,
      },
      {
        cause: 'Gate infill added without upgrading the hardware',
        likelihood: 'less common',
        howToTell:
          'The sag appeared after privacy slats, sheet metal or timber infill was added. The gate became substantially heavier and more wind-loaded than the hinges and operator were chosen for.',
        fix: 'Upgrading hinges and, often, the operator to match the gate as it now is — this is a specification problem rather than a wear problem. If the sag appeared after slats or sheeting went on, taking that infill back off relieves the load immediately and stops the hinges getting worse while you decide. That is worth doing yourself today rather than waiting on us.',
        ownerCanFix: true,
      },
    ],

    checkFirst: [
      {
        step: 'Look for the scrape arc',
        body: 'A curved scuff on the driveway under the gate is proof that it is grounding, and where the arc starts and ends tells you whether the gate has dropped overall or the slab has risen at one point.',
      },
      {
        step: 'Check the gap along the closing edge',
        body: 'Stand at the latch side with the gate closed. A gap that is even top to bottom is a gate that has dropped evenly; one that is wider at the top means the post is leaning. That single observation splits the two most common causes.',
      },
      {
        step: 'Test for play at the hinges',
        body: 'With the gate closed, lift the free end slightly. Movement at the hinge means worn pins or bushings. Any visible crack at a hinge weld should be treated as urgent — stop using the gate and call.',
      },
      {
        step: 'Measure the frame diagonals',
        body: 'Corner to corner, both ways. A meaningful difference means the frame has racked and needs bracing as well as re-squaring, which changes the repair.',
      },
    ],

    doNot: [
      'Do not fit a stronger operator to overcome a sagging gate. You are loading hinges and a post that are already failing, and a heavy leaf coming down causes serious injuries.',
      'Do not prop the gate with a wheel or castor as a permanent fix unless it was designed for one — it changes the load path and hides the real fault.',
      'Do not keep operating a gate with a cracked hinge weld.',
      'Do not turn up the operator’s force setting to push a dragging gate through its arc.',
    ],

    outlook: {
      summary:
        'Caught at the "it scrapes a little" stage this is straightforward and inexpensive — hinge work, a brace, sometimes a post. The costs escalate sharply if it is left, because the operator is being damaged on every cycle and the hinges are heading toward a failure that is genuinely dangerous with a heavy leaf.',
      usuallyRepair: [
        'Hinge pin and bushing replacement, and hinge rebuilds',
        'Re-squaring a racked frame and fitting anti-sag bracing',
        'Resetting or re-footing a leaning post',
        'Adjusting gate height where the slab has moved',
      ],
      sometimesReplace: [
        'A frame distorted past what bracing can hold',
        'Hinges and operator both, where infill has made the gate far heavier than the original specification',
        'An operator whose gearbox or arm has been damaged by months of lifting a sagging leaf',
      ],
    },

    dfw: [
      {
        heading: 'Clay soil makes this the region’s signature gate fault',
        body: [
          'Most of Dallas–Fort Worth sits on Blackland Prairie clay, which swells when wet and shrinks hard through a Texas summer. A gate post set in that ground moves with it — slightly, seasonally, and always in the same direction over years. A twelve-foot leaf amplifies a fraction of a degree at the post into inches at the latch.',
          'The same movement lifts and drops driveway slabs, so the ground the gate sweeps over is not static either. This is why sagging and dragging gates are more common here than in regions with stable soil, and why we check the post and the slab before touching the gate: re-squaring a leaf on a post that is still moving buys a season.',
        ],
      },
      {
        heading: 'Heavy ornamental ironwork makes it worse',
        body: [
          'The established parts of this market — the Park Cities, Southlake, the older estate streets — have a lot of heavy ornamental iron gates, often decades old and chosen for appearance rather than for weight. Those leaves put substantial load through their hinges every day, and when the post beneath them moves seasonally, sag arrives faster than it would on a light aluminium gate.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate scrapes the driveway. Can I just raise it?',
        a: 'Sometimes there is adjustment available, but it is worth knowing why it dropped first. If a hinge is worn or a post is moving, raising the gate hides the fault while it continues to get worse — and the operator carries on lifting the leaf on every cycle.',
      },
      {
        q: 'Would a stronger operator solve it?',
        a: 'No, and it is the most expensive mistake we see. A stronger operator forces a sagging gate through its arc by putting more load into hinges and a post that are already failing. When they give way a heavy leaf comes down, which is a serious injury risk. Fixing the sag is both cheaper and safer.',
      },
      {
        q: 'How do I tell whether it is the hinges or the post?',
        a: 'Look at the gap along the closing edge with the gate shut. An even gap top to bottom usually means the gate has dropped on its hinges. A gap wider at the top means the post is leaning. It is a ten-second check and it points at completely different repairs.',
      },
      {
        q: 'The gate was fine for ten years and suddenly started dragging. Why now?',
        a: 'Because the change was gradual and a threshold was crossed. Hinge wear and seasonal post movement accumulate invisibly until the leaf finally touches the ground, and then it seems sudden. In this region a hard dry summer moving a post is the most common trigger.',
      },
      {
        q: 'Is it safe to keep using it?',
        a: 'If it is only lightly scraping, briefly — but it is doing damage to the operator every cycle. If you can see a crack at a hinge weld, or there is noticeable play when you lift the free end, stop using it and call. A heavy leaf held by a failing hinge is the one case on this page we would call genuinely dangerous.',
      },
    ],

    relatedServices: ['swing-gate-repair', 'iron-gate-repair', 'automatic-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-post-leaning', 'swing-gate-stuck', 'gate-stops-halfway'],
    sources: [
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
      {
        label: 'USDA NRCS soil survey — Blackland Prairie expansive clay characteristics',
        url: 'https://websoilsurvey.nrcs.usda.gov/',
      },
    ],
    toConfirm: [
      'Whether Shield fabricates and welds hinge repairs in house, which the iron-gate-repair service implies.',
      'Whether anti-sag bracing or cable kits are fitted as standard on re-squared gates.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-post-leaning',
    label: 'Gate post leaning',
    searchedAs: ['Gate Post Leaning'],
    applies: 'both',
    urgency: 'safety',
    urgencyNote:
      'A leaning post is a structural fault carrying a heavy gate. If it has moved noticeably or recently, stop using the gate until it has been looked at.',

    title: 'Gate Post Leaning — Why, and How It Is Fixed | DFW',
    metaDescription:
      'A leaning gate post is usually a footing problem, not a post problem. How clay soil causes it, what a proper re-footing involves, and why packing it fails.',
    h1: 'Gate Post Leaning',
    heroIntro:
      'A leaning post is the fault underneath several others on this site. It causes sagging gates, drifting limits and gates that catch — and it is the one that cannot be corrected at the operator.',
    heroPoints: [
      'We dig and look at the footing rather than guessing from above ground',
      'Re-footed to a depth and diameter matched to the gate’s actual load',
      'Straight answer on whether a post can be reset or has to be replaced',
    ],

    whatIsHappening: [
      {
        heading: 'The post is not usually the failure — the footing is',
        body: [
          'A gate post carries a large turning force. The weight of the leaf acts at a distance, so the post is constantly being levered over, and everything resisting that lever is below ground: the concrete footing and the soil around it. When a post leans, the steel has almost never bent. The footing has rotated in the ground.',
          'That distinction determines the repair. Straightening the post above ground, packing the gap, or welding a brace onto it addresses none of the cause, because the cause is that the footing is no longer holding. The fix has to happen below grade.',
        ],
      },
      {
        heading: 'Why footings fail here specifically',
        body: [
          'Three things undermine a gate post footing. The first is an undersized footing — too shallow or too narrow for the leaf it carries, which is common where a heavier gate was fitted later or where the original installer sized for a lighter design. The second is water: runoff that collects at the post softens the soil around the footing and lets it rotate.',
          'The third, and the dominant one in this region, is expansive clay. Blackland Prairie clay swells when wet and shrinks when dry, and that cycle works on a footing year after year, opening a gap the footing then settles into. A post that leans a little more each summer is almost always describing that cycle rather than a single event.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Footing undersized for the gate’s weight and leverage',
        likelihood: 'most common',
        howToTell:
          'The lean has developed steadily since installation rather than after an event. Often found where a heavier leaf, or privacy infill, was added after the posts were set.',
        fix: 'Re-footing to a depth and diameter matched to the real load. This is the repair that lasts, and the one worth paying for once rather than three times.',
        ownerCanFix: false,
      },
      {
        cause: 'Expansive clay cycling around the footing',
        likelihood: 'most common',
        howToTell:
          'The lean worsens seasonally, noticeably after a hard dry summer, and may partially recover in a wet spring. Look for a gap opening between the post and the soil.',
        fix: 'Re-footing deeper, below the most active zone, and improving drainage away from the post. Both, because either alone tends to be temporary here.',
        ownerCanFix: false,
      },
      {
        cause: 'Water pooling at the post base',
        likelihood: 'common',
        howToTell:
          'Standing water or a persistently damp patch at the post after rain, or a downspout, irrigation head or driveway fall directing water there.',
        fix: 'Re-grading or redirecting the water, plus re-footing. Fixing the footing without fixing the water repeats the failure.',
        ownerCanFix: true,
      },
      {
        cause: 'Vehicle impact',
        likelihood: 'common',
        howToTell:
          'Sudden lean after a known or suspected strike, often with visible damage at bumper height. The footing may have cracked rather than rotated.',
        fix: 'Excavating to assess the footing, then re-setting or replacing. Worth checking the hinges at the same time, which take the shock of an impact too.',
        ownerCanFix: false,
      },
      {
        cause: 'Corrosion at grade',
        likelihood: 'common',
        howToTell:
          'Look at the post right where it enters the concrete — that is where water sits and steel rusts. Flaking, swelling or a visibly reduced section there means the post itself is compromised.',
        fix: 'Post replacement rather than re-setting. A post rusted through at grade cannot be straightened back into service safely.',
        ownerCanFix: false,
      },
      {
        cause: 'Footing never cured or bonded properly',
        likelihood: 'less common',
        howToTell:
          'An early failure, within a year or two of installation, with the post moving as a unit with a small, intact lump of concrete. Usually a workmanship issue rather than a soil one.',
        fix: 'Re-footing properly. If the installation is recent, it is worth raising with whoever did it before paying anyone else.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Check the post against a level',
        body: 'Hold a level against the post in both directions and note how far out it is. Photograph it. This gives us something to compare against next season and establishes whether it is still moving.',
      },
      {
        step: 'Look at the ground around the base',
        body: 'A gap between post and soil, a crack radiating through the concrete, or a damp patch that never dries all point at the cause. This is the most informative thirty seconds you can spend.',
      },
      {
        step: 'Find where water goes',
        body: 'Watch during rain if you can, or look for staining and silt trails. A downspout, an irrigation head or a driveway that falls toward the post is often the whole explanation.',
      },
      {
        step: 'Check the post at grade for corrosion',
        body: 'Right at the concrete line. Flaking, swelling or thinning there means the post is compromised and re-setting it would be unsafe — it needs replacing.',
      },
    ],

    doNot: [
      'Do not pack the gap around the post with gravel, soil or concrete from above. It does not restore the footing and it hides the movement.',
      'Do not weld a brace to a leaning post as a permanent fix — the load path still ends at a footing that is not holding.',
      'Do not keep operating a gate on a post that has moved recently or noticeably.',
      'Do not re-hang a gate to compensate for the lean; you will chase it every season.',
    ],

    outlook: {
      summary:
        'This is the least glamorous and most fundamental repair on this site. Done properly — excavated, re-footed to the right size, drainage corrected — it is permanent. Done cheaply from above ground, it comes back every season, and everything hung on it keeps failing in ways that get blamed on the operator.',
      usuallyRepair: [
        'Re-footing to a depth and diameter matched to the load',
        'Drainage correction around the post base',
        'Re-setting a post whose steel is sound',
        'Re-squaring and re-hanging the gate afterwards',
      ],
      sometimesReplace: [
        'A post corroded through at grade',
        'A post bent by vehicle impact',
        'Posts on both sides, where one has failed because both were undersized for the gate',
      ],
    },

    dfw: [
      {
        heading: 'The single most common structural fault in this metroplex',
        body: [
          'Blackland Prairie clay underlies most of Dallas–Fort Worth, and it is among the more expansive soils in the country — it swells measurably when wet and shrinks hard in a Texas summer. A gate post footing sits in that soil being levered by the gate, and the annual wet-dry cycle works it loose a little at a time.',
          'The practical consequence is that gate posts here need deeper and wider footings than the same gate would need on stable ground, and that a footing sized by a generic specification is frequently undersized for this region. It is also why we would rather re-foot properly once than reset the same post every three years, and why drainage away from the post matters as much as the concrete.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My gate post is leaning. Can it be straightened?',
        a: 'Usually yes, but not from above ground. The lean is the footing rotating in the soil, so a durable repair means excavating and re-footing to a size matched to the gate’s weight and leverage. Straightening the post and packing the gap looks fixed and moves again within a season or two.',
      },
      {
        q: 'Why did it start leaning after all these years?',
        a: 'Almost always the soil. Expansive clay swells and shrinks each year, and that cycle slowly works a footing loose — so the movement accumulates invisibly and then becomes obvious. A particularly dry summer is the usual trigger for a post that had seemed stable.',
      },
      {
        q: 'Does the whole gate have to come off to fix it?',
        a: 'Generally the leaf is removed or supported while the post is re-footed, yes. That is also the sensible moment to check the hinges, because a leaning post has been loading them unevenly for however long it has been moving.',
      },
      {
        q: 'Can I just add a brace or a wheel to support it?',
        a: 'Those are ways of living with it rather than fixing it. A brace still transfers load into the same footing, and a support wheel changes the load path and usually creates new problems. On a heavy gate we would not recommend either as a permanent answer.',
      },
      {
        q: 'How deep should a gate post footing be?',
        a: 'It depends on the gate’s weight, its length and the soil, which is why a single number would be misleading. What we can say is that in this region’s clay, footings need to be deeper and wider than a generic specification suggests, and that an undersized footing is the most common reason we are called back to a post somebody else reset.',
      },
    ],

    relatedServices: ['swing-gate-repair', 'iron-gate-repair', 'gate-installation', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-sagging-or-dragging', 'swing-gate-stuck', 'gate-stops-halfway'],
    sources: [
      {
        label: 'USDA NRCS Web Soil Survey — Blackland Prairie expansive clay characteristics',
        url: 'https://websoilsurvey.nrcs.usda.gov/',
      },
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
    ],
    toConfirm: [
      'Whether Shield performs post re-footing and concrete work in house or subcontracts it.',
      'Typical footing depths Shield specifies for common gate sizes in Blackland clay, so this page can give real figures.',
    ],
    indexable: true,
  },

  {
    slug: 'swing-gate-stuck',
    label: 'Swing gate stuck',
    searchedAs: ['Swing Gate Stuck'],
    applies: 'swing',
    urgency: 'access',
    urgencyNote:
      'Before anything else, release the operator and see whether the gate moves by hand — it separates a stuck gate from a stuck operator in about ten seconds.',

    title: 'Swing Gate Stuck — Causes and Fixes | DFW Repair',
    metaDescription:
      'A swing gate that will not move is either mechanically jammed or electrically dead. One ten-second test tells you which, and it changes the whole repair.',
    h1: 'Swing Gate Stuck',
    heroIntro:
      'There is one test that matters here, and it takes ten seconds: release the operator and try to swing the gate by hand. What happens next splits this fault into two completely different repairs.',
    heroPoints: [
      'We separate a jammed gate from a dead operator before opening anything',
      'Hinges, posts and ground clearance checked as a system, not one at a time',
      'Arm and bracket damage assessed honestly — forcing a jammed gate bends them',
    ],

    whatIsHappening: [
      {
        heading: 'Two entirely different faults with one description',
        body: [
          'When an owner says the gate is stuck, they mean it is not moving. But a gate that is mechanically jammed and an operator that is electrically dead produce exactly the same observation from the driveway, and they have nothing else in common — different parts, different costs, different urgency.',
          'The manual release settles it. With the operator disconnected, a healthy gate swings freely with one hand through its whole arc. If it does, the gate is fine and the fault is in the operator or its power. If it fights you, the gate itself is jammed and no electrical work will help.',
        ],
      },
      {
        heading: 'What actually jams a swing gate',
        body: [
          'Swing gates jam for a small number of reasons, and most of them are about geometry rather than parts. The leaf grounds on a driveway that has heaved. A hinge has seized or worn so the leaf no longer hangs true. A post has leaned enough that the gate binds against its stop or its partner leaf. Something has grown or been placed in the arc.',
          'The one that catches people out is the operator arm itself. A linear or articulated arm has a defined geometry, and if a gate is forced while the arm is attached — by wind, by a vehicle, or by someone pushing a gate whose operator has not been released — the arm or its bracket bends. After that the gate binds at a specific point in its arc even though the gate and hinges are sound.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Gate grounding on the driveway',
        likelihood: 'most common',
        howToTell:
          'Look for a scrape arc on the surface. The gate moves freely for part of its sweep and then meets the ground. Common where a slab has heaved over clay or the gate has sagged.',
        fix: 'Correcting the sag at the hinge or post, or adjusting gate height where there is room. If the slab has risen, that may need addressing instead.',
        ownerCanFix: false,
      },
      {
        cause: 'Seized or worn hinge',
        likelihood: 'most common',
        howToTell:
          'The gate is stiff throughout its travel rather than at one point, and there may be a creak or a dry rasp. Lift the free end: play at the hinge means wear, no movement at all with stiffness means seizure.',
        fix: 'Hinge service or replacement. A seized hinge that is merely dry can sometimes be freed and lubricated; a worn or corroded one gets replaced.',
        ownerCanFix: false,
      },
      {
        cause: 'Obstruction in the arc',
        likelihood: 'common',
        howToTell:
          'It moves freely until a specific point. Walk the full sweep with the operator released and look for a grown shrub, a parked vehicle, a bin, a stone, or debris after a storm.',
        fix: 'Clearing it. Frequently free, and worth checking before anything else — this is the one cause an owner resolves most often without us.',
        ownerCanFix: true,
      },
      {
        cause: 'Bent operator arm or bracket',
        likelihood: 'common',
        howToTell:
          'The gate swings freely by hand with the operator released, but binds at a consistent point when connected. Look along the arm for a bend, and at the bracket welds for cracking.',
        fix: 'Arm or bracket replacement. Usually the consequence of the gate having been forced at some point — wind, a vehicle, or being pushed without releasing the operator.',
        ownerCanFix: false,
      },
      {
        cause: 'Post leaning so the gate binds',
        likelihood: 'common',
        howToTell:
          'Check the post with a level and look at the gap along the closing edge. A gate binding against its stop or against the other leaf, with a post visibly out of plumb, points here.',
        fix: 'Re-footing or resetting the post, then re-hanging the gate. Adjusting the gate alone gets chased again every season.',
        ownerCanFix: false,
      },
      {
        cause: 'Ice or debris at the hinge or stop',
        likelihood: 'less common',
        howToTell:
          'Seasonal and short-lived. North Texas ice storms are infrequent but they do jam gates, and a hinge packed with leaf litter or mud wash behaves similarly.',
        fix: 'Clearing and drying, then checking the hinge for damage caused by attempts to force it while frozen.',
        ownerCanFix: true,
      },
    ],

    checkFirst: [
      {
        step: 'Release the operator and push the gate by hand',
        body: 'The single most useful test on this page. Free movement means the gate is fine and the fault is electrical; resistance means the gate is jammed and no electrical work will help. Ten seconds, and it halves the diagnosis.',
      },
      {
        step: 'Walk the full arc',
        body: 'With the operator released, swing the gate through its whole sweep. Note exactly where it binds — a consistent point suggests an obstruction, a bent arm or a ground strike; stiffness throughout suggests a hinge.',
      },
      {
        step: 'Look for the scrape arc and check the post',
        body: 'A curved scuff on the driveway means the gate is grounding. A post out of plumb means the geometry has shifted. Both are visible without tools and both change the repair.',
      },
      {
        step: 'Inspect the operator arm',
        body: 'Sight along it for a bend, and look at the bracket where it meets the gate for cracked welds or elongated bolt holes. A bent arm is a common and easily missed cause of a gate that is fine by hand.',
      },
    ],

    doNot: [
      'Do not force a gate that is jammed with the operator still connected. That is how arms and brackets get bent, turning a hinge job into two repairs.',
      'Do not drive a vehicle against a stuck gate.',
      'Do not repeatedly trigger the operator against a jam — you are driving a gearbox into a solid object.',
      'Do not lever a frozen hinge. Wait for it to thaw or apply warmth; forcing frozen steel damages it.',
    ],

    outlook: {
      summary:
        'Most jammed swing gates come down to hinges, ground clearance or an obstruction, and all three are ordinary repairs. The cost rises when the gate has been forced, because a bent operator arm or a cracked bracket is then added to whatever jammed it in the first place. The manual-release test at the start is what keeps this cheap.',
      usuallyRepair: [
        'Clearing obstructions in the arc',
        'Hinge service, freeing and replacement',
        'Correcting sag and ground clearance',
        'Operator arm and bracket replacement',
        'Post resetting and re-hanging',
      ],
      sometimesReplace: [
        'An operator whose gearbox has been damaged by repeated attempts against a jam',
        'A gate frame distorted by being forced',
      ],
    },

    dfw: [
      {
        heading: 'Heaving driveways and seasonal binding',
        body: [
          'The most common cause of a swing gate that suddenly starts binding in this metroplex is ground movement. Blackland clay lifts and drops driveway slabs seasonally, so the clearance a gate had in spring may be gone by late summer, and the gate begins grounding partway through its arc. It reads as a gate fault and it began under the concrete.',
          'Wind is the second local factor. The straight-line winds off North Texas storm lines catch a solid gate leaf like a sail and can force it against its stops or past them while the operator arm is attached — which is where most bent arms in this region come from. A gate that jammed during or right after a storm deserves a look at the arm before anything else.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My swing gate will not move at all. Where do I start?',
        a: 'Release the operator and try to swing the gate by hand. If it moves freely, the gate is fine and the fault is electrical — power, board or motor. If it resists, the gate is mechanically jammed and the operator is innocent. That one test decides which half of the system to look at.',
      },
      {
        q: 'It swings fine by hand but the operator cannot move it. Why?',
        a: 'Most often a bent operator arm or bracket, which binds at a specific point in the arc even though the gate is sound. The other possibility is that the operator itself is failing — a capacitor, gearbox or board. Both are diagnosable on site, and the hand test has already told us the gate is not the problem.',
      },
      {
        q: 'The gate jammed during a storm. What likely happened?',
        a: 'Wind is the usual answer. A solid leaf acts as a sail, and straight-line winds can force it against or past its stops while the arm is still attached, bending the arm or cracking a bracket. Debris in the arc is the other common storm cause. Both are repairable, and neither is the operator’s fault.',
      },
      {
        q: 'Can I push it open if I need to get out?',
        a: 'Yes, but release the operator first — every unit has a manual release, usually a key or lever on the housing. Pushing a gate with the operator still connected is what bends arms and brackets. If you are not sure where yours is, call and we will talk you through it for your model.',
      },
      {
        q: 'It has started catching at the same spot as the weather got hot. Is that related?',
        a: 'Very likely. Clay soil shrinks through a dry Texas summer, driveways and posts move with it, and a gate that cleared the ground in spring starts grounding by August. It is one of the most seasonal complaints we get, and it usually points at ground clearance rather than at anything inside the operator.',
      },
    ],

    relatedServices: ['swing-gate-repair', 'automatic-gate-repair', 'iron-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['gate-sagging-or-dragging', 'gate-post-leaning', 'automatic-gate-not-working'],
    sources: [
      {
        label: 'LiftMaster swing gate operator manuals — arm geometry and manual release procedures',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
    ],
    toConfirm: [
      'Whether replacement arms are stocked for the operator brands Shield most commonly services.',
    ],
    indexable: true,
  },
]
