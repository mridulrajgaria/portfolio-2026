"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function CheckoutDemo({ isHovering }: { isHovering: boolean }) {
  const [checked, setChecked] = useState(0);
  
  useEffect(() => {
    if (isHovering) {
      let current = 0;
      const interval = setInterval(() => {
        if (current < 3) {
          current++;
          setChecked(current);
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    } else {
      setChecked(0);
    }
  }, [isHovering]);

  const items = [
    "End-to-End Encryption",
    "Fraud Detection Engine",
    "Zero-Knowledge Auth"
  ];

  return (
    <div className="w-full max-w-sm p-6 bg-[#070707] border border-[var(--foreground)]/10 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-[var(--foreground)] font-semibold text-sm">Secure Checkout</h4>
        <ShieldCheck className="text-[var(--foreground)]/40 w-5 h-5" />
      </div>
      
      <div className="space-y-4 mb-8">
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors duration-500 ${checked > i ? 'bg-[var(--foreground)] border-[var(--foreground)] text-[var(--background)]' : 'border-[var(--foreground)]/20'}`}>
              {checked > i && (
                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </motion.svg>
              )}
            </div>
            <span className={`text-xs md:text-sm font-mono transition-colors duration-500 ${checked > i ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/40'}`}>
              {text}
            </span>
          </div>
        ))}
      </div>
      
      <motion.button 
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors duration-500 flex items-center justify-center gap-2 ${checked === 3 ? 'bg-[var(--foreground)] text-[var(--background)]' : 'bg-[var(--foreground)]/5 text-[var(--foreground)]/30'}`}
        whileHover={{ scale: checked === 3 ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
      >
        Confirm Transaction 
        <AnimatePresence>
          {checked === 3 && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-1"
            >
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                â†’
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

