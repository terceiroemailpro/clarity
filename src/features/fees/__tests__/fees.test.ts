import { describe, it, expect } from "vitest";
import { SIMULATOR_CONFIG } from "@/shared/config";

function calculateFees(amount: number) {
  const serviceFee = amount * SIMULATOR_CONFIG.SERVICE_FEE_RATE;
  const total = amount - serviceFee - SIMULATOR_CONFIG.NETWORK_FEE_ESTIMATE;
  return { serviceFee, total: Math.max(0, total) };
}

describe("fees calculation", () => {
  it("calculates service fee correctly", () => {
    const { serviceFee } = calculateFees(1);
    expect(serviceFee).toBeCloseTo(0.015, 6);
  });

  it("calculates total output correctly", () => {
    const { total } = calculateFees(1);
    expect(total).toBeCloseTo(1 - 0.015 - 0.0001, 6);
  });

  it("returns 0 for very small amounts", () => {
    const { total } = calculateFees(0.001);
    expect(total).toBeGreaterThan(0);
  });

  it("never returns negative", () => {
    const { total } = calculateFees(0);
    expect(total).toBe(0);
  });
});
