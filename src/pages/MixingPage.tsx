import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, AlertTriangle, Clock, ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface Destination {
  id: string;
  address: string;
  percentage: number;
}

const MixingPage = () => {
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: "1", address: "", percentage: 100 },
  ]);
  const [delay, setDelay] = useState([2]);
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);

  const depositAddress = "bc1q" + "x".repeat(38);
  const serviceFee = 1.5;
  const networkFee = 0.0001;

  const addDestination = () => {
    if (destinations.length >= 5) return;
    const newPct = Math.floor(100 / (destinations.length + 1));
    const updated = destinations.map((d) => ({ ...d, percentage: newPct }));
    updated.push({ id: Date.now().toString(), address: "", percentage: 100 - newPct * destinations.length });
    setDestinations(updated);
  };

  const removeDestination = (id: string) => {
    if (destinations.length <= 1) return;
    const filtered = destinations.filter((d) => d.id !== id);
    const pct = Math.floor(100 / filtered.length);
    setDestinations(filtered.map((d, i) => ({ ...d, percentage: i === filtered.length - 1 ? 100 - pct * (filtered.length - 1) : pct })));
  };

  const updateAddress = (id: string, address: string) => {
    setDestinations(destinations.map((d) => (d.id === id ? { ...d, address } : d)));
  };

  const updatePercentage = (id: string, percentage: number) => {
    setDestinations(destinations.map((d) => (d.id === id ? { ...d, percentage } : d)));
  };

  const totalPercentage = destinations.reduce((a, b) => a + b.percentage, 0);
  const isValid = destinations.every((d) => d.address.length > 20) && totalPercentage === 100;

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-semibold mb-2">New Mixing Operation</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Configure destination addresses, distribution, and delays.
          </p>

          {/* Deposit Address */}
          <div className="card-surface p-5 mb-6">
            <label className="text-xs font-mono text-muted-foreground tracking-wider mb-3 block">
              DEPOSIT ADDRESS
            </label>
            <div className="flex items-center gap-2 bg-surface rounded-md p-3 border border-border">
              <code className="text-sm font-mono text-primary flex-1 break-all">{depositAddress}</code>
              <button onClick={handleCopy} className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Unique address generated for this operation. Send BTC to begin.
            </p>
          </div>

          {/* Destinations */}
          <div className="card-surface p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-xs font-mono text-muted-foreground tracking-wider">
                DESTINATION ADDRESSES
              </label>
              <button
                onClick={addDestination}
                disabled={destinations.length >= 5}
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
              >
                <Plus className="w-3 h-3" /> Add
              </button>
            </div>

            <div className="space-y-3">
              {destinations.map((dest, i) => (
                <div key={dest.id} className="flex items-start gap-3">
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="bc1q... Bitcoin address"
                      value={dest.address}
                      onChange={(e) => updateAddress(dest.id, e.target.value)}
                      className="font-mono text-xs bg-surface border-border"
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-8">{dest.percentage}%</span>
                      <Slider
                        value={[dest.percentage]}
                        onValueChange={([v]) => updatePercentage(dest.id, v)}
                        max={100}
                        min={1}
                        step={1}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  {destinations.length > 1 && (
                    <button
                      onClick={() => removeDestination(dest.id)}
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
                The sum of percentages must equal 100% (current: {totalPercentage}%)
              </p>
            )}
          </div>

          {/* Delay */}
          <div className="card-surface p-5 mb-6">
            <label className="text-xs font-mono text-muted-foreground tracking-wider mb-3 block">
              DISTRIBUTION DELAY
            </label>
            <div className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <Slider
                value={delay}
                onValueChange={setDelay}
                max={24}
                min={0}
                step={0.5}
                className="flex-1"
              />
              <span className="font-mono text-sm text-foreground w-16 text-right">
                {delay[0]}h
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Variable delay between 0 and 24 hours. Longer delays increase temporal dissociation.
            </p>
          </div>

          {/* Summary */}
          <div className="card-surface p-5 mb-6 border-primary/20">
            <label className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
              OPERATION SUMMARY
            </label>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Destinations</span>
                <span className="font-mono">{destinations.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maximum delay</span>
                <span className="font-mono">{delay[0]}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service fee</span>
                <span className="font-mono">{serviceFee}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network fee (est.)</span>
                <span className="font-mono">{networkFee} BTC</span>
              </div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-medium">
                <span>Distribution</span>
                <span className={totalPercentage === 100 ? "text-primary" : "text-destructive"}>
                  {totalPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-warning/5 border border-warning/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
            <p className="text-xs text-warning/80 leading-relaxed">
              This operation is irreversible. Carefully verify all destination addresses
              before confirming. Funds sent to incorrect addresses cannot be recovered.
            </p>
          </div>

          {/* Confirm */}
          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 accent-primary"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              I have read and understand that this operation is irreversible, that the service reduces
              but does not eliminate correlation, and that responsibility for its use is entirely mine.
            </span>
          </label>

          <Button
            disabled={!isValid || !confirmed}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30"
          >
            Confirm Operation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MixingPage;
