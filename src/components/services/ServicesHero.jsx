import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServicesHero({ onScrollDown }) {
  const { hero } = SERVICES_DATA;
  const [activePhotoId, setActivePhotoId] = useState('weddings');

  const stackItems = hero.stack;

  // Custom coordinate and rotation offsets to mimic photographs spread on an art director's table
  const cardLayouts = {
    weddings: { rotate: -2, zIndex: 30, scale: 1 },
    corporate: { rotate: 3, zIndex: 20, scale: 0.95 },
    av: { rotate: -4, zIndex: 15, scale: 0.92 },
    artists: { rotate: 4, zIndex: 10, scale: 0.9 },
    rentals: { rotate: -1, zIndex: 5, scale: 0.88 },
  };

  return (
    <section
      id="services-hero"
      aria-labelledby="services-hero-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14 overflow-hidden flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        
        {/* Top Grid: Headline and Editorial Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Expressive Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#382B25]" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
                {hero.label}
              </span>
              <span className="w-12 h-[1px] bg-[#382B25]/25" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="services-hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.02] tracking-tight text-[#382B25] max-w-2xl"
            >
              <span>{hero.headlineLine1}</span>
              <br />
              <span className="italic font-normal text-[#382B25]/90">
                {hero.headlineLine2}
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#382B25]/80 font-light leading-relaxed max-w-xl"
            >
              {hero.supportingText}
            </motion.p>

            {/* CTA Anchor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex items-center gap-4"
            >
              <button
                type="button"
                onClick={onScrollDown}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#251C17] transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>{hero.cta}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <span className="font-mono text-[10px] tracking-widest text-[#382B25]/50 uppercase hidden sm:inline-block">
                DUBAI · ABU DHABI · UAE
              </span>
            </motion.div>
          </div>

          {/* Right Column: Physical Creative Director's Photographic Table */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            
            {/* Interactive Service Labels around Table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="w-full flex flex-wrap items-center justify-center lg:justify-end gap-2 mb-6"
            >
              {stackItems.map((item) => {
                const isActive = activePhotoId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActivePhotoId(item.id)}
                    onClick={() => setActivePhotoId(item.id)}
                    className={`px-3 py-1 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25]'
                        : 'bg-[#FAF7F0] text-[#382B25]/70 border-[#382B25]/15 hover:border-[#382B25]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Photographic Stack Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-4"
            >
              {stackItems.map((item) => {
                const isSelected = activePhotoId === item.id;
                const base = cardLayouts[item.id] || { rotate: 0, zIndex: 10, scale: 0.9 };
                const currentZIndex = isSelected ? 40 : base.zIndex;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    animate={{
                      scale: isSelected ? 1.02 : base.scale,
                      rotate: isSelected ? 0 : base.rotate,
                      zIndex: currentZIndex,
                      opacity: isSelected ? 1 : 0.78,
                      y: isSelected ? -8 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActivePhotoId(item.id)}
                    className="absolute inset-x-4 inset-y-6 sm:inset-x-6 sm:inset-y-8 bg-[#FAF7F0] p-3 sm:p-4 border border-[#382B25]/25 shadow-[0_20px_50px_rgba(56,43,37,0.14)] cursor-pointer select-none flex flex-col justify-between"
                  >
                    {/* Photo Container */}
                    <div className="relative w-full flex-1 overflow-hidden bg-[#251C17]">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#251C17]/80 text-[#F5F0E6] border border-[#F5F0E6]/20">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    {/* Polaroids / Curated Note Bottom Caption */}
                    <div className="pt-2.5 sm:pt-3 flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-wider text-[#382B25]/75">
                      <span className="truncate pr-2 font-medium">{item.title}</span>
                      <span className="shrink-0 text-[#382B25]/50">{item.caption.split('//')[0]}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Stack Annotation */}
            <div className="mt-4 flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-[#382B25]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
              <span>{hero.annotation}</span>
            </div>

          </div>

        </div>

        {/* Bottom Editorial Ribbon */}
        <div className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-[#382B25]/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#382B25]/60 tracking-wider gap-4">
          <span>01 · WEDDINGS</span>
          <span>02 · CORPORATE</span>
          <span>03 · AV &amp; SOUND</span>
          <span>04 · ARTISTS</span>
          <span>05 · RENTALS</span>
          <span className="hidden md:inline-block">ONE INTEGRATED CREATIVE FORCE</span>
        </div>

      </div>
    </section>
  );
}
