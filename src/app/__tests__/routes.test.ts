import { describe, it, expect } from "vitest";
import { routes } from "@/app/routes";

describe("routes configuration", () => {
  it("has a home route at /", () => {
    const home = routes.find((r) => r.path === "/");
    expect(home).toBeDefined();
    expect(home!.label).toBe("Home");
    expect(home!.showInNav).toBe(true);
  });

  it("all routes have unique paths", () => {
    const paths = routes.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("all nav routes have labels", () => {
    routes.filter((r) => r.showInNav).forEach((r) => {
      expect(r.label.length).toBeGreaterThan(0);
    });
  });

  it("includes expected pages", () => {
    const paths = routes.map((r) => r.path);
    expect(paths).toContain("/");
    expect(paths).toContain("/how-it-works");
    expect(paths).toContain("/mixing");
    expect(paths).toContain("/fees");
    expect(paths).toContain("/faq");
    expect(paths).toContain("/contact");
  });
});
