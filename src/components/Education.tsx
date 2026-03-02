"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const educations = [
  {
    school: "中国科学技术大学",
    degree: "软件工程 · 硕士",
    period: "2024.09 — 2027.06",
    location: "合肥",
    tag: "985 高校",
  },
  {
    school: "安徽师范大学",
    degree: "人工智能 · 本科",
    period: "2020.09 — 2024.06",
    location: "芜湖",
    tag: null,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="education"
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
            04 — Education
          </p>
          <h2 className="text-title" style={{ color: "var(--color-ink)" }}>
            学术背景
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="space-y-5">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="rounded-2xl card-pad"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-bg-soft)" }}
                >
                  <GraduationCap size={20} style={{ color: "var(--color-ink-muted)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
                    >
                      {edu.school}
                    </h3>
                    {edu.tag && (
                      <span className="tag tag-accent">{edu.tag}</span>
                    )}
                  </div>
                  <p className="text-sm mb-1" style={{ color: "var(--color-accent)" }}>
                    {edu.degree}
                  </p>
                  <p className="text-small">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy note */}
        <motion.div
          className="mt-6 rounded-2xl p-6 md:p-8"
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "var(--color-bg-soft)" }}
            >
              <BookOpen size={18} style={{ color: "var(--color-ink-faint)" }} />
            </div>
            <div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
              >
                持续学习
              </h3>
              <p className="text-body text-sm leading-relaxed">
                持续关注大语言模型技术演进，熟练运用 AI 辅助开发范式进行原型构建与迭代。
                具备 Agent 系统设计经验，擅长 RAG 检索优化与 Prompt Engineering。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
