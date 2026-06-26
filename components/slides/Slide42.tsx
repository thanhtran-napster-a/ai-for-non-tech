"use client";
import { motion } from "framer-motion";

const columns = [
  {
    icon: "🟡",
    title: "Things that WILL happen",
    bg: "bg-amber-light border-amber",
    items: [
      "Claude will sometimes misunderstand you → redirect with specifics",
      "Some things take more iterations than expected → normal",
      'You\'ll hit "I don\'t know what to do next" moments → that\'s what /plan is for',
    ],
  },
  {
    icon: "🔴",
    title: "Things that WON'T happen (yet)",
    bg: "bg-red-50 border-red-300",
    items: [
      "One perfect prompt that builds your whole app",
      "Production-scale apps for millions of users",
      "Magic without reviewing what Claude builds",
    ],
  },
  {
    icon: "🟢",
    title: "What HAS changed permanently",
    bg: "bg-green-50 border-green-400",
    items: [
      "The cost of starting = near zero",
      "Idea → prototype = hours, not months",
      '"I can\'t build that" is no longer true for simple web things',
    ],
  },
];

export default function Slide42() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Let's be real 🤝 — what to expect
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        {columns.map((col, i) => (
          <motion.div key={i} className={`${col.bg} border-2 rounded-2xl p-5 shadow-md`}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
            <div className="text-4xl mb-3 text-center">{col.icon}</div>
            <h3 className="font-caveat text-xl font-bold text-gray-800 mb-4 text-center">{col.title}</h3>
            <ul className="space-y-3">
              {col.items.map((item, j) => (
                <motion.li key={j} className="font-caveat text-base text-gray-700 flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 + j * 0.1 }}>
                  <span className="mt-1 flex-shrink-0">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p className="font-caveat text-xl text-center text-gray-600 italic mt-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        This is a skill. Like any skill — it gets better with practice. Start building.
      </motion.p>
    </div>
  );
}
