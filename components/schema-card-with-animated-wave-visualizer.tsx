"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectWaveCardProps = {
  tag?: string;
  title: string;
  description: string;
  imageSrc: string;
  tech: string[];
  status?: string;
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectWaveCard({
  tag,
  title,
  description,
  imageSrc,
  tech,
  status = "Live",
  demoUrl = "#",
  codeUrl = "#",
}: ProjectWaveCardProps) {
  const [open, setOpen] = useState(false);

  // show only some tech pills on card, all in modal
  const techPreview = useMemo(() => tech.slice(0, 8), [tech]);

  const activeBorder = open ? "ring-2 ring-[#315f96]" : "ring-1 ring-black/10";
  const activeTitle = open ? "text-[#315f96]" : "text-gray-900";

  return (
    <>
      {/* CARD */}
      <div
        className={`w-full rounded-2xl overflow-hidden bg-white shadow-sm ${activeBorder} transition`}
      >
        {/* IMAGE (height increased) */}
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          className="relative w-full h-56 overflow-hidden block text-left"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        </motion.button>

        {/* CONTENT */}
        <div className="p-5">
          {/* tag + status */}
          <div className="flex items-center justify-between gap-3">
            {tag ? (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {tag}
              </span>
            ) : (
              <span />
            )}

            <span className="text-xs text-gray-500">{status}</span>
          </div>

          {/* title (click => popup) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`mt-3 text-left font-semibold leading-snug ${activeTitle} hover:underline`}
          >
            {title}
          </button>

          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>

          {/* tech pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {techPreview.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* buttons */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Demo
            </a>

            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay */}
            <button
              aria-label="Close modal"
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
              type="button"
            />

            {/* modal */}
            <motion.div
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-2 ring-[#315f96]"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* top image */}
              <div className="relative h-72 w-full">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {tag ? (
                      <span className="inline-flex items-center rounded-full bg-[#315f96]/10 px-3 py-1 text-xs font-medium text-[#315f96]">
                        {tag}
                      </span>
                    ) : null}

                    <h3 className="mt-3 text-xl font-bold text-[#315f96]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>

                {/* all tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#315f96] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2b5486] transition"
                  >
                    Open Demo
                  </a>

                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}