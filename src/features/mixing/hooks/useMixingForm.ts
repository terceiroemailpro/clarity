import { useState, useCallback, useMemo } from "react";
import type { Destination } from "../types/mixing.types";
import { SIMULATOR_CONFIG } from "@/shared/config";
import { isFormValid, getTotalPercentage, redistributePercentages } from "../services/mixing.validation";

export function useMixingForm() {
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: "1", address: "", percentage: 100 },
  ]);
  const [delay, setDelay] = useState<number>(SIMULATOR_CONFIG.DEFAULT_DELAY_HOURS);
  const [confirmed, setConfirmed] = useState(false);

  const addDestination = useCallback(() => {
    setDestinations((prev) => {
      if (prev.length >= SIMULATOR_CONFIG.MAX_DESTINATIONS) return prev;
      const next = [...prev, { id: Date.now().toString(), address: "", percentage: 0 }];
      return redistributePercentages(next);
    });
  }, []);

  const removeDestination = useCallback((id: string) => {
    setDestinations((prev) => {
      if (prev.length <= SIMULATOR_CONFIG.MIN_DESTINATIONS) return prev;
      const filtered = prev.filter((d) => d.id !== id);
      return redistributePercentages(filtered);
    });
  }, []);

  const updateAddress = useCallback((id: string, address: string) => {
    setDestinations((prev) => prev.map((d) => (d.id === id ? { ...d, address } : d)));
  }, []);

  const updatePercentage = useCallback((id: string, percentage: number) => {
    setDestinations((prev) => prev.map((d) => (d.id === id ? { ...d, percentage } : d)));
  }, []);

  const totalPercentage = useMemo(() => getTotalPercentage(destinations), [destinations]);
  const valid = useMemo(() => isFormValid(destinations) && confirmed, [destinations, confirmed]);

  return {
    destinations,
    delay,
    setDelay,
    confirmed,
    setConfirmed,
    addDestination,
    removeDestination,
    updateAddress,
    updatePercentage,
    totalPercentage,
    isValid: valid,
  };
}
