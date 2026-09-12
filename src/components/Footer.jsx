import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, Heart, 
  ArrowRight, Bot, Lock, Award
} from 'lucide-react';

export function Footer({ onNavigate, onSelectService, services, onOpenLeadModal }) {
  const cities = [
    'Company Registration in Bengaluru', 'Company Registration in Delhi NCR',
    'Company Registration in Mumbai', 'Company Registration in Hyderabad',
    'Company Registration in Pune', 'Company Registration in Chennai',
    'Company Registration in Kolkata', 'Company Registration in Ahmedabad',
    'Company Registration in Gurugram', 'Company Registration in Jaipur'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Quick Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Logo and About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl w-fit">
              <img 
                src="/taxspoint-logo.png" 
                alt="TaxsPoint Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              TaxsPoint is India's leading tech-driven legal and chartered accountancy portal, empowering startups, SMEs, and entrepreneurs with seamless company incorporation, ITR e-filing, GST compliance, and trademark registration.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001:2013 Certified & 256-Bit SSL Encrypted</span>
            </div>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="text-white font-bold text-base mb-3">Headquarters & Support</h4>
            <div className="flex items-start gap-3 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-sky flex-shrink-0 mt-1" />
              <span>Level 5, Tower B, Cyber City, DLF Phase 2, Gurugram, Haryana – 122002</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href="tel:+918447746183" className="hover:text-white transition">+91 84477 46183 (9 AM – 8 PM IST)</a>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>support@taxspoint.com / care@taxspoint.com</span>
            </div>
          </div>

          {/* 5 AI Agents Callout */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-brand-sky font-bold text-xs uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Multi-Agent AI Center Active</span>
            </div>
            <p className="text-xs text-slate-300">
              Have instant questions about GST, ITR 1-4, SPICe+ documents, or NICE trademark classes? Chat live with our 5 AI specialist personas anytime.
            </p>
            <button
              onClick={() => onNavigate('ai-agents')}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-indigo-600 text-white font-bold text-xs hover:opacity-95 transition"
            >
              Launch 5 AI Advisors →
            </button>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800/80 text-xs">
          
          {/* Col 1: Incorporation */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Company Registration</h5>
            <ul className="space-y-2 text-slate-400">
              {services.filter(s => s.category === 'incorporation').map(s => (
                <li key={s.id}>
                  <button onClick={() => onSelectService(s)} className="hover:text-white transition text-left">
                    {s.title}
                  </button>
                </li>
              ))}
              <li><button onClick={() => onNavigate('services', 'incorporation')} className="hover:text-brand-sky font-semibold">View all entity types →</button></li>
            </ul>
          </div>

          {/* Col 2: Tax & Compliance */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Tax & GST Filings</h5>
            <ul className="space-y-2 text-slate-400">
              {services.filter(s => s.category === 'tax').map(s => (
                <li key={s.id}>
                  <button onClick={() => onSelectService(s)} className="hover:text-white transition text-left">
                    {s.title}
                  </button>
                </li>
              ))}
              <li><button onClick={() => onNavigate('services', 'tax')} className="hover:text-brand-sky font-semibold">Explore tax packages →</button></li>
            </ul>
          </div>

          {/* Col 3: Trademark & IP */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Trademark & IP</h5>
            <ul className="space-y-2 text-slate-400">
              {services.filter(s => s.category === 'ip').map(s => (
                <li key={s.id}>
                  <button onClick={() => onSelectService(s)} className="hover:text-white transition text-left">
                    {s.title}
                  </button>
                </li>
              ))}
              {services.filter(s => s.category === 'licenses').slice(0, 2).map(s => (
                <li key={s.id}>
                  <button onClick={() => onSelectService(s)} className="hover:text-white transition text-left">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Free Calculators & Tools */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Tools & Portals</h5>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onNavigate('calculators')} className="hover:text-white">Income Tax Calculator (Old vs New)</button></li>
              <li><button onClick={() => onNavigate('calculators')} className="hover:text-white">GST Inclusive / Exclusive Calculator</button></li>
              <li><button onClick={() => onNavigate('calculators')} className="hover:text-white">MCA Name Availability Simulator</button></li>
              <li><button onClick={() => onNavigate('client-portal')} className="hover:text-white">Client Application Tracker</button></li>
              <li><button onClick={() => onNavigate('client-portal')} className="hover:text-white">TaxsPoint Secure Document Vault</button></li>
              <li><button onClick={() => onNavigate('admin-portal')} className="text-amber-400 font-semibold hover:underline">Admin & Operations Hub</button></li>
            </ul>
          </div>

        </div>

        {/* City-wise Services Grid */}
        <div className="py-8 border-b border-slate-800/80">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Popular Locations Across India
          </h5>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
            {cities.map((city, idx) => (
              <span key={idx} className="hover:text-slate-300 cursor-pointer bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Statutory Disclaimer & Copyright */}
        <div className="pt-8 text-slate-500 text-[11px] leading-relaxed space-y-4">
          <p>
            <strong>Disclaimer:</strong> TaxsPoint is a technology platform designed to facilitate business registration, intellectual property protection, and tax compliance assistance. TaxsPoint is not a law firm or chartered accountancy firm and does not directly provide legal opinions or audits. Professional legal and accounting services, where mandated by law, are rendered independently by certified Chartered Accountants, Company Secretaries, and enrolled Advocates adhering to the regulations of ICAI, ICSI, and Bar Council of India.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800 text-slate-400">
            <div>
              © {new Date().getFullYear()} TaxsPoint Technologies Private Limited. All Rights Reserved.
            </div>

            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Refund Policy</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Grievance Officer</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
