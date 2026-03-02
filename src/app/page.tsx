"use client";

import Navigation from "@/components/Navigation";
import OpeningScreen from "@/components/OpeningScreen";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--color-bg-paper)", color: "var(--color-ink)" }}>
      <OpeningScreen />
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />

      {/* Footer */}
      <footer className="py-10 md:py-14 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <p className="text-label mb-1">陶孟春 · Tao Mengchun</p>
        <p className="text-small">© {new Date().getFullYear()} · 用 AI 重塑产品体验</p>
      </footer>
    </main>
  );
}
