"use client";

import { motion } from "framer-motion";
import { Heart, Code2, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-6 h-6 text-[var(--accent)]" />
            <span className="font-bold text-[var(--foreground)]">Portfolio</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-[var(--foreground-muted)] flex items-center gap-1"
          >
            Made with <Heart className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" /> using Next.js & Tailwind
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full glass glass-hover transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-[var(--foreground)]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
