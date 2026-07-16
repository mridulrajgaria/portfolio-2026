"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Hold at 100% briefly before hiding
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1; // Random jump between 1-15
      });
    }, 100); // update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} // Custom brutalist ease
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <h1 className="font-mono text-7xl md:text-[10rem] font-bold tracking-tighter tabular-nums">
              {progress}%
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/50">
              // INITIALIZING ENVIRONMENT
            </p>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-px bg-[var(--foreground)]/10">
            <motion.div 
              className="h-full bg-[var(--foreground)]" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

