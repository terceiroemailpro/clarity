import { Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { MIXING_CONSTANTS } from "../constants/mixing.constants";

interface DelayControlProps {
  delay: number;
  onChange: (value: number) => void;
}

export const DelayControl = ({ delay, onChange }: DelayControlProps) => {
  return (
    <div className="card-surface p-5 mb-6">
      <label className="text-xs font-mono text-muted-foreground tracking-wider mb-3 block">
        DISTRIBUTION DELAY
      </label>
      <div className="flex items-center gap-4">
        <Clock className="w-4 h-4 text-muted-foreground" />
        <Slider
          value={[delay]}
          onValueChange={([v]) => onChange(v)}
          max={MIXING_CONSTANTS.MAX_DELAY_HOURS}
          min={MIXING_CONSTANTS.MIN_DELAY_HOURS}
          step={MIXING_CONSTANTS.DELAY_STEP_HOURS}
          className="flex-1"
        />
        <span className="font-mono text-sm text-foreground w-16 text-right">{delay}h</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Variable delay between 0 and 24 hours. Longer delays increase temporal dissociation.
      </p>
    </div>
  );
};
