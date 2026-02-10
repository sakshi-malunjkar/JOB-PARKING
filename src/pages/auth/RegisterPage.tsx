import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Building2,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Role = "candidate" | "employer" | "admin";

const roles = [
  {
    id: "candidate" as Role,
    icon: User,
    title: "Candidate",
    description: "Looking for job opportunities",
  },
  {
    id: "employer" as Role,
    icon: Building2,
    title: "Employer",
    description: "Hiring talent for your team",
  },
  {
    id: "admin" as Role,
    icon: Shield,
    title: "Admin",
    description: "Platform management",
  },
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = (searchParams.get("role") as Role) || "candidate";

  const [step, setStep] = useState<"role" | "form">("role");
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${selectedRole}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">JobParking</span>
          </Link>

          {step === "role" ? (
            <>
              <h1 className="font-display text-3xl font-bold mb-2">Join JobParking</h1>
              <p className="text-muted-foreground mb-8">
                Select your role to get started with the right experience.
              </p>

              <div className="space-y-4">
                {roles.map((role) => (
                  <motion.button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4",
                      selectedRole === role.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                        selectedRole === role.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                    {selectedRole === role.id && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              <Button
                onClick={() => setStep("form")}
                className="w-full h-12 rounded-xl shadow-glow gap-2 mt-8"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep("role")}
                className="text-sm text-muted-foreground hover:text-foreground mb-4 flex items-center gap-2"
              >
                ← Back to role selection
              </button>

              <h1 className="font-display text-3xl font-bold mb-2">Create your account</h1>
              <p className="text-muted-foreground mb-8">
                Signing up as{" "}
                <span className="text-primary font-medium capitalize">{selectedRole}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 h-12 rounded-xl input-focus"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-12 rounded-xl input-focus"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 h-12 rounded-xl input-focus"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full h-12 rounded-xl shadow-glow gap-2">
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>

              {/* Terms */}
              <p className="text-center mt-6 text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </>
          )}

          {/* Sign In Link */}
          <p className="text-center mt-8 text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Panel - Decorative */}
      <div
        className="hidden lg:flex flex-1 items-center justify-center p-12"
        style={{ background: "var(--gradient-accent)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-center text-accent-foreground"
        >
          <div className="w-20 h-20 rounded-2xl bg-accent-foreground/20 flex items-center justify-center mx-auto mb-8">
            {selectedRole === "candidate" ? (
              <User className="w-10 h-10" />
            ) : selectedRole === "employer" ? (
              <Building2 className="w-10 h-10" />
            ) : (
              <Shield className="w-10 h-10" />
            )}
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            {selectedRole === "candidate"
              ? "Find Your Dream Job"
              : selectedRole === "employer"
              ? "Hire Top Talent"
              : "Manage Your Platform"}
          </h2>
          <p className="text-accent-foreground/80">
            {selectedRole === "candidate"
              ? "Discover opportunities that match your skills and career goals."
              : selectedRole === "employer"
              ? "Connect with qualified candidates and build your dream team."
              : "Oversee platform operations and ensure a great experience for all users."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
