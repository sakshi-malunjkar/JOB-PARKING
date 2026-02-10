import { motion } from "framer-motion";
import { Building2, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ApplicationCardProps {
  id: string;
  jobTitle: string;
  company: string;
  appliedAt: string;
  status: "pending" | "reviewing" | "interview" | "offered" | "rejected";
  logo?: string;
  delay?: number;
}

const statusConfig = {
  pending: {
    label: "Pending",
    color: "bg-muted text-muted-foreground",
  },
  reviewing: {
    label: "Under Review",
    color: "bg-golden/20 text-golden",
  },
  interview: {
    label: "Interview",
    color: "bg-primary/10 text-primary",
  },
  offered: {
    label: "Offered",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  rejected: {
    label: "Not Selected",
    color: "bg-destructive/10 text-destructive",
  },
};

export default function ApplicationCard({
  id,
  jobTitle,
  company,
  appliedAt,
  status,
  logo,
  delay = 0,
}: ApplicationCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-card rounded-xl p-5 border border-border/50 card-hover"
    >
      <div className="flex items-center gap-4">
        {/* Company Logo */}
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
          {logo ? (
            <img src={logo} alt={company} className="w-full h-full object-cover" />
          ) : (
            <Building2 className="w-6 h-6 text-muted-foreground" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold line-clamp-1">{jobTitle}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>

        {/* Status */}
        <span className={cn("px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap", statusInfo.color)}>
          {statusInfo.label}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          Applied {appliedAt}
        </span>
        <Button variant="ghost" size="sm" className="gap-2">
          <ExternalLink className="w-4 h-4" />
          View
        </Button>
      </div>
    </motion.div>
  );
}
