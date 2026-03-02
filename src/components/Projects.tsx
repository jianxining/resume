"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    title: "美团 C 端智能体 · 小美",
    summary: "参与美团 C 端 Central Agent 核心能力架构设计与功能开发，覆盖地址理解、订单搜索、智能推送三条用户高频链路。",
    highlights: [
      "地址选择模块：多级 RAG + 指代解析 Tool，将模糊意图转化为精确地址坐标",
      "订单搜索 Agent：实时在线 + 全量离线双链路架构，多角色协作，工具可用率达 95%",
      "营销通知系统：LLM 动态生成个性化推送文案，高并发稳定运行",
    ],
    tags: ["Prompt Engineering", "RAG", "Multi-Agent", "LLM"],
    featured: true,
  },
  {
    index: "02",
    title: "Hidream.ai 内容社区平台",
    summary: "基于 DDD 架构设计微服务化内容社区，承接模型生产内容，支撑百万级用户社交互动场景。",
    highlights: [
      "核心关系表分库分表 + 缓存化，接口响应优化至 50ms",
      "消息队列驱动异步通知系统，策略模式统一管理多类型通知",
      "动态 / 评论 / 点赞完整社交链路",
    ],
    tags: ["DDD", "微服务", "Kafka", "Redis", "PostgreSQL"],
    featured: true,
  },
  {
    index: "03",
    title: "团购到家",
    summary: "完整电商团购系统，支持微信扫码登录、支付宝支付及高并发秒杀场景。",
    highlights: [
      "分片扫描 + 延迟消息双机制，保障订单超时取消一致性",
      "Redis 分布式锁实现限购控制，结合缓存预热支撑秒杀高并发",
      "乐观锁 + 异步队列保障普通订单并发安全",
    ],
    tags: ["Java", "Spring Boot", "Redis", "RocketMQ"],
    featured: false,
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
      <div className="content-wrap">
        {/* Header */}
        <motion.div
          className="mb-14"
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

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="rounded-2xl card-pad transition-all duration-240"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(100, 70, 40, 0.1)" }}
            >
              {/* Index + title row */}
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-4xl font-bold leading-none flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-border-strong)",
                    lineHeight: 1,
                  }}
                >
                  {project.index}
                </span>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Summary */}
              <p className="text-body mb-5 pl-14">{project.summary}</p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6 pl-14">
                {project.highlights.map((h) => (
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
              <div className="flex flex-wrap gap-2 pl-14">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
