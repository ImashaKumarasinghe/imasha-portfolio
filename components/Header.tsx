import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
        

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-semibold">
          Imasha Kumarasinghe
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#achievements" className="hover:text-blue-600">Achievements</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ImashaKumarasinghe"
            target="_blank"
            className="hover:text-gray-600"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/imasha-kumarasinghe-8413b72b4"
            target="_blank"
            className="hover:text-gray-600"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:imakumarasinghe00@gmail.com"
            className="hover:text-gray-600"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
