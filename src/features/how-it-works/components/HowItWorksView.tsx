import { motion } from "framer-motion";
import { ArrowDown, Lock, Shuffle, Clock, Send, AlertTriangle } from "lucide-react";
import { HOW_IT_WORKS_STEPS, BACKEND_MODULES } from "../content/how-it-works.data";

const iconMap = { Send, Shuffle, Clock, Lock } as const;

const HowItWorksView = () => {
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
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
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
                      <Icon className="w-4 h-4 text-primary" />
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

                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-4 h-4 text-primary/40" />
                  </div>
                )}
              </div>
            );
          })}
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
            {BACKEND_MODULES.map((mod) => (
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

export default HowItWorksView;
