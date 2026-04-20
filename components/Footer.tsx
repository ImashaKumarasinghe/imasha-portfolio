import Link from "next/link";
import { Github, Linkedin, X } from "lucide-react";
import { FaMedium } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      {/* Top content */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12">
        {/* 3 columns */}
        <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* LEFT: Name + short text + icons */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Imasha</h3>
            <p className="mt-2 md:mt-3 text-xs md:text-sm text-gray-600 max-w-sm">
              Full-Stack Engineer passionate about designing and developing reliable, efficient software systems.
            </p>

           <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/imasha-kumarasinghe-8413b72b4/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      flex h-9 md:h-10 w-9 md:w-10 items-center justify-center
      rounded-lg
      text-gray-600
      hover:text-[#0077B5]
      hover:bg-gray-100
      transition-colors duration-200
    "
  >
    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/ImashaKumarasinghe"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="
      flex h-9 md:h-10 w-9 md:w-10 items-center justify-center
      rounded-lg
      text-gray-600
      hover:text-black
      hover:bg-gray-100
      transition-colors duration-200
    "
  >
    <Github className="h-4 w-4 md:h-5 md:w-5" />
  </a>

  

</div>
          </div>

          {/* MIDDLE: Quick Links */}
          <div className="sm:justify-self-start md:justify-self-center">
            <h4 className="text-xs md:text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700">
              <li>
                <a href="#hero" className="hover:text-black transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT: Get in Touch */}
          <div className="sm:justify-self-end md:justify-self-end">
            <h4 className="text-xs md:text-sm font-semibold text-gray-900">Get in Touch</h4>
            <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-gray-700">
              <li>
                Email:{" "}
                <a
                  href="mailto:imakumarasinghe00@gmail.com"
                  className="hover:text-black transition break-all"
                >
                  imakumarasinghe00@gmail.com
                </a>
              </li>
              <li>Location: Sri Lanka</li>
              <li>Open to opportunities</li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-6 md:mt-10 border-t" />

        {/* Bottom row */}
        <div className="mt-4 md:mt-6 flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Imasha. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}