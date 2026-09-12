import React from 'react';
import { 
  FileCheck2, UserCheck, Landmark, CheckCircle, 
  ArrowRight, ShieldCheck, Sparkles, Clock
} from 'lucide-react';

export function HowItWorks({ onOpenLeadModal }) {
  const steps = [
    {
      step: '01',
      title: 'Fill Quick Form & Upload KYC',
      desc: 'Choose your desired service and upload digital copies of PAN, Aadhaar, and electricity bill. No physical paperwork or courier required.',
      icon: FileCheck2,
      tag: '100% Paperless'
    },
    {
      step: '02',
      title: 'Dedicated CA Assigned',
      desc: 'A qualified Chartered Accountant or Company Secretary is assigned to your case within 30 minutes to review and approve all documentation.',
      icon: UserCheck,
      tag: 'CA / CS Verified'
    },
    {
      step: '03',
      title: 'Govt Filing & SPICe+ Processing',
      desc: 'We generate Class 3 DSC, reserve your brand name, draft MoA/AoA, and submit your application to MCA, GSTN, or Trade Marks Registry.',
      icon: Landmark,
      tag: 'Fast-Track Tracked'
    },
    {
      step: '04',
      title: 'Certificate Issued to Vault',
      desc: 'Your government-stamped Certificate of Incorporation, GSTIN, or TM number is instantly uploaded to your secure TaxsPoint Vault.',
      icon: CheckCircle,
      tag: 'Instant Access'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue font-bold text-xs uppercase tracking-wider">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How TaxsPoint Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We eliminated long queues and bureaucratic confusion. Here is how your company or compliance gets completed from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 relative flex flex-col justify-between hover:shadow-xl hover:bg-white hover:border-blue-300 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-brand-blue transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs font-semibold text-brand-blue flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenLeadModal('How It Works Inquiry')}
            className="px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-sm shadow-md transition inline-flex items-center gap-2"
          >
            <span>Start Your Registration Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
