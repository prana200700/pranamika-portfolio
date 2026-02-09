import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTransition from "@/components/PageTransition";
const tags = ["AI Agents", "n8n", "Google Sheets", "LinkedIn API", "Prompt Engineering"];
const ProjectLinkedInAutomation = () => {
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

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              LinkedIn Content Automation System -    <span className="text-primary">B2B SaaS Founder</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>)}
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Timeline:</h2>
                <p className="text-foreground font-medium">3 Weeks</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Client:</h2>
                <p className="text-foreground font-medium">Confidential</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Tools Used</h2>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["n8n", "AI Agent", "Google Sheets", "LinkedIn API"].map(tool => <Badge key={tool} variant="secondary" className="text-xs font-normal">
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
                  The client — a founder of a B2B SaaS startup — wanted more engagement on his LinkedIn page but couldn't find the time to post regularly. His company's clients were US-based, so he needed to post during US lunch hours for maximum visibility. The catch? US lunch time falls in the late evening in India — a highly inconvenient time to manually create and publish content. He wanted posts to go out every Monday, Wednesday, and Friday at 7 PM IST (US lunch time), each tailored to his three specific target audiences, with a defined tone, writing style, and varying post lengths across the three days.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">My Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I built an automated content pipeline that handles everything from ideation to publishing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-3 space-y-2 ml-2">
                  <li>Content generation is scheduled for 6 PM IST — one hour before the posting window — using a highly specialised and engineered AI agent prompt tailored to the client's exact requirements.</li>
                  <li>The AI agent creates content aligned with three distinct target audiences, the client's preferred tone and writing style, and varying post lengths for each day of the week.</li>
                  <li>Posts follow diverse formats — storytelling, informational, thought-provoking — to keep the feed fresh and engaging.</li>
                  <li>A deduplication node ensures no post idea is ever repeated.</li>
                  <li>Generated content is stored in a Google Sheet for documentation and review purposes.</li>
                  <li>Once fine-tuned, posts are automatically published to the client's LinkedIn page via the LinkedIn API at 7 PM IST.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  During the initial phase, the client reviewed generated content within the one-hour window to fine-tune the agent. The system now runs fully independently.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Result</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The automation delivered a <span className="text-foreground font-semibold">60x increase in engagement</span> compared to before. The client reported that people started texting him directly with their opinions on his posts — a level of interaction he'd never experienced. An old friend even reconnected through one of these posts, and they went on to collaborate on the sales front of their respective companies.
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
                        <TableCell className="font-medium text-foreground">Posting Frequency</TableCell>
                        <TableCell className="text-muted-foreground">Irregular, whenever time allowed</TableCell>
                        <TableCell className="text-muted-foreground">3x per week, consistently on schedule</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Manual Effort</TableCell>
                        <TableCell className="text-muted-foreground">100%</TableCell>
                        <TableCell className="text-muted-foreground">0%</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Engagement</TableCell>
                        <TableCell className="text-muted-foreground">Low — inconsistent posting</TableCell>
                        <TableCell className="text-muted-foreground">60x increase — direct messages & collaborations</TableCell>
                      </TableRow>
                      <TableRow className="border-border">
                        <TableCell className="font-medium text-foreground">Timezone Constraint</TableCell>
                        <TableCell className="text-muted-foreground">Missed US audience peak hours</TableCell>
                        <TableCell className="text-muted-foreground">Posts hit US lunch time every time</TableCell>
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
export default ProjectLinkedInAutomation;