import React, { useState } from 'react';
import { 
  X, CheckCircle2, FileText, Clock, Star, Shield, 
  UploadCloud, ArrowRight, ArrowLeft, Check, Lock, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ServiceModal({ service, onClose, onOrderCreated }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'deliverables', 'documents', 'faqs', 'apply'
  const [applyStep, setApplyStep] = useState(1);
  const [orderForm, setOrderForm] = useState({
    customerName: '',
    email: '',
    phone: '',
    city: '',
    entityName: '',
    natureOfBusiness: '',
    uploadedDocs: ['PAN Card Attached', 'Aadhaar Card Attached']
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  if (!service) return null;

  const handleFinishOrder = () => {
    const orderId = 'TP-' + Math.floor(10000 + Math.random() * 90000);
    setGeneratedOrderId(orderId);

    const newOrder = {
      orderId,
      customerName: orderForm.customerName || 'Entrepreneur',
      email: orderForm.email || 'customer@example.com',
      phone: orderForm.phone || '+91 98000 00000',
      serviceTitle: service.title,
      amount: service.price,
      status: 'Document Verification',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      currentStage: 1, // 0: submitted, 1: doc verification, 2: drafting, 3: mca filing, 4: approved
      assignedCA: 'CA Rajesh Sharma',
      notes: `Application for ${service.title} submitted online. Verification in progress.`
    };

    try {
      const existing = JSON.parse(localStorage.getItem('taxspoint_orders') || '[]');
      localStorage.setItem('taxspoint_orders', JSON.stringify([newOrder, ...existing]));
    } catch (e) {
      console.error(e);
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsCompleted(true);
    if (onOrderCreated) {
      onOrderCreated(newOrder);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden my-auto border border-slate-100 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-blue p-5 sm:p-6 text-white relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-400/20 text-blue-200 uppercase tracking-wider border border-blue-400/30">
              {service.categoryName}
            </span>
            {service.badge && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                {service.badge}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold pr-10">
            {service.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-200">
            <span className="flex items-center gap-1 font-semibold text-amber-300">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{service.rating} / 5.0</span>
              <span className="text-slate-300 font-normal">({service.reviewsCount}+ verified reviews)</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-300" />
              <span>Turnaround: {service.turnaround}</span>
            </span>
            <span>•</span>
            <span className="font-bold text-white text-base">
              ₹{service.price.toLocaleString()} <span className="text-xs text-blue-200 font-normal">{service.govtFeeNote}</span>
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 overflow-x-auto scrollbar-none flex-shrink-0">
          {[
            { id: 'overview', label: 'Overview & Process' },
            { id: 'deliverables', label: 'Deliverables Checklist' },
            { id: 'documents', label: 'Documents Required' },
            { id: 'faqs', label: 'FAQs' },
            { id: 'apply', label: 'Apply Online Now', highlight: true },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-brand-blue text-brand-blue bg-white'
                  : tab.highlight 
                    ? 'border-transparent text-emerald-700 hover:text-emerald-800' 
                    : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2">About this Service</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              {/* 4 Steps Timeline */}
              <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                  End-to-End Filing Timeline ({service.turnaround})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-brand-blue">Day 1</span>
                    <div className="font-semibold text-slate-800">Doc Verification</div>
                    <p className="text-slate-500 text-[11px]">CA verifies PAN, Aadhaar & utility bills</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-brand-blue">Day 2 - 3</span>
                    <div className="font-semibold text-slate-800">DSC & Name Reserve</div>
                    <p className="text-slate-500 text-[11px]">Class 3 DSC generation and RUN name approval</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-brand-blue">Day 4 - 6</span>
                    <div className="font-semibold text-slate-800">Govt Portal Filing</div>
                    <p className="text-slate-500 text-[11px]">Filing on MCA / GST / IP India portal</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1">
                    <span className="font-bold text-emerald-700">Final Step</span>
                    <div className="font-semibold text-slate-800">Certificate Ready</div>
                    <p className="text-slate-500 text-[11px]">Official certificate uploaded to your vault</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-sm shadow-md transition flex items-center gap-2"
                >
                  <span>Proceed to Apply Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Deliverables Tab */}
          {activeTab === 'deliverables' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Official Deliverables Included in this Package
              </h4>
              <div className="space-y-3">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">{item}</div>
                      <div className="text-xs text-slate-500">Provided in digital soft-copy format with government validation QR code.</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}

          {/* Documents Required Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Documents You Need to Provide
              </h4>
              <p className="text-xs text-slate-500">
                You do not need to send physical copies. Just scan or take clear photos on your phone and upload them to our secure portal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm"
                >
                  Start Application
                </button>
              </div>
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Frequently Asked Questions for {service.title}
              </h4>
              <div className="space-y-3">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-sm font-bold text-slate-900">{faq.q}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Online Application Multi-Step Flow Tab */}
          {activeTab === 'apply' && (
            <div className="space-y-6">
              {isCompleted ? (
                <div className="py-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 p-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-600/30">
                    <Check className="w-9 h-9 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      Application Successfully Submitted!
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">
                      Order ID: {generatedOrderId}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Your application for <strong>{service.title}</strong> has been initialized. A dedicated CA has been assigned to verify your documentation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-emerald-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Applicant:</span>
                      <strong>{orderForm.customerName || 'Applicant'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <strong>{orderForm.phone || '+91 98000 00000'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Assigned Professional:</span>
                      <strong className="text-brand-blue">CA Rajesh Sharma (Senior CA)</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Initial Status:</span>
                      <strong className="text-amber-600">Document Verification in Progress</strong>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <button 
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between mb-6 max-w-md mx-auto">
                    {[1, 2, 3].map(step => (
                      <div key={step} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          applyStep === step 
                            ? 'bg-brand-blue text-white shadow-md' 
                            : applyStep > step 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-200 text-slate-500'
                        }`}>
                          {applyStep > step ? <Check className="w-4 h-4" /> : step}
                        </div>
                        <span className={`text-xs font-semibold hidden sm:inline ${
                          applyStep === step ? 'text-brand-blue' : 'text-slate-500'
                        }`}>
                          {step === 1 ? 'Contact Info' : step === 2 ? 'Business Details' : 'Review & Submit'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Contact Details */}
                  {applyStep === 1 && (
                    <div className="space-y-4 max-w-lg mx-auto">
                      <h4 className="text-base font-bold text-slate-900 text-center">
                        Step 1: Primary Applicant Details
                      </h4>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Legal Name *</label>
                        <input 
                          type="text"
                          required
                          placeholder="As per PAN Card"
                          value={orderForm.customerName}
                          onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
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
                            value={orderForm.phone}
                            onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                          <input 
                            type="email"
                            required
                            placeholder="you@domain.com"
                            value={orderForm.email}
                            onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">City / State *</label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Gurugram, Haryana"
                          value={orderForm.city}
                          onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                        />
                      </div>

                      <button 
                        onClick={() => {
                          if (!orderForm.customerName || !orderForm.phone) {
                            alert('Please fill in your name and mobile number.');
                            return;
                          }
                          setApplyStep(2);
                        }}
                        className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-sm transition flex items-center justify-center gap-2"
                      >
                        <span>Continue to Step 2</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 2: Business / Proposed Entity Details */}
                  {applyStep === 2 && (
                    <div className="space-y-4 max-w-lg mx-auto">
                      <h4 className="text-base font-bold text-slate-900 text-center">
                        Step 2: Proposed Entity / Brand Information
                      </h4>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Proposed Company / Brand / Business Name *
                        </label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. TaxsPoint Technologies Private Limited"
                          value={orderForm.entityName}
                          onChange={(e) => setOrderForm({ ...orderForm, entityName: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nature of Business / Industry
                        </label>
                        <input 
                          type="text"
                          placeholder="e.g. Software, E-Commerce, Consulting, Manufacturing"
                          value={orderForm.natureOfBusiness}
                          onChange={(e) => setOrderForm({ ...orderForm, natureOfBusiness: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-brand-blue outline-none"
                        />
                      </div>

                      {/* Document upload simulation */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Upload KYC Documents (Optional at this stage)
                        </label>
                        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:bg-slate-50 transition cursor-pointer">
                          <UploadCloud className="w-7 h-7 text-brand-blue mx-auto mb-1" />
                          <div className="text-xs font-semibold text-slate-700">
                            Click to upload PAN, Aadhaar or Electricity Bill
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Supported: PDF, JPG, PNG (Max 15MB)
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          onClick={() => setApplyStep(1)}
                          className="w-1/3 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
                        >
                          Back
                        </button>
                        <button 
                          onClick={() => setApplyStep(3)}
                          className="w-2/3 py-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-sm transition flex items-center justify-center gap-2"
                        >
                          <span>Review & Submit</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review & Final Confirmation */}
                  {applyStep === 3 && (
                    <div className="space-y-4 max-w-lg mx-auto">
                      <h4 className="text-base font-bold text-slate-900 text-center">
                        Step 3: Review Application & Order Summary
                      </h4>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                        <div className="flex justify-between pb-2 border-b border-slate-200">
                          <span className="text-slate-500">Service Selected:</span>
                          <strong className="text-slate-900">{service.title}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Applicant:</span>
                          <span className="font-semibold text-slate-800">{orderForm.customerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Proposed Business:</span>
                          <span className="font-semibold text-slate-800">{orderForm.entityName || 'Pending Name'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Professional Fee:</span>
                          <span className="font-bold text-slate-900">₹{service.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">GST (18%):</span>
                          <span className="font-semibold text-slate-700">₹{Math.round(service.price * 0.18).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-brand-blue">
                          <span>Total Amount Payable:</span>
                          <span>₹{Math.round(service.price * 1.18).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-[11px] text-blue-900 flex items-start gap-2">
                        <Shield className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>TaxsPoint 100% Satisfaction Guarantee:</strong> In case of non-fulfillment or rejection by our oversight, 100% professional fee refund is guaranteed.
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          onClick={() => setApplyStep(2)}
                          className="w-1/3 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
                        >
                          Back
                        </button>
                        <button 
                          onClick={handleFinishOrder}
                          className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          <span>Submit Application Now</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 px-6 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Encrypted 256-bit SSL | ISO 27001 Certified Portal</span>
          </span>
          <button onClick={onClose} className="hover:text-slate-800 font-semibold">
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
