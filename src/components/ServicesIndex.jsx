import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Sliders, Music, Camera, ShieldCheck, Armchair } from 'lucide-react';
import { SERVICES } from '../data/content';

const CATEGORIES = [
  { id: 'all', label: 'ALL CAPABILITIES' },
  { id: 'production', label: 'PRODUCTION & STAGING' },
  { id: 'experiences', label: 'EVENTS & CELEBRATIONS' },
  { id: 'entertainment', label: 'MEDIA & ENTERTAINMENT' },
];

export default function ServicesIndex({ onOpenPlanner }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  // Filter services based on category
  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'production') return ['01', '04', '07', '08'].includes(service.num);
    if (selectedCategory === 'experiences') return ['01', '02', '03'].includes(service.num);
    if (selectedCategory === 'entertainment') return ['05', '06', '07'].includes(service.num);
    return true;
  });

  return (
    <section
      id="services"
      className="relative bg-[#382B25] text-[#F5F0E6] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 md:px-12 border-b border-[#F5F0E6]/15 overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#4A3B34]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            1. SECTION HEADER
        ────────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F5F0E6]/15 pb-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#F5F0E6]/50">02</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]">
                WHAT WE DO • CAPABILITIES
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#F5F0E6]">
              An integrated ecosystem <br />
              <span className="italic font-normal text-[#E2D6C5]">engineered for perfection.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#F5F0E6]/75 max-w-md font-light leading-relaxed">
            From stage architecture and live broadcast to luxury styling and artist curation—we own the entire operational and aesthetic spectrum in-house.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. INTERACTIVE CATEGORY FILTER PILLS
        ────────────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold uppercase transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#F5F0E6] text-[#382B25] border-[#F5F0E6]'
                    : 'bg-transparent text-[#F5F0E6]/70 border-[#F5F0E6]/20 hover:border-[#F5F0E6]/60 hover:text-[#F5F0E6]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. ASYMMETRICAL EDITORIAL BENTO GRID (NON-REPETITIVE CARDS)
        ────────────────────────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              // Determine card span for asymmetrical bento grid look
              let colSpanClass = 'lg:col-span-4';
              if (selectedCategory === 'all') {
                if (service.num === '08') {
                  colSpanClass = 'lg:col-span-12';
                } else if (index === 0 || index === 3) {
                  colSpanClass = 'lg:col-span-8';
                }
              } else if (filteredServices.length === 4) {
                if (index === 0 || index === 3) {
                  colSpanClass = 'lg:col-span-8';
                }
              }

              return (
                <motion.div
                  key={service.num}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredService(service.num)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => onOpenPlanner(service.title)}
                  className={`group relative overflow-hidden border border-[#F5F0E6]/15 bg-[#2C201A] p-6 sm:p-8 flex flex-col justify-between cursor-pointer shadow-xl transition-all duration-500 hover:border-[#F5F0E6]/40 ${colSpanClass} min-h-[360px] md:min-h-[400px]`}
                >
                  {/* Background Image with Dark Vignette Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1411] via-[#2C201A]/90 to-transparent" />
                  </div>

                  {/* Top Card Info: Number & Category Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F5F0E6]/60 tracking-wider">
                      CAPABILITY • {service.num}
                    </span>
                    <span className="text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 bg-[#F5F0E6]/10 text-[#F5F0E6]/90 border border-[#F5F0E6]/15">
                      {service.aspect}
                    </span>
                  </div>

                  {/* Middle / Bottom Content */}
                  <div className="relative z-10 mt-12 sm:mt-16">
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#F5F0E6] font-light tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-light leading-relaxed max-w-xl mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#F5F0E6]/5 text-[#F5F0E6]/75 border border-[#F5F0E6]/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#F5F0E6]/15 flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E2D6C5] group-hover:text-[#F5F0E6] transition-colors">
                        EXPLORE SERVICE & ENQUIRE
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#F5F0E6]/30 flex items-center justify-center group-hover:bg-[#F5F0E6] group-hover:text-[#382B25] transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            4. BOTTOM VALUE GUARANTEE STRIP
        ────────────────────────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#F5F0E6]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-[#E2D6C5] shrink-0" />
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-[#F5F0E6] uppercase">In-House Quality Guarantee</p>
              <p className="text-[10px] text-[#F5F0E6]/60">Zero third-party compromises</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Layers className="w-5 h-5 text-[#E2D6C5] shrink-0" />
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-[#F5F0E6] uppercase">Turnkey Execution</p>
              <p className="text-[10px] text-[#F5F0E6]/60">Concept to final breakdown</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Sparkles className="w-5 h-5 text-[#E2D6C5] shrink-0" />
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-[#F5F0E6] uppercase">UAE Municipality Permits</p>
              <p className="text-[10px] text-[#F5F0E6]/60">100% compliant & accredited</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
