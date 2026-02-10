import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Mail,
  Calendar,
  Star,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const statusFilters = [
  { id: "all", label: "All Applicants" },
  { id: "new", label: "New" },
  { id: "reviewing", label: "Reviewing" },
  { id: "shortlisted", label: "Shortlisted" },
  { id: "interviewed", label: "Interviewed" },
  { id: "rejected", label: "Rejected" },
];

const jobs = [
  { id: "all", title: "All Jobs" },
  { id: "1", title: "Senior Frontend Developer" },
  { id: "2", title: "Product Manager" },
  { id: "3", title: "UX Designer" },
];

const applicants = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    role: "Senior Frontend Developer",
    experience: "5 years",
    skills: ["React", "TypeScript", "Node.js"],
    match: 95,
    status: "new",
    appliedAt: "2 hours ago",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Roberts",
    email: "m.roberts@email.com",
    role: "Senior Frontend Developer",
    experience: "4 years",
    skills: ["React", "Vue.js", "Python"],
    match: 88,
    status: "reviewing",
    appliedAt: "5 hours ago",
    rating: 4,
  },
  {
    id: "3",
    name: "Emily Watson",
    email: "e.watson@email.com",
    role: "Product Manager",
    experience: "6 years",
    skills: ["Strategy", "Analytics", "Agile"],
    match: 92,
    status: "shortlisted",
    appliedAt: "1 day ago",
    rating: 5,
  },
  {
    id: "4",
    name: "James Wilson",
    email: "j.wilson@email.com",
    role: "UX Designer",
    experience: "3 years",
    skills: ["Figma", "User Research", "Prototyping"],
    match: 85,
    status: "interviewed",
    appliedAt: "2 days ago",
    rating: 4,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "l.thompson@email.com",
    role: "Senior Frontend Developer",
    experience: "2 years",
    skills: ["React", "CSS", "JavaScript"],
    match: 72,
    status: "rejected",
    appliedAt: "3 days ago",
    rating: 3,
  },
];

const statusConfig = {
  new: { label: "New", color: "bg-coral/10 text-coral" },
  reviewing: { label: "Reviewing", color: "bg-golden/20 text-golden" },
  shortlisted: { label: "Shortlisted", color: "bg-primary/10 text-primary" },
  interviewed: { label: "Interviewed", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  rejected: { label: "Rejected", color: "bg-muted text-muted-foreground" },
};

export default function ApplicantsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedJob, setSelectedJob] = useState("all");
  const [expandedApplicant, setExpandedApplicant] = useState<string | null>(null);

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || applicant.status === selectedStatus;
    const matchesJob =
      selectedJob === "all" ||
      applicant.role.toLowerCase().includes(jobs.find((j) => j.id === selectedJob)?.title.toLowerCase() || "");
    return matchesSearch && matchesStatus && matchesJob;
  });

  return (
    <DashboardLayout userRole="employer" userName="Acme Inc.">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Applicants
        </motion.h1>
        <p className="section-subtitle">Review and manage candidates for your positions.</p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 border border-border/50 mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search applicants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-xl"
            />
          </div>

          {/* Job Filter */}
          <select
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            className="h-12 px-4 rounded-xl bg-background border border-input min-w-[200px]"
          >
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </div>

        {/* Status Tabs */}
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((status) => {
            const count =
              status.id === "all"
                ? applicants.length
                : applicants.filter((a) => a.status === status.id).length;
            return (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2",
                  selectedStatus === status.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {status.label}
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-xs",
                    selectedStatus === status.id
                      ? "bg-primary-foreground/20"
                      : "bg-foreground/10"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Applicants List */}
      <div className="space-y-4">
        {filteredApplicants.map((applicant, i) => {
          const isExpanded = expandedApplicant === applicant.id;
          const status = statusConfig[applicant.status as keyof typeof statusConfig];

          return (
            <motion.div
              key={applicant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden"
            >
              {/* Main Row */}
              <div
                className="p-5 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => setExpandedApplicant(isExpanded ? null : applicant.id)}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-semibold">
                    {applicant.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{applicant.name}</h3>
                      <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", status.color)}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{applicant.role}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{applicant.experience} experience</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {applicant.appliedAt}
                      </span>
                    </div>
                  </div>

                  {/* Match Score */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{applicant.match}%</div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={cn(
                          "w-4 h-4",
                          j < applicant.rating
                            ? "text-golden fill-current"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>

                  {/* Expand Icon */}
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform",
                      isExpanded && "rotate-180"
                    )}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5 pt-2 border-t border-border/50 bg-muted/20"
                >
                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {applicant.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Contact</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {applicant.email}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                    <Button size="sm" className="rounded-xl gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Interview
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-xl gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-xl gap-2">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-xl gap-2 text-primary hover:bg-primary/10"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Shortlist
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-xl gap-2 text-destructive hover:bg-destructive/10"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {filteredApplicants.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-card rounded-2xl border border-border/50"
          >
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">No applicants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
