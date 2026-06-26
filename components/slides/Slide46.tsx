"use client";
import { motion } from "framer-motion";

const achievements = [
  { emoji: "🛠️", text: "Working development environment" },
  { emoji: "🌐", text: "A live deployed website" },
  { emoji: "🔄", text: "The workflow to build anything similar" },
  { emoji: "👥", text: "A community to build with" },
];

const confetti = ["✨", "🎈", "⭐", "🎊", "🎆", "🌟", "🎉", "✨"];

export default function Slide46() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Confetti decorations */}
      {confetti.map((e, i) => (
        <motion.div key={i} className="absolute text-3xl pointer-events-none"
          style={{ left: `${5 + (i * 12)}%`, top: `${5 + (i % 4) * 22}%` }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}>
          {e}
        </motion.div>
      ))}

      <motion.h1 className="font-caveat text-5xl md:text-7xl font-bold text-gray-800 text-center mb-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}>
        You're ready. Now go build something. 🚀
      </motion.h1>

      {/* Achievement badges */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl w-full mb-8 z-10">
        {achievements.map((a, i) => (
          <motion.div key={i}
            className="bg-white border-2 border-coral rounded-2xl p-4 flex items-center gap-3 shadow-md"
            initial={{ opacity: 0, scale: 0.7, rotate: i % 2 === 0 ? -3 : 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}>
            <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-2xl">{a.emoji}</span>
            </div>
            <span className="font-caveat text-lg font-bold text-gray-800">{a.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Final statement */}
      <motion.div className="bg-coral rounded-3xl px-8 py-5 text-center z-10 shadow-xl"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-3xl font-bold text-white">The only thing left:</p>
        <motion.p className="font-caveat text-4xl font-bold text-white mt-1"
          animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          Build something. ✨
        </motion.p>
      </motion.div>

      <motion.p className="font-caveat text-xl text-gray-500 mt-6 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        ✍️ Presenter name & contact here
      </motion.p>
    </div>
  );
}
