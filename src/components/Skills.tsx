"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    category: "Agent 开发",
    items: ["Multi-Agent 系统设计", "RAG 检索优化", "Prompt Engineering"],
  },
  {
    category: "后端工程",
    items: ["微服务架构", "高并发系统", "DDD 领域驱动"],
  },
  {
    category: "技术栈",
    items: ["Java · Python", "Spring Boot · FastAPI", "Redis · Kafka"],
  },
  {
    category: "工程方法",
    items: ["AI 辅助开发", "快速原型迭代", "系统拆分与治理"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--color-bg-paper)" }}
      ref={ref}
    >
      <div className="content-wrap">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label mb-3" style={{ color: "var(--color-accent)" }}>
            02 — Capabilities
          </p>
          <h2 className="text-title" style={{ color: "var(--color-ink)" }}>
            能力图谱
          </h2>
        </motion.div>

        {/* Rows */}
        <div>
          {capabilities.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(76px, 16%, 140px) 1fr",
                  gap: "clamp(24px, 5vw, 64px)",
                  padding: "clamp(22px, 3vw, 36px) 0",
                  alignItems: "center",
                }}
              >
                {/* Left: serif label */}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.8125rem, 1.1vw, 0.9375rem)",
                    fontWeight: 400,
                    color: "var(--color-ink-muted)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                  }}
                >
                  {group.category}
                </span>

                {/* Right: serif italic, joined by em-dash spaced */}
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
                    color: "var(--color-ink)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                  }}
                >
                  {group.items.join("  ·  ")}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
