"use client";
import { motion } from "framer-motion";

const cards = [
  { bg: "bg-purple-50 border-purple-300", emoji: "🎨", label: "Admin panel polish", prompt: "Use the 21st.dev MCP to find a clean mobile-friendly admin form component. Apply it to the staff panel — something a staff member would enjoy using on their phone." },
  { bg: "bg-orange-100 border-orange-300", emoji: "🏷️", label: "Branding", prompt: "Add a header to both pages with the title 'Code 1 — Summer Camp 2025'. Make the color scheme energetic and summer-appropriate — bright and fun but not childish." },
  { bg: "bg-teal-light border-teal", emoji: "📱", label: "Mobile check", prompt: "Check how both pages look on an iPhone SE screen size using browser developer tools. Tell me what needs to be fixed." },
];

export default function Slide38() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-blue-600 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 5/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 5 — Make it beautiful ✨
      </motion.h1>

      <div className="space-y-4 max-w-3xl mx-auto w-full mb-6">
        {cards.map((card, i) => (
          <motion.div key={i} className={`${card.bg} border-2 rounded-2xl p-4 shadow-md`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            whileHover={{ scale: 1.01 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{card.emoji}</span>
              <span className="font-caveat text-xl font-bold text-gray-800">{card.label}</span>
            </div>
            <p className="font-caveat text-base text-gray-700 italic">"{card.prompt}"</p>
          </motion.div>
        ))}
      </div>

      {/* Before / After */}
      <motion.div className="flex items-center justify-center gap-6"
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center w-32 h-20 flex items-center justify-center">
          <p className="font-caveat text-gray-400 text-sm">Before</p>
        </div>
        <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-3xl">✨</span>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-orange-200 to-pink-200 border-2 border-orange-400 rounded-xl p-4 text-center w-32 h-20 flex items-center justify-center shadow-lg"
          animate={{ boxShadow: ["0 4px 10px rgba(255,107,71,0.1)", "0 8px 25px rgba(255,107,71,0.3)", "0 4px 10px rgba(255,107,71,0.1)"] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <p className="font-caveat text-orange-700 text-sm font-bold">After ✨</p>
        </motion.div>
        <span className="font-caveat text-gray-500 text-base">Before vs. After</span>
      </motion.div>
    </div>
  );
}
