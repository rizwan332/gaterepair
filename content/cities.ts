/**
 * Service-area cities.
 *
 * Every city on the client's list gets its own page. What keeps that defensible
 * is the depth of the data below, not the page count — see CITY-PAGES.md.
 *
 * Benchmark from the competitor audit: Metro's Plano page is ~3,000 words and
 * ~5% genuinely local. 4 Sure's is ~2,100 words and ~20%. Neither names a single
 * neighborhood, zip code or response time. Tier 1 pages here are shorter and
 * roughly half unique.
 *
 * ⚠️ `responseBand` values are provisional. They are derived from rough drive
 * times and MUST be re-checked against the client's actual base location before
 * launch — publishing an arrival time you cannot hit destroys the trust the
 * number exists to build. `content/business.ts -> address` is still unconfirmed.
 *
 * ⚠️ `gateProfile` is populated for Tier 1 from general Dallas–Fort Worth knowledge as
 * a starting draft. These must be replaced with the client's technician
 * interview answers (see CITY-PAGES.md §5) — that is the content no competitor
 * can replicate.
 */

export type GateProfile = {
  dominant: string
  commonGateTypes: string[]
  commonBrands: string[]
  commonIssues: string[]
}

export type City = {
  slug: string
  name: string
  county: string
  tier: 1 | 2 | 3
  zips?: string[]
  neighborhoods?: string[]
  landmarks?: string[]
  majorRoads?: string[]
  nearbyCities?: string[]
  responseBand?: string
  gateProfile?: GateProfile
  localAngle?: string
  faqs?: { q: string; a: string }[]
}

// ---------------------------------------------------------------------------
// TIER 1 — full pages, 1,500–1,800 words, launch wave 1
// ---------------------------------------------------------------------------

export const tier1Cities: City[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    tier: 1,
    zips: ['75201', '75204', '75205', '75209', '75214', '75218', '75219', '75225', '75230', '75231', '75248'],
    neighborhoods: ['Preston Hollow', 'Lakewood', 'Bluffview', 'Kessler Park', 'Lake Highlands', 'Oak Cliff', 'Turtle Creek', 'Devonshire'],
    landmarks: ['White Rock Lake', 'NorthPark Center', 'Klyde Warren Park', 'Dallas Arboretum'],
    majorRoads: ['I-35E', 'US-75 Central Expressway', 'Loop 12', 'Dallas North Tollway'],
    nearbyCities: ['university-park', 'highland-park', 'irving', 'mesquite', 'garland', 'richardson'],
    responseBand: '',
    gateProfile: {
      dominant: 'A wide split between estate driveway gates in the northern neighborhoods and high-cycle commercial and multi-family entrances closer to the core',
      commonGateTypes: ['Wrought iron swing', 'Estate slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic', 'FAAC'],
      commonIssues: ['Control board failure', 'Clay-soil post movement causing bind', 'Photo-eye faults', 'High-cycle chain wear on apartment entrances'],
    },
    localAngle:
      'Dallas gate work splits cleanly in two. North of Northwest Highway — Preston Hollow, Bluffview, Devonshire — it is mostly ' +
      'wrought iron estate gates on long private drives, many of them installed twenty or more years ago and still running the ' +
      'original operator. Those calls are usually a control board or a capacitor, and replacing the whole unit is rarely necessary. ' +
      'Closer to the core and out toward the eastern side of the county it is apartment, office and warehouse entrances running ' +
      'hundreds of cycles a day, where the same part wears out ten times faster and the real question is whether the operator was ' +
      'ever specified for that duty cycle. We diagnose the two very differently.',
    faqs: [
      {
        q: 'How quickly can you reach my part of Dallas?',
        a: 'We run 24/7 across Dallas. Travel across the city varies a lot with traffic on US-75 and I-35E, so we give you a real arrival window when you call rather than a vague "sometime today".',
      },
      {
        q: 'My gate closed fine in spring and now it drags. Nothing has changed.',
        a: 'The ground has changed. Dallas sits on expansive clay that swells when wet and shrinks hard through a dry August, and gate posts move with it. The gate is usually straight — the post is not. Realigning it is a far cheaper fix than the operator replacement you may have been quoted for the resulting strain.',
      },
      {
        q: 'Do you work on apartment and commercial gates in Dallas?',
        a: 'Yes, and they are a large part of what we do here — including loop detectors, barrier arms, telephone entry systems and multi-gate properties. High-cycle entrances need a different service approach to a residential driveway.',
      },
    ],
  },
  {
    /**
     * Added 16 Sep 2026. Fort Worth was missing from the client's service-area
     * list and therefore from this file, so /gate-repair-fort-worth-tx returned
     * a 404 — the second-largest city in the market and the one the metroplex
     * is half named after. Treated as an oversight and corrected; see the note
     * in scripts/client-city-list.ts, which records that the client still has
     * to confirm it.
     *
     * Sourced rather than assumed, because none of it was in the client's data:
     *  · zips — Census 2020 ZCTA-to-place relationship file, rows for "Fort
     *    Worth city". West and south-west first, then the northern ZCTAs.
     *  · neighborhoods — City of Fort Worth pages (historic districts, park
     *    pages, capital project titles). Enclave municipalities that look like
     *    Fort Worth neighborhoods but are not — White Settlement, Westworth
     *    Village, River Oaks, Sansom Park — are deliberately absent.
     *  · coordinates — not set here. `npm run geocode` resolved them through
     *    Nominatim like every other city, to 32.75318, -97.33275, which is a
     *    downtown-referenced point. The Census 2023 Gazetteer puts the
     *    city-wide internal point further north-west at 32.78195, -97.34857;
     *    for a pin on the coverage map the difference is immaterial, and
     *    consistency with the other 190 cities is worth more than precision
     *    here.
     *  · the clay figure in the FAQ — a geotechnical report the city itself
     *    hosts for a north Fort Worth site (D&S Engineering G20-2194), which
     *    estimates 3 to 8.5 inches of potential vertical movement.
     *  · the hail reference — NWS Fort Worth on the May 1995 Mayfest storm.
     *
     * `gateProfile` is drafted from the city's own geography and building
     * stock, exactly as the other Tier 1 profiles are, and carries the same
     * caveat at the top of this file: it needs replacing with the technician
     * interview answers.
     */
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    tier: 1,
    zips: ['76107', '76108', '76109', '76116', '76126', '76132', '76133', '76131', '76137', '76177', '76179'],
    neighborhoods: [
      'Arlington Heights',
      'Ridglea Hills',
      'Wedgwood',
      'Westcliff',
      'Overton Park',
      'Fairmount',
      'Mistletoe Heights',
      'Near Southside',
    ],
    landmarks: [
      'Fort Worth Stockyards',
      'Fort Worth Water Gardens',
      'Fort Worth Botanic Garden',
      'Will Rogers Memorial Center',
      'Dickies Arena',
    ],
    // "Loop 820" rather than I-820, and Camp Bowie named alongside US-377,
    // because that is what people here call them.
    majorRoads: ['I-35W', 'Loop 820', 'Chisholm Trail Parkway', 'US-377 / Camp Bowie'],
    nearbyCities: ['haltom-city', 'lake-worth', 'saginaw', 'white-settlement', 'north-richland-hills', 'forest-hill'],
    responseBand: '',
    gateProfile: {
      dominant:
        'Three separate kinds of gate work inside one city — post-war driveways on the west side, acreage entrances beyond Loop 820, and high-cycle commercial gates on the north side',
      commonGateTypes: ['Wrought iron swing', 'Ranch and acreage swing', 'Commercial slide', 'Apartment entrance slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'US Automatic', 'Elite'],
      commonIssues: [
        'Clay-soil post movement pulling gates out of alignment',
        'Hail and storm damage to photo-eyes and control boards',
        'Battery and solar charging faults on acreage gates',
        'High-cycle chain and sprocket wear on commercial entrances',
        'Control board failure on ageing west-side operators',
      ],
    },
    localAngle:
      'Fort Worth splits three ways for gate work. West of downtown — Arlington Heights, Ridglea Hills, Westcliff and Wedgwood — the housing is largely post-war, and a good share of the operators on those driveways are twenty years old or more, which makes a control board or a limit adjustment the likely repair rather than a new unit. Push out past Loop 820 into the 76126 and 76179 zip codes and the lots turn into acreage: those gates usually run from a battery kept topped up by a solar panel, so a gate that has slowed down is a charging question before it is an operator question. North toward Alliance the work is commercial — yard entrances, distribution gates and apartment entrances cycling hundreds of times a day, where a chain wears out in a season rather than a decade. Those are three different diagnoses, and we do not approach them the same way.',
    faqs: [
      {
        q: 'My gate lined up fine last year and now it catches. Nothing was touched.',
        a: 'The post moved, not the gate. A geotechnical report the city publishes for a north Fort Worth site estimates the local clay can rise and fall by roughly three to eight and a half inches as its moisture changes, and a gate post set in that ground goes with it. Re-hanging the gate and correcting the post is considerably cheaper than the operator replacement the resulting strain often gets blamed on.',
      },
      {
        q: 'Hail came through and the gate stopped responding. Is the operator finished?',
        a: 'Usually not. Fort Worth gets genuinely severe hail — the 1995 Mayfest storm put softball-sized stones across the city — and what it damages is the exposed hardware: photo-eyes, an antenna, a solar panel, or the board inside an enclosure that has been cracked or let water in. Every one of those is an individual part, and we quote them individually.',
      },
      {
        q: 'Do you cover the acreage properties west of Loop 820?',
        a: 'Yes, and they are a distinct kind of call. Out there the gate is typically a long single leaf on a battery-and-solar operator at the end of a driveway, where a failure locks in a whole property rather than one car. We test the battery under load and the panel output before touching the operator, because that is where the fault usually is.',
      },
    ],
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    tier: 1,
    zips: ['75023', '75024', '75025', '75074', '75075', '75093', '75094'],
    neighborhoods: ['West Plano', 'Willow Bend', 'Legacy West', 'Deerfield', 'Kings Ridge', 'Prestonwood', 'Whiffletree'],
    landmarks: ['Legacy West', 'Arbor Hills Nature Preserve', 'Oak Point Park', 'Shops at Legacy'],
    majorRoads: ['Dallas North Tollway', 'US-75', 'President George Bush Turnpike', 'Preston Road'],
    nearbyCities: ['frisco', 'allen', 'richardson', 'carrollton', 'the-colony', 'murphy'],
    responseBand: '',
    gateProfile: {
      dominant: 'Established 1990s–2000s gated communities in West Plano alongside newer HOA-managed entrances around Legacy',
      commonGateTypes: ['Slide gate', 'Wrought iron swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'DoorKing'],
      commonIssues: ['Control board failure on ageing operators', 'Telephone entry system faults', 'Limit switch drift', 'Photo-eye misalignment'],
    },
    localAngle:
      'Most of the gate calls we take in Plano are in the West Plano and Willow Bend neighborhoods, and they follow a clear pattern: ' +
      'slide operators installed when those communities were built in the 1990s and early 2000s that have finally outlived their ' +
      'control boards. Parts for that generation of LiftMaster and Elite equipment are still readily available, so a board swap ' +
      'almost always beats a full operator replacement — which is not always what people are told. The other recurring Plano job ' +
      'is HOA telephone entry systems that stopped working after a community changed phone providers; those older call boxes need ' +
      'an analogue line, and moving to VoIP breaks them. The fix is usually a cellular module rather than a whole new system.',
    faqs: [
      {
        q: 'Our HOA gate call box stopped working after we switched phone service. Why?',
        a: 'Older telephone entry systems rely on an analogue phone line. When a community moves to VoIP or fibre, the signalling those units expect is no longer there and they stop dialling out. The usual fix is a cellular module rather than replacing the entire system — considerably cheaper, and we see this constantly in Plano communities.',
      },
      {
        q: 'Is a twenty-year-old gate operator in West Plano worth repairing?',
        a: 'Usually yes. Parts for the LiftMaster and Elite units common in those neighborhoods are still available, and the mechanical side of these operators lasts a long time. We look at gearbox condition and parts availability rather than the date on the label.',
      },
      {
        q: 'Do you work with Plano HOAs and property managers?',
        a: 'Yes — including documented quotes for board approval, multi-gate properties and scheduled maintenance for community entrances that run high cycle counts.',
      },
    ],
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin County',
    tier: 1,
    zips: ['75033', '75034', '75035', '75036', '75068'],
    neighborhoods: ['Starwood', 'Newman Village', 'Phillips Creek Ranch', 'Stonebriar', 'Frisco Lakes', 'Panther Creek'],
    landmarks: ['The Star', 'Stonebriar Centre', 'Toyota Stadium', 'Frisco Commons'],
    majorRoads: ['Dallas North Tollway', 'Preston Road', 'Sam Rayburn Tollway', 'Legacy Drive'],
    nearbyCities: ['plano', 'prosper', 'little-elm', 'the-colony', 'mckinney', 'celina'],
    responseBand: '',
    gateProfile: {
      dominant: 'Newer master-planned communities with HOA-managed entrances, plus custom estate gates in Starwood and Newman Village',
      commonGateTypes: ['HOA community slide', 'Estate swing', 'Ornamental iron'],
      commonBrands: ['LiftMaster', 'Viking', 'DoorKing', 'Elite'],
      commonIssues: ['High-cycle wear on community entrances', 'Access control faults', 'Safety loop failures', 'Battery and solar charging issues'],
    },
    localAngle:
      'Frisco is newer than most of the metroplex, and that changes the work. Rather than twenty-year-old operators dying of old age, ' +
      'the recurring problem here is community entrances built for a subdivision that has since filled up — an operator specified ' +
      'for a hundred cycles a day now running four hundred. The parts fail on a completely different timeline, and replacing the ' +
      'same component every few months is a symptom, not a solution. In the custom estate communities like Starwood and Newman ' +
      'Village it is a different story again: large ornamental gates where the operator is fine and the actual fault is roller, ' +
      'hinge or alignment wear making it work far harder than it should.',
    faqs: [
      {
        q: 'Our community gate in Frisco keeps breaking. Is it a bad operator?',
        a: 'More often it is an operator that was correctly specified when the neighborhood was half built and is now well past its intended duty cycle. Replacing the same part repeatedly is the tell. We assess actual cycle count against the installed unit and tell you whether the fix is a repair, a service schedule, or a properly specified operator.',
      },
      {
        q: 'Do you service HOA entrances in Frisco?',
        a: 'Yes, including access control, loop detectors and multi-gate communities, with written quotes suitable for board approval.',
      },
    ],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    tier: 1,
    zips: ['75069', '75070', '75071', '75072'],
    neighborhoods: ['Stonebridge Ranch', 'Craig Ranch', 'Adriatica', 'Trinity Falls', 'Eldorado', 'Historic Downtown'],
    landmarks: ['Historic Downtown Square', 'Towne Lake Park', 'Heard Natural Science Museum', 'TUPPS Brewery'],
    majorRoads: ['US-75', 'SH-121', 'Custer Road', 'Virginia Parkway'],
    nearbyCities: ['allen', 'frisco', 'prosper', 'princeton', 'melissa', 'fairview'],
    responseBand: '',
    gateProfile: {
      dominant: 'Large gated communities in Stonebridge Ranch and Craig Ranch alongside older rural-edge properties with long driveways',
      commonGateTypes: ['Community slide', 'Estate swing', 'Solar-powered rural swing'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Eagle', 'Viking'],
      commonIssues: ['Solar battery failure', 'Control board faults', 'Post movement on rural installs', 'Access control programming loss'],
    },
    localAngle:
      'McKinney covers two very different kinds of gate work within the same city limits. Inside the master-planned communities — ' +
      'Stonebridge Ranch, Craig Ranch — it is community entrances and access control, much like Frisco. Get toward the eastern and ' +
      'northern edges and it becomes acreage properties with long driveways, frequently running solar-powered swing operators ' +
      'because trenching power out to the road was never practical. Those calls are almost always the battery rather than the ' +
      'operator: a tired battery will run a handful of cycles then sag below the threshold, which reads to the owner like a dying ' +
      'motor. We load-test before condemning anything.',
    faqs: [
      {
        q: 'My solar gate opens a few times then stops. Is the motor failing?',
        a: 'Usually the battery, not the motor. Solar gate batteries have a finite life, and a tired one runs a few cycles then drops below the voltage the operator needs. It looks exactly like a failing motor and costs a fraction as much to fix. We load-test rather than guess.',
      },
      {
        q: 'Do you cover the rural parts of McKinney and out toward Princeton?',
        a: 'Yes. Long-driveway and acreage properties are a regular part of our work in this area, including solar installs and gates a long way from mains power.',
      },
    ],
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    tier: 1,
    zips: ['75038', '75039', '75060', '75061', '75062', '75063'],
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Hackberry Creek', 'University Hills', 'Song'],
    landmarks: ['Toyota Music Factory', 'Mustangs of Las Colinas', 'Lake Carolyn', 'Irving Convention Center'],
    majorRoads: ['SH-114', 'I-635', 'MacArthur Boulevard', 'President George Bush Turnpike'],
    nearbyCities: ['coppell', 'grand-prairie', 'euless', 'farmers-branch', 'dallas', 'grapevine'],
    responseBand: '',
    gateProfile: {
      dominant: 'Heavy concentration of gated communities and corporate campuses in Las Colinas and Valley Ranch',
      commonGateTypes: ['Community slide', 'Barrier arm', 'Commercial slide', 'Estate swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'HySecurity', 'Ramset'],
      commonIssues: ['Barrier arm faults', 'Access control and card reader failures', 'High-cycle chain wear', 'Loop detector faults'],
    },
    localAngle:
      'Irving has an unusually high concentration of controlled-access properties for its size, largely because of Las Colinas. ' +
      'That means a lot of barrier arms, card readers and telephone entry systems rather than simple residential driveway gates — ' +
      'and the fault is frequently in the access control rather than the gate operator at all. It is a distinction that matters: ' +
      'a card reader or controller fault gets misdiagnosed as a broken gate constantly, and people end up paying to have a ' +
      'perfectly healthy operator looked at. We test both sides of the system on the same visit. ' +
      'The other pattern specific to Irving is the sheer cycle count on the Las Colinas and Valley Ranch community entrances. ' +
      'Those gates run all day for residents, deliveries and visitors, and parts that would last a decade on a private driveway ' +
      'wear out in a couple of years. When the same component fails twice in eighteen months, the operator is usually being asked ' +
      'to do more than it was specified for, and we would rather tell you that than keep replacing it.',
    faqs: [
      {
        q: 'Our card readers stopped releasing the gate. Is the gate broken?',
        a: 'Usually not. When credentials stop working but the gate still operates on a manual open, the fault is in the reader, the wiring or the controller — not the operator. We diagnose the access control and the gate together so you are not paying for two separate call-outs.',
      },
      {
        q: 'Do you repair barrier arms in Las Colinas?',
        a: 'Yes — barrier arm motors, boards, counterbalance and loop detection are all regular work for us in this area.',
      },
    ],
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    tier: 1,
    zips: ['75040', '75041', '75042', '75043', '75044'],
    neighborhoods: ['Firewheel', 'Camelot', 'Duck Creek', 'Oakridge', 'Club Hill'],
    landmarks: ['Firewheel Town Center', 'Lake Ray Hubbard', 'Granville Arts Center', 'Spring Creek Forest Preserve'],
    majorRoads: ['I-635', 'President George Bush Turnpike', 'SH-78', 'Northwest Highway'],
    nearbyCities: ['richardson', 'rowlett', 'sachse', 'mesquite', 'wylie', 'dallas'],
    responseBand: '',
    gateProfile: {
      dominant: 'Mixed residential and a substantial industrial and warehouse base with commercial entrance gates',
      commonGateTypes: ['Commercial slide', 'Cantilever', 'Chain link industrial', 'Residential swing'],
      commonBrands: ['All-O-Matic', 'Ramset', 'LiftMaster', 'HySecurity'],
      commonIssues: ['High-cycle chain and sprocket wear', 'Motor thermal cutout', 'Loop detector faults', 'Track and roller wear'],
    },
    localAngle:
      'Garland has one of the larger industrial footprints in Dallas County, and a lot of our work here is warehouse and yard ' +
      'gates rather than driveways. Those are high-cycle chain-driven slide and cantilever gates where the failure mode is almost ' +
      'always mechanical wear rather than electronics — chains stretch, sprockets round off, rollers flat-spot, and the operator ' +
      'ends up straining against a gate that has become progressively harder to move. Catching that early is the difference ' +
      'between a chain and sprocket replacement and a new gearbox. ' +
      'On the residential side, the neighborhoods out toward Firewheel and Lake Ray Hubbard bring a different problem entirely. ' +
      'Proximity to the water keeps humidity up, and gate hardware near the lake corrodes noticeably faster than equivalent ' +
      'equipment further inland — hinges seize, fasteners rust, and moisture works its way into outdoor control enclosures. ' +
      'It is one of the few parts of Dallas County where we genuinely recommend a service interval rather than waiting for a failure.',
    faqs: [
      {
        q: 'Our warehouse gate is getting noisy and slow. Can it wait?',
        a: 'It is worth looking at sooner rather than later. Noise and sluggish travel on a high-cycle gate usually means chain, sprocket or roller wear, and left running it will eventually take the gearbox with it — turning a modest mechanical repair into a much larger one.',
      },
      {
        q: 'Do you service industrial and yard gates in Garland?',
        a: 'Yes, including cantilever gates, chain link industrial gates, loop detection and high-cycle commercial operators.',
      },
    ],
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant County',
    tier: 1,
    zips: ['76001', '76006', '76010', '76012', '76013', '76016', '76017', '76018'],
    neighborhoods: ['Viridian', 'Interlochen', 'North Arlington', 'Southwest Arlington', 'Country Club Estates'],
    landmarks: ['AT&T Stadium', 'Globe Life Field', 'Six Flags Over Texas', 'River Legacy Park'],
    majorRoads: ['I-20', 'I-30', 'SH-360', 'Cooper Street'],
    nearbyCities: ['grand-prairie', 'mansfield', 'kennedale', 'euless', 'crowley'],
    responseBand: '',
    gateProfile: {
      dominant: 'Established residential neighborhoods with older iron gates plus commercial and event-adjacent controlled access',
      commonGateTypes: ['Wrought iron swing', 'Slide gate', 'Commercial barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'All-O-Matic'],
      commonIssues: ['Hinge sag on older iron gates', 'Post movement', 'Control board failure', 'Photo-eye faults'],
    },
    localAngle:
      'A lot of Arlington gate work involves ironwork that has been in place for decades — particularly around Interlochen and the ' +
      'older North Arlington neighborhoods. The recurring failure there is not electrical at all: hinges wear, the gate starts to ' +
      'sag, and the operator spends every cycle fighting a gate that no longer swings freely. By the time someone calls, the ' +
      'operator has usually been blamed for months. Re-hanging the gate and addressing the post is the actual repair, and it is ' +
      'considerably cheaper than the new operator that gets quoted for the symptom. ' +
      'Arlington also has a large events and hospitality footprint around the stadium district, and the commercial gates and ' +
      'barrier arms serving those lots take an enormous number of cycles in short bursts. A parking barrier that sits idle most ' +
      'of the week and then runs continuously for two days behaves nothing like a residential gate, and it needs servicing on ' +
      'that rhythm rather than on a calendar.',
    faqs: [
      {
        q: 'My iron gate is dragging on the driveway. Is the gate bent?',
        a: 'More often the hinges have worn or the post has moved. Dallas–Fort Worth clay shifts posts seasonally, and decades-old hinges develop play. Straightening or forcing the gate without fixing the post or hinge means it will be dragging again within a season.',
      },
      {
        q: 'Do you cover all of Arlington?',
        a: 'Yes, across all of Arlington and neighbouring Tarrant County cities. We give you a real arrival window when you call, based on where the nearest truck actually is and the traffic on I-20 and SH-360.',
      },
    ],
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas County',
    tier: 1,
    zips: ['75080', '75081', '75082'],
    neighborhoods: ['Canyon Creek', 'Prairie Creek', 'Breckinridge', 'Heights Park', 'Cottonwood Heights'],
    landmarks: ['CityLine', 'UT Dallas', 'Galatyn Park', 'Cottonwood Park'],
    majorRoads: ['US-75', 'President George Bush Turnpike', 'Campbell Road', 'Coit Road'],
    nearbyCities: ['plano', 'garland', 'dallas', 'murphy', 'sachse', 'addison'],
    responseBand: '',
    gateProfile: {
      dominant: 'Established residential with mature gated pockets, plus corporate campus controlled access along the US-75 corridor',
      commonGateTypes: ['Residential swing', 'Community slide', 'Commercial barrier arm'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Linear'],
      commonIssues: ['Ageing control boards', 'Telephone entry faults', 'Limit switch drift', 'Receiver and remote failures'],
    },
    localAngle:
      'Richardson is a mature city and the gates reflect that — most of the residential equipment we see here was installed in the ' +
      '1990s or early 2000s and is still perfectly serviceable. The common calls are control boards, receivers and limit switches, ' +
      'all of which are still readily available for this generation of equipment. Along the US-75 and CityLine corridor it shifts ' +
      'to corporate controlled access, where the fault is usually in the reader or controller rather than the gate itself. ' +
      'The thing worth knowing if you own a gate in Canyon Creek, Prairie Creek or Breckinridge is that age alone is not a reason ' +
      'to replace an operator. A twenty-five-year-old unit is often assumed to be beyond help when in ' +
      'most cases it simply needs a board and a set of limit switches. The mechanical side of these operators was built to last, ' +
      'and the parts that fail are the cheap ones. We will tell you honestly when a unit really has reached the end.',
    faqs: [
      {
        q: 'My remote stopped working but the keypad still opens the gate. What is wrong?',
        a: 'Almost always the receiver or the remote itself rather than the operator. It is one of the quickest and least expensive repairs we do, and it does not require replacing anything mechanical.',
      },
    ],
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas County',
    tier: 1,
    zips: ['75006', '75007', '75010'],
    neighborhoods: ['Josey Ranch', 'Rosemeade', 'Austin Waters', 'Country Place', 'Historic Downtown'],
    landmarks: ['Josey Ranch Lake', 'Historic Downtown Carrollton', 'Coyote Ridge', 'Elm Fork Nature Preserve'],
    majorRoads: ['I-35E', 'President George Bush Turnpike', 'Josey Lane', 'Hebron Parkway'],
    nearbyCities: ['farmers-branch', 'lewisville', 'coppell', 'addison', 'plano', 'the-colony'],
    responseBand: '',
    gateProfile: {
      dominant: 'Suburban residential with gated pockets plus a significant light-industrial and distribution base',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Chain link industrial'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Linear', 'Ramset'],
      commonIssues: ['Chain and sprocket wear', 'Control board failure', 'Loop detector faults', 'Track debris and roller wear'],
    },
    localAngle:
      'Carrollton splits between suburban residential and a large light-industrial and distribution corridor along I-35E, which ' +
      'means we are regularly on both sides of the same day — a driveway swing gate in Rosemeade in the morning and a high-cycle ' +
      'yard gate off Hebron in the afternoon. The industrial gates here suffer badly from track debris; slide gates running across ' +
      'a yard collect gravel and grit that grinds rollers flat and makes the operator work far harder than it should. ' +
      'That is worth knowing because it is one of the few gate problems an owner can genuinely head off. Keeping the track clear ' +
      'costs nothing and removes the single most common cause of premature roller and gearbox wear on this side of the city. ' +
      'When we are called out to a Carrollton yard gate that has stalled partway, the track is the first thing we look at, and ' +
      'often the whole answer.',
    faqs: [
      {
        q: 'Our yard gate keeps jamming partway. Is the operator failing?',
        a: 'Check the track first. Slide gates in yard and industrial settings collect gravel and debris that binds the rollers, and the operator stalls trying to push through it. What looks like an operator fault is frequently a track that needs clearing and rollers that need replacing.',
      },
    ],
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas County',
    tier: 1,
    zips: ['75149', '75150', '75180', '75181', '75182'],
    neighborhoods: ['Creek Crossing', 'Camelot', 'Town East', 'Northridge', 'Falcons Lair'],
    landmarks: ['Town East Mall', 'Mesquite Championship Rodeo', 'Mesquite Arts Center', 'Opal Lawrence Historical Park'],
    majorRoads: ['I-635', 'I-30', 'US-80', 'Galloway Avenue'],
    nearbyCities: ['garland', 'sunnyvale', 'balch-springs', 'forney', 'rowlett', 'dallas'],
    responseBand: '',
    gateProfile: {
      dominant: 'Residential neighborhoods with a growing multi-family and commercial base along the US-80 corridor',
      commonGateTypes: ['Apartment community slide', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'DoorKing', 'Eagle'],
      commonIssues: ['High-cycle wear on apartment entrances', 'Telephone entry faults', 'Damaged gates from vehicle impact', 'Loop detector faults'],
    },
    localAngle:
      'A large share of our Mesquite work is multi-family — apartment and townhome entrances along and around the US-80 corridor. ' +
      'Those gates take a genuinely punishing duty cycle, and they also take a lot of vehicle impact, which is its own category of ' +
      'repair: bent leaves, damaged posts and operators knocked out of alignment. Getting an impacted gate back to safe operation ' +
      'usually means addressing the structure before anything electrical, because an operator forced to move a distorted gate will ' +
      'simply fail again. ' +
      'The safety devices matter more here than almost anywhere else we work. A community entrance with a damaged photo-eye or a ' +
      'dead safety loop is a gate that can close on a vehicle or a child, and on a property with hundreds of residents that is not ' +
      'a theoretical risk. We test every safety device on a multi-family gate before we leave, whether or not it was part of the ' +
      'original call.',
    faqs: [
      {
        q: 'A resident hit our apartment gate. What is involved in fixing it?',
        a: 'Typically straightening or re-welding the gate leaf, checking the post and footing, then realigning the operator and re-testing the safety devices. Skipping straight to the operator is a common mistake — a gate that no longer travels true will destroy a new operator as quickly as it did the last one.',
      },
      {
        q: 'Do you handle apartment and multi-family gates in Mesquite?',
        a: 'Yes, including telephone entry, loop detectors and scheduled maintenance for high-cycle entrances.',
      },
    ],
  },
  {
    slug: 'denton',
    name: 'Denton',
    county: 'Denton County',
    tier: 1,
    zips: ['76201', '76205', '76207', '76208', '76209', '76210'],
    neighborhoods: ['Rayzor Ranch', 'Robson Ranch', 'Country Club', 'Oakmont', 'Southridge'],
    landmarks: ['Denton Square', 'University of Dallas–Fort Worth', 'Ray Roberts Lake', 'Clear Creek Natural Heritage Center'],
    majorRoads: ['I-35E', 'I-35W', 'US-380', 'Loop 288'],
    nearbyCities: ['argyle', 'corinth', 'sanger', 'krum', 'lake-dallas', 'ponder'],
    responseBand: '',
    gateProfile: {
      dominant: 'Acreage and ranch properties with long driveways alongside established residential and student housing',
      commonGateTypes: ['Solar-powered ranch swing', 'Estate swing', 'Farm and pasture gate', 'Community slide'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'Eagle', 'Viking'],
      commonIssues: ['Solar battery failure', 'Long-run wiring faults', 'Post movement on rural installs', 'Rodent damage to buried cable'],
    },
    localAngle:
      'Denton is where the metroplex starts turning rural, and the gate work changes with it. A large proportion of what we do here ' +
      'is acreage properties where the gate sits a long way from the house and mains power was never run to it — so it is solar and ' +
      'battery, and the fault is usually the power system rather than the operator. The other recurring Denton problem is buried ' +
      'cable on long runs: rodents, ground movement and fence-post work all take their toll, and an intermittent gate on a rural ' +
      'property is very often a damaged run rather than anything wrong at either end of it.',
    faqs: [
      {
        q: 'Our ranch gate works sometimes and not others. What causes that?',
        a: 'On long rural runs, intermittent operation usually points at the wiring rather than the operator — damaged buried cable, a corroded junction, or rodent damage. We trace the fault rather than replacing the whole run by default, which is normally the far cheaper outcome.',
      },
      {
        q: 'Do you travel out to acreage properties around Denton?',
        a: 'Yes. Long-driveway, solar and off-grid gate installations around Denton, Argyle, Sanger and Ponder are regular work for us. We confirm an arrival window when you call.',
      },
    ],
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    county: 'Rockwall County',
    tier: 1,
    zips: ['75032', '75087'],
    neighborhoods: ['Chandlers Landing', 'The Shores', 'Stone Creek', 'Breezy Hill', 'Lakeside Village'],
    landmarks: ['Lake Ray Hubbard', 'The Harbor Rockwall', 'Harry Myers Park', 'Downtown Rockwall Square'],
    majorRoads: ['I-30', 'SH-66', 'SH-205', 'John King Boulevard'],
    nearbyCities: ['rowlett', 'heath', 'royse-city', 'fate', 'wylie', 'garland'],
    responseBand: '',
    gateProfile: {
      dominant: 'Lakefront and gated waterfront communities around Lake Ray Hubbard with a high proportion of custom estate gates',
      commonGateTypes: ['Estate swing', 'Ornamental iron', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Viking', 'All-O-Matic'],
      commonIssues: ['Corrosion from lakeside humidity', 'Control board failure', 'Hinge wear on heavy ornamental gates', 'Photo-eye faults'],
    },
    localAngle:
      'Rockwall gate work is shaped by the lake. The waterfront and near-water communities — Chandlers Landing, The Shores — run a ' +
      'lot of heavy ornamental ironwork, and the sustained humidity accelerates everything: hinges seize, fasteners corrode, and ' +
      'electrical connections in outdoor enclosures degrade noticeably faster than they do inland. It is one of the few parts of ' +
      'the metroplex where we genuinely recommend a maintenance interval rather than waiting for a failure, because the corrosion ' +
      'is predictable and catching it early is significantly cheaper. ' +
      'The gates themselves also tend to be heavier here than the operators originally fitted to them. Custom ironwork on a ' +
      'waterfront property is frequently re-clad or reinforced over the years, and the operator quietly ends up moving far more ' +
      'weight than it was specified for. That shows up as gearbox and hinge wear rather than an electrical fault, and it is why we ' +
      'always move a Rockwall gate by hand before we look at anything electrical.',
    faqs: [
      {
        q: 'Does being near the lake actually affect a gate?',
        a: 'Noticeably, yes. Sustained humidity accelerates corrosion on hinges, fasteners and electrical connections inside outdoor enclosures. Gates near Lake Ray Hubbard reliably need attention sooner than equivalent equipment further inland, which is why we suggest a service interval here rather than waiting for something to fail.',
      },
    ],
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin County',
    tier: 1,
    zips: ['75002', '75013'],
    neighborhoods: ['Twin Creeks', 'Bethany Lakes', 'Watters Crossing', 'Star Creek', 'Cottonwood Bend'],
    landmarks: ['Allen Event Center', 'Watters Creek', 'Celebration Park', 'Allen Station Park'],
    majorRoads: ['US-75', 'SH-121', 'Bethany Drive', 'Stacy Road'],
    nearbyCities: ['plano', 'mckinney', 'fairview', 'lucas', 'parker', 'frisco'],
    responseBand: '',
    gateProfile: {
      dominant: 'Master-planned residential with HOA-managed community entrances and a growing custom estate segment toward Lucas',
      commonGateTypes: ['Community slide', 'Estate swing', 'Ornamental iron'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Viking'],
      commonIssues: ['Access control programming loss', 'High-cycle wear', 'Control board failure', 'Safety loop faults'],
    },
    localAngle:
      'Allen is predominantly master-planned, so the residential gate work is concentrated in community entrances rather than ' +
      'individual driveways — which means access control is as often the fault as the operator. Toward the eastern edge, heading ' +
      'out to Lucas and Parker, lot sizes grow and it shifts to custom estate gates on longer drives. The common thread is that ' +
      'most of this equipment is now fifteen to twenty years old and reaching the age where boards start to fail, which is ' +
      'ordinary and entirely repairable. ' +
      'Because so many Allen gates are HOA-managed, the practical problem is often administrative rather than technical. Access ' +
      'codes and resident directories get lost when a management company changes, and we are regularly called to a gate that works ' +
      'perfectly but will no longer let anyone through. We can rebuild the directory and credentials on most systems, and we ' +
      'provide itemised written quotes suitable for a board to approve.',
    faqs: [
      {
        q: 'Who is responsible for repairing an HOA community gate?',
        a: 'Typically the HOA or its management company rather than individual residents. We provide written, itemised quotes suitable for board approval, and we are happy to speak directly with a property manager.',
      },
    ],
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    county: 'Dallas County',
    tier: 1,
    zips: ['75050', '75051', '75052', '75054'],
    neighborhoods: ['Mira Lagos', 'Westchester', 'Lake Parks', 'The Peninsula', 'Grand Peninsula'],
    landmarks: ['Epic Waters', 'Lone Star Park', 'Joe Pool Lake', 'Traders Village'],
    majorRoads: ['I-20', 'I-30', 'SH-161', 'Carrier Parkway'],
    nearbyCities: ['arlington', 'irving', 'mansfield', 'cedar-hill', 'duncanville', 'midlothian'],
    responseBand: '',
    gateProfile: {
      dominant: 'Newer gated communities to the south around Joe Pool Lake plus substantial industrial and logistics gate work along I-20 and SH-161',
      commonGateTypes: ['Community slide', 'Industrial cantilever', 'Commercial slide', 'Residential swing'],
      commonBrands: ['LiftMaster', 'HySecurity', 'Ramset', 'All-O-Matic'],
      commonIssues: ['High-cycle industrial wear', 'Loop detector faults', 'Gearbox wear', 'Access control failures'],
    },
    localAngle:
      'Grand Prairie stretches a long way, and the gate work at either end is barely the same trade. The southern communities ' +
      'around Joe Pool Lake are newer residential with HOA entrances. Along the I-20 and SH-161 corridors it is logistics and ' +
      'distribution — heavy cantilever and industrial slide gates running continuously, often on HySecurity or Ramset equipment, ' +
      'where a failed gate means trucks queuing and the priority is a correct diagnosis on the first visit rather than the ' +
      'cheapest possible part. ' +
      'On the industrial sites the fault is frequently the loop detector rather than the gate. A buried loop that has cracked with ' +
      'ground movement, or a detector knocked out by a nearby electrical fault, presents as a gate that ignores approaching ' +
      'vehicles — which looks like an operator failure and is not one. We test the detection side before condemning anything ' +
      'mechanical, because on a site where trucks are backing up it is usually the fastest thing to put right.',
    faqs: [
      {
        q: 'Our distribution yard gate is down. How fast can you get there?',
        a: 'We run 24/7 and treat commercial entrance failures as urgent — a gate down at a logistics site is a business-stopping problem, not an inconvenience. We confirm an arrival window when you call.',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// TIER 2 & 3 — full client list. Enrich with real local data before publishing
// each page (see CITY-PAGES.md §5). validate-cities.ts blocks publishing any
// city that has not been enriched to its tier's minimum.
// ---------------------------------------------------------------------------

const tier2Raw: [string, string][] = [
  ['Addison', 'Dallas County'], ['Aledo', 'Parker County'], ['Alvarado', 'Johnson County'],
  ['Anna', 'Collin County'], ['Argyle', 'Denton County'], ['Azle', 'Tarrant County'],
  ['Bedford', 'Tarrant County'], ['Benbrook', 'Tarrant County'], ['Burleson', 'Johnson County'],
  ['Cedar Hill', 'Dallas County'], ['Celina', 'Collin County'], ['Cleburne', 'Johnson County'],
  ['Colleyville', 'Tarrant County'], ['Coppell', 'Dallas County'], ['Corinth', 'Denton County'],
  ['Crowley', 'Tarrant County'], ['Decatur', 'Wise County'], ['DeSoto', 'Dallas County'],
  ['Duncanville', 'Dallas County'], ['Euless', 'Tarrant County'], ['Fairview', 'Collin County'],
  ['Farmers Branch', 'Dallas County'], ['Flower Mound', 'Denton County'], ['Forney', 'Kaufman County'],
  ['Grapevine', 'Tarrant County'], ['Haltom City', 'Tarrant County'], ['Haslet', 'Tarrant County'],
  ['Highland Park', 'Dallas County'], ['Highland Village', 'Denton County'], ['Hurst', 'Tarrant County'],
  ['Keller', 'Tarrant County'], ['Kennedale', 'Tarrant County'], ['Lancaster', 'Dallas County'],
  ['Lewisville', 'Denton County'], ['Little Elm', 'Denton County'], ['Lucas', 'Collin County'],
  ['Mansfield', 'Tarrant County'], ['Midlothian', 'Ellis County'], ['Murphy', 'Collin County'],
  ['North Richland Hills', 'Tarrant County'], ['Northlake', 'Denton County'], ['Parker', 'Collin County'],
  ['Prosper', 'Collin County'], ['Red Oak', 'Ellis County'], ['Roanoke', 'Denton County'],
  ['Rowlett', 'Dallas County'], ['Royse City', 'Rockwall County'], ['Sachse', 'Dallas County'],
  ['Saginaw', 'Tarrant County'], ['Seagoville', 'Dallas County'], ['Southlake', 'Tarrant County'],
  ['Sunnyvale', 'Dallas County'], ['The Colony', 'Denton County'], ['Trophy Club', 'Denton County'],
  ['University Park', 'Dallas County'], ['Waxahachie', 'Ellis County'], ['Weatherford', 'Parker County'],
  ['Wylie', 'Collin County'],

  // ── Added 28 Sep 2026, from the client's master keyword list ──────────────
  // These six appear throughout Shield_Gate_Repair_DFW_SEO_Master_Keywords.pdf
  // and were absent from the service-area list entirely, so there was no page
  // for them at any tier. Same correction as Fort Worth in fa899ce.
  //
  // Tiered on gate density rather than population: Bartonville and Cross Roads
  // are acreage, where the entrance gate is a given, and Lantana is a single
  // large master-planned community. Appended rather than merged alphabetically
  // so the addition stays visible in review; `build()` does not care about
  // order.
  //
  // ⚠️ Richland Hills is NOT North Richland Hills. They are separate Tarrant
  // County cities with separate ZIPs, and conflating them would put wrong
  // content on both.
  ['Bartonville', 'Denton County'], ['Lantana', 'Denton County'], ['Cross Roads', 'Denton County'],
  ['Hickory Creek', 'Denton County'], ['Richland Hills', 'Tarrant County'], ['Watauga', 'Tarrant County'],
]

const tier3Raw: [string, string][] = [
  ['Alvord', 'Wise County'], ['Annetta', 'Parker County'], ['Annetta North', 'Parker County'],
  ['Annetta South', 'Parker County'], ['Athens', 'Henderson County'], ['Aubrey', 'Denton County'],
  ['Aurora', 'Wise County'], ['Balch Springs', 'Dallas County'], ['Blue Ridge', 'Collin County'],
  ['Bonham', 'Fannin County'], ['Bowie', 'Montague County'], ['Boyd', 'Wise County'],
  ['Bridgeport', 'Wise County'], ['Briar', 'Wise County'], ['Bristol', 'Ellis County'],
  ['Caddo Mills', 'Hunt County'], ['Callisburg', 'Cooke County'], ['Campbell', 'Hunt County'],
  ['Canton', 'Van Zandt County'], ['Celeste', 'Hunt County'], ['Chico', 'Wise County'],
  ['Collinsville', 'Grayson County'], ['Comanche', 'Comanche County'], ['Combine', 'Kaufman County'],
  ['Cool', 'Parker County'], ['Copeville', 'Collin County'], ['Crandall', 'Kaufman County'],
  ['Cresson', 'Hood County'], ['Denison', 'Grayson County'], ['Dublin', 'Erath County'],
  ['East Tawakoni', 'Rains County'], ['Eastland', 'Eastland County'], ['Edgewood', 'Van Zandt County'],
  ['Elmo', 'Kaufman County'], ['Emory', 'Rains County'], ['Everman', 'Tarrant County'],
  ['Farmersville', 'Collin County'], ['Fate', 'Rockwall County'], ['Ferris', 'Ellis County'],
  ['Forest Hill', 'Tarrant County'], ['Gainesville', 'Cooke County'], ['Glenn Heights', 'Dallas County'],
  ['Glen Rose', 'Somervell County'], ['Godley', 'Johnson County'], ['Granbury', 'Hood County'],
  ['Grandview', 'Johnson County'], ['Greenville', 'Hunt County'], ['Gunter', 'Grayson County'],
  ['Gun Barrel City', 'Henderson County'], ['Heath', 'Rockwall County'], ['Howe', 'Grayson County'],
  ['Hudson Oaks', 'Parker County'], ['Hutchins', 'Dallas County'], ['Josephine', 'Collin County'],
  ['Joshua', 'Johnson County'], ['Justin', 'Denton County'], ['Kaufman', 'Kaufman County'],
  ['Keene', 'Johnson County'], ['Kemp', 'Kaufman County'], ['Krum', 'Denton County'],
  ['Lake Dallas', 'Denton County'], ['Lake Worth', 'Tarrant County'], ['Leonard', 'Fannin County'],
  ['Lindsay', 'Cooke County'], ['Lipan', 'Hood County'], ['Lone Oak', 'Hunt County'],
  ['Mabank', 'Kaufman County'], ['Malakoff', 'Henderson County'], ['Maypearl', 'Ellis County'],
  ['Melissa', 'Collin County'], ['Milford', 'Ellis County'], ['Millsap', 'Parker County'],
  ['Mineral Wells', 'Palo Pinto County'], ['Morgan Mill', 'Erath County'], ['Muenster', 'Cooke County'],
  ['New Fairview', 'Wise County'], ['Newark', 'Wise County'], ['Nocona', 'Montague County'],
  ['Oak Leaf', 'Ellis County'], ['Ovilla', 'Ellis County'], ['Palmer', 'Ellis County'],
  ['Paradise', 'Wise County'], ['Peaster', 'Parker County'], ['Pilot Point', 'Denton County'],
  ['Point', 'Rains County'], ['Poetry', 'Kaufman County'], ['Ponder', 'Denton County'],
  ['Poolville', 'Parker County'], ['Pottsboro', 'Grayson County'], ['Princeton', 'Collin County'],
  ['Quinlan', 'Hunt County'], ['Rendon', 'Tarrant County'], ['Rhome', 'Wise County'],
  ['Rio Vista', 'Johnson County'], ['Saint Jo', 'Montague County'], ['Sadler', 'Grayson County'],
  ['Sanger', 'Denton County'], ['Scurry', 'Kaufman County'], ['Sherman', 'Grayson County'],
  ['Springtown', 'Parker County'], ['Stephenville', 'Erath County'], ['Talty', 'Kaufman County'],
  ['Terrell', 'Kaufman County'], ['Tioga', 'Grayson County'], ['Tolar', 'Hood County'],
  ['Tom Bean', 'Grayson County'], ['Valley View', 'Cooke County'], ['Van Alstyne', 'Grayson County'],
  ['Venus', 'Johnson County'], ['West Tawakoni', 'Hunt County'], ['Westlake', 'Tarrant County'],
  ['Westminster', 'Collin County'], ['White Settlement', 'Tarrant County'], ['Whitewright', 'Grayson County'],
  ['Whitesboro', 'Grayson County'], ['Willow Park', 'Parker County'], ['Wilmer', 'Dallas County'],
  ['Wills Point', 'Van Zandt County'],

  // ── Added 28 Sep 2026, from the client's master keyword list ──────────────
  // The three remaining keyword-list towns that had no page at any tier. Small
  // Collin County communities, so Tier 3: a short, honest page is a fine thing
  // to serve someone who followed a link, and Tier 3 is not submitted for
  // indexing until it carries genuinely local content (see hasLocalContent).
  ['Lavon', 'Collin County'], ['Lowry Crossing', 'Collin County'], ['Nevada', 'Collin County'],
]

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

/**
 * Local data for cities that started life as a name and a county.
 *
 * Tier 2 and 3 are rosters — `[name, county]` pairs — because that is all the
 * client gave us for them, and a page with nothing local on it is served
 * `noindex` rather than submitted (see `indexedCities`). Enriching one is
 * therefore not a code change but a data change: fill in an entry here and the
 * city moves into the sitemap on the next build.
 *
 * Merged rather than promoted into `tier1Cities` so the roster below stays the
 * roster — `scripts/validate-cities.ts` checks it against the client's list
 * name for name, and lifting cities out of it would quietly break that check.
 *
 * ── SOURCING ────────────────────────────────────────────────────────────────
 * Same rule as Fort Worth and for the same reason: none of this was in the
 * client's data, so all of it is cited rather than assumed. Zips come from the
 * Census 2020 ZCTA-to-place relationship file, ordered so the city's principal
 * ZIP leads and shared slivers are dropped. Neighborhoods, landmarks and roads
 * come from each city's own site where it publishes them, and the exceptions
 * are noted per city. Adjacency is straight-line distance between Census
 * Gazetteer internal points, nearest first.
 *
 * `gateProfile` is the one field that is NOT sourced. It is drafted from the
 * city's building stock, lot sizes and zoning, exactly as the Tier 1 profiles
 * are, and carries the same caveat as the note at the top of this file: it
 * needs replacing with the client's technician interview answers. Everything a
 * visitor reads as a fact about their city is sourced; what they read as our
 * judgement about equipment is ours, and is marked as such here.
 */
const ENRICHED: Record<string, Partial<City>> = {
  // The Park Cities share 75205/75209/75219/75225 with Dallas, so the zips are
  // listed principal-first and the copy never claims a ZIP as exclusively ours.
  'highland-park': {
    zips: ['75205', '75209', '75219'],
    neighborhoods: ['Old Highland Park', 'Lakeside', 'Highland Park West', 'Turtle Creek Acreage', 'Hackberry Creek Acreage'],
    landmarks: ['Highland Park Village', 'Lakeside Park', 'Flippen Park', 'Exall Lake'],
    majorRoads: ['Preston Road', 'Mockingbird Lane', 'Armstrong Parkway', 'Dallas North Tollway'],
    nearbyCities: ['university-park', 'dallas', 'farmers-branch', 'addison', 'irving', 'carrollton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Ornamental iron gates on estate frontages in a town laid out between 1907 and 1924',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Obsolete control boards on operators installed decades ago',
        'Clay-soil post movement pulling heavy iron gates out of square',
        'Hinge and pivot wear under ornamental iron',
        'Photo-eye alignment on narrow drives',
      ],
    },
    localAngle:
      'Highland Park was platted between 1907 and 1924 by Wilbur David Cook, the landscape architect who laid out Beverly Hills, and roughly a fifth of the developed land was set aside as park. That history is what makes gate work here particular: the frontages are short, the ironwork is often decorative and heavy, and a great many of the operators behind it have been in place long enough that the board inside is no longer made. Replacing the whole assembly is rarely what the owner wants, because the gate itself is part of the house. So the question we are usually answering is whether the existing operator can be kept running with a current board and new safety devices, and whether the posts carrying that weight have shifted enough to need resetting before anything electrical is touched.',
    faqs: [
      {
        q: 'Our gate is original to the house. Can it be kept, or does the whole thing have to go?',
        a: 'Almost always kept. The gate, the hinges and the posts are separate from the operator that moves them, and an operator whose board is obsolete can usually be brought up to date without altering the ironwork at all. We would rather fit a current board and modern safety sensors behind a gate somebody chose in 1930 than sell a replacement that changes how the frontage looks.',
      },
      {
        q: 'Do you work on the short driveways and courtyard gates in Highland Park?',
        a: 'Yes, and they need a different approach to a long suburban drive. There is less room for a gate to swing and less room for a vehicle to wait off the street, which changes where safety devices go and how the timers are set. It also means a gate that fails here blocks the street rather than a driveway, so we treat it as urgent.',
      },
    ],
  },

  'university-park': {
    zips: ['75205', '75225'],
    // Neighborhood names are from a Dallas real-estate authority rather than
    // the city, which publishes no list. Kept because they are the names people
    // actually use, but they are the least-sourced field on this entry.
    neighborhoods: ['Volk Estates', 'Caruth Hills', 'Windsor Place', 'Stratford Manor', 'University Heights'],
    landmarks: ['Southern Methodist University', 'Snider Plaza', 'George W. Bush Presidential Center', 'Centennial Park'],
    majorRoads: ['Preston Road', 'Hillcrest Avenue', 'Lovers Lane', 'US-75 Central Expressway'],
    nearbyCities: ['highland-park', 'dallas', 'farmers-branch', 'addison', 'irving', 'carrollton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Seven thousand homes in under four square miles, where rebuilt houses keep adding new gates beside decades-old ones',
      commonGateTypes: ['Wrought iron swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'DoorKing'],
      commonIssues: [
        'Limits and safety devices left wrong after a new install',
        'Ageing operators on the acre lots at Volk Estates',
        'Clay-soil post movement',
        'Safety sensor misalignment on tight frontages',
      ],
    },
    localAngle:
      'University Park fits more than seven thousand homes into three and a half square miles, and it has been replacing its own housing stock since the 1970s — smaller houses coming down, larger ones going up on the same lots. For gate work that produces two completely different call types on neighbouring streets. On a rebuilt property the gate is new and the fault is usually commissioning: limits set for a gate that has since settled, a safety sensor aimed at nothing, an operator specified for a lighter leaf than the one it ended up carrying. A few doors down, on the acre-and-over lots around Volk Estates, the operator has been working since long before that rebuild started and needs parts rather than adjustment. The two need diagnosing differently, and they are frequently on the same street.',
    faqs: [
      {
        q: 'Our gate was installed with the house last year and already misbehaves. Is it faulty?',
        a: 'Usually it is set up rather than broken. A new gate settles on its hinges in its first year, and limits and obstruction force that were dialled in on the day stop matching where the gate physically sits. That is an adjustment, not a part. We would check the posts and the hinges first, because a builder-fitted gate on fresh ground moves more than one that has been up for twenty years.',
      },
      {
        q: 'Can you match a new operator to an older gate on a large lot?',
        a: 'Yes, and the sizing is the part that matters. A long iron leaf on an acre lot needs an operator rated for its weight and its length, not just for a residential driveway, and fitting one that is under-specified is what produces the repeat failures people assume are bad luck. We weigh the job by the gate, not by the address.',
      },
    ],
  },

  coppell: {
    zips: ['75019', '75063'],
    // Old Town and Riverchase are confirmed on coppelltx.gov; the remaining
    // three rest on HOA and realty sources because the city's own subdivision
    // database is behind a cookie gate.
    neighborhoods: ['Old Town Coppell', 'Riverchase', 'The Lakes of Coppell', 'Northlake Woodlands', 'Coppell Greens'],
    landmarks: ['Andrew Brown Park', 'Coppell Nature Park', 'The Square at Old Town Coppell', 'Coppell Arts Center'],
    majorRoads: ['Denton Tap Road', 'Sandy Lake Road', 'SH 121 Sam Rayburn Tollway', 'I-635'],
    nearbyCities: ['grapevine', 'carrollton', 'lewisville', 'farmers-branch', 'irving', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'Subdivisions built almost entirely between 1985 and 2000, so the operators behind their gates are ageing on the same clock',
      commonGateTypes: ['Residential slide', 'Wrought iron swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'All-O-Matic', 'DoorKing', 'Elite'],
      commonIssues: [
        'Control board failure on operators of the same 1990s generation',
        'Chain and sprocket wear on slide gates',
        'Telephone entry and keypad faults at community entrances',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Coppell went from under four thousand people in 1980 to nearly thirty-six thousand by 2000, and by then most of its residential land was built out. That compressed history is the useful thing to know about gates here, because it means an unusual share of them went in within the same fifteen-year window and are reaching the end of their service life together. We see the same board, the same chain wear and the same tired limit switches turning up street after street, which also means the parts are predictable and the repair is usually a known quantity rather than an investigation. The community entrances are the other half of the work: an HOA gate on a shared drive fails for everyone at once, so it gets treated as urgent rather than scheduled.',
    faqs: [
      {
        q: 'Our neighbours have all had gate trouble this year. Is that a coincidence?',
        a: 'Probably not. Most of Coppell was built between the mid-1980s and 2000, so a lot of these operators were installed within a few years of each other and are wearing out on the same schedule. Control boards and chains do not fail on a calendar, but they do fail on cycles and age, and a street built in one go tends to reach that point together.',
      },
      {
        q: 'Who do you deal with for an HOA or community entrance gate?',
        a: 'Whoever the association nominates — a board member, a property manager, or the management company. We will diagnose and quote to one contact, and we are used to entrances where the operator, the entry panel and the loop in the road belong to different parts of the same problem. Getting all three checked in one visit is what avoids two call-outs.',
      },
    ],
  },

  prosper: {
    zips: ['75078', '76227'],
    neighborhoods: ['Windsong Ranch', 'Star Trail', 'Whitley Place', 'Gentle Creek Estates', 'Lakes of La Cima'],
    landmarks: ['Frontier Park', 'Downtown Prosper', 'Windsong Ranch Lagoon', 'Whitley Place Park'],
    // US 380 is signed as such and called University Drive locally; both are
    // given because people search and say both.
    majorRoads: ['US-380 University Drive', 'Preston Road', 'Dallas North Tollway', 'Frontier Parkway'],
    nearbyCities: ['celina', 'frisco', 'little-elm', 'mckinney', 'aubrey', 'the-colony'],
    responseBand: '',
    gateProfile: {
      dominant: 'Estate lots of an acre and up under the town’s SF-E zoning, with gates set well back from the road',
      commonGateTypes: ['Long-driveway swing', 'Ranch and acreage swing', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Apollo'],
      commonIssues: [
        'Voltage lost over long low-voltage runs to the gate',
        'Battery and solar charging faults on off-grid installs',
        'Limit drift on long single leaves',
        'Loop detector and keypad faults at community entrances',
      ],
    },
    localAngle:
      'Prosper zones its estate district at a one-acre minimum, with lots at least a hundred and fifty feet wide and a forty-foot front setback, and that single planning decision shapes most of the gate work in town. A gate sitting that far from the house means a long cable run, and a long run means voltage arriving at the operator lower than it left — which produces a gate that works in mild weather and struggles in cold, and gets misdiagnosed as a failing motor more often than anything else we see out here. The newer master-planned sections bring the other kind of call: community entrances with loops, keypads and several gates that have to agree with each other. Both are a different job to a suburban driveway, and we quote them differently.',
    faqs: [
      {
        q: 'Our gate is a long way from the house and has got sluggish. Is the motor going?',
        a: 'Test the supply before you believe that. On the one-acre lots here the run out to the gate is long enough that the voltage arriving can be meaningfully lower than what left the house, and an operator that is starved behaves exactly like one that is worn out — slow, hesitant, worse when it is cold. Cable gauge and connections are far cheaper to put right than a motor, so that is where we start.',
      },
      {
        q: 'Do you service the gated entrances in the master-planned communities?',
        a: 'Yes. Those entrances are usually several things working together — the operator, a loop buried in the road, a keypad or callbox, and sometimes a second gate — and the fault is often not in the part that appears broken. We check the whole entrance in one visit rather than replacing the obvious component and coming back.',
      },
    ],
  },

  celina: {
    zips: ['75009', '75078', '76227'],
    neighborhoods: ['Light Farms', 'Mustang Lakes', 'Cambridge Crossing', 'Creeks of Legacy', 'Sutton Fields', 'Lilyana'],
    landmarks: ['Celina Historic Downtown Square', 'Old Celina Park', 'Founders Station Park'],
    majorRoads: ['Preston Road', 'FM 455', 'FM 428', 'Dallas North Tollway'],
    nearbyCities: ['prosper', 'gunter', 'pilot-point', 'aubrey', 'mckinney', 'little-elm'],
    responseBand: '',
    gateProfile: {
      dominant: 'Brand-new subdivision entrances inside the city alongside ranch gates across a 78-square-mile extraterritorial jurisdiction',
      commonGateTypes: ['Ranch and acreage swing', 'HOA community entrance', 'Residential slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Ghost Controls'],
      commonIssues: [
        'Battery and solar charging faults on acreage gates',
        'Loop detector and keypad faults at new entrances',
        'Limits left wrong on recently installed operators',
        'Clay-soil post movement on long farm gates',
      ],
    },
    localAngle:
      'Celina grew by almost a quarter in a single year to 2025 — the fastest of any city in the country — and it now sits on about forty-eight square miles with an extraterritorial jurisdiction of seventy-eight. Those two numbers describe the two halves of our work here. Inside the developments, at Light Farms and Mustang Lakes and the rest, the equipment is new and the calls are about commissioning and access control: a loop that was paved over, a keypad that never got programmed properly, limits set before the gate settled. Out on the land beyond the subdivisions, the gate is usually a long farm leaf on a battery kept charged by a solar panel, a mile from anything, where a flat battery means nobody gets in or out. We carry parts for both, because on any given day we are likely to see both.',
    faqs: [
      {
        q: 'Our development is new and the entrance gate already plays up. Should the builder fix it?',
        a: 'Ask them first — if it is inside its installation warranty that is the cheaper route, and we will tell you plainly when we think it is. What we do see on new entrances is set-up rather than failure: a loop damaged during paving, a keypad never fully programmed, or limits set before the gate had settled on its hinges. Those are quick to correct and worth diagnosing before anyone argues about who pays.',
      },
      {
        q: 'Do you come out past the city limits to ranch and acreage gates?',
        a: 'Yes. Celina’s extraterritorial jurisdiction is larger than the city itself, and a lot of the gates we see around here are on that land: a long leaf, a solar panel, a battery in a box on the post. When one of those stops, the property is shut, so we treat it as urgent and we test the battery under load before we touch the operator, because that is where the fault usually is.',
      },
    ],
  },
  /**
   * ⚠️ Neighborhood names for Southlake, Colleyville, Keller and Grapevine's
   * subdivisions come from real-estate subdivision directories, not from the
   * cities themselves — every one of those city sites either publishes no list
   * or blocked retrieval. They are the names residents use, which is what
   * matters for a page someone reads, but they are the least-sourced field in
   * this file and worth a second pass if the client's team can confirm them.
   * Grapevine's historic districts and Flower Mound's list are the exceptions:
   * both come from the cities' own pages.
   */
  southlake: {
    zips: ['76092'],
    neighborhoods: ['Timarron', 'Carillon', 'Kirkwood Hollow', 'Shady Oaks', 'Coventry Manor', 'Clariden Ranch'],
    landmarks: ['Southlake Town Square', 'Bob Jones Park', 'Bob Jones Nature Center', 'Bicentennial Park', 'The Marq Southlake'],
    // FM 1938 is Randol Mill Avenue here and Davis Boulevard a few miles north
    // in Keller — the same road, two names, and people search the local one.
    majorRoads: ['SH 114', 'FM 1709 Southlake Blvd', 'FM 1938 Randol Mill Ave', 'N Carroll Ave'],
    nearbyCities: ['trophy-club', 'westlake', 'colleyville', 'grapevine', 'keller', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'Estate subdivisions built overwhelmingly in the 1990s, many behind their own community entrances',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway slide', 'HOA community entrance'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Control boards reaching the end of their life across a single build era',
        'Chain and roller wear on wide estate slide gates',
        'Keypad and callbox faults at community entrances',
        'Clay-soil post movement under heavy iron',
      ],
    },
    localAngle:
      'Southlake built most of itself in one decade: the median home here dates to 1997, and forty-five per cent of the housing stock went up between 1990 and 1999. Gates went in with those houses, which is why a single street will often produce several similar calls in the same year — the boards, the chains and the limit switches behind them are all the same age. It makes the work predictable in a way that helps the customer, because we usually know what has failed before the cover comes off. The other thing worth knowing about this town is how much of it sits behind a shared entrance rather than a private drive, and a community gate that stops working is a different kind of urgent: nobody on the street gets in until it moves.',
    faqs: [
      {
        q: 'Is it worth repairing an operator that went in with the house in the nineties?',
        a: 'Usually, yes. The mechanical side of a well-installed operator from that era has plenty of life left, and what has actually failed is normally the board, the chain or a limit switch — all replaceable. What we would check alongside it is whether the gate has stayed square on its posts, because an operator fighting a dropped gate will wear out its replacement just as quickly.',
      },
      {
        q: 'Our subdivision entrance gate has failed. Who should call it in?',
        a: 'Whoever your association nominates, and one call is enough — we do not need every resident to report it. Entrance gates usually involve an operator, a keypad or callbox and a loop in the road, and the fault is often not in the part that looks broken, so we check all three on the first visit rather than returning for the second one.',
      },
    ],
  },

  colleyville: {
    zips: ['76034'],
    neighborhoods: ['Saddlebrook', 'Highland Meadows', 'Covington', 'Whittier Heights', 'Brook Meadows', 'Woodland Hills'],
    landmarks: ['Colleyville Nature Center', 'Cotton Belt Trail', 'Colleyville Heritage High School'],
    majorRoads: ['SH 26 Colleyville Blvd', 'Glade Road', 'Hall-Johnson Road', 'Precinct Line Road'],
    nearbyCities: ['bedford', 'hurst', 'southlake', 'north-richland-hills', 'euless', 'grapevine'],
    responseBand: '',
    gateProfile: {
      dominant: 'Large-lot single-family homes spanning four decades of building, so no single generation of operator dominates',
      commonGateTypes: ['Wrought iron swing', 'Estate driveway swing', 'Residential slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'All-O-Matic'],
      commonIssues: [
        'Parts availability on operators from the 1970s and 1980s',
        'Capacitor failure on older AC operators',
        'Limit drift on long single leaves',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Colleyville settled an argument in the early 1980s that still shapes the place: one faction wanted expensive single-family homes on large lots, the other wanted smaller lots and apartments, and the large lots won. The result is a town of wide frontages whose houses were built across four decades rather than one, and that spread is the practical difference here. On the same afternoon we can be at a gate whose operator predates the internet and another fitted in the last few years, and the question of whether parts still exist is a real one rather than a formality. We check that before quoting, because telling somebody a board is available and discovering otherwise on the day is how a one-visit repair becomes three.',
    faqs: [
      {
        q: 'My operator is old enough that I cannot find the brand online. Can it still be fixed?',
        a: 'Often, and finding out is quick. Plenty of operators from the seventies and eighties are still serviceable, either with parts that remain available or by fitting a current board to the existing mechanics. Where a unit genuinely cannot be supported any more we will say so and explain what replacing it involves, rather than quietly fitting something that will not last.',
      },
      {
        q: 'Do you handle the wide gates on the larger lots here?',
        a: 'Yes, and width is the thing that decides the job. A long single leaf puts far more leverage on its hinges and its operator than a short one, so we look at the post, the hinge and the gate frame before we look at the electronics. Fitting a stronger operator to a gate that is sagging simply moves the failure somewhere more expensive.',
      },
    ],
  },

  keller: {
    // 76262 is shared seven ways — Northlake, Roanoke, Westlake, Fort Worth,
    // Trophy Club, Flower Mound and Keller — so it follows the core ZIP rather
    // than leading. 76244 is postally "Keller" but is 96% Fort Worth land.
    zips: ['76248', '76262'],
    neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Bourland Oaks', 'Harmonson Farms', 'Saddlebrook Estates', 'Highland Oaks'],
    landmarks: ['Bear Creek Park', 'The Keller Pointe', 'Keller Town Center', 'Old Town Keller'],
    majorRoads: ['US-377', 'FM 1709 Keller Pkwy', 'FM 1938 Davis Blvd', 'Bear Creek Pkwy'],
    nearbyCities: ['westlake', 'southlake', 'north-richland-hills', 'colleyville', 'roanoke', 'fort-worth'],
    responseBand: '',
    gateProfile: {
      dominant: 'Newer housing than its neighbours, with several gated villages inside one subdivision running their own entrances',
      commonGateTypes: ['HOA community entrance', 'Wrought iron swing', 'Residential slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'All-O-Matic'],
      commonIssues: [
        'Remote and keypad credentials at gated village entrances',
        'Loop detector faults where entrances have been resurfaced',
        'Limit and safety-sensor drift on newer operators',
        'Clay-soil post movement',
      ],
    },
    localAngle:
      'Keller is the newest-built of the towns we cover along this corridor — the median home dates to 1999 and nearly a third of the housing went up between 2000 and 2009 — so the gates here are younger than most, and the calls skew toward access rather than mechanical failure. Hidden Lakes alone contains five separate gated villages, each with its own entrance and its own association maintaining the gates and the streets behind them, where residents get in with a remote or a keypad code. That arrangement produces a particular kind of problem: the operator is fine, the gate is fine, and what has actually broken is a credential, a loop under fresh asphalt, or the panel that reads them. Diagnosing it as an access fault instead of a gate fault is most of the job.',
    faqs: [
      {
        q: 'Half the residents can get in and half cannot. Is the gate broken?',
        a: 'Almost certainly not. When a gate opens for some credentials and not others, the gate and its operator are working and the fault is in what reads them — the keypad, the receiver, or the list of codes and remotes held in the panel. That is a programming and hardware question at the entrance, and it is usually a same-visit fix once we can get into the panel.',
      },
      {
        q: 'Our entrance was resurfaced and now the gate misbehaves. Related?',
        a: 'Very likely. Most entrances have a wire loop buried in the road that tells the gate a vehicle is there, and resurfacing, trenching or heavy plant can cut or crush it. The symptoms look like a possessed gate — opening on its own, refusing to close, ignoring cars — and the repair is the loop, not the operator.',
      },
    ],
  },

  grapevine: {
    // 75261 is the DFW Airport ZCTA — a quarter of Grapevine's land area, and
    // not a residential ZIP, so it is deliberately absent.
    zips: ['76051'],
    neighborhoods: ['Historic Grapevine Township', 'College Street Historic District', 'Original Town', 'Dove Creek', 'Silver Lake', 'Heritage Oaks'],
    landmarks: ['Grapevine Lake', 'Historic Main Street District', 'Grapevine Vintage Railroad', 'Nash Farm', 'Gaylord Texan'],
    majorRoads: ['SH 114', 'SH 121', 'SH 26 Ira E. Woods Ave', 'William D. Tate Ave'],
    nearbyCities: ['southlake', 'colleyville', 'coppell', 'euless', 'flower-mound', 'irving'],
    responseBand: '',
    gateProfile: {
      dominant: 'The oldest housing stock of the north-east Tarrant cities, with lakeside properties and a heavy commercial and hospitality corridor alongside',
      commonGateTypes: ['Wrought iron swing', 'Residential slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'Elite'],
      commonIssues: [
        'Obsolete boards on pre-1970s and 1980s properties',
        'Corrosion and moisture ingress on enclosures near the lake',
        'High-cycle wear on hotel and commercial entrances',
        'Loop and barrier faults on managed parking entrances',
      ],
    },
    localAngle:
      'Grapevine has the oldest housing of any city along this stretch — the median home dates to 1993 but more than thirteen hundred houses here predate 1970 — and it wraps around a lake with nearly sixty miles of shoreline. Between those two facts sits most of what we repair. Older properties bring operators old enough that the board inside is the question, and the ones nearer the water bring corrosion: moisture gets into an enclosure, sits on a terminal strip, and produces intermittent faults that come and go with the weather rather than failing outright. Then there is the commercial side, because a quarter of the city by land area is the airport and the hotel and retail corridor beside it, where entrances and barrier arms run all day and wear on cycles rather than years.',
    faqs: [
      {
        q: 'Our gate works some days and not others. Nothing obvious is wrong.',
        a: 'Intermittent faults are usually connections rather than components, and near the lake they are usually moisture. Water finds its way into an enclosure, sits on the terminals, and the fault follows the weather instead of the gate. That needs tracing rather than parts-swapping, so we test the circuit under conditions rather than replacing the board and hoping.',
      },
      {
        q: 'Do you cover hotel, retail and commercial entrances as well as houses?',
        a: 'Yes, and they are a different service model. An entrance cycling hundreds of times a day consumes chains, bearings and loop hardware on a schedule, and the sensible approach is planned replacement before the failure rather than an emergency call-out when a barrier is stuck and vehicles are queueing. We will set that up if it is useful, or just fix what is broken.',
      },
    ],
  },

  'flower-mound': {
    // 75022 and 75028 are the town's own; 76226 and 76262 are shared with
    // Argyle, Bartonville, Northlake and Roanoke and are left off.
    zips: ['75022', '75028'],
    // The only neighborhood list here taken straight from the town's own
    // homeowner-association page rather than a directory.
    neighborhoods: ['Bridlewood', 'Wellington of Flower Mound', 'Canyon Falls', 'The Estates at Tour 18', 'Chateau du Lac', 'The Preserve at Flower Mound', 'Wichita Creek Estates'],
    landmarks: ['The Flower Mound', 'Twin Coves Park', 'Heritage Park', 'Gibson-Grant Log House', 'Grapevine Lake'],
    majorRoads: ['FM 1171 Cross Timbers Rd', 'FM 2499 Long Prairie Rd', 'FM 3040 Flower Mound Rd', 'US-377'],
    nearbyCities: ['highland-village', 'trophy-club', 'argyle', 'roanoke', 'lewisville', 'coppell'],
    responseBand: '',
    gateProfile: {
      dominant: 'Two-acre minimum lots across the Cross Timbers district, with equestrian trails and no sewer, beside conventional 1990s subdivisions',
      commonGateTypes: ['Long-driveway swing', 'Ranch and acreage swing', 'HOA community entrance', 'Residential slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'Apollo'],
      commonIssues: [
        'Battery and solar charging faults on gates far from the house',
        'Voltage lost over long runs out to the road',
        'Limit drift on long single leaves',
        'Clay-soil post movement on paddock and farm gates',
      ],
    },
    localAngle:
      'Flower Mound zones a large part of itself as the Cross Timbers Conservation Development District, where the rule is one home per two acres and the town’s plan deliberately does not extend sewer. That is unusual this close to the metroplex, and it shows up in the gates: long entrance drives, leaves heavy enough to need a properly rated operator, and a good number of properties running the gate on a battery and panel because trenching power to the road was never worth it. The town also keeps more than fourteen miles of equestrian trail between its parks and the corps land along the lake, which tells you what kind of property is behind many of these gates. On the conventional side, the subdivisions built through the 1990s are now reaching the age where boards and chains start to go.',
    faqs: [
      {
        q: 'The gate at the end of our drive has slowed right down. Is it the operator?',
        a: 'On a long drive it is usually power before it is the operator. If the gate runs from a battery and a panel, the battery is the part that wears and Texas heat shortens it; if it runs from the house, the length of the cable can leave it short of voltage. Either way the symptom is the same — slow, hesitant, worse when it is cold — so we measure before we condemn anything.',
      },
      {
        q: 'Do you work on paddock and farm gates as well as the entrance?',
        a: 'Yes. On the two-acre properties out here the entrance gate is often not the only automated one, and a wide farm gate has its own problems — posts set in ground that shifts, long leaves that drop over time, and hinges carrying more weight than they were chosen for. We would rather fix the post and the hinge than fit a stronger operator to pull against them.',
      },
    ],
  },

  // ── BATCH 2, 25 Sep 2026 ───────────────────────────────────────────────────
  // Ten more Tier 2 towns taken off noindex. Selected on gate density first and
  // population second: an acre-lot town of 8,000 with a gate on every drive is
  // worth more to this business than a 90,000-person suburb of ungated tract
  // housing. Each entry is anchored to a fact that is true of that town and of
  // nowhere else — a zoning minimum, a lake shoreline, a 1973 master plan — so
  // the page has something to say that a name swap could not produce.
  //
  // `gateProfile` remains a DRAFT on all ten, same standing as Tier 1: it is
  // written from the town's housing stock and age, not from job records. The
  // technician interview replaces it (CITY-PAGES.md §5).

  lewisville: {
    zips: ['75057', '75067', '75077'],
    // 75028 is Flower Mound, 75056 The Colony and 75029 is PO-box only; all
    // three list Lewisville as an alternate USPS name and none is claimed here.
    neighborhoods: ['Old Town Lewisville', 'Castle Hills', 'Valley Vista', 'Garden Ridge', 'Arbor Valley'],
    landmarks: ['Lake Lewisville', 'LLELA Nature Preserve', 'MCL Grand Theater', 'Old Town Lewisville'],
    majorRoads: ['I-35E', 'SH 121 Business', 'FM 407 Justin Road', 'Main Street'],
    nearbyCities: ['flower-mound', 'highland-village', 'coppell', 'carrollton', 'the-colony', 'denton'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city of 137,000 that grew outward in distinct decades, so operator age changes street by street',
      commonGateTypes: ['Apartment and community slide', 'Residential swing', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'High cycle counts on multifamily and HOA entrances',
        'Worn slide chains and rollers on community gates',
        'Telephone entry boards on ageing apartment systems',
        'Clay-soil post movement on older residential drives',
      ],
    },
    localAngle:
      'Lewisville is the largest city on this list — around 137,000 people — and it grew in visible layers, which is the thing that matters for gate work. Old Town and the streets either side of Main are pre-war and post-war housing where an automated gate is the exception. The corridor along I-35E is apartments and gated communities, some of them thirty years old, and that is where most of our Lewisville calls come from: entrances running hundreds of cycles a day on slide operators that were specified for a quieter building. Out toward FM 407 and the lake the lots get larger and the gates become private driveway swings again. Those three call types need different parts on the van, so we ask which part of Lewisville a caller is in before we load it.',
    faqs: [
      {
        q: 'We manage an apartment entrance in Lewisville that keeps failing. Is it the operator or the gate?',
        a: 'On a high-traffic entrance it is usually neither in isolation. A slide gate doing several hundred cycles a day wears its chain, its rollers and its track long before the operator gives up, and the operator then strains against that wear until it fails too. Replacing the operator alone on a worn track buys a few months. We measure the track and the chain first and quote the whole entrance honestly, because a part-fix on a gate residents use every day is not a saving.',
      },
      {
        q: 'Do you service gated communities and HOAs as well as individual homes?',
        a: 'Yes, and a good share of our Lewisville work is exactly that. HOA and apartment entrances need scheduling around residents rather than around us, so we work to an agreed window, keep the entrance passable while we are in it, and put the failure and the fix in writing for the board or the management company.',
      },
    ],
  },

  mansfield: {
    zips: ['76063'],
    // Fairways of Walnut Creek and South Pointe are both gated; the remaining
    // three are large-lot subdivisions from realty listings rather than a city
    // register, which Mansfield does not publish.
    neighborhoods: ['Fairways of Walnut Creek', 'South Pointe', 'Walnut Creek Valley', 'Twin Creeks', 'Woodland Estates'],
    landmarks: ['Walnut Creek Country Club', 'Mansfield National Golf Club', 'Historic Downtown Mansfield', 'Hawaiian Falls'],
    majorRoads: ['US-287', 'FM 157 Matlock Road', 'Broad Street', 'SH 360'],
    nearbyCities: ['arlington', 'grand-prairie', 'cedar-hill', 'burleson', 'midlothian', 'kennedale'],
    responseBand: '',
    gateProfile: {
      dominant: 'Golf-course estate frontages and gated subdivisions spread across the Tarrant and Johnson county line',
      commonGateTypes: ['Estate driveway swing', 'Community slide', 'Ornamental iron swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'All-O-Matic'],
      commonIssues: [
        'Community entrance slide gates running constant cycles',
        'Long iron leaves sagging on estate frontages',
        'Loop detector faults on wide subdivision entrances',
        'Clay-soil post movement on golf-course lots',
      ],
    },
    localAngle:
      'Mansfield has more gated frontage per household than most towns its size, because its growth came as subdivisions rather than as infill — Fairways of Walnut Creek and South Pointe are gated at the entrance, and the estate lots around Walnut Creek Country Club are gated individually. That produces two kinds of work in the same postcode. A community entrance is a shared asset: it runs all day, it is a board or a management company that pays for it, and when it fails every resident is affected at once. A private estate gate on a golf-course lot is usually a long ornamental leaf, and the fault is more often the hinge, the post or the sag than the operator. We quote them differently because the urgency and the failure mode are different.',
    faqs: [
      {
        q: 'Our subdivision entrance gate in Mansfield is stuck open. How quickly can you get to it?',
        a: 'A community entrance stuck open is a security issue for every household behind it, so we treat it as urgent and aim to get a technician out the same day. If the fix needs a part we do not carry, we will secure the entrance in a safe state and tell you plainly when the part lands rather than leaving it open indefinitely.',
      },
      {
        q: 'Our long iron gate has started dragging on the driveway. Is the operator failing?',
        a: 'Usually not. A long ornamental leaf is heavy at its far end, and over years the hinge and the post take that load and let the gate drop — the operator is simply being asked to drag it. Fitting a stronger operator to a sagging gate is the common mistake and it fails again. The fix is the hinge, the post, or a re-square of the leaf, and then the existing operator generally has no trouble.',
      },
    ],
  },

  'north-richland-hills': {
    // 76180 and 76182 are the city's own; 76148 covers a northern section it
    // shares with Watauga.
    zips: ['76180', '76182', '76148'],
    neighborhoods: ['HomeTown NRH', 'Iron Horse', 'Iron Horse Commons', 'Kingswood Estates', 'Crestwood Estates'],
    landmarks: ['Iron Horse Golf Course', 'NRH2O Family Water Park', 'HomeTown NRH', 'Northfield Park'],
    majorRoads: ['Loop 820', 'SH 26 Grapevine Highway', 'Davis Boulevard', 'Rufe Snow Drive'],
    nearbyCities: ['hurst', 'bedford', 'euless', 'haltom-city', 'keller', 'colleyville'],
    responseBand: '',
    gateProfile: {
      dominant: 'Mid-century Mid-Cities housing with newer gated infill at HomeTown and Iron Horse',
      commonGateTypes: ['Residential swing', 'Community slide', 'Commercial slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'Eagle'],
      commonIssues: [
        'Operators installed in the 1990s with no current parts support',
        'Safety sensors missing or bypassed on older installs',
        'Slide gate track and roller wear at community entrances',
        'Corroded wiring on gates exposed to years of storm runoff',
      ],
    },
    localAngle:
      'North Richland Hills is a Mid-Cities suburb that filled in from the 1960s onward, and the gates reflect that: most of the automated ones went in during the 1990s and 2000s, and a good number have never been touched since. The practical consequence is safety equipment. A gate operator installed before current UL 325 practice often has one photo-eye or none, and we still find sensors that were disconnected years ago because they nuisance-tripped rather than because they were faulty. The newer gated pockets — HomeTown and around Iron Horse — are a different job entirely, with modern boards and intact safety devices, where the failure is usually a detector loop or a worn slide track. Either way we check the safety side before we quote the fault somebody called about.',
    faqs: [
      {
        q: 'Our gate has no safety sensors. Do we have to add them?',
        a: 'We will not re-commission a powered gate without working entrapment protection, and that is not a sales position. An automatic gate is heavy and it moves without warning; the sensors are what stop it closing on a car, a child or a pet. If yours are missing or were disconnected, fitting current ones is a small part of the job and we will tell you the cost before we start.',
      },
      {
        q: 'Our operator is from the 1990s. Can it still be repaired?',
        a: 'Often yes, and when it cannot we will say so rather than guess. Some operators of that era still have current boards and parts available; others were discontinued and nothing fits them any more. The mechanics — the posts, the hinges, the track — usually outlast the electronics, so even when the operator has to be replaced the rest of the installation is generally reusable, which keeps the cost far below a full replacement.',
      },
    ],
  },

  'trophy-club': {
    // 76262 is shared with Roanoke; the town has no exclusive ZIP.
    zips: ['76262'],
    neighborhoods: ['The Highlands at Trophy Club', 'Trophy Wood', 'Lakes of Trophy Club', 'Summit Cove', 'Turnberry'],
    landmarks: ['Trophy Club Country Club', 'Ben Hogan and Kathy Whitworth courses', 'Trophy Club Park', 'Harmony Park'],
    majorRoads: ['SH 114', 'Trophy Club Drive', 'Trophy Wood Drive', 'Bobcat Boulevard'],
    nearbyCities: ['southlake', 'roanoke', 'westlake', 'keller', 'grapevine', 'northlake'],
    responseBand: '',
    gateProfile: {
      dominant: 'A 1973 master-planned golf community, so a large share of operators date from the original build-out',
      commonGateTypes: ['Estate driveway swing', 'Courtyard gate', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Original-era operators with discontinued control boards',
        'Short drives and tight turning space on golf-course frontages',
        'Post movement on the rolling ground the courses are cut through',
        'Newer Highlands installs left badly commissioned',
      ],
    },
    localAngle:
      'Trophy Club was Texas’s first master-planned community, laid out in 1973 around two golf courses that the developer named for Ben Hogan. Almost fifty years of build-out in one town is why gate work here splits so cleanly. On the original streets the operator is frequently as old as the second or third owner of the house, and the question is whether a current board and new safety devices can be fitted behind ironwork nobody wants to change. In the Highlands, the district approved in 2007 that added roughly 1,400 homes, the gates are new and the faults are commissioning faults — limits set before the gate settled, sensors aimed at nothing, an operator sized for a lighter leaf. The town is small enough that we see both in an afternoon.',
    faqs: [
      {
        q: 'Our house backs onto the golf course and the driveway is short. Does that change the gate work?',
        a: 'It changes where the safety devices go and how the timers are set. A short drive means a vehicle waiting for the gate is partly in the street, so a slow open-and-close cycle is not just inconvenient, it is a hazard. We set the timing and the sensor positions for the drive you actually have rather than to a default, and on very tight frontages a slide gate is sometimes the safer answer than a swing.',
      },
      {
        q: 'Our gate is as old as the house. Is a replacement the only option?',
        a: 'Rarely. The gate, the posts and the hinges are separate from the operator, and on most 1970s and 1980s installations the ironwork is in better condition than the electronics driving it. Where the original board is genuinely discontinued we fit a current operator behind the existing gate, which preserves the frontage and costs a fraction of replacing the lot.',
      },
    ],
  },

  argyle: {
    zips: ['76226'],
    // Canyon Falls and Harvest are the two large master-planned developments;
    // most of the town is unplatted acreage with no subdivision register to
    // cite, so the remaining names are the ones in local use.
    neighborhoods: ['Canyon Falls', 'Harvest', 'Country Lakes', 'Waterstone Estates', 'Old Argyle'],
    landmarks: ['Argyle ISD campuses', 'Lantana', 'Denton Creek', 'US-377 corridor'],
    majorRoads: ['US-377', 'FM 407', 'I-35W', 'Crawford Road'],
    nearbyCities: ['flower-mound', 'highland-village', 'denton', 'northlake', 'roanoke', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'Horse and acreage properties where the entrance gate sits well back from the house on a long private drive',
      commonGateTypes: ['Ranch entrance swing', 'Farm and paddock gate', 'Wide estate slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Solar and battery operators on drives with no mains power at the gate',
        'Long buried runs to a gate hundreds of feet from the meter',
        'Wide farm gates dropping on posts set in shifting ground',
        'Livestock and wildlife triggering or obstructing safety devices',
      ],
    },
    localAngle:
      'Argyle is horse country inside the metroplex — low-density zoning, tree preservation rules and a lot of properties measured in acres rather than square feet. The gate work that produces is unlike anything in a suburb. The entrance is often several hundred feet from the house and further still from the meter, so the operator is solar or battery-backed, and when it fails the cause is as likely to be a tired battery or a panel under a grown-out tree as anything in the operator. The gates themselves are wide, because a trailer has to get through, and a wide gate on a post set in ground that moves with the season will drop out of square long before the motor wears out. We come to Argyle expecting a power problem and a post problem, and check the operator third.',
    faqs: [
      {
        q: 'Our gate runs on solar and has got slow and unreliable. Is the panel the problem?',
        a: 'Usually it is the battery, and the panel only by association. Sealed batteries on gate operators have a working life of a few years and they fail gradually — the gate opens fine in the afternoon and struggles at dawn, which is the clearest sign. A panel shaded by a tree that has grown since the install will shorten that life, so we check both, and we size the replacement for the number of cycles you actually run rather than the number the box assumes.',
      },
      {
        q: 'Do you work on farm and paddock gates as well as the main entrance?',
        a: 'Yes. On acreage the entrance is rarely the only automated gate, and a wide farm gate has its own failure pattern — a long leaf, a post in ground that shifts, and hinges carrying more weight than they were chosen for. We would rather reset the post and the hinge than sell a stronger operator to pull against them, because the stronger operator tears the post out eventually.',
      },
    ],
  },

  lucas: {
    // 75002 is Allen's ZIP and 75098 is Wylie's; Lucas has none of its own, and
    // the copy never claims either as exclusively ours.
    zips: ['75002', '75098'],
    neighborhoods: ['Forest Grove Estates', 'Stinson Highlands', 'Brockdale', 'Inwood Estates', 'Winningkoff'],
    landmarks: ['Lake Lavon', 'Brockdale Park', 'Lucas Community Park', 'Country Club Road corridor'],
    majorRoads: ['FM 1378 Country Club Road', 'FM 2551', 'Lucas Road', 'Estates Parkway'],
    nearbyCities: ['allen', 'wylie', 'parker', 'plano', 'murphy', 'mckinney'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town zoned to one- and two-acre minimums, so nearly every automated gate is a private driveway entrance',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Wide slide on long drives'],
      commonBrands: ['LiftMaster', 'US Automatic', 'All-O-Matic', 'Elite'],
      commonIssues: [
        'Long buried cable runs between house and gate',
        'Solar operators on drives without mains power at the entrance',
        'Post movement in Blackland Prairie clay on wide leaves',
        'Intercom and keypad faults over distance from the house',
      ],
    },
    localAngle:
      'Lucas holds its residential zoning at one- and two-acre minimums — R1 at an acre, R2 at two, the estate district averaging four — and it has defended that low density deliberately. For gate work that single ordinance explains almost everything. There are very few shared community entrances here, because there are very few dense subdivisions; nearly every gate is one household’s private entrance, set well back from the road on a drive long enough that power and communication have to travel. So the recurring faults are distance faults: a buried cable degraded after fifteen years in clay, a keypad that will not talk to a house two hundred feet away, a solar operator that was sized before the household added a second car and doubled the cycles. The gates themselves are wide, and wide leaves on Blackland clay posts move.',
    faqs: [
      {
        q: 'Our gate intercom cuts out but the gate still opens. What causes that?',
        a: 'Almost always the run between the gate and the house rather than either box. On an acre lot that cable is long, usually buried, and often fifteen or twenty years old — moisture gets into a joint and the audio degrades while the gate circuit, which is more tolerant, keeps working. We test the run before replacing hardware, because swapping an intercom that was never faulty is a common and expensive way to not fix this.',
      },
      {
        q: 'How much does the clay soil out here really affect a gate?',
        a: 'More than most people expect. Blackland Prairie clay swells when it is wet and shrinks hard in a Texas summer, and a gate post is a lever with a heavy leaf on the end of it. Over a few seasons that movement puts the gate out of square, which shows up as a gate that catches, strains or stops at the same point every time. It reads like an operator fault and it is a groundwork fault, so we check the post and the level before we touch the motor.',
      },
    ],
  },

  parker: {
    zips: ['75002', '75094'],
    neighborhoods: ['Southfork Estates', 'Hidden Creek Estates', 'Chaparral Estates', 'Dublin Meadows', 'Rolling Ridge'],
    landmarks: ['Southfork Ranch', 'Lake Lavon', 'Bowman Branch Park', 'Parker Road corridor'],
    majorRoads: ['Parker Road FM 2514', 'Dublin Road', 'FM 1378', 'SH 78'],
    nearbyCities: ['plano', 'allen', 'murphy', 'wylie', 'lucas', 'richardson'],
    responseBand: '',
    gateProfile: {
      dominant: 'Two-acre estate lots beside the Southfork ranch land, with new luxury build-out adding gates each year',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Ornamental iron slide'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'US Automatic'],
      commonIssues: [
        'Newly installed gates left commissioned to the wrong limits',
        'Under-specified operators on long ornamental leaves',
        'Long power and communication runs on two-acre frontages',
        'Clay post movement on wide entrances',
      ],
    },
    localAngle:
      'Parker is a small city that has held a large-lot identity on purpose, and it is now adding to it — the acreage rezoned beside the Southfork Ranch mansion is being laid out as eighty-nine two-acre estate homesites. That matters to gate work because a new estate gate and a twenty-year-old one fail in completely different ways, and Parker is about to have a great many of both. A new install goes wrong at commissioning: limits dialled in before the gate settled on its hinges, obstruction force set for a lighter leaf than the one that was finally hung, a safety sensor aimed where the drive used to be. An older gate on the established streets has done its settling and needs parts. We diagnose the age of the installation before we diagnose the fault.',
    faqs: [
      {
        q: 'Our gate was installed with our new build and already misbehaves. Is it under warranty?',
        a: 'It may be, and we will tell you if it looks like a warranty claim on the installer rather than a repair you should be paying us for. New-build gates most often need adjustment rather than parts — a gate settles on its hinges through its first year and the settings dialled in on install day stop matching where the gate physically sits. That is a short visit, and if we think the original installer owes you the fix, we will say so.',
      },
      {
        q: 'Is an operator sized for a normal driveway enough for a two-acre frontage?',
        a: 'Often not, and under-sizing is the most common cause of gates that keep failing on estate lots. A long ornamental leaf is heavier and has far more leverage than a suburban gate, and an operator chosen on price rather than on the weight and length it has to move will strain, overheat and fail repeatedly. We size the operator to the gate we can see, and we will tell you when the one you have is the reason it keeps breaking.',
      },
    ],
  },

  'highland-village': {
    // 75077 is shared with part of Lewisville; there is no exclusive ZIP.
    zips: ['75077'],
    neighborhoods: ['Highland Shores', 'Castlewood', 'Montclair Estates', 'Clearwater Estates', 'Highland Hills'],
    landmarks: ['Lake Lewisville', 'Copperas Branch Park', 'Pilot Knoll Park', 'The Shops at Highland Village'],
    majorRoads: ['FM 407 Justin Road', 'FM 2499', 'Briarhill Boulevard', 'I-35E'],
    nearbyCities: ['flower-mound', 'lewisville', 'denton', 'argyle', 'the-colony', 'coppell'],
    responseBand: '',
    gateProfile: {
      dominant: 'Lakeside custom homes on the south shore of Lake Lewisville, many with private dock access',
      commonGateTypes: ['Ornamental iron swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Corrosion on hardware and wiring near the shoreline',
        'Moisture ingress into control boxes on lakeside lots',
        'Post movement on sloping ground above the shore',
        'Photo-eye faults from lake fog and condensation',
      ],
    },
    localAngle:
      'Highland Village sits on the south shore of Lake Lewisville, and the water is not a scenic detail in gate work — it is the reason things fail here. Humidity off a lake this size gets into control boxes, corrodes terminal blocks and hinge hardware faster than it does a few miles inland, and lake fog sets off photo-eyes that behave perfectly the rest of the year. The ground adds to it: the lots on Highland Shores and above the shoreline slope, and a gate post on sloping ground that drains toward a lake moves more than one on level clay. So our checklist here starts with the enclosure seal and the earth around the post, which on an inland job would be the last things we looked at.',
    faqs: [
      {
        q: 'Our gate misbehaves on foggy mornings and is fine by lunchtime. Is it broken?',
        a: 'That pattern is nearly always the photo-eyes rather than the operator. Condensation on the lens scatters the beam, the operator reads an obstruction that is not there and refuses to close, and once the sun burns the fog off it works perfectly. It is genuinely fixable — repositioning, hooding, or replacing with a sensor type that tolerates moisture — and it does not mean the gate needs replacing.',
      },
      {
        q: 'Does being close to the lake shorten the life of the equipment?',
        a: 'It shortens the life of the parts exposed to air and water, not the operator itself. Terminal blocks, hinge hardware and anything inside a box whose seal has aged corrode faster here than they would inland. Sealing the enclosure properly and using the right hardware makes a real difference, and it is a much smaller job than replacing an operator that failed because water reached it.',
      },
    ],
  },

  rowlett: {
    zips: ['75088', '75089'],
    neighborhoods: ['Bayside', 'Waterview', 'Lakeside on Lake Ray Hubbard', 'Springfield Estates', 'Liberty Grove'],
    landmarks: ['Lake Ray Hubbard', 'Sapphire Bay peninsula', 'Rowlett Community Centre', 'Herfurth Park'],
    majorRoads: ['I-30', 'President George Bush Turnpike', 'Lakeview Parkway SH 66', 'Dalrock Road'],
    nearbyCities: ['garland', 'rockwall', 'sachse', 'wylie', 'mesquite', 'heath'],
    responseBand: '',
    gateProfile: {
      dominant: 'A peninsula city almost surrounded by Lake Ray Hubbard, with waterfront lots and newer gated communities',
      commonGateTypes: ['Community slide', 'Residential swing', 'Waterfront property gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'Elite'],
      commonIssues: [
        'Corrosion on waterfront hardware and buried wiring',
        'Slide track fouling from windblown grit off the lake',
        'Community entrance gates on constant cycles',
        'Storm damage to exposed operators and control boxes',
      ],
    },
    localAngle:
      'Rowlett is nearly surrounded by Lake Ray Hubbard — the city sits on a peninsula with miles of shoreline, and the Sapphire Bay site alone has two miles of it. Wind comes off that water with nothing to break it, and it carries grit. On slide gates that is the whole story: the track fouls, the rollers grind, and the operator gets blamed for a problem that is mechanical and abrasive. On waterfront lots the humidity does what it does everywhere near water, which is to find any terminal that is not properly sealed. Then there are the newer gated communities inland, which have modern equipment and the ordinary high-cycle problems of any shared entrance. Three environments, one city, so we ask which side of Rowlett a caller is on.',
    faqs: [
      {
        q: 'Our slide gate grinds and sticks. Does it need a new operator?',
        a: 'Usually it needs its track cleared and its rollers replaced, not a new motor. Out here the wind carries grit off the lake into the track, the rollers wear on it, and the operator then labours against that friction until it too gives up. Replace the operator on a fouled track and you will be calling again. We measure the track and the rollers first and tell you honestly what actually needs replacing.',
      },
      {
        q: 'What should we do with a gate after a storm?',
        a: 'The two things that go are the safety sensors, knocked out of alignment, and anything electrical that took water or a surge. If your gate has been through a storm, the safest thing is to leave it in whatever position it settled in and call rather than force it through a cycle — a gate with damaged safety devices that still moves is more dangerous than one that has stopped.',
      },
    ],
  },

  waxahachie: {
    zips: ['75165', '75167'],
    // The first three are National Register historic districts, which is as
    // well-sourced as a neighborhood name gets; the last two are subdivisions.
    neighborhoods: ['West End Historic District', 'North Rogers Street', 'Oldham Avenue', 'Buffalo Creek', 'Emory Lakes'],
    landmarks: ['Ellis County Courthouse', 'Historic downtown square', 'Getzendaner Memorial Park', 'Waxahachie Civic Center'],
    majorRoads: ['I-35E', 'US-287', 'FM 813', 'Ferris Avenue'],
    nearbyCities: ['midlothian', 'red-oak', 'ovilla', 'cedar-hill', 'palmer', 'maypearl'],
    responseBand: '',
    gateProfile: {
      dominant: 'A Victorian-era town centre ringed by working acreage, so heritage ironwork and ranch entrances turn up on the same day',
      commonGateTypes: ['Ornamental iron swing', 'Ranch entrance swing', 'Wide farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Heritage ironwork on properties where appearance cannot be altered',
        'Solar operators on ranch entrances away from mains power',
        'Wide farm gates dropping on posts in Blackland clay',
        'Long drives with degraded buried cable runs',
      ],
    },
    localAngle:
      'Waxahachie calls itself the Gingerbread City and it has the record to back it — five National Register historic districts, and streets off the 1897 Ellis County courthouse where the Victorian and Queen Anne houses are protected. Then a few minutes out, the Ellis County acreage starts. The two halves want opposite things from us. On a historic property the ironwork is part of what is being preserved, and the answer is almost always to keep the gate and modernise what drives it, because changing the frontage is not on the table. On the ranch entrances the gate is a working object — wide enough for a trailer, far from the meter, usually solar — and it is judged on whether it opens in February when the battery is cold. We carry for both, because in Waxahachie they are the same day’s work.',
    faqs: [
      {
        q: 'We are in one of the historic districts. Will modernising the gate change how it looks?',
        a: 'It does not need to. The operator that moves a gate is separate from the gate itself, so a current operator, a modern board and proper safety sensors can go in behind ironwork that is not altered at all. Where equipment has to be visible we will show you the options before fitting anything, because on these properties the frontage is the point.',
      },
      {
        q: 'Our ranch gate is a long way from the house and there is no power at the entrance. What are the options?',
        a: 'Solar with a properly sized battery is the usual answer and it works well out here, provided the battery is sized for the number of cycles you actually run rather than an average. The alternative is a buried mains run, which is worth it on some layouts and not on others. We will price both honestly against your drive length and tell you which we would choose.',
      },
    ],
  },

  // ── BATCH 3, 28 Sep 2026 ───────────────────────────────────────────────────
  // The six Tier 2 towns added in 929988e, which had no page at any tier until
  // then. All six come from the client's keyword list rather than his coverage
  // list — see the warning in scripts/client-city-list.ts.
  //
  // `gateProfile` is a DRAFT on all six, same standing as Tier 1.

  bartonville: {
    zips: ['76226'],
    // Subdivision names from Denton County realty records; the town publishes
    // no register. Most of Bartonville is unplatted acreage, so these are the
    // platted exceptions rather than a map of the town.
    neighborhoods: ['Saddlebrook Estates', 'Barrington Hills', 'Hat Creek Estates', 'Long Meadows Estates', 'Deer Hollow'],
    landmarks: ['Bartonville Town Center', 'Denton Creek', 'Lantana Golf Club', 'Argyle ISD campuses'],
    majorRoads: ['FM 407', 'FM 1830', 'US-377', 'Jeter Road'],
    nearbyCities: ['argyle', 'lantana', 'flower-mound', 'highland-village', 'denton', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town of roughly 1,700 people zoned for agricultural and equestrian use, where the entrance gate is further from the house than the house is wide',
      commonGateTypes: ['Ranch entrance swing', 'Farm and paddock gate', 'Wide estate slide'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Solar operators on entrances with no mains power at the gate',
        'Long buried runs between the house and the road',
        'Wide gates sized for horse trailers dropping on their posts',
        'Livestock and wildlife triggering safety devices',
      ],
    },
    localAngle:
      'Bartonville holds about 1,700 people across land zoned for agricultural and equestrian use, and its ordinances are unusually explicit about it — an equestrian centre needs five acres before the town will even consider the permit. That tells you most of what matters for gate work here. The entrances are wide because a horse trailer has to clear them, they sit hundreds of feet from the house along a private drive, and the power to run them is frequently solar because trenching a supply that distance costs more than the operator. When a Bartonville gate fails in February the first thing we check is the battery, because a sealed battery that coped in October will not turn a heavy trailer gate on a cold morning. The second is the post, because a wide leaf on ground that moves with the season drops out of square long before the motor gives up.',
    faqs: [
      {
        q: 'Our entrance is a long way from the house and there is no power at the gate. What are the options?',
        a: 'Solar is the usual answer on Bartonville frontages, and the whole thing turns on sizing it to your real traffic — a household running twenty cycles a day needs a different panel and battery from one running six. Trenching power out to the gate is the other route, and on some layouts it genuinely is the better investment. We work out both figures against your own drive and cycle count, then tell you which one we would pick and why.',
      },
      {
        q: 'Do you work on gates wide enough for a horse trailer?',
        a: 'Yes, and the specification is where these go wrong. A leaf built wide enough for a trailer carries far more leverage at its outer end than a suburban gate, so an operator picked to a residential rating will overheat, stall and eventually burn out — not because it is faulty but because it was never rated for that leaf. We measure the leaf and weigh it before recommending anything, and we look at what is carrying it, since a post that cannot hold the gate will not hold a stronger motor either.',
      },
    ],
  },

  lantana: {
    zips: ['76226'],
    // Lantana is an unincorporated CDP, not a city. Its "neighborhoods" are the
    // developer's villages, which is how residents actually refer to them.
    neighborhoods: ['Bandera', 'Wisteria', 'Azalea', 'Madison', 'Larkspur'],
    landmarks: ['Lantana Golf Club', 'Lantana Community Center', 'Denton Creek', 'Lantana Trail'],
    majorRoads: ['FM 407', 'Lantana Trail', 'US-377', 'I-35W'],
    nearbyCities: ['bartonville', 'argyle', 'flower-mound', 'highland-village', 'denton', 'justin'],
    responseBand: '',
    gateProfile: {
      dominant: 'A single master-planned community of about 4,000 homes built through the 2000s and 2010s, so the gates are a generation newer than the region average',
      commonGateTypes: ['Community slide', 'Residential swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'Community entrance gates running constant cycles',
        'Commissioning faults on gates installed with the house',
        'Loop detector faults at village entrances',
        'Clay-soil post movement on newer construction',
      ],
    },
    localAngle:
      'Lantana is not a city — it is a single master-planned community of around 4,000 homes spread over about 1,780 acres of unincorporated Denton County, laid out in villages around an eighteen-hole course designed by Jay Morrish. Almost all of it went up in the 2000s and 2010s, which makes it one of the youngest places we work and changes what goes wrong. There is very little here of the obsolete-control-board problem that dominates the older parts of the metroplex. What we see instead are commissioning faults — gates installed with the house, dialled in before the leaf had settled on its hinges, and slowly drifting out of adjustment through their first years — and shared village entrances doing far more cycles a day than a private drive ever will. Those are different jobs with different parts, and on a single afternoon here we will usually do both.',
    faqs: [
      {
        q: 'Our gate came with the house and has started misbehaving. Is it faulty?',
        a: 'Usually it is set up rather than broken, and in a community this young that is the single most common thing we find. The leaf drops a fraction on its hinges over its first year or two, and the travel limits and obstruction force that were correct on handover day no longer describe where the gate actually sits. Re-learning the travel against the gate as it is now costs a visit and no parts.',
      },
      {
        q: 'Do you work on the village entrance gates as well as private driveways?',
        a: 'Yes, and in Lantana it is often both on the same visit. A village entrance is a shared asset with a shared consequence — when it stops, several hundred households notice before the board does. Those jobs get booked for a window that suits residents, and we leave a written account of what failed and what we changed so the management company has something to file rather than a verbal summary from whoever happened to be on site.',
      },
    ],
  },

  'cross-roads': {
    zips: ['76227'],
    // 76227 covers several communities; Windsong Ranch, Savannah and Paloma
    // Creek are in the ZIP but NOT in Cross Roads town limits, so they are
    // deliberately absent here.
    neighborhoods: ['Cross Oak Ranch', 'Sunset Pointe', 'Forest Hills'],
    landmarks: ['US-380 and US-377 junction', 'Lake Lewisville', 'Cross Roads Town Hall', 'Denton Creek'],
    majorRoads: ['US-380', 'US-377', 'FM 424', 'Naylor Road'],
    nearbyCities: ['aubrey', 'little-elm', 'denton', 'prosper', 'lantana', 'pilot-point'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that requires lots of an acre or more by ordinance, sitting on the junction of two US highways',
      commonGateTypes: ['Estate driveway swing', 'Ranch entrance swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'US Automatic', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Gates opening directly onto two busy US highways',
        'Road grit and dust fouling slide gate tracks',
        'Timers and safety devices set without allowing for highway speeds',
        'Vibration from heavy through-traffic loosening fixings',
      ],
    },
    localAngle:
      'Cross Roads is named for exactly what it is — the junction of US-380 and US-377 — incorporated in 1973 and still under two thousand people, with an ordinance keeping lots to an acre or more. The defining fact of gate work here is not the lot size but the traffic. A great many of these entrances open directly onto a US highway carrying through-traffic at speed, and that changes the specification rather than just the maintenance. Timing matters more: a gate that takes its time opening leaves a vehicle waiting in a 65mph lane, which is a different order of risk from waiting on a suburban street. So we set cycle speeds and safety device positions for the road the gate actually faces, we check that a vehicle can clear the carriageway before the gate begins closing behind it, and we look at fixings more often than we would elsewhere, because constant heavy through-traffic works bolts loose in a way a quiet cul-de-sac never does.',
    faqs: [
      {
        q: 'Our gate keeps sticking and we are right on the highway. Is that related?',
        a: 'Very likely. Traffic on US-380 and US-377 throws grit that settles in a slide gate’s track, the rollers grind on it, and the operator then labours against that friction until it stops or reverses. It reads as an operator fault and it is an abrasive one. We clear and measure the track and the rollers before condemning anything electrical.',
      },
      {
        q: 'Our gate opens straight onto the highway. Is there anything different we should do?',
        a: 'Yes, and it is mostly about timing and where the safety devices sit. A gate that opens slowly leaves you waiting in a fast lane, and a close timer set to a suburban default can start shutting before a trailer has fully cleared. We set the cycle speed and the sensor positions for the road you are actually pulling onto, and on some frontages we will recommend a slide over a swing purely because of where a waiting vehicle ends up.',
      },
    ],
  },

  'hickory-creek': {
    zips: ['75065'],
    neighborhoods: ['Shore Haven', 'Steeplechase', 'Shadow Creek Estates', 'The Enclave of Hickory Creek', 'Harbor Grove Estates'],
    landmarks: ['Lake Lewisville', 'Point Vista Park', 'Hickory Creek Park', 'Sycamore Bend Park'],
    majorRoads: ['I-35E', 'FM 2181 Swisher Road', 'Turbeville Road', 'Point Vista Road'],
    nearbyCities: ['lake-dallas', 'corinth', 'denton', 'highland-village', 'lewisville', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that began as weekend lake cabins in 1963 and became permanent housing, so gates were retrofitted to drives that were never laid out for them',
      commonGateTypes: ['Driveway slide', 'Ornamental iron swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'US Automatic', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Gates retrofitted to steep or narrow cabin-era driveways',
        'Operators sited close to Corps of Engineers shoreline boundaries',
        'Gravel and unpaved drives feeding grit into slide tracks',
        'Seasonal lake traffic driving high cycle counts in summer',
      ],
    },
    localAngle:
      'Hickory Creek incorporated in 1963 with 219 residents. Much of what it was then was weekend cabins on the water, and much of what it is now — around five thousand people — is those same lots rebuilt as permanent houses. That history is the thing that shapes gate work here, because a driveway laid out in the 1960s to park a boat trailer beside a cabin is not a driveway anyone would design for an automatic gate. They are short, often steep down toward the water, frequently gravel, and sometimes run right up to the Corps of Engineers boundary where the shoreline land stops being yours. So the questions we answer in this town are geometry questions before they are equipment questions: whether a swing gate has room to open without putting a waiting car half onto Turbeville or Point Vista Road, whether a slide is the safer answer on a narrow drive, and where an operator can legally and sensibly be sited when the lot runs out before the lake does.',
    faqs: [
      {
        q: 'Our driveway is short and slopes down toward the water. Can we even have an automatic gate?',
        a: 'Usually yes, but the type matters more than it would on a flat suburban drive. A swing gate needs room to open without leaving a waiting vehicle in the road, and on a short sloping drive that room often is not there — which is when a slide gate becomes the safer answer rather than simply the more expensive one. We would rather look at the drive first and tell you which will actually work than fit the one you asked for and leave you edging into traffic.',
      },
      {
        q: 'Our drive is gravel and the gate keeps sticking. Is that connected?',
        a: 'Directly. A gravel or unpaved drive feeds grit into a slide gate’s track continuously, the rollers grind on it, and the operator then labours against that friction until it stops or reverses. Clearing it monthly treats the symptom. Edging the drive, or changing where water carries the gravel, treats the cause — and it is the difference between replacing rollers every year and not.',
      },
    ],
  },

  'richland-hills': {
    // ⚠️ Richland Hills, not North Richland Hills. Separate cities, separate
    // ZIPs, separate pages. 76118 is this one; 76180/76182 is the other.
    zips: ['76118'],
    // The city publishes no subdivision register, so these rest on realty
    // sources and are the least-sourced field on this entry.
    neighborhoods: ['Richland Park', 'Richlynn Terrace', 'Mimosa Park', 'Maple Park'],
    landmarks: ['Richland Hills City Hall', 'Link Park', 'Calloway Branch', 'Baker Boulevard corridor'],
    majorRoads: ['Loop 820', 'SH 121 Airport Freeway', 'Baker Boulevard', 'Glenview Drive'],
    nearbyCities: ['haltom-city', 'north-richland-hills', 'fort-worth', 'hurst', 'bedford', 'watauga'],
    responseBand: '',
    gateProfile: {
      dominant: 'A small post-war city whose Loop 820 and Baker Boulevard frontage is working commercial yards rather than housing, so most of its gates secure plant and vehicles',
      commonGateTypes: ['Chain-link rolling yard gate', 'Cantilever slide', 'Commercial swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'All-O-Matic', 'Viking'],
      commonIssues: [
        'Heavy chain-link gates dragged over unsurfaced yard ground',
        'Gates sized for a yard that now takes larger vehicles',
        'Padlocks and manual chains defeating the operator',
        'Theft and forced-entry damage to gates and operators',
      ],
    },
    localAngle:
      'Richland Hills incorporated in 1950 on the back of the Fort Worth defence plants and has stayed much the same size since — around eight and a half thousand people in under four square miles. It is worth saying plainly that it is not North Richland Hills, which is a separate city that formed in 1953 after this one declined to annex it. Different ZIP codes, different councils, and we have been sent to the wrong one before. What makes gate work here unlike its larger neighbour is what sits along Loop 820 and Baker Boulevard: working commercial yards — contractors, trades, vehicle storage — rather than subdivisions. The gate securing a yard has a harder life than any residential gate in the metroplex. It is usually heavy chain-link on a long run, it is dragged across ground that was never surfaced for it, it is opened and shut all day by people in a hurry, and when it fails the business cannot lock up its plant that night. So we carry for chain-link and cantilever hardware when we come here, and we ask what is behind the gate before we quote, because a yard gate that is down is a security problem with a deadline.',
    faqs: [
      {
        q: 'Are you sure you mean Richland Hills and not North Richland Hills?',
        a: 'They are two separate cities and we keep them separate. Richland Hills is the older one, incorporated in 1950 in ZIP 76118; North Richland Hills formed in 1953 and uses 76180 and 76182. We ask which you are in when you call, because sending a van to the wrong one wastes your morning and ours.',
      },
      {
        q: 'Our yard gate is down and we cannot secure the site tonight. Can you help today?',
        a: 'That is the call we prioritise here, because an open yard is plant and vehicles left unattended rather than an inconvenience. We aim to get someone out the same day, and where the full repair needs a part we do not carry, we will get the gate into a secure, manually lockable state first and come back for the permanent fix rather than leaving you open.',
      },
    ],
  },

  watauga: {
    // 76148 is shared with parts of North Richland Hills and Fort Worth.
    zips: ['76148'],
    // Realty-sourced; the city publishes no register. Several directories list
    // Fort Worth neighborhoods alongside Watauga ones, so anything on the
    // Fort Worth side of the line has been left out.
    neighborhoods: ['Parkwood Hills', 'Arcadia Park Estates', 'Highland Oaks', 'Melody Hills'],
    landmarks: ['Capp Smith Park', 'Watauga Community Center', 'Big Bear Creek', 'US-377 corridor'],
    majorRoads: ['US-377 Denton Highway', 'Watauga Road', 'Rufe Snow Drive', 'Chapman Road'],
    nearbyCities: ['north-richland-hills', 'keller', 'haltom-city', 'fort-worth', 'richland-hills', 'saginaw'],
    responseBand: '',
    gateProfile: {
      dominant: 'Four square miles with no room left to build, so almost every gate is retrofitted to a 1970s or 1980s house on a small lot',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'Eagle', 'Viking', 'US Automatic'],
      commonIssues: [
        'Short driveways leaving no room for a gate to swing',
        'Operators retrofitted to fences and posts never built to carry them',
        'Gates fitted between houses with almost no clearance',
        'Vehicles waiting in the street while the gate cycles',
      ],
    },
    localAngle:
      'Watauga is a Cherokee word meaning village of many springs, carried here from Tennessee after the Civil War, and the town was farmland for most of its history — sixty-five people in the mid-1930s. The defence plants changed that, and it now holds over twenty-three thousand people in just over four square miles, hemmed in on every side by Keller, Fort Worth, Haltom City and North Richland Hills. It cannot annex and it cannot spread, which makes it the most built-out place we work. For gate work that means something specific: virtually nothing here was designed with a gate in mind. These are 1970s and 1980s houses on small lots, and the gates are retrofits — bolted to fence posts that were never intended to carry a moving leaf, fitted to driveways with barely a car length between the garage and the pavement. The recurring problem is clearance rather than wear. A swing gate needs somewhere to swing and a waiting car needs somewhere to wait, and on a great many Watauga frontages neither is available without choosing the right gate type in the first place.',
    faqs: [
      {
        q: 'Our driveway is short. Is there room for an automatic gate at all?',
        a: 'Often yes, but not always as a swing. A swing gate needs clear arc to open into and a place for your car to wait off the road while it does, and on a short Watauga driveway that frequently does not exist. A slide gate needs room along the fence line instead, which many of these lots do have. We measure the frontage before recommending either, because fitting the wrong type here means reversing into traffic every time you come home.',
      },
      {
        q: 'We are right on the city line. Do you cover us?',
        a: 'Yes. Watauga is surrounded on every side by Keller, Fort Worth, Haltom City and North Richland Hills, and we work in all of them, so a boundary makes no difference to whether we come out. It only matters for getting the address right, which is why we ask for the street rather than the city when someone is near the line.',
      },
    ],
  },

  // ── BATCH 4, 28 Sep 2026 ───────────────────────────────────────────────────
  // Seven Tarrant County suburbs, and the hardest test the overlap gate has had
  // — they adjoin each other, share a housing era and in three cases share a
  // school district. Writing them from "mid-century Tarrant suburb" would have
  // produced seven copies of one page, so each is anchored to a physical fact
  // about its own ground: tree roots in Bedford, the airport in Euless, Big
  // Fossil Creek in Haltom City, grain dust in Saginaw, limestone rather than
  // clay in Azle, slope in Benbrook.
  //
  // `gateProfile` is a DRAFT on all seven.

  bedford: {
    zips: ['76021', '76022', '76095'],
    neighborhoods: ['Stonegate', 'The Oaks of Bedford', 'Woodhill Estates', 'Oak Creek', 'Bedford Estates'],
    landmarks: ['Old Bedford School', 'Boys Ranch Park', 'Bedford Trails', 'Central Drive corridor'],
    majorRoads: ['SH 121 Airport Freeway', 'Harwood Road', 'Central Drive', 'Bedford Road'],
    nearbyCities: ['hurst', 'euless', 'colleyville', 'north-richland-hills', 'grapevine', 'arlington'],
    responseBand: '',
    gateProfile: {
      dominant: 'Suburban streets built out in the 1960s and 1970s whose trees are now sixty years old and lifting everything they are planted beside',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Tree roots lifting driveway slabs under the gate’s arc',
        'Posts pushed out of plumb by root growth',
        'Gates grounding where the drive has heaved',
        'Photo-eye beams broken by grown shrubs and low branches',
      ],
    },
    localAngle:
      'Bedford is the middle city of the three that share the Hurst-Euless-Bedford school district, and it did most of its building in the 1960s and 1970s. The houses have aged gracefully; the trees planted with them have not stayed still. A post oak or live oak put in beside a new driveway in 1972 now has a root system wide enough to lift the slab it sits next to, and that is the single most common cause of gate trouble we find in this town. It shows up as a swing gate that has started scraping an arc on the concrete, or a post that has gone quietly out of plumb on the side the tree is on. Owners read both as the gate failing. They are the ground moving, and the fix is at the slab and the post rather than anywhere inside the operator. The other Bedford regular is simpler still: forty years of growth means shrubs and low branches now sit exactly where a photo-eye beam crosses the drive.',
    faqs: [
      {
        q: 'Our driveway has lifted where the gate swings. Can the gate be adjusted to clear it?',
        a: 'Sometimes there is enough adjustment to buy time, but it is worth understanding that the concrete is still moving. A root that has lifted a slab an inch will lift it further, so raising the gate is a stay of execution rather than a repair. We would rather show you what the root is doing and let you decide between grinding the high point, replacing that slab section, or accepting a yearly adjustment.',
      },
      {
        q: 'Our gate stopped closing and nothing has changed. What should we look at?',
        a: 'In Bedford, look at what has grown. A shrub or a low branch that has put on a season of growth in exactly the wrong place will break a photo-eye beam, and the operator then refuses to close because it correctly believes something is in the way. It is free to check and it accounts for a good share of the calls we take from these streets.',
      },
    ],
  },

  euless: {
    zips: ['76039', '76040'],
    neighborhoods: ['Villages of Bear Creek', 'Midway Park', 'Oak Park', 'Calloway Trails'],
    landmarks: ['DFW International Airport', 'Texas Star Golf Course', 'Bear Creek Park', 'Euless Family Life Center'],
    majorRoads: ['SH 360', 'SH 183 Airport Freeway', 'Euless Main Street', 'Industrial Boulevard'],
    nearbyCities: ['bedford', 'hurst', 'grapevine', 'irving', 'arlington', 'colleyville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city whose eastern edge is the DFW Airport boundary, so a large share of its gates secure businesses that never close',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Barrier arm'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'Viking'],
      commonIssues: [
        'Entrances cycling around the clock rather than twice a day',
        'Barrier arms and ticket equipment on parking operations',
        'Chain, track and roller wear far ahead of the operator',
        'Access control tied to shift patterns rather than office hours',
      ],
    },
    localAngle:
      'Euless runs right up against the western boundary of DFW International, and that proximity decides what the gate work here looks like. Airport parking operations, freight and logistics yards, crew hotels and rental fleets all sit along SH 360 and the airport frontage, and none of them keeps office hours. A residential gate cycles perhaps six times a day. An airport parking entrance cycles hundreds of times, every day, including the days nobody wants a technician on site. What fails under that duty is almost never the motor — it is the chain, the track and the rollers, which wear out long before the operator notices, and then the operator strains against that wear until it fails too. So when we quote an entrance in Euless we measure the track and the chain first and price the whole entrance honestly, because replacing an operator on a worn track on a 24-hour site buys a few months at most.',
    faqs: [
      {
        q: 'Our site runs 24 hours and we cannot close the entrance for a repair. How do you handle that?',
        a: 'We plan around it rather than through it. On a continuously operating entrance we agree a window, keep the gate in a controlled manual state while we are working rather than simply open, and bring the parts we expect to need so the entrance is not sitting apart waiting on a delivery. If the site has a second entrance we will sequence the work to keep one of them live throughout.',
      },
      {
        q: 'Our gate has needed three operators in five years. Is that normal?',
        a: 'No, and it usually means the operator is not the problem. On a high-cycle entrance the chain, track and rollers wear first, and an operator asked to drag a gate over worn hardware will keep failing no matter how good it is. Three operators in five years is the signature of that. We would measure the running gear before selling you a fourth.',
      },
    ],
  },

  hurst: {
    zips: ['76053', '76054'],
    neighborhoods: ['Hurst Hills', 'Bellaire Place', 'Billy Creek Estates', 'Walker Oaks', 'Simpson Park'],
    landmarks: ['North East Mall', 'Chisholm Park', 'Hurst Conference Center', 'Precinct Line Road corridor'],
    majorRoads: ['SH 121 Airport Freeway', 'Precinct Line Road', 'Pipeline Road', 'Bedford Euless Road'],
    nearbyCities: ['bedford', 'euless', 'north-richland-hills', 'richland-hills', 'colleyville', 'haltom-city'],
    responseBand: '',
    gateProfile: {
      dominant: 'The retail centre of the Mid-Cities, so a large share of its gates are the service yards and delivery bays behind the shopfronts',
      commonGateTypes: ['Commercial slide', 'Service yard swing', 'Dumpster enclosure gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'All-O-Matic', 'Viking'],
      commonIssues: [
        'Delivery vehicles clipping gates and bending leaves',
        'Gates left propped open and driven into',
        'Enclosure gates taking daily impact from waste collection',
        'Operators sited where trucks manoeuvre in tight yards',
      ],
    },
    localAngle:
      'Hurst is where the Mid-Cities does its shopping — North East Mall and the retail either side of Precinct Line Road — and the gate work reflects the back of those buildings rather than the front. Service yards, delivery bays and waste enclosures are the gates we are called to most here, and they fail in a way residential gates never do: by being hit. A delivery driver reversing a box truck in a yard designed for a smaller one clips the leaf, bends the frame a few degrees, and the gate starts binding at the same point in its travel from that day on. Waste enclosure gates take the same treatment weekly. That produces a specific repair pattern — straightening and re-squaring frames, replacing hinges that have absorbed an impact, moving an operator out of the swept path of a turning vehicle — and it is why we look at where the trucks actually go before we quote the gate.',
    faqs: [
      {
        q: 'Our yard gate keeps getting hit by delivery vehicles. Is there anything that helps?',
        a: 'Yes, and it is usually geometry rather than a stronger gate. Moving the operator out of the swept path, adding protective bollards, and in some cases changing from a swing to a slide so nothing projects into the manoeuvring area will end a cycle of damage that no amount of repair will. We would rather look at where the trucks actually turn than keep straightening the same leaf.',
      },
      {
        q: 'The gate binds at one spot since it was hit. Does the whole thing need replacing?',
        a: 'Usually not. A frame knocked a few degrees out of square binds at a predictable point, and re-squaring it and replacing the hinge that took the impact normally restores it. What we will check is whether the operator was strained while being asked to force the gate through that bind, because that damage is less visible and shows up later.',
      },
    ],
  },

  'haltom-city': {
    zips: ['76117', '76137'],
    neighborhoods: ['Diamond Oaks', 'Browning Heights', 'Fossil Springs', 'Haltom Acres', 'Meadow Oaks'],
    landmarks: ['Big Fossil Creek', 'Diamond Oaks Country Club', 'Haltom City Public Library', 'Belknap Street corridor'],
    majorRoads: ['Belknap Street', 'Loop 820', 'Denton Highway US-377', 'Broadway Avenue'],
    nearbyCities: ['richland-hills', 'north-richland-hills', 'watauga', 'fort-worth', 'hurst', 'saginaw'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city built across the Big Fossil Creek drainage, where a meaningful number of gates and operators sit on ground that floods',
      commonGateTypes: ['Residential swing', 'Commercial slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'All-O-Matic'],
      commonIssues: [
        'Operators and boards mounted low enough to take flood water',
        'Silt and creek debris packing slide gate tracks',
        'Buried cable runs saturated in the drainage corridor',
        'Corrosion following repeated wetting rather than constant damp',
      ],
    },
    localAngle:
      'Haltom City is laid out across the Big Fossil Creek drainage — the local place names give it away, with Fossil Springs, Fossil Ridge and Fossil Village all within the city — and that creek system is the thing that decides gate work here. Properties in the flood corridor do not get the slow humidity damage a lakeside house gets; they get sudden immersion, then weeks of drying, then immersion again. Equipment tolerates constant damp better than it tolerates that cycle. What we find after a wet spring is operators whose boards sat in water for an afternoon, buried cable runs saturated along their whole length, and slide tracks packed with creek silt that sets like mortar once the sun gets to it. The practical lesson, and the one we give owners here, is mounting height: a control box six inches higher survives a season that takes out one at ankle level, and that is a decision made once at installation rather than a repair.',
    faqs: [
      {
        q: 'Our gate flooded and now works intermittently. Can it be saved?',
        a: 'Often, but it depends what got wet and for how long. A board that was briefly immersed and dried properly sometimes survives; one that sat in water and was then powered up usually does not. We would rather assess it before you switch it back on, because powering up a wet board is frequently what finishes it off. Terminal corrosion and saturated cable runs are separately repairable.',
      },
      {
        q: 'How do we stop this happening every time the creek comes up?',
        a: 'Mounting height is the single most effective change, and it is cheap when done as part of a repair you are already paying for — moving the control box and any low-mounted sensors above the line the water actually reaches. Sealing the enclosure properly and re-routing a cable run out of the lowest ground are the other two. None of it makes the gate flood-proof, but it moves the equipment out of the water rather than trying to waterproof it in place.',
      },
    ],
  },

  saginaw: {
    zips: ['76179', '76131'],
    neighborhoods: ['Highland Station', 'Whisperwood Estates', 'Willow Creek Estates', 'Saginaw Heights'],
    landmarks: ['Burrus grain elevators', 'Willow Creek Park', 'Saginaw Recreation Center', 'Knowles Drive corridor'],
    majorRoads: ['SH 287 Business', 'Old Decatur Road', 'Knowles Drive', 'Bailey Boswell Road'],
    nearbyCities: ['fort-worth', 'haslet', 'lake-worth', 'azle', 'haltom-city', 'watauga'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town built around grain elevators and three rail lines, where airborne dust is a permanent condition rather than a weather event',
      commonGateTypes: ['Commercial slide', 'Cantilever slide', 'Residential swing'],
      commonBrands: ['DoorKing', 'LiftMaster', 'HySecurity', 'All-O-Matic'],
      commonIssues: [
        'Fine grain and industrial dust packing tracks and bearings',
        'Dust drawn into operator housings and onto boards',
        'Photo-eye lenses dulled by airborne particulate',
        'Sealed bearings failing early in a permanently dusty environment',
      ],
    },
    localAngle:
      'Saginaw grew up around the Burrus Mill elevators — at one point the largest grain elevator in Texas and the second largest in the country — and around the three rail lines that were built through here in the 1880s. Both are still working, and both put fine particulate into the air continuously. That is a specific and unusual problem for gate equipment. Grit that arrives with a storm can be swept out; dust that settles every day cannot, and it gets everywhere a seal is imperfect. We see rollers and bearings in this town fail at a fraction of the life they would manage ten miles away, photo-eye lenses that go dull rather than dirty, and operator housings with a film of dust across the board inside. The answer is not better sweeping. It is specifying sealed hardware to begin with, and accepting that a service interval which is generous elsewhere is simply too long in Saginaw.',
    faqs: [
      {
        q: 'Our rollers keep wearing out and the gate is only a few years old. Why?',
        a: 'Almost certainly the dust. An unsealed bearing in a permanently dusty environment is a consumable rather than a component — the particulate acts as a grinding compound and takes out a bearing in a fraction of its rated life. Fitting sealed rollers appropriate to these conditions costs a little more once and stops the annual replacement.',
      },
      {
        q: 'How often should equipment here be serviced?',
        a: 'More often than a manufacturer’s schedule assumes, because those intervals are written for ordinary suburban air. In practice that means clearing tracks and wiping sensor lenses on a routine rather than waiting for a fault, and checking enclosure seals annually rather than when something goes wrong. It is a small amount of attention that prevents most of what we get called out for here.',
      },
    ],
  },

  azle: {
    zips: ['76020'],
    // Azle straddles the Tarrant/Parker county line; the city is recorded here
    // under Tarrant, which is where most of it sits.
    neighborhoods: ['Silver Creek', 'Deer Glade', 'Oak Harbor Estates', 'The Orchard', 'Cross Timbers'],
    landmarks: ['Eagle Mountain Lake', 'Azle Memorial Library', 'Shady Grove Park', 'SH 199 corridor'],
    majorRoads: ['SH 199 Jacksboro Highway', 'FM 730', 'Stewart Street', 'Boyd Road'],
    nearbyCities: ['lake-worth', 'saginaw', 'springtown', 'fort-worth', 'weatherford', 'briar'],
    responseBand: '',
    gateProfile: {
      dominant: 'Twenty miles north-west of Fort Worth on Eagle Mountain Lake, where the ground is limestone and rock rather than the clay the rest of the metroplex sits on',
      commonGateTypes: ['Ranch entrance swing', 'Driveway slide', 'Wide farm gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'Ramset'],
      commonIssues: [
        'Post footings in rock rather than soil, which changes how they fail',
        'Long drives on acreage away from mains power',
        'Rocky, uneven ground under a gate’s swing arc',
        'Lake-edge lots with steep or awkward access',
      ],
    },
    localAngle:
      'Azle sits about twenty miles north-west of Fort Worth on Eagle Mountain Lake, which was impounded in 1932, and it straddles the Tarrant and Parker county line. The interesting thing about working here is underfoot. Most of this metroplex sits on Blackland Prairie clay that swells and shrinks by season, and almost everything we tell owners about leaning posts and heaving driveways assumes that. Azle is in the Cross Timbers, where the ground is limestone and rock, and gate posts behave completely differently in it. They do not drift with the seasons the way a post in clay does — but a footing that was poured into a shallow rock pocket has nowhere to go and nothing to grip, and when it lets go it tends to do so suddenly rather than gradually. So the diagnosis reverses: in Fort Worth a leaning post is usually seasonal movement, and in Azle it is usually a footing that was never properly keyed into the rock.',
    faqs: [
      {
        q: 'Our gate post has suddenly gone over and there was no warning. Is that normal here?',
        a: 'It is more common here than east of Fort Worth, and the ground is why. In clay a post leans gradually as the soil moves with the seasons, so you get years of warning. In the rock out here a footing either holds or it does not, and a shallow one poured into a rock pocket can sit solid for a decade and then let go in a single wet spell. The repair is about keying properly into the rock rather than simply pouring more concrete.',
      },
      {
        q: 'Do you come out this far west?',
        a: 'Yes — Azle, Springtown and out toward Weatherford are all within the area we work. It is worth telling us the road you are on when you call, because access on the lake side can be slow and we would rather plan for it than arrive later than we told you.',
      },
    ],
  },

  benbrook: {
    zips: ['76126', '76116', '76132', '76109'],
    neighborhoods: ['Whitestone Ranch', 'Ridglea Country Club Estates', 'Timbercreek Estates', 'Mira Vista', 'Hencken Ranch'],
    landmarks: ['Benbrook Lake', 'Whitestone Golf Course', 'Dutch Branch Park', 'Benbrook Stables'],
    majorRoads: ['US-377 Benbrook Highway', 'I-20', 'Winscott Road', 'Vega Drive'],
    nearbyCities: ['fort-worth', 'crowley', 'aledo', 'white-settlement', 'weatherford', 'forest-hill'],
    responseBand: '',
    gateProfile: {
      dominant: 'The hilly south-western corner of Tarrant County, where a large share of driveways run up or down a genuine slope',
      commonGateTypes: ['Sloped-drive swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'US Automatic'],
      commonIssues: [
        'Swing gates fighting gravity on an inclined driveway',
        'Gates that will not stay where they are put on a slope',
        'Water running down a drive into the operator and track',
        'Ground clearance changing across the arc on uneven terrain',
      ],
    },
    localAngle:
      'Benbrook occupies the south-western corner of Tarrant County around Benbrook Lake, and unlike most of the metroplex it has real topography — the land rolls, and a great many driveways here run up or down a meaningful grade. That is the defining constraint on gate work in this town. A swing gate on a slope is not the same machine as a swing gate on the flat: gravity assists it in one direction and fights it in the other, so an operator sized for a level drive will labour one way and slam the other, ground clearance changes across the arc, and a leaf that sits perfectly at the closed position may foul halfway through. It is also why water matters here more than rain totals suggest — a drive that falls toward the gate delivers everything it collects straight into the track and the operator housing. Getting this right is a specification decision made before anything is fitted, which is why we would rather walk the slope than quote from a photograph.',
    faqs: [
      {
        q: 'Our driveway slopes. Does that change what gate we can have?',
        a: 'It changes the specification quite a lot. A swing gate on a grade has gravity helping it one way and resisting it the other, and ground clearance shifts as the leaf travels — so the hardware, the operator rating and sometimes the hinge type all differ from a level installation. On steeper drives a slide gate running across the slope rather than through it is often the better answer. It is worth us seeing the actual fall before recommending anything.',
      },
      {
        q: 'Water runs down our drive and the gate sits at the bottom. Is that a problem?',
        a: 'It is one of the more common causes of repeat failures here. Everything the driveway collects — water, grit, leaf litter — arrives at the lowest point, which is exactly where the track and often the operator are. Sorting the drainage, or moving the operator up out of the run, usually does more for reliability than any amount of replacing what the water keeps damaging.',
      },
    ],
  },

  // ── BATCH 5, 28 Sep 2026 ───────────────────────────────────────────────────
  // Five Denton County cities. Continuing the approach that made batch 4 work:
  // anchor each on a physical fact about its own ground rather than on town
  // character, because character repeats across suburbs and ground does not.
  //
  // This batch adds a third soil type to the site. Most of the metroplex is
  // Blackland Prairie clay and Azle is Cross Timbers limestone; Pilot Point
  // sits on sandy loam, which is why the horse industry is there and which
  // makes its gate posts fail in a third distinct way.
  //
  // `gateProfile` is a DRAFT on all five.

  'the-colony': {
    zips: ['75056'],
    neighborhoods: ['The Tribute', 'Legends', 'Austin Ranch', 'Ridgepoint', 'Stewart Peninsula'],
    landmarks: ['Grandscape', 'Lewisville Lake', 'The Tribute Golf Links', 'Stewart Creek Park'],
    majorRoads: ['SH 121 Sam Rayburn Tollway', 'Main Street', 'Paige Road', 'Josey Lane'],
    nearbyCities: ['frisco', 'plano', 'carrollton', 'lewisville', 'little-elm', 'flower-mound'],
    responseBand: '',
    gateProfile: {
      dominant: 'A city incorporated in 1977 that was built as a single developer community, so most original installations are the same age and the same specification',
      commonGateTypes: ['Community slide', 'Residential swing', 'Courtyard gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'Whole streets reaching end of equipment life in the same season',
        'Discontinued parts affecting many properties at once',
        'Newer peninsula builds with commissioning faults',
        'Clay-soil post movement on original-era installations',
      ],
    },
    localAngle:
      'The Colony was incorporated in 1977 and grew as one large developer community rather than accreting over decades, which produces an effect we rarely see elsewhere: things fail in cohorts. When a run of houses was built in the same year to the same specification, the gates added to them tend to be the same age too, and the components inside them reach the end of their lives within a season or two of each other. We will get three calls from one street in a month and find the identical board or the identical capacitor at fault each time. The practical value of knowing that is in the advice rather than the repair — if your neighbour has just replaced an operator that was original to the street, yours is on the same clock, and there is a real saving in planning for that rather than waiting for the failure. The Tribute and the newer peninsula builds are the exception, and they fail the way new installations do, on commissioning rather than on age.',
    faqs: [
      {
        q: 'Two neighbours have replaced their gate operators recently. Should we be worried?',
        a: 'It is worth a look rather than a worry. Streets here were built in cohorts, so equipment of the same age and specification tends to reach the end of its life at about the same time. That does not mean yours will fail tomorrow, but it does mean a service check is better value now than an emergency call later, and if the part is one that has been discontinued it is useful to know before you need it urgently.',
      },
      {
        q: 'Our gate is original to the house. Is it worth repairing at this age?',
        a: 'Usually yes, and we will tell you plainly when it is not. The mechanical side — posts, hinges, track — normally outlasts the electronics by decades, so even where an operator has reached the end, the rest of the installation is generally reusable. That keeps the cost far below a full replacement, and it is the honest answer more often than a replacement quote would suggest.',
      },
    ],
  },

  'little-elm': {
    zips: ['75068'],
    neighborhoods: ['Paloma Creek', 'Union Park', 'Wildridge', 'Sunset Pointe', 'Valencia on the Lake', 'Frisco Ranch'],
    landmarks: ['Lewisville Lake', 'Little Elm Park', 'The Lakefront', 'Union Park amenity centre'],
    majorRoads: ['FM 423', 'US-380', 'Eldorado Parkway', 'Main Street'],
    nearbyCities: ['frisco', 'the-colony', 'cross-roads', 'aubrey', 'prosper', 'lewisville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A town that went from a few thousand people to around fifty thousand in two decades, so its shared entrances outnumber its private gates',
      commonGateTypes: ['Community slide', 'Barrier arm', 'Amenity and pool gate'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Viking', 'HySecurity'],
      commonIssues: [
        'Entrance queues stacking back onto two-lane roads',
        'Cycle timing set without allowing for traffic volume',
        'Loop detectors handling far more vehicles than planned for',
        'Amenity gates and access credentials across large HOAs',
      ],
    },
    localAngle:
      'Little Elm has roughly quadrupled in twenty years, to around fifty thousand people, and it did it through large master-planned communities — Paloma Creek, Union Park, Wildridge — rather than through infill. The consequence for gate work is that the shared entrance matters here more than the private driveway, and the specific problem is queueing. Several of these communities feed onto roads that were laid out when the population was a fraction of what it is, so an entrance gate that takes a few seconds longer than it should puts a line of cars back onto a two-lane road at school run time. That turns cycle speed from a comfort question into a traffic one. When we are called to a Little Elm entrance the first thing we establish is how many vehicles pass through it in a peak hour, because an operator and a detector specified for a quiet community behave quite differently once several hundred cars a day are using them.',
    faqs: [
      {
        q: 'Our community entrance backs traffic onto the road at peak times. Can anything be done?',
        a: 'Usually yes, and not always by replacing the gate. Cycle speed, how long the gate holds open, and how the detectors are tuned all affect throughput, and those are adjustments rather than parts. Where the gate genuinely cannot keep up, a faster operator or a second lane is the honest answer — but we would tune what is there first and measure the difference before quoting hardware.',
      },
      {
        q: 'Who is responsible for the community gate, us or the HOA?',
        a: 'Almost always the HOA or its management company, since the entrance is common property. We work directly with boards and managers on these, provide written reports they can file, and schedule around residents rather than around us. If you are a resident reporting a fault, tell us who manages the community and we will take it from there.',
      },
    ],
  },

  corinth: {
    zips: ['76210'],
    neighborhoods: ['The Preserve at Pecan Creek', 'Oakmont Estates', 'Cypress Point', 'Lake Sharon Estates', 'Meadow Oaks'],
    landmarks: ['Lake Sharon', 'Corinth Community Park', 'Agora Commons', 'I-35E corridor'],
    majorRoads: ['I-35E', 'FM 2181 Swisher Road', 'Corinth Parkway', 'Lake Sharon Drive'],
    nearbyCities: ['lake-dallas', 'denton', 'highland-village', 'hickory-creek', 'lewisville', 'krum'],
    responseBand: '',
    gateProfile: {
      dominant: 'A narrow city squeezed between Lewisville Lake and Lake Dallas, where the water table sits high and ground stays wetter than the rest of the county',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'Eagle'],
      commonIssues: [
        'Buried cable runs in ground that rarely dries out',
        'Footings set in soil that holds water against them',
        'Conduit and junction boxes taking in groundwater',
        'Corrosion at below-grade terminations',
      ],
    },
    localAngle:
      'Corinth was named by the Dallas and Wichita Railway in 1880 and stayed rural until the I-35E corridor pulled development up from Dallas. What it is now is a narrow city sitting between two bodies of water — Lewisville Lake on one side, Lake Dallas on the other — and that position does something specific to gate installations. Ground here holds water. A buried cable run that would dry out between storms in Plano can stay damp for weeks in Corinth, and a conduit joint or a junction box below grade that would tolerate occasional wetting elsewhere is effectively sitting in it. So the faults we are called to here skew heavily below ground: intercoms that fail progressively rather than suddenly, keypads that work erratically in wet spells, and terminations that have corroded where nobody can see them. When a Corinth gate develops an intermittent fault, we test the buried run early rather than late, because on these streets it is the likeliest answer rather than the last resort.',
    faqs: [
      {
        q: 'Our keypad and intercom work sometimes and not others. What causes that?',
        a: 'In Corinth, usually moisture in the buried run rather than the hardware at either end. Ground here stays damp far longer than it does further from the lakes, and water that reaches a joint or a below-grade termination causes exactly this pattern — fine in a dry spell, erratic after rain. We test the run before replacing boxes, because swapping a keypad that was never faulty is a common and avoidable expense.',
      },
      {
        q: 'Is there anything that prevents this rather than just fixing it?',
        a: 'Yes. Properly sealed and correctly oriented terminations, conduit that drains rather than holds, and bringing joints above grade where the layout allows all make a substantial difference. It costs a little more at the time of a repair you are already paying for, and it is the difference between fixing this once and fixing it every wet spring.',
      },
    ],
  },

  aubrey: {
    zips: ['76227'],
    neighborhoods: ['Chaparral Ridge', 'Covey Creek', 'Aubrey Ranch Estates', 'Silverado'],
    landmarks: ['Aubrey Historic Downtown', 'US-377 corridor', 'Ray Roberts Lake', 'Horse Country USA'],
    majorRoads: ['US-377', 'FM 428', 'FM 2931', 'Sherman Drive'],
    nearbyCities: ['pilot-point', 'cross-roads', 'little-elm', 'denton', 'krum', 'sanger'],
    responseBand: '',
    gateProfile: {
      dominant: 'Horse Country USA — commercial breeding and training operations rather than hobby acreage, so the ranch gate is a business entrance',
      commonGateTypes: ['Ranch entrance swing', 'Wide trailer gate', 'Staff and service gate'],
      commonBrands: ['US Automatic', 'LiftMaster', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Trailer traffic in and out all day rather than twice',
        'Access for staff, farriers, vets and haulers on different schedules',
        'Wide gates taking repeated trailer clearance',
        'Solar systems sized for a house but used by a business',
      ],
    },
    localAngle:
      'Aubrey calls itself Horse Country USA and the figure behind it is real — this stretch of Denton County holds something in the order of 25,000 horses across several hundred ranches. That matters because it makes Aubrey commercial equestrian country rather than hobby acreage, and a commercial barn gate is a business entrance rather than a driveway. It opens for staff arriving early, for farriers and vets on their own schedules, for feed deliveries, and for client and hauler trailers through the day. The cycle count on a working ranch entrance can run ten times what a private acreage gate sees, and the solar systems these gates typically run on were very often sized for the latter. That is the most common thing we correct here: not a broken operator, but a power budget calculated for a household and being asked to serve an operation.',
    faqs: [
      {
        q: 'Our ranch gate keeps running out of power by the afternoon. What is wrong?',
        a: 'Usually nothing is broken — the system is simply sized for fewer cycles than you are running. A working barn entrance opens many times more often than a residential drive, and a solar panel and battery specified for a house cannot replace what an operation draws. The fix is recalculating the power budget against your actual daily traffic, which often means a larger panel as well as a larger battery.',
      },
      {
        q: 'Can we give staff, farriers and haulers different access?',
        a: 'Yes, and on a working yard it is usually worth doing. Separate codes or credentials for staff, regular service providers and visiting haulers let you see who came and when, and let you remove one person’s access without changing everybody else’s. It is a straightforward addition to most access control systems rather than a new gate.',
      },
    ],
  },

  'pilot-point': {
    zips: ['76258'],
    neighborhoods: ['Bryson Ranch', 'Creekview Meadows', 'Mobberly Farms', 'Lantern'],
    landmarks: ['Pilot Point Square', 'Ray Roberts Lake', 'Isle du Bois State Park', 'US-377 corridor'],
    majorRoads: ['US-377', 'FM 455', 'FM 2153', 'Washington Street'],
    nearbyCities: ['aubrey', 'tioga', 'sanger', 'denton', 'celina', 'krum'],
    responseBand: '',
    gateProfile: {
      dominant: 'Sitting on sandy loam rather than clay — the soil that drew the horse industry here, and that makes gate posts settle instead of heave',
      commonGateTypes: ['Ranch entrance swing', 'Wide trailer gate', 'Estate driveway swing'],
      commonBrands: ['US Automatic', 'LiftMaster', 'Ramset', 'All-O-Matic'],
      commonIssues: [
        'Footings settling and washing rather than heaving',
        'Post bases undermined by water moving through loose soil',
        'Long solar-powered entrances on ranch frontages',
        'Gate alignment drifting downward over years rather than seasonally',
      ],
    },
    localAngle:
      'Pilot Point sits on an outcrop of rich sandy loam, and that soil is the reason the horse industry settled here — it drains, it is forgiving underfoot, and it is good ground to work a horse on. It is also the reason gates here fail differently from gates anywhere else we work. Most of this metroplex is Blackland Prairie clay, which swells and shrinks with the seasons and walks a gate post back and forth until it leans. Sandy loam does not do that. What it does instead is let water move through it, and over years that water carries fine material away from around a footing. The post does not heave; it settles, and it keeps settling in one direction. The symptom is a gate whose alignment drifts steadily downward rather than shifting with the weather, and the repair is about how the footing is bedded and how water is directed away from it, not about waiting out a seasonal cycle that is never going to come back around.',
    faqs: [
      {
        q: 'Our gate post has slowly sunk rather than leaned. Is that the same problem people have in Dallas?',
        a: 'No, and it is worth knowing the difference. Clay soils east of here swell and shrink seasonally, so posts lean one way and partly recover. The sandy loam under Pilot Point lets water move through it and wash fine material out from around a footing, so the post settles steadily in one direction and does not come back. The repair is about bedding and drainage rather than about riding out a season.',
      },
      {
        q: 'Does the soil here mean footings need to be different?',
        a: 'In practice yes. A footing that is adequate in clay can be undermined in loose, free-draining ground if water is allowed to run past it, so depth, bedding and where the water goes all matter more here. It is worth getting right once — we have re-set posts in this area that were failing for the third time because each previous repair treated the symptom.',
      },
    ],
  },

  // ── BATCH 6, 28 Sep 2026 ───────────────────────────────────────────────────
  // Four of the Best Southwest cities in southern Dallas County. They formed a
  // partnership together in 1986 and are routinely written about as one place,
  // which is exactly the trap: written from "southern Dallas County suburb"
  // they would be four copies of one page.
  //
  // Anchors, in the same ground-first pattern as batches 4 and 5:
  //   cedar-hill    ridge-top wind exposure on the escarpment
  //   desoto        Eagle Ford shale, which moves more than Blackland clay
  //   duncanville   1980s electrical service predating outdoor GFCI practice
  //   lancaster     33 square miles and large-site distribution perimeters
  //
  // Balch Springs and Glenn Heights are NOT here - fewer than three verifiable
  // subdivision names each. They wait for a dedicated research pass.

  'cedar-hill': {
    zips: ['75104', '75106'],
    neighborhoods: ['Lake Ridge', 'High Pointe Village', 'The Bluffs', 'Wooded Creek Estates', 'Cedar Valley Estates'],
    landmarks: ['Cedar Hill State Park', 'Joe Pool Lake', 'Dogwood Canyon Audubon Center', 'Cedar Hill Mountain Nature Preserve'],
    majorRoads: ['US-67', 'FM 1382 Belt Line Road', 'Cedar Hill Road', 'Pleasant Run Road'],
    nearbyCities: ['duncanville', 'desoto', 'grand-prairie', 'midlothian', 'mansfield', 'glenn-heights'],
    responseBand: '',
    gateProfile: {
      dominant: 'Built along the limestone escarpment on some of the highest ground in the metroplex, where gates stand exposed to wind nothing else breaks',
      commonGateTypes: ['Ornamental iron swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'Elite', 'All-O-Matic', 'DoorKing'],
      commonIssues: [
        'Solid gate leaves acting as sails on exposed ridge frontages',
        'Gates forced past their stops in high wind',
        'Operator arms and brackets bent by wind loading',
        'Shallow limestone limiting how deep a footing can go',
      ],
    },
    localAngle:
      'Cedar Hill is built along the limestone escarpment that gives it its name, on some of the highest ground in the metroplex — the ridge that carries Cedar Hill State Park, Dogwood Canyon and the nature preserves above Joe Pool Lake. Elevation and exposure are the story for gate work here. A solid gate leaf is a sail, and on a ridge frontage with nothing upwind to break the weather it takes loads that the same gate would never see in a sheltered subdivision. What that produces is a distinctive failure: arms and brackets bent not by anyone driving into them but by the gate itself being forced past its stops in a gust, usually overnight, so the owner finds it out of true in the morning with no explanation. The escarpment adds a second constraint underneath — rock is close to the surface in much of the city, so a footing cannot simply be made deeper to compensate. It has to be keyed into what is there.',
    faqs: [
      {
        q: 'We found the gate bent out of shape one morning and nobody hit it. How?',
        a: 'Almost certainly wind. On the ridge frontages here a solid leaf catches gusts like a sail, and if it is caught while unlatched it can be driven past its stops hard enough to bend the operator arm or crack a bracket. It is the most common damage we see in this city and it is why we ask about wind-hold hardware on exposed frontages rather than only about the operator.',
      },
      {
        q: 'Can anything be done to stop the wind damaging the gate?',
        a: 'Yes, and it is mostly mechanical rather than electronic. Properly rated stops, a positive latch or lock that holds the leaf when closed, and on very exposed sites reducing the solid area of the leaf all make a real difference. Where a gate has to stay solid for privacy, we would rather specify hardware that can take the load than keep straightening arms every spring.',
      },
    ],
  },

  desoto: {
    zips: ['75115'],
    neighborhoods: ['Westmoreland Estates', 'Regents Park', 'Ten Mile Creek Estates', 'Thorntree'],
    landmarks: ['Ten Mile Creek', 'DeSoto Town Center', 'Grimes Park', 'Hampton Road corridor'],
    majorRoads: ['I-35E', 'Hampton Road', 'Pleasant Run Road', 'Beltline Road'],
    nearbyCities: ['duncanville', 'cedar-hill', 'lancaster', 'glenn-heights', 'red-oak', 'ovilla'],
    responseBand: '',
    gateProfile: {
      dominant: 'Sitting on Eagle Ford shale, a soil that moves more aggressively than the Blackland clay most of the metroplex is built on',
      commonGateTypes: ['Estate driveway swing', 'Ornamental iron swing', 'Community slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Posts moving further and faster than elsewhere in the metroplex',
        'Driveway slabs cracking and stepping under the gate arc',
        'Gate alignment needing correction more often than the north side',
        'Heavy ornamental leaves amplifying ground movement',
      ],
    },
    localAngle:
      'Southern Dallas County sits largely on Eagle Ford shale, and anyone who has owned a house in DeSoto knows what that means before we say it — this is foundation country, and the ground here moves more than the Blackland clay the northern suburbs are built on. Gate posts are subject to exactly the same forces as a house slab, with the difference that a gate post is a lever with several hundred pounds hanging off the end of it, so it shows the movement far sooner than a building does. In practice that means the interval between alignment corrections here is genuinely shorter than in Plano or Frisco, and it is not a reflection of poor workmanship. It is the ground. What we can control is how the footing is sized and bedded for this soil rather than to a generic specification, and being straight with owners that a gate on Eagle Ford shale needs looking at on a cycle rather than only when it fails.',
    faqs: [
      {
        q: 'Our gate needs realigning more often than our friends in Plano. Why?',
        a: 'The ground, not the gate. Southern Dallas County sits on Eagle Ford shale, which swells and shrinks more aggressively than the clay under the northern suburbs — it is the same reason foundation work is so much more common down here. A gate post is a lever with a heavy leaf on it, so it reports that movement sooner than a house slab does.',
      },
      {
        q: 'Is there a way to stop it moving rather than keep correcting it?',
        a: 'Not stop, but substantially slow. A footing sized and bedded for this soil rather than to a generic depth, and drainage that keeps water from cycling the ground right at the post, together make a real difference to how often you see us. We would rather do that once at a repair you are already paying for than book the same adjustment every eighteen months.',
      },
    ],
  },

  duncanville: {
    zips: ['75116', '75137'],
    neighborhoods: ['Woodland Hills', 'Mountain Creek', 'Woods-Sugarberry', 'Alexander Estates'],
    landmarks: ['Armstrong Park', 'Duncanville Fieldhouse', 'International Museum of Cultures', 'Main Street corridor'],
    majorRoads: ['US-67', 'Camp Wisdom Road', 'Cedar Ridge Drive', 'Main Street'],
    nearbyCities: ['cedar-hill', 'desoto', 'dallas', 'grand-prairie', 'lancaster', 'glenn-heights'],
    responseBand: '',
    gateProfile: {
      dominant: 'Essentially fully built out in the 1980s with almost no new construction since, so every gate is a retrofit onto electrical service of that era',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Side and yard gate'],
      commonBrands: ['LiftMaster', 'Eagle', 'Viking', 'US Automatic'],
      commonIssues: [
        'No GFCI protection at the outdoor circuit feeding the gate',
        'Gate operators sharing a circuit with garage or garden loads',
        'Undersized or ageing outdoor wiring runs',
        'Nuisance tripping traced to the supply rather than the operator',
      ],
    },
    localAngle:
      'Duncanville did most of its building in the 1980s and has added very little since, which makes it one of the most completely built-out cities we work in. Almost every automatic gate here has been retrofitted onto a house that was finished before it, and the part of that retrofit people rarely think about is the electrical supply. Outdoor circuits of that era frequently have no GFCI protection at all, are sometimes shared with a garage or garden load rather than dedicated, and were sized for what was on them in 1985. What we get called to as an intermittent gate fault turns out, often enough to be worth saying, to be the circuit rather than the operator — a shared load tripping the gate, or a supply that sags when something else on the same run starts up. So on a Duncanville call we check what the gate is plugged into before we open the operator, which is the reverse of how we would work in a newer city.',
    faqs: [
      {
        q: 'Our gate trips out when something else in the garage switches on. Is the operator faulty?',
        a: 'Probably not — that symptom points at the circuit. In a house of this era the gate is often on a shared outdoor circuit rather than a dedicated one, and a motor starting elsewhere on that run pulls the voltage down far enough for the gate to fault. The fix is electrical rather than in the gate, and it is worth finding before anyone replaces a working operator.',
      },
      {
        q: 'Do we need a GFCI for the gate?',
        a: 'For an outdoor circuit, yes, and a good number of houses here were built before that was standard. It is a safety matter first, since the equipment is outdoors and gets wet, but it also gives you a clear diagnostic: a GFCI that trips repeatedly is telling you something real about moisture or damaged cable rather than being a nuisance to work around.',
      },
    ],
  },

  lancaster: {
    zips: ['75134', '75146'],
    neighborhoods: ['Rolling Meadows', 'Wintergreen', 'Wellington Park North', 'Pleasant Run Estates'],
    landmarks: ['Lancaster Historic Town Square', 'Lancaster Regional Airport', 'Commemorative Air Force DFW Wing', 'Ten Mile Creek'],
    majorRoads: ['I-35E', 'I-20', 'Pleasant Run Road', 'Dallas Avenue'],
    nearbyCities: ['desoto', 'hutchins', 'wilmer', 'glenn-heights', 'red-oak', 'ferris'],
    responseBand: '',
    gateProfile: {
      dominant: 'Thirty-three square miles at the I-20 and I-35E convergence, where the growth has been very large distribution sites rather than housing',
      commonGateTypes: ['Cantilever slide', 'Commercial slide', 'Barrier arm'],
      commonBrands: ['DoorKing', 'HySecurity', 'LiftMaster', 'All-O-Matic'],
      commonIssues: [
        'Long perimeter fence lines with several gates on one site',
        'Operators expected to integrate with guard and access systems',
        'Heavy cantilever gates on continuous commercial duty',
        'Response distances varying widely within one city',
      ],
    },
    localAngle:
      'Lancaster covers thirty-three square miles, which makes it one of the largest cities by land area in the southern half of the metroplex, and its growth has come as distribution and logistics at the I-20 and I-35E convergence rather than as subdivisions. That gives its gate work a different shape from its Best Southwest neighbours. A distribution site does not have a gate; it has a perimeter, often with a main vehicle entrance, a trailer gate, and a staff entrance on the same fence line, all expected to work with a guard post or an access system rather than a remote in a car. The gates themselves are usually cantilever, long and heavy, running continuously through shift changes. The other consequence of thirty-three square miles is practical: the drive between one end of Lancaster and the other is longer than the drive between some neighbouring cities, so we ask for the road rather than the city when we schedule here.',
    faqs: [
      {
        q: 'We have several gates on one site. Can they be managed together?',
        a: 'Yes, and on a perimeter that is usually the right approach rather than treating each gate separately. Access can be issued once and applied across every entrance, with different permissions for staff, hauliers and visitors, and faults reported centrally rather than discovered when somebody cannot get in. We would look at the whole fence line before quoting any single gate on it.',
      },
      {
        q: 'Our cantilever gate is slowing down and it runs all day. What usually causes that?',
        a: 'On continuous commercial duty it is almost always the running gear rather than the motor. The trucks and rollers inside the gate frame carry the whole weight and wear steadily, and the operator then works harder against that wear until it looks like the problem. We measure the running gear first, because replacing an operator on worn trucks is a repair that does not last on a site cycling this often.',
      },
    ],
  },

  // ── BATCH 7, 28 Sep 2026 ───────────────────────────────────────────────────
  // Four Collin County cities. Anchors:
  //   wylie      Lake Lavon is a flood-control reservoir, so its level swings
  //   murphy     almost no commercial base - a purely residential call sheet
  //   anna       building at a scale that makes the street itself the hazard
  //   princeton  new subdivisions on ploughed farmland, so fill settles
  //
  // Fairview, Melissa, Farmersville and Blue Ridge are NOT here - fewer than
  // three verifiable subdivision names each.

  wylie: {
    zips: ['75098'],
    neighborhoods: ['Woodbridge', 'Birmingham Farms', 'Seis Lagos', 'Creek Hollow', 'Creekside Estates'],
    landmarks: ['Lake Lavon', 'Historic Downtown Wylie', 'Founders Park', 'Woodbridge Golf Club'],
    majorRoads: ['SH 78', 'FM 544', 'Brown Street', 'Country Club Road'],
    nearbyCities: ['sachse', 'murphy', 'lucas', 'parker', 'rowlett', 'princeton'],
    responseBand: '',
    gateProfile: {
      dominant: 'Wrapped around Lake Lavon, a flood-control reservoir whose level swings far more than a constant-level lake',
      commonGateTypes: ['Residential swing', 'Driveway slide', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Shoreline access roads and gates inundated in wet years',
        'Equipment mounted low enough to be reached by a high lake',
        'Ground saturating and drying on a multi-year cycle rather than seasonally',
        'Silt left in tracks and enclosures after water recedes',
      ],
    },
    localAngle:
      'Wylie wraps around the southern end of Lake Lavon, and the important thing about Lavon is that it is a flood-control reservoir rather than a constant-level lake. It is held deliberately low in dry years and allowed to rise a very long way in wet ones, and the difference between those two states is measured in feet of elevation and a great deal of shoreline. Properties and access roads that sit comfortably above the water for three years running can find it much closer in the fourth. For gate equipment that produces a pattern we do not see at Grapevine or Ray Hubbard: not gradual humidity damage, but occasional reach — a control box or a low-mounted sensor that has been fine since installation being touched by water once, and silt left behind in a track after the level drops. Mounting height is therefore worth deciding against the historical high rather than against where the water happens to be on the day of the installation.',
    faqs: [
      {
        q: 'Our gate was fine for years and then flooded once. Is it worth moving the equipment?',
        a: 'On Lavon, usually yes. The lake is managed for flood control, so it is held low for long stretches and then allowed to come up a long way — meaning the level you have grown used to is not the level the equipment should be specified against. Raising a control box and any low sensors above the historical high is inexpensive as part of a repair and takes the question off the table.',
      },
      {
        q: 'There is silt packed in the gate track after the water went down. What is the right fix?',
        a: 'Clearing it properly rather than running the gate through it — reservoir silt sets hard and behaves like grinding paste on rollers, so a few cycles through it does more damage than the water did. We would also check the rollers themselves, because they usually took the worst of it while the track was still full.',
      },
    ],
  },

  murphy: {
    zips: ['75094'],
    neighborhoods: ['Maxwell Creek', 'Maxwell Creek North', 'Woodbridge', 'Rolling Ridge'],
    landmarks: ['Preserve at Maxwell Creek', 'Murphy Central Park', 'Murphy Community Center', 'FM 544 corridor'],
    majorRoads: ['FM 544', 'Murphy Road', 'McCreary Road', 'Betsy Lane'],
    nearbyCities: ['wylie', 'plano', 'sachse', 'parker', 'richardson', 'allen'],
    responseBand: '',
    gateProfile: {
      dominant: 'Under six square miles and almost entirely residential, with essentially no commercial or industrial base',
      commonGateTypes: ['Residential swing', 'Courtyard gate', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'Eagle', 'DoorKing'],
      commonIssues: [
        'Gates built out within one narrow window now ageing together',
        'Householders needing appointments outside working hours',
        'Retrofits onto houses completed before the gate was considered',
        'Clay-soil post movement on early-2000s installations',
      ],
    },
    localAngle:
      'Murphy is unusual among the cities we serve in having almost no commercial base at all — under six square miles, overwhelmingly residential, with no industrial estate, no distribution corridor and very few of the shared entrances that dominate our work in places like Lewisville or Little Elm. Practically every gate in this city belongs to a household. That sounds like a small distinction and it changes how we work here more than anything about the equipment does. There is nobody on site during the day to let a technician in, so the useful appointment is early morning, evening or weekend rather than the mid-morning slot that suits a managed property. It also means the person paying is the person who will live with the result, which is why we spend longer on the explanation in Murphy than we do on a commercial call, and why we would rather show a homeowner the worn roller than simply list it on an invoice.',
    faqs: [
      {
        q: 'Can you come outside working hours? Nobody is home during the day.',
        a: 'Yes, and in Murphy that is the norm rather than the exception. Almost all our work here is residential, so early morning, evening and weekend appointments are what we schedule around. Tell us what suits when you call rather than accepting the first slot offered.',
      },
      {
        q: 'Our gate is about twenty years old. Is that the end of its life?',
        a: 'Not necessarily, and the age is worth knowing rather than fearing. Much of Murphy was built within one fairly narrow window, so a lot of equipment here reaches the same milestones at the same time — but the mechanical side, the posts, hinges and track, normally outlasts the electronics by decades. Where an operator has reached the end, the rest of the installation is usually reusable.',
      },
    ],
  },

  anna: {
    zips: ['75409'],
    neighborhoods: ['AnaCapri', 'Churchill', 'Sherley Farms', 'Liberty Hills'],
    landmarks: ['Anna Town Square', 'Slayter Creek Park', 'US-75 corridor', 'Anna Aquatic Center'],
    majorRoads: ['US-75', 'FM 455', 'Ferguson Parkway', 'SH 5'],
    nearbyCities: ['melissa', 'mckinney', 'princeton', 'celina', 'van-alstyne', 'blue-ridge'],
    responseBand: '',
    gateProfile: {
      dominant: 'Building at a scale that makes the street itself the hazard - thousand-home communities going in around houses that are already occupied',
      commonGateTypes: ['Residential swing', 'Community slide', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Construction traffic clipping gates and bending leaves',
        'Site dust fouling tracks and sensor lenses continuously',
        'Temporary power and unfinished supplies feeding new installs',
        'Gates commissioned before surrounding ground is finished',
      ],
    },
    localAngle:
      'Anna is being built on a scale that is hard to overstate — Sherley Farms alone is around three thousand homes on nine hundred and seventy acres, and Liberty Hills adds another thousand-odd acres along US-75 at the northern edge. If you already live here, that means your gate is very likely operating on a street that is still a construction site. The damage we are called to reflects it. Delivery lorries and plant reversing in roads not yet at final width clip gate leaves; site dust settles into tracks and onto sensor lenses at a rate no domestic setting produces; and gates installed with a new house are sometimes commissioned before the surrounding ground has finished being graded, so their limits describe a driveway that has since changed. None of this is anybody doing anything wrong. It is what a town being built around you looks like, and it is worth knowing so it is not misread as equipment failure.',
    faqs: [
      {
        q: 'Our gate is new and already misbehaving, with building work all around us. Related?',
        a: 'Very likely. A gate commissioned while the surrounding ground is still being graded ends up with limits and force settings describing a driveway that has since moved, and site dust on sensor lenses will stop a gate closing without anything being broken. Both are adjustments rather than parts, and both are worth doing once the ground around you has settled rather than twice.',
      },
      {
        q: 'A contractor hit our gate. What normally needs doing?',
        a: 'Usually re-squaring the leaf and replacing whatever hinge took the impact, and then checking the operator — because if the gate was run while bound it may have strained the gearbox, and that damage shows up later than the visible dent. We will document what we find in writing if you are recovering the cost from the contractor.',
      },
    ],
  },

  princeton: {
    zips: ['75407'],
    neighborhoods: ['Princeton Lake', 'Whitewing Trails', 'Winchester Crossing', 'Ranger Crossing', 'Sicily'],
    landmarks: ['US-380 corridor', 'J.M. Caldwell Sr. Community Park', 'Princeton Municipal Park', 'Lake Lavon'],
    majorRoads: ['US-380', 'FM 982', 'Beauchamp Boulevard', 'Monte Carlo Boulevard'],
    nearbyCities: ['mckinney', 'anna', 'farmersville', 'lowry-crossing', 'wylie', 'melissa'],
    responseBand: '',
    gateProfile: {
      dominant: 'New subdivisions laid directly over ploughed Blackland farmland, where fill settles unevenly for the first few years',
      commonGateTypes: ['Residential swing', 'Community slide', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Eagle'],
      commonIssues: [
        'New driveways and post footings settling unevenly on made ground',
        'Gates needing re-commissioning in their first two or three years',
        'Limits set before the ground finished moving',
        'Drainage across new grading channelling water at the gate',
      ],
    },
    localAngle:
      'Princeton has grown outward along US-380 onto what was, until very recently, ploughed Blackland farmland, and that history is under every new driveway in the city. Ground that has been worked to depth for a century and then graded, cut and filled for a subdivision does not behave like undisturbed soil. It settles, and it settles unevenly, for the first few years after the houses go up. The practical result is that a Princeton gate installed with a new house frequently needs re-commissioning at two or three years old — not because anything has failed, but because the driveway it was set against has moved a little and the limits and force settings no longer describe it. Owners reasonably read that as a defect in a nearly new gate. It is the ground finishing what it started, and the fix is an adjustment rather than a part.',
    faqs: [
      {
        q: 'Our gate is only three years old and has started catching. Is it faulty?',
        a: 'Probably not. On new subdivisions built over worked farmland the made ground settles for several years, so the driveway and the post the gate was set against have both moved slightly since commissioning. Re-learning the travel and re-checking the force against the gate as it now sits usually resolves it, with no parts involved.',
      },
      {
        q: 'Should we wait before having a gate installed on a new build?',
        a: 'There is a real argument for it on ground this new. Waiting through a full wet and dry cycle lets the worst of the settlement happen before anything is set against the driveway, and it means the posts go into ground that has finished moving. If you would rather not wait, it is worth budgeting for a commissioning visit a couple of years in.',
      },
    ],
  },

  // ── BATCH 8, 28 Sep 2026 ───────────────────────────────────────────────────
  // Three cities east of Dallas. Anchors:
  //   heath   east shore of Ray Hubbard, facing the lake's widest fetch, so
  //           weather arrives from one consistent direction
  //   fate    a commuter town on I-30 where the whole population leaves in a
  //           two-hour window, which decides what a stuck gate costs
  //   forney  the Blackland Prairie meets the Post Oak Belt here, so soil can
  //           change across a single frontage
  //
  // Royse City, Terrell, Kaufman and Crandall are NOT here - fewer than three
  // verifiable subdivision names each.

  heath: {
    zips: ['75032'],
    neighborhoods: ['Buffalo Creek', 'Heath Golf & Yacht Club', 'Antigua Bay', 'Yankee Creek'],
    landmarks: ['Lake Ray Hubbard', 'Heath Golf & Yacht Club', 'Terry Park', 'Towne Center'],
    majorRoads: ['FM 740 Horizon Road', 'FM 1140', 'Smirl Drive', 'Hubbard Drive'],
    nearbyCities: ['rockwall', 'rowlett', 'fate', 'sunnyvale', 'forney', 'royse-city'],
    responseBand: '',
    gateProfile: {
      dominant: 'On the east shore of Ray Hubbard, facing the widest stretch of open water, so weather arrives from one consistent direction',
      commonGateTypes: ['Estate driveway swing', 'Ornamental iron swing', 'Driveway slide'],
      commonBrands: ['LiftMaster', 'Elite', 'DoorKing', 'All-O-Matic'],
      commonIssues: [
        'Enclosure seals failing on the lake-facing side first',
        'Wind-driven rain forced past gaskets that would cope elsewhere',
        'Corrosion concentrated on one face of the hardware',
        'Photo-eyes on the exposed side needing more frequent attention',
      ],
    },
    localAngle:
      'Heath occupies the east shore of Lake Ray Hubbard, which means it looks out across the widest open stretch of that lake with nothing between it and the prevailing weather. That geography produces something we can genuinely predict before arriving: the damage here is directional. Wind-driven rain crossing several miles of open water arrives with force behind it, and a gasket that would shed ordinary rainfall for fifteen years gets water pushed past it from one consistent side. So on a Heath call we expect to find the lake-facing face of everything in worse condition than the sheltered one — the west side of an enclosure corroded while the east is clean, the photo-eye on the exposed post needing attention twice as often as its partner. It is a useful thing to know because the repair is asymmetric too. Renewing the seal on the weather side and leaving the other is often the proportionate answer rather than replacing a housing that is only half worn out.',
    faqs: [
      {
        q: 'One of our two photo-eyes keeps failing and the other never does. Why?',
        a: 'Exposure. On this shore the weather comes consistently off the open water, so the sensor on the lake-facing post takes wind-driven rain and sun that the sheltered one never sees. It is not a faulty unit so much as a harder posting. Hooding it, or fitting a housing rated for that exposure on that side only, usually ends the cycle.',
      },
      {
        q: 'Does living on the water mean replacing equipment more often?',
        a: 'It means maintaining it more often, which is cheaper. What fails here is seals and exposed hardware rather than operators, and those are small parts caught early. The expensive version is leaving a perished gasket until water has reached the board, which is a different order of repair for the sake of a component worth very little.',
      },
    ],
  },

  fate: {
    zips: ['75087', '75189'],
    neighborhoods: ['Woodcreek', 'Williamsburg', 'Chamberlain Crossing', 'Monterra', 'Edgewater'],
    landmarks: ['Historic Fate', 'Woodcreek amenity centre', 'I-30 corridor', 'Fate Village'],
    majorRoads: ['I-30', 'FM 551', 'FM 552', 'Ben Payne Road'],
    nearbyCities: ['rockwall', 'royse-city', 'heath', 'wylie', 'princeton', 'farmersville'],
    responseBand: '',
    gateProfile: {
      dominant: 'A commuter town on I-30 where most of the population leaves inside the same two hours, so a stuck gate has a deadline',
      commonGateTypes: ['Community slide', 'Residential swing', 'Barrier arm'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'Viking'],
      commonIssues: [
        'Faults discovered at 7am with a household already late',
        'Community entrances carrying their whole day in two peaks',
        'Wear concentrated into narrow windows rather than spread out',
        'Manual release needed by people who have never used it',
      ],
    },
    localAngle:
      'Fate grew from a village of a few hundred into a town of tens of thousands almost entirely on the back of I-30, and it is a commuter town in the strict sense: a very large share of its residents leave for Dallas inside the same two-hour window and come back inside another. That concentrates everything. A community entrance here does not do its cycles evenly through the day, it does most of them twice, which wears running gear faster than the raw daily count suggests. More to the point, it decides what a failure costs. A gate that fails at eleven in the morning is an inconvenience; the same fault at ten past seven strands a household that is already late, and that is when most Fate calls come in. It is why we push the manual release conversation harder here than almost anywhere — knowing where yours is, before the morning you need it, turns an emergency into a phone call you can make from the office.',
    faqs: [
      {
        q: 'Our gate failed at 7am and we could not get out. What should we have done?',
        a: 'Used the manual release, which every operator has — usually a key or lever on the housing that disconnects the motor so the gate can be pushed by hand. It is worth finding yours on a calm Saturday rather than in the dark on a weekday. Call us and we will talk you through it for your model, and we would rather do that free than have you trapped.',
      },
      {
        q: 'Our community gate seems to wear out faster than it should. Is it a bad installation?',
        a: 'Not necessarily. A commuter community concentrates its traffic into two short peaks rather than spreading it across the day, and running gear wears on how hard it is worked rather than on the clock. That is why an entrance here can need its chain and rollers attended to on a schedule that looks aggressive next to a quieter town with a similar number of homes.',
      },
    ],
  },

  forney: {
    zips: ['75126'],
    neighborhoods: ['Devonshire', 'Heartland', 'Windmill Farms', 'Travis Ranch', 'Clements Ranch', 'Gateway Parks'],
    landmarks: ['Historic Downtown Forney', 'Forney Community Park', 'US-80 corridor', 'Spyglass Pond Park'],
    majorRoads: ['US-80', 'FM 548', 'FM 741', 'Pinson Road'],
    nearbyCities: ['terrell', 'crandall', 'mesquite', 'sunnyvale', 'heath', 'kaufman'],
    responseBand: '',
    gateProfile: {
      dominant: 'Where the Blackland Prairie gives way to the Post Oak Belt, so soil can change materially across a single frontage',
      commonGateTypes: ['Community slide', 'Residential swing', 'Ranch entrance swing'],
      commonBrands: ['LiftMaster', 'DoorKing', 'Elite', 'US Automatic'],
      commonIssues: [
        'Two posts on one gate behaving differently from each other',
        'A gate racking because one side moves and the other does not',
        'Footings specified to one soil type across a transition',
        'Alignment drifting in one direction rather than evenly',
      ],
    },
    localAngle:
      'Forney sits on the line where the Blackland Prairie runs out and the Post Oak Belt begins, and that transition is not tidy — it can run through a single property. The consequence for gate work is genuinely unusual and it catches out installers who have only worked further west. A gate has two posts, and in Forney those two posts can be standing in materially different ground: one in heavy clay that swells and shrinks with the season, the other in sandier soil that drains and settles instead. They therefore move differently, at different times, in different directions. What the owner sees is a gate that has gone out of square rather than simply out of plumb — a leaf that no longer meets its latch squarely, or a slide gate whose track has developed a twist. Diagnosing that as an operator fault is easy and wrong, and the repair has to treat each post on its own terms rather than assume both need the same thing.',
    faqs: [
      {
        q: 'Our gate has gone out of square rather than just dropping. What causes that?',
        a: 'Very often, in Forney, the two posts standing in different soil. This is the transition between the Blackland Prairie and the Post Oak Belt, and that boundary can cross a single frontage — so one post can be in clay that swells seasonally while the other is in sand that settles. They move differently and the gate racks between them. Each post then needs assessing separately rather than as a pair.',
      },
      {
        q: 'Our installer set both footings the same. Was that wrong?',
        a: 'It is the normal approach and it is right almost everywhere else, which is why it is easy to get caught here. Where the soil genuinely changes across the opening, footings sized and bedded to one type will behave well on one side and poorly on the other. It is worth checking what each post is actually standing in before re-setting either.',
      },
    ],
  },
}

const build = (raw: [string, string][], tier: 2 | 3): City[] =>
  raw.map(([name, county]) => ({ slug: toSlug(name), name, county, tier, ...ENRICHED[toSlug(name)] }))

export const tier2Cities = build(tier2Raw, 2)
export const tier3Cities = build(tier3Raw, 3)

export const cities: City[] = [...tier1Cities, ...tier2Cities, ...tier3Cities]

/**
 * Cities that have their own page and will answer a request.
 *
 * Every city on the client's list gets a page — the client asked for this
 * directly on 3 Aug 2026, overriding the earlier decision to publish only the
 * 14 enriched pages. That still holds, and these pages still render: they are
 * live Google Ads destinations for local search, and withdrawing the URLs would
 * break running campaigns as well as overruling the client.
 *
 * What changed on 6 Sep 2026 is that RENDERING a page and SUBMITTING it for
 * indexing are now two separate decisions — see `indexedCities` below. The
 * client asked for a page at every city URL. He did not ask for 176 near-
 * identical pages to be entered into Google's index, and that is the half that
 * carries the risk.
 */
export const publishedCities: City[] = cities

/**
 * Cities submitted for indexing — in the sitemap, and without `noindex`.
 *
 * Google's scaled-content-abuse policy targets sets of near-identical pages
 * generated from a template with only the place name swapped. A Tier 2/3 page
 * here is honest about being short — it states its county, links its genuine
 * county neighbours, shows the map and stops, rather than padding to 1,500
 * words with invented neighborhoods and response times. Honest is necessary but
 * it is not sufficient: measured, two Tier 3 pages differ in 5 of 29 text
 * blocks, and only by county name. Submitting 176 of those is the risk, not
 * serving them.
 *
 * So the 14 enriched cities are indexed and the remaining 176 are `noindex,
 * follow` — crawlable, link-passing, reachable from /service-areas and from
 * every city page's "nearby cities" block, and available to any Ads click, but
 * not asking Google to treat them as 176 distinct answers.
 *
 * Promotion is a data change and nothing else. Fill in `localAngle` (plus
 * `neighborhoods` and `faqs` for Tier 1 and 2, which `isPublishable` checks)
 * and the city moves into this list, into the sitemap, and out of `noindex`
 * on the next build.
 */
export const indexedCities: City[] = cities.filter((c) => hasLocalContent(c) && isPublishable(c))

/** Cities with the full enriched profile — used to flag depth in reporting. */
export const enrichedCities: City[] = indexedCities

/**
 * Other cities in the same county, for internal linking.
 *
 * County membership is a real, checkable relationship, which is what makes
 * these links worth having — they are not "related cities" invented to spread
 * link equity. Falls back to nothing rather than reaching for a neighbouring
 * county when a city is the only one we serve in its own.
 */
export function countyPeers(city: City, limit = 8): City[] {
  return cities
    .filter((c) => c.county === city.county && c.slug !== city.slug)
    .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name))
    .slice(0, limit)
}

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)

/** Cities grouped by county, for the /service-areas hub. */
export function citiesByCounty(): Record<string, City[]> {
  const grouped: Record<string, City[]> = {}
  for (const city of cities) {
    ;(grouped[city.county] ??= []).push(city)
  }
  for (const list of Object.values(grouped)) list.sort((a, b) => a.name.localeCompare(b.name))
  return Object.fromEntries(Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)))
}

/**
 * A city is publishable when it carries enough genuinely local content to
 * justify its own page. Tier 1 and 2 need the full profile; Tier 3 ships as a
 * short honest page. Enforced by scripts/validate-cities.ts.
 *
 * `responseBand` used to be part of this conjunction. It was removed on
 * 6 Sep 2026 because the fact it guarded no longer exists: the client had the
 * arrival-window claim withdrawn on 6 Aug and every `responseBand` was emptied
 * to match, which silently made every Tier 1 city unpublishable. The symptom
 * was `enrichedCities` evaluating to 0 and `npm run validate:cities` exiting
 * with 14 errors — one per Tier 1 city — so the guard that exists to stop thin
 * location pages shipping was itself failing, and would have rejected the
 * correct value of `publishedCities` below.
 *
 * If a real, measured arrival window is ever supplied, it belongs in the page
 * copy and the meta description. It does not belong back in this gate.
 */
export function isPublishable(city: City): boolean {
  if (city.tier === 3) return true
  return Boolean(
    city.localAngle &&
      city.localAngle.split(/\s+/).length >= 100 &&
      (city.neighborhoods?.length ?? 0) >= 3 &&
      (city.faqs?.length ?? 0) >= 1,
  )
}

/**
 * Does this city carry content that is true of this city and nowhere else?
 *
 * This is the test that decides whether a page is submitted for indexing, and
 * it is deliberately stricter than `isPublishable` — a Tier 3 city passes that
 * one by design, because a short honest page is a fine thing to serve someone
 * who followed a link. It is not a fine thing to submit to Google 176 times.
 *
 * Measured 6 Sep 2026: rendering `/gate-repair-azle-tx` and
 * `/gate-repair-anna-tx` and normalising the city and county names away leaves
 * 29 text blocks of which 5 differ, and all five differ only by county name and
 * the list of neighbouring-city chips. That is one page served 176 times, which
 * is the shape Google's scaled-content-abuse policy describes.
 */
export function hasLocalContent(city: City): boolean {
  return Boolean(city.localAngle)
}
