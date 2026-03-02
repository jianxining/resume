"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CURTAIN_EASE = [0.2, 0.8, 0.2, 1] as const;

export default function OpeningScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("opening-seen");
    if (!seen) {
      setVisible(true);
    }
  }, []);

  const dismiss = useCallback(() => {
    setLeaving(true);
    sessionStorage.setItem("opening-seen", "1");
    // unmount after animation
    setTimeout(() => setVisible(false), 1000);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#1F1913" }}
        >
          {/* Left curtain */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ backgroundColor: "#1F1913", originX: 0 }}
            initial={{ x: 0 }}
            animate={leaving ? { x: "-100%" } : {}}
            transition={{ duration: 0.88, ease: CURTAIN_EASE }}
          />

          {/* Right curtain */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{ backgroundColor: "#1F1913", originX: 1 }}
            initial={{ x: 0 }}
            animate={leaving ? { x: "100%" } : {}}
            transition={{ duration: 0.88, ease: CURTAIN_EASE }}
          />

          {/* Center content */}
          <motion.div
            className="relative z-10 text-center px-8 select-none"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.18, duration: 0.64 }}
          >
            {/* Kicker */}
            <p
              className="mb-6 tracking-[0.2em] uppercase text-xs"
              style={{ color: "rgba(245, 239, 224, 0.4)", fontFamily: "var(--font-sans)" }}
            >
              Personal Portfolio · 2025
            </p>

            {/* Name */}
            <h1
              className="mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                color: "#F5EFE0",
                letterSpacing: "-0.01em",
              }}
            >
              陶孟春
            </h1>

            {/* Tagline */}
            <p
              className="mb-12"
              style={{
                color: "rgba(245, 239, 224, 0.55)",
                fontSize: "clamp(0.875rem, 2vw, 1.1rem)",
                letterSpacing: "0.06em",
              }}
            >
              用 AI 重塑产品体验的工程师
            </p>

            {/* Enter button */}
            <button
              onClick={dismiss}
              className="group relative inline-flex items-center gap-3"
              style={{ color: "rgba(245, 239, 224, 0.7)" }}
            >
              <span
                className="block w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "#8A3F33" }}
              />
              <span
                className="text-xs tracking-[0.14em] uppercase transition-colors duration-200 group-hover:text-[#F5EFE0]"
              >
                进入
              </span>
              <span
                className="block w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "#8A3F33" }}
              />
            </button>

            {/* Hint */}
            <p
              className="mt-6 text-xs tracking-widest"
              style={{ color: "rgba(245, 239, 224, 0.2)" }}
            >
              Press ESC to skip
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
