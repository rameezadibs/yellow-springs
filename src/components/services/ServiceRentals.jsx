import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServiceRentals({ onOpenPlanner }) {
  const { rentals } = SERVICES_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState('furniture');

  const currentCategory =
    rentals.categories.find((c) => c.id === activeCategoryId) || rentals.categories[0];

  return (
    <section
      id="rentals"
      aria-labelledby="rentals-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 mb-5 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#382B25]" />
            <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
              {rentals.sectionNum} // {rentals.sectionLabel}
            </span>
            <span className="w-12 h-[1px] bg-[#382B25]/25" />
          </motion.div>

          <motion.h2
            id="rentals-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light leading-[1.04] tracking-tight text-[#382B25] max-w-3xl"
          >
            <span>{rentals.headlineLine1} </span>
            <br className="hidden sm:block" />
            <span className="italic font-normal text-[#382B25]/90">
              {rentals.headlineLine2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#382B25]/80 font-light leading-relaxed max-w-2xl"
          >
            {rentals.supportingCopy}
          </motion.p>
        </div>

        {/* Editorial Visual Shelf / Interactive Category Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Category Directory (5 cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#382B25]/15 border-t border-b border-[#382B25]/15">
            {rentals.categories.map((cat, idx) => {
              const isSelected = activeCategoryId === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`py-4 sm:py-5 px-3 sm:px-4 cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#FAF7F0] border-l-2 border-[#382B25] pl-4 sm:pl-5'
                      : 'hover:bg-[#FAF7F0]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-[#382B25]' : 'text-[#382B25]/40'}`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold transition-colors ${
                        isSelected ? 'text-[#382B25]' : 'text-[#382B25]/75 group-hover:text-[#382B25]'
                      }`}>
                        {cat.label}
                      </h3>
                    </div>

                    <p className={`text-xs font-light transition-colors ${
                      isSelected ? 'text-[#382B25]/85' : 'text-[#382B25]/50'
                    }`}>
                      {cat.subtitle}
                    </p>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                    isSelected
                      ? 'text-[#382B25] translate-x-1 -translate-y-1 opacity-100'
                      : 'text-[#382B25]/30 opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Photographic Showcase that Responds to Hover (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#251C17] border border-[#382B25]/25 shadow-[0_24px_55px_rgba(56,43,37,0.12)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentCategory.image}
                    alt={currentCategory.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-[#251C17]/30 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#251C17]/80 text-[#FFE600] border border-[#FFE600]/30 backdrop-blur-sm">
                      IN-HOUSE RENTAL ASSET
                    </span>
                  </div>

                  {/* Bottom Shelf Metadata Details */}
                  <div className="absolute bottom-5 left-5 right-5 text-[#F5F0E6]">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-3.5 h-3.5 text-[#FFE600]" />
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#FFE600] font-medium">
                        {currentCategory.label}
                      </span>
                    </div>

                    <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[#F5F0E6] font-light">
                      {currentCategory.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom Action Strip */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono tracking-wider uppercase text-[#382B25]/60">
                100% PROPRIETARY WAREHOUSE ASSETS · RAPID DISPATCH IN UAE
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('birthday-packages');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2 px-5 py-3.5 border border-[#382B25] text-[#382B25] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#382B25] hover:text-[#F5F0E6] transition-all duration-300 cursor-pointer self-start sm:self-auto"
                >
                  <span>BIRTHDAY PACKAGES ↓</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenPlanner && onOpenPlanner('rentals')}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#251C17] transition-all duration-300 shadow-md cursor-pointer self-start sm:self-auto"
                >
                  <span>{rentals.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
