import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServiceWeddings({ onOpenPlanner }) {
  const { weddings } = SERVICES_DATA;

  return (
    <section
      id="weddings"
      aria-labelledby="weddings-heading"
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
              {weddings.sectionNum} // {weddings.sectionLabel}
            </span>
            <span className="w-12 h-[1px] bg-[#382B25]/25" />
          </motion.div>

          <motion.h2
            id="weddings-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light leading-[1.04] tracking-tight text-[#382B25] max-w-3xl"
          >
            <span>{weddings.headlineLine1} </span>
            <br className="hidden sm:block" />
            <span className="italic font-normal text-[#382B25]/90">
              {weddings.headlineLine2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#382B25]/80 font-light leading-relaxed max-w-2xl"
          >
            {weddings.supportingCopy}
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Dominant Large Vertical Photograph (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full bg-[#251C17] border border-[#382B25]/25 shadow-[0_24px_55px_rgba(56,43,37,0.12)] overflow-hidden group">
              <img
                src={weddings.images.primary.src}
                alt={weddings.images.primary.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F5F0E6]">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FFE600] block mb-1">
                    PRIMARY SCENOGRAPHY
                  </span>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#F5F0E6]">
                    {weddings.images.primary.caption}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 border border-[#F5F0E6]/30 bg-[#251C17]/60">
                  FIG. 1.0
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Two Smaller Detail Photos + Editorial Capabilities List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Asymmetrical Stacked Detail Photos */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Detail 1: Tablescape / Floral */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square bg-[#251C17] border border-[#382B25]/20 overflow-hidden group shadow-md"
              >
                <img
                  src={weddings.images.detail1.src}
                  alt={weddings.images.detail1.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono tracking-widest uppercase text-[#F5F0E6]/90 bg-[#251C17]/80 px-2 py-0.5 border border-[#F5F0E6]/20">
                  FLORALS
                </span>
              </motion.div>

              {/* Detail 2: Ambient Moment */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square bg-[#251C17] border border-[#382B25]/20 overflow-hidden group shadow-md mt-6 sm:mt-8"
              >
                <img
                  src={weddings.images.detail2.src}
                  alt={weddings.images.detail2.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono tracking-widest uppercase text-[#F5F0E6]/90 bg-[#251C17]/80 px-2 py-0.5 border border-[#F5F0E6]/20">
                  ATMOSPHERE
                </span>
              </motion.div>
            </div>

            {/* Editorial Capabilities List (Clean Typographic Ledger — NOT inside cards!) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[#382B25]/20"
            >
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#382B25]/60 mb-5 font-semibold">
                INTEGRATED CAPABILITIES // WEDDINGS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {weddings.capabilities.map((cap, idx) => (
                  <div key={cap} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#382B25]/40 font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono tracking-wider uppercase text-[#382B25] font-medium">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner('weddings')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#251C17] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>{weddings.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
