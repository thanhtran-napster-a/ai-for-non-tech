"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "🌐", text: <>Go to <strong>vercel.com</strong></>, highlight: false },
  { num: "2", emoji: "📝", text: 'Click "Sign up"', highlight: false },
  { num: "3", emoji: "🐙", text: <>Select <strong>"Continue with GitHub"</strong> ← <em>this is the important one!</em></>, highlight: true },
  { num: "4", emoji: "✅", text: "Authorize Vercel to access your GitHub", highlight: false },
  { num: "5", emoji: "🎉", text: "Done!", highlight: false },
];

export default function Slide22() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        <span className="font-caveat text-white text-xl font-bold">7/7</span>
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Step 7 of 7 — Create your Vercel account 🚀
      </motion.h1>

      <div className="max-w-3xl mx-auto w-full space-y-3 mb-6">
        {steps.map((step, i) => (
          <motion.div key={i}
            className={`flex items-center gap-3 rounded-2xl p-3 border-2 ${step.highlight ? "bg-coral-light border-coral shadow-lg" : "bg-white/70 border-gray-200"}`}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.12 }}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-caveat font-bold ${step.highlight ? "bg-coral text-white scale-125" : "bg-coral text-white"}`}>
              {step.highlight ? "⭐" : step.num}
            </div>
            <span className="text-xl">{step.emoji}</span>
            <span className={`font-caveat text-lg ${step.highlight ? "text-coral-dark font-bold" : "text-gray-700"}`}>{step.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Connection graphic */}
      <motion.div className="flex items-center justify-center gap-6 mb-6"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
        <div className="bg-gray-800 text-white rounded-xl px-4 py-3 font-caveat text-xl font-bold">🐙 GitHub</div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="text-3xl text-coral">🔗</span>
        </motion.div>
        <div className="bg-gray-900 text-white rounded-xl px-4 py-3 font-caveat text-xl font-bold">▲ Vercel</div>
        <span className="font-caveat text-gray-500 text-base max-w-[200px]">Connected! Every push → website updates automatically.</span>
      </motion.div>

      {/* Celebration banner */}
      <motion.div
        className="bg-coral text-white rounded-2xl p-4 max-w-2xl mx-auto w-full text-center shadow-xl"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
        {["🎊", "⭐", "✨", "🎉", "🚀"].map((e, i) => (
          <motion.span key={i} className="text-2xl mx-1"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 1 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}>
            {e}
          </motion.span>
        ))}
        <p className="font-caveat text-2xl font-bold mt-2">All 7 steps done! Your toolkit is ready.</p>
      </motion.div>
    </div>
  );
}
