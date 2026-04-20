"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
        
      {/* Increased overall header width and reduced side padding */}
      <div className="mx-auto flex max-w-8xl max-h-18 items-center justify-between px-4 md:px-2 py-4">
        {/* max-w-7xl → increased header width */}
        {/* px-4 → mobile padding, md:px-2 → desktop padding */}

        {/* Logo / Name - now more left aligned */}
        <Link href="/" className="text-sm md:text-lg font-semibold truncate">
          Imasha
        </Link>

        {/* Navigation Links - hidden on mobile */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-base lg:text-lg font-bold">
          <a href="#hero" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Social Icons - always visible but responsive */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://github.com/ImashaKumarasinghe"
            target="_blank"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded transition"
          >
            <Github className="h-4 w-4 md:h-5 md:w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/imasha-kumarasinghe-8413b72b4"
            target="_blank"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded transition"
          >
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </a>

          <a
            href="mailto:imakumarasinghe00@gmail.com"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded transition hidden sm:inline"
          >
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-2 p-1 hover:bg-gray-100 rounded transition"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          <a href="#hero" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="block py-2 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}