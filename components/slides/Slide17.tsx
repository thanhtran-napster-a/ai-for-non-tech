"use client";
import { motion } from "framer-motion";

export default function Slide17() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">2/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 2 of 7 — Install Node.js 📦
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          <motion.div className="bg-gray-100 border border-gray-300 rounded-xl p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <p className="font-caveat text-base text-gray-500">
              💡 Node.js is a behind-the-scenes tool Claude Code needs. You won't interact with it directly — just install it and forget it.
            </p>
          </motion.div>

          {[
            { num: "1", emoji: "🌐", text: <><strong>nodejs.org</strong> — go there now</> },
            { num: "2", emoji: "🟢", text: <>Click the <strong>LTS</strong> version ("Recommended for most users")</> },
            { num: "3", emoji: "📦", text: "Install like any app — Next, Next, Finish" },
          ].map((step, i) => (
            <motion.div key={i} className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}>
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="font-caveat text-white text-xl font-bold">{step.num}</span>
              </div>
              <div className="flex-1 bg-white/70 rounded-2xl p-4 border border-gray-200">
                <span className="text-2xl mr-2">{step.emoji}</span>
                <span className="font-caveat text-lg text-gray-700">{step.text}</span>
              </div>
            </motion.div>
          ))}

          <motion.div className="bg-green-100 border-2 border-green-400 rounded-2xl p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <p className="font-caveat text-lg text-green-700 font-bold mb-2">✅ Verify it worked:</p>
            <p className="font-caveat text-base text-green-800">Open VSCode → Terminal → type <code className="bg-green-200 px-2 py-0.5 rounded text-sm">node --version</code></p>
            <p className="font-caveat text-base text-green-600 mt-1">You should see: v22.0.0 or similar</p>
          </motion.div>
        </div>

        {/* Terminal mockup */}
        <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-gray-400">$ <span className="text-green-400">node --version</span></div>
            <div className="text-green-300">v22.0.0</div>
            <div className="text-gray-400 mt-2">$ <span className="animate-pulse text-gray-400">|</span></div>
          </div>
          <motion.div className="mt-4 flex items-center gap-2"
            animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <span className="font-caveat text-coral text-sm">← You should see this!</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
