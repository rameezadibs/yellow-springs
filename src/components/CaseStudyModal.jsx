import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check, MapPin, Calendar, Users, Award } from 'lucide-react';
import { FEATURED_STORY } from '../data/content';

export default function CaseStudyModal({ isOpen, onClose, onOpenPlanner }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#251C17]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#F5F0E6] text-[#382B25] border border-[#382B25]/20 shadow-2xl p-6 sm:p-10 my-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-[#382B25]/20 hover:bg-[#382B25] hover:text-[#F5F0E6] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="border-b border-[#382B25]/15 pb-6 mb-8 pr-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#382B25]/60">
                CASE STUDY ARCHIVE
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#382B25] tracking-tight">
              The Grand Amphitheater Gala
            </h2>
            <p className="text-sm sm:text-base text-[#382B25]/75 font-light mt-2 max-w-2xl">
              Engineering a bespoke 32-meter curved architectural stage, acoustic array, and VIP hospitality for 800 international delegates in Dubai.
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAF7F0] border border-[#382B25]/15 mb-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#382B25]/60 flex-shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#382B25]/50 block">LOCATION</span>
                <span className="text-xs font-semibold">Downtown Dubai</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-[#382B25]/60 flex-shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#382B25]/50 block">ATTENDEES</span>
                <span className="text-xs font-semibold">800 Dignitaries</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#382B25]/60 flex-shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#382B25]/50 block">BUILD TIME</span>
                <span className="text-xs font-semibold">72 Continuous Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-[#382B25]/60 flex-shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#382B25]/50 block">EXECUTION</span>
                <span className="text-xs font-semibold">100% In-house</span>
              </div>
            </div>
          </div>

          {/* Photographic Narrative Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="relative aspect-[16/10] overflow-hidden border border-[#382B25]/15">
              <img
                src={FEATURED_STORY.realImage}
                alt="Stage execution"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-[#382B25]/80 text-[#F5F0E6] text-[9px] px-2 py-0.5 uppercase tracking-wider">
                STAGE BUILD & LED
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[#382B25]/15">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                alt="Dinner banquet setting"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-[#382B25]/80 text-[#F5F0E6] text-[9px] px-2 py-0.5 uppercase tracking-wider">
                BANQUET ATMOSPHERE
              </span>
            </div>
          </div>

          {/* Narrative Details */}
          <div className="space-y-6 text-sm text-[#382B25]/85 font-light leading-relaxed mb-8">
            <h4 className="font-editorial text-2xl text-[#382B25] font-normal">
              The Production Challenge
            </h4>
            <p>
              The client requested a venue transformation that dismantled the sterile look of standard convention centers, replacing it with an organic, architectural atmosphere bathed in Warm Ivory fabrications and rich Espresso accents.
            </p>
            <p>
              Yellow Springs deployed our in-house carpentry team to craft a 32-meter seamless curved backdrop integrated with fine-pitch LED display modules. Our audio engineers modeled the acoustic reflection of the ballroom to guarantee zero echo across all 800 seats, while our guest hospitality coordinators ran synchronized fine-dining food stations and live string quartet interludes.
            </p>
          </div>

          {/* Client Endorsement */}
          <div className="p-6 bg-[#382B25] text-[#F5F0E6] border border-[#382B25] mb-8">
            <p className="font-editorial italic text-lg sm:text-xl text-[#F5F0E6]/95 leading-relaxed">
              “The Yellow Springs team didn't just deliver an event; they curated a milestone that defined our brand in the region.”
            </p>
            <p className="text-[11px] tracking-widest uppercase text-[#FFE600] mt-2 font-medium">
              — Executive Steering Committee, Dubai
            </p>
          </div>

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-[#382B25]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#382B25]/60 font-light">
              Interested in similar staging or gala management?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenPlanner('Corporate Event Production');
              }}
              className="px-6 py-3 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase hover:bg-[#251C17] transition-colors inline-flex items-center gap-2"
            >
              <span>DISCUSS YOUR PRODUCTION BRIEF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
