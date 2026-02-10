import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Edit2,
  Plus,
  Upload,
  LinkIcon,
  Github,
  Linkedin,
  Globe,
  X,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "PostgreSQL",
];

const experience = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description:
      "Leading frontend development for the main product. Working with React, TypeScript, and GraphQL.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "StartUp Hub",
    location: "New York, NY",
    period: "Jun 2019 - Dec 2021",
    description:
      "Built and maintained multiple web applications using React and Vue.js.",
  },
];

const education = [
  {
    id: "1",
    degree: "Master of Computer Science",
    school: "Stanford University",
    year: "2019",
  },
  {
    id: "2",
    degree: "Bachelor of Computer Science",
    school: "MIT",
    year: "2017",
  },
];

export default function CandidateProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sakshi Malunjkar",
    title: "Senior Frontend Developer",
    email: "sakshimalunjkar1@gmail.com",
    phone: "+91 9326076355",
    location: "Nashik",
    bio: "Passionate frontend developer with 5+ years of experience building scalable web applications. I love creating intuitive user experiences and working with modern technologies.",
    website: "https://johndoe.dev",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  });

  return (
    <DashboardLayout userRole="candidate" userName="John Doe">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            My Profile
          </motion.h1>
          <p className="section-subtitle">Manage your profile and resume.</p>
        </div>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "outline" : "default"}
          className="gap-2 rounded-xl"
        >
          {isEditing ? (
            <>
              <X className="w-4 h-4" />
              Cancel
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                {isEditing && (
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    <Upload className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="mt-1 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        value={profile.title}
                        onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                        className="mt-1 rounded-xl"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
                    <p className="text-lg text-muted-foreground mt-1">{profile.title}</p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4" />
                        {profile.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-4 h-4" />
                        {profile.phone}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {profile.location}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <h3 className="font-semibold mb-3">About</h3>
              {isEditing ? (
                <Textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="rounded-xl min-h-[120px]"
                />
              ) : (
                <p className="text-muted-foreground">{profile.bio}</p>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <h3 className="font-semibold mb-3">Links</h3>
              {isEditing ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <Input
                      value={profile.website}
                      onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                      placeholder="Website"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                    <Input
                      value={profile.linkedin}
                      onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                      placeholder="LinkedIn"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-muted-foreground" />
                    <Input
                      value={profile.github}
                      onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                      placeholder="GitHub"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                  <a
                    href={`https://${profile.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`https://${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              )}
            </div>

            {isEditing && (
              <div className="mt-6 pt-6 border-t border-border/50 flex justify-end">
                <Button className="rounded-xl shadow-glow">Save Changes</Button>
              </div>
            )}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-xl flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Experience
              </h3>
              {isEditing && (
                <Button variant="ghost" size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              )}
            </div>

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div
                  key={exp.id}
                  className={cn("pb-6", i < experience.length - 1 && "border-b border-border/50")}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-xl flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-coral" />
                Education
              </h3>
              {isEditing && (
                <Button variant="ghost" size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              )}
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">
                      {edu.school} • {edu.year}
                    </p>
                  </div>
                  {isEditing && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resume Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-4">Resume</h3>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Drag and drop your resume or
              </p>
              <Button variant="outline" size="sm" className="rounded-xl">
                Browse Files
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              PDF, DOC up to 5MB
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Skills</h3>
              {isEditing && (
                <Button variant="ghost" size="sm" className="gap-1 h-8">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary",
                    isEditing && "pr-2"
                  )}
                >
                  {skill}
                  {isEditing && (
                    <button className="ml-2 text-primary/60 hover:text-primary">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Profile Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-coral/10 rounded-2xl p-6 border border-border/50"
          >
            <h3 className="font-semibold mb-2">Profile Visibility</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your profile is visible to employers. Make it stand out!
            </p>
            <div className="flex items-center justify-between text-sm">
              <span>Profile views this month</span>
              <span className="font-semibold text-primary">156</span>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
