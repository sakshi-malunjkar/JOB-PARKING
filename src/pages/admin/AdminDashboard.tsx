import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, AlertTriangle, Shield, Activity } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import { cn } from "@/lib/utils";

const stats = [
  { title: "Total Users", value: "12,458", change: "+248 this week", changeType: "positive" as const, icon: Users },
  { title: "Active Jobs", value: "3,842", change: "+156 this week", changeType: "positive" as const, icon: Briefcase },
  { title: "Applications", value: "28,934", change: "+12% growth", changeType: "positive" as const, icon: TrendingUp },
  { title: "Pending Reports", value: 12, change: "3 urgent", changeType: "negative" as const, icon: AlertTriangle },
];

const recentUsers = [
  { id: "1", name: "John Smith", email: "john@example.com", role: "Candidate", status: "active", joinedAt: "2 hours ago" },
  { id: "2", name: "Acme Corp", email: "hr@acme.com", role: "Employer", status: "active", joinedAt: "5 hours ago" },
  { id: "3", name: "Sarah Lee", email: "sarah@example.com", role: "Candidate", status: "pending", joinedAt: "1 day ago" },
];

const pendingJobs = [
  { id: "1", title: "Senior Developer", company: "TechCorp", status: "pending", reason: "New employer" },
  { id: "2", title: "Marketing Lead", company: "StartUp Inc", status: "flagged", reason: "Reported by user" },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin" userName="Admin">
      <div className="mb-8">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="section-title">
          Admin Dashboard
        </motion.h1>
        <p className="section-subtitle">Platform overview and management.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => <StatCard key={stat.title} {...stat} delay={i * 0.1} />)}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-6 border border-border/50">
          <h2 className="font-display font-semibold text-xl mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Recent Users</h2>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-4 p-3 rounded-xl bg-muted/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-medium">{user.name.charAt(0)}</div>
                <div className="flex-1"><p className="font-medium">{user.name}</p><p className="text-sm text-muted-foreground">{user.email}</p></div>
                <span className={cn("px-2 py-1 rounded-full text-xs font-medium", user.status === "active" ? "bg-green-100 text-green-700" : "bg-golden/20 text-golden")}>{user.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl p-6 border border-border/50">
          <h2 className="font-display font-semibold text-xl mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-coral" /> Pending Moderation</h2>
          <div className="space-y-3">
            {pendingJobs.map((job) => (
              <div key={job.id} className="flex items-center gap-4 p-3 rounded-xl bg-muted/30">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-destructive" /></div>
                <div className="flex-1"><p className="font-medium">{job.title}</p><p className="text-sm text-muted-foreground">{job.company} • {job.reason}</p></div>
                <span className={cn("px-2 py-1 rounded-full text-xs font-medium", job.status === "pending" ? "bg-golden/20 text-golden" : "bg-destructive/10 text-destructive")}>{job.status}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
