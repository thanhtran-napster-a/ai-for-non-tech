"use client";
import { motion } from "framer-motion";

const tools = [
  { emoji: "💻", name: "VSCode", desc: "Your workspace (where everything lives)", bg: "bg-blue-50", border: "border-blue-300" },
  { emoji: "🤖", name: "Claude Code", desc: "Your AI developer (talks, builds, explains)", bg: "bg-coral-light", border: "border-coral" },
  { emoji: "✨", name: "21st.dev (MCP)", desc: "Your design assistant (makes things beautiful)", bg: "bg-purple-50", border: "border-purple-300" },
  { emoji: "🌐", name: "GitHub + Vercel", desc: "Your publisher (save → deploy → live URL)", bg: "bg-green-50", border: "border-green-400" },
];

export default function Slide09() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-5xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Your toolkit — just 4 things 🧰
      </motion.h1>

      <div className="grid grid-cols-2 gap-5 max-w-3xl mx-auto w-full">
        {tools.map((tool, i) => (
          <motion.div key={i}
            className={`${tool.bg} border-2 ${tool.border} rounded-2xl p-6 shadow-md text-center`}
            initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -3 : 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}>
            <div className="text-6xl mb-3">{tool.emoji}</div>
            <h3 className="font-caveat text-2xl font-bold text-gray-800 mb-2">{tool.name}</h3>
            <p className="font-caveat text-lg text-gray-600">{tool.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Connecting arrows */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-coral/20 pointer-events-none font-caveat text-6xl"
        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        +
      </motion.div>

      <motion.p className="font-caveat text-xl text-center text-gray-500 italic mt-6 max-w-2xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        "You don't need to understand these tools deeply — you just need to know what each one is for."
      </motion.p>
    </div>
  );
}
