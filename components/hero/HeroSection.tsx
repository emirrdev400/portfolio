"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-glow" />
      
      {/* Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-[var(--accent)] cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Emir
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Backend & System Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[var(--foreground-muted)]/80 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Currently in learning phase and improving backend development skills.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-emerald)] text-white font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-emerald)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl glass glass-hover text-white font-semibold transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "C#", label: "Learning" },
              { value: "Go", label: "Learning" },
            ].map((stat, index) => (
              <motion.div
                key={`${stat.value}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent-emerald)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
