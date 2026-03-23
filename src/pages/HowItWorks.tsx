import { motion } from "framer-motion";
import { ArrowDown, Lock, Shuffle, Clock, Send } from "lucide-react";

const steps = [
  {
    icon: Send,
    label: "ENTRADA",
    title: "Envio de fundos",
    desc: "Você envia BTC para um endereço único gerado exclusivamente para esta operação. O sistema detecta a transação após confirmações na rede.",
    detail: "O endereço é descartado após uso. Nenhuma reutilização ocorre.",
  },
  {
    icon: Shuffle,
    label: "PROCESSAMENTO",
    title: "Dissociação estrutural",
    desc: "Os fundos entram no pool de liquidez, onde são agregados com outros de forma que a ligação direta entre entrada e saída é quebrada.",
    detail: "A fragmentação de valores e o escalonamento temporal eliminam correlações volumétricas e cronológicas.",
  },
  {
    icon: Clock,
    label: "DISTRIBUIÇÃO",
    title: "Atrasos configuráveis",
    desc: "O scheduler de pagamentos organiza as saídas em janelas de tempo variáveis, de acordo com a configuração definida pelo usuário.",
    detail: "Cada saída ocorre em um momento distinto, com valores fragmentados.",
  },
  {
    icon: Lock,
    label: "SAÍDA",
    title: "Recebimento dissociado",
    desc: "Os endereços de destino recebem os fundos em novas condições — valores, tempos e origens estruturalmente diferentes da entrada original.",
    detail: "Após conclusão, dados operacionais são progressivamente removidos do sistema.",
  },
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
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Como Funciona</h1>
          <p className="text-muted-foreground">
            Abstração progressiva de um processo tecnicamente complexo.
            Cada etapa é projetada para reduzir a correlação entre transações.
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
            MÓDULOS DE BACKEND
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Monitor Blockchain",
              "Gerador de Endereços",
              "Scheduler de Pagamentos",
              "Pool de Liquidez",
              "Limpeza de Logs",
              "Validação de Rede",
            ].map((mod) => (
              <div key={mod} className="card-surface p-3 text-center">
                <span className="text-xs font-mono text-muted-foreground">{mod}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
