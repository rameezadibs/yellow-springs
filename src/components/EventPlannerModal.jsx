import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MessageCircle, CheckCircle } from 'lucide-react';
import { BRAND } from '../data/content';

export default function EventPlannerModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    eventType: initialService || 'Corporate Event',
    emirate: 'Dubai',
    guestCount: '100–250 guests',
    date: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const eventOptions = [
    'Corporate Event',
    'Luxury Wedding',
    'Private Celebration',
    'Event Production & Staging',
    'Artist & Entertainment Management',
    'AV & Sound Systems',
    'Event Equipment Rentals',
  ];

  const emirates = [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ras Al Khaimah',
    'Ajman',
    'Fujairah',
    'Umm Al Quwain',
  ];

  const guestRanges = [
    'Under 50 (Intimate)',
    '50–150 guests',
    '150–350 guests',
    '350–800+ guests',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Event Enquiry — Yellow Springs*\n\n` +
      `• *Type:* ${formData.eventType}\n` +
      `• *Location:* ${formData.emirate}, UAE\n` +
      `• *Guests:* ${formData.guestCount}\n` +
      `• *Date:* ${formData.date || 'TBD'}\n` +
      `• *Contact:* ${formData.name} (${formData.phone})\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Brief Notes:* ${formData.notes || 'None provided'}`;
    return `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
  };

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
          className="fixed inset-0 bg-[#251C17]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#F5F0E6] text-[#382B25] border border-[#382B25]/20 shadow-2xl p-6 sm:p-10 my-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-[#382B25]/20 hover:bg-[#382B25] hover:text-[#F5F0E6] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="border-b border-[#382B25]/15 pb-4 mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#382B25]/60 block mb-1">
                  YELLOW SPRINGS • EVENT PLANNER
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#382B25] font-light">
                  Plan your experience.
                </h3>
                <p className="text-xs sm:text-sm text-[#382B25]/75 font-light mt-1">
                  Share your early thoughts. Our production leads will prepare a tailored outline and budget rider.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Category Selector */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                    Event Discipline
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs sm:text-sm focus:border-[#382B25] focus:outline-none"
                  >
                    {eventOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2-col: Location & Guest Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                      Location (Emirate)
                    </label>
                    <select
                      value={formData.emirate}
                      onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                      className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs sm:text-sm focus:border-[#382B25] focus:outline-none"
                    >
                      {emirates.map((em) => (
                        <option key={em} value={em}>
                          {em}, UAE
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                      Estimated Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs sm:text-sm focus:border-[#382B25] focus:outline-none"
                    >
                      {guestRanges.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                    Estimated Date / Timeline
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs sm:text-sm focus:border-[#382B25] focus:outline-none"
                  />
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mariam Al Zaabi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs focus:border-[#382B25] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs focus:border-[#382B25] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="host@domain.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs focus:border-[#382B25] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25] mb-2">
                    Vision & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the atmosphere, theme, entertainment preferences, or rental items..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#382B25]/25 p-3 text-xs focus:border-[#382B25] focus:outline-none"
                  />
                </div>

                {/* Submission Options */}
                <div className="pt-4 border-t border-[#382B25]/15 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase hover:bg-[#251C17] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT EVENT ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 border border-[#382B25]/30 text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-[#382B25]/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#382B25]" />
                    <span>OR SEND VIA WHATSAPP</span>
                  </a>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-6">
              <CheckCircle className="w-16 h-16 text-[#382B25] mx-auto stroke-[1.2]" />
              <h3 className="font-editorial text-3xl text-[#382B25] font-light">
                Thank you, {formData.name}.
              </h3>
              <p className="text-sm text-[#382B25]/80 max-w-md mx-auto font-light leading-relaxed">
                Your event brief for <strong>{formData.eventType}</strong> in <strong>{formData.emirate}</strong> has been received by our production desk. We will reach out within 2 hours.
              </p>

              <div className="pt-4 flex justify-center gap-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-widest uppercase flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFE600]" />
                  <span>CONTINUE ON WHATSAPP</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-[#382B25]/30 text-[#382B25] text-xs font-semibold tracking-widest uppercase"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
