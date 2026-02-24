"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const AnimatedCard = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5;

      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;

      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;

      requestAnimationFrame(animateBorder);
    };

    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const institutions = [
    {
      title: "Sabaragamuwa University of Sri Lanka",
      logo: "/logos/susl.png",
      details: [
        "B.Sc (Hons) in Software Engineering",
        "Current GPA: 3.74",
      ],
    },
    {
      title: "LPEC Campus",
      logo: "/logos/lpec.png",
      details: [
        "Diploma in Human Resource Management",
        "2021 - 2022",
      ],
    },
    {
      title: "Bandaranayake Central College – Veyangoda",
      logo: "/logos/vcc.png",
      details: [
        "Physical Science Stream",
      ],
    },
    {
      title: "Hatton National Bank",
      logo: "/logos/hnb.png",
      details: [
        "Banking Internship",
        "2022 - 2023",
        
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-[470px] bg-[#b8ecf0] border border-gray-300 rounded-2xl p-10 overflow-hidden shadow-xl">
      {/* Animated Borders */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div ref={topRef} className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div ref={rightRef} className="absolute w-full h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div ref={bottomRef} className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div ref={leftRef} className="absolute w-full h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutions.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-400 transition-all"
            >
              <div className="flex items-start gap-4">
                
                {/* Logo */}
                <div className="w-14 h-14 rounded-full bg-white border border-gray-300 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <ul className="mt-2 space-y-1 text-base text-gray-700">
                    {item.details.map((detail, i) => (
                      <li key={i}>• {detail}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blur shapes */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-400/20 blur-xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-400/20 blur-xl" />
    </div>
  );
};

export default AnimatedCard;