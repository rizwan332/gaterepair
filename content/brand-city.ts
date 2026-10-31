/**
 * Copy for brand × city pages, served at /gate-repair-<city>-tx/<brand>.
 *
 * An entry here does not create a page. lib/brand-city.ts also requires the
 * city to be indexed and at least one verified job on that brand in that city
 * (BRAND-CITY-ARCHITECTURE.md §4), so this file can only describe work the job
 * records already prove. Everything below is drawn from those records.
 *
 * Requested by the client 31 Oct 2026. Pilot: every pair with a real job and
 * photos (ten). Add a pair here when its job exists, not before.
 */

export type BrandCityCopy = {
  /** Hero line under the H1. */
  intro: string
  /** What is different about this brand in this city, from the jobs. */
  local: string[]
  faqs: { q: string; a: string }[]
}

export const brandCityCopy: Record<string, BrandCityCopy> = {
  'dallas/liftmaster': {
    intro:
      'Five documented LiftMaster jobs in Dallas, from worn chains and a gate off its track to two new operator installs. What failed on each one, and what it took to fix.',
    local: [
      'Most of our LiftMaster work in Dallas is on sliding gates. Four of the five jobs below were slide operators, and on three of them the operator itself was fine: the chain had worn or rusted through, or rocks in the track had pushed a heavy gate off its wheels. We check the inexpensive parts first because that is usually where the fault is.',
      'Two of the five were new homeowners who inherited a gate nobody had maintained. One had a rusted chain on a LiftMaster that still worked. The other had a refurbished opener that never suited the gate, which we replaced with a LiftMaster CSL24UL. If you have just moved into a Dallas home with an automatic gate, a service visit now is usually a smaller job than the call after it fails.',
      'Backup batteries matter more than most owners expect. On the off-track job the 12V backup battery and its connection were badly corroded, so the gate would not have run through a power cut either way. It is worth having the batteries checked whenever the gate is serviced.',
    ],
    faqs: [
      {
        q: 'Do you repair LiftMaster gate openers in Dallas, or only install them?',
        a: 'Both. Three of the five Dallas jobs on this page were repairs on the existing LiftMaster operator: two chain replacements and a sliding gate put back on its track. We only fit a new operator when the old one is wrong for the gate or worn out, as on the two installs here.',
      },
      {
        q: 'My LiftMaster sliding gate came off its track. Do I need a new operator?',
        a: 'Usually not. On our Dallas off-track job the CSL24UL was working; rocks and debris in the track had forced the wheels off. We lifted the gate back onto the track, cleared it, replaced a corroded backup battery, reset the limits and tested the full travel. Do not try to run the gate while it is off the track.',
      },
      {
        q: 'Which LiftMaster models have you worked on in Dallas?',
        a: 'The jobs on this page include a CSL24UL sliding gate operator and an LA400 swing gate operator, plus chain work on other LiftMaster slide operators. We also repair the rest of the LiftMaster residential and commercial range; the LiftMaster page lists them.',
      },
      {
        q: 'Can you replace an old GTO or other brand opener with a LiftMaster?',
        a: 'Yes. On one Dallas job we removed an ageing GTO / PRO swing opener and fitted a LiftMaster LA400 with battery backup, a safety sensor, a wireless keypad and three remotes. The existing wrought-iron gate was sound, so it stayed.',
      },
      {
        q: 'How fast can you get to me in Dallas?',
        a: 'On the off-track call on this page we were on site about 20 minutes after the phone call. That depends on where the nearest technician is when you call, so we give you a real arrival window on the phone rather than a promise.',
      },
    ],
  },

  'frisco/liftmaster': {
    intro:
      'A documented LiftMaster CSL24UL install in Frisco, replacing a 24-year-old Eagle 2000 on a custom sliding gate. Why we fitted it, and why we did not tell the owner he had to.',
    local: [
      'Gary’s sliding gate in Frisco ran on an Eagle 2000 that was about 24 years old. Age alone is not a reason to replace an operator, and we said so: the real faults were the wheels and the chain, which had never been replaced and could have been fixed on the old unit.',
      'He chose a LiftMaster CSL24UL anyway, for what it adds rather than because the old one was condemned: battery backup, monitored safety sensors, a manual release and a manufacturer warranty. We replaced the chain and dealt with the wheels in the same visit, so the new operator is not pushing a gate with the old mechanical problems.',
      'That is how we approach LiftMaster work across Frisco’s newer neighborhoods and older custom homes alike: we tell you what is actually failing, then you decide whether repair or an upgrade makes sense.',
    ],
    faqs: [
      {
        q: 'Should I replace my old gate opener with a LiftMaster just because of its age?',
        a: 'Not on age alone. On this Frisco job the 24-year-old Eagle could have been kept with new wheels and a new chain. Upgrading made sense for the owner because he wanted battery backup, monitored safety and a warranty. We will tell you which applies to your gate.',
      },
      {
        q: 'What does a LiftMaster CSL24UL install in Frisco include?',
        a: 'On this job: removing the old operator, fitting the CSL24UL, a new chain, work on the gate wheels, safety sensors, battery backup, wiring, programming, limit adjustment and a full safety test before we left.',
      },
      {
        q: 'Do you also repair existing LiftMaster openers in Frisco?',
        a: 'Yes. Most LiftMaster calls are repairs, such as chains, boards, batteries, arms and sensors, not new installs. We only recommend a new operator when the old one is wrong for the gate or no longer worth repairing.',
      },
    ],
  },

  'university-park/liftmaster': {
    intro:
      'A documented LiftMaster LA400 repair in University Park: a swing gate unused for a year, back in service with a new arm on the existing operator.',
    local: [
      'This University Park owner had not used the swing gate for about twelve months and wanted it working again. Inspection found the bracket and the LA400 operator arm physically damaged. The operator itself was fine, so we replaced the arm and kept everything else.',
      'University Park’s older homes often have heavy wrought-iron swing gates on operators that have been in place for years. When a gate like that stops, the arm, bracket or a battery is far more often the problem than the operator, and that is where we look first.',
    ],
    faqs: [
      {
        q: 'My LiftMaster swing gate has not been used in months. Will it need a new opener?',
        a: 'Usually not. On this University Park job a year of disuse had left a damaged bracket and arm, and replacing the LA400 arm was enough. Batteries also go flat on an idle gate, so we check them too.',
      },
      {
        q: 'Do you carry LiftMaster LA400 parts?',
        a: 'We fitted a replacement LA400 arm on this job. Tell us your model when you call and we will confirm the part before we come out, so the repair can be done in one visit wherever possible.',
      },
      {
        q: 'Do you work on wrought-iron estate gates in University Park?',
        a: 'Yes. Heavy iron swing gates on LiftMaster and other operators are common here. We repair the operator side and the gate side, including arms, brackets, hinges and posts.',
      },
    ],
  },

  'richardson/liftmaster': {
    intro:
      'A documented LiftMaster repair in Richardson: a failed circuit board and two dead backup batteries on a sliding gate, fixed on a Sunday without replacing the operator.',
    local: [
      'A senior customer in Richardson called on a Sunday because his LiftMaster sliding gate was not working properly. The circuit board had come loose and failed, and because a failed board stops charging the backup batteries, both 12V batteries had died with it.',
      'We replaced the board and both batteries, reprogrammed and adjusted the system, added a wireless keypad and tested the gate. The rest of the operator was sound, so a full replacement was never needed. There was no service-call charge for the inspection, and the repair carries a two-year company warranty.',
    ],
    faqs: [
      {
        q: 'My LiftMaster sliding gate stopped and the batteries are dead. Is it just the batteries?',
        a: 'Not always. On this Richardson job the batteries were dead because the circuit board had failed and stopped charging them. Replacing only the batteries would have bought a few days. We test the charging side before fitting new ones.',
      },
      {
        q: 'Do you come out on Sundays in Richardson?',
        a: 'Yes. This repair was a Sunday call. We run seven days a week and give you a real arrival window when you phone.',
      },
      {
        q: 'Is a LiftMaster circuit board worth replacing, or should I buy a new opener?',
        a: 'On a sound operator a board is usually far cheaper than a new unit, as it was here. If the operator has other worn parts too, we price both options so you can compare.',
      },
    ],
  },

  'richardson/ramset': {
    intro:
      'A documented Ramset repair in Richardson: a sliding gate gearbox fault repaired in place, with one limit switch the only part replaced.',
    local: [
      'A Richardson customer had a gearbox problem on a Ramset sliding gate opener driving a wooden driveway gate. A gearbox fault often gets quoted as a new gearbox or a new operator. Here neither was needed: we repaired the existing gearbox and replaced one failed limit switch, and that was the whole job.',
      'Ramset operators are less common than LiftMaster in Richardson, and many companies will not touch them. We repair them, and we keep them running where the operator is sound.',
    ],
    faqs: [
      {
        q: 'Can a Ramset gearbox be repaired, or does it have to be replaced?',
        a: 'Often repaired. On this Richardson job we repaired the existing gearbox in place. Whether that is possible depends on what has worn inside, which we check before quoting.',
      },
      {
        q: 'Who repairs Ramset gate openers in Richardson?',
        a: 'We do. Ramset is a brand many gate companies avoid; we service the operators, gearboxes, limit switches and boards.',
      },
      {
        q: 'My Ramset sliding gate stops in the wrong place. What is wrong?',
        a: 'Most often a limit switch, as on this job where one had failed. A gate that overruns or stops short is usually a limit or its adjustment rather than the motor.',
      },
    ],
  },

  'richardson/viking': {
    intro:
      'A documented Viking refurbishment in Richardson: two other companies quoted over $6,000 to replace the opener. We rebuilt it for $3,100.',
    local: [
      'A Richardson customer came to us after two estimates from other companies, each recommending a complete Viking opener replacement for more than $6,000. Our inspection found a failed motor and a failed circuit board, plus a worn gearbox and limit switches. All of those are replaceable components.',
      'We replaced the board, both limit switches, and the motor with its gearbox, then serviced and tested the refurbished opener. The job came to $3,100 with a three-year warranty on the work. That is this job’s figure, not a price list, but it shows why a second opinion on a Viking is worth having before you replace it.',
    ],
    faqs: [
      {
        q: 'I was quoted a full Viking replacement. Can it be refurbished instead?',
        a: 'Often, yes. On this Richardson job the motor, board, gearbox and limit switches were all replaced as components, for about half of the replacement quotes. We tell you if your opener is past that point.',
      },
      {
        q: 'Do you have Viking parts?',
        a: 'Viking motors, boards, gearboxes and limit switches are all available as components. Give us your model when you call and we will confirm parts before the visit.',
      },
      {
        q: 'What warranty do you give on a Viking refurbishment?',
        a: 'This refurbishment carried a three-year warranty on the work described. We confirm the warranty in writing with your quote.',
      },
    ],
  },

  'fort-worth/us-automatic': {
    intro:
      'A documented US Automatic repair in Fort Worth: another company said replace the solar opener. We fixed the corroded board, the arm and the leaning gate instead.',
    local: [
      'A Fort Worth homeowner had been told by another company to replace their US Automatic solar swing gate opener. We found a corroded control board, an arm that needed repair and a gate that was leaning. None of those needed a new operator.',
      'We replaced the board, repaired the existing arm rather than replacing it, and adjusted the gate. Solar US Automatic operators are common on Fort Worth’s larger lots, and board corrosion is one of the faults we see on them most. It is a part, not a reason to replace the whole system.',
    ],
    faqs: [
      {
        q: 'Do you repair US Automatic solar gate openers in Fort Worth?',
        a: 'Yes. This job was a US Automatic Patriot solar swing opener. We repair the boards, arms, batteries and solar charging on them.',
      },
      {
        q: 'I was told my US Automatic opener needs replacing. Is that right?',
        a: 'Get it checked first. On this Fort Worth job the board, arm and gate alignment were the problems, and the operator stayed. We will tell you plainly if yours is beyond repair.',
      },
      {
        q: 'Why does my swing gate lean, and does it affect the opener?',
        a: 'Posts move in clay soil and hinges wear, and a leaning gate makes the operator and arm work harder. Adjusting the gate, as on this job, takes that strain off.',
      },
    ],
  },

  'prosper/us-automatic': {
    intro:
      'A documented US Automatic repair in Prosper: a swing gate that had not worked in a long time, brought back with a new battery and a new arm on the existing operator.',
    local: [
      'A Prosper homeowner’s US Automatic swing gate had been out of action for a long time. The battery was completely flat, so we fitted a new one first, because nothing else can be diagnosed on a dead operator.',
      'The arm was visibly bent. Rather than assume, we tested it under power to see if it could be kept. It could not, so we replaced the arm. The operator itself stayed in service and the gate runs smoothly again.',
    ],
    faqs: [
      {
        q: 'My US Automatic gate has been dead for months. Where do you start?',
        a: 'With the battery. On this Prosper job it had no charge at all, and a new battery was needed before anything else could be tested.',
      },
      {
        q: 'My gate arm is bent. Does it always need replacing?',
        a: 'Not always, so we test it under power first. On this job the bent arm did not run properly and was replaced. Sometimes a bent arm can be straightened or adjusted.',
      },
      {
        q: 'Do you service gates in the newer Prosper neighborhoods?',
        a: 'Yes, across Prosper including communities such as Windsong Ranch and Star Trail, on US Automatic, LiftMaster and other operators.',
      },
    ],
  },

  'coppell/eagle': {
    intro:
      'A documented Eagle 2000 repair in Coppell: a 26-year-old operator kept in service with new wheels, a heavy-duty chain and one limit switch.',
    local: [
      'A Coppell homeowner was thinking of replacing a 26-year-old Eagle 2000 sliding gate operator because of its age and the gate’s problems. The Eagle 2000 is no longer made, but this one was still a solid, serviceable unit.',
      'The real faults were in the gate hardware: worn wheels, a stretched chain and one failed limit switch. We replaced the wheels, fitted a heavy-duty #40 chain, replaced the limit switch, and adjusted and tested the travel. The operator stayed, for substantially less than a new system.',
    ],
    faqs: [
      {
        q: 'Can you still repair an Eagle 2000 even though it is discontinued?',
        a: 'Yes, where the operator is sound and the parts it needs are available. On this Coppell job the operator was fine and the work was on the wheels, chain and a limit switch.',
      },
      {
        q: 'My old sliding gate is noisy and slow. Is the opener failing?',
        a: 'Often it is the wheels and chain. Worn wheels and a stretched chain make any operator struggle. Replacing them is usually much cheaper than a new opener.',
      },
      {
        q: 'Why a #40 chain?',
        a: 'It is a heavier-duty chain than many original fits. We used it on this job so the gate has a stronger drive for years to come.',
      },
    ],
  },

  'mesquite/eagle': {
    intro:
      'A documented Eagle repair in Mesquite: the opener was three years old and fine. The sliding gate wheels were broken, so that is what we fixed.',
    local: [
      'A Mesquite customer had problems with a residential sliding gate on a three-year-old Eagle opener. Looking at the gate and the operator together showed the opener was working properly. The gate wheels were completely broken, and the chain needed shortening and tightening.',
      'We replaced the wheels, shortened and tightened the chain, adjusted the limit switch and tested the whole system. The Eagle opener stayed in service, because there was nothing wrong with it.',
    ],
    faqs: [
      {
        q: 'My Eagle sliding gate stopped working. Is the opener broken?',
        a: 'Check the gate before the opener. On this Mesquite job the three-year-old Eagle was fine and the wheels under the gate had broken.',
      },
      {
        q: 'How do I know if it is the wheels or the opener?',
        a: 'With the gate in manual release, push it by hand. If it drags, grinds or will not roll, the problem is mechanical: wheels, track or hinges. If it rolls freely, the operator side needs checking.',
      },
      {
        q: 'Do you repair Eagle gate openers in Mesquite?',
        a: 'Yes. We repair Eagle operators and the sliding gates they drive, including wheels, chain, limits and boards.',
      },
    ],
  },
}
