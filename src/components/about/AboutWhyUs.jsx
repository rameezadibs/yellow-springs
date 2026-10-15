import React from 'react';
import { motion } from 'framer-motion';
import { Star, Cpu, HeartHandshake, ShieldCheck } from 'lucide-react';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutWhyUs() {
  const { whyUs } = ABOUT_DATA;
  const [d1, d2, d3] = whyUs.distinctions;

  const cardConfigs = [
    {
      data: d1,
      theme: 'light',
      bgClass: 'bg-[#FAF7F0] text-[#382B25] border-[#382B25]/20 hover:border-[#382B25]/50 shadow-[0_16px_45px_rgba(56,43,37,0.08)]',
      icon: Star,
      iconColor: 'text-[#382B25]',
      badgeBg: 'bg-[#251C17]/80 text-[#F5F0E6] border-[#F5F0E6]/25',
      pillBg: 'bg-[#382B25]/5 border-[#382B25]/15 text-[#382B25]/85',
      accentTag: 'DUBAI · UAE',
      tagColor: 'text-[#382B25]',
      tagBg: 'bg-[#F5F0E6]/95 border-[#382B25]/20',
      numColor: 'text-[#382B25]/40',
    },
    {
      data: d2,
      theme: 'dark',
      bgClass: 'bg-[#382B25] text-[#F5F0E6] border-[#F5F0E6]/20 hover:border-[#FFE600]/50 shadow-[0_22px_55px_rgba(56,43,37,0.22)]',
      icon: Cpu,
      iconColor: 'text-[#FFE600]',
      badgeBg: 'bg-[#251C17]/85 text-[#F5F0E6] border-[#FFE600]/40',
      pillBg: 'bg-[#F5F0E6]/10 border-[#F5F0E6]/20 text-[#F5F0E6]/90',
      accentTag: 'DIRECT ASSETS',
      tagColor: 'text-[#FFE600]',
      tagBg: 'bg-[#251C17]/90 border-[#FFE600]/30',
      numColor: 'text-[#FFE600]/60',
    },
    {
      data: d3,
      theme: 'sand',
      bgClass: 'bg-[#ECE5D8] text-[#382B25] border-[#382B25]/20 hover:border-[#382B25]/50 shadow-[0_16px_45px_rgba(56,43,37,0.08)]',
      icon: HeartHandshake,
      iconColor: 'text-[#382B25]',
      badgeBg: 'bg-[#251C17]/80 text-[#F5F0E6] border-[#F5F0E6]/25',
      pillBg: 'bg-[#382B25]/5 border-[#382B25]/15 text-[#382B25]/85',
      accentTag: 'ZERO HANDOFFS',
      tagColor: 'text-[#382B25]',
      tagBg: 'bg-[#F5F0E6]/95 border-[#382B25]/20',
      numColor: 'text-[#382B25]/40',
    },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER                                                       */}
        {/* ========================================================================= */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 mb-4 sm:mb-5"
          >
            <span className="font-mono text-xs tracking-[0.28em] text-[#382B25]/60 font-semibold uppercase">
              {whyUs.sectionNum} // {whyUs.sectionLabel}
            </span>
            <span className="w-10 h-[1px] bg-[#382B25]/25" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 bg-[#382B25]/5 border border-[#382B25]/10 text-[#382B25]/70 hidden sm:inline-block">
              THREE NON-NEGOTIABLE STANDARDS
            </span>
          </motion.div>

          {/* Grand Headline with Editorial Contrast */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h2
              id="why-us-heading"
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-light leading-[1.08] text-[#382B25]"
            >
              <span>{whyUs.headlineLine1} </span>
              <span>{whyUs.headlineLine2}</span>
              <br className="hidden sm:block" />
              <span className="font-editorial italic font-normal text-[#382B25]/90">
                {' '}{whyUs.headlineEmphasized}
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#382B25]/75 font-light leading-relaxed max-w-2xl">
              {whyUs.subhead}
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE THREE-PILLAR ARCHITECTURAL TRIPTYCH (BALANCED & CINEMATIC)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8 items-stretch">
          {cardConfigs.map((cfg, idx) => {
            const Icon = cfg.icon;
            const { data } = cfg;

            return (
              <motion.article
                key={data.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`border flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 ${cfg.bgClass}`}
              >
                {/* Visual Header Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#251C17]">
                  <img
                    src={data.image}
                    alt={data.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Top Eyebrow Badge Strip */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 backdrop-blur-md border flex items-center gap-2 ${cfg.badgeBg}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />
                      {data.num} // {data.tag}
                    </span>

                    <span
                      className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border ${cfg.tagBg} ${cfg.tagColor}`}
                    >
                      {cfg.accentTag}
                    </span>
                  </div>

                  {/* Bottom In-Image Tag */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[#F5F0E6]">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F5F0E6]/80 font-medium">
                      {data.label}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-[#F5F0E6]/60">
                      FIG. 3.{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Editorial Content Block */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row with Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs tracking-[0.25em] font-semibold ${cfg.numColor}`}>
                        STANDARD // 0{idx + 1}
                      </span>
                      <Icon className={`w-4 h-4 ${cfg.iconColor}`} />
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-[1.75rem] font-light leading-snug tracking-tight">
                      {data.title}
                    </h3>

                    <p className="mt-3.5 text-sm sm:text-[0.95rem] font-light leading-relaxed opacity-85">
                      {data.description}
                    </p>
                  </div>

                  {/* Lower Meta Block: Metric Pills & Footnote */}
                  <div className="mt-7 pt-5 border-t border-current/15">
                    {/* Metric Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {data.pills.map((pill) => (
                        <span
                          key={pill}
                          className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 border ${cfg.pillBg}`}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Poetic Footnote */}
                    <p className="font-editorial italic text-sm sm:text-base leading-snug opacity-75">
                      {data.footnote}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. REASSURANCE STRIP (BOTTOM METRIC SEAL)                                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-14 pt-6 pb-4 border-t border-b border-[#382B25]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#382B25]/15"
        >
          {whyUs.assurances.map((item) => (
            <div key={item.label} className="pt-4 sm:pt-0 sm:px-6 first:pt-0">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#382B25]/60 block mb-1">
                {item.label}
              </span>
              <p className="font-editorial text-lg sm:text-xl font-light text-[#382B25] tracking-wide flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#382B25]/60 shrink-0 inline-block" />
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
