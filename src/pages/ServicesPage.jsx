import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import ServiceWeddings from '../components/services/ServiceWeddings';
import ServiceCorporate from '../components/services/ServiceCorporate';
import ServiceAV from '../components/services/ServiceAV';
import ServiceArtists from '../components/services/ServiceArtists';
import ServiceRentals from '../components/services/ServiceRentals';
import ServiceBirthdays from '../components/services/ServiceBirthdays';
import ServicesConnected from '../components/services/ServicesConnected';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesFinalCTA from '../components/services/ServicesFinalCTA';
import ServicesStickyNav from '../components/services/ServicesStickyNav';

export default function ServicesPage({ onOpenPlanner }) {
  useEffect(() => {
    if (window.location.hash === '#birthday-packages') {
      setTimeout(() => {
        const el = document.getElementById('birthday-packages');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    document.title = "Services — One Team. Every Part of the Experience | Yellow Springs UAE";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore Yellow Springs' five distinct event worlds across the UAE: Engagements & Weddings, Corporate Events, AV & Sound Rentals, Artist Management, Luxury Event Rentals, and All-Inclusive Birthday Party Packages. One team coordinating every part of the experience."
      );
    }
  }, []);

  const handleScrollToIntro = () => {
    const el = document.getElementById('services-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] selection:bg-[#382B25] selection:text-[#F5F0E6] relative">
      
      {/* Subtle Desktop Sticky Indicator (01 - 05) */}
      <ServicesStickyNav />

      {/* 01 — SERVICES HERO */}
      <ServicesHero onScrollDown={handleScrollToIntro} />

      {/* 02 — FIVE WORLDS / SERVICE INTRODUCTION */}
      <ServicesIntro />

      {/* 03 — ENGAGEMENTS & WEDDINGS */}
      <ServiceWeddings onOpenPlanner={onOpenPlanner} />

      {/* 04 — CORPORATE EVENTS */}
      <ServiceCorporate onOpenPlanner={onOpenPlanner} />

      {/* 05 — AV & SOUND EQUIPMENT RENTALS */}
      <ServiceAV onOpenPlanner={onOpenPlanner} />

      {/* 06 — ARTIST MANAGEMENT */}
      <ServiceArtists onOpenPlanner={onOpenPlanner} />

      {/* 07 — RENTALS */}
      <ServiceRentals onOpenPlanner={onOpenPlanner} />

      {/* 07.B — BIRTHDAYS & PRIVATE CELEBRATIONS (PART OF SERVICES) */}
      <ServiceBirthdays />

      {/* 08 — CONNECTED CAPABILITIES */}
      <ServicesConnected />

      {/* 09 — HOW IT COMES TOGETHER */}
      <ServicesProcess onOpenPlanner={onOpenPlanner} />

      {/* 10 — FINAL CTA */}
      <ServicesFinalCTA onOpenPlanner={onOpenPlanner} />

    </div>
  );
}
