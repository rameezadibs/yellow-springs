import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { BIRTHDAY_PACKAGES } from '../../data/birthdayPackagesData';

export default function BirthdayPackageExplorer({ activePackageId, onSelectPackage, onChoosePackage }) {
  const currentPackage = BIRTHDAY_PACKAGES.find((p) => p.id === activePackageId) || BIRTHDAY_PACKAGES[2]; // Default Gold

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle Horizontal Progression Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#382B25]/60">
              PACKAGE PROGRESSION
            </span>
            <span className="text-xs text-[#382B25]/70 font-mono">
              LEVEL {currentPackage.num} / 05 • {currentPackage.descriptor}
            </span>
          </div>

          {/* Stepped Progression Bar */}
          <div className="grid grid-cols-5 gap-2 md:gap-3">
            {BIRTHDAY_PACKAGES.map((pkg, idx) => {
              const currentIndex = BIRTHDAY_PACKAGES.findIndex((p) => p.id === currentPackage.id);
              const isPastOrCurrent = idx <= currentIndex;
              const isCurrent = pkg.id === currentPackage.id;

              return (
                <div key={pkg.id} className="flex flex-col gap-1.5">
                  <div
                    className={`h-1.5 w-full transition-all duration-500 ${
                      isCurrent
                        ? 'bg-[#382B25]'
                        : isPastOrCurrent
                        ? 'bg-[#382B25]/60'
                        : 'bg-[#382B25]/15'
                    }`}
                  />
                  <span className={`text-[9px] md:text-[10px] tracking-wider font-mono uppercase truncate ${
                    isCurrent ? 'text-[#382B25] font-bold' : 'text-[#382B25]/40'
                  }`}>
                    {pkg.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop & Mobile Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#382B25]/15">
          {BIRTHDAY_PACKAGES.map((pkg) => {
            const isSelected = activePackageId === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => onSelectPackage(pkg.id)}
                className={`flex-shrink-0 px-5 sm:px-7 py-3 text-xs sm:text-sm tracking-widest font-semibold uppercase transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? 'bg-[#382B25] text-[#F5F0E6]'
                    : 'bg-transparent text-[#382B25]/70 hover:text-[#382B25] hover:bg-[#382B25]/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono opacity-60">{pkg.num}</span>
                  <span>{pkg.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Package Presentation (Asymmetric: Details + Dominant Photograph) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPackage.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          >
            {/* Left: Package Inclusions & Pricing */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                
                {/* Meta Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#382B25]/60">
                    {currentPackage.num} / {currentPackage.name}
                  </span>
                  <span className="text-[#382B25]/20">•</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#382B25] bg-[#382B25]/10 px-2.5 py-0.5">
                    {currentPackage.descriptor}
                  </span>
                </div>

                {/* Big Price */}
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#382B25] tracking-tight">
                    {currentPackage.priceFormatted}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#382B25]/50">
                    NET PRICE (VAT INCL.)
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-[#382B25]/85 font-light leading-relaxed mb-8 max-w-xl">
                  {currentPackage.tagline}
                </p>

                {/* Inclusions Title */}
                <div className="flex items-center justify-between border-b border-[#382B25]/15 pb-3 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#382B25]/60">
                    WHAT&apos;S INCLUDED ({currentPackage.inclusions.length} ESSENTIALS)
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#382B25]/50 font-mono">
                    ALL-INCLUSIVE
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
                  {currentPackage.inclusions.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#382B25] text-[#F5F0E6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#382B25]">
                          {item.name}
                        </div>
                        {item.detail && (
                          <div className="text-[11px] text-[#382B25]/60 font-light leading-snug">
                            {item.detail}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#382B25]/15 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onChoosePackage(currentPackage)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all group cursor-pointer shadow-sm"
                >
                  <span>CHOOSE {currentPackage.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="text-xs text-[#382B25]/60 font-light italic">
                  * Custom themes &amp; additional hours available on request
                </div>
              </div>
            </div>

            {/* Right: Dominant Real Birthday Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#382B25]/5 border border-[#382B25]/15 shadow-[0_16px_40px_rgba(56,43,37,0.1)]">
                <motion.img
                  key={currentPackage.image}
                  src={currentPackage.image}
                  alt={currentPackage.imageAlt}
                  initial={{ scale: 1.05, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />

                {/* Minimal Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#382B25]/90 via-[#382B25]/40 to-transparent text-[#F5F0E6]">
                  <div className="flex items-center justify-between text-[10px] tracking-widest font-mono uppercase text-[#FFE600] mb-1">
                    <span>{currentPackage.name} SHOWCASE</span>
                    <span>LEVEL {currentPackage.progressionLevel}%</span>
                  </div>
                  <p className="text-xs font-light text-[#F5F0E6]/90 line-clamp-2">
                    {currentPackage.imageAlt}
                  </p>
                </div>
              </div>

              {/* Micro Tag Below Image */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#382B25]/60 font-light px-1">
                <span>Setup, logistics &amp; dismantling included</span>
                <span className="font-mono">UAE WIDE</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
