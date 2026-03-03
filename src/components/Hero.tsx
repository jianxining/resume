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
        {/* Avatar — museum frame */}
        <motion.div
          style={{ flex: "0 0 auto", position: "relative" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Outer frame — thick mat board */}
          <div
            style={{
              padding: "clamp(12px, 2vw, 22px)",
              background: "linear-gradient(145deg, #f0e8d5 0%, #e8ddc8 40%, #ede3ce 70%, #f2e9d8 100%)",
              borderRadius: "clamp(4px, 0.6vw, 8px)",
              boxShadow: [
                "0 2px 4px rgba(60,40,20,0.08)",
                "0 8px 24px rgba(60,40,20,0.12)",
                "0 24px 56px rgba(60,40,20,0.14)",
                "inset 0 1px 0 rgba(255,255,255,0.6)",
                "inset 0 -1px 0 rgba(120,90,50,0.15)",
              ].join(", "),
            }}
          >
            {/* Inner mat — subtle inset shadow */}
            <div
              style={{
                padding: "clamp(6px, 1vw, 10px)",
                background: "#f7f0e3",
                borderRadius: "clamp(2px, 0.3vw, 4px)",
                boxShadow: [
                  "inset 0 2px 8px rgba(80,55,25,0.18)",
                  "inset 0 0 0 1px rgba(120,90,50,0.12)",
                ].join(", "),
              }}
            >
              {/* Photo */}
              <div
                style={{
                  width: "clamp(140px, 20vw, 240px)",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  borderRadius: "1px",
                  boxShadow: "inset 0 0 0 1px rgba(80,55,25,0.1)",
                }}
              >
                <Image
                  src={avatorImg}
                  alt="陶孟春"
                  width={240}
                  height={320}
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(0.15) contrast(1.05) brightness(0.98)" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Small label below frame — gallery caption style */}
          <p
            style={{
              marginTop: "clamp(8px, 1.2vw, 12px)",
              textAlign: "center",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-faint)",
            }}
          >
            Tao Mengchun
          </p>
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
