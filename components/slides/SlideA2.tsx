"use client";
import { motion } from "framer-motion";

const issues = [
  { issue: "npm install -g fails on Mac", fix: "Run: sudo npm install -g @anthropic-ai/claude-code" },
  { issue: "Claude Code won't start", fix: "Check API key was copied correctly — no extra spaces" },
  { issue: "Next.js setup hangs", fix: "Kill with Ctrl+C, retry, or use --no-git flag" },
  { issue: "Vercel import doesn't show GitHub repo", fix: "Disconnect and reconnect GitHub in Vercel settings" },
  { issue: "Real-time updates not working", fix: "Check the polling interval in the code — likely a fetch error" },
];

export default function SlideA2() {
  return (
    <div className="w-full h-full min-h-screen bg-cream flex flex-col px-8 py-8 overflow-auto">
      <motion.div className="absolute top-8 right-8 bg-gray-600 text-white rounded-full px-4 py-2 font-caveat text-base font-bold"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
        Appendix
      </motion.div>

      <motion.h1 className="font-caveat text-4xl font-bold text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Facilitator — common issues & fixes 🔧
      </motion.h1>

      <div className="max-w-4xl mx-auto w-full overflow-x-auto">
        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-md min-w-[500px]">
          <div className="grid grid-cols-2">
            <div className="bg-orange-100 p-3 font-caveat text-lg font-bold text-gray-800 border-b-2 border-r border-gray-200">⚠️ Issue</div>
            <div className="bg-green-100 p-3 font-caveat text-lg font-bold text-gray-800 border-b-2 border-gray-200">🔧 Fix</div>
          </div>
          {issues.map((row, i) => (
            <motion.div key={i} className={`grid grid-cols-2 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <div className="p-3 font-mono text-sm text-red-700 border-r border-gray-200 bg-red-50/20">{row.issue}</div>
              <div className="p-3 font-mono text-sm text-green-700 bg-green-50/20">{row.fix}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="bg-amber-light border-2 border-amber rounded-2xl p-4 max-w-2xl mx-auto mt-5 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <p className="font-caveat text-lg text-amber-800">📞 If stuck: ask the group — someone else likely hit the same issue!</p>
      </motion.div>
    </div>
  );
}
