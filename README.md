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
├── app/                  # App-level orchestration
│   ├── router.tsx        # BrowserRouter + route rendering + Layout
│   ├── routes.ts         # Centralized route config (lazy-loaded)
│   └── providers.tsx     # Global providers (QueryClient, Tooltip, Toasters)
├── components/
│   ├── layout/           # App shell (Layout, header, footer, nav)
│   │   └── Layout.tsx
│   └── ui/               # shadcn/ui primitives (shared, generic)
├── features/             # Feature-based modules (domain-specific)
│   ├── mixing/
│   │   ├── components/   # DepositAddressCard, DestinationList, DelayControl, MixSummary
│   │   ├── hooks/        # useMixingForm
│   │   ├── services/     # Validation logic
│   │   ├── constants/    # Fee rates, limits, defaults
│   │   ├── types/        # TypeScript interfaces
│   │   ├── utils/        # Clipboard helpers
│   │   ├── __tests__/    # Unit tests
│   │   ├── MixingView.tsx
│   │   └── index.ts      # Barrel export
│   ├── home/
│   ├── how-it-works/
│   ├── fees/
│   ├── faq/
│   ├── contact/
│   └── not-found/
├── pages/                # Thin page wrappers (composition only)
│   ├── HomePage.tsx
│   ├── HowItWorksPage.tsx
│   ├── MixingPage.tsx
│   ├── FeesPage.tsx
│   ├── FAQPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── hooks/                # Shared/global hooks
├── lib/                  # Global utilities (cn, etc.)
└── test/                 # Test setup
```

## Architecture Principles

- **Pages are thin**: each page file only imports its feature and composes the view
- **Features are self-contained**: each feature owns its components, hooks, services, types, and constants
- **Routes are centralized**: `src/app/routes.ts` is the single source of truth consumed by router and navigation
- **Lazy-loaded pages**: all routes use `React.lazy` for optimal bundle splitting
- **Barrel exports**: each feature exposes a clean public API via `index.ts`

## Getting Started

```bash
npm install
npm run dev
npm run build
npx vitest
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

## License

This project is provided for educational purposes only.
