"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    category: "Agent 开发",
    items: ["Prompt Engineering", "RAG 检索优化", "Tool Calling", "Multi-Agent 协作", "LLM 应用开发"],
  },
  {
    category: "后端工程",
    items: ["Java", "Python", "Spring Boot", "微服务架构", "DDD", "高并发系统设计"],
  },
  {
    category: "数据与存储",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Kafka", "Elasticsearch"],
  },
  {
    category: "工程实践",
    items: ["AI 辅助开发", "Docker", "CI/CD", "系统拆分与治理", "快速原型迭代"],
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

        {/* Capability rows — mi-chow style */}
        <div>
          {capabilities.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(80px, 18%, 160px) 1fr",
                  gap: "clamp(20px, 4vw, 56px)",
                  padding: "clamp(18px, 2.5vw, 26px) 0",
                  alignItems: "baseline",
                }}
              >
                {/* Left: category label */}
                <span
                  className="text-label"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  {group.category}
                </span>

                {/* Right: items joined by · */}
                <p
                  style={{
                    color: "var(--color-ink-muted)",
                    fontSize: "clamp(0.8125rem, 1.2vw, 0.9375rem)",
                    lineHeight: 1.7,
                    letterSpacing: "0.01em",
                  }}
                >
                  {group.items.join(" · ")}
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
