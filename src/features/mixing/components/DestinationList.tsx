import { Plus, Trash2, AlertTriangle } from "lucide-react";
import { Input } from "@/shared/ui/input";
import { Slider } from "@/shared/ui/slider";
import { MIXING_CONSTANTS } from "../constants/mixing.constants";
import type { Destination } from "../types/mixing.types";

interface DestinationListProps {
  destinations: Destination[];
  totalPercentage: number;
  onAdd: () => void;
  onRemove: (id: string) => void;
  onAddressChange: (id: string, address: string) => void;
  onPercentageChange: (id: string, percentage: number) => void;
}

export const DestinationList = ({
  destinations,
  totalPercentage,
  onAdd,
  onRemove,
  onAddressChange,
  onPercentageChange,
}: DestinationListProps) => {
  return (
    <div className="card-surface p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <label className="text-xs font-mono text-muted-foreground tracking-wider">
          DESTINATION ADDRESSES
        </label>
        <button
          onClick={onAdd}
          disabled={destinations.length >= MIXING_CONSTANTS.MAX_DESTINATIONS}
          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>

      <div className="space-y-3">
        {destinations.map((dest) => (
          <div key={dest.id} className="flex items-start gap-3">
            <div className="flex-1 space-y-2">
              <Input
                placeholder="bc1q... or 1... or 3... Bitcoin address"
                value={dest.address}
                onChange={(e) => onAddressChange(dest.id, e.target.value)}
                className="font-mono text-xs bg-surface border-border"
              />
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-8">{dest.percentage}%</span>
                <Slider
                  value={[dest.percentage]}
                  onValueChange={([v]) => onPercentageChange(dest.id, v)}
                  max={100}
                  min={1}
                  step={1}
                  className="flex-1"
                />
              </div>
            </div>
            {destinations.length > 1 && (
              <button
                onClick={() => onRemove(dest.id)}
                className="mt-2 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      {totalPercentage !== 100 && (
        <p className="text-xs text-destructive mt-3 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" />
          Percentages must total 100% (currently {totalPercentage}%)
        </p>
      )}
    </div>
  );
};
