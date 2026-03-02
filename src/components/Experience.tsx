"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "美团",
    role: "Agent 开发工程师 · 到家事业群",
    period: "2025.08 — 至今",
    location: "北京",
    summary: "构建 C 端核心 Agent 能力，覆盖地址理解、订单搜索、智能推送三条链路。",
    highlights: [
      "地址选择模块：多级 RAG + 上下文推理，意图识别准确率显著提升",
      "订单搜索 Agent：多角色协作架构，覆盖全品类商户搜索场景",
      "通知系统：LLM 动态生成个性化推送，高并发稳定运行",
    ],
    tags: ["Prompt Engineering", "RAG", "Multi-Agent", "LLM", "高并发"],
  },
  {
    company: "Hidream.ai",
    role: "后端开发工程师",
    period: "2025.06 — 2025.08",
    location: "远程",
    summary: "基于 DDD 架构设计内容社区平台微服务，主导核心社交功能落地。",
    highlights: [
      "关系表分库分表方案，查询性能提升 60%",
      "消息队列驱动的异步通知系统，峰值流量削峰填谷",
      "动态 / 评论 / 点赞完整社交链路",
    ],
    tags: ["DDD", "微服务", "Kafka", "Redis", "PostgreSQL"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="section"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
      ref={ref}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label mb-3" style={{ color: "var(--color-accent)" }}>
            01 — Internship
          </p>
          <h2 className="text-title" style={{ color: "var(--color-ink)" }}>
            实践经历
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="md:pl-10 relative"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.55 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />

                {/* Card */}
                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
                    >
                      {exp.company}
                    </h3>
                    <span className="text-small">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  {/* Role */}
                  <p
                    className="text-xs mb-5"
                    style={{ color: "var(--color-accent)", letterSpacing: "0.06em" }}
                  >
                    {exp.role}
                  </p>

                  {/* Summary */}
                  <p className="text-body mb-5">{exp.summary}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
