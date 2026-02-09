import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

interface StackItem {
  name: string;
  category: string;
  description: string;
  logo: string;
  color: string;
}

const stackItems: StackItem[] = [
  {
    name: "n8n",
    category: "Automation",
    description:
      "I use n8n to design and manage end-to-end automation workflows, connecting APIs, scheduling content pipelines, and orchestrating content creation, transformation, and publishing systems with minimal manual intervention.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "Zapier",
    category: "Automation",
    description:
      "I use Zapier for lightweight automations and quick integrations between tools, bridging gaps where simpler trigger-action workflows are more efficient than full pipeline orchestration.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "OpenAI APIs",
    category: "AI & Integrations",
    description:
      "I use OpenAI APIs for content generation, ideation, and refinement within automated workflows, integrating them programmatically rather than using them as standalone tools.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "Claude APIs",
    category: "AI & Integrations",
    description:
      "I use Claude APIs for long-form content drafting, rewriting, and structural refinement, particularly where coherence, tone control, and contextual reasoning are required.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "Google APIs",
    category: "AI & Integrations",
    description:
      "I use Google APIs to handle data flow, storage, and system connectivity, enabling automation across Sheets, Drive, and other Google services within larger workflows.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "LinkedIn",
    category: "Distribution & Planning",
    description:
      "I use LinkedIn as the primary distribution layer, designing systems for consistent posting, content scheduling, performance observation, and long-term content strategy execution rather than one-off publishing.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "Google Sheets",
    category: "Distribution & Planning",
    description:
      "I use Google Sheets as both an input and output layer, managing content calendars, prompts, and parameters while also receiving AI-generated content based on predefined schedules.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlesheets.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "Notion",
    category: "Distribution & Planning",
    description:
      "I use Notion as a central knowledge base and content planning hub, structuring ideas, briefs, and templates that feed into automated content workflows.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "HTML",
    category: "Structure & Assets",
    description:
      "HTML is the backbone of my assets. I use it to structure and format automated content outputs, building reusable templates for assets such as carousels, landing sections, and export-ready content.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg",
    color: "hsl(340, 70%, 65%)",
  },
  {
    name: "GitHub",
    category: "Structure & Assets",
    description:
      "I use GitHub as an infrastructure layer for managing, versioning, and delivering assets across automated content workflows, enabling reuse, stability, and clean system handoffs.",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
    color: "hsl(340, 70%, 65%)",
  },
];

const categories = [...new Set(stackItems.map((item) => item.category))];

const StackLogo = ({ src, name, color }: { src: string; name: string; color: string }) => (
  <div
    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
    style={{ background: 'linear-gradient(to bottom, rgba(253, 242, 248, 0.9), rgba(237, 233, 254, 0.3))' }}
  >
    <img
      src={src}
      alt={name}
      className="w-5 h-5"
      style={{ filter: "brightness(0) invert(30%)" }}
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const parent = target.parentElement;
        if (parent) {
          const fallback = document.createElement("span");
          fallback.textContent = name.charAt(0);
          fallback.style.color = color;
          fallback.style.fontWeight = "700";
          fallback.style.fontSize = "16px";
          parent.appendChild(fallback);
        }
      }}
    />
  </div>
);

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
              My Skill <span className="text-primary">Stack</span>
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
                  <div className="space-y-4">
                    {stackItems
                      .filter((item) => item.category === category)
                      .map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.35, delay: 0.08 * i }}
                          className="border border-border rounded-xl p-5 bg-card hover:border-primary/30 transition-colors origin-left"
                        >
                          <div className="flex items-center gap-4">
                            <StackLogo src={item.logo} name={item.name} color={item.color} />
                            <div>
                              <h4 className="font-semibold mb-1">{item.name}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
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
