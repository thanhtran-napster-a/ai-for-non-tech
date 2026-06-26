"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "🌐", text: <>Go to <strong>code.visualstudio.com</strong></> },
  { num: "2", emoji: "🖱️", text: "Click the big download button (it detects your OS automatically)" },
  { num: "3", emoji: "📦", text: "Install it like any normal app — Next, Next, Finish" },
];

export default function Slide16() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      {/* Step badge */}
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
        <span className="font-caveat text-white text-xl font-bold">1/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 1 of 7 — Install VSCode 💻
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Steps column */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div key={i} className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, type: "spring" }}>
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="font-caveat text-white text-xl font-bold">{step.num}</span>
              </div>
              <div className="flex-1 bg-white/70 rounded-2xl p-4 border border-gray-200 shadow-sm">
                <span className="text-2xl mr-2">{step.emoji}</span>
                <span className="font-caveat text-lg text-gray-700">{step.text}</span>
              </div>
            </motion.div>
          ))}

          <motion.div className="bg-green-100 border-2 border-green-400 rounded-2xl p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <p className="font-caveat text-lg text-green-700">
              ✅ <strong>You'll know it worked when:</strong> Open VSCode → you see a welcome screen
            </p>
          </motion.div>
        </div>

        {/* Screenshot placeholder */}
        <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl min-h-[220px] flex flex-col"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-blue-400 text-4xl mb-3">▶</div>
            <p className="font-caveat text-gray-300 text-lg">VSCode Welcome Screen</p>
            <p className="font-caveat text-gray-500 text-sm mt-1">Get Started → New File</p>
          </div>
          <motion.div className="text-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
            <span className="font-caveat text-coral text-sm">← VSCode welcome screen</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
