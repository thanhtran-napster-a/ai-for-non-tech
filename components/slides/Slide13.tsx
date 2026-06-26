"use client";
import { motion } from "framer-motion";

const flowSteps = [
  "You edit",
  "Claude saves",
  "Push to GitHub",
  "Vercel deploys",
  "🌐 Live URL updates",
];

export default function Slide13() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Tool 4: GitHub + Vercel — your publisher 🌐
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full mb-6">
        {/* GitHub */}
        <motion.div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-5 shadow-md"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="text-5xl mb-3">📚</div>
          <h3 className="font-caveat text-2xl font-bold text-purple-800 mb-3">GitHub</h3>
          <ul className="space-y-2">
            {["Every change is saved and tracked", "Go back in time if something breaks", "Bridge between your laptop and the internet"].map((item, i) => (
              <li key={i} className="font-caveat text-lg text-gray-700 flex gap-2"><span>•</span>{item}</li>
            ))}
          </ul>
          <div className="mt-4 bg-purple-100 rounded-xl p-3">
            <p className="font-caveat text-base text-purple-700 italic">"Your project's history book"</p>
          </div>
        </motion.div>

        {/* Vercel */}
        <motion.div className="bg-gray-800 border-2 border-gray-600 rounded-2xl p-5 shadow-md"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-5xl mb-3">🚀</div>
          <h3 className="font-caveat text-2xl font-bold text-white mb-3">Vercel</h3>
          <ul className="space-y-2">
            {["Connects to GitHub automatically", "GitHub push → website updates live", "Gives you a real URL: your-project.vercel.app"].map((item, i) => (
              <li key={i} className="font-caveat text-lg text-gray-300 flex gap-2"><span>•</span>{item}</li>
            ))}
          </ul>
          <div className="mt-4 bg-gray-700 rounded-xl p-3">
            <p className="font-caveat text-base text-gray-300 italic">"Your one-click publisher"</p>
          </div>
        </motion.div>
      </div>

      {/* Flow diagram */}
      <motion.div className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div className="bg-coral text-white rounded-xl px-4 py-2 font-caveat text-base font-bold shadow-md"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}>
                {step}
              </motion.div>
              {i < flowSteps.length - 1 && <span className="text-coral text-xl font-bold">→</span>}
            </div>
          ))}
        </div>
        <motion.p className="font-caveat text-base text-gray-500 italic text-center mt-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          This is called GitOps — your site is always in sync. No uploading, no manual steps.
        </motion.p>
      </motion.div>
    </div>
  );
}
