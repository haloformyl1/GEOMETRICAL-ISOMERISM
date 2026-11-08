import type { ModuleContent } from '../../types/content';

export const SynAntiModule: ModuleContent = {
  id: '03-syn-anti',
  order: 3,
  title: {
    en: 'Syn-Anti Isomerism in Nitrogen & Polycyclic Systems',
    bn: 'নাইট্রোজেন ও পলিসাইক্লিক সিস্টেমে সিন-অ্যান্টি সমাণুতা'
  },
  learningObjectives: [
    {
      en: 'Understand geometrical isomerism in compounds with carbon-nitrogen double bonds (>C=N-) such as oximes and hydrazones.',
      bn: 'অক্সাইম ও হাইড্রাজোনের মতো কার্বন-নাইট্রোজেন দ্বিবন্ধনযুক্ত (>C=N-) যৌগে জ্যামিতিক সমাণুতা বোঝা।'
    },
    {
      en: 'Investigate syn-anti photoisomerization in azo compounds (-N=N-) like azobenzene.',
      bn: 'অ্যাজোবেনজিনের মতো অ্যাজো যৌগে (-N=N-) সিন-অ্যান্টি আলোক সমাণুকরণ অন্বেষণ করা।'
    },
    {
      en: 'Understand the stereochemistry of the Beckmann rearrangement and ring junction stereochemistry in decalins.',
      bn: 'বেকম্যান রূপান্তরের স্টেরিওরসায়ন এবং ডেক্যালিনের বলয় সংযোগ স্টেরিওরসায়ন বোঝা।'
    }
  ],
  sections: [
    {
      id: 'sec-sa-definition',
      type: 'text',
      title: {
        en: 'The Nitrogen Stereocenter: Why Oximes Have Isomers',
        bn: 'নাইট্রোজেন স্টেরিওসেন্টার: অক্সাইমে কেন সমাণুতা থাকে'
      },
      content: {
        en: 'In oximes ($>C=N-OH$), the nitrogen atom is $sp^2$ hybridized. Two $sp^2$ orbitals form the $\\sigma$-bonds (to carbon and to oxygen), the unhybridized $p$-orbital forms the $\\pi$-bond to carbon, and the third $sp^2$ orbital houses a **stereochemically active lone pair** in the molecular plane!\n\nBecause rotation around the $C=N$ double bond is restricted by $\\approx 200\\text{ kJ/mol}$, the $-OH$ group cannot invert easily at room temperature. This results in **syn-anti isomerism**:\n- **Aldoximes ($R-CH=N-OH$)**: When $H$ and $OH$ are on the same side, it is **syn**; when on opposite sides, it is **anti**.\n- **Ketoximes ($R_1-C(R_2)=N-OH$)**: Named relative to each group (e.g., *syn*-methyl *anti*-phenyl ketoxime). If $R_1 = R_2$, no isomerism exists!',
        bn: 'অক্সাইমে ($>C=N-OH$) নাইট্রোজেন পরমাণুটি $sp^2$ সংকরায়িত। দুটি $sp^2$ অরবিটাল সিগমা বন্ধন তৈরি করে, একটি অসংকরায়িত $p$-অরবিটাল পাই-বন্ধন তৈরি করে এবং তৃতীয় $sp^2$ অরবিটালে থাকে একটি **স্টেরিওকেমিক্যালি সক্রিয় নিঃসঙ্গ ইলেকট্রন জোড়**!\n\nযেহেতু $C=N$ দ্বিবন্ধনের চারপাশে ঘূর্ণন বাধা প্রায় ২০০ কিজু/মোল, তাই সাধারণ তাপমাত্রায় $-OH$ গ্রুপ স্থান পরিবর্তন করতে পারে না। এর ফলে **সিন-অ্যান্টি সমাণুতা** সৃষ্টি হয়:\n- **অ্যালডক্সাইম ($R-CH=N-OH$)**: যখন $H$ এবং $OH$ একই পাশে থাকে তাকে **সিন** বলে; বিপরীত পাশে থাকলে **অ্যান্টি** বলে।\n- **কিটক্সাইম ($R_1-C(R_2)=N-OH$)**: প্রতিটি গ্রুপের সাপেক্ষে নামকরণ করা হয় (যেমন *সিন*-মিথাইল *অ্যান্টি*-ফিনাইল কিটক্সাইম)। যদি $R_1 = R_2$ হয় তবে কোনো সমাণুতা সম্ভব নয়!'
      }
    },
    {
      id: 'sec-sa-lab',
      type: 'interactive_3d',
      title: {
        en: 'Interactive 3D Laboratory: Syn-Anti Molecular Explorer',
        bn: 'ইন্টারেক্টিভ ৩ডি ল্যাব: সিন-অ্যান্টি মলিকুলার এক্সপ্লোরার'
      },
      content: {
        en: 'Explore 26 syn-anti structures including aldoximes, ketoximes, azobenzene photo-switches, DMG complexes, and decalins. Observe the nitrogen lone pair geometry and physical properties!',
        bn: 'অ্যালডক্সাইম, কিটক্সাইম, অ্যাজোবেনজিন ফটো-সুইচ, DMG জটিল যৌগ এবং ডেক্যালিনসহ ২৬টি সিন-অ্যান্টি গঠন অন্বেষণ করুন। নাইট্রোজেনের নিঃসঙ্গ জোড় এবং ভৌত বৈশিষ্ট্যগুলি পর্যবেক্ষণ করুন!'
      },
      modelConfig: { type: 'syn-anti-lab' }
    },
    {
      id: 'sec-beckmann',
      type: 'text',
      title: {
        en: 'Stereospecificity in the Beckmann Rearrangement',
        bn: 'বেকম্যান রূপান্তরের স্টেরিওনির্দিষ্টতা'
      },
      content: {
        en: 'When a ketoxime is treated with acid ($H_2SO_4$, $PCl_5$, or $SOCl_2$), it undergoes the **Beckmann rearrangement** into an N-substituted amide. The reaction is strictly stereospecific:\n\n$$\\text{The group positioned } \\textbf{ANTI} \\text{ to the leaving } -OH \\text{ group migrates to nitrogen!}$$\n\nThis anti-periplanar migration provides an irrefutable experimental method for determining the stereochemical configuration of ketoximes.',
        bn: 'যখন কোনো কিটক্সাইমকে অ্যাসিড ($H_2SO_4$, $PCl_5$, বা $SOCl_2$) দিয়ে উত্তপ্ত করা হয়, তখন এটি **বেকম্যান রূপান্তরের** মাধ্যমে N-প্রতিস্থাপিত অ্যামাইডে পরিণত হয়। এই বিক্রিয়াটি সম্পূর্ণ স্টেরিওনির্দিষ্ট:\n\n$$\\text{অপসারিত } -OH \\text{ গ্রুপের } \\textbf{অ্যান্টি (ANTI)} \\text{ অবস্থানে থাকা গ্রুপটিই নাইট্রোজেনে স্থানান্তরিত হয়!}$$\n\nএই অ্যান্টি-স্থানান্তর কিটক্সাইমের স্টেরিওরাসায়নিক গঠন প্রমাণের একটি অবিসংবাদিত পরীক্ষামূলক পদ্ধতি।'
      }
    },
    {
      id: 'sec-azo-photo',
      type: 'text',
      title: {
        en: 'Azobenzene: The Light-Driven Molecular Machine',
        bn: 'অ্যাজোবেনজিন: আলোক-চালিত আণবিক মেশিন'
      },
      content: {
        en: 'Azobenzene ($Ph-N=N-Ph$) features a nitrogen-nitrogen double bond. The **trans (anti)** isomer is flat, planar, and non-polar ($\mu = 0\\text{ D}$). Upon exposure to ultraviolet light ($\\approx 365\\text{ nm}$), it absorbs energy and cleanly isomerizes into the bent, polar **cis (syn)** isomer ($\mu = 3.0\\text{ D}$). Exposure to blue light ($\\approx 450\\text{ nm}$) or gentle heat rapidly restores the trans isomer. This clean photoisomerization powers modern molecular optical switches and smart materials!',
        bn: 'অ্যাজোবেনজিনে ($Ph-N=N-Ph$) একটি নাইট্রোজেন-নাইট্রোজেন দ্বিবন্ধন থাকে। এর **ট্রান্স (অ্যান্টি)** রূপটি সমতল এবং অধ্রুবীয় ($\mu = ০\\text{ D}$)। আল্ট্রাভায়োলেট আলোতে (৩৬৫ ন্যানোমিটার) এটি আলো শোষণ করে বাঁকা ও ধ্রুবীয় **সিস (সিন)** রূপে রূপান্তরিত হয় ($\mu = ৩.০\\text{ D}$)। আবার নীল আলো (৪৫০ ন্যানোমিটার) বা সামান্য তাপে এটি পূর্বের ট্রান্স রূপে ফিরে আসে। এটি আধুনিক অপটিক্যাল সুইচ এবং স্মার্ট উপাদানের ভিত্তি!'
      }
    },
    {
      id: 'sec-next-properties',
      type: 'next_module_link',
      content: {
        en: 'Explore how stereochemistry dictates boiling points, melting points, and chemical reactivity in Module 4: Physical & Chemical Properties.',
        bn: 'স্টেরিওরসায়ন কীভাবে স্ফুটনাঙ্ক, গলনাঙ্ক এবং রাসায়নিক সক্রিয়তা নিয়ন্ত্রণ করে তা ৪র্থ অধ্যায়ে অন্বেষণ করুন: ভৌত ও রাসায়নিক ধর্ম।'
      },
      modelConfig: { targetModuleId: '04-physical-properties' }
    }
  ]
};
