import React, { useState } from 'react';
import { 
  Building2, Receipt, Award, Landmark, CheckCircle, 
  ArrowRight, Star, Clock, Sparkles, Filter, ChevronRight
} from 'lucide-react';

export function ServicesGrid({ services, onSelectService, defaultCategory = 'all' }) {
  const [activeTab, setActiveTab] = useState(defaultCategory);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'incorporation', name: 'Company Registration', icon: Building2 },
    { id: 'tax', name: 'Tax & Compliance', icon: Receipt },
    { id: 'ip', name: 'Trademark & IP', icon: Award },
    { id: 'licenses', name: 'Licenses & Approvals', icon: Landmark },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services-section" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-brand-blue font-bold text-xs uppercase tracking-wider">
            <span>Explore All Legal Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Corporate, Tax & Legal Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Transparent pricing, zero hidden charges, and continuous guidance from experienced Chartered Accountants and Company Secretaries.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-brand-navy text-white shadow-md shadow-slate-900/20 scale-[1.02]' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-sky' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Details */}
              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {service.categoryName}
                  </span>

                  {service.badge && (
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {service.title}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 mr-1" />
                    <span>{service.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{service.reviewsCount.toLocaleString()} Verified Filings</span>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Deliverables Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pricing & Action Section */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-xs text-slate-400 line-through">
                      ₹{service.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-2xl font-black text-slate-900 leading-none">
                      ₹{service.price.toLocaleString()}
                      <span className="text-xs font-normal text-slate-500 ml-1">starting</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {service.govtFeeNote}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition text-center"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition flex items-center justify-center gap-1"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
