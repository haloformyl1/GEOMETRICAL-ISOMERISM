# PIECHEM — Stereochemistry Studio (Geometrical Isomerism)

An interactive, animated, bilingual (**English & Bengali**) 3D web and mobile platform for mastering **Geometrical Isomerism**:
- **Cis-Trans Isomerism** (Alkenes, Cycloalkanes, Square Planar & Octahedral Coordination Complexes)
- **E-Z Isomerism** (Cahn-Ingold-Prelog CIP Sequence Rules: Atomic numbers, isotopes, tie-breakers, phantom duplicate atoms)
- **Syn-Anti Isomerism** (Aldoximes, Ketoximes, Beckmann Rearrangement stereochemistry, Azobenzene photo-switching, Decalins)
- **Physical & Chemical Properties** (Dipole moments, vector summation, boiling/melting points, crystal packing symmetry, Maleic vs Fumaric anhydride test)
- **78+ Curated Chemical Models** (At least 26 examples per topic with 3D coordinates, properties, and bilingual annotations)

---

## Architecture & Technology Stack
- **Frontend Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Cyber-dark scientific theme tokens
- **3D Graphics Engine**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **State Management**: Zustand with persistent storage (`persist`)
- **Bilingual Engine**: Zero-overhead dual English/Bengali runtime
- **Mobile Deployment**: Capacitor 8 for Android APK generation
- **Assessment**: Timed Practice Center with instant scoring & 3D Flashcard revision deck

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Run test suite
npm test
```

### Capacitor Android Sync
```bash
npx cap sync android
npx cap open android
```

---
*Designed & Developed by **Arghyadeep Roy** (Contact: 9830507435)*

