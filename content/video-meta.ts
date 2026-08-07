/**
 * Hand-written title and description per video, merged into the generated
 * manifest by scripts/process-videos.ts.
 *
 * Video is the one uncontested SEO opportunity in this market — zero of the 14
 * DFW competitors audited embed any video at all — and `VideoObject` rich
 * results are earned on metadata quality. The generated pass produced 15
 * distinct titles across 25 clips with empty descriptions, which forfeits that
 * entirely.
 *
 * As with alt text: no geographic claims. The source footage is Southern
 * California work (see MEDIA-PROVENANCE.md), so these describe the repair, not
 * the location.
 */

export type VideoMeta = { title: string; description: string }

export const VIDEO_META: Record<string, VideoMeta> = {
  'liftmaster-gate-motor-repair-video': {
    title: 'LiftMaster Gate Operator Repair — Full Service Call',
    description:
      'A complete LiftMaster gate operator repair from diagnosis to test cycle. The technician isolates the fault at the control board, replaces the failed component and runs the gate through full travel before leaving. Most LiftMaster faults are a board, a capacitor or a limit switch — not the whole operator.',
  },
  // ── Texas job footage ────────────────────────────────────────────────────
  // These arrived after the original 25 and were falling back to a templated
  // title with an empty description, which forfeits the VideoObject rich
  // result they are eligible for. Each one is paired with a written case study,
  // so the description below is the same job the reader can go and read.
  'liftmaster-gate-motor-repair-21': {
    title: 'LiftMaster Board Replacement — When the Battery Keeps Going Flat',
    description:
      'A solar-powered LiftMaster whose battery kept dying, including a brand-new replacement. The battery load-tested fine and the panel was producing correctly — the charging circuit on the control board had failed, so every cycle drew the battery down with nothing putting charge back. Board replaced, charge current verified at the battery before closing up, and backed with a 3-year warranty.',
  },
  // No written case study behind these two yet, so the descriptions stay with
  // what the footage actually shows and what is true of the equipment. They are
  // not padded out with a job narrative nobody has confirmed.
  'all-o-matic-gate-motor-repair-20': {
    title: 'All-O-Matic Slide Operator — Drive and Clutch Service',
    description:
      'Service work on an All-O-Matic slide gate operator. These are mechanically straightforward and heavily built, so faults are nearly always a discrete replaceable part — limit cams, clutch, chain or board — rather than a unit that has reached the end of its life.',
  },
  'all-o-matic-gate-motor-repair-21': {
    title: 'All-O-Matic Operator — Chain, Sprocket and Limit Check',
    description:
      'Checking the chain, sprocket and limit positions on an All-O-Matic operator. Chain stretch is normal and progressive: a stretched chain rides high on the sprocket and wears the teeth, so replacing a chain early is considerably cheaper than replacing a chain, a sprocket and a gearbox later.',
  },

  'liftmaster-gate-motor-repair-22': {
    title: 'LiftMaster LA400 to LA500 — Upgrading Only the Arm',
    description:
      'A heavy arched iron swing gate whose LA400 arm was not rated to carry it. The gate swung freely by hand, so the fault was specification rather than wear. The LA500 shares a control platform with the LA400, so the heavy-duty arm went on and the existing control board, box and wiring stayed exactly where they were.',
  },
  'liftmaster-gate-motor-repair-20': {
    title: 'Moisture-Corroded LiftMaster Board and an Undersized Solar Array',
    description:
      'A solar LiftMaster on a rural double farm gate that had been getting slower for months before it stopped. Water ingress had corroded the control board, and testing the power side showed the solar array had never been sized for the gate — so the batteries had been running permanently undercharged, stressing the electronics that failed. Board replaced, enclosure resealed, array resized to the actual load.',
  },
  'ramset-gate-motor-repair-20': {
    title: 'Ramset Slide Gate — Worn Rollers Destroying the Drive',
    description:
      'A Ramset slide operator straining on every cycle. The fault was not in the operator: the rollers had flat-spotted and the track had loaded with grit, so the gate had become far harder to move than the unit was ever specified for. Rollers replaced and track cleared, with the operator left in service.',
  },
  'doorking-gate-motor-repair-20': {
    title: 'DoorKing Dual Swing Gate — Gearbox Rebuild',
    description:
      'A DoorKing dual swing installation with a failing gearbox. Shows the strip-down, what worn gearing actually looks like against a healthy set, and the rebuild — an operator most companies would have quoted for outright replacement.',
  },
  'commercial-gate-repair-services-20': {
    title: 'Commercial Gate Rebuilt After Vehicle Impact',
    description:
      'A commercial entrance gate struck by a vehicle. Impact damage is never only the visible bend — the post was pushed out of plumb and the gate no longer travelled true, so the repair runs structure first, then alignment, then the operator, then the safety devices. Fitting a new operator to a distorted gate simply destroys the new operator too.',
  },

  'liftmaster-gate-motor-repair-video-2': {
    title: 'Inside a LiftMaster Operator — Board and Limit Switch Diagnosis',
    description:
      'Close-up of a LiftMaster operator opened on site. Shows how the control board, limit switches and drive chain are checked in sequence, and why the gate itself is moved by hand first to separate a mechanical bind from an electrical fault.',
  },
  'faac-gate-motor-repair-video': {
    title: 'FAAC Gate Operator Repair — Hydraulic Service',
    description:
      'FAAC builds hydraulic gate operators, which need different diagnostics and different parts to a chain drive. This shows the repair being carried out: pressure checked, seals addressed and the operator returned to normal travel speed.',
  },
  'all-o-matic-gate-motor-repair-video': {
    title: 'All-O-Matic Gate Operator Repair — Clutch and Limit Adjustment',
    description:
      'An All-O-Matic operator stalling part-way through travel. The clutch and limit cams are checked and adjusted, and the gate is run through several full cycles to confirm the fix holds under load.',
  },
  'all-o-matic-gate-motor-repair-video-2': {
    title: 'All-O-Matic Slide Operator — Chain and Drive Inspection',
    description:
      'Inspection of the chain, sprocket and drive assembly on an All-O-Matic slide gate operator. Chain stretch and sprocket wear are the most common mechanical failures on these units and are far cheaper to catch early than to leave running.',
  },
  'ramset-gate-motor-repair-video': {
    title: 'Ramset Gate Operator Repair — High-Cycle Commercial Unit',
    description:
      'A Ramset operator on a high-cycle commercial entrance. Shows why parts that last a decade on a residential driveway wear out in months on a gate running hundreds of cycles a day, and what to check when the same component keeps failing.',
  },
  'elite-gate-motor-repair-video': {
    title: 'Elite Gate Operator Repair — Control Board Replacement',
    description:
      'Replacing a failed control board in an Elite gate operator. The old board is tested to confirm the diagnosis before anything is replaced, so the customer is not paying for a guess.',
  },
  'elite-gate-motor-repair-video-2': {
    title: 'Elite Slide Gate Operator — Drive and Travel Check',
    description:
      'An Elite slide operator run through full travel after service, checking limit positions, safety devices and chain tension. This is the final step on every repair before the technician leaves.',
  },
  'viking-gate-motor-repair-video': {
    title: 'Viking Gate Operator Repair — DC Power and Battery Diagnosis',
    description:
      'Viking operators typically run on DC with battery and solar or trickle charging, so a gate that has become slow or unreliable is often a power problem rather than an operator fault. This shows the charging system being load-tested before anything mechanical is condemned.',
  },
  'eagle-gate-motor-repair-video': {
    title: 'Eagle Gate Operator Repair — Fault Diagnosis and Fix',
    description:
      'An Eagle gate operator diagnosed and repaired on site. Eagle units are reliable enough that when they do fail it is usually a single serviceable component with a long life ahead of it once replaced.',
  },
  'gate-motor-repair-services-video': {
    title: 'Gate Motor Repair — How We Diagnose a Dead Operator',
    description:
      'The diagnostic sequence for a gate that will not move: gate released and pushed by hand to rule out a mechanical bind, then power at the board, capacitor under load, limit switch travel and safety devices — in that order.',
  },
  'gate-motor-repair-services-video-2': {
    title: 'Gate Motor Repair — Capacitor Test and Replacement',
    description:
      'A gate motor that hums but will not move is far more often a failed capacitor than a dead motor. This shows the capacitor being tested under load and replaced, one of the least expensive repairs on a gate.',
  },
  'automatic-gate-repair-services-video': {
    title: 'Automatic Gate Repair — Safety Sensor Fault',
    description:
      'A gate that opens but refuses to close is almost always a safety sensor seeing an obstruction that is not there. This shows the photo-eyes being realigned and the gate returned to normal operation.',
  },
  'automatic-gate-repair-services-video-2': {
    title: 'Automatic Gate Repair — Full Repair Walkthrough',
    description:
      'A complete automatic gate repair, start to finish: fault identified, cause explained, repair carried out and the gate run through several full cycles to confirm it holds.',
  },
  'emergency-gate-repair-services-video': {
    title: 'Emergency Gate Repair — Same-Day Call-Out',
    description:
      'An emergency call-out on a gate stuck open. A gate stuck open is a security problem, not an inconvenience, and is treated as urgent regardless of the underlying cause.',
  },
  'emergency-gate-repair-services-video-2': {
    title: 'Emergency Gate Repair — Manual Release and Temporary Secure',
    description:
      'How a gate is released to manual operation so a property can be used before the repair is complete, and how a gate is left in a secure state when a part has to be ordered.',
  },
  'electric-gate-repair-services-video': {
    title: 'Electric Gate Repair — Tracing an Electrical Fault',
    description:
      'Tracing an intermittent fault on an electric gate: supply voltage checked at source and at the operator, terminals inspected for corrosion, and accessories isolated to find a short — rather than replacing parts one at a time.',
  },
  'electric-gate-repair-services-video-2': {
    title: 'Electric Gate Repair — Transformer and Power Supply Check',
    description:
      'Testing the transformer and power supply on an electric gate that had stopped responding entirely. Shows why the power path is checked before the control board is suspected.',
  },
  'iron-gate-repair-services-video': {
    title: 'Iron Gate Repair — Weld Repair on a Cracked Frame',
    description:
      'A cracked weld at an iron gate frame joint cut out, re-welded, ground back and refinished so the repair is not visible. Custom ironwork is almost always worth repairing rather than replacing.',
  },
  'iron-gate-repair-services-video-2': {
    title: 'Iron Gate Repair — Fixing a Sagging Gate',
    description:
      'A sagging iron gate dragging on the driveway. The hinges and the post are assessed together with the gate, because straightening the leaf without addressing the post means it will drag again within a season.',
  },
  'gate-installation-services-video': {
    title: 'Automatic Gate Installation — Site Preparation and Footings',
    description:
      'The part of a gate installation nobody sees and everything depends on: footings set to depth, conduit run properly and power brought to the gate correctly the first time. Skipping this is how a gate becomes an annual repair call.',
  },
  'gate-installation-services-video-2': {
    title: 'Automatic Gate Installation — Operator Fitting and Commissioning',
    description:
      'Fitting and commissioning the operator on a new gate installation: alignment set, limits programmed, safety devices installed to standard and the whole system handed over working.',
  },
  'commercial-gate-repair-services-video': {
    title: 'Commercial Gate Repair — High-Cycle Entrance',
    description:
      'A commercial entrance gate serving hundreds of cycles a day. When the same part fails repeatedly the operator is usually under-specified for the duty cycle, or the gate is making it work far harder than it should.',
  },
  'commercial-gate-repair-services-video-2': {
    title: 'Commercial Gate Repair — Loop Detector Fault',
    description:
      'A commercial gate ignoring approaching vehicles. The fault is in the buried loop and detector rather than the operator — a distinction that gets misdiagnosed constantly and is usually the fastest thing to put right.',
  },
  'client-testimonial': {
    title: 'Customer Testimonial — Shield Gate Repair',
    description:
      'A Shield Gate Repair customer describing the work carried out on their gate, in their own words. Written reviews are easy to fake, which is why nobody fully believes them any more.',
  },
}
