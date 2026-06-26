"use client";
import { motion } from "framer-motion";

const icons = [
  { emoji: "🚀", x: "8%", y: "12%", delay: 0.2, rotate: -15 },
  { emoji: "💡", x: "85%", y: "8%", delay: 0.4, rotate: 10 },
  { emoji: "💻", x: "92%", y: "75%", delay: 0.6, rotate: -8 },
  { emoji: "🎨", x: "5%", y: "80%", delay: 0.8, rotate: 12 },
  { emoji: "⭐", x: "78%", y: "88%", delay: 1.0, rotate: 20 },
  { emoji: "💬", x: "15%", y: "45%", delay: 1.2, rotate: -10 },
  { emoji: "✨", x: "70%", y: "20%", delay: 0.3, rotate: 5 },
  { emoji: "🌟", x: "40%", y: "5%", delay: 0.7, rotate: -5 },
];

export default function Slide01() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-coral/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Floating icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl select-none"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, scale: 0, rotate: icon.rotate }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: icon.rotate,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: icon.delay, duration: 0.5 },
            scale: { delay: icon.delay, duration: 0.5, type: "spring" },
            y: { delay: icon.delay + 1, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="text-center z-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          <h1 className="font-caveat text-6xl md:text-8xl font-bold text-gray-800 leading-tight mb-2">
            Vibe Coding
          </h1>
          {/* Hand-drawn underline effect */}
          <motion.div
            className="h-3 bg-coral/80 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        <motion.h2
          className="font-caveat text-3xl md:text-4xl font-semibold text-coral mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Build Real Things Without Writing Code
        </motion.h2>

        <motion.p
          className="font-caveat text-xl md:text-2xl text-gray-600 italic mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          "How to go from idea to live website in an afternoon — no developer required."
        </motion.p>

        <motion.div
          className="inline-block bg-white/60 rounded-2xl px-8 py-4 border-2 border-dashed border-coral/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="font-caveat text-xl text-gray-500">✍️ Your name here</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
