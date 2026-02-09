import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "LinkedIn Carousel Engine — Calibr.ai",
    description:
      "Built a fully automated carousel pipeline for Calibr.ai that replaced their manual design-and-review process.",
    tags: ["AI Agents", "Google Sheets", "Google Drive", "LinkedIn API", "PDF Templating"],
    link: "/projects/calibr",
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
  const navigate = useNavigate();

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
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                  onClick={() => project.link && navigate(project.link)}
                  className={`group border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors block ${project.link ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
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
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
