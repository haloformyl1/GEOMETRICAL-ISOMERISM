export interface Flashcard {
  id: string;
  term: { en: string; bn: string };
  category: string;
  definition: { en: string; bn: string };
  formula?: string;
  keyTakeaway: { en: string; bn: string };
}

export const FLASHCARD_DECK: Flashcard[] = [
  {
    id: "fc-01",
    term: { en: "Geometrical Isomerism", bn: "জ্যামিতিক সমাণুতা" },
    category: "Fundamentals",
    definition: {
      en: "A form of stereoisomerism in which molecules with identical constitution differ in the spatial arrangement of substituents due to restricted rotation.",
      bn: "এমন এক প্রকার স্টেরিও সমাণুতা যেখানে আবদ্ধ ঘূর্ণনের কারণে পরমাণুসমূহের ত্রিমাত্রিক স্থানে ভিন্ন ভিন্ন অবস্থানের জন্য সমাণু সৃষ্টি হয়।"
    },
    keyTakeaway: {
      en: "Requires: (1) Restricted rotation (C=C, ring, C=N), (2) Non-identical groups on EACH stereocenter.",
      bn: "প্রয়োজনীয় শর্ত: (১) আবদ্ধ ঘূর্ণন (দ্বিবন্ধন বা বলয়), (২) প্রতিটি স্টেরিওসেন্টারে দুটি ভিন্ন গ্রুপ।"
    }
  },
  {
    id: "fc-02",
    term: { en: "Pi-Bond Rotation Barrier", bn: "পাই-বন্ধন ঘূর্ণন বাধা" },
    category: "Thermodynamics",
    formula: "\\Delta G^\\ddagger \\approx 260 \\text{ kJ/mol}",
    definition: {
      en: "The substantial energy required to twist a double bond by 90°, completely breaking the parallel p-orbital sideways overlap.",
      bn: "দ্বিবন্ধনকে ৯০° মোচড় দিয়ে ২p অরবিটালের সমান্তরাল অধিক্রমণ সম্পূর্ণ ভেঙে ফেলতে প্রয়োজনীয় বিপুল শক্তি।"
    },
    keyTakeaway: {
      en: "Prevents spontaneous interconversion of cis and trans isomers at room temperature.",
      bn: "সাধারণ তাপমাত্রায় সিস ও ট্রান্সের স্বতঃস্ফূর্ত রূপান্তর অসম্ভব করে তোলে।"
    }
  },
  {
    id: "fc-03",
    term: { en: "Cis vs Trans", bn: "সিস বনাম ট্রান্স" },
    category: "Nomenclature",
    definition: {
      en: "Cis indicates identical/similar groups on the SAME side of reference plane; Trans indicates groups on OPPOSITE sides.",
      bn: "সিস মানে সদৃশ গ্রুপগুলি একই পাশে থাকে; ট্রান্স মানে বিপরীত পাশে থাকে।"
    },
    keyTakeaway: {
      en: "Applicable only to disubstituted or symmetrical alkenes (abC=Cab).",
      bn: "কেবল দ্বি-প্রতিস্থাপিত বা প্রতিসম অ্যালকিনে প্রযোজ্য।"
    }
  },
  {
    id: "fc-04",
    term: { en: "CIP Rule 1 (Atomic Number)", bn: "সিআইপি নিয়ম ১ (পারমাণবিক সংখ্যা)" },
    category: "E-Z System",
    formula: "Z_{\\text{atom}} \\propto \\text{Priority}",
    definition: {
      en: "Atoms directly bonded to the stereocenter are ranked strictly by atomic number Z (higher Z = higher priority).",
      bn: "স্টেরিওসেন্টারের সাথে সরাসরি যুক্ত পরমাণুগুলিকে পারমাণবিক সংখ্যা Z অনুযায়ী সাজানো হয়।"
    },
    keyTakeaway: {
      en: "I (53) > Br (35) > Cl (17) > F (9) > O (8) > N (7) > C (6) > H (1).",
      bn: "আয়োডিন (৫৩) > ব্রোমিন (৩৫) > ক্লোরিন (১৭) > ফ্লুরিন (৯) > অক্সিজেন (৮) > কার্বন (৬) > হাইড্রোজেন (১)।"
    }
  },
  {
    id: "fc-05",
    term: { en: "CIP Rule 2 (Isotopes)", bn: "সিআইপি নিয়ম ২ (আইসোটোপ)" },
    category: "E-Z System",
    formula: "T (3) > D (2) > H (1)",
    definition: {
      en: "When atomic numbers are identical, the isotope with the higher mass number receives priority.",
      bn: "পারমাণবিক সংখ্যা সমান হলে উচ্চ ভরসংখ্যার আইসোটোপ অগ্রাধিকার পায়।"
    },
    keyTakeaway: {
      en: "Tritium > Deuterium > Protium; Carbon-13 > Carbon-12.",
      bn: "ট্রিটিয়াম > ডিউটেরিয়াম > প্রোটিয়াম; কার্বন-১৩ > কার্বন-১২।"
    }
  },
  {
    id: "fc-06",
    term: { en: "CIP Rule 4 (Phantom Atoms)", bn: "সিআইপি নিয়ম ৪ (ফ্যান্টম পরমাণু)" },
    category: "E-Z System",
    definition: {
      en: "Double and triple bonds are treated as duplicated or triplicated with fictitious phantom atoms.",
      bn: "দ্বিবন্ধন ও ত্রিবন্ধনযুক্ত পরমাণুগুলিকে কাল্পনিক ফ্যান্টম পরমাণু দ্বারা দ্বিগুণ বা তিনগুণ ধরা হয়।"
    },
    keyTakeaway: {
      en: "-CH=O is treated as -CH(O,O); -C≡N is treated as -C(N,N,N).",
      bn: "-CH=O-কে -CH(O,O) এবং -C≡N-কে -C(N,N,N) ধরা হয়।"
    }
  },
  {
    id: "fc-07",
    term: { en: "(Z) Zusammen vs (E) Entgegen", bn: "(Z) জুসামেন বনাম (E) এন্টগেগেন" },
    category: "E-Z System",
    definition: {
      en: "(Z) means priority (1, 1) groups are on the SAME side. (E) means priority (1, 1) groups are on OPPOSITE sides.",
      bn: "(Z) মানে অগ্রাধিকার (১, ১) গ্রুপ একই দিকে। (E) মানে অগ্রাধিকার (১, ১) গ্রুপ বিপরীত দিকে।"
    },
    keyTakeaway: {
      en: "Remember: 'Z = on Zee Zame Zide!'",
      bn: "মনে রাখার সহজ উপায়: 'Z = on Zee Zame Zide' (একই পাশে)!"
    }
  },
  {
    id: "fc-08",
    term: { en: "Syn-Anti in Oximes", bn: "অক্সাইমে সিন-অ্যান্টি" },
    category: "Syn-Anti",
    definition: {
      en: "In aldoximes, Syn means H and OH are on the same side; Anti means H and OH are on opposite sides.",
      bn: "অ্যালডক্সাইমে H এবং OH একই পাশে থাকলে সিন; বিপরীত পাশে থাকলে অ্যান্টি।"
    },
    keyTakeaway: {
      en: "Determined relative to the lone pair on the sp2 nitrogen.",
      bn: "sp2 নাইট্রোজেনের নিঃসঙ্গ ইলেকট্রন জোড়ের অবস্থানের ওপর ভিত্তি করে নির্ধারিত।"
    }
  },
  {
    id: "fc-09",
    term: { en: "Beckmann Rearrangement", bn: "বেকম্যান রূপান্তর" },
    category: "Reactivity",
    definition: {
      en: "Acid-catalyzed transformation of ketoximes into amides where the group ANTI to OH selectively migrates.",
      bn: "কিটক্সাইম থেকে অ্যামাইডের অ্যাসিড-অনুঘটিত রূপান্তর যেখানে OH-এর অ্যান্টি গ্রুপ স্থানান্তরিত হয়।"
    },
    keyTakeaway: {
      en: "Strictly stereospecific anti-migration used to determine oxime configuration.",
      bn: "অক্সাইমের কনফিগারেশন নির্ণয়ে ব্যবহৃত নিখুঁত স্টেরিওনির্দিষ্ট অ্যান্টি-মাইগ্রেশন।"
    }
  },
  {
    id: "fc-10",
    term: { en: "Azobenzene Photoisomerization", bn: "অ্যাজোবেনজিন ফটোআইসোমারিজম" },
    category: "Photochemistry",
    definition: {
      en: "Reversible light-driven switching between planar trans-azobenzene (μ=0 D) and bent cis-azobenzene (μ=3.0 D).",
      bn: "সমতলীয় ট্রান্স-অ্যাজোবেনজিন এবং বাঁকা সিস-অ্যাজোবেনজিনের মধ্যে আলোর সাহায্যে উভমুখী রূপান্তর।"
    },
    keyTakeaway: {
      en: "Trans -> Cis under 365 nm UV light; Cis -> Trans under 450 nm blue light.",
      bn: "৩৬৫ ন্যানোমিটার UV আলোতে ট্রান্স -> সিস; ৪৫০ ন্যানোমিটার নীল আলোতে সিস -> ট্রান্স।"
    }
  },
  {
    id: "fc-11",
    term: { en: "Maleic vs Fumaric Acid Test", bn: "ম্যালিক বনাম ফিউমারিক অ্যাসিড পরীক্ষা" },
    category: "Chemical Properties",
    definition: {
      en: "Maleic acid (cis) dehydrates at 140°C to cyclic maleic anhydride; Fumaric acid (trans) cannot do so intramolecularly.",
      bn: "ম্যালিক অ্যাসিড ১৪০°সে-এ সহজে চক্রীয় অ্যানহাইড্রাইড তৈরি করে; ফিউমারিক অ্যাসিড তা পারে না।"
    },
    keyTakeaway: {
      en: "Classic chemical proof for distinguishing cis from trans dicarboxylic acids.",
      bn: "সিস এবং ট্রান্স ডাইকার্বক্সিলিক অ্যাসিডের পার্থক্য করার ঐতিহ্যবাহী রাসায়নিক পরীক্ষা।"
    }
  },
  {
    id: "fc-12",
    term: { en: "Boiling Point vs Melting Point Trend", bn: "স্ফুটনাঙ্ক বনাম গলনাঙ্কের প্রবণতা" },
    category: "Physical Properties",
    definition: {
      en: "Cis isomers generally have HIGHER boiling points (greater net dipole moment). Trans isomers have HIGHER melting points (better crystal packing).",
      bn: "সিস আইসোমারের স্ফুটনাঙ্ক সাধারণত বেশি (উচ্চ ডাইপোল)। ট্রান্স আইসোমারের গলনাঙ্ক বেশি (উত্তম স্ফটিক প্যাকিং)।"
    },
    keyTakeaway: {
      en: "Cis = Higher b.p.; Trans = Higher m.p. (with crystal symmetry).",
      bn: "সিস = উচ্চ স্ফুটনাঙ্ক; ট্রান্স = উচ্চ গলনাঙ্ক (স্ফটিক প্রতিসাম্যের কারণে)।"
    }
  }
];

