export const FEE_TABLE = [
  {
    name: "Service fee",
    value: "1.0% — 3.0%",
    desc: "Variable percentage based on volume and number of destinations. Simulator below uses 1.5% as reference.",
  },
  {
    name: "Network fee (miner's fee)",
    value: "Variable",
    desc: "Determined by Bitcoin network conditions. Outside the service's control.",
  },
  {
    name: "Additional destinations",
    value: "+0.1% per destination",
    desc: "Each additional destination address generates an extra network transaction.",
  },
] as const;
