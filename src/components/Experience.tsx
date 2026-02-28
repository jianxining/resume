"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "百分点科技",
    role: "前端开发工程师",
    period: "2021.07 - 至今",
    location: "北京",
    description: "负责 AI 智能问答平台和数据可视化平台的前端开发工作",
    achievements: [
      "主导 AI 智能问答平台前端架构设计，使用 React + TypeScript 构建可扩展的前端系统",
      "开发可配置化数据可视化平台，支持 20+ 种图表类型，提升数据展示效率 40%",
      "优化首屏加载速度，从 4s 优化至 1.5s，提升用户体验",
      "建立前端监控体系，主动发现并解决问题，线上故障率降低 60%",
      "推动团队技术规范建设，编写技术文档和最佳实践指南",
    ],
    tech: ["React", "TypeScript", "ECharts", "Ant Design", "Redux"],
  },
  {
    company: "某互联网公司",
    role: "前端开发工程师",
    period: "2019.07 - 2021.06",
    location: "北京",
    description: "负责公司核心业务系统的前端开发",
    achievements: [
      "开发并维护企业级管理系统，服务 500+ 内部用户",
      "封装通用组件库，提升团队开发效率 30%",
      "参与前端性能优化，页面加载速度提升 50%",
    ],
    tech: ["Vue.js", "Element UI", "JavaScript", "Webpack"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">工作经历</span>
          </h2>
          <p className="text-gray-400">持续学习，不断成长</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 md:left-auto md:right-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-1/2 md:translate-x-1/2 mt-1.5 glow" />

              <div className="glass rounded-2xl p-6 hover:glow transition-all duration-300 ml-6 md:ml-0">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}