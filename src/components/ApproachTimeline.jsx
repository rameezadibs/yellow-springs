import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APPROACH_STEPS } from '../data/content';

export default function ApproachTimeline() {
  const [activeStep, setActiveStep] = useState(APPROACH_STEPS[0]);

  // Scroll observer to automatically activate step as user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      APPROACH_STEPS.forEach((step) => {
        const el = document.getElementById(`approach-step-${step.num}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Activate step when its top is near the middle of the viewport
          if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.25) {
            setActiveStep(step);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="approach"
      className="relative bg-[#382B25] text-[#F5F0E6] pt-8 sm:pt-12 md:pt-14 pb-20 sm:pb-28 md:pb-32 px-6 md:px-12 border-b border-[#F5F0E6]/15"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A3B34]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F5F0E6]/15 pb-8 mb-14 md:mb-18">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#F5F0E6]/50">04</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]">
                METHODOLOGY • HOW WE CREATE
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#F5F0E6]">
              From the first idea <br />
              <span className="italic font-normal text-[#E2D6C5]">to the final applause.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#F5F0E6]/75 max-w-sm font-light leading-relaxed">
            A cohesive five-stage production framework engineered across 15+ years to eliminate unpredictability.
          </p>
        </div>

        {/* Continuous Typographic Sequence & Sticky Visual Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Continuous Typographic Sequence */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[#F5F0E6]/15">
            {APPROACH_STEPS.map((step) => {
              const isCurrent = activeStep.num === step.num;
              return (
                <div
                  key={step.num}
                  id={`approach-step-${step.num}`}
                  onClick={() => setActiveStep(step)}
                  onMouseEnter={() => setActiveStep(step)}
                  className={`py-8 cursor-pointer transition-all duration-500 group ${
                    isCurrent ? 'opacity-100 pl-4 sm:pl-6 border-l-2 border-[#F5F0E6]' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs tracking-widest text-[#F5F0E6]/50">
                      STEP {step.num}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-[#E2D6C5]">
                        ACTIVE PHASE
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-editorial tracking-tight transition-all duration-300 ${
                      isCurrent
                        ? 'text-4xl sm:text-5xl text-[#F5F0E6] font-light'
                        : 'text-2xl sm:text-3xl text-[#F5F0E6]/80 font-normal group-hover:translate-x-2'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="font-editorial text-lg sm:text-xl text-[#E2D6C5] italic mt-2">
                    {step.headline}
                  </p>

                  <div className="mt-3">
                    <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-light leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Accompanying Visual & Technical Assurance */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#F5F0E6]/20 shadow-2xl bg-[#2C201A]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={activeStep.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#2C201A]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F5F0E6] z-10">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#E2D6C5] font-semibold block mb-1">
                    PRODUCTION PROTOCOL
                  </span>
                  <span className="font-editorial text-2xl font-light">
                    Phase {activeStep.num} — {activeStep.title}
                  </span>
                </div>
                <span className="font-mono text-xs opacity-75 hidden sm:inline-block">
                  IN-HOUSE RIGOR
                </span>
              </div>
            </div>

            {/* Micro assurance banner */}
            <div className="mt-6 p-5 border border-[#F5F0E6]/15 bg-[#2C201A] flex items-center justify-between text-xs text-[#F5F0E6]/80 shadow-lg">
              <span className="uppercase tracking-widest text-[10px] font-semibold text-[#E2D6C5]">
                FULL IN-HOUSE FLEET
              </span>
              <span className="text-[11px] text-[#F5F0E6]/70">Direct venue permits & CAD documentation across UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
