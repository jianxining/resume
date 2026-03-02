"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const educations = [
  {
    school: "中国科学技术大学",
    degree: "软件工程 · 硕士",
    period: "2024.09 - 2027.06",
    location: "合肥",
    tag: "985高校",
  },
  {
    school: "安徽师范大学",
    degree: "人工智能 · 本科",
    period: "2020.09 - 2024.06",
    location: "芜湖",
    tag: null,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="section bg-[#F5F4F2]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-title text-[#1A1A1A] mb-4">教育背景</h2>
          <p className="text-lg text-[#6B6B6B]">扎实的技术基础，持续的学习能力</p>
        </motion.div>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="card p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">{edu.school}</h3>
                    {edu.tag && (
                      <span className="tag tag-accent">
                        {edu.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[#C46849] font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-[#9B9B9B]">{edu.period} · {edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-8 card p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EFEDEA] flex items-center justify-center flex-shrink-0">
              <BookOpen size={24} className="text-[#6B6B6B]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">技能特长</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                持续关注大语言模型技术演进，熟练运用 AI 辅助开发范式（Vibe Coding）进行原型构建与迭代开发。
                具备 Agent 系统设计与开发经验，擅长 RAG 检索优化、Prompt Engineering 及高并发系统协同。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
