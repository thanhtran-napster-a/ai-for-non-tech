"use client";
import { motion } from "framer-motion";

const tableRows = [
  ["Product Manager", "Developer"],
  ["Describe WHAT", "Figures out HOW"],
  ["Review & direct", "Writes the code"],
];

export default function Slide05() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-10 overflow-auto">
      <motion.h1
        className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        So... what exactly is vibe coding? 🤔
      </motion.h1>

      {/* Pull quote */}
      <motion.div
        className="relative bg-coral text-white rounded-3xl p-6 max-w-3xl mx-auto mb-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <div className="absolute -top-4 left-8 text-6xl text-coral-dark">"</div>
        <p className="font-caveat text-2xl font-semibold leading-relaxed pt-4">
          Vibe coding is describing what you want to build in plain language, and letting AI translate that into working software.
        </p>
        <div className="absolute -bottom-4 right-8 text-6xl text-coral-dark">"</div>
      </motion.div>

      {/* Two-column comparison */}
      <motion.div
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md">
          <div className="grid grid-cols-2">
            <div className="bg-amber-light p-4 text-center font-caveat text-xl font-bold border-b-2 border-r border-gray-200">
              Your role 🧑‍💼
            </div>
            <div className="bg-teal-light p-4 text-center font-caveat text-xl font-bold border-b-2 border-gray-200">
              Claude's role 🤖
            </div>
          </div>
          {tableRows.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-2 border-b border-gray-100 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <div className={`p-4 font-caveat text-lg font-semibold border-r border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
                {row[0]}
              </div>
              <div className={`p-4 font-caveat text-lg ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
                {row[1]}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="font-caveat text-xl text-center text-gray-500 italic mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        ⭐ You've been doing your half of this job your entire career.
      </motion.p>
    </div>
  );
}
