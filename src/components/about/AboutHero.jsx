import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutHero({ onScrollDown }) {
  const { hero } = ABOUT_DATA;

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-28 pb-8 md:pt-36 md:pb-12 lg:pb-14 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Editorial Decorative Background Grid / Rules */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#382B25]/10 flex justify-between">
          <div className="w-[1px] h-full bg-[#382B25]/5 hidden sm:block" />
          <div className="w-[1px] h-full bg-[#382B25]/5 hidden lg:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Editorial Label Strip */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-[#382B25]/15 pb-5 mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#382B25]/60" />
            <span className="text-[11px] sm:text-xs tracking-[0.28em] font-semibold uppercase text-[#382B25]/80">
              {hero.label}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-mono px-3 py-1 border border-[#382B25]/20 text-[#382B25]/75">
              {hero.origin}
            </span>
            <span className="hidden sm:inline-block text-[11px] tracking-widest text-[#382B25]/50">
              ISSUE // 01
            </span>
          </div>
        </motion.div>

        {/* Main Spread: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Oversized Expressive Typography & Narrative */}
          <div className="lg:col-span-6 flex flex-col z-20">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Oversized Headline */}
              <h1
                id="about-hero-heading"
                className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light leading-[1.03] tracking-[-0.02em] text-[#382B25]"
              >
                <span className="block">{hero.headlineLine1}</span>
                <span className="block">{hero.headlineLine2}</span>
                <span className="block">
                  {hero.headlineLine3}{' '}
                  <span className="italic font-normal font-serif text-[#382B25] relative inline-block">
                    {hero.headlineEmphasized}
                    {/* Delicate under-stroke curl */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#382B25]/25"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q50 12 100 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h1>

              {/* Editorial handwritten / script annotation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8 flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-[#382B25]/25" />
                <span className="font-script text-2xl sm:text-3xl text-[#382B25]/85 transform -rotate-1 select-none">
                  “{hero.annotation}”
                </span>
              </motion.div>

              {/* Supporting narrative copy */}
              <p className="mt-8 sm:mt-10 text-base sm:text-lg text-[#382B25]/80 font-light leading-relaxed max-w-xl">
                {hero.supportingText}
              </p>
            </motion.div>

            {/* Scroll Cue & Petal Vector Connection */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex items-center gap-8"
            >
              <button
                type="button"
                onClick={onScrollDown}
                className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#382B25] hover:text-[#382B25]/70 transition-colors group cursor-pointer"
                aria-label="Scroll down to explore"
              >
                <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#382B25] group-hover:after:w-1/2 after:transition-all">
                  EXPLORE
                </span>
                <span className="w-8 h-8 rounded-full border border-[#382B25]/25 flex items-center justify-center group-hover:border-[#382B25] group-hover:translate-y-1 transition-all">
                  <ArrowDown className="w-3.5 h-3.5 text-[#382B25]" />
                </span>
              </button>

              {/* Connecting abstract petal vector accent */}
              <div className="hidden sm:flex items-center gap-2 text-[#382B25]/30">
                <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
                  <path
                    d="M2 16 C 18 2, 46 2, 62 16 C 46 30, 18 30, 2 16 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                  <circle cx="32" cy="16" r="2" fill="currentColor" />
                </svg>
                <span className="text-[10px] tracking-widest uppercase font-mono">
                  DUBAI · UAE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3-Image Unconventional Magazine Layout */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
            {/* Image 1: Large Vertical Photograph (The lived event experience) */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-4/5 sm:w-3/4 max-w-[420px] aspect-[3/4] shadow-[0_24px_50px_rgba(56,43,37,0.12)] border border-[#382B25]/20 bg-[#ECE5D8] overflow-hidden group ml-auto lg:mr-8"
            >
              <img
                src={hero.images.primary.src}
                alt={hero.images.primary.alt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#251C17]/80 to-transparent">
                <p className="text-[9px] tracking-[0.25em] text-[#F5F0E6] uppercase font-mono">
                  {hero.images.primary.caption}
                </p>
              </div>
            </motion.div>

            {/* Image 2: Behind-The-Scenes Production Photo (Staging/Rigging) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-1/4 sm:top-1/3 w-3/5 sm:w-1/2 max-w-[280px] aspect-[4/3] shadow-[0_16px_40px_rgba(56,43,37,0.14)] border border-[#382B25]/25 bg-[#251C17] overflow-hidden group z-20"
            >
              <img
                src={hero.images.bts.src}
                alt={hero.images.bts.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-[#251C17]/90 px-2 py-0.5 border border-[#F5F0E6]/20">
                <span className="text-[8px] font-mono tracking-widest text-[#F5F0E6] uppercase">
                  {hero.images.bts.caption}
                </span>
              </div>
            </motion.div>

            {/* Image 3: Small Detail Photograph (Floral / Table / Glassware) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 -bottom-3 sm:-bottom-4 w-2/5 sm:w-1/3 max-w-[210px] aspect-[4/5] shadow-[0_20px_45px_rgba(56,43,37,0.15)] border-2 border-[#F5F0E6] bg-[#ECE5D8] overflow-hidden group z-30"
            >
              <img
                src={hero.images.detail.src}
                alt={hero.images.detail.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-1 right-1 bg-[#F5F0E6]/95 px-2 py-0.5 text-[8px] font-mono tracking-wider text-[#382B25]">
                {hero.images.detail.caption}
              </div>
            </motion.div>

            {/* Editorial Stamp / Seal */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-30 pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#382B25]/20 flex items-center justify-center p-1 text-center bg-[#F5F0E6]/90 backdrop-blur-sm shadow-sm rotate-12">
                <p className="text-[7px] sm:text-[8px] tracking-[0.2em] font-mono uppercase text-[#382B25]/70 leading-tight">
                  BEHIND<br />THE<br />MOMENTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
