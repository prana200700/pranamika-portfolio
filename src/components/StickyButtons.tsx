import { Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const StickyButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" style={{ opacity: 0.8 }}>
    <motion.div whileHover={{ scale: 1.02 }}>
      <Button
        asChild
        size="lg"
        className="gap-2 shadow-lg border border-border transition-colors duration-300 hover:border-primary/30"
      >
        <Link to="/contact">
          <Mail className="w-4 h-4" /> Reach Me
        </Link>
      </Button>
    </motion.div>
    <motion.div whileHover={{ scale: 1.02 }}>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="gap-2 shadow-lg bg-card transition-colors duration-300 hover:border-primary/30"
      >
        <a href="https://drive.google.com/file/d/19Cp7gzfJAMcUIfkl6p1HemirB8GulBg1/view" target="_blank" rel="noopener noreferrer">
          <FileText className="w-4 h-4" /> My CV
        </a>
      </Button>
    </motion.div>
  </div>
);

export default StickyButtons;
