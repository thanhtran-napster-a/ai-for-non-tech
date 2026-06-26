"use client";
import { motion } from "framer-motion";

const steps = [
  { emoji: "💡", label: "Idea" },
  { emoji: "💬", label: "Describe it" },
  { emoji: "🤖", label: "Claude builds it" },
  { emoji: "🎯", label: "You direct" },
  { emoji: "🌐", label: "Live in hours!" },
];

const stats = [
  { emoji: "⚡", label: "Average time", value: "2–4 hours", color: "bg-teal-light border-teal" },
  { emoji: "💶", label: "Average cost", value: "~€20/month", color: "bg-green-50 border-green-400" },
  { emoji: "😊", label: "What happens", value: "You stay in control of the idea the entire time", color: "bg-amber-light border-amber" },
];

export default function Slide04() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      {/* Confetti decoration */}
      {["✨", "🎉", "⭐", "🎊"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ left: `${15 + i * 22}%`, top: "8%" }}
          animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        >
          {emoji}
        </motion.div>
      ))}

      <motion.h1
        className="font-caveat text-5xl font-bold text-coral mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The New Way ✨
      </motion.h1>

      {/* Flow chart */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              className="bg-white border-2 border-coral rounded-xl px-4 py-3 text-center min-w-[100px] shadow-md"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, type: "spring" }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,107,71,0.2)" }}
            >
              <div className="text-3xl mb-1">{step.emoji}</div>
              <div className="font-caveat text-sm font-bold text-gray-700">{step.label}</div>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                className="font-caveat text-2xl text-coral mx-1 font-bold"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 + 0.06 }}
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={`${stat.color} border-2 rounded-2xl p-5 text-center shadow-md`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-2">{stat.emoji}</div>
            <div className="font-caveat text-lg text-gray-500 mb-1">{stat.label}</div>
            <div className="font-caveat text-2xl font-bold text-gray-800">{stat.value}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-6xl"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🚀
      </motion.div>
    </div>
  );
}
