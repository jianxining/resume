"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">教育背景</span>
          </h2>
          <p className="text-gray-400">扎实的技术基础，持续的学习能力</p>
        </motion.div>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="glass rounded-2xl p-6 hover:glow transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                    {edu.tag && (
                      <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-full">
                        {edu.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400 mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.period} · {edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-8 glass rounded-2xl p-6 hover:glow transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <BookOpen size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold">技能特长</h3>
          </div>

          <p className="text-gray-300 leading-relaxed">
            持续关注大语言模型技术演进，熟练运用 AI 辅助开发范式（Vibe Coding）进行原型构建与迭代开发。
            具备 Agent 系统设计与开发经验，擅长 RAG 检索优化、Prompt Engineering 及高并发系统协同。
          </p>
        </motion.div>
      </div>
    </section>
  );
}