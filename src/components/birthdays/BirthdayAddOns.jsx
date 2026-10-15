import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { ADD_ON_CATEGORIES } from '../../data/birthdayPackagesData';

export default function BirthdayAddOns({ selectedAddOns = [], onToggleAddOn, onProceedToBuilder }) {
  // Start with first category open
  const [openCategory, setOpenCategory] = useState('entertainment');

  const handleCategoryToggle = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const totalSelected = selectedAddOns.length;

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#382B25] text-[#F5F0E6] border-b border-[#F5F0E6]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-18 pb-10 border-b border-[#F5F0E6]/15">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#F5F0E6]/70">
                MAKE IT EVEN MORE YOURS
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#F5F0E6]">
              Add a little
              <br />
              <span className="italic font-normal">extra magic.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-sm text-[#F5F0E6]/75 font-light leading-relaxed mb-4">
              Already found your preferred package? Enhance the celebration with individual live acts, food stations, workshops, and custom staging.
            </p>
            {totalSelected > 0 && (
              <div className="flex items-center gap-3 text-xs text-[#FFE600] font-semibold tracking-wider">
                <span>{totalSelected} EXTRA{totalSelected > 1 ? 'S' : ''} SELECTED</span>
                <span>•</span>
                <button
                  onClick={onProceedToBuilder}
                  className="underline hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  View in Builder ↓
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Editorial Accordion Category Explorer */}
        <div className="divide-y divide-[#F5F0E6]/15 border-t border-b border-[#F5F0E6]/15">
          {ADD_ON_CATEGORIES.map((category) => {
            const isOpen = openCategory === category.id;
            const categorySelectedCount = category.items.filter((item) =>
              selectedAddOns.includes(item.name)
            ).length;

            return (
              <div key={category.id} className="transition-colors hover:bg-[#F5F0E6]/[0.02]">
                
                {/* Category Header Row */}
                <button
                  onClick={() => handleCategoryToggle(category.id)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs font-mono tracking-widest text-[#F5F0E6]/40 group-hover:text-[#FFE600] transition-colors">
                      {category.num}
                    </span>
                    <div>
                      <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-[#F5F0E6] group-hover:text-[#FFE600] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#F5F0E6]/60 font-light mt-1 hidden sm:block">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    {categorySelectedCount > 0 && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FFE600] text-[#382B25] font-bold">
                        {categorySelectedCount} ADDED
                      </span>
                    )}
                    <div className="w-8 h-8 rounded-full border border-[#F5F0E6]/20 flex items-center justify-center text-[#F5F0E6] group-hover:border-[#F5F0E6] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Inclusions List */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {category.items.map((item) => {
                          const isSelected = selectedAddOns.includes(item.name);

                          return (
                            <div
                              key={item.name}
                              onClick={() => onToggleAddOn(item.name)}
                              className={`p-4 md:p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-[#F5F0E6] text-[#382B25] border-[#F5F0E6]'
                                  : 'bg-[#F5F0E6]/5 text-[#F5F0E6] border-[#F5F0E6]/15 hover:border-[#F5F0E6]/40 hover:bg-[#F5F0E6]/10'
                              }`}
                            >
                              <div>
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <h4 className="text-sm md:text-base font-semibold tracking-wide">
                                    {item.name}
                                  </h4>
                                  <div
                                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                                      isSelected
                                        ? 'bg-[#382B25] text-[#F5F0E6] border-[#382B25]'
                                        : 'border-[#F5F0E6]/30 text-transparent'
                                    }`}
                                  >
                                    <Check className="w-3 h-3 stroke-[2.5]" />
                                  </div>
                                </div>
                                <p className={`text-xs font-light leading-relaxed ${
                                  isSelected ? 'text-[#382B25]/80' : 'text-[#F5F0E6]/70'
                                }`}>
                                  {item.desc}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-current/15 flex items-center justify-between text-[10px] tracking-widest uppercase font-semibold">
                                <span>{isSelected ? 'INCLUDED IN QUOTE' : '+ ADD TO ENQUIRY'}</span>
                                <span className="opacity-60">BESPOKE</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Linking to Builder */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#F5F0E6]/10 text-xs text-[#F5F0E6]/70">
          <div>
            Have a custom requirement not listed here? We build custom themes, stages, and installations.
          </div>
          <button
            onClick={onProceedToBuilder}
            className="inline-flex items-center gap-2 text-[#FFE600] uppercase tracking-widest font-semibold hover:text-[#F5F0E6] transition-colors cursor-pointer"
          >
            <span>PROCEED TO PARTY BUILDER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
