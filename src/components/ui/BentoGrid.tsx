"use client";

import { motion, Variants } from "framer-motion";
import { Database, Code2, Cpu, Cloud, Award } from "lucide-react";
import ScrambleText from "@/components/ui/ScrambleText";

export default function BentoGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-[var(--muted)] text-sm font-mono uppercase tracking-[0.2em] mb-12">
          <ScrambleText text="// Technical Arsenal" />
        </div>
        
        {/* Strict 3-Column Bento Track */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
        >
          
          {/* CARD 1: LANGS & DATABASES (Wide - 2 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-2 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)] p-8 md:p-10 flex flex-col gap-6 items-start transition-all duration-300 hover:border-[var(--foreground)]/20 relative group overflow-hidden will-change-transform">
            <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none transition-colors duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="flex items-center gap-3 z-10 relative">
              <Database className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight">Programming Languages & Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full z-10 relative">
              {["Java", "JavaScript", "TypeScript", "Python", "SQL", "MySQL", "MongoDB", "JDBC", "Redis"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 text-sm font-mono text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* CARD 2: FRAMEWORKS (1 Col) */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)] p-8 md:p-10 flex flex-col gap-6 items-start transition-all duration-300 hover:border-[var(--foreground)]/20 relative group overflow-hidden will-change-transform">
            <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none transition-colors duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="flex items-center gap-3 z-10 relative">
              <Code2 className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full z-10 relative">
              {["Node.js", "Express.js", "Spring Boot", "React.js", "Next.js", "Redux", "Spring Data JPA"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 text-sm font-mono text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* CARD 3: CORE CONCEPTS (1 Col) */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)] p-8 md:p-10 flex flex-col gap-6 items-start transition-all duration-300 hover:border-[var(--foreground)]/20 relative group overflow-hidden will-change-transform">
            <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none transition-colors duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="flex items-center gap-3 z-10 relative">
              <Cpu className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight">Core Concepts</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full z-10 relative">
              {["Data Structures", "Algorithms", "RESTful APIs", "System Design", "Data Science", "Machine Learning", "NLP"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 text-sm font-mono text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* CARD 4: CLOUD & TOOLS (Wide - 2 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-2 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)] p-8 md:p-10 flex flex-col gap-6 items-start transition-all duration-300 hover:border-[var(--foreground)]/20 relative group overflow-hidden will-change-transform">
            <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none transition-colors duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="flex items-center gap-3 z-10 relative">
              <Cloud className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight">Cloud Infrastructure & Developer Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full z-10 relative">
              {["AWS (EC2, S3, Lambda, VPC)", "Azure", "OCI", "Git", "GitHub", "Postman", "VS Code"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 text-sm font-mono text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* CARD 5: CERTIFICATIONS (Full Width - 3 Cols) */}
          <motion.div variants={itemVariants} className="md:col-span-3 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)] p-8 md:p-10 flex flex-col gap-6 items-start transition-all duration-300 hover:border-[var(--foreground)]/20 relative group overflow-hidden will-change-transform">
            <div className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none transition-colors duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
            <div className="flex items-center gap-3 z-10 relative">
              <Award className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full z-10 relative">
              {[
                "AWS Certified Developer - Associate",
                "Oracle Cloud Infrastructure 2025 Data Science Professional",
                "Microsoft Azure Data Fundamentals",
                "ServiceNow Virtual Internship Program"
              ].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/5 text-sm font-mono text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]">{tag}</span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

