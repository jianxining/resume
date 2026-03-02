"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F7] text-[#1A1A1A] overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Education />

      {/* Footer */}
      <footer className="py-8 md:py-12 text-center border-t border-black/[0.08]">
        <p className="text-[#6B6B6B] text-sm">© {new Date().getFullYear()} 陶孟春</p>
      </footer>
    </main>
  );
}
