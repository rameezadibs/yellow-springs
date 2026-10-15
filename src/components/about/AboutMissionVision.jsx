import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutMissionVision() {
  const { missionVision } = ABOUT_DATA;

  // Embedded JSON-LD for Search Engine Structured Indexing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yellow Springs Event Management',
    alternateName: 'Yellow Springs UAE',
    url: 'https://yellowsprings.ae/about',
    logo: 'https://yellowsprings.ae/logo.webp',
    description:
      'For over 15 years, Yellow Springs has delivered bespoke event management, scenography, turnkey staging, and production rentals across Dubai, Abu Dhabi, and the UAE.',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    knowsAbout: [
      'Corporate Event Management',
      'Event Production & Staging',
      'Luxury Wedding Scenography',
      'Audio Visual & Acoustic Engineering',
      'Dubai Municipality & Civil Defence Permits',
      'Bespoke Event Equipment Rentals',
    ],
    slogan: 'Your Event Buddies — Moments Worth Remembering',
  };

  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-seo-heading"
      className="relative overflow-hidden border-t border-[#382B25]/15"
    >
      {/* Hidden Accessible SEO Heading for Document Hierarchy */}
      <h2 id="mission-vision-seo-heading" className="sr-only">
        Yellow Springs Mission and Vision — Event Management &amp; Production UAE
      </h2>

      {/* Structured Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Editorial Split-Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* ================= LEFT SIDE: MISSION (Warm Ivory Canvas) ================= */}
        <article
          aria-labelledby="mission-card-heading"
          className="bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-5 lg:pb-6 px-8 sm:px-12 lg:px-16 flex flex-col relative z-10"
        >
          <div>
            {/* Semantic Label Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#382B25]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#382B25]/75 font-semibold">
                {missionVision.mission.label}
              </span>
            </motion.div>

            {/* Display Heading & SEO Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                id="mission-card-heading"
                className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#382B25] leading-none mb-2"
              >
                {missionVision.mission.title}
              </h3>
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#382B25]/60 mb-6">
                {missionVision.mission.seoTitle}
              </p>
            </motion.div>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-[#382B25] max-w-lg mb-6"
            >
              {missionVision.mission.statement}
            </motion.p>

            {/* Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#382B25]/85 font-light leading-relaxed max-w-xl"
            >
              {missionVision.mission.copy}
            </motion.p>

            {/* Structured Semantic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 pt-6 border-t border-[#382B25]/15 space-y-4"
            >
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#382B25]/60 block mb-2 font-semibold">
                CORE COMMITMENTS // UAE EVENT DELIVERY
              </span>
              <ul className="space-y-3.5">
                {missionVision.mission.pillars.map((pillar) => (
                  <li key={pillar.num} className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-semibold text-[#382B25]/50 mt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <strong className="text-sm font-semibold tracking-wide uppercase text-[#382B25] block">
                        {pillar.title}
                      </strong>
                      <span className="text-xs sm:text-sm text-[#382B25]/75 font-light leading-relaxed block mt-0.5">
                        {pillar.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer Metadata Tags */}
          <div className="mt-6 pt-3.5 border-t border-[#382B25]/15 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#382B25]/60 tracking-wider">
            <span>PHILOSOPHY: HUMAN RESONANCE</span>
            <div className="flex items-center gap-2">
              {missionVision.mission.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-[#382B25]/5 border border-[#382B25]/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ================= RIGHT SIDE: VISION (Espresso Brown Canvas) ================= */}
        <article
          aria-labelledby="vision-card-heading"
          className="bg-[#382B25] text-[#F5F0E6] pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-5 lg:pb-6 px-8 sm:px-12 lg:px-16 flex flex-col relative z-10"
        >
          <div>
            {/* Semantic Label Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#F5F0E6]/75 font-semibold">
                {missionVision.vision.label}
              </span>
            </motion.div>

            {/* Display Heading & SEO Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                id="vision-card-heading"
                className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F5F0E6] leading-none mb-2"
              >
                {missionVision.vision.title}
              </h3>
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F5F0E6]/60 mb-6">
                {missionVision.vision.seoTitle}
              </p>
            </motion.div>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-[#F5F0E6] max-w-lg mb-6"
            >
              {missionVision.vision.statement}
            </motion.p>

            {/* Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#F5F0E6]/85 font-light leading-relaxed max-w-xl"
            >
              {missionVision.vision.copy}
            </motion.p>

            {/* Structured Semantic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 pt-6 border-t border-[#F5F0E6]/15 space-y-4"
            >
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#F5F0E6]/60 block mb-2 font-semibold">
                STRATEGIC TARGETS // REGIONAL BENCHMARK
              </span>
              <ul className="space-y-3.5">
                {missionVision.vision.pillars.map((pillar) => (
                  <li key={pillar.num} className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-semibold text-[#FFE600]/70 mt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <strong className="text-sm font-semibold tracking-wide uppercase text-[#F5F0E6] block">
                        {pillar.title}
                      </strong>
                      <span className="text-xs sm:text-sm text-[#F5F0E6]/75 font-light leading-relaxed block mt-0.5">
                        {pillar.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer Metadata Tags */}
          <div className="mt-6 pt-3.5 border-t border-[#F5F0E6]/15 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#F5F0E6]/60 tracking-wider">
            <span>BENCHMARK: ELEVATED STANDARDS</span>
            <div className="flex items-center gap-2">
              {missionVision.vision.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-[#F5F0E6]/10 border border-[#F5F0E6]/15 text-[#F5F0E6]/90">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ================= TRANSITION: CROSS-BOUNDARY EDITORIAL EMBLEM ================= */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
          {/* Overlapping Emblem Disc */}
          <div className="w-24 h-24 rounded-full border border-[#382B25]/20 shadow-xl bg-gradient-to-r from-[#F5F0E6] to-[#382B25] p-[1px] flex items-center justify-center">
            <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-md">
              <div className="w-1/2 h-full bg-[#F5F0E6]" />
              <div className="w-1/2 h-full bg-[#382B25]" />
              <span className="absolute font-editorial italic text-3xl font-light select-none text-[#FFE600]">
                &amp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
