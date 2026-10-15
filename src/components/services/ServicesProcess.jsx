import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServicesProcess({ onOpenPlanner }) {
  const { process } = SERVICES_DATA;

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#382B25]" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
                {process.label}
              </span>
              <span className="w-12 h-[1px] bg-[#382B25]/25" />
            </motion.div>

            <motion.h2
              id="process-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-[#382B25]"
            >
              <span>You bring the reason. </span>
              <br className="hidden sm:block" />
              <span className="italic font-normal text-[#382B25]/90">
                We bring the rest.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="shrink-0"
          >
            <button
              type="button"
              onClick={() => onOpenPlanner && onOpenPlanner()}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#251C17] transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>{process.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>

        {/* Desktop: One Continuous Horizontal Line (No Boxes!) */}
        <div className="relative hidden lg:block pt-16">
          {/* Continuous Architectural Horizontal Line */}
          <div className="absolute top-16 left-0 right-0 h-[1px] bg-[#382B25]/25" />

          <div className="grid grid-cols-4 gap-12 relative">
            {process.steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-8"
              >
                {/* Node Indicator on the Line */}
                <div className="absolute top-[-4.5px] left-0 w-2.5 h-2.5 rounded-full bg-[#382B25] ring-4 ring-[#F5F0E6]" />

                {/* Oversized Partially Transparent Number */}
                <span className="font-editorial text-7xl xl:text-8xl font-light text-[#382B25]/15 select-none block leading-none mb-3">
                  {step.num}
                </span>

                {/* Step Title */}
                <h3 className="font-mono text-sm tracking-[0.2em] font-semibold uppercase text-[#382B25] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#382B25]/80 font-light leading-relaxed pr-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: Refined Continuous Vertical Line Sequence */}
        <div className="lg:hidden relative pl-8 border-l border-[#382B25]/25 space-y-12">
          {process.steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot on the Vertical Line */}
              <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[#382B25] ring-4 ring-[#F5F0E6]" />

              <span className="font-editorial text-5xl font-light text-[#382B25]/20 select-none block leading-none mb-2">
                {step.num}
              </span>

              <h3 className="font-mono text-xs tracking-[0.2em] font-semibold uppercase text-[#382B25] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#382B25]/80 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
