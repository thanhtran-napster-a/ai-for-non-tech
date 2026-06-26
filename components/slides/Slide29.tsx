"use client";
import { motion } from "framer-motion";

export default function Slide29() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Claude will make mistakes. Here's how to fix it 🔧
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mb-6">
        {/* Don't say */}
        <motion.div className="space-y-4"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="font-caveat text-2xl font-bold text-red-500 text-center">❌ Don't say</h3>
          <div className="relative bg-red-100 border-3 border-red-400 rounded-3xl p-6 shadow-md">
            <p className="font-caveat text-3xl text-red-600 font-bold text-center">"That's wrong, fix it."</p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-5xl">😞</div>
          </div>
          <div className="h-6" />
        </motion.div>

        {/* Do say */}
        <motion.div className="space-y-4"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="font-caveat text-2xl font-bold text-green-600 text-center">✅ Do say</h3>
          <div className="relative bg-green-100 border-2 border-green-400 rounded-3xl p-5 shadow-md">
            <p className="font-caveat text-xl text-green-700 font-semibold">
              "The form is submitting when I press Enter, but I only want it to submit when I click the button. Can you fix that?"
            </p>
            <div className="absolute -bottom-4 right-6 text-4xl">👍</div>
          </div>
          <div className="h-6" />
        </motion.div>
      </div>

      {/* Formula */}
      <motion.div className="bg-white/80 border-2 border-gray-200 rounded-2xl p-5 max-w-3xl mx-auto w-full shadow-sm mb-4"
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <h3 className="font-caveat text-xl font-bold text-gray-700 mb-3 text-center">The formula for good corrections:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <p className="font-caveat text-lg text-blue-700">👀 Describe <strong>what you see happening</strong></p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <p className="font-caveat text-lg text-green-700">🎯 Describe <strong>what you wanted instead</strong></p>
          </div>
        </div>
      </motion.div>

      <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-4 max-w-3xl mx-auto w-full"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <p className="font-caveat text-base text-gray-700 italic">
          💡 If it goes completely off track: "Let's reset this. Start over with just the form — ignore everything else for now."
        </p>
        <p className="font-caveat text-sm text-gray-500 mt-1">This is totally normal — it's like giving feedback to a junior designer. 🔧🚧</p>
      </motion.div>
    </div>
  );
}
