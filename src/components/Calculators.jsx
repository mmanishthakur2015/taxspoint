import React, { useState } from 'react';
import { 
  Calculator, Percent, Building, ArrowRight, CheckCircle2, 
  AlertTriangle, ShieldCheck, Sparkles, HelpCircle, RefreshCw
} from 'lucide-react';
import { calculateIncomeTax, calculateGST, checkMcaNameAvailability } from '../utils/helpers';

export function Calculators({ onOpenLeadModal }) {
  const [activeTab, setActiveTab] = useState('tax'); // 'tax', 'gst', 'mca'

  // Income Tax State
  const [taxInputs, setTaxInputs] = useState({
    annualIncome: 1200000,
    isSalaried: true,
    deduction80C: 150000,
    deduction80D: 25000,
    hraDeduction: 120000,
    homeLoanInterest: 0,
    otherDeductions: 0
  });

  // GST State
  const [gstAmount, setGstAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [gstType, setGstType] = useState('exclusive'); // 'exclusive' or 'inclusive'

  // MCA Name State
  const [proposedName, setProposedName] = useState('');
  const [nameResult, setNameResult] = useState(null);

  // Computations
  const newRegimeResult = calculateIncomeTax({ ...taxInputs, regime: 'new' });
  const oldRegimeResult = calculateIncomeTax({ ...taxInputs, regime: 'old' });
  const taxDifference = oldRegimeResult.totalTax - newRegimeResult.totalTax;
  const betterRegime = taxDifference > 0 ? 'New Tax Regime' : taxDifference < 0 ? 'Old Tax Regime' : 'Both Regimes Equal';
  const maxSavings = Math.abs(taxDifference);

  const gstResult = calculateGST({ amount: gstAmount, rate: gstRate, type: gstType });

  const handleCheckMca = (e) => {
    e.preventDefault();
    const result = checkMcaNameAvailability(proposedName);
    setNameResult(result);
  };

  return (
    <section id="calculators-section" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>100% Free Compliance & Tax Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Free Financial & MCA Calculators
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Compare Old vs New Tax Regimes for FY 2024-25, compute GST liabilities, and verify company name availability before spending a rupee.
          </p>
        </div>

        {/* Calculator Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-md w-full">
            <button
              onClick={() => setActiveTab('tax')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                activeTab === 'tax'
                  ? 'bg-white text-brand-blue shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Income Tax (Old vs New)</span>
            </button>

            <button
              onClick={() => setActiveTab('gst')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                activeTab === 'gst'
                  ? 'bg-white text-brand-blue shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Percent className="w-4 h-4" />
              <span>GST Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('mca')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                activeTab === 'mca'
                  ? 'bg-white text-brand-blue shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>MCA Name Checker</span>
            </button>
          </div>
        </div>

        {/* 1. Income Tax Calculator (Old vs New Regime) */}
        {activeTab === 'tax' && (
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Inputs Form */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    Your Income & Deductions (FY 2024-25)
                  </h3>
                  <span className="text-xs bg-blue-100 text-brand-blue font-bold px-2 py-0.5 rounded">
                    AY 2025-26
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gross Annual Income (₹)
                  </label>
                  <input
                    type="number"
                    step="50000"
                    value={taxInputs.annualIncome}
                    onChange={(e) => setTaxInputs({ ...taxInputs, annualIncome: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white font-bold text-base text-slate-900 focus:border-brand-blue outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Section 80C (PPF, ELSS, EPF)
                    </label>
                    <input
                      type="number"
                      max="150000"
                      value={taxInputs.deduction80C}
                      onChange={(e) => setTaxInputs({ ...taxInputs, deduction80C: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none"
                    />
                    <span className="text-[10px] text-slate-400">Max ₹1,50,000 (Old only)</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Section 80D (Health Insurance)
                    </label>
                    <input
                      type="number"
                      value={taxInputs.deduction80D}
                      onChange={(e) => setTaxInputs({ ...taxInputs, deduction80D: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none"
                    />
                    <span className="text-[10px] text-slate-400">Self & Parents (Old only)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      HRA Exemption (Rent Paid)
                    </label>
                    <input
                      type="number"
                      value={taxInputs.hraDeduction}
                      onChange={(e) => setTaxInputs({ ...taxInputs, hraDeduction: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none"
                    />
                    <span className="text-[10px] text-slate-400">Old Regime only</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Home Loan Interest (Sec 24b)
                    </label>
                    <input
                      type="number"
                      max="200000"
                      value={taxInputs.homeLoanInterest}
                      onChange={(e) => setTaxInputs({ ...taxInputs, homeLoanInterest: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none"
                    />
                    <span className="text-[10px] text-slate-400">Max ₹2,00,000</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenLeadModal('CA Tax Planning Assistance')}
                    className="w-full py-2.5 rounded-xl border border-blue-200 bg-blue-50 text-brand-blue font-bold text-xs hover:bg-blue-100 transition"
                  >
                    Need CA help to maximize deductions? Click here
                  </button>
                </div>
              </div>

              {/* Side-by-Side Comparison Box */}
              <div className="lg:col-span-6 space-y-4">
                {/* Winner Callout */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md">
                  <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
                    Recommended Choice
                  </div>
                  <div className="text-xl font-extrabold mt-0.5">
                    {betterRegime}
                  </div>
                  <div className="text-xs text-emerald-100 mt-1">
                    {maxSavings > 0 ? (
                      <span>You save <strong className="text-white text-sm">₹{maxSavings.toLocaleString()}</strong> by selecting this regime!</span>
                    ) : (
                      <span>Both regimes yield identical tax liabilities for this income level.</span>
                    )}
                  </div>
                </div>

                {/* Side-by-side Table */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* New Regime Column */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    betterRegime === 'New Tax Regime'
                      ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                      : 'bg-white/70 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand-blue">New Regime</span>
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">Default</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Standard Ded:</span>
                        <strong className="text-slate-800">₹75,000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Other Ded:</span>
                        <span className="text-slate-400">Not Allowed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxable Income:</span>
                        <span className="font-semibold text-slate-800">₹{newRegimeResult.netTaxableIncome.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rebate u/s 87A:</span>
                        <span className="text-emerald-700 font-semibold">- ₹{newRegimeResult.rebate87A.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-100">
                        <span>4% Cess:</span>
                        <span>₹{newRegimeResult.cess.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="text-[11px] text-slate-500">Total Tax Payable:</div>
                      <div className="text-xl font-black text-slate-900">
                        ₹{newRegimeResult.totalTax.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Old Regime Column */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    betterRegime === 'Old Tax Regime'
                      ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                      : 'bg-white/70 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">Old Regime</span>
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">With Deductions</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Standard Ded:</span>
                        <strong className="text-slate-800">₹50,000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Ded:</span>
                        <span className="font-semibold text-slate-800">₹{oldRegimeResult.totalDeductions.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxable Income:</span>
                        <span className="font-semibold text-slate-800">₹{oldRegimeResult.netTaxableIncome.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rebate u/s 87A:</span>
                        <span className="text-emerald-700 font-semibold">- ₹{oldRegimeResult.rebate87A.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-100">
                        <span>4% Cess:</span>
                        <span>₹{oldRegimeResult.cess.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="text-[11px] text-slate-500">Total Tax Payable:</div>
                      <div className="text-xl font-black text-slate-900">
                        ₹{oldRegimeResult.totalTax.toLocaleString()}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="text-right">
                  <button 
                    onClick={() => onOpenLeadModal('File ITR with TaxsPoint')}
                    className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs transition shadow"
                  >
                    File ITR for ₹799 with CA Support →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. GST Calculator */}
        {activeTab === 'gst' && (
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  GST Liability Calculator
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Base / Total Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={gstAmount}
                    onChange={(e) => setGstAmount(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white font-bold text-base text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    GST Calculation Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setGstType('exclusive')}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        gstType === 'exclusive' 
                          ? 'bg-brand-blue text-white border-brand-blue' 
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      GST Exclusive (Add GST)
                    </button>
                    <button
                      onClick={() => setGstType('inclusive')}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        gstType === 'inclusive' 
                          ? 'bg-brand-blue text-white border-brand-blue' 
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      GST Inclusive (Remove GST)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select GST Slab Rate
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 12, 18, 28].map(rate => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        className={`py-2 rounded-xl text-xs font-bold border transition ${
                          gstRate === rate 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* GST Breakdown Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Calculation Breakdown ({gstRate}% GST)
                </div>

                <div className="space-y-2 text-sm text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span>Net Base Amount:</span>
                    <strong className="text-slate-900">₹{gstResult.baseAmount.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-brand-blue">
                    <span>Total GST Amount ({gstRate}%):</span>
                    <strong className="font-bold">₹{gstResult.gstAmount.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pl-3">
                    <span>CGST ({gstRate/2}%):</span>
                    <span>₹{gstResult.cgst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pl-3">
                    <span>SGST ({gstRate/2}%):</span>
                    <span>₹{gstResult.sgst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 pl-3">
                    <span>IGST (Inter-state {gstRate}%):</span>
                    <span>₹{gstResult.igst.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500">Gross Invoice Amount:</div>
                  <div className="text-2xl font-black text-slate-900">
                    ₹{gstResult.totalAmount.toLocaleString()}
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => onOpenLeadModal('GST Registration or Return Filing')}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                  >
                    File GST Returns from ₹499/Month →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. MCA Company Name Availability Checker */}
        {activeTab === 'mca' && (
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto space-y-5">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  MCA SPICe+ Company Name Availability Checker
                </h3>
                <p className="text-xs text-slate-500">
                  Simulate Ministry of Corporate Affairs Rule 8 compliance for proposed Private Limited or LLP names.
                </p>
              </div>

              <form onSubmit={handleCheckMca} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. TaxsPoint Legal Solutions"
                  value={proposedName}
                  onChange={(e) => setProposedName(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm font-semibold focus:border-brand-blue outline-none"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <span>Check Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {nameResult && (
                <div className={`p-5 rounded-2xl border animate-in fade-in space-y-3 ${
                  nameResult.status === 'available'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : nameResult.status === 'restricted'
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {nameResult.status === 'available' ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                      )}
                      <span className="font-bold text-base">{nameResult.verdict}</span>
                    </div>

                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-white/80 border">
                      Score: {nameResult.score}/100
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed opacity-90">
                    {nameResult.reason}
                  </p>

                  <div className="p-3 bg-white/70 rounded-xl border border-current/10 text-xs font-medium">
                    💡 <strong>Recommendation:</strong> {nameResult.recommendation}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onOpenLeadModal(`Reserve MCA Name: ${proposedName}`)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
                    >
                      Reserve This Name on MCA Portal (SPICe+ Part A) →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
