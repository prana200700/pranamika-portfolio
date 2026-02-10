import { motion } from "framer-motion";
import { ArrowRight, Workflow, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageTransition from "@/components/PageTransition";

const offerings = [
  {
    icon: Workflow,
    title: "End-to-End Content Automation",
    tagline: "From idea to live post — zero manual steps.",
    description:
      "A complete automation setup covering content drafting, formatting, file generation, and scheduled publishing. You get a hands-off pipeline that runs on autopilot.\n\nUsed to help founders publish consistently without spending daily time on LinkedIn.",
  },
  {
    icon: FileText,
    title: "LinkedIn Carousel & Post Workflows",
    tagline: "Carousels and posts, generated and published on schedule.",
    description:
      "Custom LinkedIn workflows that handle carousel creation, post formatting, and timed publishing — so your feed stays active without daily effort.\n\nKeeps your LinkedIn feed active and on-schedule without last-minute scrambling.",
  },
  {
    icon: Settings,
    title: "Content Process Standardisation",
    tagline: "Turn your messy workflow into a repeatable system.",
    description:
      "I audit your current process, build templates and rules around it, and hand you back a clean, scalable content engine.",
  },
];

const Offerings = () => {
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
              My <span className="text-primary">Offerings</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Services designed to make your content workflow effortless and scalable.
            </p>

            <div className="space-y-6">
              {offerings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(253, 232, 243, 0.15)" }}
                  transition={{ duration: 0.4, delay: 0.15 * (i + 1) }}
                  className="border border-border rounded-xl p-6 bg-card hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(to bottom, rgba(253, 232, 243, 0.9), rgba(237, 233, 254, 0.5))' }}>
                      <offering.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{offering.title}</h3>
                      <p className="text-sm text-primary font-medium mb-2">{offering.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Let's Work Together <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-20"
            >
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-linkedin" className="border-border">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    Why LinkedIn specifically?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Today, the power of the corporate social world lies in LinkedIn. SEO is becoming
                    more and more obsolete with the rise of AI models. LinkedIn is the future of
                    corporate recognition and interaction.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="approach" className="border-border">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    How is your approach different from typical LinkedIn content marketing?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    I focus on building repeatable systems rather than manual posting. My work combines
                    content strategy with automation, templates, and API-driven workflows, enabling
                    consistent output, clarity of voice, and scalability over time — without compromising
                    quality or intent.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="authenticity" className="border-border">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    Why automation for content — doesn't it reduce authenticity?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Used thoughtfully, automation removes operational friction, not creative intent.
                    By automating structure and execution, more attention can be given to narrative,
                    tone, and strategy. The result is content that remains human-led but is supported
                    by systems designed for consistency and scale.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Offerings;
