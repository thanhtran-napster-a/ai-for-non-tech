"use client";
import { motion } from "framer-motion";

const steps = [
  { emoji: "📋", label: "Plan it", sub: "Claude reads the brief, creates a build plan", color: "bg-blue-100 border-blue-300" },
  { emoji: "🏗️", label: "Scaffold", sub: "Set up the Next.js project structure", color: "bg-amber-light border-amber" },
  { emoji: "🏆", label: "Leaderboard", sub: "Build the public-facing real-time board", color: "bg-orange-100 border-orange-300" },
  { emoji: "🔐", label: "Admin panel", sub: "Build staff login + point management", color: "bg-red-50 border-red-300" },
  { emoji: "🎨", label: "Design", sub: "Use 21st.dev MCP to polish the look", color: "bg-purple-50 border-purple-300" },
  { emoji: "📱", label: "Test", sub: "Check it works on mobile", color: "bg-teal-light border-teal" },
  { emoji: "🚀", label: "Deploy", sub: "Push to GitHub → Vercel publishes live URL", color: "bg-green-100 border-green-400" },
];

export default function Slide33() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Our build plan — 7 steps to a live app 🗺️
      </motion.h1>

      {/* Timeline / winding path */}
      <div className="relative max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center ${i === 6 ? "col-start-2" : ""}`}>
              <motion.div
                className={`${step.color} border-2 rounded-2xl p-3 text-center shadow-md w-full`}
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}>
                <div className="text-4xl mb-2">{step.emoji}</div>
                <div className="font-caveat text-lg font-bold text-gray-800">{step.label}</div>
                <div className="font-caveat text-xs text-gray-500 mt-1">{step.sub}</div>
                <div className="mt-2 w-7 h-7 bg-coral rounded-full flex items-center justify-center mx-auto">
                  <span className="font-caveat text-white text-sm font-bold">{i + 1}</span>
                </div>
              </motion.div>
              {i < steps.length - 1 && i % 4 !== 3 && (
                <motion.div className="text-2xl text-coral font-bold mt-1"
                  animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.div className="text-center mt-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <div className="inline-block bg-coral text-white rounded-2xl px-6 py-3 font-caveat text-xl font-bold shadow-lg">
          ⏱️ Total: ~75 minutes — let's go!
        </div>
      </motion.div>
    </div>
  );
}
