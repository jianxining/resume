"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const coreSkills = [
  "Java / Python",
  "微服务架构",
  "RAG / Prompt Engineering",
  "AI 辅助开发 (Vibe Coding)",
  "高并发系统设计",
  "Multi-Agent 协作",
];

const techStack = [
  { category: "后端开发", items: ["Java", "Python", "Spring Boot", "FastAPI"] },
  { category: "Agent 开发", items: ["Prompt Engineering", "RAG", "Tool Calling", "多 Agent 协作"] },
  { category: "数据库", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
  { category: "中间件", items: ["Kafka", "RabbitMQ", "Elasticsearch"] },
  { category: "微服务", items: ["DDD", "微服务拆分", "服务治理", "容器化"] },
  { category: "DevOps", items: ["Git", "Docker", "CI/CD", "Linux"] },
  { category: "AI 工具", items: ["LLM 应用开发", "AI 辅助编程", "自动化评测"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
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

        {/* Core skills */}
        <motion.div
          className="flex flex-wrap gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {coreSkills.map((skill, index) => (
            <motion.span
              key={skill}
              className="tag tag-accent px-4 py-2 text-sm"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.07, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Tech stack grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              className="rounded-xl p-5 transition-all duration-240"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + index * 0.05, duration: 0.4 }}
              whileHover={{ borderColor: "var(--color-border-strong)" }}
            >
              <h3
                className="text-label mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
