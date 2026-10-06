import React from 'react';
import { motion } from 'framer-motion';

export default function BrandIntro() {
  return (
    <section
      id="about"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 sm:px-10 md:px-16 border-b border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* ─────────────────────────────────────────────────────────────
            1. SECTION MARKER / INDEX BAR
        ────────────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-[#382B25]/15 pb-4 mb-10 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#382B25]/50 tracking-wider">01</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
              YELLOW SPRINGS • PHILOSOPHY
            </span>
          </div>
          <span className="text-[11px] tracking-[0.2em] text-[#382B25]/60 uppercase hidden sm:inline-block font-mono">
            ESTABLISHED IN THE UAE • SINCE 2011
          </span>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. EDITORIAL HEADLINE — CLEAN, UNCONGESTED, NO OVERLAP
        ────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mb-16 md:mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#382B25]/60 mb-4">
            The Purpose Behind Every Gathering
          </p>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-light leading-[1.12] tracking-tight text-[#382B25]">
            “We don’t just plan events. <br />
            <span className="italic font-normal text-[#826958]">
              We shape how they feel.”
            </span>
          </h2>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            3. TWO-COLUMN ASYMMETRICAL EDITORIAL SPREAD
        ────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Narrative, Stats Strip, & Founder Quote (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-[#382B25]/85 text-base sm:text-lg leading-[1.8] font-light max-w-2xl"
            >
              <p className="text-lg sm:text-xl font-normal text-[#382B25] leading-relaxed">
                For more than 15 years, Yellow Springs has brought ideas, people, and places together through thoughtfully planned experiences across the UAE.
              </p>
              <p className="text-[#382B25]/75 text-sm sm:text-base leading-[1.8]">
                From luxury milestone birthdays on private islands to high-level corporate symposia in Dubai and Abu Dhabi, our strength lies in owning the entire journey. We curate artists, engineer our own stages, deploy cutting-edge audio-visuals, and furnish environments with an artist's precision.
              </p>
            </motion.div>

            {/* Clean Editorial Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-8 border-t border-[#382B25]/15 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div className="flex flex-col">
                <span className="font-editorial text-4xl sm:text-5xl font-light text-[#382B25] tracking-tight">
                  15<span className="text-2xl text-[#826958] font-normal italic">+</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#382B25] font-semibold mt-1">
                  Years of Mastery
                </span>
                <span className="text-xs text-[#382B25]/60 mt-1 leading-snug">
                  Shaping gatherings across the UAE since 2011
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-editorial text-4xl sm:text-5xl font-light text-[#382B25] tracking-tight">
                  360<span className="text-2xl text-[#826958] font-normal italic">°</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#382B25] font-semibold mt-1">
                  In-House Execution
                </span>
                <span className="text-xs text-[#382B25]/60 mt-1 leading-snug">
                  Staging, sound, decor, & artists unified
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-editorial text-4xl sm:text-5xl font-light text-[#382B25] tracking-tight">
                  1:1
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#382B25] font-semibold mt-1">
                  Art-Directed
                </span>
                <span className="text-xs text-[#382B25]/60 mt-1 leading-snug">
                  Every environment tailored to your vision
                </span>
              </div>
            </motion.div>

            {/* Founder Quote Card — Warm, Refined & Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 p-6 sm:p-7 bg-[#ECE5D8]/70 border border-[#382B25]/15 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#382B25]/20 shadow-sm bg-[#382B25]/5">
                <img
                  src="/assets/founder.webp"
                  alt="Tasneem Murtaza, Yellow Springs Founder"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex-1">
                <p className="font-editorial italic text-lg sm:text-xl leading-relaxed text-[#382B25]">
                  “An event isn't an assembly of items—it is the memory people keep long after the music stops.”
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="w-6 h-[1px] bg-[#382B25]/30" />
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold">
                    Tasneem Murtaza — <span className="font-normal text-[#382B25]/60">Founder, Yellow Springs</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Architectural Monograph Photography (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Primary Image: Grand Wedding / Ballroom Scene */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[#382B25]/20 shadow-xl bg-[#382B25]/10 group">
                <img
                  src="/assets/wedding2.webp"
                  alt="Yellow Springs Luxury Event Scenography"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Subtle Inner Frame */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                
                {/* Tag at Top Left of Image */}
                <div className="absolute top-4 left-4 bg-[#F5F0E6]/90 backdrop-blur-sm px-3 py-1.5 border border-[#382B25]/15">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
                    Scenography & Decor
                  </span>
                </div>
              </div>

              {/* Floating Detail Card: Champagne Toast */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:flex absolute -bottom-6 -left-10 lg:-left-12 w-52 sm:w-60 bg-[#F5F0E6] p-3 border border-[#382B25]/20 shadow-2xl items-center gap-3.5 z-10"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden flex-shrink-0 border border-[#382B25]/15">
                  <img
                    src="/assets/hero-detail-champagne.jpg"
                    alt="Bespoke glassware and candlelit dining"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pr-1">
                  <span className="text-[8px] tracking-[0.25em] uppercase text-[#826958] font-bold block mb-1">
                    Bespoke Detail
                  </span>
                  <p className="text-[11px] leading-tight text-[#382B25] font-editorial italic">
                    Atmosphere engineered with intention.
                  </p>
                </div>
              </motion.div>

              {/* Subtle Archive Index Marker */}
              <div className="mt-6 hidden sm:flex items-center justify-between text-[10px] tracking-[0.2em] text-[#382B25]/50 uppercase font-mono w-full">
                <span>ARCHIVE • VOL. 01</span>
                <span>DUBAI • ABU DHABI</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
