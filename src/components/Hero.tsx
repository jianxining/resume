"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import avatorImg from "../../public/avator.jpeg";

export default function Hero() {
  const [toastMsg, setToastMsg] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMsg(`已复制 ${label} ✓`);
      setTimeout(() => setToastMsg(""), 2000);
    });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{ backgroundColor: "var(--color-bg-paper)" }}
    >
      <motion.div
        className="text-center max-w-2xl mx-auto pt-24 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Avatar */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden"
            style={{
              border: "3px solid var(--color-border-strong)",
              boxShadow: "0 4px 24px rgba(100, 70, 40, 0.1)",
            }}
          >
            <Image
              src={avatorImg}
              alt="陶孟春"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              style={{ filter: "sepia(0.12) contrast(1.02)" }}
              priority
            />
          </div>
        </motion.div>

        {/* Kicker */}
        <motion.p
          className="text-label mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          软件工程师 · 中国科学技术大学
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-display mb-5"
          style={{ color: "var(--color-ink)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          陶孟春
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-subtitle mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          用 AI 重塑产品体验的工程师
        </motion.p>

        {/* Philosophy */}
        <motion.p
          className="mb-10 text-sm italic"
          style={{
            color: "var(--color-ink-faint)",
            letterSpacing: "0.03em",
            fontFamily: "var(--font-serif)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          「工程是骨架，AI 是翅膀，体验是终点。」
        </motion.p>

        {/* Meta info */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <span
            className="flex items-center gap-1.5 text-small"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <MapPin size={13} />
            合肥 / 北京
          </span>
          <span
            className="flex items-center gap-1.5 text-small cursor-pointer transition-colors duration-200"
            style={{ color: "var(--color-ink-faint)" }}
            title="点击复制邮箱"
            onClick={() => copyToClipboard("tmengchun@163.com", "邮箱")}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-faint)")}
          >
            <Mail size={13} />
            tmengchun@163.com
          </span>
          <span
            className="flex items-center gap-1.5 text-small cursor-pointer transition-colors duration-200"
            style={{ color: "var(--color-ink-faint)" }}
            title="点击复制电话"
            onClick={() => copyToClipboard("17730113847", "电话")}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-faint)")}
          >
            <Phone size={13} />
            177-3011-3847
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="btn-primary inline-flex items-center justify-center"
          >
            查看经历
          </a>
          <a
            href="#projects"
            className="btn-secondary inline-flex items-center justify-center"
          >
            代表作品
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-10"
          style={{ backgroundColor: "var(--color-border-strong)" }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Copy toast */}
      {toastMsg && <div className="toast">{toastMsg}</div>}
    </section>
  );
}
