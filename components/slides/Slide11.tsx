"use client";
import { motion } from "framer-motion";

const features = [
  "Sees your entire project — all files, all context",
  "Remembers what you built earlier",
  "Reads, writes, and runs code for you",
  "Explains what it's doing if you ask",
];

const models = [
  { icon: "⚡", name: "Sonnet 4.6", bestFor: "Everyday tasks, quick changes, iterations", speed: "Fast", bg: "bg-amber-light" },
  { icon: "🧠", name: "Opus 4.8", bestFor: "Complex planning, tricky problems, big decisions", speed: "Deep", bg: "bg-blue-50" },
];

export default function Slide11() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Tool 2: Claude Code — your AI developer 🤖
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 max-w-4xl mx-auto w-full">
        {/* Speech bubble */}
        <motion.div className="relative bg-coral text-white rounded-3xl p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
          <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-coral" />
          <p className="font-caveat text-xl font-semibold leading-relaxed">
            An AI developer that lives in VSCode's terminal. Type in plain English. It builds.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div className="bg-white/70 rounded-2xl p-5 shadow-sm border border-gray-100"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="font-caveat text-xl font-bold text-gray-700 mb-4">What makes it special</h3>
          <ul className="space-y-2">
            {features.map((f, i) => (
              <motion.li key={i} className="flex items-start gap-2 font-caveat text-lg text-gray-700"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <span className="text-green-500 text-xl">✅</span> {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Models table */}
      <motion.div className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md">
          <div className="grid grid-cols-3 bg-gray-50 border-b-2 border-gray-200">
            {["Model", "Best for", "Speed"].map((h, i) => (
              <div key={i} className="p-3 font-caveat text-lg font-bold text-gray-700 border-r border-gray-200 last:border-0">{h}</div>
            ))}
          </div>
          {models.map((m, i) => (
            <div key={i} className={`grid grid-cols-3 ${m.bg} border-b border-gray-100 last:border-0`}>
              <div className="p-3 font-caveat text-lg font-bold border-r border-gray-200">{m.icon} {m.name}</div>
              <div className="p-3 font-caveat text-base text-gray-700 border-r border-gray-200">{m.bestFor}</div>
              <div className="p-3 font-caveat text-lg font-bold text-coral">{m.speed}</div>
            </div>
          ))}
        </div>
        <p className="font-caveat text-lg text-gray-500 italic mt-3 text-center">
          Practical rule: start with Sonnet, switch to Opus when things get complex.
        </p>
      </motion.div>
    </div>
  );
}
