/** Centralized disclaimer texts used across the application — single source of truth. */

export const DISCLAIMERS = {
  GLOBAL_BANNER: "⚠ EDUCATIONAL DEMO — This is a conceptual interface. No real transactions are processed.",
  SIMULATION_BANNER: "⚠ SIMULATION ENVIRONMENT — No real transactions are processed",
  FOOTER: "MIXFLOW — Conceptual demonstration. No real transactions are processed.",
  MIXING_WARNING:
    "In a production environment, this operation would be irreversible. This is a simulation interface for educational and demonstration purposes only.",
  MIXING_CONFIRM:
    "I understand this is a simulation environment. No real funds will be processed and no actual blockchain transactions will occur.",
  DEPOSIT_WARNING: "Simulation only — this is not a real deposit address. Do not send actual funds.",
  CONTACT_DISCLAIMER: "This is a demo interface. Messages are not persisted or delivered to any recipient.",
  CONTACT_SENT: "This is a demo — no message was actually sent or stored.",
  FEE_DISCLAIMER:
    "Illustrative estimates only. Actual fees depend on network conditions, volume, and number of destinations. This simulator uses a fixed 1.5% rate for demonstration.",
} as const;
