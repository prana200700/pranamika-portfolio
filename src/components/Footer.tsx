import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 mt-20">
    <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} Pranamika. All rights reserved.</span>
      <div className="flex gap-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:hello@pranamika.com" className="hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
