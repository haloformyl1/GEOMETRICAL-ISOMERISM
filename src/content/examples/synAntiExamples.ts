import type { IsomerPair } from '../../types/isomerism';

export const SYN_ANTI_EXAMPLES: IsomerPair[] = [
{
  "id": "sa-01",
  "category": "syn-anti",
  "iupacName": {
    "en": "Benzaldehyde oxime (Benzaldoxime)",
    "bn": "\u09ac\u09c7\u09a8\u099c\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae (\u09ac\u09c7\u09a8\u099c\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae)"
  },
  "formula": "C7H7NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Benzaldehyde oxime (Benzaldoxime)",
    "structure": {
      "name": {
        "en": "Syn-benzaldoxime (H and OH on same side)",
        "bn": "Syn-benzaldoxime (H and OH on same side)"
      },
      "formula": "C7H7NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.6,
      "meltingPoint": "35.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Benzaldehyde oxime (Benzaldoxime)",
    "structure": {
      "name": {
        "en": "Anti-benzaldoxime (H and OH on opposite sides)",
        "bn": "Anti-benzaldoxime (H and OH on opposite sides)"
      },
      "formula": "C7H7NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.05,
      "meltingPoint": "130.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "The prototype aldoxime: Syn isomer has H and OH on the same side; Anti has H and OH on opposite sides. Upon dehydration with Ac2O, anti readily yields benzonitrile.",
    "bn": "\u0986\u09a6\u09b0\u09cd\u09b6 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae: \u09b8\u09bf\u09a8\u09c7\u09b0 \u0995\u09cd\u09b7\u09c7\u09a4\u09cd\u09b0\u09c7 H \u0993 OH \u098f\u0995\u0987 \u09a6\u09bf\u0995\u09c7; \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf\u09a4\u09c7 \u09ac\u09bf\u09aa\u09b0\u09c0\u09a4 \u09a6\u09bf\u0995\u09c7\u0964 \u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09a8\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u0987\u09a1 \u09a6\u09cd\u09ac\u09be\u09b0\u09be \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u09b8\u09b9\u099c\u09c7 \u09ac\u09c7\u09a8\u099c\u09cb\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-02",
  "category": "syn-anti",
  "iupacName": {
    "en": "Acetaldehyde oxime (Acetaldoxime)",
    "bn": "\u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae (\u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae)"
  },
  "formula": "C2H5NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Acetaldehyde oxime (Acetaldoxime)",
    "structure": {
      "name": {
        "en": "Syn-acetaldoxime",
        "bn": "Syn-acetaldoxime"
      },
      "formula": "C2H5NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.5,
      "meltingPoint": "47.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Acetaldehyde oxime (Acetaldoxime)",
    "structure": {
      "name": {
        "en": "Anti-acetaldoxime",
        "bn": "Anti-acetaldoxime"
      },
      "formula": "C2H5NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.9,
      "meltingPoint": "12.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Simplest aliphatic aldoxime displaying syn-anti isomerism. Interconverts via trace acid.",
    "bn": "\u09b8\u09b9\u099c\u09a4\u09ae \u0985\u09cd\u09af\u09be\u09b2\u09bf\u09ab\u09cd\u09af\u09be\u099f\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae \u09af\u09be \u09b8\u09bf\u09a8-\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-03",
  "category": "syn-anti",
  "iupacName": {
    "en": "Propionaldehyde oxime",
    "bn": "\u09aa\u09cd\u09b0\u09cb\u09aa\u09bf\u0993\u09a8\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C3H7NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Propionaldehyde oxime",
    "structure": {
      "name": {
        "en": "Syn-propionaldoxime",
        "bn": "Syn-propionaldoxime"
      },
      "formula": "C3H7NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
            -1.6,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.55,
      "meltingPoint": "40.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Propionaldehyde oxime",
    "structure": {
      "name": {
        "en": "Anti-propionaldoxime",
        "bn": "Anti-propionaldoxime"
      },
      "formula": "C3H7NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
            -1.6,
            -1.1,
            0
          ],
          "label": "H"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.95,
      "meltingPoint": "-10.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Shows strong difference in physical states at room temp between syn and anti isomers.",
    "bn": "\u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a4\u09be\u09aa\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09af\u09bc \u09b8\u09bf\u09a8 \u098f\u09ac\u0982 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09c7\u09b0 \u09ad\u09cc\u09a4 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09b0 \u09b8\u09cd\u09aa\u09b7\u09cd\u099f \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-04",
  "category": "syn-anti",
  "iupacName": {
    "en": "Acetophenone oxime",
    "bn": "\u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09cb\u09ab\u09c7\u09a8\u09a8 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C8H9NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Acetophenone oxime",
    "structure": {
      "name": {
        "en": "Syn-methyl (Anti-phenyl) isomer",
        "bn": "Syn-methyl (Anti-phenyl) isomer"
      },
      "formula": "C8H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.7,
      "meltingPoint": "60.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Acetophenone oxime",
    "structure": {
      "name": {
        "en": "Anti-methyl (Syn-phenyl) isomer",
        "bn": "Anti-methyl (Syn-phenyl) isomer"
      },
      "formula": "C8H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.3,
      "meltingPoint": "88.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Unsymmetric ketoxime: Named relative to the specified group (e.g., syn-methyl phenyl ketoxime). In Beckmann rearrangement, the group ANTI to OH migrates!",
    "bn": "\u0985\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u0995\u09bf\u099f\u0995\u09cd\u09b8\u09be\u0987\u09ae: \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6\u09bf\u09a4 \u0997\u09cd\u09b0\u09c1\u09aa\u09c7\u09b0 \u09b8\u09be\u09aa\u09c7\u0995\u09cd\u09b7\u09c7 \u09a8\u09be\u09ae\u0995\u09b0\u09a3 \u09b9\u09af\u09bc\u0964 \u09ac\u09c7\u0995\u09ae\u09cd\u09af\u09be\u09a8 \u09b0\u09c2\u09aa\u09be\u09a8\u09cd\u09a4\u09b0\u09c7 OH-\u098f\u09b0 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u0997\u09cd\u09b0\u09c1\u09aa \u09b8\u09cd\u09a5\u09be\u09a8\u09be\u09a8\u09cd\u09a4\u09b0\u09bf\u09a4 \u09b9\u09af\u09bc!"
  }
},
{
  "id": "sa-05",
  "category": "syn-anti",
  "iupacName": {
    "en": "4-Nitrobenzophenone oxime",
    "bn": "\u09ea-\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u09ac\u09c7\u09a8\u099c\u09cb\u09ab\u09c7\u09a8\u09a8 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C13H10N2O3",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-4-Nitrobenzophenone oxime",
    "structure": {
      "name": {
        "en": "Syn-(4-nitrophenyl) phenyl ketoxime",
        "bn": "Syn-(4-nitrophenyl) phenyl ketoxime"
      },
      "formula": "C13H10N2O3",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "4-NO2-Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 4.5,
      "meltingPoint": "158.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-4-Nitrobenzophenone oxime",
    "structure": {
      "name": {
        "en": "Anti-(4-nitrophenyl) phenyl ketoxime",
        "bn": "Anti-(4-nitrophenyl) phenyl ketoxime"
      },
      "formula": "C13H10N2O3",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "4-NO2-Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 3.8,
      "meltingPoint": "165.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Substituted diaryl ketoxime illustrating stereospecific Beckmann rearrangement with different migrating aptitudes.",
    "bn": "\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09cd\u09a5\u09be\u09aa\u09bf\u09a4 \u09a1\u09be\u0987\u0985\u09cd\u09af\u09be\u09b0\u09be\u0987\u09b2 \u0995\u09bf\u099f\u0995\u09cd\u09b8\u09be\u0987\u09ae \u09af\u09be \u09a8\u09bf\u09b0\u09cd\u09a6\u09bf\u09b7\u09cd\u099f \u09ac\u09c7\u0995\u09ae\u09cd\u09af\u09be\u09a8 \u09b0\u09c2\u09aa\u09be\u09a8\u09cd\u09a4\u09b0 \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-06",
  "category": "syn-anti",
  "iupacName": {
    "en": "Cinnamaldehyde oxime",
    "bn": "\u09b8\u09bf\u09a8\u09be\u09ae\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C9H9NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Cinnamaldehyde oxime",
    "structure": {
      "name": {
        "en": "Syn-cinnamaldoxime",
        "bn": "Syn-cinnamaldoxime"
      },
      "formula": "C9H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "PhCH=CH"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.2,
      "meltingPoint": "74.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Cinnamaldehyde oxime",
    "structure": {
      "name": {
        "en": "Anti-cinnamaldoxime",
        "bn": "Anti-cinnamaldoxime"
      },
      "formula": "C9H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "PhCH=CH"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.6,
      "meltingPoint": "138.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Conjugated oxime containing both a trans alkene and an oxime with syn/anti configurations.",
    "bn": "\u0995\u09a8\u099c\u09c1\u0997\u09c7\u099f\u09c7\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae \u09af\u09be\u09a4\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8 \u098f\u09ac\u0982 \u09b8\u09bf\u09a8/\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u0989\u09ad\u09af\u09bc \u0995\u09a8\u09ab\u09bf\u0997\u09be\u09b0\u09c7\u09b6\u09a8 \u09ac\u09bf\u09a6\u09cd\u09af\u09ae\u09be\u09a8\u0964"
  }
},
{
  "id": "sa-07",
  "category": "syn-anti",
  "iupacName": {
    "en": "Furfural oxime",
    "bn": "\u09ab\u09be\u09b0\u09ab\u09bf\u0989\u09b0\u09be\u09b2 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C5H5NO2",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Furfural oxime",
    "structure": {
      "name": {
        "en": "alpha-furfuraldoxime (syn)",
        "bn": "alpha-furfuraldoxime (syn)"
      },
      "formula": "C5H5NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Furyl"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.4,
      "meltingPoint": "75.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Furfural oxime",
    "structure": {
      "name": {
        "en": "beta-furfuraldoxime (anti)",
        "bn": "beta-furfuraldoxime (anti)"
      },
      "formula": "C5H5NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Furyl"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.8,
      "meltingPoint": "90.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Heterocyclic aldoxime; both isomers are isolable and have different complexation constants with metals.",
    "bn": "\u09b9\u09c7\u099f\u09be\u09b0\u09cb\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae; \u09a7\u09be\u09a4\u09ac \u0986\u09af\u09bc\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u099c\u099f\u09bf\u09b2 \u09af\u09cc\u0997 \u0997\u09a0\u09a8\u09c7\u09b0 \u0995\u09cd\u09b7\u09ae\u09a4\u09be \u09ad\u09bf\u09a8\u09cd\u09a8\u0964"
  }
},
{
  "id": "sa-08",
  "category": "syn-anti",
  "iupacName": {
    "en": "Camphor oxime",
    "bn": "\u0995\u09b0\u09cd\u09aa\u09c2\u09b0 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae (\u0995\u09cd\u09af\u09be\u09ae\u09cd\u09ab\u09b0 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae)"
  },
  "formula": "C10H17NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Camphor oxime",
    "structure": {
      "name": {
        "en": "Syn-camphor oxime",
        "bn": "Syn-camphor oxime"
      },
      "formula": "C10H17NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Bicyclic"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.4,
      "meltingPoint": "119.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Camphor oxime",
    "structure": {
      "name": {
        "en": "Anti-camphor oxime",
        "bn": "Anti-camphor oxime"
      },
      "formula": "C10H17NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Bicyclic"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.4,
      "meltingPoint": "118.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Chiral terpenoid oxime with rigid bicyclic backbone.",
    "bn": "\u09a6\u09c3\u09a2\u09bc \u09ac\u09be\u0987\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09bf\u0995 \u0995\u09be\u09a0\u09be\u09ae\u09cb\u09af\u09c1\u0995\u09cd\u09a4 \u0995\u09be\u0987\u09b0\u09be\u09b2 \u099f\u09be\u09b0\u09aa\u09bf\u09a8\u09af\u09bc\u09c7\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae\u0964"
  }
},
{
  "id": "sa-09",
  "category": "syn-anti",
  "iupacName": {
    "en": "2-Methylcyclohexanone oxime",
    "bn": "\u09e8-\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb\u09b9\u09c7\u0995\u09cd\u09b8\u09be\u09a8\u09cb\u09a8 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C7H13NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-2-Methylcyclohexanone oxime",
    "structure": {
      "name": {
        "en": "Syn to 2-methyl group",
        "bn": "Syn to 2-methyl group"
      },
      "formula": "C7H13NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "C(Me)CH2"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.5,
      "meltingPoint": "44.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-2-Methylcyclohexanone oxime",
    "structure": {
      "name": {
        "en": "Anti to 2-methyl group",
        "bn": "Anti to 2-methyl group"
      },
      "formula": "C7H13NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "C(Me)CH2"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH2"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.3,
      "meltingPoint": "70.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Asymmetric cyclic ketoxime: Yields two isomeric lactams upon Beckmann rearrangement depending on configuration.",
    "bn": "\u0985\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u099a\u0995\u09cd\u09b0\u09c0\u09af\u09bc \u0995\u09bf\u099f\u0995\u09cd\u09b8\u09be\u0987\u09ae: \u09ac\u09c7\u0995\u09ae\u09cd\u09af\u09be\u09a8 \u09b0\u09c2\u09aa\u09be\u09a8\u09cd\u09a4\u09b0\u09c7 \u09a6\u09c1\u099f\u09bf \u09ad\u09bf\u09a8\u09cd\u09a8 \u09b2\u09cd\u09af\u09be\u0995\u099f\u09be\u09ae \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-10",
  "category": "syn-anti",
  "iupacName": {
    "en": "Azobenzene",
    "bn": "\u0985\u09cd\u09af\u09be\u099c\u09cb\u09ac\u09c7\u09a8\u099c\u09bf\u09a8"
  },
  "formula": "C12H10N2",
  "systemType": "azo",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Azobenzene",
    "structure": {
      "name": {
        "en": "Cis / Syn-azobenzene (bent, polar, \u03bc = 3.0 D)",
        "bn": "Cis / Syn-azobenzene (bent, polar, \u03bc = 3.0 D)"
      },
      "formula": "C12H10N2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 3.0,
      "meltingPoint": "71.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Azobenzene",
    "structure": {
      "name": {
        "en": "Trans / Anti-azobenzene (planar, non-polar, \u03bc = 0 D)",
        "bn": "Trans / Anti-azobenzene (planar, non-polar, \u03bc = 0 D)"
      },
      "formula": "C12H10N2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "meltingPoint": "68.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Masterpiece of molecular photonics: Trans (anti) isomer absorbs UV light (365 nm) and converts cleanly into Cis (syn) isomer; blue light or heat reverts it!",
    "bn": "\u0986\u09a3\u09ac\u09bf\u0995 \u09ab\u099f\u09cb\u09a8\u09bf\u0995\u09cd\u09b8\u09c7\u09b0 \u09ac\u09bf\u09b8\u09cd\u09ae\u09af\u09bc: \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8 (\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf) \u09b0\u09c2\u09aa UV \u0986\u09b2\u09cb\u09a4\u09c7 (\u09e9\u09ec\u09eb \u09a8\u09cd\u09af\u09be\u09a8\u09cb\u09ae\u09bf\u099f\u09be\u09b0) \u09b8\u09bf\u09b8 (\u09b8\u09bf\u09a8) \u09b0\u09c2\u09aa\u09c7 \u09aa\u09b0\u09bf\u09a3\u09a4 \u09b9\u09af\u09bc \u098f\u09ac\u0982 \u09a6\u09c3\u09b6\u09cd\u09af\u09ae\u09be\u09a8 \u0986\u09b2\u09cb\u09a4\u09c7 \u0986\u09ac\u09be\u09b0 \u09ab\u09bf\u09b0\u09c7 \u0986\u09b8\u09c7!"
  }
},
{
  "id": "sa-11",
  "category": "syn-anti",
  "iupacName": {
    "en": "4-Dimethylaminoazobenzene (Methyl Yellow)",
    "bn": "\u09ea-\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0985\u09cd\u09af\u09be\u09ae\u09bf\u09a8\u09cb\u0985\u09cd\u09af\u09be\u099c\u09cb\u09ac\u09c7\u09a8\u099c\u09bf\u09a8 (\u09ae\u09bf\u09a5\u09be\u0987\u09b2 \u0987\u09af\u09bc\u09c7\u09b2\u09cb)"
  },
  "formula": "C14H15N3",
  "systemType": "azo",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-4-Dimethylaminoazobenzene (Methyl Yellow)",
    "structure": {
      "name": {
        "en": "Syn-methyl yellow",
        "bn": "Syn-methyl yellow"
      },
      "formula": "C14H15N3",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "4-NMe2-Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "4-NMe2-Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 4.1,
      "meltingPoint": "110.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-4-Dimethylaminoazobenzene (Methyl Yellow)",
    "structure": {
      "name": {
        "en": "Anti-methyl yellow",
        "bn": "Anti-methyl yellow"
      },
      "formula": "C14H15N3",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "4-NMe2-Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "4-NMe2-Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.8,
      "meltingPoint": "117.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Famous azo dye and pH indicator showing ultrafast syn-anti photoisomerization.",
    "bn": "\u09ac\u09bf\u0996\u09cd\u09af\u09be\u09a4 \u0985\u09cd\u09af\u09be\u099c\u09cb \u09b0\u099e\u09cd\u099c\u0995 \u0993 \u09aa\u09bf\u098f\u0987\u099a \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6\u0995 \u09af\u09be \u09a6\u09cd\u09b0\u09c1\u09a4 \u09b8\u09bf\u09a8-\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u09ab\u099f\u09cb\u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09a6\u09c7\u0996\u09be\u09af\u09bc\u0964"
  }
},
{
  "id": "sa-12",
  "category": "syn-anti",
  "iupacName": {
    "en": "Diazene (Diimide, HN=NH)",
    "bn": "\u09a1\u09be\u09af\u09bc\u09be\u099c\u09bf\u09a8 (\u09a1\u09be\u0987\u0987\u09ae\u09be\u0987\u09a1)"
  },
  "formula": "N2H2",
  "systemType": "azo",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Diazene (Diimide, HN=NH)",
    "structure": {
      "name": {
        "en": "Syn-diazene (carries out stereospecific syn-hydrogenation)",
        "bn": "Syn-diazene (carries out stereospecific syn-hydrogenation)"
      },
      "formula": "N2H2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "H",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "H"
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
          "id": "oh",
          "element": "C",
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
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.6,
      "meltingPoint": "N/A",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Diazene (Diimide, HN=NH)",
    "structure": {
      "name": {
        "en": "Anti-diazene (ground state, unreactive towards alkenes)",
        "bn": "Anti-diazene (ground state, unreactive towards alkenes)"
      },
      "formula": "N2H2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "H",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "H"
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
          "id": "oh",
          "element": "C",
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
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "meltingPoint": "N/A",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Only the Syn isomer of diazene can deliver two hydrogens in a 6-electron concerted cyclic transition state to hydrogenate alkenes!",
    "bn": "\u0995\u09c7\u09ac\u09b2\u09ae\u09be\u09a4\u09cd\u09b0 \u09b8\u09bf\u09a8-\u09a1\u09be\u09af\u09bc\u09be\u099c\u09bf\u09a8 \u099a\u0995\u09cd\u09b0\u09c0\u09af\u09bc \u099f\u09cd\u09b0\u09be\u09a8\u099c\u09bf\u09b6\u09a8 \u09b8\u09cd\u099f\u09c7\u099f\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09bf\u09a8\u09c7 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u09a8\u09bf\u09b0\u09cd\u09a6\u09bf\u09b7\u09cd\u099f \u09b8\u09bf\u09a8-\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b6\u09a8 \u0998\u099f\u09be\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7!"
  }
},
{
  "id": "sa-13",
  "category": "syn-anti",
  "iupacName": {
    "en": "Azomethane",
    "bn": "\u0985\u09cd\u09af\u09be\u099c\u09cb\u09ae\u09bf\u09a5\u09c7\u09a8"
  },
  "formula": "C2H6N2",
  "systemType": "azo",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Azomethane",
    "structure": {
      "name": {
        "en": "Syn-azomethane (unstable, rapidly releases N2 gas)",
        "bn": "Syn-azomethane (unstable, rapidly releases N2 gas)"
      },
      "formula": "C2H6N2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "CH3"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.2,
      "meltingPoint": "N/A",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Azomethane",
    "structure": {
      "name": {
        "en": "Anti-azomethane (stable gas, bp 1.5\u00b0C)",
        "bn": "Anti-azomethane (stable gas, bp 1.5\u00b0C)"
      },
      "formula": "C2H6N2",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "CH3"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "meltingPoint": "-78.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Anti-azomethane is a stable gas; photolysis generates the syn isomer which rapidly extrudes N2 to form ethane.",
    "bn": "\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0985\u09cd\u09af\u09be\u099c\u09cb\u09ae\u09bf\u09a5\u09c7\u09a8 \u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2 \u0997\u09cd\u09af\u09be\u09b8; \u0986\u09b2\u09cb\u0995 \u09ac\u09bf\u09df\u09cb\u099c\u09a8\u09c7 \u09b8\u09bf\u09a8 \u09a4\u09c8\u09b0\u09bf \u09b9\u09af\u09bc \u09af\u09be \u09a6\u09cd\u09b0\u09c1\u09a4 N2 \u0997\u09cd\u09af\u09be\u09b8 \u09ae\u09c1\u0995\u09cd\u09a4 \u0995\u09b0\u09c7 \u0987\u09a5\u09c7\u09a8 \u0997\u09a0\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-14",
  "category": "syn-anti",
  "iupacName": {
    "en": "Azoxybenzene (1,2-Diphenyldiazene oxide)",
    "bn": "\u0985\u09cd\u09af\u09be\u099c\u09cb\u0995\u09cd\u09b8\u09bf\u09ac\u09c7\u099e\u09cd\u099c\u09bf\u09a8"
  },
  "formula": "C12H10N2O",
  "systemType": "azo",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Azoxybenzene (1,2-Diphenyldiazene oxide)",
    "structure": {
      "name": {
        "en": "Syn-azoxybenzene",
        "bn": "Syn-azoxybenzene"
      },
      "formula": "C12H10N2O",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 4.7,
      "meltingPoint": "84.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Azoxybenzene (1,2-Diphenyldiazene oxide)",
    "structure": {
      "name": {
        "en": "Anti-azoxybenzene (standard trans form)",
        "bn": "Anti-azoxybenzene (standard trans form)"
      },
      "formula": "C12H10N2O",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Ph"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.7,
      "meltingPoint": "36.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Contains an N-oxide coordinate bond attached to one of the azo nitrogens.",
    "bn": "\u098f\u0995\u099f\u09bf \u0985\u09cd\u09af\u09be\u099c\u09cb \u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09b8\u09a8\u09cd\u09a8\u09bf\u09ac\u09c7\u09b6\u09bf\u09a4 N-\u0985\u0995\u09cd\u09b8\u09be\u0987\u09a1 \u09ac\u09a8\u09cd\u09a7\u09a8\u09af\u09c1\u0995\u09cd\u09a4 \u09a5\u09be\u0995\u09c7\u0964"
  }
},
{
  "id": "sa-15",
  "category": "syn-anti",
  "iupacName": {
    "en": "Benzil monoxime",
    "bn": "\u09ac\u09c7\u09a8\u099c\u09bf\u09b2 \u09ae\u09a8\u09cb\u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C14H11NO2",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Benzil monoxime",
    "structure": {
      "name": {
        "en": "beta-isomer (syn-benzoyl)",
        "bn": "beta-isomer (syn-benzoyl)"
      },
      "formula": "C14H11NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "PhCO"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 3.4,
      "meltingPoint": "114.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Benzil monoxime",
    "structure": {
      "name": {
        "en": "alpha-isomer (anti-benzoyl)",
        "bn": "alpha-isomer (anti-benzoyl)"
      },
      "formula": "C14H11NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "PhCO"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.8,
      "meltingPoint": "138.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Famous historic pair used by Werner to establish the stereochemistry of trivalent nitrogen.",
    "bn": "\u0986\u09b2\u09ab\u09cd\u09b0\u09c7\u09a1 \u0993\u09af\u09bc\u09be\u09b0\u09cd\u09a8\u09be\u09b0 \u09a4\u09cd\u09b0\u09bf\u09af\u09bc\u09cb\u099c\u09c0 \u09a8\u09be\u0987\u099f\u09cd\u09b0\u09cb\u099c\u09c7\u09a8\u09c7\u09b0 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u09b0\u09b8\u09be\u09af\u09bc\u09a8 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b7\u09cd\u09a0\u09be\u09b0 \u099c\u09a8\u09cd\u09af \u098f\u0987 \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995 \u099c\u09cb\u09a1\u09bc \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09c7\u099b\u09bf\u09b2\u09c7\u09a8\u0964"
  }
},
{
  "id": "sa-16",
  "category": "syn-anti",
  "iupacName": {
    "en": "Dimethylglyoxime (DMG)",
    "bn": "\u09a1\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2\u0997\u09cd\u09b2\u09be\u0987\u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae (DMG)"
  },
  "formula": "C4H8N2O2",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Dimethylglyoxime (DMG)",
    "structure": {
      "name": {
        "en": "Syn-DMG (cannot coordinate square-planarly)",
        "bn": "Syn-DMG (cannot coordinate square-planarly)"
      },
      "formula": "C4H8N2O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "C(=NOH)Me"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.8,
      "meltingPoint": "N/A",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Dimethylglyoxime (DMG)",
    "structure": {
      "name": {
        "en": "Anti-DMG (forms bright red square planar Ni(DMG)2 complex)",
        "bn": "Anti-DMG (forms bright red square planar Ni(DMG)2 complex)"
      },
      "formula": "C4H8N2O2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "C(=NOH)Me"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "meltingPoint": "240.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Iconic analytical reagent: Only the ANTI isomer of DMG forms the brilliant scarlet-red planar precipitate with Ni2+ ions in ammoniacal solution!",
    "bn": "\u09ac\u09bf\u09b6\u09cd\u09b2\u09c7\u09b7\u09a3\u09c0 \u09b0\u09b8\u09be\u09af\u09bc\u09a8\u09c7\u09b0 \u0986\u0987\u0995\u09a8: \u0995\u09c7\u09ac\u09b2 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-DMG \u09a8\u09bf\u0995\u09c7\u09b2 (Ni2+) \u0986\u09af\u09bc\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u0989\u099c\u09cd\u099c\u09cd\u09ac\u09b2 \u09b2\u09be\u09b2 \u09ac\u09b0\u09cd\u09a3\u09c7\u09b0 \u0985\u09a7\u0983\u0995\u09cd\u09b7\u09c7\u09aa \u09a6\u09c7\u09af\u09bc!"
  }
},
{
  "id": "sa-17",
  "category": "syn-anti",
  "iupacName": {
    "en": "Benzaldoxime acetate",
    "bn": "\u09ac\u09c7\u09a8\u099c\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae \u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09c7\u099f"
  },
  "formula": "C9H9NO2",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Benzaldoxime acetate",
    "structure": {
      "name": {
        "en": "Syn-acetate",
        "bn": "Syn-acetate"
      },
      "formula": "C9H9NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.6,
      "meltingPoint": "56.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Benzaldoxime acetate",
    "structure": {
      "name": {
        "en": "Anti-acetate (rapidly eliminates to Ph-CN)",
        "bn": "Anti-acetate (rapidly eliminates to Ph-CN)"
      },
      "formula": "C9H9NO2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.9,
      "meltingPoint": "15.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Anti-acetate undergoes instantaneous base-promoted anti-elimination to benzonitrile.",
    "bn": "\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf-\u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09c7\u099f \u0995\u09cd\u09b7\u09be\u09b0\u09c7\u09b0 \u0989\u09aa\u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09a4\u09c7 \u0985\u09a4\u09bf \u09a6\u09cd\u09b0\u09c1\u09a4 \u098f\u09b2\u09bf\u09ae\u09bf\u09a8\u09c7\u09b6\u09a8\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09ac\u09c7\u09a8\u099c\u09cb\u09a8\u09be\u0987\u099f\u09cd\u09b0\u09be\u0987\u09b2 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-18",
  "category": "syn-anti",
  "iupacName": {
    "en": "Benzaldehyde phenylhydrazone",
    "bn": "\u09ac\u09c7\u09a8\u099c\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u09ab\u09bf\u09a8\u09be\u0987\u09b2\u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u099c\u09cb\u09a8"
  },
  "formula": "C13H12N2",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Benzaldehyde phenylhydrazone",
    "structure": {
      "name": {
        "en": "Syn-phenylhydrazone",
        "bn": "Syn-phenylhydrazone"
      },
      "formula": "C13H12N2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.3,
      "meltingPoint": "158.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Benzaldehyde phenylhydrazone",
    "structure": {
      "name": {
        "en": "Anti-phenylhydrazone",
        "bn": "Anti-phenylhydrazone"
      },
      "formula": "C13H12N2",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.8,
      "meltingPoint": "136.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "C=N-NHR hydrazone system exhibiting syn and anti stereoisomers.",
    "bn": "C=N-NHR \u09b9\u09be\u0987\u09a1\u09cd\u09b0\u09be\u099c\u09cb\u09a8 \u09af\u09be \u09b8\u09bf\u09a8 \u0993 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-19",
  "category": "syn-anti",
  "iupacName": {
    "en": "Butan-2-one 2,4-DNP",
    "bn": "\u09ac\u09bf\u0989\u099f\u09be\u09a8-\u09e8-\u0993\u09a8 \u09e8,\u09ea-\u09a1\u09bf\u098f\u09a8\u09aa\u09bf"
  },
  "formula": "C10H12N4O4",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Butan-2-one 2,4-DNP",
    "structure": {
      "name": {
        "en": "Syn-methyl isomer",
        "bn": "Syn-methyl isomer"
      },
      "formula": "C10H12N4O4",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 4.2,
      "meltingPoint": "115.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Butan-2-one 2,4-DNP",
    "structure": {
      "name": {
        "en": "Anti-methyl isomer",
        "bn": "Anti-methyl isomer"
      },
      "formula": "C10H12N4O4",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 3.8,
      "meltingPoint": "117.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Brady's test derivative for unsymmetrical ketone yielding two chromatographically separable geometrical isomers.",
    "bn": "\u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a1\u09bf\u09b0 \u09ac\u09bf\u0995\u09be\u09b0\u0995 \u09a6\u09cd\u09ac\u09be\u09b0\u09be \u0985\u09aa\u09cd\u09b0\u09a4\u09bf\u09b8\u09ae \u0995\u09bf\u099f\u09cb\u09a8\u09c7\u09b0 \u09a1\u09c7\u09b0\u09bf\u09ad\u09c7\u099f\u09bf\u09ad \u09af\u09be \u09a6\u09c1\u099f\u09bf \u09aa\u09c3\u09a5\u0995\u09af\u09cb\u0997\u09cd\u09af \u099c\u09cd\u09af\u09be\u09ae\u09bf\u09a4\u09bf\u0995 \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09a6\u09c7\u09af\u09bc\u0964"
  }
},
{
  "id": "sa-20",
  "category": "syn-anti",
  "iupacName": {
    "en": "Decalin (Bicyclo[4.4.0]decane)",
    "bn": "\u09a1\u09c7\u0995\u09cd\u09af\u09be\u09b2\u09bf\u09a8 (\u09ac\u09be\u0987\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb[\u09ea.\u09ea.\u09e6]\u09a1\u09c7\u0995\u09c7\u09a8)"
  },
  "formula": "C10H18",
  "systemType": "complex",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Decalin (Bicyclo[4.4.0]decane)",
    "structure": {
      "name": {
        "en": "Cis-decalin (flexible, ring-flips rapidly, bp 195\u00b0C)",
        "bn": "Cis-decalin (flexible, ring-flips rapidly, bp 195\u00b0C)"
      },
      "formula": "C10H18",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Fused"
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
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Fused"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.2,
      "meltingPoint": "-43.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Decalin (Bicyclo[4.4.0]decane)",
    "structure": {
      "name": {
        "en": "Trans-decalin (rigid, conformationally locked, bp 187\u00b0C)",
        "bn": "Trans-decalin (rigid, conformationally locked, bp 187\u00b0C)"
      },
      "formula": "C10H18",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Fused"
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
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Fused"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.0,
      "meltingPoint": "-30.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Ring junction stereochemistry: Trans-decalin is rigidly locked with diequatorial ring fusion and CANNOT ring-flip; cis-decalin is flexible and rapidly inverts!",
    "bn": "\u09ac\u09b2\u09af\u09bc \u09b8\u0982\u09b2\u0997\u09cd\u09a8 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u09b0\u09b8\u09be\u09af\u09bc\u09a8: \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8-\u09a1\u09c7\u0995\u09cd\u09af\u09be\u09b2\u09bf\u09a8 \u09aa\u09c1\u09b0\u09cb\u09aa\u09c1\u09b0\u09bf \u09b2\u0995\u09a1 \u098f\u09ac\u0982 \u09b0\u09bf\u0982-\u09ab\u09cd\u09b2\u09bf\u09aa \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7 \u09a8\u09be; \u09b8\u09bf\u09b8-\u09a1\u09c7\u0995\u09cd\u09af\u09be\u09b2\u09bf\u09a8 \u09a8\u09ae\u09a8\u09c0\u09af\u09bc \u098f\u09ac\u0982 \u09a6\u09cd\u09b0\u09c1\u09a4 \u0989\u09b2\u09cd\u099f\u09c7 \u09af\u09be\u09af\u09bc!"
  }
},
{
  "id": "sa-21",
  "category": "syn-anti",
  "iupacName": {
    "en": "Bicyclo[2.2.1]hept-5-en-2-ol",
    "bn": "\u09ac\u09be\u0987\u09b8\u09be\u0987\u0995\u09cd\u09b2\u09cb[\u09e8.\u09e8.\u09e7]\u09b9\u09c7\u09aa\u09cd\u099f-\u09eb-\u0987\u09a8-\u09e8-\u0985\u09b2"
  },
  "formula": "C7H10O",
  "systemType": "complex",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Bicyclo[2.2.1]hept-5-en-2-ol",
    "structure": {
      "name": {
        "en": "Exo-isomer (syn to methylene bridge)",
        "bn": "Exo-isomer (syn to methylene bridge)"
      },
      "formula": "C7H10O",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Bridged"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "OH"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Bridged"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.7,
      "meltingPoint": "152.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Bicyclo[2.2.1]hept-5-en-2-ol",
    "structure": {
      "name": {
        "en": "Endo-isomer (anti to methylene bridge)",
        "bn": "Endo-isomer (anti to methylene bridge)"
      },
      "formula": "C7H10O",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Bridged"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "OH"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Bridged"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.8,
      "meltingPoint": "149.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Bridged norbornyl system exhibiting exo (syn) and endo (anti) stereochemistry relative to the one-carbon bridge.",
    "bn": "\u09ac\u09cd\u09b0\u09bf\u099c\u09af\u09c1\u0995\u09cd\u09a4 \u09a8\u09b0\u09ac\u09cb\u09b0\u09cd\u09a8\u09bf\u09b2 \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae \u09af\u09be \u09ae\u09bf\u09a5\u09bf\u09b2\u09bf\u09a8 \u09ac\u09cd\u09b0\u09bf\u099c\u09c7\u09b0 \u09b8\u09be\u09aa\u09c7\u0995\u09cd\u09b7\u09c7 \u098f\u0995\u09cd\u09b8\u09cb (\u09b8\u09bf\u09a8) \u098f\u09ac\u0982 \u098f\u09a8\u09cd\u09a1\u09cb (\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf) \u0997\u09a0\u09a8 \u09a6\u09c7\u0996\u09be\u09af\u09bc\u0964"
  }
},
{
  "id": "sa-22",
  "category": "syn-anti",
  "iupacName": {
    "en": "2,4,6-Trimethyl-1,3,5-trithiane",
    "bn": "\u09e8,\u09ea,\u09ec-\u099f\u09cd\u09b0\u09be\u0987\u09ae\u09bf\u09a5\u09be\u0987\u09b2-\u09e7,\u09e9,\u09eb-\u099f\u09cd\u09b0\u09be\u0987\u09a5\u09be\u09af\u09bc\u09c7\u09a8"
  },
  "formula": "C6H12S3",
  "systemType": "complex",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-2,4,6-Trimethyl-1,3,5-trithiane",
    "structure": {
      "name": {
        "en": "cis-cis (alpha-isomer, all three methyls syn-equatorial)",
        "bn": "cis-cis (alpha-isomer, all three methyls syn-equatorial)"
      },
      "formula": "C6H12S3",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "S",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "Trithiane"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Trithiane"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.1,
      "meltingPoint": "126.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-2,4,6-Trimethyl-1,3,5-trithiane",
    "structure": {
      "name": {
        "en": "cis-trans (beta-isomer, one methyl anti-axial)",
        "bn": "cis-trans (beta-isomer, one methyl anti-axial)"
      },
      "formula": "C6H12S3",
      "atoms": [
        {
          "id": "c1",
          "element": "N",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
          "isStereocenter": true
        },
        {
          "id": "g1",
          "element": "S",
          "position": [
            -1.6,
            1.1,
            0
          ],
          "label": "Trithiane"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "CH3"
        },
        {
          "id": "oh",
          "element": "C",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "Trithiane"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.4,
      "meltingPoint": "102.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Six-membered sulfur ring showing syn/anti axial-equatorial stereoisomers of thioacetaldehyde polymer.",
    "bn": "\u099b\u09af\u09bc \u09b8\u09a6\u09b8\u09cd\u09af\u09c7\u09b0 \u09b8\u09be\u09b2\u09ab\u09be\u09b0 \u09ac\u09b2\u09af\u09bc \u09af\u09be \u09a5\u09be\u09af\u09bc\u09cb\u0985\u09cd\u09af\u09be\u09b8\u09bf\u099f\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1\u09c7\u09b0 \u09b8\u09bf\u09a8/\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0993\u0987\u09b8\u09cb\u09ae\u09be\u09b0 \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-23",
  "category": "syn-anti",
  "iupacName": {
    "en": "Butanal oxime",
    "bn": "\u09ac\u09bf\u0989\u099f\u09be\u09a8\u09cd\u09af\u09be\u09b2 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C4H9NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Butanal oxime",
    "structure": {
      "name": {
        "en": "Syn-butanal oxime",
        "bn": "Syn-butanal oxime"
      },
      "formula": "C4H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "n-Pr"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.5,
      "meltingPoint": "26.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Butanal oxime",
    "structure": {
      "name": {
        "en": "Anti-butanal oxime",
        "bn": "Anti-butanal oxime"
      },
      "formula": "C4H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "n-Pr"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.95,
      "meltingPoint": "-20.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Aliphatic aldehyde oxime with 3-carbon chain demonstrating regular aldoxime syn-anti behavior.",
    "bn": "\u0985\u09cd\u09af\u09be\u09b2\u09bf\u09ab\u09cd\u09af\u09be\u099f\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae \u09af\u09be \u09b8\u09cd\u09ac\u09be\u09ad\u09be\u09ac\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae \u0986\u099a\u09b0\u09a3 \u09aa\u09cd\u09b0\u09a6\u09b0\u09cd\u09b6\u09a8 \u0995\u09b0\u09c7\u0964"
  }
},
{
  "id": "sa-24",
  "category": "syn-anti",
  "iupacName": {
    "en": "Isobutyraldehyde oxime",
    "bn": "\u0986\u0987\u09b8\u09cb\u09ac\u09bf\u0989\u099f\u09bf\u09b0\u09cd\u09af\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C4H9NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Isobutyraldehyde oxime",
    "structure": {
      "name": {
        "en": "Syn-isobutyraldoxime",
        "bn": "Syn-isobutyraldoxime"
      },
      "formula": "C4H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "i-Pr"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.45,
      "meltingPoint": "32.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Isobutyraldehyde oxime",
    "structure": {
      "name": {
        "en": "Anti-isobutyraldoxime",
        "bn": "Anti-isobutyraldoxime"
      },
      "formula": "C4H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "i-Pr"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 0.9,
      "meltingPoint": "-15.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Branched alkyl group increases steric discrimination between syn and anti isomers.",
    "bn": "\u09b6\u09be\u0996\u09be\u09af\u09c1\u0995\u09cd\u09a4 \u0985\u09cd\u09af\u09be\u09b2\u0995\u09be\u0987\u09b2 \u0997\u09cd\u09b0\u09c1\u09aa \u09b8\u09bf\u09a8 \u0993 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09c0\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09b8\u09cd\u099f\u09c7\u09b0\u09bf\u0995 \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u09ac\u09be\u09a1\u09bc\u09bf\u09af\u09bc\u09c7 \u09a4\u09cb\u09b2\u09c7\u0964"
  }
},
{
  "id": "sa-25",
  "category": "syn-anti",
  "iupacName": {
    "en": "1-Naphthaldehyde oxime",
    "bn": "\u09e7-\u09a8\u09cd\u09af\u09be\u09ab\u09a5\u09cd\u09af\u09be\u09b2\u09a1\u09bf\u09b9\u09be\u0987\u09a1 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C11H9NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-1-Naphthaldehyde oxime",
    "structure": {
      "name": {
        "en": "Syn-1-naphthaldoxime",
        "bn": "Syn-1-naphthaldoxime"
      },
      "formula": "C11H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "1-Naphthyl"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 2.1,
      "meltingPoint": "98.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-1-Naphthaldehyde oxime",
    "structure": {
      "name": {
        "en": "Anti-1-naphthaldoxime",
        "bn": "Anti-1-naphthaldoxime"
      },
      "formula": "C11H9NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "1-Naphthyl"
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
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.4,
      "meltingPoint": "150.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "Polycyclic aromatic aldoxime with very high melting point differential (52\u00b0C difference!).",
    "bn": "\u09ac\u09b9\u09c1-\u09ac\u09b2\u09af\u09bc\u09af\u09c1\u0995\u09cd\u09a4 \u0985\u09cd\u09af\u09be\u09b0\u09cb\u09ae\u09c7\u099f\u09bf\u0995 \u0985\u09cd\u09af\u09be\u09b2\u09a1\u0995\u09cd\u09b8\u09be\u0987\u09ae \u09af\u09be\u09b0 \u0997\u09b2\u09a8\u09be\u0999\u09cd\u0995\u09c7\u09b0 \u09ac\u09bf\u09b6\u09be\u09b2 \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af (\u09eb\u09e8\u00b0\u09b8\u09c7 \u09ac\u09cd\u09af\u09ac\u09a7\u09be\u09a8!) \u09b0\u09af\u09bc\u09c7\u099b\u09c7\u0964"
  }
},
{
  "id": "sa-26",
  "category": "syn-anti",
  "iupacName": {
    "en": "Benzophenone oxime",
    "bn": "\u09ac\u09c7\u09a8\u099c\u09cb\u09ab\u09c7\u09a8\u09a8 \u0985\u0995\u09cd\u09b8\u09be\u0987\u09ae"
  },
  "formula": "C13H11NO",
  "systemType": "oxime",
  "isomerA": {
    "label": "Syn",
    "descriptor": "syn-Benzophenone oxime",
    "structure": {
      "name": {
        "en": "Benzophenone oxime (Symmetrical)",
        "bn": "Benzophenone oxime (Symmetrical)"
      },
      "formula": "C13H11NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            -1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.5,
      "meltingPoint": "144.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "isomerB": {
    "label": "Anti",
    "descriptor": "anti-Benzophenone oxime",
    "structure": {
      "name": {
        "en": "No distinct anti isomer",
        "bn": "No distinct anti isomer"
      },
      "formula": "C13H11NO",
      "atoms": [
        {
          "id": "c1",
          "element": "C",
          "position": [
            -0.65,
            0,
            0
          ],
          "label": "C",
          "isStereocenter": true
        },
        {
          "id": "n1",
          "element": "N",
          "position": [
            0.65,
            0,
            0
          ],
          "label": "N",
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
          "label": "Ph"
        },
        {
          "id": "g2",
          "element": "H",
          "position": [
            -1.6,
            -1.1,
            0
          ],
          "label": "Ph"
        },
        {
          "id": "oh",
          "element": "O",
          "position": [
            1.5,
            1.0,
            0
          ],
          "label": "OH"
        }
      ],
      "bonds": [
        {
          "from": "c1",
          "to": "n1",
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
          "from": "n1",
          "to": "oh",
          "order": 1
        }
      ],
      "dipoleNet": 1.5,
      "meltingPoint": "144.0\u00b0C",
      "stabilityRank": "equal"
    }
  },
  "pedagogicalNote": {
    "en": "PEDAGOGICAL NEGATIVE CONTROL: Both groups on the carbon are identical phenyl rings (-Ph). Therefore, NO syn-anti isomerism is possible!",
    "bn": "\u09b6\u09bf\u0995\u09cd\u09b7\u09a3\u09c0\u09af\u09bc \u09a8\u09c7\u0997\u09c7\u099f\u09bf\u09ad \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3: \u0995\u09be\u09b0\u09cd\u09ac\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4 \u0989\u09ad\u09af\u09bc \u0997\u09cd\u09b0\u09c1\u09aa\u0987 \u0985\u09ad\u09bf\u09a8\u09cd\u09a8 \u09ab\u09bf\u09a8\u09be\u0987\u09b2 \u09ac\u09b2\u09af\u09bc\u0964 \u09a4\u09be\u0987 \u0995\u09cb\u09a8\u09cb \u09b8\u09bf\u09a8-\u0985\u09cd\u09af\u09be\u09a8\u09cd\u099f\u09bf \u0986\u0987\u09b8\u09cb\u09ae\u09be\u09b0\u09bf\u099c\u09ae \u09b8\u09ae\u09cd\u09ad\u09ac \u09a8\u09af\u09bc!"
  }
},
];
