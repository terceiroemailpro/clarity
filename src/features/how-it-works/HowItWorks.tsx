import { motion } from "framer-motion";
import { ArrowDown, Lock, Shuffle, Clock, Send, AlertTriangle } from "lucide-react";

const steps = [
  {
    icon: Send,
    label: "INPUT",
    title: "Fund Submission",
    desc: "BTC is sent to a unique address generated exclusively for this operation. The system detects the transaction after network confirmations.",
    detail: "The address is discarded after use. No reuse occurs.",
  },
  {
    icon: Shuffle,
    label: "PROCESSING",
    title: "Structural Dissociation",
    desc: "Funds enter the liquidity pool, where they are aggregated so that the direct link between input and output is broken.",
    detail: "Value fragmentation and temporal scheduling reduce volumetric and chronological correlations.",
  },
  {
    icon: Clock,
    label: "DISTRIBUTION",
    title: "Configurable Delays",
    desc: "The payment scheduler organizes outputs in variable time windows, according to user configuration.",
    detail: "Each output occurs at a distinct time, with fragmented values.",
  },
  {
    icon: Lock,
    label: "OUTPUT",
    title: "Dissociated Receipt",
    desc: "Destination addresses receive funds under new conditions — values, times, and origins structurally different from the original input.",
    detail: "After completion, operational data is progressively reduced.",
  },
];

const modules = [
  "Blockchain Monitor",
  "Address Generator",
  "Payment Scheduler",
  "Liquidity Pool",
  "Log Cleanup",
  "Network Validation",
];

const HowItWorks = () => {
  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-muted-foreground">
            Progressive abstraction of a technically complex process.
            Each step is designed to reduce the correlation between transactions.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <div key={step.label}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-6 relative"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                      {step.label}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>
                    <div className="px-3 py-2 rounded bg-surface border border-border text-xs text-surface-foreground font-mono leading-relaxed">
                      {step.detail}
                    </div>
                  </div>
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <h2 className="text-sm font-mono text-muted-foreground tracking-widest mb-6 text-center">
            CONCEPTUAL BACKEND MODULES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {modules.map((mod) => (
              <div key={mod} className="card-surface p-3 text-center">
                <span className="text-xs font-mono text-muted-foreground">{mod}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 rounded-lg bg-warning/5 border border-warning/20 text-center">
            <p className="text-xs text-warning/80 flex items-center justify-center gap-2">
              <AlertTriangle className="w-3 h-3" />
              These modules are conceptual representations for educational purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
