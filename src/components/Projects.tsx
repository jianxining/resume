"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "AI 智能问答平台",
    description: "基于大语言模型的企业级智能问答系统，支持多轮对话、知识库检索、答案溯源等功能",
    highlights: [
      "采用 React + TypeScript 技术栈，组件化开发",
      "实现流式输出效果，提升用户体验",
      "支持 Markdown 渲染和代码高亮",
      "实现虚拟列表优化长对话性能",
    ],
    tech: ["React", "TypeScript", "Redux", "Ant Design", "OpenAI API"],
    image: "/projects/ai-qa.png",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "数据可视化平台",
    description: "企业级数据可视化平台，支持拖拽式图表配置、实时数据更新、多维度数据分析",
    highlights: [
      "支持 20+ 种图表类型，包括 3D 可视化",
      "实现图表配置持久化与分享",
      "大数据量场景下性能优化",
      "自定义图表主题和样式",
    ],
    tech: ["Vue 3", "ECharts", "Pinia", "Element Plus", "WebSocket"],
    image: "/projects/dataviz.png",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "前端组件库",
    description: "基于 React 的企业级 UI 组件库，提供 50+ 高质量组件",
    highlights: [
      "完整的 TypeScript 类型支持",
      "支持主题定制和国际化",
      "完善的文档和单元测试",
    ],
    tech: ["React", "TypeScript", "Storybook", "Jest"],
    github: "#",
    featured: false,
  },
  {
    title: "低代码表单生成器",
    description: "可视化表单配置工具，支持拖拽生成复杂表单",
    highlights: [
      "JSON Schema 驱动",
      "支持自定义组件扩展",
      "表单联动和校验规则配置",
    ],
    tech: ["React", "Formily", "DnD Kit"],
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">项目经历</span>
          </h2>
          <p className="text-gray-400">从 0 到 1 构建有价值的产品</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={`p-6 ${project.featured ? "md:flex" : ""}`}>
                <div className={project.featured ? "md:w-2/3 md:pr-6" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center gap-1">
                        <Star size={10} />
                        精选
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-purple-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span>源码</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>演示</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}