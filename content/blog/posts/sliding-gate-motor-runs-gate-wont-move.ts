import type { BlogPost } from '../types'

export const slidingGateMotorRunsGateWontMove: BlogPost = {
  slug: 'sliding-gate-motor-runs-gate-wont-move',
  status: 'published',
  publishedAt: '2026-11-09',
  category: 'troubleshooting',
  title: 'Sliding Gate Motor Runs but Gate Won’t Move: Causes',
  h1: 'Sliding Gate Motor Runs but the Gate Will Not Move',
  description:
    'When a slide gate motor runs but the gate stays put, the drive is not reaching the gate. Six common causes, what each one looks like, and what to check first.',
  intro:
    'If you can hear the motor running and the gate is not moving, the operator is working and the power is not reaching the gate. That narrows the fault to a short list of mechanical parts between the motor and the gate frame.',
  primaryQuery: 'sliding gate motor runs but gate does not move',
  image: { category: 'all-o-matic', index: 1 },
  body: [
    {
      type: 'p',
      text: 'This is a different fault from a motor that hums or clicks and does not turn. A humming motor usually points to a capacitor or an electrical problem. A motor that spins freely, sometimes louder or faster than normal, means the drive train has come apart somewhere, or something is slipping on purpose because the gate is too hard to push.',
    },
    { type: 'h2', text: 'How a slide gate operator moves the gate' },
    {
      type: 'p',
      text: 'On most residential and commercial slide operators, the motor turns a gearbox, the gearbox turns an output shaft, and a drive sprocket on that shaft pulls a chain bolted to each end of the gate. Some operators use a gear rack on the gate frame instead of a chain. Between the motor and the sprocket there is usually a clutch or a torque limiter, and on most units a manual release that lets you push the gate by hand. A break or slip at any of those points gives the same result: motor running, gate still.',
    },
    { type: 'h2', text: 'Six causes, from most to least obvious' },
    { type: 'h3', text: '1. The chain is broken or has jumped the sprocket' },
    {
      type: 'p',
      text: 'Look along the gate first. A broken chain lies on the ground or hangs off one bracket. A chain that has come off the sprocket or the idler wheels is still attached at both ends but no longer wrapped through the operator. Chains stretch over time, and a slack chain is the one that jumps. See [gate chain broken](/gate-problems/gate-chain-broken) for what a proper repair involves, including setting the tension so it does not happen again.',
    },
    { type: 'h3', text: '2. A sheared drive sprocket, key or pin' },
    {
      type: 'p',
      text: 'The sprocket is held on its shaft by a key, a set screw or a shear pin. On some operators that pin is designed to break before something more expensive does. If the chain is intact and tight but the sprocket spins on the shaft, or the shaft turns and the sprocket does not, the connection between them has failed. A gate that was hit by a vehicle, or forced open by hand while the operator was engaged, is a common way to shear one.',
    },
    { type: 'h3', text: '3. The clutch is slipping' },
    {
      type: 'p',
      text: 'Many slide operators have an adjustable clutch that slips when the gate meets more resistance than it should. It is a safety feature. If the clutch is slipping, the question is why the gate is so hard to move, not how to tighten the clutch. We saw exactly this on an [All-O-Matic that kept stalling halfway](/projects/all-o-matic-clutch-misdiagnosis): worn rollers and a gritty track made the gate bind, and the clutch was doing its job. The fix was rollers and a clean track, and the clutch was reset to specification only after the gate moved freely by hand.',
    },
    {
      type: 'callout',
      tone: 'safety',
      title: 'Do not crank the clutch up to make it work',
      text: 'Tightening a clutch against a binding gate hides the real fault and removes the protection that stops the gate pushing through an obstruction, a car or a person. Set it to the manufacturer specification, on a gate that moves freely.',
    },
    { type: 'h3', text: '4. A stripped gear in the gearbox' },
    {
      type: 'p',
      text: 'If the chain, sprocket and clutch all check out, the gearbox is next. A stripped gear often makes a grinding or knocking sound, and the output shaft may turn in short bursts or not at all while the motor runs. This is an internal repair. The gearbox comes apart, and the worn gear or the whole reducer is replaced depending on the model and what parts are available.',
    },
    { type: 'h3', text: '5. The manual release is still engaged' },
    {
      type: 'p',
      text: 'This one catches people after a power cut or a service visit. If someone released the operator to push the gate by hand and never re-engaged it, the motor will run freely and the gate will not move. Check the release handle, knob or key on the operator before anything else. It costs nothing to rule out.',
    },
    { type: 'h3', text: '6. The gate is binding on its track or rollers' },
    {
      type: 'p',
      text: 'A gate that is jammed hard enough will stop even a healthy operator, and the clutch will slip or a pin will shear. Broken rollers, a bent track, a rock in the track or a gate that has dropped onto its guide rollers all do it. In Dallas–Fort Worth, expansive clay can shift a track or post between wet and dry seasons enough to start binding. See [sliding gate stuck](/gate-problems/sliding-gate-stuck) for the common track and roller faults.',
    },
    { type: 'cta', variant: 'call' },
    { type: 'h2', text: 'Quick reference: what you see and what it usually means' },
    {
      type: 'table',
      head: ['What you see or hear', 'Most likely cause'],
      rows: [
        ['Chain on the ground or hanging loose', 'Broken chain or a failed chain bracket'],
        ['Chain intact but off the sprocket or idlers', 'Chain stretched and jumped, or the gate was forced'],
        ['Chain tight, sprocket turning on its shaft', 'Sheared key, pin or loose set screw'],
        ['Gate moves a little, then stops while the motor keeps running', 'Clutch slipping because the gate is binding'],
        ['Grinding or knocking from the operator', 'Stripped gear in the gearbox'],
        ['Motor spins freely, gate rolls easily by hand', 'Manual release still engaged'],
      ],
    },
    { type: 'h2', text: 'What you can safely check yourself' },
    {
      type: 'ol',
      items: [
        'Turn off power to the operator at its switch or breaker before touching the chain, sprocket or anything inside the housing.',
        'Look at the release handle or key. If it is in the released position, re-engage it following the manual for your operator.',
        'Walk the length of the gate and check the chain is attached at both ends and running through the operator.',
        'With the operator released, push the gate through its full travel. It should roll with steady, moderate effort. If it drags, sticks or gets harder at one point, the gate is the problem.',
        'Look in the track for stones, debris or damage, and look at each roller for flats, cracks or wobble.',
      ],
    },
    {
      type: 'p',
      text: 'Stop there. Re-fitting a chain under tension, replacing a sprocket, adjusting a clutch and opening a gearbox all need the right parts and settings for the specific operator, and a gate that moves unexpectedly can crush a hand or foot. Keep everyone clear of the gate path while you work, and never reach into the operator with power on.',
    },
    { type: 'h2', text: 'Why it matters to find the cause, not just the broken part' },
    {
      type: 'p',
      text: 'A broken chain or sheared pin is often the symptom. If the gate has been binding for months, the new chain or pin fails the same way. A proper [sliding gate repair](/services/sliding-gate-repair) checks the gate by hand with the operator released, fixes the rollers, track or alignment first, then repairs the drive and sets the clutch and limits. If the operator itself has worn out, [gate motor repair](/services/gate-motor-repair) covers gearbox and motor work on most major brands.',
    },
  ],
  faqs: [
    {
      q: 'Is it safe to run the gate opener if the motor runs but the gate does not move?',
      a: 'No. Running a motor with a broken drive can damage the gearbox, and if the fault is a slipping clutch on a binding gate, repeated attempts wear the clutch and strain the motor. Turn it off, release the operator and secure the gate by hand until it is repaired.',
    },
    {
      q: 'Can I just put the chain back on the sprocket?',
      a: 'Sometimes, but a chain that jumped usually did so because it was slack or the gate was binding. Re-fitting it without correcting the tension and checking the gate by hand means it will come off again. Turn the power off first, and if you are not sure how the chain routes through the idlers on your operator, leave it to a technician.',
    },
    {
      q: 'Why did the clutch start slipping all of a sudden?',
      a: 'It is rarely sudden. Rollers wear, track debris builds up and posts shift slowly, and the gate gets harder to push until it crosses the clutch setting. Check how the gate moves by hand with the operator released. That usually shows where the resistance is.',
    },
  ],
  related: {
    services: ['sliding-gate-repair', 'gate-motor-repair', 'automatic-gate-repair'],
    symptoms: ['gate-chain-broken', 'sliding-gate-stuck', 'gate-roller-or-wheel-broken', 'gate-motor-not-working'],
    brands: ['all-o-matic', 'liftmaster', 'ramset'],
  },
}
