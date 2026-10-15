import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutExperience() {
  const { experience } = ABOUT_DATA;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-28 md:py-40 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Decorative Subtle Background Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#F5F0E6]/10 flex justify-center">
          <div className="w-[1px] h-full bg-[#F5F0E6]/5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">


        {/* Powerful Graphic Layout: Massive Ivory "15+" with Embedded Imagery */}
        <div className="relative">
          {/* Main Typography Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Oversized "15+" Graphic element */}
            <div className="lg:col-span-7 relative flex items-baseline">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative select-none"
              >
                <span
                  id="experience-heading"
                  className="font-serif font-light text-[7.5rem] sm:text-[11rem] md:text-[14rem] lg:text-[17rem] leading-none tracking-tighter text-[#F5F0E6] block"
                >
                  {experience.num}
                </span>

                {/* Overlapping Small Photo 1 (Ballroom Floral Architectural Detail) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -top-6 right-0 sm:right-12 w-32 sm:w-44 md:w-52 aspect-[4/5] border border-[#F5F0E6]/30 shadow-2xl bg-[#251C17] overflow-hidden group hidden sm:block z-20"
                >
                  <img
                    src={experience.images[0].src}
                    alt={experience.images[0].alt}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-1.5 bg-[#251C17]/90 text-[7px] font-mono tracking-widest uppercase text-center text-[#F5F0E6]">
                    SCENOGRAPHY
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Typography Beside/Below the Number + Supporting Narrative */}
            <div className="lg:col-span-5 relative z-10 lg:pl-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight text-[#F5F0E6] space-y-1 mb-8">
                  {experience.titleLines.map((line, idx) => (
                    <div key={idx} className="block">
                      {line}
                    </div>
                  ))}
                </div>

                <div className="w-12 h-[1px] bg-[#F5F0E6]/30 mb-8" />

                <p className="text-base sm:text-lg text-[#F5F0E6]/80 font-light leading-relaxed max-w-md">
                  {experience.body}
                </p>
              </motion.div>

              {/* Overlapping Small Photo 2 (Acoustic Engineering) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 pt-6 border-t border-[#F5F0E6]/15 flex items-center gap-6"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#F5F0E6]/30 overflow-hidden bg-[#251C17] shadow-lg group">
                  <img
                    src={experience.images[1].src}
                    alt={experience.images[1].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-mono tracking-widest text-[#F5F0E6]/60 uppercase">
                    IN-HOUSE FLEET &amp; CREW
                  </p>
                  <p className="text-xs sm:text-sm text-[#F5F0E6]/90 font-light mt-1">
                    Direct control over sound, lighting, staging &amp; decor fabrication.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
