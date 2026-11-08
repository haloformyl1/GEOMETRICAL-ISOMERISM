import React from 'react';
import { PageContainer, PageHeader } from '../components/ui/LayoutPrimitives';
import { BilingualText } from '../components/BilingualText';
import { ExamplesCatalogLab } from '../components/labs/ExamplesCatalogLab';
import { Layers } from 'lucide-react';

export const Examples: React.FC = () => {
  return (
    <div className="w-full">
      <PageContainer>
        <PageHeader
          eyebrow={<BilingualText en="Curated Chemical Database" bn="নির্বাচিত রাসায়নিক ডাটাবেস" />}
          icon={Layers}
          title={<BilingualText en="78+ Curated Molecular Examples" bn="৭৮টিরও বেশি নির্বাচিত আণবিক উদাহরণ" />}
          description={<BilingualText en="Browse 26+ Cis-Trans, 26+ E-Z, and 26+ Syn-Anti molecular models with 3D coordinates, IUPAC nomenclature, and physical property comparisons." bn="৩ডি স্থানাঙ্ক, আইইউপিএসি নামকরণ এবং ভৌত ধর্মের তুলনাসহ ২৬+ সিস-ট্রান্স, ২৬+ E-Z এবং ২৬+ সিন-অ্যান্টি আণবিক মডেল ব্রাউজ করুন।" />}
        />

        <div className="mt-8">
          <ExamplesCatalogLab />
        </div>
      </PageContainer>
    </div>
  );
};

