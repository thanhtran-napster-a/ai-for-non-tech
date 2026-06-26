"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "🌐", text: <>Go to <strong>console.anthropic.com</strong></> },
  { num: "2", emoji: "👤", text: "Create an account (or sign in)" },
  { num: "3", emoji: "📋", text: 'In the left menu → click "API Keys"' },
  { num: "4", emoji: "➕", text: 'Click "Create Key"' },
  { num: "5", emoji: "📝", text: 'Give it a name (e.g. "my vibe coding key")' },
  { num: "6", emoji: "⚠️", text: "Copy the key immediately — you won't see it again!", highlight: true },
  { num: "7", emoji: "📒", text: "Paste it temporarily in Notepad or Notes app" },
];

export default function Slide19() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">4/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 4 of 7 — Get your Anthropic API Key 🔑
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div key={i}
              className={`flex items-start gap-3 rounded-xl p-3 border-2 ${step.highlight ? "bg-red-50 border-red-400 shadow-lg" : "bg-white/70 border-gray-200"}`}
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-caveat text-base font-bold ${step.highlight ? "bg-red-500 text-white" : "bg-coral text-white"}`}>
                {step.num}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">{step.emoji}</span>
                <span className={`font-caveat text-base ${step.highlight ? "text-red-700 font-bold text-lg" : "text-gray-700"}`}>{step.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-5 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔑</span>
              <h3 className="font-caveat text-xl font-bold text-gray-800">What is an API key?</h3>
            </div>
            <p className="font-caveat text-base text-gray-700">Think of it as your personal ID card — it tells Claude Code "this request is from me".</p>
          </motion.div>

          <motion.div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💶</span>
              <h3 className="font-caveat text-xl font-bold text-gray-800">What does it cost?</h3>
            </div>
            <p className="font-caveat text-base text-gray-700">Anthropic charges per use. For learning and small projects, typically <strong>under €5/month</strong>. You can set a spending limit in the console.</p>
          </motion.div>

          <motion.div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <p className="font-caveat text-base text-gray-600">Keep your key private — never share it publicly!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
