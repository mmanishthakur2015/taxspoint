</main>

<!-- Global Footer -->
<footer class="bg-obsidian text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            <!-- Brand Column -->
            <div class="lg:col-span-4 space-y-4">
                <div class="bg-white p-2.5 rounded-2xl w-fit">
                    <img src="<?php echo base_url('assets/images/taxspoint-logo.png'); ?>" alt="TaxsPoint Logo" class="h-10 w-auto object-contain">
                </div>
                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    TaxsPoint is India's leading AI-enabled corporate legal and chartered accountancy ecosystem, providing transparent, fast-track company formation, ITR filing, GST compliance, and trademark protection.
                </p>
                <div class="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    <span>ISO 27001:2013 Certified & 256-Bit SSL Encrypted Vault</span>
                </div>
            </div>

            <!-- Contact & Address Column (USER REQUESTED: EMAIL AND ADDRESS) -->
            <div class="lg:col-span-4 space-y-3 text-xs sm:text-sm">
                <h4 class="text-white font-bold text-base mb-3">Corporate Offices & Support</h4>
                
                <div class="flex items-start gap-3 text-slate-300">
                    <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1"></i>
                    <div>
                        <strong class="text-white">Headquarters:</strong><br>
                        DLF Cyber City, Tower B, 6th Floor, Sector 25, Gurugram, Haryana – 122002
                    </div>
                </div>

                <div class="flex items-start gap-3 text-slate-400">
                    <i data-lucide="building" class="w-4 h-4 text-blue-400 flex-shrink-0 mt-1"></i>
                    <div>
                        <strong class="text-slate-300">Branch Office:</strong><br>
                        Barakhamba Road, Connaught Place, Central Delhi – 110001
                    </div>
                </div>

                <div class="flex items-center gap-3 text-slate-300 pt-1">
                    <i data-lucide="phone" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                    <a href="tel:+918447746183" class="hover:text-emerald-400 transition font-bold">+91 84477 46183</a>
                    <span class="text-slate-600">/</span>
                    <a href="tel:+919810239401" class="hover:text-emerald-400 transition">+91 98102 39401</a>
                </div>

                <div class="flex items-center gap-3 text-slate-300">
                    <i data-lucide="mail" class="w-4 h-4 text-blue-400 flex-shrink-0"></i>
                    <div>
                        <a href="mailto:support@taxspoint.com" class="hover:text-white transition font-medium">support@taxspoint.com</a>
                        <span class="text-slate-500 mx-1">|</span>
                        <a href="mailto:mmanishthakur2015@gmail.com" class="hover:text-emerald-400 transition font-medium">mmanishthakur2015@gmail.com</a>
                    </div>
                </div>
            </div>

            <!-- 5 AI Hub Promotion -->
            <div class="lg:col-span-4 bg-obsidian-card rounded-2xl p-5 border border-slate-700/80 space-y-3">
                <div class="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <i data-lucide="bot" class="w-4 h-4"></i>
                    <span>Multi-Agent AI Center Active</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Have instant questions about GST, ITR 1-4, SPICe+ documents, or NICE trademark classes? Chat live with our 5 AI specialist personas anytime.
                </p>
                <a href="<?php echo site_url('ai-agents'); ?>" class="block text-center py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs hover:opacity-95 transition shadow-md">
                    Consult 5 AI Advisors Now →
                </a>
            </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-xs">
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Company Formation</h5>
                <ul class="space-y-2 text-slate-400">
                    <li><a href="<?php echo site_url('services/pvt-ltd'); ?>" class="hover:text-white">Pvt Ltd Company Registration</a></li>
                    <li><a href="<?php echo site_url('services/llp-reg'); ?>" class="hover:text-white">LLP Incorporation</a></li>
                    <li><a href="<?php echo site_url('services/opc-reg'); ?>" class="hover:text-white">One Person Company (OPC)</a></li>
                    <li><a href="<?php echo site_url('services/section-8'); ?>" class="hover:text-white">Section 8 NGO Registration</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Tax & Compliance</h5>
                <ul class="space-y-2 text-slate-400">
                    <li><a href="<?php echo site_url('services/gst-reg'); ?>" class="hover:text-white">GST Registration Online</a></li>
                    <li><a href="<?php echo site_url('services/gst-return'); ?>" class="hover:text-white">GST Monthly / Quarterly Return</a></li>
                    <li><a href="<?php echo site_url('services/itr-filing'); ?>" class="hover:text-white">ITR e-Filing (AY 2025-26)</a></li>
                    <li><a href="<?php echo site_url('services/msme-udyam'); ?>" class="hover:text-white">MSME Udyam Registration</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Trademark & IP</h5>
                <ul class="space-y-2 text-slate-400">
                    <li><a href="<?php echo site_url('services/trademark-reg'); ?>" class="hover:text-white">Trademark (TM) Registration</a></li>
                    <li><a href="<?php echo site_url('services/startup-india'); ?>" class="hover:text-white">Startup India (DPIIT) Recognition</a></li>
                    <li><a href="<?php echo site_url('ai-agents'); ?>" class="hover:text-white">AI Trademark Legal Advisor</a></li>
                </ul>
            </div>
            <div class="space-y-3">
                <h5 class="text-white font-bold text-sm uppercase tracking-wider">Tools & Portals</h5>
                <ul class="space-y-2 text-slate-400">
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-white">Income Tax Calculator (Old vs New)</a></li>
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-white">GST Calculator</a></li>
                    <li><a href="<?php echo site_url('calculators'); ?>" class="hover:text-white">MCA Name Clearance Checker</a></li>
                    <li><a href="<?php echo site_url('track'); ?>" class="hover:text-white">Filing Application Tracker</a></li>
                    <li><a href="<?php echo site_url('admin'); ?>" class="text-emerald-400 hover:underline font-bold">Admin Operations CRM Hub</a></li>
                </ul>
            </div>
        </div>

        <div class="pt-8 text-slate-500 text-[11px] leading-relaxed space-y-4">
            <p>
                <strong>Statutory Disclaimer:</strong> TaxsPoint is an advanced digital technology platform designed to streamline business formation, intellectual property protection, and tax compliance. Professional legal and accounting services are rendered independently by certified Chartered Accountants, Company Secretaries, and Advocates adhering to the regulations of ICAI, ICSI, and Bar Council of India.
            </p>
            <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800 text-slate-400">
                <div>© <?php echo date('Y'); ?> TaxsPoint Technologies Private Limited. All Rights Reserved.</div>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-white">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" class="hover:text-white">Terms of Service</a>
                    <span>•</span>
                    <a href="#" class="hover:text-white">Refund Guarantee</a>
                </div>
            </div>
        </div>

    </div>
</footer>

<!-- Global Lead Modal -->
<div id="lead-modal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in">
        <div class="bg-gradient-to-r from-obsidian via-obsidian-card to-blue-900 p-6 text-white relative">
            <button onclick="closeLeadModal()" class="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <div class="flex items-center gap-2 mb-1">
                <i data-lucide="phone-call" class="w-4 h-4 text-emerald-400"></i>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Free 1-on-1 Consultation</span>
            </div>
            <h3 class="text-xl font-bold">Connect with a Senior CA / Legal Counsel</h3>
            <p id="lead-modal-topic" class="text-xs text-slate-300 mt-1">Free Consultation</p>
        </div>

        <div class="p-6">
            <form id="global-lead-form" onsubmit="handleLeadSubmit(event)" class="space-y-4">
                <input type="hidden" id="lead-service-input" name="service" value="General Consultation">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Legal Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Manish Sharma" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 outline-none">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                        <input type="tel" name="phone" required placeholder="+91 98765 43210" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 outline-none">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 mb-1">Email</label>
                        <input type="email" name="email" placeholder="you@domain.com" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 outline-none">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">City / State</label>
                    <input type="text" name="city" placeholder="e.g. Mumbai, Delhi, Bengaluru" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 outline-none">
                </div>
                <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2">
                    <span>Request Priority Free Callback</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </form>
            <div id="lead-success-msg" class="hidden py-6 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                <div class="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <i data-lucide="check" class="w-7 h-7"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-900">Callback Scheduled!</h4>
                <p class="text-xs text-slate-600">A dedicated Chartered Accountant will call you shortly.</p>
                <button onclick="closeLeadModal()" class="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Floating AI Assistant Button -->
<div class="fixed bottom-6 right-6 z-40">
    <a href="<?php echo site_url('ai-agents'); ?>" class="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-obsidian via-obsidian-card to-blue-700 text-white shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-white">
        <div class="relative">
            <i data-lucide="bot" class="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform"></i>
            <span class="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
        </div>
        <div class="text-left hidden sm:block">
            <div class="text-xs font-bold leading-tight">Ask TaxsPoint AI</div>
            <div class="text-[10px] text-emerald-300">5 CA Specialists Online</div>
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
        var data = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            city: form.city.value,
            service: form.service.value
        };

        fetch('<?php echo site_url("api/create_lead"); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function(r) { return r.json(); }).then(function(res) {
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
            form.classList.add('hidden');
            document.getElementById('lead-success-msg').classList.remove('hidden');
        }).catch(function() {
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
            form.classList.add('hidden');
            document.getElementById('lead-success-msg').classList.remove('hidden');
        });
    }
</script>
</body>
</html>
