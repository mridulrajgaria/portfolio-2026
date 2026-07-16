"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function LiquidImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const filterId = React.useId();
  
  const springConfig = { damping: 15, stiffness: 120, mass: 0.5 };
  const hoverSpring = useSpring(0, springConfig);

  useEffect(() => {
    hoverSpring.set(isHovered ? 1 : 0);
  }, [isHovered, hoverSpring]);

  // Interpolate filter attributes for a smooth liquid transition
  const baseFreq = useTransform(hoverSpring, [0, 1], ["0.00", "0.03"]);
  const displaceScale = useTransform(hoverSpring, [0, 1], ["0", "40"]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <motion.feTurbulence
            type="fractalNoise"
            baseFrequency={baseFreq as any}
            numOctaves="3"
            result="noise"
          />
          <motion.feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={displaceScale as any}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div
        className="w-full h-full transform-gpu"
        style={{ filter: `url(#${filterId})` }}
      >
        <div className={`w-full h-full transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
