/** Mixing feature constants — delegates to shared config as single source of truth. */
import { SIMULATOR_CONFIG } from "@/shared/config";

export const MIXING_CONSTANTS = SIMULATOR_CONFIG;
export const SIMULATION_DEPOSIT_ADDRESS = SIMULATOR_CONFIG.SIMULATION_DEPOSIT_ADDRESS;
