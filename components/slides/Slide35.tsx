"use client";
import { motion } from "framer-motion";

export default function Slide35() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-blue-600 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 2/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 2 — Set up the project 🏗️
      </motion.h1>

      <div className="max-w-3xl mx-auto w-full space-y-5">
        <motion.p className="font-caveat text-xl text-center text-gray-600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          One prompt sets up the entire project structure.
        </motion.p>

        {/* Prompt */}
        <motion.div className="relative bg-gray-900 rounded-2xl p-5 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <p className="font-mono text-green-400 text-sm leading-relaxed">
            Set up a new Next.js project in this folder. Use the App Router. Include Tailwind CSS for styling. Name the project 'summer-camp-app'. After setup, show me the folder structure so I can see what was created.
          </p>
        </motion.div>

        {/* Folder tree + verify */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div className="bg-gray-800 rounded-2xl p-4 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <p className="text-gray-400 mb-2 font-caveat text-sm not-italic">Claude creates this:</p>
            <div className="text-green-400 leading-relaxed">
              <div>summer-camp-app/</div>
              <div>&nbsp;&nbsp;├── app/</div>
              <div>&nbsp;&nbsp;├── public/</div>
              <div>&nbsp;&nbsp;├── package.json</div>
              <div>&nbsp;&nbsp;└── ...</div>
            </div>
          </motion.div>

          <motion.div className="bg-green-100 border-2 border-green-400 rounded-2xl p-4"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <p className="font-caveat text-base text-green-700 font-bold mb-2">✅ Verify:</p>
            <p className="font-caveat text-base text-green-700">"Run the development server so I can preview the app in my browser."</p>
            <p className="font-caveat text-sm text-green-600 mt-2">→ Open localhost:3000 in your browser</p>
          </motion.div>
        </div>

        <motion.div className="bg-amber-light border border-amber rounded-xl p-3 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <p className="font-caveat text-base text-amber-800">💡 Next.js is like a professional starting kit — we don't build from scratch.</p>
        </motion.div>
      </div>
    </div>
  );
}
