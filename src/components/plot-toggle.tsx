"use client";

import { motion } from "motion/react";
import { useSyncExternalStore } from "react";
import { easePlot } from "@/lib/motion";

type Mode = "light" | "dark";

const modes: { id: Mode; label: string }[] = [
  { id: "light", label: "Sheet" },
  { id: "dark", label: "Plot" },
];

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-plot"],
  });
  return () => observer.disconnect();
}

function readMode(): Mode {
  return document.documentElement.getAttribute("data-plot") === "dark" ? "dark" : "light";
}

function serverMode(): Mode {
  return "light";
}

export function PlotToggle() {
  const mode = useSyncExternalStore(subscribe, readMode, serverMode);

  const apply = (next: Mode) => {
    document.documentElement.setAttribute("data-plot", next);
    try {
      window.localStorage.setItem("plot", next);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <div role="group" aria-label="Drawing background" className="relative flex h-full items-stretch">
      {modes.map((option) => {
        const active = mode === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => apply(option.id)}
            className={`relative isolate px-3 text-[0.5625rem] uppercase tracking-[0.18em] mono-tight transition-colors duration-300 ${
              active ? "text-sheet" : "text-ink-3 hover:text-ink"
            }`}
          >
            {active ? (
              <motion.span
                aria-hidden
                layoutId="plot-indicator"
                className="absolute inset-0 -z-10 bg-ink"
                transition={{ duration: 0.35, ease: easePlot }}
              />
            ) : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
