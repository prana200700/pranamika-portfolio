import { motion } from "framer-motion";
import { ArrowRight, Workflow, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const offerings = [
  {
    icon: Workflow,
    title: "End-to-End Content Automation",
    description:
      "I build systems that take content from idea to published post automatically, covering creation, formatting, file generation, and posting.",
  },
  {
    icon: FileText,
    title: "LinkedIn Carousel & Post Workflows",
    description:
      "I design automated workflows specifically for LinkedIn that generate and publish carousels and posts on a fixed schedule without manual intervention.",
  },
  {
    icon: Settings,
    title: "Content Process Standardisation",
    description:
      "I turn inconsistent, manual content workflows into structured, repeatable systems using templates and clear rules, making content reliable and easy to scale.",
  },
];

const Offerings = () => {
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
              My <span className="text-primary">Offerings</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Services designed to make your content workflow effortless and scalable.
            </p>

            <div className="space-y-6">
              {offerings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 * (i + 1) }}
                  className="border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <offering.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Let's Work Together <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Offerings;
