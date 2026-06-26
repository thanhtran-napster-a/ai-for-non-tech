"use client";
import { motion } from "framer-motion";

export default function Slide24() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1 className="font-caveat text-5xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        The most important skill 💬
      </motion.h1>

      {/* Main message */}
      <motion.div className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
        <p className="font-caveat text-3xl font-bold text-gray-700">
          "The tools are just tools. The real skill is <span className="text-coral handwritten-underline">how you communicate</span>."
        </p>
      </motion.div>

      {/* Two equations */}
      <div className="space-y-4 max-w-3xl mx-auto w-full mb-8">
        {/* Good */}
        <motion.div className="flex items-center gap-3 flex-wrap justify-center"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <div className="bg-green-100 border-2 border-green-400 rounded-xl px-4 py-2 font-caveat text-lg font-bold text-green-700">Clear communication</div>
          <span className="text-2xl text-green-500 font-bold">→</span>
          <div className="bg-green-200 border-2 border-green-500 rounded-xl px-4 py-2 font-caveat text-lg font-bold text-green-800">Great results ✅</div>
        </motion.div>

        {/* Bad */}
        <motion.div className="flex items-center gap-3 flex-wrap justify-center"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <div className="bg-red-100 border-2 border-red-300 rounded-xl px-4 py-2 font-caveat text-lg font-bold text-red-600">Vague communication</div>
          <span className="text-xl text-red-400 font-bold">→</span>
          <div className="bg-orange-100 border-2 border-orange-300 rounded-xl px-4 py-2 font-caveat text-base text-orange-700">Claude guesses</div>
          <span className="text-xl text-red-400 font-bold">→</span>
          <div className="bg-red-100 border-2 border-red-300 rounded-xl px-4 py-2 font-caveat text-base text-red-600">You fix it</div>
          <span className="text-xl text-red-400 font-bold">→</span>
          <div className="bg-red-200 border-2 border-red-400 rounded-xl px-4 py-2 font-caveat text-base font-bold text-red-700">Wasted time ❌</div>
        </motion.div>
      </div>

      {/* Reassurance speech bubble */}
      <motion.div className="relative bg-white border-2 border-gray-200 rounded-3xl p-6 max-w-3xl mx-auto w-full shadow-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <div className="absolute -top-4 left-6 text-5xl">💬</div>
        <p className="font-caveat text-xl text-gray-700 mt-4">
          The good news? You already know how to communicate. You do it every day with clients, colleagues, designers. The same skill works perfectly with Claude.
        </p>
        <div className="flex gap-3 mt-3">
          <span className="text-2xl">👍</span>
          <span className="text-2xl">⭐</span>
        </div>
      </motion.div>
    </div>
  );
}
