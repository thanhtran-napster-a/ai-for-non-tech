"use client";
import { motion } from "framer-motion";

const layers = [
  { num: 1, icon: "🏗️", title: "Structure", color: "bg-amber-700", text: "bg-amber-100", prompt: "Build a basic campaign landing page with a headline, description, and email signup form. Don't worry about design yet." },
  { num: 2, icon: "⚙️", title: "Function", color: "bg-orange-500", text: "bg-orange-100", prompt: "Now add a countdown timer showing days, hours, and minutes until the 15th of next month." },
  { num: 3, icon: "🎨", title: "Design", color: "bg-teal-500", text: "bg-teal-100", prompt: "Now use the 21st.dev MCP to find a modern hero section component. Apply its styling to the top of the page." },
  { num: 4, icon: "✨", title: "Polish", color: "bg-amber-400", text: "bg-amber-50", prompt: "Make the sign-up button more prominent — larger, a strong contrasting color, centered below the countdown." },
];

export default function Slide28() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Build in layers — don't try to do it all at once 🎂
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {/* Layered cake visual */}
        <div className="flex flex-col-reverse gap-2">
          {layers.map((layer, i) => (
            <motion.div key={i}
              className={`${layer.color} rounded-2xl p-4 flex items-center gap-3 shadow-md`}
              initial={{ opacity: 0, x: -30, scaleX: 0.8 }} animate={{ opacity: 1, x: 0, scaleX: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
              style={{ width: `${70 + i * 10}%`, marginLeft: `${30 - i * 10}%` }}
              whileHover={{ scale: 1.02 }}>
              <span className="text-3xl">{layer.icon}</span>
              <span className="font-caveat text-xl font-bold text-white">Layer {layer.num}: {layer.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Prompts */}
        <div className="space-y-3">
          {layers.map((layer, i) => (
            <motion.div key={i} className={`${layer.text} border border-gray-200 rounded-2xl p-3 shadow-sm`}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{layer.icon}</span>
                <span className="font-caveat text-lg font-bold text-gray-700">Layer {layer.num}: {layer.title}</span>
              </div>
              <p className="font-caveat text-base text-gray-600 italic">"{layer.prompt}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p className="font-caveat text-lg text-center text-gray-500 italic mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        Each message = one small, clear request. See the result → then move to the next layer.
      </motion.p>
    </div>
  );
}
