import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServicesIntro() {
  const { intro } = SERVICES_DATA;

  const handleScrollToService = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services-intro"
      aria-labelledby="services-intro-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14 border-t border-[#F5F0E6]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3.5 mb-10 sm:mb-14"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
          <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#F5F0E6]/75 font-semibold uppercase">
            {intro.sectionNum} // {intro.sectionLabel}
          </span>
          <span className="w-12 h-[1px] bg-[#F5F0E6]/25" />
        </motion.div>

        {/* Large Ivory Typographic Visual Statement */}
        <div className="max-w-5xl">
          <motion.div
            id="services-intro-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 sm:space-y-4"
          >
            {intro.statementLines.map((line, idx) => (
              <h2
                key={line}
                className={`font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.05] tracking-tight ${
                  idx === 2
                    ? 'italic text-[#FFE600]'
                    : 'text-[#F5F0E6]'
                }`}
              >
                {line}
              </h2>
            ))}
          </motion.div>

          {/* Supporting Philosophy Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-14 text-base sm:text-xl lg:text-2xl text-[#F5F0E6]/85 font-light leading-relaxed max-w-3xl"
          >
            {intro.supportingCopy}
          </motion.p>
        </div>

        {/* Thin Horizontal Service Index with Smooth Scroll Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 pt-8 border-t border-[#F5F0E6]/20"
        >
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#F5F0E6]/50 uppercase mb-6">
            INDEX // JUMP DIRECTLY TO CAPABILITY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {intro.indexItems.map((item) => (
              <button
                key={item.num}
                type="button"
                onClick={() => handleScrollToService(item.targetId)}
                className="group p-4 sm:p-5 border border-[#F5F0E6]/15 hover:border-[#FFE600] bg-[#251C17]/40 hover:bg-[#251C17]/80 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between text-[#F5F0E6]/50 group-hover:text-[#FFE600] transition-colors mb-3">
                  <span className="font-mono text-xs font-semibold">{item.num}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#F5F0E6] group-hover:text-[#FFE600] transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Jump to Integrated Birthday Packages */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#F5F0E6]/60 border-t border-[#F5F0E6]/10 pt-4">
            <span className="font-light">
              Planning a children&apos;s celebration or milestone party?
            </span>
            <button
              type="button"
              onClick={() => handleScrollToService('birthday-packages')}
              className="text-[#FFE600] font-semibold tracking-wider uppercase hover:text-[#F5F0E6] transition-colors cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>EXPLORE BIRTHDAY PACKAGES (FROM AED 1,500) ↓</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
