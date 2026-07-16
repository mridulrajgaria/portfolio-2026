"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  "[SYS] Initializing LLM Gateway Instance...",
  "[INFO] Loading rate limit configurations...",
  "[INFO] Establishing Redis connection pooling... OK",
  "[WARN] High latency detected on upstream node: eu-west-2",
  "[SYS] Re-routing traffic to fallback node: us-east-1",
  "[SUCCESS] 50,000 requests processed successfully.",
  "[SYS] Token bucket capacity optimized at 98.4%",
];

export default function TerminalDemo({ isHovering }: { isHovering: boolean }) {
  const [visibleLogs, setVisibleLogs] = useState<number>(0);

  useEffect(() => {
    if (isHovering) {
      let current = 0;
      const interval = setInterval(() => {
        if (current < logs.length) {
          current++;
          setVisibleLogs(current);
        } else {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    } else {
      setVisibleLogs(0);
    }
  }, [isHovering]);

  return (
    <div className="w-full max-w-sm h-64 bg-[#050505] border border-[var(--foreground)]/10 rounded-xl p-4 font-mono text-xs overflow-hidden flex flex-col justify-start relative shadow-2xl">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--foreground)]/10 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[var(--foreground)]/30 text-[10px]">api-gateway-sys.log</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-1.5 overflow-hidden text-[#ffb703] opacity-80">
        <AnimatePresence>
          {logs.slice(0, visibleLogs).map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="leading-relaxed whitespace-nowrap text-[10px] md:text-xs"
            >
              <span className="text-[var(--foreground)]/40 mr-2">{'>'}</span> {log}
            </motion.div>
          ))}
          {isHovering && visibleLogs < logs.length && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 h-3 bg-[#ffb703] inline-block mt-1 align-middle"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

