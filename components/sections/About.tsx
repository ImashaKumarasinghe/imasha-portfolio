"use client";

import AnimatedCard from "@/components/dynamic-border-animations-card";
import { TestimonialCarousel } from "@/components/profile-card-testimonial-carousel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-8xl px-6 py-16">
      
      {/* Center aligned heading + paragraph */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-3 text-gray-600 mx-auto max-w-3xl">
          I am a Full-Stack Software Engineer passionate about building scalable web and AI-powered applications. I enjoy designing clean architectures, developing secure APIs, and creating intuitive user experiences. With hands-on experience in real-world projects, I focus on building secure, high-performance systems while continuously adapting to new technologies and solving complex problems in collaborative environments.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="mt-12 grid md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="space-y-6"></div>

          {/* Animated Card */}
          <div className="mt-8">
            <AnimatedCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Profile/Testimonial Card */}
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}