import React from 'react';
import { 
  ShieldCheck, Zap, Bot, DollarSign, Award, 
  Users, CheckCircle2, Lock, HeartHandshake
} from 'lucide-react';

export function WhyChooseUs({ onOpenLeadModal }) {
  const differentiators = [
    {
      icon: DollarSign,
      title: 'Transparent Pricing, Zero Hidden Fees',
      desc: 'No surprise bills. We calculate government fees and professional charges upfront with 100% transparency before you pay a single rupee.'
    },
    {
      icon: Zap,
      title: 'Fastest Incorporation Turnaround',
      desc: 'Our direct digital integration with MCA V3 portal and automated document preparation cuts typical incorporation times down to just 7-10 days.'
    },
    {
      icon: Bot,
      title: '5 Specialized AI Legal & Tax Advisors',
      desc: 'Get immediate 24/7 statutory guidance on company law, ITR optimization, GST rules, and trademark classes before scheduling human CA calls.'
    },
    {
      icon: Users,
      title: '150+ In-House Chartered Accountants',
      desc: 'Unlike aggregators who outsource to unvetted third parties, every TaxsPoint application is prepared and reviewed by our licensed senior CAs & CSs.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade 256-Bit SSL Security',
      desc: 'Your PAN, Aadhaar, and bank statements are stored in our ISO 27001 compliant vault, protected under strict nondisclosure agreements.'
    },
    {
      icon: HeartHandshake,
      title: '100% Money-Back Satisfaction Guarantee',
      desc: 'If we are unable to process your incorporation or registration due to our oversight, we refund your professional fee in full. No questions asked.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>The TaxsPoint Advantage</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why 50,000+ Indian Founders Trust TaxsPoint
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Compare our tech-driven platform against traditional offline CAs and discover the difference.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: TaxsPoint vs Traditional CA vs Others */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-dark to-brand-navy p-5 text-white text-center font-bold text-base sm:text-lg">
            How TaxsPoint Outperforms Traditional Legal Services
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4">Feature / Service</th>
                  <th className="p-4 text-brand-blue font-black text-base bg-blue-50/60">TaxsPoint</th>
                  <th className="p-4 text-slate-500">Traditional Offline CA</th>
                  <th className="p-4 text-slate-500">Other Online Portals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Physical Office Visits</td>
                  <td className="p-4 font-bold text-emerald-600 bg-blue-50/40">Zero (100% Online)</td>
                  <td className="p-4 text-slate-500">Multiple office visits</td>
                  <td className="p-4 text-slate-500">Usually 100% online</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Live Application Tracking</td>
                  <td className="p-4 font-bold text-emerald-600 bg-blue-50/40">Real-time Stage Portal</td>
                  <td className="p-4 text-slate-500">Call & chase for updates</td>
                  <td className="p-4 text-slate-500">Email only</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">5 Specialized AI Advisors</td>
                  <td className="p-4 font-bold text-emerald-600 bg-blue-50/40">Included 24/7 Free</td>
                  <td className="p-4 text-slate-500">None</td>
                  <td className="p-4 text-slate-500">None</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Transparent Pricing</td>
                  <td className="p-4 font-bold text-emerald-600 bg-blue-50/40">Upfront with zero hidden fees</td>
                  <td className="p-4 text-slate-500">Vague estimates</td>
                  <td className="p-4 text-slate-500">Hidden checkout add-ons</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Turnaround Guarantee</td>
                  <td className="p-4 font-bold text-emerald-600 bg-blue-50/40">Fastest 7-10 Days</td>
                  <td className="p-4 text-slate-500">3 - 6 Weeks</td>
                  <td className="p-4 text-slate-500">12 - 18 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
