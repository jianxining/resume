"use client";

import OpeningScreen from "@/components/OpeningScreen";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--color-bg-paper)", color: "var(--color-ink)" }}>
      <OpeningScreen />
      <Hero />
      <Experience />
      <Skills />
      <Education />

      {/* Footer */}
      <footer className="py-10 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <p className="text-small">© {new Date().getFullYear()} 陶孟春</p>
      </footer>
    </main>
  );
}
