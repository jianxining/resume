"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = {
  school: "华北电力大学",
  degree: "计算机科学与技术 · 本科",
  period: "2015.09 - 2019.06",
  location: "北京",
};

const certifications = [
  { name: "阿里云前端工程师认证", year: "2022" },
  { name: "腾讯云前端工程师认证", year: "2021" },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">教育背景</span>
          </h2>
          <p className="text-gray-400">持续学习，追求卓越</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            className="glass rounded-2xl p-6 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">学历</h3>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-medium text-white">{education.school}</p>
              <p className="text-indigo-400">{education.degree}</p>
              <p className="text-sm text-gray-400">{education.period} · {education.location}</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="glass rounded-2xl p-6 hover:glow transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">认证</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={cert.name} className="flex items-center justify-between">
                  <span className="text-gray-300">{cert.name}</span>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Self Development */}
        <motion.div
          className="mt-8 glass rounded-2xl p-6 hover:glow transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <BookOpen size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold">持续学习</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-gray-800/30">
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-gray-400 text-sm">技术文章</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/30">
              <p className="text-3xl font-bold gradient-text">10+</p>
              <p className="text-gray-400 text-sm">开源项目</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/30">
              <p className="text-3xl font-bold gradient-text">4</p>
              <p className="text-gray-400 text-sm">年经验</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}