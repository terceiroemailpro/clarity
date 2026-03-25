import { lazy, type LazyExoticComponent } from "react";

export interface RouteConfig {
  path: string;
  label: string;
  element: LazyExoticComponent<() => JSX.Element>;
  showInNav: boolean;
}

const HomePage = lazy(() => import("@/pages/HomePage"));
const HowItWorksPage = lazy(() => import("@/pages/HowItWorksPage"));
const MixingPage = lazy(() => import("@/pages/MixingPage"));
const FeesPage = lazy(() => import("@/pages/FeesPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const routes: RouteConfig[] = [
  { path: "/", label: "Home", element: HomePage, showInNav: true },
  { path: "/how-it-works", label: "How It Works", element: HowItWorksPage, showInNav: true },
  { path: "/mixing", label: "Mixing", element: MixingPage, showInNav: true },
  { path: "/fees", label: "Fees", element: FeesPage, showInNav: true },
  { path: "/faq", label: "FAQ", element: FAQPage, showInNav: true },
  { path: "/contact", label: "Contact", element: ContactPage, showInNav: true },
];

export const notFoundRoute = NotFoundPage;
