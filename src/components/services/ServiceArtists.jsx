import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServiceArtists({ onOpenPlanner }) {
  const { artists } = SERVICES_DATA;

  return (
    <section
      id="artists"
      aria-labelledby="artists-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#F5F0E6]/15 overflow-hidden"
    >
      {/* Very Slow Subtle Background Marquee Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.04]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap font-editorial text-[14vw] font-light tracking-tight text-[#F5F0E6]"
        >
          {artists.marqueeText} {artists.marqueeText}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3.5 mb-8 sm:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
          <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#F5F0E6]/75 font-semibold uppercase">
            {artists.sectionNum} // {artists.sectionLabel}
          </span>
          <span className="w-12 h-[1px] bg-[#F5F0E6]/25" />
        </motion.div>

        {/* Cinematic Split with Oversized Typography Interacting with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Headline & Roster Ledger (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
            <motion.h2
              id="artists-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.04] tracking-tight text-[#F5F0E6]"
            >
              <span>{artists.headlineLine1} </span>
              <br />
              <span className="italic font-normal text-[#FFE600]">
                {artists.headlineLine2}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#F5F0E6]/85 font-light leading-relaxed max-w-xl"
            >
              {artists.supportingCopy}
            </motion.p>

            {/* Curated Talent Roster Ledger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 pt-6 border-t border-[#F5F0E6]/15 space-y-3.5"
            >
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#F5F0E6]/50 block mb-2 font-semibold">
                CURATED TALENT PROFILES // UAE ROSTER
              </span>

              {artists.genres.map((g) => (
                <div key={g.name} className="flex items-baseline justify-between gap-4 py-1.5 border-b border-[#F5F0E6]/10">
                  <span className="font-mono text-xs tracking-wider uppercase text-[#F5F0E6] font-medium">
                    {g.name}
                  </span>
                  <span className="text-xs text-[#F5F0E6]/60 font-light truncate max-w-[240px] text-right">
                    {g.note}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Action */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner('artists')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#FFE600] transition-colors duration-300 shadow-lg cursor-pointer"
              >
                <span>{artists.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Energetic Cinematic Performance Photograph (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-[#251C17] border border-[#F5F0E6]/20 shadow-[0_24px_60px_rgba(37,28,23,0.35)] overflow-hidden group">
              <img
                src={artists.image.src}
                alt={artists.image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-[#251C17]/25 to-transparent pointer-events-none" />

              <div className="absolute top-4 right-4">
                <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#251C17]/80 backdrop-blur-sm text-[#FFE600] border border-[#FFE600]/30">
                  LIVE TALENT CURATION
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F5F0E6]">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FFE600] block mb-1">
                    PERFORMANCE ENERGY
                  </span>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#F5F0E6]">
                    {artists.image.caption}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 border border-[#F5F0E6]/30 bg-[#251C17]/60">
                  FIG. 4.0
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
