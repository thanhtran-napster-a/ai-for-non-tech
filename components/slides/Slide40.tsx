"use client";
import { motion } from "framer-motion";

const confetti = ["🎊", "⭐", "🎉", "✨", "🌟", "🎆", "🎈", "🎊", "⭐", "🎉"];

export default function Slide40() {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-coral to-amber rounded-none flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Confetti scattered */}
      {confetti.map((e, i) => (
        <motion.div key={i} className="absolute text-4xl pointer-events-none"
          style={{ left: `${5 + (i * 9.5)}%`, top: `${5 + (i % 5) * 18}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}>
          {e}
        </motion.div>
      ))}

      <motion.h1 className="font-caveat text-5xl md:text-7xl font-bold text-white text-center mb-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}>
        🎊 Everyone open the URL — right now!
      </motion.h1>

      <div className="space-y-4 mb-8 z-10 text-center">
        {[
          { num: "1", emoji: "📱", text: "Open the live URL on your phone" },
          { num: "2", emoji: "🏆", text: "Go to the leaderboard page" },
          { num: "3", emoji: "👀", text: "Watch as the instructor adds points from their phone" },
        ].map((s, i) => (
          <motion.div key={i}
            className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="font-caveat text-coral text-xl font-bold">{s.num}</span>
            </div>
            <span className="text-2xl">{s.emoji}</span>
            <span className="font-caveat text-xl text-white font-bold">{s.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Two devices */}
      <motion.div className="flex items-center gap-8 mb-8 z-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <div className="bg-gray-800 rounded-2xl p-3 shadow-xl w-28">
          <div className="bg-gray-700 rounded-xl p-2 text-center">
            <p className="font-caveat text-white text-xs">🔐 Admin</p>
            <div className="bg-coral rounded mt-1 px-1 py-0.5 text-white font-caveat text-xs">+50 pts</div>
          </div>
        </div>
        <motion.div animate={{ x: [0, 5, -5, 5, 0], color: ["#fff", "#FFD700", "#fff"] }} transition={{ duration: 1, repeat: Infinity }}>
          <span className="text-4xl">⚡LIVE</span>
        </motion.div>
        <div className="bg-white rounded-2xl p-3 shadow-xl w-36">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-caveat font-bold"><span>🥇 Alpha</span><span className="text-coral">500 ⚡</span></div>
            <div className="flex justify-between text-xs font-caveat"><span>🥈 Beta</span><span>380</span></div>
            <div className="flex justify-between text-xs font-caveat"><span>🥉 Gamma</span><span>310</span></div>
          </div>
        </div>
      </motion.div>

      <motion.div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 z-10 max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}>
        <p className="font-caveat text-2xl text-white font-bold">
          From brief → plan → build → design → live URL: in one afternoon. That's vibe coding. 🎉
        </p>
      </motion.div>
    </div>
  );
}
