import { describe, it, expect } from "vitest";
import {
  isValidBtcAddress,
  getTotalPercentage,
  isFormValid,
  redistributePercentages,
} from "@/features/mixing/services/mixing.validation";
import type { Destination } from "@/features/mixing/types/mixing.types";

describe("mixing.validation", () => {
  describe("isValidBtcAddress", () => {
    it("accepts valid bech32 address", () => {
      expect(isValidBtcAddress("bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq")).toBe(true);
    });

    it("accepts valid legacy address starting with 1", () => {
      expect(isValidBtcAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")).toBe(true);
    });

    it("accepts valid P2SH address starting with 3", () => {
      expect(isValidBtcAddress("3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy")).toBe(true);
    });

    it("rejects empty string", () => {
      expect(isValidBtcAddress("")).toBe(false);
    });

    it("rejects short string", () => {
      expect(isValidBtcAddress("bc1qshort")).toBe(false);
    });

    it("rejects invalid prefix", () => {
      expect(isValidBtcAddress("xyz123456789012345678901234567")).toBe(false);
    });
  });

  describe("getTotalPercentage", () => {
    it("returns sum of all percentages", () => {
      const destinations: Destination[] = [
        { id: "1", address: "", percentage: 50 },
        { id: "2", address: "", percentage: 50 },
      ];
      expect(getTotalPercentage(destinations)).toBe(100);
    });

    it("returns 0 for empty array", () => {
      expect(getTotalPercentage([])).toBe(0);
    });
  });

  describe("isFormValid", () => {
    it("returns true when all addresses valid and total is 100", () => {
      const destinations: Destination[] = [
        { id: "1", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq", percentage: 60 },
        { id: "2", address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", percentage: 40 },
      ];
      expect(isFormValid(destinations)).toBe(true);
    });

    it("returns false when address is invalid", () => {
      const destinations: Destination[] = [
        { id: "1", address: "invalid", percentage: 100 },
      ];
      expect(isFormValid(destinations)).toBe(false);
    });

    it("returns false when total is not 100", () => {
      const destinations: Destination[] = [
        { id: "1", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq", percentage: 50 },
      ];
      expect(isFormValid(destinations)).toBe(false);
    });
  });

  describe("redistributePercentages", () => {
    it("distributes evenly with remainder to last", () => {
      const destinations: Destination[] = [
        { id: "1", address: "a", percentage: 0 },
        { id: "2", address: "b", percentage: 0 },
        { id: "3", address: "c", percentage: 0 },
      ];
      const result = redistributePercentages(destinations);
      expect(result[0].percentage).toBe(33);
      expect(result[1].percentage).toBe(33);
      expect(result[2].percentage).toBe(34);
      expect(result.reduce((s, d) => s + d.percentage, 0)).toBe(100);
    });

    it("gives 100% to single destination", () => {
      const result = redistributePercentages([{ id: "1", address: "a", percentage: 0 }]);
      expect(result[0].percentage).toBe(100);
    });

    it("returns empty array for empty input", () => {
      expect(redistributePercentages([])).toEqual([]);
    });
  });
});
