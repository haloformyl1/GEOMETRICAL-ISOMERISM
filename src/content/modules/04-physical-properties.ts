import type { ModuleContent } from '../../types/content';

export const PhysicalPropertiesModule: ModuleContent = {
  id: '04-physical-properties',
  order: 4,
  title: {
    en: 'Physical & Chemical Properties of Geometrical Isomers',
    bn: 'জ্যামিতিক সমাণুসমূহের ভৌত ও রাসায়নিক ধর্ম'
  },
  learningObjectives: [
    {
      en: 'Predict dipole moments by vector addition of individual bond polarities.',
      bn: 'ব্যক্তিগত বন্ধন পোলারিটির ভেক্টর যোগের মাধ্যমে ডাইপোল মোমেন্ট অনুমান করা।'
    },
    {
      en: 'Explain why cis isomers generally have higher boiling points while trans isomers have higher melting points.',
      bn: 'সিস আইসোমারের স্ফুটনাঙ্ক কেন সাধারণত বেশি এবং ট্রান্স আইসোমারের গলনাঙ্ক কেন বেশি তা ব্যাখ্যা করা।'
    },
    {
      en: 'Understand the dehydration reaction of maleic acid vs fumaric acid to form cyclic anhydrides.',
      bn: 'চক্রীয় অ্যানহাইড্রাইড তৈরিতে ম্যালিক অ্যাসিড বনাম ফিউমারিক অ্যাসিডের পানিশূন্যকরণ বিক্রিয়া বোঝা।'
    }
  ],
  sections: [
    {
      id: 'sec-prop-principles',
      type: 'text',
      title: {
        en: 'The Four Fundamental Property Rules',
        bn: 'চারটি মৌলিক বৈশিষ্ট্যের নিয়ম'
      },
      content: {
        en: 'Because geometrical isomers are diastereomers (non-superimposable stereoisomers that are not mirror images), they possess **different physical and chemical properties**:\n\n1. **Dipole Moment ($\\mu$)**: In symmetrical alkenes with polar bonds (e.g., 1,2-dichloroethene), the trans isomer has opposing bond dipoles that cancel out completely ($\\mu = 0\\text{ D}$), while the cis isomer has reinforcing dipoles ($\\mu > 0$).\n2. **Boiling Point (b.p.)**: The cis isomer, having a permanent net dipole moment, experiences stronger dipole-dipole attractions in the liquid state, typically leading to a **higher boiling point** than the non-polar trans isomer.\n3. **Melting Point (m.p.)**: The trans isomer is more symmetrical and linear, allowing it to pack more compactly and efficiently into the solid crystal lattice. Thus, the trans isomer almost always has a **higher melting point** than the bent cis isomer!\n4. **Solubility**: The more polar cis isomer is generally more soluble in polar solvents (like water or ethanol) than the trans isomer.',
        bn: 'যেহেতু জ্যামিতিক সমাণুগুলি ডায়াস্টেরিওমার (অ-উপরিচ্ছেদযোগ্য এবং পরস্পর দর্পণ প্রতিবিম্ব নয়), তাই তাদের **ভৌত ও রাসায়নিক ধর্ম সম্পূর্ণ ভিন্ন** হয়:\n\n১. **ডাইপোল মোমেন্ট ($\\mu$)**: প্রতিসম পোলার অ্যালকিনে (যেমন ১,২-ডাইক্লোরোইথিন) ট্রান্স সমাণুর বিপরীতমুখী ডাইপোল সম্পূর্ণরূপে প্রশমিত হয় ($\\mu = ০\\text{ D}$), কিন্তু সিস সমাণুতে ডাইপোলগুলি যুক্ত হয়ে শক্তিশালী নিট ডাইপোল গঠন করে ($\\mu > ০$) ।\n২. **স্ফুটনাঙ্ক**: সিস সমাণুর স্থায়ী ডাইপোল মোমেন্ট থাকার কারণে তরল অবস্থায় অণুগুলির মধ্যে শক্তিশালী ডাইপোল-ডাইপোল আকর্ষণ থাকে, যার ফলে সিস সমাণুর **স্ফুটনাঙ্ক বেশি** হয়।\n৩. **গলনাঙ্ক**: ট্রান্স সমাণুটি বেশি রৈখিক ও প্রতিসম হওয়ায় স্ফটিক জালকে অনেক নিবিড়ভাবে সন্নিবেশিত হতে পারে। তাই ট্রান্স সমাণুর **গলনাঙ্ক সিসের চেয়ে অনেক বেশি** হয়!\n৪. **দ্রাব্যতা**: অধিক পোলার হওয়ায় সিস সমাণু সাধারণত পোলার দ্রাবকে (যেমন পানি) ট্রান্স সমাণুর চেয়ে বেশি দ্রবণীয়।'
      }
    },
    {
      id: 'sec-prop-lab',
      type: 'interactive_3d',
      title: {
        en: 'Interactive 3D Laboratory: Physical Properties Dashboard',
        bn: 'ইন্টারেক্টিভ ৩ডি ল্যাব: ভৌত ধর্ম বিশ্লেষণ ড্যাশবোর্ড'
      },
      content: {
        en: 'Interactively compare dipole vectors, crystal packing symmetry, and the classic Maleic vs Fumaric anhydride dehydration test in real time!',
        bn: 'বাস্তব সময়ে ডাইপোল ভেক্টর, স্ফটিক প্যাকিং প্রতিসাম্য এবং ঐতিহাসিক ম্যালিক বনাম ফিউমারিক অ্যানহাইড্রাইড পরীক্ষাটি সরাসরি পরিচালনা করুন!'
      },
      modelConfig: { type: 'properties-lab' }
    },
    {
      id: 'sec-maleic-fumaric',
      type: 'text',
      title: {
        en: 'Chemical Distinction: Maleic Acid vs Fumaric Acid',
        bn: 'রাসায়নিক পার্থক্য: ম্যালিক অ্যাসিড বনাম ফিউমারিক অ্যাসিড'
      },
      content: {
        en: 'In **maleic acid** (cis-butenedioic acid), both $-COOH$ groups are on the same side of the double bond (intermolecular distance $\\approx 2.4\\text{ \\AA}$). When heated gently to $\\approx 140^\\circ\\text{C}$, it readily loses water to form **cyclic maleic anhydride**.\n\nIn **fumaric acid** (trans-butenedioic acid), the two $-COOH$ groups are on opposite sides (distance $\\approx 3.8\\text{ \\AA}$). Heating to $140^\\circ\\text{C}$ causes NO reaction! Only upon intense heating to $>280^\\circ\\text{C}$ does the double bond break thermally to allow isomerization into maleic acid before forming the anhydride.\n\nThis simple heating test provides conclusive experimental proof of cis vs trans stereochemistry!',
        bn: '**ম্যালিক অ্যাসিডে** (সিস-বিউটিনডাইওয়িক অ্যাসিড) উভয় $-COOH$ গ্রুপ দ্বিবন্ধনের একই পাশে থাকে (দূরত্ব মাত্র ২.৪ অ্যাংস্ট্রম)। ১৪০°সে তাপমাত্রায় সামান্য উত্তপ্ত করলেই এটি পানি ত্যাগ করে **চক্রীয় ম্যালিক অ্যানহাইড্রাইড** গঠন করে।\n\n**ফিউমারিক অ্যাসিডে** (ট্রান্স-বিউটিনডাইওয়িক অ্যাসিড) গ্রুপ দুটি বিপরীত পাশে থাকে (দূরত্ব ৩.৮ অ্যাংস্ট্রম)। ১৪০°সে-এ কোনো বিক্রিয়া হয় না! কেবল ২৮০°সে-এর ওপরে প্রবল উত্তাপে দ্বিবন্ধন ভেঙে সিস রূপে আইসোমারাইজেশনের পরই অ্যানহাইড্রাইড তৈরি হতে পারে।\n\nএই সহজ পরীক্ষাটি সিস বনাম ট্রান্স কাঠামোর একটি চূড়ান্ত পরীক্ষামূলক প্রমাণ!'
      }
    }
  ]
};

