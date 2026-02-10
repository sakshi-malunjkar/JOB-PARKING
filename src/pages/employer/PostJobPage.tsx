import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  FileText,
  Plus,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Lead/Manager"];

export default function PostJobPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript"]);
  const [newSkill, setNewSkill] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    type: "Full-time",
    location: "",
    salary: "",
    experience: "Mid Level",
    description: "",
    requirements: "",
    benefits: "",
  });

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = () => {
    // Demo: Navigate to dashboard
    navigate("/employer/dashboard");
  };

  return (
    <DashboardLayout userRole="employer" userName="Acme Inc.">
      {/* Back Button */}
      <Link
        to="/employer/dashboard"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Post a New Job
        </motion.h1>
        <p className="section-subtitle">Fill in the details to attract top talent.</p>
      </div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300",
                step >= s
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {s}
            </div>
            <span
              className={cn(
                "hidden sm:block text-sm font-medium",
                step >= s ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {s === 1 ? "Basic Info" : s === 2 ? "Details" : "Preview"}
            </span>
            {s < 3 && <div className="w-12 h-0.5 bg-border hidden sm:block" />}
          </div>
        ))}
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 max-w-3xl"
      >
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="font-display font-semibold text-xl mb-6">Basic Information</h2>

            {/* Job Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="title"
                  placeholder="e.g. Senior Frontend Developer"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Job Type */}
            <div className="space-y-2">
              <Label>Employment Type *</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, type })}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border",
                      formData.type === type
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-muted/50 border-border hover:border-primary/50"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="e.g. San Francisco, CA or Remote"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <Label htmlFor="salary">Salary Range *</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="salary"
                  placeholder="e.g. $120,000 - $180,000"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
              <Label>Experience Level *</Label>
              <div className="grid grid-cols-2 gap-3">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setFormData({ ...formData, experience: level })}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border",
                      formData.experience === level
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-muted/50 border-border hover:border-primary/50"
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-display font-semibold text-xl mb-6">Job Details</h2>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Job Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="rounded-xl min-h-[150px]"
              />
            </div>

            {/* Requirements */}
            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements *</Label>
              <Textarea
                id="requirements"
                placeholder="List the qualifications, skills, and experience required..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="rounded-xl min-h-[120px]"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>Required Skills</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                    <button onClick={() => removeSkill(skill)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  className="rounded-xl"
                />
                <Button onClick={addSkill} variant="outline" className="rounded-xl">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <Label htmlFor="benefits">Benefits & Perks</Label>
              <Textarea
                id="benefits"
                placeholder="Describe the benefits, perks, and company culture..."
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-display font-semibold text-xl mb-6">Preview Your Job</h2>

            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {formData.title || "Job Title"}
                </h3>
                <p className="text-muted-foreground mt-1">Acme Inc.</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {formData.location || "Location"}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  {formData.salary || "Salary"}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {formData.type}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {formData.experience}
                </span>
              </div>

              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {formData.description && (
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-wrap">
                    {formData.description}
                  </p>
                </div>
              )}

              {formData.requirements && (
                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-wrap">
                    {formData.requirements}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-coral/10 rounded-xl p-4 flex items-center gap-4">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <p className="font-medium">Ready to publish?</p>
                <p className="text-sm text-muted-foreground">
                  Your job will be visible to thousands of candidates.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="rounded-xl"
          >
            Previous
          </Button>
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)} className="rounded-xl shadow-glow">
              Continue
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="rounded-xl shadow-glow gap-2">
              Publish Job
              <Briefcase className="w-4 h-4" />
            </Button>
          )}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
