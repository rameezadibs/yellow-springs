import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutApproach() {
  const { approach } = ABOUT_DATA;
  const [activeIdx, setActiveIdx] = useState(0);

  const activePrinciple = approach.principles[activeIdx];

  return (
    <section
      id="our-approach"
      aria-labelledby="our-approach-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 md:py-36 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6 sm:mb-8"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#382B25]/60 font-medium">
            {approach.sectionNum} / {approach.sectionLabel}
          </span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-[#382B25]/20" />
        </motion.div>

        {/* Section Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 md:mb-24"
        >
          <h2
            id="our-approach-heading"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.1] text-[#382B25]"
          >
            {approach.headline}
          </h2>
        </motion.div>

        {/* Editorial Composition: Left Principles List, Right Interactive Responsive Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Vertical Editorial Principles with Oversized Numbers */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#382B25]/15 border-t border-b border-[#382B25]/15">
            {approach.principles.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  tabIndex={0}
                  className={`group py-8 sm:py-10 transition-all duration-300 cursor-pointer outline-none ${
                    isActive ? 'opacity-100 pl-2 sm:pl-4' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-6 sm:gap-10">
                    {/* Oversized Number */}
                    <span
                      className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-[#382B25]' : 'text-[#382B25]/35 group-hover:text-[#382B25]/60'
                      }`}
                    >
                      {item.num}
                    </span>

                    {/* Title & Philosophy */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#382B25] uppercase">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isActive
                              ? 'opacity-100 translate-x-1 -translate-y-1 text-[#382B25]'
                              : 'opacity-0 group-hover:opacity-40'
                          }`}
                        />
                      </div>

                      <p className="mt-2 text-base sm:text-lg text-[#382B25]/85 font-light leading-relaxed">
                        {item.summary}
                      </p>

                      <p className="mt-1 text-xs sm:text-sm text-[#382B25]/60 font-light leading-normal max-w-lg">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {/* Inline Mobile Image when active on small screens */}
                  <div className="lg:hidden mt-4 overflow-hidden rounded-none border border-[#382B25]/15 aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Desktop Interactive Transitioning Photography Frame */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] w-full border border-[#382B25]/20 shadow-[0_20px_50px_rgba(56,43,37,0.12)] bg-[#ECE5D8] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.num}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activePrinciple.image}
                    alt={activePrinciple.alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Editorial Film Overlay & Meta */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 inset-x-6 flex items-end justify-between text-[#F5F0E6]">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F5F0E6]/70 block mb-1">
                        PRINCIPLE // {activePrinciple.num}
                      </span>
                      <p className="text-sm font-semibold tracking-wider uppercase">
                        {activePrinciple.title}
                      </p>
                      <p className="text-xs font-mono text-[#F5F0E6]/60 mt-0.5">
                        {activePrinciple.tag}
                      </p>
                    </div>

                    <span className="font-script text-xl text-[#F5F0E6]/80">
                      Yellow Springs
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Micro Caption Note */}
            <p className="mt-4 text-[10px] font-mono tracking-widest uppercase text-[#382B25]/50 text-right">
              HOVER TO EXPLORE PROCESS BEHIND THE MOMENTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
