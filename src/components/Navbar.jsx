import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { BRAND } from '../data/content';

export default function Navbar({ onOpenPlanner }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'OUR WORK', href: '#showcase' },
    { label: 'APPROACH', href: '#approach' },
    { label: 'RENTALS', href: '#rentals' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F0E6]/95 backdrop-blur-md py-3.5 border-b border-[#382B25]/10 shadow-[0_4px_24px_rgba(56,43,37,0.04)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group text-[#382B25]"
            aria-label="Yellow Springs Home"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <img
                src={BRAND.logo}
                alt="Yellow Springs Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isDarkBackgroundItem = !isScrolled && (link.label === 'ABOUT' || link.label === 'SERVICES');
              const textColorClass = isDarkBackgroundItem
                ? 'text-[#F5F0E6] hover:text-[#FFE600] after:bg-[#F5F0E6]'
                : 'text-[#382B25]/85 hover:text-[#382B25] after:bg-[#382B25]';

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs tracking-widest font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${textColorClass}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPlanner}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#382B25] text-[#F5F0E6] text-xs tracking-widest font-medium rounded-none hover:bg-[#251C17] transition-all duration-300 group"
            >
              <span>PLAN AN EVENT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#382B25] hover:opacity-80 transition-opacity"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#382B25] text-[#F5F0E6] flex flex-col justify-between p-8 md:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[#F5F0E6]/15 pb-6">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND.logo}
                  alt="Yellow Springs"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain bg-[#F5F0E6]/10 p-1.5"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full border border-[#F5F0E6]/20 hover:bg-[#F5F0E6]/10 transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5 text-[#F5F0E6]" />
              </button>
            </div>

            {/* Nav Menu Links */}
            <div className="py-10 flex flex-col gap-6">
              <span className="text-[10px] tracking-widest text-[#F5F0E6]/40 uppercase font-semibold">
                INDEX / EXPLORE
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  className="font-editorial text-3xl sm:text-4xl text-[#F5F0E6] hover:text-[#FFE600] transition-colors flex items-center justify-between group py-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact inside Drawer */}
            <div className="pt-8 border-t border-[#F5F0E6]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs text-[#F5F0E6]/60 tracking-wider">DIRECT ENQUIRIES</p>
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-medium tracking-wide text-[#F5F0E6] block mt-1 hover:text-[#FFE600]"
                >
                  {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-xs text-[#F5F0E6]/70 block hover:text-[#FFE600]"
                >
                  {BRAND.email}
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#F5F0E6] text-[#382B25] text-xs font-semibold tracking-widest uppercase hover:bg-[#FFE600] transition-colors"
              >
                PLAN AN EVENT ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
