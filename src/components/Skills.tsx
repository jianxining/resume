"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-400 to-indigo-500" },
  { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
  { name: "Vue.js", level: 80, color: "from-green-400 to-emerald-500" },
  { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-teal-500" },
];

const techStack = [
  { category: "前端框架", items: ["React", "Vue 3", "Next.js", "Nuxt.js"] },
  { category: "语言", items: ["TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { category: "状态管理", items: ["Redux", "Zustand", "Pinia", "MobX"] },
  { category: "构建工具", items: ["Webpack", "Vite", "Rollup", "esbuild"] },
  { category: "UI 框架", items: ["Ant Design", "Tailwind CSS", "shadcn/ui", "Material UI"] },
  { category: "可视化", items: ["ECharts", "D3.js", "Three.js", "Canvas"] },
  { category: "后端/数据库", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "工程化", items: ["Git", "Docker", "CI/CD", "Jest"] },
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
          <p className="text-gray-400">4 年前端开发积累的技术栈</p>
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