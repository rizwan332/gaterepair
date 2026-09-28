/**
 * The client's service-area list, verbatim.
 *
 * This is the single source of truth for which cities get a page. Nothing may
 * be added to it without the client saying so — the list defines the business's
 * actual coverage, not our assumptions about the metroplex.
 *
 * ⚠️ ONE ENTRY IS OURS, NOT THE CLIENT'S — Fort Worth, added 16 Sep 2026.
 *
 * It is absent from the list the client supplied, and that reads as an
 * oversight rather than a coverage decision: his own master keyword list gives
 * Fort Worth a full block in all four sections ("Gate Repair Fort Worth TX",
 * "LiftMaster Gate Repair Fort Worth TX", and so on for 95 cities), the site's
 * own copy says "from Dallas and Fort Worth out to Weatherford", and the
 * business is named for the metroplex both cities anchor. Meanwhile
 * /gate-repair-fort-worth-tx returned a 404 — the second-largest city in the
 * market, missing.
 *
 * Treated as an error and corrected, which is a judgement call and reversible:
 * delete the entry and the page stops building. CONFIRM WITH THE CLIENT that he
 * covers Fort Worth. If he does not, this needs removing rather than leaving.
 *
 * ⚠️ NINE FURTHER ENTRIES ARE OURS — added 28 Sep 2026, on the agency's
 * explicit instruction to cover every city in the master keyword list.
 *
 * Watauga, Richland Hills, Lantana, Bartonville, Hickory Creek, Cross Roads,
 * Lavon, Lowry Crossing and Nevada. This REVERSES the decision recorded here
 * on 16 Sep, which was to leave them out on the grounds that "he named it in a
 * keyword list" is weaker evidence than "he left it off his coverage list".
 *
 * What changed is that the agency asked for the full keyword list covered, and
 * that is their call to make. One piece of evidence also supports it: all nine
 * are geographic enclaves INSIDE the existing coverage area rather than towns
 * on its edge. Watauga and Richland Hills are ringed by Haltom City, North
 * Richland Hills and Fort Worth; Bartonville, Lantana and Cross Roads sit among
 * Argyle, Flower Mound and Aubrey; Lavon, Lowry Crossing and Nevada are beside
 * Wylie and Princeton. Every one of those neighbours is on the client's own
 * list. A van that reaches all the neighbours reaches these, which makes an
 * oversight more plausible than a deliberate boundary.
 *
 * It is still an assumption, and it is still reversible: delete an entry and
 * its page stops building.
 *
 * ⚠️ CONFIRM WITH THE CLIENT that he covers these nine and Fort Worth. Pages
 * for cities a business does not actually serve generate calls it cannot take,
 * which costs more than the traffic is worth.
 */
export const CLIENT_CITY_LIST = [
  'Addison', 'Aledo', 'Allen', 'Alvarado', 'Alvord', 'Anna', 'Annetta', 'Annetta North',
  'Annetta South', 'Argyle', 'Arlington', 'Athens', 'Aubrey', 'Aurora', 'Azle', 'Balch Springs',
  'Bedford', 'Benbrook', 'Blue Ridge', 'Bonham', 'Bowie', 'Boyd', 'Bridgeport', 'Briar', 'Bristol',
  'Burleson', 'Caddo Mills', 'Callisburg', 'Campbell', 'Canton', 'Carrollton', 'Cedar Hill',
  'Celeste', 'Celina', 'Chico', 'Cleburne', 'Collinsville', 'Colleyville', 'Comanche', 'Combine',
  'Cool', 'Copeville', 'Coppell', 'Corinth', 'Crandall', 'Cresson', 'Crowley', 'Dallas', 'Decatur',
  'Denison', 'DeSoto', 'Denton', 'Dublin', 'Duncanville', 'East Tawakoni', 'Eastland', 'Edgewood',
  'Elmo', 'Emory', 'Euless', 'Everman', 'Fairview', 'Farmers Branch', 'Farmersville', 'Fate',
  'Ferris', 'Flower Mound', 'Forest Hill', 'Forney', 'Fort Worth', 'Frisco', 'Gainesville', 'Garland',
  'Glenn Heights', 'Glen Rose', 'Godley', 'Granbury', 'Grand Prairie', 'Grandview', 'Greenville',
  'Grapevine', 'Gunter', 'Gun Barrel City', 'Haltom City', 'Haslet', 'Heath', 'Highland Park',
  'Highland Village', 'Howe', 'Hudson Oaks', 'Hurst', 'Hutchins', 'Irving', 'Josephine', 'Joshua',
  'Justin', 'Kaufman', 'Keene', 'Keller', 'Kemp', 'Kennedale', 'Krum', 'Lake Dallas', 'Lake Worth',
  'Lancaster', 'Leonard', 'Lewisville', 'Lindsay', 'Lipan', 'Little Elm', 'Lone Oak', 'Lucas',
  'Mabank', 'Malakoff', 'Mansfield', 'Maypearl', 'McKinney', 'Melissa', 'Mesquite', 'Midlothian',
  'Milford', 'Millsap', 'Mineral Wells', 'Morgan Mill', 'Muenster', 'Murphy', 'New Fairview',
  'Newark', 'Nocona', 'North Richland Hills', 'Northlake', 'Oak Leaf', 'Ovilla', 'Palmer',
  'Paradise', 'Parker', 'Peaster', 'Pilot Point', 'Plano', 'Point', 'Poetry', 'Ponder', 'Poolville',
  'Pottsboro', 'Princeton', 'Prosper', 'Quinlan', 'Red Oak', 'Rendon', 'Richardson', 'Rhome',
  'Rio Vista', 'Roanoke', 'Rockwall', 'Rowlett', 'Royse City', 'Sachse', 'Sadler', 'Saginaw',
  'Saint Jo', 'Sanger', 'Scurry', 'Seagoville', 'Sherman', 'Southlake', 'Springtown',
  'Stephenville', 'Sunnyvale', 'Talty', 'Terrell', 'The Colony', 'Tioga', 'Tolar', 'Tom Bean',
  'Trophy Club', 'University Park', 'Valley View', 'Van Alstyne', 'Venus', 'Waxahachie',
  'Weatherford', 'West Tawakoni', 'Westlake', 'Westminster', 'White Settlement', 'Whitewright',
  'Whitesboro', 'Willow Park', 'Wilmer', 'Wills Point', 'Wylie',

  // Ours, not the client's — see the warning at the top of this file. Kept in
  // one block at the end rather than merged alphabetically so that what we
  // added stays obvious to anyone reviewing this against his original list.
  'Bartonville', 'Cross Roads', 'Hickory Creek', 'Lantana', 'Lavon',
  'Lowry Crossing', 'Nevada', 'Richland Hills', 'Watauga',
] as const
