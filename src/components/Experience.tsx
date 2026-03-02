"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "美团",
    role: "Agent开发工程师",
    period: "2025.08 - 至今",
    location: "北京",
    description: "参与美团C端智能体"小美"的 Central Agent能力构建设计与核心功能开发，聚焦工具链建设、RAG系统优化及智能体交互体验提升",
    achievements: [
      "外卖/闪购场景下的用户地址选择模块：通过新增"指代地址转具体地址"Tool，对接美团地址中台，将模糊意图转化为标准地址坐标",
      "从0到1搭建订单搜索Agent：设计实时在线、全量离线双链路数据同步架构，构建高效的订单RAG检索基座",
      "订单搜工具的可用一分率从基线跃升至95%，设计了多级重试与规则过滤兜底策略",
      "多Agent角色与小美营销工程实现：新增Agent角色配置，实现基于配置系统的角色动态切换和不同角色Prompt、记忆隔离",
      "设计红包领取的逻辑状态机，处理"发放-领取-核销"全流程，参与全链路压测",
    ],
    tech: ["Prompt Engineering", "RAG", "Agent", "LLM", "高并发系统"],
  },
  {
    company: "Hidream.ai",
    role: "后端开发工程师",
    period: "2025.06 - 2025.08",
    location: "远程",
    description: "基于DDD领域驱动设计的微服务化内容社区平台，承接上游模型生产内容，负责内容完整生命周期管理和百万级用户的社交互动场景",
    achievements: [
      "参与设计和优化社区系统中的核心关系表，支撑用户互动、内容关联等多种社交场景",
      "支持正反向查询和核心关系表缓存化，接口响应时长优化到50ms",
      "设计并实现了基于消息队列的社区通知系统，支持点赞、评论、关注等多种社交互动通知",
      "采用工厂模式和策略模式设计通知处理器，实现了不同通知类型的统一管理",
    ],
    tech: ["DDD", "微服务", "消息队列", "Redis", "PostgreSQL"],
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
            <span className="gradient-text">实习经历</span>
          </h2>
          <p className="text-gray-400">在一线互联网公司积累实战经验</p>
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
