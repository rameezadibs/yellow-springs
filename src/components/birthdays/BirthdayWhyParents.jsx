import React from 'react';
import { motion } from 'framer-motion';
import { PARENT_BENEFITS } from '../../data/birthdayPackagesData';

export default function BirthdayWhyParents() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#382B25]/70">
              THE PARENT EXPERIENCE
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight">
            Less planning.
            <br />
            <span className="italic">More celebrating.</span>
          </h2>
        </div>

        {/* 3 Purely Typographic Columns (No Cards, No Generic Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 lg:gap-16 pt-8 border-t border-[#382B25]/20">
          {PARENT_BENEFITS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Large Monospace Index */}
                <div className="font-mono text-xs tracking-widest text-[#382B25]/40 mb-4">
                  BENEFIT {item.num}
                </div>

                {/* Expressive Title */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal tracking-wide text-[#382B25] mb-4">
                  {item.title}
                </h3>

                {/* Substantive Copy */}
                <p className="text-sm sm:text-base text-[#382B25]/80 font-light leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Minimal Line Decoration */}
              <div className="mt-8 pt-4 border-t border-[#382B25]/10 text-[10px] uppercase tracking-widest font-mono text-[#382B25]/40">
                PROMISE {item.num} / 03
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
