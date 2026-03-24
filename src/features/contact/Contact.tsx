import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Clock, Shield, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && message.trim()) {
      setSent(true);
    }
  };

  return (
    <div className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Contact</h1>
          <p className="text-muted-foreground mb-4">
            Demo contact form. No personal data is required.
          </p>

          {/* Demo disclaimer */}
          <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20 mb-8">
            <AlertTriangle className="w-3 h-3 text-warning shrink-0 mt-0.5" />
            <p className="text-xs text-warning/80">
              This is a demo interface. Messages are not persisted or delivered to any recipient.
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-surface p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Message submitted</h3>
              <p className="text-sm text-muted-foreground mb-1">
                This is a demo — no message was actually sent or stored.
              </p>
              <button
                onClick={() => { setSent(false); setSubject(""); setMessage(""); }}
                className="mt-6 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Reset form
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="card-surface p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground tracking-wider mb-2 block">
                      SUBJECT
                    </label>
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Briefly describe the reason for contact"
                      className="bg-surface border-border"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground tracking-wider mb-2 block">
                      MESSAGE
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail your question or situation."
                      rows={6}
                      className="bg-surface border-border resize-none"
                      maxLength={2000}
                    />
                    <span className="text-[10px] text-muted-foreground mt-1 block text-right">
                      {message.length}/2000
                    </span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!subject.trim() || !message.trim()}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30"
              >
                <Send className="w-4 h-4 mr-2" />
                Send message (demo)
              </Button>
            </form>
          )}

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {[
              { icon: Shield, title: "No personal data", desc: "No mandatory identification fields." },
              { icon: Clock, title: "Demo environment", desc: "Messages are not stored or processed." },
            ].map((item) => (
              <div key={item.title} className="card-surface p-4 text-center">
                <item.icon className="w-4 h-4 text-primary mx-auto mb-2" />
                <h4 className="text-xs font-medium mb-1">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
