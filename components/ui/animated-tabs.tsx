"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

// ✅ Helper: small icon grid (uses local images from /public/tech)
function IconGrid({
  title,
  description,
  icons,
}: {
  title: string;
  description: string;
  icons: { name: string; src: string }[];
}) {
  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold text-white mt-0 mb-2">{title}</h2>
      <p className="text-sm text-white/80 mt-0 mb-5">{description}</p>

      {/* small images grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {icons.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2"
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-7 w-7 object-contain"
            />
            <span className="text-xs text-white/90">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ 6 default tabs
const defaultTabs: Tab[] = [
  {
    id: "frontend",
    label: "Frontend",
    content: (
      <IconGrid
        title="Frontend"
        description="UI development, components, responsive layouts"
        icons={[
          { name: "React", src: "/tech/react.png" },
          { name: "Next.js", src: "/tech/nextjs.png" },
          { name: "TypeScript", src: "/tech/typescript.png" },
          { name: "Tailwind", src: "/tech/tailwind.png" },
          { name: "HTML", src: "/tech/html.png" },
          { name: "CSS", src: "/tech/css.png" },
        ]}
      />
    ),
  },
  {
    id: "backend",
    label: "Backend",
    content: (
      <IconGrid
        title="Backend"
        description="Secure APIs, authentication, business logic"
        icons={[
          { name: "Node.js", src: "/tech/node.png" },
          { name: "Express", src: "/tech/express.png" },
          { name: "JWT", src: "/tech/jwt.png" },
          { name: "REST API", src: "/tech/api.png" },
          { name: "Axios", src: "/tech/axios.png" },
          { name: "Postman", src: "/tech/postman.png" },
        ]}
      />
    ),
  },
  {
    id: "database",
    label: "Database",
    content: (
      <IconGrid
        title="Database"
        description="Data storage, modeling, queries"
        icons={[
          { name: "MongoDB", src: "/tech/mongodb.png" },
          { name: "MySQL", src: "/tech/mysql.png" },
          { name: "Firebase", src: "/tech/firebase.png" },
          { name: "Mongoose", src: "/tech/mongoose.png" },
        ]}
      />
    ),
  },
  {
    id: "aiml",
    label: "AI / ML",
    content: (
      <IconGrid
        title="AI / ML"
        description="Model training, data processing, evaluation"
        icons={[
          { name: "Python", src: "/tech/python.png" },
          { name: "NumPy", src: "/tech/numpy.png" },
          { name: "Pandas", src: "/tech/pandas.png" },
          { name: "TensorFlow", src: "/tech/tensorflow.png" },
          { name: "Keras", src: "/tech/keras.png" },
        ]}
      />
    ),
  },
  {
    id: "tools",
    label: "Tools",
    content: (
      <IconGrid
        title="Tools"
        description="Workflow & collaboration"
        icons={[
          { name: "Git", src: "/tech/git.png" },
          { name: "GitHub", src: "/tech/github.png" },
          { name: "VS Code", src: "/tech/vscode.png" },
          { name: "Figma", src: "/tech/figma.png" },
        ]}
      />
    ),
  },
  {
    id: "mobile",
    label: "Mobile",
    content: (
      <IconGrid
        title="Mobile"
        description="Cross-platform mobile app development"
        icons={[
          { name: "React Native", src: "/tech/react-native.png" },
          { name: "Expo", src: "/tech/expo.png" },
          { name: "Android", src: "/tech/android.png" },
        ]}
      />
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full max-w-lg flex flex-col gap-y-2", className)}>
      {/* ✅ lighter background (more white-ish) */}
      <div className="flex gap-2 flex-wrap bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium rounded-lg text-white outline-none transition-colors"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/20 shadow-[0_0_20px_rgba(0,0,0,0.15)] backdrop-blur-md rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ✅ lighter content background */}
      <div className="p-5 bg-white/15 shadow-[0_0_20px_rgba(0,0,0,0.15)] text-white backdrop-blur-md rounded-xl border border-white/20 min-h-[280px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.97, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };