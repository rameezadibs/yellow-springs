import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPARISON_ROWS, BIRTHDAY_PACKAGES } from '../../data/birthdayPackagesData';

export default function BirthdayCompareTable({ onChoosePackage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileComparePkg, setMobileComparePkg] = useState('gold');

  const selectedMobilePkg = BIRTHDAY_PACKAGES.find((p) => p.id === mobileComparePkg) || BIRTHDAY_PACKAGES[2];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#382B25] border-b border-[#382B25]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Expand Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#382B25]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#382B25]/70">
                NOT SURE WHICH ONE?
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight">
              Find your kind
              <br />
              <span className="italic">of celebration.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#382B25] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#382B25] hover:text-[#F5F0E6] transition-all cursor-pointer group"
            >
              <span>{isOpen ? 'HIDE COMPARISON TABLE' : 'COMPARE ALL PACKAGES'}</span>
              {isOpen ? (
                <Minus className="w-4 h-4 transition-transform group-hover:rotate-180" />
              ) : (
                <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Comparison Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              
              {/* DESKTOP TABLE */}
              <div className="hidden lg:block border border-[#382B25]/20 bg-[#F5F0E6]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#382B25]/20 bg-[#382B25]/5">
                      <th className="py-5 px-6 text-xs uppercase tracking-[0.2em] font-bold text-[#382B25] w-1/3">
                        SERVICE INCLUSIONS
                      </th>
                      {BIRTHDAY_PACKAGES.map((pkg) => (
                        <th key={pkg.id} className="py-5 px-4 text-center border-l border-[#382B25]/15">
                          <div className="text-[10px] font-mono tracking-widest text-[#382B25]/50">
                            {pkg.num}
                          </div>
                          <div className="font-editorial text-lg font-bold text-[#382B25]">
                            {pkg.name}
                          </div>
                          <div className="text-xs font-semibold text-[#382B25]/80 mt-0.5">
                            {pkg.priceFormatted}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <tr
                          key={row.name}
                          className={`border-b border-[#382B25]/10 transition-colors hover:bg-[#382B25]/5 ${
                            isEven ? 'bg-transparent' : 'bg-[#382B25]/[0.02]'
                          }`}
                        >
                          <td className="py-3.5 px-6 text-xs sm:text-sm font-medium text-[#382B25]">
                            {row.name}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-[#382B25]/10">
                            {row.basic ? (
                              <Check className="w-4 h-4 mx-auto text-[#382B25] stroke-[2.5]" />
                            ) : (
                              <span className="text-[#382B25]/25 font-light">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-[#382B25]/10">
                            {row.silver ? (
                              <Check className="w-4 h-4 mx-auto text-[#382B25] stroke-[2.5]" />
                            ) : (
                              <span className="text-[#382B25]/25 font-light">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-[#382B25]/10 bg-[#382B25]/[0.03]">
                            {row.gold ? (
                              <Check className="w-4 h-4 mx-auto text-[#382B25] stroke-[2.5]" />
                            ) : (
                              <span className="text-[#382B25]/25 font-light">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-[#382B25]/10">
                            {row.diamond ? (
                              <Check className="w-4 h-4 mx-auto text-[#382B25] stroke-[2.5]" />
                            ) : (
                              <span className="text-[#382B25]/25 font-light">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center border-l border-[#382B25]/10">
                            {row.platinum ? (
                              <Check className="w-4 h-4 mx-auto text-[#382B25] stroke-[2.5]" />
                            ) : (
                              <span className="text-[#382B25]/25 font-light">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#382B25]/5 border-t border-[#382B25]/20">
                      <td className="py-4 px-6 text-xs text-[#382B25]/60 font-light">
                        Select a package to start building your quote
                      </td>
                      {BIRTHDAY_PACKAGES.map((pkg) => (
                        <td key={pkg.id} className="py-4 px-3 text-center border-l border-[#382B25]/15">
                          <button
                            onClick={() => onChoosePackage(pkg)}
                            className="px-3 py-1.5 bg-[#382B25] text-[#F5F0E6] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#251C17] transition-all cursor-pointer"
                          >
                            SELECT
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* MOBILE ADAPTIVE VIEW (Clean Package Switching View) */}
              <div className="lg:hidden border border-[#382B25]/20 p-5 bg-[#F5F0E6]">
                <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 border-b border-[#382B25]/15">
                  {BIRTHDAY_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setMobileComparePkg(pkg.id)}
                      className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer transition-all ${
                        mobileComparePkg === pkg.id
                          ? 'bg-[#382B25] text-[#F5F0E6]'
                          : 'bg-[#382B25]/5 text-[#382B25]/70'
                      }`}
                    >
                      {pkg.name} ({pkg.priceFormatted})
                    </button>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {COMPARISON_ROWS.map((row) => {
                    const isAvailable = row[selectedMobilePkg.id];
                    return (
                      <div
                        key={row.name}
                        className={`flex items-center justify-between py-2 px-3 text-xs border-b border-[#382B25]/10 ${
                          isAvailable ? 'text-[#382B25]' : 'text-[#382B25]/35'
                        }`}
                      >
                        <span>{row.name}</span>
                        {isAvailable ? (
                          <div className="flex items-center gap-1 text-[#382B25] font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span>INCLUDED</span>
                          </div>
                        ) : (
                          <span className="text-[#382B25]/30 font-light">—</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => onChoosePackage(selectedMobilePkg)}
                  className="w-full py-3 bg-[#382B25] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#251C17] transition-all cursor-pointer text-center"
                >
                  CHOOSE {selectedMobilePkg.name} ({selectedMobilePkg.priceFormatted}) ↗
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
