export const HERO_CONTENT = {
  badge: "CONCEPTUAL PROTOTYPE",
  titleLine1: "Origin and destination",
  titleHighlight: "dissociation",
  subtitle:
    "A conceptual mixing interface that demonstrates how transaction dissociation works through temporal and volumetric fragmentation.",
} as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Send",
    desc: "Deposit BTC to a unique address generated for the operation. Each address is used only once.",
    icon: "ArrowRight",
  },
  {
    step: "02",
    title: "Processing",
    desc: "Funds undergo temporal and structural dissociation within the liquidity pool.",
    icon: "Layers",
  },
  {
    step: "03",
    title: "Receive",
    desc: "Output flows are sent to destination addresses at distinct times and in fragmented amounts.",
    icon: "Shield",
  },
] as const;

export const TRANSPARENCY_ITEMS = [
  "This is a simulation/demo environment. No real funds are processed.",
  "In production, blockchain transactions are irreversible and cannot be recovered.",
  "Mixing reduces but does not eliminate correlation — absolute anonymity is not achievable.",
  "Processing times vary depending on network conditions and configuration.",
] as const;

export const DESIGN_PRINCIPLES = [
  { icon: "Info", title: "Data minimization", desc: "Designed to retain only the minimum data required for operation." },
  { icon: "Shield", title: "Address isolation", desc: "Each operation conceptually uses identifiers that are never reused." },
  { icon: "Clock", title: "Temporal dissociation", desc: "Configurable delays between inputs and outputs." },
] as const;
