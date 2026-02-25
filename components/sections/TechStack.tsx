"use client";

import React from "react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative w-full py-20 px-6 overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-blue-600">Tech Stack</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable full-stack, mobile,
          and AI-powered applications.
        </p>
      </div>

      {/* Tabs Component */}
      <div className="flex justify-center">
        <AnimatedTabs className="w-full max-w-4xl" />
      </div>
    </section>
  );
}