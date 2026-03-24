import { MIXING_CONSTANTS } from "../constants/mixing.constants";
import type { Destination } from "../types/mixing.types";

export function isValidBtcAddress(address: string): boolean {
  return MIXING_CONSTANTS.BTC_ADDRESS_REGEX.test(address);
}

export function getTotalPercentage(destinations: Destination[]): number {
  return destinations.reduce((sum, d) => sum + d.percentage, 0);
}

export function isFormValid(destinations: Destination[]): boolean {
  const allAddressesValid = destinations.every((d) => isValidBtcAddress(d.address));
  const totalIs100 = getTotalPercentage(destinations) === 100;
  return allAddressesValid && totalIs100;
}

export function redistributePercentages(destinations: Destination[]): Destination[] {
  const count = destinations.length;
  if (count === 0) return [];
  const base = Math.floor(100 / count);
  const remainder = 100 - base * count;
  return destinations.map((d, i) => ({
    ...d,
    percentage: base + (i === count - 1 ? remainder : 0),
  }));
}
