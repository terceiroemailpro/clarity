import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "General Operation",
    questions: [
      {
        q: "What is Bitcoin mixing?",
        a: "Mixing (or tumbling) is a process designed to break the deterministic link between transaction inputs and outputs, making flow analysis on the public blockchain more difficult.",
      },
      {
        q: "Does mixing guarantee absolute anonymity?",
        a: "No. The service is designed to reduce the correlation between transactions, but it cannot guarantee total anonymity. Effectiveness depends on multiple factors, including user behavior and blockchain analysis techniques.",
      },
      {
        q: "How does fund dissociation work conceptually?",
        a: "Deposited funds enter a shared liquidity pool. Outputs are made from this pool in fragmented amounts and at distinct times, reducing direct correspondence with the input.",
      },
    ],
  },
  {
    title: "Timing and Processing",
    questions: [
      {
        q: "How long does processing take?",
        a: "Processing time varies depending on the chosen delay configuration (0 to 24 hours) and Bitcoin network conditions. Longer delays provide greater temporal dissociation.",
      },
      {
        q: "What happens if the network is congested?",
        a: "Blockchain confirmations may be delayed. The system waits for the minimum number of confirmations before starting processing.",
      },
    ],
  },
  {
    title: "Limits and Restrictions",
    questions: [
      {
        q: "What is the minimum amount for mixing?",
        a: "The minimum amount is set to cover network and service fees. Check the fees page for reference values.",
      },
      {
        q: "How many destination addresses can I use?",
        a: "Up to 5 destination addresses per operation, with configurable percentage distribution.",
      },
      {
        q: "Can I cancel an operation?",
        a: "In a production environment, once confirmed on the blockchain, the operation would be irreversible. This is inherent to the nature of the Bitcoin protocol.",
      },
    ],
  },
  {
    title: "Design Principles",
    questions: [
      {
        q: "What data does the system handle?",
        a: "The system is designed around data minimization principles. Operational data would be retained only during processing and progressively removed after completion.",
      },
      {
        q: "How do I verify a destination address?",
        a: "The interface validates address format in real time. However, it is the user's responsibility to confirm that the address belongs to the correct recipient.",
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
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-12">
            Straightforward answers about operation, limitations, and design principles.
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
