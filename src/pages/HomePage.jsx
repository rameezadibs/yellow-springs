import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ServicesIndex from '../components/ServicesIndex';
import FeaturedExperience from '../components/FeaturedExperience';
import ApproachTimeline from '../components/ApproachTimeline';
import ExperienceShowcase from '../components/ExperienceShowcase';
import CredibilitySection from '../components/CredibilitySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';

export default function HomePage({ onOpenPlanner, onOpenCaseStudy }) {
  useEffect(() => {
    document.title = "Yellow Springs — Event Management & Production UAE | Your Event Buddies";
  }, []);

  return (
    <>
      {/* 01 — HERO / FIRST IMPRESSION */}
      <Hero onOpenPlanner={onOpenPlanner} />

      {/* 02 — INTRODUCTION / WHO YELLOW SPRINGS IS (PHILOSOPHY) */}
      <BrandIntro />

      {/* 03 — SERVICES / WHAT WE DO • CAPABILITIES */}
      <ServicesIndex onOpenPlanner={onOpenPlanner} />

      {/* 04 — FEATURED PROJECT / VISUAL STORY */}
      <FeaturedExperience onOpenCaseStudy={onOpenCaseStudy} />

      {/* 05 — OUR APPROACH / METHODOLOGY • HOW WE CREATE */}
      <ApproachTimeline />

      {/* 06 — SELECTED EVENT EXPERIENCES */}
      <ExperienceShowcase onOpenPlanner={onOpenPlanner} />

      {/* 07 — EXPERIENCE / CREDIBILITY */}
      <CredibilitySection />

      {/* 08 — TESTIMONIALS */}
      <TestimonialsSection />

      {/* 09 — FINAL EVENT CTA */}
      <FinalCTASection onOpenPlanner={onOpenPlanner} />
    </>
  );
}
