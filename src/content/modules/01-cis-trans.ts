import type { ModuleContent } from '../../types/content';

export const CisTransModule: ModuleContent = {
  id: '01-cis-trans',
  order: 1,
  title: {
    en: 'Cis-Trans Isomerism in Alkenes, Rings & Complexes',
    bn: 'অ্যালকিন, বলয় এবং জটিল যৌগে সিস-ট্রান্স সমাণুতা'
  },
  learningObjectives: [
    {
      en: 'Define cis and trans descriptors for symmetrical and unsymmetrical alkenes.',
      bn: 'প্রতিসম এবং অপ্রতিসম অ্যালকিনের জন্য সিস ও ট্রান্সের সংজ্ঞা দেওয়া।'
    },
    {
      en: 'Identify cis and trans isomerism in disubstituted cycloalkanes (cyclopropane to cyclohexane).',
      bn: 'দ্বি-প্রতিস্থাপিত সাইক্লোঅ্যালকেনে (সাইক্লোপ্রোপেন থেকে সাইক্লোহেক্সেন) সিস-ট্রান্স সমাণুতা চিহ্নিত করা।'
    },
    {
      en: 'Examine square planar and octahedral coordination complexes (e.g., Cisplatin vs Transplatin).',
      bn: 'বর্গাকার সমতলীয় এবং অষ্টতলকীয় জটিল যৌগের স্টেরিওরসায়ন (যেমন সিসপ্ল্যাটিন বনাম ট্রান্সপ্ল্যাটিন) পর্যালোচনা করা।'
    }
  ],
  sections: [
    {
      id: 'sec-ct-definition',
      type: 'text',
      title: {
        en: 'The Classical Cis-Trans Convention',
        bn: 'চিরায়ত সিস-ট্রান্স প্রথা'
      },
      content: {
        en: 'The prefix **cis-** (Latin: "on this side of") designates an isomer where two identical or similar groups lie on the same side of a reference plane (the double bond or ring plane). The prefix **trans-** (Latin: "across") indicates that the groups lie on opposite sides.',
        bn: '**সিস-** (ল্যাটিন: "একই পাশে") শব্দটি এমন আইসোমারকে নির্দেশ করে যেখানে দুটি অভিন্ন বা সদৃশ গ্রুপ একটি প্রসঙ্গ তলের (দ্বিবন্ধন বা বলয় সমতল) একই পাশে অবস্থান করে। অন্যদিকে **ট্রান্স-** (ল্যাটিন: "বিপরীতে") শব্দটি নির্দেশ করে যে গ্রুপগুলি বিপরীত পাশে অবস্থিত।'
      }
    },
    {
      id: 'sec-ct-lab',
      type: 'interactive_3d',
      title: {
        en: 'Interactive 3D Laboratory: Cis-Trans Molecular Explorer',
        bn: 'ইন্টারেক্টিভ ৩ডি ল্যাব: সিস-ট্রান্স মলিকুলার এক্সপ্লোরার'
      },
      content: {
        en: 'Switch between Cis and Trans isomers for 26 real chemical systems. Rotate the 3D model, view bond dipole vectors, and compare their boiling and melting points!',
        bn: '২৬টি বাস্তব রাসায়নিক উদাহরণের জন্য সিস এবং ট্রান্স আইসোমারের মধ্যে পরিবর্তন করুন। ৩ডি মডেলটি ঘুরিয়ে দেখুন, বন্ধন ডাইপোল ভেক্টর লক্ষ্য করুন এবং তাদের গলনাঙ্ক ও স্ফুটনাঙ্ক তুলনা করুন!'
      },
      modelConfig: { type: 'cis-trans-lab' }
    },
    {
      id: 'sec-ct-rings',
      type: 'text',
      title: {
        en: 'Geometrical Isomerism in Cycloalkanes',
        bn: 'সাইক্লোঅ্যালকেনে জ্যামিতিক সমাণুতা'
      },
      content: {
        en: 'In cycloalkanes, rotation around carbon-carbon single bonds is restricted by the closed ring. Substituents pointing to the same face of the ring are **cis**, while those pointing to opposite faces are **trans**.\n\nIn cyclohexane chair conformations:\n- **trans-1,2** and **trans-1,4** can adopt diequatorial (e,e) conformations and are more stable than cis.\n- In **1,3-dimethylcyclohexane**, the **cis** isomer can adopt a diequatorial (e,e) conformer, making it **more stable** than the trans isomer!',
        bn: 'সাইক্লোঅ্যালকেনে বন্ধ বলয়ের কারণে কার্বন-কার্বন একক বন্ধনের মুক্ত ঘূর্ণন রুদ্ধ হয়। বলয়ের একই তলে মুখ করা গ্রুপগুলি **সিস** এবং বিপরীত তলে থাকা গ্রুপগুলি **ট্রান্স**।\n\nসাইক্লোহেক্সেনের চেয়ার গঠনে:\n- **ট্রান্স-১,২** এবং **ট্রান্স-১,৪** ডাই-ইকুয়েটোরিয়াল (e,e) রূপ নিতে পারে এবং সিসের চেয়ে বেশি স্থিতিশীল।\n- কিন্তু **১,৩-ডাইমিথাইলসাইক্লোহেক্সেনে** **সিস** রূপটি ডাই-ইকুয়েটোরিয়াল (e,e) হতে পারে, যার ফলে এটি ট্রান্সের চেয়ে **বেশি স্থিতিশীল** হয়!'
      }
    },
    {
      id: 'sec-ct-complexes',
      type: 'text',
      title: {
        en: 'Coordination Chemistry: Cisplatin vs Transplatin',
        bn: 'জটিল যৌগ রসায়ন: সিসপ্ল্যাটিন বনাম ট্রান্সপ্ল্যাটিন'
      },
      content: {
        en: 'Square planar $d^8$ complexes of the type $[MA_2B_2]$ (such as $[Pt(NH_3)_2Cl_2]$) exhibit cis-trans isomerism. **Cisplatin** (cis-[Pt(NH3)2Cl2]) coordinates specifically to adjacent guanine bases in cancer DNA, bending it and triggering apoptosis (cell death). Its isomer **Transplatin** cannot cross-link adjacent guanines and is biologically inactive!',
        bn: '$[MA_2B_2]$ ধরণের বর্গাকার সমতলীয় $d^8$ জটিল যৌগে (যেমন $[Pt(NH_3)_2Cl_2]$) সিস-ট্রান্স সমাণুতা দেখা যায়। **সিসপ্ল্যাটিন** ক্যান্সারের ডিএনএ-র পাশাপাশি থাকা দুটি গুয়ানিন বেসের সাথে আড়াআড়ি বন্ধন গঠন করে কোষের মৃত্যু ঘটায়। কিন্তু এর আইসোমার **ট্রান্সপ্ল্যাটিন** তা করতে পারে না এবং চিকিৎসায় নিষ্ক্রিয়!'
      }
    },
    {
      id: 'sec-next-ez',
      type: 'next_module_link',
      content: {
        en: 'What happens when an alkene has 3 or 4 different substituents where cis-trans fails? Proceed to Module 2: The E-Z System & CIP Sequence Rules.',
        bn: 'যখন একটি অ্যালকিনে ৩ বা ৪টি ভিন্ন গ্রুপ থাকে যেখানে সিস-ট্রান্স ব্যর্থ হয়, তখন কী ঘটে? ২য় অধ্যায়ে যান: E-Z পদ্ধতি এবং সিআইপি নিয়ম।'
      },
      modelConfig: { targetModuleId: '02-ez-system' }
    }
  ]
};

