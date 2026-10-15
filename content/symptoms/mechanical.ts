import type { SymptomPage } from './types'

/**
 * Faults in the gate rather than the operator.
 *
 * Sliding-gate-stuck, gate-track-damaged and gate-hinge-broken were split out
 * of off-track and sagging once it was clear they have different first checks:
 * a stuck slide gate is still on its track and can be tested by hand; damaged
 * track is a repair to the steel and slab; a broken hinge is a sudden failure
 * with a falling-leaf risk, not gradual sag.
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
    searchedAs: ['Sliding Gate Off Track'],
    applies: 'slide',
    urgency: 'safety',
    urgencyNote:
      'A slide gate off its track is unsupported and can fall. Keep people and vehicles away from it and do not try to lift it back on by hand.',

    title: 'Sliding Gate Off Track — Causes and Repair | DFW',
    metaDescription:
      'A slide gate off its track or jammed is usually debris, a failed roller or a bent track. Why forcing it makes it worse, and what a proper repair involves.',
    h1: 'Sliding Gate Off Track',
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
    relatedSymptoms: ['gate-roller-or-wheel-broken', 'gate-track-damaged', 'sliding-gate-stuck', 'gate-chain-broken'],
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
    relatedSymptoms: ['sliding-gate-off-track', 'gate-track-damaged', 'gate-stops-halfway', 'gate-chain-broken'],
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
    searchedAs: ['Gate Sagging', 'Gate Dragging On Ground'],
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
    relatedSymptoms: ['gate-hinge-broken', 'gate-post-leaning', 'swing-gate-stuck', 'gate-stops-halfway'],
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

  {
    slug: 'sliding-gate-stuck',
    label: 'Sliding gate stuck',
    searchedAs: ['Sliding Gate Stuck'],
    applies: 'slide',
    urgency: 'access',
    urgencyNote:
      'A stuck slide gate usually blocks the only way in or out. If it is still sitting on its track, the steps below are safe; if it has dropped off the track or is leaning, stay clear of it and call instead.',

    title: 'Sliding Gate Stuck? How to Tell What Is Holding It | DFW',
    metaDescription:
      'Slide gate stuck and will not move by remote or by hand? How to tell a locked operator, jammed rollers, chain or rack faults and debris apart — safely.',
    h1: 'Sliding Gate Stuck — What Is Holding It',
    heroIntro:
      'A slide gate that will not move is being held by one of three things: the operator, the hardware it rolls on, or something in its path. One test — releasing the operator and trying it by hand — tells you which, and that decides everything that follows.',
    heroPoints: [
      'We separate an operator that will not drive from a gate that will not roll before touching anything',
      'Chain, rack and pinion drives are checked for engagement, not just tension',
      'If the gate is still on its track we keep it there — the repair starts from where it is',
    ],

    whatIsHappening: [
      {
        heading: 'Stuck by remote, or stuck by hand?',
        body: [
          'Owners describe two very different situations as a stuck slide gate. In the first, nothing happens when the remote is pressed, but the gate rolls easily once the operator is released. That is an operator or drive fault, and the gate itself is fine. In the second, the gate will not move even with the operator disconnected. That is a gate fault — rollers, guides, track or an obstruction — and no amount of electrical work will free it.',
          'The test that separates them takes a minute. Use the manual release on your operator, then try to roll the gate a foot in each direction with steady pressure. A healthy slide gate on good rollers moves with one hand. If it fights you, stop and look at what it is fighting against before pushing harder.',
        ],
      },
      {
        heading: 'How a slide gate is driven, and where that drive can jam',
        body: [
          'Most slide gate operators in the region move the gate one of two ways. Many American units — common LiftMaster, DoorKing, Elite and US Automatic slide operators — pull the gate with a roller chain bolted to brackets at each end of the gate and wrapped through idler and drive sprockets inside the operator. Many European designs from FAAC, BFT and Nice drive a toothed gear rack fixed along the gate with a pinion on the operator.',
          'Both can jam the gate even when the motor and rollers are healthy. A chain that has jumped an idler can wedge itself in the operator; a rack whose bolts have worked loose can drop onto the pinion and bind; a bracket that has torn from the gate leaves the operator running and the gate going nowhere. These are inspected visually, which is why a photograph of the operator side of the gate is genuinely useful when you call.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Something in the track or in the gate’s pocket',
        likelihood: 'most common',
        howToTell:
          'The gate rolls part of the way by hand and then stops hard. Look at the track ahead of the wheels and at the space the gate retracts into beside the fence — stones, a fallen branch, a toy, a trash bin or a drift of gravel are all common.',
        fix: 'Clearing it. If gravel or soil keeps arriving in the same place, edging the drive or redirecting run-off stops it recurring.',
        ownerCanFix: true,
      },
      {
        cause: 'Operator still engaged, or release not working',
        likelihood: 'most common',
        howToTell:
          'With the release supposedly operated, the gate will not move at all and you can feel the gearbox resisting. On some chain-driven operators the release is a lever on the gearbox; on others the chain has to be lifted off or disconnected at a bracket. If the release lever moves but nothing changes, the mechanism may be seized.',
        fix: 'Following the correct release procedure for your model usually frees it. A seized release mechanism needs cleaning or replacing, which is a technician job.',
        ownerCanFix: false,
      },
      {
        cause: 'Seized or collapsed wheels',
        likelihood: 'common',
        howToTell:
          'The gate is on its track but drags rather than rolls, often with grinding or a squeal, and you may see a wheel that does not turn as the gate is pushed. Rust streaks on the wheel or track are a common sign.',
        fix: 'Replacing the wheels, as a set where they have all aged together. A gate pushed or driven on a seized wheel wears a flat in the wheel and damages the track.',
        ownerCanFix: false,
      },
      {
        cause: 'Gate bound in its guide rollers',
        likelihood: 'common',
        howToTell:
          'The gate leans or presses hard against one side of the upright guide rollers at the post, and moves more easily if you pull the top slightly away from them. Often follows a post shifting or a guide bracket being knocked.',
        fix: 'Re-adjusting or replacing the guides and, if the post has moved, addressing the post so the gate runs plumb again.',
        ownerCanFix: false,
      },
      {
        cause: 'Chain off its sprockets, or rack out of mesh with the pinion',
        likelihood: 'common',
        howToTell:
          'The gate rolls freely with the operator released but jams or crunches when driven. Look at the operator: a chain that is slack, twisted, or riding up on a sprocket; or a rack that is gapped, sagging or riding on top of the pinion.',
        fix: 'Re-seating and tensioning the chain, or re-fixing and re-spacing the rack along its length. Worn sprockets or stripped rack teeth get replaced, or the fault simply recurs.',
        ownerCanFix: false,
      },
      {
        cause: 'Lock, latch or drop bolt engaged',
        likelihood: 'less common',
        howToTell:
          'The gate will not move at all from the closed position, by remote or by hand. Check for a manual drop bolt, a padlock or chain added by someone, or on commercial entrances an electric lock or maglock that has not released.',
        fix: 'Lifting the bolt or unlocking it frees the gate immediately. An electric lock that will not release is an access-control fault and needs a technician.',
        ownerCanFix: true,
      },
    ],

    checkFirst: [
      {
        step: 'Make sure the gate is still on its track',
        body: 'Look at the bottom of the gate from a safe distance. If any wheel is off the track or the gate is leaning, stop here — the gate is unsupported and should not be pushed. If it is sitting squarely on the track, carry on.',
      },
      {
        step: 'Release the operator and try it by hand',
        body: 'Use the manual release for your model, then push the gate steadily a short way in each direction. Freely rolling means the fault is in the operator or drive; refusing to roll means the gate hardware or an obstruction.',
      },
      {
        step: 'Walk the full length of the track and the pocket',
        body: 'Check the track the wheels run on and the space the gate slides into when open. Remove anything loose you find, keeping hands clear of the gate while anyone else is near the controls.',
      },
      {
        step: 'Photograph the operator side of the gate',
        body: 'A picture of the chain or rack, the brackets at each end and the guide rollers at the post often identifies the fault before a technician arrives, and lets them bring the right parts.',
      },
    ],

    doNot: [
      'Do not push or pull a slide gate that has come off its track or is leaning — it can fall.',
      'Do not use a vehicle to shove a stuck gate open.',
      'Do not put fingers near the chain, sprockets, rack or pinion while anyone could operate the gate.',
      'Do not lubricate the ground track; oil collects grit and accelerates wear on the wheels.',
    ],

    outlook: {
      summary:
        'A stuck slide gate that is still on its track is usually a modest repair: an obstruction, a release, a chain or rack that needs re-seating, or a set of wheels. The costs rise when it has been forced — pushed off the track, a chain snapped by the operator, or a bracket torn from the gate — so it pays to find the cause before the gate is moved hard.',
      usuallyRepair: [
        'Obstructions and drainage feeding debris into the track',
        'Manual release mechanisms',
        'Chain re-seating, tensioning and sprockets',
        'Gear rack re-fixing and re-spacing',
        'Wheels and upright guide rollers',
      ],
      sometimesReplace: [
        'A gear rack with stripped teeth along much of its length',
        'A gate frame bent by being forced while bound',
        'An operator whose gearbox was damaged driving a gate that could not move',
      ],
    },

    dfw: [
      {
        heading: 'Wind-blown debris and long, heavy slide gates',
        body: [
          'Slide gates are common across the region’s acreage properties and commercial yards, often long and heavy, and they sit across driveways that collect whatever the wind and the last downpour brought in. A North Texas storm front can fill a track and a gate pocket with debris in a single afternoon, and a gate that ran perfectly that morning is stuck by the evening.',
          'The other local factor is ground movement. Expansive clay soil shifts posts and slabs seasonally, and a post that moves a fraction pulls the upright guide rollers with it. The gate starts to press against one side of its guides — gradually at first, then enough to stop it — which is why a slide gate can stick in late summer and free itself again after the autumn rains.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My slide gate will not open with the remote. Can I push it open?',
        a: 'If it is still sitting squarely on its track, yes — use the manual release first, then push steadily. If it rolls freely, the fault is in the operator and you can leave the gate open or closed by hand until it is repaired. If it will not roll, do not force it; something is holding it and forcing it usually causes more damage.',
      },
      {
        q: 'The gate rolls fine by hand but jams when the motor drives it. Why?',
        a: 'The drive is out of engagement. On chain-driven operators the chain may have jumped a sprocket or lost tension; on rack-driven operators the rack may have loosened and dropped onto the pinion. Both are visible from the operator side and both are usually short repairs, provided the gate has not been forced.',
      },
      {
        q: 'Is a stuck slide gate the same as one that is off its track?',
        a: 'No, and the difference matters for safety. A gate still on its track is supported and can be checked carefully by hand. A gate that has come off its track is unsupported, can fall, and should be left alone until it is re-seated properly.',
      },
      {
        q: 'It sticks in summer and frees up after rain. What is going on?',
        a: 'Most likely ground movement. Clay soil shrinks in a dry summer and swells after rain, moving the posts and slab slightly. That can push the gate against its guide rollers or lift part of the track, and the bind comes and goes with the weather. The repair is to the guides, track or post rather than the operator.',
      },
    ],

    relatedServices: ['sliding-gate-repair', 'automatic-gate-repair', 'gate-motor-repair'],
    relatedSymptoms: ['sliding-gate-off-track', 'gate-roller-or-wheel-broken', 'gate-chain-broken', 'gate-track-damaged'],
    sources: [
      {
        label: 'DoorKing slide gate operator manuals — chain installation and manual release',
        url: 'https://www.doorking.com/gate-operators',
      },
      {
        label: 'FAAC sliding gate operator manuals — gear rack installation and pinion clearance',
        url: 'https://www.faacusa.com/',
      },
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
    ],
    toConfirm: [
      'Whether Shield services rack-and-pinion slide operators as well as chain-driven ones, as this page implies.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-track-damaged',
    label: 'Gate track damaged',
    searchedAs: ['Gate Track Damaged'],
    applies: 'slide',
    urgency: 'safety',
    urgencyNote:
      'A damaged track lets the gate wheels climb, drop or wander, and a slide gate that leaves its track can fall. If the gate rocks, lifts or jolts as it passes the damage, stop using it until it has been looked at.',

    title: 'Gate Track Damaged — Repair or Replace? | DFW',
    metaDescription:
      'Bent, crushed, worn or loose slide gate track? How each kind of damage shows, what can be straightened or re-anchored, and when a section needs replacing.',
    h1: 'Gate Track Damaged — What Can Be Saved',
    heroIntro:
      'The ground track under a slide gate is a strip of steel taking the whole weight of the gate on a line no wider than a finger. When it is bent, worn or loose, the wheels stop running true, and everything above it — wheels, operator, gate frame — starts to suffer.',
    heroPoints: [
      'We identify the track profile and wheel groove before choosing a repair, so the two still match afterwards',
      'Bent sections are cut out and replaced where straightening would leave a weak spot',
      'Anchors and the concrete under the track are checked, not just the steel you can see',
    ],

    whatIsHappening: [
      {
        heading: 'What a gate track actually is',
        body: [
          'Most residential slide gates run on V-groove wheels sitting on an inverted angle iron — a steel angle laid point-up so the wheels ride its ridge. Others use U-groove wheels on round bar or pipe, or a flat-bottomed channel set flush into the drive. The track is either bolted to the concrete with anchors, welded to plates set in the slab, or cast into the concrete itself.',
          'Whatever the type, the job is the same: keep the gate wheels on a straight, level line so the gate rolls without climbing or dropping. The wheel groove and the track profile are a matched pair. A wheel running on the wrong profile, or on a ridge that has been worn flat, rides loose and can step off.',
        ],
      },
      {
        heading: 'How tracks get damaged',
        body: [
          'The commonest damage is from vehicles. A low steel ridge across a driveway is crossed by every car, and occasionally by something much heavier — a concrete truck, a removal van, a skid steer, a trash truck turning across it. One heavy wheel can flatten or kink a section that cars have crossed for years without harm.',
          'The rest is slower. Wheels wear the ridge of a V-track gradually; rust attacks the base where water sits; anchor bolts loosen as the slab expands and contracts; and the concrete under the track cracks, leaving a length of steel unsupported. Each of these shows itself first as a bump, a rock or a change in sound at one point in the gate’s travel.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Section bent or crushed by a vehicle',
        likelihood: 'most common',
        howToTell:
          'Sight along the track from one end at ground level. A kink, a flattened stretch or a section pushed sideways is usually obvious. The gate jolts, lifts or grinds at exactly that point.',
        fix: 'Straightening only where the steel has bent cleanly and the profile is intact. A crushed or kinked ridge is cut out and a new length welded or bolted in, aligned with the track either side.',
        ownerCanFix: false,
      },
      {
        cause: 'Track ridge worn flat or sharp',
        likelihood: 'common',
        howToTell:
          'On angle-iron track, the point that was once a crisp ridge has worn into a flat or a knife edge, and the wheels rock from side to side. The wheel grooves may also be worn into a matching shape.',
        fix: 'Replacing the worn run of track, and usually the wheels with it, so the new profile and the grooves match. Replacing only one of the pair gives a short life.',
        ownerCanFix: false,
      },
      {
        cause: 'Anchors loose or pulled from the concrete',
        likelihood: 'common',
        howToTell:
          'The track moves or lifts when the gate passes over it, or you can see anchor bolts standing proud or spinning in their holes. Sometimes there is a click as each wheel passes a loose section.',
        fix: 'Re-anchoring into sound concrete with new fixings, offset from the old holes. Where the concrete around the anchors has broken up, that needs repairing first.',
        ownerCanFix: false,
      },
      {
        cause: 'Nuts on a bolt-down track backed off',
        likelihood: 'common',
        howToTell:
          'The anchors themselves are firm in the concrete, but the nuts holding the track down have loosened and the track lifts slightly under the wheels. Check each fixing with the gate at rest.',
        fix: 'Tightening the nuts snugly with a wrench, with the gate stationary and the operator released. If an anchor spins or the concrete crumbles as you tighten, stop — that is the previous cause and needs proper re-anchoring.',
        ownerCanFix: true,
      },
      {
        cause: 'Concrete under the track cracked, settled or heaved',
        likelihood: 'common',
        howToTell:
          'A crack in the driveway crosses the track line, or the track is visibly higher or lower on one side of the crack. The steel may be intact but no longer level, and the gate climbs or drops at that point.',
        fix: 'Re-setting the track level, which often means cutting out and re-pouring a strip of concrete under it. On ground that keeps moving, a cantilever gate with no ground track is worth discussing.',
        ownerCanFix: false,
      },
      {
        cause: 'Rust at the base or at joints between sections',
        likelihood: 'less common',
        howToTell:
          'Flaking or holed steel where water sits against the track, or a step where two lengths of track meet and no longer line up. The wheels bump at the joint on every pass.',
        fix: 'Cutting out the corroded length and replacing it, or re-aligning and joining the sections. Drainage at low spots is addressed so the new section does not rust the same way.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Sight along the track at ground level',
        body: 'Crouch at one end and look along the track towards the other. Bends, flattened sections, steps at joints and places where the track rises or dips stand out clearly from this angle, much more than from standing height.',
      },
      {
        step: 'Watch the wheels as the gate passes the damage',
        body: 'From a safe distance and to one side, watch the gate roll over the suspect point. A wheel that lifts, drops, rocks sideways or slides off the ridge tells you the damage is affecting the gate now, and the gate should be taken out of use.',
      },
      {
        step: 'Check the fixings with the gate stopped',
        body: 'With the operator released and the gate still, look at each anchor and nut along the track. Note any that are loose, spinning or missing, and where the concrete around them is cracked.',
      },
      {
        step: 'Keep heavy vehicles off the track',
        body: 'Until it is repaired, ask delivery and service drivers not to cross the track with heavy wheels, or to cross it square rather than turning on it. That stops one bent section becoming three.',
      },
    ],

    doNot: [
      'Do not hammer a bent track back into line with the gate on it.',
      'Do not shim or pack under a bend and carry on using the gate — the load goes straight into the wheels.',
      'Do not keep running a gate whose wheels lift or slide off the ridge at the damaged point; that is how a gate comes off its track.',
      'Do not try to lift the gate to inspect under it. Slide gates are heavy and unstable once lifted.',
    ],

    outlook: {
      summary:
        'Damaged track is very often repairable in sections. Cleanly bent steel can sometimes be straightened, crushed or worn lengths replaced, and loose track re-anchored, without replacing the whole run. A full new track, and sometimes a strip of new concrete, is needed when the damage is widespread or the slab underneath keeps moving.',
      usuallyRepair: [
        'Cutting out and replacing damaged lengths of track',
        'Re-anchoring loose track into sound concrete',
        'Re-aligning joints between sections',
        'Replacing wheels to match a new track profile',
      ],
      sometimesReplace: [
        'An entire track run worn or rusted along most of its length',
        'Track set in a slab that has broken up, where the concrete has to be re-poured',
        'A ground-track installation on actively moving ground, where a cantilever design is the durable answer',
      ],
    },

    dfw: [
      {
        heading: 'Construction traffic and moving slabs',
        body: [
          'The metroplex has been building continuously for decades, and new houses, pools, additions and landscaping all bring heavy vehicles through gated drives. Concrete trucks, dump trucks and skid steers are the commonest cause of crushed track we see described, and it is worth telling contractors where your track is before they arrive.',
          'Under the track, the region’s expansive clay does the rest. Driveway slabs crack along the lines the soil moves them, and a crack across a track line lets one side rise or settle relative to the other. That is why re-levelling, and occasionally re-pouring a strip of concrete under the track, comes up so often here.',
        ],
      },
    ],

    faqs: [
      {
        q: 'Can a bent gate track be straightened?',
        a: 'Sometimes. A section that has bent cleanly without crushing its profile can often be brought back into line. A section that has been flattened, kinked or cracked is better cut out and replaced, because straightened steel that has been crushed stays weak and the wheels will find the weak spot.',
      },
      {
        q: 'Does the whole track have to be replaced?',
        a: 'Usually not. Most damage is local — one crushed section, a few loose anchors, a rusty low spot — and those lengths can be replaced on their own. A whole new run makes sense when the profile is worn along most of its length or the slab under it is breaking up.',
      },
      {
        q: 'Do the wheels need replacing too?',
        a: 'If the track profile is changing, or the old wheels have worn to match a damaged ridge, yes. The wheel groove and the track have to fit each other; a worn wheel on a fresh track or a new wheel on a worn one wears out quickly and rides badly.',
      },
      {
        q: 'Is it safe to use the gate with a damaged track?',
        a: 'Only if the wheels pass the damage without lifting, dropping or rocking. If they do any of those, the gate can step off the track and fall, so take it out of use, open it by hand if you need to, and keep people clear until it is repaired.',
      },
    ],

    relatedServices: ['sliding-gate-repair', 'iron-gate-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['sliding-gate-off-track', 'gate-roller-or-wheel-broken', 'sliding-gate-stuck'],
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
      'Whether Shield cuts and re-pours concrete under a track in house or subcontracts it.',
      'Whether cantilever conversion is offered, since this page mentions it as an option.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-hinge-broken',
    label: 'Gate hinge broken',
    searchedAs: ['Gate Hinge Broken'],
    applies: 'swing',
    urgency: 'safety',
    urgencyNote:
      'A swing gate with a broken hinge is held up by whatever is left — one hinge, the operator arm, or the latch — and none of those is designed to carry it. Stop operating it and keep people and cars out of the area it could fall into.',

    title: 'Gate Hinge Broken? Make It Safe, Then Repair | DFW',
    metaDescription:
      'Swing gate hinge snapped, weld cracked or hinge torn from the post? How to make the gate safe, which hinge types fail how, and what a lasting repair involves.',
    h1: 'Gate Hinge Broken — Making It Safe and Fixing It',
    heroIntro:
      'A broken hinge is not a slow sag; it is a sudden change in what is holding the gate up. The first job is to make sure the leaf cannot fall on anyone. The second is to work out why the hinge failed, because a heavy gate on a replacement hinge fails again if the cause is still there.',
    heroPoints: [
      'We secure the leaf before any hinge work starts, so it cannot drop while being repaired',
      'Hinges are matched to the gate’s weight and width, not to what was there before',
      'The operator arm geometry is checked, because a mis-set arm breaks hinges',
    ],

    whatIsHappening: [
      {
        heading: 'The hinge types on DFW gates, and how each one breaks',
        body: [
          'Welded steel and ornamental iron gates usually hang on weld-on barrel hinges, heavy ball-bearing hinges, or a top bracket with a bottom pivot sitting in a cup. These rarely break in the middle; they break at the weld that joins them to the gate or the post, or the pin wears and shears, or the bearing inside collapses. Wooden and lighter gates hang on bolt-through strap hinges or adjustable J-bolt hinges, which more often tear their fixings out of the post than break outright.',
          'Each failure looks different. A cracked weld lets the leaf drop at one corner and swing out of line. A sheared pin can let the leaf lift off entirely. A collapsed bearing grinds and lets the leaf settle. Fixings pulling from a wooden post leave the hinge hanging loose with the screws or bolts visible. Knowing which you have tells you whether the repair is welding, a part, or a new post.',
        ],
      },
      {
        heading: 'Why automatic gates are hard on hinges',
        body: [
          'A swing gate operator pushes the leaf from a point some distance from the hinge, and every start and stop is a sideways shove the hinges have to resist. If the operator arm is set at the wrong geometry, if there is no positive stop for the gate to close against, or if the gate is allowed to slam to a halt at either end of its travel, the hinges absorb that every cycle.',
          'Add a leaf heavier than the hinges were chosen for — common after privacy panels or decorative infill are added — and a hinge that would have lasted decades on a manual gate fatigues in a few years. That is why a lasting repair looks at the operator and the gate’s weight as well as the broken part.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Weld cracked between hinge and gate or post',
        likelihood: 'most common',
        howToTell:
          'A visible crack, often rust-stained, along the weld where the hinge meets the frame or the post. The leaf has dropped at its free end, and the gap at the latch side has changed suddenly rather than over months.',
        fix: 'Grinding out and re-welding with a proper weld, or fitting a new hinge where the old one is damaged. The welder will often reinforce the joint, since it has already shown it is the weak point.',
        ownerCanFix: false,
      },
      {
        cause: 'Hinge pin worn through or sheared',
        likelihood: 'common',
        howToTell:
          'The two halves of the hinge have separated, or there is so much play that the leaf lifts and drops noticeably when pushed. Metal shavings or a polished, thinned pin are signs it has been wearing for a long time.',
        fix: 'Replacing the hinge as a whole, usually with a heavier or bearing-type hinge rated for the leaf. Replacing only the pin rarely lasts if the barrel is worn as well.',
        ownerCanFix: false,
      },
      {
        cause: 'Ball bearing collapsed inside the hinge',
        likelihood: 'common',
        howToTell:
          'Grinding or a gritty crunch as the gate swings, and a leaf that settles slightly lower than it used to. Heavy-duty bearing hinges fail this way when water and grit get into the bearing.',
        fix: 'Replacing the hinge. Sealed or greaseable bearing hinges are worth the extra cost on heavy leaves in a wet, gritty climate.',
        ownerCanFix: false,
      },
      {
        cause: 'Hinge fixings torn out of a wooden post',
        likelihood: 'common',
        howToTell:
          'On timber gates and posts, the hinge plate hangs away from the post with screws or bolts pulled partly out, and the wood around them is split or soft. Rot at the post is common where it meets the ground.',
        fix: 'Re-fixing into sound wood with through-bolts where the post is healthy, or replacing the post where it has rotted. Longer screws into rotten timber do not hold.',
        ownerCanFix: false,
      },
      {
        cause: 'Hinge nuts or J-bolts loosened',
        likelihood: 'common',
        howToTell:
          'On adjustable or bolt-on hinges the hinge itself is intact but the nuts have worked loose, letting the leaf drop and move. There is no crack and no broken metal, just play at the fixings.',
        fix: 'With the operator released and someone supporting the leaf, tighten the nuts back to snug and re-set the adjustment so the gate hangs level. If a bolt spins without tightening or the fixing is cracked, stop and call.',
        ownerCanFix: true,
      },
      {
        cause: 'Bottom pivot or post cap bracket failed',
        likelihood: 'less common',
        howToTell:
          'Heavy ornamental gates hung on a bottom pivot and top bracket. The leaf has shifted off its pivot cup, the cup is cracked, or the top bracket has bent or torn from the post. The gate may lean outwards at the top.',
        fix: 'Re-seating the leaf on a new pivot and re-fixing or replacing the top bracket. These gates are heavy enough that the leaf is supported mechanically during the work.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Stop the operator and keep everyone clear',
        body: 'Switch the operator off at its power switch or breaker so nobody can trigger it, and keep people, pets and cars away from the area the leaf could fall into. Do this before looking closely at anything.',
      },
      {
        step: 'Look at each hinge from a safe position',
        body: 'Without standing under or beside the leaf, look at the top and bottom hinges. Note whether there is a crack at a weld, a gap between hinge halves, a hinge hanging loose from the post, or bolts pulled out.',
      },
      {
        step: 'Support the leaf only if it is safe to',
        body: 'If the free end has dropped to the ground, it is often best left resting there. If it is hanging and you have solid blocking that can be slid under the free end without putting yourself in the fall path, that takes weight off the remaining hinge. If in doubt, leave it and call.',
      },
      {
        step: 'Photograph the hinge and the whole gate',
        body: 'A close-up of the broken hinge and a wide shot of the gate and operator tell a technician which hinge type, which welding or parts, and how much support the leaf will need — so the visit can be a repair rather than an inspection.',
      },
    ],

    doNot: [
      'Do not run the operator on a gate with a broken hinge, even once to get it closed.',
      'Do not try to lift a heavy leaf back into place by hand. Iron and steel swing gates can weigh several hundred pounds.',
      'Do not stand in the fall path of a leaf hanging from one hinge.',
      'Do not tack the break together with a quick weld or wire and put the gate back in service.',
    ],

    outlook: {
      summary:
        'A broken hinge is normally a repair, not a new gate. Welds can be re-made, hinges replaced with heavier ones, and fixings re-made into sound material. What turns it into a larger job is a gate frame bent by the drop, a post that has rotted or moved, or an operator that kept running after the hinge failed.',
      usuallyRepair: [
        'Re-welding cracked hinge welds',
        'Replacing worn, sheared or collapsed hinges with correctly rated ones',
        'Re-fixing hinges into sound posts with through-bolts',
        'Re-seating gates on new bottom pivots and top brackets',
        'Adjusting operator arm geometry and fitting positive stops',
      ],
      sometimesReplace: [
        'A wooden post that has rotted at the hinge fixings',
        'A gate frame twisted when the leaf dropped',
        'An operator arm or bracket bent by driving a gate that had partly fallen',
      ],
    },

    dfw: [
      {
        heading: 'Heavy iron, hot steel and moving posts',
        body: [
          'Many of the established neighbourhoods across Dallas–Fort Worth have heavy ornamental iron swing gates, some decades old, on hinges chosen when the gate was lighter or was opened by hand. Fitting an operator to an older gate without upgrading its hinges is one of the commonest reasons we see a hinge weld crack years later.',
          'Summer adds its own load. Steel in direct Texas sun expands and contracts every day, and welds that already carry a heavy leaf see that cycle hundreds of times a year. Expansive clay moves posts seasonally as well, which puts the hinges out of line and adds a twist to every swing. None of these breaks a hinge on its own; together they find the weakest weld.',
        ],
      },
    ],

    faqs: [
      {
        q: 'Can a broken gate hinge be welded back on?',
        a: 'Often, yes. On welded steel and iron gates the most common failure is the weld rather than the hinge, and a properly prepared and re-made weld is a sound repair. If the hinge itself is worn or damaged, it is replaced rather than re-welded, usually with a heavier one.',
      },
      {
        q: 'Is a broken hinge the same as a sagging gate?',
        a: 'They are related, but a broken hinge is sudden and more dangerous. Sag usually develops over months from wear or a moving post, and the gate keeps working while it drags. A broken hinge changes what is holding the gate up overnight, and the leaf can fall, so the gate should be taken out of service immediately.',
      },
      {
        q: 'Why did my hinge break when the gate is only a few years old?',
        a: 'Usually because of load the hinge was not chosen for: a heavier leaf than expected, an operator arm set at the wrong geometry, a gate that slams into its stop, or no stop at all. A lasting repair corrects whichever of those applies, or the replacement hinge will follow the original.',
      },
      {
        q: 'Can I still open the gate to get my car out?',
        a: 'Only if it can be done without standing in the leaf’s fall path and without the leaf dropping further. Often the safer option is to leave it where it is and use another exit, or call us and describe it — we would rather talk you through whether it is safe than have you lift a heavy leaf alone.',
      },
    ],

    relatedServices: ['swing-gate-repair', 'iron-gate-repair', 'automatic-gate-repair', 'emergency-gate-repair'],
    relatedSymptoms: ['gate-sagging-or-dragging', 'gate-post-leaning', 'swing-gate-stuck'],
    sources: [
      {
        label: 'ASTM F2200 — automated vehicular gate construction requirements',
        url: 'https://www.astm.org/f2200-21.html',
      },
      {
        label: 'LiftMaster swing gate operator manuals — arm geometry, positive stops and gate hardware requirements',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Whether Shield carries out hinge welding on site in house, which the iron-gate-repair service implies.',
      'Whether temporary securing of a dropped leaf is offered as an emergency call-out.',
    ],
    indexable: true,
  },
]
