import React from 'react';
import { FlaskConical, Orbit, Layers, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { BilingualText } from '../components/BilingualText';
import { PageContainer, PageHeader, SectionHeader } from '../components/ui/LayoutPrimitives';
import { FullscreenInteractiveFrame } from '../components/ui/FullscreenInteractiveFrame';

import { BondRotationSimulator } from '../components/3d/BondRotationSimulator';
import { CisTransLab } from '../components/labs/CisTransLab';
import { CIPPriorityLab } from '../components/labs/CIPPriorityLab';
import { SynAntiLab } from '../components/labs/SynAntiLab';
import { PhysicalPropertiesLab } from '../components/labs/PhysicalPropertiesLab';

const labSections = [
  {
    id: 'bond-rotation',
    title: <BilingualText en="Pi-Bond Rotation Barrier Simulator" bn="পাই-বন্ধন ঘূর্ণন বাধা সিমুলেটর" />,
    subtitle: <BilingualText en="Investigate why C=C double bonds cannot freely rotate at room temperature (~260 kJ/mol barrier)." bn="সাধারণ তাপমাত্রায় কেন কার্বন-কার্বন দ্বিবন্ধনের মুক্ত ঘূর্ণন সম্ভব নয় (~২৬০ কিজু/মোল বাধা) তা পরীক্ষা করুন।" />,
    icon: Orbit,
    content: <BondRotationSimulator />,
  },
  {
    id: 'cis-trans',
    title: <BilingualText en="Cis-Trans Molecular Comparator (26+ Examples)" bn="সিস-ট্রান্স মলিকুলার কম্প্যারেটর (২৬+ উদাহরণ)" />,
    subtitle: <BilingualText en="Explore 26 acyclic alkenes, cycloalkanes, and square planar coordination complexes." bn="২৬টি অ্যালকিন, সাইক্লোঅ্যালকেন এবং বর্গাকার সমতলীয় জটিল যৌগ অন্বেষণ করুন।" />,
    icon: Layers,
    content: <CisTransLab />,
  },
  {
    id: 'cip-priority',
    title: <BilingualText en="Step-by-Step CIP Priority Solver (26+ E-Z Challenges)" bn="সিআইপি অগ্রাধিকার সমাধানকারী (২৬+ E-Z চ্যালেঞ্জ)" />,
    subtitle: <BilingualText en="Master the 4 Cahn-Ingold-Prelog priority rules and discover why cis is not always Z." bn="কান-ইনগোল্ড-প্রীলগের ৪টি অগ্রাধিকার নিয়ম আয়ত্ত করুন এবং সিস কেন সবসময় Z নয় তা জানুন।" />,
    icon: Sparkles,
    content: <CIPPriorityLab />,
  },
  {
    id: 'syn-anti',
    title: <BilingualText en="Syn-Anti Nitrogen & Photoisomerization Lab (26+ Examples)" bn="সিন-অ্যান্টি নাইট্রোজেন ও ফটোআইসোমারিজম ল্যাব (২৬+ উদাহরণ)" />,
    subtitle: <BilingualText en="Examine oxime lone pairs, Beckmann anti-migration, and azobenzene UV/blue photo-switching." bn="অক্সাইমের নিঃসঙ্গ ইলেকট্রন জোড়, বেকম্যান অ্যান্টি-মাইগ্রেশন এবং অ্যাজোবেনজিন ফটো-সুইচিং পর্যবেক্ষণ করুন।" />,
    icon: ShieldAlert,
    content: <SynAntiLab />,
  },
  {
    id: 'properties',
    title: <BilingualText en="Physical Properties & Maleic/Fumaric Dehydration Lab" bn="ভৌত ধর্ম ও ম্যালিক/ফিউমারিক পানিশূন্যকরণ ল্যাব" />,
    subtitle: <BilingualText en="Simulate the heating test for anhydride formation and compare dipole vectors." bn="অ্যানহাইড্রাইড গঠনের তাপীয় পরীক্ষা পরিচালনা করুন এবং ডাইপোল ভেক্টর তুলনা করুন।" />,
    icon: Flame,
    content: <PhysicalPropertiesLab />,
  },
];

export const Lab: React.FC = () => {
  return (
    <div className="w-full">
      <PageContainer>
        <PageHeader
          eyebrow={<BilingualText en="Scientific 3D Workspace" bn="বৈজ্ঞানিক ৩ডি পরীক্ষাগার" />}
          icon={FlaskConical}
          title={<BilingualText en="PIECHEM Stereochemistry Laboratory" bn="PIECHEM স্টেরিওরসায়ন ল্যাবরেটরি" />}
          description={<BilingualText en="Experiment with rotational barriers, Cahn-Ingold-Prelog sequence rules, oxime lone pairs, and physical property differences across all 78+ chemical examples." bn="ঘূর্ণন বাধা, সিআইপি নিয়ম, অক্সাইম নিঃসঙ্গ জোড় এবং ৭৮টিরও বেশি রাসায়নিক উদাহরণের ভৌত ধর্মের পরিবর্তন সরাসরি পরীক্ষা করুন।" />}
        />

        <div className="mt-10 space-y-16 sm:mt-12 sm:space-y-20">
          {labSections.map((lab, index) => (
            <section key={lab.id} id={lab.id} className="scroll-mt-32">
              <SectionHeader
                title={
                  <span>
                    <span className="mr-2 text-slate-500 font-mono">{String(index + 1).padStart(2, '0')}</span>
                    {lab.title}
                  </span>
                }
                subtitle={lab.subtitle}
                icon={lab.icon}
                accent={index === 1 ? 'violet' : index === 2 ? 'teal' : index === 4 ? 'amber' : 'blue'}
                className="mb-6"
              />
              <FullscreenInteractiveFrame title={lab.title}>
                {lab.content}
              </FullscreenInteractiveFrame>
            </section>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};
