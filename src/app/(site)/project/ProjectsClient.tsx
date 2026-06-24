"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { stackData } from "@/data/stack";
import type { ProjectItem } from "./page";

const logoMap = Object.fromEntries(stackData.map((s) => [s.name.toLowerCase(), s.logo]));

type Tab = "web" | "mobile";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectsClient({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("web");

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <div className="bg-darkBackground font-sen min-h-screen">
      <div className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-b border-white/10">
        <motion.p
          className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Portfolio
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Selected
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Work.
            </span>
          </motion.h1>

          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {(["web", "mobile"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-gray-400 hover:bg-white/15 hover:text-white"
                }`}
              >
                {tab === "web" ? "Web Apps" : "Mobile Apps"}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={activeTab}
            className="px-6 md:px-12 lg:px-24 py-10 pb-28"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project, index) => {
                const isFeatured = index === 0;
                const imgUrl = project.imageUrl;

                return (
                  <motion.div
                    key={project._id}
                    variants={cardVariants}
                    className={`group bg-white rounded-2xl overflow-hidden flex flex-col ${
                      isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden shrink-0 bg-gray-100 ${
                        isFeatured ? "h-60 md:h-72" : "h-44"
                      }`}
                    >
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt={`${project.name} screenshot`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h2
                          className={`font-bold text-gray-900 leading-snug ${
                            isFeatured ? "text-xl" : "text-base"
                          }`}
                        >
                          {project.name}
                        </h2>

                        {project.websiteUrl ? (
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
                          >
                            <FiExternalLink size={14} />
                          </a>
                        ) : (
                          <span className="shrink-0 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                            Private
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-gray-500 text-sm leading-6 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack?.map((tech) => {
                          const logo = logoMap[tech.toLowerCase()];
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                            >
                              {logo && (
                                <Image
                                  src={logo}
                                  alt={tech}
                                  width={14}
                                  height={14}
                                  className="rounded-sm shrink-0"
                                  unoptimized={logo.startsWith("https://")}
                                />
                              )}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={activeTab + "-empty"}
            className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-4xl font-extrabold text-white">Coming Soon</h3>
            <p className="mt-4 text-gray-400 text-base max-w-xs leading-7">
              {activeTab === "mobile"
                ? "Mobile projects are on the way. React Native apps built with care."
                : "No projects yet. Add some in the studio."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
