import type { SymptomPage } from './types'

/**
 * The ways people tell a gate to open, and how they fail.
 *
 * Both of these pages have to resist collapsing into "check the battery, then
 * call us". What keeps them apart is that a remote is a radio problem — range,
 * interference, pairing, rolling codes — and a keypad is a weather-and-wiring
 * problem sitting outdoors being touched by wet hands. Those are genuinely
 * different diagnoses and the pages are written to show it.
 */
export const accessSymptoms: SymptomPage[] = [
  {
    slug: 'gate-remote-not-working',
    label: 'Gate remote not working',
    searchedAs: ['Gate Remote Not Working'],
    applies: 'both',
    urgency: 'inconvenience',
    urgencyNote:
      'Annoying rather than urgent, and usually the cheapest fault on this site — most are resolved with a battery or a reprogramming rather than a visit.',

    title: 'Gate Remote Not Working — Fix It Yourself First | DFW',
    metaDescription:
      'Gate remote stopped working or only works up close? Battery, pairing, receiver and interference — how to tell which, and what you can fix without a call-out.',
    h1: 'Gate Remote Not Working',
    heroIntro:
      'Most gate remote faults are resolved by the owner in under five minutes, and we would rather tell you how than charge you to do it. The exceptions are worth knowing about too, because one of them is a security issue.',
    heroPoints: [
      'We will talk you through pairing your model over the phone before booking a visit',
      'Range problems get traced to the receiver and aerial, not fixed by buying more remotes',
      'Lost remote? We clear the receiver and re-pair only the ones you still hold',
    ],

    whatIsHappening: [
      {
        heading: 'Three separate things have to work',
        body: [
          'A remote sends a coded radio signal. A receiver at the gate listens on that frequency, checks the code against the ones it has stored, and if it matches tells the board to open. So a failure is in the transmitter, in the radio path between them, or in the receiver and its stored list.',
          'Knowing which of the three is at fault takes one test: does the keypad or wall button still open the gate? If it does, the gate, the board and the motor are all fine and the fault is purely in the remote path. That eliminates everything expensive before you have spent anything.',
        ],
      },
      {
        heading: 'Range loss is a different fault from no response',
        body: [
          'A remote that works from two feet away but not from the road has not failed — its signal has weakened or the receiver’s sensitivity has dropped. The usual causes are a tired battery, a receiver aerial that has been coiled up inside a metal housing during a past repair, or a corroded aerial connection.',
          'A remote that does nothing at any distance is a different story: a dead battery, a remote that has lost its pairing, or a receiver that is not listening. Owners often describe both as "the remote stopped working", so separating them at the start saves a great deal of time.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Remote battery weak or dead',
        likelihood: 'most common',
        howToTell:
          'Classic signature is shrinking range — it works right at the gate but not from where you used to press it. Some remotes have an LED that dims or fails to light. Cold mornings make a marginal battery worse.',
        fix: 'Replace the battery. A few dollars, two minutes, and it resolves the majority of these calls with no visit at all.',
        ownerCanFix: true,
      },
      {
        cause: 'Remote has lost its pairing with the receiver',
        likelihood: 'common',
        howToTell:
          'A fresh battery makes no difference and the keypad still works. Often follows a power interruption, a board replacement, or someone clearing the receiver memory.',
        fix: 'Re-pairing the remote using the model’s learn procedure — usually a button on the receiver and a press on the remote. We will walk you through it on the phone if we can.',
        ownerCanFix: true,
      },
      {
        cause: 'Receiver aerial damaged, corroded, or coiled inside the housing',
        likelihood: 'common',
        howToTell:
          'Every remote has poor range, not just one. The aerial is a thin wire that should hang free, and it is routinely tucked back inside a metal enclosure during an unrelated repair — which kills range immediately.',
        fix: 'Freeing, re-routing or replacing the aerial, and cleaning a corroded connection. Frequently restores full range at no parts cost.',
        ownerCanFix: false,
      },
      {
        cause: 'Failed receiver',
        likelihood: 'common',
        howToTell:
          'No remote works at any range, fresh batteries throughout, keypad and wall button both fine. Sometimes follows a storm, since the receiver is one of the parts a surge finds easily.',
        fix: 'Receiver replacement. On older installations this is often the moment to move from fixed-code to rolling-code equipment.',
        ownerCanFix: false,
      },
      {
        cause: 'Radio interference',
        likelihood: 'less common',
        howToTell:
          'Range that varies by time of day or that changed when something new appeared nearby — a LED floodlight, a new wireless installation, or construction. Interference is usually intermittent rather than absolute.',
        fix: 'Relocating the aerial, or moving to equipment on a less congested frequency. Diagnosing this properly matters, because it is frequently misattributed to a failing remote.',
        ownerCanFix: false,
      },
      {
        cause: 'Remote physically damaged or worn out',
        likelihood: 'less common',
        howToTell:
          'One remote fails while others work. Look for a cracked case, a button that has lost its click, or corrosion inside from a leaked battery — remotes live in cars and pockets and take a beating.',
        fix: 'Replacement remote, paired to the existing receiver. Worth confirming the model is still available before ordering.',
        ownerCanFix: true,
      },
    ],

    checkFirst: [
      {
        step: 'Test another way of opening the gate',
        body: 'Use the keypad, the wall button or the app. If any of them works, the gate itself is fine and the fault is entirely in the remote path — which is the cheap half of the system.',
      },
      {
        step: 'Change the battery',
        body: 'Even if the remote seems to still work. Shrinking range is the commonest symptom of a dying battery and it is the commonest cause of this complaint overall. Note the battery type before going to buy one.',
      },
      {
        step: 'Test whether every remote is affected',
        body: 'One remote failing points at that remote. All of them failing points at the receiver or its aerial. This single distinction determines whether you need a five-dollar battery or a technician.',
      },
      {
        step: 'Look at the receiver aerial',
        body: 'If you can see the receiver, its aerial should be a thin wire hanging free, ideally outside any metal enclosure. Coiled inside a metal box is a common and easily corrected cause of poor range across all remotes.',
      },
    ],

    doNot: [
      'Do not buy additional remotes to solve a range problem. If every remote is short-ranged, the fault is at the receiver and more transmitters will not help.',
      'Do not leave a lost remote unaddressed — anyone holding it has access to your property.',
      'Do not clear the receiver memory unless you have every remote you need to re-pair in front of you.',
      'Do not leave a leaking battery in a remote; the corrosion will destroy the contacts.',
    ],

    outlook: {
      summary:
        'The cheapest fault category on the site. The majority are batteries and pairing, both of which owners can do themselves and we are happy to guide over the phone. The genuine repairs — aerial, receiver — are small parts, and the only expensive scenario is an obsolete receiver, where the upgrade is worth doing on security grounds anyway.',
      usuallyRepair: [
        'Batteries and remote replacement',
        'Re-pairing remotes to an existing receiver',
        'Aerial re-routing, repair and connection cleaning',
        'Receiver replacement',
      ],
      sometimesReplace: [
        'Fixed-code receivers, which should be upgraded to rolling code for security',
        'A remote model no longer manufactured, where the receiver may need changing to get compatible transmitters',
      ],
    },

    dfw: [
      {
        heading: 'Heat, distance and dense neighbourhoods',
        body: [
          'Two regional factors show up in remote faults here. The first is heat: remotes live in cars, and a car interior in a Texas August regularly exceeds 60°C, which is hard on batteries and on the plastic cases that hold them. Battery life in a remote kept in a vehicle is noticeably shorter here than the manufacturer assumes.',
          'The second is distance. On the acreage properties north and west of the metroplex the gate can be hundreds of feet from where you want to press the button, so range margin matters far more than it does on a suburban driveway — and an aerial tucked inside a metal enclosure, which a suburban gate would tolerate, makes a ranch gate unusable.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My remote only works when I am right next to the gate. What is wrong?',
        a: 'Almost always a weak battery — shrinking range is the classic symptom and it costs a few dollars to rule out. If a fresh battery does not restore full range, and the same is true of every remote, then the receiver aerial is the next suspect: it should hang free rather than being coiled inside a metal housing.',
      },
      {
        q: 'I lost a remote. What should I do?',
        a: 'Treat it as a security matter. Whoever holds it can open your gate. The fix is to clear the receiver’s memory and re-pair only the remotes you still have, which invalidates the lost one. Have all your remaining remotes with you when that is done.',
      },
      {
        q: 'Can you program a universal remote to my gate?',
        a: 'Sometimes, depending on the receiver and whether it uses fixed or rolling code. We will tell you honestly whether yours can be paired with a generic transmitter or whether it needs the manufacturer’s own, rather than selling you something that will not learn.',
      },
      {
        q: 'All my remotes stopped at once. Is that the gate?',
        a: 'Not usually. If the keypad still opens the gate, the operator and motor are fine and the fault is at the receiver — either it has failed, its aerial has been damaged, or its memory has been cleared. Storms are a common trigger, since the receiver is an easy path for a surge.',
      },
      {
        q: 'Do I need to pay for a visit to reprogram a remote?',
        a: 'Often not. Many models have a straightforward learn procedure we can talk you through on the phone, and we would rather do that than charge you for a call-out. If your receiver is in an awkward place or the procedure needs the enclosure opened, then a visit makes sense.',
      },
    ],

    relatedServices: ['access-control-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-keypad-not-working', 'gate-wont-open', 'gate-opens-by-itself'],
    sources: [
      {
        label: 'LiftMaster receiver and remote control programming instructions',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
      {
        label: 'FCC Part 15 — unlicensed device frequency allocations used by gate remotes',
        url: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15',
      },
    ],
    toConfirm: [
      'Confirm Shield will walk owners through remote pairing by phone at no charge, which this page states twice.',
      'Which replacement remotes and receivers Shield stocks.',
    ],
    indexable: true,
  },

  {
    slug: 'gate-keypad-not-working',
    label: 'Gate keypad not working',
    searchedAs: ['Gate Keypad Not Working'],
    applies: 'both',
    urgency: 'access',
    urgencyNote:
      'On a property where the keypad is how visitors, staff or deliveries get in, a failed keypad blocks everyone without a remote — which on a commercial site is a queue on the road.',

    title: 'Gate Keypad Not Working — Causes and Fixes | DFW',
    metaDescription:
      'Gate keypad dead, buttons unresponsive, or code rejected? Water, wiring and worn keys are the usual causes. How to diagnose each before calling a technician.',
    h1: 'Gate Keypad Not Working',
    heroIntro:
      'A keypad lives outdoors, is touched with wet hands, and is the part of your gate system most exposed to weather and wear. Most failures trace to water or the cable behind it rather than to the electronics inside.',
    heroPoints: [
      'We check the cable run and the enclosure seal, not just the keypad',
      'Codes can usually be recovered or reset without replacing hardware',
      'Wired and wireless keypads get diagnosed differently — we ask which you have first',
    ],

    whatIsHappening: [
      {
        heading: 'Wired and wireless keypads fail for different reasons',
        body: [
          'A wired keypad is connected to the operator or an access control panel by a cable, usually buried. Its common failures are that cable, the terminals at each end, and water reaching either. A wireless keypad is a battery-powered transmitter that behaves much like a remote, so its failures are batteries, pairing and range.',
          'Establishing which you have takes one look: if there is a visible battery compartment on the back, it is wireless. It genuinely changes the diagnosis, and it is the first thing worth knowing before anyone starts testing.',
        ],
      },
      {
        heading: 'Why keypads take more punishment than anything else on a gate',
        body: [
          'A keypad is mounted at car-window height on a post in full weather, pressed by wet hands, baked by afternoon sun, and on a busy entrance operated thousands of times a year. Membrane keypads wear through at the most-used digits; backlit units fail their illumination first; and every one of them has a gasket that ages.',
          'The single most common failure is water getting past that gasket. Once moisture reaches the board or the terminals, faults become intermittent and weather-linked — which is why a keypad that works perfectly when a technician visits on a dry afternoon may genuinely be faulty.',
        ],
      },
    ],

    causes: [
      {
        cause: 'Water ingress past a failed gasket',
        likelihood: 'most common',
        howToTell:
          'Faults that track the weather — dead or erratic in the wet, fine when dry. Look for condensation behind the keypad window, or green corrosion at the terminals if you can see them.',
        fix: 'Drying, re-terminating and resealing, or replacing a unit whose enclosure has failed. Replacing the keypad without addressing why water got in restarts the same clock.',
        ownerCanFix: false,
      },
      {
        cause: 'Flat battery in a wireless keypad',
        likelihood: 'most common',
        howToTell:
          'Wireless units only. No backlight, no beep, no response. Many give warning first by becoming intermittent in cold weather, which is when a marginal battery struggles most.',
        fix: 'Battery replacement. Worth using a good-quality cell — a keypad outdoors in this climate is hard on them.',
        ownerCanFix: true,
      },
      {
        cause: 'Damaged or corroded cable run',
        likelihood: 'common',
        howToTell:
          'Wired units. Complete failure or erratic behaviour with no water visible at the keypad itself — the fault is out in the run. Common after landscaping, fence work, or years of rodent attention.',
        fix: 'Tracing and repairing the run, or re-pulling the cable. On long runs this is the more likely fault by some margin, and it is why we do not simply swap the keypad first.',
        ownerCanFix: false,
      },
      {
        cause: 'Worn keys or membrane',
        likelihood: 'common',
        howToTell:
          'Specific digits need pressing hard or repeatedly while others work normally — and those digits are usually the ones in your code. Look for shiny or worn keycaps.',
        fix: 'Keypad replacement. Worth changing the code afterwards, since worn keys advertise which digits are in it.',
        ownerCanFix: false,
      },
      {
        cause: 'Code lost, changed, or memory cleared',
        likelihood: 'common',
        howToTell:
          'The keypad lights and beeps normally but rejects the code. Often follows a power interruption, a board replacement, or someone reprogramming the system.',
        fix: 'Re-programming the codes. No parts, and on many systems we can talk you through it. Worth taking the opportunity to remove codes for people who no longer need access.',
        ownerCanFix: true,
      },
      {
        cause: 'Fault at the operator or access control panel end',
        likelihood: 'less common',
        howToTell:
          'The keypad appears healthy — lights, beeps, accepts the code — but the gate does not respond. The fault is downstream: the input at the board, a blown board fuse, or a failed relay in the access control panel.',
        fix: 'Whatever the downstream fault is. The point of checking is to avoid replacing a keypad that was working correctly the whole time.',
        ownerCanFix: false,
      },
    ],

    checkFirst: [
      {
        step: 'Establish whether it is wired or wireless',
        body: 'A battery compartment on the back means wireless, and the first thing to try is a fresh battery. No battery compartment means wired, and the cable behind it becomes the leading suspect.',
      },
      {
        step: 'Check whether it lights up and beeps',
        body: 'A keypad that lights and beeps has power and is probably fine — the fault is more likely the code, or something downstream at the operator. A keypad with no signs of life has a power or cable problem.',
      },
      {
        step: 'Test the code on a different input',
        body: 'If a remote or wall button still opens the gate, the operator and motor are fine and the fault is confined to the keypad path — which is the cheaper half.',
      },
      {
        step: 'Look for water and worn keys',
        body: 'Condensation behind the window points at a failed seal. Keys that are visibly worn or need extra pressure point at a membrane at the end of its life — and incidentally reveal your code to anyone looking.',
      },
    ],

    doNot: [
      'Do not pressure-wash a keypad or spray it with cleaner. Forcing water past the gasket is the leading cause of failure, and a hose does it efficiently.',
      'Do not leave a code in place for someone who no longer needs access — a keypad code is a key.',
      'Do not keep a code with obviously worn digits; it is visible to anyone who looks at the keypad.',
      'Do not replace a keypad before testing the cable run on a wired installation — the run fails more often than the unit.',
    ],

    outlook: {
      summary:
        'Usually inexpensive. Wireless keypad faults are frequently a battery; wired faults are often the cable or a seal rather than the keypad itself. The main avoidable cost here is replacing a working keypad because nobody tested what was behind it.',
      usuallyRepair: [
        'Batteries on wireless keypads',
        'Re-programming lost or changed codes',
        'Drying, re-terminating and resealing after water ingress',
        'Cable run repair and re-pulling',
      ],
      sometimesReplace: [
        'A keypad whose membrane or keys are worn through',
        'A unit whose enclosure seal has failed and repeatedly takes water',
        'Obsolete access control hardware where codes can no longer be managed',
      ],
    },

    dfw: [
      {
        heading: 'Sun, storms and thousands of presses',
        body: [
          'Keypads in this region age faster than their datasheets suggest for two reasons. Afternoon sun on a south or west-facing post degrades gaskets and yellows membranes, and once the gasket hardens the unit starts taking water in the next storm. That combination produces the weather-linked intermittent faults that make up most of our keypad calls.',
          'The second is volume. On HOA and apartment entrances across the metroplex — the I-35E corridor in Lewisville, the gated communities in Mansfield — a keypad may be pressed thousands of times a year, so membrane wear that would take a decade on a private drive arrives in two or three years. On those sites we would rather specify for the traffic than replace the same part repeatedly.',
        ],
      },
    ],

    faqs: [
      {
        q: 'My keypad lights up but the gate does not open. Is the keypad faulty?',
        a: 'Possibly not. If it lights, beeps and accepts the code, it has power and is probably working — which points downstream to the input at the operator, a blown board fuse, or a relay in the access control panel. Checking that first avoids replacing a keypad that was fine.',
      },
      {
        q: 'It only fails when it rains. Why does it work again afterwards?',
        a: 'Water has got past the gasket and is bridging something inside. As it dries, normal operation returns. It is a genuine fault even though it tests fine on a dry day, and the repair has to include resealing — replacing the keypad without fixing how water got in just restarts the cycle.',
      },
      {
        q: 'I have forgotten the code. Can it be recovered?',
        a: 'It can usually be reset rather than recovered. Most systems allow a master reset and re-programming, and on many we can talk you through it. It is also a good moment to remove any codes belonging to people who no longer need access.',
      },
      {
        q: 'Some digits need pressing hard. Is that a fault?',
        a: 'Yes, and it is worth acting on for two reasons. The membrane under those keys is wearing through and the keypad will fail eventually. More immediately, visibly worn keys tell anyone who looks which digits are in your code — so when we replace it we would suggest a new code too.',
      },
      {
        q: 'Should I fit a wired or wireless keypad?',
        a: 'Wired is more reliable and has no batteries to fail, but it needs a cable run, which is a real cost if there is not one already. Wireless is far easier to retrofit, particularly on a long driveway, at the cost of a battery to change. On a long acreage drive wireless is usually the sensible answer.',
      },
    ],

    relatedServices: ['access-control-repair', 'commercial-gate-repair', 'automatic-gate-repair'],
    relatedSymptoms: ['gate-remote-not-working', 'gate-wont-open', 'gate-circuit-board-not-working'],
    sources: [
      {
        label: 'DoorKing keypad and telephone entry system installation manuals',
        url: 'https://www.doorking.com/telephone-entry',
      },
      {
        label: 'LiftMaster wireless and wired keypad programming instructions',
        url: 'https://www.liftmaster.com/service-and-support/manuals',
      },
    ],
    toConfirm: [
      'Which keypad models Shield fits as standard for high-traffic HOA and apartment entrances.',
      'Whether code re-programming is walked through by phone at no charge, as this page implies.',
    ],
    indexable: true,
  },
]
