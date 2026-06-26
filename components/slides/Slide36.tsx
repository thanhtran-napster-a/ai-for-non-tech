"use client";
import { motion } from "framer-motion";

const leaderboard = [
  { rank: "🥇", team: "Team Alpha", pts: 450, bg: "bg-yellow-100 border-yellow-400" },
  { rank: "🥈", team: "Team Beta", pts: 380, bg: "bg-gray-100 border-gray-400" },
  { rank: "🥉", team: "Team Gamma", pts: 310, bg: "bg-orange-100 border-orange-400" },
  { rank: "4", team: "Team Delta", pts: 240, bg: "bg-white border-gray-200" },
  { rank: "5", team: "Team Echo", pts: 190, bg: "bg-white border-gray-200" },
];

export default function Slide36() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-blue-600 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 3/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 3 — Build the leaderboard 🏆
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex gap-2 mb-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
            <p className="font-mono text-green-400 text-xs leading-relaxed">Build the main leaderboard page. Requirements:
• Ranked list of teams with current scores
• Top 3 visually distinct: gold, silver, bronze
• Updates automatically every 3 seconds
• No login required to view
• Works on desktop AND mobile
Start with 5 sample teams with fictional scores.</p>
          </motion.div>

          <motion.div className="bg-teal-light border-2 border-teal rounded-2xl p-4 shadow-sm"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <p className="font-caveat text-base text-teal-800">🎨 Design pass: "Use the 21st.dev MCP to find a scoreboard component that looks exciting and competitive — like something you'd see in a gaming tournament."</p>
          </motion.div>
        </div>

        {/* Leaderboard preview */}
        <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-center mb-3">
            <span className="font-caveat text-2xl font-bold text-yellow-400">🏕️ Summer Camp 2025</span>
          </div>
          <div className="space-y-2">
            {leaderboard.map((item, i) => (
              <motion.div key={i}
                className={`flex items-center justify-between ${item.bg} border rounded-xl px-3 py-2`}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                <span className="text-xl">{item.rank}</span>
                <span className="font-caveat text-lg font-bold text-gray-800">{item.team}</span>
                <motion.span className="font-caveat text-xl font-bold text-coral"
                  animate={{ scale: i === 0 ? [1, 1.1, 1] : 1 }} transition={{ duration: 2, repeat: Infinity }}>
                  {item.pts}
                </motion.span>
              </motion.div>
            ))}
          </div>
          <p className="font-caveat text-xs text-gray-500 text-center mt-2">Updates every 3s ⚡</p>
        </motion.div>
      </div>
    </div>
  );
}
