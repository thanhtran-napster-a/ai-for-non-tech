"use client";
import { motion } from "framer-motion";

const mantras = [
  { bg: "bg-coral text-white", text: "🧑‍💼 You are the product manager. Claude is the developer." },
  { bg: "bg-teal-500 text-white", text: "💬 Describe WHAT you want — not HOW to build it." },
  { bg: "bg-amber text-gray-800", text: "🎂 Start vague, then get specific — build in layers." },
  { bg: "bg-green-500 text-white", text: "🔧 Mistakes are normal. Redirect, don't panic." },
];

export default function SlideA3() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-gray-600 text-white rounded-full px-4 py-2 font-caveat text-base font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Appendix
      </motion.div>

      <motion.h1 className="font-caveat text-4xl font-bold text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Facilitator — mantras to repeat throughout 🔁
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full mb-6">
        {mantras.map((mantra, i) => (
          <motion.div key={i}
            className={`${mantra.bg} rounded-2xl p-6 shadow-lg text-center`}
            initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -2 : 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -1 : 1 }}>
            <p className="font-caveat text-2xl font-bold">{mantra.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="bg-white/70 border-2 border-gray-200 rounded-2xl p-4 max-w-3xl mx-auto text-center shadow-sm"
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-lg text-gray-600">
          💡 Repeat these throughout the session, especially when participants get frustrated or stuck. They work as reset phrases.
        </p>
      </motion.div>
    </div>
  );
}
