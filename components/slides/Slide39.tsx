"use client";
import { motion } from "framer-motion";

const stages = [
  { color: "bg-blue-100 border-blue-400", title: "Initialize Git", prompt: "Initialize a git repository. Create a .gitignore for Next.js. Make the first commit: 'Initial build: Summer Camp Leaderboard App'." },
  { color: "bg-gray-100 border-gray-400", title: "Create GitHub Repo", prompt: "Go to github.com → + → New repository\nName: summer-camp-app → Public\nCreate → Copy the URL" },
  { color: "bg-purple-100 border-purple-400", title: "Push to GitHub", prompt: "The GitHub URL is [paste URL]. Push this project to GitHub." },
  { color: "bg-orange-100 border-orange-400", title: "Deploy on Vercel", prompt: "Go to vercel.com → Add New Project\nImport summer-camp-app from GitHub\nLeave all settings default → Deploy\n⏱️ Wait ~60 seconds" },
];

export default function Slide39() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-orange-500 text-white rounded-full px-4 py-2 font-caveat text-lg font-bold shadow-lg"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Step 6/7
      </motion.div>

      <motion.h1 className="font-caveat text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Demo Step 6 — Go live! 🚀
      </motion.h1>

      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto w-full mb-5">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-row md:flex-col items-center gap-2 flex-1">
            <motion.div
              className={`${stage.color} border-2 rounded-2xl p-3 shadow-md w-full`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring" }}>
              <div className="font-caveat text-lg font-bold text-gray-800 mb-2">{stage.title}</div>
              <p className="font-caveat text-sm text-gray-700 whitespace-pre-line">{stage.prompt}</p>
            </motion.div>
            {i < stages.length - 1 && (
              <motion.span className="text-coral text-2xl font-bold flex-shrink-0"
                animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                →
              </motion.span>
            )}
          </div>
        ))}
      </div>

      {/* Celebration result */}
      <motion.div
        className="bg-coral rounded-2xl p-5 max-w-3xl mx-auto w-full text-center shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
        {["🌐", "📱", "🏆", "⚡"].map((e, i) => (
          <motion.span key={i} className="text-3xl mx-1"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
            {e}
          </motion.span>
        ))}
        <p className="font-caveat text-xl text-white font-bold mt-2">
          You have a LIVE URL. Open it on your phone. Open /admin. Add 50 points. Watch the leaderboard update on someone else's screen.
        </p>
      </motion.div>
    </div>
  );
}
