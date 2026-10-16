import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { BRAND } from '../../data/content';
import { SEO_DATA, buildServiceJsonLd } from '../../data/seoData';
import SEOHead from '../../components/SEOHead';
import ServiceSEOSection from '../../components/services/ServiceSEOSection';

export default function ArtistsServicePage({ onOpenPlanner }) {
  const { artists } = SERVICES_DATA;
  const seoData = SEO_DATA.artists;
  const jsonLd = buildServiceJsonLd('artists');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    "Hello Yellow Springs! I'm looking for live artists, musicians, or entertainment acts for an upcoming event in the UAE."
  )}`;

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] min-h-screen selection:bg-[#382B25] selection:text-[#F5F0E6] pt-28 sm:pt-36">
      
      {/* Dynamic SEO Meta, Open Graph, Geo & Schema.org JSON-LD */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        structuredData={jsonLd}
      />
      
      {/* 01 — HERO HEADER */}
      <section className="px-6 sm:px-10 lg:px-14 pb-10 sm:pb-14 border-b border-[#382B25]/15">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#382B25]/60 hover:text-[#382B25] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>
            <span className="font-mono text-xs tracking-[0.25em] text-[#382B25]/40 uppercase">
              CATEGORY 04 // 06
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#382B25]" />
                <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
                  SERVICES // ARTIST MANAGEMENT
                </span>
                <span className="w-12 h-[1px] bg-[#382B25]/25" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 }}
                className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.02] tracking-tight text-[#382B25]"
              >
                <span className="sr-only">{seoData.h1Heading} — </span>
                <span>{artists.headlineLine1}</span>
                <br />
                <span className="italic font-normal text-[#382B25]/90">
                  {artists.headlineLine2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg md:text-xl text-[#382B25]/80 font-light leading-relaxed max-w-xl"
              >
                {artists.supportingCopy}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => onOpenPlanner && onOpenPlanner('Artist Management')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#251C17] transition-all cursor-pointer shadow-md"
                >
                  <span>BOOK ARTISTS &amp; TALENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#251C17] transition-all cursor-pointer shadow-md"
                >
                  <span>WHATSAPP TALENT DESK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
                className="relative aspect-[4/5] bg-[#251C17] border border-[#382B25]/20 shadow-xl overflow-hidden group"
              >
                <img
                  src={artists.image.src}
                  alt={artists.image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251C17]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#F5F0E6] tracking-wider uppercase">
                  {artists.image.caption}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 — TALENT ROSTER GENRES */}
      <section className="pt-12 sm:pt-16 pb-20 sm:pb-24 px-6 sm:px-10 lg:px-14 bg-[#382B25] text-[#F5F0E6] border-b border-[#F5F0E6]/15">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.28em] text-[#FFE600] uppercase block mb-3 font-semibold">
              ROSTER DIRECTORY // RESIDENT &amp; GUEST TALENT
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#F5F0E6]">
              Curated performers for every <span className="italic text-[#FFE600]">moment</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.genres.map((genre, i) => (
              <div
                key={genre.name}
                className="p-6 bg-[#251C17] border border-[#F5F0E6]/15 flex flex-col justify-between hover:border-[#FFE600]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#FFE600] block mb-2">
                    ACT 0{i + 1}
                  </span>
                  <h3 className="font-mono text-sm tracking-wider uppercase font-semibold text-[#F5F0E6] mb-2">
                    {genre.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F0E6]/75 font-light leading-relaxed">
                    {genre.note}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F5F0E6]/10 flex items-center justify-between text-[10px] font-mono text-[#F5F0E6]/60 tracking-wider uppercase">
                  <span>AUDIO RIDER INCLUDED</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — VISUAL DETAILS */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#382B25]/15">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#382B25]/20 bg-[#251C17] shadow-lg">
              <img
                src={artists.images.detail1.src}
                alt={artists.images.detail1.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#F5F0E6] tracking-wider uppercase bg-[#251C17]/80 px-2 py-1">
                {artists.images.detail1.caption}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-[#382B25]/20 bg-[#251C17] shadow-lg">
              <img
                src={artists.images.detail2.src}
                alt={artists.images.detail2.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#F5F0E6] tracking-wider uppercase bg-[#251C17]/80 px-2 py-1">
                {artists.images.detail2.caption}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — SEO ARCHITECTURE: FAQS, VENUES & CREDENTIALS */}
      <ServiceSEOSection
        serviceKey="artists"
        seoData={seoData}
        onOpenPlanner={onOpenPlanner}
      />

      {/* 05 — BOTTOM NAVIGATION & CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#382B25] text-[#F5F0E6]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#FFE600] uppercase block mb-2">
              LIVE ENERGY &amp; PERFORMANCE
            </span>
            <h3 className="font-editorial text-3xl sm:text-5xl font-light">
              Transform the atmosphere with live talent.
            </h3>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenPlanner && onOpenPlanner('Artist Management')}
              className="px-7 py-3.5 bg-[#FFE600] text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors cursor-pointer"
            >
              CURATE ENTERTAINMENT ↗
            </button>
            <Link
              to="/services/rentals"
              className="px-7 py-3.5 bg-[#FFE600] text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors cursor-pointer"
            >
              NEXT: LUXURY EVENT RENTALS ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
