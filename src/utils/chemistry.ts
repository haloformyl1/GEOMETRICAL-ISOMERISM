// Chemistry utilities, CPK colors, atomic radii, and CIP priority algorithms

export interface ElementCPK {
  color: string;
  radius: number; // Van der Waals radius (scaled for 3D viewport)
  atomicNumber: number;
}

export const ELEMENT_DATA: Record<string, ElementCPK> = {
  H:  { color: '#ffffff', radius: 0.28, atomicNumber: 1 },
  D:  { color: '#e0e7ff', radius: 0.28, atomicNumber: 1 }, // Deuterium
  T:  { color: '#c7d2fe', radius: 0.28, atomicNumber: 1 }, // Tritium
  C:  { color: '#334155', radius: 0.44, atomicNumber: 6 },
  N:  { color: '#3b82f6', radius: 0.42, atomicNumber: 7 },
  O:  { color: '#ef4444', radius: 0.40, atomicNumber: 8 },
  F:  { color: '#22c55e', radius: 0.38, atomicNumber: 9 },
  Cl: { color: '#10b981', radius: 0.52, atomicNumber: 17 },
  Br: { color: '#991b1b', radius: 0.58, atomicNumber: 35 },
  I:  { color: '#7e22ce', radius: 0.65, atomicNumber: 53 },
  P:  { color: '#f97316', radius: 0.50, atomicNumber: 15 },
  S:  { color: '#eab308', radius: 0.52, atomicNumber: 16 },
  Pt: { color: '#94a3b8', radius: 0.62, atomicNumber: 78 },
  Co: { color: '#0284c7', radius: 0.60, atomicNumber: 27 },
};

export const getElementColor = (el: string): string => {
  return ELEMENT_DATA[el]?.color || '#94a3b8';
};

export const getElementRadius = (el: string): number => {
  return ELEMENT_DATA[el]?.radius || 0.4;
};

export const getAtomicNumber = (el: string): number => {
  return ELEMENT_DATA[el]?.atomicNumber || 0;
};

/**
 * Compare two atoms or groups by Cahn-Ingold-Prelog Rule 1 (Atomic Number) and Rule 2 (Isotopes)
 * Returns positive if A > B, negative if B > A, 0 if tied
 */
export const compareCIPAtoms = (
  atomA: { element: string; massNumber?: number },
  atomB: { element: string; massNumber?: number }
): number => {
  const zA = getAtomicNumber(atomA.element);
  const zB = getAtomicNumber(atomB.element);
  if (zA !== zB) return zA - zB;

  // Isotope rule (D vs H)
  const getMass = (atom: { element: string; massNumber?: number }) => {
    if (atom.massNumber) return atom.massNumber;
    if (atom.element === 'H') return 1;
    if (atom.element === 'D') return 2;
    if (atom.element === 'T') return 3;
    return getAtomicNumber(atom.element) * 2;
  };
  const mA = getMass(atomA);
  const mB = getMass(atomB);
  return mA - mB;
};

/**
 * Check if a molecule possesses the basic structural requirement for geometrical isomerism:
 * - A rigid framework (e.g. C=C, cycloalkane, C=N, N=N)
 * - Two distinct groups on each stereocenter
 */
export const hasGeometricalIsomerism = (
  c1Groups: [string, string],
  c2Groups: [string, string]
): { possible: boolean; reason: string } => {
  if (c1Groups[0] === c1Groups[1]) {
    return {
      possible: false,
      reason: `Stereocenter 1 has identical substituents (${c1Groups[0]} and ${c1Groups[1]}). Rotation creates no new spatial arrangement.`,
    };
  }
  if (c2Groups[0] === c2Groups[1]) {
    return {
      possible: false,
      reason: `Stereocenter 2 has identical substituents (${c2Groups[0]} and ${c2Groups[1]}). Rotation creates no new spatial arrangement.`,
    };
  }
  return {
    possible: true,
    reason: `Both stereocenters have two distinct substituents (abC=Ccd). Geometrical isomerism is present!`,
  };
};

/**
 * Calculate net dipole moment from individual bond dipoles
 */
export const calculateNetDipole = (
  dipoles: Array<{ x: number; y: number; z: number }>
): number => {
  const net = dipoles.reduce(
    (acc, cur) => ({ x: acc.x + cur.x, y: acc.y + cur.y, z: acc.z + cur.z }),
    { x: 0, y: 0, z: 0 }
  );
  return Math.sqrt(net.x * net.x + net.y * net.y + net.z * net.z);
};

