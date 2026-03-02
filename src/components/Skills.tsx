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
    items: ["Java · Python", "Spring Boot · FastAPI", "微服务 · DDD", "高并发系统设计"],
  },
  {
    category: "数据与存储",
    items: ["MySQL · PostgreSQL", "Redis · MongoDB", "Kafka · Elasticsearch"],
  },
  {
    category: "工程实践",
    items: ["AI 辅助开发", "Docker · CI/CD", "系统拆分与治理", "快速原型迭代"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
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
            03 — Capabilities
          </p>
          <h2 className="text-title" style={{ color: "var(--color-ink)" }}>
            能力图谱
          </h2>
        </motion.div>

        {/* Two-column capability list */}
        <div className="space-y-0">
          {capabilities.map((group, index) => (
            <motion.div
              key={group.category}
              className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-7"
              style={{ borderTop: "1px solid var(--color-border)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              {/* Left: category */}
              <div className="sm:w-36 flex-shrink-0">
                <span
                  className="text-label"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  {group.category}
                </span>
              </div>

              {/* Right: items */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-body"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
