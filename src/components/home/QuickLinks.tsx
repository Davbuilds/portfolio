"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description: "React & Next.js apps with clean code and great UX.",
    href: "/project",
    external: false,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform apps with React Native and Expo.",
    href: "/project",
    external: false,
  },
  {
    title: "Writeups & Blogs",
    description: "Insights on frontend, mobile, and engineering.",
    href: "https://medium.com/@ajitenadavid",
    external: true,
  },
];

const QuickLinks = () => (
  <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-white/10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
        What I Do
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
        Services
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Link
            href={s.href}
            target={s.external ? "_blank" : undefined}
            rel={s.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-bold text-lg leading-snug">
                {s.title}
              </h3>
              <FiArrowUpRight
                size={18}
                className="text-gray-600 group-hover:text-blue-400 transition-colors shrink-0 mt-0.5"
              />
            </div>
            <p className="text-gray-400 text-sm leading-6">{s.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuickLinks;
