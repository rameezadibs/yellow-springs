import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutMissionVision from '../components/about/AboutMissionVision';
import AboutWhyUs from '../components/about/AboutWhyUs';
import AboutPeople from '../components/about/AboutPeople';
import AboutFAQ from '../components/about/AboutFAQ';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

export default function AboutPage({ onOpenPlanner, onNavigateHome: _onNavigateHome }) {
  // Update document title and meta description on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "About Yellow Springs — Behind The Moments | Event Management & Production UAE";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore the story, founders, and behind-the-scenes craftsmanship of Yellow Springs. 15+ years of bespoke event production, corporate galas, and celebrations across Dubai and the UAE."
      );
    }
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById('mission-vision');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] selection:bg-[#382B25] selection:text-[#F5F0E6]">
      {/* 01 — ABOUT HERO */}
      <AboutHero onScrollDown={handleScrollDown} />

      {/* 02 — MISSION & VISION */}
      <AboutMissionVision />

      {/* 03 — WHY YELLOW SPRINGS */}
      <AboutWhyUs />

      {/* 04 — THE PEOPLE BEHIND IT */}
      <AboutPeople />

      {/* 05 — FREQUENTLY ASKED QUESTIONS */}
      <AboutFAQ onOpenPlanner={onOpenPlanner} />

      {/* 06 — FINAL CTA */}
      <AboutFinalCTA onOpenPlanner={onOpenPlanner} />
    </div>
  );
}
