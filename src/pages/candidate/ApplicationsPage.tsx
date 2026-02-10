import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ApplicationCard from "@/components/ui/ApplicationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const statusFilters = [
  { id: "all", label: "All Applications" },
  { id: "pending", label: "Pending" },
  { id: "reviewing", label: "Under Review" },
  { id: "interview", label: "Interview" },
  { id: "offered", label: "Offered" },
  { id: "rejected", label: "Rejected" },
];

const applications = [
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
  {
    id: "4",
    jobTitle: "Software Engineer",
    company: "Google",
    appliedAt: "2 weeks ago",
    status: "offered" as const,
  },
  {
    id: "5",
    jobTitle: "Product Designer",
    company: "Figma",
    appliedAt: "3 weeks ago",
    status: "rejected" as const,
  },
  {
    id: "6",
    jobTitle: "Backend Developer",
    company: "Stripe",
    appliedAt: "1 month ago",
    status: "reviewing" as const,
  },
];

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = statusFilters.map((filter) => ({
    ...filter,
    count:
      filter.id === "all"
        ? applications.length
        : applications.filter((a) => a.status === filter.id).length,
  }));

  return (
    <DashboardLayout userRole="candidate" userName="John Doe">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          My Applications
        </motion.h1>
        <p className="section-subtitle">Track and manage your job applications.</p>
      </div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 border border-border/50 mb-8"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-xl"
            />
          </div>
        </div>

        {/* Status Tabs */}
        <div className="flex flex-wrap gap-2">
          {statusCounts.map((status) => (
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
                {status.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app, i) => (
            <ApplicationCard key={app.id} {...app} delay={i * 0.05} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-card rounded-2xl border border-border/50"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">No applications found</h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? "Try adjusting your search query."
                : "Start applying to jobs to see them here."}
            </p>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
