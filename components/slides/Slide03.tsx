"use client";
import { motion } from "framer-motion";

const steps = [
  { emoji: "💡", label: "Idea" },
  { emoji: "📝", label: "Write a spec" },
  { emoji: "🔍", label: "Find a developer" },
  { emoji: "⏳", label: "Wait 2–6 weeks" },
  { emoji: "❌", label: "Something's wrong" },
  { emoji: "🔄", label: "Revise" },
  { emoji: "🚀", label: "Finally launch" },
];

const stats = [
  { emoji: "⏰", label: "Average time", value: "6–12 weeks" },
  { emoji: "💶", label: "Average cost", value: "€5,000–€50,000" },
  { emoji: "😞", label: "What happens", value: "The original idea gets lost in translation" },
];

export default function Slide03() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1
        className="font-caveat text-5xl font-bold text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Old Way 😩
      </motion.h1>

      {/* Flow chart */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl px-4 py-3 text-center min-w-[90px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="text-3xl mb-1">{step.emoji}</div>
              <div className="font-caveat text-sm font-semibold text-gray-600">{step.label}</div>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                className="font-caveat text-2xl text-gray-400 mx-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
        transition={{ delay: 0.9 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white/70 border-2 border-gray-300 rounded-2xl p-5 text-center shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.15 }}
          >
            <div className="text-4xl mb-2">{stat.emoji}</div>
            <div className="font-caveat text-lg text-gray-500 mb-1">{stat.label}</div>
            <div className="font-caveat text-2xl font-bold text-gray-700">{stat.value}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorations */}
      <motion.div className="absolute top-10 right-10 text-5xl opacity-20 animate-spin-slow" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
        ⏰
      </motion.div>
      <motion.div className="absolute bottom-12 left-10 text-5xl opacity-20" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        💸
      </motion.div>
    </div>
  );
}
