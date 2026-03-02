"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    title: "美团 C 端智能体 · 小美",
    summary: "参与美团 C 端 Central Agent 核心能力架构设计与功能开发，覆盖地址理解、订单搜索、智能推送三条用户高频链路。",
    highlights: [
      "地址选择：多级 RAG + 指代解析，模糊意图转精确坐标",
      "订单搜索：双链路架构 + 多角色协作，工具可用率 95%",
      "营销推送：LLM 动态生成个性化文案，高并发稳定运行",
    ],
    tags: ["Prompt Engineering", "RAG", "Multi-Agent", "LLM"],
  },
  {
    index: "02",
    title: "Hidream.ai 内容社区",
    summary: "基于 DDD 架构设计微服务化内容社区，承接模型生产内容，支撑百万级用户社交互动场景。",
    highlights: [
      "关系表分库分表 + 缓存化，接口响应优化至 50ms",
      "消息队列驱动异步通知，策略模式统一管理",
      "动态 / 评论 / 点赞完整社交链路",
    ],
    tags: ["DDD", "微服务", "Kafka", "Redis", "PostgreSQL"],
  },
  {
    index: "03",
    title: "团购到家",
    summary: "完整电商团购系统，支持微信扫码登录、支付宝支付及高并发秒杀场景。",
    highlights: [
      "分片扫描 + 延迟消息，保障超时取消一致性",
      "Redis 分布式锁限购控制 + 缓存预热支撑秒杀",
      "乐观锁 + 异步队列保障并发安全",
    ],
    tags: ["Java", "Spring Boot", "Redis", "RocketMQ"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="section"
      style={{ backgroundColor: "var(--color-bg-paper)" }}
      ref={ref}
    >
      <div className="content-wrap-wide">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label mb-3" style={{ color: "var(--color-accent)" }}>
            02 — Works
          </p>
          <h2 className="text-title" style={{ color: "var(--color-ink)" }}>
            代表作品
          </h2>
        </motion.div>

        {/* Auto-fit grid: 3 → 2 → 1 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="rounded-2xl card-pad flex flex-col"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(100, 70, 40, 0.1)" }}
            >
              {/* Index */}
              <span
                className="block text-5xl font-bold mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-border-strong)",
                }}
              >
                {project.index}
              </span>

              {/* Title */}
              <h3
                className="text-base font-semibold mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
              >
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-body text-sm mb-5 flex-1">{project.summary}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-xs leading-relaxed"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
