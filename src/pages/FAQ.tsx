import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "Funcionamento Geral",
    questions: [
      {
        q: "O que é mixing de Bitcoin?",
        a: "Mixing (ou tumbling) é um processo que quebra a ligação determinística entre entradas e saídas de transações Bitcoin, dificultando a análise de fluxo na blockchain pública.",
      },
      {
        q: "O mixing garante anonimato absoluto?",
        a: "Não. O serviço reduz significativamente a correlação entre transações, mas não pode garantir anonimato total. A eficácia depende de múltiplos fatores, incluindo comportamento do usuário.",
      },
      {
        q: "Como funciona a dissociação de fundos?",
        a: "Os fundos depositados entram em um pool de liquidez compartilhado. As saídas são realizadas a partir desse pool em valores fragmentados e tempos distintos, eliminando a correspondência direta com a entrada.",
      },
    ],
  },
  {
    title: "Tempos e Processamento",
    questions: [
      {
        q: "Quanto tempo leva o processamento?",
        a: "O tempo varia conforme a configuração de atraso escolhida (0 a 24h) e as condições da rede Bitcoin. Tempos maiores proporcionam maior dissociação temporal.",
      },
      {
        q: "Posso rastrear o status da minha operação?",
        a: "O sistema fornece um identificador de operação no momento da confirmação. Através dele, é possível verificar o status atual do processamento.",
      },
      {
        q: "O que acontece se a rede estiver congestionada?",
        a: "Confirmações na blockchain podem atrasar. O sistema aguarda o número mínimo de confirmações antes de iniciar o processamento.",
      },
    ],
  },
  {
    title: "Limites e Restrições",
    questions: [
      {
        q: "Qual o valor mínimo para mixing?",
        a: "O valor mínimo é definido para cobrir as taxas de rede e serviço. Consulte a página de taxas para valores atualizados.",
      },
      {
        q: "Quantos endereços de destino posso usar?",
        a: "Até 5 endereços de destino por operação, com distribuição percentual configurável.",
      },
      {
        q: "Posso cancelar uma operação?",
        a: "Não. Após a confirmação na blockchain, a operação é irreversível. Isso é inerente à natureza do protocolo Bitcoin.",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    questions: [
      {
        q: "O serviço armazena meus dados?",
        a: "Dados operacionais são mantidos apenas durante o processamento e são progressivamente removidos após a conclusão. Nenhum dado pessoal é coletado.",
      },
      {
        q: "Como verifico se um endereço de destino é válido?",
        a: "O sistema valida o formato do endereço em tempo real. Ainda assim, é responsabilidade do usuário confirmar que o endereço pertence ao destinatário correto.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Perguntas Frequentes</h1>
          <p className="text-muted-foreground mb-12">
            Respostas objetivas sobre funcionamento, limitações e boas práticas.
          </p>

          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
                  {cat.title.toUpperCase()}
                </h2>
                <Accordion type="single" collapsible className="card-surface overflow-hidden">
                  {cat.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${cat.title}-${i}`} className="border-border">
                      <AccordionTrigger className="px-5 text-sm font-medium text-left hover:no-underline hover:text-primary transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
