"use client";
import { motion } from "framer-motion";

const rows = [
  {
    emoji: "📢",
    role: "Marketer",
    prompts: [
      "Build me a landing page for our summer campaign with countdown timer and email signup",
      "Create 3 variations of our product page so I can A/B test headlines",
      "Make a one-page event site with RSVP form",
    ],
    bg: "bg-coral-light",
    border: "border-coral",
  },
  {
    emoji: "📊",
    role: "Manager",
    prompts: [
      "Build a dashboard where my team can log their weekly highlights",
      "Create a meeting agenda generator — I type the topic, it formats the agenda",
      "Make a tracker showing all open projects and their status",
    ],
    bg: "bg-teal-light",
    border: "border-teal",
  },
  {
    emoji: "🎨",
    role: "Designer",
    prompts: [
      "Turn this design concept into a live webpage with hover animations",
      "Build an interactive prototype of this user flow I can share as a URL",
      "Create a portfolio site I can update from a simple list",
    ],
    bg: "bg-amber-light",
    border: "border-amber",
  },
  {
    emoji: "📚",
    role: "Teacher",
    prompts: [
      "Build a class page listing homework, deadlines, and submission status color-coded",
      "Create a multiple-choice quiz — students answer and immediately see if they got it right",
      "Make a student showcase page where I post each project with a photo",
    ],
    bg: "bg-green-50",
    border: "border-green-400",
  },
];

export default function Slide08() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1
        className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        What would YOU build? 🤩
      </motion.h1>

      <div className="space-y-4 max-w-4xl mx-auto w-full">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className={`${row.bg} border-2 ${row.border} rounded-2xl p-4 shadow-sm`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{row.emoji}</span>
              <h3 className="font-caveat text-2xl font-bold text-gray-800">{row.role}</h3>
              <span className="font-caveat text-sm text-gray-500 italic ml-2">💬 Say this to Claude:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {row.prompts.map((prompt, j) => (
                <motion.div
                  key={j}
                  className="bg-white/70 rounded-xl px-3 py-2 border border-white shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 + j * 0.08 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.95)" }}
                >
                  <p className="font-caveat text-base text-gray-700">"{prompt}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
