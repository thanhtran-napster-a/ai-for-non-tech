"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "1", emoji: "📁", text: 'In VSCode, create a new folder called "hello-world"' },
  { num: "2", emoji: "📂", text: "Open it: File → Open Folder" },
  { num: "3", emoji: "⌨️", text: 'Open the terminal and type "claude"' },
  { num: "4", emoji: "💬", text: null, prompt: true },
  { num: "5", emoji: "🖱️", text: 'Open the file: type "open index.html" in terminal (or double-click it)' },
  { num: "6", emoji: "🌐", text: "Your browser opens — you see your page!" },
];

export default function Slide23() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        🎉 Let's test it — your first wow moment!
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div key={i}
              className={`flex items-start gap-3 rounded-2xl p-3 border-2 ${step.prompt ? "bg-coral-light border-coral" : "bg-white/70 border-gray-200"}`}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.12 }}>
              <div className="w-9 h-9 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-caveat text-white font-bold">{step.num}</span>
              </div>
              <div>
                {step.prompt ? (
                  <>
                    <span className="text-xl mr-1">{step.emoji}</span>
                    <span className="font-caveat text-base text-gray-600">Type this to Claude:</span>
                    <div className="mt-1 bg-white/80 rounded-xl p-2 border border-coral/30">
                      <p className="font-caveat text-sm text-coral-dark italic">
                        "Create a simple HTML file called index.html that says 'Hello [your name]!' with a big colorful heading and a fun background color."
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{step.emoji}</span>
                    <span className="font-caveat text-base text-gray-700">{step.text}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {/* Browser mockup */}
          <motion.div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-gray-100 flex items-center gap-2 p-2">
              <div className="flex gap-1"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
              <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 font-mono flex-1">index.html</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 text-center min-h-[140px] flex flex-col items-center justify-center">
              <h2 className="font-caveat text-3xl font-bold text-white drop-shadow-lg">Hello [Your Name]! 👋</h2>
              <p className="font-caveat text-white/80 mt-2">Welcome to my page!</p>
            </div>
          </motion.div>

          <motion.div className="text-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="font-caveat text-xl text-coral">← Your first creation! 🎨</span>
            </motion.div>
          </motion.div>

          {/* Takeaway */}
          <motion.div className="bg-coral rounded-2xl p-4 text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
            <p className="font-caveat text-xl text-white font-bold">
              ⭐ That's vibe coding. You described it. Claude built it. You opened it.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Confetti */}
      {["🎆", "⭐", "🎉", "✨", "🌟"].map((e, i) => (
        <motion.div key={i} className="absolute text-3xl pointer-events-none"
          style={{ left: `${10 + i * 18}%`, top: "5%" }}
          animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
          {e}
        </motion.div>
      ))}
    </div>
  );
}
