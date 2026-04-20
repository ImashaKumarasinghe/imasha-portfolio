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
      imageSrc: "/projects/gemora1.png",
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
        "TypeScript",
      ],
      status: "Completed",
      demoUrl:
        "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_gemora-capstoneproject-ai-activity-7407059545442717696-5ngJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",
      codeUrl: "https://github.com/stars/ImashaKumarasinghe/lists/gemora",
      ctaText: "View Project",
      href: "#",
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
      demoUrl:
        "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_mernstack-fullstackdevelopment-webdevelopment-activity-7423427758317412352-uakH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",
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
      demoUrl:
        "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-mern-react-activity-7377023132680847360-ZjOm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",
      codeUrl: "https://github.com/web-projet-4th-sem/Email_MS.git",
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
      demoUrl:
        "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-fullstack-nextjs-activity-7425038383300882432-aG01?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuFkvEBBdXFovMOttBane1TPAfWO4CLPRo",
      codeUrl: "https://github.com/stars/ImashaKumarasinghe/lists/paw-track",
    },

    {
  tag: "Full Stack Web Application",
  title: "SmartBursary — University Bursary Management System",
  description:
    "SmartBursary is a full-stack web application designed to digitalize and streamline the university bursary distribution process. The system allows bursary officers to upload eligible student lists, faculty MA officers to verify the required 80% attendance, and students to check their bursary eligibility status through a secure portal. It also provides transparency by showing rejection reasons and installment details while enabling efficient communication between faculties and the university bursary division.",
  imageSrc: "/projects/smartbursary.png",
  tech: [
    "Laravel",
    "PHP",
    "Next.js",
    "Tailwind CSS",
    "JWT Authentication",
    "GitHub",
    "Jira",
    "Figma",
  ],
  ctaText: "View Project",
  href: "#",
  status: "Ongoing",
  demoUrl: "#",
  codeUrl: "#",
},
{
  tag: "AI-Powered Full Stack Application",
  title: "TransitPulse — Smart Public Transport Overcrowding Predictor",
  description:
    "TransitPulse is a full-stack AI-powered transport analytics platform designed to improve public transport experiences through real-time crowd monitoring and intelligent insights. The system enables users to report live crowd levels, view route-based updates, and receive data-driven recommendations. It integrates a FastAPI-based AI service using a Retrieval-Augmented Generation (RAG) approach with LLM support, allowing users to interact with a smart assistant for peak hour analysis and optimal travel time suggestions.",
  imageSrc: "/projects/transitpulse.png",
  tech: [
    "ASP.NET Core Web API (.NET)",
    "C#",
    "Entity Framework Core",
    "PostgreSQL",
    "SignalR",
    "JWT Authentication",
    "Next.js",
    "FastAPI",
    "Gemini API (LLM)",
    "RAG"
  ],
  ctaText: "View Project",
  href: "#",
  status: "Ongoing",
  demoUrl: "",
  codeUrl: "https://github.com/ImashaKumarasinghe/TRANSITPULSE_NEW",
}
  ];

  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
  My <span className="text-blue-600">Projects</span>
</h2>
        <p className="mt-3 text-gray-600 mx-auto max-w-3xl">
          A few projects I have built, focusing on full-stack development and
          AI-driven solutions.
        </p>
      </div>

      {/* ✅ Always 3 cards on desktop */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectWaveCard
            key={p.title}
            title={p.title}
            description={p.description}
            imageSrc={p.imageSrc}
            tech={p.tech}
            status={p.status}
            demoUrl={p.demoUrl}
            codeUrl={p.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}