"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "💻", text: <>In VSCode's terminal, type: <code className="bg-gray-100 px-2 rounded">claude</code> and press Enter</> },
  { num: "2", emoji: "🔑", text: "It will ask for your API key" },
  { num: "3", emoji: "📋", text: "Paste the key you copied in the previous step" },
  { num: "4", emoji: "↩️", text: "Press Enter" },
];

export default function Slide20() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">5/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 5 of 7 — Connect Claude Code to your key 🔌
      </motion.h1>

      <div className="max-w-3xl mx-auto w-full space-y-4 mb-6">
        {steps.map((step, i) => (
          <motion.div key={i} className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
            <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="font-caveat text-white text-2xl font-bold">{step.num}</span>
            </div>
            <div className="flex-1 bg-white/70 rounded-2xl p-4 border border-gray-200 shadow-sm flex items-center gap-3">
              <span className="text-2xl">{step.emoji}</span>
              <span className="font-caveat text-lg text-gray-700">{step.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success state */}
      <motion.div className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <div className="bg-gray-900 rounded-2xl p-5 shadow-xl mb-4">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-gray-400">$ <span className="text-green-400">claude</span></div>
            <div className="text-green-300">✓ API key verified</div>
            <div className="text-blue-300">Welcome to Claude Code!</div>
            <div className="text-gray-300">How can I help you build today? ✨</div>
            <div className="text-gray-500 animate-pulse mt-2">&gt; |</div>
          </div>
        </div>

        <motion.div className="flex items-center gap-3 justify-center"
          animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-3xl">🎉</span>
          <p className="font-caveat text-xl text-gray-700 font-semibold">
            Claude Code is ready. You now have an AI developer at your fingertips.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
