"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdWhatsapp } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const HeroSection = () => (
  <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 md:px-12 lg:px-24 py-20">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for work
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Hi, I&apos;m
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            David.
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 font-medium">
          Frontend &amp; Mobile Developer
        </p>
        <p className="mt-4 text-gray-400 text-base leading-8 max-w-md">
          I build intuitive, user-centric interfaces for web and mobile using
          React and React Native — crafting seamless experiences across
          platforms.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href="/project"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors"
          >
            View My Work
          </Link>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 hover:border-white/50 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex gap-5 mt-8">
          <a
            href="https://wa.me/2340956056463"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <MdWhatsapp size={22} />
          </a>
          <a
            href="mailto:ajitenadavid@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <SiGmail size={22} />
          </a>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 ring-8 ring-blue-500/5">
          <Image
            src="/me.jpg"
            alt="David Ajitena"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
