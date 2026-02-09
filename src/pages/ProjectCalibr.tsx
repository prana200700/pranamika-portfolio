import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTransition from "@/components/PageTransition";

const tags = ["AI Agents", "Google Sheets", "Google Drive", "LinkedIn API", "PDF Templating"];

const ProjectCalibr = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl mx-auto px-6 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button asChild variant="ghost" size="sm" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
            </Button>

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              LinkedIn Carousel Engine — <span className="text-primary">Calibr.ai</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="border border-border rounded-xl p-5 bg-card text-center">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Timeline</h2>
                <p className="text-foreground font-medium">4 Weeks</p>
              </div>
              <div className="border border-border rounded-xl p-5 bg-card text-center">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Client</h2>
                <p className="text-foreground font-medium">Calibr.ai</p>
              </div>
              <div className="border border-border rounded-xl p-5 bg-card text-center">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Tools Used</h2>
                <div className="flex flex-wrap gap-1.5 mt-1 justify-center">
                  {["n8n", "Claude API", "OpenAI API", "Google Sheets", "Google Drive", "LinkedIn API"].map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs font-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Calibr.ai had a small digital marketing team responsible for creating LinkedIn carousels. The process was slow and inconsistent — different team members had varying aesthetic approaches despite following brand guidelines. Content ideation was often outdated or generic. They needed to templatise their carousels and post them regularly on two specific days of the week at a time suitable for audiences across the globe.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Their Manual Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  One person from the digital marketing team would ideate content and hand it to the design team. The designers worked with brand Canva templates, but placement of text and visuals on the template still varied depending on the team member — consistency was hard to maintain. After creation, the carousel was sent to the marketing head for review, and after a few iterations, it was finally posted.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">My Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I designed a fully automated workflow that replaces every manual step with AI agents, nodes, and integrations. The workflow runs every Tuesday and Thursday at a set time:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-3 space-y-2 ml-2">
                  <li>AI agents generate content aligned with the company's specific requirements — target audiences, tone, writing style, and content variations.</li>
                  <li>Content is stored in a Google Sheet for tracking and reference.</li>
                  <li>Another AI agent retrieves the data and generates structured content for each carousel slide.</li>
                  <li>A deduplication node ensures ideas are never repeated and required variations are always present.</li>
                  <li>Slide content is fed into templatised code that generates a consistent, branded PDF.</li>
                  <li>The PDF is stored in Google Drive and scheduled to post to LinkedIn two hours later.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  During the first few weeks, the marketing head reviewed each generated PDF within the two-hour window to monitor quality and fine-tune the agent. Now the system runs fully independently.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Result</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The carousel engine has eliminated human error and latency entirely. Content is consistently on-brand, relevant, and far from machine-like — thanks to detailed onboarding questions I asked the team about their preferred tones, writing style, and target audience. The carousels are generating real engagement and sparking discussions in the comments section.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Before vs After</h2>
                <div className="border border-border rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border">
                        <TableHead className="text-muted-foreground font-semibold">Metric</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">Before</TableHead>
                        <TableHead className="text-muted-foreground font-semibold">After</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Time per Carousel</TableCell>
                        <TableCell className="text-muted-foreground">1–1.5 days</TableCell>
                        <TableCell className="text-muted-foreground">1–2 hours on n8n, 0 manual hours</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Manual Work</TableCell>
                        <TableCell className="text-muted-foreground">100%</TableCell>
                        <TableCell className="text-muted-foreground">0%</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Posting & Content Consistency</TableCell>
                        <TableCell className="text-muted-foreground">No</TableCell>
                        <TableCell className="text-muted-foreground">Yes</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Engagement</TableCell>
                        <TableCell className="text-muted-foreground">Lower — inconsistent, generic content</TableCell>
                        <TableCell className="text-muted-foreground">Increased — consistent, targeted content</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectCalibr;
