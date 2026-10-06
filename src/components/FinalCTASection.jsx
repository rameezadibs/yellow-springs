import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export default function FinalCTASection({ onOpenPlanner }) {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello Yellow Springs! I am interested in planning a luxury event in Dubai & the UAE.'
  )}`;

  return (
    <section
      id="contact"
      aria-label="Event Management & Production Contact Dubai UAE"
      className="relative bg-[#382B25] text-[#F5F0E6] pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-6 md:px-12 overflow-hidden border-b border-[#F5F0E6]/15"
    >
      {/* Subtle Oversized Petal Line Illustration from Logo */}
      <div className="absolute -bottom-24 -right-24 md:-bottom-32 md:-right-32 w-[550px] h-[550px] pointer-events-none opacity-10">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full stroke-current fill-none stroke-[0.8] text-[#F5F0E6]"
        >
          <path d="M 200 20 C 230 100, 300 170, 380 200 C 300 230, 230 300, 200 380 C 170 300, 100 230, 20 200 C 100 170, 170 100, 200 20 Z" />
          <path d="M 200 60 C 220 120, 280 180, 340 200 C 280 220, 220 280, 200 340 C 180 280, 120 220, 60 200 C 120 180, 180 120, 200 60 Z" />
          <circle cx="200" cy="200" r="45" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
        {/* SEO-Optimized Luxury Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.04] tracking-tight text-[#F5F0E6] mb-6"
        >
          Ready to Create an <br />
          <span className="italic font-normal text-[#E2D6C5]">
            Unforgettable Event in Dubai?
          </span>
        </motion.h2>

        {/* High-Impact SEO Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5F0E6]/85 max-w-2xl font-light leading-relaxed mb-10">
          Partner with Dubai’s premier event management & production company. 
          From turnkey corporate galas and luxury weddings to bespoke equipment rentals across Dubai, Abu Dhabi & the UAE.
        </p>

        {/* Actions: Matching Primary & Secondary Buttons (Identical Styling & Icons) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={onOpenPlanner}
            aria-label="Plan your event with Yellow Springs Dubai"
            className="w-full sm:w-auto px-9 py-4 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-[#FFE600] transition-colors duration-300 inline-flex items-center justify-center gap-3 shadow-lg group cursor-pointer"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Yellow Springs Event Managers"
            className="w-full sm:w-auto px-9 py-4 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-[#FFE600] transition-colors duration-300 inline-flex items-center justify-center gap-3 shadow-lg group cursor-pointer"
          >
            <span>WHATSAPP US</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* SEO Location & Direct Contact Reference */}
        <div className="mt-10 pt-6 border-t border-[#F5F0E6]/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5F0E6]/75">
          <span>DIRECT: {BRAND.phone}</span>
          <span>•</span>
          <span>EMAIL: {BRAND.email}</span>
          <span>•</span>
          <span>DUBAI, ABU DHABI & SHARJAH • UAE</span>
        </div>

      </div>
    </section>
  );
}
