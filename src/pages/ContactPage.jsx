import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Phone, MessageSquare, Mail, MapPin, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/content';
import SEOHead from '../components/SEOHead';

export default function ContactPage({ onOpenPlanner }) {
  // Scroll to top upon load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'ENGAGEMENT / WEDDING',
    date: '',
    dateFlexible: false,
    venue: '',
    message: '',
  });

  const [activeFocusField, setActiveFocusField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);

  const eventTypes = [
    'ENGAGEMENT / WEDDING',
    'CORPORATE EVENT',
    'BIRTHDAY / PARTY',
    'AV & SOUND',
    'ARTIST / ENTERTAINMENT',
    'RENTALS',
    'OTHER',
  ];

  const handleTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, eventType: type }));
  };

  const handleDateToggle = () => {
    setFormData((prev) => ({
      ...prev,
      dateFlexible: !prev.dateFlexible,
      date: !prev.dateFlexible ? 'Not decided yet' : '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.eventType) return;

    setSubmitStatus('sending');

    // Simulate refined asynchronous dispatch
    setTimeout(() => {
      setSubmitStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'ENGAGEMENT / WEDDING',
      date: '',
      dateFlexible: false,
      venue: '',
      message: '',
    });
    setSubmitStatus('idle');
  };

  const whatsappDirectUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello Yellow Springs! I am planning an event in the UAE and would love to connect.'
  )}`;

  const callDirectUrl = `tel:${BRAND.phone.replace(/\s+/g, '')}`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Yellow Springs — Event Management UAE',
    url: 'https://yellowsprings.ae/contact',
    description: "Got something in mind? Tell us what you're planning. Intimate weddings, corporate summits, birthdays, rentals & staging across Dubai & UAE.",
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Yellow Springs Event Management',
      telephone: BRAND.phone,
      email: BRAND.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    },
  };

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] selection:bg-[#382B25] selection:text-[#F5F0E6] min-h-screen">
      {/* 00 — SEO Head */}
      <SEOHead
        title="Contact Yellow Springs — Start Your Event Conversation | Your Event Buddies UAE"
        description="Got something in mind? Tell us what you're planning. Intimate weddings, corporate summits, birthdays, rentals & staging across Dubai & UAE. Let's make it happen."
        keywords={[
          'contact yellow springs dubai',
          'event company contact dubai',
          'uae wedding planner whatsapp',
          'corporate event management contact uae',
          'yellow springs phone number',
        ]}
        canonical="https://yellowsprings.ae/contact"
        ogImage="https://yellowsprings.ae/assets/corporate.webp"
        structuredData={jsonLdData}
      />

      {/* ==================================================
          01 — CONTACT HERO + FORM
          One strong opening section. Warm Ivory background.
          Desktop: 2-column composition.
          Mobile: intro -> quick actions -> form
          ================================================== */}
      <section
        id="contact-main"
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      >
        {/* Subtle Hand-Drawn Floral Stem & Delicate Petal Line */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Soft ambient botanical curvature spanning from headline to form */}
            <motion.path
              d="M 120 180 C 260 220, 380 140, 520 280 C 640 400, 780 320, 920 460"
              stroke="#382B25"
              strokeWidth="1.2"
              strokeOpacity="0.14"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Second micro stem curve */}
            <motion.path
              d="M 520 280 C 580 340, 640 310, 710 370"
              stroke="#382B25"
              strokeWidth="1"
              strokeOpacity="0.18"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Delicate Yellow Petal Accent Inspired by Logo */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }}
            >
              {/* Petal leaf */}
              <path
                d="M 710 370 C 725 355, 740 365, 742 380 C 727 385, 715 378, 710 370 Z"
                fill="#FFE600"
                fillOpacity="0.85"
                stroke="#382B25"
                strokeWidth="0.8"
              />
              <circle cx="710" cy="370" r="2.5" fill="#382B25" />
            </motion.g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* --------------------------------------------------
                LEFT SIDE: Editorial Introduction
                -------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              {/* Editorial label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4 sm:mb-6"
              >
                <span className="w-6 h-[1px] bg-[#382B25]/40" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#382B25]/70 font-semibold">
                  CONTACT / YELLOW SPRINGS
                </span>
              </motion.div>

              {/* Large Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#382B25] font-light leading-[1.08] tracking-tight mb-6"
              >
                Got something
                <br />
                in mind?
                <span className="block italic font-normal text-[#382B25] mt-1">
                  Let’s make it happen.
                </span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-[#382B25]/80 font-light leading-relaxed max-w-lg mb-8"
              >
                Whether it’s a wedding, corporate event, birthday, performance or
                something completely different — tell us what you’re planning and
                we’ll take it from there.
              </motion.p>

              {/* Gentle Start Guidance & Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 border-t border-[#382B25]/15 mb-8"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#382B25]/60 font-semibold block mb-2">
                  NOT SURE WHERE TO START?
                </span>
                <p className="text-xs sm:text-sm text-[#382B25]/75 font-light leading-relaxed mb-5">
                  That’s completely fine. Tell us what you know so far.
                </p>

                {/* Two simple quick-contact text links */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#382B25] hover:text-[#382B25]/70 transition-colors relative pb-1 cursor-pointer"
                  >
                    <span>WHATSAPP US</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#382B25] group-hover:w-1/2 transition-all duration-300" />
                  </a>

                  <a
                    href={callDirectUrl}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#382B25] hover:text-[#382B25]/70 transition-colors relative pb-1 cursor-pointer"
                  >
                    <span>CALL US</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#382B25] group-hover:w-1/2 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Optional Editorial Photography: Candid Behind-the-Scenes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block mt-2 relative max-w-[310px]"
              >
                <div className="relative p-1.5 bg-[#FAF7F0] border border-[#382B25]/15 shadow-sm">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src="/about/hero-left.png"
                      alt="Yellow Springs event craftsmen preparing bespoke scenography in UAE"
                      className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2 px-1 flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#382B25]/60 font-semibold">
                      LET’S MAKE SOMETHING GOOD.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --------------------------------------------------
                RIGHT SIDE: The Beautiful Enquiry Form
                Naturally belongs to the page (no generic floating white card).
                -------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="relative border-t lg:border-t-0 lg:border-l border-[#382B25]/15 pt-8 lg:pt-0 lg:pl-12 xl:pl-16">
                
                <AnimatePresence mode="wait">
                  {submitStatus !== 'success' ? (
                    <motion.div
                      key="contact-form-content"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Form Header */}
                      <div className="mb-8">
                        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#382B25]/60 block mb-1">
                          ENQUIRY
                        </span>
                        <h2 className="font-editorial text-2xl sm:text-3xl text-[#382B25] font-light">
                          TELL US A LITTLE ABOUT IT.
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                        
                        {/* Name & Phone Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                          {/* YOUR NAME * */}
                          <div className="relative">
                            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-2">
                              YOUR NAME *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Sarah Jenkins"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              onFocus={() => setActiveFocusField('name')}
                              onBlur={() => setActiveFocusField(null)}
                              className="w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors"
                            />
                            {/* Expanding focus underline */}
                            <div
                              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                                activeFocusField === 'name' ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>

                          {/* PHONE / WHATSAPP * */}
                          <div className="relative">
                            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-2">
                              PHONE / WHATSAPP *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+971 50 000 0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              onFocus={() => setActiveFocusField('phone')}
                              onBlur={() => setActiveFocusField(null)}
                              className="w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors"
                            />
                            <div
                              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                                activeFocusField === 'phone' ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>
                        </div>

                        {/* EMAIL */}
                        <div className="relative">
                          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-2">
                            EMAIL <span className="text-[9px] font-normal lowercase opacity-60">(optional)</span>
                          </label>
                          <input
                            type="email"
                            placeholder="you@domain.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            onFocus={() => setActiveFocusField('email')}
                            onBlur={() => setActiveFocusField(null)}
                            className="w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                              activeFocusField === 'email' ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>

                        {/* WHAT ARE YOU PLANNING? * (Selectable Chips) */}
                        <div className="pt-2">
                          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-3">
                            WHAT ARE YOU PLANNING? *
                          </label>
                          <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {eventTypes.map((type) => {
                              const isSelected = formData.eventType === type;
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() => handleTypeSelect(type)}
                                  className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#382B25] text-[#F5F0E6] shadow-sm font-medium'
                                      : 'bg-transparent text-[#382B25] border border-[#382B25]/25 hover:border-[#382B25]/70'
                                  }`}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* EVENT DATE & LOCATION / VENUE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-1">
                          
                          {/* EVENT DATE */}
                          <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold">
                                EVENT DATE
                              </label>
                              <button
                                type="button"
                                onClick={handleDateToggle}
                                className={`font-mono text-[10px] tracking-wider uppercase transition-colors underline cursor-pointer ${
                                  formData.dateFlexible
                                    ? 'text-[#382B25] font-bold'
                                    : 'text-[#382B25]/60 hover:text-[#382B25]'
                                }`}
                              >
                                {formData.dateFlexible ? '✓ Not decided yet' : 'Not decided yet?'}
                              </button>
                            </div>
                            <input
                              type={formData.dateFlexible ? 'text' : 'date'}
                              value={formData.date}
                              disabled={formData.dateFlexible}
                              placeholder={formData.dateFlexible ? 'Flexible / To be confirmed' : 'Select date'}
                              onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                              }
                              onFocus={() => setActiveFocusField('date')}
                              onBlur={() => setActiveFocusField(null)}
                              className={`w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors ${
                                formData.dateFlexible ? 'opacity-70 italic' : ''
                              }`}
                            />
                            <div
                              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                                activeFocusField === 'date' ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>

                          {/* LOCATION / VENUE */}
                          <div className="relative">
                            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-2">
                              LOCATION / VENUE
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Dubai, Abu Dhabi, or venue name"
                              value={formData.venue}
                              onChange={(e) =>
                                setFormData({ ...formData, venue: e.target.value })
                              }
                              onFocus={() => setActiveFocusField('venue')}
                              onBlur={() => setActiveFocusField(null)}
                              className="w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors"
                            />
                            <div
                              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                                activeFocusField === 'venue' ? 'w-full' : 'w-0'
                              }`}
                            />
                          </div>
                        </div>

                        {/* TELL US ABOUT YOUR EVENT (Textarea) */}
                        <div className="relative pt-1">
                          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#382B25]/75 font-semibold mb-2">
                            TELL US ABOUT YOUR EVENT
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Tell us what you're imagining…"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            onFocus={() => setActiveFocusField('message')}
                            onBlur={() => setActiveFocusField(null)}
                            className="w-full bg-transparent border-b border-[#382B25]/25 py-2.5 text-sm sm:text-base text-[#382B25] placeholder-[#382B25]/35 focus:outline-none transition-colors resize-none leading-relaxed"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-[1.5px] bg-[#382B25] transition-all duration-300 ${
                              activeFocusField === 'message' ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>

                        {/* Submit Action */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={submitStatus === 'sending'}
                            className="w-full sm:w-auto px-9 py-4 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase hover:bg-[#251C17] transition-all duration-300 inline-flex items-center justify-center gap-3 cursor-pointer group shadow-sm disabled:opacity-80"
                          >
                            <span>
                              {submitStatus === 'sending'
                                ? 'SENDING...'
                                : 'LET’S CREATE SOMETHING'}
                            </span>
                            {submitStatus === 'sending' ? (
                              <div className="w-3.5 h-3.5 border-2 border-[#F5F0E6] border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            )}
                          </button>

                          <p className="text-xs text-[#382B25]/60 font-light mt-3">
                            We’ll get back to you as soon as we can.
                          </p>
                        </div>

                      </form>
                    </motion.div>
                  ) : (
                    /* In-place Elegant Success State */
                    <motion.div
                      key="contact-form-success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="py-12 sm:py-16 text-left"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#382B25]/20 bg-[#FAF7F0] text-[#382B25] mb-6">
                        <Check className="w-6 h-6 stroke-[2]" />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#382B25]/60 block mb-2">
                        MESSAGE RECEIVED
                      </span>

                      <h2 className="font-editorial text-4xl sm:text-5xl text-[#382B25] font-light leading-tight mb-4">
                        THANK YOU.
                      </h2>

                      <p className="text-base sm:text-lg text-[#382B25]/80 font-light leading-relaxed max-w-md mb-8">
                        “We’ve got your message. One of our event buddies will be in touch.”
                      </p>

                      <div className="flex flex-wrap items-center gap-6 pt-2">
                        <Link
                          to="/"
                          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#382B25] hover:text-[#382B25]/70 transition-colors relative pb-1"
                        >
                          <span>BACK TO HOME</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#382B25]" />
                        </Link>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="text-xs font-mono tracking-wider uppercase text-[#382B25]/60 hover:text-[#382B25] transition-colors cursor-pointer"
                        >
                          Send another note ↗
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          02 — QUICK CONTACT STRIP
          Immediately after main section.
          Espresso Brown background #382B25.
          Compact horizontal editorial strip.
          Thin Warm Ivory separators.
          ================================================== */}
      <section
        id="quick-contact"
        aria-label="Yellow Springs Quick Contact Information"
        className="bg-[#382B25] text-[#F5F0E6] py-10 sm:py-12 px-6 md:px-12 lg:px-16 border-y border-[#F5F0E6]/10"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Section micro label */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-4 h-[1px] bg-[#FFE600]/60" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#FFE600] font-semibold">
              PREFER TO TALK?
            </span>
          </div>

          {/* Horizontal Editorial Contact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-[#F5F0E6]/15">
            
            {/* 1. CALL */}
            <div className="pt-6 md:pt-0 lg:px-6 first:pl-0">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#F5F0E6]/50 block mb-2">
                CALL
              </span>
              <a
                href={callDirectUrl}
                className="font-editorial text-xl sm:text-2xl text-[#F5F0E6] hover:text-[#FFE600] transition-colors block font-light leading-snug"
              >
                {BRAND.phone}
              </a>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Mon – Sun · 9:00 AM – 8:00 PM
              </span>
            </div>

            {/* 2. WHATSAPP */}
            <div className="pt-6 md:pt-0 lg:px-6">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#F5F0E6]/50 block mb-2">
                WHATSAPP
              </span>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-editorial text-xl sm:text-2xl text-[#F5F0E6] hover:text-[#FFE600] transition-colors font-light leading-snug cursor-pointer"
              >
                <span>START A CHAT</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFE600] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                Instant event coordination & riders
              </span>
            </div>

            {/* 3. EMAIL */}
            <div className="pt-6 md:pt-0 lg:px-6">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#F5F0E6]/50 block mb-2">
                EMAIL
              </span>
              <a
                href={`mailto:${BRAND.email}`}
                className="font-editorial text-xl sm:text-2xl text-[#F5F0E6] hover:text-[#FFE600] transition-colors block font-light leading-snug"
              >
                {BRAND.email}
              </a>
              <span className="text-[11px] text-[#F5F0E6]/60 font-light block mt-1">
                RFPs, decks & invitations
              </span>
            </div>

            {/* 4. VISIT */}
            <div className="pt-6 md:pt-0 lg:px-6 last:pr-0">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#F5F0E6]/50 block mb-2">
                VISIT
              </span>
              <p className="font-editorial text-lg sm:text-xl text-[#F5F0E6] font-light leading-snug">
                Dubai Production Facility & Event Studio, UAE
              </p>
              
              {/* Expandable location detail */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setIsLocationExpanded(!isLocationExpanded)}
                  className="group inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-[#FFE600] hover:underline cursor-pointer"
                >
                  <span>VIEW LOCATION</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Discreet Expandable Studio Location Card */}
          <AnimatePresence>
            {isLocationExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-6 pt-6 border-t border-[#F5F0E6]/10"
              >
                <div className="bg-[#251C17] p-4 sm:p-6 border border-[#F5F0E6]/15 max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#FFE600]">
                      DUBAI HEADQUARTERS & WAREHOUSE
                    </span>
                    <p className="text-xs text-[#F5F0E6]/85 font-light leading-relaxed">
                      Custom carpentry workshop, lighting inventory & event consultation suites.
                    </p>
                    <span className="text-[10px] font-mono text-[#F5F0E6]/50 block">
                      Coordinates: 25.2048° N, 55.2708° E · United Arab Emirates
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Dubai+UAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#FFE600]/40 text-[#FFE600] text-[10px] font-mono tracking-widest uppercase hover:bg-[#FFE600] hover:text-[#382B25] transition-colors duration-300 flex-shrink-0 cursor-pointer"
                  >
                    <span>OPEN IN MAPS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ==================================================
          03 — SMALL CLOSING MOMENT
          Warm Ivory background #F5F0E6.
          Beautifully simple personal sign-off.
          Subtle flower/petal line illustration.
          ================================================== */}
      <section
        id="contact-closing"
        aria-label="Yellow Springs Personal Sign-Off"
        className="relative bg-[#F5F0E6] text-[#382B25] py-16 sm:py-20 lg:py-24 px-6 md:px-12 text-center overflow-hidden"
      >
        <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center">
          
          {/* Centered Small Text */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#382B25]/60 font-semibold block mb-4"
          >
            BIG IDEA. SMALL CELEBRATION. SOMETHING COMPLETELY DIFFERENT.
          </motion.span>

          {/* Larger Editorial Line */}
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#382B25] font-light italic leading-tight mb-6"
          >
            “We’d love to hear about it.”
          </motion.h3>

          {/* Underneath: YOUR EVENT BUDDIES — YELLOW SPRINGS */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#382B25]/75 font-semibold"
          >
            YOUR EVENT BUDDIES — YELLOW SPRINGS
          </motion.span>
        </div>
      </section>
    </div>
  );
}
