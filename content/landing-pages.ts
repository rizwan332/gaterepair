/**
 * Google Ads landing pages.
 *
 * Requested by the client 6 Aug 2026 for a high-budget paid campaign. These are
 * NOT duplicates of the brand pages. A brand page answers "who repairs FAAC in
 * Dallas"; a landing page answers one specific ad group's query — usually a
 * model number someone has just read off the housing of their own gate.
 *
 * Why that distinction earns its keep on Quality Score: the score is largely a
 * function of expected click-through, ad relevance and landing page experience,
 * and all three improve when the H1 repeats the searched phrase and the page
 * answers that exact question above the fold. Sending "liftmaster la400 repair"
 * traffic to a general LiftMaster page costs relevance on every impression.
 *
 * ── ON MODEL DETAIL ─────────────────────────────────────────────────────────
 * Model copy stays with what is reliably true of the line — what it is, where
 * it is typically fitted, and which components actually fail. Invented
 * specifications would be both a factual problem and a credibility one, since
 * the reader is standing in front of the unit.
 */

export type LandingPage = {
  /** Top-level URL slug. Also the route folder name under app/. */
  slug: string
  /** H1. Should contain the phrase the ad group bids on. */
  h1: string
  /** <title>. Kept under ~60 chars where possible. */
  title: string
  metaDescription: string
  /** One line under the H1. */
  subhead: string
  /** Brand slug in content/brands.ts, for internal linking and testimonials. */
  brandSlug: string
  /** Photo category in media-manifest.ts. Null renders no gallery. */
  mediaCategory: string | null
  /** The situation the visitor is in right now. */
  problem: string[]
  /** What this operator is and where it is usually found. */
  modelDescription: string[]
  commonIssues: { title: string; body: string }[]
  /** Numbered repair process. */
  process: { step: string; body: string }[]
  faqs: { q: string; a: string }[]
  /** Long-tail phrases worked into the closing local block. */
  localKeywords: string[]
}

const DFW = 'Dallas–Fort Worth'

export const landingPages: LandingPage[] = [
  {
    slug: 'liftmaster-la400-repair',
    h1: 'LiftMaster LA400 Repair in Dallas–Fort Worth',
    title: 'LiftMaster LA400 Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'LA400 gate not opening, stopping partway or clicking? We repair LiftMaster LA400 swing gate operators across Dallas–Fort Worth. Open 24/7. Call now.',
    subhead: 'Swing gate operator repair, usually finished on the first visit.',
    brandSlug: 'liftmaster',
    mediaCategory: 'liftmaster',
    problem: [
      'Your gate has stopped working and the badge on the operator says LA400. It might be opening partway and stopping, running one leaf and not the other, clicking without moving, or doing nothing at all.',
      'The LA400 is a repairable operator. Boards, capacitors, batteries, limit settings and the actuator arms themselves are all serviceable parts, and in most cases the unit does not need replacing.',
    ],
    modelDescription: [
      'The LiftMaster LA400 is a low-voltage DC linear actuator operator for residential swing gates, single or dual leaf. It runs from a transformer with a battery in the control box, which means it keeps working through a power cut and can run on solar where mains is impractical.',
      'That DC-and-battery design is the key to diagnosing it. Because the operator always runs off the battery and the transformer only keeps the battery charged, a charging fault presents as an operator fault: the gate works, then works slowly, then stops. The battery is the single most common cause we find.',
    ],
    commonIssues: [
      {
        title: 'Gate opens partway and stops',
        body: 'Most often a battery that no longer holds enough charge to complete a cycle under load, or a limit setting that has drifted. Both are inexpensive. It is worth ruling them out before anyone discusses a new operator.',
      },
      {
        title: 'One leaf moves, the other does not',
        body: 'On a dual-gate LA400 this usually points to one actuator, its harness, or the corresponding output on the control board rather than the whole system. Isolating which of the three is at fault is a measurement, not a guess.',
      },
      {
        title: 'Clicking but no movement',
        body: 'The board is trying to drive the motor and the motor is not turning. Typically the actuator has failed internally, or the gate has become physically bound and the operator cannot overcome it. We check the gate by hand before condemning the actuator.',
      },
      {
        title: 'Dead after a storm',
        body: 'North Texas surges take out control boards regularly. The board is a replaceable part on this operator and does not require a new unit.',
      },
      {
        title: 'Remotes or keypad stopped working',
        body: 'Usually the receiver or the remote rather than the operator. Frequently the least expensive call we take.',
      },
      {
        title: 'Gate reverses on closing',
        body: 'Almost always a photo-eye seeing an obstruction that is not there — sun angle, spider web, a knocked bracket. A safety device doing exactly its job.',
      },
    ],
    process: [
      { step: 'We move the gate by hand first', body: 'With the operator released, the gate should swing freely. If it binds, drags or has dropped on its hinges, the fault is in the gate and no operator work will fix it. This step is skipped surprisingly often and it changes the diagnosis completely.' },
      { step: 'We measure the power system', body: 'Battery voltage under load, transformer output, and charging behaviour. On an LA400 this is where the fault usually is.' },
      { step: 'We test the board and actuators', body: 'Outputs, limits and each actuator independently, so we know which component has actually failed rather than replacing the assembly.' },
      { step: 'We tell you what it needs before we do it', body: 'You get the diagnosis, the part and the price before any work starts.' },
      { step: 'We repair it, usually the same visit', body: 'Our trucks carry LiftMaster boards, capacitors, batteries and limit hardware.' },
    ],
    faqs: [
      { q: 'Is the LiftMaster LA400 still supported?', a: 'Yes. Parts including control boards, batteries and actuator arms remain available, which is why replacement is rarely the right first answer on this operator.' },
      { q: 'How long does an LA400 battery last?', a: 'Typically three to five years, and less in Texas heat. A gate that has become slow or stops partway through its travel is the classic signature of a battery reaching the end of its life.' },
      { q: 'Can the LA400 run on solar?', a: 'Yes, and many in this area do. If yours is solar, we test panel output and charging as part of the diagnosis, because an undersized or shaded array produces exactly the same symptoms as a failing operator.' },
      { q: 'Do you carry LA400 parts on the truck?', a: 'We carry the parts that actually fail — boards, capacitors, batteries and limit hardware — so most LA400 repairs finish on the first visit.' },
    ],
    localKeywords: [
      'LiftMaster LA400 repair Dallas',
      'LA400 gate operator repair Fort Worth',
      'LiftMaster swing gate repair Plano',
      'LA400 battery replacement Frisco',
    ],
  },

  {
    slug: 'liftmaster-gate-opener-repair',
    h1: 'LiftMaster Gate Opener Repair in Dallas–Fort Worth',
    title: 'LiftMaster Gate Opener Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'LiftMaster gate opener not working? We repair LiftMaster swing and slide gate operators across Dallas–Fort Worth. Boards, capacitors, limits. Open 24/7.',
    subhead: 'Residential and commercial LiftMaster operators, repaired rather than replaced.',
    brandSlug: 'liftmaster',
    mediaCategory: 'liftmaster',
    problem: [
      'Your LiftMaster gate opener has stopped doing what it should — not opening, not closing, opening partway, or making noise without moving.',
      'LiftMaster is the most common gate operator in North Texas, and it is also one of the most repairable. The parts that fail on these units are boards, capacitors, limit switches and batteries, and every one of them is replaceable.',
    ],
    modelDescription: [
      'LiftMaster builds both residential and commercial gate operators across swing and slide, including the LA400 and LA500 linear actuators, the CSW and CSL commercial swing and slide units, and the older Elite-branded lines that share much of the same hardware.',
      'The practical consequence is good news for you: parts availability is excellent, and the diagnostic path is well understood. An operator that is fifteen years old is usually still worth repairing.',
    ],
    commonIssues: [
      { title: 'Gate will not open at all', body: 'Power, a control board, a capacitor or a battery. We work through them in order rather than starting at the most expensive.' },
      { title: 'Gate will not close', body: 'Nine times out of ten this is a safety sensor seeing an obstruction that is not there. One of the least expensive faults we fix.' },
      { title: 'Hums or clicks but does not move', body: 'Typically a failed capacitor, or a gate that has become physically bound so the operator cannot overcome it.' },
      { title: 'Opens partway and stops', body: 'A limit switch out of adjustment, a safety device triggering mid-travel, or a battery that cannot sustain a full cycle.' },
      { title: 'Works intermittently', body: 'Often a wiring or connection fault rather than a component failure. Intermittent faults need tracing rather than parts.' },
      { title: 'Chain or belt noise on a slide gate', body: 'Chain, sprocket or roller wear. Worth catching early: a worn chain left running will eventually take the sprocket with it.' },
    ],
    process: [
      { step: 'Release the operator and move the gate by hand', body: 'A gate that binds, drags or has dropped will destroy a new operator too. This comes first.' },
      { step: 'Confirm power and supply', body: 'Transformer, incoming supply, and on DC units the battery and its charging.' },
      { step: 'Test the board, capacitor and limits', body: 'Component by component, so the fault is identified rather than inferred.' },
      { step: 'Quote before we work', body: 'You get the diagnosis and the price before anything is replaced.' },
      { step: 'Repair, usually first visit', body: 'The parts that commonly fail are on the truck.' },
    ],
    faqs: [
      { q: 'Is my LiftMaster too old to repair?', a: 'Usually not. Age alone is not a reason to replace an operator. The mechanical side was built to last and the parts that fail are the inexpensive ones. We will tell you honestly if a unit genuinely has reached the end.' },
      { q: 'How much does a LiftMaster control board cost?', a: 'It depends on the model, and we quote it before we fit it. What is generally true is that a board is a fraction of the cost of a replacement operator.' },
      { q: 'Do you work on commercial LiftMaster operators?', a: 'Yes — CSW, CSL and the commercial slide and swing lines, including apartment, HOA and industrial entrances.' },
      { q: 'I was told my LiftMaster was beyond repair. Should I get a second opinion?', a: 'Often it is worth one. Ask which specific component was tested and found faulty — boards, capacitors, limit switches and batteries are all replaceable parts on these operators.' },
    ],
    localKeywords: [
      'LiftMaster gate opener repair Dallas',
      'LiftMaster gate repair Fort Worth',
      'LiftMaster operator repair Arlington',
      'commercial LiftMaster gate repair Irving',
    ],
  },

  {
    slug: 'us-automatic-ranger-repair',
    h1: 'US Automatic Ranger Repair in Dallas–Fort Worth',
    title: 'US Automatic Ranger Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'US Automatic Ranger gate opener slow, stopping partway or dead? We repair Ranger solar and electric operators across North Texas. Open 24/7. Call now.',
    subhead: 'Solar and electric Ranger operators on ranch and acreage driveways.',
    brandSlug: 'us-automatic',
    mediaCategory: 'us-automatic',
    problem: [
      'Your Ranger has slowed down, stopped partway, or stopped altogether — and on a long rural driveway that is not a minor inconvenience.',
      'On these operators the fault is usually in the power system rather than the operator. That is good news: batteries, panels and charge controllers are all straightforward replacements.',
    ],
    modelDescription: [
      'US Automatic builds both solar and electric gate operators, and the Ranger line is common on ranch and acreage entrances across North Texas where the gate sits a long way from mains power.',
      'A solar Ranger is a power system with a gate attached. The operator draws from a battery, the panel keeps the battery charged, and a charge controller manages it. If any part of that chain underperforms, the gate behaves exactly like a failing operator — slow travel, partial opening, or nothing at all. On a mains-powered Ranger the same symptoms point somewhere quite different, which is why establishing which system you have comes first.',
    ],
    commonIssues: [
      { title: 'Gate slows down through the day', body: 'The classic signature of a charging system that is not keeping up. The battery starts the day charged and cannot sustain the cycles.' },
      { title: 'Works in summer, fails in winter', body: 'Shorter days and a lower sun angle mean less generation, while cold reduces battery capacity at the same time. A system that was marginal in summer will fail in winter.' },
      { title: 'Completely dead', body: 'Usually a battery at end of life or a failed charge controller. Both are replaceable parts.' },
      { title: 'Panel is clean but output is low', body: 'Shading from grown trees, panel angle drift, or an aged panel. We measure output rather than assuming.' },
      { title: 'Board damage after a storm', body: 'Rural sites take surges. The control board is replaceable without a new operator.' },
      { title: 'Gate drags or binds', body: 'On long driveways the gate and its hardware take weather and ground movement. A binding gate drains a battery fast.' },
    ],
    process: [
      { step: 'Establish solar or mains', body: 'The two have completely different fault paths. This is the first question, not an afterthought.' },
      { step: 'Measure the battery under load', body: 'A battery can read fine at rest and collapse the moment the gate draws from it. Resting voltage alone proves nothing.' },
      { step: 'Measure panel output and the charge controller', body: 'Actual generation against actual demand, rather than assuming the array is adequate because it was once.' },
      { step: 'Check the gate and hardware', body: 'A dragging gate doubles the load on the battery and is often the real cause.' },
      { step: 'Size the fix to the gate', body: 'If the array was marginal when installed, replacing like for like puts you back here next year. We size it to what the gate actually uses.' },
    ],
    faqs: [
      { q: 'My solar gate has stopped. Is the operator dead?', a: 'Usually not. On solar units the battery is the part that wears out, typically every three to five years in Texas heat, and a weak battery behaves exactly like a failed operator. We test the battery, panel output and charge controller before touching the operator.' },
      { q: 'Do you repair electric US Automatic units too?', a: 'Yes. US Automatic makes both solar and electric operators and we service the full range.' },
      { q: 'Can you upgrade my solar system so this stops happening?', a: 'Yes, and we size it to the gate rather than fitting like for like. Most repeat failures we see are undersized arrays rather than faulty equipment.' },
      { q: 'Do you cover rural properties outside the metro?', a: 'Yes. A large share of these operators are on acreage well outside the city limits, and those are the properties where a failed gate is most disruptive. Call and we will confirm coverage for your address.' },
    ],
    localKeywords: [
      'US Automatic Ranger repair Texas',
      'solar gate opener repair Denton',
      'ranch gate opener repair Weatherford',
      'US Automatic gate repair Parker County',
    ],
  },

  {
    slug: 'doorking-repair',
    h1: 'DoorKing Repair in Dallas–Fort Worth',
    title: 'DoorKing (DKS) Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'DoorKing gate operator or telephone entry system down? We repair and program DKS operators, entry panels and card readers across Dallas–Fort Worth. Open 24/7.',
    subhead: 'Gate operators, telephone entry and access control — both sides of the system.',
    brandSlug: 'doorking',
    mediaCategory: 'doorking',
    problem: [
      'Your DoorKing system has failed, and if it runs an apartment complex, HOA or commercial entrance, that means residents or staff cannot get in.',
      'A DKS installation is two systems that have to agree with each other. When the gate will not open, the operator is frequently fine and the fault is in the entry panel, the programming or the loop.',
    ],
    modelDescription: [
      'DoorKing — DKS — builds gate operators alongside the telephone entry and access control systems that drive them. The 1830 and 1835 entry panels, the 6000-series slide and swing operators and the 9000-series barrier gates are all common across the Metroplex.',
      'Because the operator and the access control are separate systems, diagnosing them together is what avoids two call-outs. A resident who can dial through but cannot get the gate to open has told you something specific: the entry panel works, and the fault lies between it and the operator.',
    ],
    commonIssues: [
      { title: 'Residents can call in but the gate will not open', body: 'The entry panel is working, so the fault sits between it and the operator — usually the relay output, the wiring run, or the operator input.' },
      { title: 'Entry system stopped dialling out', body: 'Common after a phone provider change. Older DKS panels expect an analogue line; VoIP changes what the panel is dialling into. Usually a cellular module rather than a new system.' },
      { title: 'Card reader or keypad not reading', body: 'Reader failure, wiring, or credential programming. All three are serviceable.' },
      { title: 'Directory or codes corrupted', body: 'Programming can be restored. We reprogram directories, access codes and card credentials.' },
      { title: 'Gate opens for no reason', body: 'Typically a loop detector fault or a loop damaged by ground movement or resurfacing.' },
      { title: 'Gearbox noise on a high-cycle entrance', body: 'Apartment and HOA gates run hundreds of cycles a day. A gearbox is a serviceable assembly and can usually be rebuilt with the motor and board left in place.' },
    ],
    process: [
      { step: 'Diagnose both systems together', body: 'Operator and access control in one visit, because the fault is frequently not where the symptom points.' },
      { step: 'Isolate panel from operator', body: 'A simple test tells us which of the two systems has failed and stops us replacing the wrong thing.' },
      { step: 'Check loops and safety devices', body: 'Loop detectors and photo-eyes cause a surprising share of "the gate is broken" calls.' },
      { step: 'Quote before we work', body: 'Diagnosis, part and price before anything is replaced.' },
      { step: 'Repair and reprogram', body: 'Including directory entries, access codes, card credentials and dial-out configuration.' },
    ],
    faqs: [
      { q: 'Do you program DoorKing telephone entry systems?', a: 'Yes — directory entries, access codes, card credentials and dial-out configuration, as well as the physical repair.' },
      { q: 'Our DKS stopped working after we changed phone providers.', a: 'Common, and not a fault in the unit. Older entry systems expect an analogue line, and a move to VoIP changes what the panel dials into. The fix is usually a cellular module rather than replacing the system.' },
      { q: 'Can a DoorKing gearbox be rebuilt instead of replaced?', a: 'Often, yes. A gearbox is a serviceable assembly rather than a sealed unit, and on a DKS operator it can usually be rebuilt with the motor and control board left in place. We have documented one of these jobs in full in our case studies.' },
      { q: 'Do you handle apartment and HOA entrances?', a: 'Yes. High-cycle multi-family and commercial entrances are routine work for us, and we treat a failed one as urgent.' },
    ],
    localKeywords: [
      'DoorKing repair Dallas',
      'DKS telephone entry repair Fort Worth',
      'apartment gate access system repair Irving',
      'DoorKing gate operator repair Plano',
    ],
  },

  {
    slug: 'elite-gate-repair',
    h1: 'Elite Gate Repair in Dallas–Fort Worth',
    title: 'Elite Gate Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'Elite gate repair across Dallas–Fort Worth. Boards, capacitors, limit switches and chain wear on Elite swing and slide operators. Open 24/7. Call now.',
    subhead: 'Elite swing and slide operators on residential and light commercial gates.',
    brandSlug: 'elite',
    mediaCategory: 'elite',
    problem: [
      'Your Elite operator has stopped working properly, and you are trying to work out whether it needs a repair or a replacement.',
      'Elite gate repair is routine work for us. Boards, capacitors and limit switches are the parts that fail on these units, and all three are replaceable without a new operator.',
    ],
    modelDescription: [
      'Elite operators are common on Dallas residential and light commercial gates, including the CSW200UL swing operator, the SL3000UL slide operator and the Q-series units.',
      'Elite shares a good deal of hardware with the LiftMaster line, which helps considerably with parts availability. Diagnostics are broadly similar, though board layouts and error codes differ between models, so the model on the housing matters when we quote.',
    ],
    commonIssues: [
      { title: 'Control board failure', body: 'Frequently after a surge. A board is a replaceable part and a fraction of the cost of a new operator.' },
      { title: 'Capacitor failure', body: 'The classic symptom is a hum with no movement. Inexpensive and quick to replace.' },
      { title: 'Limit switch drift', body: 'The gate stops in the wrong place or overtravels. Often mistaken for a board fault.' },
      { title: 'Photo-eye alignment faults', body: 'The gate refuses to close. Usually a bracket knocked out of alignment rather than a failed sensor.' },
      { title: 'Chain and sprocket wear on slide units', body: 'Worth catching early — a worn chain left running will eventually take the sprocket and sometimes the gearbox with it.' },
      { title: 'Battery backup failure', body: 'The gate stops working in a power cut, which is exactly when you need it most.' },
    ],
    process: [
      { step: 'Move the gate by hand', body: 'Rollers, hinges and posts move a gate relative to its limits and produce faults that read as electrical. This comes first.' },
      { step: 'Read the model and the error code', body: 'Elite board layouts and codes differ between models. Getting this right is what makes the rest quick.' },
      { step: 'Test board, capacitor and limits', body: 'Component by component rather than replacing the assembly.' },
      { step: 'Quote before we work', body: 'Diagnosis, part and price up front.' },
      { step: 'Repair, usually first visit', body: 'We carry the Elite parts that actually fail.' },
    ],
    faqs: [
      { q: 'Is Elite the same as LiftMaster?', a: 'They are related product lines and share some components, which helps with parts availability. Diagnostics are broadly similar, though board layouts and error codes differ between models.' },
      { q: 'My Elite slide gate grinds when it moves. What is that?', a: 'Typically chain, sprocket or roller wear. Worth catching early — a worn chain that is left running will eventually take the sprocket and sometimes the gearbox with it.' },
      { q: 'Do you carry Elite parts?', a: 'We carry the parts that commonly fail — boards, capacitors and limit hardware — so most Elite gate repair jobs finish on the first visit.' },
      { q: 'Can an older Elite operator still be repaired?', a: 'Usually yes. Parts availability is good because of the shared hardware, and the mechanical side of these operators was built to last.' },
    ],
    localKeywords: [
      'Elite gate repair Dallas',
      'Elite gate operator repair Fort Worth',
      'Elite SL3000 repair Plano',
      'Elite swing gate repair McKinney',
    ],
  },

  {
    slug: 'faac-gate-repair',
    h1: 'FAAC Gate Repair in Dallas–Fort Worth',
    title: 'FAAC Gate Repair Dallas–Fort Worth | Hydraulic Specialists',
    metaDescription:
      'FAAC hydraulic gate operator repair across Dallas–Fort Worth. Seals, fluid, pressure and boards are all serviceable. Open 24/7. Call Shield Gate Repair.',
    subhead: 'Hydraulic operators, diagnosed properly rather than replaced.',
    brandSlug: 'faac',
    mediaCategory: 'faac',
    problem: [
      'Your FAAC operator is slow, leaking, opening partway, or has stopped — and finding someone in Dallas who works on hydraulics has not been straightforward.',
      'FAAC units are designed to be serviced. Seals, fluid, pressure and boards are all replaceable, and replacement of the whole operator is genuinely necessary only when the housing or ram is physically damaged.',
    ],
    modelDescription: [
      'FAAC builds hydraulic gate operators — the 400, 402, 750 and 844 lines among them — used on residential estates, gated communities and commercial entrances across the Metroplex.',
      'Hydraulics are why these operators last, and also why they get misdiagnosed. Gate work in Dallas is overwhelmingly chain-drive and screw-drive, so a hydraulic unit sits outside what many technicians carry parts and training for. Pressure, fluid condition and seal integrity are measurable things, and measuring them is what separates a repair from a replacement quote.',
    ],
    commonIssues: [
      { title: 'Slow or incomplete travel', body: 'Typically pressure loss. Measurable, and usually a seal or fluid issue rather than a failed unit.' },
      { title: 'Visible fluid leak', body: 'Seal failure. Seals are replaceable parts; a leaking FAAC is not a scrapped FAAC.' },
      { title: 'Gate drifts or will not hold position', body: 'Internal valve or pressure fault. Diagnosable with the right instruments.' },
      { title: 'Control board failure', body: 'Often after a surge. A board is replaceable without touching the hydraulics.' },
      { title: 'Limit and encoder drift', body: 'The gate stops in the wrong place. Frequently mistaken for something far more serious.' },
      { title: 'Noisy pump', body: 'Fluid level, fluid condition or pump wear. Worth diagnosing early.' },
    ],
    process: [
      { step: 'Confirm it is hydraulic', body: 'It sounds obvious. It is also the step that most often has not been taken before a replacement gets quoted.' },
      { step: 'Measure pressure and inspect fluid', body: 'Pressure under load and fluid condition tell us most of what we need to know.' },
      { step: 'Check seals and ram', body: 'Seals are serviceable. A damaged housing or ram is the one case where replacement is genuinely the answer.' },
      { step: 'Test the board and limits', body: 'The electrical side is diagnosed separately from the hydraulic side.' },
      { step: 'Quote the repair, not the replacement', body: 'You get the diagnosis and the price before any work starts.' },
    ],
    faqs: [
      { q: 'I was told my FAAC cannot be repaired. Is that true?', a: 'Almost never. FAAC units are designed to be serviced: seals, fluid, pressure and boards are all replaceable. Replacement genuinely makes sense only when the housing or ram is physically damaged. If you have been told otherwise, ask which specific component was tested and found faulty.' },
      { q: 'Do you actually work on hydraulics?', a: 'Yes. It is one of the reasons customers call us — hydraulic operators need different diagnostics, different parts and different training to a chain drive, and we have the instruments to measure rather than guess.' },
      { q: 'Can you get FAAC parts in Dallas?', a: 'Yes. FAAC is less common here than LiftMaster, so some parts are ordered rather than carried on every truck, and we confirm availability before quoting a repair.' },
      { q: 'Is a leaking FAAC worth repairing?', a: 'Usually, yes. A leak means a seal, and seals are a serviceable part. The expensive components — the housing, the ram, the motor — are typically fine.' },
    ],
    localKeywords: [
      'FAAC gate repair Dallas',
      'hydraulic gate operator repair Fort Worth',
      'FAAC 402 repair Highland Park',
      'FAAC gate repair Southlake',
    ],
  },

  {
    slug: 'apollo-gate-repair',
    h1: 'Apollo Gate Repair in Dallas–Fort Worth',
    title: 'Apollo Gate Opener Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'Apollo solar gate opener slow, stopping partway or dead? We repair Apollo swing and slide operators across North Texas. Open 24/7. Call Shield Gate Repair.',
    subhead: 'Solar and battery-powered Apollo operators on acreage driveways.',
    brandSlug: 'apollo',
    mediaCategory: null,
    problem: [
      'Your Apollo gate opener has slowed, stopped partway, or stopped altogether.',
      'On these operators the fault is usually in the power system rather than the operator itself — which means the repair is normally straightforward and considerably cheaper than a replacement.',
    ],
    modelDescription: [
      'Apollo builds solar-capable swing and slide gate operators found on a great many North Texas acreage properties, usually paired with a battery and a small panel. The 1500, 1600 and 7000 series are the ones we see most.',
      'Because these installs are typically off-grid, most faults are power faults. A dying battery, an undersized panel or an array that is now shaded by grown trees produces exactly the symptoms of a failing control board, so the charging system has to be measured under load before anything is condemned.',
    ],
    commonIssues: [
      { title: 'Gate slows through the day', body: 'A charging system not keeping up with demand. The battery starts charged and cannot sustain the cycles.' },
      { title: 'Opens partway and stops', body: 'Most often the battery can no longer complete a full cycle under load.' },
      { title: 'Dead after winter', body: 'Shorter days plus cold-reduced battery capacity. A system that was marginal in summer fails in winter.' },
      { title: 'Control board or receiver failure', body: 'Both are replaceable parts and do not require a new operator.' },
      { title: 'Limit switch drift on swing arms', body: 'The gate stops in the wrong place. Often mistaken for something more serious.' },
      { title: 'Corroded connections in the enclosure', body: 'Moisture in the box causes intermittent faults that come and go with the weather.' },
    ],
    process: [
      { step: 'Measure the battery under load', body: 'A battery can read fine at rest and collapse the moment the gate draws from it.' },
      { step: 'Measure panel output', body: 'Actual generation against actual demand, including shading that has grown in since installation.' },
      { step: 'Inspect the enclosure and connections', body: 'Corrosion and moisture ingress cause intermittent faults that parts alone will not fix.' },
      { step: 'Test the board and limits', body: 'Only after the power system is ruled out, because that is where the fault usually is.' },
      { step: 'Size the fix to the gate', body: 'An array that was marginal when installed will be marginal again if replaced like for like.' },
    ],
    faqs: [
      { q: 'My solar Apollo gate has slowed down. Is the operator dead?', a: 'Usually not. A gate that gets worse toward the end of the day is the classic signature of a charging system that is not keeping up, not a failing operator. We measure the battery under load and the panel output before touching the operator.' },
      { q: 'Can you replace an Apollo battery and solar panel?', a: 'Yes, and we size the replacement to the gate rather than fitting like for like. An array that was marginal when installed will be marginal again.' },
      { q: 'Do you cover rural and acreage properties?', a: 'Yes. Most Apollo installs we see are on acreage, often well outside the city limits. Call and we will confirm coverage for your address.' },
      { q: 'How long should an Apollo battery last?', a: 'Typically three to five years, and less in Texas heat. If yours is failing sooner than that, the array is usually undersized for the number of cycles the gate runs.' },
    ],
    localKeywords: [
      'Apollo gate opener repair Texas',
      'solar gate repair Denton County',
      'Apollo 1600 repair Weatherford',
      'acreage gate opener repair Aledo',
    ],
  },

  {
    slug: 'viking-gate-repair',
    h1: 'Viking Gate Repair in Dallas–Fort Worth',
    title: 'Viking Gate Operator Repair Dallas–Fort Worth | Shield Gate Repair',
    metaDescription:
      'Viking gate operator repair across Dallas–Fort Worth. Boards, limits, hydraulics and high-cycle commercial units. Open 24/7. Call Shield Gate Repair.',
    subhead: 'Heavy-duty Viking operators on residential and commercial entrances.',
    brandSlug: 'viking',
    mediaCategory: 'viking',
    problem: [
      'Your Viking operator has stopped working, and because these are heavy-duty units the gate they move is usually one you cannot easily work around.',
      'Viking operators are built to be serviced. Boards, limits and hydraulic components are all replaceable, and a fault is rarely a reason to replace the unit.',
    ],
    modelDescription: [
      'Viking builds heavy-duty swing and slide gate operators for residential estates and commercial sites, including hydraulic models designed for continuous duty.',
      'These are substantial units, frequently fitted to large or heavy gates. That matters for diagnosis: on a heavy gate, wear in the gate hardware itself — rollers, hinges, posts — puts load on the operator and produces faults that look electrical. We check the gate before we check the board.',
    ],
    commonIssues: [
      { title: 'Gate stops in the wrong place', body: 'Limit drift, or wear in the gate hardware that has moved the gate relative to the limits that were set for it.' },
      { title: 'Slow or laboured travel', body: 'On hydraulic models, pressure loss. On others, a binding gate or a failing capacitor.' },
      { title: 'Control board failure', body: 'Often after a surge. Replaceable without a new operator.' },
      { title: 'Hydraulic leak or pressure loss', body: 'Seals and fluid are serviceable. A leak is not a scrapped operator.' },
      { title: 'High-cycle wear on commercial sites', body: 'Chains, bearings and rollers are consumables on a gate running hundreds of cycles a day. Planned replacement costs far less than the failure it prevents.' },
      { title: 'Safety device faults', body: 'Photo-eyes and edges stop the gate closing. Usually alignment rather than failure.' },
    ],
    process: [
      { step: 'Move the gate by hand', body: 'On heavy gates this is the most informative single test there is. A dragging gate produces electrical-looking symptoms.' },
      { step: 'Inspect rollers, hinges and posts', body: 'Wear here moves the gate relative to its limits and will destroy a new operator too.' },
      { step: 'Test the electrical side', body: 'Board, capacitor, limits and safety devices in order.' },
      { step: 'Measure hydraulics where fitted', body: 'Pressure under load and fluid condition.' },
      { step: 'Quote before we work', body: 'Diagnosis, part and price before anything is replaced.' },
    ],
    faqs: [
      { q: 'My Viking gate stops in the wrong place. Is the board faulty?', a: 'Often not. Worn rollers or hinges drop the gate on its track, which moves every position in its travel — so the limits that were set are no longer where the gate physically sits. We have documented exactly this job in our case studies.' },
      { q: 'Do you repair hydraulic Viking operators?', a: 'Yes. Seals, fluid and pressure are all serviceable, and a hydraulic unit that is leaking or slow is very rarely beyond repair.' },
      { q: 'Do you service commercial Viking installations?', a: 'Yes, including high-cycle entrances where downtime stops a business. We also set up planned servicing on those, because parts there wear on cycle count rather than calendar age.' },
      { q: 'Is a heavy gate hard on the operator?', a: 'It is if the gate hardware is worn. An operator fighting a dragging gate fails early, which is why we check the gate first rather than fitting a new unit to the same problem.' },
    ],
    localKeywords: [
      'Viking gate repair Dallas',
      'Viking gate operator repair Fort Worth',
      'commercial gate repair Grand Prairie',
      'heavy duty gate repair Southlake',
    ],
  },
]

export const landingBySlug = (slug: string) => landingPages.find((p) => p.slug === slug)

/**
 * Landing pages for a brand, so brand pages can link to them.
 *
 * Without this the landing pages are orphans: reachable from an ad and from
 * the sitemap, but with no inbound internal link, which is a weak signal for
 * the organic traffic those long-tail model queries also attract.
 */
export const landingPagesForBrand = (brandSlug: string) =>
  landingPages.filter((p) => p.brandSlug === brandSlug)

export { DFW }
