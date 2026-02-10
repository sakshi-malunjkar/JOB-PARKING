import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Building2,
  Globe,
  Users,
  Calendar,
  Bookmark,
  Share2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const jobData = {
  id: "1",
  title: "Senior Product Designer",
  company: "Figma",
  companyLogo: "",
  location: "San Francisco, CA",
  salary: "$120K - $180K",
  type: "Full-time",
  experience: "5+ years",
  postedAt: "2 days ago",
  applicants: 48,
  website: "https://figma.com",
  about:
    "Figma is a collaborative interface design tool that's redefining how teams create together. We're looking for a Senior Product Designer to help shape the future of design tools.",
  description: `
We're looking for a Senior Product Designer to join our growing design team. You'll work closely with product managers, engineers, and other designers to create intuitive, delightful experiences for millions of users.

**What you'll do:**
- Lead the design of major product features from concept to launch
- Collaborate with cross-functional teams to define product requirements
- Create wireframes, prototypes, and high-fidelity designs
- Conduct user research and usability testing
- Mentor junior designers and contribute to team culture

**What we're looking for:**
- 5+ years of product design experience
- Strong portfolio demonstrating end-to-end product design work
- Proficiency in Figma (of course!) and other design tools
- Experience with design systems and component libraries
- Excellent communication and presentation skills
- Passion for creating intuitive user experiences
  `,
  requirements: [
    "5+ years of product design experience",
    "Strong portfolio with end-to-end design projects",
    "Proficiency in modern design tools",
    "Experience with design systems",
    "Excellent communication skills",
    "Bachelor's degree in Design or related field",
  ],
  benefits: [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Unlimited PTO",
    "Remote-first culture",
    "Learning & development budget",
    "Home office stipend",
  ],
};

export default function JobDetailsPage() {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <DashboardLayout userRole="candidate" userName="John Doe">
      {/* Back Button */}
      <Link
        to="/candidate/jobs"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Jobs
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h1 className="font-display text-2xl font-bold">{jobData.title}</h1>
                <p className="text-lg text-muted-foreground mt-1">{jobData.company}</p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4" />
                    {jobData.salary}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {jobData.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {jobData.postedAt}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/50">
              {applied ? (
                <Button disabled className="flex-1 h-12 rounded-xl gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Applied Successfully
                </Button>
              ) : (
                <Button onClick={handleApply} className="flex-1 h-12 rounded-xl shadow-glow">
                  Apply Now
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                className={cn("h-12 w-12 rounded-xl", saved && "bg-primary/10 border-primary")}
                onClick={() => setSaved(!saved)}
              >
                <Bookmark className={cn("w-5 h-5", saved && "fill-primary text-primary")} />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* About Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="font-display font-semibold text-xl mb-4">About {jobData.company}</h2>
            <p className="text-muted-foreground leading-relaxed">{jobData.about}</p>
          </motion.div>

          {/* Job Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="font-display font-semibold text-xl mb-4">Job Description</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              {jobData.description.split("\n").map((line, i) => {
                if (line.startsWith("**")) {
                  return (
                    <h3 key={i} className="font-semibold text-foreground mt-4 mb-2">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (line.startsWith("-")) {
                  return (
                    <li key={i} className="ml-4">
                      {line.replace("-", "").trim()}
                    </li>
                  );
                }
                return line ? <p key={i}>{line}</p> : null;
              })}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="font-display font-semibold text-xl mb-4">Requirements</h2>
            <ul className="space-y-3">
              {jobData.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h2 className="font-display font-semibold text-xl mb-4">Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {jobData.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Job Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Job Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Posted</p>
                  <p className="font-medium">{jobData.postedAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Employment</p>
                  <p className="font-medium">{jobData.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-golden/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">{jobData.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Applicants</p>
                  <p className="font-medium">{jobData.applicants} applied</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Company Info</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                <Building2 className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">{jobData.company}</p>
                <p className="text-sm text-muted-foreground">Design Tools</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <a href={jobData.website} className="text-primary hover:underline">
                  {jobData.website}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>500-1000 employees</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{jobData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Similar Jobs CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-coral/10 rounded-2xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-2">Not the right fit?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Browse more jobs that match your skills and preferences.
            </p>
            <Link to="/candidate/jobs">
              <Button variant="outline" className="w-full rounded-xl">
                View Similar Jobs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
