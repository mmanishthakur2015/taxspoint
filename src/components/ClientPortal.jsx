import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Clock, AlertCircle, FileText, Download, 
  UploadCloud, Phone, Mail, User, Shield, Search, ArrowRight, Check
} from 'lucide-react';
import { initialOrders, getStoredData } from '../utils/helpers';

export function ClientPortal({ onOpenLeadModal }) {
  const [orders, setOrders] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const loaded = getStoredData('taxspoint_orders', initialOrders);
    setOrders(loaded);
    if (loaded.length > 0 && !selectedOrder) {
      setSelectedOrder(loaded[0]);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    const found = orders.find(o => o.orderId.toLowerCase() === searchId.trim().toLowerCase());
    if (found) {
      setSelectedOrder(found);
    } else {
      alert(`No active application found with ID "${searchId}". Try TP-92841 or TP-84192`);
    }
  };

  const handleSimulateUpload = () => {
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const stages = [
    { label: 'Application Submitted', desc: 'Order placed & initial payment confirmed' },
    { label: 'Document Verification', desc: 'CA verifies identity, address & utility proofs' },
    { label: 'DSC & Name Approval', desc: 'Class 3 DSC generated & RUN approval granted' },
    { label: 'Govt Portal Filing', desc: 'SPICe+ / GST REG-01 submitted to ministry' },
    { label: 'Approved & Issued', desc: 'Official government certificate ready in vault' },
  ];

  return (
    <section id="client-portal-section" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real-Time Government Filing Status</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Client Application Tracking & Document Vault
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Track every phase of your MCA, GST, or Trademark filing in real time. Download verified government certificates directly to your device.
          </p>
        </div>

        {/* Search / Track Input Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2 p-1.5 bg-white rounded-2xl shadow-md border border-slate-200">
            <div className="flex items-center pl-3 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Enter Application / Order ID (e.g. TP-92841, TP-84192)..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="flex-1 px-3 py-2 text-sm text-slate-800 outline-none font-medium"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs transition"
            >
              Track Filing
            </button>
          </form>

          {/* Quick Demo ID pills */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500">
            <span>Quick Select Demos:</span>
            {orders.slice(0, 3).map(o => (
              <button
                key={o.orderId}
                onClick={() => setSelectedOrder(o)}
                className={`px-2 py-0.5 rounded-md font-semibold border transition ${
                  selectedOrder?.orderId === o.orderId 
                    ? 'bg-brand-blue text-white border-brand-blue' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {o.orderId}
              </button>
            ))}
          </div>
        </div>

        {/* Main Tracker Container */}
        {selectedOrder ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
            
            {/* Top Order Status Banner */}
            <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-blue p-6 text-white flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full text-blue-200">
                    Order ID: {selectedOrder.orderId}
                  </span>
                  <span className="text-xs text-slate-300">Applied on {selectedOrder.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {selectedOrder.serviceTitle}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Applicant: <strong>{selectedOrder.customerName}</strong> ({selectedOrder.email} | {selectedOrder.phone})
                </p>
              </div>

              <div className="text-right">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                  selectedOrder.currentStage === 4 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-amber-400 text-slate-950'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedOrder.status}</span>
                </span>
                <div className="text-xs text-blue-200 mt-1">Fee: ₹{selectedOrder.amount.toLocaleString()} (Paid)</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              
              {/* 5-Stage Stepper */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
                  Live Application Progress
                </h4>

                <div className="relative">
                  {/* Progress Line */}
                  <div className="hidden sm:block absolute top-5 left-6 right-6 h-1 bg-slate-100 -z-0">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${(selectedOrder.currentStage / (stages.length - 1)) * 100}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative z-10">
                    {stages.map((st, idx) => {
                      const isPast = idx < selectedOrder.currentStage;
                      const isCurrent = idx === selectedOrder.currentStage;
                      const isPending = idx > selectedOrder.currentStage;

                      return (
                        <div key={idx} className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all ${
                            isPast 
                              ? 'bg-emerald-600 text-white shadow-md' 
                              : isCurrent 
                                ? 'bg-brand-blue text-white ring-4 ring-blue-100 shadow-lg scale-110' 
                                : 'bg-slate-100 text-slate-400 border border-slate-200'
                          }`}>
                            {isPast ? <Check className="w-5 h-5 stroke-[3]" /> : idx + 1}
                          </div>

                          <div className="text-left sm:text-center">
                            <div className={`text-xs font-bold ${
                              isCurrent ? 'text-brand-blue' : isPast ? 'text-slate-900' : 'text-slate-400'
                            }`}>
                              {st.label}
                            </div>
                            <div className="text-[11px] text-slate-500 hidden sm:block mt-0.5 line-clamp-2">
                              {st.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status Note & Assigned CA details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
                
                {/* Left: Latest Update note */}
                <div className="md:col-span-7 bg-blue-50/60 rounded-2xl p-5 border border-blue-100 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Latest Operations Log
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {selectedOrder.notes}
                  </p>
                  <p className="text-xs text-slate-500">
                    Next milestone: Final Certificate approval expected within 48 to 72 business hours.
                  </p>
                </div>

                {/* Right: Dedicated CA Advisor card */}
                <div className="md:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Assigned Chartered Accountant
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                      CA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{selectedOrder.assignedCA}</div>
                      <div className="text-xs text-slate-500">Senior Compliance Officer</div>
                    </div>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <a 
                      href="tel:+917258060485" 
                      className="flex-1 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 text-center flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> Call CA
                    </a>
                    <button 
                      onClick={() => onOpenLeadModal(`Inquiry about ${selectedOrder.orderId}`)}
                      className="flex-1 py-2 rounded-xl bg-brand-blue text-white hover:bg-brand-navy text-xs font-bold text-center"
                    >
                      Message CA
                    </button>
                  </div>
                </div>

              </div>

              {/* Document Vault Section */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      TaxsPoint Secure Document Vault
                    </h4>
                    <p className="text-xs text-slate-500">
                      All files are encrypted with 256-bit AES encryption.
                    </p>
                  </div>

                  <button 
                    onClick={handleSimulateUpload}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 transition"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Upload New Doc</span>
                  </button>
                </div>

                {uploadSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Document successfully encrypted and uploaded to your vault!</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-blue" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Applicant PAN Card</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">✓ Verified by CA</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-blue" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Aadhaar Card Copy</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">✓ Verified by CA</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-emerald-700" />
                      <div>
                        <div className="text-xs font-bold text-emerald-950">Official Certificate</div>
                        <div className="text-[10px] text-emerald-700 font-semibold">Govt Approved (.PDF)</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert(`Downloading official Certificate for Order ${selectedOrder.orderId}...`)}
                      className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                      title="Download Certificate"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            No application selected. Enter your Order ID above.
          </div>
        )}

      </div>
    </section>
  );
}
