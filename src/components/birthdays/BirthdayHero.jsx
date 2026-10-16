import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';

export default function BirthdayHero({ onExplorePackages, onBuildParty }) {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] overflow-hidden border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Meta Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-6 md:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#382B25]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#382B25]/70">
                BIRTHDAYS / YELLOW SPRINGS
              </span>
              <span className="text-[#382B25]/30">|</span>
              <span className="text-[11px] tracking-widest text-[#382B25]/60 uppercase font-mono hidden sm:inline">
                DUBAI &amp; UAE
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.98] tracking-tight mb-8 text-[#382B25]"
            >
              <span className="sr-only">Children's Birthday Party Packages &amp; Kids Entertainment Dubai UAE — </span>
              Big smiles.
              <br />
              <span className="italic font-normal">Zero boring</span> parties.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#382B25]/80 font-light leading-relaxed max-w-xl mb-10"
            >
              From the decorations to the entertainment, choose a structured party package and let us bring the entire celebration together under one roof. No juggling ten different suppliers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={onExplorePackages}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all group cursor-pointer shadow-md"
              >
                <span>EXPLORE PACKAGES</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                onClick={onBuildParty}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all group cursor-pointer shadow-md"
              >
                <span>PLAN YOUR PARTY</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* Micro Annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 pt-8 border-t border-[#382B25]/10 flex items-center gap-6 text-xs text-[#382B25]/60 font-light"
            >
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#382B25]" />
                <span>5 Turnkey Packages</span>
              </div>
              <span>•</span>
              <div>25+ Bespoke Add-Ons</div>
              <span>•</span>
              <div>Across Dubai &amp; Abu Dhabi</div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photographic Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Dominant Real Event Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#382B25]/5 shadow-[0_12px_40px_rgba(56,43,37,0.08)] border border-[#382B25]/15">
                <img
                  src="/birthday/hero.png"
                  alt="Customized pastel balloon birthday stage and floral setup in UAE"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Photo Annotation Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#382B25]/85 via-[#382B25]/40 to-transparent text-[#F5F0E6]">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#FFE600]">
                    REAL CELEBRATION
                  </p>
                  <p className="text-xs font-light text-[#F5F0E6]/90 mt-0.5">
                    Pastel arch scenography, bespoke plinths &amp; illuminated marquee letters
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Candid Accent Photo */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 aspect-[4/3] overflow-hidden bg-[#F5F0E6] p-1.5 shadow-[0_16px_36px_rgba(56,43,37,0.14)] border border-[#382B25]/20 hidden sm:block"
              >
                <img
                  src="/assets/birthday_facepaint.jpg"
                  alt="Child with artistic face painting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#382B25] text-[#F5F0E6] text-[9px] uppercase tracking-wider font-semibold">
                  LIVE TALENT
                </div>
              </motion.div>

              {/* Floating Pill Tag */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#382B25] text-[#F5F0E6] px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-semibold shadow-md">
                PACKAGES FROM AED 1,500
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
