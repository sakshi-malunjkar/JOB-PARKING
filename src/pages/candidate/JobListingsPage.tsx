import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Filter, Briefcase, X } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import JobCard from "@/components/ui/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"];
const locations = ["All Locations", "Remote", "San Francisco", "New York", "London", "Berlin"];

const allJobs = [
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
  {
    id: "3",
    title: "Marketing Manager",
    company: "Notion",
    location: "New York, NY",
    salary: "$90K - $130K",
    type: "Full-time" as const,
    postedAt: "1 week ago",
  },
  {
    id: "4",
    title: "UX Research Intern",
    company: "Airbnb",
    location: "San Francisco, CA",
    salary: "$30/hour",
    type: "Internship" as const,
    postedAt: "5 days ago",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "GitLab",
    location: "Remote",
    salary: "$130K - $170K",
    type: "Full-time" as const,
    postedAt: "3 days ago",
    featured: true,
  },
  {
    id: "6",
    title: "Content Writer",
    company: "Medium",
    location: "Remote",
    salary: "$60K - $80K",
    type: "Contract" as const,
    postedAt: "1 week ago",
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "OpenAI",
    location: "San Francisco, CA",
    salary: "$180K - $250K",
    type: "Full-time" as const,
    postedAt: "2 days ago",
  },
  {
    id: "8",
    title: "Mobile Developer",
    company: "Instagram",
    location: "New York, NY",
    salary: "$140K - $180K",
    type: "Full-time" as const,
    postedAt: "4 days ago",
  },
];

export default function JobListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "All Locations" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <DashboardLayout userRole="candidate" userName="John Doe">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Browse Jobs
        </motion.h1>
        <p className="section-subtitle">Discover your next career opportunity.</p>
      </div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 border border-border/50 mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-xl"
            />
          </div>

          {/* Location */}
          <div className="relative min-w-[200px]">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-background border border-input appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Toggle (Mobile) */}
          <Button
            variant="outline"
            className="lg:hidden gap-2 h-12 rounded-xl"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-5 h-5" />
            Filters
          </Button>

          {/* Search Button */}
          <Button className="h-12 px-8 rounded-xl shadow-glow gap-2">
            <Search className="w-5 h-5" />
            Search Jobs
          </Button>
        </div>

        {/* Job Type Filters */}
        <div className={cn("mt-6", !showFilters && "hidden lg:block")}>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  selectedType === type
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedType !== "All" || selectedLocation !== "All Locations" || searchQuery) && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedType !== "All" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                {selectedType}
                <button onClick={() => setSelectedType("All")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedLocation !== "All Locations" && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-coral/10 text-coral text-sm">
                {selectedLocation}
                <button onClick={() => setSelectedLocation("All Locations")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </motion.div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs found
        </p>
        <select className="px-4 py-2 rounded-xl bg-card border border-border text-sm">
          <option>Most Relevant</option>
          <option>Most Recent</option>
          <option>Highest Salary</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, i) => <JobCard key={job.id} {...job} delay={i * 0.05} />)
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
