import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
            Verified Founder Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Over 50,000 Growing Businesses
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read authentic reviews from founders, CFOs, and business owners who incorporated and filed their taxes with TaxsPoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map(item => (
            <div 
              key={item.id}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-xl hover:bg-white hover:border-blue-200 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-blue-300 transition-colors" />
                </div>

                <div className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                  {item.service}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Ratings Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
            <div className="text-xs text-slate-500">Google Rating (8,400+ reviews)</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200" />
          <div>
            <div className="text-2xl font-black text-slate-900">4.8 / 5.0</div>
            <div className="text-xs text-slate-500">Trustpilot Verified Score</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-200" />
          <div>
            <div className="text-2xl font-black text-slate-900">99.4%</div>
            <div className="text-xs text-slate-500">On-Time Filing Guarantee</div>
          </div>
        </div>

      </div>
    </section>
  );
}
