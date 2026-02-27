"use client";

import AnimatedCard from "@/components/dynamic-border-animations-card";
import { TestimonialCarousel } from "@/components/profile-card-testimonial-carousel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      {/* Center aligned heading + paragraph */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
  About <span className="text-blue-600">Me</span>
</h2>
        <p className="mt-3 text-gray-600 mx-auto max-w-3xl">
          I am a Full-Stack Software Engineer passionate about building scalable web and AI-powered applications. I enjoy designing clean architectures, developing secure APIs, and creating intuitive user experiences. With hands-on experience in real-world projects, I focus on building secure, high-performance systems while continuously adapting to new technologies and solving complex problems in collaborative environments.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <div>
          <div className="text-lg font-semibold mb-4 text-center">
            Education and Professional Background
          </div>

          {/* ✅ Decrease text size inside the AnimatedCard (4 cards) */}
          <div
            className="
              mt-8
              text-[13px]
              leading-[1.35]
              [&_h1]:text-sm [&_h2]:text-sm [&_h3]:text-sm
              [&_p]:text-[13px]
              [&_li]:text-[13px]
              [&_span]:text-[13px]
            "
          >
            {/* Only UI scaling via wrapper. No content change. */}
            <AnimatedCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="text-lg font-semibold mb-4 text-center">
            Volunteering & Achievements
          </div>

          <div className="mt-8">
            <TestimonialCarousel className="px-0 max-w-full mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
}