import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Hero Component — Pixel-faithful to hero.png
   - Exact Dubai twilight pool banquet background
   - Organic ivory header canopy wave starting at x=30%
   - "EVENTS / PEOPLE / EXPERIENCES" in ivory wing
   - Large Cormorant Garamond headline with italic "Meaningful"
   - Slanted calligraphic "Your Event Buddies" in twilight sky
   - Bottom-right ivory service panel with tilted champagne coupe photo
   - Vertical 01 / 04 slide index with next button
   - Outlined circular Discover downward interaction
────────────────────────────────────────────────────────────── */
const EXPERIENCES = [
  {
    id: '01',
    category: 'LUXURY EXPERIENCES',
    detail: '/assets/hero-detail-champagne.jpg',
    detailAlt: 'Crystal champagne coupe toast in candlelight',
  },
  {
    id: '02',
    category: 'ROYAL WEDDINGS',
    detail: '/assets/wedding1.webp',
    detailAlt: 'Candlelit floral tablescape and glassware',
  },
  {
    id: '03',
    category: 'CORPORATE PRODUCTIONS',
    detail: '/assets/audio.webp',
    detailAlt: 'Architectural lighting and stage craft',
  },
  {
    id: '04',
    category: 'PRIVATE SOIRÉES',
    detail: '/assets/furniture.webp',
    detailAlt: 'Bespoke lounge styling and warm ambient setting',
  },
];

const SERVICES_LIST = [
  { name: 'CORPORATE EVENTS', active: true },
  { name: 'WEDDINGS', active: true },
  { name: 'PRIVATE CELEBRATIONS', active: true },
  { name: 'ARTIST MANAGEMENT', active: true },
  { name: 'EVENT RENTALS', active: true },
  { name: 'AND BEYOND', active: false },
];

export default function Hero({ onOpenPlanner }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length);
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentExp = EXPERIENCES[currentIndex];

  return (
    <section
      id="hero"
      aria-label="Yellow Springs — More Than Events"
      className="relative w-full h-screen min-h-[680px] max-h-[1050px] overflow-hidden select-none bg-[#160E0A]"
    >
      {/* ═════════════════════════════════════════════════════════════
          1. FULL-BLEED CINEMATIC PHOTOGRAPH
          Identical to hero.png: Dubai pool gala, Burj Khalifa,
          candles, white floral runners, draped canopies.
      ══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg-exact.jpg"
          alt="Yellow Springs Luxury Event UAE"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ═════════════════════════════════════════════════════════════
          2. LEFT-ONLY ESPRESSO BROWN GRADIENT
          Darkens only the left side for crisp headline readability;
          keeps the illuminated pool, stage, and skyline vibrant.
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(92deg, rgba(22,14,10,0.96) 0%, rgba(22,14,10,0.88) 26%, rgba(22,14,10,0.52) 48%, rgba(22,14,10,0.12) 64%, transparent 76%)',
        }}
      />
      {/* Subtle bottom grounding vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(22,14,10,0.6) 0%, transparent 28%)',
        }}
      />

      {/* ═════════════════════════════════════════════════════════════
          3. ORGANIC IVORY CANOPY WAVE (TOP HEADER ARCH)
          As seen in hero.png:
          - Starts at x ~ 30% leaving the logo on the left unobstructed
          - Sweeps across under the nav links and "PLAN AN EVENT" button
          - Curves downward on the far right behind EVENTS/PEOPLE/EXPERIENCES
      ══════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[140px] lg:h-[160px] z-[2] pointer-events-none">
        <svg
          viewBox="0 0 1600 160"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 440 0 C 580 95, 760 145, 1020 142 C 1260 138, 1400 55, 1490 42 C 1535 38, 1575 62, 1600 100 L 1600 0 Z"
            fill="#F4EFE6"
          />
        </svg>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          4. "EVENTS / PEOPLE / EXPERIENCES" (TOP RIGHT STACK)
          As seen in hero.png below the right wing of the ivory wave.
      ══════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex absolute top-[108px] lg:top-[118px] right-[3.8%] z-10 items-center gap-3 pointer-events-none">
        <div className="flex flex-col items-end gap-[3px]">
          <span className="font-sans text-[9.5px] tracking-[0.30em] text-[#382B25]/85 uppercase font-medium">
            EVENTS
          </span>
          <span className="font-sans text-[9.5px] tracking-[0.30em] text-[#382B25]/85 uppercase font-medium">
            PEOPLE
          </span>
          <span className="font-sans text-[9.5px] tracking-[0.30em] text-[#382B25]/85 uppercase font-medium">
            EXPERIENCES
          </span>
        </div>
        <div className="w-[1px] h-[34px] bg-[#382B25]/35" />
      </div>

      {/* ═════════════════════════════════════════════════════════════
          5. CALLIGRAPHIC "Your Event Buddies" (TWILIGHT SKY)
          Slanted luxury script floating gracefully in the upper-right sky.
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="hidden md:block absolute top-[21%] lg:top-[23%] right-[15%] lg:right-[18%] z-10 pointer-events-none select-none"
        style={{ transform: 'rotate(-11deg)' }}
      >
        <div
          className="font-script text-[#F4EFE6] text-[48px] lg:text-[62px] xl:text-[72px] leading-[0.98] tracking-normal"
          style={{
            opacity: 0.88,
            textShadow: '0 3px 18px rgba(0,0,0,0.45)',
          }}
        >
          <div className="text-left">Your</div>
          <div className="text-center pl-7 lg:pl-10">Event</div>
          <div className="text-right pl-14 lg:pl-20">Buddies</div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          6. MAIN EDITORIAL CONTENT (LEFT COLUMN)
          Starts comfortably below the navbar (pt-[130px] md:pt-[150px]).
          Headline: "More than events. Meaningful experiences."
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full h-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between pt-[115px] md:pt-[135px] pb-8 md:pb-10">
        {/* Upper Left Headline Block */}
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <p className="font-sans text-[11px] md:text-[12px] tracking-[0.30em] text-[#F4EFE6]/85 uppercase font-medium mb-3 md:mb-4">
            EVENT MANAGEMENT · UAE
          </p>

          {/* Headline */}
          <h1
            className="font-editorial text-[#F4EFE6] font-light leading-[0.92] tracking-[-0.015em] mb-5 md:mb-6"
            style={{
              fontSize: 'clamp(54px, 6.4vw, 98px)',
            }}
          >
            <span className="block">More</span>
            <span className="block">than events.</span>
            <span className="block italic font-normal text-[#FAF6F0]">Meaningful</span>
            <span className="block">experiences.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-editorial text-[16px] sm:text-[18px] md:text-[19px] text-[#F4EFE6]/80 font-normal leading-[1.58] max-w-[460px]">
            From intimate celebrations to large-scale productions, we bring people,
            ideas and spaces together beautifully.
          </p>
        </div>

        {/* Lower Left: Discover Interaction */}
        <div className="pt-4">
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-3.5 text-left cursor-pointer focus:outline-none"
            aria-label="Discover our world — scroll to details"
          >
            {/* Outlined circular downward arrow */}
            <div className="w-[46px] h-[46px] rounded-full border border-[#F4EFE6]/55 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:border-[#F4EFE6] group-hover:scale-105">
              <span className="absolute inset-0 bg-[#F4EFE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <svg
                className="w-4 h-4 text-[#F4EFE6] relative z-10 transition-colors duration-300 group-hover:text-[#382B25] group-hover:translate-y-0.5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.5V13.5M8 13.5L3.5 9M8 13.5L12.5 9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Label */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-[0.28em] text-[#F4EFE6] font-medium leading-[1.4] uppercase group-hover:text-white transition-colors">
                DISCOVER
              </span>
              <span className="font-sans text-[10px] tracking-[0.28em] text-[#F4EFE6] font-medium leading-[1.4] uppercase group-hover:text-white transition-colors">
                OUR WORLD
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          7. BOTTOM RIGHT: IVORY SERVICE PANEL + TILTED POLAROID PHOTO
          Exact recreation from hero.png.
      ══════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex absolute bottom-[4%] right-[3.2%] z-20 items-end">
        {/* Tilted Detail Photograph (Champagne coupe toast) */}
        <div
          className="relative z-30 flex-shrink-0 -mr-6 -mb-2"
          style={{
            transform: 'rotate(-7deg)',
            transformOrigin: 'bottom center',
          }}
        >
          <div className="w-[145px] xl:w-[160px] aspect-[3/4] p-[5px] bg-[#F4EFE6] shadow-[0_20px_45px_rgba(0,0,0,0.55)] cursor-pointer group transition-transform duration-300 hover:scale-105">
            <div className="w-full h-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentExp.detail}
                  src={currentExp.detail}
                  alt={currentExp.detailAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Ivory Service Card */}
        <div className="relative z-20 bg-[#F4EFE6] px-7 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.30)] min-w-[225px] xl:min-w-[245px]">
          {/* Top hairline */}
          <div className="w-10 h-[1px] bg-[#382B25]/25 mb-3.5" />

          {/* Services List */}
          <ul className="space-y-[3px]">
            {SERVICES_LIST.map((item) => (
              <li
                key={item.name}
                className={`font-sans text-[10px] tracking-[0.20em] uppercase font-semibold leading-[1.85] ${
                  item.active ? 'text-[#382B25]' : 'text-[#382B25]/55 font-normal'
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Vertical Slide Index Strip (01 / 04) */}
        <div className="relative z-20 bg-[#1D140F]/95 backdrop-blur-sm self-stretch flex flex-col items-center justify-between py-5 px-3 border-l border-[#F4EFE6]/10">
          <span className="font-sans text-[11px] text-[#F4EFE6] font-medium tracking-wider">
            {currentExp.id}
          </span>

          <div className="w-[1px] h-7 bg-[#F4EFE6]/25 relative">
            <div
              className="absolute top-0 left-0 w-full bg-[#F4EFE6] transition-all duration-300"
              style={{
                height: `${((currentIndex + 1) / EXPERIENCES.length) * 100}%`,
              }}
            />
          </div>

          <span className="font-sans text-[11px] text-[#F4EFE6]/40 tracking-wider">
            04
          </span>

          {/* Next Slide Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next experience slide"
            className="w-7 h-7 rounded-full border border-[#F4EFE6]/35 flex items-center justify-center text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#382B25] hover:border-[#F4EFE6] transition-all duration-200 mt-1 cursor-pointer focus:outline-none"
          >
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          8. MOBILE / TABLET CONTROLS
      ══════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden absolute bottom-5 right-5 z-20 flex items-center gap-2">
        {EXPERIENCES.map((exp, idx) => (
          <button
            key={exp.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-[#F4EFE6]' : 'w-2 bg-[#F4EFE6]/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
