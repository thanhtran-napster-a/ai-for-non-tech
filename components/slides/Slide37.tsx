"use client";
import { motion } from "framer-motion";

const testSteps = [
  "Open /admin in browser",
  "Try wrong PIN → see error",
  "Try correct PIN → see admin",
  "Add points to a team",
  "Switch to leaderboard → see update!",
];

export default function Slide37() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-blue-600 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 4/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 4 — Build the staff admin panel 🔐
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex gap-2 mb-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
          <p className="font-mono text-green-400 text-xs leading-relaxed">Build the staff admin panel at /admin:
• PIN login page — default PIN: 1234
• Wrong PIN shows 'Access denied' in red
• After login: show list of all teams
• Select a team, enter point value (+ or -)
• Choose reason: 'Won activity', 'Rule violation', 'Bonus challenge', 'Other'
• On submit: update score + log it
• Show last 10 point changes in history
Mobile-friendly — staff use phones!</p>
        </motion.div>

        <div className="space-y-4">
          <h3 className="font-caveat text-xl font-bold text-gray-700">After building, test it:</h3>
          <div className="space-y-2">
            {testSteps.map((step, i) => (
              <motion.div key={i}
                className="flex items-center gap-3 bg-white/70 rounded-xl p-3 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0" />
                <span className="font-caveat text-base text-gray-700">{step}</span>
              </motion.div>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div className="bg-gray-800 rounded-3xl p-3 max-w-[160px] mx-auto shadow-xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <div className="bg-gray-700 rounded-2xl p-3">
              <div className="text-center mb-2"><span className="font-caveat text-white text-sm font-bold">🔐 Admin Panel</span></div>
              <div className="bg-gray-600 rounded p-2 mb-2"><p className="font-mono text-gray-400 text-xs text-center">PIN: ****</p></div>
              <div className="bg-red-500 rounded px-2 py-1"><p className="font-caveat text-white text-xs text-center">Access denied</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
