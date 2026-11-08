import type { Question } from '../types/content';

export const QUESTION_BANK: Question[] = [
  {
    id: "q01",
    moduleId: "00-introduction",
    topic: "Conditions for Geometrical Isomerism",
    difficulty: "easy",
    text: {
      en: "Which of the following compounds CANNOT exhibit geometrical isomerism?",
      bn: "নিচের কোন যৌগটি জ্যামিতিক সমাণুতা প্রদর্শন করতে পারে না?"
    },
    options: [
      { id: "a", text: { en: "But-2-ene", bn: "বিউট-২-ইন" } },
      { id: "b", text: { en: "Propene", bn: "প্রোপিন" } },
      { id: "c", text: { en: "1,2-Dichloroethene", bn: "১,২-ডাইক্লোরোইথিন" } },
      { id: "d", text: { en: "Pent-2-ene", bn: "পেন্ট-২-ইন" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "Propene (CH2=CH-CH3) has two identical hydrogen atoms on C1 (terminal alkene). Swapping them gives the same structure.",
      bn: "প্রোপিনের C1-এ দুটি অভিন্ন হাইড্রোজেন পরমাণু রয়েছে (প্রান্তীয় অ্যালকিন)। তাদের স্থান পরিবর্তন করলে একই গঠন পাওয়া যায়।"
    }
  },
  {
    id: "q02",
    moduleId: "00-introduction",
    topic: "Energy Barrier",
    difficulty: "moderate",
    text: {
      en: "Why is there restricted rotation around a carbon-carbon double bond at room temperature?",
      bn: "সাধারণ তাপমাত্রায় কার্বন-কার্বন দ্বিবন্ধনের চারপাশে মুক্ত ঘূর্ণন রুদ্ধ হয় কেন?"
    },
    options: [
      { id: "a", text: { en: "Sigma bond is too long", bn: "সিগমা বন্ধনটি অতিরিক্ত দীর্ঘ" } },
      { id: "b", text: { en: "Rotation requires breaking the sideways overlap of the pi-bond (~260 kJ/mol)", bn: "ঘূর্ণন ঘটাতে পাই-বন্ধনের পাশাপাশি অধিক্রমণ ভাঙতে হয় (~২৬০ কিজু/মোল)" } },
      { id: "c", text: { en: "Electrons are stationary", bn: "ইলেকট্রনগুলি স্থির থাকে" } },
      { id: "d", text: { en: "The molecule has zero kinetic energy", bn: "অণুটির গতিশক্তি শূন্য হয়" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "Rotating around a double bond breaks the parallel overlap of 2p orbitals, requiring ~260 kJ/mol of energy, which is not available from thermal energy at room temperature.",
      bn: "দ্বিবন্ধনের চারপাশে ঘোরাতে গেলে ২p অরবিটালের সমান্তরাল অধিক্রমণ ভেঙে যায়, যার জন্য প্রায় ২৬০ কিজু/মোল শক্তির প্রয়োজন যা সাধারণ তাপমাত্রায় পাওয়া যায় না।"
    }
  },
  {
    id: "q03",
    moduleId: "01-cis-trans",
    topic: "Cis-Trans Dipole Moment",
    difficulty: "easy",
    text: {
      en: "What is the net dipole moment of trans-1,2-dichloroethene?",
      bn: "ট্রান্স-১,২-ডাইক্লোরোইথিনের নিট ডাইপোল মোমেন্ট কত?"
    },
    options: [
      { id: "a", text: { en: "1.90 D", bn: "১.৯০ ডি" } },
      { id: "b", text: { en: "0.00 D", bn: "০.০০ ডি" } },
      { id: "c", text: { en: "3.40 D", bn: "৩.৪০ ডি" } },
      { id: "d", text: { en: "0.85 D", bn: "০.৮৫ ডি" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "In the trans isomer, the two polar C-Cl bond dipoles point in exactly opposite directions and cancel out completely (μ = 0 D).",
      bn: "ট্রান্স আইসোমারে দুটি পোলার C-Cl বন্ধন ডাইপোল ঠিক বিপরীতমুখী হওয়ায় সম্পূর্ণরূপে প্রশমিত হয়ে যায় (μ = ০ ডি)।"
    }
  },
  {
    id: "q04",
    moduleId: "01-cis-trans",
    topic: "Cycloalkane Stability",
    difficulty: "challenging",
    text: {
      en: "In 1,3-dimethylcyclohexane, which isomer is thermodynamically more stable?",
      bn: "১,৩-ডাইমিথাইলসাইক্লোহেক্সেনে কোন সমাণুটি তাপগতীয়ভাবে বেশি স্থিতিশীল?"
    },
    options: [
      { id: "a", text: { en: "Trans isomer", bn: "ট্রান্স সমাণু" } },
      { id: "b", text: { en: "Cis isomer", bn: "সিস সমাণু" } },
      { id: "c", text: { en: "Both are equally stable", bn: "উভয়ই সমান স্থিতিশীল" } },
      { id: "d", text: { en: "Neither exists in chair form", bn: "কোনোটিই চেয়ার রূপে থাকে না" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "In 1,3-dimethylcyclohexane, the CIS isomer can place both methyl groups in equatorial positions (e,e). The trans isomer must have one axial methyl (e,a), causing 1,3-diaxial steric strain.",
      bn: "১,৩-ডাইমিথাইলসাইক্লোহেক্সেনে সিস রূপটি উভয় মিথাইলকে ইকুয়েটোরিয়ালে (e,e) রাখতে পারে। ট্রান্স রূপে একটি মিথাইল অ্যাক্সিয়ালে (e,a) থাকতে বাধ্য হয় যা স্টেরিক বাধার সৃষ্টি করে।"
    }
  },
  {
    id: "q05",
    moduleId: "01-cis-trans",
    topic: "Coordination Complexes",
    difficulty: "moderate",
    text: {
      en: "Why is Cisplatin ([Pt(NH3)2Cl2]) an effective chemotherapy drug while Transplatin is not?",
      bn: "সিসপ্ল্যাটিন একটি কার্যকর কেমোথেরাপি ওষুধ হলেও ট্রান্সপ্ল্যাটিন কেন কার্যকর নয়?"
    },
    options: [
      { id: "a", text: { en: "Cisplatin is non-polar", bn: "সিসপ্ল্যাটিন অধ্রুবীয়" } },
      { id: "b", text: { en: "Adjacent cis chlorines allow cross-linking between adjacent guanine bases in DNA", bn: "পাশাপাশি থাকা সিস ক্লোরিন পরমাণু ডিএনএ-র দুটি সংলগ্ন গুয়ানিন বেসের সাথে আড়াআড়ি বন্ধন গঠন করতে পারে" } },
      { id: "c", text: { en: "Transplatin is insoluble in any solvent", bn: "ট্রান্সপ্ল্যাটিন কোনো দ্রাবকেই দ্রবীভূত হয় না" } },
      { id: "d", text: { en: "Platinum is toxic only in trans complexes", bn: "প্ল্যাটিনাম কেবল ট্রান্স জটিল যৌগে বিষাক্ত হয়" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "The adjacent (cis) arrangement of chloride ligands allows cisplatin to lose both Cl ions and bind to two adjacent guanines on the same DNA strand, terminating cancer cell replication.",
      bn: "ক্লোরাইড আয়নগুলির পাশাপাশি (সিস) বিন্যাসের কারণে সিসপ্ল্যাটিন একই ডিএনএ চেইনের দুটি সংলগ্ন গুয়ানিনের সাথে যুক্ত হতে পারে, যা ক্যান্সার কোষের বিস্তার রোধ করে।"
    }
  },
  {
    id: "q06",
    moduleId: "02-ez-system",
    topic: "CIP Rule 1 (Atomic Number)",
    difficulty: "easy",
    text: {
      en: "According to CIP priority Rule 1, arrange the following atoms in descending order of priority: -Cl, -Br, -F, -I.",
      bn: "সিআইপি অগ্রাধিকার নিয়ম ১ অনুযায়ী নিচের পরমাণুগুলিকে অধঃক্রমে সাজান: -Cl, -Br, -F, -I।"
    },
    options: [
      { id: "a", text: { en: "I > Br > Cl > F", bn: "I > Br > Cl > F" } },
      { id: "b", text: { en: "F > Cl > Br > I", bn: "F > Cl > Br > I" } },
      { id: "c", text: { en: "Br > I > Cl > F", bn: "Br > I > Cl > F" } },
      { id: "d", text: { en: "Cl > F > Br > I", bn: "Cl > F > Br > I" } }
    ],
    correctOptionId: "a",
    explanation: {
      en: "Priority increases strictly with atomic number Z: I (53) > Br (35) > Cl (17) > F (9).",
      bn: "অগ্রাধিকার সরাসরি পারমাণবিক সংখ্যা Z বৃদ্ধির সাথে বৃদ্ধি পায়: I (৫৩) > Br (৩৫) > Cl (১৭) > F (৯)।"
    }
  },
  {
    id: "q07",
    moduleId: "02-ez-system",
    topic: "CIP Rule 2 (Isotopes)",
    difficulty: "moderate",
    text: {
      en: "In 2-deuteriobut-2-ene, between Deuterium (-D) and Hydrogen (-H), which receives higher CIP priority?",
      bn: "২-ডিউটেরিওবিউট-২-ইনে ডিউটেরিয়াম (-D) এবং হাইড্রোজেনের (-H) মধ্যে কোনটি উচ্চ সিআইপি অগ্রাধিকার পায়?"
    },
    options: [
      { id: "a", text: { en: "Hydrogen (-H) because it is lighter", bn: "হাইড্রোজেন (-H) কারণ এটি হালকা" } },
      { id: "b", text: { en: "Deuterium (-D) because it has a higher mass number (2 vs 1)", bn: "ডিউটেরিয়াম (-D) কারণ এর ভরসংখ্যা বেশি (২ বনাম ১)" } },
      { id: "c", text: { en: "Both have equal priority", bn: "উভয়ের অগ্রাধিকার সমান" } },
      { id: "d", text: { en: "Priority cannot be assigned to isotopes", bn: "আইসোটোপের জন্য অগ্রাধিকার নির্ধারণ করা যায় না" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "CIP Rule 2 states that when atomic numbers are identical, the heavier isotope (higher mass number) has higher priority. Hence D (mass 2) beats H (mass 1).",
      bn: "সিআইপি নিয়ম ২ অনুযায়ী পারমাণবিক সংখ্যা এক হলে উচ্চ ভরসংখ্যার আইসোটোপ বেশি অগ্রাধিকার পায়। তাই D (ভর ২) H-এর (ভর ১) চেয়ে এগিয়ে থাকে।"
    }
  },
  {
    id: "q08",
    moduleId: "02-ez-system",
    topic: "Cis vs Z Discrepancy",
    difficulty: "challenging",
    text: {
      en: "In 2-bromo-1-chloroprop-1-ene, the isomer where chlorine and methyl are on the same side is designated as:",
      bn: "২-ব্রোমো-১-ক্লোরোপ্রপ-১-ইনে ক্লোরিন এবং মিথাইল একই পাশে থাকা সমাণুটির নাম কী?"
    },
    options: [
      { id: "a", text: { en: "(1Z)", bn: "(১Z)" } },
      { id: "b", text: { en: "(1E)", bn: "(১E)" } },
      { id: "c", text: { en: "Trans only", bn: "কেবল ট্রান্স" } },
      { id: "d", text: { en: "Neither E nor Z", bn: "E বা Z কোনটিই নয়" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "On C1: Cl (Z=17) > H (Z=1), so Cl is priority 1. On C2: Br (Z=35) > CH3 (Z=6), so Br is priority 1. When Cl and CH3 are on the same side, the two priority 1 groups (Cl and Br) are on OPPOSITE sides, making it (1E)!",
      bn: "C1-এ: Cl (১৭) > H (১), তাই Cl অগ্রাধিকার ১ পায়। C2-তে: Br (৩৫) > CH3 (৬), তাই Br অগ্রাধিকার ১ পায়। Cl ও CH3 একই পাশে থাকলে অগ্রাধিকার ১ গ্রুপ দুটি (Cl ও Br) বিপরীত পাশে থাকে, ফলে যৌগটি (১E) হয়!"
    }
  },
  {
    id: "q09",
    moduleId: "03-syn-anti",
    topic: "Oxime Stereochemistry",
    difficulty: "moderate",
    text: {
      en: "In benzaldehyde oxime (PhCH=N-OH), what defines the 'syn' isomer?",
      bn: "বেনজালডিহাইড অক্সাইমে (PhCH=N-OH) 'সিন' সমাণুটি কী দ্বারা সংজ্ঞায়িত হয়?"
    },
    options: [
      { id: "a", text: { en: "H and OH are on the same side of the C=N double bond", bn: "H এবং OH দ্বিবন্ধনের একই পাশে থাকে" } },
      { id: "b", text: { en: "Phenyl and OH are on the same side", bn: "ফিনাইল এবং OH একই পাশে থাকে" } },
      { id: "c", text: { en: "H and OH are on opposite sides", bn: "H এবং OH বিপরীত পাশে থাকে" } },
      { id: "d", text: { en: "There is no lone pair on nitrogen", bn: "নাইট্রোজেনে কোনো নিঃসঙ্গ জোড় থাকে না" } }
    ],
    correctOptionId: "a",
    explanation: {
      en: "In aldoximes, the isomer where the hydrogen atom and the hydroxyl group (-OH) lie on the same side of the C=N bond is called the syn-aldoxime.",
      bn: "অ্যালডক্সাইমে হাইড্রোজেন পরমাণু এবং হাইড্রক্সিল মূলক (-OH) C=N বন্ধনের একই পাশে থাকলে তাকে সিন-অ্যালডক্সাইম বলা হয়।"
    }
  },
  {
    id: "q10",
    moduleId: "03-syn-anti",
    topic: "Beckmann Rearrangement",
    difficulty: "challenging",
    text: {
      en: "In the acid-catalyzed Beckmann rearrangement of ketoximes, which group migrates from carbon to nitrogen?",
      bn: "কিটক্সাইমের অ্যাসিড-অনুঘটিত বেকম্যান রূপান্তরে কোন গ্রুপটি কার্বন থেকে নাইট্রোজেনে স্থানান্তরিত হয়?"
    },
    options: [
      { id: "a", text: { en: "The group positioned SYN to the leaving OH group", bn: "অপসারিত OH গ্রুপের সিন অবস্থানে থাকা গ্রুপ" } },
      { id: "b", text: { en: "The group positioned ANTI to the leaving OH group", bn: "অপসারিত OH গ্রুপের অ্যান্টি অবস্থানে থাকা গ্রুপ" } },
      { id: "c", text: { en: "Always the smaller alkyl group", bn: "সর্বদা ছোট অ্যালকাইল গ্রুপ" } },
      { id: "d", text: { en: "The migration is completely random", bn: "স্থানান্তর সম্পূর্ণ অনিয়মিত" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "The Beckmann rearrangement is strictly stereospecific: the group positioned ANTI to the departing -OH group migrates anti-periplanarly to the nitrogen atom.",
      bn: "বেকম্যান রূপান্তরটি সম্পূর্ণ স্টেরিওনির্দিষ্ট: অপসারিত -OH গ্রুপের অ্যান্টি অবস্থানে থাকা গ্রুপটিই নাইট্রোজেন পরমাণুতে স্থানান্তরিত হয়।"
    }
  },
  {
    id: "q11",
    moduleId: "03-syn-anti",
    topic: "Azobenzene Photoisomerization",
    difficulty: "moderate",
    text: {
      en: "What happens when trans-azobenzene is exposed to ultraviolet light (~365 nm)?",
      bn: "ট্রান্স-অ্যাজোবেনজিনকে আল্ট্রাভায়োলেট আলোতে (৩৬৫ ন্যানোমিটার) রাখলে কী ঘটে?"
    },
    options: [
      { id: "a", text: { en: "It explodes into aniline", bn: "এটি বিস্ফোরিত হয়ে অ্যানিলিন তৈরি করে" } },
      { id: "b", text: { en: "It isomerizes into polar, bent cis-azobenzene", bn: "এটি ধ্রুবীয়, বাঁকা সিস-অ্যাজোবেনজিনে রূপান্তরিত হয়" } },
      { id: "c", text: { en: "It irreversibly polymerizes", bn: "এটি অপরিবর্তনীয়ভাবে পলিমারাইজড হয়" } },
      { id: "d", text: { en: "No change occurs", bn: "কোনো পরিবর্তন ঘটে না" } }
    ],
    correctOptionId: "b",
    explanation: {
      en: "UV light excites a π-electron, allowing the nitrogen-nitrogen double bond to rotate and convert into the bent, polar cis (syn) isomer (dipole moment = 3.0 D).",
      bn: "ইউভি আলো পাই-ইলেকট্রনকে উত্তেজিত করে, যার ফলে নাইট্রোজেন-নাইট্রোজেন দ্বিবন্ধন ঘুরে বাঁকা ও ধ্রুবীয় সিস (সিন) আইসোমারে রূপান্তরিত হয় (ডাইপোল মোমেন্ট = ৩.০ ডি)।"
    }
  },
  {
    id: "q12",
    moduleId: "04-physical-properties",
    topic: "Maleic vs Fumaric Acid",
    difficulty: "easy",
    text: {
      en: "Why does maleic acid readily form an anhydride upon heating to 140°C while fumaric acid does not?",
      bn: "১৪০°সে তাপমাত্রায় ম্যালিক অ্যাসিড সহজে অ্যানহাইড্রাইড তৈরি করলেও ফিউমারিক অ্যাসিড কেন করে না?"
    },
    options: [
      { id: "a", text: { en: "In maleic acid, both -COOH groups are cis (adjacent in space), allowing easy dehydration", bn: "ম্যালিক অ্যাসিডে উভয় -COOH গ্রুপ সিস (পাশাপাশি) থাকায় সহজে পানিশূন্য হতে পারে" } },
      { id: "b", text: { en: "Fumaric acid has no hydrogen atoms", bn: "ফিউমারিক অ্যাসিডে কোনো হাইড্রোজেন পরমাণু নেই" } },
      { id: "c", text: { en: "Maleic acid is a gas", bn: "ম্যালিক অ্যাসিড একটি গ্যাসীয় পদার্থ" } },
      { id: "d", text: { en: "Fumaric acid is basic", bn: "ফিউমারিক অ্যাসিড ক্ষারীয়" } }
    ],
    correctOptionId: "a",
    explanation: {
      en: "In maleic acid (cis), the two carboxyl groups are adjacent (~2.4 Å apart) and can lose water intramolecularly to form cyclic maleic anhydride. In fumaric acid (trans), they are too far apart (~3.8 Å).",
      bn: "ম্যালিক অ্যাসিডে (সিস) দুটি কার্বক্সিল গ্রুপ কাছাকাছি (২.৪ অ্যাংস্ট্রম) থাকায় অন্তরাণবিক পানিশূন্যতার মাধ্যমে চক্রীয় ম্যালিক অ্যানহাইড্রাইড তৈরি করতে পারে। ফিউমারিক অ্যাসিডে তারা অনেক দূরে (৩.৮ অ্যাংস্ট্রম) থাকে।"
    }
  }
];

