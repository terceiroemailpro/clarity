export const HOW_IT_WORKS_STEPS = [
  {
    icon: "Send",
    label: "INPUT",
    title: "Fund Submission",
    desc: "BTC is sent to a unique address generated exclusively for this operation. The system detects the transaction after network confirmations.",
    detail: "The address is discarded after use. No reuse occurs.",
  },
  {
    icon: "Shuffle",
    label: "PROCESSING",
    title: "Structural Dissociation",
    desc: "Funds enter the liquidity pool, where they are aggregated so that the direct link between input and output is broken.",
    detail: "Value fragmentation and temporal scheduling reduce volumetric and chronological correlations.",
  },
  {
    icon: "Clock",
    label: "DISTRIBUTION",
    title: "Configurable Delays",
    desc: "The payment scheduler organizes outputs in variable time windows, according to user configuration.",
    detail: "Each output occurs at a distinct time, with fragmented values.",
  },
  {
    icon: "Lock",
    label: "OUTPUT",
    title: "Dissociated Receipt",
    desc: "Destination addresses receive funds under new conditions — values, times, and origins structurally different from the original input.",
    detail: "After completion, operational data is progressively reduced.",
  },
] as const;

export const BACKEND_MODULES = [
  "Blockchain Monitor",
  "Address Generator",
  "Payment Scheduler",
  "Liquidity Pool",
  "Log Cleanup",
  "Network Validation",
] as const;
