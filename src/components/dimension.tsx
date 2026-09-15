"use client";

import { motion } from "motion/react";
import { easePlot } from "@/lib/motion";

function EndTick({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      className={`hidden shrink-0 sm:block ${flip ? "rotate-180" : ""}`}
    >
      <path d="M1 0v14" stroke="currentColor" strokeWidth="1" />
      <path d="M1 7h8M6 4l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

export function Dimension({ label, className = "" }: { label: string; className?: string }) {
  return (
    <motion.div
      className={`flex w-full min-w-0 items-center gap-2 border-y border-rule-strong py-3 text-ink-3 sm:border-0 sm:py-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.85 }}
    >
      <EndTick />
      <motion.span
        className="hidden h-px flex-1 origin-left bg-rule-strong sm:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: easePlot }}
      />
      <span className="mono-tight min-w-0 text-[0.5625rem] uppercase leading-relaxed tracking-[0.14em] text-ink-2 sm:shrink-0 sm:text-[0.6875rem] sm:tracking-[0.16em]">
        {label}
      </span>
      <motion.span
        className="hidden h-px flex-1 origin-right bg-rule-strong sm:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: easePlot }}
      />
      <EndTick flip />
    </motion.div>
  );
}
