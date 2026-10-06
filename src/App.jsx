import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ExperienceShowcase from './components/ExperienceShowcase';
import ServicesIndex from './components/ServicesIndex';
import FeaturedExperience from './components/FeaturedExperience';
import ApproachTimeline from './components/ApproachTimeline';
import CredibilitySection from './components/CredibilitySection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import EventPlannerModal from './components/EventPlannerModal';
import CaseStudyModal from './components/CaseStudyModal';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [plannerInitialService, setPlannerInitialService] = useState('');
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const handleOpenPlanner = (service = '') => {
    setPlannerInitialService(typeof service === 'string' ? service : '');
    setPlannerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#382B25] font-sans selection:bg-[#382B25] selection:text-[#F5F0E6]">
      {/* Editorial Navigation */}
      <Navbar onOpenPlanner={() => handleOpenPlanner()} />

      {/* Main Editorial Story Flow */}
      <main>
        {/* 01 — HERO / FIRST IMPRESSION */}
        <Hero onOpenPlanner={() => handleOpenPlanner()} />

        {/* 02 — INTRODUCTION / WHO YELLOW SPRINGS IS (PHILOSOPHY) */}
        <BrandIntro />

        {/* 03 — SERVICES / WHAT WE DO • CAPABILITIES */}
        <ServicesIndex onOpenPlanner={(srv) => handleOpenPlanner(srv)} />

        {/* 04 — FEATURED PROJECT / VISUAL STORY */}
        <FeaturedExperience onOpenCaseStudy={() => setCaseStudyOpen(true)} />

        {/* 05 — OUR APPROACH / METHODOLOGY • HOW WE CREATE */}
        <ApproachTimeline />

        {/* 06 — SELECTED EVENT EXPERIENCES */}
        <ExperienceShowcase onOpenPlanner={() => handleOpenPlanner()} />

        {/* 07 — EXPERIENCE / CREDIBILITY */}
        <CredibilitySection />

        {/* 09 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* 10 — FINAL EVENT CTA */}
        <FinalCTASection onOpenPlanner={() => handleOpenPlanner()} />
      </main>

      {/* 11 — FOOTER */}
      <Footer onOpenPlanner={() => handleOpenPlanner()} />

      {/* Interactive Modals */}
      <EventPlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        initialService={plannerInitialService}
      />

      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
        onOpenPlanner={(srv) => handleOpenPlanner(srv)}
      />
    </div>
  );
}
