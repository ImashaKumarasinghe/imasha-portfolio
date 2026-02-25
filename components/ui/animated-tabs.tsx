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

/** ✅ Icon grid: image + name under image */
function IconGrid({ items }: { items: { name: string; src: string }[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 w-full">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center"
        >
          <div className="h-14 w-14 rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={item.src}
              alt={item.name}
              className="h-10 w-10 object-contain"
            />
          </div>
          <p className="mt-2 text-sm text-black text-center">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

const defaultTabs: Tab[] = [
  {
    id: "frontend",
    label: "Frontend",
    content: (
      <IconGrid
        items={[
          { name: "React", src: "/tech/react.png" },
          { name: "Next.js", src: "/tech/nextjs.png" },
          { name: "TypeScript", src: "/tech/typescript.png" },
          { name: "Tailwind", src: "/tech/tailwind.png" },
          { name: "HTML", src: "/tech/html.png" },
          { name: "CSS", src: "/tech/css.png" },
          { name: "JavaScript", src: "/tech/js.png" },


        ]}
      />
    ),
  },
  {
    id: "backend",
    label: "Backend",
    content: (
      <IconGrid
        items={[
          { name: "Node.js", src: "/tech/node.png" },
          { name: "Express", src: "/tech/express.png" },
          { name: "java", src: "/tech/java.png" },
          { name: "Spring Boot", src: "/tech/spring-boot.png" },
          { name: "JWT", src: "/tech/jwt.png" },
          { name: "REST API", src: "/tech/api.png" },
          { name: "Axios", src: "/tech/axios.png" },

          
        ]}
      />
    ),
  },
  {
    id: "database",
    label: "Database",
    content: (
      <IconGrid
        items={[
          { name: "MongoDB", src: "/tech/mongodb.png" },
          { name: "MySQL", src: "/tech/mysql.png" },
          { name: "Supabase", src: "/tech/supabase.png" },
          { name: "PostgreSQL", src: "/tech/postgray.png" },

        ]}
      />
    ),
  },
  {
    id: "aiml",
    label: "AI / ML",
    content: (
      <IconGrid
        items={[
          { name: "Python", src: "/tech/python.png" },
          { name: "NumPy", src: "/tech/numpy.png" },
          { name: "Pandas", src: "/tech/pandas.png" },
          { name: "TensorFlow", src: "/tech/tensorflow.png" },
          { name: "Keras", src: "/tech/keras.png" },
          { name: "Kaggle", src: "/tech/kaggle.png" },
        ]}
      />
    ),
  },
  {
    id: "tools",
    label: "Tools",
    content: (
      <IconGrid
        items={[
          { name: "Git", src: "/tech/git.png" },
          { name: "GitHub", src: "/tech/github.png" },
          { name: "VS Code", src: "/tech/vscode.png" },
          { name: "Figma", src: "/tech/figma.png" },
          { name: "Android Studio", src: "/tech/android-studio.png" },
          { name: "Jira", src: "/tech/jira.png" },
           { name: "Postman", src: "/tech/postman.png" },
           { name: "Docker", src: "/tech/docker.png" },
            { name: "linux", src: "/tech/linux.png" },
          { name: "IntelliJ IDEA", src: "/tech/intelij.png" },
        ]}
      />
    ),
  },
  {
    id: "mobile",
    label: "Mobile",
    content: (
      <IconGrid
        items={[
          { name: "React Native", src: "/tech/react-native.png" },
          { name: "Expo go", src: "/tech/expo go.png" },
          
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
    <div className={cn("w-full max-w-4xl flex flex-col gap-y-3", className)}>
      {/* ✅ Tabs bar (blue text) */}
      <div className="flex gap-2 flex-wrap bg-white/80 p-2 rounded-xl border border-gray-200 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-semibold rounded-lg outline-none transition-colors text-blue-700 hover:text-blue-800"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-blue-100 rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ✅ Content box (light background + black text inside) */}
      <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm min-h-[280px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.98, x: -8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
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