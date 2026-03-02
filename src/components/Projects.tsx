"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "美团C端智能体 - 小美",
    description: "参与美团C端智能体小美的Central Agent能力架构设计与核心功能开发，聚焦工具链建设、RAG系统优化及智能体交互体验提升",
    highlights: [
      "外卖/闪购场景下的用户地址选择模块：通过新增指代地址转具体地址Tool，对接美团地址中台，构建地址标签映射将模糊意图转化为标准地址坐标",
      "从0到1搭建订单搜索Agent：设计实时在线、全量离线双链路数据同步架构，构建高效的订单RAG检索基座",
      "多级重试与规则过滤兜底策略：针对模型幻觉或检索真空期设计容错机制，推动订单搜工具可用一分率从基线跃升至95%",
      "多Agent角色与小美营销工程实现：新增Agent角色配置，构建独立的Agent对话场域，实现基于配置系统的角色动态切换和不同角色Prompt、记忆隔离",
    ],
    tech: ["React", "TypeScript", "Prompt Engineering", "RAG", "Agent设计"],
    featured: true,
  },
  {
    title: "Hidream.ai 内容社区平台",
    description: "基于DDD领域驱动设计的微服务化内容社区平台，承接上游模型生产内容，负责内容完整生命周期管理和百万级用户的社交互动场景",
    highlights: [
      "参与设计和优化社区系统中的核心关系表，支撑用户互动、内容关联等多种社交场景，支持正反向查询和核心关系表缓存化，接口响应时长优化到50ms",
      "设计并实现了基于消息队列的社区通知系统，支持点赞、评论、关注等多种社交互动通知",
      "采用工厂模式和策略模式设计通知处理器，实现了不同通知类型的统一管理",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Redis", "Kafka", "DDD"],
    featured: true,
  },
  {
    title: "团购到家",
    description: "完整的电商团购系统，支持微信扫码登录、支付宝支付、订单超时取消、秒杀等高并发场景",
    highlights: [
      "支持微信扫码进行登录鉴权，集成支付宝沙箱支付系统，通过异步通知与主动查询双机制保障支付状态一致性",
      "采用分片扫描 + 延迟消息触发超时查询 + 异步队列缓冲的优化方案，实现超时取消订单业务和主动查询功能",
      "基于乐观锁保障普通订单并发安全，通过Redis分布式锁实现限购业务控制，结合缓存预热与消息队列支撑秒杀场景高并发处理",
    ],
    tech: ["Java", "Spring Boot", "Redis", "RocketMQ", "MySQL"],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-title text-[#1A1A1A] mb-3">项目经历</h2>
          <p className="text-body max-w-2xl">企业级项目实战与技术落地</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-white rounded-xl border border-black/[0.08] p-5 sm:p-6 md:p-8 transition-all duration-200 hover:border-black/[0.15] hover:shadow-lg hover:shadow-black/[0.04]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">{project.title}</h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#C46849]/10 text-[#C46849] rounded-full text-xs font-medium">
                      <Star size={10} />
                      精选
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-5">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                    <span className="w-1 h-1 rounded-full bg-[#C46849] mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#F5F4F2] text-[#6B6B6B] rounded-full text-xs sm:text-sm font-medium"
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
