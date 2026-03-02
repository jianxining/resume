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
    demo: "#",
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
    demo: "#",
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
    tech: ["Java", "Spring Boot", "Redis", "RocketMQ", "MySQL", "微信支付", "支付宝"],
    demo: "#",
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
          <p className="text-gray-400">企业级项目实战与技术落地</p>
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
                <div className={project.featured ? "md:w-full" : ""}>
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

                  {project.demo && (
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>了解更多</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}