"use client";

import { motion } from "motion/react";
import { easePlot } from "@/lib/motion";

export function DrawRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`h-px origin-left bg-rule-strong ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ duration: 0.9, ease: easePlot }}
    />
  );
}
