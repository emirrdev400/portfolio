"use client";

import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-[var(--accent)] mb-6"
          >
            Projects
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-[var(--foreground-muted)] leading-relaxed"
          >
            I am currently in the learning phase. I am actively working on improving my skills in C#, backend development, and system design. Real projects will be added soon.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

