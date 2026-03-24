import { lazy, type LazyExoticComponent } from "react";

export interface RouteConfig {
  path: string;
  label: string;
  element: LazyExoticComponent<() => JSX.Element>;
  showInNav: boolean;
}

const Home = lazy(() => import("@/features/home/Home"));
const HowItWorks = lazy(() => import("@/features/how-it-works/HowItWorks"));
const MixingPage = lazy(() => import("@/features/mixing/MixingPage"));
const Fees = lazy(() => import("@/features/fees/Fees"));
const FAQ = lazy(() => import("@/features/faq/FAQ"));
const Contact = lazy(() => import("@/features/contact/Contact"));
const NotFound = lazy(() => import("@/features/not-found/NotFound"));

export const routes: RouteConfig[] = [
  { path: "/", label: "Home", element: Home, showInNav: true },
  { path: "/how-it-works", label: "How It Works", element: HowItWorks, showInNav: true },
  { path: "/mixing", label: "Mixing", element: MixingPage, showInNav: true },
  { path: "/fees", label: "Fees", element: Fees, showInNav: true },
  { path: "/faq", label: "FAQ", element: FAQ, showInNav: true },
  { path: "/contact", label: "Contact", element: Contact, showInNav: true },
];

export const notFoundRoute = NotFound;
