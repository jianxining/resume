"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java/Python", level: 90 },
  { name: "微服务架构", level: 85 },
  { name: "Redis/MySQL", level: 85 },
  { name: "RAG/Prompt Engineering", level: 80 },
  { name: "AI辅助开发(Vibe Coding)", level: 90 },
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

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white rounded-xl p-4 md:p-5 border border-black/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-[#1A1A1A] text-sm md:text-base">{skill.name}</span>
                <span className="text-[#6B6B6B] text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#EFEDEA] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#C46849] rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

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
