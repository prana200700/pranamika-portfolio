import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const fullName = "Pranamika";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showGradient, setShowGradient] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 600);
        setTimeout(() => setShowGradient(false), 1500);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

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
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className={`bg-gradient-to-r from-[hsl(330,80%,80%)] to-[hsl(270,60%,80%)] bg-clip-text text-transparent transition-opacity duration-1000 ${showGradient ? "opacity-100" : "opacity-0"}`}>
                  {displayedName}
                </span>
                <span className={`absolute inset-0 text-primary transition-opacity duration-1000 ${showGradient ? "opacity-0" : "opacity-100"}`}>
                  {displayedName}
                </span>
                {showCursor && <span className="text-foreground animate-pulse">|</span>}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I help B2B founders build a consistent LinkedIn presence through structured content systems and intelligent automation, without compromising their voice.
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
