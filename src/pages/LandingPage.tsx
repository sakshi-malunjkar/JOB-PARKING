import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Smart Matching",
    description: "AI-powered job matching connects you with the perfect opportunities based on your skills and preferences.",
  },
  {
    icon: Shield,
    title: "Verified Employers",
    description: "All employers are verified to ensure you're applying to legitimate, trustworthy companies.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Track your applications, get insights, and accelerate your career journey with our tools.",
  },
  {
    icon: Star,
    title: "Premium Support",
    description: "Get dedicated support from our team to help you navigate your job search successfully.",
  },
];

const stats = [
  { value: "50K+", label: "Active Jobs" },
  { value: "10K+", label: "Companies" },
  { value: "100K+", label: "Candidates" },
  { value: "95%", label: "Satisfaction" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "",
    quote: "JobParking helped me find my dream job in just 2 weeks. The matching algorithm is incredibly accurate!",
  },
  {
    name: "Michael Roberts",
    role: "HR Director",
    company: "Growth Inc",
    image: "",
    quote: "As an employer, the quality of candidates we receive through JobParking is exceptional.",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "StartUp Hub",
    image: "",
    quote: "The platform is intuitive and the support team is always there to help. Highly recommended!",
  },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">JobParking</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Jobs
              </Link>
              <Link to="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                For Employers
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link to="/login">
                <Button variant="ghost" className="rounded-xl">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="rounded-xl shadow-glow">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/jobs"
                className="block px-4 py-2 rounded-xl hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                to="/employers"
                className="block px-4 py-2 rounded-xl hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Employers
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-xl hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <hr className="border-border" />
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full rounded-xl">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-xl">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                #1 Job Platform for Professionals
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Dream{" "}
                <span className="gradient-text">Career</span>{" "}
                Opportunity
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Connect with top employers, discover amazing opportunities, and take the next step in your professional journey with JobParking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/register">
                  <Button size="lg" className="rounded-xl shadow-glow gap-2 w-full sm:w-auto">
                    <Users className="w-5 h-5" />
                    I'm a Candidate
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/register?role=employer">
                  <Button size="lg" variant="outline" className="rounded-xl gap-2 w-full sm:w-auto">
                    <Building2 className="w-5 h-5" />
                    I'm an Employer
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-golden">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 100K+ users</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Background Shapes */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-slow" />

                {/* Main Card */}
                <div className="relative glass rounded-3xl p-8 shadow-float">
                  <div className="space-y-4">
                    {/* Sample Job Cards */}
                    {[
                      { title: "Senior Product Designer", company: "Figma", salary: "$120K - $180K" },
                      { title: "Full Stack Developer", company: "Stripe", salary: "$140K - $200K" },
                      { title: "Marketing Manager", company: "Notion", salary: "$90K - $130K" },
                    ].map((job, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <span className="text-sm font-medium text-coral">{job.salary}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="absolute -right-4 -bottom-4 bg-card rounded-2xl p-4 shadow-float border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Application Sent!</p>
                        <p className="text-xs text-muted-foreground">Just now</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-display font-bold gradient-text">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">JobParking</span>?
            </h2>
            <p className="text-muted-foreground mt-4">
              Everything you need to accelerate your career or find the perfect talent for your team.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-coral/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Loved by <span className="gradient-accent-text">Professionals</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              See what our users have to say about their experience with JobParking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="flex items-center gap-1 text-golden mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join thousands of professionals who have found their dream jobs through JobParking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="rounded-xl bg-background text-foreground hover:bg-background/90 gap-2 w-full sm:w-auto"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/employers">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-xl">JobParking</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Connecting talent with opportunity. Your dream career starts here.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">For Candidates</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/jobs" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/companies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/salary" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Salary Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/post-job" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobParking. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
