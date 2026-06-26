"use client";
import { motion } from "framer-motion";

export default function Slide18() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">3/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 3 of 7 — Install Claude Code 🤖
      </motion.h1>

      <div className="max-w-3xl mx-auto w-full">
        <motion.p className="font-caveat text-xl text-center text-gray-600 mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          One command. That's it. Copy, paste, press Enter.
        </motion.p>

        {/* Main command block */}
        <motion.div className="relative mb-6"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <code className="font-mono text-green-400 text-xl md:text-2xl break-all">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
          {/* Copy label */}
          <motion.div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-coral text-white rounded-full px-3 py-1 font-caveat text-sm shadow-md"
            animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }}>
            📋 copy this!
          </motion.div>
        </motion.div>

        <motion.p className="font-caveat text-lg text-center text-gray-500 mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Wait about 30 seconds while it installs... ⏳
        </motion.p>

        {/* Verify */}
        <motion.div className="bg-green-100 border-2 border-green-400 rounded-2xl p-4 mb-6"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <p className="font-caveat text-lg text-green-700 font-bold mb-2">✅ Verify:</p>
          <div className="bg-gray-900 rounded-xl p-3 inline-block">
            <code className="font-mono text-green-400">claude --version</code>
          </div>
          <span className="font-caveat text-base text-green-600 ml-3">→ You should see a version number</span>
        </motion.div>
      </div>

      {/* Robot */}
      <motion.div className="absolute bottom-10 right-10 text-7xl"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}>
        🤖
      </motion.div>
      <motion.div className="absolute bottom-24 right-24 bg-white border-2 border-coral rounded-2xl p-3 shadow-md"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
        <p className="font-caveat text-base text-gray-700">I'm ready when you are!</p>
        <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-coral" />
      </motion.div>
    </div>
  );
}
