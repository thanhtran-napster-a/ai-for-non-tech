"use client";
import { motion } from "framer-motion";

const checklist = [
  [
    { emoji: "💻", label: "VSCode", desc: "your workspace" },
    { emoji: "📦", label: "Node.js", desc: "Claude needs this to run" },
    { emoji: "🤖", label: "Claude Code", desc: "your AI developer" },
  ],
  [
    { emoji: "🔑", label: "Anthropic API Key", desc: "your personal ID" },
    { emoji: "🐙", label: "GitHub account", desc: "your project's history" },
    { emoji: "🚀", label: "Vercel account", desc: "your publisher" },
  ],
];

export default function Slide15() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Let's set up! Here's what we'll install 🛠️
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full mb-6">
        {checklist.map((col, ci) => (
          <div key={ci} className="space-y-3">
            {col.map((item, i) => (
              <motion.div key={i}
                className="flex items-center gap-4 bg-white/70 border-2 border-dashed border-gray-300 rounded-2xl p-4 shadow-sm"
                initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (ci * 3 + i) * 0.1, type: "spring" }}
                whileHover={{ scale: 1.02, borderColor: "#FF6B47", borderStyle: "solid" }}>
                <span className="text-3xl">☐</span>
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <div className="font-caveat text-xl font-bold text-gray-800">{item.label}</div>
                  <div className="font-caveat text-base text-gray-500">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-5 max-w-3xl mx-auto w-full text-center shadow-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-xl text-gray-700">
          ⏱️ This takes <strong>30–45 minutes</strong> total. Some steps take 30 seconds, others take 5 minutes. Go at your own pace!
        </p>
      </motion.div>

      <motion.div className="absolute bottom-10 right-10 text-6xl"
        animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🔧</motion.div>
    </div>
  );
}
