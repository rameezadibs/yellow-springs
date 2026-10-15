import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Compass, 
  Sliders, 
  FileText, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';
import { BRAND } from '../../data/content';

// Category Icon Mapping
const getCategoryIcon = (category) => {
  switch (category) {
    case 'TIMELINES': return Clock;
    case 'REGULATORY': return ShieldCheck;
    case 'SCENOGRAPHY': return Compass;
    case 'ACCOUNTABILITY': return CheckCircle2;
    case 'PRODUCTION FLEET': return Sliders;
    default: return FileText;
  }
};

export default function AboutFAQ({ onOpenPlanner }) {
  const { faq } = ABOUT_DATA;
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedFaqId, setSelectedFaqId] = useState(faq.items[0].id);

  const categories = ['ALL', 'TIMELINES', 'REGULATORY', 'SCENOGRAPHY', 'ACCOUNTABILITY', 'FLEET'];

  const filteredItems = activeTab === 'ALL' 
    ? faq.items 
    : faq.items.filter(item => {
        if (activeTab === 'FLEET') return item.category.includes('FLEET');
        return item.category === activeTab;
      });

  const activeFaq = faq.items.find(item => item.id === selectedFaqId) || faq.items[0];

  const whatsappInquiryUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello Yellow Springs! Regarding: "${activeFaq.question}" — I'd like to consult on an event in the UAE.`
  )}`;

  const ActiveIcon = getCategoryIcon(activeFaq.category);

  // Embedded Schema.org JSON-LD Structured Data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="about-faq"
      aria-labelledby="faq-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/15 overflow-hidden"
    >
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER & METADATA BAR                                         */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 mb-4"
            >
              <span className="font-mono text-xs tracking-[0.28em] text-[#382B25]/60 font-semibold uppercase">
                {faq.sectionNum} // {faq.sectionLabel}
              </span>
              <span className="w-10 h-[1px] bg-[#382B25]/25" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 bg-[#382B25]/5 border border-[#382B25]/10 text-[#382B25]/70">
                HOST INTEL · UAE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-light leading-[1.06] text-[#382B25]"
            >
              <span>{faq.headlineLine1} </span>
              <span className="font-editorial italic font-normal text-[#382B25]/90">
                {faq.headlineEmphasized}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-base sm:text-lg text-[#382B25]/75 font-light leading-relaxed"
            >
              {faq.subhead}
            </motion.p>
          </div>

          {/* Quick Stats Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden sm:flex items-center gap-6 py-3 px-5 border border-[#382B25]/20 bg-[#FAF7F0] shrink-0"
          >
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#382B25]/60 block">
                AVERAGE DISCOVERY RESPONSE
              </span>
              <p className="font-editorial text-xl font-light text-[#382B25] mt-0.5">
                Within 24 Hours
              </p>
            </div>
            <div className="w-[1px] h-8 bg-[#382B25]/15" />
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#382B25]/60 block">
                PERMIT APPROVAL RECORD
              </span>
              <p className="font-editorial text-xl font-light text-[#382B25] mt-0.5">
                100% Civil Defence Compliant
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORY FILTER PILL STRIP                                             */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none border-b border-[#382B25]/10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#382B25]/50 mr-2 shrink-0">
            FILTER PROTOCOLS:
          </span>
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] sm:text-xs font-mono tracking-wider uppercase px-3 py-1.5 transition-all duration-300 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25]'
                    : 'bg-[#FAF7F0]/60 text-[#382B25]/75 border-[#382B25]/15 hover:border-[#382B25]/40 hover:bg-[#FAF7F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE TWO-PANE EDITORIAL LEDGER (DESKTOP & RESPONSIVE MOBILE)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT LEDGER: DIRECTORY OF PROTOCOLS (5 COLS)                            */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {filteredItems.map((item) => {
              const isSelected = item.id === activeFaq.id;
              const ItemIcon = getCategoryIcon(item.category);

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFaqId(item.id)}
                  className={`group p-4 sm:p-4.5 border text-left cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FAF7F0] border-[#382B25] shadow-[0_12px_30px_rgba(56,43,37,0.07)] -translate-y-0.5'
                      : 'bg-[#FAF7F0]/40 border-[#382B25]/15 hover:bg-[#FAF7F0] hover:border-[#382B25]/35'
                  }`}
                >
                  {/* Active Indicator Bar on Edge */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFE600]" />
                  )}

                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-[#382B25]' : 'text-[#382B25]/40'}`}>
                        {item.num}
                      </span>
                      <span className="w-3.5 h-[1px] bg-[#382B25]/20" />
                      <span className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 border ${
                        isSelected 
                          ? 'bg-[#FFE600]/25 border-[#FFE600]/40 text-[#382B25] font-semibold' 
                          : 'border-[#382B25]/15 text-[#382B25]/60'
                      }`}>
                        {item.category}
                      </span>
                    </div>

                    <ItemIcon className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-[#382B25]' : 'text-[#382B25]/30 group-hover:text-[#382B25]/60'}`} />
                  </div>

                  <h3 className={`font-editorial text-base sm:text-[1.05rem] leading-snug transition-colors ${
                    isSelected ? 'text-[#382B25] font-normal' : 'text-[#382B25]/85 group-hover:text-[#382B25]'
                  }`}>
                    {item.question}
                  </h3>

                  {/* Inline preview indicator */}
                  <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono tracking-wider text-[#382B25]/50 pt-2 border-t border-[#382B25]/10">
                    <span className="uppercase">
                      {isSelected ? 'INSPECTING IN DETAIL' : 'TAP TO VIEW PROTOCOL'}
                    </span>
                    <ArrowUpRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-0.5 -translate-y-0.5 text-[#382B25]' : 'text-[#382B25]/40 group-hover:translate-x-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT CANVAS: EXPANDED VERIFIED INSIGHT CANVAS (7 COLS)                 */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="bg-[#382B25] text-[#F5F0E6] border border-[#F5F0E6]/15 p-6 sm:p-8 lg:p-9 shadow-[0_22px_55px_rgba(56,43,37,0.22)] flex flex-col relative overflow-hidden">
              
              {/* Subtle background monogram watermark */}
              <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-5 font-editorial text-[10rem] leading-none select-none text-[#F5F0E6]">
                {activeFaq.num}
              </div>

              <div>
                {/* Header Metadata Ribbon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F5F0E6]/15 mb-5">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="w-4 h-4 text-[#FFE600]" />
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#F5F0E6]/80 font-semibold">
                      VERIFIED DIRECTIVE // {activeFaq.category}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#FFE600] px-2.5 py-0.5 border border-[#FFE600]/30 bg-[#251C17]/50 font-semibold">
                    PROTOCOL {activeFaq.num}
                  </span>
                </div>

                {/* Animated Question & Clarification Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFaq.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#F5F0E6] leading-snug tracking-tight mb-4">
                      {activeFaq.question}
                    </h3>

                    {/* Architectural Divider */}
                    <div className="w-12 h-[2px] bg-[#FFE600] mb-4" />

                    {/* Authoritative Detailed Directive */}
                    <p className="text-base sm:text-[1.02rem] text-[#F5F0E6]/90 font-light leading-relaxed">
                      {activeFaq.answer}
                    </p>

                    {/* Operational Reassurance Badges */}
                    <div className="mt-6 pt-5 border-t border-[#F5F0E6]/15 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex items-start gap-3 p-3 bg-[#251C17]/50 border border-[#F5F0E6]/10">
                        <CheckCircle2 className="w-4 h-4 text-[#FFE600] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-mono text-[10px] uppercase tracking-wider text-[#F5F0E6] block">
                            Direct Execution Guarantee
                          </strong>
                          <span className="text-xs text-[#F5F0E6]/70 font-light block mt-0.5 leading-snug">
                            Executed with certified in-house technicians &amp; proprietary warehouse equipment.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#251C17]/50 border border-[#F5F0E6]/10">
                        <ShieldCheck className="w-4 h-4 text-[#FFE600] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-mono text-[10px] uppercase tracking-wider text-[#F5F0E6] block">
                            UAE Civil Compliance
                          </strong>
                          <span className="text-xs text-[#F5F0E6]/70 font-light block mt-0.5 leading-snug">
                            Fully compliant with Dubai Municipality &amp; Civil Defence safety standards.
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Interactive Inquiry Bar */}
              <div className="mt-6 pt-5 border-t border-[#F5F0E6]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F0E6]/70">
                  <HelpCircle className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>NEED A SPECIFIC CLARIFICATION?</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#FFE600] text-[#382B25] text-xs font-semibold tracking-wider uppercase hover:bg-white transition-colors duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>CONSULT FOUNDERS</span>
                  </a>

                  {onOpenPlanner && (
                    <button
                      type="button"
                      onClick={onOpenPlanner}
                      className="px-5 py-2.5 border border-[#F5F0E6]/30 text-[#F5F0E6] text-xs font-semibold tracking-wider uppercase hover:bg-[#F5F0E6]/10 transition-colors duration-300 cursor-pointer"
                    >
                      OPEN PLANNER
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. FOOTER ASSURANCE ACCREDITATION STRIP                                    */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#382B25]/15 flex flex-wrap items-center justify-between text-xs font-mono text-[#382B25]/60 gap-4">
          <span>NO TEMPLATE PROPOSALS · BESPOKE ARCHITECTURE FOR EVERY OCCASION</span>
          <span>DIRECT FOUNDING PARTNER ACCOUNTABILITY · 15+ YEARS IN THE EMIRATES</span>
          <span>DUBAI · ABU DHABI · RAS AL KHAIMAH · UAE</span>
        </div>
      </div>
    </section>
  );
}
