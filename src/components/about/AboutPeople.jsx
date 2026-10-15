import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Camera } from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutPeople() {
  const { people } = ABOUT_DATA;

  return (
    <section
      id="our-people"
      aria-labelledby="our-people-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 mb-5 sm:mb-6"
          >
            <span className="font-mono text-xs tracking-[0.28em] text-[#382B25]/60 font-semibold uppercase">
              {people.sectionNum} // {people.sectionLabel}
            </span>
            <span className="w-10 h-[1px] bg-[#382B25]/25" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 bg-[#382B25]/5 border border-[#382B25]/10 text-[#382B25]/70 hidden sm:inline-block">
              EQUAL PARTNERSHIP · UAE
            </span>
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="our-people-heading"
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-light leading-[1.08] text-[#382B25]"
            >
              {people.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#382B25]/75 font-light leading-relaxed max-w-2xl">
              {people.subhead}
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THREE EQUAL CO-FOUNDERS SPREAD (PARITY IN ROLE & STATURE)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {people.founders.map((founder, idx) => {
            const isDarkPortrait = idx === 1;

            return (
              <motion.article
                key={founder.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF7F0] border border-[#382B25]/20 shadow-[0_16px_45px_rgba(56,43,37,0.08)] flex flex-col justify-between overflow-hidden group hover:border-[#382B25]/45 transition-colors duration-500"
              >
                {/* ----------------------------------------------------------------- */}
                {/* Visual Frame (Equal Aspect Ratio & Prominence for All 3)          */}
                {/* ----------------------------------------------------------------- */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#251C17]">
                  {founder.hasRealPhoto ? (
                    <>
                      <img
                        src={founder.photo}
                        alt={`${founder.name}, Co-Founder`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/85 via-transparent to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col justify-between p-7 sm:p-8 transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isDarkPortrait
                          ? 'bg-[#382B25] text-[#F5F0E6]'
                          : 'bg-[#ECE5D8] text-[#382B25]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                          PORTRAIT // {founder.initials}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center opacity-70">
                          <Camera className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="text-center py-6">
                        <span className="font-editorial italic font-light text-7xl sm:text-8xl tracking-tight opacity-90 block">
                          {founder.initials}
                        </span>
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 mt-2">
                          [ CO-FOUNDER ARCHIVE ]
                        </p>
                      </div>

                      <div className="pt-3 border-t border-current/15 flex items-center justify-between text-[10px] font-mono opacity-80">
                        <span>{founder.name}</span>
                        <span className="text-[#FFE600] font-semibold">{founder.role}</span>
                      </div>
                    </div>
                  )}

                  {/* Top Eyebrow Badge (Equal Co-Founder Label) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-[#251C17]/80 backdrop-blur-md border border-[#F5F0E6]/25 text-[#F5F0E6] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                      CO-FOUNDER // 0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Tag Frame Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#F5F0E6]/95 border border-[#382B25]/20 text-[#382B25] inline-block">
                      {founder.tag}
                    </span>
                  </div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* Content Block (Identical Hierarchy & Equal Role Weight)           */}
                {/* ----------------------------------------------------------------- */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Role Tag & Name */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#382B25]/60 font-semibold">
                        {founder.role}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#382B25]/40 group-hover:text-[#382B25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#382B25] tracking-tight">
                      {founder.name}
                    </h3>

                    {/* Operational Domain */}
                    <p className="mt-1 text-xs font-mono tracking-wider uppercase text-[#382B25]/75 font-medium">
                      {founder.focus}
                    </p>

                    {/* Bio Narrative */}
                    <p className="mt-4 text-sm sm:text-base text-[#382B25]/85 font-light leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Equal Founder Pull Quote */}
                  <div className="mt-6 pt-5 border-t border-[#382B25]/15">
                    <p className="font-editorial italic text-base sm:text-lg text-[#382B25] leading-snug">
                      {founder.quote}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. CLOSING EQUAL PARTNERSHIP SEAL                                         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-14 pt-6 border-t border-[#382B25]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#382B25]/60 tracking-wider gap-3"
        >
          <span>EQUAL PARTNERSHIP // 100% HANDS-ON FOUNDER LEADERSHIP</span>
          <span>NO JUNIOR DELEGATION · PRESENT AT EVERY GATHERING</span>
          <span>DUBAI · ABU DHABI · UAE</span>
        </motion.div>
      </div>
    </section>
  );
}
