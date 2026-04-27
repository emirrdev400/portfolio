"use client";

import { motion } from "framer-motion";
import { Code2, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[var(--accent)]/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[var(--accent-emerald)]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-[var(--accent)] mb-6"
          >
            Contact
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/emirdevback"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 p-6 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
              <Code2 className="w-7 h-7 text-[var(--accent)]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--foreground-muted)]">GitHub</p>
              <p className="text-[var(--foreground)] font-medium group-hover:text-[var(--accent)] transition-colors">
                https://github.com/emirdevback
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[var(--foreground-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:soon@gmail.com"
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 p-6 rounded-2xl glass glass-hover transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--accent-emerald)]/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-[var(--accent-emerald)]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--foreground-muted)]">Email</p>
              <p className="text-[var(--foreground)] font-medium group-hover:text-[var(--accent-emerald)] transition-colors">
                soon@gmail.com
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[var(--foreground-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
