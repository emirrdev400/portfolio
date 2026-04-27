"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  Terminal,
  Layout,
  Cpu,
  GitBranch,
  Container,
  Shield
} from "lucide-react";

const technologies = [
  {
    category: "Backend",
    icon: Server,
    skills: ["C#", "ASP.NET Core", "Go", "Python", "REST APIs", "gRPC"],
    color: "#3B82F6",
  },
  {
    category: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "SQLite", "Entity Framework", "Dapper", "Redis"],
    color: "#10B981",
  },
  {
    category: "Hardware & Embedded",
    icon: Cpu,
    skills: ["Arduino", "C++", "PID Control", "Sensors", "Motor Control", "Embedded C"],
    color: "#F59E0B",
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Azure DevOps", "VS Code"],
    color: "#8B5CF6",
  },
  {
    category: "Web Technologies",
    icon: Layout,
    skills: ["HTML/CSS", "JavaScript", "React", "Blazor", "Tailwind CSS", "Bootstrap"],
    color: "#EC4899",
  },
  {
    category: "Languages",
    icon: Code2,
    skills: ["C#", "Go", "Python", "C++", "SQL", "JavaScript"],
    color: "#14B8A6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function TechStack() {
  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-[var(--accent)]/5 to-[var(--accent-emerald)]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-[var(--accent-emerald)] mb-6"
          >
            Tech Stack
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-emerald)] to-[var(--accent)] bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>
          
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Proficient in C#, Go, and Python with expertise in backend systems, 
            database architecture, and hardware-embedded solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-3xl glass overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tech.color}10, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${tech.color}15` }}
              >
                <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
              </motion.div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                {tech.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: `0 0 20px ${tech.color}30`,
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: `${tech.color}10`,
                      color: tech.color,
                      border: `1px solid ${tech.color}20`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Border */}
              <div 
                className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: `${tech.color}30` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Terminal, label: "Clean Code" },
            { icon: Cpu, label: "Performance First" },
            { icon: GitBranch, label: "Version Control" },
            { icon: Container, label: "Containerized" },
            { icon: Shield, label: "Security Focused" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl glass cursor-default"
            >
              <item.icon className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--foreground-muted)]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
