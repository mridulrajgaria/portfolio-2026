"use client";

import { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false });
const NeuralNetwork = dynamic(() => import("@/components/canvas/NeuralNetwork"), { ssr: false });

export default function ResearchSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen border-t border-[var(--foreground)]/5 flex items-center justify-center overflow-hidden"
    >
      {/* Heavy Ambient Glows for Cinematic Look */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-[#0077b6]/10 rounded-full blur-[180px] pointer-events-none -translate-y-1/2 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#06d6a0]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none" />

      {/* Full-Screen Dynamic Neural Network Canvas */}
      <div className="absolute inset-0 z-0">
        {isInView && (
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
              <NeuralNetwork />
            </Canvas>
          </Suspense>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full h-full flex flex-col lg:flex-row items-center justify-between z-10 gap-16 py-32 pointer-events-none">
        
        {/* Left Side: Typography & Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pointer-events-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter"
          >
            Academic<br/>
            Curiosity &<br/>
            Vision Models.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 space-y-6 font-mono text-base text-[var(--muted)] leading-loose max-w-lg"
          >
            <p>
              Beyond building systems, I possess a deep academic curiosity into the inner workings of machine perception. How do algorithms interpret spatial features? How do we build structural resilience against adversarial inputs?
            </p>
            <p>
              My published research dives into these exact questionsâ€”exploring the optimization of Transfer Learning pipelines using ResNet and Inception architectures.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] px-5 py-3 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--foreground)]/50 animate-pulse" />
              <p className="text-[var(--foreground)] font-mono text-xs uppercase tracking-wider">
                Published in the Journal of the Institution of Engineers (India), Sept 2024
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

