"use client";
import { motion } from "framer-motion";

const columns = [
  {
    icon: "🌱",
    title: "In an afternoon",
    subtitle: "(beginner)",
    items: ["Personal portfolio or 'About Me' page", "Event landing page with registration form", "Campaign page with countdown timer", "Simple internal tracker or checklist"],
    bg: "bg-green-50",
    border: "border-green-400",
    accent: "text-green-600",
    stars: "⭐",
  },
  {
    icon: "🌿",
    title: "In a day or two",
    subtitle: "(some practice)",
    items: ["App with user login and roles", "Real-time dashboard", "Content management for your team", "Mobile-friendly tools for field teams"],
    bg: "bg-amber-light",
    border: "border-amber",
    accent: "text-amber-600",
    stars: "⭐⭐",
  },
  {
    icon: "🚫",
    title: "Not realistic yet",
    subtitle: "",
    items: ["Enterprise-scale platforms", "Complex integrations with legacy systems", "Apps for millions of users"],
    bg: "bg-gray-100",
    border: "border-gray-300",
    accent: "text-gray-500",
    stars: "",
    muted: true,
  },
];

export default function Slide07() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1
        className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        What can you actually build? 🏗️
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full flex-1">
        {columns.map((col, i) => (
          <motion.div
            key={i}
            className={`${col.bg} border-2 ${col.border} rounded-2xl p-6 shadow-md flex flex-col ${col.muted ? "opacity-70" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: col.muted ? 0.7 : 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
            whileHover={{ scale: col.muted ? 1 : 1.02 }}
          >
            <div className="text-5xl mb-2">{col.icon}</div>
            <h3 className={`font-caveat text-2xl font-bold ${col.accent} mb-1`}>{col.title}</h3>
            {col.subtitle && <p className="font-caveat text-lg text-gray-500 mb-3">{col.subtitle}</p>}
            {col.stars && <p className="mb-3">{col.stars}</p>}
            <ul className="flex-1">
              {col.items.map((item, j) => (
                <motion.li
                  key={j}
                  className={`font-caveat text-lg ${col.muted ? "text-gray-400 line-through" : "text-gray-700"} mb-2 flex items-start gap-2`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 + j * 0.08 }}
                >
                  <span className="mt-1">{col.muted ? "·" : "✓"}</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
