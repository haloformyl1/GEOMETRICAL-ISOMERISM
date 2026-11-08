import type { IsomerPair } from '../../types/isomerism';

export const CIS_TRANS_EXAMPLES: IsomerPair[] = [
{
  "id": "ct-01",
  "category": "cis-trans",
  "iupacName": {
    "en": "But-2-ene",
    "bn": "\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
  },
  "commonName": null,
  "formula": "C4H8",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-But-2-ene",
    "structure": {
      "name": {
        "en": "Cis-But-2-ene",
        "bn": "\u09b8\u09bf\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H8",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.33,
      "boilingPoint": "3.7\u00b0C",
      "meltingPoint": "-138.9\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Steric repulsion between adjacent bulky methyl groups.",
        "bn": "\u09aa\u09be\u09b6\u09be\u09aa\u09be\u09b6\u09bf \u09a5\u09be\u0995\u09be \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09bf\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-But-2-ene",
    "structure": {
      "name": {
        "en": "Trans-But-2-ene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H8",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "0.9\u00b0C",
      "meltingPoint": "-105.5\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Methyl groups on opposite sides minimize van der Waals repulsion and pack tighter into crystal lattice.",
        "bn": "\u09ac\u09bf\u09aa\u09b0\u09c0\u09a4 \u09a6\u09bf\u0995\u09c7 \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09bf \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u0995\u09ae\u09be\u09af\u09bc \u098f\u09ac\u0982 \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u099c\u09be\u09b2\u0995\u09c7 \u0998\u09a8\u09ad\u09be\u09ac\u09c7 \u09b8\u09a8\u09cd\u09a8\u09bf\u09ac\u09c7\u09b6\u09bf\u09a4 \u09b9\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Prototypical symmetrical alkene demonstrating how cis isomers have higher boiling points due to dipole moment, while trans isomers have higher melting points due to packing symmetry.",
    "bn": "\u098f\u0995\u099f\u09bf \u0986\u09a6\u09b0\u09cd\u09b6 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u09af\u09be \u09a6\u09c7\u0996\u09be\u09af\u09bc \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09ae\u09cb\u09ae\u09c7\u09a8\u09cd\u099f\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7\u09b0 \u09b8\u09cd\u09ab\u09c1\u099f\u09a8\u09be\u0999\u09cd\u0995 \u09ac\u09c7\u09b6\u09bf \u09b9\u09af\u09bc \u098f\u09ac\u0982 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u099c\u09be\u09b2\u0995\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7\u09b0 \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09ac\u09c7\u09b6\u09bf \u09b9\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-02",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dichloroethene",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "commonName": null,
  "formula": "C2H2Cl2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dichloroethene",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dichloroethene",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Cl",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.9,
      "boilingPoint": "60.3\u00b0C",
      "meltingPoint": "-80.5\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "C-Cl bond dipoles reinforce each other creating a strong permanent dipole.",
        "bn": "C-Cl \u09ac\u09a8\u09cd\u09a7\u09a8\u09c7\u09b0 \u09a1\u09be\u0987\u09aa\u09cb\u09b2\u0997\u09c1\u09b2\u09bf \u09aa\u09b0\u09b8\u09cd\u09aa\u09b0\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09b9\u09af\u09bc\u09c7 \u09b6\u0995\u09cd\u09a4\u09bf\u09b6\u09be\u09b2\u09c0 \u09b8\u09cd\u09a5\u09be\u09af\u09bc\u09c0 \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dichloroethene",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dichloroethene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Cl",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "47.5\u00b0C",
      "meltingPoint": "-49.4\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Opposing C-Cl dipoles perfectly cancel out (\u03bc = 0). Center of inversion yields higher crystal melting point.",
        "bn": "\u09ac\u09bf\u09aa\u09b0\u09c0\u09a4\u09ae\u09c1\u0996\u09c0 C-Cl \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09aa\u09cd\u09b0\u09b6\u09ae\u09bf\u09a4 \u09b9\u09af\u09bc (\u03bc = \u09e6)\u0964 \u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09be\u09ae\u09cd\u09af \u0989\u099a\u09cd\u099a \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09a6\u09c7\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Classic textbook proof of vector addition of bond dipoles: cis-1,2-dichloroethene is polar while trans is non-polar.",
    "bn": "\u09ac\u09a8\u09cd\u09a7\u09a8 \u09a1\u09be\u0987\u09aa\u09cb\u09b2\u09c7\u09b0 \u09ad\u09c7\u0995\u09cd\u099f\u09b0 \u09af\u09cb\u0997\u09c7\u09b0 \u09aa\u09cd\u09b0\u09be\u09ae\u09be\u09a3\u09cd\u09af \u0989\u09a6\u09be\u09b9\u09b0\u09a3: \u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0987\u09a5\u09bf\u09a8 \u09a7\u09cd\u09b0\u09c1\u09ac\u09c0\u09af\u09bc \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0985\u09a7\u09cd\u09b0\u09c1\u09ac\u09c0\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-03",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Difluoroethene",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "commonName": null,
  "formula": "C2H2F2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Difluoroethene",
    "structure": {
      "name": {
        "en": "Cis-1,2-Difluoroethene",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2F2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "F",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "F"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "F",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "F"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.42,
      "boilingPoint": "-26.0\u00b0C",
      "meltingPoint": "-130.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Displays the famous 'cis effect' where hyperconjugation between C-H \u03c3-bonding and C-F \u03c3*-antibonding orbitals makes the cis isomer thermodynamically more stable.",
        "bn": "\u09ac\u09bf\u0996\u09cd\u09af\u09be\u09a4 '\u09b8\u09bf\u09b8 \u09aa\u09cd\u09b0\u09ad\u09be\u09ac' \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u09b9\u09be\u0987\u09aa\u09be\u09b0\u0995\u09a8\u099c\u09c1\u0997\u09c7\u09b6\u09a8\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u099f\u09bf \u09a4\u09be\u09aa\u0997\u09a4\u09c0\u09af\u09bc\u09ad\u09be\u09ac\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Difluoroethene",
    "structure": {
      "name": {
        "en": "Trans-1,2-Difluoroethene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2F2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "F",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "F"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "F",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "F"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "-30.0\u00b0C",
      "meltingPoint": "-115.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Lacks the hyperconjugative stabilizing overlap present in the cis conformation.",
        "bn": "\u09b8\u09bf\u09b8 \u09b0\u09c2\u09aa\u09c7\u09b0 \u09ae\u09a4\u09cb \u09b9\u09be\u0987\u09aa\u09be\u09b0\u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09bf\u09ad \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u09a4\u09be\u09b0 \u0985\u09ad\u09be\u09ac \u09b0\u09af\u09bc\u09c7\u099b\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Exception to the rule that trans isomers are always more stable: fluorine atoms exhibit the quantum mechanical 'cis effect'.",
    "bn": "'\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09b8\u09ac\u09b8\u09ae\u09af\u09bc \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2' \u09a8\u09bf\u09af\u09bc\u09ae\u09c7\u09b0 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u09ac\u09cd\u09af\u09a4\u09bf\u0995\u09cd\u09b0\u09ae: \u09ab\u09cd\u09b2\u09c1\u09b0\u09bf\u09a8 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1 \u0995\u09cb\u09af\u09bc\u09be\u09a8\u09cd\u099f\u09be\u09ae \u09ae\u09c7\u0995\u09be\u09a8\u09bf\u0995\u09cd\u09af\u09be\u09b2 '\u09b8\u09bf\u09b8 \u09aa\u09cd\u09b0\u09ad\u09be\u09ac' \u09a6\u09c7\u0996\u09be\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-04",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dibromoethene",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "commonName": null,
  "formula": "C2H2Br2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dibromoethene",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dibromoethene",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2Br2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Br",
          "position": [
            -1.8,
            1.3,
            0
          ],
          "label": "Br"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Br",
          "position": [
            1.8,
            1.3,
            0
          ],
          "label": "Br"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.35,
      "boilingPoint": "110.0\u00b0C",
      "meltingPoint": "-53.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Large bromine van der Waals shells clash across the double bond.",
        "bn": "\u09ac\u09a1\u09bc \u09ac\u09cd\u09b0\u09cb\u09ae\u09bf\u09a8 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09ad\u09cd\u09af\u09be\u09a8 \u09a1\u09be\u09b0 \u0993\u09af\u09bc\u09be\u09b2\u09b8 \u0995\u0995\u09cd\u09b7\u0997\u09c1\u09b2\u09bf\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09a4\u09c0\u09ac\u09cd\u09b0 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u0998\u099f\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dibromoethene",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dibromoethene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2Br2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Br",
          "position": [
            -1.8,
            1.3,
            0
          ],
          "label": "Br"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Br",
          "position": [
            1.8,
            -1.3,
            0
          ],
          "label": "Br"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "108.0\u00b0C",
      "meltingPoint": "-6.5\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Bromines positioned 180\u00b0 apart remove all steric interference.",
        "bn": "\u09ac\u09cd\u09b0\u09cb\u09ae\u09bf\u09a8 \u09e7\u09ee\u09e6\u00b0 \u09ac\u09bf\u09aa\u09b0\u09c0\u09a4\u09c7 \u09a5\u09be\u0995\u09be\u09af\u09bc \u0995\u09cb\u09a8\u09cb \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be \u09a5\u09be\u0995\u09c7 \u09a8\u09be\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Heavy halogens have very large van der Waals radii, making the steric repulsion in the cis isomer severe.",
    "bn": "\u09ad\u09be\u09b0\u09c0 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u09ac\u09a1\u09bc \u09ad\u09cd\u09af\u09be\u09a8 \u09a1\u09be\u09b0 \u0993\u09af\u09bc\u09be\u09b2\u09b8 \u09ac\u09cd\u09af\u09be\u09b8\u09be\u09b0\u09cd\u09a7\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7 \u09a4\u09c0\u09ac\u09cd\u09b0 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u09a4\u09c8\u09b0\u09bf \u09b9\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-05",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Diiodoethene",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "commonName": null,
  "formula": "C2H2I2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Diiodoethene",
    "structure": {
      "name": {
        "en": "Cis-1,2-Diiodoethene",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2I2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "I",
          "position": [
            -1.9,
            1.4,
            0
          ],
          "label": "I"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "I",
          "position": [
            1.9,
            1.4,
            0
          ],
          "label": "I"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.2,
      "boilingPoint": "188.0\u00b0C",
      "meltingPoint": "-14.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Extreme steric congestion between two massive iodine atoms.",
        "bn": "\u09a6\u09c1\u099f\u09bf \u09ac\u09bf\u09b6\u09be\u09b2 \u0986\u09af\u09bc\u09cb\u09a1\u09bf\u09a8 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u099a\u09b0\u09ae \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u099a\u09be\u09aa\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Diiodoethene",
    "structure": {
      "name": {
        "en": "Trans-1,2-Diiodoethene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2H2I2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "I",
          "position": [
            -1.9,
            1.4,
            0
          ],
          "label": "I"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "I",
          "position": [
            1.9,
            -1.4,
            0
          ],
          "label": "I"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "192.0\u00b0C",
      "meltingPoint": "72.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Highly linear molecular symmetry allows dense, crystal lattice formation with high melting point.",
        "bn": "\u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b0\u09c8\u0996\u09bf\u0995 \u0986\u09a3\u09ac\u09bf\u0995 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09be\u09ae\u09cd\u09af \u0998\u09a8 \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u099c\u09be\u09b2\u0995 \u0997\u09a0\u09a8 \u0995\u09b0\u09a4\u09c7 \u09a6\u09c7\u09af\u09bc, \u09ab\u09b2\u09c7 \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u0985\u09a8\u09c7\u0995 \u09ac\u09c7\u09b6\u09bf\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Note the dramatic melting point difference: trans melts at +72\u00b0C (solid at room temperature) while cis melts at -14\u00b0C (liquid).",
    "bn": "\u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995\u09c7\u09b0 \u09a8\u09be\u099f\u0995\u09c0\u09af\u09bc \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u09b2\u0995\u09cd\u09b7\u09cd\u09af \u0995\u09b0\u09c1\u09a8: \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09b2\u09c7 +\u09ed\u09e8\u00b0\u09b8\u09c7-\u098f (\u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09af\u09bc \u0995\u09a0\u09bf\u09a8), \u0985\u09a8\u09cd\u09af\u09a6\u09bf\u0995\u09c7 \u09b8\u09bf\u09b8 \u0997\u09b2\u09c7 -\u09e7\u09ea\u00b0\u09b8\u09c7-\u098f (\u09a4\u09b0\u09b2)\u0964"
  }
},
{
  "id": "ct-06",
  "category": "cis-trans",
  "iupacName": {
    "en": "But-2-enedioic acid",
    "bn": "\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a1\u09be\u0987\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "commonName": {
    "en": "Maleic acid (cis) / Fumaric acid (trans)",
    "bn": "\u09ae\u09cd\u09af\u09be\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u09b8\u09bf\u09b8) / \u09ab\u09bf\u0989\u09ae\u09be\u09b0\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8)"
  },
  "formula": "C4H4O4",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-But-2-enedioic acid",
    "structure": {
      "name": {
        "en": "Cis-But-2-enedioic acid",
        "bn": "\u09b8\u09bf\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a1\u09be\u0987\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H4O4",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "O",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.5,
      "boilingPoint": "Decomposes",
      "meltingPoint": "130.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Forms maleic anhydride upon mild heating (100-140\u00b0C) due to proximity of carboxyl groups.",
        "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09bf \u09aa\u09be\u09b6\u09be\u09aa\u09be\u09b6\u09bf \u09a5\u09be\u0995\u09be\u09af\u09bc \u09b8\u09be\u09ae\u09be\u09a8\u09cd\u09af \u09a4\u09be\u09aa\u09c7 (\u09e7\u09e6\u09e6-\u09e7\u09ea\u09e6\u00b0\u09b8\u09c7) \u09ae\u09cd\u09af\u09be\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09a8\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u0987\u09a1 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-But-2-enedioic acid",
    "structure": {
      "name": {
        "en": "Trans-But-2-enedioic acid",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a1\u09be\u0987\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H4O4",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "O",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "Sublimes",
      "meltingPoint": "287.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Carboxyl groups are too far apart to form a monomeric anhydride; intermolecular hydrogen bonding leads to huge melting point (287\u00b0C).",
        "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09bf \u0985\u09a8\u09c7\u0995 \u09a6\u09c2\u09b0\u09c7 \u09a5\u09be\u0995\u09be\u09af\u09bc \u0985\u09cd\u09af\u09be\u09a8\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u0987\u09a1 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7 \u09a8\u09be; \u0986\u09a8\u09cd\u09a4\u0983\u0986\u09a3\u09ac\u09bf\u0995 \u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8 \u09ac\u09a8\u09cd\u09a7\u09a8 \u0989\u099a\u09cd\u099a \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 (\u09e8\u09ee\u09ed\u00b0\u09b8\u09c7) \u09a6\u09c7\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Key chemical differentiator: Maleic acid easily dehydrates to form a cyclic anhydride, whereas Fumaric acid does not.",
    "bn": "\u09aa\u09cd\u09b0\u09a7\u09be\u09a8 \u09b0\u09be\u09b8\u09be\u09af\u09bc\u09a8\u09bf\u0995 \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af: \u09ae\u09cd\u09af\u09be\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09b8\u09b9\u099c\u09c7 \u09aa\u09be\u09a8\u09bf\u09b6\u09c2\u09a8\u09cd\u09af \u09b9\u09af\u09bc\u09c7 \u099a\u0995\u09cd\u09b0\u09c0\u09af\u09bc \u0985\u09cd\u09af\u09be\u09a8\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u0987\u09a1 \u0997\u09a0\u09a8 \u0995\u09b0\u09c7, \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u09ab\u09bf\u0989\u09ae\u09be\u09b0\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09a4\u09be \u0995\u09b0\u09c7 \u09a8\u09be\u0964"
  }
},
{
  "id": "ct-07",
  "category": "cis-trans",
  "iupacName": {
    "en": "Stilbene (1,2-Diphenylethene)",
    "bn": "\u09b8\u09cd\u099f\u09bf\u09b2\u09ac\u09bf\u09a8 (\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8)"
  },
  "commonName": null,
  "formula": "C14H12",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Stilbene (1,2-Diphenylethene)",
    "structure": {
      "name": {
        "en": "Cis-Stilbene (1,2-Diphenylethene)",
        "bn": "\u09b8\u09bf\u09b8-\u09b8\u09cd\u099f\u09bf\u09b2\u09ac\u09bf\u09a8 (\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8)"
      },
      "formula": "C14H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.6,
      "boilingPoint": "135.0\u00b0C",
      "meltingPoint": "5.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Phenyl rings twist out of plane by ~30\u00b0 due to steric crowding, disrupting full aromatic conjugation.",
        "bn": "\u099c\u09be\u09af\u09bc\u0997\u09be\u09b0 \u0985\u09ad\u09be\u09ac\u09c7 \u09ab\u09bf\u09a8\u09be\u0987\u09b2 \u09ac\u09b2\u09af\u09bc \u09a6\u09c1\u099f\u09bf \u09b8\u09ae\u09a4\u09b2 \u09a5\u09c7\u0995\u09c7 \u09aa\u09cd\u09b0\u09be\u09af\u09bc \u09e9\u09e6\u00b0 \u0998\u09c1\u09b0\u09c7 \u09af\u09be\u09af\u09bc, \u09ab\u09b2\u09c7 \u09aa\u09c2\u09b0\u09cd\u09a3 \u0985\u09cd\u09af\u09be\u09b0\u09cb\u09ae\u09c7\u099f\u09bf\u0995 \u0995\u09a8\u099c\u09c1\u0997\u09c7\u09b6\u09a8 \u09a8\u09b7\u09cd\u099f \u09b9\u09af\u09bc\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Stilbene (1,2-Diphenylethene)",
    "structure": {
      "name": {
        "en": "Trans-Stilbene (1,2-Diphenylethene)",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09cd\u099f\u09bf\u09b2\u09ac\u09bf\u09a8 (\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8)"
      },
      "formula": "C14H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "305.0\u00b0C",
      "meltingPoint": "125.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Fully planar conjugated system throughout both rings and the double bond.",
        "bn": "\u0989\u09ad\u09af\u09bc \u09ac\u09b2\u09af\u09bc \u098f\u09ac\u0982 \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8 \u099c\u09c1\u09a1\u09bc\u09c7 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09b8\u09ae\u09a4\u09b2 \u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09c7\u09a1 \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Cis-stilbene is liquid near room temp (mp 5\u00b0C) and non-planar; trans-stilbene is a planar crystalline solid (mp 125\u00b0C).",
    "bn": "\u09b8\u09bf\u09b8-\u09b8\u09cd\u099f\u09bf\u09b2\u09ac\u09bf\u09a8 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09b0 \u0995\u09be\u099b\u09be\u0995\u09be\u099b\u09bf \u09a4\u09b0\u09b2 (\u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09eb\u00b0\u09b8\u09c7) \u098f\u09ac\u0982 \u0985\u09b8\u09ae\u09a4\u09b2; \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09cd\u099f\u09bf\u09b2\u09ac\u09bf\u09a8 \u098f\u0995\u099f\u09bf \u09b8\u09ae\u09a4\u09b2 \u09b8\u09cd\u09ab\u099f\u09bf\u0995\u09be\u0995\u09be\u09b0 \u0995\u09a0\u09bf\u09a8 (\u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09e7\u09e8\u09eb\u00b0\u09b8\u09c7)\u0964"
  }
},
{
  "id": "ct-08",
  "category": "cis-trans",
  "iupacName": {
    "en": "Pent-2-ene",
    "bn": "\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
  },
  "commonName": null,
  "formula": "C5H10",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Pent-2-ene",
    "structure": {
      "name": {
        "en": "Cis-Pent-2-ene",
        "bn": "\u09b8\u09bf\u09b8-\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C5H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH2CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.35,
      "boilingPoint": "37.0\u00b0C",
      "meltingPoint": "-151.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Unsymmetrical dialkyl alkene with slight dipole moment.",
        "bn": "\u0985\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u09af\u09be\u09b0 \u09b8\u09be\u09ae\u09be\u09a8\u09cd\u09af \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09ae\u09cb\u09ae\u09c7\u09a8\u09cd\u099f \u09b0\u09af\u09bc\u09c7\u099b\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Pent-2-ene",
    "structure": {
      "name": {
        "en": "Trans-Pent-2-ene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C5H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH2CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.1,
      "boilingPoint": "36.0\u00b0C",
      "meltingPoint": "-140.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Trans alkyl groups minimize steric hindrance.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09bf \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be \u0995\u09ae\u09be\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Demonstrates cis-trans isomerism with different alkyl chains (methyl and ethyl).",
    "bn": "\u09ad\u09bf\u09a8\u09cd\u09a8 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u099a\u09c7\u0987\u09a8 (\u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0993 \u0987\u09a5\u09be\u0987\u09b2) \u09b8\u09ae\u09a8\u09cd\u09ac\u09bf\u09a4 \u09b8\u09bf\u09b8-\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae\u09c7\u09b0 \u099a\u09ae\u09ce\u0995\u09be\u09b0 \u0989\u09a6\u09be\u09b9\u09b0\u09a3\u0964"
  }
},
{
  "id": "ct-09",
  "category": "cis-trans",
  "iupacName": {
    "en": "Hex-3-ene",
    "bn": "\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
  },
  "commonName": null,
  "formula": "C6H12",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Hex-3-ene",
    "structure": {
      "name": {
        "en": "Cis-Hex-3-ene",
        "bn": "\u09b8\u09bf\u09b8-\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "C2H5"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.3,
      "boilingPoint": "67.0\u00b0C",
      "meltingPoint": "-138.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Mutual repulsion between two bulky ethyl groups.",
        "bn": "\u09a6\u09c1\u099f\u09bf \u09ac\u09a1\u09bc \u0987\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u09c7\u09b0 \u09aa\u09be\u09b0\u09b8\u09cd\u09aa\u09b0\u09bf\u0995 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Hex-3-ene",
    "structure": {
      "name": {
        "en": "Trans-Hex-3-ene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "C2H5"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "67.0\u00b0C",
      "meltingPoint": "-113.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Centrosymmetric trans form packs better into crystal lattice (25\u00b0C higher melting point).",
        "bn": "\u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09a0\u09a8 \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u099c\u09be\u09b2\u0995\u09c7 \u09b8\u09b9\u099c\u09c7 \u09b8\u09a8\u09cd\u09a8\u09bf\u09ac\u09c7\u09b6\u09bf\u09a4 \u09b9\u09af\u09bc (\u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09e8\u09eb\u00b0\u09b8\u09c7 \u09ac\u09c7\u09b6\u09bf)\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Shows how melting point reflects crystal lattice packing symmetry even when boiling points are nearly identical.",
    "bn": "\u09b8\u09cd\u09ab\u09c1\u099f\u09a8\u09be\u0999\u09cd\u0995 \u09aa\u09cd\u09b0\u09be\u09af\u09bc \u09b8\u09ae\u09be\u09a8 \u09b9\u0993\u09af\u09bc\u09be \u09b8\u09a4\u09cd\u09a4\u09cd\u09ac\u09c7\u0993 \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u099c\u09be\u09b2\u0995\u09c7\u09b0 \u09aa\u09cd\u09af\u09be\u0995\u09bf\u0982 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09be\u09ae\u09cd\u09af\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995\u09c7\u09b0 \u09b8\u09cd\u09aa\u09b7\u09cd\u099f \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ct-10",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,4-Dichlorobut-2-ene",
    "bn": "\u09e7,\u09ea-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
  },
  "commonName": null,
  "formula": "C4H6Cl2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,4-Dichlorobut-2-ene",
    "structure": {
      "name": {
        "en": "Cis-1,4-Dichlorobut-2-ene",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09ea-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H6Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH2Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH2Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.1,
      "boilingPoint": "152.0\u00b0C",
      "meltingPoint": "-48.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Both chloromethyl groups point to the same face.",
        "bn": "\u0989\u09ad\u09af\u09bc \u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7 \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,4-Dichlorobut-2-ene",
    "structure": {
      "name": {
        "en": "Trans-1,4-Dichlorobut-2-ene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09ea-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H6Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH2Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH2Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "155.0\u00b0C",
      "meltingPoint": "1.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Linear trans-conformation with opposing chloromethyl dipoles.",
        "bn": "\u09ac\u09bf\u09aa\u09b0\u09c0\u09a4\u09ae\u09c1\u0996\u09c0 \u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u09a1\u09be\u0987\u09aa\u09cb\u09b2\u09af\u09c1\u0995\u09cd\u09a4 \u09b0\u09c8\u0996\u09bf\u0995 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09a0\u09a8\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Important intermediate in polymer chemistry (chloroprene manufacture).",
    "bn": "\u09aa\u09b2\u09bf\u09ae\u09be\u09b0 \u09b0\u09b8\u09be\u09af\u09bc\u09a8 \u098f\u09ac\u0982 \u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b0\u09bf\u09a8 \u09b8\u0982\u09b6\u09cd\u09b2\u09c7\u09b7\u09a3\u09c7\u09b0 \u098f\u0995\u099f\u09bf \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u0985\u09a8\u09cd\u09a4\u09b0\u09cd\u09ac\u09b0\u09cd\u09a4\u09c0 \u09aa\u09a6\u09be\u09b0\u09cd\u09a5\u0964"
  }
},
{
  "id": "ct-11",
  "category": "cis-trans",
  "iupacName": {
    "en": "3-Phenylprop-2-enoic acid",
    "bn": "\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u09aa\u09cd\u09b0\u09aa-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "commonName": {
    "en": "Cinnamic acid",
    "bn": "\u09b8\u09bf\u09a8\u09be\u09ae\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C9H8O2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-3-Phenylprop-2-enoic acid",
    "structure": {
      "name": {
        "en": "Cis-3-Phenylprop-2-enoic acid",
        "bn": "\u09b8\u09bf\u09b8-\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u09aa\u09cd\u09b0\u09aa-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C9H8O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.8,
      "boilingPoint": "Decomposes",
      "meltingPoint": "68.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Steric clash between bulky phenyl and carboxyl groups tilts the aromatic ring (allo-cinnamic acid).",
        "bn": "\u09ab\u09bf\u09a8\u09be\u0987\u09b2 \u098f\u09ac\u0982 \u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u09c7\u09b0 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09ac\u09b2\u09af\u09bc\u099f\u09bf \u09ac\u09be\u0981\u0995\u09be \u09b9\u09af\u09bc\u09c7 \u09af\u09be\u09af\u09bc (\u0985\u09cd\u09af\u09be\u09b2\u09cb-\u09b8\u09bf\u09a8\u09be\u09ae\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1)\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-3-Phenylprop-2-enoic acid",
    "structure": {
      "name": {
        "en": "Trans-3-Phenylprop-2-enoic acid",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u09aa\u09cd\u09b0\u09aa-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C9H8O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.6,
      "boilingPoint": "300.0\u00b0C",
      "meltingPoint": "133.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Extended \u03c0-electron delocalization across phenyl, alkene, and carbonyl groups.",
        "bn": "\u09ab\u09bf\u09a8\u09be\u0987\u09b2, \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u098f\u09ac\u0982 \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09bf\u09b2 \u099c\u09c1\u09a1\u09bc\u09c7 \u09ac\u09bf\u09b8\u09cd\u09a4\u09c3\u09a4 \u09aa\u09be\u0987-\u0987\u09b2\u09c7\u0995\u099f\u09cd\u09b0\u09a8 \u09b8\u099e\u09cd\u099a\u09be\u09b2\u09a8\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Trans-cinnamic acid is widely found in natural cinnamon oil; cis-cinnamic acid is less stable and rarely occurs naturally.",
    "bn": "\u09aa\u09cd\u09b0\u09be\u0995\u09c3\u09a4\u09bf\u0995 \u09a6\u09be\u09b0\u09c1\u099a\u09bf\u09a8\u09bf\u09b0 \u09a4\u09c7\u09b2\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09bf\u09a8\u09be\u09ae\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09a5\u09be\u0995\u09c7; \u09b8\u09bf\u09b8-\u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u0985\u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2 \u098f\u09ac\u0982 \u09aa\u09cd\u09b0\u09be\u0995\u09c3\u09a4\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u09ac\u09bf\u09b0\u09b2\u0964"
  }
},
{
  "id": "ct-12",
  "category": "cis-trans",
  "iupacName": {
    "en": "But-2-enoic acid",
    "bn": "\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "commonName": {
    "en": "Crotonic acid (trans) / Isocrotonic acid (cis)",
    "bn": "\u0995\u09cd\u09b0\u09cb\u099f\u09cb\u09a8\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8) / \u0986\u0987\u09b8\u09cb\u0995\u09cd\u09b0\u09cb\u099f\u09cb\u09a8\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u09b8\u09bf\u09b8)"
  },
  "formula": "C4H6O2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-But-2-enoic acid",
    "structure": {
      "name": {
        "en": "Cis-But-2-enoic acid",
        "bn": "\u09b8\u09bf\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H6O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.4,
      "boilingPoint": "169.0\u00b0C",
      "meltingPoint": "15.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Isocrotonic acid (cis) is liquid at room temp; methyl and carboxyl clash sterically.",
        "bn": "\u0986\u0987\u09b8\u09cb\u0995\u09cd\u09b0\u09cb\u099f\u09cb\u09a8\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09af\u09bc \u09a4\u09b0\u09b2; \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0993 \u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u09c7 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-But-2-enoic acid",
    "structure": {
      "name": {
        "en": "Trans-But-2-enoic acid",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H6O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.8,
      "boilingPoint": "185.0\u00b0C",
      "meltingPoint": "72.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Crotonic acid (trans) is solid at room temp; more stable by ~10 kJ/mol.",
        "bn": "\u0995\u09cd\u09b0\u09cb\u099f\u09cb\u09a8\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09af\u09bc \u0995\u09a0\u09bf\u09a8; \u09aa\u09cd\u09b0\u09be\u09af\u09bc \u09e7\u09e6 \u0995\u09bf\u09b2\u09cb\u099c\u09c1\u09b2/\u09ae\u09cb\u09b2 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Shows the significant stabilization of trans-alkenoic acids over their cis isomers.",
    "bn": "\u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7\u09b0 \u09a4\u09c1\u09b2\u09a8\u09be\u09af\u09bc \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u0985\u09cd\u09af\u09be\u09b2\u0995\u09c7\u09a8\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1\u09c7\u09b0 \u0989\u09b2\u09cd\u09b2\u09c7\u0996\u09af\u09cb\u0997\u09cd\u09af \u09b8\u09cd\u09a5\u09be\u09af\u09bc\u09bf\u09a4\u09cd\u09ac\u09c7\u09b0 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3\u0964"
  }
},
{
  "id": "ct-13",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dimethylcyclopropane",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C5H10",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dimethylcyclopropane",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dimethylcyclopropane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
      },
      "formula": "C5H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.2,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.4
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.2,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            -0.6,
            -0.4
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.4,
      "boilingPoint": "37.0\u00b0C",
      "meltingPoint": "-140.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Both methyl groups on same side of planar 3-carbon ring experience severe van der Waals repulsion.",
        "bn": "\u09a4\u09bf\u09a8-\u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u09b8\u09ae\u09a4\u09b2 \u09b0\u09bf\u0982\u09af\u09bc\u09c7\u09b0 \u098f\u0995\u0987 \u09aa\u09be\u09b6\u09c7 \u09a6\u09c1\u099f\u09bf \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u09a5\u09be\u0995\u09be\u09af\u09bc \u09a4\u09c0\u09ac\u09cd\u09b0 \u09ad\u09cd\u09af\u09be\u09a8 \u09a1\u09be\u09b0 \u0993\u09af\u09bc\u09be\u09b2\u09b8 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u0998\u099f\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dimethylcyclopropane",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dimethylcyclopropane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
      },
      "formula": "C5H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.2,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.4
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.2,
            -0.6,
            -0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            1.2,
            0.4
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "28.0\u00b0C",
      "meltingPoint": "-150.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Methyls on opposite faces of ring relieve steric strain.",
        "bn": "\u09b0\u09bf\u0982\u09af\u09bc\u09c7\u09b0 \u09ac\u09bf\u09aa\u09b0\u09c0\u09a4 \u09a4\u09b2\u09c7 \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa \u09a6\u09c1\u099f\u09bf \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be \u09a6\u09c2\u09b0 \u0995\u09b0\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Proves that restricted rotation in cyclic systems creates geometrical isomerism without any double bond.",
    "bn": "\u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u0995\u09b0\u09c7 \u09af\u09c7 \u0995\u09cb\u09a8\u09cb \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8 \u099b\u09be\u09a1\u09bc\u09be\u0987 \u099a\u0995\u09cd\u09b0\u09c0\u09af\u09bc \u0995\u09be\u09a0\u09be\u09ae\u09cb\u09b0 \u0986\u09ac\u09a6\u09cd\u09a7 \u0998\u09c2\u09b0\u09cd\u09a3\u09a8 \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf\u0995 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09b8\u09c3\u09b7\u09cd\u099f\u09bf \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964"
  }
},
{
  "id": "ct-14",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dichlorocyclopropane",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C3H4Cl2",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dichlorocyclopropane",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dichlorocyclopropane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
      },
      "formula": "C3H4Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Cl",
          "position": [
            -1.3,
            1.3,
            0.5
          ],
          "label": "Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.5,
            -0.4
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.3,
            1.3,
            0.5
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            -0.5,
            -0.4
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 2.3,
      "boilingPoint": "88.0\u00b0C",
      "meltingPoint": "-65.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Large net dipole vector pointing out from the plane of the cyclopropane ring.",
        "bn": "\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8 \u09b0\u09bf\u0982\u09af\u09bc\u09c7\u09b0 \u09b8\u09ae\u09a4\u09b2 \u09a5\u09c7\u0995\u09c7 \u09ac\u09be\u0987\u09b0\u09c7\u09b0 \u09a6\u09bf\u0995\u09c7 \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6\u09bf\u09a4 \u09b6\u0995\u09cd\u09a4\u09bf\u09b6\u09be\u09b2\u09c0 \u09a8\u09bf\u099f \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09ad\u09c7\u0995\u09cd\u099f\u09b0\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dichlorocyclopropane",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dichlorocyclopropane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09c7\u09a8"
      },
      "formula": "C3H4Cl2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "Cl",
          "position": [
            -1.3,
            1.3,
            0.5
          ],
          "label": "Cl"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.5,
            -0.4
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.3,
            -0.5,
            -0.4
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            1.3,
            0.5
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.5,
      "boilingPoint": "74.0\u00b0C",
      "meltingPoint": "-70.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Trans chlorines partially cancel dipoles and minimize electrostatic repulsion.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0995\u09cd\u09b2\u09cb\u09b0\u09bf\u09a8\u0997\u09c1\u09b2\u09bf \u0986\u0982\u09b6\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u09a1\u09be\u0987\u09aa\u09cb\u09b2 \u09aa\u09cd\u09b0\u09b6\u09ae\u09bf\u09a4 \u0995\u09b0\u09c7 \u098f\u09ac\u0982 \u09b8\u09cd\u09a5\u09bf\u09b0-\u09ac\u09c8\u09a6\u09cd\u09af\u09c1\u09a4\u09bf\u0995 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u0995\u09ae\u09be\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Cis isomer is an achiral meso compound, whereas trans isomer is chiral (resolvable into enantiomers).",
    "bn": "\u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u098f\u0995\u099f\u09bf \u0985\u09cd\u09af\u09be\u0995\u09be\u0987\u09b0\u09be\u09b2 \u09ae\u09c7\u09b8\u09cb \u09af\u09cc\u0997, \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u0995\u09be\u0987\u09b0\u09be\u09b2 (\u098f\u09a8\u09be\u09a8\u09b6\u09bf\u0993\u09ae\u09be\u09b0\u09c7 \u09aa\u09c3\u09a5\u0995\u09af\u09cb\u0997\u09cd\u09af)\u0964"
  }
},
{
  "id": "ct-15",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dimethylcyclobutane",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C6H12",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dimethylcyclobutane",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dimethylcyclobutane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.2,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.2,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.35,
      "boilingPoint": "68.0\u00b0C",
      "meltingPoint": "-120.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Puckered 4-membered ring with both methyls on the same face.",
        "bn": "\u09ac\u09be\u0981\u0995\u09be\u09a8\u09cb \u09ea-\u09b8\u09a6\u09b8\u09cd\u09af\u09c7\u09b0 \u09ac\u09b2\u09af\u09bc \u09af\u09be\u09b0 \u098f\u0995\u0987 \u09a4\u09b2\u09c7 \u0989\u09ad\u09af\u09bc \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09bf\u09a4\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dimethylcyclobutane",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dimethylcyclobutane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.2,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.2,
            -0.6,
            -0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            1.2,
            0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "60.0\u00b0C",
      "meltingPoint": "-130.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Diequatorial-like trans conformation minimizes steric clash.",
        "bn": "\u09a1\u09be\u0987-\u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u09b8\u09a6\u09c3\u09b6 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09a0\u09a8 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be \u09b8\u09b0\u09cd\u09ac\u09a8\u09bf\u09ae\u09cd\u09a8 \u09b0\u09be\u0996\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Puckering of the 4-membered ring alters dihedral angles between cis and trans substituents.",
    "bn": "\u09ea-\u09b8\u09a6\u09b8\u09cd\u09af\u09c7\u09b0 \u09ac\u09b2\u09af\u09bc\u09c7\u09b0 \u09ac\u09be\u0981\u0995\u09be\u09a8\u09cb \u09ad\u09be\u09ac \u09b8\u09bf\u09b8 \u0993 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09cd\u09b0\u09c1\u09aa\u09c7\u09b0 \u09a1\u09be\u0987\u09b9\u09c7\u09a1\u09cd\u09b0\u09be\u09b2 \u0995\u09cb\u09a3\u0995\u09c7 \u09aa\u09cd\u09b0\u09ad\u09be\u09ac\u09bf\u09a4 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ct-16",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,3-Dimethylcyclobutane",
    "bn": "\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C6H12",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,3-Dimethylcyclobutane",
    "structure": {
      "name": {
        "en": "Cis-1,3-Dimethylcyclobutane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -0.8,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.2,
      "boilingPoint": "60.0\u00b0C",
      "meltingPoint": "-132.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Cis isomer adopts puckered conformation with both methyls equatorial.",
        "bn": "\u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09ac\u09be\u0981\u0995\u09be\u09a8\u09cb \u09b0\u09c2\u09aa \u09a7\u09be\u09b0\u09a3 \u0995\u09b0\u09c7 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u0989\u09ad\u09af\u09bc \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8\u09c7 \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,3-Dimethylcyclobutane",
    "structure": {
      "name": {
        "en": "Trans-1,3-Dimethylcyclobutane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09ac\u09bf\u0989\u099f\u09c7\u09a8"
      },
      "formula": "C6H12",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            -0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            0.8,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "59.0\u00b0C",
      "meltingPoint": "-135.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "One methyl must occupy an axial-like position experiencing 1,3-diaxial-like strain.",
        "bn": "\u098f\u0995\u099f\u09bf \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8\u09c7 \u09a5\u09be\u0995\u09a4\u09c7 \u09ac\u09be\u09a7\u09cd\u09af \u09b9\u09af\u09bc \u09af\u09be \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09ac\u09be\u09a7\u09be\u09b0 \u09b8\u09c3\u09b7\u09cd\u099f\u09bf \u0995\u09b0\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Important example where cis isomer is thermodynamically more stable than trans due to ring puckering!",
    "bn": "\u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u0989\u09a6\u09be\u09b9\u09b0\u09a3 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u09b0\u09bf\u0982 \u09ac\u09be\u0981\u0995\u09be\u09a8\u09cb\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2!"
  }
},
{
  "id": "ct-17",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dimethylcyclopentane",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C7H14",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dimethylcyclopentane",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dimethylcyclopentane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
      },
      "formula": "C7H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.3,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.3,
            -0.5,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.3,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.3,
            -0.5,
            -0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.3,
      "boilingPoint": "99.0\u00b0C",
      "meltingPoint": "-118.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Eclipsing interactions between adjacent cis methyls.",
        "bn": "\u09aa\u09be\u09b6\u09be\u09aa\u09be\u09b6\u09bf \u09a5\u09be\u0995\u09be \u09b8\u09bf\u09b8 \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u098f\u0995\u09cd\u09b2\u09bf\u09aa\u09b8\u09bf\u0982 \u09ac\u09be\u09a7\u09be\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dimethylcyclopentane",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dimethylcyclopentane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
      },
      "formula": "C7H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.3,
            1.2,
            0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.3,
            -0.5,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.3,
            -0.5,
            -0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.3,
            1.2,
            0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "92.0\u00b0C",
      "meltingPoint": "-125.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Trans arrangement avoids torsional eclipsing in envelope conformation.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09ac\u09bf\u09a8\u09cd\u09af\u09be\u09b8 \u0996\u09be\u09ae \u09b8\u09a6\u09c3\u09b6 \u09ac\u09b2\u09af\u09bc\u09c7 \u099f\u09b0\u09b6\u09a8\u09be\u09b2 \u098f\u0995\u09cd\u09b2\u09bf\u09aa\u09b8\u09bf\u0982 \u098f\u09a1\u09bc\u09bf\u09af\u09bc\u09c7 \u099a\u09b2\u09c7\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "5-membered envelope conformation allows trans substituents to achieve staggered geometry.",
    "bn": "\u09eb-\u09b8\u09a6\u09b8\u09cd\u09af\u09c7\u09b0 \u09ac\u09b2\u09af\u09bc\u09c7\u09b0 \u098f\u09a8\u09ad\u09c7\u09b2\u09aa \u09b0\u09c2\u09aa\u09be\u09a8\u09cd\u09a4\u09b0 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0997\u09cd\u09b0\u09c1\u09aa\u0997\u09c1\u09b2\u09cb\u0995\u09c7 \u09b8\u09cd\u099f\u09cd\u09af\u09be\u0997\u09be\u09b0\u09cd\u09a1 \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf \u0985\u09b0\u09cd\u099c\u09a8 \u0995\u09b0\u09a4\u09c7 \u09a6\u09c7\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-18",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,3-Dimethylcyclopentane",
    "bn": "\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C7H14",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,3-Dimethylcyclopentane",
    "structure": {
      "name": {
        "en": "Cis-1,3-Dimethylcyclopentane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
      },
      "formula": "C7H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.4,
            0.9,
            0.2
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.4,
            -0.7,
            -0.2
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.4,
            0.9,
            0.2
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.4,
            -0.7,
            -0.2
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.25,
      "boilingPoint": "91.0\u00b0C",
      "meltingPoint": "-134.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Cis isomer has both methyls equatorial in preferred envelope conformer.",
        "bn": "\u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7 \u0989\u09ad\u09af\u09bc \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u09b8\u09c1\u09ac\u09bf\u09a7\u09be\u099c\u09a8\u0995 \u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8\u09c7 \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,3-Dimethylcyclopentane",
    "structure": {
      "name": {
        "en": "Trans-1,3-Dimethylcyclopentane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8"
      },
      "formula": "C7H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.4,
            0.9,
            0.2
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.4,
            -0.7,
            -0.2
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.4,
            -0.7,
            -0.2
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.4,
            0.9,
            0.2
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "92.0\u00b0C",
      "meltingPoint": "-135.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "One methyl must adopt an axial orientation.",
        "bn": "\u098f\u0995\u099f\u09bf \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8 \u0997\u09cd\u09b0\u09b9\u09a3 \u0995\u09b0\u09a4\u09c7 \u09ac\u09be\u09a7\u09cd\u09af \u09b9\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "In 1,3-substituted cyclopentanes, the cis isomer is more stable than trans.",
    "bn": "\u09e7,\u09e9-\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09cd\u09a5\u09be\u09aa\u09bf\u09a4 \u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09c7\u09a8\u09cd\u099f\u09c7\u09a8\u09c7 \u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2 \u09b9\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-19",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,2-Dimethylcyclohexane",
    "bn": "\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C8H16",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,2-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Cis-1,2-Dimethylcyclohexane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.4,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.4,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.3,
      "boilingPoint": "129.0\u00b0C",
      "meltingPoint": "-50.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Must be equatorial-axial (e,a) in chair form; suffers 1,3-diaxial strain.",
        "bn": "\u099a\u09c7\u09af\u09bc\u09be\u09b0 \u09b0\u09c2\u09aa\u09c7 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2-\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 (e,a) \u09b9\u09a4\u09c7 \u09b9\u09af\u09bc; \u09e7,\u09e9-\u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 \u09ac\u09be\u09a7\u09be \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,2-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Trans-1,2-Dimethylcyclohexane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.4,
            1.2,
            0.4
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.2,
            -0.6,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.4,
            -0.6,
            -0.3
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.2,
            1.2,
            0.4
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "123.0\u00b0C",
      "meltingPoint": "-89.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Adopts diequatorial (e,e) chair conformation; much lower energy (~7.5 kJ/mol).",
        "bn": "\u09a1\u09be\u0987-\u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2 (e,e) \u099a\u09c7\u09af\u09bc\u09be\u09b0 \u0997\u09a0\u09a8 \u0997\u09cd\u09b0\u09b9\u09a3 \u0995\u09b0\u09c7; \u09b6\u0995\u09cd\u09a4\u09bf \u0985\u09a8\u09c7\u0995 \u0995\u09ae (~\u09ed.\u09eb \u0995\u09bf\u099c\u09c1/\u09ae\u09cb\u09b2)\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Classic conformational stereochemistry: trans-1,2 is (e,e) and more stable than cis-1,2 (e,a).",
    "bn": "\u0985\u09a8\u09c1\u0995\u09b0\u09a3\u09c0\u09af\u09bc \u0995\u09a8\u09ab\u09b0\u09cd\u09ae\u09c7\u09b6\u09a8\u09be\u09b2 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u09b0\u09b8\u09be\u09af\u09bc\u09a8: \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e8 \u09b9\u09b2\u09cb (e,e) \u09af\u09be \u09b8\u09bf\u09b8-\u09e7,\u09e8 (e,a)-\u098f\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u0964"
  }
},
{
  "id": "ct-20",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,3-Dimethylcyclohexane",
    "bn": "\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C8H16",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,3-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Cis-1,3-Dimethylcyclohexane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            1.0,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -0.8,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.2,
      "boilingPoint": "120.0\u00b0C",
      "meltingPoint": "-76.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Cis-1,3 can put both methyls equatorial (e,e). Extremely stable.",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09e9 \u0989\u09ad\u09af\u09bc \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0995\u09c7 \u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09c7 (e,e) \u09b0\u09be\u0996\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,3-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Trans-1,3-Dimethylcyclohexane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e9-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            1.0,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            -0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "124.0\u00b0C",
      "meltingPoint": "-90.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Trans-1,3 must be equatorial-axial (e,a); suffers 1,3-diaxial interaction with ring hydrogens.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09e9 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2-\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 (e,a) \u09b9\u09af\u09bc; \u09b0\u09bf\u0982 \u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 \u09ac\u09be\u09a7\u09be \u09aa\u09be\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Vital rule: in 1,3-cyclohexane, CIS is (e,e) and hence MORE stable than TRANS!",
    "bn": "\u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u09a8\u09bf\u09af\u09bc\u09ae: \u09e7,\u09e9-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8\u09c7 \u09b8\u09bf\u09b8 \u09b0\u09c2\u09aa \u09b9\u09b2\u09cb (e,e) \u098f\u09ac\u0982 \u09a4\u09be\u0987 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2!"
  }
},
{
  "id": "ct-21",
  "category": "cis-trans",
  "iupacName": {
    "en": "1,4-Dimethylcyclohexane",
    "bn": "\u09e7,\u09ea-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
  },
  "commonName": null,
  "formula": "C8H16",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-1,4-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Cis-1,4-Dimethylcyclohexane",
        "bn": "\u09b8\u09bf\u09b8-\u09e7,\u09ea-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            0.9,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            0.9,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -0.8,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.3,
      "boilingPoint": "124.0\u00b0C",
      "meltingPoint": "-87.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Cis is (e,a) with one axial methyl.",
        "bn": "\u09b8\u09bf\u09b8 \u09b9\u09b2\u09cb (e,a) \u09af\u09be\u09a4\u09c7 \u098f\u0995\u099f\u09bf \u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09bf\u09af\u09bc\u09be\u09b2 \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-1,4-Dimethylcyclohexane",
    "structure": {
      "name": {
        "en": "Trans-1,4-Dimethylcyclohexane",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09ea-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09c7\u09a8"
      },
      "formula": "C8H16",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            0.9,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -0.8,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -0.8,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            0.9,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "119.0\u00b0C",
      "meltingPoint": "-37.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Trans is diequatorial (e,e); has high crystal melting point (-37\u00b0C vs -87\u00b0C).",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09b9\u09b2\u09cb \u09a1\u09be\u0987-\u0987\u0995\u09c1\u09af\u09bc\u09c7\u099f\u09cb\u09b0\u09bf\u09af\u09bc\u09be\u09b2 (e,e); \u0989\u099a\u09cd\u099a \u09b8\u09cd\u09ab\u099f\u09bf\u0995 \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 \u09b0\u09af\u09bc\u09c7\u099b\u09c7 (-\u09e9\u09ed\u00b0\u09b8\u09c7 \u09ac\u09a8\u09be\u09ae -\u09ee\u09ed\u00b0\u09b8\u09c7)\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Trans-1,4 has an inversion center in its diequatorial chair conformer, making it non-polar and symmetrical.",
    "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09e7,\u09ea \u099a\u09c7\u09af\u09bc\u09be\u09b0 \u0997\u09a0\u09a8\u09c7 \u098f\u0995\u099f\u09bf \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09be\u09ae\u09cd\u09af \u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0 \u09a5\u09be\u0995\u09be\u09af\u09bc \u098f\u099f\u09bf \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u0985\u09a7\u09cd\u09b0\u09c1\u09ac\u09c0\u09af\u09bc \u098f\u09ac\u0982 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae\u0964"
  }
},
{
  "id": "ct-22",
  "category": "cis-trans",
  "iupacName": {
    "en": "Diamminedichloroplatinum(II)",
    "bn": "\u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8\u09be\u09ae(II)"
  },
  "commonName": {
    "en": "Cisplatin / Transplatin",
    "bn": "\u09b8\u09bf\u09b8\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8 / \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8"
  },
  "formula": "[Pt(NH3)2Cl2]",
  "systemType": "complex",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Diamminedichloroplatinum(II)",
    "structure": {
      "name": {
        "en": "Cis-Diamminedichloroplatinum(II)",
        "bn": "\u09b8\u09bf\u09b8-\u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8\u09be\u09ae(II)"
      },
      "formula": "[Pt(NH3)2Cl2]",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "N",
          "position": [
            -1.5,
            1.2,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.5,
            -1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g3",
          "element": "N",
          "position": [
            1.5,
            1.2,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g4",
          "element": "Cl",
          "position": [
            1.5,
            -1.2,
            0
          ],
          "label": "Cl"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 6.5,
      "boilingPoint": "Decomposes",
      "meltingPoint": "270.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Adjacent chlorides allow bidentate intrastrand cross-linking with DNA guanine bases (anticancer activity).",
        "bn": "\u09aa\u09be\u09b6\u09be\u09aa\u09be\u09b6\u09bf \u09a5\u09be\u0995\u09be \u0995\u09cd\u09b2\u09cb\u09b0\u09be\u0987\u09a1\u0997\u09c1\u09b2\u09bf \u09a1\u09bf\u098f\u09a8\u098f \u0997\u09c1\u09af\u09bc\u09be\u09a8\u09bf\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u0986\u09a1\u09bc\u09be\u0986\u09a1\u09bc\u09bf \u09ac\u09a8\u09cd\u09a7\u09a8 \u0997\u09a0\u09a8 \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7 (\u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b0\u09cb\u09a7\u09c0)\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Diamminedichloroplatinum(II)",
    "structure": {
      "name": {
        "en": "Trans-Diamminedichloroplatinum(II)",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8\u09be\u09ae(II)"
      },
      "formula": "[Pt(NH3)2Cl2]",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "N",
          "position": [
            -1.5,
            1.2,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.5,
            -1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.5,
            1.2,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "N",
          "position": [
            1.5,
            -1.2,
            0
          ],
          "label": "NH3"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "Decomposes",
      "meltingPoint": "300.0\u00b0C",
      "stabilityRank": "equal",
      "stabilityReason": {
        "en": "Trans chlorines cannot bend to coordinate adjacent DNA guanines simultaneously; therapeutically inactive.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0995\u09cd\u09b2\u09cb\u09b0\u09be\u0987\u09a1\u0997\u09c1\u09b2\u09bf \u098f\u0995\u09b8\u09be\u09a5\u09c7 \u09a6\u09c1\u099f\u09bf \u09b8\u0982\u09b2\u0997\u09cd\u09a8 \u09a1\u09bf\u098f\u09a8\u098f \u09ac\u09c7\u09b8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7 \u09a8\u09be; \u09a4\u09be\u0987 \u099a\u09bf\u0995\u09bf\u09ce\u09b8\u09be\u09af\u09bc \u0985\u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Monumental biological example: Cisplatin is a lifesaving chemotherapy drug; its trans isomer Transplatin is biologically ineffective.",
    "bn": "\u09b8\u09cd\u09ae\u09b0\u09a3\u09c0\u09af\u09bc \u099c\u09c8\u09ac\u09bf\u0995 \u09a6\u09c3\u09b7\u09cd\u099f\u09be\u09a8\u09cd\u09a4: \u09b8\u09bf\u09b8\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8 \u099c\u09c0\u09ac\u09a8\u09b0\u0995\u09cd\u09b7\u09be\u0995\u09be\u09b0\u09c0 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u0993\u09b7\u09c1\u09a7; \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09bf\u09a8 \u099a\u09bf\u0995\u09bf\u09ce\u09b8\u09be\u09af\u09bc \u09a8\u09bf\u09b7\u09cd\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u0964"
  }
},
{
  "id": "ct-23",
  "category": "cis-trans",
  "iupacName": {
    "en": "Tetraamminedichlorocobalt(III)",
    "bn": "\u099f\u09c7\u099f\u09cd\u09b0\u09be\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0995\u09cb\u09ac\u09be\u09b2\u09cd\u099f(III)"
  },
  "commonName": null,
  "formula": "[Co(NH3)4Cl2]+",
  "systemType": "complex",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Tetraamminedichlorocobalt(III)",
    "structure": {
      "name": {
        "en": "Cis-Tetraamminedichlorocobalt(III)",
        "bn": "\u09b8\u09bf\u09b8-\u099f\u09c7\u099f\u09cd\u09b0\u09be\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0995\u09cb\u09ac\u09be\u09b2\u09cd\u099f(III)"
      },
      "formula": "[Co(NH3)4Cl2]+",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "N",
          "position": [
            -1.4,
            1.1,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.4,
            -1.1,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.4,
            -1.1,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g4",
          "element": "N",
          "position": [
            1.4,
            1.1,
            0
          ],
          "label": "NH3"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 4.1,
      "boilingPoint": "N/A",
      "meltingPoint": "Decomposes",
      "stabilityRank": "equal",
      "stabilityReason": {
        "en": "Cis isomer has distinct violet color.",
        "bn": "\u09b8\u09bf\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u099f\u09bf\u09b0 \u09b8\u09cd\u09ac\u09a4\u09a8\u09cd\u09a4\u09cd\u09b0 \u09ac\u09c7\u0997\u09c1\u09a8\u09bf \u09ac\u09b0\u09cd\u09a3 \u09b0\u09af\u09bc\u09c7\u099b\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Tetraamminedichlorocobalt(III)",
    "structure": {
      "name": {
        "en": "Trans-Tetraamminedichlorocobalt(III)",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u099f\u09c7\u099f\u09cd\u09b0\u09be\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09a1\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u0995\u09cb\u09ac\u09be\u09b2\u09cd\u099f(III)"
      },
      "formula": "[Co(NH3)4Cl2]+",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "N",
          "position": [
            -1.4,
            1.1,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.4,
            -1.1,
            0
          ],
          "label": "Cl"
        },
        {
          "id": "g3",
          "element": "N",
          "position": [
            1.4,
            -1.1,
            0
          ],
          "label": "NH3"
        },
        {
          "id": "g4",
          "element": "Cl",
          "position": [
            1.4,
            1.1,
            0
          ],
          "label": "Cl"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "N/A",
      "meltingPoint": "Decomposes",
      "stabilityRank": "equal",
      "stabilityReason": {
        "en": "Trans isomer has centrosymmetric d-orbital splitting giving vivid green color.",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u099f\u09bf\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u09a1\u09bf-\u0985\u09b0\u09ac\u09bf\u099f\u09be\u09b2 \u09ac\u09bf\u09ad\u09be\u099c\u09a8\u09c7\u09b0 \u09ab\u09b2\u09c7 \u0989\u099c\u09cd\u099c\u09cd\u09ac\u09b2 \u09b8\u09ac\u09c1\u099c \u09ac\u09b0\u09cd\u09a3 \u09a6\u09c7\u0996\u09be \u09af\u09be\u09af\u09bc\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Historic Werner coordination complex demonstrating cis/trans geometrical isomerism in octahedral [MA4B2] geometry with dramatic color differences (violet cis vs green trans).",
    "bn": "\u0986\u09b2\u09ab\u09cd\u09b0\u09c7\u09a1 \u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a8\u09be\u09b0\u09c7\u09b0 \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995 \u099c\u099f\u09bf\u09b2 \u09af\u09cc\u0997 \u09af\u09be \u0985\u09b7\u09cd\u099f\u09a4\u09b2\u0995\u09c0\u09af\u09bc [MA4B2] \u0997\u09a0\u09a8\u09c7 \u09ac\u09b0\u09cd\u09a3\u09ad\u09c7\u09a6 (\u09ac\u09c7\u0997\u09c1\u09a8\u09bf \u09b8\u09bf\u09b8 \u09ac\u09a8\u09be\u09ae \u09b8\u09ac\u09c1\u099c \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8) \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ct-24",
  "category": "cis-trans",
  "iupacName": {
    "en": "Cyclooctene",
    "bn": "\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u0995\u099f\u09bf\u09a8"
  },
  "commonName": null,
  "formula": "C8H14",
  "systemType": "cycloalkane",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Cyclooctene",
    "structure": {
      "name": {
        "en": "Cis-Cyclooctene",
        "bn": "\u09b8\u09bf\u09b8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u0995\u099f\u09bf\u09a8"
      },
      "formula": "C8H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            1.0,
            0.4
          ],
          "label": "CH2"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.9,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0.4
          ],
          "label": "CH2"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -0.9,
            -0.3
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.4,
      "boilingPoint": "145.0\u00b0C",
      "meltingPoint": "-12.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Cis double bond fits naturally inside the 8-membered ring without twist strain.",
        "bn": "\u09b8\u09bf\u09b8 \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8\u099f\u09bf \u0995\u09cb\u09a8\u09cb \u09ae\u09cb\u099a\u09a1\u09bc \u099b\u09be\u09a1\u09bc\u09be \u09b8\u09cd\u09ac\u09be\u09ad\u09be\u09ac\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u09ee-\u09b8\u09a6\u09b8\u09cd\u09af\u09c7\u09b0 \u09ac\u09b2\u09af\u09bc\u09c7 \u0986\u09ac\u09a6\u09cd\u09a7 \u09a5\u09be\u0995\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Cyclooctene",
    "structure": {
      "name": {
        "en": "Trans-Cyclooctene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u0995\u099f\u09bf\u09a8"
      },
      "formula": "C8H14",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.5,
            1.0,
            0.4
          ],
          "label": "CH2"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -0.9,
            -0.3
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.5,
            -0.9,
            -0.3
          ],
          "label": "CH2"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.0,
            0.4
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.8,
      "boilingPoint": "143.0\u00b0C",
      "meltingPoint": "-59.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Trans double bond forces a helical twist in the carbon chain; planar chirality makes trans-cyclooctene chiral and optically resolvable!",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8\u099f\u09bf \u099a\u09c7\u0987\u09a8\u09c7 \u09ae\u09cb\u099a\u09a1\u09bc \u09a6\u09bf\u09a4\u09c7 \u09ac\u09be\u09a7\u09cd\u09af \u0995\u09b0\u09c7; \u098f\u09b0 \u09aa\u09cd\u09b2\u09cd\u09af\u09be\u09a8\u09be\u09b0 \u0995\u09be\u0987\u09b0\u09be\u09b2\u09bf\u099f\u09bf\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u0995\u099f\u09bf\u09a8 \u0986\u09b2\u09cb\u0995 \u09b8\u0995\u09cd\u09b0\u09bf\u09af\u09bc \u09b9\u09af\u09bc!"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Smallest cycloalkene with an isolable trans isomer. Trans-cyclooctene is chiral and exists as non-superimposable enantiomers!",
    "bn": "\u09b8\u09ac\u099a\u09c7\u09af\u09bc\u09c7 \u099b\u09cb\u099f \u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u09af\u09be\u09b0 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09b0\u09c2\u09aa \u09aa\u09c3\u09a5\u0995\u09af\u09cb\u0997\u09cd\u09af\u0964 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u0985\u0995\u099f\u09bf\u09a8 \u0995\u09be\u0987\u09b0\u09be\u09b2 \u098f\u09ac\u0982 \u0986\u09b2\u09cb\u0995 \u09b8\u0995\u09cd\u09b0\u09bf\u09af\u09bc!"
  }
},
{
  "id": "ct-25",
  "category": "cis-trans",
  "iupacName": {
    "en": "Octadec-9-enoic acid",
    "bn": "\u0985\u0995\u09cd\u099f\u09be\u09a1\u09c7\u0995-\u09ef-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "commonName": {
    "en": "Oleic acid (cis) / Elaidic acid (trans)",
    "bn": "\u0993\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u09b8\u09bf\u09b8) / \u0987\u09b2\u09be\u0987\u09a1\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 (\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8)"
  },
  "formula": "C18H34O2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Octadec-9-enoic acid",
    "structure": {
      "name": {
        "en": "Cis-Octadec-9-enoic acid",
        "bn": "\u09b8\u09bf\u09b8-\u0985\u0995\u09cd\u099f\u09be\u09a1\u09c7\u0995-\u09ef-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C18H34O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "C8H17"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.0,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.7,
            1.2,
            0
          ],
          "label": "C7H14COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.4,
      "boilingPoint": "360.0\u00b0C",
      "meltingPoint": "13.4\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "Cis double bond produces a sharp 30\u00b0 kink in fatty acid chain, preventing tight packing; liquid oil at room temp.",
        "bn": "\u09b8\u09bf\u09b8 \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8 \u09ab\u09cd\u09af\u09be\u099f\u09bf \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u099a\u09c7\u0987\u09a8\u09c7 \u09ac\u09be\u0981\u0995 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7, \u09af\u09be \u0998\u09a8 \u09aa\u09cd\u09af\u09be\u0995\u09bf\u0982 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b0\u09cb\u09a7 \u0995\u09b0\u09c7; \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09af\u09bc \u09a4\u09b0\u09b2 \u09a4\u09c7\u09b2\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Octadec-9-enoic acid",
    "structure": {
      "name": {
        "en": "Trans-Octadec-9-enoic acid",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u0985\u0995\u09cd\u099f\u09be\u09a1\u09c7\u0995-\u09ef-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C18H34O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.7,
            1.2,
            0
          ],
          "label": "C8H17"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.0,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.7,
            -1.2,
            0
          ],
          "label": "C7H14COOH"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 1.2,
      "boilingPoint": "360.0\u00b0C",
      "meltingPoint": "45.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "Trans isomer is linear and straight, stacking easily into crystalline fat (trans fat in hydrogenated oils).",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09b0\u09c8\u0996\u09bf\u0995 \u0993 \u09b8\u09cb\u099c\u09be, \u09ab\u09b2\u09c7 \u09b8\u09b9\u099c\u09c7 \u09b8\u09cd\u09ab\u099f\u09bf\u0995\u09be\u0995\u09be\u09b0 \u099a\u09b0\u09cd\u09ac\u09bf\u09a4\u09c7 \u09b8\u09a8\u09cd\u09a8\u09bf\u09ac\u09c7\u09b6\u09bf\u09a4 \u09b9\u09af\u09bc (\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u099f\u09c7\u09a1 \u09a4\u09c7\u09b2\u09c7\u09b0 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09ab\u09cd\u09af\u09be\u099f)\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Explains why vegetable oils (cis-unsaturated) are healthy liquids while trans fats solidify and raise cardiovascular risks.",
    "bn": "\u0989\u09a6\u09cd\u09ad\u09bf\u099c\u09cd\u099c \u09a4\u09c7\u09b2 (\u09b8\u09bf\u09b8-\u0985\u09b8\u09ae\u09cd\u09aa\u09c3\u0995\u09cd\u09a4) \u0995\u09c7\u09a8 \u09b8\u09cd\u09ac\u09be\u09b8\u09cd\u09a5\u09cd\u09af\u0995\u09b0 \u09a4\u09b0\u09b2 \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u09ab\u09cd\u09af\u09be\u099f \u099c\u09ae\u09c7 \u0995\u09a0\u09bf\u09a8 \u09b9\u09af\u09bc\u09c7 \u09b9\u09c3\u09a6\u09b0\u09cb\u0997\u09c7\u09b0 \u099d\u09c1\u0981\u0995\u09bf \u09ac\u09be\u09a1\u09bc\u09be\u09af\u09bc \u09a4\u09be \u09ac\u09cd\u09af\u09be\u0996\u09cd\u09af\u09be \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ct-26",
  "category": "cis-trans",
  "iupacName": {
    "en": "Hexa-2,4-diene",
    "bn": "\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8"
  },
  "commonName": null,
  "formula": "C6H10",
  "systemType": "polyene",
  "isomerA": {
    "label": "Cis",
    "descriptor": "cis-Hexa-2,4-diene",
    "structure": {
      "name": {
        "en": "Cis-Hexa-2,4-diene",
        "bn": "\u09b8\u09bf\u09b8-\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8"
      },
      "formula": "C6H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH=CHCH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.4,
      "boilingPoint": "82.0\u00b0C",
      "meltingPoint": "-87.0\u00b0C",
      "stabilityRank": "less",
      "stabilityReason": {
        "en": "(2Z,4Z) isomer has steric clash between terminal methyls.",
        "bn": "(\u09e8Z,\u09eaZ) \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7 \u09aa\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u09c0\u09af\u09bc \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0997\u09c1\u09b2\u09bf\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09bf\u0995\u09b0\u09cd\u09b7\u09a3 \u0998\u099f\u09c7\u0964"
      }
    }
  },
  "isomerB": {
    "label": "Trans",
    "descriptor": "trans-Hexa-2,4-diene",
    "structure": {
      "name": {
        "en": "Trans-Hexa-2,4-diene",
        "bn": "\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8"
      },
      "formula": "C6H10",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.75,
            0,
            0
          ],
          "label": "C1",
          "isStereocenter": true
        },
        {
          "id": "c2",
          "element": "C",
          "position": [
            0.75,
            0,
            0
          ],
          "label": "C2",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "C",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.5,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH=CHCH3"
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "c2",
          "order": 2
        },
        {
          "from": "c1",
          "to": "g1",
          "order": 1
        },
        {
          "from": "c1",
          "to": "g2",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g3",
          "order": 1
        },
        {
          "from": "c2",
          "to": "g4",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "boilingPoint": "82.0\u00b0C",
      "meltingPoint": "-9.0\u00b0C",
      "stabilityRank": "more",
      "stabilityReason": {
        "en": "(2E,4E) is extended, planar, and thermodynamically most stable (mp -9\u00b0C vs -87\u00b0C).",
        "bn": "(\u09e8E,\u09eaE) \u09b8\u09ae\u09a4\u09b2 \u098f\u09ac\u0982 \u09b8\u09ac\u099a\u09c7\u09af\u09bc\u09c7 \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2 (\u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995 -\u09ef\u00b0\u09b8\u09c7 \u09ac\u09a8\u09be\u09ae -\u09ee\u09ed\u00b0\u09b8\u09c7)\u0964"
      }
    }
  },
  "pedagogicalNote": {
    "en": "Conjugated diene showing three geometrical isomers: (2E,4E), (2E,4Z), and (2Z,4Z).",
    "bn": "\u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09c7\u09a1 \u09a1\u09be\u0987\u0987\u09a8 \u09af\u09be \u09a4\u09bf\u09a8\u099f\u09bf \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf\u0995 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7: (\u09e8E,\u09eaE), (\u09e8E,\u09eaZ), \u098f\u09ac\u0982 (\u09e8Z,\u09eaZ)\u0964"
  }
},
];
