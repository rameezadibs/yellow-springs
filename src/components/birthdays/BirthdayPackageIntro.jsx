import React from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_PACKAGES } from '../../data/birthdayPackagesData';

export default function BirthdayPackageIntro({ activePackageId, onSelectPackage }) {
  return (
    <section id="packages-section" className="py-16 md:py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#382B25]/70">
              PARTY PACKAGES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-5"
          >
            One celebration.
            <br />
            <span className="italic">Five ways</span> to make it yours.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#382B25]/75 font-light leading-relaxed"
          >
            Every tier builds systematically upon the essentials: starting from custom themed backdrop styling and professional entertainers to full magic shows, bounce castles, 360 photo booths, and bespoke children's seating.
          </motion.p>
        </div>

        {/* 5-Package Horizontal Strip Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {BIRTHDAY_PACKAGES.map((pkg, index) => {
            const isSelected = activePackageId === pkg.id;
            return (
              <motion.button
                key={pkg.id}
                onClick={() => onSelectPackage(pkg.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`text-left p-4 sm:p-5 md:p-6 transition-all duration-300 border cursor-pointer group relative ${
                  isSelected
                    ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25] shadow-[0_8px_24px_rgba(56,43,37,0.12)]'
                    : 'bg-[#F5F0E6] text-[#382B25] border-[#382B25]/20 hover:border-[#382B25] hover:bg-[#382B25]/5'
                }`}
              >
                {/* Number & Descriptor */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono tracking-widest ${
                    isSelected ? 'text-[#FFE600]' : 'text-[#382B25]/50 group-hover:text-[#382B25]'
                  }`}>
                    {pkg.num}
                  </span>
                  <span className={`text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 ${
                    isSelected ? 'bg-[#F5F0E6]/15 text-[#F5F0E6]' : 'bg-[#382B25]/10 text-[#382B25]/70'
                  }`}>
                    {pkg.descriptor}
                  </span>
                </div>

                {/* Package Name */}
                <h3 className="font-editorial text-xl sm:text-2xl font-normal tracking-wide mb-1">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className={`text-base sm:text-lg font-semibold tracking-tight ${
                  isSelected ? 'text-[#FFE600]' : 'text-[#382B25]'
                }`}>
                  {pkg.priceFormatted}
                </div>

                {/* Selection Indicator Underline */}
                <div className={`mt-4 h-0.5 w-full transition-all duration-300 ${
                  isSelected ? 'bg-[#FFE600]' : 'bg-transparent group-hover:bg-[#382B25]/20'
                }`} />
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
