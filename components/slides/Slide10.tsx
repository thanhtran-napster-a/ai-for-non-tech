"use client";
import { motion } from "framer-motion";

const cards = [
  { color: "bg-green-100 border-green-400", dot: "🟢", title: "What it is", desc: "Think of it as Microsoft Word — but for code files" },
  { color: "bg-amber-light border-amber", dot: "🟡", title: "You use it for", desc: "Opening your project folder, seeing what Claude creates, running Claude Code in the terminal" },
  { color: "bg-red-50 border-red-300", dot: "🔴", title: "You do NOT need to", desc: "Read or understand the code. You're the director. Claude is the writer." },
];

export default function Slide10() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Tool 1: VSCode — your workspace 💻
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Left: VSCode mockup */}
        <motion.div className="bg-gray-900 rounded-2xl p-4 shadow-xl flex flex-col min-h-[280px]"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex flex-1 gap-2">
            <div className="w-24 bg-gray-800 rounded-lg p-2">
              <div className="text-gray-400 text-xs font-mono mb-2">EXPLORER</div>
              {["📁 app/", "📁 components/", "📄 package.json", "📄 README.md"].map((f, i) => (
                <div key={i} className="text-gray-300 text-xs font-mono py-0.5">{f}</div>
              ))}
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-3">
              <div className="text-green-400 text-xs font-mono">{"// Hello, world!"}</div>
              <div className="text-blue-400 text-xs font-mono">export default function</div>
              <div className="text-yellow-300 text-xs font-mono mt-2 animate-pulse">|</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-2 mt-2">
            <div className="text-green-400 text-xs font-mono">$ claude</div>
            <div className="text-gray-400 text-xs font-mono">Claude Code ready ✓</div>
          </div>
          <motion.div className="mt-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <span className="font-caveat text-white/70 text-sm">← This is where you'll spend your time</span>
          </motion.div>
        </motion.div>

        {/* Right: info cards */}
        <div className="space-y-4">
          {cards.map((card, i) => (
            <motion.div key={i}
              className={`${card.color} border-2 rounded-xl p-4 shadow-sm`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}>
              <div className="flex items-center gap-2 mb-2">
                <span>{card.dot}</span>
                <h3 className="font-caveat text-xl font-bold text-gray-800">{card.title}</h3>
              </div>
              <p className="font-caveat text-lg text-gray-700">{card.desc}</p>
              {i === 2 && <p className="font-caveat text-base text-gray-500 mt-1 italic">🎬 You're the director!</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
