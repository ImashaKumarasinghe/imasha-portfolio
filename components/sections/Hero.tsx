"use client";

import Image from "next/image";
import ThreeBackground from "../ThreeBackground";
import { GradientButton } from "@/components/ui/gradient-button";
import { ShinyButton } from "@/components/shiny-button";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ThreeBackground />

      <section className="relative z-10 flex min-h-screen items-center justify-between px-12">
        {/* LEFT SIDE - TEXT */}
        {/* ✅ moved text a little bit to the RIGHT: changed -ml-8 -> ml-2 */}
        <div className="max-w-xl -mt-12 ml-2">
          <h3 className="text-2xl font-semibold">Hello, I'm</h3>

          <h1 className="mt-2 text-5xl font-bold text-blue-700 leading-tight">
            Imasha Kumarasinghe
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Software Engineering Undergraduate passionate about AI, Full-Stack
            Development, and building impactful systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-6">
            {/* Get in Touch */}
            <GradientButton asChild>
              <a href="#contact">Get in Touch</a>
            </GradientButton>

            {/* Projects */}
            <GradientButton variant="variant" asChild>
              <a href="#projects">Projects</a>
            </GradientButton>

            {/* Download CV */}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <ShinyButton>Download CV</ShinyButton>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - PHOTO */}
        <div className="-mt-16 mr-6 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/ima-removebg-preview.png"
            alt="Imasha Kumarasinghe"
            width={380}
            height={480}
            priority
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}