import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Eye,
  TrendingUp,
  Calendar,
  ArrowRight,
  PlusCircle,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Active Jobs",
    value: 12,
    change: "+2 this week",
    changeType: "positive" as const,
    icon: Briefcase,
  },
  {
    title: "Total Applications",
    value: 248,
    change: "+38 this week",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Profile Views",
    value: 1240,
    change: "+15% from last week",
    changeType: "positive" as const,
    icon: Eye,
  },
  {
    title: "Interviews Scheduled",
    value: 18,
    change: "5 this week",
    changeType: "neutral" as const,
    icon: Calendar,
  },
];

const recentJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    applications: 48,
    views: 320,
    status: "active",
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Product Manager",
    applications: 32,
    views: 210,
    status: "active",
    postedAt: "5 days ago",
  },
  {
    id: "3",
    title: "UX Designer",
    applications: 24,
    views: 156,
    status: "paused",
    postedAt: "1 week ago",
  },
];

const recentApplicants = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    experience: "5 years",
    match: 95,
    appliedAt: "2 hours ago",
  },
  {
    id: "2",
    name: "Michael Roberts",
    role: "Senior Frontend Developer",
    experience: "4 years",
    match: 88,
    appliedAt: "5 hours ago",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Product Manager",
    experience: "6 years",
    match: 92,
    appliedAt: "1 day ago",
  },
  {
    id: "4",
    name: "James Wilson",
    role: "UX Designer",
    experience: "3 years",
    match: 85,
    appliedAt: "2 days ago",
  },
];

export default function EmployerDashboard() {
  return (
    <DashboardLayout userRole="employer" userName="Acme Inc.">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Welcome back, Acme Inc.! 👋
          </motion.h1>
          <p className="section-subtitle">Here's an overview of your hiring activity.</p>
        </div>
        <Link to="/employer/post-job">
          <Button className="gap-2 rounded-xl shadow-glow">
            <PlusCircle className="w-5 h-5" />
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Jobs */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-semibold text-xl">Your Job Postings</h2>
            <Link to="/employer/jobs">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border/50 card-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.applications} applicants
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {job.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.postedAt}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      job.status === "active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {job.status === "active" ? "Active" : "Paused"}
                  </span>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border/50">
                  <Link to={`/employer/applicants?job=${job.id}`}>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      View Applicants
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="rounded-xl">
                    Edit Job
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Applicants */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-semibold text-xl">Recent Applicants</h2>
            <Link to="/employer/applicants">
              <Button variant="ghost" size="sm" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {recentApplicants.map((applicant, i) => (
              <motion.div
                key={applicant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-xl p-4 border border-border/50 card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-medium">
                    {applicant.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{applicant.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{applicant.role}</p>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                    {applicant.match}% match
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-gradient-to-br from-primary/10 to-coral/10 rounded-xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Hiring Insights</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avg. time to hire</span>
                <span className="font-semibold">14 days</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Response rate</span>
                <span className="font-semibold text-primary">92%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Candidate quality</span>
                <span className="font-semibold text-coral">Excellent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
