import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';

export default function ServicesConnected() {
  const { connected } = SERVICES_DATA;

  return (
    <section
      id="connected-capabilities"
      aria-labelledby="connected-heading"
      className="relative bg-[#382B25] text-[#F5F0E6] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 border-t border-[#F5F0E6]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3.5 mb-5 px-3.5 py-1 border border-[#F5F0E6]/20 bg-[#251C17]/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.28em] text-[#F5F0E6]/85 font-semibold uppercase">
              {connected.label}
            </span>
          </motion.div>

          <motion.h2
            id="connected-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F5F0E6]"
          >
            {connected.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#F5F0E6]/85 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {connected.statement}
          </motion.p>
        </div>

        {/* Constellation Canvas with Animated Connecting Hairlines */}
        <div className="relative max-w-5xl mx-auto min-h-[420px] sm:min-h-[500px] flex items-center justify-center p-4">
          
          {/* Central Hub Emblem: YELLOW SPRINGS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#FFE600]/40 bg-[#251C17] shadow-[0_0_50px_rgba(255,230,0,0.08)] flex flex-col items-center justify-center text-center p-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFE600] mb-2 animate-pulse" />
            <span className="font-editorial text-lg sm:text-xl font-light tracking-wider text-[#F5F0E6] uppercase leading-tight">
              YELLOW
              <br />
              SPRINGS
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#FFE600] mt-1.5">
              SINGLE CORE TEAM
            </span>
          </motion.div>

          {/* SVG Animated Curved Connecting Lines (Desktop / Tablet) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 800 500"
            fill="none"
          >
            {/* Center is (400, 250) */}
            {/* Line to Top Left: Engagements & Weddings (150, 90) */}
            <motion.path
              d="M 400 250 C 300 200, 220 140, 150 90"
              stroke="#F5F0E6"
              strokeWidth="0.85"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Line to Top Right: Corporate Events (650, 90) */}
            <motion.path
              d="M 400 250 C 500 200, 580 140, 650 90"
              stroke="#F5F0E6"
              strokeWidth="0.85"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.15, ease: 'easeInOut' }}
            />

            {/* Line to Bottom Left: AV & Sound (160, 410) */}
            <motion.path
              d="M 400 250 C 310 290, 230 350, 160 410"
              stroke="#F5F0E6"
              strokeWidth="0.85"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />

            {/* Line to Bottom Right: Artist Management (640, 410) */}
            <motion.path
              d="M 400 250 C 490 290, 570 350, 640 410"
              stroke="#F5F0E6"
              strokeWidth="0.85"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.45, ease: 'easeInOut' }}
            />

            {/* Line to Top Center / Bottom Center: Rentals (400, 450) */}
            <motion.path
              d="M 400 250 L 400 450"
              stroke="#FFE600"
              strokeWidth="0.85"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.45 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
            />
          </svg>

          {/* Desktop Constellation Nodes Positioned Around Hub */}
          <div className="hidden md:block">
            {/* 01: Top Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.4 }}
              className="absolute top-8 left-4 lg:left-8 p-4 bg-[#251C17] border border-[#F5F0E6]/20 max-w-[220px]"
            >
              <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase block mb-1">
                01 // SENSORY
              </span>
              <strong className="font-mono text-xs uppercase tracking-wider text-[#F5F0E6] block">
                ENGAGEMENTS &amp; WEDDINGS
              </strong>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Atmosphere, styling &amp; human pacing
              </span>
            </motion.div>

            {/* 02: Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.5 }}
              className="absolute top-8 right-4 lg:right-8 p-4 bg-[#251C17] border border-[#F5F0E6]/20 max-w-[220px] text-right"
            >
              <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase block mb-1">
                02 // SCALE
              </span>
              <strong className="font-mono text-xs uppercase tracking-wider text-[#F5F0E6] block">
                CORPORATE EVENTS
              </strong>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Keynotes, galas &amp; brand launches
              </span>
            </motion.div>

            {/* 03: Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.6 }}
              className="absolute bottom-8 left-4 lg:left-8 p-4 bg-[#251C17] border border-[#F5F0E6]/20 max-w-[220px]"
            >
              <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase block mb-1">
                03 // RIGGING
              </span>
              <strong className="font-mono text-xs uppercase tracking-wider text-[#F5F0E6] block">
                AV &amp; SOUND PRODUCTION
              </strong>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Acoustic line arrays &amp; DMX lighting
              </span>
            </motion.div>

            {/* 04: Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.7 }}
              className="absolute bottom-8 right-4 lg:right-8 p-4 bg-[#251C17] border border-[#F5F0E6]/20 max-w-[220px] text-right"
            >
              <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase block mb-1">
                04 // TALENT
              </span>
              <strong className="font-mono text-xs uppercase tracking-wider text-[#F5F0E6] block">
                ARTIST MANAGEMENT
              </strong>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Musicians, international DJs &amp; hosts
              </span>
            </motion.div>

            {/* 05: Bottom Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.8 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#251C17] border border-[#FFE600]/30 text-center"
            >
              <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase">
                05 // RENTALS: PROPRIETARY WAREHOUSE ASSETS
              </span>
            </motion.div>
          </div>

          {/* Mobile Linear Fallback List */}
          <div className="md:hidden mt-8 w-full space-y-3">
            {connected.nodes.map((node, idx) => (
              <div key={node.id} className="p-4 bg-[#251C17] border border-[#F5F0E6]/15 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#FFE600] tracking-widest uppercase block">
                    0{idx + 1} // CAPABILITY
                  </span>
                  <span className="font-mono text-xs text-[#F5F0E6] font-medium block mt-0.5">
                    {node.label}
                  </span>
                </div>
                <span className="text-xs text-[#F5F0E6]/60 font-light">
                  {node.desc}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Reassurance Footer Footnote */}
        <div className="mt-16 pt-8 border-t border-[#F5F0E6]/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F5F0E6]/60 tracking-wider gap-4">
          <span>ZERO OUTSOURCING FRICTION</span>
          <span>DIRECT CREATIVE &amp; TECHNICAL CHANNELS</span>
          <span>100% ACCOUNTABLE EXECUTION</span>
        </div>

      </div>
    </section>
  );
}
