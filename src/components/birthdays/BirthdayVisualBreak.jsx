import React from 'react';
import { motion } from 'framer-motion';

export default function BirthdayVisualBreak() {
  return (
    <section className="relative h-[65vh] min-h-[440px] max-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Candid Photograph */}
      <div className="absolute inset-0">
        <img
          src="/assets/kids.webp"
          alt="Children smiling candidly around a festive birthday table with candles and party hats"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Subtle Dark Vignette / Espresso Overlay */}
        <div className="absolute inset-0 bg-[#382B25]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#382B25]/85 via-transparent to-[#382B25]/50" />
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F5F0E6]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#FFE600] mb-4"
        >
          YELLOW SPRINGS / CELEBRATION PHILOSOPHY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.98] text-[#F5F0E6]"
        >
          “The serious business
          <br />
          <span className="italic">of having fun.”</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-xs sm:text-sm md:text-base text-[#F5F0E6]/80 font-light max-w-lg mx-auto leading-relaxed"
        >
          Behind every effortless smile is a coordinated crew managing timings, sound, safety, and every sweet detail.
        </motion.p>
      </div>
    </section>
  );
}
