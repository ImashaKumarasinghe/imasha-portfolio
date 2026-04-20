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
function IconGrid({
  items,
  activeKey,
  onPick,
}: {
  items: { name: string; src: string }[];
  activeKey: string;
  onPick: (key: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full">
      {items.map((item) => {
        const key = `${item.name}`;
        const isActive = activeKey === key;

        return (
          <button
            key={item.name}
            type="button"
            onClick={() => onPick(key)}
            className="flex flex-col items-center justify-center outline-none"
          >
            {/* ✅ Rectangle width/height increased + strong pop + blue outline */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              animate={{
                scale: isActive ? 1.18 : 1, // ✅ bigger pop-up on click
              }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className={cn(
                // ✅ Increased rectangle size
                "h-16 w-16 rounded-2xl bg-white shadow-md border flex items-center justify-center overflow-hidden",
                // outline always visible
                "border-gray-300",
                // ✅ blue outline + glow when active
                isActive &&
                  "border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.35),0_10px_25px_rgba(37,99,235,0.15)]"
              )}
            >
              {/* ✅ icon increase when active */}
              <motion.img
                src={item.src}
                alt={item.name}
                className="h-11 w-11 object-contain"
                animate={{ scale: isActive ? 1.18 : 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
              />
            </motion.div>

            {/* name */}
            <p
              className={cn(
                "mt-2 text-sm text-center",
                isActive ? "text-blue-700 font-semibold" : "text-black"
              )}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}

const AnimatedTabs = ({
  tabs = [
    { id: "frontend", label: "Frontend", content: null },
    { id: "backend", label: "Backend", content: null },
    { id: "database", label: "Database", content: null },
    { id: "aiml", label: "AI / ML", content: null },
    { id: "tools", label: "Tools", content: null },
    { id: "mobile", label: "Mobile", content: null },
  ],
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  // ✅ icon click highlight state
  const [activeIconKey, setActiveIconKey] = useState<string>("");

  if (!tabs?.length) return null;

  // ✅ your tech lists (kept all icons, did not remove tools)
  const tabItems: Record<string, { name: string; src: string }[]> = {
    frontend: [
      { name: "React", src: "/tech/react.png" },
      { name: "Next.js", src: "/tech/nextjs.png" },
      { name: "TypeScript", src: "/tech/typescript.png" },
      { name: "Tailwind", src: "/tech/tailwind.png" },
      { name: "HTML", src: "/tech/html.png" },
      { name: "CSS", src: "/tech/css.png" },
      { name: "JavaScript", src: "/tech/js.png" },
      { name: "Three.js", src: "/tech/Three.js.png" },
    ],
    backend: [
      { name: "Node.js", src: "/tech/node.png" },
      { name: "Express", src: "/tech/express.png" },
      { name: "java", src: "/tech/java.png" },
      { name: "Spring Boot", src: "/tech/spring-boot.png" },
      { name: "Python", src: "/tech/python.png" },
      { name: ".NET Core", src: "/tech/NET core.png" },
       { name: "FastAPI", src: "/tech/FastAPI.png" },

    ],
    database: [
      { name: "MongoDB", src: "/tech/mongodb.png" },
      { name: "MySQL", src: "/tech/mysql.png" },
      { name: "Supabase", src: "/tech/supabase.png" },
      { name: "PostgreSQL", src: "/tech/postgray.png" },
    ],
    aiml: [
      { name: "Python", src: "/tech/python.png" },
      { name: "NumPy", src: "/tech/numpy.png" },
      { name: "Pandas", src: "/tech/pandas.png" },
      { name: "TensorFlow", src: "/tech/tensorflow.png" },
      { name: "Keras", src: "/tech/keras.png" },
      { name: "Kaggle", src: "/tech/kaggle.png" },
    ],
    tools: [
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
    ],
    mobile: [
      { name: "React Native", src: "/tech/react-native.png" },
      { name: "Expo go", src: "/tech/expo go.png" },
      { name: "Dart", src: "/tech/Dart.png" },
    ],
  };

  return (
    <div className={cn("w-full max-w-4xl flex flex-col gap-y-3", className)}>
      {/* ✅ Tabs bar background changed to #fafafa */}
      <div className="flex gap-2 flex-wrap bg-[#fafafa] p-2 rounded-xl border border-gray-200 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setActiveIconKey(""); // reset icon highlight when changing tab
            }}
            className={cn(
              // ✅ tab width little bit increase
              "relative px-7 py-2 text-sm font-semibold rounded-lg outline-none transition-colors",
              "text-blue-700 hover:text-blue-800"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                // ✅ shiny blue highlight
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}

            {/* ✅ tab label animate */}
            <motion.span
              className="relative z-10"
              animate={{
                scale: activeTab === tab.id ? 1.06 : 1,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
            >
              {tab.label}
            </motion.span>
          </button>
        ))}
      </div>

      {/* ✅ Content box background changed to #fafafa */}
      <div className="p-6 bg-[#fafafa] rounded-xl border border-gray-200 shadow-sm min-h-[280px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98, x: -8 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <IconGrid
            items={tabItems[activeTab] || []}
            activeKey={activeIconKey}
            onPick={(k) => setActiveIconKey(k)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export { AnimatedTabs };