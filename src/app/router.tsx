import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, notFoundRoute as NotFound } from "./routes";
import Layout from "@/components/layout/Layout";

const PageLoader = () => (
  <div className="flex flex-1 items-center justify-center py-20">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);
