import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORIES } from "../content/faq.data";

const FAQView = () => {
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
            {FAQ_CATEGORIES.map((cat) => (
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

export default FAQView;
