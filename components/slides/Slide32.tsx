"use client";
import { motion } from "framer-motion";

const features = [
  { emoji: "🏆", text: "Real-time leaderboard (no login required for campers)" },
  { emoji: "🔐", text: "Staff admin panel protected by PIN" },
  { emoji: "➕", text: "Add or subtract points per team with a reason" },
  { emoji: "📜", text: "Point history log" },
  { emoji: "📱", text: "Mobile-friendly for staff walking around" },
  { emoji: "🌐", text: "Publicly accessible URL — open it on your phone" },
];

export default function Slide32() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Let's build something REAL 🏕️
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        <div>
          <motion.div className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="font-caveat text-2xl font-bold text-orange-700 mb-1">Code 1 — Summer Camp Leaderboard App</h2>
            <p className="font-caveat text-lg text-gray-600 italic">A real app. A real use case. Live on the internet by the end of this session.</p>
          </motion.div>

          <div className="space-y-2">
            {features.map((f, i) => (
              <motion.div key={i} className="flex items-center gap-3 bg-white/70 rounded-xl p-3 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                <span className="text-2xl">{f.emoji}</span>
                <span className="font-caveat text-base text-gray-700">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mockup frames */}
        <div className="space-y-4">
          <motion.div className="bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300 rounded-2xl p-4 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <p className="font-caveat text-sm text-gray-500 mb-2">Public view — anyone can see this:</p>
            <div className="space-y-2">
              {[{ rank: "🥇", team: "Team Alpha", pts: 450 }, { rank: "🥈", team: "Team Beta", pts: 380 }, { rank: "🥉", team: "Team Gamma", pts: 310 }].map((t, i) => (
                <div key={i} className="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                  <span className="text-xl">{t.rank}</span>
                  <span className="font-caveat text-lg font-bold text-gray-800">{t.team}</span>
                  <span className="font-caveat text-lg text-coral font-bold">{t.pts} pts</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
            <p className="font-caveat text-sm text-gray-400 mb-2">🔐 Admin panel — staff only:</p>
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="font-caveat text-white text-sm mb-1">PIN: ****</div>
              <div className="bg-coral rounded px-2 py-1 text-white font-caveat text-xs text-center">Enter Admin</div>
            </div>
          </motion.div>

          <motion.p className="font-caveat text-sm text-gray-500 italic text-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            📄 Full project brief in project-brief.md!
          </motion.p>
        </div>
      </div>

      <motion.div className="absolute bottom-8 right-8 text-5xl"
        animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🏕️</motion.div>
    </div>
  );
}
