"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Secretary",
    title: "IEEE WIE Affinity Group – SUSL | Present",
    description:
      "Serving as Secretary of the IEEE WIE Student Branch Affinity Group at SUSL, supporting event planning, documentation, coordination, and communication to ensure smooth execution of student-led STEM initiatives.",
    imageUrl: "/volunteer/wie-secretary.jpg",
    
  },
  {
    name: "Vice Secretary",
    title: "IEEE WIE Affinity Group – SUSL | 2024-2025",
    description:
      "Contributed to organizing events, coordinating teams, maintaining documentation, and improving collaboration processes while strengthening leadership and communication skills.",
    imageUrl: "/volunteer/vsecretary.jpg",
    
  },
  
  {
    name: "Career Compass | University Sub-OC Secretary",
    title: "IEEE Young Professionals Sri Lanka | 2025",
    description:
      "Contributed as the University Sub-Organizing Committee (Sub-OC) Secretary, supporting coordination, communication, and smooth execution of the seminar aimed at guiding students toward informed academic and career pathways.",
    imageUrl: "/volunteer/yp-suboc.jpg",
    
  },
  {
    name: "Instructor & ExCom Member – Hope Code Club",
    title: "IEEE WIE Student Branch Affinity Group – SUSL",
    description:
      "Facilitated hands-on coding sessions for school students and supported event coordination, planning, and execution under IEEE WIE initiatives, enhancing mentorship, leadership, and organizational skills.",
    imageUrl: "/volunteer/organizer-instructor.jpg",
    
  },
  {
    name: "Student Volunteer",
    title: "ICARC 2025 – Faculty of Computing, SUSL | Jan 2025",
    description:
      "Appointed as a Student Volunteer for ICARC 2025 (hybrid international research conference), supporting session coordination and overall conference operations.”",
    imageUrl: "/volunteer/icarc.jpg",
    
  },
  {
    name: "First Runner-Up",
    title: "Team Hackstrom – IEEE Innovation Nation Sri Lanka",
    description:
      "Achieved First Runner-Up as a team member in Hackstrom, demonstrating teamwork, fast problem-solving, and practical implementation skills under competitive hackathon constraints.",
    imageUrl: "/volunteer/hackstrom-runnerup.jpg",
    
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center">
        {/* Avatar */}
        <div className="w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentTestimonial.name}
                </h2>

                <p className="text-sm font-medium text-gray-700 dark:text-gray-500">
                  {currentTestimonial.title}
                </p>
              </div>

              <p className="text-black dark:text-white text-base leading-relaxed mb-8">
                {currentTestimonial.description}
              </p>

              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center bg-transparent">
        {/* Avatar */}
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {currentTestimonial.name}
              </h2>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                {currentTestimonial.title}
              </p>

              <p className="text-black dark:text-white text-sm leading-relaxed mb-6">
                {currentTestimonial.description}
              </p>

             
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-50" />
        </button>

        {/* Dots (now 5 dots) */}
        <div className="flex gap-2">
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-gray-900 dark:bg-white"
                  : "bg-gray-400 dark:bg-gray-600"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full bg-gray-100 dark:bg-card border border-gray-300 dark:border-card/40 shadow-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-card/80 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-50" />
        </button>
      </div>
    </div>
  );
}