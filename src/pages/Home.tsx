import { Link } from "react-router-dom";
import { Shield, ArrowRight, Eye, Clock, Layers, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="section-container relative">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-mono text-muted-foreground">PROTOCOLO ATIVO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
              Dissociação estrutural
              <br />
              <span className="text-primary text-glow">de transações Bitcoin</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Serviço de mixing que quebra a ligação determinística entre entradas e saídas
              na blockchain, através de fragmentação temporal e volumétrica.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/como-funciona"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors border-glow"
              >
                Entender como funciona
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/taxas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Ver estrutura de taxas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-20 border-t border-border/50">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-mono text-muted-foreground tracking-widest mb-12"
          >
            PROCESSO SIMPLIFICADO
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Envie",
                desc: "Deposite BTC no endereço único gerado para sua operação. Cada endereço é usado uma única vez.",
                icon: ArrowRight,
              },
              {
                step: "02",
                title: "Processamento",
                desc: "Os fundos passam por dissociação temporal e estrutural dentro do pool de liquidez.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Receba",
                desc: "Novos fluxos de saída são enviados aos endereços de destino em tempos distintos.",
                icon: Shield,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-surface p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">{item.step}</span>
                  <item.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Block */}
      <section className="py-20 border-t border-border/50">
        <div className="section-container">
          <div className="card-surface p-8 border-warning/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-3">Transparência e limitações</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    Transações na blockchain são irreversíveis. Fundos enviados não podem ser recuperados.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    O serviço não garante anonimato absoluto — reduz correlação, não a elimina completamente.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    Tempos de processamento variam conforme condições da rede e configuração escolhida.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    A responsabilidade pelo uso do serviço é inteiramente do usuário.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 border-t border-border/50">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Sem logs persistentes", desc: "Dados operacionais são progressivamente removidos após conclusão." },
              { icon: Shield, title: "Endereços únicos", desc: "Cada operação utiliza identificadores nunca reutilizados." },
              { icon: Clock, title: "Atrasos variáveis", desc: "Dissociação temporal configurável para cada saída." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <item.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
