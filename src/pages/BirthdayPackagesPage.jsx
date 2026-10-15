import React, { useState, useEffect } from 'react';
import BirthdayHero from '../components/birthdays/BirthdayHero';
import BirthdayPackageIntro from '../components/birthdays/BirthdayPackageIntro';
import BirthdayPackageExplorer from '../components/birthdays/BirthdayPackageExplorer';
import BirthdayCompareTable from '../components/birthdays/BirthdayCompareTable';
import BirthdayAddOns from '../components/birthdays/BirthdayAddOns';
import BirthdayPartyBuilder from '../components/birthdays/BirthdayPartyBuilder';
import BirthdayVisualBreak from '../components/birthdays/BirthdayVisualBreak';
import BirthdayWhyParents from '../components/birthdays/BirthdayWhyParents';
import BirthdayFinalCTA from '../components/birthdays/BirthdayFinalCTA';

export default function BirthdayPackagesPage({ onOpenPlanner }) {
  const [activePackageId, setActivePackageId] = useState('gold');
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Birthday Party Packages — Big Smiles, Zero Boring Parties | Yellow Springs UAE";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore Yellow Springs' all-inclusive children's birthday party packages across Dubai & UAE. From AED 1,500 with theme decor, entertainers, magic shows, bouncy castles, and 25+ bespoke add-ons."
      );
    }
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
    handleScrollToSection('party-builder');
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
      
      {/* 01 — PAGE / SECTION HERO */}
      <BirthdayHero
        onExplorePackages={() => handleScrollToSection('packages-section')}
        onBuildParty={() => handleScrollToSection('party-builder')}
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
        onProceedToBuilder={() => handleScrollToSection('party-builder')}
      />

      {/* 07 — BUILD YOUR PARTY (4-Step Quotation Builder) */}
      <BirthdayPartyBuilder
        selectedPackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
        selectedAddOns={selectedAddOns}
        onToggleAddOn={handleToggleAddOn}
      />

      {/* 08 — VISUAL BREAK (Full-Width Candid Photography) */}
      <BirthdayVisualBreak />

      {/* 09 — WHY PARENTS WILL LIKE THIS (Typographic 3-Point Promise) */}
      <BirthdayWhyParents />

      {/* 10 — FINAL CTA (Warm Ivory with Large Espresso Typography) */}
      <BirthdayFinalCTA
        onPlanParty={() => handleScrollToSection('party-builder')}
      />

    </div>
  );
}
