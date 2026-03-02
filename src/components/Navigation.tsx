"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "实践经历", href: "#experience" },
  { name: "代表作品", href: "#projects" },
  { name: "能力图谱", href: "#skills" },
  { name: "学术背景", href: "#education" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrap-wide px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
        >
          陶孟春
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-label relative group transition-colors duration-200"
              style={{ color: "var(--color-ink-faint)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-faint)")}
            >
              {item.name}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--color-ink-muted)" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-2 mx-4 rounded-xl p-5"
          style={{
            backgroundColor: "rgba(245, 239, 224, 0.95)",
            backdropFilter: "blur(14px)",
            border: "1px solid var(--color-border)",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2.5 text-label transition-colors"
              style={{ color: "var(--color-ink-muted)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
