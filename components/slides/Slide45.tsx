"use client";
import { motion } from "framer-motion";

const loopSteps = [
  { num: 1, emoji: "🔨", label: "Build something" },
  { num: 2, emoji: "🌐", label: "Share the URL" },
  { num: 3, emoji: "💬", label: "Get feedback" },
  { num: 4, emoji: "🔄", label: "Iterate with Claude" },
];

export default function Slide45() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        The secret to getting good: build more things 🔨
      </motion.h1>

      <motion.p className="font-caveat text-xl text-center text-gray-600 italic mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        "The people who get good fastest are not the ones who understand the technology best. They're the ones who build the most things."
      </motion.p>

      {/* Loop diagram */}
      <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
        {loopSteps.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <motion.div
              className="bg-white border-2 border-coral rounded-2xl p-4 text-center shadow-md w-32"
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05 }}>
              <div className="text-4xl mb-2">{step.emoji}</div>
              <div className="font-caveat text-base font-bold text-gray-800">{step.label}</div>
            </motion.div>
            <motion.div className="text-2xl text-coral font-bold"
              animate={{ x: i === loopSteps.length - 1 ? [0, -5, 0] : [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}>
              {i === loopSteps.length - 1 ? "↩️" : "→"}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Community card */}
      <motion.div className="bg-teal-light border-2 border-teal rounded-2xl p-5 max-w-2xl mx-auto w-full shadow-md mb-4"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🤝</span>
          <p className="font-caveat text-lg text-gray-700">
            Start a WhatsApp group or Slack channel with the people in this room. Share what you build. Help each other with prompts. Celebrate each other's wins.
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {["👥", "💬", "🎉"].map((e, i) => (
            <motion.span key={i} className="text-2xl"
              animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
              {e}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p className="font-caveat text-xl text-center text-coral font-bold"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        You don't have to go alone. 💙
      </motion.p>
    </div>
  );
}
