import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import JobListingsPage from "./pages/candidate/JobListingsPage";
import JobDetailsPage from "./pages/candidate/JobDetailsPage";
import ApplicationsPage from "./pages/candidate/ApplicationsPage";
import CandidateProfilePage from "./pages/candidate/CandidateProfilePage";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import PostJobPage from "./pages/employer/PostJobPage";
import ApplicantsPage from "./pages/employer/ApplicantsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MessagesPage from "./pages/MessagesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Candidate Routes */}
          <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
          <Route path="/candidate/jobs" element={<JobListingsPage />} />
          <Route path="/candidate/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/candidate/applications" element={<ApplicationsPage />} />
          <Route path="/candidate/profile" element={<CandidateProfilePage />} />

          {/* Employer Routes */}
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employer/post-job" element={<PostJobPage />} />
          <Route path="/employer/applicants" element={<ApplicantsPage />} />
          <Route path="/employer/jobs" element={<EmployerDashboard />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<AdminDashboard />} />
          <Route path="/admin/moderation" element={<AdminDashboard />} />

          {/* Shared Routes */}
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<CandidateDashboard />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
