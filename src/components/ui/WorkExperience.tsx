"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrambleText from "@/components/ui/ScrambleText";

const experiences = [
  {
    id: 1,
    company: "Infotech Clinic",
    role: "Full-Stack Infrastructure",
    date: "Aug 2025 - Oct 2025",
    story: "Stepping into full-stack infrastructure meant orchestrating the chaos of disparate client workflows into a unified, elegant system. Building their enterprise management tools from scratch was a masterclass in creative flow. I focused on architecting resilient React pipelines driven by Redux state control, ensuring that the UI felt instantaneous. Below the surface, it was deeply satisfying to dissect complex data layers—indexing MongoDB collections to cut query latencies and fortifying backend endpoints until they ran flawlessly under the weight of real-world production demands.",
  },
];

export default function WorkExperience() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience" className="relative w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-[var(--muted)] mb-12 uppercase tracking-[0.2em]">
          <ScrambleText text="// The Journey" />
        </h2>

        <div className="relative border-t border-[var(--muted)]/20">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative border-b border-[var(--muted)]/20 py-12 md:py-20 transition-colors duration-700 hover:border-[var(--foreground)]/50"
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-hoverable="true"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between z-10 relative">
                <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-700">
                  {exp.company}
                </h3>
                <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end font-mono">
                  <span className="text-xl md:text-2xl text-[var(--foreground)]/90">{exp.role}</span>
                </div>
              </div>

              {/* Glassmorphic Panel Reveal on Hover */}
              <AnimatePresence>
                {hoveredId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      clipPath: "inset(0 0 0% 0)",
                    }}
                    exit={{ opacity: 0, height: 0, clipPath: "inset(0 0 100% 0)" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden mt-12"
                  >
                    <div className="bg-[var(--foreground)]/[0.03] backdrop-blur-2xl border-t border-l border-[var(--foreground)]/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                      {/* Inner ambient glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--foreground)]/5 rounded-full blur-[80px] pointer-events-none" />
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
                        <div className="flex flex-col justify-center">
                          <p className="font-mono text-base md:text-lg text-[var(--muted)] leading-loose">
                            {exp.story}
                          </p>
                        </div>
                        <div className="relative w-full h-[300px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden border border-[var(--foreground)]/5 group bg-[var(--background)]">
                          <Image
                            src="/infrastructure-abstract.jpg"
                            alt="Full-Stack Infrastructure Architecture"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

