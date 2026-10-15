import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/content';

const WORLDS = [
  { num: '01', label: 'Engagements & Weddings' },
  { num: '02', label: 'Corporate Events' },
  { num: '03', label: 'AV & Sound Rentals' },
  { num: '04', label: 'Artist Management' },
  { num: '05', label: 'Luxury Event Rentals' },
  { num: '06', label: 'Birthday Experiences' },
];

export default function ServicesPage({ onOpenPlanner }) {
  const whatsappNum = BRAND?.whatsapp ? BRAND.whatsapp.replace(/\D/g, '') : '';
  const whatsappUrl = whatsappNum
    ? `https://wa.me/${whatsappNum}?text=${encodeURIComponent("Hi! I'd like to learn more about your services.")}`
    : 'https://wa.me/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Services — Coming Soon | Yellow Springs UAE';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Yellow Springs Services page is coming soon. Reach out directly to start planning your perfect event in Dubai and UAE.'
      );
    }
  }, []);

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] min-h-screen selection:bg-[#382B25] selection:text-[#F5F0E6] relative overflow-hidden flex flex-col">

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 overflow-hidden"
      >
        <span
          className="text-[#382B25] font-serif select-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            fontWeight: 300,
            opacity: 0.038,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          SOON
        </span>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-32 sm:py-40 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2.5 px-4 py-2 border border-[#382B25]/20 bg-white/60 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#382B25]/70 font-sans">
            Page Under Construction
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[#382B25] leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)', fontWeight: 300 }}
        >
          Something<br />
          <em style={{ fontStyle: 'italic' }}>beautiful</em><br />
          is coming.
        </motion.h1>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-[#382B25]/65 text-sm sm:text-base font-light leading-relaxed mb-14"
        >
          We&apos;re crafting a full showcase of our six event worlds.
          In the meantime, we&apos;re fully operational — just reach out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <button
            id="services-open-planner"
            onClick={() => onOpenPlanner && onOpenPlanner('')}
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold uppercase tracking-widest hover:bg-[#251C17] transition-colors duration-300 cursor-pointer"
          >
            <span>Start Planning</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            id="services-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-3.5 border border-[#382B25]/30 text-[#382B25] text-xs font-semibold uppercase tracking-widest hover:border-[#382B25] hover:bg-[#382B25]/5 transition-all duration-300"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Six Worlds Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="w-full max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#382B25]/40 mb-6 font-sans">
            Six Event Worlds — Coming Soon
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[#382B25]/10 bg-[#382B25]/10">
            {WORLDS.map((world, i) => (
              <motion.div
                key={world.num}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                className="relative bg-[#F5F0E6] px-5 py-5 flex items-start gap-3"
              >
                <span className="text-[10px] font-mono text-[#382B25]/30 mt-0.5 shrink-0">{world.num}</span>
                <span className="text-xs font-medium text-[#382B25]/55 leading-snug text-left">
                  {world.label}
                </span>
                <span className="absolute top-2 right-2 text-[8px] uppercase tracking-wider bg-[#382B25]/8 text-[#382B25]/35 px-1.5 py-0.5 font-medium hidden sm:block">
                  Soon
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 border-t border-[#382B25]/10 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[#382B25]/35 uppercase tracking-wider"
      >
        <span>Yellow Springs — UAE Event Production</span>
        <span className="hidden sm:block">Services Page · Under Construction</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </motion.div>

    </div>
  );
}
