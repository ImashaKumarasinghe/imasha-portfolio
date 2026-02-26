"use client";

import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;

  // top image (put inside /public/projects/)
  imageSrc: string;

  // tech chips
  tech: string[];

  // links
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectWaveCard({
  title,
  description,
  imageSrc,
  tech,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      {/* ✅ Top Image */}
      <div className="relative w-full h-44">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* ✅ Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* ✅ Tech Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ✅ Buttons */}
        <div className="mt-5 flex gap-3">
          {/* Demo Button */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition"
            >
              {/* icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 3h7v7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Demo
            </a>
          )}

          {/* Code Button */}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {/* github icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}