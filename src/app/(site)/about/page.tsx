"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
import { stackData } from "@/data/stack";

const About = () => {
  return (
    <div className="font-sen bg-darkBackground min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-24 pt-16 pb-12 border-b border-white/10">
        <motion.p
          className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          About
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The person
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            behind the code.
          </span>
        </motion.h1>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 lg:px-24 py-16">
        {/* Photo + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/me.jpg"
                alt="David Ajitena"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl font-bold text-white mb-1">
              David Ajitena
            </h2>
            <p className="text-blue-400 text-sm font-medium mb-5">
              Frontend &amp; Mobile Developer — Lagos, Nigeria
            </p>
            <p className="text-gray-300 leading-8 text-base">
              Hey, I&apos;m David — a React and React Native Developer
              passionate about turning ideas into sleek, functional web and
              mobile applications. I build responsive, user-focused interfaces
              using modern frontend and mobile technologies.
            </p>
            <p className="text-gray-400 leading-8 text-base mt-4">
              Whether it&apos;s a web app or a cross-platform mobile project,
              my goal is to create seamless, intuitive user experiences that
              feel effortless. Let&apos;s connect and build something amazing
              together.
            </p>
          </motion.div>
        </div>

        {/* Education + Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Education
            </p>
            <h3 className="text-white font-bold text-lg mb-3">
              BSc, Computer &amp; Information Science
            </h3>
            <p className="text-gray-400 text-sm leading-7">
              Tai Solarin University of Education. Strong foundation in
              computing principles, problem-solving, and analytical thinking.
              Combined with hands-on experience, this shapes my growth as a
              developer.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Leadership
            </p>
            <h3 className="text-white font-bold text-lg mb-3">
              Lead Tech Facilitator
            </h3>
            <p className="text-gray-400 text-sm leading-7">
              Led a team of tech facilitators at{" "}
              <a
                href="https://curriculumtutors.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Educational Services
              </a>
              , shaping teaching strategy and ensuring engaging, impactful
              learning outcomes for all participants.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Stack
          </p>
          <h3 className="text-white font-bold text-2xl mb-8">
            Technologies I use
          </h3>
          <div className="flex flex-wrap gap-3">
            {stackData.map(({ name, logo, link }) => (
              <Tooltip title={name} placement="top" key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-xl transition-all duration-200 group"
                >
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">
                    {name}
                  </span>
                </a>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
