"use client";
import { motion } from "framer-motion";

const exercises = [
  {
    medal: "🥉",
    time: "🌙 Tonight (30 min)",
    bg: "bg-amber-light border-amber",
    desc: "Build a personal 'About Me' page. Your name, short bio, what you do, how to contact you. Deploy it. Share the URL with one person.",
    sub: null,
  },
  {
    medal: "🥈",
    time: "📅 This week (1–2 hours)",
    bg: "bg-orange-100 border-orange-400",
    desc: "Build something for your actual job.",
    sub: [
      { emoji: "📢", role: "Marketer", idea: "Campaign landing page with email capture" },
      { emoji: "📊", role: "Manager", idea: "Team status page for weekly highlights" },
      { emoji: "🎨", role: "Designer", idea: "Portfolio page with clean layout and hover effects" },
      { emoji: "📚", role: "Teacher", idea: "Class assignment page — deadlines, status, color-coded" },
    ],
  },
  {
    medal: "🥇",
    time: "🔄 Ongoing",
    bg: "bg-coral-light border-coral",
    desc: "Pick one repetitive manual task and ask Claude: 'Can you build me a simple web tool that does [this] so I don't have to do it manually?'",
    sub: null,
  },
];

export default function Slide41() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Your homework — but the fun kind 🎯
      </motion.h1>

      <div className="space-y-4 max-w-3xl mx-auto w-full">
        {exercises.map((ex, i) => (
          <motion.div key={i} className={`${ex.bg} border-2 rounded-2xl p-5 shadow-md`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.2 }}
            whileHover={{ scale: 1.01 }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{ex.medal}</span>
              <span className="font-caveat text-xl font-bold text-gray-800">{ex.time}</span>
            </div>
            <p className="font-caveat text-lg text-gray-700 mb-2">{ex.desc}</p>
            {ex.sub && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {ex.sub.map((s, j) => (
                  <div key={j} className="bg-white/60 rounded-lg px-2 py-1 flex items-center gap-1">
                    <span className="text-sm">{s.emoji}</span>
                    <span className="font-caveat text-sm text-gray-700"><strong>{s.role}:</strong> {s.idea}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
