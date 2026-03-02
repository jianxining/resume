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
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundColor: "var(--color-bg-paper)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5.5vw, 80px)",
      }}
    >
      {/* Inner: flex-wrap — side by side on wide, stacked on narrow */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "center",
          justifyContent: "center",
          width: "min(860px, 100%)",
          margin: "0 auto",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Avatar — portrait rectangle */}
        <motion.div
          style={{ flex: "0 0 auto" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            style={{
              width: "clamp(110px, 16vw, 180px)",
              aspectRatio: "3 / 4",
              borderRadius: "clamp(10px, 1.5vw, 16px)",
              overflow: "hidden",
              border: "1px solid var(--color-border-strong)",
              boxShadow: "0 8px 32px rgba(80, 55, 30, 0.12)",
            }}
          >
            <Image
              src={avatorImg}
              alt="陶孟春"
              width={180}
              height={240}
              className="w-full h-full object-cover"
              style={{ filter: "sepia(0.1) contrast(1.04)" }}
              priority
            />
          </div>
        </motion.div>

        {/* Text block */}
        <motion.div
          style={{
            flex: "1 1 clamp(260px, 40vw, 440px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.6vw, 18px)",
          }}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          {/* Kicker */}
          <p className="text-label" style={{ color: "var(--color-ink-faint)" }}>
            软件工程 · 中国科学技术大学在读
          </p>

          {/* Name */}
          <h1 className="text-display" style={{ color: "var(--color-ink)" }}>
            陶孟春
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
              color: "var(--color-ink-muted)",
              lineHeight: 1.5,
            }}
          >
            用 AI 重塑产品体验的工程师
          </p>

          {/* Philosophy */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(0.8125rem, 1.1vw, 0.9375rem)",
              color: "var(--color-ink-faint)",
              letterSpacing: "0.02em",
              lineHeight: 1.7,
            }}
          >
            「工程是骨架，AI 是翅膀，体验是终点。」
          </p>

          {/* Divider */}
          <div
            style={{
              width: "clamp(32px, 5vw, 48px)",
              height: "1px",
              backgroundColor: "var(--color-border-strong)",
            }}
          />

          {/* Contact info */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(10px, 2vw, 20px)",
            }}
          >
            <span
              className="flex items-center gap-1.5 text-small"
              style={{ color: "var(--color-ink-faint)" }}
            >
              <MapPin size={12} />
              合肥 · 北京
            </span>
            <span
              className="flex items-center gap-1.5 text-small cursor-pointer transition-colors duration-200"
              style={{ color: "var(--color-ink-faint)" }}
              title="点击复制邮箱"
              onClick={() => copyToClipboard("tmengchun@163.com", "邮箱")}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-faint)")}
            >
              <Mail size={12} />
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
              <Phone size={12} />
              177-3011-3847
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

      {toastMsg && <div className="toast">{toastMsg}</div>}
    </section>
  );
}
