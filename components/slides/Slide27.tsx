"use client";
import { motion } from "framer-motion";

export default function Slide27() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Before you build anything: PLAN IT 📋
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Left column */}
        <div className="space-y-4">
          <motion.div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p className="font-caveat text-lg text-gray-700">
              Type <code className="bg-blue-100 px-2 py-0.5 rounded text-blue-700 font-mono">/plan</code> in Claude Code, then describe what you want to build. Claude lays out all the steps BEFORE writing any code.
            </p>
          </motion.div>

          <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <p className="font-mono text-green-400 text-xs leading-relaxed">
              {">"} /plan I want to add an event registration form to my landing page. It should collect name, email, and preferred session. After submission, show a confirmation message and store the responses. Show me a plan before you start building.
            </p>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <h3 className="font-caveat text-xl font-bold text-gray-700">What happens:</h3>
          {[
            { num: "1", emoji: "📋", text: "Claude shows you the full plan step by step" },
            { num: "2", emoji: "👀", text: 'You review: "Yes, go ahead" or "Step 2 — change X to Y"' },
            { num: "3", emoji: "🚀", text: "Claude builds only after you approve" },
          ].map((step, i) => (
            <motion.div key={i} className="flex items-start gap-3 bg-white/70 rounded-2xl p-4 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
              <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-caveat text-white font-bold">{step.num}</span>
              </div>
              <div>
                <span className="text-xl mr-2">{step.emoji}</span>
                <span className="font-caveat text-lg text-gray-700">{step.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Golden rule */}
      <motion.div className="bg-coral rounded-2xl p-4 max-w-3xl mx-auto w-full mt-5 text-center shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-xl text-white font-bold">
          🏆 Golden rule: For anything that takes more than one step — plan first.
        </p>
      </motion.div>
    </div>
  );
}
