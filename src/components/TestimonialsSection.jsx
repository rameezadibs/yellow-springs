import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];
  const nextItem = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(TESTIMONIALS.length).padStart(2, '0');

  return (
    <section className="relative bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 md:px-12 border-b border-[#382B25]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#382B25]/15 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#382B25]/60">07</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#382B25]">
              VERIFIED GOOGLE REVIEWS • CLIENT VOICES
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#382B25]/60">
              {formattedIndex} / {formattedTotal}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 border border-[#382B25]/20 hover:bg-[#382B25] hover:text-[#F5F0E6] transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 border border-[#382B25]/20 hover:bg-[#382B25] hover:text-[#F5F0E6] transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Editorial Presentation: One Prominent in Focus, Next subtly visible */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Prominent Testimonial (8 cols) */}
          <div className="lg:col-span-8 relative">
            <div className="flex items-center justify-between mb-6">
              <Quote className="w-12 h-12 text-[#382B25]/15 stroke-[1]" />
              
              {/* Stars & Rating */}
              <div className="flex items-center gap-1 bg-[#FAF7F0] px-3 py-1.5 border border-[#382B25]/10 rounded-full">
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
                <span className="text-[11px] font-semibold text-[#382B25] ml-1.5 font-mono">5.0</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-light leading-[1.3] text-[#382B25] tracking-tight">
                  “{current.quote}”
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#382B25]/15">
                  <div>
                    <div className="flex items-center gap-2">
                      {current.link ? (
                        <a
                          href={current.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-editorial text-xl font-medium text-[#382B25] hover:underline flex items-center gap-1.5 group"
                        >
                          {current.client}
                          <ExternalLink className="w-3.5 h-3.5 text-[#382B25]/40 group-hover:text-[#382B25] transition-colors" />
                        </a>
                      ) : (
                        <span className="font-editorial text-xl font-medium text-[#382B25]">
                          {current.client}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#382B25]/70 font-light block mt-0.5">
                      {current.title}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] tracking-widest uppercase text-[#382B25]/50 block font-semibold">
                      EVENT & TIMELINE
                    </span>
                    <span className="text-xs font-medium text-[#382B25]">
                      {current.event} • {current.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Secondary Subtly Moving Preview (4 cols) */}
          <div
            onClick={nextTestimonial}
            className="lg:col-span-4 cursor-pointer p-8 bg-[#FAF7F0] border border-[#382B25]/15 shadow-sm hover:border-[#382B25] transition-all duration-300 opacity-80 hover:opacity-100 hidden lg:block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] tracking-widest uppercase text-[#382B25]/50 font-semibold">
                NEXT PERSPECTIVE ↗
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
            </div>
            <p className="font-editorial italic text-base text-[#382B25]/85 line-clamp-4 leading-relaxed mb-6">
              “{nextItem.quote}”
            </p>
            <div className="border-t border-[#382B25]/10 pt-4">
              <span className="text-xs font-semibold text-[#382B25] block">{nextItem.client}</span>
              <span className="text-[11px] text-[#382B25]/60 block">{nextItem.event}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
