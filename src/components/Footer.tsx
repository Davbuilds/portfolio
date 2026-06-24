"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdWhatsapp } from "react-icons/md";
import { SiGmail, SiMedium } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "https://medium.com/@ajitenadavid", label: "Blog", external: true },
];

const socials = [
  {
    href: "https://wa.me/2349056056463",
    icon: <MdWhatsapp size={18} />,
    label: "WhatsApp",
  },
  {
    href: "mailto:ajitenadavid@gmail.com",
    icon: <SiGmail size={16} />,
    label: "Gmail",
  },
  {
    href: "https://medium.com/@ajitenadavid",
    icon: <SiMedium size={17} />,
    label: "Medium",
  },
];

const Footer = () => (
  <footer className="font-sen border-t border-white/10 bg-darkBackground">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand */}
      <div className="flex flex-col gap-4">
        <Link href="/" className="relative w-10 h-10 shrink-0">
          <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
        </Link>
        <div>
          <p className="text-white font-bold text-base">David Ajitena</p>
          <p className="text-gray-500 text-sm mt-0.5">
            Frontend &amp; Mobile Developer
          </p>
        </div>
        <div className="flex gap-4 mt-1">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-4">
          Navigation
        </p>
        <ul className="space-y-3">
          {navLinks.map(({ href, label, external }) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-[0.2em] mb-4">
          Work With Me
        </p>
        <p className="text-gray-400 text-sm leading-7 max-w-xs">
          Open to freelance projects, full-time roles, and collaborations.
        </p>
        <a
          href="mailto:ajitenadavid@gmail.com"
          className="inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors"
        >
          Get in touch <FiArrowUpRight size={14} />
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-gray-600 text-xs">
        © 2025 David Ajitena. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs">
        Built with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
        >
          Next.js
        </Link>{" "}
        &amp; Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
