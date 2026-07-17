# Mridul Rajgaria — Architecture & Systems Portfolio

A cinematic, highly interactive portfolio engineered to showcase backend architecture, full-stack systems, and engineering philosophy. Built with a focus on low-latency interfaces and human-centric design.

## Features

- **Command Palette (`Ctrl+K` / `⌘K`)**: A fully functional, keyboard-driven navigation system built with `cmdk` for rapid access to themes, sections, and actions.
- **Dynamic Theme Engine**: Three distinct aesthetic modes powered by `next-themes` and CSS variables:
  - `Dark` (Default cinematic engineering vibe)
  - `Cyberpunk` (Neon accents and high contrast)
  - `Brutalist` (Stark, high-impact monochrome)
- **Fluid Smooth Scrolling**: Hardware-accelerated smooth scrolling using `@studio-freight/react-lenis`.
- **Interactive Demos**: Continuous, ambient framer-motion animations representing core architectural concepts (Gateways, Data Pipelines, etc.) that run dynamically on both desktop and mobile.
- **Sound Design**: Integrated micro-interaction sound engine utilizing `use-sound` for a tactile user experience.
- **Responsive Architecture**: Carefully optimized for seamless viewing across massive desktop monitors and mobile devices.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Headers) & JetBrains Mono (Code/UI elements)

## Getting Started

1. Clone the repository
2. Install dependencies (Note: The project uses `--legacy-peer-deps` for Vercel compatibility with React 19 and Lenis)
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
The included `.npmrc` file ensures strict peer-dependency checks are bypassed during Vercel's automated `npm install` phase.

---

© 2026 Mridul Rajgaria. Available for freelance opportunities and full-time roles in software engineering and system architecture.
