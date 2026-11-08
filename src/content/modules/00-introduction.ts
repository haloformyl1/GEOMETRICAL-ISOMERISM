import type { ModuleContent } from '../../types/content';

export const IntroductionModule: ModuleContent = {
  id: '00-introduction',
  order: 0,
  title: {
    en: 'Foundations of Geometrical Isomerism',
    bn: 'জ্যামিতিক সমাণুতার ভিত্তি'
  },
  learningObjectives: [
    {
      en: 'Understand what stereoisomerism and geometrical isomerism (cis-trans isomerism) are.',
      bn: 'স্টেরিওআইসোমারিজম এবং জ্যামিতিক সমাণুতা (সিস-ট্রান্স সমাণুতা) কী তা বোঝা।'
    },
    {
      en: 'Explore the thermodynamic barrier to rotation around carbon-carbon double bonds (~260 kJ/mol).',
      bn: 'কার্বন-কার্বন দ্বিবন্ধনের চারপাশে ঘূর্ণনের তাপগতীয় বাধা (~২৬০ কিজু/মোল) অন্বেষণ করা।'
    },
    {
      en: 'Deduce the mandatory structural criteria required for any molecule to exhibit geometrical isomerism.',
      bn: 'যেকোনো অণুর জ্যামিতিক সমাণুতা প্রদর্শনের জন্য প্রয়োজনীয় শর্তাবলী নিরূপণ করা।'
    }
  ],
  sections: [
    {
      id: 'sec-what-is-gi',
      type: 'text',
      title: {
        en: 'What is Geometrical Isomerism?',
        bn: 'জ্যামিতিক সমাণুতা কী?'
      },
      content: {
        en: 'Geometrical isomerism (also known as diastereomerism arising from restricted rotation) occurs when molecules with the exact same molecular formula and atom-to-atom connectivity differ in the spatial geometry of their substituents in three-dimensional space.',
        bn: 'জ্যামিতিক সমাণুতা হলো এমন এক প্রকার স্টেরিও সমাণুতা যেখানে একই আণবিক সংকেত এবং একই বন্ধন বিন্যাস থাকা সত্ত্বেও পরমাণু বা মূলকসমূহের ত্রিমাত্রিক স্থানে ভিন্ন ভিন্ন অবস্থানের কারণে সমাণুর সৃষ্টি হয়।'
      }
    },
    {
      id: 'sec-rotation-simulator',
      type: 'interactive_3d',
      title: {
        en: 'Interactive 3D Lab: The Pi-Bond Rotation Barrier',
        bn: 'ইন্টারেক্টিভ ৩ডি ল্যাব: পাই-বন্ধন ঘূর্ণন বাধা'
      },
      content: {
        en: 'Drag the rotation slider below to attempt rotating the carbon-carbon double bond. Notice how twisting breaks the parallel overlap of the 2p orbitals, requiring ~260 kJ/mol of energy, which prevents free rotation at room temperature!',
        bn: 'নিচের স্লাইডার টেনে কার্বন-কার্বন দ্বিবন্ধনটি ঘোরানোর চেষ্টা করুন। লক্ষ্য করুন কীভাবে মোচড়ের ফলে ২p অরবিটালের সমান্তরাল অধিক্রমণ ভেঙে যায়, যার জন্য প্রায় ২৬০ কিজু/মোল শক্তির প্রয়োজন হয়। এই কারণেই সাধারণ তাপমাত্রায় মুক্ত ঘূর্ণন সম্ভব নয়!'
      },
      modelConfig: { type: 'bond-rotation-lab' }
    },
    {
      id: 'sec-conditions',
      type: 'text',
      title: {
        en: 'The Two Golden Rules for Geometrical Isomerism',
        bn: 'জ্যামিতিক সমাণুতার দুটি সুবর্ণ নিয়ম'
      },
      content: {
        en: 'For a compound to exhibit geometrical isomerism, two conditions must be satisfied simultaneously:\n\n1. **Restricted Rotation**: The molecule must possess a rigid framework that prevents free rotation (such as a C=C double bond, a cycloalkane ring, C=N, or N=N).\n2. **Non-identical Substituents on EACH Stereocenter**: Each of the two atoms at the ends of the rigid unit must be bonded to two DIFFERENT groups (e.g., abC=Cab or abC=Ccd). If even one carbon holds identical groups (e.g., aaC=Cxy), NO geometrical isomerism is possible!',
        bn: 'কোনো যৌগে জ্যামিতিক সমাণুতা থাকতে হলে দুটি শর্ত একসাথে পূরণ হতে হবে:\n\n১. **আবদ্ধ ঘূর্ণন**: অণুটিতে এমন একটি দৃঢ় কাঠামো থাকতে হবে যা মুক্ত ঘূর্ণন রোধ করে (যেমন C=C দ্বিবন্ধন, সাইক্লোঅ্যালকেন বলয়, C=N বা N=N)।\n২. **প্রতিটি স্টেরিওসেন্টারে ভিন্ন গ্রুপ**: দৃঢ় এককের দুই প্রান্তের প্রতিটি পরমাণুর সাথে দুটি ভিন্ন পরমাণু বা মূলক যুক্ত থাকতে হবে (যেমন abC=Cab বা abC=Ccd)। যদি একটি কার্বনেও দুটি অভিন্ন গ্রুপ থাকে (যেমন aaC=Cxy), তবে কোনো জ্যামিতিক সমাণুতা সম্ভব নয়!'
      }
    },
    {
      id: 'sec-misconception-terminal',
      type: 'misconception',
      modelConfig: {
        incorrect: {
          en: 'Any molecule with a carbon-carbon double bond exhibits geometrical isomerism (e.g., propene).',
          bn: 'কার্বন-কার্বন দ্বিবন্ধনযুক্ত যেকোনো অণুই জ্যামিতিক সমাণুতা প্রদর্শন করে (যেমন প্রোপিন)।'
        },
        correct: {
          en: 'Propene (CH2=CH-CH3) has TWO identical hydrogen atoms on C1 (H2C=...). Swapping them gives the exact same molecule. Terminal alkenes with =CH2 never exhibit geometrical isomerism!',
          bn: 'প্রোপিনের (CH2=CH-CH3) C1-এ দুটি অভিন্ন হাইড্রোজেন পরমাণু রয়েছে। তাদের স্থান পরিবর্তন করলে একই অণু পাওয়া যায়। =CH2 যুক্ত প্রান্তীয় অ্যালকিন কখনোই জ্যামিতিক সমাণুতা দেখায় না!'
        }
      }
    },
    {
      id: 'sec-next-cistrans',
      type: 'next_module_link',
      content: {
        en: 'Now that you understand the conditions, explore Module 1: Cis-Trans Isomerism in Alkenes, Rings & Metal Complexes.',
        bn: 'শর্তগুলি বোঝার পর, এবার ১ম অধ্যায় অন্বেষণ করুন: অ্যালকিন, বলয় এবং ধাতব যৌগে সিস-ট্রান্স সমাণুতা।'
      },
      modelConfig: { targetModuleId: '01-cis-trans' }
    }
  ]
};
