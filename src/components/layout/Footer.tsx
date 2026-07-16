"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import ScrambleText from "@/components/ui/ScrambleText";

const links = [
  { name: "Email", url: "mailto:iammridul222@gmail.com" },
  { name: "GitHub", url: "https://github.com/mridulrajgaria" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mridul-rajgaria-112257288/" },
];

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative w-full pt-10 pb-32 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vh] bg-[var(--foreground)]/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full min-h-[40vh] z-10 relative">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="flex flex-col gap-10">
            <h2 className="text-sm font-mono text-[var(--muted)] uppercase tracking-[0.2em]">
              <ScrambleText text="// Connect" />
            </h2>
            <ul className="flex flex-col gap-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Magnetic>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hoverable="true"
                      className="group relative flex items-center gap-6 text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-500 w-max"
                    >
                      <span>{link.name}</span>
                      <span className="relative w-12 h-2 bg-[var(--muted)] group-hover:w-32 group-hover:bg-[var(--foreground)] transition-all duration-500 ease-out mt-4" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
          
          {/* High-Impact Visual Status Block to fill empty space */}
          <div className="flex flex-col gap-8 w-full md:max-w-md lg:max-w-lg mt-16 md:mt-0">
            <div className="bg-[var(--background)] border border-[var(--foreground)]/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#06d6a0]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#06d6a0]/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)]/40 mb-4">Current Status</h3>
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06d6a0] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06d6a0]"></span>
                    </span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-[var(--foreground)]">Open for New Opportunities</span>
                  </div>
                </div>

                <div className="w-full h-px bg-[var(--foreground)]/5" />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)]/40 mb-2">Local Time</h3>
                    <div className="font-mono text-lg text-[var(--foreground)]/90 flex items-center gap-2" suppressHydrationWarning>
                      <span>
                        {time 
                          ? time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
                          : "00:00:00"}
                      </span>
                      <span className="text-sm text-[var(--foreground)]/50">IST</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)]/40 mb-2">Base</h3>
                    <div className="font-mono text-lg text-[var(--foreground)]/90">
                      India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-mono text-sm text-[var(--muted)] leading-loose px-4">
              <p>
                Available for freelance opportunities and full-time roles in software engineering and system architecture.
              </p>
              <p className="mt-4 text-[var(--foreground)]/30 uppercase tracking-widest text-xs">
                © {new Date().getFullYear()} Mridul Rajgaria.
              </p>
            </div>
          </div>
        </div>

        {/* Massive CTA */}
        <div className="relative mt-auto w-full flex items-center justify-center">
          <Magnetic className="w-full">
            <a href="mailto:iammridul222@gmail.com" data-hoverable="true" className="group w-full text-center block">
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--foreground)]/10 hover:to-[var(--foreground)]/50 transition-all duration-700 lowercase whitespace-nowrap overflow-hidden text-ellipsis"
              >
                let&apos;s build something scalable.
              </motion.h2>
            </a>
          </Magnetic>
        </div>
        
      </div>
    </footer>
  );
}

