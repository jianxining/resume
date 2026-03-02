"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java/Python", level: 90, color: "from-orange-400 to-red-500" },
  { name: "微服务架构", level: 85, color: "from-blue-400 to-indigo-500" },
  { name: "Redis/MySQL", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "RAG/Prompt Engineering", level: 80, color: "from-purple-400 to-pink-500" },
  { name: "React/Vue", level: 75, color: "from-green-400 to-emerald-500" },
  { name: "AI辅助开发(Vibe Coding)", level: 90, color: "from-indigo-400 to-purple-500" },
];

const techStack = [
  { category: "后端开发", items: ["Java", "Python", "Spring Boot", "FastAPI"] },
  { category: "Agent开发", items: ["Prompt Engineering", "RAG", "Tool Calling", "多Agent协作"] },
  { category: "数据库", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
  { category: "中间件", items: ["Kafka", "RabbitMQ", "Elasticsearch"] },
  { category: "微服务", items: ["DDD", "微服务拆分", "服务治理", "容器化"] },
  { category: "前端技术", items: ["React", "Vue", "TypeScript", "Tailwind CSS"] },
  { category: "DevOps", items: ["Git", "Docker", "CI/CD", "Linux"] },
  { category: "AI工具", items: ["LLM应用开发", "AI辅助编程", "自动化评测"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">专业技能</span>
          </h2>
          <p className="text-gray-400">全栈开发能力，专注Agent系统与后端架构</p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass rounded-xl p-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              className="glass rounded-xl p-4 hover:glow transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-indigo-400 font-medium mb-3 text-sm">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs bg-gray-800/50 rounded-md text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors cursor-default"
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