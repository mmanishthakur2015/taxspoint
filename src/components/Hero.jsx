import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Star, Clock, ArrowRight, 
  Sparkles, Lock, PhoneCall, Bot, Building, FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function Hero({ onSelectService, services, onOpenLeadModal, onNavigate }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0]?.id || 'pvt-ltd');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: 'Private Limited Company Registration'
  });
  const [submitted, setSubmitted] = useState(false);

  const currentSelectedService = services.find(s => s.id === selectedServiceId) || services[0];

  const handleSubmitLead = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Save lead to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('taxspoint_leads') || '[]');
      const newLead = {
        id: 'LEAD-' + Math.floor(100000 + Math.random() * 900000),
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'Callback Scheduled'
      };
      localStorage.setItem('taxspoint_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error(err);
    }

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Trust Factors */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm text-xs font-semibold text-brand-dark">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>India's Most Trusted Legaltech Platform</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-blue flex items-center gap-1">
                <Bot className="w-3.5 h-3.5" /> 5 AI Agents Active
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-blue to-emerald-600">
                Company Registration, Tax Filing & Legal Growth
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Incorporate your company, file error-free ITR & GST returns, and protect your trademark with zero visits to government offices. Guided by senior Chartered Accountants and powered by our 5 specialized AI Advisors.
            </p>

            {/* Quick Interactive Service Selector Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                <span>Select a Service to View Instant Estimate</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">
                  Guaranteed Best Price
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-7">
                  <select 
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full h-12 px-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 font-medium text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.categoryName})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-3 bg-slate-50 p-2 sm:p-0 rounded-xl sm:bg-transparent">
                  <div className="text-left sm:text-right">
                    <div className="text-xs text-slate-500 line-through">₹{currentSelectedService.originalPrice.toLocaleString()}</div>
                    <div className="text-lg font-bold text-slate-900 leading-none">
                      ₹{currentSelectedService.price.toLocaleString()}
                      <span className="text-xs font-normal text-slate-500 ml-1">+ govt fee</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectService(currentSelectedService)}
                    className="px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow"
                  >
                    <span>Get Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Turnaround: <strong className="text-slate-700">{currentSelectedService.turnaround}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Rating: <strong className="text-slate-700">{currentSelectedService.rating}/5.0</strong> ({currentSelectedService.reviewsCount}+ reviews)
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">
                  50k+
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Satisfied Clients</div>
                  <div className="text-slate-500">Across 28 Indian States</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">100% ISO 27001</div>
                  <div className="text-slate-500">Encrypted Document Vault</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">4.9 / 5 Rating</div>
                  <div className="text-slate-500">Google & Trustpilot</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">5 AI Specialists</div>
                  <div className="text-slate-500">Instant Free Advice</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Callback Lead Generation Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">
                    Instant Free Callback
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Speak with a Senior CA
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Get a transparent breakdown of government fees, tax advantages, and required documents. Average callback time: <strong className="text-emerald-700">12 minutes</strong>.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3 bg-emerald-50/70 rounded-2xl border border-emerald-200 p-6 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. A dedicated CA/CS from TaxsPoint is reviewing your requirement and will call you on <strong className="text-slate-800">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-brand-blue hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-xs text-slate-600 font-semibold">
                          +91
                        </span>
                        <input 
                          type="tel" 
                          required
                          pattern="[0-9]{10}"
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-3 rounded-r-xl border border-slate-200 text-sm focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Service
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-slate-200 text-xs focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none bg-white transition"
                      >
                        <option value="Private Limited Company Registration">Private Limited Company</option>
                        <option value="Limited Liability Partnership (LLP)">LLP Registration</option>
                        <option value="One Person Company (OPC)">One Person Company</option>
                        <option value="GST Registration">GST Registration</option>
                        <option value="Income Tax Return (ITR)">ITR Filing</option>
                        <option value="Trademark Registration">Trademark (TM)</option>
                        <option value="MSME / Udyam Registration">MSME Udyam</option>
                        <option value="Startup India (DPIIT)">Startup India DPIIT</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City / State
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Mumbai, Bengaluru"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                  >
                    <span>Request Free Callback & Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact information is strictly confidential under NDA</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
