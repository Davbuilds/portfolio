"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
];

const Tabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-darkBackground/80 backdrop-blur-md border-b border-white/10 font-sen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="relative w-10 h-10 shrink-0">
          <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition-colors ${
                pathname === href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="https://medium.com/@ajitenadavid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={22} />
          ) : (
            <AiOutlineMenu size={22} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-4 bg-darkBackground">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-semibold py-1 transition-colors ${
                pathname === href ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://medium.com/@ajitenadavid"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-base font-semibold py-1 text-gray-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full text-center transition-colors"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Tabs;
