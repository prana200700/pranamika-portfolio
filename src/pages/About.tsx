import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
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
                <div key={stat.label} className="rounded-xl p-5 text-center" style={{ background: 'radial-gradient(circle, rgba(253, 232, 243, 0.7), rgba(237, 233, 254, 0.3))' }}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16">
              <h2 className="text-2xl font-medium tracking-tight mb-4">
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
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
