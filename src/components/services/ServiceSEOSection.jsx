import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, ShieldCheck, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../../data/content';

/**
 * ServiceSEOSection
 * Renders an SEO-rich, luxury-styled module containing:
 * 1. Frequently Asked Questions with interactive accordion (backed by FAQPage schema)
 * 2. Geographical coverage & prestigious UAE venues served
 * 3. Verified credentials (DTCM licensed, Civil Defence compliant, in-house fleet)
 */
export default function ServiceSEOSection({
  serviceKey,
  seoData,
  onOpenPlanner,
  showCredentials = true,
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!seoData) return null;

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  const whatsappInquiryUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello Yellow Springs! I am reviewing your ${seoData.serviceType} services in Dubai & UAE. I would like to consult on an upcoming event.`
  )}`;

  return (
    <section className={`bg-[#FAF7F0] text-[#382B25] border-b border-[#382B25]/15 ${showCredentials ? 'py-20 sm:py-28' : 'py-12 sm:py-16'} px-6 sm:px-10 lg:px-14`}>
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* 1. TOP CREDENTIALS & PILLARS GRID                                         */}
        {/* ========================================================================= */}
        {showCredentials && (
          <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs tracking-[0.28em] text-[#382B25]/70 uppercase block mb-3 font-semibold">
                WHY CHOOSE YELLOW SPRINGS // UAE EXCELLENCE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#382B25]">
                Engineered for <span className="italic">perfection &amp; compliance</span>.
              </h2>
            </div>
            <p className="text-sm text-[#382B25]/75 font-light max-w-md leading-relaxed">
              15+ years of turnkey event production in Dubai, Abu Dhabi, and across the UAE with zero third-party dependency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoData.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-6 bg-[#F5F0E6] border border-[#382B25]/15 flex flex-col justify-between hover:border-[#382B25]/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#382B25]/40">
                      // 0{i + 1}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#382B25]/60" />
                  </div>
                  <h3 className="font-mono text-sm tracking-wider uppercase font-semibold text-[#382B25] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#382B25]/75 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#382B25]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#382B25]/60 uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3 text-[#382B25]" />
                  <span>DIRECT IN-HOUSE EXECUTION</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* ========================================================================= */}
        {/* 2. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)                             */}
        {/* ========================================================================= */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 ${showCredentials ? 'pt-16 border-t border-[#382B25]/15' : 'pt-2'}`}>
          
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.28em] text-[#382B25]/70 uppercase block mb-3 font-semibold">
              FAQ // FREQUENT INQUIRIES
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#382B25] mb-6">
              Answers for discerning hosts.
            </h2>
            <p className="text-sm text-[#382B25]/80 font-light leading-relaxed mb-8">
              Everything you need to know about timelines, venue permits, in-house technical inventory, and booking our team in Dubai and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenPlanner && onOpenPlanner(seoData.serviceType)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase hover:bg-[#251C17] transition-all cursor-pointer shadow-md"
              >
                <span>CONSULT A PRODUCER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#382B25]/30 text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:border-[#382B25] hover:bg-[#382B25]/5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP DESK</span>
              </a>
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="lg:col-span-7 divide-y divide-[#382B25]/15 border-y border-[#382B25]/15">
            {seoData.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-4 py-1 cursor-pointer group"
                  >
                    <span className="font-mono text-sm sm:text-base font-semibold tracking-wide text-[#382B25] group-hover:text-[#382B25]/80 transition-colors">
                      {faq.q}
                    </span>
                    <span className={`p-1 border border-[#382B25]/20 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#382B25] text-[#F5F0E6]' : 'text-[#382B25]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pb-2 text-xs sm:text-sm text-[#382B25]/80 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. VENUES & GEOGRAPHICAL COVERAGE (LOCAL SEO AUTHORITY)                   */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-[#382B25]/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#382B25]" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#382B25]">
                COVERAGE &amp; VENUES SERVED ACROSS DUBAI &amp; THE UAE
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#382B25]/60">
              DUBAI • ABU DHABI • SHARJAH • RAS AL KHAIMAH
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {seoData.venuesServed.map((venue) => (
              <span
                key={venue}
                className="text-xs font-mono tracking-wider px-3 py-1.5 bg-[#F5F0E6] border border-[#382B25]/15 text-[#382B25]/85"
              >
                {venue}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
