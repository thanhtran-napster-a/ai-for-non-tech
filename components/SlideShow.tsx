"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SlideShowProps {
  slides: React.ComponentType[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.95,
  }),
};

const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.3 },
  scale: { duration: 0.3 },
};

export default function SlideShow({ slides }: SlideShowProps) {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalSlides = slides.length;
  const CurrentSlideComponent = slides[currentSlide];

  const goToSlide = useCallback(
    (index: number, dir?: number) => {
      const newDir = dir ?? (index > currentSlide ? 1 : -1);
      setSlide([Math.max(0, Math.min(index, totalSlides - 1)), newDir]);
      setIsMenuOpen(false);
    },
    [currentSlide, totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1, 1);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) goToSlide(currentSlide - 1, -1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  const sections = [
    { start: 0, end: 7, label: "1. The Big Idea" },
    { start: 8, end: 13, label: "2. The Toolkit" },
    { start: 14, end: 22, label: "3. Setup" },
    { start: 23, end: 30, label: "4. How to Talk to Claude" },
    { start: 31, end: 39, label: "5. Demo: Summer Camp App" },
    { start: 40, end: 45, label: "6. What's Next" },
    { start: 46, end: 48, label: "Appendix" },
  ];

  return (
    <div className="fixed inset-0 bg-cream flex flex-col overflow-hidden">
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 overflow-auto"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Click zones for navigation */}
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-0 bottom-0 w-16 z-10 group ${currentSlide === 0 ? "cursor-default" : "cursor-pointer"}`}
          aria-label="Previous slide"
        >
          {currentSlide > 0 && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              <span className="text-coral text-xl font-caveat">←</span>
            </div>
          )}
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-0 bottom-0 w-16 z-10 group ${currentSlide === totalSlides - 1 ? "cursor-default" : "cursor-pointer"}`}
          aria-label="Next slide"
        >
          {currentSlide < totalSlides - 1 && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              <span className="text-coral text-xl font-caveat">→</span>
            </div>
          )}
        </button>
      </div>

      {/* Bottom navigation bar */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-cream flex items-center justify-between px-4 py-2 z-20">
        {/* Progress bar */}
        <div className="flex-1 mr-4">
          <div className="h-1.5 bg-cream-light rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-coral rounded-full"
              animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
        </div>

        {/* Slide counter */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="font-caveat text-lg text-gray-600 hover:text-coral transition-colors px-3 py-1 rounded hover:bg-coral/10 min-w-[80px] text-center"
        >
          {currentSlide + 1} / {totalSlides}
        </button>

        {/* Navigation buttons */}
        <div className="flex gap-2 ml-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-8 h-8 rounded-full bg-cream hover:bg-coral hover:text-white transition-colors disabled:opacity-30 flex items-center justify-center font-caveat text-lg"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="w-8 h-8 rounded-full bg-coral text-white hover:bg-coral-dark transition-colors disabled:opacity-30 flex items-center justify-center font-caveat text-lg"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Slide menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-30 w-72 max-h-80 overflow-y-auto"
          >
            <p className="font-caveat text-xl text-gray-700 mb-3 text-center">Jump to slide</p>
            {sections.map((section) => (
              <div key={section.label} className="mb-2">
                <p className="font-caveat text-sm text-coral font-bold mb-1">{section.label}</p>
                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: section.end - section.start + 1 }, (_, i) => {
                    const slideIdx = section.start + i;
                    return (
                      <button
                        key={slideIdx}
                        onClick={() => goToSlide(slideIdx)}
                        className={`w-8 h-8 rounded-full font-caveat text-sm transition-colors ${
                          slideIdx === currentSlide
                            ? "bg-coral text-white"
                            : "bg-cream hover:bg-coral/20"
                        }`}
                      >
                        {slideIdx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard hint (shows briefly on load) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md z-20 pointer-events-none"
        style={{ animation: "fadeOut 1s ease 4s forwards" }}
      >
        <p className="font-caveat text-sm text-gray-500">← → keys to navigate</p>
      </motion.div>

      <style jsx global>{`
        @keyframes fadeOut {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
