"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "🌐", text: <>Go to <strong>github.com</strong></> },
  { num: "2", emoji: "📝", text: 'Click "Sign up"' },
  { num: "3", emoji: "👤", text: "Choose a username — this will appear in your project URLs" },
  { num: "4", emoji: "✅", text: "Free plan is enough for everything we're doing" },
  { num: "5", emoji: "📧", text: "Verify your email" },
];

export default function Slide21() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">6/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 6 of 7 — Create your GitHub account 🐙
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div key={i} className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12 }}>
              <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="font-caveat text-white font-bold">{step.num}</span>
              </div>
              <div className="flex-1 bg-white/70 rounded-2xl p-3 border border-gray-200">
                <span className="text-xl mr-2">{step.emoji}</span>
                <span className="font-caveat text-lg text-gray-700">{step.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <motion.div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-5 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🤔</span>
              <h3 className="font-caveat text-xl font-bold text-gray-800">Why do I need this?</h3>
            </div>
            <p className="font-caveat text-base text-gray-700">GitHub is where your project code lives on the internet. It's the bridge between your laptop and Vercel (your publisher).</p>
          </motion.div>

          <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-5 shadow-md"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="font-caveat text-xl font-bold text-gray-800">Username tip</h3>
            </div>
            <p className="font-caveat text-base text-gray-700">Pick something clean — your name or initials. It'll appear in URLs like:</p>
            <p className="font-mono text-sm text-coral mt-2 bg-white/50 rounded px-2 py-1">github.com/yourname/project</p>
          </motion.div>

          <motion.div className="text-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <span className="text-6xl">🐙</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
