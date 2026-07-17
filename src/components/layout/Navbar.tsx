"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";
import { Search } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [osKey, setOsKey] = useState("âŒ˜K");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Detect OS for command palette hint
    if (typeof navigator !== "undefined") {
      const isMac = navigator.userAgent.toLowerCase().includes("mac");
      setOsKey(isMac ? "âŒ˜K" : "Ctrl K");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-6 transition-all duration-500 ${
        scrolled ? "py-4" : ""
      }`}
    >
      <div
        className={`flex items-center gap-2 md:gap-8 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-500 border ${
          scrolled 
            ? "bg-[var(--background)]/50 backdrop-blur-xl border-[var(--foreground)]/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        <ul className="hidden md:flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Magnetic>
                <a
                  href={link.href}
                  data-hoverable="true"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="relative group px-2 py-1 text-xs md:text-sm font-mono tracking-widest uppercase text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--foreground)] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        {/* Visual Hint / Trigger Button */}
        <button
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          className="md:ml-4 flex items-center gap-2 px-4 py-2 md:px-3 md:py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 hover:bg-[var(--foreground)]/10 transition-colors group cursor-none"
        >
          <Search className="w-4 h-4 md:w-3 md:h-3 text-[var(--foreground)]/50 group-hover:text-[var(--foreground)] transition-colors" />
          <span className="font-mono text-sm md:text-xs text-[var(--foreground)]/80 md:text-[var(--foreground)]/50 group-hover:text-[var(--foreground)] transition-colors">
            <span className="md:hidden">MENU</span>
            <span className="hidden md:inline">{osKey}</span>
          </span>
        </button>
      </div>
    </motion.header>
  );
}

