"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-[#FAF9F7]">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Avatar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/avator.jpeg"
              alt="陶孟春"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-display text-[#1A1A1A] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          陶孟春
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-subtitle text-[#6B6B6B] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          软件开发工程师 · Agent开发 & 后端开发
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-body max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          中国科学技术大学硕士在读，专注于 AI Agent 系统设计与开发，
          熟练运用 Vibe Coding 进行高效开发
        </motion.p>

        {/* Meta info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-small mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            合肥 / 北京
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} />
            tmengchun@163.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} />
            177-3011-3847
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            查看经历
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            联系我
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[#9B9B9B]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
