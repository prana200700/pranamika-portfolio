import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Repeat, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
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

const processSteps = [
  { icon: BarChart3, title: "Audit", desc: "Analyze your current content workflow and identify bottlenecks" },
  { icon: Zap, title: "Automate", desc: "Build custom pipelines that handle creation, formatting & publishing" },
  { icon: Repeat, title: "Scale", desc: "Your system runs on autopilot — consistently, without burnout" },
];

const testimonials = [
  {
    quote: "Pranamika transformed our entire content pipeline. What used to take us hours now runs automatically.",
    name: "B2B SaaS Founder",
    role: "LinkedIn Automation Client",
  },
  {
    quote: "The carousel system she built for us replaced a 3-person manual workflow. Incredible results.",
    name: "Calibr.ai Team",
    role: "Content Automation Client",
  },
  {
    quote: "Finally, a system that lets me focus on strategy instead of spending hours formatting posts.",
    name: "Finance Content Creator",
    role: "Content Calendar Client",
  },
];

const featuredProjects = [
  { title: "LinkedIn Carousel System", client: "Calibr.ai", metric: "100% automated", link: "/projects/calibr" },
  { title: "Content Automation", client: "B2B SaaS Founder", metric: "60x engagement", link: "/projects/linkedin-automation" },
  { title: "Content Calendar", client: "Finance Creator", metric: "Weekly autopilot", link: "/projects/content-calendar" },
];

const Index = () => {
  const fullName = "Pranamika";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showGradient, setShowGradient] = useState(true);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
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

      {/* Impact Stats */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 10, suffix: "+", label: "Projects Delivered" },
              { value: 30, suffix: "+", label: "Automations Built" },
              { value: 60, suffix: "x", label: "Engagement Boost" },
              { value: 100, suffix: "%", label: "Hands-off Pipelines" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="text-center p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all cursor-default"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work — Interactive Process */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            How I <span className="text-primary">Work</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            A simple three-step process. Hover over each step to learn more.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                onHoverStart={() => setActiveStep(i)}
                onHoverEnd={() => setActiveStep(null)}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-all cursor-pointer overflow-hidden group"
              >
                {/* Step number badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {i + 1}
                </div>

                <motion.div
                  animate={{ rotate: activeStep === i ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(to bottom, rgba(253, 242, 248, 0.9), rgba(237, 233, 254, 0.3))' }}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>

                {/* Progress bar that fills on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary/60"
                  initial={{ width: "0%" }}
                  animate={{ width: activeStep === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-primary">Work</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Click any project to see the full case study.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="group"
              >
                <Link to={project.link} className="block border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-all h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Completed</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.metric}
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-12"
          >
            What Clients <span className="text-primary">Say</span>
          </motion.h2>

          <div className="relative max-w-2xl">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: activeTestimonial === i ? 1 : 0,
                  y: activeTestimonial === i ? 0 : 20,
                  position: activeTestimonial === i ? "relative" as const : "absolute" as const,
                }}
                transition={{ duration: 0.5 }}
                className={`border border-border rounded-xl p-8 bg-card ${activeTestimonial !== i ? "pointer-events-none top-0 left-0 right-0" : ""}`}
              >
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}

            {/* Testimonial dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === i ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border p-12 text-center"
            style={{ background: 'radial-gradient(ellipse at center, rgba(253, 232, 243, 0.15), transparent 70%)' }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to automate your LinkedIn presence?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Let's build a content system that works while you sleep.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">See My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
