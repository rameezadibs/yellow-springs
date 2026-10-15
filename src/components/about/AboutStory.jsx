import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../../data/aboutData';

export default function AboutStory() {
  const { story } = ABOUT_DATA;

  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative bg-[#F5F0E6] text-[#382B25] py-24 md:py-32 px-6 sm:px-10 lg:px-14 border-t border-[#382B25]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#382B25]/60 font-medium">
            {story.sectionNum} / {story.sectionLabel}
          </span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-[#382B25]/20" />
        </motion.div>

        {/* Storytelling Composition: Left Large Typography, Right Narrow Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 lg:mb-28">
          {/* Left: Dominant Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2
              id="our-story-heading"
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.12] text-[#382B25]"
            >
              {story.statement}
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#382B25]/30" />
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#382B25]/60">
                FOUNDED ON EMPATHY &amp; SCALE · UAE
              </p>
            </div>
          </motion.div>

          {/* Right: Narrow Column of Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-[#382B25]/15"
          >
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base sm:text-lg leading-relaxed text-[#382B25]/85 font-light ${
                  index === 0 ? 'font-normal text-[#382B25]' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-[#382B25]/10 flex items-center justify-between text-[11px] font-mono text-[#382B25]/50 tracking-wider">
              <span>ESTABLISHED IN THE UAE</span>
              <span>15+ YEARS OF CONTINUITY</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Bleed Photograph Breaking Outside Normal Content Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12"
      >
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-[#382B25]/20 shadow-[0_24px_60px_rgba(56,43,37,0.14)] bg-[#251C17] group">
          <img
            src={story.wideImage.src}
            alt={story.wideImage.alt}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
            loading="lazy"
          />

          {/* Editorial Gradient & Frame Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/75 via-transparent to-transparent pointer-events-none" />

          {/* Asymmetrical Caption Tag */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-lg bg-[#F5F0E6]/95 backdrop-blur-sm border border-[#382B25]/20 py-2 px-4 shadow-sm">
            <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#382B25]">
              {story.wideImage.caption}
            </p>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:block bg-[#251C17]/80 text-[#F5F0E6] px-3 py-1 font-mono text-[10px] tracking-widest uppercase border border-[#F5F0E6]/20">
            CINEMATIC PRODUCTION
          </div>
        </div>
      </motion.div>
    </section>
  );
}
