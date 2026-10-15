import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutBehindTheScenes() {
  const { behindTheScenes } = ABOUT_DATA;
  const moments = behindTheScenes.moments;

  return (
    <section
      id="behind-the-scenes"
      aria-labelledby="bts-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-28 md:py-44 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Decorative Editorial Watermark */}
      <div className="absolute right-6 top-12 select-none pointer-events-none opacity-5 font-serif text-[12rem] lg:text-[18rem] leading-none text-[#F5F0E6]">
        CRAFT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6 sm:mb-8"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#FFE600] font-medium uppercase">
            {behindTheScenes.label}
          </span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#F5F0E6]/20" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2
            id="bts-heading"
            className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-light leading-[1.08] text-[#F5F0E6]"
          >
            {behindTheScenes.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/75 font-light leading-relaxed max-w-2xl">
            {behindTheScenes.subhead}
          </p>
        </motion.div>

        {/* Irregular Editorial Collage Spread */}
        <div className="space-y-12 sm:space-y-16">
          {/* Row 1: Staggered Setup (Landscape) & Floral Detail (Portrait) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Setup: 7 Cols */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative group"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[#F5F0E6]/20 bg-[#251C17] shadow-2xl">
                <img
                  src={moments[0].image}
                  alt={moments[0].annotation}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Timestamp Tag */}
                <div className="absolute top-4 left-4 bg-[#251C17]/90 backdrop-blur-sm border border-[#F5F0E6]/20 px-3 py-1 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#FFE600]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#F5F0E6] uppercase">
                    {moments[0].time}
                  </span>
                </div>

                {/* Bottom Annotation */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-[#F5F0E6] block">
                      {moments[0].title}
                    </span>
                    <p className="text-[11px] font-mono tracking-wider text-[#F5F0E6]/70 mt-0.5">
                      {moments[0].annotation}
                    </p>
                  </div>
                  <p className="text-xs text-[#F5F0E6]/80 font-light max-w-xs text-right hidden sm:block">
                    {moments[0].note}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floral Detail: 5 Cols (Overlapping slightly on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group lg:-ml-6"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden border-2 border-[#F5F0E6]/25 bg-[#251C17] shadow-2xl z-20">
                <img
                  src={moments[1].image}
                  alt={moments[1].annotation}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#251C17]/90 border border-[#F5F0E6]/20 px-3 py-1 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#FFE600]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#F5F0E6] uppercase">
                    {moments[1].time}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-[#F5F0E6] block">
                    {moments[1].title}
                  </span>
                  <p className="text-[11px] font-mono tracking-wider text-[#F5F0E6]/70 mt-0.5">
                    {moments[1].annotation}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Final Check (Portrait), Showtime (Wide Landscape), and Candid Memory */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
            {/* The Final Check: 4 Cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-[#F5F0E6]/20 bg-[#251C17] shadow-xl">
                <img
                  src={moments[2].image}
                  alt={moments[2].annotation}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#251C17]/90 border border-[#F5F0E6]/20 px-3 py-1 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#FFE600]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#F5F0E6] uppercase">
                    {moments[2].time}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-[#F5F0E6] block">
                    {moments[2].title}
                  </span>
                  <p className="text-[10px] font-mono tracking-wider text-[#F5F0E6]/70 mt-0.5">
                    {moments[2].annotation}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Showtime: 8 Cols (Wide Cinematic Experience) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 relative group"
            >
              <div className="relative aspect-[16/9] overflow-hidden border border-[#F5F0E6]/25 bg-[#251C17] shadow-2xl">
                <img
                  src={moments[3].image}
                  alt={moments[3].annotation}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#251C17]/90 border border-[#F5F0E6]/20 px-3 py-1 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#FFE600]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#F5F0E6] uppercase">
                    {moments[3].time}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-sm sm:text-base font-sans font-bold tracking-widest uppercase text-[#F5F0E6] block">
                      {moments[3].title}
                    </span>
                    <p className="text-xs font-mono tracking-wider text-[#F5F0E6]/80 mt-1">
                      {moments[3].annotation}
                    </p>
                  </div>
                  <span className="font-script text-xl text-[#FFE600] hidden sm:block">
                    The Doors Open
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Footer Editorial Footnote */}
        <div className="mt-16 pt-8 border-t border-[#F5F0E6]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#F5F0E6]/50">
          <span>DOCUMENTARY ARCHIVE // YELLOW SPRINGS UAE</span>
          <span>HUMAN CARE · UNCOMPROMISED DISCIPLINE</span>
        </div>
      </div>
    </section>
  );
}
