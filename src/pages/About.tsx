import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

const stackLogos = [
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg" },
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" },
  { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
  { name: "Claude", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Sheets", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlesheets.svg" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" },
];

const OrbitingLogo = ({
  logo,
  name,
  index,
  total,
  scrollYProgress,
}: {
  logo: string;
  name: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        left: `calc(50% + ${x}px - 20px)`,
        top: `calc(50% + ${y}px - 20px)`,
        opacity,
        scale,
      }}
    >
      <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center backdrop-blur-sm" title={name}>
        <img
          src={logo}
          alt={name}
          className="w-5 h-5"
          style={{ filter: "brightness(0) invert(1)" }}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent && !parent.querySelector("span")) {
              const fallback = document.createElement("span");
              fallback.textContent = name.charAt(0);
              fallback.className = "text-primary font-bold text-sm";
              parent.appendChild(fallback);
            }
          }}
        />
      </div>
    </motion.div>
  );
};

const OrbitRing = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [0, 0.4, 0.4, 0]);
  return (
    <motion.div
      className="absolute rounded-full border border-border/30"
      style={{
        left: "calc(50% - 180px)",
        top: "calc(50% - 180px)",
        width: 360,
        height: 360,
        opacity,
      }}
    />
  );
};

const About = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: orbitRef,
    offset: ["start end", "end start"],
  });

  const statsScale = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [1, 0.85, 0.85, 1]);

  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)]">
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
                I'm Pranamika — a LinkedIn Content Automation Specialist. I design and build
                systems that take the pain out of content creation, turning chaotic manual
                workflows into smooth, automated pipelines.
              </p>
              <p>
                My work sits at the intersection of content strategy and automation tooling.
                I believe great content shouldn't require great effort every single time — it
                should flow from well-designed systems.
              </p>
              <p>
                Whether it's carousel generation, scheduled posting, or end-to-end content
                workflows, I help creators and businesses publish consistently without burning out.
              </p>
            </div>
          </motion.div>

          {/* Orbit section */}
          <div ref={orbitRef} className="mt-20 mb-20 flex justify-center">
            <div className="relative" style={{ width: 420, height: 420 }}>
              <OrbitRing scrollYProgress={scrollYProgress} />

              {stackLogos.map((item, i) => (
                <OrbitingLogo
                  key={item.name}
                  logo={item.logo}
                  name={item.name}
                  index={i}
                  total={stackLogos.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}

              {/* Stats in center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ scale: statsScale }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Projects", value: "20+" },
                    { label: "Clients", value: "15+" },
                    { label: "Automations", value: "50+" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-border rounded-xl p-4 text-center bg-background"
                    >
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
