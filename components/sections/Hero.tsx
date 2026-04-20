"use client";

import Image from "next/image";
import ThreeBackground from "../ThreeBackground";
import { GradientButton } from "@/components/ui/gradient-button";
import { ShinyButton } from "@/components/shiny-button";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Imasha_CV.pdf";
    link.download = "Imasha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ThreeBackground />

      <section className="relative z-10 flex min-h-screen items-center justify-center md:justify-between px-4 md:px-12">
        {/* LEFT SIDE - TEXT */}
        <div className="max-w-xl mt-0 md:-mt-12 ml-0 md:ml-2 text-center md:text-left">
          <h3 className="text-lg md:text-2xl font-semibold">Hello, I'm</h3>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Imasha Kumarasinghe
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-700 leading-relaxed">
            Software Engineering Undergraduate passionate about AI, Full-Stack
            Development, and building impactful systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
            {/* Get in Touch */}
            <GradientButton asChild>
              <a href="#contact">Get in Touch</a>
            </GradientButton>

            {/* Projects */}
            <GradientButton variant="variant" asChild>
              <a href="#projects">Projects</a>
            </GradientButton>

            {/* Download CV */}
            <ShinyButton onClick={handleDownloadCV}>Download CV</ShinyButton>
          </div>
        </div>

        {/* RIGHT SIDE - PHOTO */}
        <div className="hidden md:block -mt-16 mr-6 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/ima-removebg-preview.png"
            alt="Imasha Kumarasinghe"
            width={380}
            height={480}
            priority
            className="object-cover"
          />
        </div>

        {/* MOBILE PHOTO - visible on mobile only */}
        <div className="md:hidden absolute bottom-0 right-0 opacity-30 pointer-events-none z-0">
          <Image
            src="/images/ima-removebg-preview.png"
            alt="Imasha Kumarasinghe"
            width={200}
            height={280}
            priority
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}