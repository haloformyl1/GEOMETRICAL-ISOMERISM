import type { BilingualString } from './content';

export type IsomerismCategory = 'cis-trans' | 'e-z' | 'syn-anti';

export interface Atom3D {
  id: string;
  element: string; // 'C', 'H', 'Cl', 'Br', 'F', 'I', 'O', 'N', 'Pt', 'S', etc.
  name?: string;
  position: [number, number, number];
  color?: string;
  radius?: number;
  label?: string;
  charge?: number;
  cipPriority?: 1 | 2;
  isStereocenter?: boolean;
}

export interface Bond3D {
  from: string; // atom id
  to: string;   // atom id
  order: 1 | 2 | 3;
  color?: string;
}

export interface DipoleVector {
  from: [number, number, number];
  to: [number, number, number];
  magnitude: number; // in Debyes
}

export interface MolecularStructure3D {
  name: BilingualString;
  formula: string;
  atoms: Atom3D[];
  bonds: Bond3D[];
  dipoleNet?: number; // Debye
  dipoleVectors?: DipoleVector[];
  boilingPoint?: string;
  meltingPoint?: string;
  stabilityRank?: 'more' | 'less' | 'equal';
  stabilityReason?: BilingualString;
  specialProperty?: BilingualString;
}

export interface IsomerPair {
  id: string;
  category: IsomerismCategory;
  iupacName: BilingualString;
  commonName?: BilingualString;
  formula: string;
  systemType: 'alkene' | 'cycloalkane' | 'oxime' | 'azo' | 'complex' | 'polyene';
  isomerA: {
    label: string; // e.g. "Cis", "Z", "Syn"
    descriptor: string;
    structure: MolecularStructure3D;
  };
  isomerB: {
    label: string; // e.g. "Trans", "E", "Anti"
    descriptor: string;
    structure: MolecularStructure3D;
  };
  cipDerivation?: {
    carbon1: {
      group1: { name: string; atomicNumber: number; priority: 1 | 2 };
      group2: { name: string; atomicNumber: number; priority: 1 | 2 };
      ruleApplied: string;
    };
    carbon2: {
      group1: { name: string; atomicNumber: number; priority: 1 | 2 };
      group2: { name: string; atomicNumber: number; priority: 1 | 2 };
      ruleApplied: string;
    };
    explanation: BilingualString;
  };
  pedagogicalNote?: BilingualString;
}

