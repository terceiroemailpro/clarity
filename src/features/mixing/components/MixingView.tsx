import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCLAIMERS } from "@/shared/content";
import { DepositAddressCard } from "./DepositAddressCard";
import { DestinationList } from "./DestinationList";
import { DelayControl } from "./DelayControl";
import { MixSummary } from "./MixSummary";
import { useMixingForm } from "../hooks/useMixingForm";

const MixingView = () => {
  const {
    destinations,
    delay,
    setDelay,
    confirmed,
    setConfirmed,
    addDestination,
    removeDestination,
    updateAddress,
    updatePercentage,
    totalPercentage,
    isValid,
  } = useMixingForm();

  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-6 p-3 rounded-lg bg-warning/10 border border-warning/20 text-center">
            <p className="text-xs text-warning font-mono">{DISCLAIMERS.SIMULATION_BANNER}</p>
          </div>

          <h1 className="text-3xl font-semibold mb-2">New Mixing Operation</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Configure destination addresses, distribution, and delays.
          </p>

          <DepositAddressCard />

          <DestinationList
            destinations={destinations}
            totalPercentage={totalPercentage}
            onAdd={addDestination}
            onRemove={removeDestination}
            onAddressChange={updateAddress}
            onPercentageChange={updatePercentage}
          />

          <DelayControl delay={delay} onChange={setDelay} />

          <MixSummary
            destinationCount={destinations.length}
            delay={delay}
            totalPercentage={totalPercentage}
          />

          <div className="flex items-start gap-3 p-4 rounded-lg bg-warning/5 border border-warning/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
            <p className="text-xs text-warning/80 leading-relaxed">{DISCLAIMERS.MIXING_WARNING}</p>
          </div>

          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 accent-primary"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              {DISCLAIMERS.MIXING_CONFIRM}
            </span>
          </label>

          <Button
            disabled={!isValid}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30"
          >
            Confirm Operation (Simulation)
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MixingView;
