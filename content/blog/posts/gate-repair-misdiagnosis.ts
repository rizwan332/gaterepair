import type { BlogPost } from '../types'

export const gateRepairMisdiagnosis: BlogPost = {
  slug: 'gate-repair-misdiagnosis',
  status: 'published',
  publishedAt: '2026-11-27',
  category: 'job-stories',
  title: 'Three Gate Repairs Where the Obvious Diagnosis Was Wrong',
  h1: 'Three Gate Repairs Where the Obvious Diagnosis Was Wrong',
  description:
    'A humming motor, a gate stalling halfway and a gate ignoring trucks. Three jobs where the obvious answer was wrong, and what each one teaches gate owners.',
  intro:
    'Gate faults are good at pointing in the wrong direction. These three jobs from our project files each had an obvious diagnosis, and in each case the obvious diagnosis would have cost the owner money without fixing the gate.',
  primaryQuery: 'gate opener misdiagnosed repair',
  image: { category: 'all-o-matic', index: 3 },
  body: [
    {
      type: 'p',
      text: 'Most misdiagnosis in gate repair comes from skipping steps. A symptom suggests a part, the part gets quoted, and nobody checks whether the part is actually at fault. The three jobs below are ones where a careful check, done in the right order, pointed somewhere else entirely.',
    },
    { type: 'h2', text: 'Job 1: a LiftMaster humming but not moving' },
    { type: 'h3', text: 'What it looked like' },
    {
      type: 'p',
      text: 'The gate had stopped moving entirely. Power was reaching the unit, and when a command was given the motor could be heard humming, but nothing moved. A motor that hums and will not turn sounds like a motor that has failed, and a failed motor on an older operator easily turns into a replacement quote.',
    },
    { type: 'h3', text: 'What it actually was' },
    {
      type: 'p',
      text: 'The checks went in order. Supply voltage at the board was normal. With the operator released, the gate moved freely by hand through its full travel, so there was no mechanical bind. Then the run capacitor was tested under load, and it was reading well below its rated value. That is exactly the condition that produces a motor that hums but cannot break away from standstill.',
    },
    {
      type: 'p',
      text: 'A correctly rated capacitor went in, and the gate was run through several full cycles to confirm the fix held once warm. Normal operation was restored the same visit, with one of the least expensive parts on the gate. The full write-up is at [LiftMaster humming but not moving](/projects/liftmaster-capacitor-not-motor).',
    },
    { type: 'h2', text: 'Job 2: an All-O-Matic stalling halfway' },
    { type: 'h3', text: 'What it looked like' },
    {
      type: 'p',
      text: 'A slide gate would start normally, travel roughly half its length, then stall and reverse. It had been intermittent for weeks and had become constant. A gate that stops partway and reverses looks like an operator that has lost its strength, or a clutch that is slipping and needs tightening.',
    },
    { type: 'h3', text: 'What it actually was' },
    {
      type: 'p',
      text: 'With the operator released, the gate moved freely for the first half of its travel and then became noticeably harder to push, exactly where it had been stalling under power. The rollers on the leading edge had developed flats, and the track had collected enough grit to bind them. The clutch was slipping precisely as designed. It was the safety feature doing its job.',
    },
    {
      type: 'p',
      text: 'The worn rollers were replaced, the full length of the track was cleared and cleaned, and the gate was checked by hand through complete travel. Only then was the clutch reset to specification. Setting a clutch against a binding gate simply hides the problem. See [All-O-Matic stalling mid-travel](/projects/all-o-matic-clutch-misdiagnosis).',
    },
    {
      type: 'callout',
      tone: 'safety',
      title: 'Tightening the clutch is not a repair',
      text: 'The clutch on a slide operator is there to slip when the gate meets resistance, so the gate does not crush whatever is in its way. Tightening it to push through a binding gate removes that protection. If a gate stalls, find out why it is hard to move before anyone touches the clutch.',
    },
    { type: 'cta', variant: 'call' },
    { type: 'h2', text: 'Job 3: a commercial gate ignoring trucks' },
    { type: 'h3', text: 'What it looked like' },
    {
      type: 'p',
      text: 'At an industrial yard, the gate had stopped detecting approaching vehicles. Drivers were getting out to use the keypad, on a site running deliveries all day. The fault had been intermittent for a fortnight before failing completely. A gate that will not open for vehicles is easy to blame on the operator.',
    },
    { type: 'h3', text: 'What it actually was' },
    {
      type: 'p',
      text: 'The operator cycled correctly on a manual command, so the gate itself was fine and the fault was in detection. The loop detector tested healthy. The buried loop did not: its resistance was out of range, consistent with a break in the loop wire. Surface cracking across the driveway lined up with where the loop runs, which is the usual cause, because ground movement shears the wire.',
    },
    {
      type: 'p',
      text: 'A replacement loop was cut in and sealed, and the detector was re-tuned to it. Testing was done with the site\'s own vehicles rather than a car, because detection sensitivity differs considerably between a car and a loaded truck. The write-up is at [commercial gate ignoring trucks](/projects/commercial-loop-detector-fault).',
    },
    { type: 'h2', text: 'The three side by side' },
    {
      type: 'table',
      head: ['Symptom', 'Obvious diagnosis', 'Actual cause', 'The check that found it'],
      rows: [
        ['Motor hums, gate does not move', 'Failed motor or operator', 'Capacitor below its rated value', 'Gate moved by hand, then capacitor tested under load'],
        ['Gate stalls halfway and reverses', 'Weak operator or slipping clutch', 'Flat rollers and grit binding the track', 'Gate pushed by hand through full travel'],
        ['Gate ignores vehicles', 'Operator fault', 'Broken loop wire under cracked paving', 'Manual command, then detector and loop tested separately'],
      ],
    },
    { type: 'h2', text: 'What these jobs have in common' },
    {
      type: 'ul',
      items: [
        'Each one started by separating the gate from the operator. Releasing the operator and moving the gate by hand, or running it on a manual command, splits the problem in half before any part is suspected.',
        'Each one tested the suspect part directly instead of inferring it from the symptom. A capacitor reading, a loop resistance reading and the feel of the gate under hand are evidence. A humming noise is a clue.',
        'In two of the three, the part that seemed to be failing was working correctly. The clutch was slipping as designed, and the operator in the yard was cycling normally.',
        'Each fix dealt with the cause, then confirmed the result: several warm cycles, full travel by hand, testing with real vehicles.',
      ],
    },
    { type: 'h2', text: 'What gate owners can take from this' },
    {
      type: 'p',
      text: 'You do not need to diagnose your own gate, but you can ask the questions that keep a diagnosis honest. Ask how the failed part was confirmed. Ask whether the gate was moved by hand with the operator released. Ask whether the operator was run on a manual command to rule out sensors, loops and access devices. A technician who did the work will answer straight away.',
    },
    {
      type: 'p',
      text: 'Local conditions make some of these faults more common here. Summer heat is hard on capacitors and boards, and the expansive clay under much of Dallas–Fort Worth moves driveways and posts, which cracks loops and pulls gates out of line. If you are being told a gate opener needs replacing, our [gate opener and motor repair](/services/gate-motor-repair) service starts with the same checks described above. For the symptoms in these jobs, see also [gate motor not working](/gate-problems/gate-motor-not-working), [gate stops halfway](/gate-problems/gate-stops-halfway) and [gate loop detector not working](/gate-problems/gate-loop-detector-not-working).',
    },
  ],
  faqs: [
    {
      q: 'How do I know if my gate opener has been misdiagnosed?',
      a: 'Ask how the fault was confirmed. A sound diagnosis names a test: a voltage reading, a capacitor reading, a loop resistance, or the gate checked by hand. If the answer is only the symptom, such as "it hums, so the motor is gone", get a second opinion before paying for an operator.',
    },
    {
      q: 'Why do gate technicians move the gate by hand first?',
      a: 'Because an operator is sized to move a gate that swings or rolls freely. If the gate binds, drags or gets harder to move partway, the operator will look weak or faulty when it is really fighting the gate. Checking by hand separates a gate problem from an operator problem in a minute.',
    },
    {
      q: 'Is a humming gate motor always the capacitor?',
      a: 'Not always, but it is the first thing to test once power and a free-moving gate are confirmed. A capacitor below its rated value is one of the most common causes of a motor that hums without turning. See [gate opener and motor repair](/services/gate-motor-repair).',
    },
  ],
  related: {
    services: ['gate-motor-repair', 'commercial-gate-repair', 'sliding-gate-repair'],
    symptoms: ['gate-motor-not-working', 'gate-stops-halfway', 'gate-loop-detector-not-working'],
    brands: ['liftmaster', 'all-o-matic'],
  },
}
