import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServiceAV({ onOpenPlanner }) {
  const { avSound } = SERVICES_DATA;

  return (
    <section
      id="av-sound"
      aria-labelledby="av-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Architectural Grid with Thin Espresso Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Conceptual Statement & Technical Index (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Concept Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#382B25]" />
                <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
                  {avSound.sectionNum} // {avSound.sectionLabel}
                </span>
                <span className="w-8 h-[1px] bg-[#382B25]/25" />
                <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#382B25]/5 border border-[#382B25]/10 text-[#382B25]/60 hidden sm:inline-block">
                  {avSound.conceptBadge}
                </span>
              </motion.div>

              {/* Huge Headline: Seen. Heard. Felt. */}
              <motion.h2
                id="av-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-light leading-[0.98] tracking-tight text-[#382B25]"
              >
                {avSound.headlineWords.map((word, idx) => (
                  <span key={word} className="block">
                    {idx === 2 ? <span className="italic">{word}</span> : word}
                  </span>
                ))}
              </motion.h2>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-base sm:text-lg text-[#382B25]/85 font-light leading-relaxed max-w-lg"
              >
                {avSound.supportingCopy}
              </motion.p>
            </div>

            {/* Vertical Technical Architectural Index (AV.01 to AV.06) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 sm:mt-16 pt-8 border-t border-[#382B25]/20 divide-y divide-[#382B25]/15"
            >
              {avSound.technicalIndex.map((item) => (
                <div
                  key={item.code}
                  className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-semibold text-[#382B25]/50 group-hover:text-[#382B25] transition-colors mt-0.5">
                      {item.code}
                    </span>
                    <div>
                      <h3 className="font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold text-[#382B25] block">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#382B25]/70 font-light mt-0.5 max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#382B25]/40 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    IN-HOUSE FLEET
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner('av')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#251C17] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>{avSound.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Close-Up Technical Engineering Photography (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            {/* Viewfinder Border & Technical Crop */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-[#251C17] border border-[#382B25]/30 shadow-[0_24px_60px_rgba(56,43,37,0.14)] overflow-hidden group">
              <img
                src={avSound.image.src}
                alt={avSound.image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/85 via-[#251C17]/25 to-transparent pointer-events-none" />

              {/* Technical Blueprint Hairlines / Viewfinder Overlay */}
              <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase text-[#F5F0E6]/90 bg-[#251C17]/80 px-2 py-0.5 border border-[#F5F0E6]/20">
                CALIBRATION // DMX &amp; LINE ARRAY
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F5F0E6]">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FFE600] block mb-1">
                    TECHNICAL FIDELITY
                  </span>
                  <p className="font-editorial text-lg sm:text-xl text-[#F5F0E6] italic">
                    {avSound.image.caption}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 border border-[#F5F0E6]/30 bg-[#251C17]/60">
                  FIG. 3.0
                </span>
              </div>
            </div>

            {/* Technical Rigging Specification Telemetry Banner */}
            <div className="mt-4 p-4 border border-[#382B25]/20 bg-[#FAF7F0] flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#382B25]/70">
              <span>ZERO DELAY SYNC</span>
              <span>DCD &amp; CIVIL PERMITS</span>
              <span>DIRECT WAREHOUSE ASSETS</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
