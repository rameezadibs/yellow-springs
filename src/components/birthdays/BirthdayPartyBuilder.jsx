import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, CheckCircle, MessageCircle, Send, Calendar, MapPin, User, Gift, Info } from 'lucide-react';
import { BIRTHDAY_PACKAGES, ADD_ON_CATEGORIES } from '../../data/birthdayPackagesData';
import { BRAND } from '../../data/content';

export default function BirthdayPartyBuilder({
  selectedPackageId = 'gold',
  onSelectPackage,
  selectedAddOns = [],
  onToggleAddOn,
}) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    eventDate: '',
    location: '',
    childName: '',
    childAge: '',
    guestCount: '20 Kids',
    theme: '',
    specialRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const currentPackage = BIRTHDAY_PACKAGES.find((p) => p.id === selectedPackageId) || BIRTHDAY_PACKAGES[2];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Yellow Springs! 🎈\nI would like to request a bespoke quote for a Birthday Party:\n\n• Package: ${currentPackage.name} (${currentPackage.priceFormatted})\n• Event Date: ${formData.eventDate || 'To be confirmed'}\n• Location: ${formData.location || 'Dubai / UAE'}\n• Child's Name & Age: ${formData.childName || 'Child'} (${formData.childAge ? formData.childAge + ' yrs' : 'Not specified'})\n• Expected Kids: ${formData.guestCount}\n• Theme: ${formData.theme || 'Custom theme'}\n• Selected Add-Ons: ${selectedAddOns.length > 0 ? selectedAddOns.join(', ') : 'None'}\n• Notes: ${formData.specialRequirements || 'None'}\n\nPlease share availability and quote.`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="party-builder" className="py-20 md:py-28 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#382B25]/70">
              BUILD YOUR PARTY
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight mb-4">
            Start with a package.
            <br />
            <span className="italic font-normal">Make it yours.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#382B25]/75 font-light leading-relaxed">
            Customize every part of the event below. When submitted, our senior party producer will review availability and prepare a transparent, itemized quotation within hours.
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-[#FAF7F0] border border-[#382B25]/20 p-6 sm:p-8 md:p-12 shadow-[0_12px_40px_rgba(56,43,37,0.06)]">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* STEP 01: CHOOSE YOUR PACKAGE */}
            <div>
              <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-[#382B25]/15">
                <span className="text-xs font-mono tracking-widest font-bold text-[#382B25]">
                  STEP 01
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#382B25]/70">
                  CHOOSE YOUR BASE PACKAGE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {BIRTHDAY_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => onSelectPackage(pkg.id)}
                      className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25] shadow-sm'
                          : 'bg-[#F5F0E6] text-[#382B25] border-[#382B25]/20 hover:border-[#382B25]'
                      }`}
                    >
                      <div className="text-[10px] font-mono opacity-60 mb-1">{pkg.num}</div>
                      <div className="font-editorial text-lg font-semibold">{pkg.name}</div>
                      <div className={`text-xs font-bold mt-1 ${isSelected ? 'text-[#FFE600]' : 'text-[#382B25]'}`}>
                        {pkg.priceFormatted}
                      </div>
                      <div className="text-[10px] opacity-75 mt-2 line-clamp-1">
                        {pkg.descriptor}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 02: ADD EXTRAS */}
            <div>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-[#382B25]/15">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono tracking-widest font-bold text-[#382B25]">
                    STEP 02
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#382B25]/70">
                    SELECT DESIRED ADD-ONS
                  </span>
                </div>
                <span className="text-xs text-[#382B25]/60 font-mono">
                  {selectedAddOns.length} SELECTED
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {ADD_ON_CATEGORIES.flatMap((c) => c.items).map((item) => {
                  const isSelected = selectedAddOns.includes(item.name);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => onToggleAddOn(item.name)}
                      className={`px-3.5 py-2.5 text-xs text-left border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25]'
                          : 'bg-[#F5F0E6] text-[#382B25] border-[#382B25]/20 hover:border-[#382B25]/50'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      <div
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 border ${
                          isSelected ? 'bg-[#FFE600] text-[#382B25] border-[#FFE600]' : 'border-[#382B25]/30'
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 03: TELL US ABOUT THE PARTY */}
            <div>
              <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-[#382B25]/15">
                <span className="text-xs font-mono tracking-widest font-bold text-[#382B25]">
                  STEP 03
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#382B25]/70">
                  EVENT SPECIFICS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    EVENT DATE *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    LOCATION / EMIRATE *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Dubai Villa, Jumeirah, Venue"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    CHILD&apos;S NAME &amp; TURNING AGE
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="childName"
                      placeholder="Name"
                      value={formData.childName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                    />
                    <input
                      type="number"
                      name="childAge"
                      placeholder="Age (e.g. 5)"
                      min="1"
                      max="18"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    ESTIMATED NUMBER OF KIDS
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none cursor-pointer"
                  >
                    <option value="10–15 Kids">10–15 Kids (Intimate)</option>
                    <option value="20 Kids">20 Kids (Standard)</option>
                    <option value="25–30 Kids">25–30 Kids (Extended)</option>
                    <option value="35–50 Kids">35–50 Kids (Large)</option>
                    <option value="50+ Kids">50+ Kids (Grand Milestone)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    BIRTHDAY THEME
                  </label>
                  <input
                    type="text"
                    name="theme"
                    placeholder="e.g. Space Odyssey, Safari, Princess, Under the Sea"
                    value={formData.theme}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    SPECIAL REQUIREMENTS
                  </label>
                  <input
                    type="text"
                    name="specialRequirements"
                    placeholder="Dietary, timings, outdoor garden, etc."
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>
              </div>
            </div>

            {/* STEP 04: REQUEST YOUR QUOTE */}
            <div>
              <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-[#382B25]/15">
                <span className="text-xs font-mono tracking-widest font-bold text-[#382B25]">
                  STEP 04
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#382B25]/70">
                  PARENT CONTACT DETAILS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    PARENT NAME *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    placeholder="Full Name"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#382B25]/80 mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F5F0E6] border border-[#382B25]/20 text-[#382B25] text-xs focus:border-[#382B25] focus:outline-none placeholder:text-[#382B25]/35"
                  />
                </div>
              </div>

              {/* Action Buttons & Notice */}
              <div className="pt-6 border-t border-[#382B25]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-xs text-[#382B25]/60 font-light">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>No payment required now. Structured proposal sent for review.</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#382B25] text-[#382B25] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#382B25]/5 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'PROCESSING...' : 'SEND MY PARTY REQUEST ↗'}</span>
                  </button>
                </div>
              </div>
            </div>

          </form>

          {/* Submission Success Dialog */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-8 p-6 bg-[#382B25] text-[#F5F0E6] border border-[#382B25] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#FFE600] text-xs uppercase tracking-widest font-bold mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>REQUEST RECEIVED WITH APPRECIATION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F0E6]/85 font-light">
                    Thank you {formData.parentName || 'there'}! Our party coordinator is reviewing your {currentPackage.name} package request and will contact you at {formData.phone || 'your phone number'} within 2-4 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#F5F0E6] text-[#382B25] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#FFE600] transition-colors cursor-pointer"
                >
                  DISMISS
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
