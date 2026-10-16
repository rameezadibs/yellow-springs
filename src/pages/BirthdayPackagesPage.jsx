import React, { useState, useEffect } from 'react';
import BirthdayHero from '../components/birthdays/BirthdayHero';
import BirthdayPackageIntro from '../components/birthdays/BirthdayPackageIntro';
import BirthdayPackageExplorer from '../components/birthdays/BirthdayPackageExplorer';
import BirthdayCompareTable from '../components/birthdays/BirthdayCompareTable';
import BirthdayAddOns from '../components/birthdays/BirthdayAddOns';
import BirthdayVisualBreak from '../components/birthdays/BirthdayVisualBreak';
import { SEO_DATA, buildServiceJsonLd } from '../data/seoData';
import SEOHead from '../components/SEOHead';
import ServiceSEOSection from '../components/services/ServiceSEOSection';

export default function BirthdayPackagesPage({ onOpenPlanner }) {
  const [activePackageId, setActivePackageId] = useState('gold');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const seoData = SEO_DATA.birthdays;
  const jsonLd = buildServiceJsonLd('birthdays');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleScrollToSection = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkgId) => {
    setActivePackageId(pkgId);
  };

  const handleChoosePackage = (pkg) => {
    setActivePackageId(pkg.id);
    if (onOpenPlanner) {
      onOpenPlanner(`Birthday Packages - ${pkg.name}`);
    }
  };

  const handleToggleAddOn = (addonName) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonName)
        ? prev.filter((item) => item !== addonName)
        : [...prev, addonName]
    );
  };

  return (
    <div className="bg-[#F5F0E6] text-[#382B25] selection:bg-[#382B25] selection:text-[#F5F0E6] relative">
      
      {/* Dynamic SEO Meta, Open Graph, Geo & Schema.org JSON-LD */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        structuredData={jsonLd}
      />
      
      {/* Top Breadcrumb Navigation */}
      <div className="pt-28 sm:pt-32 px-6 sm:px-10 lg:px-14 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-4 border-b border-[#382B25]/15">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#382B25]/60 hover:text-[#382B25] transition-colors"
          >
            <span>← HOME</span>
          </a>
          <span className="font-mono text-xs tracking-[0.25em] text-[#382B25]/40 uppercase">
            CATEGORY 06 // 06 · BIRTHDAY PACKAGES
          </span>
        </div>
      </div>

      {/* 01 — PAGE / SECTION HERO */}
      <BirthdayHero
        onExplorePackages={() => handleScrollToSection('packages-section')}
        onBuildParty={() => onOpenPlanner && onOpenPlanner('Birthday Packages')}
      />

      {/* 02 — PACKAGE INTRODUCTION */}
      <BirthdayPackageIntro
        activePackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
      />

      {/* 03 & 04 — PACKAGE DESIGN & PROGRESSION */}
      <BirthdayPackageExplorer
        activePackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
        onChoosePackage={handleChoosePackage}
      />

      {/* 05 — COMPARE PACKAGES (Collapsible Matrix) */}
      <BirthdayCompareTable
        onChoosePackage={handleChoosePackage}
      />

      {/* 06 — ADD-ONS (Espresso Brown Accordion Explorer) */}
      <BirthdayAddOns
        selectedAddOns={selectedAddOns}
        onToggleAddOn={handleToggleAddOn}
        onProceedToBuilder={() => onOpenPlanner && onOpenPlanner('Birthday Package Add-Ons')}
      />

      {/* 07 — VISUAL BREAK (Full-Width Candid Photography) */}
      <BirthdayVisualBreak />

      {/* 08 — SEO ARCHITECTURE: FAQS & VENUES (Credentials omitted as requested) */}
      <ServiceSEOSection
        serviceKey="birthdays"
        seoData={seoData}
        onOpenPlanner={onOpenPlanner}
        showCredentials={false}
      />

    </div>
  );
}
