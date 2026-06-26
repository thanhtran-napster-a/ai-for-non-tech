"use client";
import { motion } from "framer-motion";

const flowItems = [
  { icon: "👤", label: "You", sub: "talking in plain English", bg: "bg-amber-light border-amber" },
  { icon: "🤖", label: "Claude Code", sub: "builds your files", bg: "bg-coral-light border-coral", side: { icon: "✨", label: "21st.dev MCP", sub: "design library", bg: "bg-purple-50 border-purple-300" } },
  { icon: "💻", label: "Your project", sub: "folder in VSCode", bg: "bg-blue-50 border-blue-300" },
  { icon: "📚", label: "GitHub", sub: "saves history", bg: "bg-purple-50 border-purple-300" },
  { icon: "🚀", label: "Vercel", sub: "publishes live", bg: "bg-gray-700 border-gray-500", dark: true },
  { icon: "🌐", label: "Your website", sub: "accessible anywhere in the world", bg: "bg-green-50 border-green-400" },
];

export default function Slide14() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        How it all fits together 🔗
      </motion.h1>

      <div className="flex gap-6 max-w-4xl mx-auto w-full">
        {/* Main flow */}
        <div className="flex flex-col items-center gap-2 flex-1">
          {flowItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <motion.div
                className={`${item.bg} border-2 rounded-2xl p-3 flex items-center gap-3 w-full max-w-xs shadow-md`}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.12 }}
                whileHover={{ scale: 1.03 }}>
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <div className={`font-caveat text-xl font-bold ${item.dark ? "text-white" : "text-gray-800"}`}>{item.label}</div>
                  <div className={`font-caveat text-sm ${item.dark ? "text-gray-300" : "text-gray-500"}`}>{item.sub}</div>
                </div>
                {item.side && (
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-gray-400">↔</span>
                    <div className={`${item.side.bg} border-2 rounded-xl p-2 text-center`}>
                      <span className="text-xl">{item.side.icon}</span>
                      <div className="font-caveat text-xs font-bold text-gray-700">{item.side.label}</div>
                    </div>
                  </div>
                )}
              </motion.div>
              {i < flowItems.length - 1 && (
                <motion.div className="text-coral text-2xl font-bold my-0.5"
                  animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Side note */}
        <motion.div className="hidden md:flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
          <div className="relative bg-white border-2 border-coral rounded-2xl p-5 max-w-[200px] shadow-lg">
            <div className="absolute -left-4 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-coral" />
            <p className="font-caveat text-lg text-gray-700 font-semibold">
              You only touch step 1. The rest happens automatically.
            </p>
          </div>
          <div className="text-center mt-4">
            {["⭐", "✨", "🌟"].map((s, i) => (
              <motion.span key={i} className="text-2xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>{s}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
