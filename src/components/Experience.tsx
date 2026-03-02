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
    description: "参与美团C端智能体「小美」的 Central Agent能力构建设计与核心功能开发，聚焦工具链建设、RAG系统优化及智能体交互体验提升",
    achievements: [
      "外卖/闪购场景下的用户地址选择模块：通过新增「指代地址转具体地址」Tool，对接美团地址中台，将模糊意图转化为标准地址坐标",
      "从0到1搭建订单搜索Agent：设计实时在线、全量离线双链路数据同步架构，构建高效的订单RAG检索基座",
      "订单搜工具的可用一分率从基线跃升至95%，设计了多级重试与规则过滤兜底策略",
      "多Agent角色与小美营销工程实现：新增Agent角色配置，实现基于配置系统的角色动态切换和不同角色Prompt、记忆隔离",
      "设计红包领取的逻辑状态机，处理「发放-领取-核销」全流程，参与全链路压测",
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
    <section id="experience" className="section bg-[var(--color-bg-secondary)]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-title mb-3">实习经历</h2>
          <p className="text-body max-w-xl mx-auto">在一线互联网公司积累实战经验</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              className="card p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-small">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-body mb-5 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="tag tag-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
