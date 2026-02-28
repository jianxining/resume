"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 glow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
              陶
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="gradient-text">陶孟春</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="typing-effect">前端开发工程师</span>
          <span className="cursor text-indigo-400">|</span>
        </motion.div>

        <motion.p
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          4年前端开发经验 | React & TypeScript 专家 | 高性能 Web 应用构建者
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="mailto:taomengchun@email.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Mail size={18} />
            <span>taomengchun@email.com</span>
          </a>
          <a href="tel:18612345678" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Phone size={18} />
            <span>186-1234-5678</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            <span>北京</span>
          </span>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
          >
            查看经历
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 rounded-full font-medium hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300"
          >
            联系我
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}