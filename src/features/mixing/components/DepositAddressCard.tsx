import { useState } from "react";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { SIMULATION_DEPOSIT_ADDRESS } from "../constants/mixing.constants";

export const DepositAddressCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SIMULATION_DEPOSIT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-surface p-5 mb-6">
      <label className="text-xs font-mono text-muted-foreground tracking-wider mb-3 block">
        DEPOSIT ADDRESS
      </label>
      <div className="flex items-center gap-2 bg-surface rounded-md p-3 border border-border">
        <code className="text-sm font-mono text-primary flex-1 break-all">
          {SIMULATION_DEPOSIT_ADDRESS}
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <AlertTriangle className="w-3 h-3 text-warning shrink-0 mt-0.5" />
        <p className="text-xs text-warning/80">
          Simulation only — this is not a real deposit address. Do not send actual funds.
        </p>
      </div>
    </div>
  );
};
