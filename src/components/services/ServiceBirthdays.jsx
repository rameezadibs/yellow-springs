import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import BirthdayPackageIntro from '../birthdays/BirthdayPackageIntro';
import BirthdayPackageExplorer from '../birthdays/BirthdayPackageExplorer';
import BirthdayCompareTable from '../birthdays/BirthdayCompareTable';
import BirthdayAddOns from '../birthdays/BirthdayAddOns';
import BirthdayPartyBuilder from '../birthdays/BirthdayPartyBuilder';
import BirthdayVisualBreak from '../birthdays/BirthdayVisualBreak';
import BirthdayWhyParents from '../birthdays/BirthdayWhyParents';

export default function ServiceBirthdays() {
  const [activePackageId, setActivePackageId] = useState('gold');
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleSelectPackage = (pkgId) => {
    setActivePackageId(pkgId);
  };

  const handleChoosePackage = (pkg) => {
    setActivePackageId(pkg.id);
    const builder = document.getElementById('party-builder');
    if (builder) {
      builder.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleAddOn = (addonName) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonName)
        ? prev.filter((item) => item !== addonName)
        : [...prev, addonName]
    );
  };

  const handleScrollToBuilder = () => {
    const builder = document.getElementById('party-builder');
    if (builder) {
      builder.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="birthday-packages" className="relative bg-[#F5F0E6] text-[#382B25] border-t border-[#382B25]/15">
      
      {/* Editorial Section Gateway Header */}
      <section className="pt-24 sm:pt-32 pb-14 px-6 sm:px-10 lg:px-14 bg-[#FAF7F0] border-b border-[#382B25]/10">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Meta Label */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#382B25]" />
                <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#382B25]/75 font-semibold uppercase">
                  SERVICES // BIRTHDAYS &amp; PRIVATE CELEBRATIONS
                </span>
                <span className="w-12 h-[1px] bg-[#382B25]/25" />
              </div>

              {/* Headline */}
              <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#382B25]">
                Pick the party.
                <br />
                <span className="italic font-normal">We’ll bring the fun.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#382B25]/80 font-light leading-relaxed max-w-2xl">
                In addition to custom luxury events, Yellow Springs provides structured, turnkey birthday party packages across Dubai &amp; Abu Dhabi. From the decorations and staging to live entertainment, sweet carts, and bounce castles — everything is handled by one unified team.
              </p>
            </div>

            {/* Quick Pill Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-xs font-mono text-[#382B25]/60 uppercase tracking-widest">
                5 TIERS • FROM AED 1,500
              </div>
              <button
                type="button"
                onClick={handleScrollToBuilder}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#382B25] text-[#F5F0E6] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#251C17] transition-all cursor-pointer shadow-sm"
              >
                <span>BUILD YOUR PARTY</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 01 — 5-Tier Package Overview Strip */}
      <BirthdayPackageIntro
        activePackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
      />

      {/* 02 — Interactive Package Explorer & Stepped Progression */}
      <BirthdayPackageExplorer
        activePackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
        onChoosePackage={handleChoosePackage}
      />

      {/* 03 — Collapsible Comparison Table */}
      <BirthdayCompareTable
        onChoosePackage={handleChoosePackage}
      />

      {/* 04 — Add-Ons Explorer in Espresso Brown */}
      <BirthdayAddOns
        selectedAddOns={selectedAddOns}
        onToggleAddOn={handleToggleAddOn}
        onProceedToBuilder={handleScrollToBuilder}
      />

      {/* 05 — 4-Step Interactive Quotation Builder */}
      <BirthdayPartyBuilder
        selectedPackageId={activePackageId}
        onSelectPackage={handleSelectPackage}
        selectedAddOns={selectedAddOns}
        onToggleAddOn={handleToggleAddOn}
      />

      {/* 06 — Visual Break */}
      <BirthdayVisualBreak />

      {/* 07 — Why Parents Choose Us (Typographic) */}
      <BirthdayWhyParents />

    </div>
  );
}
