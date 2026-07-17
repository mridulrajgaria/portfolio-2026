"use client";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { Activity, Users, DollarSign } from "lucide-react";

export default function DashboardDemo({ 
  mouseX, 
  mouseY, 
  isHovering 
}: { 
  mouseX: MotionValue<number>, 
  mouseY: MotionValue<number>, 
  isHovering: boolean 
}) {
  const rotateX = useTransform(mouseY, [0, 500], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 800], [-10, 10]);
  
  const springX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      style={{
        rotateX: isHovering ? springX : 0,
        rotateY: isHovering ? springY : 0,
        perspective: 1000
      }}
      className="w-full max-w-md h-[280px] bg-[#0a1014] border border-[#0077b6]/30 rounded-xl p-4 flex flex-col gap-4 shadow-[0_0_50px_rgba(0,119,182,0.1)] transition-all duration-500"
    >
      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-3 shrink-0">
        <div className="bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 rounded-lg p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[var(--foreground)]/40">
            <Users className="w-3 h-3" />
            <span className="text-[9px] font-mono uppercase">Leads</span>
          </div>
          <span className="text-[var(--foreground)] text-sm font-bold">1,248</span>
        </div>
        <div className="bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 rounded-lg p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[#0077b6]/80">
            <Activity className="w-3 h-3" />
            <span className="text-[9px] font-mono uppercase">Active</span>
          </div>
          <span className="text-[var(--foreground)] text-sm font-bold">892</span>
        </div>
        <div className="bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 rounded-lg p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[#06d6a0]/80">
            <DollarSign className="w-3 h-3" />
            <span className="text-[9px] font-mono uppercase">Rev</span>
          </div>
          <span className="text-[var(--foreground)] text-sm font-bold">$42k</span>
        </div>
      </div>

      <div className="flex gap-3 h-full overflow-hidden">
        {/* Chart Column */}
        <div className="flex-[2] flex flex-col gap-2 rounded-lg bg-[var(--foreground)]/[0.02] p-3 border border-[var(--foreground)]/5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="w-16 h-2 bg-[var(--foreground)]/20 rounded-full" />
            <div className="w-8 h-2 bg-[#0077b6]/40 rounded-full" />
          </div>
          
          <div className="flex-1 flex items-end justify-between gap-1.5 mt-2">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <motion.div 
                key={i} 
                animate={{ height: ["10%", `${h}%`, `${h}%`, "10%"] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.1, times: [0, 0.4, 0.8, 1], ease: "easeInOut" }}
                className="flex-1 bg-gradient-to-t from-[#0077b6]/20 to-[#0077b6]/80 rounded-t-sm"
              />
            ))}
          </div>
        </div>

        {/* Action Column */}
        <div className="flex-1 flex flex-col gap-2 rounded-lg bg-[var(--foreground)]/[0.02] p-2 border border-[var(--foreground)]/5">
          <div className="w-12 h-2 bg-[var(--foreground)]/20 rounded-full mb-1" />
          <motion.div className="w-full h-8 bg-[#0077b6]/20 rounded border border-[#0077b6]/30 flex items-center px-2 shrink-0" whileHover={{ scale: 1.05 }}>
             <div className="w-8 h-1.5 bg-[#0077b6]/60 rounded-full" />
          </motion.div>
          <motion.div className="w-full h-8 bg-[var(--foreground)]/5 rounded border border-[var(--foreground)]/5 flex items-center px-2 shrink-0" whileHover={{ scale: 1.05 }}>
             <div className="w-12 h-1.5 bg-[var(--foreground)]/20 rounded-full" />
          </motion.div>
          <motion.div className="w-full h-8 bg-[var(--foreground)]/5 rounded border border-[var(--foreground)]/5 flex items-center px-2 shrink-0" whileHover={{ scale: 1.05 }}>
             <div className="w-10 h-1.5 bg-[var(--foreground)]/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

