import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export function FAQSection({ onOpenLeadModal }) {
  const [openItems, setOpenItems] = useState({ '0-0': true, '1-0': true });

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear answers to common questions about company registration, tax returns, and trademarks in India.
          </p>
        </div>

        <div className="space-y-8">
          {faqsData.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 pl-1">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div 
                      key={itemIdx}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition"
                    >
                      <button
                        onClick={() => toggleItem(catIdx, itemIdx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-brand-blue transition"
                      >
                        <span>{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h4 className="text-base font-bold text-slate-900">Still have questions?</h4>
          <p className="text-xs text-slate-500">
            Our Chartered Accountants and Corporate Lawyers are here to assist you.
          </p>
          <button
            onClick={() => onOpenLeadModal('FAQ Bottom Assistance')}
            className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs transition"
          >
            Speak to a Legal Advisor Now →
          </button>
        </div>

      </div>
    </section>
  );
}
