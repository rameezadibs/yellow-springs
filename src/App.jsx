import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventPlannerModal from './components/EventPlannerModal';
import CaseStudyModal from './components/CaseStudyModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [plannerInitialService, setPlannerInitialService] = useState('');
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenPlanner = (service = '') => {
    setPlannerInitialService(typeof service === 'string' ? service : '');
    setPlannerOpen(true);
  };

  const handleNavigateHome = (hash = '') => {
    navigate('/' + hash);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#382B25] font-sans selection:bg-[#382B25] selection:text-[#F5F0E6]">
      {/* Editorial Navigation */}
      <Navbar onOpenPlanner={() => handleOpenPlanner()} />

      {/* Page Routing */}
      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenPlanner={handleOpenPlanner}
                onOpenCaseStudy={() => setCaseStudyOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenPlanner={() => handleOpenPlanner()}
                onNavigateHome={handleNavigateHome}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenPlanner={handleOpenPlanner}
              />
            }
          />
          <Route
            path="/birthday-packages"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="/birthdays"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenPlanner={handleOpenPlanner}
                onOpenCaseStudy={() => setCaseStudyOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
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
