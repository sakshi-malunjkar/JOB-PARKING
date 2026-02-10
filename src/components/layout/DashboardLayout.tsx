import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "candidate" | "employer" | "admin";
  userName?: string;
}

export default function DashboardLayout({
  children,
  userRole,
  userName = "John Doe",
}: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar userRole={userRole} />
      <DashboardTopbar userName={userName} sidebarCollapsed={sidebarCollapsed} />
      
      <motion.main
        initial={false}
        animate={{ marginLeft: sidebarCollapsed ? 80 : 260 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="pt-16 min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-6 lg:p-8"
        >
          {children}
        </motion.div>
      </motion.main>
    </div>
  );
}
