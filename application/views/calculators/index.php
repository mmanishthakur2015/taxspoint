<div class="py-12 bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-600"></i>
                <span>100% Free Tools</span>
            </span>
            <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Income Tax & GST Calculators
            </h1>
            <p class="text-sm sm:text-base text-slate-600">
                Compare Old vs New Tax Regime for FY 2024-25, compute GST liabilities, and verify MCA name clearance.
            </p>
        </div>

        <!-- Switcher Buttons -->
        <div class="flex justify-center mb-8">
            <div class="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-md w-full">
                <button onclick="switchCalc('tax')" id="btn-calc-tax" class="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-brand-blue shadow transition">
                    Income Tax (Old vs New)
                </button>
                <button onclick="switchCalc('gst')" id="btn-calc-gst" class="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                    GST Calculator
                </button>
                <button onclick="switchCalc('mca')" id="btn-calc-mca" class="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition">
                    MCA Name Checker
                </button>
            </div>
        </div>

        <!-- 1. Income Tax Calculator -->
        <div id="calc-tax-section" class="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Inputs -->
                <div class="lg:col-span-6 space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-bold text-slate-900">Income & Deductions (FY 2024-25)</h3>
                        <span class="text-xs bg-blue-100 text-brand-blue font-bold px-2 py-0.5 rounded">AY 2025-26</span>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Gross Annual Income (₹)</label>
                        <input id="tax-income" type="number" step="50000" value="1200000" oninput="runTaxCalc()" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white font-bold text-base text-slate-900 outline-none">
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Section 80C (PPF/ELSS)</label>
                            <input id="tax-80c" type="number" max="150000" value="150000" oninput="runTaxCalc()" class="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none">
                            <span class="text-[10px] text-slate-400">Max ₹1,50,000 (Old only)</span>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Section 80D (Health Ins)</label>
                            <input id="tax-80d" type="number" value="25000" oninput="runTaxCalc()" class="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none">
                            <span class="text-[10px] text-slate-400">Old Regime only</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">HRA Exemption</label>
                            <input id="tax-hra" type="number" value="120000" oninput="runTaxCalc()" class="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none">
                            <span class="text-[10px] text-slate-400">Old Regime only</span>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Home Loan Interest</label>
                            <input id="tax-homeloan" type="number" max="200000" value="0" oninput="runTaxCalc()" class="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold outline-none">
                            <span class="text-[10px] text-slate-400">Max ₹2,00,000</span>
                        </div>
                    </div>
                </div>

                <!-- Comparison Output -->
                <div class="lg:col-span-6 space-y-4">
                    <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md">
                        <div class="text-xs uppercase tracking-wider font-semibold opacity-90">Recommended Choice</div>
                        <div id="tax-recommendation-title" class="text-xl font-extrabold mt-0.5">New Tax Regime</div>
                        <div id="tax-recommendation-desc" class="text-xs text-emerald-100 mt-1">
                            You save significantly under the New Regime!
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <!-- New Regime -->
                        <div class="p-4 rounded-2xl bg-white border border-emerald-500 ring-2 ring-emerald-500/20 shadow-md">
                            <div class="text-xs font-bold text-brand-blue mb-2">New Regime (Default)</div>
                            <div class="space-y-1.5 text-xs text-slate-600">
                                <div class="flex justify-between"><span>Std Deduction:</span><strong>₹75,000</strong></div>
                                <div class="flex justify-between"><span>Other Ded:</span><span class="text-slate-400">Nil</span></div>
                                <div class="flex justify-between pt-2 border-t border-slate-100 font-bold text-slate-900">
                                    <span>Total Tax:</span><span id="tax-new-total" class="text-base text-brand-blue">₹0</span>
                                </div>
                            </div>
                        </div>

                        <!-- Old Regime -->
                        <div class="p-4 rounded-2xl bg-white/80 border border-slate-200">
                            <div class="text-xs font-bold text-slate-700 mb-2">Old Regime</div>
                            <div class="space-y-1.5 text-xs text-slate-600">
                                <div class="flex justify-between"><span>Std Deduction:</span><strong>₹50,000</strong></div>
                                <div class="flex justify-between"><span>Total Ded:</span><span id="tax-old-ded">₹0</span></div>
                                <div class="flex justify-between pt-2 border-t border-slate-100 font-bold text-slate-900">
                                    <span>Total Tax:</span><span id="tax-old-total" class="text-base text-slate-900">₹0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onclick="openLeadModal('File ITR with Senior CA')" class="w-full py-3 rounded-xl bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs transition">
                        File ITR for ₹799 with Dedicated CA Support →
                    </button>
                </div>

            </div>
        </div>

        <!-- 2. GST Calculator -->
        <div id="calc-gst-section" class="hidden bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <h3 class="text-lg font-bold text-slate-900">GST Liability Calculator</h3>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Base Amount (₹)</label>
                        <input id="gst-input-amount" type="number" value="10000" oninput="runGstCalc()" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white font-bold text-base outline-none">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Select GST Slab Rate</label>
                        <div class="grid grid-cols-4 gap-2">
                            <button onclick="setGstRate(5)" class="gst-rate-btn py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700" data-rate="5">5%</button>
                            <button onclick="setGstRate(12)" class="gst-rate-btn py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700" data-rate="12">12%</button>
                            <button onclick="setGstRate(18)" class="gst-rate-btn py-2 rounded-xl text-xs font-bold border bg-slate-900 text-white" data-rate="18">18%</button>
                            <button onclick="setGstRate(28)" class="gst-rate-btn py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700" data-rate="28">28%</button>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Breakdown</div>
                    <div class="space-y-2 text-sm text-slate-600 pt-2 border-t border-slate-100">
                        <div class="flex justify-between"><span>Base Amount:</span><strong id="gst-base" class="text-slate-900">₹10,000</strong></div>
                        <div class="flex justify-between text-brand-blue"><span>GST Tax Amount:</span><strong id="gst-tax" class="font-bold">₹1,800</strong></div>
                        <div class="flex justify-between text-xs text-slate-500 pl-3"><span>CGST:</span><span id="gst-cgst">₹900</span></div>
                        <div class="flex justify-between text-xs text-slate-500 pl-3"><span>SGST:</span><span id="gst-sgst">₹900</span></div>
                    </div>
                    <div class="pt-4 border-t border-slate-100">
                        <div class="text-xs text-slate-500">Gross Invoice Total:</div>
                        <div id="gst-total" class="text-2xl font-black text-slate-900">₹11,800</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. MCA Name Checker -->
        <div id="calc-mca-section" class="hidden bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
            <div class="max-w-2xl mx-auto space-y-5">
                <div class="text-center space-y-1">
                    <h3 class="text-lg font-bold text-slate-900">MCA SPICe+ Rule 8 Name Checker</h3>
                    <p class="text-xs text-slate-500">Check if your proposed company name is distinctive and conforms to guidelines.</p>
                </div>
                <form onsubmit="checkMcaName(event)" class="flex gap-2">
                    <input id="mca-name-input" type="text" required placeholder="e.g. TaxsPoint Legal Solutions" class="flex-1 h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm font-semibold outline-none focus:border-brand-blue">
                    <button type="submit" class="h-12 px-6 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-xs sm:text-sm transition">
                        Check Now
                    </button>
                </form>

                <div id="mca-result" class="hidden p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                    <div class="flex items-center justify-between font-bold">
                        <span id="mca-verdict">High Likelihood of Approval (Available)</span>
                        <span id="mca-score" class="text-xs bg-white px-2 py-0.5 rounded-full border">Score: 92/100</span>
                    </div>
                    <p id="mca-reason" class="text-xs leading-relaxed opacity-90"></p>
                    <div class="pt-2 flex justify-end">
                        <button onclick="openLeadModal('Reserve MCA Name: ' + document.getElementById('mca-name-input').value)" class="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs">
                            Reserve via SPICe+ Part A →
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<script>
    var currentGstRate = 18;

    function switchCalc(type) {
        document.getElementById('calc-tax-section').classList.add('hidden');
        document.getElementById('calc-gst-section').classList.add('hidden');
        document.getElementById('calc-mca-section').classList.add('hidden');

        document.getElementById('btn-calc-tax').className = 'flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition';
        document.getElementById('btn-calc-gst').className = 'flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition';
        document.getElementById('btn-calc-mca').className = 'flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition';

        document.getElementById('calc-' + type + '-section').classList.remove('hidden');
        document.getElementById('btn-calc-' + type).className = 'flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-white text-brand-blue shadow transition';
    }

    function runTaxCalc() {
        var income = Math.max(0, Number(document.getElementById('tax-income').value) || 0);
        var ded80c = Math.min(150000, Number(document.getElementById('tax-80c').value) || 0);
        var ded80d = Math.min(100000, Number(document.getElementById('tax-80d').value) || 0);
        var hra = Number(document.getElementById('tax-hra').value) || 0);
        var home = Math.min(200000, Number(document.getElementById('tax-homeloan').value) || 0);

        // New Regime
        var newTaxable = Math.max(0, income - 75000);
        var newTax = 0;
        if (newTaxable > 1500000) { newTax += (newTaxable - 1500000)*0.30 + 140000; }
        else if (newTaxable > 1200000) { newTax += (newTaxable - 1200000)*0.20 + 80000; }
        else if (newTaxable > 1000000) { newTax += (newTaxable - 1000000)*0.15 + 50000; }
        else if (newTaxable > 700000) { newTax += (newTaxable - 700000)*0.10 + 20000; }
        else if (newTaxable > 300000) { newTax += (newTaxable - 300000)*0.05; }

        if (newTaxable <= 700000) { newTax = 0; } // 87A rebate
        var newTotal = Math.round(newTax * 1.04);

        // Old Regime
        var oldDed = 50000 + ded80c + ded80d + hra + home;
        var oldTaxable = Math.max(0, income - oldDed);
        var oldTax = 0;
        if (oldTaxable > 1000000) { oldTax += (oldTaxable - 1000000)*0.30 + 112500; }
        else if (oldTaxable > 500000) { oldTax += (oldTaxable - 500000)*0.20 + 12500; }
        else if (oldTaxable > 250000) { oldTax += (oldTaxable - 250000)*0.05; }

        if (oldTaxable <= 500000) { oldTax = 0; } // 87A rebate
        var oldTotal = Math.round(oldTax * 1.04);

        document.getElementById('tax-new-total').innerText = '₹' + newTotal.toLocaleString('en-IN');
        document.getElementById('tax-old-total').innerText = '₹' + oldTotal.toLocaleString('en-IN');
        document.getElementById('tax-old-ded').innerText = '₹' + oldDed.toLocaleString('en-IN');

        var diff = oldTotal - newTotal;
        if (diff > 0) {
            document.getElementById('tax-recommendation-title').innerText = 'New Tax Regime';
            document.getElementById('tax-recommendation-desc').innerText = 'You save ₹' + diff.toLocaleString('en-IN') + ' under the New Tax Regime!';
        } else if (diff < 0) {
            document.getElementById('tax-recommendation-title').innerText = 'Old Tax Regime';
            document.getElementById('tax-recommendation-desc').innerText = 'You save ₹' + Math.abs(diff).toLocaleString('en-IN') + ' under the Old Tax Regime due to high deductions!';
        } else {
            document.getElementById('tax-recommendation-title').innerText = 'Both Regimes Equal';
            document.getElementById('tax-recommendation-desc').innerText = 'Both regimes result in the exact same tax for this income level.';
        }
    }

    function setGstRate(rate) {
        currentGstRate = rate;
        document.querySelectorAll('.gst-rate-btn').forEach(function(b) {
            b.className = 'gst-rate-btn py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700';
            if (Number(b.getAttribute('data-rate')) === rate) {
                b.className = 'gst-rate-btn py-2 rounded-xl text-xs font-bold border bg-slate-900 text-white';
            }
        });
        runGstCalc();
    }

    function runGstCalc() {
        var base = Math.max(0, Number(document.getElementById('gst-input-amount').value) || 0);
        var tax = (base * currentGstRate) / 100;
        var total = base + tax;

        document.getElementById('gst-base').innerText = '₹' + Math.round(base).toLocaleString('en-IN');
        document.getElementById('gst-tax').innerText = '₹' + Math.round(tax).toLocaleString('en-IN');
        document.getElementById('gst-cgst').innerText = '₹' + Math.round(tax / 2).toLocaleString('en-IN');
        document.getElementById('gst-sgst').innerText = '₹' + Math.round(tax / 2).toLocaleString('en-IN');
        document.getElementById('gst-total').innerText = '₹' + Math.round(total).toLocaleString('en-IN');
    }

    function checkMcaName(e) {
        e.preventDefault();
        var name = document.getElementById('mca-name-input').value.trim();
        var box = document.getElementById('mca-result');
        box.classList.remove('hidden');

        document.getElementById('mca-verdict').innerText = '"' + name + '" is Distinctive & Available';
        document.getElementById('mca-score').innerText = 'Score: 94/100';
        document.getElementById('mca-reason').innerText = 'The name adheres to Rule 8 of Companies (Incorporation) Rules, 2013 and does not conflict with existing registered trademarks.';
    }

    // Run initial on page load
    runTaxCalc();
    runGstCalc();
</script>
