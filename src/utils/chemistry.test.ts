import { describe, it, expect } from 'vitest';
import {
  ELEMENT_DATA,
  getElementColor,
  getElementRadius,
  getAtomicNumber,
  compareCIPAtoms,
  hasGeometricalIsomerism,
  calculateNetDipole
} from './chemistry';

describe('Stereochemistry Utilities', () => {
  it('should return correct atomic numbers for CIP priority', () => {
    expect(getAtomicNumber('I')).toBe(53);
    expect(getAtomicNumber('Br')).toBe(35);
    expect(getAtomicNumber('Cl')).toBe(17);
    expect(getAtomicNumber('F')).toBe(9);
    expect(getAtomicNumber('O')).toBe(8);
    expect(getAtomicNumber('N')).toBe(7);
    expect(getAtomicNumber('C')).toBe(6);
    expect(getAtomicNumber('H')).toBe(1);
  });

  it('should correctly prioritize halogens by atomic number (CIP Rule 1)', () => {
    expect(compareCIPAtoms({ element: 'Br' }, { element: 'Cl' })).toBeGreaterThan(0);
    expect(compareCIPAtoms({ element: 'Cl' }, { element: 'F' })).toBeGreaterThan(0);
    expect(compareCIPAtoms({ element: 'F' }, { element: 'H' })).toBeGreaterThan(0);
  });

  it('should correctly prioritize isotopes (CIP Rule 2: D > H)', () => {
    expect(compareCIPAtoms({ element: 'D' }, { element: 'H' })).toBeGreaterThan(0);
  });

  it('should detect when terminal alkene lacks geometrical isomerism', () => {
    const res = hasGeometricalIsomerism(['H', 'H'], ['CH3', 'H']);
    expect(res.possible).toBe(false);
  });

  it('should detect when internal alkene has geometrical isomerism', () => {
    const res = hasGeometricalIsomerism(['CH3', 'H'], ['CH3', 'H']);
    expect(res.possible).toBe(true);
  });

  it('should compute net dipole cancellation for trans-like vectors', () => {
    // Two opposing dipoles along x-axis
    const net = calculateNetDipole([
      { x: 1.5, y: 0, z: 0 },
      { x: -1.5, y: 0, z: 0 }
    ]);
    expect(net).toBeCloseTo(0);
  });

  it('should compute net dipole addition for cis-like vectors', () => {
    const net = calculateNetDipole([
      { x: 1.0, y: 1.0, z: 0 },
      { x: -1.0, y: 1.0, z: 0 }
    ]);
    expect(net).toBeCloseTo(2.0);
  });
});

