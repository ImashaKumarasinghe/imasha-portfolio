"use client";

import React from "react";
import ProjectWaveCard from "../schema-card-with-animated-wave-visualizer";

export default function Projects() {
  const projects = [
    {
  tag: "AI + Marketplace",
  title: "Gemora — Smart Digital Gemstone Trading Platform",
  description:
    "Gemora is an AI-powered digital gemstone trading platform designed to improve trust, transparency, and efficiency in gemstone auctions and trading. It features secure auction systems, verified gemstone listings, AI-based gemstone image analysis using EfficientNetB0 with TensorFlow and Keras, and an intelligent Gemini Flash–powered chatbot to assist users with gemstone insights and platform navigation.",
  
  imageSrc: "/projects/gem.png",

  tech: [
    "React.js",
    "React Native",
    "Expo",
    "Spring Boot",
    "Spring Security",
    "MySQL",
    "TensorFlow",
    "Keras",
    "Python",
    "Flask",
    "JWT",
    "TypeScript"
  ],

  status: "Completed",

  demoUrl: "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_gemora-capstoneproject-ai-activity-7407059545442717696-5ngJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",   
  codeUrl: "https://github.com/stars/ImashaKumarasinghe/lists/gemora",   // Server repo
  
  ctaText: "View Project",
  href: "#"
},
    {
  tag: "Full Stack E-Commerce",
  title: "ISH Cosmetics — MERN Stack E-Commerce Platform",
  description:
    "ISH Cosmetics is a full-stack MERN e-commerce platform designed to provide a secure and seamless online cosmetics shopping experience. It features JWT authentication, Google login, role-based access control, admin product and order management, integrated chatbot support, and a responsive UI. The system is deployed using modern cloud infrastructure with separate frontend and backend hosting.",
  imageSrc: "/projects/ish.png",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Supabase",
    "JWT",
    "Google Auth",
    "bcrypt",
    "vercel",
    "render",
  ],
  ctaText: "View Project",
  href: "#",
  status: "Completed",

  demoUrl: "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_mernstack-fullstackdevelopment-webdevelopment-activity-7423427758317412352-uakH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",   // frontend demo (Vercel)
  codeUrl: "https://github.com/stars/ImashaKumarasinghe/lists/ish-cosmatics",  
},
    {
  tag: "Web Application",
  title: "Project Supervision Management System (PSMS)",
  description:
    "A centralized web platform to manage academic project supervision with role-based access, proposal submission, feedback management, notifications, and personalized dashboards.",
  imageSrc: "/projects/psms.png",
  tech: ["React", "Node.js", "Express", "MongoDB", "GitHub", "Figma"],
  ctaText: "View Project",
  href: "#",
  status: "Completed",
  demoUrl: "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-mern-react-activity-7377023132680847360-ZjOm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",   // put your live demo link
  codeUrl: "https://github.com/web-projet-4th-sem/Email_MS.git",   // put your GitHub repo link
},
    {
  tag: "Full Stack Web Application",
  title: "PawTrack — Street Pet Care & Adoption Platform",
  description:
    "PawTrack is a full-stack web application designed to help street pets find care and homes. It allows users to report pets with photo and location, adopt animals securely, and receive guidance through an integrated chatbot. The platform improves transparency and enables faster action for animal welfare through a modern, responsive interface.",
  imageSrc: "/projects/pawtrack1.png",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "JWT",
  ],
  ctaText: "View Project",
  href: "#",
  status: "Ongoing",
  demoUrl: "#https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-fullstack-nextjs-activity-7425038383300882432-aG01?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",   // add your demo link
  codeUrl: "https://github.com/stars/ImashaKumarasinghe/lists/paw-track",   // add your GitHub repo link
},
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-3 text-gray-600 mx-auto max-w-3xl">
          A few projects I have built, focusing on full-stack development and AI-driven solutions.
        </p>
      </div>

      {/* ✅ 3 cards in one row (desktop), 2 (tablet), 1 (mobile) */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((p) => (
    <ProjectWaveCard
      key={p.title}
      title={p.title}
      description={p.description}
      imageSrc={p.imageSrc}
      tech={p.tech}
      demoUrl={p.demoUrl}
      codeUrl={p.codeUrl}
    />
  ))}
</div>
    </section>
  );
}