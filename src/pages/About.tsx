import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex items-center">
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
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
