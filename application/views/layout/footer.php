</main>

<!-- Global Footer -->
<footer class="bg-[#282c3f] text-slate-300 pt-16 pb-12 border-t border-[#353a4e]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#353a4e]">
            <!-- Brand Column -->
            <div class="lg:col-span-4 space-y-4">
                <div class="bg-white px-3.5 py-2 rounded-2xl w-fit shadow-md">
                    <img src="<?php echo base_url('assets/images/taxspoint-logo.png'); ?>" alt="TaxsPoint Logo" class="h-9 md:h-10 w-auto object-contain">
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    TaxsPoint is India's leading AI-enabled corporate legal and chartered accountancy ecosystem, providing transparent, fast-track company formation, ITR filing, GST compliance, and trademark protection.
                </p>
                <div class="flex items-center gap-2 text-xs text-[#03a685] font-semibold">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    <span>ISO 27001:2013 Certified & 256-Bit SSL Encrypted Vault</span>
                </div>
            </div>

            <!-- Contact & Address Column (USER REQUESTED: EMAIL AND ADDRESS) -->
            <div class="lg:col-span-4 space-y-3 text-xs sm:text-sm">
                <h4 class="text-white font-bold text-base mb-3">Corporate Offices & Support</h4>
                
                <div class="flex items-start gap-3 text-slate-200">
                    <i data-lucide="map-pin" class="w-4 h-4 text-[#ff3f6c] flex-shrink-0 mt-1"></i>
                    <div>
                        <strong class="text-white">Registered Corporate Office:</strong><br>
                        101 Nirala colony, Digha, Patna, Bihar – 800011
                    </div>
                </div>

                <div class="flex items-center gap-3 text-slate-200 pt-1">
                    <i data-lucide="phone" class="w-4 h-4 text-[#ff3f6c] flex-shrink-0"></i>
                    <a href="tel:+917258060485" class="hover:text-[#ff3f6c] transition font-bold">+91 72580 60485</a>
                    <span class="text-xs text-slate-400 font-normal">(Mon - Sat: 9 AM - 8 PM IST)</span>
                </div>

                <div class="flex items-center gap-3 text-slate-200">
                    <i data-lucide="mail" class="w-4 h-4 text-[#ff527b] flex-shrink-0"></i>
                    <div>
                        <a href="mailto:support@taxspoints.com" class="hover:text-[#ff3f6c] transition font-medium">support@taxspoints.com</a>
                    </div>
                </div>
            </div>

            <!-- 5 AI Hub Promotion -->
            <div class="lg:col-span-4 bg-[#2c3044] rounded-2xl p-5 border border-slate-700 space-y-3">
                <div class="flex items-center gap-2 text-[#ff527b] font-bold text-xs uppercase tracking-wider">
                    <i data-lucide="bot" class="w-4 h-4"></i>
                    <span>Multi-Agent AI Center Active</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Have instant questions about GST, ITR 1-4, SPICe+ documents, or NICE trademark classes? Chat live with our 5 AI specialist personas anytime.
                </p>
                <a href="<?php echo site_url('ai-agents'); ?>" class="block text-center py-2.5 rounded-xl btn-myntra-gradient text-white font-black text-xs hover:opacity-95 transition shadow-md shadow-[#ff3f6c]/25">
                    Consult 5 AI Advisors Now →
                </a>
            </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#353a4e] text-xs">
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Company Formation</h5>
                <ul class="space-y-2 text-slate-300">
                    <li><a href="<?php echo site_url('services/pvt-ltd'); ?>" class="hover:text-[#ff3f6c] transition">Pvt Ltd Company Registration</a></li>
                    <li><a href="<?php echo site_url('services/llp-reg'); ?>" class="hover:text-[#ff3f6c] transition">LLP Incorporation</a></li>
                    <li><a href="<?php echo site_url('services/opc-reg'); ?>" class="hover:text-[#ff3f6c] transition">One Person Company (OPC)</a></li>
                    <li><a href="<?php echo site_url('services/section-8'); ?>" class="hover:text-[#ff3f6c] transition">Section 8 NGO Registration</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Tax & Compliance</h5>
                <ul class="space-y-2 text-slate-300">
                    <li><a href="<?php echo site_url('services/gst-reg'); ?>" class="hover:text-[#ff3f6c] transition">GST Registration Online</a></li>
                    <li><a href="<?php echo site_url('services/gst-return'); ?>" class="hover:text-[#ff3f6c] transition">GST Monthly / Quarterly Return</a></li>
                    <li><a href="<?php echo site_url('services/itr-filing'); ?>" class="hover:text-[#ff3f6c] transition">ITR e-Filing (AY 2025-26)</a></li>
                    <li><a href="<?php echo site_url('services/msme-udyam'); ?>" class="hover:text-[#ff3f6c] transition">MSME Udyam Registration</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Trademark & IP</h5>
                <ul class="space-y-2 text-slate-300">
                    <li><a href="<?php echo site_url('services/trademark-reg'); ?>" class="hover:text-[#ff3f6c] transition">Trademark (TM) Registration</a></li>
                    <li><a href="<?php echo site_url('services/startup-india'); ?>" class="hover:text-[#ff3f6c] transition">Startup India (DPIIT) Recognition</a></li>
                    <li><a href="<?php echo site_url('ai-agents'); ?>" class="hover:text-[#ff3f6c] transition">AI Trademark Legal Advisor</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Tools & Portals</h5>
                <ul class="space-y-2 text-slate-300">
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-[#ff3f6c] transition">Income Tax Calculator (Old vs New)</a></li>
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-[#ff3f6c] transition">GST Calculator</a></li>
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-[#ff3f6c] transition">MCA Name Clearance Checker</a></li>
                    <li><a href="<?php echo site_url('track'); ?>" class="hover:text-[#ff3f6c] transition">Filing Application Tracker</a></li>
                    <li><a href="<?php echo site_url('admin'); ?>" class="text-[#ff527b] hover:text-[#ff3f6c] hover:underline font-bold">Admin Operations CRM Hub</a></li>
                </ul>
            </div>
        </div>

        <div class="pt-8 text-slate-400 text-[11px] leading-relaxed space-y-4">
            <p>
                <strong>Statutory Disclaimer:</strong> TaxsPoint is an advanced digital technology platform designed to streamline business formation, intellectual property protection, and tax compliance. Professional legal and accounting services are rendered independently by certified Chartered Accountants, Company Secretaries, and Advocates adhering to the regulations of ICAI, ICSI, and Bar Council of India.
            </p>
            <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#353a4e] text-slate-400">
                <div>© <?php echo date('Y'); ?> TaxsPoint Technologies Private Limited. All Rights Reserved.</div>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-[#ff3f6c]">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" class="hover:text-[#ff3f6c]">Terms of Service</a>
                    <span>•</span>
                    <a href="#" class="hover:text-[#ff3f6c]">Refund Guarantee</a>
                </div>
            </div>
        </div>

    </div>
</footer>

<!-- Global Lead Modal -->
<div id="lead-modal" class="fixed inset-0 z-50 bg-[#282c3f]/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in">
        <div class="bg-gradient-to-r from-[#282c3f] via-[#353a4e] to-[#282c3f] p-6 text-white relative border-b border-[#ff3f6c]/30">
            <button onclick="closeLeadModal()" class="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <div class="flex items-center gap-2 mb-1">
                <i data-lucide="phone-call" class="w-4 h-4 text-[#ff527b]"></i>
                <span class="text-xs font-bold uppercase tracking-wider text-[#ff527b]">Free 1-on-1 Consultation</span>
            </div>
            <h3 class="text-xl font-bold">Connect with a Senior CA / Legal Counsel</h3>
            <p id="lead-modal-topic" class="text-xs text-slate-300 mt-1">Free Consultation</p>
        </div>

        <div class="p-6">
            <form id="global-lead-form" onsubmit="handleLeadSubmit(event)" class="space-y-4">
                <input type="hidden" id="lead-service-input" name="service" value="General Consultation">
                <div>
                    <label class="block text-xs font-bold text-[#282c3f] mb-1">Full Legal Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Manish Sharma" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-[#282c3f] mb-1">Mobile Number *</label>
                        <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-[#282c3f] mb-1">Email</label>
                        <input type="email" name="email" placeholder="you@domain.com" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-[#282c3f] mb-1">City / State</label>
                    <input type="text" name="city" placeholder="e.g. Mumbai, Delhi, Bengaluru" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                </div>
                <button type="submit" class="w-full py-3.5 rounded-xl btn-myntra-gradient hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#ff3f6c]/25 transition flex items-center justify-center gap-2">
                    <span>Request Priority Free Callback</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </form>
            <div id="lead-success-msg" class="hidden py-6 text-center space-y-3 bg-[#e8fbf6] rounded-2xl border border-[#c3f2e6] p-6">
                <div class="w-12 h-12 rounded-full bg-[#03a685] text-white flex items-center justify-center mx-auto shadow-md">
                    <i data-lucide="check" class="w-7 h-7"></i>
                </div>
                <h4 class="text-lg font-bold text-[#282c3f]">Callback Scheduled!</h4>
                <p class="text-xs text-[#535766]">A dedicated Chartered Accountant will call you shortly.</p>
                <button onclick="closeLeadModal()" class="mt-4 px-6 py-2.5 rounded-xl bg-[#282c3f] text-white font-bold text-xs">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Floating AI Assistant Button (Myntra Pink Badge) -->
<div class="fixed bottom-6 right-6 z-40">
    <a href="<?php echo site_url('ai-agents'); ?>" class="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#ff3f6c] hover:bg-[#e7335d] text-white shadow-2xl shadow-[#ff3f6c]/40 hover:scale-105 transition-all duration-300 group border-2 border-white">
        <div class="relative">
            <i data-lucide="bot" class="w-5 h-5 text-white group-hover:rotate-12 transition-transform"></i>
            <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
        </div>
        <div class="text-left hidden sm:block">
            <div class="text-xs font-black leading-tight">Ask TaxsPoint AI</div>
            <div class="text-[10px] text-pink-100">5 CA Specialists Online</div>
        </div>
    </a>
</div>

<script>
    // Initialize Lucide Icons
    lucide.createIcons();

    function toggleMobileMenu() {
        var el = document.getElementById('mobile-menu');
        el.classList.toggle('hidden');
    }

    function openLeadModal(topic) {
        var modal = document.getElementById('lead-modal');
        var topicEl = document.getElementById('lead-modal-topic');
        var inputEl = document.getElementById('lead-service-input');
        var form = document.getElementById('global-lead-form');
        var success = document.getElementById('lead-success-msg');

        if (topic) {
            topicEl.innerText = "Topic: " + topic;
            inputEl.value = topic;
        }
        form.classList.remove('hidden');
        success.classList.add('hidden');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeLeadModal() {
        var modal = document.getElementById('lead-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function handleLeadSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var isHero = form.id === 'hero-lead-form';
        var submitBtn = form.querySelector('button[type="submit"]');
        var origBtnText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Processing Request...</span>';
        }

        var data = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email ? form.email.value : '',
            city: form.city ? form.city.value : 'India',
            service: form.service ? form.service.value : 'General Consultation'
        };

        fetch('<?php echo site_url("api/create_lead"); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function(r) { return r.json(); }).then(function(res) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
            }
            form.classList.add('hidden');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origBtnText;
            }
            if (isHero) {
                var heroSuccess = document.getElementById('hero-lead-success');
                var refEl = document.getElementById('hero-lead-ref');
                if (res && res.lead && res.lead.id && refEl) {
                    refEl.innerText = res.lead.id;
                }
                if (heroSuccess) {
                    heroSuccess.classList.remove('hidden');
                }
            } else {
                var modalSuccess = document.getElementById('lead-success-msg');
                if (modalSuccess) {
                    modalSuccess.classList.remove('hidden');
                }
            }
        }).catch(function() {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            }
            form.classList.add('hidden');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origBtnText;
            }
            if (isHero) {
                var heroSuccess = document.getElementById('hero-lead-success');
                if (heroSuccess) heroSuccess.classList.remove('hidden');
            } else {
                var modalSuccess = document.getElementById('lead-success-msg');
                if (modalSuccess) modalSuccess.classList.remove('hidden');
            }
        });
    }
</script>
</body>
</html>
