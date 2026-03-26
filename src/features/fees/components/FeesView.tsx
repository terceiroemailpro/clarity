import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { SIMULATOR_CONFIG } from "@/shared/config";
import { DISCLAIMERS } from "@/shared/content";
import { FEE_TABLE } from "../content/fees.data";

const FeesView = () => {
  const [amount, setAmount] = useState([0.5]);

  const serviceFee = amount[0] * SIMULATOR_CONFIG.SERVICE_FEE_RATE;
  const total = amount[0] - serviceFee - SIMULATOR_CONFIG.NETWORK_FEE_ESTIMATE;

  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Fee Structure</h1>
          <p className="text-muted-foreground mb-12">
            Full transparency on costs. All values below are illustrative estimates.
          </p>

          {/* Fee Table */}
          <div className="card-surface overflow-hidden mb-8">
            <div className="p-5 border-b border-border">
              <h3 className="text-sm font-mono text-muted-foreground tracking-wider">COST COMPONENTS</h3>
            </div>
            <div className="divide-y divide-border">
              {FEE_TABLE.map((fee) => (
                <div key={fee.name} className="p-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{fee.name}</h4>
                    <p className="text-xs text-muted-foreground">{fee.desc}</p>
                  </div>
                  <span className="font-mono text-sm text-primary shrink-0">{fee.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulator */}
          <div className="card-surface p-6 border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-mono tracking-wider text-muted-foreground">
                ILLUSTRATIVE SIMULATOR
              </h3>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Input amount</span>
                <span className="font-mono text-lg text-foreground">{amount[0].toFixed(4)} BTC</span>
              </div>
              <Slider
                value={amount}
                onValueChange={setAmount}
                max={10}
                min={0.001}
                step={0.001}
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Input</span>
                <span className="font-mono">{amount[0].toFixed(4)} BTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service fee ({(SIMULATOR_CONFIG.SERVICE_FEE_RATE * 100).toFixed(1)}% reference)</span>
                <span className="font-mono text-destructive">-{serviceFee.toFixed(6)} BTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Network fee (est.)</span>
                <span className="font-mono text-destructive">-{SIMULATOR_CONFIG.NETWORK_FEE_ESTIMATE.toFixed(4)} BTC</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-3 border-t border-border">
                <span>Estimated output</span>
                <span className="font-mono text-primary">{Math.max(0, total).toFixed(6)} BTC</span>
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4 p-3 rounded bg-surface border border-border">
              <Info className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {DISCLAIMERS.FEE_DISCLAIMER}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeesView;
