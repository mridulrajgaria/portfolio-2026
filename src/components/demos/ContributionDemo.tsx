"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContributionDemo({ isHovering }: { isHovering: boolean }) {
  // A 7x14 grid of tiny cells
  const rows = 7;
  const cols = 14;
  const totalCells = rows * cols;
  
  const [activeCells, setActiveCells] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setActiveCells(prev => {
          const next = new Set(prev);
          // Add 3 random cells
          for (let i = 0; i < 3; i++) {
            next.add(Math.floor(Math.random() * totalCells));
          }
          // Remove 1 random cell to keep it dynamic
          if (next.size > 0) {
            const items = Array.from(next);
            next.delete(items[Math.floor(Math.random() * items.length)]);
          }
          return next;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setActiveCells(new Set());
    }
  }, [isHovering, totalCells]);

  return (
    <div className="p-6 bg-[#050f0c] border border-[#06d6a0]/20 rounded-xl shadow-[0_0_50px_rgba(6,214,160,0.05)]">
      <div className="grid grid-cols-[repeat(14,1fr)] gap-1.5 md:gap-2">
        {Array.from({ length: totalCells }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: activeCells.has(i) ? [0.1, 1, 0.8] : 0.1,
              backgroundColor: activeCells.has(i) ? "#06d6a0" : "rgba(255,255,255,0.05)"
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-3 h-3 md:w-4 md:h-4 rounded-[2px]"
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center text-[10px] md:text-xs font-mono text-[#06d6a0]/60">
        <span>Less</span>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-[2px] bg-[var(--foreground)]/5" />
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-[2px] bg-[#06d6a0]/30" />
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-[2px] bg-[#06d6a0]/60" />
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-[2px] bg-[#06d6a0]" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

