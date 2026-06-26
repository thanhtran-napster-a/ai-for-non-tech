"use client";
import { motion } from "framer-motion";

export default function Slide02() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden px-8">
      {/* Giant background question mark */}
      <motion.div
        className="absolute text-[28rem] text-coral/5 font-caveat font-bold select-none pointer-events-none"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ?
      </motion.div>

      {/* Scattered hand emojis */}
      {[
        { x: "10%", y: "15%", delay: 0.8 },
        { x: "85%", y: "20%", delay: 1.0 },
        { x: "5%", y: "65%", delay: 1.2 },
        { x: "88%", y: "70%", delay: 1.4 },
        { x: "50%", y: "10%", delay: 1.6 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl select-none"
          style={{ left: pos.x, top: pos.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: pos.delay, duration: 0.4 },
            scale: { delay: pos.delay, type: "spring" },
            y: { delay: pos.delay + 1, duration: 2.5, repeat: Infinity },
          }}
        >
          ✋
        </motion.div>
      ))}

      {/* Person thinking illustration */}
      <motion.div
        className="absolute bottom-8 right-8 text-8xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        🤔
      </motion.div>

      {/* Main question */}
      <motion.div
        className="text-center z-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="font-caveat text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        >
          Have you ever had an idea for a website, a tool, or an app...
        </motion.h1>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="font-caveat text-4xl md:text-6xl font-bold text-coral">
            and gave up because you'd need a developer?
          </span>
          {/* Arrow decorations */}
          <motion.div
            className="absolute -left-16 top-1/2 -translate-y-1/2 font-caveat text-2xl text-coral/60"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.div>

        <motion.p
          className="font-caveat text-2xl text-gray-500 italic mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          (Raise your hand if yes! ✋)
        </motion.p>
      </motion.div>
    </div>
  );
}
