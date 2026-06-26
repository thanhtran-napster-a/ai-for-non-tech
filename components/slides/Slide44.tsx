"use client";
import { motion } from "framer-motion";

const resources = [
  { emoji: "🤖", name: "Claude Code Docs", url: "docs.anthropic.com/claude-code", desc: "Full documentation and guides", color: "border-t-orange-400" },
  { emoji: "🧪", name: "Anthropic Console", url: "console.anthropic.com", desc: "Manage your API key and billing", color: "border-t-coral" },
  { emoji: "✨", name: "21st.dev", url: "21st.dev", desc: "Browse and search design components", color: "border-t-purple-400" },
  { emoji: "⚛️", name: "Next.js Docs", url: "nextjs.org/docs", desc: "Understand what was built", color: "border-t-blue-400" },
  { emoji: "🚀", name: "Vercel Docs", url: "vercel.com/docs", desc: "Deployment help and settings", color: "border-t-gray-800" },
  { emoji: "🐙", name: "GitHub Docs", url: "docs.github.com", desc: "Git and repository help", color: "border-t-gray-600" },
];

export default function Slide44() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Your toolkit — bookmarked and ready 🔖
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mb-4">
        {resources.map((r, i) => (
          <motion.div key={i}
            className={`bg-white border-t-4 ${r.color} rounded-2xl p-4 shadow-md`}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
            whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -0.5 : 0.5 }}>
            <div className="text-3xl mb-2">{r.emoji}</div>
            <h3 className="font-caveat text-xl font-bold text-gray-800 mb-1">{r.name}</h3>
            <p className="font-mono text-xs text-coral mb-2 break-all">{r.url}</p>
            <p className="font-caveat text-sm text-gray-600">{r.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-4 max-w-3xl mx-auto w-full text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-lg text-gray-700">
          💡 Tip: Bookmark all 6. You'll use <strong>Claude Code Docs</strong> and <strong>Anthropic Console</strong> most.
        </p>
      </motion.div>
    </div>
  );
}
