/**
 * Long-form depth for brand pages, keyed by slug.
 *
 * Brand pages were 421–728 words with zero H3s. FAAC in particular is the
 * flagship — no competitor in DFW has a FAAC, All-O-Matic or Ramset page at all
 * — and 728 words is thin for a term nobody else is contesting.
 *
 * Same rules as service depth: passage-level H3s so a specific answer can be
 * surfaced, and no geographic claims about past jobs (see MEDIA-PROVENANCE.md).
 */

import type { Passage } from './services'

export type BrandDepth = {
  /** How this manufacturer's equipment differs to work on. */
  characteristics: Passage[]
  /** Model-family specifics worth knowing before a repair. */
  modelNotes?: Passage[]
  partsAvailability: string[]
  extraFaqs?: { q: string; a: string }[]
}

export const BRAND_DEPTH: Record<string, BrandDepth> = {
  faac: {
    characteristics: [
      {
        heading: 'Hydraulic, not electromechanical — and that changes everything',
        body: [
          'Most gate operators sold in the United States are electromechanical: a motor drives a chain, a screw or a gear train. FAAC built its reputation on hydraulic operators, where an electric motor drives a pump and hydraulic pressure moves the ram that moves the gate.',
          'The practical consequences are real. Hydraulic operators are exceptionally smooth, handle heavy gates without strain, and have an inherent soft start and stop. They also fail differently: pressure loss rather than gear wear, seal degradation rather than chain stretch, and fluid condition as a routine service item.',
          'This is why so many companies decline the work. A technician who has only ever seen chain-drive units opens a FAAC, finds hydraulics, and quotes a replacement with a brand they understand. That is a rational business decision for them and an expensive one for the property owner.',
        ],
      },
      {
        heading: 'Pressure loss is the fault behind most FAAC symptoms',
        body: [
          'A FAAC gate that has become slow, weak, or stops part-way through travel is usually telling you about hydraulic pressure rather than about its motor or its board. Fluid escapes past worn seals, the level drops, and the ram can no longer generate the force to complete the cycle.',
          'The correct sequence is to check fluid level and condition, test operating pressure against the manufacturer\'s figures, then adjust or reseal as required. A seal kit and a pressure reset is a fraction of the cost of an operator, and it commonly returns a unit that "needed replacing" to full working order.',
        ],
      },
      {
        heading: 'Temperature sensitivity',
        body: [
          'Hydraulic fluid viscosity changes with temperature. A FAAC gate that is noticeably slower on a cold morning and normal by afternoon is usually behaving as designed rather than failing — although a marked seasonal difference can indicate fluid that is past its service life.',
        ],
      },
      {
        heading: 'Control boards and the release key',
        body: [
          'FAAC control boards are conventional in the sense that they are diagnosable and replaceable like any other. The 452 MPS and 455D boards in particular are common failure points on older installations and are straightforward to swap once correctly identified.',
          'The manual release on a FAAC is a keyed valve rather than a lever: turning the key opens a bypass and allows the gate to be moved by hand. That valve is itself a wear item, and a release that has started weeping fluid is a real fault rather than a cosmetic one.',
        ],
      },
    ],
    modelNotes: [
      {
        heading: '400 and 402 series — the classic residential swing operators',
        body: [
          'Widely installed, long-lived, and almost always repairable. Seals, fluid and pressure adjustment cover the large majority of faults on these units. Age alone is not a reason to replace one.',
        ],
      },
      {
        heading: '750 and 844 — sliding gate operators',
        body: [
          'Used on heavier sliding installations. Faults tend to be a mixture of hydraulic and mechanical: pressure on the drive side, and rack, pinion or roller wear on the gate side. Both need checking together, because a gate that is hard to move will make a healthy operator look faulty.',
        ],
      },
      {
        heading: 'S800H and modern encoder-based units',
        body: [
          'Newer FAAC operators use encoder position sensing rather than mechanical limits. Position can be lost after a power interruption or a forced manual move, which presents as erratic travel and is corrected by re-learning the limits rather than by replacing hardware.',
        ],
      },
    ],
    partsAvailability: [
      'Seal kits and hydraulic fluid: carried on the truck.',
      'Common control boards for the widely-installed series: usually available same or next day.',
      'Rams, pumps and less common boards: typically a short order, and we tell you upfront rather than discovering it on the day.',
      'FAAC remains in production and supports its equipment, which is why repair is nearly always the economical route on these units.',
    ],
    extraFaqs: [
      {
        q: 'Another company said my FAAC cannot be repaired. Is that true?',
        a: 'Almost never. It usually means they do not service hydraulic operators — which is a statement about their technicians rather than about your gate. FAAC units are designed to be serviced: seals, fluid, pressure and boards are all replaceable. Replacement genuinely makes sense only when the housing or ram is physically damaged.',
      },
      {
        q: 'How often does a FAAC need servicing?',
        a: 'Hydraulic fluid and seals are service items rather than lifetime parts. On a residential gate, checking pressure and fluid condition every couple of years catches degradation long before it becomes a failure — and it is the cheapest thing you can do to keep one of these running for decades.',
      },
      {
        q: 'My FAAC gate is slower than it used to be. Is that serious?',
        a: 'It is worth investigating. Gradual loss of speed is the classic early sign of falling hydraulic pressure, usually from seal wear. Addressed early it is a seal kit; ignored it eventually becomes a gate that will not complete its travel.',
      },
    ],
  },

  liftmaster: {
    characteristics: [
      {
        heading: 'The most common operator in the market — and the most over-replaced',
        body: [
          'LiftMaster is the default gate operator across most of the United States, which means every gate company can sell you a new one and most would prefer to. It also means the parts ecosystem is excellent: boards, capacitors, limit switches and receivers are all readily available for the current and recent generations.',
          'That combination — high familiarity and good parts supply — makes LiftMaster one of the most economically repairable operators on the market. When a LiftMaster is condemned, it is worth asking which specific component was tested and found faulty.',
        ],
      },
      {
        heading: 'Board diagnostics actually tell you something',
        body: [
          'Modern LiftMaster boards report diagnostic codes through an LED or display rather than failing silently. Those codes distinguish an obstruction fault from a limit fault from a genuine board failure, and reading them before replacing anything routinely turns a quoted board replacement into a photo-eye realignment.',
        ],
      },
      {
        heading: 'Battery backup on DC units',
        body: [
          'Many LiftMaster gate operators are DC with battery backup, which is a genuine convenience during outages and a maintenance item people forget. Batteries have a finite life; a gate that has become slow or that fails after a handful of cycles during an outage is almost always reporting a tired battery rather than a failing motor.',
        ],
      },
      {
        heading: 'Capacitor failure on AC units',
        body: [
          'On AC operators the capacitor is the single most common failure, and the symptom is unmistakable: the motor hums but the gate does not move. It is one of the cheapest parts on the whole gate and among the fastest repairs we do.',
        ],
      },
    ],
    modelNotes: [
      {
        heading: 'LA400 and LA500 — residential swing',
        body: [
          'Extremely common on residential driveways. Board, capacitor and limit faults dominate, and all are inexpensive relative to replacement.',
        ],
      },
      {
        heading: 'SL585, SL595 and CSL24U — slide operators',
        body: [
          'Chain-driven slide units where mechanical wear matters as much as electronics. Chain tension, sprocket condition and roller wear should be checked on any service visit, because a gate that is getting harder to move will eventually take the gearbox with it.',
        ],
      },
      {
        heading: 'CSW24U and commercial-duty units',
        body: [
          'Installed on higher-cycle entrances. The same parts fail as on residential units, just far sooner, which is why a repeated failure usually indicates duty cycle rather than a defective part.',
        ],
      },
    ],
    partsAvailability: [
      'Capacitors, limit switches, photo-eyes and remotes: carried on the truck.',
      'Common control boards: usually same or next day.',
      'Parts for units roughly fifteen years old and newer: generally straightforward.',
      'Very old units may need a board substitution — which we explain before doing, not after.',
    ],
    extraFaqs: [
      {
        q: 'Are you a LiftMaster authorized dealer?',
        a: 'No. We service LiftMaster operators and carry common LiftMaster parts, but we are not an authorized dealer for the manufacturer and we do not present ourselves as one.',
      },
      {
        q: 'Is a fifteen-year-old LiftMaster worth repairing?',
        a: 'Usually yes. The mechanical side of these units lasts a long time and the parts that fail — boards, capacitors, limit switches — remain available. The question is not age but whether you are starting to pay for the same visit twice a year.',
      },
    ],
  },

  'all-o-matic': {
    characteristics: [
      {
        heading: 'Built simple, which makes them very repairable',
        body: [
          'All-O-Matic operators are mechanically straightforward and heavily built. There is comparatively little to go wrong, and what does go wrong is nearly always a discrete, replaceable component rather than a systemic failure.',
          'The practical implication is direct: anyone quoting a full replacement on an All-O-Matic has almost certainly not opened it. Limit cams, clutches, chains and boards account for the overwhelming majority of faults on these units.',
        ],
      },
      {
        heading: 'The clutch is a safety feature, not a fault',
        body: [
          'All-O-Matic slide operators use a mechanical clutch that slips when the gate meets resistance. When a gate stalls or reverses part-way, people reasonably conclude the clutch has failed — but usually the clutch is doing precisely its job, and the real fault is that the gate has become hard to move.',
          'Tightening the clutch to force the gate through is the wrong repair and a genuinely dangerous one: it removes the protection that stops the gate crushing an obstruction. We check the gate by hand before touching the clutch, every time.',
        ],
      },
      {
        heading: 'Limit cam slip',
        body: [
          'Limit positions are set by cams on a threaded shaft. Over thousands of cycles a cam can creep, and the gate gradually stops travelling as far as it should. It is an adjustment rather than a repair in most cases, and it explains a great many "the gate has stopped closing properly" calls.',
        ],
      },
      {
        heading: 'Chain and sprocket wear',
        body: [
          'Chain stretch is normal and progressive. A stretched chain rides higher on the sprocket, wears the teeth, and eventually jumps. Replacing a chain is inexpensive; replacing a chain, sprocket and gearbox because the chain was left running is not.',
        ],
      },
    ],
    partsAvailability: [
      'All-O-Matic remains in production and supports its equipment well.',
      'Limit switches, clutches, chains and sprockets: readily available and commonly carried.',
      'Control boards: usually a short order at most.',
      'This is one of the more economical operators to keep running long-term.',
    ],
    extraFaqs: [
      {
        q: 'My All-O-Matic stalls part-way and reverses. What is it?',
        a: 'Usually the clutch doing its job. The clutch slips when the gate meets resistance, so if the gate is binding on its track or its hinges the clutch will stop it — which is exactly what it is for. We check the gate by hand before adjusting anything, because tightening the clutch to force it through removes a safety feature.',
      },
      {
        q: 'How old is too old for an All-O-Matic?',
        a: 'These routinely run twenty years or more with basic servicing. Age alone is not a reason to replace one. We look at gearbox condition and parts availability rather than the date on the label.',
      },
    ],
  },

  ramset: {
    characteristics: [
      {
        heading: 'Commercial duty cycle changes the whole diagnosis',
        body: [
          'Ramset operators turn up disproportionately on commercial and multi-family entrances, which means they are typically running hundreds of cycles a day rather than a handful. Every wear item in the drive train is consumed on cycle count, not on calendar age.',
          'The diagnostic consequence is important: wear that would indicate a serious problem on a residential gate can be entirely normal on a Ramset at eighteen months. Knowing which is which is the difference between a sensible service interval and a series of unnecessary replacements.',
        ],
      },
      {
        heading: 'When the same part keeps failing',
        body: [
          'The most common Ramset complaint is a repeat failure of the same component. That pattern almost never means defective parts. It means either the operator is under-specified for the traffic it now carries, or the gate has developed a fault that is making the operator work far harder than it should.',
          'Replacing the part again treats the symptom. Establishing actual cycle count and checking the gate under manual operation finds the cause.',
        ],
      },
      {
        heading: 'Thermal load on continuous-duty entrances',
        body: [
          'High-cycle operation generates heat, and heat is what kills motors and boards. A Ramset tripping its thermal cutout in the afternoon is often a load problem — rollers, alignment, or a gate that has gained weight from added infill — rather than a motor at the end of its life.',
        ],
      },
      {
        heading: 'Integration with loop detection and access control',
        body: [
          'On commercial sites the Ramset is one component in a larger system. Faults frequently originate in the loop detector or the access controller rather than the operator, and diagnosing them together in one visit avoids paying for two.',
        ],
      },
    ],
    partsAvailability: [
      'High-cycle wear parts — chains, sprockets, limit switches — are the ones that actually fail, and we carry them.',
      'Control boards and relays: generally a short order.',
      'For sites where downtime stops the business, we will discuss holding critical spares on site.',
    ],
    extraFaqs: [
      {
        q: 'Our Ramset gate fails every few months. Is it a bad unit?',
        a: 'Rarely. Repeat failure of the same part on a commercial entrance almost always means the operator is running well past the duty cycle it was specified for, or the gate is making it work harder than it should. We measure the actual traffic against the installed unit before recommending anything.',
      },
      {
        q: 'Do you service barrier arms as well as slide gates?',
        a: 'Yes — motors, boards, counterbalance and loop detection. Counterbalance in particular gets overlooked, and an out-of-balance arm dramatically shortens motor life.',
      },
    ],
  },

  /**
   * US Automatic — solar and DC-powered operators for rural and acreage gates.
   *
   * ⚠️ Written 4 Aug 2026 after the client asked for the "Solar & Electrical
   * instructions/content" to be corrected. He did not say which specific claims
   * were wrong, so this was rewritten from the ground up around the one thing
   * that is true of every solar operator and gets missed: it is a 12V DC power
   * system with a gate attached, and most "the operator is dead" calls are a
   * power-budget problem, not a motor problem.
   *
   * If he had particular corrections in mind, they need to come back to us —
   * flagged in the handover notes rather than guessed at.
   */
  'us-automatic': {
    characteristics: [
      {
        heading: 'A solar gate is a power system with a gate attached',
        body: [
          'US Automatic builds DC operators designed to run off-grid, and that single design decision explains almost every service call these units generate. A mains-powered operator has effectively unlimited power available on demand. A solar operator has a battery, a panel that refills it, and a fixed number of cycles a day it can support before the battery runs down faster than the panel can recover it.',
          'So when a solar gate stops working, the useful first question is almost never "what is wrong with the motor?" — it is "is there enough power getting to it?". Diagnosing in that order is the difference between a battery replacement and an unnecessary operator replacement, which matters a great deal on a rural property where running mains power to the gate may be hundreds of feet of trenching.',
        ],
      },
      {
        heading: 'The battery is the part that wears out',
        body: [
          'These systems run a sealed lead-acid or AGM battery, and in North Texas heat that battery is a consumable. High ambient temperature is what kills lead-acid capacity, and a battery that would last five years in a mild climate frequently has three or four here — less if it sits in an unshaded enclosure in full summer sun.',
          'A tired battery does not fail cleanly. It behaves exactly like a failing operator: the gate opens slowly, stalls part-way, opens but will not close, works in the afternoon and not at dawn, or runs fine for one cycle and refuses the second. Every one of those symptoms will also be produced by a genuine motor or board fault, which is why the battery and charge system get tested first rather than assumed good.',
          'A battery should be tested under load, not just measured at rest. A worn cell can show close to a healthy resting voltage and still collapse the moment the motor draws current.',
        ],
      },
      {
        heading: 'Panel output: shade, angle and dirt',
        body: [
          'The panel has to actually collect what the system budgeted for. Three things quietly stop it, and none of them look like a fault:',
          'Shade is the most common. A panel sited when the trees were smaller may now spend hours of the day in shadow. Partial shading matters more than people expect — shading part of a panel can cut its output disproportionately, not just proportionally.',
          'Angle and orientation drift. Panels get knocked by mowing equipment, livestock, wind or a gate strike, and a panel that no longer faces the right way collects less all day, every day.',
          'Dirt. Dust, pollen and bird droppings on the glass reduce output, and in a rural setting that accumulates faster than anyone expects. Cleaning the panel is a genuine service item, not a token gesture.',
        ],
      },
      {
        heading: 'Why it worked all summer and failed in winter',
        body: [
          'This is the most common seasonal complaint on solar gates and it has a straightforward explanation: the two variables move against each other. Winter days are shorter and the sun sits lower, so the panel generates less. At the same time, cold reduces the usable capacity of a lead-acid battery.',
          'A system that was marginal in July will fail in January. That is a sizing problem rather than a fault, and the fix is a larger battery, a larger or better-sited panel, or both — not a new operator.',
        ],
      },
      {
        heading: 'Electrical faults specific to rural installations',
        body: [
          'Long driveways mean long cable runs, and long DC runs lose voltage. An operator that behaves oddly at the far end of a several-hundred-foot run may be receiving noticeably less voltage than the supply is providing, and the answer is cable gauge rather than a replacement board.',
          'Lightning and surge damage is disproportionately common on these installs. A gate operator on open acreage is often the tallest earthed metal object for some distance, and a nearby strike can take out a control board or a charge controller without leaving a mark on anything else.',
          'Corrosion at terminals is the quiet one. Enclosures on rural gates take weather, dust and insects, and a green or powdery terminal adds resistance exactly where the system can least afford it. A significant share of "electrical faults" on these units are a connection rather than a component.',
        ],
      },
      {
        heading: 'Charge controller and wiring polarity',
        body: [
          'Between the panel and the battery sits a charge controller, and when it fails the battery either stops being charged or is overcharged and cooked. Either way the symptom presents as a flat battery, so replacing the battery without testing the controller produces a repair that fails again within months.',
          'Polarity matters on DC systems in a way it does not on AC. A battery or panel reconnected backwards after unrelated work can damage the controller or board immediately. On any unit that failed straight after someone else worked on it, that is worth checking before anything more exotic.',
        ],
      },
    ],
    modelNotes: [
      {
        heading: 'Ranger, Patriot and Sentry',
        body: [
          'The Ranger and Patriot families cover most residential and acreage installations, in single and dual-leaf configurations, with solar and AC-charged variants of the same operator. Sentry units appear on lighter-duty gates.',
          'Because the same operator is sold in both solar and AC-charged form, establishing which one is actually installed is the first step — the mechanical repair is identical and the power-side diagnosis is completely different.',
        ],
      },
      {
        heading: 'Arms, linkages and gate condition',
        body: [
          'Long, heavy farm and ranch gates put continuous load on the arm and its mounting. Sag in the gate itself, a dragging wheel, a post that has moved, or a hinge that has worn all increase the force the operator must produce — which on a solar system directly shortens battery life as well as wearing the operator.',
          'On a DC system, a mechanical problem shows up as a power problem. Fixing the gate is frequently the real fix for a battery that "will not hold charge".',
        ],
      },
    ],
    partsAvailability: [
      'Batteries: standard sealed lead-acid and AGM sizes, carried on the truck.',
      'Charge controllers and control boards: commonly available, some ordered.',
      'Solar panels and mounting hardware: available, sized to the installation rather than replaced like for like where the original was undersized.',
      'Arms, linkages and mounting hardware: available; gate hardware itself is usually a stock item.',
    ],
    extraFaqs: [
      {
        q: 'My solar gate has stopped working. Does the whole operator need replacing?',
        a: 'Usually not. On solar units the battery is the consumable, and in Texas heat it typically needs replacing every three to four years. A weak battery produces exactly the symptoms of a failed operator — slow travel, stalling part-way, opening but not closing. We test the battery under load, the panel output and the charge controller before we consider the operator itself.',
      },
      {
        q: 'Why does my gate work fine in summer but not in winter?',
        a: 'Shorter days and a lower sun angle mean the panel generates less, and cold weather reduces battery capacity at the same time. Both move against you at once, so a system that was only just adequate in summer fails in winter. That is a sizing issue rather than a fault: the fix is a larger battery, a better-sited or larger panel, or both.',
      },
      {
        q: 'How many times a day can a solar gate open?',
        a: 'It depends on battery capacity, panel output and how hard your gate is to move — a heavy sagging gate draws far more per cycle than a well-hung one. If your gate cannot keep up with your traffic, that is a sizing calculation we can do rather than something you have to live with.',
      },
      {
        q: 'Can you convert a solar gate to mains power?',
        a: 'Sometimes, if there is a practical route for a power run. On a long rural driveway the trenching often costs more than correcting the solar sizing, so we will tell you which actually makes sense for your property rather than defaulting to the bigger job.',
      },
      {
        q: 'Do you cover rural properties outside the main metro?',
        a: 'Yes. A large share of the US Automatic units in our area are on acreage and ranch entrances well outside the city limits, and those are exactly the properties where a failed gate is most disruptive. Call with your address and we will confirm coverage straight away.',
      },
    ],
  },

  elite: {
    characteristics: [
      {
        heading: 'Shares DNA with the LiftMaster line',
        body: [
          'Elite operators are related to the LiftMaster family and share design approaches and some components. In practice that means good parts availability and diagnostics that will be familiar to any technician who works on LiftMaster equipment — though board layouts and error codes differ enough that assuming they are identical causes misdiagnosis.',
        ],
      },
      {
        heading: 'Common failure points',
        body: [
          'Control boards, capacitors and limit switches account for most Elite faults, in that order. On slide units, chain and sprocket wear becomes the dominant issue with age and traffic.',
          'As with LiftMaster, the repair-first logic applies: these are serviceable units and the parts that fail are inexpensive relative to replacement.',
        ],
      },
      {
        heading: 'Slide gate mechanical wear',
        body: [
          'An Elite slide operator that has started grinding is reporting chain, sprocket or roller wear. Caught early it is a chain; left running it becomes a chain, a sprocket and sometimes a gearbox.',
        ],
      },
    ],
    partsAvailability: [
      'Boards, capacitors and limit switches: commonly available, frequently carried.',
      'Chains, sprockets and rollers for slide units: readily available.',
      'Shared components with related product lines help availability on older units.',
    ],
    extraFaqs: [
      {
        q: 'Is Elite the same as LiftMaster?',
        a: 'They are related product lines sharing some components, which helps with parts availability. Diagnostics are broadly similar, though board layouts and error codes differ between models — so they are not interchangeable in practice.',
      },
    ],
  },

  viking: {
    characteristics: [
      {
        heading: 'Built for heavy gates',
        body: [
          'Viking Access Systems operators are commonly specified for the heaviest gates on a property. That makes them robust, and it also means failures frequently trace back to the gate rather than to the operator — because a heavy gate that has developed a bind puts enormous load on the drive train.',
        ],
      },
      {
        heading: 'DC power, batteries and solar',
        body: [
          'Many Viking installations run DC with battery storage and either solar or trickle charging. This is a genuine advantage on long driveways where mains power is impractical, and it adds a diagnostic step: a gate that has become slow or unreliable is often reporting a power problem rather than an operator fault.',
          'Load-testing the battery and verifying charge input should happen before anything mechanical is suspected. Batteries are consumables with a three-to-five-year life, and a shaded solar panel or a failed charge controller produces symptoms indistinguishable from a dying motor.',
        ],
      },
      {
        heading: 'Encoder and limit drift',
        body: [
          'Viking units using encoder-based position sensing can lose their reference after a power interruption or a forced manual move. The result is erratic travel, corrected by re-learning limits rather than replacing hardware.',
        ],
      },
    ],
    partsAvailability: [
      'Batteries, boards and limit hardware: generally available.',
      'Gearbox and hydraulic components on applicable models: typically a short order.',
      'Charge controllers and solar components: readily available.',
    ],
    extraFaqs: [
      {
        q: 'Our Viking gate is getting slower. Is the motor going?',
        a: 'On a DC Viking, check the power system first. A battery approaching end of life, a shaded panel or a failed charge controller all produce a gate that starts fine and weakens — which reads exactly like a failing motor and costs far less to fix.',
      },
    ],
  },

  eagle: {
    characteristics: [
      {
        heading: 'Reliable enough that failures are usually singular',
        body: [
          'Eagle Access Control operators have a good service reputation, and when they do fail it is generally one discrete component rather than a system in decline. That makes repair straightforward and gives the unit a long life ahead of it once the fault is addressed.',
        ],
      },
      {
        heading: 'Typical faults',
        body: [
          'Control boards, limit cams and capacitors account for most Eagle service calls. On slide units, chain and sprocket wear follows the same pattern as any chain-driven operator.',
          'Safety loop and photo-eye faults are also common, and as with any operator they present as the gate misbehaving rather than as a sensor problem.',
        ],
      },
    ],
    partsAvailability: [
      'Current and recent models: parts readily available.',
      'Some older units need a board substitution, which we explain before carrying out.',
    ],
    extraFaqs: [
      {
        q: 'Are Eagle parts still available?',
        a: 'Yes for current and recent models. Some older units need a board substitution rather than a like-for-like replacement — we explain that before doing it, not after.',
      },
    ],
  },

  doorking: {
    characteristics: [
      {
        heading: 'Usually an access control problem, not a gate problem',
        body: [
          'DoorKing is best known for telephone entry and access control, and most DoorKing installations combine an entry system with a gate operator. When something stops working, the fault is more often in the access control than in the gate — which matters, because they are diagnosed and repaired completely differently.',
          'If the gate opens on a manual command but credentials do not work, the operator is healthy. Establishing that in the first five minutes avoids a great deal of unnecessary expense.',
        ],
      },
      {
        heading: 'The analogue line problem',
        body: [
          'DoorKing telephone entry units were designed around analogue phone lines. When a property moves to VoIP or fibre, the signalling those systems expect disappears and the unit stops dialling out — often months after the phone change, so nobody connects the two events.',
          'The fix is usually a cellular module rather than a system replacement, which is considerably cheaper than what typically gets quoted.',
        ],
      },
      {
        heading: 'Directory and programming',
        body: [
          'Where a management company has changed and no records were handed over, the directory and access codes become a black box. On most DoorKing systems we can access, rebuild and document the programming rather than replacing working hardware — and a system still admitting codes that should have been revoked is a security issue worth treating urgently.',
        ],
      },
      {
        heading: 'Surge exposure',
        body: [
          'Access control sits at the end of long cable runs across open ground, which makes it unusually exposed to storm surge. Damaged controllers after storm season are common, and fitting surge protection during the repair is worth doing rather than waiting for the next one.',
        ],
      },
    ],
    partsAvailability: [
      'Telephone entry boards, keypads and readers: generally available.',
      'Cellular conversion modules: readily available and usually the right answer on legacy analogue units.',
      'DoorKing supports its equipment well, and full system replacement is rarely necessary.',
    ],
    extraFaqs: [
      {
        q: 'Do you program DoorKing telephone entry systems?',
        a: 'Yes — directory entries, access codes, card credentials and dial-out configuration, as well as the physical repair. We also document the programming so the next person is not starting from nothing.',
      },
      {
        q: 'Our DoorKing stopped calling out after we changed phone service. Can it be fixed?',
        a: 'Yes, and usually without replacing the system. Older units need an analogue line; moving to VoIP or fibre removes the signalling they expect. A cellular module restores dial-out at a fraction of replacement cost.',
      },
    ],
  },

  linear: {
    characteristics: [
      {
        heading: 'Widely installed and well supported',
        body: [
          'Linear operators are common on residential driveways and smaller commercial entrances. They are conventional in design, well supported, and economical to repair — which means replacement is very rarely the right recommendation.',
        ],
      },
      {
        heading: 'Typical faults',
        body: [
          'Boards, capacitors, limit switches and receivers account for the large majority of Linear service calls. Receiver and remote faults in particular are among the least expensive repairs in the trade and are worth ruling out before anything else is considered.',
        ],
      },
      {
        heading: 'Battery backup',
        body: [
          'On battery-backed Linear units, a gate that fails after a few cycles during a power outage is reporting a tired battery rather than an operator fault. Batteries are consumables with a finite life.',
        ],
      },
    ],
    partsAvailability: [
      'Boards, capacitors, limit switches and receivers: readily available.',
      'Remotes and keypads: commonly carried.',
    ],
    extraFaqs: [
      {
        q: 'My Linear remote stopped working but the keypad is fine. What is wrong?',
        a: 'Almost always the receiver or the remote itself rather than the operator. It is one of the quickest and least expensive repairs we do, and nothing mechanical needs touching.',
      },
    ],
  },

  hysecurity: {
    characteristics: [
      {
        heading: 'Industrial equipment with industrial expectations',
        body: [
          'HySecurity operators are specified for high-security and high-throughput sites — the kind of installation where a gate failure stops a business or breaches a security perimeter rather than merely inconveniencing a household.',
          'That changes the priorities on a service call. Diagnosing correctly on the first visit matters far more than finding the cheapest possible part, because the cost of a second visit is measured in operational downtime rather than in labour.',
        ],
      },
      {
        heading: 'Smart Touch controllers and diagnostics',
        body: [
          'Many HySecurity units use Smart Touch controllers that report detailed diagnostic codes. Those codes are genuinely informative and should be read before any component is replaced — they routinely distinguish a safety device fault from a drive fault from a genuine controller failure.',
        ],
      },
      {
        heading: 'Hydraulic models',
        body: [
          'HydraSwing and related hydraulic units fail on pressure and seals rather than on gear wear, in the same way FAAC units do. Fluid condition and operating pressure are routine service items, not signs of impending failure.',
        ],
      },
      {
        heading: 'Continuous-duty wear',
        body: [
          'On sites running near-continuous cycles, drive belts, chains and bearings are consumables with predictable service intervals. Planned replacement is dramatically cheaper than the unplanned failure it prevents.',
        ],
      },
    ],
    partsAvailability: [
      'HySecurity supports its equipment well, and parts are generally obtainable.',
      'Some components on specialised models require ordering — for sites where downtime is critical we will discuss holding spares on site.',
      'We give you honest lead times upfront rather than discovering them mid-repair.',
    ],
    extraFaqs: [
      {
        q: 'Do you service commercial and industrial HySecurity installations?',
        a: 'Yes, including hydraulic units, barrier arms and Smart Touch controller diagnostics. These are sites where a correct first-visit diagnosis matters more than a cheap part, and we work accordingly.',
      },
    ],
  },
}
