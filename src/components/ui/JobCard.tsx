import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Bookmark, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  postedAt: string;
  logo?: string;
  featured?: boolean;
  delay?: number;
}

const typeColors = {
  "Full-time": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Part-time": "bg-coral/20 text-coral dark:bg-coral/30",
  "Contract": "bg-golden/20 text-golden dark:bg-golden/30",
  "Internship": "bg-primary/10 text-primary",
};

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  type,
  postedAt,
  logo,
  featured = false,
  delay = 0,
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "bg-card rounded-2xl p-6 border border-border/50 card-hover relative group",
        featured && "ring-2 ring-coral/30 bg-gradient-to-br from-card to-coral/5"
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-4 px-3 py-1 bg-coral text-white text-xs font-medium rounded-full">
          Featured
        </span>
      )}

      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
          {logo ? (
            <img src={logo} alt={company} className="w-full h-full object-cover" />
          ) : (
            <Building2 className="w-7 h-7 text-muted-foreground" />
          )}
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Link
                to={`/candidate/jobs/${id}`}
                className="font-display font-semibold text-lg hover:text-primary transition-colors line-clamp-1"
              >
                {title}
              </Link>
              <p className="text-muted-foreground mt-1">{company}</p>
            </div>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
              <Bookmark className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              {salary}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {postedAt}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-4">
            <span className={cn("px-3 py-1 rounded-full text-xs font-medium", typeColors[type])}>
              {type}
            </span>
            <Link to={`/candidate/jobs/${id}`} className="ml-auto">
              <Button size="sm" className="rounded-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
