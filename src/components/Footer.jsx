import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND } from '../data/content';

export default function Footer({ onOpenPlanner }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#showcase' },
    { label: 'Rentals', href: '#rentals' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#251C17] text-[#F5F0E6] pt-20 md:pt-28 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F5F0E6]/15">
          {/* Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <img
                  src={BRAND.logo}
                  alt="Yellow Springs Logo"
                  className="w-28 sm:w-36 md:w-40 h-auto object-contain"
                />
              </div>

              <p className="text-sm text-[#F5F0E6]/70 max-w-sm font-light leading-relaxed mb-6">
                15+ years of bespoke event management, scenography, and equipment rentals across Dubai, Abu Dhabi, and the UAE.
              </p>

              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FFE600] hover:text-[#F5F0E6] transition-colors"
              >
                <span>REQUEST BESPOKE EVENT PROPOSAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5F0E6]/20 flex items-center justify-center hover:bg-[#F5F0E6] hover:text-[#382B25] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5F0E6]/20 flex items-center justify-center hover:bg-[#F5F0E6] hover:text-[#382B25] transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#F5F0E6]/20 flex items-center justify-center hover:bg-[#F5F0E6] hover:text-[#382B25] transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]/50 mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-[#F5F0E6]/80 hover:text-[#FFE600] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]/50 mb-6">
              DUBAI STUDIO & ENQUIRIES
            </h4>

            <div className="space-y-4 text-xs font-light text-[#F5F0E6]/80">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="block hover:underline">
                    {BRAND.phone}
                  </a>
                  <a href={`tel:${BRAND.phoneSecondary.replace(/\s+/g, '')}`} className="block hover:underline text-[#F5F0E6]/60">
                    {BRAND.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFE600] flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:underline">
                  {BRAND.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <span>
                  Dubai Production Facility & Event Studio, United Arab Emirates
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5F0E6]/10">
              <span className="text-[10px] tracking-widest uppercase text-[#F5F0E6]/50 block">
                OPERATING HOURS
              </span>
              <span className="text-xs text-[#F5F0E6]/80 mt-1 block">
                Monday – Sunday: 9:00 AM – 6:00 PM GST
              </span>
            </div>
          </div>
        </div>

        {/* Large Subtle Typography Watermark in Background */}
        <div className="py-12 select-none pointer-events-none opacity-[0.06] overflow-hidden flex justify-center">
          <div className="font-editorial text-[10.5vw] md:text-[11vw] font-bold leading-none tracking-tight text-center whitespace-nowrap text-[#F5F0E6] px-4">
            YELLOW SPRINGS
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E6]/50 font-light border-t border-[#F5F0E6]/10 pt-8">
          <div>
            © {new Date().getFullYear()} Yellow Springs Event Management UAE. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#F5F0E6] transition-colors uppercase tracking-widest text-[10px]"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
