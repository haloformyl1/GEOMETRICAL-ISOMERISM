import type { IsomerPair } from '../../types/isomerism';

export const EZ_EXAMPLES: IsomerPair[] = [
{
  "id": "ez-01",
  "category": "e-z",
  "iupacName": {
    "en": "1-Bromo-1-chloro-2-fluoroethene",
    "bn": "\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "formula": "C2HBrClF",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Bromo-1-chloro-2-fluoroethene",
    "structure": {
      "name": {
        "en": "(Z)-1-Bromo-1-chloro-2-fluoroethene",
        "bn": "(Z)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2HBrClF",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "F",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "F",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 1.75,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Bromo-1-chloro-2-fluoroethene",
    "structure": {
      "name": {
        "en": "(E)-1-Bromo-1-chloro-2-fluoroethene",
        "bn": "(E)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2HBrClF",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "F",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "F",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 0.85,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 1
      },
      "group2": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "F",
        "atomicNumber": 9,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Rule 1 (Atomic Number): On C1, Br (Z=35) > Cl (Z=17). On C2, F (Z=9) > H (Z=1).",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09e7 (\u09aa\u09be\u09b0\u09ae\u09be\u09a3\u09ac\u09bf\u0995 \u09b8\u0982\u0996\u09cd\u09af\u09be): C1-\u098f Br (Z=\u09e9\u09eb) > Cl (Z=\u09e7\u09ed)\u0964 C2-\u09a4\u09c7 F (Z=\u09ef) > H (Z=\u09e7)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Direct application of CIP Rule 1: Halogen atomic numbers determine priorities unambiguously.",
    "bn": "\u09b8\u09bf\u0986\u0987\u09aa\u09bf \u09a8\u09bf\u09af\u09bc\u09ae \u09e7-\u098f\u09b0 \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u0997: \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09b8\u09c1\u09b8\u09cd\u09aa\u09b7\u09cd\u099f\u09ad\u09be\u09ac\u09c7 \u09a8\u09bf\u09b0\u09cd\u09a7\u09be\u09b0\u09a3 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ez-02",
  "category": "e-z",
  "iupacName": {
    "en": "2-Bromo-1-chloroprop-1-ene",
    "bn": "\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
  },
  "formula": "C3H4BrCl",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Bromo-1-chloroprop-1-ene",
    "structure": {
      "name": {
        "en": "(Z)-2-Bromo-1-chloroprop-1-ene",
        "bn": "(Z)-\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
      },
      "formula": "C3H4BrCl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Br",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Bromo-1-chloroprop-1-ene",
    "structure": {
      "name": {
        "en": "(E)-2-Bromo-1-chloroprop-1-ene",
        "bn": "(E)-\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
      },
      "formula": "C3H4BrCl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Br",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 1.3,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Trap Alert: In (1Z), Cl and Br are on same side. In (1E), Cl is cis to methyl. Cis is NOT always Z!",
      "bn": "\u09b8\u09a4\u09b0\u09cd\u0995\u09a4\u09be: (\u09e7Z)-\u098f Cl \u0993 Br \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7\u0964 (\u09e7E)-\u098f Cl \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09c7\u09b0 \u09b8\u09bf\u09b8\u0964 \u09b8\u09bf\u09b8 \u09ae\u09be\u09a8\u09c7\u0987 \u09b8\u09ac\u09b8\u09ae\u09af\u09bc Z \u09a8\u09af\u09bc!"
    }
  },
  "pedagogicalNote": {
    "en": "Classic exam pitfall: When naming with cis/trans relative to carbon chain vs CIP (E/Z), they can be opposite!",
    "bn": "\u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be\u09b0 \u0995\u09cd\u09b2\u09be\u09b8\u09bf\u0995 \u09ab\u09be\u0981\u09a6: \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u099a\u09c7\u0987\u09a8\u09c7\u09b0 \u09b8\u09bf\u09b8/\u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u098f\u09ac\u0982 \u09b8\u09bf\u0986\u0987\u09aa\u09bf\u09b0 (E/Z) \u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09bf\u09b0\u09cb\u09a7 \u09a6\u09c7\u0996\u09be \u09a6\u09bf\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7!"
  }
},
{
  "id": "ez-03",
  "category": "e-z",
  "iupacName": {
    "en": "1-Chloro-2-methylbut-1-ene",
    "bn": "\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e7-\u0987\u09a8"
  },
  "formula": "C5H9Cl",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Chloro-2-methylbut-1-ene",
    "structure": {
      "name": {
        "en": "(Z)-1-Chloro-2-methylbut-1-ene",
        "bn": "(Z)-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e7-\u0987\u09a8"
      },
      "formula": "C5H9Cl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH2CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 1.95,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Chloro-2-methylbut-1-ene",
    "structure": {
      "name": {
        "en": "(E)-1-Chloro-2-methylbut-1-ene",
        "bn": "(E)-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e7-\u0987\u09a8"
      },
      "formula": "C5H9Cl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH2CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH2CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Rule 3 (Tie-breaker): On C2, both groups are carbon (Z=6). Ethyl is C attached to (C,H,H), Methyl is C attached to (H,H,H). Ethyl wins priority 1.",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09e9 (\u099f\u09be\u0987-\u09ac\u09cd\u09b0\u09c7\u0995\u09be\u09b0): C2-\u09a4\u09c7 \u0989\u09ad\u09af\u09bc \u0997\u09cd\u09b0\u09c1\u09aa\u0987 \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u0964 \u0987\u09a5\u09be\u0987\u09b2 \u09b9\u09b2\u09cb (C,H,H) \u09af\u09c1\u0995\u09cd\u09a4 \u0995\u09be\u09b0\u09cd\u09ac\u09a8, \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u09b9\u09b2\u09cb (H,H,H)\u0964 \u0987\u09a5\u09be\u0987\u09b2 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09e7 \u09aa\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Demonstrates tie-breaking along carbon chains: compare atoms attached to the first carbon.",
    "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u099a\u09c7\u0987\u09a8\u09c7 \u099f\u09be\u0987-\u09ac\u09cd\u09b0\u09c7\u0995\u09bf\u0982\u09af\u09bc\u09c7\u09b0 \u0989\u09a6\u09be\u09b9\u09b0\u09a3: \u09aa\u09cd\u09b0\u09a5\u09ae \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u0997\u09c1\u09b2\u09bf\u09b0 \u09a4\u09c1\u09b2\u09a8\u09be\u0964"
  }
},
{
  "id": "ez-04",
  "category": "e-z",
  "iupacName": {
    "en": "2-Chlorobut-2-en-1-ol",
    "bn": "\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8-\u09e7-\u0985\u09b2"
  },
  "formula": "C4H7ClO",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Chlorobut-2-en-1-ol",
    "structure": {
      "name": {
        "en": "(Z)-2-Chlorobut-2-en-1-ol",
        "bn": "(Z)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8-\u09e7-\u0985\u09b2"
      },
      "formula": "C4H7ClO",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Chlorobut-2-en-1-ol",
    "structure": {
      "name": {
        "en": "(E)-2-Chlorobut-2-en-1-ol",
        "bn": "(E)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8-\u09e7-\u0985\u09b2"
      },
      "formula": "C4H7ClO",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 1.65,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH2OH",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "On C1: Cl (Z=17) > CH3 (Z=6). On C2: -CH2OH (C bonded to O,H,H) > H (Z=1).",
      "bn": "C1-\u098f: Cl (Z=\u09e7\u09ed) > CH3 (Z=\u09ec)\u0964 C2-\u09a4\u09c7: -CH2OH (\u0985\u0995\u09cd\u09b8\u09bf\u099c\u09c7\u09a8 \u09af\u09c1\u0995\u09cd\u09a4 \u0995\u09be\u09b0\u09cd\u09ac\u09a8) > H (Z=\u09e7)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Heteroatom substitution on alkyl side-chain changes priority ranking.",
    "bn": "\u09aa\u09be\u09b0\u09cd\u09b6\u09cd\u09ac-\u09b6\u09bf\u0995\u09b2\u09c7 \u09b9\u09c7\u099f\u09be\u09b0\u09cb\u0985\u09cd\u09af\u09be\u099f\u09ae \u09af\u09c1\u0995\u09cd\u09a4 \u09b9\u09b2\u09c7 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09ac\u09c3\u09a6\u09cd\u09a7\u09bf \u09aa\u09be\u09af\u09bc\u0964"
  }
},
{
  "id": "ez-05",
  "category": "e-z",
  "iupacName": {
    "en": "3-Methylpent-2-enoic acid",
    "bn": "\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C6H10O2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-3-Methylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-3-Methylpent-2-enoic acid",
        "bn": "(Z)-\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C6H10O2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.6,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-3-Methylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-3-Methylpent-2-enoic acid",
        "bn": "(E)-\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C6H10O2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Rule 4 (Multiple Bonds): -COOH carbon is treated as bonded to (O,O,O). It beats H. On C3, ethyl beats methyl.",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09ea (\u09ac\u09b9\u09c1\u09ac\u09a8\u09cd\u09a7\u09a8): -COOH \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u0995\u09c7 \u09a4\u09bf\u09a8\u099f\u09bf \u0985\u0995\u09cd\u09b8\u09bf\u099c\u09c7\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09b9\u09bf\u09b8\u09c7\u09ac\u09c7 \u09a7\u09b0\u09be \u09b9\u09af\u09bc\u0964 C3-\u09a4\u09c7 \u0987\u09a5\u09be\u0987\u09b2 \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Carboxylic acid phantom duplicate atoms applied in unsaturated fatty-acid derivatives.",
    "bn": "\u0985\u09b8\u09ae\u09cd\u09aa\u09c3\u0995\u09cd\u09a4 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1\u09c7 \u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1\u09c7\u09b0 \u09a1\u09c1\u09aa\u09cd\u09b2\u09bf\u0995\u09c7\u099f \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u0997\u0964"
  }
},
{
  "id": "ez-06",
  "category": "e-z",
  "iupacName": {
    "en": "2-(Hydroxymethyl)but-2-enoic acid",
    "bn": "\u09e8-(\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u0995\u09cd\u09b8\u09bf\u09ae\u09bf\u09a5\u09be\u0987\u09b2)\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C5H8O3",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-(Hydroxymethyl)but-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-2-(Hydroxymethyl)but-2-enoic acid",
        "bn": "(Z)-\u09e8-(\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u0995\u09cd\u09b8\u09bf\u09ae\u09bf\u09a5\u09be\u0987\u09b2)\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-(Hydroxymethyl)but-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-2-(Hydroxymethyl)but-2-enoic acid",
        "bn": "(E)-\u09e8-(\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u0995\u09cd\u09b8\u09bf\u09ae\u09bf\u09a5\u09be\u0987\u09b2)\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "CH2OH",
        "atomicNumber": 8,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "-COOH carbon is bonded to (O,O,O) via phantom bonds, beating -CH2OH carbon which is bonded to (O,H,H).",
      "bn": "-COOH \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u09a4\u09bf\u09a8\u099f\u09bf (O,O,O)-\u098f\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09a7\u09b0\u09be \u09b9\u09af\u09bc, \u09af\u09be -CH2OH-\u098f\u09b0 (O,H,H)-\u0995\u09c7 \u09aa\u09b0\u09be\u099c\u09bf\u09a4 \u0995\u09b0\u09c7\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Direct comparison between carbonyl oxidation state (O,O,O) and alcohol oxidation state (O,H,H).",
    "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09bf\u09b2 \u0985\u0995\u09cd\u09b8\u09bf\u09a1\u09c7\u09b6\u09a8 \u09b8\u09cd\u099f\u09c7\u099f (O,O,O) \u098f\u09ac\u0982 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09cb\u09b9\u09b2 \u0985\u0995\u09cd\u09b8\u09bf\u09a1\u09c7\u09b6\u09a8 \u09b8\u09cd\u099f\u09c7\u099f\u09c7\u09b0 (O,H,H) \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09a4\u09c1\u09b2\u09a8\u09be\u0964"
  }
},
{
  "id": "ez-07",
  "category": "e-z",
  "iupacName": {
    "en": "1-Bromo-2-chloro-2-fluoro-1-iodoethene",
    "bn": "\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e7-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "formula": "C2BrClFI",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Bromo-2-chloro-2-fluoro-1-iodoethene",
    "structure": {
      "name": {
        "en": "(Z)-1-Bromo-2-chloro-2-fluoro-1-iodoethene",
        "bn": "(Z)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e7-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2BrClFI",
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
            -1.6,
            1.1,
            0
          ],
          "label": "I",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Br",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "F",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
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
      "dipoleNet": 1.25,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Bromo-2-chloro-2-fluoro-1-iodoethene",
    "structure": {
      "name": {
        "en": "(E)-1-Bromo-2-chloro-2-fluoro-1-iodoethene",
        "bn": "(E)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e7-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2BrClFI",
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
            -1.6,
            1.1,
            0
          ],
          "label": "I",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Br",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "F",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
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
      "dipoleNet": 1.95,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "I",
        "atomicNumber": 53,
        "priority": 1
      },
      "group2": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "F",
        "atomicNumber": 9,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Tetra-halogenated alkene: C1: I (53) > Br (35). C2: Cl (17) > F (9). High priority I and Cl together = (Z).",
      "bn": "\u099f\u09c7\u099f\u09cd\u09b0\u09be-\u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8\u09af\u09c1\u0995\u09cd\u09a4 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8: C1: I (\u09eb\u09e9) > Br (\u09e9\u09eb)\u0964 C2: Cl (\u09e7\u09ed) > F (\u09ef)\u0964 I \u098f\u09ac\u0982 Cl \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7 = (Z)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Cleanest multi-halogen demonstration: order of priority is I > Br > Cl > F.",
    "bn": "\u09ae\u09be\u09b2\u09cd\u099f\u09bf-\u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u0986\u09a6\u09b0\u09cd\u09b6 \u0989\u09a6\u09be\u09b9\u09b0\u09a3: \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u09c7\u09b0 \u0995\u09cd\u09b0\u09ae I > Br > Cl > F\u0964"
  }
},
{
  "id": "ez-08",
  "category": "e-z",
  "iupacName": {
    "en": "2-Deuteriobut-2-ene",
    "bn": "\u09e8-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
  },
  "formula": "C4H7D",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Deuteriobut-2-ene",
    "structure": {
      "name": {
        "en": "(Z)-2-Deuteriobut-2-ene",
        "bn": "(Z)-\u09e8-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H7D",
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
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "D",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Deuteriobut-2-ene",
    "structure": {
      "name": {
        "en": "(E)-2-Deuteriobut-2-ene",
        "bn": "(E)-\u09e8-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H7D",
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
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "D",
          "cipPriority": 2
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
      "dipoleNet": 0.05,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "D",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Rule 2 (Isotopes): On C3, both groups have Z=1. Deuterium (mass 2) takes priority over Protium/Hydrogen (mass 1).",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09e8 (\u0986\u0987\u09b8\u09cb\u099f\u09cb\u09aa): C3-\u09a4\u09c7 \u0989\u09ad\u09af\u09bc \u0997\u09cd\u09b0\u09c1\u09aa\u09c7\u0987 Z=\u09e7\u0964 \u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u09af\u09bc\u09be\u09ae (\u09ad\u09b0 \u09e8) \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 (\u09ad\u09b0 \u09e7) \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09aa\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Crucial isotopic CIP rule: heavier isotopes of identical atomic number have higher priority.",
    "bn": "\u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u0986\u0987\u09b8\u09cb\u099f\u09cb\u09aa \u09a8\u09bf\u09af\u09bc\u09ae: \u09b8\u09ae\u09be\u09a8 \u09aa\u09be\u09b0\u09ae\u09be\u09a3\u09ac\u09bf\u0995 \u09b8\u0982\u0996\u09cd\u09af\u09be\u09b0 \u09ad\u09be\u09b0\u09c0 \u0986\u0987\u09b8\u09cb\u099f\u09cb\u09aa \u09ac\u09c7\u09b6\u09bf \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09aa\u09be\u09af\u09bc\u0964"
  }
},
{
  "id": "ez-09",
  "category": "e-z",
  "iupacName": {
    "en": "1-Bromo-1-chloro-2-phenylethene",
    "bn": "\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8"
  },
  "formula": "C8H6BrCl",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Bromo-1-chloro-2-phenylethene",
    "structure": {
      "name": {
        "en": "(Z)-1-Bromo-1-chloro-2-phenylethene",
        "bn": "(Z)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C8H6BrCl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Bromo-1-chloro-2-phenylethene",
    "structure": {
      "name": {
        "en": "(E)-1-Bromo-1-chloro-2-phenylethene",
        "bn": "(E)-\u09e7-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C8H6BrCl",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "Cl",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 1
      },
      "group2": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Ph",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "On C1: Br (Z=35) > Cl (Z=17). On C2: Phenyl ring carbon is bonded to (C,C,C) via aromatic delocalization > H (Z=1).",
      "bn": "C1-\u098f: Br (\u09e9\u09eb) > Cl (\u09e7\u09ed)\u0964 C2-\u09a4\u09c7: \u0985\u09cd\u09af\u09be\u09b0\u09cb\u09ae\u09c7\u099f\u09bf\u0995 \u09ab\u09bf\u09a8\u09be\u0987\u09b2 \u0995\u09be\u09b0\u09cd\u09ac\u09a8 (C,C,C) \u09af\u09c1\u0995\u09cd\u09a4 \u09a7\u09b0\u09be \u09b9\u09af\u09bc \u09af\u09be H-\u098f\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ad\u09be\u09b0\u09c0\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Aromatic rings use duplicate bonds: phenyl carbon counts as bonded to 3 carbons.",
    "bn": "\u0985\u09cd\u09af\u09be\u09b0\u09cb\u09ae\u09c7\u099f\u09bf\u0995 \u09ac\u09b2\u09af\u09bc\u09c7 \u09a1\u09c1\u09aa\u09cd\u09b2\u09bf\u0995\u09c7\u099f \u09ac\u09a8\u09cd\u09a7\u09a8 \u09aa\u09cd\u09b0\u09af\u09cb\u099c\u09cd\u09af: \u09ab\u09bf\u09a8\u09be\u0987\u09b2 \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u09e9\u099f\u09bf \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u09ac\u09b2\u09c7 \u0997\u09a3\u09cd\u09af \u09b9\u09af\u09bc\u0964"
  }
},
{
  "id": "ez-10",
  "category": "e-z",
  "iupacName": {
    "en": "2-Chloro-3-phenylacrylonitrile",
    "bn": "\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09cb\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
  },
  "formula": "C9H6ClN",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Chloro-3-phenylacrylonitrile",
    "structure": {
      "name": {
        "en": "(Z)-2-Chloro-3-phenylacrylonitrile",
        "bn": "(Z)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09cb\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
      },
      "formula": "C9H6ClN",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "N",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CN",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 3.8,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Chloro-3-phenylacrylonitrile",
    "structure": {
      "name": {
        "en": "(E)-2-Chloro-3-phenylacrylonitrile",
        "bn": "(E)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u09ab\u09bf\u09a8\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09cb\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
      },
      "formula": "C9H6ClN",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "N",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CN",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 2.2,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "CN",
        "atomicNumber": 7,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Ph",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Rule 1 beats Rule 4! Chlorine has Z=17, which immediately beats cyano carbon (Z=6), despite cyano having a triple bond to nitrogen.",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09e7 \u09a8\u09bf\u09af\u09bc\u09ae \u09ea-\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc! \u0995\u09cd\u09b2\u09cb\u09b0\u09bf\u09a8\u09c7\u09b0 Z=\u09e7\u09ed \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09b8\u09be\u09af\u09bc\u09be\u09a8\u09cb \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u0995\u09c7 (Z=\u09ec) \u09b9\u09be\u09b0\u09bf\u09af\u09bc\u09c7 \u09a6\u09c7\u09af\u09bc, \u09b8\u09be\u09af\u09bc\u09be\u09a8\u09cb\u09a4\u09c7 \u09a4\u09cd\u09b0\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8 \u09a5\u09be\u0995\u09be \u09b8\u09a4\u09cd\u09a4\u09cd\u09ac\u09c7\u0993\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Key CIP principle: Never count multiple bonds until the directly attached atomic numbers are tied!",
    "bn": "\u09ae\u09c2\u09b2 \u09a8\u09c0\u09a4\u09bf: \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09af\u09c1\u0995\u09cd\u09a4 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be \u09b8\u09ae\u09be\u09a8 \u09a8\u09be \u09b9\u0993\u09af\u09bc\u09be \u09aa\u09b0\u09cd\u09af\u09a8\u09cd\u09a4 \u09ac\u09b9\u09c1\u09ac\u09a8\u09cd\u09a7\u09a8 \u0997\u09a3\u09a8\u09be \u0995\u09b0\u09ac\u09c7\u09a8 \u09a8\u09be!"
  }
},
{
  "id": "ez-11",
  "category": "e-z",
  "iupacName": {
    "en": "4-Formyl-3-methylpent-2-enoic acid",
    "bn": "\u09ea-\u09ab\u09b0\u09ae\u09be\u0987\u09b2-\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C7H8O3",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-4-Formyl-3-methylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-4-Formyl-3-methylpent-2-enoic acid",
        "bn": "(Z)-\u09ea-\u09ab\u09b0\u09ae\u09be\u0987\u09b2-\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C7H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.9,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-4-Formyl-3-methylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-4-Formyl-3-methylpent-2-enoic acid",
        "bn": "(E)-\u09ea-\u09ab\u09b0\u09ae\u09be\u0987\u09b2-\u09e9-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C7H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CHO",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "-COOH on C2 has priority 1 over H. On C3, formyl -CHO (bonded to O,O,H) beats methyl -CH3 (bonded to H,H,H).",
      "bn": "C2-\u09a4\u09c7 -COOH \u09aa\u09be\u09af\u09bc \u09e7\u0964 C3-\u09a4\u09c7 \u09ab\u09b0\u09ae\u09be\u0987\u09b2 -CHO (\u09af\u09c1\u0995\u09cd\u09a4 O,O,H) \u09ae\u09bf\u09a5\u09be\u0987\u09b2 -CH3 (\u09af\u09c1\u0995\u09cd\u09a4 H,H,H)-\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Polyfunctional alkene prioritizing carboxyl and aldehyde groups.",
    "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u098f\u09ac\u0982 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u09c7\u09b0 \u09ac\u09b9\u09c1-\u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0\u09c0 \u0989\u09a6\u09be\u09b9\u09b0\u09a3\u0964"
  }
},
{
  "id": "ez-12",
  "category": "e-z",
  "iupacName": {
    "en": "1-Fluoroprop-1-ene",
    "bn": "\u09e7-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
  },
  "formula": "C3H5F",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Fluoroprop-1-ene",
    "structure": {
      "name": {
        "en": "(Z)-1-Fluoroprop-1-ene",
        "bn": "(Z)-\u09e7-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
      },
      "formula": "C3H5F",
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
          "label": "F",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 1.7,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Fluoroprop-1-ene",
    "structure": {
      "name": {
        "en": "(E)-1-Fluoroprop-1-ene",
        "bn": "(E)-\u09e7-\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u09aa\u09cd\u09b0\u09aa-\u09e7-\u0987\u09a8"
      },
      "formula": "C3H5F",
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
          "label": "F",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 1.5,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "F",
        "atomicNumber": 9,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C1: F (9) > H (1). C2: CH3 (6) > H (1). When F and CH3 are on same side = (Z); opposite sides = (E).",
      "bn": "C1: F (\u09ef) > H (\u09e7)\u0964 C2: CH3 (\u09ec) > H (\u09e7)\u0964 F \u098f\u09ac\u0982 CH3 \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7 \u09a5\u09be\u0995\u09b2\u09c7 (Z); \u09ac\u09bf\u09aa\u09b0\u09c0\u09a4\u09c7 \u09a5\u09be\u0995\u09b2\u09c7 (E)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Simple monofluoroalkene verifying the standard E/Z nomenclature.",
    "bn": "\u09b8\u09b9\u099c \u09ae\u09a8\u09cb\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb\u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u09af\u09be \u0986\u09a6\u09b0\u09cd\u09b6 E/Z \u09a8\u09be\u09ae\u0995\u09b0\u09a3\u09c7\u09b0 \u09ad\u09bf\u09a4\u09cd\u09a4\u09bf \u09b8\u09cd\u09aa\u09b7\u09cd\u099f \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ez-13",
  "category": "e-z",
  "iupacName": {
    "en": "3-Bromo-4-methylhex-3-ene",
    "bn": "\u09e9-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09ea-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
  },
  "formula": "C7H13Br",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-3-Bromo-4-methylhex-3-ene",
    "structure": {
      "name": {
        "en": "(Z)-3-Bromo-4-methylhex-3-ene",
        "bn": "(Z)-\u09e9-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09ea-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
      },
      "formula": "C7H13Br",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 1.85,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-3-Bromo-4-methylhex-3-ene",
    "structure": {
      "name": {
        "en": "(E)-3-Bromo-4-methylhex-3-ene",
        "bn": "(E)-\u09e9-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09ea-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b9\u09c7\u0995\u09cd\u09b8-\u09e9-\u0987\u09a8"
      },
      "formula": "C7H13Br",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 1
      },
      "group2": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "On C3: Br (35) > C2H5 (6). On C4: Ethyl (C,H,H) > Methyl (H,H,H).",
      "bn": "C3-\u098f: Br (\u09e9\u09eb) > C2H5 (\u09ec)\u0964 C4-\u098f: \u0987\u09a5\u09be\u0987\u09b2 (C,H,H) > \u09ae\u09bf\u09a5\u09be\u0987\u09b2 (H,H,H)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Halogen priority on one side coupled with alkyl chain-length priority on the other.",
    "bn": "\u098f\u0995\u09aa\u09be\u09b6\u09c7 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u098f\u09ac\u0982 \u0985\u09a8\u09cd\u09af\u09aa\u09be\u09b6\u09c7 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u09b6\u09bf\u0995\u09b2 \u09a6\u09c8\u09b0\u09cd\u0998\u09cd\u09af\u09c7\u09b0 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u0964"
  }
},
{
  "id": "ez-14",
  "category": "e-z",
  "iupacName": {
    "en": "(2E,4Z)-Hexa-2,4-dien-1-ol",
    "bn": "(\u09e8E,\u09eaZ)-\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8-\u09e7-\u0985\u09b2"
  },
  "formula": "C6H10O",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-(2E,4Z)-Hexa-2,4-dien-1-ol",
    "structure": {
      "name": {
        "en": "(Z)-(2E,4Z)-Hexa-2,4-dien-1-ol",
        "bn": "(Z)-(\u09e8E,\u09eaZ)-\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8-\u09e7-\u0985\u09b2"
      },
      "formula": "C6H10O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH=CHCH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-(2E,4Z)-Hexa-2,4-dien-1-ol",
    "structure": {
      "name": {
        "en": "(E)-(2E,4Z)-Hexa-2,4-dien-1-ol",
        "bn": "(E)-(\u09e8E,\u09eaZ)-\u09b9\u09c7\u0995\u09cd\u09b8\u09be-\u09e8,\u09ea-\u09a1\u09be\u0987\u0987\u09a8-\u09e7-\u0985\u09b2"
      },
      "formula": "C6H10O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CH2OH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH=CHCH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 1.5,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "CH2OH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH=CHCH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Conjugated polyene with independent E/Z stereocenters at C2 and C4.",
      "bn": "\u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09c7\u09a1 \u09aa\u09b2\u09bf\u0987\u09a8 \u09af\u09c7\u0996\u09be\u09a8\u09c7 C2 \u098f\u09ac\u0982 C4-\u098f \u09b8\u09cd\u09ac\u09a4\u09a8\u09cd\u09a4\u09cd\u09b0 E/Z \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u09b8\u09c7\u09a8\u09cd\u099f\u09be\u09b0 \u09ac\u09bf\u09a6\u09cd\u09af\u09ae\u09be\u09a8\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Independent numbering and stereodescriptors for multiple conjugated double bonds.",
    "bn": "\u098f\u0995\u09be\u09a7\u09bf\u0995 \u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09c7\u09a1 \u09a6\u09cd\u09ac\u09bf\u09ac\u09a8\u09cd\u09a7\u09a8\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09b8\u09cd\u09ac\u09a4\u09a8\u09cd\u09a4\u09cd\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be\u09af\u09bc\u09a8 \u0993 \u09a8\u09be\u09ae\u0995\u09b0\u09a3\u0964"
  }
},
{
  "id": "ez-15",
  "category": "e-z",
  "iupacName": {
    "en": "11-cis-Retinal (Visual Pigment)",
    "bn": "\u09e7\u09e7-\u09b8\u09bf\u09b8-\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09b2 (\u09a6\u09c3\u09b7\u09cd\u099f\u09bf\u09b0 \u09b0\u099e\u09cd\u099c\u0995)"
  },
  "formula": "C20H28O",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-11-cis-Retinal (Visual Pigment)",
    "structure": {
      "name": {
        "en": "(Z)-11-cis-Retinal (Visual Pigment)",
        "bn": "(Z)-\u09e7\u09e7-\u09b8\u09bf\u09b8-\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09b2 (\u09a6\u09c3\u09b7\u09cd\u099f\u09bf\u09b0 \u09b0\u099e\u09cd\u099c\u0995)"
      },
      "formula": "C20H28O",
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
          "label": "Polyene",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CHO-tail",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 3.2,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-11-cis-Retinal (Visual Pigment)",
    "structure": {
      "name": {
        "en": "(E)-11-cis-Retinal (Visual Pigment)",
        "bn": "(E)-\u09e7\u09e7-\u09b8\u09bf\u09b8-\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09b2 (\u09a6\u09c3\u09b7\u09cd\u099f\u09bf\u09b0 \u09b0\u099e\u09cd\u099c\u0995)"
      },
      "formula": "C20H28O",
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
          "label": "Polyene",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CHO-tail",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Polyene",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CHO-tail",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Photoreception in retina: (11Z)-retinal absorbs a photon and isomerizes to all-(E)-retinal within 200 femtoseconds!",
      "bn": "\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09af\u09bc \u0986\u09b2\u09cb\u0995 \u0997\u09cd\u09b0\u09b9\u09a3: (\u09e7\u09e7Z)-\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09b2 \u0986\u09b2\u09cb \u09b6\u09cb\u09b7\u09a3 \u0995\u09b0\u09c7 \u09ae\u09be\u09a4\u09cd\u09b0 \u09e8\u09e6\u09e6 \u09ab\u09c7\u09ae\u099f\u09cb\u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1\u09c7 \u0985\u09b2-(E)-\u09b0\u09c7\u099f\u09bf\u09a8\u09be\u09b2\u09c7 \u09b0\u09c2\u09aa\u09be\u09a8\u09cd\u09a4\u09b0\u09bf\u09a4 \u09b9\u09af\u09bc!"
    }
  },
  "pedagogicalNote": {
    "en": "The molecular basis of human vision is a photochemical Z to E geometrical isomerization.",
    "bn": "\u09ae\u09be\u09a8\u09ac \u09a6\u09c3\u09b7\u09cd\u099f\u09bf\u09b6\u0995\u09cd\u09a4\u09bf\u09b0 \u0986\u09a3\u09ac\u09bf\u0995 \u09ad\u09bf\u09a4\u09cd\u09a4\u09bf \u09b9\u09b2\u09cb \u0986\u09b2\u09cb\u0995\u09c7\u09b0 \u0989\u09aa\u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09a4\u09c7 \u098f\u0995\u099f\u09bf Z \u09a5\u09c7\u0995\u09c7 E \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf\u0995 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae\u0964"
  }
},
{
  "id": "ez-16",
  "category": "e-z",
  "iupacName": {
    "en": "3-Amino-2-chlorobut-2-enoic acid",
    "bn": "\u09e9-\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C4H6ClNO2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-3-Amino-2-chlorobut-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-3-Amino-2-chlorobut-2-enoic acid",
        "bn": "(Z)-\u09e9-\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H6ClNO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "N",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "NH2",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 3.4,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-3-Amino-2-chlorobut-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-3-Amino-2-chlorobut-2-enoic acid",
        "bn": "(E)-\u09e9-\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09cb-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C4H6ClNO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "N",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "NH2",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.7,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "NH2",
        "atomicNumber": 7,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C2: Cl (17) > COOH (C=6). C3: NH2 (N=7) > CH3 (C=6). Both heteroatoms win immediately.",
      "bn": "C2: Cl (\u09e7\u09ed) > COOH (C=\u09ec)\u0964 C3: NH2 (N=\u09ed) > CH3 (C=\u09ec)\u0964 \u0989\u09ad\u09af\u09bc \u09b9\u09c7\u099f\u09be\u09b0\u09cb\u0985\u09cd\u09af\u09be\u099f\u09ae \u09aa\u09cd\u09b0\u09a5\u09ae \u09a7\u09be\u09aa\u09c7\u0987 \u099c\u09af\u09bc\u09c0 \u09b9\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Direct atomic number victory of halogens and amines over carboxylic carbon.",
    "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u0995\u09cd\u09b8\u09bf\u09b2 \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u0993\u09aa\u09b0 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8 \u098f\u09ac\u0982 \u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8 \u09aa\u09b0\u09ae\u09be\u09a3\u09c1\u09b0 \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u099c\u09af\u09bc\u0964"
  }
},
{
  "id": "ez-17",
  "category": "e-z",
  "iupacName": {
    "en": "1-Chloro-1,2-difluoro-2-iodoethene",
    "bn": "\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e8-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
  },
  "formula": "C2ClF2I",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-1-Chloro-1,2-difluoro-2-iodoethene",
    "structure": {
      "name": {
        "en": "(Z)-1-Chloro-1,2-difluoro-2-iodoethene",
        "bn": "(Z)-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e8-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2ClF2I",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "F",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "I",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "I",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "F",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-1-Chloro-1,2-difluoro-2-iodoethene",
    "structure": {
      "name": {
        "en": "(E)-1-Chloro-1,2-difluoro-2-iodoethene",
        "bn": "(E)-\u09e7-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e7,\u09e8-\u09a1\u09be\u0987\u09ab\u09cd\u09b2\u09c1\u09b0\u09cb-\u09e8-\u0986\u09af\u09bc\u09cb\u09a1\u09cb\u0987\u09a5\u09bf\u09a8"
      },
      "formula": "C2ClF2I",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "F",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "I",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "I",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "F",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "F",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "F",
        "atomicNumber": 9,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "I",
        "atomicNumber": 53,
        "priority": 1
      },
      "group2": {
        "name": "F",
        "atomicNumber": 9,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C1: Cl (17) > F (9). C2: I (53) > F (9). High priority halogens Cl and I on same side = (Z).",
      "bn": "C1: Cl (\u09e7\u09ed) > F (\u09ef)\u0964 C2: I (\u09eb\u09e9) > F (\u09ef)\u0964 \u0989\u099a\u09cd\u099a \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u09c7\u09b0 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8 Cl \u0993 I \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7 = (Z)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Cross-halogen priority verification across both alkene stereocenters.",
    "bn": "\u0989\u09ad\u09af\u09bc \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u0995\u09cd\u09b0\u09b8-\u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09af\u09be\u099a\u09be\u0987\u0964"
  }
},
{
  "id": "ez-18",
  "category": "e-z",
  "iupacName": {
    "en": "2-Nitrobut-2-ene",
    "bn": "\u09e8-\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
  },
  "formula": "C4H7NO2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Nitrobut-2-ene",
    "structure": {
      "name": {
        "en": "(Z)-2-Nitrobut-2-ene",
        "bn": "(Z)-\u09e8-\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H7NO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "NO2",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 3.7,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Nitrobut-2-ene",
    "structure": {
      "name": {
        "en": "(E)-2-Nitrobut-2-ene",
        "bn": "(E)-\u09e8-\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C4H7NO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "NO2",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 2.9,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "NO2",
        "atomicNumber": 7,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "On C2: -NO2 nitrogen (Z=7) beats methyl carbon (Z=6). On C3: methyl carbon (Z=6) beats hydrogen (Z=1).",
      "bn": "C2-\u09a4\u09c7: -NO2 \u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8 (Z=\u09ed) \u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u0995\u09c7 (Z=\u09ec) \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964 C3-\u09a4\u09c7: \u09ae\u09bf\u09a5\u09be\u0987\u09b2 H-\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Nitro-alkene demonstrating nitrogen priority over carbon.",
    "bn": "\u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u0993\u09aa\u09b0 \u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u09c7\u09b0 \u09b8\u09cd\u09aa\u09b7\u09cd\u099f \u0989\u09a6\u09be\u09b9\u09b0\u09a3\u0964"
  }
},
{
  "id": "ez-19",
  "category": "e-z",
  "iupacName": {
    "en": "3-Methoxy-2-methylacrylic acid",
    "bn": "\u09e9-\u09ae\u09bf\u09a5\u0995\u09cd\u09b8\u09bf-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C5H8O3",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-3-Methoxy-2-methylacrylic acid",
    "structure": {
      "name": {
        "en": "(Z)-3-Methoxy-2-methylacrylic acid",
        "bn": "(Z)-\u09e9-\u09ae\u09bf\u09a5\u0995\u09cd\u09b8\u09bf-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "OCH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 2.7,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-3-Methoxy-2-methylacrylic acid",
    "structure": {
      "name": {
        "en": "(E)-3-Methoxy-2-methylacrylic acid",
        "bn": "(E)-\u09e9-\u09ae\u09bf\u09a5\u0995\u09cd\u09b8\u09bf-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u0995\u09cd\u09b0\u09bf\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H8O3",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "O",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "OCH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "OCH3",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C2: -COOH (carbon attached to O,O,O) > -CH3 (C,H,H,H). C3: -OCH3 oxygen (Z=8) > H (Z=1).",
      "bn": "C2: -COOH (\u09af\u09c1\u0995\u09cd\u09a4 O,O,O) > -CH3 (\u09af\u09c1\u0995\u09cd\u09a4 H,H,H)\u0964 C3: -OCH3 \u0985\u0995\u09cd\u09b8\u09bf\u099c\u09c7\u09a8 (\u09ee) > H (\u09e7)\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Enol ether acid demonstrating oxygen priority over hydrogen.",
    "bn": "\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u0993\u09aa\u09b0 \u0985\u0995\u09cd\u09b8\u09bf\u099c\u09c7\u09a8\u09c7\u09b0 \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0\u09c7\u09b0 \u0987\u09a8\u09b2 \u0987\u09a5\u09be\u09b0 \u09a6\u09c3\u09b7\u09cd\u099f\u09be\u09a8\u09cd\u09a4\u0964"
  }
},
{
  "id": "ez-20",
  "category": "e-z",
  "iupacName": {
    "en": "2-Cyclopropylbut-2-enenitrile",
    "bn": "\u09e8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
  },
  "formula": "C7H9N",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Cyclopropylbut-2-enenitrile",
    "structure": {
      "name": {
        "en": "(Z)-2-Cyclopropylbut-2-enenitrile",
        "bn": "(Z)-\u09e8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
      },
      "formula": "C7H9N",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CN",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "c-Pr",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Cyclopropylbut-2-enenitrile",
    "structure": {
      "name": {
        "en": "(E)-2-Cyclopropylbut-2-enenitrile",
        "bn": "(E)-\u09e8-\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u0987\u09a8\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2"
      },
      "formula": "C7H9N",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CN",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "c-Pr",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 3.4,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "CN",
        "atomicNumber": 7,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "c-Pr",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C2: -C#N carbon is attached to (N,N,N) by phantom bonds, beating methyl (H,H,H). C3: cyclopropyl (C,C,H) beats H.",
      "bn": "C2: -C#N \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09ac\u09a8\u09cd\u09a7\u09a8\u09c7 (N,N,N) \u09af\u09c1\u0995\u09cd\u09a4 \u09a7\u09b0\u09be \u09b9\u09af\u09bc \u09af\u09be \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964 C3: \u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09aa\u09cd\u09b0\u09cb\u09aa\u09be\u0987\u09b2 H-\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Cyano phantom nitrogen atoms compared against alkyl substituents.",
    "bn": "\u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09cd\u09a5\u09be\u09aa\u0995\u09c7\u09b0 \u09ac\u09bf\u09b0\u09c1\u09a6\u09cd\u09a7\u09c7 \u09b8\u09be\u09af\u09bc\u09be\u09a8\u09cb \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u09a4\u09c1\u09b2\u09a8\u09be\u0964"
  }
},
{
  "id": "ez-21",
  "category": "e-z",
  "iupacName": {
    "en": "2-Ethynylbut-2-enal",
    "bn": "\u09e8-\u0987\u09a5\u09be\u0987\u09a8\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u09be\u09b2"
  },
  "formula": "C6H6O",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Ethynylbut-2-enal",
    "structure": {
      "name": {
        "en": "(Z)-2-Ethynylbut-2-enal",
        "bn": "(Z)-\u09e8-\u0987\u09a5\u09be\u0987\u09a8\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u09be\u09b2"
      },
      "formula": "C6H6O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "C#CH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "dipoleNet": 3.1,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Ethynylbut-2-enal",
    "structure": {
      "name": {
        "en": "(E)-2-Ethynylbut-2-enal",
        "bn": "(E)-\u09e8-\u0987\u09a5\u09be\u0987\u09a8\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u09be\u09b2"
      },
      "formula": "C6H6O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "C#CH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "CHO",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "C#CH",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "-CHO carbon is bonded to (O,O,H) via phantom bonds, which beats -C#CH carbon bonded to (C,C,C).",
      "bn": "-CHO \u0995\u09be\u09b0\u09cd\u09ac\u09a8 \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09ac\u09a8\u09cd\u09a7\u09a8\u09c7 (O,O,H) \u09af\u09c1\u0995\u09cd\u09a4 \u09a7\u09b0\u09be \u09b9\u09af\u09bc, \u09af\u09be -C#CH-\u098f\u09b0 (C,C,C)-\u0995\u09c7 \u09aa\u09b0\u09be\u099c\u09bf\u09a4 \u0995\u09b0\u09c7\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Aldehyde vs Alkyne phantom atom battle: oxygen (Z=8) beats carbon (Z=6).",
    "bn": "\u0985\u09cd\u09af\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u09ac\u09a8\u09be\u09ae \u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09a8 \u09ab\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09ae \u09af\u09c1\u09a6\u09cd\u09a7: \u0985\u0995\u09cd\u09b8\u09bf\u099c\u09c7\u09a8 (\u09ee) \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u0995\u09c7 (\u09ec) \u09aa\u09b0\u09be\u099c\u09bf\u09a4 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "ez-22",
  "category": "e-z",
  "iupacName": {
    "en": "Citral (Geranial / Neral)",
    "bn": "\u09b8\u09bf\u099f\u09cd\u09b0\u09be\u09b2 (\u099c\u09c7\u09b0\u09be\u09a8\u09bf\u09af\u09bc\u09be\u09b2 / \u09a8\u09c7\u09b0\u09be\u09b2)"
  },
  "formula": "C10H16O",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-Citral (Geranial / Neral)",
    "structure": {
      "name": {
        "en": "(Z)-Citral (Geranial / Neral)",
        "bn": "(Z)-\u09b8\u09bf\u099f\u09cd\u09b0\u09be\u09b2 (\u099c\u09c7\u09b0\u09be\u09a8\u09bf\u09af\u09bc\u09be\u09b2 / \u09a8\u09c7\u09b0\u09be\u09b2)"
      },
      "formula": "C10H16O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Alkene-tail",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.9,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-Citral (Geranial / Neral)",
    "structure": {
      "name": {
        "en": "(E)-Citral (Geranial / Neral)",
        "bn": "(E)-\u09b8\u09bf\u099f\u09cd\u09b0\u09be\u09b2 (\u099c\u09c7\u09b0\u09be\u09a8\u09bf\u09af\u09bc\u09be\u09b2 / \u09a8\u09c7\u09b0\u09be\u09b2)"
      },
      "formula": "C10H16O",
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
            -1.6,
            1.1,
            0
          ],
          "label": "CHO",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "H",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Alkene-tail",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "CHO",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "H",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Alkene-tail",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Geranial is (2E)-citral (lemon aroma); Neral is (2Z)-citral (sweet lemon aroma). Tail (C,C,H) > methyl (H,H,H).",
      "bn": "\u099c\u09c7\u09b0\u09be\u09a8\u09bf\u09af\u09bc\u09be\u09b2 \u09b9\u09b2\u09cb (\u09e8E)-\u09b8\u09bf\u099f\u09cd\u09b0\u09be\u09b2 (\u09b2\u09c7\u09ac\u09c1\u09b0 \u0998\u09cd\u09b0\u09be\u09a3); \u09a8\u09c7\u09b0\u09be\u09b2 \u09b9\u09b2\u09cb (\u09e8Z)-\u09b8\u09bf\u099f\u09cd\u09b0\u09be\u09b2\u0964 \u09ac\u09a1\u09bc \u099a\u09c7\u0987\u09a8 \u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Natural fragrance chemistry: our olfactory receptors distinguish between E and Z stereoisomers!",
    "bn": "\u09aa\u09cd\u09b0\u09be\u0995\u09c3\u09a4\u09bf\u0995 \u09b8\u09c1\u0997\u09a8\u09cd\u09a7\u09bf \u09b0\u09b8\u09be\u09af\u09bc\u09a8: \u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u0998\u09cd\u09b0\u09be\u09a3\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0\u09bf\u09af\u09bc E \u098f\u09ac\u0982 Z \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7\u09b0 \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u09a7\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7!"
  }
},
{
  "id": "ez-23",
  "category": "e-z",
  "iupacName": {
    "en": "Tamoxifen (Anticancer Drug)",
    "bn": "\u099f\u09cd\u09af\u09be\u09ae\u09cb\u0995\u09cd\u09b8\u09bf\u09ab\u09c7\u09a8 (\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u0993\u09b7\u09c1\u09a7)"
  },
  "formula": "C26H29NO",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-Tamoxifen (Anticancer Drug)",
    "structure": {
      "name": {
        "en": "(Z)-Tamoxifen (Anticancer Drug)",
        "bn": "(Z)-\u099f\u09cd\u09af\u09be\u09ae\u09cb\u0995\u09cd\u09b8\u09bf\u09ab\u09c7\u09a8 (\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u0993\u09b7\u09c1\u09a7)"
      },
      "formula": "C26H29NO",
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
          "label": "4-alkoxy-Ph",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 2
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
      "dipoleNet": 3.2,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-Tamoxifen (Anticancer Drug)",
    "structure": {
      "name": {
        "en": "(E)-Tamoxifen (Anticancer Drug)",
        "bn": "(E)-\u099f\u09cd\u09af\u09be\u09ae\u09cb\u0995\u09cd\u09b8\u09bf\u09ab\u09c7\u09a8 (\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u0993\u09b7\u09c1\u09a7)"
      },
      "formula": "C26H29NO",
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
          "label": "4-alkoxy-Ph",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Ph",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "4-alkoxy-Ph",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "Ph",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Ph",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Critical drug pharmacology: Only the (Z)-isomer binds the estrogen receptor antagonists to treat breast cancer; the (E)-isomer acts as an estrogen agonist!",
      "bn": "\u099c\u09c0\u09ac\u09a8\u09b0\u0995\u09cd\u09b7\u09be\u0995\u09be\u09b0\u09c0 \u0993\u09b7\u09c1\u09a7: \u0995\u09c7\u09ac\u09b2 (Z)-\u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u098f\u09b8\u09cd\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8 \u09b0\u09bf\u09b8\u09c7\u09aa\u09cd\u099f\u09b0 \u09ac\u09cd\u09b2\u0995 \u0995\u09b0\u09c7 \u09b8\u09cd\u09a4\u09a8 \u0995\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b0\u09cb\u09a7 \u0995\u09b0\u09c7; (E)-\u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u0995\u09cd\u09b7\u09a4\u09bf\u0995\u09b0!"
    }
  },
  "pedagogicalNote": {
    "en": "Demonstrates why pharmaceutical chemistry requires 100% stereochemical E/Z purity.",
    "bn": "\u0994\u09b7\u09a7 \u09b0\u09b8\u09be\u09af\u09bc\u09a8\u09c7 \u0995\u09c7\u09a8 \u09e7\u09e6\u09e6% E/Z \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u0995\u09c7\u09ae\u09bf\u0995\u09be\u09b2 \u09ac\u09bf\u09b6\u09c1\u09a6\u09cd\u09a7\u09a4\u09be \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u099c\u09a8 \u09a4\u09be\u09b0 \u099a\u09c2\u09a1\u09bc\u09be\u09a8\u09cd\u09a4 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3\u0964"
  }
},
{
  "id": "ez-24",
  "category": "e-z",
  "iupacName": {
    "en": "2-Bromo-3-deuteriopent-2-ene",
    "bn": "\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e9-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
  },
  "formula": "C5H9BrD",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Bromo-3-deuteriopent-2-ene",
    "structure": {
      "name": {
        "en": "(Z)-2-Bromo-3-deuteriopent-2-ene",
        "bn": "(Z)-\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e9-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C5H9BrD",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "D",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Bromo-3-deuteriopent-2-ene",
    "structure": {
      "name": {
        "en": "(E)-2-Bromo-3-deuteriopent-2-ene",
        "bn": "(E)-\u09e8-\u09ac\u09cd\u09b0\u09cb\u09ae\u09cb-\u09e9-\u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u0993\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u0987\u09a8"
      },
      "formula": "C5H9BrD",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Br",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "H",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "D",
          "cipPriority": 2
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
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Br",
        "atomicNumber": 35,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "D",
        "atomicNumber": 1,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "Combines Rule 1 (Br > CH3 on C2) with Rule 2 and 3 (Ethyl beats Deuterium on C3).",
      "bn": "\u09a8\u09bf\u09af\u09bc\u09ae \u09e7 (C2-\u09a4\u09c7 Br > CH3) \u098f\u09ac\u0982 \u09a8\u09bf\u09af\u09bc\u09ae \u09e8 \u0993 \u09e9 (C3-\u09a4\u09c7 \u0987\u09a5\u09be\u0987\u09b2 \u09a1\u09bf\u0989\u099f\u09c7\u09b0\u09bf\u09af\u09bc\u09be\u09ae\u0995\u09c7 \u09b9\u09be\u09b0\u09be\u09af\u09bc)-\u098f\u09b0 \u09b8\u09ae\u09a8\u09cd\u09ac\u09af\u09bc\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Multilevel test testing both isotope and halogen rules simultaneously.",
    "bn": "\u098f\u0995\u09b8\u09be\u09a5\u09c7 \u0986\u0987\u09b8\u09cb\u099f\u09cb\u09aa \u098f\u09ac\u0982 \u09b9\u09cd\u09af\u09be\u09b2\u09cb\u099c\u09c7\u09a8 \u09a8\u09bf\u09af\u09bc\u09ae \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be\u09b0 \u0989\u09a8\u09cd\u09a8\u09a4 \u09b8\u09cd\u09a4\u09b0\u0964"
  }
},
{
  "id": "ez-25",
  "category": "e-z",
  "iupacName": {
    "en": "2-Chloro-3-ethylpent-2-enoic acid",
    "bn": "\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u0987\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C7H11ClO2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-2-Chloro-3-ethylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-2-Chloro-3-ethylpent-2-enoic acid",
        "bn": "(Z)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u0987\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C7H11ClO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
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
      "dipoleNet": 2.2,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-2-Chloro-3-ethylpent-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-2-Chloro-3-ethylpent-2-enoic acid",
        "bn": "(E)-\u09e8-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e9-\u0987\u09a5\u09be\u0987\u09b2\u09aa\u09c7\u09a8\u09cd\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C7H11ClO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "O",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "C2H5",
          "cipPriority": 1
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
      "dipoleNet": 2.2,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 1
      },
      "group2": {
        "name": "C2H5",
        "atomicNumber": 6,
        "priority": 1
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "NEGATIVE CONTROL: On C3, both groups are identical ethyl groups (-CH2CH3). This molecule CANNOT exhibit E-Z or geometrical isomerism!",
      "bn": "\u09a8\u09c7\u0997\u09c7\u099f\u09bf\u09ad \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3: C3-\u09a4\u09c7 \u0989\u09ad\u09af\u09bc \u0997\u09cd\u09b0\u09c1\u09aa\u0987 \u0985\u09ad\u09bf\u09a8\u09cd\u09a8 \u0987\u09a5\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa\u0964 \u098f\u0987 \u09af\u09cc\u0997\u099f\u09bf \u0995\u09cb\u09a8\u09cb E-Z \u09ac\u09be \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf\u0995 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7 \u09a8\u09be!"
    }
  },
  "pedagogicalNote": {
    "en": "Pedagogical negative control: Reminds students to always verify that both stereocenters have non-identical groups first!",
    "bn": "\u09a8\u09c7\u0997\u09c7\u099f\u09bf\u09ad \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3: \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0\u09a6\u09c7\u09b0 \u09ae\u09a8\u09c7 \u0995\u09b0\u09bf\u09af\u09bc\u09c7 \u09a6\u09c7\u09af\u09bc \u09af\u09c7 \u09aa\u09cd\u09b0\u09a5\u09ae\u09c7 \u0989\u09ad\u09af\u09bc \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7 \u09ad\u09bf\u09a8\u09cd\u09a8 \u0997\u09cd\u09b0\u09c1\u09aa \u09a5\u09be\u0995\u09be \u09ac\u09be\u09a7\u09cd\u09af\u09a4\u09be\u09ae\u09c2\u09b2\u0995!"
  }
},
{
  "id": "ez-26",
  "category": "e-z",
  "iupacName": {
    "en": "3-Chloro-2-methylbut-2-enoic acid",
    "bn": "\u09e9-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
  },
  "formula": "C5H7ClO2",
  "systemType": "alkene",
  "isomerA": {
    "label": "Z (Zusammen)",
    "descriptor": "(Z)-3-Chloro-2-methylbut-2-enoic acid",
    "structure": {
      "name": {
        "en": "(Z)-3-Chloro-2-methylbut-2-enoic acid",
        "bn": "(Z)-\u09e9-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H7ClO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.7,
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "E (Entgegen)",
    "descriptor": "(E)-3-Chloro-2-methylbut-2-enoic acid",
    "structure": {
      "name": {
        "en": "(E)-3-Chloro-2-methylbut-2-enoic acid",
        "bn": "(E)-\u09e9-\u0995\u09cd\u09b2\u09cb\u09b0\u09cb-\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09ac\u09bf\u0989\u099f-\u09e8-\u098f\u09a8\u0993\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1"
      },
      "formula": "C5H7ClO2",
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
            -1.6,
            1.1,
            0
          ],
          "label": "COOH",
          "cipPriority": 1
        },
        {
          "id": "g2",
          "element": "C",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
        },
        {
          "id": "g3",
          "element": "Cl",
          "position": [
            1.6,
            -1.1,
            0
          ],
          "label": "Cl",
          "cipPriority": 1
        },
        {
          "id": "g4",
          "element": "C",
          "position": [
            1.6,
            1.1,
            0
          ],
          "label": "CH3",
          "cipPriority": 2
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
      "dipoleNet": 2.0,
      "stabilityRank": "equal"
    }
  },
  "cipDerivation": {
    "carbon1": {
      "group1": {
        "name": "COOH",
        "atomicNumber": 8,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 4"
    },
    "carbon2": {
      "group1": {
        "name": "Cl",
        "atomicNumber": 17,
        "priority": 1
      },
      "group2": {
        "name": "CH3",
        "atomicNumber": 6,
        "priority": 2
      },
      "ruleApplied": "Rule 1 & 3"
    },
    "explanation": {
      "en": "C2: -COOH (O,O,O) > -CH3 (H,H,H). C3: -Cl (17) > -CH3 (6). (Z) has -COOH and -Cl on same side.",
      "bn": "C2: -COOH (O,O,O) > -CH3 (H,H,H)\u0964 C3: -Cl (\u09e7\u09ed) > -CH3 (\u09ec)\u0964 (Z)-\u098f -COOH \u0993 -Cl \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7 \u09a5\u09be\u0995\u09c7\u0964"
    }
  },
  "pedagogicalNote": {
    "en": "Halo-alkenoic acid illustrating unambiguous CIP priority assignment.",
    "bn": "\u09b9\u09cd\u09af\u09be\u09b2\u09cb-\u0985\u09cd\u09af\u09be\u09b2\u0995\u09c7\u09a8\u09af\u09bc\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u09a1 \u09af\u09be \u09b8\u09c1\u09b8\u09cd\u09aa\u09b7\u09cd\u099f \u09b8\u09bf\u0986\u0987\u09aa\u09bf \u0985\u0997\u09cd\u09b0\u09be\u09a7\u09bf\u0995\u09be\u09b0 \u09a4\u09c1\u09b2\u09c7 \u09a7\u09b0\u09c7\u0964"
  }
},
];
