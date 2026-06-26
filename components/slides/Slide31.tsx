"use client";
import { motion } from "framer-motion";

const rows = [
  { goal: "Plan before building", command: "/plan [describe what you want]" },
  { goal: "See what files exist", command: '"List all the files in this project"' },
  { goal: "Understand what was built", command: '"Explain what [filename] does in plain English"' },
  { goal: "Undo the last change", command: '"Revert the last change you made to [filename]"' },
  { goal: "Check mobile appearance", command: '"Is this page mobile responsive? What would it look like on a phone?"' },
  { goal: "Deploy to GitHub", command: '"Commit all changes and push to GitHub with the message \'[your message]\'"' },
  { goal: "Get design help", command: '"Use the 21st.dev MCP to improve the visual design of [component]"' },
  { goal: "Start fresh on a file", command: '"Delete [filename] and start it over. Here\'s what I want..."' },
];

export default function Slide31() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Your Claude cheat sheet 📖 — keep this handy!
      </motion.h1>

      <motion.div className="relative max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, rotate: -0.5 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.2 }}>
        <div className="bg-amber-50 border-2 border-amber rounded-2xl shadow-xl overflow-hidden p-2">
          <div className="bg-amber-100 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 bg-amber-200 border-b-2 border-amber">
              <div className="p-3 font-caveat text-lg font-bold text-gray-800 border-r border-amber">🎯 What you want to do</div>
              <div className="p-3 font-caveat text-lg font-bold text-gray-800">💬 What to say to Claude</div>
            </div>
            {rows.map((row, i) => (
              <motion.div key={i}
                className={`grid grid-cols-2 border-b border-amber/50 last:border-0 ${i % 2 === 0 ? "bg-white/40" : "bg-amber-50/40"}`}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}>
                <div className="p-3 font-caveat text-base text-gray-700 border-r border-amber/50">{row.goal}</div>
                <div className="p-3 font-mono text-sm text-coral bg-white/50 break-all">{row.command}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Print annotation */}
        <motion.div className="absolute -top-3 -right-3 bg-coral text-white rounded-full px-3 py-1 font-caveat text-sm shadow-md"
          animate={{ rotate: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity }}>
          🖨️ print this!
        </motion.div>
      </motion.div>
    </div>
  );
}
