import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  Eye,
  TrendingUp,
  Calendar,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import ApplicationCard from "@/components/ui/ApplicationCard";
import JobCard from "@/components/ui/JobCard";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Applications Sent",
    value: 24,
    change: "+3 this week",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    title: "Profile Views",
    value: 156,
    change: "+12% from last week",
    changeType: "positive" as const,
    icon: Eye,
  },
  {
    title: "Interviews Scheduled",
    value: 5,
    change: "2 this week",
    changeType: "neutral" as const,
    icon: Calendar,
  },
  {
    title: "Jobs Saved",
    value: 18,
    change: "5 new matches",
    changeType: "positive" as const,
    icon: Briefcase,
  },
];

const recentApplications = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    appliedAt: "2 days ago",
    status: "reviewing" as const,
  },
  {
    id: "2",
    jobTitle: "Full Stack Engineer",
    company: "StartUp Hub",
    appliedAt: "5 days ago",
    status: "interview" as const,
  },
  {
    id: "3",
    jobTitle: "React Developer",
    company: "Digital Agency",
    appliedAt: "1 week ago",
    status: "pending" as const,
  },
];

const recommendedJobs = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "Figma",
    location: "San Francisco, CA",
    salary: "$120K - $180K",
    type: "Full-time" as const,
    postedAt: "2 days ago",
    featured: true,
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Stripe",
    location: "Remote",
    salary: "$140K - $200K",
    type: "Full-time" as const,
    postedAt: "3 days ago",
  },
];

export default function CandidateDashboard() {
  return (
    <DashboardLayout userRole="candidate" userName="Sakshi Malunjkar">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Welcome back, Sakshi! 👋
        </motion.h1>
        <p className="section-subtitle">Here's what's happening with your job search.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-semibold text-xl">Recent Applications</h2>
            <Link to="/candidate/applications">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentApplications.map((app, i) => (
              <ApplicationCard key={app.id} {...app} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Completion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Profile Completion</h3>
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">75% Complete</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Add your skills to improve your profile.
              </p>
              <Link to="/candidate/profile">
                <Button variant="outline" size="sm" className="mt-4 w-full rounded-xl">
                  Complete Profile
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/candidate/jobs"
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Browse Jobs</span>
              </Link>
              <Link
                to="/messages"
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <FileText className="w-5 h-5 text-coral" />
                <span className="text-sm font-medium">View Messages</span>
              </Link>
              <Link
                to="/candidate/profile"
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <TrendingUp className="w-5 h-5 text-golden" />
                <span className="text-sm font-medium">Update Resume</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-semibold text-xl">Recommended for You</h2>
          <Link to="/candidate/jobs">
            <Button variant="ghost" size="sm" className="gap-2">
              View All Jobs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendedJobs.map((job, i) => (
            <JobCard key={job.id} {...job} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
