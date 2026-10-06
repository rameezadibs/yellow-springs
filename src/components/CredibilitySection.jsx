import React from 'react';
import { motion } from 'framer-motion';

export default function CredibilitySection() {
  return (
    <section className="relative bg-[#382B25] text-[#F5F0E6] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 md:px-12 border-b border-[#F5F0E6]/15 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A3B34]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#F5F0E6]/15 pb-4">
          <span className="font-mono text-xs text-[#F5F0E6]/50">06</span>
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]">
            CREDIBILITY & PROVEN RECORD
          </span>
        </div>

        {/* Oversized Typographic Statement */}
        <div className="max-w-4xl mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light leading-[1.06] tracking-tight text-[#F5F0E6]"
          >
            15+ years. <br />
            Countless moments. <br />
            <span className="italic font-normal text-[#E2D6C5]">One obsession with detail.</span>
          </motion.h2>
        </div>

        {/* Verified Integrated Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pt-10 border-t border-[#F5F0E6]/15">
          <div className="flex flex-col">
            <span className="font-editorial text-5xl md:text-6xl font-light text-[#F5F0E6] tracking-tight">
              15+
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E2D6C5] mt-2">
              YEARS ESTABLISHED
            </span>
            <p className="text-xs text-[#F5F0E6]/75 font-light mt-1.5 leading-relaxed">
              Operating continuously across the UAE since 2011 with deep local venue relationships.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-editorial text-5xl md:text-6xl font-light text-[#F5F0E6] tracking-tight">
              1,200+
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E2D6C5] mt-2">
              EXPERIENCES DELIVERED
            </span>
            <p className="text-xs text-[#F5F0E6]/75 font-light mt-1.5 leading-relaxed">
              Spanning corporate galas, royal weddings, private yacht parties, and brand activations.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-editorial text-5xl md:text-6xl font-light text-[#F5F0E6] tracking-tight">
              100%
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E2D6C5] mt-2">
              IN-HOUSE PRODUCTION
            </span>
            <p className="text-xs text-[#F5F0E6]/75 font-light mt-1.5 leading-relaxed">
              Direct inventory of sound, staging, lighting, furniture, and specialty concessions.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-editorial text-5xl md:text-6xl font-light text-[#F5F0E6] tracking-tight">
              7/7
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E2D6C5] mt-2">
              EMIRATES COVERED
            </span>
            <p className="text-xs text-[#F5F0E6]/75 font-light mt-1.5 leading-relaxed">
              Full logistical deployment across Dubai, Abu Dhabi, Sharjah, and northern Emirates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
