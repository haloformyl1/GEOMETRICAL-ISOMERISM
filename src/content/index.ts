import { IntroductionModule } from './modules/00-introduction';
import { CisTransModule } from './modules/01-cis-trans';
import { EZModule } from './modules/02-ez-system';
import { SynAntiModule } from './modules/03-syn-anti';
import { PhysicalPropertiesModule } from './modules/04-physical-properties';
import type { ModuleContent } from '../types/content';

export const modules: ModuleContent[] = [
  IntroductionModule,
  CisTransModule,
  EZModule,
  SynAntiModule,
  PhysicalPropertiesModule
];

export const getModuleById = (id: string): ModuleContent | undefined => {
  return modules.find((m) => m.id === id);
};

