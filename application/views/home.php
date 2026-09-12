<!-- Hero Section (SPLIT HERO: REGISTRATION & LEAD FORM ON THE LEFT!) -->
<section class="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- LEFT COLUMN: REGISTRATION & FREE CA CONSULTATION CARD (USER REQUESTED: FORM ON THE LEFT!) -->
            <div class="lg:col-span-5 order-2 lg:order-1">
                <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden ring-1 ring-[#ff3f6c]/15">
                    <div class="absolute -top-10 -right-10 w-36 h-36 bg-[#ff3f6c]/10 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <span class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff3f6c] bg-[#fff1f4] px-3 py-1 rounded-full border border-[#ffe4e8]">
                                <i data-lucide="zap" class="w-3.5 h-3.5 text-[#ff3f6c]"></i>
                                <span>Express Registration</span>
                            </span>
                            <h3 class="text-xl sm:text-2xl font-black text-[#282c3f] mt-2">
                                Start Your Filing Online
                            </h3>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-[#282c3f] text-[#ff527b] flex items-center justify-center shadow-lg">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                        </div>
                    </div>

                    <p class="text-xs sm:text-sm text-[#535766] mb-6 leading-relaxed">
                        Get an instant statutory quote, complete document checklist, and a free 1-on-1 call with a senior Chartered Accountant.
                    </p>

                    <form id="hero-lead-form" onsubmit="handleLeadSubmit(event)" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-[#282c3f] mb-1">Full Legal Name *</label>
                            <input type="text" name="name" required placeholder="As per PAN Card" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none transition">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-bold text-[#282c3f] mb-1">Mobile (+91) *</label>
                                <input type="tel" name="phone" required placeholder="98765 43210" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-[#282c3f] mb-1">Email Address</label>
                                <input type="email" name="email" placeholder="you@company.com" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none transition">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-bold text-[#282c3f] mb-1">Required Service</label>
                                <select name="service" class="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-xs outline-none focus:border-[#ff3f6c]">
                                    <option value="Private Limited Company Registration">Private Limited Company</option>
                                    <option value="Limited Liability Partnership (LLP)">LLP Registration</option>
                                    <option value="GST Registration Online">GST Registration</option>
                                    <option value="Income Tax Return (ITR)">ITR Filing</option>
                                    <option value="Trademark (TM) Registration">Trademark Registration</option>
                                    <option value="MSME / Udyam Registration">MSME Udyam</option>
                                    <option value="Startup India (DPIIT)">Startup India DPIIT</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-[#282c3f] mb-1">City / State</label>
                                <input type="text" name="city" placeholder="e.g. Mumbai, Delhi" class="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:bg-white focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none transition">
                            </div>
                        </div>

                        <button type="submit" class="w-full py-3.5 rounded-xl btn-myntra-gradient hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-[#ff3f6c]/30 transition flex items-center justify-center gap-2 transform active:scale-[0.99]">
                            <span>Proceed to Free CA Consultation</span>
                            <i data-lucide="arrow-right" class="w-4 h-4 text-amber-200"></i>
                        </button>

                        <div class="flex items-center justify-center gap-2 text-[11px] text-[#535766] pt-1">
                            <i data-lucide="lock" class="w-3.5 h-3.5 text-[#03a685]"></i>
                            <span>256-Bit Encrypted Vault • Zero Spam Guarantee</span>
                        </div>
                    </form>

                    <!-- In-card Success State -->
                    <div id="hero-lead-success" class="hidden py-8 text-center space-y-3 bg-[#e8fbf6] rounded-2xl border border-[#c3f2e6] p-6 animate-in fade-in">
                        <div class="w-14 h-14 rounded-full bg-[#03a685] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#03a685]/30">
                            <i data-lucide="check-check" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-xl font-black text-[#282c3f]">Consultation Scheduled!</h3>
                        <p class="text-xs sm:text-sm text-[#535766] max-w-sm mx-auto leading-relaxed">
                            Your dedicated Senior CA has been assigned. You will receive an instant WhatsApp confirmation & priority callback within 15 minutes.
                        </p>
                        <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-[#282c3f] flex items-center justify-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-[#03a685] animate-ping"></span>
                            Reference ID: <span id="hero-lead-ref" class="font-mono text-[#ff3f6c] font-bold">TP-LEAD-OK</span>
                        </div>
                        <button type="button" onclick="resetHeroForm()" class="mt-2 text-xs font-bold text-[#ff3f6c] hover:underline">
                            Submit another inquiry →
                        </button>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: UNIQUE VALUE PROPOSITION, LIVE COMPLIANCE SUITE & QUICK ESTIMATOR -->
            <div class="lg:col-span-7 space-y-6 order-1 lg:order-2">
                
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-[#282c3f]">
                    <span class="flex h-2.5 w-2.5 rounded-full bg-[#03a685] animate-pulse"></span>
                    <span>Next-Gen Compliance & CA Platform</span>
                    <span class="text-slate-300">|</span>
                    <span class="text-[#ff3f6c] flex items-center gap-1 font-bold">
                        <i data-lucide="bot" class="w-3.5 h-3.5"></i> 5 AI Advisors Standing By
                    </span>
                </div>

                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282c3f] tracking-tight leading-[1.15]">
                    Empowering India’s <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#282c3f] via-[#ff3f6c] to-[#ff905a]">
                        Next-Gen Founders, Startups & Taxpayers
                    </span>
                </h1>

                <p class="text-base sm:text-lg text-[#535766] leading-relaxed max-w-2xl">
                    Experience India's most modern CA and legal advisory portal. Zero government office visits, zero hidden charges, and transparent pricing guided by senior Chartered Accountants and our 5 specialized AI Advisors.
                </p>

                <!-- Interactive Service Estimator Box -->
                <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-3">
                    <div class="text-xs font-extrabold uppercase tracking-wider text-[#535766] flex items-center justify-between">
                        <span>Instant Fee Estimator</span>
                        <span class="text-[#03a685] bg-[#e8fbf6] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                            100% Price Match Guarantee
                        </span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        <div class="sm:col-span-7">
                            <select id="hero-service-select" onchange="updateHeroPrice()" class="w-full h-12 px-3.5 rounded-xl border border-slate-200 bg-slate-50/70 font-semibold text-sm focus:bg-white focus:border-[#ff3f6c] outline-none">
                                <?php foreach ($services as $s): ?>
                                    <option value="<?php echo $s['id']; ?>" data-price="<?php echo number_format($s['price']); ?>" data-original="<?php echo number_format($s['original_price']); ?>" data-url="<?php echo site_url('services/' . $s['id']); ?>">
                                        <?php echo $s['title']; ?> (<?php echo $s['category_name']; ?>)
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <div class="sm:col-span-5 flex items-center justify-between sm:justify-end gap-3 bg-slate-50 p-2 sm:p-0 rounded-xl sm:bg-transparent">
                            <div class="text-left sm:text-right">
                                <div id="hero-original-price" class="text-xs text-slate-400 line-through">₹4,999</div>
                                <div class="text-xl font-black text-[#ff3f6c] leading-none">
                                    ₹<span id="hero-display-price">1,999</span>
                                    <span class="text-xs font-normal text-[#535766] ml-1">starting</span>
                                </div>
                            </div>
                            <a id="hero-service-link" href="<?php echo site_url('services/pvt-ltd'); ?>" class="px-4 py-2.5 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-[#ff3f6c]/25">
                                <span>Get Details</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bento Metrics Strip -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div class="text-xl font-black text-[#282c3f]">50,000+</div>
                        <div class="text-xs text-[#535766] font-medium">Businesses Set Up</div>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div class="text-xl font-black text-[#03a685]">6.4 Days</div>
                        <div class="text-xs text-[#535766] font-medium">Avg Incorporation</div>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div class="text-xl font-black text-[#ff3f6c]">99.8%</div>
                        <div class="text-xs text-[#535766] font-medium">Approval Success</div>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <div class="text-xl font-black text-[#ff527b]">5 Bots</div>
                        <div class="text-xs text-[#535766] font-medium">AI 24/7 Advisors</div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>

<!-- Bento-Grid Legal & Tax Services Section -->
<section class="py-16 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff1f4] text-[#ff3f6c] font-bold text-xs uppercase tracking-wider mb-2 border border-[#ffe4e8]">
                    Verified Portfolio
                </span>
                <h2 class="text-3xl sm:text-4xl font-black text-[#282c3f] tracking-tight">
                    Featured Corporate & Compliance Suites
                </h2>
                <p class="text-sm text-[#535766] mt-1">
                    Transparent market pricing with dedicated CA support and zero hidden fees.
                </p>
            </div>

            <div class="flex gap-2">
                <a href="<?php echo site_url('services?category=incorporation'); ?>" class="px-3.5 py-2 rounded-xl bg-[#f5f5f6] hover:bg-[#eaeaec] text-[#282c3f] text-xs font-bold transition">
                    Company Formation
                </a>
                <a href="<?php echo site_url('services?category=tax'); ?>" class="px-3.5 py-2 rounded-xl bg-[#f5f5f6] hover:bg-[#eaeaec] text-[#282c3f] text-xs font-bold transition">
                    Tax & Returns
                </a>
                <a href="<?php echo site_url('services'); ?>" class="px-3.5 py-2 rounded-xl bg-[#282c3f] hover:bg-[#ff3f6c] text-white text-xs font-bold transition shadow-sm">
                    View All →
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach (array_slice($services, 0, 6) as $service): ?>
                <div class="p-6 sm:p-7 rounded-3xl bg-[#f5f5f6]/80 border border-slate-200 hover:border-[#ff3f6c]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-3">
                            <span class="text-[11px] font-bold text-[#ff3f6c] bg-[#fff1f4] px-2.5 py-1 rounded-lg uppercase tracking-wider border border-[#ffe4e8]">
                                <?php echo $service['category_name']; ?>
                            </span>
                            <?php if (!empty($service['badge'])): ?>
                                <span class="text-[11px] font-bold text-[#03a685] bg-[#e8fbf6] px-2.5 py-1 rounded-lg border border-[#c3f2e6]">
                                    <?php echo $service['badge']; ?>
                                </span>
                            <?php endif; ?>
                        </div>

                        <h3 class="text-xl font-bold text-[#282c3f] group-hover:text-[#ff3f6c] transition-colors">
                            <a href="<?php echo site_url('services/' . $service['id']); ?>">
                                <?php echo $service['title']; ?>
                            </a>
                        </h3>

                        <div class="flex items-center gap-2 mt-2 text-xs text-[#535766]">
                            <span class="text-[#03a685] font-bold">★ <?php echo $service['rating']; ?></span>
                            <span>•</span>
                            <span><?php echo number_format($service['reviews_count']); ?> Filings</span>
                        </div>

                        <p class="text-xs sm:text-sm text-[#535766] mt-3 line-clamp-2">
                            <?php echo $service['short_desc']; ?>
                        </p>

                        <div class="mt-4 pt-4 border-t border-slate-200 space-y-1.5 text-xs text-[#282c3f]">
                            <?php foreach (array_slice($service['deliverables'], 0, 3) as $deliv): ?>
                                <div class="flex items-center gap-2">
                                    <i data-lucide="check-circle" class="w-3.5 h-3.5 text-[#03a685] flex-shrink-0"></i>
                                    <span class="line-clamp-1"><?php echo $deliv; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-slate-200">
                        <div class="flex items-end justify-between mb-4">
                            <div>
                                <div class="text-xs text-slate-400 line-through">₹<?php echo number_format($service['original_price']); ?></div>
                                <div class="text-2xl font-black text-[#ff3f6c]">
                                    ₹<?php echo number_format($service['price']); ?>
                                </div>
                                <div class="text-[10px] text-[#535766]"><?php echo $service['govt_fee_note']; ?></div>
                            </div>
                            <div class="text-xs font-bold text-[#ff3f6c] bg-[#fff1f4] px-2.5 py-1 rounded-lg border border-[#ffe4e8]">
                                <?php echo $service['turnaround']; ?>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <a href="<?php echo site_url('services/' . $service['id']); ?>" class="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-[#282c3f] font-bold text-xs text-center transition">
                                Details
                            </a>
                            <a href="<?php echo site_url('services/' . $service['id'] . '#apply'); ?>" class="py-2.5 px-3 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-bold text-xs text-center shadow-md shadow-[#ff3f6c]/25 transition">
                                Apply Online
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<!-- 5 Specialized AI Advisors Command Hub -->
<section class="py-16 bg-[#282c3f] text-white border-b border-[#353a4e]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fff1f4]/15 text-[#ff527b] font-bold text-xs uppercase tracking-wider border border-[#ff527b]/30">
                <i data-lucide="bot" class="w-4 h-4"></i>
                <span>Multi-Agent AI Advisory Center</span>
            </span>
            <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-white">
                5 Specialized AI Legal & Tax Counselors
            </h2>
            <p class="text-sm sm:text-base text-slate-300">
                Switch between dedicated AI advisors calibrated on the Income Tax Act, Companies Act 2013, and GST rules.
            </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            <?php foreach ($agents as $agent): ?>
                <a href="<?php echo site_url('ai-agents?agent=' . $agent['id']); ?>" class="p-4 rounded-2xl bg-[#2c3044] hover:bg-[#34384e] border border-slate-700 hover:border-[#ff3f6c]/60 shadow-lg transition flex flex-col justify-between group">
                    <div>
                        <div class="text-3xl mb-2 group-hover:scale-110 transition-transform"><?php echo $agent['avatar']; ?></div>
                        <div class="font-bold text-sm text-white"><?php echo $agent['name']; ?></div>
                        <div class="text-[11px] font-semibold text-[#ff527b] mt-0.5"><?php echo $agent['badge']; ?></div>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-[10px] text-slate-400">
                        <span><?php echo $agent['handle']; ?></span>
                        <span class="text-[#03a685] font-bold">Online ●</span>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>

        <div class="text-center">
            <a href="<?php echo site_url('ai-agents'); ?>" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-myntra-gradient text-white font-black text-sm shadow-xl shadow-[#ff3f6c]/30 hover:opacity-95 transition">
                <span>Open Full AI Advisory Terminal</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>

    </div>
</section>

<!-- 4-Step Process Section -->
<section class="py-16 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-[#fff1f4] text-[#ff3f6c] font-bold text-xs uppercase tracking-wider border border-[#ffe4e8]">
                Transparent Execution
            </span>
            <h2 class="text-3xl sm:text-4xl font-black text-[#282c3f] tracking-tight">How TaxsPoint Works</h2>
            <p class="text-sm sm:text-base text-[#535766]">Zero physical paperwork. 100% digital government registration.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-6 rounded-3xl bg-[#f5f5f6] border border-slate-200">
                <div class="text-3xl font-black text-[#ff3f6c] mb-2">01</div>
                <h4 class="font-bold text-base text-[#282c3f] mb-1">Select Package & KYC</h4>
                <p class="text-xs text-[#535766]">Choose your package and upload digital scans of PAN & Aadhaar online.</p>
            </div>
            <div class="p-6 rounded-3xl bg-[#f5f5f6] border border-slate-200">
                <div class="text-3xl font-black text-[#ff527b] mb-2">02</div>
                <h4 class="font-bold text-base text-[#282c3f] mb-1">Dedicated CA Assigned</h4>
                <p class="text-xs text-[#535766]">A qualified Chartered Accountant reviews and verifies your documents within 30 mins.</p>
            </div>
            <div class="p-6 rounded-3xl bg-[#f5f5f6] border border-slate-200">
                <div class="text-3xl font-black text-[#ff905a] mb-2">03</div>
                <h4 class="font-bold text-base text-[#282c3f] mb-1">Govt Filing & Tracking</h4>
                <p class="text-xs text-[#535766]">We file on MCA SPICe+, GSTN, or Trade Marks Registry with real-time stage updates.</p>
            </div>
            <div class="p-6 rounded-3xl bg-[#f5f5f6] border border-slate-200">
                <div class="text-3xl font-black text-[#03a685] mb-2">04</div>
                <h4 class="font-bold text-base text-[#282c3f] mb-1">Certificate Issued</h4>
                <p class="text-xs text-[#535766]">Your official Incorporation / GSTIN certificate is uploaded directly to your Vault.</p>
            </div>
        </div>
    </div>
</section>

<script>
    function updateHeroPrice() {
        var select = document.getElementById('hero-service-select');
        var opt = select.options[select.selectedIndex];
        document.getElementById('hero-display-price').innerText = opt.getAttribute('data-price');
        document.getElementById('hero-original-price').innerText = '₹' + opt.getAttribute('data-original');
        document.getElementById('hero-service-link').setAttribute('href', opt.getAttribute('data-url'));
    }

    function resetHeroForm() {
        var form = document.getElementById('hero-lead-form');
        var success = document.getElementById('hero-lead-success');
        if (form && success) {
            form.reset();
            form.classList.remove('hidden');
            success.classList.add('hidden');
        }
    }
</script>
