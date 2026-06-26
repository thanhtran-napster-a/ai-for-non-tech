"use client";
import { motion } from "framer-motion";

const col1 = [
  "Test the full demo flow from scratch — time it",
  "Confirm 21st.dev MCP is configured in your Claude Code",
  "Pre-create backup GitHub and Vercel accounts",
  "Have project-brief.md ready to share (printed or link)",
  "Test npm create next-app on a fresh folder",
  "Prepare a pre-built version of the app as demo fallback",
];

const col2 = [
  "Test internet connection for everyone",
  "Confirm all participants received setup instructions in advance",
  "Have the GitHub/Vercel fallback accounts ready on a separate device",
  "Load all slide prompts in a separate tab for reference",
  "Print or share the cheat sheet (Slide 31) for participants",
];

export default function SlideA1() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-gray-600 text-white rounded-full px-4 py-2 font-caveat text-base font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Appendix
      </motion.div>

      <motion.h1 className="font-caveat text-4xl font-bold text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Facilitator — pre-session checklist ✅
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {[
          { title: "Day before 📅", items: col1, bg: "bg-blue-50 border-blue-300" },
          { title: "Morning of ☀️", items: col2, bg: "bg-amber-light border-amber" },
        ].map((col, ci) => (
          <motion.div key={ci} className={`${col.bg} border-2 rounded-2xl p-4 shadow-md`}
            initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + ci * 0.1 }}>
            <h3 className="font-caveat text-xl font-bold text-gray-800 mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.items.map((item, i) => (
                <motion.li key={i} className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + ci * 0.1 + i * 0.07 }}>
                  <span className="mt-1 text-gray-400 text-lg flex-shrink-0">☐</span>
                  <span className="font-caveat text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
