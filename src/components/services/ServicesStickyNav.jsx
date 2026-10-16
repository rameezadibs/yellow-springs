import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesStickyNav() {
  const [activeSection, setActiveSection] = useState('weddings');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'weddings', num: '01', label: 'WEDDINGS', path: '/services/weddings' },
    { id: 'corporate', num: '02', label: 'CORPORATE', path: '/services/corporate' },
    { id: 'av-sound', num: '03', label: 'AV + SOUND', path: '/services/av-sound' },
    { id: 'artists', num: '04', label: 'ARTISTS', path: '/services/artists' },
    { id: 'rentals', num: '05', label: 'RENTALS', path: '/services/rentals' },
    { id: 'birthday-packages', num: '06', label: 'BIRTHDAYS', path: '/services/birthdays' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('services-hero');
      const ctaEl = document.getElementById('services-final-cta');

      if (!heroEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const ctaTop = ctaEl ? ctaEl.getBoundingClientRect().top : 99999;

      // Show after scrolling past hero and hide before final CTA reaches near viewport
      if (heroBottom < 100 && ctaTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track current section in viewport
      const sectionIds = ['weddings', 'corporate', 'av-sound', 'artists', 'rentals'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          aria-label="Services section navigator"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 select-none pointer-events-auto"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="group flex items-center justify-end gap-2.5 py-1 px-2 cursor-pointer transition-all text-right"
              >
                {/* Expanded Label on Hover */}
                <span
                  className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#382B25] font-semibold opacity-100'
                      : 'text-[#382B25]/40 opacity-0 group-hover:opacity-100 group-hover:text-[#382B25]'
                  }`}
                >
                  {item.label}
                </span>

                {/* Number Box with Active Indicator */}
                <span
                  className={`font-mono text-xs px-2 py-1 transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25] font-semibold shadow-sm'
                      : 'bg-[#FAF7F0]/80 text-[#382B25]/60 border-[#382B25]/20 hover:border-[#382B25] hover:text-[#382B25]'
                  }`}
                >
                  {item.num}
                </span>
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
