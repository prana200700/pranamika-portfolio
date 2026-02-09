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
  const radius = 170;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const delay = index * 0.02;
  const opacity = useTransform(
    scrollYProgress,
    [0.1 + delay, 0.25 + delay, 0.65 - delay, 0.8 - delay],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1 + delay, 0.25 + delay, 0.65 - delay, 0.8 - delay],
    [0.2, 1, 1, 0.2]
  );

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
      <div
        className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center"
        title={name}
      >
        <img
          src={logo}
          alt={name}
          className="w-7 h-7"
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
  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.65, 0.8], [0, 0.3, 0.3, 0]);
  return (
    <motion.div
      className="absolute rounded-full border border-primary/20"
      style={{
        left: "calc(50% - 170px)",
        top: "calc(50% - 170px)",
        width: 340,
        height: 340,
        opacity,
      }}
    />
  );
};

const About = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: orbitRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const centerScale = useTransform(scrollYProgress, [0.1, 0.25, 0.65, 0.8], [1, 0.88, 0.88, 1]);

  return (
    <PageTransition>
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

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "Projects", value: "20+" },
                { label: "Clients", value: "15+" },
                { label: "Automations", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="border border-border rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                Education
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My academic background combines language and marketing. I studied English (Honours)
                at the University of Delhi, building a strong foundation in storytelling and clarity,
                and later completed an MBA in Marketing at the Indian Institute of Management Bodh
                Gaya, where I developed strategic and structured thinking. Together, these experiences
                shape my approach to marketing as a balance of creativity and scalable systems.
              </p>
            </div>
          </motion.div>

          {/* Orbit section - tall enough for scroll tracking */}
          <div ref={orbitRef} className="py-32 flex justify-center" style={{ minHeight: "80vh" }}>
            <div className="sticky top-1/4 relative" style={{ width: 420, height: 420 }}>
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

              {/* Tool names in center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ scale: centerScale }}
              >
                <h3 className="text-3xl font-bold text-primary">My Tools</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
