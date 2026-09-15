"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { easePlot } from "@/lib/motion";

export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: easePlot }}>
      {children}
    </MotionConfig>
  );
}
