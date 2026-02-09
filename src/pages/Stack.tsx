import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const stackItems = [
  { name: "Make (Integromat)", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "LinkedIn API", category: "Platform" },
  { name: "Canva", category: "Design" },
  { name: "Google Sheets", category: "Data" },
  { name: "Notion", category: "Productivity" },
  { name: "Airtable", category: "Data" },
  { name: "ChatGPT / OpenAI", category: "AI" },
  { name: "Google Docs", category: "Content" },
  { name: "Figma", category: "Design" },
  { name: "Buffer", category: "Scheduling" },
];

const categories = [...new Set(stackItems.map((item) => item.category))];

const Stack = () => {
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
              My <span className="text-primary">Stack</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              The tools and platforms I use to build content automation systems.
            </p>

            <div className="space-y-10">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {stackItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <motion.div
                          key={item.name}
                          whileHover={{ scale: 1.02 }}
                          className="border border-border rounded-lg px-4 py-3 bg-card hover:border-primary/30 transition-colors"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Stack;
