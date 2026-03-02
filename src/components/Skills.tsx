"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const coreSkills = [
  "Java / Python",
  "微服务架构",
  "RAG / Prompt Engineering",
  "AI辅助开发 (Vibe Coding)",
  "高并发系统设计",
];

const techStack = [
  { category: "后端开发", items: ["Java", "Python", "Spring Boot", "FastAPI"] },
  { category: "Agent开发", items: ["Prompt Engineering", "RAG", "Tool Calling", "多Agent协作"] },
  { category: "数据库", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
  { category: "中间件", items: ["Kafka", "RabbitMQ", "Elasticsearch"] },
  { category: "微服务", items: ["DDD", "微服务拆分", "服务治理", "容器化"] },
  { category: "DevOps", items: ["Git", "Docker", "CI/CD", "Linux"] },
  { category: "AI工具", items: ["LLM应用开发", "AI辅助编程", "自动化评测"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-title text-[#1A1A1A] mb-3">专业技能</h2>
          <p className="text-body max-w-2xl">全栈开发能力，专注Agent系统与后端架构</p>
        </motion.div>

        {/* Core skills tag cloud */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {coreSkills.map((skill, index) => (
            <motion.span
              key={skill}
              className="tag tag-accent px-4 py-2 text-sm md:text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.07, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              className="bg-white rounded-xl p-4 md:p-5 border border-black/[0.08] hover:border-black/[0.15] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
            >
              <h3 className="text-[#C46849] font-medium mb-3 text-xs md:text-sm uppercase tracking-wide">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs md:text-sm bg-[#FAF9F7] rounded-md text-[#6B6B6B] hover:bg-[#F5F4F2] transition-colors cursor-default"
                  >
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
