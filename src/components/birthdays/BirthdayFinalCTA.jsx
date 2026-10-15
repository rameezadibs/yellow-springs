import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../../data/content';

export default function BirthdayFinalCTA({ onPlanParty }) {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    'Hello Yellow Springs! 🎈 I would like to inquire about your Birthday Party Packages for an upcoming celebration.'
  )}`;

  return (
    <section className="relative py-24 sm:py-32 md:py-40 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#382B25]/70">
                READY TO CELEBRATE?
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.02] tracking-tight mb-8"
            >
              Someone has
              <br />
              a birthday coming up?
              <br />
              <span className="italic font-normal">
                Let’s make it one they’ll talk about all year.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#382B25]/80 font-light leading-relaxed max-w-xl mb-10"
            >
              Tell us the date, your child’s dream theme, and the venue. Our team will coordinate every balloon, performer, sweet treat, and safety detail.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={onPlanParty}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all group cursor-pointer shadow-sm"
              >
                <span>PLAN THE PARTY</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 border border-[#382B25]/25 text-[#382B25] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#382B25]/5 hover:border-[#382B25] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP US</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Partial Overlapping Candid Event Image */}
          <div className="lg:col-span-4 relative hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden shadow-[0_16px_40px_rgba(56,43,37,0.12)] border border-[#382B25]/20 bg-[#FAF7F0] p-2"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/assets/birthday_magic.jpg"
                  alt="Children smiling at entertainer during party"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#382B25]/90 text-[#F5F0E6] p-3 text-[10px] tracking-widest uppercase font-mono">
                  <span>YELLOW SPRINGS EVENTS</span>
                  <div className="text-[#FFE600] font-bold mt-0.5">UAE WIDE BIRTHDAYS</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
