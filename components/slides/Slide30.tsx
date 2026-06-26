"use client";
import { motion } from "framer-motion";

const prompts = [
  { bg: "bg-pink-50 border-pink-300", text: "Use the 21st.dev MCP to find a modern hero section component for a marketing landing page. Apply it to the top of my page." },
  { bg: "bg-blue-50 border-blue-300", text: "Search 21st.dev for a clean email signup form component and replace my current form with it." },
  { bg: "bg-amber-light border-amber", text: "Find a professional pricing table component from 21st.dev and add it to my product page." },
];

export default function Slide30() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        How to unlock 21st.dev — design magic ✨
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Left */}
        <div className="space-y-4">
          <motion.div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-5 shadow-md"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="font-caveat text-xl font-bold text-purple-800 mb-2">How to trigger it:</h3>
            <p className="font-caveat text-base text-gray-700">
              Just include <strong className="text-purple-700">"21st.dev MCP"</strong> in your prompt — Claude automatically searches the component library and applies the best match.
            </p>
          </motion.div>

          {/* Activation diagram */}
          <motion.div className="space-y-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {[
              "Your prompt (with \"21st.dev MCP\" in it)",
              "✨ Claude searches library",
              "Finds best component",
              "Applies it to your project",
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`rounded-xl px-4 py-2 font-caveat text-base text-center w-full ${i === 0 ? "bg-coral text-white font-bold" : "bg-white border border-gray-200 text-gray-700"}`}>
                  {step}
                </div>
                {i < 3 && <span className="text-coral text-xl font-bold">↓</span>}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — prompts */}
        <div className="space-y-3">
          <h3 className="font-caveat text-xl font-bold text-gray-700">Example prompts:</h3>
          {prompts.map((prompt, i) => (
            <motion.div key={i} className={`${prompt.bg} border-2 rounded-2xl p-4 shadow-sm`}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
              whileHover={{ scale: 1.02 }}>
              <span className="text-xl mr-2">💬</span>
              <span className="font-caveat text-base text-gray-700 italic">"{prompt.text}"</span>
            </motion.div>
          ))}
          <motion.div className="text-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <span className="text-3xl">✨ ⭐ ✨</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
