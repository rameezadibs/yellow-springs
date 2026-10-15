import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServiceCorporate({ onOpenPlanner }) {
  const { corporate } = SERVICES_DATA;

  return (
    <section
      id="corporate"
      aria-labelledby="corporate-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#F5F0E6]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Text Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 sm:mb-20">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#F5F0E6]/75 font-semibold uppercase">
                {corporate.sectionNum} // {corporate.sectionLabel}
              </span>
              <span className="w-12 h-[1px] bg-[#F5F0E6]/25" />
            </motion.div>

            <motion.h2
              id="corporate-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.04] tracking-tight text-[#F5F0E6]"
            >
              <span>{corporate.headlineLine1} </span>
              <br className="hidden sm:block" />
              <span className="italic font-normal text-[#FFE600]">
                {corporate.headlineLine2}
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#F5F0E6]/80 font-light leading-relaxed"
            >
              {corporate.supportingCopy}
            </motion.p>
          </div>

        </div>

        {/* Huge Full-Width Corporate Stage Photograph with Minimal Overlay Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#251C17] border border-[#F5F0E6]/20 shadow-[0_30px_70px_rgba(37,28,23,0.35)] overflow-hidden group"
        >
          {/* Background Image with Slow Parallax/Zoom */}
          <img
            src={corporate.image.src}
            alt={corporate.image.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Deep Cinematic Vignette and Dark Tint Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/95 via-[#251C17]/40 to-[#251C17]/25 pointer-events-none" />

          {/* Overlay Typographic Format Across Bottom */}
          <div className="absolute inset-x-6 sm:inset-x-12 bottom-6 sm:bottom-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-[#F5F0E6]">
            
            {/* Caption & Scope */}
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#FFE600] block mb-1">
                KEYNOTE &amp; GALA STAGING // DUBAI &amp; ABU DHABI
              </span>
              <p className="font-editorial text-xl sm:text-2xl lg:text-3xl font-light text-[#F5F0E6]/95">
                {corporate.image.caption}
              </p>
            </div>

            {/* CTA Overlay */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner('corporate')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#FFE600] transition-colors duration-300 shadow-lg cursor-pointer"
              >
                <span>{corporate.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Corporate Disciplines Ribbon Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 pt-8 border-t border-[#F5F0E6]/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-left"
        >
          {corporate.types.map((type, idx) => (
            <div key={type} className="flex flex-col space-y-1">
              <span className="font-mono text-[10px] text-[#FFE600]/70 font-semibold">
                CORP.0{idx + 1}
              </span>
              <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#F5F0E6]/90 font-medium">
                {type}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
