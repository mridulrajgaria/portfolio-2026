"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Folder, Mail, User, Code, FileText, Moon, Zap, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useUISound } from "@/hooks/useUISound";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const { playHover, playClick } = useUISound();

  // Toggle the menu when âŒ˜K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const handleCustomEvent = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-command-palette", handleCustomEvent);
    
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-palette", handleCustomEvent);
    };
  }, []);

  const runCommand = (command: () => void) => {
    playClick();
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-[var(--background)]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onAnimationStart={() => playClick()}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[var(--background)] border border-[var(--muted)]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <Command
              className="w-full h-full flex flex-col"
              shouldFilter={true}
            >
              <div className="flex items-center px-4 border-b border-[var(--muted)]/20" cmdk-input-wrapper="">
                <Search className="w-5 h-5 text-[var(--muted)] mr-3 shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent border-none outline-none text-[var(--foreground)] font-mono text-sm h-14 placeholder:text-[var(--muted)]"
                />
              </div>

              <Command.List className="max-h-[400px] overflow-y-auto p-2 scrollbar-none">
                <Command.Empty className="py-6 text-center text-[var(--muted)] font-mono text-sm">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-3">
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }))
                    }
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <User className="w-4 h-4" /> Go to About
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }))
                    }
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <Folder className="w-4 h-4" /> Go to Experience
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }))
                    }
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <Code className="w-4 h-4" /> Go to Projects
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Theme Engine" className="px-2 py-3 border-t border-[var(--muted)]/10">
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("dark"))}
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <Moon className="w-4 h-4" /> Dark Mode
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("cyberpunk"))}
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors text-[#00ffcc]"
                  >
                    <Zap className="w-4 h-4" /> Cyberpunk Mode
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("brutalist"))}
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <Monitor className="w-4 h-4" /> Brutalist Mode
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Quick Actions" className="px-2 py-3 border-t border-[var(--muted)]/10">
                  <Command.Item
                    onSelect={() => {
                      runCommand(() => {
                        navigator.clipboard.writeText("iammridul222@gmail.com");
                        alert("Email copied to clipboard!");
                      });
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Copy Email Address
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      runCommand(() => {
                        window.open("https://github.com/mridulrajgaria", "_blank");
                      });
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center gap-3 px-3 py-2 text-[var(--foreground)]/70 font-mono text-sm rounded-lg hover:bg-[var(--foreground)]/10 cursor-pointer aria-selected:bg-[var(--foreground)]/10 transition-colors"
                  >
                    <FileText className="w-4 h-4" /> View GitHub Profile
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

