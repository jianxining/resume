"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 创建 mailto 链接
    const mailtoLink = `mailto:taomengchun@email.com?subject=来自 ${formState.name} 的消息&body=${encodeURIComponent(formState.message)}%0A%0A回复邮箱: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-gray-400">期待与您的合作</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">联系方式</h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:taomengchun@email.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">邮箱</p>
                  <p className="text-white">taomengchun@email.com</p>
                </div>
              </a>

              <a
                href="tel:18612345678"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">电话</p>
                  <p className="text-white">186-1234-5678</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">地点</p>
                  <p className="text-white">北京市</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h3 className="text-xl font-bold mb-4">社交媒体</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:glow hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:glow hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:glow hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">姓名</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">邮箱</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">消息</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="想说的..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={18} />
                发送消息
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}