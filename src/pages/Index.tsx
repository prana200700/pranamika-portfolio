import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowDown, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";

/* ─── Animated counter ─── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = target / 120;
    const id = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Infinite marquee ─── */
const marqueeItems = [
  "LINKEDIN AUTOMATION", "CONTENT SYSTEMS", "AI AGENTS",
  "CAROUSEL PIPELINES", "SCHEDULED PUBLISHING", "PROMPT ENGINEERING",
  "B2B GROWTH", "CONTENT CALENDARS",
];

const Marquee = () => (
  <div className="overflow-hidden py-6 border-y border-border">
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...marqueeItems, ...marqueeItems].map((item, i) => (
        <span key={i} className="text-sm font-medium tracking-widest text-muted-foreground flex items-center gap-8">
          {item} <span className="text-primary/40">•</span>
        </span>
      ))}
    </motion.div>
  </div>
);

/* ─── Protocol layers ─── */
const layers = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "I study your current content workflow, posting habits, audience, and goals — identifying every bottleneck and missed opportunity.",
    details: ["Workflow mapping", "Content audit", "Goal alignment"],
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "I design a custom automation pipeline tailored to your voice, schedule, and platforms — every piece built to connect seamlessly.",
    details: ["Pipeline design", "Tool selection", "Template creation"],
  },
  {
    num: "03",
    title: "Build & Automate",
    desc: "From AI-powered drafting to scheduled publishing — I build the entire system so content flows without you lifting a finger.",
    details: ["n8n workflows", "AI agent setup", "API integrations"],
  },
  {
    num: "04",
    title: "Launch & Optimise",
    desc: "Your system goes live. I monitor performance, refine prompts, and iterate — so your content keeps improving on autopilot.",
    details: ["Performance tracking", "Prompt refinement", "Continuous iteration"],
  },
];

/* ─── For / Not For ─── */
const forYou = [
  "B2B founders who want LinkedIn consistency without daily effort",
  "Creators tired of manual posting and formatting",
  "Teams that need a scalable content engine, not one-off posts",
  "Anyone who values systems over hustle",
];

const notForYou = [
  "Looking for generic social media management",
  "Want viral hacks instead of sustainable systems",
  "Need someone to ghost-write without any automation",
  "Not ready to invest in a long-term content workflow",
];

const Index = () => {
  const fullName = "Pranamika";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showGradient, setShowGradient] = useState(true);
  const [activeLayer, setActiveLayer] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.96]);

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
      {/* ═══ HERO ═══ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-medium tracking-wider uppercase text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl"
        >
          Content systems for{" "}
          <span className="relative inline-block">
            <span className={`bg-gradient-to-r from-[hsl(330,80%,80%)] to-[hsl(270,60%,80%)] bg-clip-text text-transparent transition-opacity duration-1000 ${showGradient ? "opacity-100" : "opacity-0"}`}>
              founders
            </span>
            <span className={`absolute inset-0 text-primary transition-opacity duration-1000 ${showGradient ? "opacity-0" : "opacity-100"}`}>
              founders
            </span>
          </span>{" "}
          who build.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
        >
          I help B2B founders build a consistent LinkedIn presence through structured
          content systems and intelligent automation, without compromising their voice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="gap-2 text-base px-8">
            <Link to="/offerings">
              View Offerings <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee />

      {/* ═══ NAME + INTRO ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6"
          >
            LinkedIn Content Automation Specialist
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
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
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I design and build end-to-end content automation systems that replace manual
            workflows with intelligent, hands-off pipelines. From idea to published
            post — structured, scalable, and always on-brand.
          </motion.p>
        </div>
      </section>

      {/* ═══ IMPACT NUMBERS ═══ */}
      <section className="py-16 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 10, suffix: "+", label: "Projects Delivered" },
              { value: 30, suffix: "+", label: "Automations Built" },
              { value: 60, suffix: "x", label: "Engagement Boost" },
              { value: 100, suffix: "%", label: "Hands-off Pipelines" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="cursor-default"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE PROTOCOL ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3"
          >
            My Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-16"
          >
            The Content <br />
            <span className="bg-gradient-to-r from-[hsl(330,80%,80%)] to-[hsl(270,60%,80%)] bg-clip-text text-transparent">
              Automation Stack™
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: layer list */}
            <div className="space-y-4">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveLayer(i)}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeLayer === i
                      ? "border-primary/40 bg-card shadow-sm"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold tracking-wider transition-colors ${
                      activeLayer === i ? "text-primary" : "text-muted-foreground/50"
                    }`}>
                      LAYER {layer.num}
                    </span>
                    <h3 className={`font-semibold text-lg transition-colors ${
                      activeLayer === i ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {layer.title}
                    </h3>
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    className="h-0.5 mt-3 rounded-full bg-primary/60"
                    initial={{ width: "0%" }}
                    animate={{ width: activeLayer === i ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: active layer detail */}
            <div className="sticky top-24">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border border-border rounded-2xl p-8 bg-card"
              >
                <span className="text-6xl font-bold text-primary/10 font-mono">
                  {layers[activeLayer].num}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {layers[activeLayer].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {layers[activeLayer].desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layers[activeLayer].details.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED WORK ═══ */}
      <section className="py-24 border-t border-border px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3"
          >
            Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-16"
          >
            Strategic Impact
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: "LinkedIn Carousel System",
                client: "Calibr.ai",
                result: "Replaced a 3-person manual workflow with a fully automated carousel pipeline",
                metric: "100% automated",
                link: "/projects/calibr",
              },
              {
                title: "LinkedIn Content Automation",
                client: "B2B SaaS Founder",
                result: "Timezone-optimised scheduling with AI-generated content achieving 60x engagement boost",
                metric: "60x engagement",
                link: "/projects/linkedin-automation",
              },
              {
                title: "Automated Content Calendar",
                client: "Finance Content Creator",
                result: "Weekly content calendar generated every Sunday with platform-specific post ideas",
                metric: "Weekly autopilot",
                link: "/projects/content-calendar",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={project.link}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {project.client}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {project.metric}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 group-hover:translate-x-1 duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IS THIS FOR YOU? ═══ */}
      <section className="py-24 border-t border-border px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-center"
          >
            Is this right for you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-16 text-center max-w-xl mx-auto"
          >
            I build trust through clarity. My services aren't for everyone, and that's by design.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For you */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-2xl p-8 bg-card"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </span>
                This is for you if:
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Not for you */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-2xl p-8 bg-card"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </span>
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 border-t border-border px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            Ready to automate your{" "}
            <span className="bg-gradient-to-r from-[hsl(330,80%,80%)] to-[hsl(270,60%,80%)] bg-clip-text text-transparent">
              LinkedIn presence?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto"
          >
            Let's build a content system that works while you sleep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="gap-2 text-base px-8">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/projects">See My Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
