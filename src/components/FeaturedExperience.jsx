import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_STORY } from '../data/content';

export default function FeaturedExperience({ onOpenCaseStudy }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="featured"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 sm:px-10 md:px-16 border-b border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ─────────────────────────────────────────────────────────────
            1. DOSSIER TOP HEADER & METADATA BAR
        ────────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#382B25]/15 pb-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#382B25]/50 tracking-wider">03</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
                FEATURED EXPERIENCE • PRODUCTION ARCHIVE
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light tracking-tight leading-[1.05] text-[#382B25]">
              “An idea, <span className="italic font-normal text-[#826958]">brought to life.”</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#382B25]/75 max-w-md font-light leading-relaxed">
            {FEATURED_STORY.subtitle}
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. INTERACTIVE 4-PHASE PRODUCTION TIMELINE (SPECIFICATION TILES)
        ────────────────────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#382B25]/60">
              Phase-by-Phase Production Sequence
            </span>
            <span className="text-[10px] font-mono text-[#382B25]/50 hidden sm:inline-block">
              CLICK OR HOVER TO EXPLORE SPECIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_STORY.process.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#ECE5D8] border-[#382B25] shadow-md translate-y-[-2px]'
                      : 'bg-[#F5F0E6] border-[#382B25]/15 hover:border-[#382B25]/40 hover:bg-[#ECE5D8]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-sm font-bold text-[#826958]">
                        PHASE {item.step}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#382B25]" />
                      )}
                    </div>
                    <h4 className="font-editorial text-2xl text-[#382B25] font-light mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#382B25]/75 leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#382B25]/10 flex items-center justify-between text-[10px] font-mono text-[#382B25]/50">
                    <span>SPECIFICATION 0{idx + 1}</span>
                    <span className="uppercase">COMPLETE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. AUTHENTIC CLIENT FIELD QUOTE CARD
        ────────────────────────────────────────────────────────────── */}
        <div className="p-8 sm:p-10 bg-[#ECE5D8]/70 border border-[#382B25]/15 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="max-w-3xl">
            <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#826958] block mb-2">
              CLIENT TESTIMONIAL // SUMMIT OUTCOME
            </span>
            <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[#382B25] leading-snug">
              {FEATURED_STORY.quote}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="w-8 h-[1px] bg-[#382B25]/30" />
              <p className="text-xs tracking-widest uppercase text-[#382B25]/70 font-semibold">
                {FEATURED_STORY.quoteAuthor}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenCaseStudy}
              className="px-6 py-3 border border-[#382B25]/25 text-xs font-semibold tracking-widest uppercase text-[#382B25] hover:bg-[#382B25] hover:text-[#F5F0E6] transition-all duration-300"
            >
              READ FULL CASE STUDY
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
