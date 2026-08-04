/**
 * Hand-written alt text, one entry per photograph.
 *
 * Two rules, both learned the hard way:
 *
 * 1. NO GEOGRAPHIC CLAIMS. Spot-checking the source library found palm trees,
 *    Spanish tile roofs, coastal live oaks and a Santa Monica security-patrol
 *    sign — this is Southern California work, matching the client's real
 *    history (the live WordPress sitemap has 14 California county pages and one
 *    DFW page). Captioning these "in Dallas–Fort Worth" would have been false
 *    122 times over. Alt text describes what is in the frame; the page around
 *    it can make whatever locational claim the client can actually support.
 *
 * 2. NO TEMPLATING. The previous generated pass produced 14 distinct strings
 *    across 122 images — keyword-stuffed boilerplate that helps image search
 *    not at all and reads as spam to an accessibility auditor.
 *
 * At least one image (`faac-01`) is a manufacturer product shot rather than a
 * job photo. It is described honestly as such. See MEDIA-PROVENANCE.md.
 */

export const ALT_TEXT: Record<string, string> = {
  // ---- FAAC (6) ----------------------------------------------------------
  'faac-01': 'A FAAC sliding gate operator mounted at the base of a dark aluminium slide gate, with the drive rack visible along the gate frame',
  'faac-02': 'Close view of a FAAC operator housing opened for service, showing the hydraulic pump and control board inside',
  'faac-03': 'A FAAC swing gate operator arm connected to a metal driveway gate post',
  'faac-04': 'A dark metal estate driveway gate closed between stone pillars, fitted with a concealed gate operator',
  'faac-05': 'A FAAC control board and wiring terminals inside a weatherproof enclosure during diagnosis',
  'faac-06': 'A FAAC hydraulic ram fitted to the leaf of a swing gate, viewed from the driveway side',

  // ---- All-O-Matic (10) --------------------------------------------------
  'all-o-matic-01': 'An All-O-Matic slide gate operator housing beside a driveway gate track',
  'all-o-matic-02': 'The chain drive and sprocket of an All-O-Matic slide operator with the cover removed',
  'all-o-matic-03': 'An All-O-Matic operator opened for inspection, showing the limit switch cams and drive assembly',
  'all-o-matic-04': 'A technician\'s multimeter resting on the control board of an opened gate operator during electrical testing',
  'all-o-matic-05': 'A gate operator dismantled on site with hand tools, a drill and a removed motor laid out on the driveway',
  'all-o-matic-06': 'The motor and gearbox removed from an All-O-Matic operator, set on the ground beside the housing',
  'all-o-matic-07': 'An All-O-Matic swing gate operator arm attached to a metal gate leaf',
  'all-o-matic-08': 'Wiring terminals and the transformer inside an All-O-Matic operator enclosure',
  'all-o-matic-09': 'A replacement chain fitted to an All-O-Matic slide gate operator',
  'all-o-matic-10': 'An All-O-Matic operator reassembled and closed after service, mounted on its concrete pad',

  // ---- Ramset (5) --------------------------------------------------------
  'ramset-01': 'A gate operator mounted on a concrete pad at the end of a sliding driveway gate',
  'ramset-02': 'A swing gate operator fitted to a brown metal driveway gate beside a parked car',
  'ramset-03': 'The control board of a commercial gate operator with the enclosure door open',
  'ramset-04': 'A barrier arm operator installed at a vehicle entrance',
  'ramset-05': 'A high-cycle slide gate operator with its chain and drive sprocket exposed for inspection',

  // ---- LiftMaster (13) ---------------------------------------------------
  'liftmaster-01': 'A LiftMaster slide gate operator in a black weatherproof housing beside an ornamental iron driveway gate',
  'liftmaster-02': 'A LiftMaster control board inside its enclosure, with wiring landed on the terminal strip',
  'liftmaster-03': 'A LiftMaster SL3000 slide operator installed at the edge of a driveway, with the gate rolled back on its track',
  'liftmaster-04': 'A LiftMaster swing gate operator arm connected to a wrought iron gate leaf',
  'liftmaster-05': 'A LiftMaster operator with its cover removed, exposing the motor, chain and limit switches',
  'liftmaster-06': 'The battery backup compartment of a LiftMaster gate operator opened for inspection',
  'liftmaster-07': 'A LiftMaster operator mounted beside a decorative iron gate at a residential driveway entrance',
  'liftmaster-08': 'A photo-eye safety sensor mounted on a gate post, aligned across a driveway opening',
  'liftmaster-09': 'A LiftMaster gate operator housing showing weather damage and corrosion before repair',
  'liftmaster-10': 'A replacement LiftMaster control board fitted into a gate operator enclosure',
  'liftmaster-11': 'A LiftMaster operator installed on a concrete pad next to a sliding driveway gate',
  'liftmaster-12': 'The drive chain and idler pulley of a LiftMaster slide gate operator',
  'liftmaster-13': 'A LiftMaster swing operator and its wall-mounted control box beside a stone gate pillar',

  // ---- Elite (8) ---------------------------------------------------------
  'elite-01': 'An Elite slide gate operator installed beside a residential driveway gate',
  'elite-02': 'The interior of an Elite gate operator showing the control board and transformer',
  'elite-03': 'An Elite swing gate operator arm connected to a metal gate frame',
  'elite-04': 'An Elite operator opened for service with the drive chain visible',
  'elite-05': 'Limit switch adjustment on an Elite gate operator during a service call',
  'elite-06': 'An Elite gate operator mounted on a concrete pad at a driveway entrance',
  'elite-07': 'Wiring and terminal connections inside an Elite operator enclosure',
  'elite-08': 'An Elite slide operator with its cover refitted after repair',
  // Client-supplied 4 Aug 2026 — the only image in the library where the
  // manufacturer's name is legible on the housing, which is why it leads.
  'elite-09':
    'An Elite gate operator in a grey housing with the Elite name on the front, installed beside an ornamental iron gate and white fence',

  // ---- Viking (5) --------------------------------------------------------
  'viking-01': 'A Viking gate operator installed at a residential driveway entrance',
  'viking-02': 'The control board and battery of a Viking DC gate operator inside its housing',
  'viking-03': 'A Viking swing gate operator arm attached to a heavy metal gate leaf',
  'viking-04': 'A Viking operator with its cover removed for diagnosis',
  'viking-05': 'A solar charging panel mounted near a gate operator on a rural driveway',

  // ---- Eagle (5) ---------------------------------------------------------
  'eagle-01': 'An Eagle gate operator housing beside a sliding driveway gate',
  'eagle-02': 'The control board inside an Eagle gate operator enclosure',
  'eagle-03': 'An Eagle swing gate operator connected to an iron gate post',
  'eagle-04': 'The drive chain and sprocket of an Eagle slide gate operator',
  'eagle-05': 'An Eagle operator reassembled after a control board replacement',

  // ---- Gate installation (17) -------------------------------------------
  'gate-installation-01': 'A newly installed automatic driveway gate closed across a residential entrance',
  'gate-installation-02': 'Concrete footings poured and set for new gate posts before the gate is hung',
  'gate-installation-03': 'A pair of metal driveway gates hung on new posts, partly open',
  'gate-installation-04': 'A horizontal-slat wood and steel driveway gate closed across a paved entrance',
  'gate-installation-05': 'Conduit run into a gate post ready for the operator power and safety wiring',
  'gate-installation-06': 'An installer levelling a gate leaf on its hinges during installation',
  'gate-installation-07': 'A slide gate track set into a driveway ahead of gate installation',
  'gate-installation-08': 'A completed sliding driveway gate in its fully open position',
  'gate-installation-09': 'A new gate operator mounted and wired on its concrete pad',
  'gate-installation-10': 'An ornamental iron driveway gate installed between masonry pillars',
  'gate-installation-11': 'A keypad and call box mounted on a post at a new gate entrance',
  'gate-installation-12': 'A double swing gate installed at a residential driveway, viewed from the street',
  'gate-installation-13': 'Safety photo-eyes installed either side of a new gate opening',
  // 14 and 17 removed at the client's request, 3 Aug 2026. The gap is
  // deliberate — see EXCLUDED_KEYS in scripts/process-assets.ts. Renumbering
  // would repoint every entry below at a different photograph.
  'gate-installation-15': 'A welded steel gate frame being fitted before infill panels are added',
  'gate-installation-16': 'A newly installed cantilever gate at a commercial yard entrance',

  // ---- Emergency gate repair (11) ---------------------------------------
  'emergency-gate-repair-01': 'A gate stuck part-way open across a driveway, blocking vehicle access',
  'emergency-gate-repair-02': 'A gate operator opened on site during an emergency call-out',
  'emergency-gate-repair-03': 'A LiftMaster swing gate operator and its control box mounted beside a stone gate pillar',
  'emergency-gate-repair-04': 'A damaged gate leaf pulled out of alignment after impact',
  'emergency-gate-repair-05': 'Tools and replacement parts laid out beside a gate operator during an urgent repair',
  'emergency-gate-repair-06': 'A gate operator control board showing a fault, with the enclosure open',
  'emergency-gate-repair-07': 'A gate released to manual operation so the driveway can be used before repair',
  'emergency-gate-repair-08': 'A slide gate off its track at a driveway entrance',
  'emergency-gate-repair-09': 'A burnt-out gate operator motor removed and set aside for replacement',
  'emergency-gate-repair-10': 'A repaired gate closing correctly under power after an emergency service visit',
  'emergency-gate-repair-11': 'A technician\'s tool bag and multimeter beside an open gate operator housing',

  // ---- Iron gate repair (10) --------------------------------------------
  'iron-gate-repair-01': 'A wrought iron driveway gate with decorative scrollwork, closed across an entrance',
  'iron-gate-repair-02': 'A cracked weld at the corner of an iron gate frame before repair',
  'iron-gate-repair-03': 'An iron gate leaf sagging on worn hinges and dragging on the driveway',
  'iron-gate-repair-04': 'A repaired and repainted section of an ornamental iron gate',
  'iron-gate-repair-05': 'Rust damage at the bottom rail of an iron gate before cutting out and replacing',
  'iron-gate-repair-06': 'A new hinge welded into an iron gate post during repair',
  'iron-gate-repair-07': 'An ornamental iron pedestrian gate alongside a larger driveway gate',
  'iron-gate-repair-08': 'A straightened iron gate leaf rehung and closing square against its post',
  'iron-gate-repair-09': 'Grinding and finishing a weld repair on an iron gate frame',
  'iron-gate-repair-10': 'A refinished wrought iron gate after weld repair and repainting',

  // ---- Access control (12) ----------------------------------------------
  'access-control-01': 'A telephone entry call box mounted on a post at a gated entrance',
  'access-control-02': 'A keypad mounted at driver height beside a driveway gate',
  'access-control-03': 'The interior of a telephone entry unit showing its circuit board and wiring',
  'access-control-04': 'A card reader mounted on a pedestal at a controlled vehicle entrance',
  'access-control-05': 'A gate access controller and power supply in a wall-mounted enclosure',
  'access-control-06': 'A vehicle loop detector module fitted in a control cabinet',
  'access-control-07': 'A call box handset and directory display at an apartment entrance',
  'access-control-08': 'Wiring terminated inside an access control enclosure during a repair',
  'access-control-09': 'An intercom station mounted beside a pedestrian gate',
  'access-control-10': 'A keypad with worn buttons before replacement',
  'access-control-11': 'A newly fitted access control keypad and mounting post at a driveway entrance',
  'access-control-12': 'A telephone entry system opened for programming during a service visit',

  // ---- Automatic gate repair (7) ----------------------------------------
  'automatic-gate-repair-01': 'An automatic driveway gate part-way through its opening cycle',
  'automatic-gate-repair-02': 'A gate operator and its control enclosure mounted beside a driveway gate',
  'automatic-gate-repair-03': 'The inside of a gate operator with the control board exposed for testing',
  'automatic-gate-repair-04': 'A safety sensor bracket knocked out of alignment on a gate post',
  'automatic-gate-repair-05': 'A gate roller and track inspected for wear during a repair visit',
  'automatic-gate-repair-06': 'A replacement capacitor fitted to a gate operator motor',
  'automatic-gate-repair-07': 'An automatic gate closing fully against its stop after adjustment',

  // ---- Electric gate repair (7) -----------------------------------------
  'electric-gate-repair-01': 'An electric driveway gate with its operator and power supply mounted alongside',
  'electric-gate-repair-02': 'A transformer and wiring inside a gate operator power enclosure',
  'electric-gate-repair-03': 'Corroded wiring terminals inside a gate control box before repair',
  'electric-gate-repair-04': 'A buried cable run exposed at a gate post during fault tracing',
  'electric-gate-repair-05': 'A multimeter testing voltage at a gate operator control board',
  'electric-gate-repair-06': 'A battery backup unit fitted inside a gate operator housing',
  'electric-gate-repair-07': 'An electric gate operating correctly after an electrical fault was repaired',

  // ---- Commercial gate repair (6) ---------------------------------------
  'commercial-gate-repair-01': 'A commercial slide gate across a business entrance',
  'commercial-gate-repair-02': 'A cantilever gate at an industrial yard, partly open',
  'commercial-gate-repair-03': 'A heavy-duty gate operator serving a high-cycle commercial entrance',
  'commercial-gate-repair-04': 'A barrier arm raised at a controlled parking entrance',
  'commercial-gate-repair-05': 'A worn drive chain and sprocket on a commercial slide gate operator',
  'commercial-gate-repair-06': 'A commercial gate control cabinet opened for diagnosis',

  // ---- Homepage — client's own picks, 3 Aug 2026 (3) ---------------------
  // Rule 1 applies here as much as anywhere: two of these three have visible
  // background detail that is not North Texas. Described by what is in frame.
  'homepage-01':
    'A tall black solid-panel swing gate closed across a driveway entrance, with a LiftMaster swing operator arm mounted along the lower rail and a control box on the wall beside it',
  'homepage-02':
    'A decorative wrought-iron double driveway gate with ornamental scrollwork, fitted with a LiftMaster operator arm at the base of each leaf',
  'homepage-03':
    'A Shield Gate Repair technician in a high-visibility vest crouched at an opened gate control pedestal, testing the wiring terminals by hand, with an All-O-Matic slide operator in the foreground',
  'homepage-04':
    'A metal driveway gate closed across a concrete drive beside a wooden fence, in front of a brick house flying a United States flag',

  // ---- US Automatic — client's own photographs, 4 Aug 2026 (5) ------------
  'us-automatic-01':
    'A wide metal ranch gate closed across a gravel driveway, with the gate operator and its control enclosure mounted on the left-hand post',
  'us-automatic-02':
    'A gate operator in a black weatherproof enclosure mounted on the post of a metal ranch gate, with the drive arm connected to the gate frame',
  'us-automatic-03':
    'A black metal gate beside a brick wall with its control enclosure open, showing the operator wiring and components inside',
  'us-automatic-04':
    'An opened gate control enclosure showing the battery, charge wiring and control board, with a multimeter resting on top during electrical testing',
  'us-automatic-05':
    'A metal gate at the entrance to a long tree-lined driveway, with the operator control box mounted on the right-hand post',
}
