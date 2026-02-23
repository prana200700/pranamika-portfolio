import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, GraduationCap, Briefcase, Music, Pen, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

const timeline = [
  {
    icon: GraduationCap,
    title: "English (Honours) — University of Delhi",
    desc: "Built a strong foundation in storytelling, clarity, and written communication.",
    year: "Undergrad",
  },
  {
    icon: GraduationCap,
    title: "MBA Marketing — IIM Bodh Gaya",
    desc: "Developed strategic and structured thinking for marketing systems.",
    year: "Postgrad",
  },
  {
    icon: Briefcase,
    title: "Content Marketing → Automation",
    desc: "Evolved from traditional content marketing into building automated content pipelines.",
    year: "Career Shift",
  },
  {
    icon: Briefcase,
    title: "LinkedIn Content Automation Specialist",
    desc: "Now designing end-to-end content systems for B2B founders and creators.",
    year: "Current",
  },
];

const funFacts = [
  { icon: Music, label: "Classically Trained Singer", desc: "Hindustani classical music informs my sense of rhythm and structure." },
  { icon: Pen, label: "Poet & Writer", desc: "Words are my first medium — poetry sharpens my content instincts." },
  { icon: Camera, label: "Visual Storyteller", desc: "I think in frames and narratives, not just text and metrics." },
];

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const [revealedFacts, setRevealedFacts] = useState<Set<number>>(new Set());

  const toggleFact = (i: number) => {
    setRevealedFacts(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <PageTransition>
      {/* Intro */}
      <section>
        <div className="max-w-5xl mx-auto px-6 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-8">
              About <span className="text-primary">Me</span>
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm Pranamika — a <span className="text-foreground font-medium">LinkedIn Content Automation Specialist</span> with 
                a deep foundation in marketing strategy, storytelling, 
                and structured content systems. I design and build systems that remove the friction 
                from content creation, turning chaotic manual workflows into <span className="text-foreground font-medium">smooth, 
                automated pipelines</span>.
              </p>
              <p>
                Over time, my work has naturally evolved from traditional content marketing 
                into automated content marketing. I operate at the 
                intersection of content strategy and automation tooling — because I believe 
                great content shouldn't demand great effort every single time. It should flow 
                from <span className="text-foreground font-medium">well-designed systems</span>.
              </p>
              <p>
                From carousel generation to scheduled posting to end-to-end 
                content workflows, I help creators and businesses publish consistently — without 
                burning out. And as a classically trained singer, poet, and visual storyteller, 
                I bring both <span className="text-foreground font-medium">artistic sensitivity and structural clarity</span> to 
                everything I build.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Projects", value: 10, suffix: "+" },
              { label: "Clients", value: 5, suffix: "+" },
              { label: "Automations", value: 30, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="rounded-xl p-5 text-center border border-border bg-card hover:border-primary/30 transition-all cursor-default"
              >
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Journey Timeline */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            My <span className="text-primary">Journey</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Click each milestone to explore the details.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  onClick={() => setActiveTimeline(activeTimeline === i ? null : i)}
                  className="relative pl-16 cursor-pointer group"
                >
                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: activeTimeline === i ? 1.2 : 1 }}
                    className={`absolute left-3 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      activeTimeline === i ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border group-hover:border-primary"
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                  </motion.div>

                  <div className="border border-border rounded-xl p-5 bg-card hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <motion.div
                      initial={false}
                      animate={{ height: activeTimeline === i ? "auto" : 0, opacity: activeTimeline === i ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Work — Interactive Reveal Cards */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Beyond <span className="text-primary">Work</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Tap each card to reveal more about what shapes my creative lens.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {funFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.04, y: -4 }}
                onClick={() => toggleFact(i)}
                className="border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-all cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: revealedFacts.has(i) ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(to bottom, rgba(253, 242, 248, 0.9), rgba(237, 233, 254, 0.3))' }}
                >
                  <fact.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="font-semibold mb-2">{fact.label}</h3>

                <motion.p
                  initial={false}
                  animate={{ height: revealedFacts.has(i) ? "auto" : 0, opacity: revealedFacts.has(i) ? 1 : 0 }}
                  className="text-muted-foreground text-sm leading-relaxed overflow-hidden"
                >
                  {fact.desc}
                </motion.p>

                {!revealedFacts.has(i) && (
                  <p className="text-xs text-muted-foreground/60 mt-2">Tap to reveal →</p>
                )}

                {/* Reveal progress bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary/60"
                  animate={{ width: revealedFacts.has(i) ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
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
              Want to work together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              I'd love to hear about your content challenges and explore how automation can help.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
