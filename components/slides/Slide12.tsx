"use client";
import { motion } from "framer-motion";

const examplePrompts = [
  { bg: "bg-pink-50 border-pink-300", prompt: "My landing page looks too plain. Use the 21st.dev MCP to find a hero section that looks professional and modern." },
  { bg: "bg-blue-50 border-blue-300", prompt: "Search 21st.dev for a clean email signup form component and replace my current form with it." },
];

export default function Slide12() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Tool 3: 21st.dev — your design assistant ✨
      </motion.h1>

      {/* MCP Banner */}
      <motion.div className="bg-purple-100 border-2 border-purple-300 rounded-2xl p-4 max-w-4xl mx-auto w-full mb-5 text-center"
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
        <p className="font-caveat text-xl font-semibold text-purple-800">
          🦸 MCP = a plugin that gives Claude extra superpowers it wouldn't have on its own
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full mb-5">
        {/* What it does */}
        <motion.div className="bg-white/70 border-2 border-purple-200 rounded-2xl p-5 shadow-sm"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-4xl mb-3">🪄</div>
          <h3 className="font-caveat text-xl font-bold text-gray-800 mb-2">What 21st.dev does</h3>
          <p className="font-caveat text-lg text-gray-700">Access to a library of beautiful, professionally designed UI components. Claude can find and apply them — like having a designer on call.</p>
        </motion.div>

        {/* In practice */}
        <motion.div className="space-y-3"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="font-caveat text-xl font-bold text-gray-700">In practice:</h3>
          {examplePrompts.map((ep, i) => (
            <div key={i} className={`${ep.bg} border-2 rounded-xl p-3`}>
              <p className="font-caveat text-base text-gray-700">💬 "{ep.prompt}"</p>
            </div>
          ))}
          <div className="flex items-center gap-2 font-caveat text-base text-gray-600 pl-2">
            <span>➡️</span> <span>Claude searches, finds, applies. Result: polished design instantly.</span>
          </div>
        </motion.div>
      </div>

      {/* Before / After */}
      <motion.div className="flex items-center justify-center gap-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center w-40 h-24 flex items-center justify-center">
          <p className="font-caveat text-gray-400 text-sm">Plain & dull</p>
        </div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="text-3xl">✨</span>
        </motion.div>
        <motion.div className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-4 text-center w-40 h-24 flex items-center justify-center shadow-md"
          animate={{ boxShadow: ["0 4px 10px rgba(147,51,234,0.1)", "0 8px 20px rgba(147,51,234,0.3)", "0 4px 10px rgba(147,51,234,0.1)"] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <p className="font-caveat text-purple-700 text-sm font-bold">Beautiful & styled ✨</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
