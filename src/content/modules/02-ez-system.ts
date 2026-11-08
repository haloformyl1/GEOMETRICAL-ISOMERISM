import type { ModuleContent } from '../../types/content';

export const EZModule: ModuleContent = {
  id: '02-ez-system',
  order: 2,
  title: {
    en: 'The E-Z System & CIP Priority Rules',
    bn: 'E-Z পদ্ধতি এবং সিআইপি অগ্রাধিকার নিয়ম'
  },
  learningObjectives: [
    {
      en: 'Understand why the classical cis-trans system breaks down for tri- and tetra-substituted alkenes.',
      bn: 'ত্রি- এবং টেট্রা-প্রতিস্থাপিত অ্যালকিনে চিরায়ত সিস-ট্রান্স পদ্ধতি কেন অকার্যকর হয় তা বোঝা।'
    },
    {
      en: 'Master the Cahn-Ingold-Prelog (CIP) priority rules (atomic number, isotopes, tie-breaking, phantom bonds).',
      bn: 'কান-ইনগোল্ড-প্রীলগ (সিআইপি) অগ্রাধিকার নিয়মগুলি (পারমাণবিক সংখ্যা, আইসোটোপ, টাই-ব্রেকিং, ফ্যান্টম বন্ধন) আয়ত্ত করা।'
    },
    {
      en: 'Accurately assign (E) and (Z) stereodescriptors to any complex alkene or polyene.',
      bn: 'যেকোনো জটিল অ্যালকিন বা পলিইনের ক্ষেত্রে সঠিকভাবে (E) এবং (Z) স্টেরিওনামকরণ নির্ধারণ করা।'
    }
  ],
  sections: [
    {
      id: 'sec-why-ez',
      type: 'text',
      title: {
        en: 'The Failure of Cis-Trans: Why E-Z is Essential',
        bn: 'সিস-ট্রান্সের সীমাবদ্ধতা: কেন E-Z অপরিহার্য'
      },
      content: {
        en: 'When an alkene has three or four different substituents (e.g., 1-bromo-1-chloro-2-fluoroethene), which groups should be called "cis"? There is no unambiguous answer! To solve this ambiguity, the IUPAC adopted the **E-Z system** developed by Robert Cahn, Christopher Ingold, and Vladimir Prelog (CIP).',
        bn: 'যখন একটি অ্যালকিনে তিনটি বা চারটি ভিন্ন গ্রুপ থাকে (যেমন ১-ব্রোমো-১-ক্লোরো-২-ফ্লুরোইথিন), তখন কোন গ্রুপ দুটিকে "সিস" বলা হবে? কোনো সুনির্দিষ্ট উত্তর নেই! এই বিভ্রান্তি দূর করতে আইইউপিএসি কান, ইনগোল্ড এবং প্রীলগ (সিআইপি) উদ্ভাবিত **E-Z পদ্ধতি** গ্রহণ করে।'
      }
    },
    {
      id: 'sec-cip-rules',
      type: 'text',
      title: {
        en: 'The 4 Cahn-Ingold-Prelog (CIP) Priority Rules',
        bn: 'কান-ইনগোল্ড-প্রীলগের ৪টি অগ্রাধিকার নিয়ম'
      },
      content: {
        en: 'Priority is assigned independently to the two groups attached to each alkene carbon:\n\n1. **Rule 1 (Atomic Number $Z$)**: The atom with the higher atomic number directly attached to the stereocenter receives higher priority ($1 > 2$). E.g., $I (53) > Br (35) > Cl (17) > F (9) > O (8) > N (7) > C (6) > H (1)$.\n2. **Rule 2 (Isotopes)**: If atomic numbers are identical, the isotope with the higher mass number takes priority ($T > D > H$ and ${}^{13}C > {}^{12}C$).\n3. **Rule 3 (Tie-Breaker Path)**: If directly attached atoms are identical (e.g., $-CH_3$ vs $-CH_2CH_3$), move outward atom-by-atom along the chain until a point of difference is found. Ethyl is bonded to $(C,H,H)$, while methyl is bonded to $(H,H,H)$, so ethyl wins.\n4. **Rule 4 (Multiple Bonds & Phantom Atoms)**: Atoms involved in double or triple bonds are treated as duplicated or triplicated with "phantom atoms". For example, $-CH=O$ is treated as carbon bonded to $(O, O, H)$, and $-C\\equiv N$ as carbon bonded to $(N, N, N)$.\n\n**Assignment**:\n- **(Z) [Zusammen = "Together"]**: The two high-priority groups (1, 1) are on the SAME side.\n- **(E) [Entgegen = "Opposite"]**: The two high-priority groups (1, 1) are on OPPOSITE sides.',
        bn: 'অ্যালকিনের প্রতিটি কার্বনের সাথে যুক্ত দুটি গ্রুপের অগ্রাধিকার স্বাধীনভাবে নির্ধারণ করা হয়:\n\n১. **নিয়ম ১ (পারমাণবিক সংখ্যা $Z$)**: সরাসরি যুক্ত যে পরমাণুর পারমাণবিক সংখ্যা বেশি, তার অগ্রাধিকার বেশি ($১ > ২$)। যেমন: $I (৫৩) > Br (৩৫) > Cl (১৭) > F (৯) > O (৮) > N (৭) > C (৬) > H (১)$।\n২. **নিয়ম ২ (আইসোটোপ)**: পারমাণবিক সংখ্যা এক হলে উচ্চ ভরসংখ্যার আইসোটোপ অগ্রাধিকার পায় ($T > D > H$ এবং ${}^{১৩}C > {}^{১২}C$)।\n৩. **নিয়ম ৩ (টাই-ব্রেকার)**: সরাসরি যুক্ত পরমাণু অভিন্ন হলে (যেমন $-CH_3$ বনাম $-CH_2CH_3$) শিকল বরাবর পরবর্তী পরমাণুগুলির তুলনা করা হয়। ইথাইল $(C,H,H)$-এর সাথে যুক্ত কিন্তু মিথাইল $(H,H,H)$-এর সাথে, তাই ইথাইল অগ্রাধিকার পায়।\n৪. **নিয়ম ৪ (বহুবন্ধন ও ফ্যান্টম পরমাণু)**: দ্বিবন্ধন বা ত্রিবন্ধনযুক্ত পরমাণুগুলিকে কাল্পনিক "ফ্যান্টম পরমাণু" দ্বারা দ্বিগুণ বা তিনগুণ হিসেবে গণ্য করা হয়। যেমন: $-CH=O$-কে $(O,O,H)$ যুক্ত কার্বন এবং $-C\\equiv N$-কে $(N,N,N)$ যুক্ত কার্বন ধরা হয়।\n\n**নামকরণ**:\n- **(Z) [Zusammen = "একত্রে"]**: উচ্চ অগ্রাধিকারের গ্রুপ দুটি (১, ১) একই পাশে থাকে।\n- **(E) [Entgegen = "বিপরীতে"]**: উচ্চ অগ্রাধিকারের গ্রুপ দুটি (১, ১) বিপরীত পাশে থাকে।'
      }
    },
    {
      id: 'sec-ez-lab',
      type: 'interactive_3d',
      title: {
        en: 'Interactive 3D Laboratory: CIP Priority Solver',
        bn: 'ইন্টারেক্টিভ ৩ডি ল্যাব: সিআইপি অগ্রাধিকার সমাধানকারী'
      },
      content: {
        en: 'Select any of the 26 E-Z chemical examples. Step through the CIP derivation, see glowing badges highlighting priority (1) and (2) on each carbon, and inspect whether they align as (Z) or (E)!',
        bn: '২৬টি E-Z রাসায়নিক উদাহরণের যেকোনো একটি নির্বাচন করুন। ধাপে ধাপে সিআইপি নিয়ম প্রয়োগ দেখুন, প্রতিটি কার্বনে অগ্রাধিকার (১) ও (২) চিহ্নিত ব্যাজ লক্ষ্য করুন এবং তারা (Z) নাকি (E) তা পর্যবেক্ষণ করুন!'
      },
      modelConfig: { type: 'cip-lab' }
    },
    {
      id: 'sec-misconception-cis-z',
      type: 'misconception',
      modelConfig: {
        incorrect: {
          en: 'Cis always corresponds to Z, and Trans always corresponds to E.',
          bn: 'সিস মানেই সবসময় Z এবং ট্রান্স মানেই সবসময় E।'
        },
        correct: {
          en: 'Cis refers to the orientation of identical substituents or the main carbon chain, whereas Z refers strictly to CIP priority (1, 1). In 2-bromo-1-chloroprop-1-ene, the isomer where chlorine and methyl are cis to each other is actually (1E) because Br (Z=35) takes priority over methyl on C2!',
          bn: 'সিস নির্দেশ করে অভিন্ন পরমাণু বা মূল কার্বন শিকলের একই পাশে থাকা, আর Z নির্ভর করে সিআইপি অগ্রাধিকারের (১, ১) ওপর। ২-ব্রোমো-১-ক্লোরোপ্রপ-১-ইনে ক্লোরিন এবং মিথাইল পরস্পরের সিস থাকা সত্ত্বেও যৌগটি প্রকৃতপক্ষে (১E), কারণ C2-তে ব্রোমিন (Z=৩৫) মিথাইলের চেয়ে বেশি অগ্রাধিকার পায়!'
        }
      }
    },
    {
      id: 'sec-next-synanti',
      type: 'next_module_link',
      content: {
        en: 'Geometrical isomerism is not limited to carbon! Proceed to Module 3: Syn-Anti Isomerism in Nitrogen & Polycyclic Systems.',
        bn: 'জ্যামিতিক সমাণুতা কেবল কার্বনেই সীমাবদ্ধ নয়! ৩য় অধ্যায়ে যান: নাইট্রোজেন ও পলিসাইক্লিক সিস্টেমে সিন-অ্যান্টি সমাণুতা।'
      },
      modelConfig: { targetModuleId: '03-syn-anti' }
    }
  ]
};

