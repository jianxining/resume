"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    const mailtoLink = `mailto:tmengchun@163.com?subject=来自 ${formState.name} 的消息&body=${encodeURIComponent(formState.message)}%0A%0A回复邮箱: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F4F2]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-title text-[#1A1A1A] mb-4">联系我</h2>
          <p className="text-body max-w-xl mx-auto">期待与您的合作，欢迎交流技术问题或职业机会</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">联系方式</h3>

            <div className="space-y-4">
              <a
                href="mailto:tmengchun@163.com"
                className="flex items-center gap-4 p-4 card group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C46849]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#C46849]" />
                </div>
                <div>
                  <p className="text-small mb-0.5">邮箱</p>
                  <p className="text-[#1A1A1A] font-medium group-hover:text-[#C46849] transition-colors">
                    tmengchun@163.com
                  </p>
                </div>
              </a>

              <a
                href="tel:17730113847"
                className="flex items-center gap-4 p-4 card group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C46849]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#C46849]" />
                </div>
                <div>
                  <p className="text-small mb-0.5">电话</p>
                  <p className="text-[#1A1A1A] font-medium group-hover:text-[#C46849] transition-colors">
                    177-3011-3847
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card">
                <div className="w-10 h-10 rounded-lg bg-[#C46849]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#C46849]" />
                </div>
                <div>
                  <p className="text-small mb-0.5">地点</p>
                  <p className="text-[#1A1A1A] font-medium">合肥 / 北京</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">姓名</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F7] border border-[rgba(0,0,0,0.08)] rounded-lg focus:border-[#C46849] focus:outline-none transition-colors text-[#1A1A1A]"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">邮箱</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F7] border border-[rgba(0,0,0,0.08)] rounded-lg focus:border-[#C46849] focus:outline-none transition-colors text-[#1A1A1A]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">消息</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FAF9F7] border border-[rgba(0,0,0,0.08)] rounded-lg focus:border-[#C46849] focus:outline-none transition-colors resize-none text-[#1A1A1A]"
                  placeholder="想说的内容..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 btn-accent flex items-center justify-center gap-2 rounded-lg"
              >
                <Send size={16} />
                发送消息
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
