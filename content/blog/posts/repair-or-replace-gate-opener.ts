import type { BlogPost } from '../types'

export const repairOrReplaceGateOpener: BlogPost = {
  slug: 'repair-or-replace-gate-opener',
  status: 'review',
  category: 'buying-guides',
  title: 'Repair or Replace a Gate Opener? How to Decide | DFW',
  h1: 'Repair or Replace Your Gate Opener? How to Decide',
  description:
    'Most gate openers can be repaired. Five questions decide whether yours should be, and what to ask before you agree to a replacement quote.',
  intro:
    'A dead gate opener feels like a replacement. Most of the time it is a single failed part. Here is how a technician decides between repair and replacement, and the questions worth asking before you sign off on a new operator.',
  primaryQuery: 'repair or replace gate opener',
  image: { category: 'automatic-gate-repair', index: 1 },
  body: [
    {
      type: 'p',
      text: 'When an automatic gate stops working, the first quote is often for a new operator. Sometimes that is the right answer. More often the operator has one failed component, and the rest of it has years left in it. The difference matters: a replacement is a large job, and a repair is usually a single visit.',
    },
    { type: 'h2', text: 'Most gate opener faults are one part, not the whole operator' },
    {
      type: 'p',
      text: 'An operator is a motor, a gearbox, a control board, a set of limit switches and the safety devices that tell it when it may move. When it stops, one of those has usually failed, and they fail at very different rates.',
    },
    {
      type: 'ul',
      items: [
        'Start capacitor: the most common fault on AC operators. The motor hums or clicks but the gate does not move. See [gate motor not working](/gate-problems/gate-motor-not-working).',
        'Control board: damaged by power surges, water or insects, or simply age. Often the board reports a fault code that points somewhere else first. See [gate circuit board not working](/gate-problems/gate-circuit-board-not-working).',
        'Limit switches: drift out of adjustment, so the gate stops short or overruns.',
        'Batteries on solar and DC operators: they wear out, and a weak battery looks like a dead operator. See [gate battery keeps dying](/gate-problems/gate-battery-keeps-dying).',
        'Safety devices: a misaligned or dirty photo-eye stops the gate closing even though the operator is fine.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'A humming motor is rarely a dead operator',
      text: 'If the motor hums but nothing moves, the capacitor is the first suspect. It is one of the least expensive parts on a gate. Get it checked before agreeing to replace the operator.',
    },
    { type: 'h2', text: 'Five questions that decide repair or replace' },
    { type: 'h3', text: '1. Is the gate itself moving freely?' },
    {
      type: 'p',
      text: 'Release the operator and move the gate by hand. If it drags, binds or needs real effort, the operator has been fighting the gate, and that is often why it failed. A new operator on a binding gate fails the same way. Fixing [sagging hinges](/gate-problems/gate-sagging-or-dragging), a [leaning post](/gate-problems/gate-post-leaning) or worn wheels comes first, whichever way the operator decision goes.',
    },
    { type: 'h3', text: '2. Are parts still made for this model?' },
    {
      type: 'p',
      text: 'Manufacturers support their operators for a long time, but not forever. If the failed part is still available, repair is usually the sensible choice. If the board or gearbox has been discontinued and no compatible replacement exists, the decision is effectively made for you.',
    },
    { type: 'h3', text: '3. What actually failed?' },
    {
      type: 'p',
      text: 'A capacitor, a limit switch, a receiver or a photo-eye is a small repair on almost any operator. A failed gearbox or motor is a bigger one, and on an older unit that also needs a board, the combined cost can approach a new operator. That is the point where replacement starts to make sense.',
    },
    { type: 'h3', text: '4. Does it meet current safety requirements?' },
    {
      type: 'p',
      text: 'Gate operators sold in the US are built to the UL 325 safety standard, which has been tightened over the years, particularly around monitored entrapment protection such as photo-eyes and safety edges. A very old operator may not support the safety devices a modern installation expects. That is a good reason to replace, and a reason a repair quote should mention it.',
    },
    { type: 'h3', text: '5. Is it the right operator for this gate?' },
    {
      type: 'p',
      text: 'Some operators fail because they were never matched to the job: a light residential unit on a heavy gate, or on an entrance that cycles hundreds of times a day. Repairing an undersized operator buys time. If it keeps failing, replacing it with one rated for the gate weight and the duty cycle is the real fix. This is common on [HOA and commercial entrances](/services/commercial-gate-repair).',
    },
    { type: 'h2', text: 'When repair makes sense, and when replacement does' },
    {
      type: 'table',
      head: ['Repair usually makes sense when…', 'Replacement usually makes sense when…'],
      rows: [
        ['One component failed: capacitor, board, limit switch, receiver, sensor', 'The gearbox or motor has failed and the board needs replacing too'],
        ['Parts for the model are still available', 'The failed parts are discontinued with no compatible substitute'],
        ['The operator is correctly sized for the gate and its use', 'The operator is undersized for the gate weight or the number of cycles'],
        ['The installation supports current safety devices', 'The operator cannot support the safety devices a current install needs'],
        ['Failures are rare and have clear causes', 'It keeps failing even after the gate itself has been put right'],
      ],
    },
    { type: 'cta', variant: 'call' },
    { type: 'h2', text: 'What Dallas–Fort Worth conditions do to gate openers' },
    {
      type: 'p',
      text: 'Local conditions explain a lot of failures. Summer heat inside a sun-facing operator housing shortens the life of capacitors, boards and batteries, so a late-summer failure is often heat, not age. Spring storms bring surges and lightning that damage boards and loop detectors; see [gate not working after a storm](/gate-problems/gate-not-working-after-storm). And the expansive clay across much of the area moves posts between wet and dry seasons, which makes gates bind and operators strain.',
    },
    {
      type: 'p',
      text: 'None of those are reasons to replace an operator on their own. They are reasons to find the cause before deciding.',
    },
    { type: 'h2', text: 'What to ask before you agree to a replacement' },
    {
      type: 'ol',
      items: [
        'Which part failed, and how was that confirmed?',
        'Is that part available for this model, and roughly what would the repair involve?',
        'Has the gate been checked for binding with the operator released?',
        'Is the current operator the right size for this gate and how often it runs?',
        'If you recommend replacement, what will the new operator fix that a repair would not?',
      ],
    },
    {
      type: 'p',
      text: 'A good technician answers all five without hesitation. If the answer to the first one is vague, get a second opinion before paying for a new operator. We repair most major brands, including [LiftMaster](/brands/liftmaster), [US Automatic](/brands/us-automatic), [Viking](/brands/viking) and [All-O-Matic](/brands/all-o-matic). See [gate opener and motor repair](/services/gate-motor-repair) for what that involves.',
    },
  ],
  faqs: [
    {
      q: 'How long should a gate opener last?',
      a: 'It depends far more on the gate, the duty cycle and the installation than on the calendar. A well-matched residential operator on a free-moving gate can run for many years with parts replaced along the way. An undersized operator on a heavy or binding gate can fail repeatedly within a few years.',
    },
    {
      q: 'Is it worth repairing an old gate opener?',
      a: 'Often yes, if the failed part is still available, the gate moves freely and the operator supports current safety devices. If it needs a gearbox and a board, or parts are discontinued, replacement is usually the better investment.',
    },
    {
      q: 'Can I replace just the control board?',
      a: 'In most cases, yes. A board is designed to be replaced, as long as a compatible board is still made for that operator. The fault should be confirmed first, because a board often reports problems that are really in a sensor or the wiring.',
    },
  ],
  related: {
    services: ['gate-motor-repair', 'automatic-gate-repair', 'gate-installation'],
    symptoms: ['gate-motor-not-working', 'gate-circuit-board-not-working', 'gate-wont-open', 'gate-battery-keeps-dying'],
    brands: ['liftmaster', 'us-automatic', 'viking', 'all-o-matic'],
  },
  reviewNotes: [
    'Technician to confirm the guidance matches how we quote repair vs replace',
    'Add one real job where a repair replaced a replacement quote, with a photo',
  ],
}
