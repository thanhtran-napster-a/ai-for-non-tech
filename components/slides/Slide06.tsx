"use client";
import { motion } from "framer-motion";

const cards = [
  {
    emoji: "📢",
    role: "Marketer",
    story: "Built a campaign landing page with email capture in 90 minutes.",
    bg: "bg-coral-light",
    border: "border-coral",
  },
  {
    emoji: "📊",
    role: "Manager",
    story: "Built an internal team dashboard tracking weekly KPIs — no IT ticket needed.",
    bg: "bg-teal-light",
    border: "border-teal",
  },
  {
    emoji: "🎨",
    role: "Designer",
    story: "Turned a Figma concept into a live, animated website in an afternoon.",
    bg: "bg-amber-light",
    border: "border-amber",
  },
  {
    emoji: "📚",
    role: "Teacher",
    story: "Built an interactive quiz page for their class — no IT department, done before the next lesson.",
    bg: "bg-green-50",
    border: "border-green-400",
  },
];

export default function Slide06() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1
        className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        This is NOT just for tech people 🙅
      </motion.h1>

      <motion.p
        className="font-caveat text-xl text-coral text-center mb-6 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Real stories 👇
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`${card.bg} border-2 ${card.border} rounded-2xl p-6 shadow-md`}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -0.5 : 0.5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="text-5xl mb-3">{card.emoji}</div>
            <h3 className="font-caveat text-2xl font-bold text-gray-800 mb-2">{card.role}</h3>
            <p className="font-caveat text-lg text-gray-600 leading-relaxed">{card.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
