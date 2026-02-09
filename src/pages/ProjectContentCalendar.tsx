import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTransition from "@/components/PageTransition";
const tags = ["AI Agents", "Prompt Engineering", "Content Strategy", "Instagram", "LinkedIn"];
const ProjectContentCalendar = () => {
  return <PageTransition>
      <section className="min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl mx-auto px-6 w-full py-20">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            <Button asChild variant="ghost" size="sm" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
            </Button>

            <h1 className="text-4xl font-bold tracking-tight mb-4">Automated Content Calendar System  - Finance Creator<span className="text-primary">Finance Creator</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>)}
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Timeline:</h2>
                <p className="text-foreground font-medium">2 Weeks</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Client:</h2>
                <p className="text-foreground font-medium">Confidential</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Tools Used</h2>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["AI Agent", "Prompt Engineering", "Workflow Automation"].map(tool => <Badge key={tool} variant="secondary" className="text-xs font-normal">
                      {tool}
                    </Badge>)}
                </div>
              </div>
              <div className="border-t border-border" />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The client — a growing finance content creator — was seeing strong traction on both Instagram and LinkedIn and wanted to increase his posting frequency. However, ideation was the bottleneck. Finance is a saturated, repetitive niche that's inherently difficult to make engaging for a general audience. He needed fresh, non-repetitive ideas consistently. His Instagram audience was the younger generation — people who don't understand finance intricately — while his LinkedIn audience was a mix of his Instagram followers and professionals from his own field. He wanted a structured content calendar for both platforms, with post titles and ideas mapped to specific days.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">My Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I built an automated weekly content calendar system:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-3 space-y-2 ml-2">
                  <li>Conducted an in-depth requirements gathering — target audiences per platform, content types, and the kinds of variations he wanted (especially critical for LinkedIn).</li>
                  <li>Engineered a highly specialised prompt that generates platform-specific content ideas, mapping what to post on Instagram vs LinkedIn and on which day.</li>
                  <li>The workflow runs every Sunday, automatically generating the full content schedule for the upcoming week.</li>
                  <li>Each entry includes a post title, content idea, and the designated platform and day.</li>
                  <li>By offloading ideation entirely, the creator could redirect his time towards refining the quality of his content instead of brainstorming ideas.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Result</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With consistent, high-quality content going out on a structured schedule, the creator saw a <span className="text-foreground font-semibold">significant increase in followers</span> on both Instagram and LinkedIn. The time saved on ideation allowed him to focus entirely on content quality and audience engagement, accelerating his growth during a critical traction phase.
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
                        <TableCell className="font-medium text-foreground">Ideation Time</TableCell>
                        <TableCell className="text-muted-foreground">Hours spent brainstorming weekly</TableCell>
                        <TableCell className="text-muted-foreground">Zero — fully automated every Sunday</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Posting Frequency</TableCell>
                        <TableCell className="text-muted-foreground">Limited by idea generation</TableCell>
                        <TableCell className="text-muted-foreground">Increased across both platforms</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Content Strategy</TableCell>
                        <TableCell className="text-muted-foreground">Ad hoc, single-platform thinking</TableCell>
                        <TableCell className="text-muted-foreground">Platform-specific, audience-tailored calendar</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Follower Growth</TableCell>
                        <TableCell className="text-muted-foreground">Steady but slow</TableCell>
                        <TableCell className="text-muted-foreground">Significant increase on both Instagram & LinkedIn</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>;
};
export default ProjectContentCalendar;