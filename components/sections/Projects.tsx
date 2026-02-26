"use client";

import React from "react";
import ProjectWaveCard from "../schema-card-with-animated-wave-visualizer";

export default function Projects() {
  const projects = [
    {
      tag: "AI + Marketplace",
      title: "Gemora (Capstone)",
      description:
        "AI-enhanced gemstone marketplace with auctions, authentication, and trust mechanisms.",
      ctaText: "View Project",
      href: "#",
      status: "In Progress",
    },
    {
      tag: "Web App",
      title: "Portfolio Website",
      description:
        "Next.js portfolio with modern UI components, animations, and clean sections.",
      ctaText: "View Live",
      href: "#",
      status: "Live",
    },
    {
      tag: "Mobile App",
      title: "Recipe App",
      description:
        "React app with search, meal cards, and detailed meal pages with clean UI.",
      ctaText: "View Repo",
      href: "#",
      status: "Completed",
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
            tag={p.tag}
            title={p.title}
            description={p.description}
            ctaText={p.ctaText}
            href={p.href}
            status={p.status}
          />
        ))}
      </div>
    </section>
  );
}