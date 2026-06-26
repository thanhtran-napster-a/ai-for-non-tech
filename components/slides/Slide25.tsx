"use client";
import { motion } from "framer-motion";

const formulaParts = [
  { color: "bg-blue-100 border-blue-400 text-blue-700", label: "Context", emoji: "🔵" },
  { color: "bg-orange-100 border-orange-400 text-orange-700", label: "What you want", emoji: "🟠" },
  { color: "bg-green-100 border-green-400 text-green-700", label: "How it should look/feel", emoji: "🟢" },
];

export default function Slide25() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        The formula that always works 🧪
      </motion.h1>

      {/* Formula */}
      <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
        {formulaParts.map((part, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              className={`${part.color} border-2 rounded-2xl px-5 py-3 text-center shadow-md`}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05 }}>
              <div className="text-2xl">{part.emoji}</div>
              <div className="font-caveat text-xl font-bold mt-1">{part.label}</div>
            </motion.div>
            {i < formulaParts.length - 1 && (
              <span className="text-2xl text-gray-400 font-bold">+</span>
            )}
          </div>
        ))}
      </div>

      {/* Example */}
      <motion.div className="bg-white border-2 border-gray-200 rounded-3xl p-6 max-w-3xl mx-auto w-full shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">💬</span>
          <span className="font-caveat text-lg text-gray-500 italic">Example prompt:</span>
        </div>
        <p className="font-caveat text-lg text-gray-700 leading-relaxed">
          <span className="bg-blue-100 text-blue-700 px-1 rounded">I'm building a registration page for our company's annual event.</span>{" "}
          <span className="bg-orange-100 text-orange-700 px-1 rounded">Add a signup form that collects name, email, and preferred session (morning or afternoon).</span>{" "}
          <span className="bg-green-100 text-green-700 px-1 rounded">Keep it simple and clean — just the fields, a submit button, and a thank-you message after submission.</span>
        </p>
      </motion.div>

      <motion.p className="font-caveat text-lg text-center text-gray-500 italic"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
        💡 You don't need to mention technology, code, or frameworks. Just describe the outcome.
      </motion.p>
    </div>
  );
}
