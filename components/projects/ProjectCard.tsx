"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ rotateX: 2, rotateY: -2 }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="relative h-full rounded-3xl glass overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]"
      >
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-emerald)]/10" />
        </div>

        {/* Project Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-[var(--accent)]">
                  {title.charAt(0)}
                </span>
              </div>
            </div>
          )}
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl bg-[var(--background)]/80 backdrop-blur-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl bg-[var(--background)]/80 backdrop-blur-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/30 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
