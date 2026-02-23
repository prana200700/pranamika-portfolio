import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const projects = [
  {
    title: "LinkedIn Carousel System - Calibr.ai",
    description:
      "Built a fully automated carousel pipeline for Calibr.ai that replaced their manual design-and-review process.",
    tags: ["AI Agents", "Google Sheets", "Google Drive", "LinkedIn API", "PDF Templating"],
    link: "/projects/calibr",
    metric: "100% automated",
  },
  {
    title: "LinkedIn Content Automation System - B2B SaaS Founder",
    description:
      "Automated a founder's LinkedIn content pipeline with timezone-optimised scheduling, achieving 60x more engagement and zero manual effort.",
    tags: ["n8n", "AI Agents", "Google Sheets", "LinkedIn API"],
    link: "/projects/linkedin-automation",
    metric: "60x engagement",
  },
  {
    title: "Automated Content Calendar System - Finance Content Creator",
    description:
      "Built an automated weekly content calendar for a finance creator, generating platform-specific post ideas for Instagram and LinkedIn every Sunday.",
    tags: ["AI Agents", "Prompt Engineering", "Instagram", "LinkedIn"],
    link: "/projects/content-calendar",
    metric: "Weekly autopilot",
  },
];

const impactStats = [
  { icon: TrendingUp, value: 60, suffix: "x", label: "Engagement increase" },
  { icon: Clock, value: 20, suffix: "+", label: "Hours saved / week" },
  { icon: Zap, value: 100, suffix: "%", label: "Automation rate" },
];

const Projects = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <PageTransition>
      <section>
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

            {/* Impact Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="border border-border rounded-xl p-4 bg-card hover:border-primary/30 transition-all text-center cursor-default"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 232, 243, 0.15)" }}
                  transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                  onHoverStart={() => setHoveredProject(i)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => project.link && navigate(project.link)}
                  className={`group border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors block relative overflow-hidden ${project.link ? "cursor-pointer" : ""}`}
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

                  {/* Key metric badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {project.metric}
                  </div>

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

                  {/* Hover progress bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary/60"
                    animate={{ width: hoveredProject === i ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-border p-12 text-center"
            style={{ background: 'radial-gradient(ellipse at center, rgba(253, 232, 243, 0.15), transparent 70%)' }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Have a similar challenge?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Let's explore how automation can transform your content workflow too.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Let's Discuss <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
