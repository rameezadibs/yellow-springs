import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { BRAND } from '../../data/content';

export default function ServicesFinalCTA({ onOpenPlanner }) {
  const { finalCta } = SERVICES_DATA;

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    "Hello Yellow Springs! I'm reviewing your Services page and would like help identifying the right services and production scope for my event."
  )}`;

  return (
    <section
      id="services-final-cta"
      aria-labelledby="services-final-cta-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#F5F0E6]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Huge Ivory Typography & Dual CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-3.5 py-1 border border-[#F5F0E6]/20 bg-[#251C17]/40 mb-6 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F5F0E6]/80 font-semibold">
                {finalCta.coverageTag}
              </span>
            </motion.div>

            {/* Very Large Headline */}
            <motion.div
              id="services-final-cta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.05] tracking-tight text-[#F5F0E6]">
                <span>{finalCta.headlineLine1} </span>
                <br />
                <span>{finalCta.headlineLine2}</span>
              </h2>

              <p className="font-editorial italic text-3xl sm:text-4xl md:text-5xl text-[#FFE600] mt-3 sm:mt-4 font-normal">
                {finalCta.answerLine}
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#F5F0E6]/85 font-light leading-relaxed max-w-xl"
            >
              {finalCta.supportingText}
            </motion.p>

            {/* Dual CTAs: Primary & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner()}
                className="group px-9 py-4 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#FFE600] transition-colors duration-300 inline-flex items-center justify-center gap-3 shadow-lg cursor-pointer"
              >
                <span>{finalCta.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#F5F0E6]/30 text-[#F5F0E6] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#F5F0E6]/10 hover:border-[#FFE600] hover:text-[#FFE600] transition-all duration-300 inline-flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{finalCta.secondaryCta}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Abstract Petal Linework Drawing Inspired by Yellow Springs Flower (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] flex items-center justify-center select-none pointer-events-none">
              
              {/* Subtle Glowing Center Ambient Radiance */}
              <div className="absolute w-44 h-44 rounded-full bg-[#FFE600]/10 blur-3xl" />

              {/* Geometric Abstract Petal SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full stroke-current fill-none text-[#F5F0E6]/30"
              >
                {/* Petal Curves */}
                <path
                  d="M 200 40 C 230 110, 290 170, 360 200 C 290 230, 230 290, 200 360 C 170 290, 110 230, 40 200 C 110 170, 170 110, 200 40 Z"
                  strokeWidth="0.8"
                />
                <path
                  d="M 200 80 C 220 130, 270 180, 320 200 C 270 220, 220 270, 200 320 C 180 270, 130 220, 80 200 C 130 180, 180 130, 200 80 Z"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                />

                {/* Concentric Geometric Rings */}
                <circle cx="200" cy="200" r="140" strokeWidth="0.5" strokeOpacity="0.4" />
                <circle cx="200" cy="200" r="90" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="200" cy="200" r="40" stroke="#FFE600" strokeWidth="1" strokeOpacity="0.7" />

                {/* Crosshairs & Compass Coordinates */}
                <line x1="200" y1="20" x2="200" y2="380" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.2" />
                <line x1="20" y1="200" x2="380" y2="200" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.2" />
              </svg>

              {/* Core Badge */}
              <div className="absolute text-center bg-[#251C17]/90 px-4 py-2 border border-[#FFE600]/30 shadow-lg">
                <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#FFE600] block">
                  ONE ROOF
                </span>
                <span className="font-editorial text-sm font-light text-[#F5F0E6]">
                  UAE PRODUCTION
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
