import { SIMULATOR_CONFIG } from "@/shared/config";

interface MixSummaryProps {
  destinationCount: number;
  delay: number;
  totalPercentage: number;
}

export const MixSummary = ({ destinationCount, delay, totalPercentage }: MixSummaryProps) => {
  return (
    <div className="card-surface p-5 mb-6 border-primary/20">
      <label className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
        OPERATION SUMMARY
      </label>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Destinations</span>
          <span className="font-mono">{destinationCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Maximum delay</span>
          <span className="font-mono">{delay}h</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Service fee</span>
          <span className="font-mono">{(SIMULATOR_CONFIG.SERVICE_FEE_RATE * 100).toFixed(1)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Network fee (est.)</span>
          <span className="font-mono">{SIMULATOR_CONFIG.NETWORK_FEE_ESTIMATE} BTC</span>
        </div>
        <div className="border-t border-border pt-2 mt-2 flex justify-between font-medium">
          <span>Distribution</span>
          <span className={totalPercentage === 100 ? "text-primary" : "text-destructive"}>
            {totalPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
