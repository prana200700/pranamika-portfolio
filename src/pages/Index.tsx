import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for projects
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Pranamika</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I help B2B companies, creators, or individuals automate their LinkedIn content. From idea to published post — 
              fully automated, structured, and scalable.
            </p>

            <div className="flex gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/offerings">
                  View Offerings <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
