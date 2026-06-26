"use client";
import { motion } from "framer-motion";

export default function Slide34() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-blue-600 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 1/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 1 — Plan before we build 📋
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Setup */}
        <div className="space-y-3">
          <h3 className="font-caveat text-xl font-bold text-gray-700">Setup:</h3>
          {[
            { emoji: "📁", text: 'Create a new folder: "summer-camp-app"' },
            { emoji: "📂", text: "Open it in VSCode: File → Open Folder" },
            { emoji: "📄", text: "Put project-brief.md inside the folder" },
            { emoji: "⌨️", text: "Open the terminal, type: claude" },
          ].map((item, i) => (
            <motion.div key={i} className="flex items-center gap-3 bg-white/70 rounded-xl p-3 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-caveat text-base text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Prompt */}
        <div className="space-y-3">
          <h3 className="font-caveat text-xl font-bold text-gray-700">Prompt to use:</h3>
          <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <p className="font-mono text-green-400 text-xs leading-relaxed">
              /plan Read the project-brief.md file in this folder. Create a step-by-step plan for building this app using Next.js. Include: what pages we need, how data will be stored, how real-time updates will work, and how PIN authentication will work. Present the plan clearly before writing any code.
            </p>
          </motion.div>

          <motion.div className="bg-green-100 border-2 border-green-400 rounded-xl p-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <p className="font-caveat text-base text-green-700">🟢 Review Claude's plan together — this shows how Claude thinks</p>
          </motion.div>
          <motion.div className="bg-amber-light border border-amber rounded-xl p-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <p className="font-caveat text-base text-amber-800">🔄 Adjust: "For data storage, use a simple JSON file — this is a demo."</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
