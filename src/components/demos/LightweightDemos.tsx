"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Route as RouteIcon, Network, Kanban } from "lucide-react";

export function VerificationDemo() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#0a1014] flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-[#ffb703]/20 rounded-xl p-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffb703]/10 via-transparent to-transparent opacity-50" />
      <motion.div 
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 rounded-full bg-[#ffb703]/10 flex items-center justify-center border border-[#ffb703]/30 z-10"
      >
        <ShieldCheck className="w-10 h-10 text-[#ffb703]" />
      </motion.div>
      <div className="flex flex-col items-center z-10 gap-2">
        <div className="h-1.5 w-32 bg-[#ffb703]/20 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-[#ffb703]" 
          />
        </div>
        <span className="text-[10px] font-mono text-[#ffb703]/60 uppercase tracking-widest">Verifying Copilot Models</span>
      </div>
    </div>
  );
}

export function RouteDemo() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#0a1014] flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-[#0077b6]/20 rounded-xl p-6">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(0,119,182,0.1)_0deg,_transparent_60deg,_transparent_300deg,_rgba(0,119,182,0.1)_360deg)] opacity-30" 
      />
      <div className="w-16 h-16 rounded-2xl bg-[#0077b6]/10 flex items-center justify-center border border-[#0077b6]/30 z-10 shadow-[0_0_30px_rgba(0,119,182,0.2)]">
        <RouteIcon className="w-8 h-8 text-[#0077b6]" />
      </div>
      <div className="flex items-center gap-2 mt-4 z-10">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            className="w-2 h-2 rounded-full bg-[#0077b6]"
          />
        ))}
      </div>
    </div>
  );
}

export function GraphDemo() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#0a1014] flex flex-col items-center justify-center relative overflow-hidden border border-[#06d6a0]/20 rounded-xl p-6">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#06d6a0_1px,transparent_1px),linear-gradient(to_bottom,#06d6a0_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 w-24 h-24">
        <Network className="w-full h-full text-[#06d6a0]/80 stroke-1" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(6,214,160,0.2)]"
        />
      </div>
      <span className="mt-6 text-[10px] font-mono text-[#06d6a0]/60 uppercase tracking-widest z-10">Fact Layer Extracted</span>
    </div>
  );
}

export function EnterpriseDemo() {
  return (
    <div className="w-full h-full min-h-[250px] bg-[#0a1014] flex items-center justify-center relative overflow-hidden border border-white/10 rounded-xl p-6">
      <div className="w-full max-w-[200px] flex flex-col gap-3 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Kanban className="w-4 h-4 text-white/40" />
          <span className="text-xs font-mono text-white/40 uppercase">EMS Access</span>
        </div>
        {[0.8, 0.5, 0.3].map((opacity, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-full h-8 rounded border border-white/10 bg-white/5 flex items-center px-3 cursor-pointer"
            style={{ opacity }}
          >
            <div className="w-full h-1.5 bg-white/20 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
