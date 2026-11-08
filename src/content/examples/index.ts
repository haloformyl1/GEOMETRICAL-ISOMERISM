import { CIS_TRANS_EXAMPLES } from './cisTransExamples';
import { EZ_EXAMPLES } from './ezExamples';
import { SYN_ANTI_EXAMPLES } from './synAntiExamples';
import type { IsomerPair, IsomerismCategory } from '../../types/isomerism';

export { CIS_TRANS_EXAMPLES } from './cisTransExamples';
export { EZ_EXAMPLES } from './ezExamples';
export { SYN_ANTI_EXAMPLES } from './synAntiExamples';

export const ALL_EXAMPLES: IsomerPair[] = [
  ...CIS_TRANS_EXAMPLES,
  ...EZ_EXAMPLES,
  ...SYN_ANTI_EXAMPLES,
];

export const getExamplesByCategory = (category: IsomerismCategory): IsomerPair[] => {
  return ALL_EXAMPLES.filter((ex) => ex.category === category);
};

export const getExampleById = (id: string): IsomerPair | undefined => {
  return ALL_EXAMPLES.find((ex) => ex.id === id);
};

