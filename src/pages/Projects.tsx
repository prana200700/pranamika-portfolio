import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "LinkedIn Carousel Engine — Calibr.ai",
    description:
      "Built a fully automated carousel pipeline for Calibr.ai that replaced their manual design-and-review process.",
    tags: ["AI Agents", "Google Sheets", "Google Drive", "LinkedIn API", "PDF Templating"],
    problem: "Small team with inconsistent carousel output, slow turnaround, and generic ideas. Different team members had varying aesthetic approaches despite following brand guidelines, and content ideation was often outdated or generic.",
    solution: "Designed a workflow that runs every Tuesday and Thursday. AI agents generate brand-aligned content based on detailed audience and tone requirements, structure it into carousel slides, and produce templatised PDFs stored in Google Drive. Posts are scheduled to LinkedIn two hours later, giving the marketing head a review window. A deduplication node ensures ideas never repeat and required content variations are always present.",
    result: "Zero manual effort, consistent brand output, and relevant content that drives real engagement and discussions. The system now runs fully independently after initial fine-tuning.",
  },
  {
    title: "Content Pipeline for SaaS Brand",
    description:
      "End-to-end automation that pulls topic ideas from Notion, drafts posts via AI, gets approval in Slack, and publishes to LinkedIn.",
    tags: ["n8n", "OpenAI", "Notion", "Slack"],
  },
  {
    title: "Weekly Post Scheduler",
    description:
      "A repeatable workflow that batches and schedules a week's worth of LinkedIn posts from a single Google Sheet input.",
    tags: ["Zapier", "Google Sheets", "Buffer"],
  },
  {
    title: "Thought Leadership Amplifier",
    description:
      "Automated repurposing system that turns long-form articles into multiple LinkedIn posts, each tailored for different audiences.",
    tags: ["Make", "OpenAI", "Airtable"],
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              A selection of automation projects I've built for creators and brands.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, i) => {
                const isExpanded = expandedIndex === i;
                const hasDetails = project.problem || project.solution || project.result;

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                    onClick={() => hasDetails && toggleExpand(i)}
                    className={`group border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors block ${hasDetails ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {hasDetails && (
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 mt-1"
                        >
                          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && hasDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 mb-4 pt-3 border-t border-border">
                            {project.problem && (
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Problem</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                              </div>
                            )}
                            {project.solution && (
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                              </div>
                            )}
                            {project.result && (
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Result</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{project.result}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
