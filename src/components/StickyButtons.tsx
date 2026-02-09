import { Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StickyButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" style={{ opacity: 0.8 }}>
    <Button
      asChild
      size="lg"
      className="gap-2 shadow-lg border border-border transition-all duration-500 hover:border-transparent hover:text-foreground [&:hover]:bg-[radial-gradient(circle,hsl(330,80%,92%)_0%,hsl(270,60%,90%)_40%,hsl(var(--background))_100%)]"
    >
      <Link to="/contact">
        <Mail className="w-4 h-4" /> Reach Me
      </Link>
    </Button>
    <Button
      asChild
      size="lg"
      variant="outline"
      className="gap-2 shadow-lg bg-card transition-all duration-500 hover:border-transparent hover:text-foreground [&:hover]:bg-[radial-gradient(circle,hsl(330,80%,92%)_0%,hsl(270,60%,90%)_40%,hsl(var(--background))_100%)]"
    >
      <a href="https://drive.google.com/file/d/19Cp7gzfJAMcUIfkl6p1HemirB8GulBg1/view" target="_blank" rel="noopener noreferrer">
        <FileText className="w-4 h-4" /> My CV
      </a>
    </Button>
  </div>
);

export default StickyButtons;
