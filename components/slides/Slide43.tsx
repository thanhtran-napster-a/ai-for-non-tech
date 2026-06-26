"use client";
import { motion } from "framer-motion";

export default function Slide43() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        The skill you practiced today isn't what you think 💡
      </motion.h1>

      {/* Crossed out items */}
      <div className="flex justify-center gap-8 mb-8">
        {["Coding", "Prompting", "Technology"].map((item, i) => (
          <motion.div key={i}
            className="relative text-center"
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
            <p className="font-caveat text-3xl font-bold text-gray-300 line-through">{item}</p>
            <motion.div className="absolute inset-0 flex items-center justify-center text-4xl"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1, type: "spring" }}>
              🚫
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Real answer */}
      <motion.div className="bg-coral rounded-3xl p-6 max-w-2xl mx-auto w-full text-center shadow-xl mb-8"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
        <p className="font-caveat text-3xl font-bold text-white mb-2">
          Clearly communicating what you want.
        </p>
        <p className="font-caveat text-xl text-white/80">
          ...which you've been doing your entire career.
        </p>
      </motion.div>

      {/* Partnership visual */}
      <div className="flex items-center justify-center gap-6 max-w-3xl mx-auto w-full">
        {[
          { icon: "🧑", title: "You brought:", items: ["Domain knowledge", "Real use cases", "Judgment about what looks right"], bg: "bg-amber-light border-amber" },
          { icon: "🤖", title: "Claude brought:", items: ["Technical execution", "Code", "Speed"], bg: "bg-teal-light border-teal" },
        ].map((side, i) => (
          <motion.div key={i} className={`${side.bg} border-2 rounded-2xl p-4 flex-1 shadow-md`}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.1 }}>
            <div className="text-4xl mb-2 text-center">{side.icon}</div>
            <h3 className="font-caveat text-lg font-bold text-gray-800 mb-2 text-center">{side.title}</h3>
            <ul className="space-y-1">
              {side.items.map((item, j) => (
                <li key={j} className="font-caveat text-base text-gray-700 text-center">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
        <motion.div className="text-5xl flex-shrink-0"
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          🤝
        </motion.div>
      </div>

      <motion.p className="font-caveat text-xl text-center text-coral font-bold mt-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        Vibe coding = your expertise + Claude's execution.
      </motion.p>
    </div>
  );
}
