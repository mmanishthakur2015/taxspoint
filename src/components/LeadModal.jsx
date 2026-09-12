import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Lock, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export function LeadModal({ isOpen, onClose, defaultTopic = 'Free CA Consultation' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: defaultTopic,
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

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
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-blue p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Free 1-on-1 Consultation
            </span>
          </div>

          <h3 className="text-xl font-bold">
            Connect with a Senior CA / Legal Counsel
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            Topic: <strong className="text-white">{defaultTopic}</strong>
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Callback Scheduled!
              </h4>
              <p className="text-xs text-slate-600">
                A dedicated Chartered Accountant will call you on <strong>{formData.phone}</strong> within 15 minutes.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Manish Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">City / State</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Delhi, Bengaluru"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirement or Question</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Want to know total cost for Pvt Ltd registration or ITR-4 filing..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:border-brand-blue outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Request Priority Free Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero spam guarantee. 100% confidential.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
