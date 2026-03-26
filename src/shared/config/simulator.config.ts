/** Central configuration for the mixing simulator — single source of truth for all fee rates, limits, and constraints. */

export const SIMULATOR_CONFIG = {
  SERVICE_FEE_RATE: 0.015,
  NETWORK_FEE_ESTIMATE: 0.0001,
  MAX_DESTINATIONS: 5,
  MIN_DESTINATIONS: 1,
  MIN_DELAY_HOURS: 0,
  MAX_DELAY_HOURS: 24,
  DELAY_STEP_HOURS: 0.5,
  DEFAULT_DELAY_HOURS: 2,
  MIN_ADDRESS_LENGTH: 26,
  MAX_ADDRESS_LENGTH: 62,
  BTC_ADDRESS_REGEX: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,59}$/,
  SIMULATION_DEPOSIT_ADDRESS: "bc1q_simulated_demo_address_not_real_000000000",
} as const;
