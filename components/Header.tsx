import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
        
      {/* Increased overall header width and reduced side padding */}
      <div className="mx-auto flex max-w-8xl max-h-18 items-center justify-between pl-2 pr-2 py-4">
        {/* max-w-7xl → increased header width */}
        {/* pl-2 → moves name more to left */}
        {/* pr-2 → moves icons more to right */}

        {/* Logo / Name - now more left aligned */}
        <Link href="/" className="text-lg font-semibold">
          Imasha Kumarasinghe
        </Link>

        {/* Navigation Links - unchanged */}
        <nav className="hidden md:flex gap-6 text-lg font-xl font-bold mc-auto">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Social Icons - now more right aligned */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ImashaKumarasinghe"
            target="_blank"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/imasha-kumarasinghe-8413b72b4"
            target="_blank"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:imakumarasinghe00@gmail.com"
            className="hover:text-gray-600 focus:outline focus:outline-2 focus:outline-blue-600 rounded"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </header>
  );
}