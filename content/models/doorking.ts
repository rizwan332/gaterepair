/**
 * DoorKing (DKS) model pages.
 *
 * Researched September 2026 from DoorKing's January 2026 Product Reference
 * Guides (Section A2 entry/access control, Section 1 vehicular), current
 * owner's manuals, cutsheets and published warranty statements. Every spec
 * below traces to a URL in `sources`. Nothing here states Shield's own
 * warranty, prices or response times.
 *
 * Scope decisions:
 *  - 1835 and 1837 share one page. They are the same 1830 Series controller
 *    (same capacities, relays, inputs, manuals); the 1837 differs by its
 *    eight-line display and larger power supply. Two pages would fail the
 *    sibling-overlap gate and say the same thing twice.
 *  - "1830" (listed in brands.ts) is DoorKing's series name for the
 *    1833/1834/1835/1837 family, not an orderable model.
 *  - 9100/9150/9200 are SLIDE operators, not barrier gates. DoorKing's
 *    barrier operators are the 1601/1602/1603. The 6300 is a SWING operator.
 *  - No image, project or video is attached: none of the DoorKing photos,
 *    the gearbox-rebuild case study or the VoIP call-box case study
 *    identifies a model number.
 */

import type { ModelPage } from './types'

const SRC_RG_ENTRY = {
  label: 'DoorKing Product Reference Guide, Entry & Access Control Systems, January 2026 (PDF)',
  url: 'https://www.doorking.com/wp-content/uploads/2013/09/RG_Section-2_January_2026-1.pdf',
}
const SRC_RG_VEHICULAR = {
  label: 'DoorKing Product Reference Guide, Vehicular Traffic Control, January 2026 (PDF)',
  url: 'https://www.doorking.com/wp-content/uploads/2013/09/RG_Section-1_January_2026-1.pdf',
}
const SRC_WARRANTY_2YR = {
  label: 'DoorKing 2-Year Limited Warranty, Rev 11-23 (PDF)',
  url: 'https://www.doorking.com/wp-content/uploads/2023/11/2-Year-Limited-Warranty_11-23.pdf',
}
const SRC_WARRANTY_OPERATOR = {
  label: 'DoorKing 5-Year Limited Warranty, Gate Operator, Rev 6-26 (PDF)',
  url: 'https://www.doorking.com/wp-content/uploads/2024/02/5-Year-Limited-Warranty-Gate-Operator_6-26.pdf',
}
const SRC_CELLULAR = {
  label: 'DoorKing Telephone Entry Cellular Connection cutsheet, Rev 4/24 (PDF)',
  url: 'https://www.doorking.com/wp-content/uploads/2016/05/DKS-cellular-cutsheet-Rev_4-24.pdf',
}

// ─────────────────────────────────────────────────────────────────────────────
// 1835 / 1837 telephone entry and access control
// ─────────────────────────────────────────────────────────────────────────────

const dk1835: ModelPage = {
  slug: '1835-repair',
  brandSlug: 'doorking',
  model: '1835',
  aliases: ['1837', '1835-080', '1835-084', '1835-090', '1837-080', '1837-084', '1837-090'],
  descriptor: 'telephone entry and access control system with a built-in card reader interface',
  gateType: 'telephone-entry',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Both the 80 Series (1835-080 surface, 1835-084 flush) and the 90 Series (1835-090) are listed in DoorKing’s January 2026 reference guide, alongside the matching 1837-080, -084 and -090.',

  title: 'DoorKing 1835 & 1837 Repair | Dallas–Fort Worth',
  metaDescription:
    'DoorKing 1835 or 1837 call box not dialing, dead keypad or blank display? We repair and program DKS entry systems across Dallas–Fort Worth. Call 24/7.',
  h1: 'DoorKing 1835 Repair — 1835 and 1837 Telephone Entry Service',
  heroIntro:
    'We repair and program DoorKing 1835 and 1837 telephone entry systems at apartment, HOA and commercial entrances across Dallas–Fort Worth. The call we get most is a panel that powers up and reads normally but has stopped reaching residents after the property’s phone service changed.',
  heroPoints: [
    'We test the line, the ground and both 16.5 VAC transformers before anyone blames the 1830 Series board.',
    'We work out whether Relay 0, 1 or 2 is actually wired to your gate, so a card or code fault is traced to the right output.',
    'We move old copper-line panels to DoorKing’s 1800-080 cellular kit and rebuild the directory in DKS software.',
  ],

  identify: {
    body: [
      'The 1835 and 1837 are the two most common of DoorKing’s 1830 Series panels. Both have a phone-style keypad with A and Z buttons that scroll a resident directory and a CALL button beside the zero. The quickest way to tell them apart is the screen. The 1835 shows one line of text at a time. The 1837 shows eight lines, so a visitor sees a page of names instead of one.',
      'The model number is on the label inside the cabinet and printed on the circuit board. A board marked 1835-010 belongs in an 80 Series 1835; 1835-009 belongs in the 90 Series; 1837-010 is the 1837 board. The 90 Series (part numbers ending -090) uses one larger cabinet for surface, flush or wall mounting, with two locks and a double weather seal. The 80 Series comes as separate surface-mount (-080, with a black hood) and flush-mount (-084) versions.',
    ],
    lookFor: [
      'A and Z scroll buttons with a CALL button on the keypad',
      'One-line display (1835) or eight-line display (1837)',
      'Model label inside the cabinet door; board part number 1835-010, 1835-009 or 1837-010',
      '90 Series: one larger cabinet with two locks and room inside for a card reader',
      '80 Series: surface unit under a black hood, or a flush unit set into a wall or kiosk',
      'A card reader built in or wired beside it (the 1834 lookalike has no card reader inputs)',
    ],
  },

  overview: [
    {
      heading: 'One controller, three relays and a directory',
      body: [
        'DoorKing lists the same core figures for both models: 3,000 phone numbers in the directory, 3,000 four-digit entry codes, 8,000 five-digit device codes for cards, remotes or PINs, and an 8,000-event transaction buffer. There are three relays on the board, called Relay 0, Relay 1 and Relay 2, and two 26-bit Wiegand inputs for card readers or keypads.',
        'How those relays are assigned decides how the panel gets repaired. DoorKing’s manual says Wiegand devices can only fire Relay 1 or Relay 2, never Relay 0. If Tracker expansion boards are connected, Relay 0 has to be the primary relay, and Relays 1 and 2 become command relays for the expansion boards. So on a site where calls open the gate but cards do not, the first question is which relay each device is actually programmed to fire.',
      ],
    },
    {
      heading: 'How it connects: cellular, internet or a phone line',
      body: [
        'A current 1835 or 1837 can reach residents and be programmed three ways. DoorKing’s 1800-080 kit uses AT&T 4G LTE for both voice and programming. On the internet, DoorKing offers VoIP and data over IP using its own adapters and subscriptions, and a third-party VoIP adapter is also possible. The third way is a traditional phone line with a modem for programming.',
        'DoorKing’s own reference guide says it does not recommend a traditional copper phone line (POTS) and does not guarantee modem connections, because many phone company switches no longer support them. That is why a panel on a line that was quietly moved to VoIP can often still ring residents but can no longer be programmed remotely. It is also why sites that lose their copper line are usually better served by the cellular kit than by replacing the whole system.',
      ],
    },
    {
      heading: 'Programming lives in software, not just the keypad',
      body: [
        'The keypad handles basic setup: the master code, directory entries, entry codes and relay strike times. The more advanced features can only be set from DoorKing’s software: hold-open time zones, security levels, holiday schedules, anti-passback tables and elevator control. These days that means DKS Cloud, which is included with a connection subscription, or the free Remote Account Manager program on a dedicated PC.',
        'The master code cannot be read back out of the unit. DoorKing’s manual confirms that setting a new one leaves the directory and codes in place, but it has to be done from inside the locked cabinet. So a property that has lost its master code and its account login has a key-control and records problem, not a hardware failure.',
      ],
    },
    {
      heading: 'Power and grounding matter more than on most call boxes',
      body: [
        'The 1835 runs on two 16.5 VAC, 20 VA transformers: one for the system and one for the auxiliary terminal. The 1837 needs one 20 VA and one 40 VA transformer, because the eight-line display draws more. DoorKing specifies 18 AWG wire up to 100 feet and 16 AWG up to 200 feet. It also calls for a 12 AWG ground to a real ground point within 10 feet, and states that a decorative post anchored in concrete is not a good ground.',
        'A long, undersized power run causes voltage drop, which shows up as a relay that clicks but does not pull in or a strike that stays locked. A missing ground shows up as hum on resident calls. Both look like a failing board and are not.',
      ],
    },
  ],

  specs: [
    { label: 'Directory', value: '3,000 phone numbers; 1835 single-line display, 1837 eight-line display' },
    { label: 'Entry codes', value: '3,000 (four digits)' },
    { label: 'Device codes', value: '8,000 (five-digit 26-bit Wiegand cards, transmitters or PINs)' },
    { label: 'Relays', value: '3 on board (Relay 0, 1, 2)' },
    { label: 'Wiegand inputs', value: '2 (26-bit)' },
    { label: 'Expansion', value: 'Up to 48 additional entry points with wired Tracker boards (24 if wireless)' },
    { label: 'Transaction buffer', value: '8,000 events' },
    { label: 'Connection options', value: 'DKS 4G LTE cellular (1800-080), VoIP / data over IP, or phone line with modem' },
    { label: 'Programming', value: 'DKS Cloud (with subscription) or Remote Account Manager software; basic functions from keypad' },
    { label: 'Power', value: '1835: two 16.5 VAC 20 VA transformers. 1837: one 20 VA and one 40 VA' },
    { label: 'Cabinets', value: '80 Series surface (-080) or flush (-084); 90 Series (-090) surface, flush or wall' },
  ],

  symptoms: [
    {
      symptom: 'The screen and keypad work, but calls to residents don’t go through',
      causes:
        'This usually happens after a phone service change: the line was moved to VoIP or fiber, or the copper pair was disconnected. It can also be a phone line that is noisy or shorted to ground, or a cellular kit whose service has lapsed.',
      whatWeDo:
        'We disconnect the line from the panel and test it on its own. If the line is the problem, we recommend the connection that suits the site, usually DoorKing’s 1800-080 cellular kit, rather than replacing a working controller.',
    },
    {
      symptom: 'Residents hear a buzz or hum on the call',
      causes:
        'A missing or poor case ground, phone or 16.5 VAC wires shorted to ground, untwisted or indoor-rated phone wire in an underground run, or low voltage on the power supply.',
      whatWeDo:
        'We check the ground back to the panel, look for pinched wires at the door hinge, confirm the ferrite filters are fitted, and measure voltage at the terminals.',
    },
    {
      symptom: 'Cards or fobs don’t work, but calls and codes still open the gate',
      causes:
        'A reader that has failed or lost power, a Wiegand wiring fault (DoorKing limits these runs to 500 feet of shielded cable), or device codes assigned to Relay 0, which Wiegand devices cannot fire.',
      whatWeDo:
        'We use the panel’s built-in Wiegand test, which shows each card read on the display, to see whether data is reaching the board. Then we check which relay the codes are assigned to.',
    },
    {
      symptom: 'The gate stays open or the door strike won’t relock',
      causes:
        'A hold-open command sent from a resident’s phone, a hold-open time zone in the software, a strike time set too long, or voltage drop on the 16.5 VAC supply.',
      whatWeDo:
        'We check the programmed time zones and strike times before touching hardware, then measure supply voltage while the relay is energized.',
    },
    {
      symptom: 'The display is blank or unreadable, or the keypad is dead',
      causes:
        'No 16.5 VAC input, a keypad ribbon cable seated the wrong way, the contrast drifted (on the 1837 the adjustment is on the back of the display), or heat damage to the LCD.',
      whatWeDo:
        'We confirm power and the keypad connection, let the unit run before adjusting contrast as DoorKing specifies, and replace the display (single-line for the 1835, eight-line for the 1837) only if it has actually failed.',
    },
    {
      symptom: 'The panel beeps every 30 seconds',
      causes:
        'The master code switch on the board was left ON after programming, or the call-up feature for 1816/1820 intercom interfacing has been turned on.',
      whatWeDo:
        'We set the switch correctly, confirm the master code is recorded somewhere secure, and lock the cabinet again.',
    },
    {
      symptom: 'The system won’t answer when called, so remote programming fails',
      causes:
        'The RING jumper on the board has been removed, which makes the system never answer. It can also be a VoIP line that does not deliver enough ring voltage.',
      whatWeDo:
        'We check the jumper and the line. If remote management is needed, we move programming onto DKS Cloud over cellular or IP rather than relying on a modem.',
    },
  ],

  components: [
    {
      part: '1830 Series control board (1835-010, 1835-009, 1837-010)',
      whatItDoes:
        'Holds the dialer, the three relays, the Wiegand inputs and the connectors for the display, keypad and expansion boards.',
      failureSigns:
        'Relays that never switch even with correct voltage and programming, or input LEDs that stay dark when a device is used. Surge damage after storms is common.',
      verdict: 'replace-part',
    },
    {
      part: 'Memory chip',
      whatItDoes: 'Stores the directory, codes and settings. DoorKing specifies part 1830-404 as the replacement.',
      failureSigns:
        'Lost or corrupted programming. The ACT LED flashes whenever the board reads or writes the chip. A chip fitted backwards or with power on is permanently damaged.',
      verdict: 'replace-part',
    },
    {
      part: 'LCD display and interface board',
      whatItDoes:
        'Shows the scrolling directory and prompts: a single-line 20-character display on the 1835, an eight-line 20-character display on the 1837.',
      failureSigns: 'Faded, dark or missing characters, a backlight that is out, or contrast that won’t adjust.',
      verdict: 'repair',
    },
    {
      part: 'Keypad and A/Z/CALL buttons',
      whatItDoes: 'Visitor entry, code entry and keypad programming.',
      failureSigns: 'Keys that stick or stop responding. A dead keypad is sometimes just the ribbon cable.',
      verdict: 'replace-part',
    },
    {
      part: 'Speaker, microphone board and feedback adjustment',
      whatItDoes: 'Handles two-way voice. Speaker volume, mic volume and feedback settings affect each other.',
      failureSigns: 'Howling, visitors who can’t be heard, or a resident hearing their own voice echo back.',
      verdict: 'adjust',
    },
    {
      part: '16.5 VAC transformers and power wiring',
      whatItDoes: 'Power the system and the auxiliary terminal. The 1837 needs a 40 VA transformer for one of the two supplies.',
      failureSigns: 'Relays that chatter, a strike that stays locked, hum, or resets when the relay fires.',
      verdict: 'service',
    },
    {
      part: 'Connection hardware (1800-080 cellular kit, VoIP adapter or network adapter)',
      whatItDoes: 'Carries voice and programming data to residents and to DKS Cloud.',
      failureSigns:
        'Calls that fail with the panel otherwise healthy, no connection to the account, or a busy signal on older 3G-era cellular hardware.',
      verdict: 'replace-part',
    },
    {
      part: 'Ground, phone-line and low-voltage surge suppressors',
      whatItDoes: 'Send lightning and static surges to ground before they reach the board.',
      failureSigns: 'A suppressor that is missing or burnt, often found only after a storm has already taken out a board.',
      verdict: 'service',
    },
  ],

  repairOrReplace: {
    summary:
      'The 1835 and 1837 are current DoorKing products, and parts for them are listed in DoorKing’s current reference guide: boards, displays, keypads, memory chips and connection kits. A panel that has stopped dialing out is almost never a reason to replace it. The honest exception is a unit with obvious surge damage across several parts, or a property that wants video calling and app-based access the 1830 Series doesn’t offer.',
    repair: [
      'The panel lost dial-out after a phone change. Fitting the 1800-080 cellular kit keeps the existing cabinet, wiring and directory.',
      'Only one part has failed: the display, the keypad, the speaker or the memory chip.',
      'Cards have stopped working but calls still open. This is usually reader power, Wiegand wiring or relay assignment.',
      'The programming is disorganized or undocumented. It can be rebuilt in DKS software without new hardware.',
    ],
    replace: [
      'Lightning has damaged the board, display and connection hardware together, and the cost of parts approaches a new unit.',
      'The property wants video calls and phone-app entry. DoorKing’s 2132/2137 video entry systems were listed as “coming soon” in its January 2026 guide.',
      'A single-gate site with no card readers may be better served by a simpler model, but only once its relay and expansion needs have been confirmed.',
    ],
  },

  warranty: {
    manufacturer:
      'DoorKing’s published 2-Year Limited Warranty covers models 1833, 1834, 1835 and 1837 against defects in material and workmanship for two years from purchase by the original customer. 1800 Series cellular devices are also listed under the two-year warranty.',
    notes: [
      'DoorKing’s warranty covers bench repair only: parts are returned freight-prepaid to DoorKing in Inglewood, California, and on-site service calls and labor are excluded.',
      'Damage from lightning strikes, power surges and floods is excluded, as is damage from improper installation or connection to the wrong voltage.',
      'DoorKing’s 1-Year Limited Warranty, not the two-year one, covers its TCP/IP network adapters, 2334 control boxes and 1815 VoIP adapters.',
      'Batteries and external accessory transformers are treated as maintenance items and are not covered.',
    ],
  },

  dfw: [
    {
      heading: 'Copper lines are disappearing from Metroplex entrances',
      body: [
        'Many DFW apartment and HOA entrances were wired with a copper phone pair to the call box, and carriers are retiring those lines. An 1835 connected to that pair keeps working until the line changes. After that, calls may fail completely, or the panel may still dial but lose remote programming because the new service won’t carry a modem connection. Because DoorKing doesn’t recommend POTS for these panels, we treat a line change as the time to move to cellular or IP, not as a board failure.',
      ],
    },
    {
      heading: 'Spring storms and long cable runs',
      body: [
        'An entry panel at the street is connected by long runs of phone, power and Wiegand cable across open ground. North Texas spring lightning is the most common reason we see a controller, display and reader fail together. DoorKing’s manual calls for a phone-line suppressor and a low-voltage suppressor within 10 feet of the panel, each within 3 feet of a proper ground source. That is exactly what’s missing at many entrances where the panel is simply bolted to a masonry column.',
      ],
    },
    {
      heading: 'Summer heat on a sun-facing display',
      body: [
        'A surface-mount 80 Series under its black hood, or a 90 Series cabinet facing west at the entrance, gets very hot in a Texas summer afternoon. Heat is hard on LCDs and electrolytic parts. The eight-line 1837 display is the part we look at first when a panel becomes hard to read in summer. DoorKing adds that contrast should only be adjusted after the unit has run for at least ten minutes, so a panel checked cold and adjusted can read wrong once it warms up.',
      ],
    },
  ],

  process: [
    {
      step: 'Separate the panel from the gate',
      body: 'We open the gate with a known-good command and fire each relay directly. That shows within minutes whether the fault is in the 1835 or 1837, in the wiring to the operator, or in the operator itself.',
    },
    {
      step: 'Test the line, power and ground',
      body: 'We isolate the phone line or connection kit, measure both 16.5 VAC supplies under load, and check the ground path, following DoorKing’s own troubleshooting checklist.',
    },
    {
      step: 'Check programming before replacing parts',
      body: 'DoorKing’s manual notes that most reported problems turn out to be programming. We review relay assignments, strike times, time zones and code ranges, and run the built-in Wiegand and RS-232 tests where they apply.',
    },
    {
      step: 'Quote, repair and document',
      body: 'You get a quote before any work. After the repair we record the relay map, connection type and account details so the next person servicing the panel isn’t starting from nothing.',
    },
  ],

  faqs: [
    {
      q: 'How do I tell a DoorKing 1835 from an 1837?',
      a: 'Look at the display. The 1835 shows one line of the directory at a time, and the 1837 shows eight. The controller features are otherwise the same: 3,000 phone numbers, three relays and two Wiegand inputs. The model label is inside the cabinet.',
    },
    {
      q: 'Does the 1835 need a landline?',
      a: 'No. DoorKing supports 4G LTE cellular through its 1800-080 kit, VoIP and data over IP, or a phone line. DoorKing itself does not recommend a traditional copper line and does not guarantee modem connections over one.',
    },
    {
      q: 'Our call box stopped calling residents after the phone company changed our service. Is the unit broken?',
      a: 'Usually not. We test the line separately from the panel. If the panel is healthy, moving it to DoorKing’s cellular kit is normally the fix, and the directory and codes stay in place.',
    },
    {
      q: 'We lost the master code. Do we have to erase everything?',
      a: 'No. DoorKing confirms that a new master code can be set without clearing the directory or codes. It has to be done from inside the locked cabinet, so we do it on site with the property’s authorization.',
    },
    {
      q: 'Is an 1835 still covered by DoorKing’s warranty?',
      a: 'DoorKing’s published warranty for the 1835 and 1837 is two years from the original purchase. It is bench repair only and excludes lightning and surge damage. Check your installation date against the label inside the cabinet.',
    },
    {
      q: 'Can you program the 1835 remotely after the repair?',
      a: 'Yes, once the panel is on a DKS connection subscription. Programming then runs through DKS Cloud or Remote Account Manager. We set that up and hand over the account details.',
    },
  ],

  relatedModels: ['doorking/1812-repair', 'doorking/6300-repair', 'doorking/9150-repair', 'doorking/1601-repair'],
  relatedServices: ['access-control-repair', 'commercial-gate-repair', 'emergency-gate-repair'],

  sources: [
    SRC_RG_ENTRY,
    {
      label: 'DoorKing 1835/1837 90 Series Installation & Owner’s Manual, 1835-067 Version P (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2013/09/1835-067-Issued-3-19_P_90_Series.pdf',
    },
    {
      label: 'DoorKing 1835/1837 80 Series Owner’s Manual, 1835-065 Rev R 11-24 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2013/09/1835-065-R-11-24_80_Series.pdf',
    },
    SRC_CELLULAR,
    SRC_WARRANTY_2YR,
    {
      label: 'DoorKing 1-Year Limited Warranty, Rev 11-25 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2024/02/1-Year-Limited-Warranty_11-25.pdf',
    },
    { label: 'DoorKing 3G owners page', url: 'https://www.doorking.com/3g/' },
  ],
  toConfirm: [
    'Which 1830 Series panels (1835 vs 1837, 80 vs 90 Series) the technicians actually see most in DFW. The page assumes both are common.',
    'The 3G sunset details (affected boards 1800-009/1800-010 Rev J and lower, 1801-010; busy signal symptom) came from a search snippet of doorking.com/3g, which did not render for direct reading. Symptom text is kept generic.',
    'Whether Shield carries 1835/1837 boards, displays and 1800-080 kits on the van or orders them.',
    'Whether Shield sets up DKS Cloud accounts for customers or the property holds the subscription directly.',
    'The 2132/2137 video systems were listed as “Coming Soon” in January 2026; confirm availability before recommending them.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 1812 residential telephone intercom / entry
// ─────────────────────────────────────────────────────────────────────────────

const dk1812: ModelPage = {
  slug: '1812-repair',
  brandSlug: 'doorking',
  model: '1812',
  aliases: [
    '1812 Plus',
    '1812 Classic',
    '1812 Access Plus',
    '1812AP',
    '1812-081',
    '1812-087',
    '1812-089',
    '1812-090',
    '1812-091',
    '1812-092',
    '1812-095',
    '1812-096',
  ],
  descriptor: 'residential telephone intercom and gate entry system that shares the home phone line',
  gateType: 'telephone-entry',
  duty: 'residential',
  status: 'current',
  statusNote:
    'DoorKing’s January 2026 reference guide still lists all three versions: 1812 Classic, 1812 Plus and 1812 Access Plus, in surface, curved-surface, camera and flush-mount variants.',

  title: 'DoorKing 1812 Repair | Dallas–Fort Worth',
  metaDescription:
    'DoorKing 1812 call box not ringing the house, humming on the line or ignoring codes? We repair 1812 Classic, Plus and Access Plus units in DFW. Call 24/7.',
  h1: 'DoorKing 1812 Repair for Classic, Plus and Access Plus Units',
  heroIntro:
    'We repair DoorKing 1812 gate intercoms on private driveways and small gated streets across Dallas–Fort Worth. Most calls are the same: the box stopped ringing the house phones, or it started humming, after something changed on the home’s phone line.',
  heroPoints: [
    'We work out whether you have an 1812 Classic, Plus or Access Plus before quoting, because their boards and power supplies are different.',
    'We test the phone line through the bypass switch to find out whether noise comes from the line, the power run or the 1812 itself.',
    'We can move an 1812 off a phone line that has gone away, using DoorKing’s 1800-081 cellular kit.',
  ],

  identify: {
    body: [
      'The 1812 is DoorKing’s residential gate intercom: a black steel box, flat or curved, with a numeric keypad and one large PUSH TO CALL button. It has no scrolling directory. A visitor presses the button, your house phones ring, and you open the gate by pressing a number on the handset. Some units have a small camera window above the keypad.',
      'There are three versions, and they are not interchangeable. The 1812 Classic runs on a 24 VAC transformer and uses board 1871-010. The 1812 Plus runs on 16 VAC and uses board 1971-010. The Access Plus adds PC programming, card reader expansion and holiday schedules. The version and part number are on the label inside the cabinet, and the board part number is printed on the board.',
    ],
    lookFor: [
      'Black steel housing with a keypad and one PUSH TO CALL button, with no display',
      'Flat surface-mount, curved surface-mount or flush-mount faceplate',
      'Model label inside the cabinet door: 1812 Classic, 1812 Plus or 1812 Access Plus',
      'A separate bypass switch box where the phone line enters the house',
      'Transformer rating: 24 VAC points to a Classic; 16.5 VAC points to a Plus or Access Plus',
    ],
  },

  overview: [
    {
      heading: 'It sits in series with your home phone line',
      body: [
        'Unlike DoorKing’s apartment panels, the 1812 isn’t a separate phone line that calls out. It is wired in series with the home’s own line. The phone company’s line comes in on the PHONE IN terminals, and the house phones connect to PHONE OUT, through a bypass switch near the demarcation point. That is how the box rings your phones and lets you talk to the gate from any handset, with a call-waiting tone if you’re already on a call.',
        'It is also why so many 1812 problems start outside the box. DoorKing’s manual says a system not wired in series with the resident line will put dial tone on the 1812 speaker. Phone line polarity matters too: reversed tip and ring on PHONE IN or PHONE OUT is a listed cause of phones that ring but won’t connect.',
      ],
    },
    {
      heading: 'Classic, Plus and Access Plus differ in more than name',
      body: [
        'DoorKing’s reference guide gives the 1812 Classic three dial-out phone numbers, 11-digit dialing, an analog voice circuit and a 24 VAC transformer. The 1812 Plus stores 27 dial-out numbers under directory codes 24–50, uses five-digit access codes, dials 20 digits, has an HD digital voice circuit and runs on 16 VAC. The Access Plus keeps the 27 numbers but adds two RS-485 inputs, up to six additional entry points, PC programming and holiday schedules.',
        'All three have two relays, typically a main door and a gate. Call forwarding and do-not-disturb time zones decide whether the box rings the house or forwards the call, and those settings are behind a good share of “it stopped ringing” calls.',
      ],
    },
    {
      heading: 'The wrong transformer destroys a Plus board',
      body: [
        'DoorKing is blunt about this: the 1812 Plus operates only on 16.5 VAC, and powering it from 24 VAC, including from a gate operator’s accessory supply, damages the board and is not covered under warranty. The Plus has an OV (over-voltage) LED in the bottom-left corner of the board that lights when too much voltage is applied.',
        'Because the Classic ran on 24 VAC, this mistake is most common when an older 1812 is swapped for a Plus and the original transformer is left in place. We check which transformer feeds the box before powering up a replacement board.',
      ],
    },
    {
      heading: 'Programming is done from the keypad or a touch-tone phone',
      body: [
        'The 1812 Plus has no PC software. It is programmed from its own keypad or from a touch-tone phone connected to it. The master code can only be set from the keypad inside the cabinet and cannot be read back; replacing it keeps the rest of the programming. The time and date clock holds for about 48 hours without power, after which the time zones need resetting even though the codes survive.',
        'The Access Plus version can be programmed from DoorKing’s free Access Plus software, and DoorKing sells an 1812-074 kit that upgrades older 1812 units to Access Plus.',
      ],
    },
  ],

  specs: [
    { label: 'Versions', value: '1812 Classic, 1812 Plus, 1812 Access Plus' },
    { label: 'Dial-out phone numbers', value: 'Classic 3; Plus and Access Plus 27' },
    { label: 'Relays', value: '2' },
    { label: 'Voice circuit', value: 'Classic analog; Plus and Access Plus HD digital' },
    { label: 'Power', value: 'Classic 24 VAC transformer; Plus and Access Plus 16 VAC transformer' },
    { label: 'Expansion', value: 'Access Plus only: 2 RS-485 inputs, up to 6 additional entry points' },
    { label: 'PC programming', value: 'Access Plus only (free Access Plus software)' },
    { label: 'Phone line run', value: 'Up to 800 ft at 24 AWG, 1,600 ft at 22 AWG, 2,200 ft at 20 AWG, 3,600 ft at 18 AWG (1812 Plus manual)' },
    { label: 'Cellular option', value: 'DoorKing 1800-081 voice + data kit (AT&T 4G LTE), listed for 1812 and 1812 AP' },
    { label: 'Circuit boards', value: 'Classic 1871-010; Plus 1971-010' },
  ],

  symptoms: [
    {
      symptom: 'Visitors press the button but the house phones don’t ring',
      causes:
        'The bypass switch was left in BYPASS, a do-not-disturb or call-forward time zone is active, the clock reset after an outage and time zones are now wrong, voltage is low on the 16 VAC supply, or the home line was changed and the 1812 is no longer in series with it.',
      whatWeDo:
        'We check the switch and time-zone settings first, then connect a test phone to PHONE OUT to see whether the 1812 is ringing out and where the signal stops.',
    },
    {
      symptom: 'There’s a hum or buzz on every call in the house',
      causes:
        'Indoor phone wire used underground, where it absorbs moisture; phone and power in the same conduit; a phone line or 16.5 VAC wire shorted to ground; or a substituted transformer.',
      whatWeDo:
        'We follow DoorKing’s noise-isolation sequence: bypass the unit, remove external devices, then separate the PHONE IN, PHONE OUT and power runs until the noise goes away.',
    },
    {
      symptom: 'The house phones ring, but nobody can talk to the gate',
      causes: 'Reversed wires on the PHONE IN or PHONE OUT terminals, or the demarcation wiring to the bypass switch done backwards.',
      whatWeDo: 'We test with a phone on PHONE OUT, correct the polarity and wiring order, and confirm two-way audio from every handset.',
    },
    {
      symptom: 'Nothing works and a small LED marked OV is lit',
      causes: 'A 24 VAC supply, often a gate operator’s accessory output, connected to an 1812 Plus or Access Plus.',
      whatWeDo:
        'We disconnect power immediately, fit the correct 16.5 VAC transformer, and test the board. If the board has been damaged, we tell you before quoting a replacement.',
    },
    {
      symptom: 'Pressing the number on the phone doesn’t open the gate',
      causes:
        'The tone-open number was reprogrammed, the phone sends short pulses instead of steady tones, a relay was left on hold from a previous command, or the relay is working and the fault is in the gate operator or wiring.',
      whatWeDo:
        'We use the homeowner-phone relay check, which reports by beeps whether either relay is latched, and then fire the relay directly to split the 1812 from the gate operator.',
    },
    {
      symptom: 'Keypad access codes stopped working',
      causes:
        'A code is limited to a time zone that is now active, a code was stored as a hold-open code instead of a momentary one, or the keypad ribbon cable came loose.',
      whatWeDo: 'We review how the codes are programmed on each relay, correct the time zones, and reseat or replace the keypad.',
    },
  ],

  components: [
    {
      part: 'Main control board (1871-010 Classic, 1971-010 Plus)',
      whatItDoes: 'Handles ringing, two-way voice, the two relays, codes and time zones.',
      failureSigns: 'OV LED lit, no response with correct power, or relays that won’t switch. Surge damage is common.',
      verdict: 'replace-part',
    },
    {
      part: 'Interface board and phone-line-in-use LED',
      whatItDoes: 'Connects the board to the home line. A yellow LED shows when the phone line is in use.',
      failureSigns: 'LED stays on with no call in progress, or calls never seize the line.',
      verdict: 'repair',
    },
    {
      part: 'Bypass switch',
      whatItDoes: 'Lets the house line bypass the 1812 completely during service or a fault.',
      failureSigns: 'Noise that stays when the switch is in BYPASS, or a switch left in BYPASS by mistake.',
      verdict: 'replace-part',
    },
    {
      part: 'Keypad and PUSH TO CALL button',
      whatItDoes: 'Visitor call button, code entry and on-site programming.',
      failureSigns: 'Dead or sticking keys, or a button that doesn’t start a call.',
      verdict: 'replace-part',
    },
    {
      part: 'Speaker and microphone',
      whatItDoes: 'Two-way voice at the gate, with speaker volume and mic gain adjustments on the board.',
      failureSigns: 'Weak or distorted audio, or feedback when volume is set too high.',
      verdict: 'adjust',
    },
    {
      part: 'Transformer and backup battery',
      whatItDoes: 'Supply 16.5 VAC (Plus/AP) or 24 VAC (Classic). An optional 12 V 0.8 Ah battery carries the unit through outages.',
      failureSigns: 'Wrong transformer fitted, voltage drop on long runs, or a dead battery.',
      verdict: 'service',
    },
    {
      part: 'Phone wiring, ground and phone-line surge suppressor',
      whatItDoes: 'Direct-burial twisted pair, a 12 AWG ground and a suppressor within 3 ft of the ground point.',
      failureSigns: 'Hum after rain, or board damage after storms.',
      verdict: 'service',
    },
  ],

  repairOrReplace: {
    summary:
      'An 1812 is a simple, repairable box, and most faults are wiring, programming or line changes rather than failed electronics. We repair it when the board is healthy or a single part has failed. The real reason to change it is a home that no longer has a phone line to put it in series with. Even then, DoorKing lists cellular and video upgrade kits that reuse the location.',
    repair: [
      'Noise, no ringing or one-way audio caused by wiring, polarity or the bypass switch.',
      'A failed keypad, speaker, button or battery.',
      'Codes or time zones that have become disorganized after an outage.',
      'A board damaged by the wrong transformer, where the rest of the unit is sound.',
    ],
    replace: [
      'The home has dropped its landline completely. DoorKing’s 1800-081 cellular kit is listed for the 1812 and removes the dependence on a phone line.',
      'You want video and phone-app control. DoorKing sells 2112-581 and 2112-582 kits to convert an 1812 to its 2112 video entry system, which needs an internet or cellular connection and a subscription and has no expansion capability.',
      'You need card readers or more entry points. The 1812-074 kit converts older units to Access Plus.',
    ],
  },

  warranty: {
    manufacturer:
      'DoorKing’s published 2-Year Limited Warranty lists the 1812 among its telephone entry models: two years from purchase by the original customer, against defects in material and workmanship.',
    notes: [
      'DoorKing’s 1812 Plus manual states that powering the unit from 24 V causes damage not covered under warranty.',
      'Lightning, power surge and flood damage are excluded, as is improper installation or connection to the wrong voltage.',
      'The warranty covers bench repair at DoorKing only. Removal, reinstallation and on-site labor are not covered.',
      'Batteries and external transformers are treated as maintenance items.',
    ],
  },

  dfw: [
    {
      heading: 'Homes dropping their landline',
      body: [
        'An 1812 needs a working phone line to ring the house. Across the Metroplex, homeowners have moved to fiber, cable voice or mobile-only service, and carriers have been retiring copper. When that happens the 1812 is often left wired to a line that no longer exists. We find this is the most common reason an 1812 that “worked for years” suddenly stopped ringing.',
      ],
    },
    {
      heading: 'Long driveways, clay soil and wet conduit',
      body: [
        'Estate driveways put the 1812 hundreds of feet from the house, and DoorKing’s run table limits 24 AWG phone wire to 800 feet. North Texas clay swells and shrinks with rain and drought, which cracks conduit joints and lets water reach indoor-rated wire. The result is hum that comes and goes with the weather, which DoorKing’s manual attributes to phone wire that absorbs moisture.',
      ],
    },
    {
      heading: 'Storm surge on a single copper pair',
      body: [
        'The 1812 is connected to the telephone network and the house, so a spring lightning strike can reach it through the line as well as the power run. DoorKing recommends its 1877-010 phone-line suppressor and a proper ground within 10 feet, and notes that a gooseneck post set in concrete doesn’t count. We add both when they are missing.',
      ],
    },
  ],

  process: [
    {
      step: 'Identify the version and power supply',
      body: 'We confirm Classic, Plus or Access Plus from the label and board, and measure the transformer output before anything is connected.',
    },
    {
      step: 'Test the line through the bypass switch',
      body: 'We switch to BYPASS and test the house phones, then put the 1812 back in the circuit and test PHONE IN and PHONE OUT separately with a test set.',
    },
    {
      step: 'Check relays, codes and time zones',
      body: 'We check relay status from a house phone, fire each relay directly, and review codes, call forwarding and do-not-disturb settings.',
    },
    {
      step: 'Quote, repair and record the programming',
      body: 'We quote before working, repair or replace only what has failed, and fill in DoorKing’s programming log so your codes and settings are on paper.',
    },
  ],

  faqs: [
    {
      q: 'What’s the difference between an 1812 Classic and an 1812 Plus?',
      a: 'The Classic dials three phone numbers, has an analog voice circuit and uses a 24 VAC transformer. The Plus stores 27 numbers, has HD digital voice and must run on 16.5 VAC. Their boards are not interchangeable.',
    },
    {
      q: 'We cancelled our home landline. Can the 1812 still work?',
      a: 'Not as originally wired, because it rings the house through that line. DoorKing lists its 1800-081 cellular kit for the 1812, and a 2112 video conversion kit. We’ll explain which fits your gate.',
    },
    {
      q: 'Can the 1812 run off my gate opener’s power?',
      a: 'Not an 1812 Plus. DoorKing warns that 24 V supplies, such as a gate operator’s, damage the board and void the warranty on it. It needs its own 16.5 VAC transformer.',
    },
    {
      q: 'Why did the time zones stop working after a power outage?',
      a: 'The 1812 Plus clock holds for about 48 hours without power. After a longer outage the time and date need resetting, although codes and phone numbers are kept.',
    },
    {
      q: 'Is the 1812 under warranty?',
      a: 'DoorKing’s published warranty for the 1812 is two years from original purchase, for bench repair at DoorKing. It excludes lightning and surge damage and does not cover labor.',
    },
  ],

  relatedModels: ['doorking/1835-repair', 'doorking/6300-repair', 'doorking/9150-repair'],
  relatedServices: ['access-control-repair', 'electric-gate-repair', 'automatic-gate-repair'],

  sources: [
    SRC_RG_ENTRY,
    {
      label: 'DoorKing 1812 Plus Installation/Owner’s Manual, 1812-161-W-6-18 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2018/06/1812-161-W-6-18_Plus.pdf',
    },
    {
      label: 'DoorKing 1812 Access Plus Installation/Owner’s Manual, 1812-162-D-6-19 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2020/03/1812-162-D-6-19_Access_Plus_0.pdf',
    },
    {
      label: 'DoorKing 1812 Classic Owner’s Manual, 1812-065-E-3-20 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2020/03/1812-065-E-3-20_Classic.pdf',
    },
    SRC_CELLULAR,
    SRC_WARRANTY_2YR,
  ],
  toConfirm: [
    'How often Shield sees the 1812 in DFW versus the 1802/1808/1810 panels. The page assumes the 1812 is a common residential call box.',
    'Access Plus board part number: the reference guide lists 1970-010 for the 1802/1808/1810/1812/1838 AP family; not stated on the page to avoid confusion with the Plus board diagram.',
    'Whether 1800-081 cellular retrofits on an 1812 Plus (as opposed to 1812 AP) behave identically in practice; DoorKing’s cutsheet lists both.',
    'Classic figures (3 phone numbers, 24 VAC) come from the reference guide table, whose PDF columns extracted out of alignment; a technician should confirm against the Classic manual.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 1601 parking barrier gate operator
// ─────────────────────────────────────────────────────────────────────────────

const dk1601: ModelPage = {
  slug: '1601-repair',
  brandSlug: 'doorking',
  model: '1601',
  aliases: ['1601-380', '1601-381', '1601-480', '1601-481'],
  descriptor: 'high-usage single-lane parking barrier gate operator',
  gateType: 'barrier',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Listed in DoorKing’s January 2026 vehicular reference guide in white (1601-380/-381) and gray (1601-480/-481) housings; the -381 and -481 include the Convenience Open option. Current manual 1601-065-M-7-26 covers board 1601-010 Revision AK or higher.',

  title: 'DoorKing 1601 Barrier Gate Repair | Dallas–Fort Worth',
  metaDescription:
    'DoorKing 1601 barrier arm stuck up, not lowering or broken off? We repair 1601 parking gate operators, arms and loops across Dallas–Fort Worth. Call 24/7.',
  h1: 'DoorKing 1601 Repair for Parking Barrier Gates',
  heroIntro:
    'We repair DoorKing 1601 barrier gate operators at apartment garages, gated communities and commercial parking lanes across Dallas–Fort Worth. The call we get most is an arm stuck in the up position, which on a 1601 is usually a stuck input or loop, not a failed motor.',
  heroPoints: [
    'We read the 1601’s input, loop and limit LEDs to find what is holding the arm up.',
    'We megohm-test the up and down loops to DoorKing’s figures instead of just swapping detectors.',
    'We check the gearbox oil, belts and arm hub, and replace broken or breakaway arms with the correct kit.',
  ],

  identify: {
    body: [
      'The 1601 is a tall, square galvanized steel cabinet, just over 41 inches high with a footprint of about 15 by 15 inches. An arm hub on one side carries the barrier arm, and a lockable access door is on the side facing away from the traffic lane. DoorKing sells it in a white housing (1601-380 and -381) or a gray housing (1601-480 and -481). It can be mounted on either side of the lane.',
      'Arm type helps identify it. A 1601 can carry a 14 ft octagonal aluminum arm, which can have red and green LED lighting and a built-in reverse edge, a 14 ft round aluminum or wood arm, or a 12 ft plastic arm. Folding arms are limited to 12 ft. The control board inside is the 1601-010, which DoorKing also uses in the heavier 1602 and the 1603 spike barrier.',
    ],
    lookFor: [
      'Tall square cabinet about 41 in high, white or gray',
      'Arm hub with a round hub cover on one side of the cabinet',
      'Access door on the side away from the traffic lane',
      'Octagonal, round, wood or plastic arm up to 14 ft (12 ft if folding)',
      'Control board marked 1601-010 with UP LOOP and DOWN LOOP ports',
      'On -381/-481 units, an AUTO rocker switch for the Convenience Open battery system',
    ],
  },

  overview: [
    {
      heading: 'A worm gearbox that turns in one direction',
      body: [
        'DoorKing drives the 1601 with a 1/2 HP continuous-duty motor and belts into a 60:1 worm gear reduction running in an oil bath. The gearbox rotates a full 360 degrees before the motor changes direction, which spreads wear across the whole gear set and raises the arm 90 degrees in about 2.5 seconds. The reference guide rates it for UL 325 Classes II, III and IV.',
        'That design is why oil level matters. DoorKing specifies Mobil SHC-629 synthetic gear oil and says the gearbox is full when oil covers the inspection window, and not to fill it completely. Belts, linkages and the arm hub set screw are on its six- and twelve-month checks.',
      ],
    },
    {
      heading: 'Magnetic limits and the model switch',
      body: [
        'Up and down positions come from magnetic limit sensors with their own LEDs. In a normal installation the operator is preset to swing 90 degrees and needs no adjustment. If the arm needs to travel less than 90 degrees, a DIP switch changes the gearbox from 360 to 180 degrees of rotation and the magnet assemblies are moved.',
        'The same board runs the 1601, 1602 and 1603, so DoorKing states that SW 2, switch 1 must be set for the model installed. A replacement board set for the wrong model is one reason a newly repaired barrier moves the arm incorrectly.',
      ],
    },
    {
      heading: 'Loops decide when the arm comes down',
      body: [
        'A 1601 has two plug-in loop detector ports: an up loop and a down loop. It has an up-input memory buffer so several cars can be counted through, and a down memory option. Any input LED stuck on, any loop detector LED stuck on, or a shorted control wire holds the arm up. DoorKing’s diagnostics start by pulling the loop detectors out: if the fault continues, the loops aren’t the cause.',
        'For the loops themselves, DoorKing gives firm figures. Loop wire should read 100 megohms or more to ground and should be replaced below 50. Lead-in wire needs at least six twists per foot, and all connections must be soldered. A detector that never triggers should show zero ohms of continuity on its loop.',
      ],
    },
    {
      heading: 'Convenience Open, breakaway arms and pedestrian protection',
      body: [
        'The 1601-381 and -481 include Convenience Open: a separate 1473-010 board, a DC motor and two 12 V 3.0 Ah batteries that raise the arm once when AC power fails. DoorKing is clear that it is not a backup that keeps the barrier cycling. It needs monthly testing, and the batteries should be replaced about every two years. Continuous operation in an outage needs DoorKing’s Model 1000 inverter.',
        'Breakaway arm hardware, for aluminum arms only, lets the arm swing out of the way when a car doesn’t stop, and it resets by snapping back into place. DoorKing’s Pedestrian Protection System reverses the arm if a person is detected, but it requires a 9411 loop detector and a photo beam.',
      ],
    },
  ],

  specs: [
    { label: 'Motor', value: '1/2 HP, continuous duty AC' },
    { label: 'Arm travel', value: '90° in about 2.5 seconds' },
    { label: 'UL 325 class', value: 'II, III, IV' },
    { label: 'Maximum arm', value: '14 ft octagonal aluminum, round aluminum or wood; 12 ft plastic; 12 ft with fold option' },
    { label: 'Reduction', value: '60:1 worm gear in continuous oil bath; 360° gearbox rotation' },
    { label: 'Voltage', value: '115 VAC; 208/230/460/575 VAC with high voltage kit 2600-266' },
    { label: 'Loop ports', value: '2 plug-in (up loop, down loop), DoorKing detectors only' },
    { label: 'Housing', value: 'G90 galvanized steel; white (1601-38x) or gray (1601-48x)' },
    { label: 'Convenience Open', value: '1601-381/-481: raises arm once on AC failure, two 12 V 3.0 Ah batteries' },
    { label: 'Environmental', value: '10°F to 140°F (cutsheet)' },
    { label: 'Control board', value: '1601-010 (shared with 1602 and 1603)' },
  ],

  symptoms: [
    {
      symptom: 'The arm went up and won’t come down',
      causes:
        'An input LED stuck on from a card reader, keypad or entry panel, a loop detector held on, a shorted control wire, or auto-close and close-input settings that don’t match how the lane is wired.',
      whatWeDo:
        'We read the input and loop LEDs, pull the loop detectors to rule out the loops, and disconnect keying devices one at a time until the stuck one is found.',
    },
    {
      symptom: 'The arm comes down on cars, or doesn’t count a line of cars through',
      causes: 'A down loop that isn’t detecting, low detector sensitivity, a broken loop wire, or the up-input memory buffer switched off.',
      whatWeDo: 'We check loop continuity and insulation to DoorKing’s figures, set sensitivity, and review the lane’s memory buffer settings.',
    },
    {
      symptom: 'The operator won’t run and the power LED is on',
      causes: 'A tripped motor reset (on the bottom of the 1/2 HP motor), a failed motor or capacitor, or a board not responding to inputs.',
      whatWeDo: 'We check the reset, jumper the open input, and apply power directly to the motor windings to separate motor from board.',
    },
    {
      symptom: 'A car hit the arm and now it hangs crooked',
      causes: 'A bent arm, a sheared or loose hub, breakaway hardware knocked out of place, or a damaged hub set screw or linkage.',
      whatWeDo: 'We reseat or replace the breakaway hardware, inspect the hub and linkages, and fit a correct replacement arm with warning decals on both sides.',
    },
    {
      symptom: 'The power went out and the arm didn’t go up',
      causes: 'The Convenience Open batteries are flat or old, the back-up toggle is off, the 1473-010 board settings are wrong, or the unit doesn’t have the option at all.',
      whatWeDo: 'We test battery voltage and the back-up board, replace batteries, and explain the difference between Convenience Open and full inverter backup.',
    },
    {
      symptom: 'The arm works some days and not others',
      causes: 'Accessories drawing more than the 250 mA available at main terminal 5, a weak ground loop that changes with rain, or a failing detector.',
      whatWeDo: 'We measure accessory draw, megohm-test loops, and move accessories to a separate supply if needed.',
    },
  ],

  components: [
    {
      part: '1601-010 control board',
      whatItDoes: 'Handles inputs, magnetic limits, loop ports, memory buffer, reverse sensitivity and the model selection switch.',
      failureSigns: 'Input LEDs that won’t light when jumpered, or a motor that runs directly but not from the board.',
      verdict: 'replace-part',
    },
    {
      part: 'Worm gearbox and oil',
      whatItDoes: '60:1 reduction to the arm shaft in an oil bath.',
      failureSigns: 'Low oil at the inspection window, noise, leakage, or play at the arm hub.',
      verdict: 'service',
    },
    {
      part: 'Drive belts and pulleys',
      whatItDoes: 'Carry motor power to the gearbox. On manual-release models, the motor pulley takes the crank tool.',
      failureSigns: 'Glazing, slack, squeal, or a motor turning with no arm movement.',
      verdict: 'replace-part',
    },
    {
      part: 'Magnetic limit sensors and magnet assemblies',
      whatItDoes: 'Set the up and down positions.',
      failureSigns: 'Arm overshooting or stopping short, or a limit LED that never lights.',
      verdict: 'adjust',
    },
    {
      part: 'Barrier arm, hub and breakaway hardware',
      whatItDoes: 'Blocks the lane and gives way on impact if breakaway is fitted.',
      failureSigns: 'Bent or cracked arm, loose hub bolts, or breakaway joint that won’t hold.',
      verdict: 'replace-part',
    },
    {
      part: 'Up and down loops and plug-in detectors',
      whatItDoes: 'Detect vehicles to raise, hold and lower the arm.',
      failureSigns: 'Detector LED always on or never on, loop below 50 megohms to ground.',
      verdict: 'repair',
    },
    {
      part: 'Convenience Open board and batteries',
      whatItDoes: 'Raise the arm once on AC power failure.',
      failureSigns: 'Arm stays down in an outage, or batteries swollen, leaking or over two years old.',
      verdict: 'service',
    },
    {
      part: 'Motor and capacitor',
      whatItDoes: '1/2 HP continuous-duty AC drive, with a reset button on the bottom of the motor.',
      failureSigns: 'Hums, trips its reset repeatedly, or won’t run on a direct test.',
      verdict: 'replace-part',
    },
  ],

  repairOrReplace: {
    summary:
      'The 1601 is a current DoorKing barrier with a five-year operator warranty, a shared board, and published arm and parts kits. Most of its faults are inputs, loops, arms and batteries, which are all repairable. A new operator is only worth discussing when the lane needs more than a single 14 ft arm can handle, or when the cabinet and gearbox have been destroyed by an impact.',
    repair: [
      'Arm stuck up from a stuck input, a detector or a loop.',
      'A broken or bent arm, or breakaway hardware that needs resetting.',
      'Low gearbox oil, worn belts, or a limit that needs adjusting.',
      'Flat Convenience Open batteries or a failed back-up board.',
    ],
    replace: [
      'The lane is wider than a 14 ft arm can cover. DoorKing’s 1602 carries longer three-piece arms with a 1 HP motor.',
      'The site needs spikes or higher security at the barrier. DoorKing’s 1603 links spikes to the arm.',
      'A vehicle has knocked the cabinet off its pad and damaged the gearbox housing.',
    ],
  },

  warranty: {
    manufacturer:
      'DoorKing’s 5-Year Limited Warranty for gate operators lists the 1601 operator and the 1601 control board: five years from purchase by the original customer.',
    notes: [
      'Barrier gate operator arms, drive belts, fuses and batteries are excluded as wear and maintenance items, so a broken arm isn’t a warranty claim.',
      'The warranty is void if the operator wasn’t installed by an experienced gate operator technician or installation procedures visibly weren’t followed.',
      'Lightning and surge damage are excluded.',
      'Bench repair at DoorKing only. On-site labor is excluded.',
    ],
  },

  dfw: [
    {
      heading: 'Heat, humidity and the batteries inside',
      body: [
        'DoorKing’s manual says high temperatures shorten battery life, and it sells a 1601 fan kit specifically for hot, humid environments. A white or gray steel cabinet standing in an open parking lane in a DFW summer gets far hotter inside than the air around it. That’s why Convenience Open batteries here often fail well before DoorKing’s two-year average, and the failure is only discovered in the next outage.',
      ],
    },
    {
      heading: 'Saw-cut loops in moving pavement',
      body: [
        'A 1601 depends on loops cut into the lane. North Texas clay moves parking slabs and garage ramps, which cracks sealant and pulls loop wire in the saw cut. Water reaching the wire lowers its resistance to ground. DoorKing’s own threshold for replacing loop wire is below 50 megohms, and an arm that stays up after rain is a typical sign.',
      ],
    },
    {
      heading: 'Busy apartment and commercial lanes',
      body: [
        'Metroplex apartment garages and office lots cycle a barrier all day. The 1601’s 360-degree gearbox is designed to spread that wear, but belts, the hub and arms still take the beating. Wind is a factor too: DoorKing warns against turning up reverse sensitivity to fight weather, and sells a high-wind bridge support kit for arms instead.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the LEDs before touching anything',
      body: 'We note the input, loop and limit LEDs and the arm position, which tell us whether something is holding the arm up.',
    },
    {
      step: 'Split operator, loops and keying devices',
      body: 'Following DoorKing’s diagnostics, we pull the detectors, disconnect external inputs and jumper the open input to find which of the three is at fault.',
    },
    {
      step: 'Check the mechanics',
      body: 'We check gearbox oil at the inspection window, belts, linkages, hub bolts, the arm and breakaway hardware, and the model switch on the board.',
    },
    {
      step: 'Repair, then test the lane',
      body: 'After quoting and repairing, we test the full lane: up and down loops, memory buffer, reverse sensitivity, Convenience Open if fitted, and any pedestrian protection.',
    },
  ],

  faqs: [
    {
      q: 'Why is my DoorKing 1601 arm stuck in the up position?',
      a: 'Something is telling it to stay up. That is usually a stuck input from a card reader or keypad, a loop detector held on, or a shorted wire. The LEDs on the 1601-010 board show which one.',
    },
    {
      q: 'How do I raise the arm when the power is out?',
      a: 'Units with Convenience Open raise the arm once automatically. Manual-release models have a crank tool inside the access door. Models without either need the arm unbolted from the hub. Power must be off before you do any of this.',
    },
    {
      q: 'Is a broken arm covered by DoorKing’s warranty?',
      a: 'No. DoorKing’s five-year operator warranty specifically excludes barrier gate operator arms, along with belts, fuses and batteries.',
    },
    {
      q: 'What oil does the 1601 gearbox take?',
      a: 'DoorKing specifies Mobil SHC-629 synthetic gear oil, filled until it covers the inspection window, and not overfilled.',
    },
    {
      q: 'Can the 1601 keep working during an outage?',
      a: 'The Convenience Open option only raises the arm once. For continuous operation DoorKing points to its Model 1000 inverter backup system.',
    },
  ],

  relatedModels: ['doorking/9150-repair', 'doorking/6300-repair', 'doorking/1835-repair'],
  relatedServices: ['commercial-gate-repair', 'gate-motor-repair', 'access-control-repair', 'emergency-gate-repair'],

  sources: [
    SRC_RG_VEHICULAR,
    {
      label: 'DoorKing 1601/1602 Installation/Owner’s Manual, 1601-065-M-7-26 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2024/05/1601-065-M-7-26.pdf',
    },
    {
      label: 'DoorKing 1601 Traffic Control Barrier Gate Operator cutsheet, Rev 3/24 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2013/09/1601-cutsheet-Rev3-24.pdf',
    },
    SRC_WARRANTY_OPERATOR,
  ],
  toConfirm: [
    'Auto-close timer range conflicts: cutsheet says 1–23 seconds; manual 1601-065-M-7-26 says 3.5 to about 59 seconds. Omitted from page.',
    'Release method: the cutsheet says “Fail-Secure Mechanical Release”; the manual describes factory manual release with a crank tool on some units and arm unbolting on units without one. FAQ follows the manual.',
    'The hub cover color and “access door opposite the traffic lane” identification point comes from the manual diagram; confirm against units in the field.',
    'Whether Shield stocks 1601 arms, breakaway kits, belts and Mobil SHC-629.',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 6300 commercial swing gate operator
// ─────────────────────────────────────────────────────────────────────────────

const dk6300: ModelPage = {
  slug: '6300-repair',
  brandSlug: 'doorking',
  model: '6300',
  aliases: ['6300-380', '6300-381', '6300-384', '6300-385'],
  descriptor: 'continuous-duty articulated-arm swing gate operator for residential, commercial and industrial gates',
  gateType: 'swing',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Listed in DoorKing’s January 2026 vehicular reference guide in 1/2 HP (6300-380 primary, -381 secondary) and 1 HP (6300-384 primary, -385 secondary) versions; current manual 6300-065-E-9-24 covers circuit board 4502-018.',

  title: 'DoorKing 6300 Repair | Dallas–Fort Worth',
  metaDescription:
    'DoorKing 6300 swing gate alarming, reversing or stopping short? We repair 6300 operators on apartment, HOA and commercial gates across DFW. Call 24/7.',
  h1: 'DoorKing 6300 Repair for Commercial Swing Gates',
  heroIntro:
    'We repair DoorKing 6300 swing gate operators on apartment, HOA and commercial entrances across Dallas–Fort Worth. The fault we’re called for most often is a gate that reverses, sounds its alarm and then won’t respond, which on a 6300 usually starts with the gate, the clutch or a safety device rather than the board.',
  heroPoints: [
    'We disconnect the arm and swing the leaf by hand before touching the clutch or the 4502 board.',
    'We check the magnetic sensor gap and PULSE LEDs that the 6300 uses to learn its open and close positions.',
    'We test the monitored photo eyes and edges the 6300 needs in every entrapment area before it will run.',
  ],

  identify: {
    body: [
      'The 6300 is a pad- or post-mounted swing operator with a long, low polypropylene cover. The arm connects underneath rather than out the side: a crank arm on the operator shaft, an elbow joint and a connecting arm to a bracket on the gate. DoorKing lists the 6300 as 31 inches long and 16 inches wide. That makes it noticeably larger than its lighter sibling, the 6050/6100, which is about 23.6 by 13.5 inches.',
      'Open the locked switch cover and you’ll find an AC power toggle, an alarm reset button and an alarm siren. The label and model number are inside the cover, and the control board is marked 4502-018. On a pair of gates, one unit is the primary and the other is the secondary, connected by an interconnection cable.',
    ],
    lookFor: [
      'Long, low polypropylene cover on a concrete pad or steel post beside the gate hinge',
      'Arm that comes out from under the operator with an elbow joint and a joint cover',
      'Padlocked release pin on the crank arm',
      'Power switch, alarm reset button and siren behind a locked cover',
      'Circuit board marked 4502-018 with two plug-in loop detector ports',
      'Roughly 31 in long by 16 in wide, bigger than a 6050/6100',
    ],
  },

  overview: [
    {
      heading: 'Belt, worm gear and an articulating arm',
      body: [
        'DoorKing’s cutsheet describes a pulley and belt driving a worm gear reduction, turning a two-piece articulating arm. The arm geometry gives the gate a mechanical slow start and slow stop, with no slamming at either end. The 6300 swings a gate 90 degrees in about 16 seconds. It is rated continuous duty in both versions: the 1/2 HP for gates up to 700 lb and 18 ft, the 1 HP for gates up to 800 lb and 22 ft, across UL 325 Classes I to IV.',
        'In practice the drive belt, the worm gear and the bushings at the elbow and shaft are what wear. DoorKing’s maintenance schedule calls for Moly D grease at the main shaft grease fitting, and checks of the belt, arm set screws and bushings. A 6300 that knocks at the start of each cycle usually has worn arm bushings or a loose set screw, not a failing gearbox.',
      ],
    },
    {
      heading: 'It learns its limits every time power comes back',
      body: [
        'There are no limit switches to set. The open and closed positions are set by a physical stop flange on the elbow. After power is restored, the first open command runs the gate open and closed until the clutch slips briefly at each stop, and the board stores those positions. DoorKing’s manual notes the positions are kept until AC power is lost again.',
        'That means any outage is followed by a learning cycle. If the clutch is loose or the gate binds partway, the 6300 learns the wrong positions and then stops short or reverses. The PULSE LEDs on the board, one for each operator, must blink while the motor runs. If one doesn’t, DoorKing points to the magnetic sensor, which has to sit within 1/32 inch of its counter ring.',
      ],
    },
    {
      heading: 'Soft shutdown, hard shutdown and the alarm',
      body: [
        'The 6300 combines a slip clutch with a Type A inherent reverse sensor. One detected obstruction causes a soft shutdown: the gate reverses and ignores the input that was active until a new command arrives. Two obstructions before the gate reaches either end cause a hard shutdown. The siren sounds for five minutes, then chirps every five seconds, and the operator ignores everything until someone presses the reset button.',
        'A hard shutdown doesn’t erase the learned limits, but it does stop every resident from getting in. DoorKing’s instruction is to find out why it happened before resetting. On a 6300 the usual answers are a sagging leaf, a dry hinge, or a clutch tightened past DoorKing’s maximum of 40 lb of force.',
      ],
    },
    {
      heading: 'Safety inputs, dual gates and tamper protection',
      body: [
        'Under current UL 325 rules, the 6300 will not run unless a monitored photo eye or edge is connected in each entrapment area. A photo eye on auxiliary terminals 7 and 8 works in the closing direction only; an edge or beam on terminals 9 and 10 works in both directions. The monitored sensor LEDs report faults: steady on means the device is triggered, and flashing means its wiring is bad.',
        'On bi-parting gates, a DIP switch can start the secondary operator one to two seconds ahead of the primary so overlapping leaves or a magnetic lock close in the right order. With tamper protect switched on, the 6300 drives the gate closed if someone forces it open. If the operator reports to a DoorKing 1833, 1835, 1837 or 1838 through its Gate Tracker output, that forced entry is logged as a transaction.',
      ],
    },
  ],

  specs: [
    { label: 'Maximum gate (1/2 HP)', value: '700 lb, 18 ft' },
    { label: 'Maximum gate (1 HP)', value: '800 lb, 22 ft' },
    { label: 'Duty', value: 'Continuous' },
    { label: 'UL 325 class', value: 'I, II, III, IV' },
    { label: 'Opening time', value: 'About 16 seconds to 90° (cutsheet: 16–18 seconds)' },
    { label: 'Voltage', value: '115 VAC standard; 208/230/460/575 VAC with high voltage kit 2600-266' },
    { label: 'Drive', value: 'Pulley/belt driving worm gear reduction; two-piece articulating arm' },
    { label: 'Limits', value: 'Self-setting magnetic; relearned on the first open command after power-up' },
    { label: 'Clutch', value: 'Adjustable slip clutch, set to slip at no more than 40 lb (manual)' },
    { label: 'Control board', value: '4502-018' },
    { label: 'Mounting', value: 'Pad kit 2600-264 or post kit 2600-263' },
    { label: 'Standard', value: 'Conforms to ANSI/CAN/UL 325:2017 Ed. 7 (cutsheet Rev 6/20)' },
  ],

  symptoms: [
    {
      symptom: 'The alarm goes off for a few minutes, then chirps, and the gate won’t move',
      causes:
        'A hard shutdown after two obstructions in one cycle. The obstruction can be real, or it can be a binding hinge, a dragging leaf, or a clutch slipping under normal load.',
      whatWeDo:
        'We find the cause before resetting: hinges, leaf level and clutch slip with the arm connected and disconnected. Then we reset and cycle-test with a gate scale.',
    },
    {
      symptom: 'After a power outage the gate stops short or reverses partway',
      causes:
        'The learning cycle ran with a slipping clutch or a binding gate and stored the wrong positions, or the flange stop on the elbow is loose.',
      whatWeDo:
        'We correct the clutch and the gate, confirm the arms are in the correct closed position, and power-cycle so the 6300 relearns cleanly.',
    },
    {
      symptom: 'The gate opens a short distance, then reverses',
      causes: 'A slipping clutch, a binding leaf, the magnetic sensor out of position, or a PULSE LED that doesn’t blink.',
      whatWeDo: 'We watch the PULSE LEDs under load, reset the sensor gap to DoorKing’s 1/32 inch, and replace the sensor if it’s damaged.',
    },
    {
      symptom: 'The operator won’t run at all, even though the power LED is on',
      causes:
        'A monitored photo eye or edge is disconnected (its LED flashes) or triggered (steady), the UL 325 inputs aren’t enabled, or a keying input is stuck on.',
      whatWeDo: 'We read the monitored sensor LEDs, test each device, and jumper the open input to separate the operator from the access control.',
    },
    {
      symptom: 'On a pair of gates, only one leaf moves',
      causes: 'Interconnection cable damage, DIP switch settings for dual operation, a failed secondary motor or motor capacitor.',
      whatWeDo:
        'We verify the dual-gate switch settings, then apply power directly to the secondary motor terminals to test the motor in both directions.',
    },
    {
      symptom: 'The gate stays open and won’t auto-close',
      causes: 'An input LED stuck on from a keypad or entry system, a loop detector held on, a soft shutdown, or the auto-close timer switched off.',
      whatWeDo: 'We disconnect inputs one at a time until the stuck one is found, and megohm-test the loops.',
    },
    {
      symptom: 'The board goes dead on hot afternoons and comes back later',
      causes: 'An overheated transformer, which DoorKing lists as a cause of “power LED off”, or accessories drawing more than the board’s accessory outputs allow.',
      whatWeDo: 'We measure the accessory load, move power-hungry devices off the operator supply, and check for low supply voltage.',
    },
  ],

  components: [
    {
      part: '4502-018 control board',
      whatItDoes: 'Handles motor control, learned limits, UL 325 monitored inputs, loop ports, dual-gate timing and Gate Tracker data.',
      failureSigns: 'Input LEDs that won’t light when jumpered, or a motor that runs directly but not through the board.',
      verdict: 'replace-part',
    },
    {
      part: 'Magnetic sensor and counter ring',
      whatItDoes: 'Counts shaft rotation so the board knows where the gate is.',
      failureSigns: 'PULSE LED not blinking while running, or erratic stops and reversals.',
      verdict: 'adjust',
    },
    {
      part: 'Slip clutch',
      whatItDoes: 'Mechanical entrapment backup, and the reference the operator uses when learning its stops.',
      failureSigns: 'Slips under normal load, or doesn’t slip below 40 lb of force.',
      verdict: 'adjust',
    },
    {
      part: 'Drive belt and pulleys',
      whatItDoes: 'Carry motor power to the worm gear reduction.',
      failureSigns: 'Squeal, glazing, or motor running without the arm moving.',
      verdict: 'replace-part',
    },
    {
      part: 'Worm gear and main shaft',
      whatItDoes: 'Final reduction to the crank arm, greased through the main shaft fitting.',
      failureSigns: 'Grinding, play at the crank arm, or a dry fitting.',
      verdict: 'service',
    },
    {
      part: 'Articulating arm, elbow flange and bushings',
      whatItDoes: 'Swing the leaf and set the physical open and closed stops.',
      failureSigns: 'A knock at the start of travel, a loose set screw, or a bent arm after a vehicle strike.',
      verdict: 'repair',
    },
    {
      part: 'Motor and motor capacitor',
      whatItDoes: 'Continuous-duty AC drive, 1/2 or 1 HP.',
      failureSigns: 'Hums without turning, or runs in only one direction when powered directly.',
      verdict: 'replace-part',
    },
    {
      part: 'Alarm, reset switch and monitored photo eyes/edges',
      whatItDoes: 'UL 325 entrapment protection and hard-shutdown reset.',
      failureSigns: 'Flashing sensor LEDs, a siren that won’t silence, or an operator that won’t start.',
      verdict: 'service',
    },
  ],

  repairOrReplace: {
    summary:
      'A 6300 is a current product with a published parts list and a five-year manufacturer warranty on the operator and its 4502 board. Almost every fault on one is a gate, clutch, belt, sensor or safety-device problem, and a working 6300 that keeps alarming is rarely a reason to replace it. Replacement makes sense when the gate has outgrown the operator or the housing and gearing have been badly damaged.',
    repair: [
      'Alarm and hard-shutdown faults caused by the gate, the hinges or the clutch.',
      'Stopping short after an outage. The fix is correcting what it learned, not a new operator.',
      'A worn belt, a failed magnetic sensor, a motor capacitor or a single board.',
      'Missing or faulty monitored photo eyes or edges that stop it running.',
    ],
    replace: [
      'The leaf now exceeds the 1 HP rating of 800 lb or 22 ft, for example after a cladding or privacy-panel upgrade.',
      'A vehicle impact has bent the shaft or cracked the frame, beyond an arm replacement.',
      'The entrance needs to keep running through outages beyond what DoorKing’s optional inverter backup provides.',
    ],
  },

  warranty: {
    manufacturer:
      'DoorKing’s 5-Year Limited Warranty for gate operators lists the 6300 and the 4502 control board: five years from purchase by the original customer, for products made after March 31, 2005.',
    notes: [
      'Drive belts, clutch pads, fuses, batteries and external transformers are excluded as wear and maintenance items.',
      'DoorKing states the warranty is void if the operator wasn’t installed by an experienced gate operator technician or if recommended installation procedures visibly weren’t followed.',
      'Lightning and power-surge damage are excluded.',
      'The warranty covers bench repair at DoorKing. On-site service calls and labor are excluded.',
    ],
  },

  dfw: [
    {
      heading: 'Clay soil moves the pad and the hinge post',
      body: [
        'A 6300 depends on a fixed geometry between its pad, the hinge post and the gate bracket, because its limits come from a physical flange. North Texas expansive clay heaves and shrinks between wet springs and dry summers, which tilts pads and leans hinge posts. When that happens the gate starts binding at the end of travel, the clutch slips, and the operator alarms or learns short limits. We check level and post movement on every 6300 that has started behaving differently with the seasons.',
      ],
    },
    {
      heading: 'Heat inside a sun-baked cover',
      body: [
        'DoorKing’s troubleshooting table lists an overheated transformer as a reason the 6300 board loses power, and its cutsheet gives an environmental range topping out at 115°F. A dark pad-mounted cover in full afternoon sun in a DFW July can exceed that inside. A board that drops out in the heat and recovers by evening is a pattern we look for, along with accessory loads adding to the transformer’s heat.',
      ],
    },
    {
      heading: 'High-cycle apartment and HOA entrances',
      body: [
        'The 6300 is rated for continuous duty, but at a busy Metroplex apartment or HOA entrance the belt, bushings and arm joints wear on a cycle count, not a calendar. DoorKing’s schedule includes monthly entrapment and reverse tests and six- and twelve-month checks of the belt, arms and grease points. Entrances that skip those checks tend to end up with the arm-joint and clutch faults that bring hard shutdowns.',
      ],
    },
  ],

  process: [
    {
      step: 'Read the operator before resetting it',
      body: 'We note the alarm state, input LEDs, monitored sensor LEDs and PULSE LEDs, because they show why the 6300 stopped before a reset clears the evidence.',
    },
    {
      step: 'Disconnect the arm and test the gate',
      body: 'We release the arm, check that the leaf swings freely, and check hinges, level and post movement, all separately from the operator.',
    },
    {
      step: 'Test the drive and the electronics',
      body: 'We check clutch slip against DoorKing’s 40 lb limit, the belt, the sensor gap and the motor. We apply power directly to the motor where needed to separate a board fault from a motor fault.',
    },
    {
      step: 'Repair, relearn and safety-test',
      body: 'After quoting and repairing, we power-cycle so the 6300 relearns its positions, then test the inherent reverse, the alarm and every monitored device.',
    },
  ],

  faqs: [
    {
      q: 'Why does my DoorKing 6300 alarm and then chirp every five seconds?',
      a: 'It has gone into a hard shutdown after sensing two obstructions in one cycle. It stays shut down until the reset button is pressed. Find the cause first, which is often the gate or the clutch.',
    },
    {
      q: 'How do I open the gate by hand during an outage?',
      a: 'With power off, pull the crank arm out of line so the arms fold, then push the gate. There is also a padlocked release pin on the crank arm. Always make sure power is off first.',
    },
    {
      q: 'Do the limits need adjusting after a repair?',
      a: 'No. The 6300 has no limit switches. It relearns its stops on the first open command after power-up, provided the clutch holds and the gate moves freely.',
    },
    {
      q: 'Is a 6300 the same as a 6050 or 6100?',
      a: 'They look similar, but the 6300 is larger, heavier-rated (up to 800 lb and 22 ft) and available in higher voltages. The 6050 and 6100 are 115 VAC operators for gates up to 500 lb and 14 ft.',
    },
    {
      q: 'What warranty does DoorKing give on the 6300?',
      a: 'DoorKing publishes a five-year limited warranty covering the 6300 and its 4502 board. It excludes belts, clutch pads, fuses and surge damage, and covers bench repair only.',
    },
  ],

  relatedModels: ['doorking/9150-repair', 'doorking/1601-repair', 'doorking/1835-repair'],
  relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'automatic-gate-repair', 'emergency-gate-repair'],

  sources: [
    SRC_RG_VEHICULAR,
    {
      label: 'DoorKing 6300 Installation/Owner’s Manual, 6300-065-E-9-24 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2018/08/6300-065-E-9-24.pdf',
    },
    {
      label: 'DoorKing 6300 Vehicular Swing Gate Operator cutsheet, Rev 6/20 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2020/06/6300_Rev_6-20.pdf',
    },
    { label: 'DoorKing 6300 product page', url: 'https://www.doorking.com/gate-operators/6300-swing-gate/' },
    SRC_WARRANTY_OPERATOR,
  ],
  toConfirm: [
    'Cutsheet environmental range reads “10°F to 115°F (-12°C to 62°C)”; 62°C is about 144°F, so the Fahrenheit and Celsius figures disagree. Page cites 115°F; confirm with DoorKing before relying on it.',
    'Opening time: reference guide says about 16 s, cutsheet says 16–18 s. Both shown.',
    'Whether the DoorKing photos (doorking-01, -04, -05) show a 6300, a 6050/6100 or another model. Not attached because the model cannot be confirmed from alt text.',
    'Whether the dual swing gearbox rebuild case study was a 6300; not attached. On a 6300 the reduction is a belt-driven worm gear, so the job description should be checked against this unit.',
    'Parts Shield stocks for the 6300 (belts, 4502 board, magnetic sensor, capacitors).',
  ],
  indexable: true,
}

// ─────────────────────────────────────────────────────────────────────────────
// 9150 commercial / industrial slide gate operator
// ─────────────────────────────────────────────────────────────────────────────

const dk9150: ModelPage = {
  slug: '9150-repair',
  brandSlug: 'doorking',
  model: '9150',
  aliases: ['9150-380', '9150-384', '9150-385', '9150-386'],
  descriptor: 'continuous-duty chain-drive slide gate operator for commercial and industrial gates',
  gateType: 'slide',
  duty: 'commercial',
  status: 'current',
  statusNote:
    'Listed in DoorKing’s January 2026 vehicular reference guide with metal or polypropylene covers in 1/2 HP (9150-384, -386) and 1 HP (9150-380, -385); current manual 9150-065-C-9-24 covers circuit board 4602-018.',

  title: 'DoorKing 9150 Repair | Dallas–Fort Worth',
  metaDescription:
    'DoorKing 9150 slide gate stalling, reversing or locked in alarm? We repair 9150 operators, chain drives and clutches at DFW commercial gates. Call 24/7.',
  h1: 'DoorKing 9150 Repair for Slide Gate Operators',
  heroIntro:
    'We repair DoorKing 9150 slide gate operators at commercial lots, apartment entrances and industrial yards across Dallas–Fort Worth. On a 9150, a gate that starts, stalls and reverses is usually the chain, the track or the magnetic clutch, and we check those before the board.',
  heroPoints: [
    'We roll the gate by hand on its track before adjusting the 9150’s magnetic clutch.',
    'We set chain tension so the gate doesn’t stall, and confirm the gate has real physical stops at both ends.',
    'We test the solenoid lock and fail-safe release so the gate can be pushed open when the power is out.',
  ],

  identify: {
    body: [
      'The 9150 is a box-shaped slide operator that sits on a concrete pad or a steel post beside the gate opening, with either a steel or a polypropylene cover. A #40 chain runs out of the sides of the housing to brackets at each end of the gate, over idler wheels inside. You’ll usually see it in front of the gate, behind it to hide the chain, in the center on a post, or even mounted upside down on a ceiling in a parking structure.',
      'Inside, the board is marked 4602-018, and a locked cover protects the AC power switch and alarm reset button. The 1/2 HP versions are 9150-384 (metal cover) and 9150-386 (poly); the 1 HP versions are 9150-380 (metal) and 9150-385 (poly). The model label is inside the cover. The smaller 9050/9100 slide operators look similar but are rated for lighter gates.',
    ],
    lookFor: [
      'Rectangular slide operator on a pad or steel post, with a steel or poly cover',
      '#40 chain leaving both sides of the housing to brackets at the gate ends',
      'Circuit board marked 4602-018 with REVERSE LOOP and EXIT LOOP ports',
      'Power toggle with an ALARM RESET button above it behind a locked cover',
      'Key-operated release on units fitted with DoorKing’s fail-secure kit',
    ],
  },

  overview: [
    {
      heading: 'A magnetic clutch that also tells the board where the gate is',
      body: [
        'The 9150’s clutch is a magnetic spring assembly on the main shaft, adjusted with a hex bolt at the large pulley. Two magnetic sensors on the underside of the 4602 board watch that assembly to detect slip. DoorKing’s ideal setting moves the gate without slipping but slips and reverses if the gate hits an obstruction with no more than 75 lb of force.',
        'Because those sensors read a magnetic field, DoorKing warns against running high-voltage wires near them. It lists excess wiring over the pickups, or a gap greater than 1/8 inch to the protective cover, as causes of a gate that opens a short distance and reverses. The electronics box also has to be fully down and secured, and on a repaired 9150 that is an easy thing to miss.',
      ],
    },
    {
      heading: 'It finds its own stops every time it powers up',
      body: [
        'The 9150 has no limit switches to set. After power is restored, the first open command runs a series of gate cycles to find the physical stops at each end and remember them. DoorKing requires real physical stops in both the open and closed positions: end posts with gate end retainers, a wall, or chain stops. It also notes that chain stops alone don’t meet ASTM F2200.',
        'That makes the gate hardware part of the control system. A worn V-wheel, a guide roller that grabs, or a track that has settled changes the resistance the 9150 feels on its learning cycle. The result is stops in the wrong place or a gate that reverses on a normal run.',
      ],
    },
    {
      heading: 'Rated for heavy gates, but only if the chain is right',
      body: [
        'DoorKing rates the 1/2 HP 9150 for gates up to 1,000 lb and 30 ft, and the 1 HP for up to 1,500 lb and 45 ft, with dual 1 HP operators handling up to 90 ft of total gate. Both are continuous duty across UL 325 Classes I to IV, with two 115 VAC convenience outlets and plug-in ports for DoorKing loop detectors.',
        'The chain is where those ratings are lost in the field. DoorKing’s troubleshooting table lists an over-tight chain as a cause of stalling. On long gates mounted in front or on a center post, it recommends a chain tray for gates over 20 ft to carry the chain’s weight and stop it stretching. A sagging, stretched chain slaps and jumps the sprocket; a tight one loads the motor and trips the reverse.',
      ],
    },
    {
      heading: 'Fail-safe, fail-secure, and the emergency open',
      body: [
        'As shipped, the 9150 is fail-safe: when AC power is lost, its solenoid lock releases the clutch plate so anyone, including emergency crews, can push the gate by hand without keys. With power on, the solenoid only engages if the operator detects someone forcing the gate. DoorKing’s 2600-865 kit converts it to fail-secure, where the gate stays locked in an outage until the release is unlocked with a key, and DoorKing describes that as a Class III and IV option.',
        'A Fire Dept Open input opens the gate fully, sounds the alarm and puts the operator into a hard shutdown at the open limit. That surprises many managers when the fire department tests its access and the gate then stays open until someone presses reset.',
      ],
    },
  ],

  specs: [
    { label: 'Maximum gate (1/2 HP)', value: '1,000 lb, 30 ft' },
    { label: 'Maximum gate (1 HP)', value: '1,500 lb, 45 ft; dual operators up to 90 ft total' },
    { label: 'Duty', value: 'Continuous' },
    { label: 'UL 325 class', value: 'I, II, III, IV' },
    { label: 'Voltage', value: '115 VAC standard; 208/230/460/575 VAC with high voltage kit 2600-266' },
    { label: 'Drive', value: '20 ft #40 nickel-plated chain included; built-in magnetic clutch' },
    { label: 'Limits', value: 'Self-setting magnetic; relearned by gate cycles on the first open command after power-up' },
    { label: 'Clutch', value: 'Set to slip at no more than 75 lb (manual)' },
    { label: 'Manual release', value: 'Fail-safe standard; fail-secure with kit 2600-865' },
    { label: 'Features', value: 'Partial open / anti-tailgate, selectable stop/reverse, two 115 VAC outlets, two loop ports' },
    { label: 'Control board', value: '4602-018' },
    { label: 'Entrapment protection', value: 'Minimum two monitored external devices, one in each direction of travel' },
  ],

  symptoms: [
    {
      symptom: 'The gate starts moving, stalls, and goes back',
      causes:
        'The clutch slipping under normal load, the chain too tight, the gate binding on wheels or rollers, or the magnetic pickups too far from the cover or disturbed by nearby wiring.',
      whatWeDo:
        'We release the chain and roll the gate by hand end to end. Then we reset chain tension, the pickup gap and the clutch, and test the clutch against DoorKing’s 75 lb figure.',
    },
    {
      symptom: 'The alarm sounded and now the gate won’t respond',
      causes:
        'A hard shutdown after two inherent-sensor trips in a row, an edge trip followed by an inherent trip, or a Fire Dept Open activation.',
      whatWeDo: 'We find which event caused the shutdown before pressing reset, then check the gate and the device that triggered it.',
    },
    {
      symptom: 'After a power outage the gate stops in the wrong place',
      causes:
        'The learning cycle ran against a missing or moved physical stop, a loose gate end retainer, or a gate dragging on a settled track.',
      whatWeDo: 'We restore solid physical stops at both ends, correct the track and hardware, and power-cycle for a clean relearn.',
    },
    {
      symptom: 'The operator won’t run and a UL 325 LED is on or flashing',
      causes: 'One of the two required monitored photo eyes or edges is triggered (LED steady), disconnected or wired open (flashing), or blocked.',
      whatWeDo: 'We test each monitored device, realign photo eyes, repair the wiring, and confirm the UL 325 DIP switches match what is installed.',
    },
    {
      symptom: 'The chain slaps, jumps teeth or hangs low across the drive',
      causes: 'A stretched chain, missing chain tray on a long gate, worn idler wheels, or a loose gate bracket.',
      whatWeDo: 'We replace worn chain and idlers, re-tension, and add a chain tray where the gate length calls for one.',
    },
    {
      symptom: 'The gate can’t be pushed open during an outage',
      causes: 'A fail-secure kit fitted but the key lost, the solenoid lock stuck, or the fail-safe switch setting changed.',
      whatWeDo: 'We check which release is fitted and how it is set, free or repair the solenoid lock, and show staff how to release the gate safely.',
    },
    {
      symptom: 'The gate opens but won’t close',
      causes: 'A keying input or loop detector held on, a soft shutdown, or auto-close switched off.',
      whatWeDo: 'We read the input and loop LEDs, disconnect devices one by one, and megohm-test the reverse and exit loops.',
    },
  ],

  components: [
    {
      part: '4602-018 control board',
      whatItDoes: 'Handles motor control, learned stops, UL 325 monitored inputs, partial open, loop ports and alarm logic.',
      failureSigns: 'Inputs that won’t register when jumpered, or a motor that runs on a direct test but not from the board.',
      verdict: 'replace-part',
    },
    {
      part: 'Magnetic spring clutch assembly',
      whatItDoes: 'Slips on obstruction and provides the signal the board uses to detect slip.',
      failureSigns: 'Slips under normal load, or doesn’t slip within 75 lb.',
      verdict: 'adjust',
    },
    {
      part: 'Magnetic pickup sensors',
      whatItDoes: 'Read clutch and shaft movement from the underside of the board.',
      failureSigns: 'Short opens and reversals, or Magnetic Sensor LEDs not blinking while running.',
      verdict: 'adjust',
    },
    {
      part: '#40 chain, idler wheels and gate brackets',
      whatItDoes: 'Transfer drive from the operator to the gate.',
      failureSigns: 'Sag, stretch, rust, jumped teeth, or noisy idlers.',
      verdict: 'replace-part',
    },
    {
      part: 'Drive belt and pulleys',
      whatItDoes: 'Carry motor power to the main shaft.',
      failureSigns: 'Squeal, slip, or the motor turning without chain movement.',
      verdict: 'replace-part',
    },
    {
      part: 'Solenoid lock and clutch plate',
      whatItDoes: 'Handle fail-safe manual release and anti-force locking.',
      failureSigns: 'Gate won’t push open in an outage, or can be forced open under power.',
      verdict: 'repair',
    },
    {
      part: 'Motor and capacitor',
      whatItDoes: 'Continuous-duty 1/2 or 1 HP AC drive.',
      failureSigns: 'Hums, runs one way only on a direct test, or trips on heat.',
      verdict: 'replace-part',
    },
    {
      part: 'V-wheels, guide rollers, track and gate end retainers',
      whatItDoes: 'Carry and guide the gate and form its physical stops.',
      failureSigns: 'Flat-spotted wheels, grabbing rollers, a bent or settled track, or a missing retainer.',
      verdict: 'repair',
    },
  ],

  repairOrReplace: {
    summary:
      'The 9150 is one of DoorKing’s current commercial slide operators, covered by DoorKing’s five-year operator warranty, and most of its failures are wear parts or the gate itself. Repair is the normal answer. Replacing the operator only makes sense when the gate has grown beyond the 1 HP rating, the application has moved into DoorKing’s heavier 9200 or 9500 Series territory, or the housing and drive have been wrecked.',
    repair: [
      'Stall-and-reverse faults from clutch, chain tension, pickups or track.',
      'A stretched chain, worn idlers, belt or wheels.',
      'Alarm lockouts from a failed or misaligned monitored photo eye or edge.',
      'A single failed board, motor or capacitor on an otherwise sound operator.',
    ],
    replace: [
      'The gate now weighs more than 1,500 lb or exceeds 45 ft of travel for a single operator.',
      'The site needs maximum-security or very high-speed operation. DoorKing positions its 9200 and 9500 Series for that.',
      'A vehicle impact has damaged the frame and main shaft, not just the cover or brackets.',
    ],
  },

  warranty: {
    manufacturer:
      'DoorKing’s 5-Year Limited Warranty for gate operators lists the 9150 and the 4602 control board: five years from purchase by the original customer.',
    notes: [
      'Chain, drive belts, clutch pads, idler wheels, fuses and batteries are excluded as wear and maintenance items.',
      'DoorKing voids the warranty if the operator wasn’t installed by an experienced gate operator technician or recommended procedures visibly weren’t followed.',
      'Lightning and surge damage are excluded.',
      'Bench repair at DoorKing only. On-site labor is excluded.',
    ],
  },

  dfw: [
    {
      heading: 'Clay soil and slide gate tracks',
      body: [
        'A slide gate is only as straight as the concrete its track sits on. Expansive clay across the Metroplex lifts and drops track slabs and operator pads between wet and dry seasons, creating a low spot or a hump the gate has to climb. Because the 9150 relearns its stops and watches clutch slip on every cycle, those changes show up as reversals and wrong stops long before the gate visibly binds.',
      ],
    },
    {
      heading: 'Lightning on loops and long control runs',
      body: [
        'Commercial slide gates in DFW usually have reverse and exit loops cut into open pavement and control cable running back to a keypad or entry panel. Spring lightning induces surges into all of it. DoorKing recommends surge suppression for the 9150, and a loop detector stuck on, which holds the gate open, is a common after-storm call. We megohm-test the loops rather than just swapping detectors.',
      ],
    },
    {
      heading: 'Heat, sun and chain wear',
      body: [
        'A chain run exposed to Texas sun and dust loses lubrication and stretches faster, and the metal cover version gets very hot inside on summer afternoons. DoorKing’s maintenance schedule checks chain sag and tension and grease on wheels and rollers. We shorten that interval at busy entrances where the gate cycles all day.',
      ],
    },
  ],

  process: [
    {
      step: 'Record the shutdown state',
      body: 'We note the alarm condition and read the input, loop, UL 325 and magnetic sensor LEDs before any reset.',
    },
    {
      step: 'Take the gate out of the equation',
      body: 'We release the operator and roll the gate end to end, checking wheels, rollers, track level and the physical stops at both ends.',
    },
    {
      step: 'Set the drive',
      body: 'We tension or replace the chain, check the belt and idlers, set the pickup gap and adjust the clutch to DoorKing’s 75 lb limit.',
    },
    {
      step: 'Relearn and safety-test',
      body: 'After a quote and repair, we power-cycle for the automatic gate cycles, then test inherent reverse, each monitored device, the alarm, and the manual release.',
    },
  ],

  faqs: [
    {
      q: 'Why does my DoorKing 9150 open partway and then reverse?',
      a: 'Most often the clutch is slipping, the chain is too tight or the gate binds on its track. DoorKing also lists the magnetic pickups sitting too far from their cover or disturbed by nearby wires.',
    },
    {
      q: 'How do I open a 9150 gate in a power outage?',
      a: 'A standard fail-safe 9150 releases when power is off, so the gate can be pushed by hand once you’ve confirmed power is off. If a fail-secure kit is fitted, the release has to be unlocked with its key first.',
    },
    {
      q: 'The fire department tested their access and now the gate won’t close. Is it broken?',
      a: 'No. DoorKing designed the Fire Dept Open input to open the gate, sound the alarm and hold it in a hard shutdown. Pressing the reset button returns it to normal.',
    },
    {
      q: 'Does the 9150 need its limits set after a repair?',
      a: 'No. It runs its own learning cycles on the first open command after power-up, as long as the gate has solid physical stops at both ends.',
    },
    {
      q: 'What’s the difference between a 9150 and a 9100?',
      a: 'Both are DoorKing slide operators with magnetic limits. The 9150 is the heavier-rated model, up to 1,500 lb and 45 ft with a 1 HP motor.',
    },
  ],

  relatedModels: ['doorking/6300-repair', 'doorking/1601-repair', 'doorking/1835-repair'],
  relatedServices: ['gate-motor-repair', 'commercial-gate-repair', 'automatic-gate-repair', 'emergency-gate-repair'],

  sources: [
    SRC_RG_VEHICULAR,
    {
      label: 'DoorKing 9150 Installation/Owner’s Manual, 9150-065-C-9-24 (PDF)',
      url: 'https://www.doorking.com/wp-content/uploads/2018/08/9150-065-C-9-24.pdf',
    },
    SRC_WARRANTY_OPERATOR,
    { label: 'DoorKing slide gate operator tech support index', url: 'https://www.doorking.com/tech-support/slide-gate-operator/' },
  ],
  toConfirm: [
    'Whether the 9150 or the lighter 9050/9100 is the more common DoorKing slide operator on Shield’s DFW jobs; brands.ts lists 9100 and 9150.',
    'The 9100 comparison in the FAQ gives only the 9150 rating; 9100 ratings were not extracted and are deliberately not stated.',
    'Whether Shield stocks #40 chain, idlers, 4602 boards and clutch assemblies for the 9150.',
  ],
  indexable: true,
}

export const doorkingModels: ModelPage[] = [dk1835, dk1812, dk6300, dk9150, dk1601]
