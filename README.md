# MIXFLOW

> Conceptual Bitcoin transaction mixing interface — **educational/demonstration purposes only**.

## Overview

MIXFLOW is a front-end prototype demonstrating the UX and information architecture of a Bitcoin mixing service. It showcases transaction dissociation concepts through temporal and volumetric fragmentation.

**⚠️ IMPORTANT: This is a simulation environment. No real blockchain transactions are processed, no funds are handled, and no backend services are connected.**

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 + shadcn/ui components
- **Animations:** Framer Motion
- **Routing:** React Router 6
- **State:** React Query + React hooks

## Project Structure

```
src/
├── app/              # App-level config (routes, providers)
├── components/       # Shared layout and UI components
│   ├── Layout.tsx
│   └── ui/           # shadcn/ui primitives
├── features/         # Feature-based modules
│   ├── mixing/       # Mixing operation interface
│   │   ├── components/   # DepositAddressCard, DestinationList, etc.
│   │   ├── hooks/        # useMixingForm
│   │   ├── services/     # Validation logic
│   │   ├── constants/    # Fee rates, limits
│   │   └── types/        # TypeScript interfaces
│   ├── home/
│   ├── how-it-works/
│   ├── fees/
│   ├── faq/
│   ├── contact/
│   └── not-found/
├── hooks/            # Shared hooks
└── lib/              # Utility functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npx vitest

# Lint
npm run lint
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — overview, process steps, transparency disclaimer |
| `/how-it-works` | Educational flow diagram of mixing concepts |
| `/mixing` | Interactive simulation of a mixing operation |
| `/fees` | Fee structure with illustrative calculator |
| `/faq` | Categorized FAQ accordion |
| `/contact` | Demo contact form (messages are not persisted) |

## Limitations

- **No backend** — All interactions are client-side only
- **No real transactions** — Deposit addresses are simulated
- **No data persistence** — Nothing is stored between sessions
- **No authentication** — No user accounts or sessions
- **No PGP/encryption** — Communication features are cosmetic
- **Fee calculator is illustrative** — Uses fixed reference rates

## Design Decisions

- **Feature-based architecture** for scalability and separation of concerns
- **Centralized route config** consumed by both router and navigation
- **Lazy-loaded pages** for optimal bundle splitting
- **Honest UX** — All simulation/demo limitations are clearly communicated
- **BTC address validation** uses regex matching standard Bitcoin address formats

## License

This project is provided for educational purposes only.
