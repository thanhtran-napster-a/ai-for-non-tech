"use client";
import { motion } from "framer-motion";

const rows = [
  { bad: "Make it look better", why: '"Better" means nothing', good: 'Make the heading 50% larger, use bold font, add 30px spacing between sections' },
  { bad: "Add a login", why: "No context, no detail", good: "Add a teacher login page with a password. Wrong password shows 'Access denied' in red" },
  { bad: "Fix it", why: "Fix what?", good: "The Submit button disappears on mobile screens under 375px wide. Make sure it stays visible" },
  { bad: "Make it modern", why: "Too subjective", good: "Use a dark background, white text, and rounded cards for each section" },
  { bad: "The design is boring", why: "No direction", good: 'The homepage feels flat. Make it feel vibrant and creative — like a modern agency website, not a basic template' },
];

export default function Slide26() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        How to talk to Claude 🗣️ — bad vs. good
      </motion.h1>

      <div className="max-w-5xl mx-auto w-full overflow-x-auto">
        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md min-w-[600px]">
          {/* Header */}
          <div className="grid grid-cols-3">
            {[{ label: "🚫 Bad prompt", bg: "bg-red-100" }, { label: "❓ Why it fails", bg: "bg-amber-light" }, { label: "✅ Good prompt", bg: "bg-green-100" }].map((h, i) => (
              <div key={i} className={`${h.bg} p-3 font-caveat text-xl font-bold text-gray-800 border-b-2 border-gray-200 ${i < 2 ? "border-r border-gray-200" : ""}`}>
                {h.label}
              </div>
            ))}
          </div>
          {rows.map((row, i) => (
            <motion.div key={i} className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <div className="p-3 font-caveat text-base text-red-600 border-r border-gray-200 bg-red-50/30">{row.bad}</div>
              <div className="p-3 font-caveat text-base text-amber-700 border-r border-gray-200 bg-amber-50/30">{row.why}</div>
              <div className="p-3 font-caveat text-base text-green-700 bg-green-50/30">{row.good}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
