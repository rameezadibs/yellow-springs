import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { RENTALS_CATALOG } from '../data/content';

export default function RentalsSection({ onOpenPlanner }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      id="rentals"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 md:py-36 px-6 md:px-12 border-b border-[#382B25]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#382B25]/15 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#382B25]/60">05</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
                BEYOND THE EVENT • EQUIPMENT & SPECIALTY SOLUTIONS
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] text-[#382B25]">
              The details that <br />
              <span className="italic font-normal">bring it all together.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-sm md:text-base text-[#382B25]/75 max-w-sm font-light">
              From bespoke velvet lounge suites to immersive LED dance surfaces and artisanal dessert carts, our private inventory elevates the atmosphere.
            </p>
            <button
              onClick={() => onOpenPlanner('Event Equipment Rentals')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#382B25] hover:text-[#382B25]/70 group"
            >
              <span>EXPLORE COMPLETE RENTALS CATALOG</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Curated Rentals Showcase Grid with Authentic Lifestyle Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {RENTALS_CATALOG.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between border border-[#382B25]/15 bg-[#FAF7F0] p-5 hover:border-[#382B25] transition-all duration-300"
            >
              <div>
                {/* Lifestyle Image (Not isolated e-commerce cutout!) */}
                <div className="relative aspect-[16/11] overflow-hidden mb-6 border border-[#382B25]/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#382B25]/90 text-[#F5F0E6] text-[9px] tracking-widest uppercase px-2 py-1 font-mono">
                    {item.category}
                  </div>
                </div>

                <h3 className="font-editorial text-2xl text-[#382B25] font-light mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#382B25]/80 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Technical highlights */}
                <ul className="space-y-1.5 border-t border-[#382B25]/10 pt-4 mb-6">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[#382B25]/70">
                      <Check className="w-3.5 h-3.5 text-[#382B25] flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenPlanner(`Rental: ${item.title}`)}
                className="w-full py-3 border border-[#382B25]/20 text-[11px] font-semibold tracking-widest uppercase text-[#382B25] group-hover:bg-[#382B25] group-hover:text-[#F5F0E6] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>REQUEST AVAILABILITY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
