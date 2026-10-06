import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/content';

export default function ExperienceShowcase({ onOpenPlanner }) {
  const [activeCategory, setActiveCategory] = useState(EVENT_CATEGORIES[0]);

  return (
    <section
      id="showcase"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 md:px-12 border-b border-[#382B25]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#382B25]/15 pb-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#382B25]/60">03</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
                SELECTED PORTFOLIO
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#382B25]">
              Every occasion <br />
              <span className="italic font-normal">has its own energy.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#382B25]/75 max-w-sm font-light">
            We adapt visual tone, acoustic architecture, and environmental pacing to honour the specific emotional signature of every gathering.
          </p>
        </div>

        {/* Category Navigation Pills / Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-12">
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 text-xs tracking-widest font-semibold uppercase transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25]'
                    : 'bg-transparent text-[#382B25]/75 border-[#382B25]/20 hover:border-[#382B25] hover:text-[#382B25]'
                }`}
              >
                {cat.title}
                {isSelected && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Coming Soon Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FAF7F0] border border-[#382B25]/15 p-8 sm:p-14 md:p-20 text-center flex flex-col items-center justify-center min-h-[360px] overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#382B25_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#382B25]/5 border border-[#382B25]/15 mb-6 text-[#382B25]">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>

              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold text-[#382B25]/60 mb-2">
                {activeCategory.title} PORTFOLIO
              </span>

              <h3 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light text-[#382B25] tracking-tight mb-4">
                Coming Soon
              </h3>

              <p className="text-xs sm:text-sm text-[#382B25]/70 font-light max-w-md leading-relaxed mb-8">
                We are currently curating our latest high-definition project gallery for {activeCategory.title.toLowerCase()} events. In the meantime, contact us to request a private portfolio presentation.
              </p>

              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase hover:bg-[#382B25]/90 transition-all duration-300 shadow-sm"
              >
                <span>REQUEST PRIVATE CATALOG</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
