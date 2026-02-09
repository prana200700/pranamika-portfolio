import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import { Mail, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)]">
        <div className="max-w-5xl mx-auto px-6 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Have a project in mind? Let's talk about how I can automate your content workflow.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4">Or reach out directly</h3>
                <a
                  href="mailto:hello@pranamika.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">hello@pranamika.com</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect with me</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
