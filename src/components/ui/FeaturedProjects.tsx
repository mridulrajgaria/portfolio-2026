"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { GitBranch } from "lucide-react";
import ScrambleText from "@/components/ui/ScrambleText";
import LiquidImage from "@/components/ui/LiquidImage";

import TerminalDemo from "@/components/demos/TerminalDemo";
import DashboardDemo from "@/components/demos/DashboardDemo";
import CheckoutDemo from "@/components/demos/CheckoutDemo";
import ContributionDemo from "@/components/demos/ContributionDemo";

const projects = [
  {
    title: "LLM API Gateway",
    chapter: "Chapter I — The Entry Point",
    tags: ["Concurrency", "Resilience", "Token Bucket Architecture"],
    story: "Tackling the unpredictable nature of massive AI API requests required a study in architectural resilience. This wasn't just about limiting rates; it was an exploration into managing concurrency and protecting downstream systems from sudden load spikes. By separating burst traffic from daily quotas and backing the entire mechanism with atomic Redis counters, I crafted a bulletproof entry point that absorbed chaos without adding latency.",
    bgClass: "bg-[var(--background)]",
    accentClass: "text-[#ffb703]",
    glowColor: "rgba(255, 183, 3, 0.15)",
    github: "https://github.com/mridulrajgaria/LLM-API-Gateway-with-Token-Based-Rate-Limiting",
  },
  {
    title: "BDA CRM Module",
    chapter: "Chapter II — Human Workflows",
    tags: ["Systems Engineering", "Data Visualization", "Role-based Flows"],
    story: "Enterprise tools often suffer from bloated, rigid interfaces. This project was a study in transforming messy corporate manufacturing activities into smooth, visual experiences. By dissecting the daily habits of business development teams, I engineered a role-based ecosystem where complex data models were rendered into a clean, drag-and-drop Kanban flow—making the underlying data structure feel invisible and effortless to the end user.",
    bgClass: "bg-[var(--background)]",
    accentClass: "text-[#0077b6]",
    glowColor: "rgba(0, 119, 182, 0.15)",
    github: "https://github.com/mridulrajgaria/bda-crm-module",
  },
  {
    title: "ShopHub Engine",
    chapter: "Chapter III — The Transaction",
    tags: ["State Management", "Defense-in-Depth", "Scalability"],
    story: "E-commerce is the ultimate test of seamless transaction architecture. Building this engine was driven by the intricate dance of securing user data through multi-layered defensive engineering while preserving a sub-200ms feeling of instant interaction. Every MongoDB aggregation pipeline was relentlessly optimized, and every Redux state slice was meticulously planned to ensure that the journey from cart to checkout felt utterly predictable and entirely secure.",
    bgClass: "bg-[var(--background)]",
    accentClass: "text-[var(--foreground)]",
    glowColor: "rgba(255, 255, 255, 0.1)",
    github: "https://github.com/mridulrajgaria/ShopHubStore",
  },
  {
    title: "HabitFlow State",
    chapter: "Chapter IV — Behavioral Data",
    tags: ["Real-time Tracking", "Constraint Environments", "Minimalism"],
    story: "A minimal, high-efficiency exploration into behavioral design and real-time state tracking. Under the hood, this application handles continuous user updates within precise constraint environments. It strips away the noise, focusing purely on high-performance data workflows that quietly map the consistency of human habits without getting in the way.",
    bgClass: "bg-[var(--background)]",
    accentClass: "text-[#06d6a0]",
    glowColor: "rgba(6, 214, 160, 0.15)",
    github: "https://github.com/mridulrajgaria/habitflow",
  },
];

const Card = ({ project, i }: { project: any, i: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // GPU-accelerated pointer tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${project.glowColor}, transparent 40%)`;

  return (
    <div 
      className="sticky top-0 w-full min-h-screen flex items-center justify-center bg-[var(--background)] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      style={{ zIndex: i + 1 }}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn(
          "relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl min-h-[70vh] rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-[var(--foreground)]/5 transition-colors duration-500 shadow-2xl will-change-transform",
          project.bgClass
        )}
      >
        {/* GPU-Accelerated Spotlight Gradient */}
        <motion.div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
          style={{
            opacity: isHovering ? 1 : 0,
            background,
          }}
        />

        {/* Ambient base glow (Optimized for GPU) */}
        <div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none z-0" 
          style={{ 
            background: `radial-gradient(circle, ${project.glowColor.replace('0.15', '0.4').replace('0.1', '0.4')} 0%, transparent 70%)` 
          }} 
        />

        {/* Left Side: The Story Engine */}
        <div className="flex flex-col justify-between h-full z-20 relative pointer-events-none order-2 lg:order-1 pt-4 lg:pt-0">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
              {project.chapter}
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 font-sans">{project.title}</h3>
            
            <div className="flex flex-wrap gap-3 font-mono text-xs mb-8 lg:mb-12">
              {project.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/10 text-[var(--foreground)]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-11/12 flex flex-col gap-6">
            <p className="font-mono text-sm md:text-base text-[var(--muted)] leading-relaxed md:leading-loose">
              {project.story}
            </p>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors pointer-events-auto w-fit border-b border-[var(--foreground)]/10 hover:border-[var(--foreground)]/50 pb-1"
              >
                <GitBranch className="w-4 h-4" />
                View Repository
              </a>
            )}
          </div>
        </div>

        {/* Right Side: The Interactive Asset */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full max-h-[300px] md:max-h-[450px] rounded-2xl overflow-hidden border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl flex items-center justify-center group z-20 order-1 lg:order-2">
          {i === 0 && <TerminalDemo isHovering={isHovering} />}
          {i === 1 && <DashboardDemo mouseX={mouseX} mouseY={mouseY} isHovering={isHovering} />}
          {i === 2 && <CheckoutDemo isHovering={isHovering} />}
          {i === 3 && <ContributionDemo isHovering={isHovering} />}
        </div>
      </motion.div>
    </div>
  );
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full text-[var(--foreground)] bg-[var(--background)]">
      <div className="w-full px-6 md:px-12 lg:px-24 pt-32 pb-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-[var(--muted)] mb-12 uppercase tracking-[0.2em]">
            <ScrambleText text="// Selected Architecture" />
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        {projects.map((project, i) => (
          <Card
            key={i}
            i={i}
            project={project}
          />
        ))}
      </div>
      
      {/* Safety Cushion Block to ensure smooth un-pinning before Canvas section */}
      <div className="h-[20vh] w-full bg-[var(--background)] relative z-[100]" />
    </section>
  );
}

