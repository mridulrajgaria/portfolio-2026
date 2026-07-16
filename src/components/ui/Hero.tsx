"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Image from "next/image";

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});
const ParticleGrid = dynamic(() => import("@/components/canvas/ParticleGrid"), {
  ssr: false,
});

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as any, duration: 1 },
  },
};

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-16">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077b6]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#ffb703]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ParticleGrid />
          </Canvas>
        </Suspense>
      </div>

      {/* Asymmetric Split Screen Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] w-full max-w-[1400px] mx-auto">
        
        {/* Left Column: Text Core */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter flex flex-wrap gap-x-[0.25em]"
          >
            {"MRIDUL RAJGARIA".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={char + "-" + charIndex} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 text-lg md:text-2xl font-mono text-[var(--muted)] max-w-2xl leading-relaxed tracking-tight"
          >
            <p>
              Bridging the gap between low-latency systems and human-centric design.
            </p>
            <p className="mt-6 text-sm md:text-base text-[var(--foreground)] opacity-50 leading-loose">
              I am driven by a fundamental philosophy: architecture should be invisible, yet infinitely resilient. My focus is engineering clean, distributed ecosystems that scale effortlessly while solving profoundly complex human problems.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] flex items-center gap-4"
          >
            <span>Scroll to read</span>
            <span className="inline-block animate-bounce text-[var(--foreground)]">↓</span>
          </motion.div>
        </div>

        {/* Right Column: High-Impact Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full max-w-[420px] aspect-[4/5] mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-[var(--foreground)]/10 bg-[var(--background)] group shadow-2xl"
        >
          <Image
            src="/profile.jpg"
            alt="Mridul Rajgaria"
            fill
            className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
          />
          
          {/* Awwwards Overlay Polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent z-10 pointer-events-none opacity-80" />
          <div className="absolute inset-0 bg-[var(--background)]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
        </motion.div>

      </div>
    </section>
  );
}
