<div class="py-10 bg-slate-50 border-b border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <a href="<?php echo site_url(); ?>" class="hover:text-brand-blue">Home</a>
            <span>/</span>
            <a href="<?php echo site_url('services?category=' . $service['category']); ?>" class="hover:text-brand-blue"><?php echo $service['category_name']; ?></a>
            <span>/</span>
            <span class="text-slate-900 font-semibold"><?php echo $service['title']; ?></span>
        </div>

        <!-- Hero Header -->
        <div class="bg-gradient-to-r from-[#282c3f] via-[#353a4e] to-[#282c3f] p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden mb-8 border border-[#ff3f6c]/20">
            <div class="flex items-center gap-2 mb-3">
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fff1f4]/15 text-[#ff527b] uppercase tracking-wider border border-[#ff527b]/30">
                    <?php echo $service['category_name']; ?>
                </span>
                <?php if (!empty($service['badge'])): ?>
                    <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#e8fbf6]/20 text-[#03a685] border border-[#03a685]/30">
                        <?php echo $service['badge']; ?>
                    </span>
                <?php endif; ?>
            </div>

            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
                <?php echo $service['title']; ?>
            </h1>

            <p class="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed mb-6">
                <?php echo $service['long_desc']; ?>
            </p>

            <div class="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-200 pt-4 border-t border-white/10">
                <div>
                    <span class="text-amber-300 font-bold">★ <?php echo $service['rating']; ?> / 5.0</span>
                    <span class="text-slate-300 ml-1">(<?php echo number_format($service['reviews_count']); ?> reviews)</span>
                </div>
                <div>
                    <span>Turnaround: <strong class="text-white"><?php echo $service['turnaround']; ?></strong></span>
                </div>
                <div class="text-2xl font-black text-[#ff3f6c]">
                    ₹<?php echo number_format($service['price']); ?>
                    <span class="text-xs font-normal text-slate-300"><?php echo $service['govt_fee_note']; ?></span>
                </div>
            </div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left: Deliverables & Documents -->
            <div class="lg:col-span-7 space-y-8">
                
                <!-- Deliverables Box -->
                <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                    <h3 class="text-lg font-bold text-[#282c3f] flex items-center gap-2">
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-[#03a685]"></i>
                        <span>What's Included in this Package</span>
                    </h3>
                    <div class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                        <?php foreach ($service['deliverables'] as $deliv): ?>
                            <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <i data-lucide="check" class="w-4 h-4 text-[#03a685] flex-shrink-0 mt-0.5"></i>
                                <span class="font-medium text-[#282c3f]"><?php echo $deliv; ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Documents Required Box -->
                <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                    <h3 class="text-lg font-bold text-[#282c3f] flex items-center gap-2">
                        <i data-lucide="file-text" class="w-5 h-5 text-[#ff3f6c]"></i>
                        <span>Documents Required</span>
                    </h3>
                    <p class="text-xs text-slate-500">
                        Zero physical documents required. Simply upload digital scans or photos from your smartphone.
                    </p>
                    <div class="space-y-2 text-xs sm:text-sm text-slate-700">
                        <?php foreach ($service['documents_required'] as $doc): ?>
                            <div class="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-white">
                                <i data-lucide="file-check" class="w-4 h-4 text-[#ff3f6c] flex-shrink-0"></i>
                                <span class="font-medium text-[#282c3f]"><?php echo $doc; ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

            </div>

            <!-- Right: Application & Checkout Drawer -->
            <div id="apply" class="lg:col-span-5 sticky top-24">
                <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xl space-y-5">
                    <div class="border-b border-slate-100 pb-4">
                        <span class="text-xs font-bold uppercase tracking-wider text-[#ff3f6c] bg-[#fff1f4] px-2.5 py-1 rounded-full border border-[#ffe4e8]">
                            Online Application
                        </span>
                        <h3 class="text-xl font-bold text-[#282c3f] mt-2">
                            Apply for <?php echo $service['title']; ?>
                        </h3>
                        <div class="text-xs text-slate-500 mt-1">
                            A dedicated Chartered Accountant will verify your filing.
                        </div>
                    </div>

                    <form id="service-order-form" onsubmit="handleOrderSubmit(event)" class="space-y-4">
                        <input type="hidden" name="service_title" value="<?php echo htmlspecialchars($service['title']); ?>">
                        <input type="hidden" name="amount" value="<?php echo $service['price']; ?>">

                        <div>
                            <label class="block text-xs font-semibold text-[#282c3f] mb-1">Full Legal Name *</label>
                            <input type="text" name="customer_name" required placeholder="As per PAN Card" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-[#282c3f] mb-1">Mobile (+91) *</label>
                                <input type="tel" name="phone" required placeholder="98765 43210" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-[#282c3f] mb-1">Email *</label>
                                <input type="email" name="email" required placeholder="you@domain.com" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-[#282c3f] mb-1">Proposed Company / Brand Name</label>
                            <input type="text" name="entity_name" placeholder="e.g. TaxsPoint Tech Pvt Ltd" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                        </div>

                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                            <div class="flex justify-between">
                                <span class="text-slate-500">Professional Fee:</span>
                                <strong class="text-[#282c3f]">₹<?php echo number_format($service['price']); ?></strong>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-500">GST (18%):</span>
                                <span class="text-slate-700">₹<?php echo number_format(round($service['price'] * 0.18)); ?></span>
                            </div>
                            <div class="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-[#ff3f6c]">
                                <span>Total Amount:</span>
                                <span>₹<?php echo number_format(round($service['price'] * 1.18)); ?></span>
                            </div>
                        </div>

                        <button type="submit" class="w-full py-3.5 rounded-xl btn-myntra-gradient hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#ff3f6c]/25 transition flex items-center justify-center gap-2">
                            <i data-lucide="lock" class="w-4 h-4"></i>
                            <span>Submit Application & Pay</span>
                        </button>
                    </form>

                    <div id="order-success-msg" class="hidden py-6 text-center space-y-3 bg-[#e8fbf6] rounded-2xl border border-[#c3f2e6] p-6">
                        <div class="w-12 h-12 rounded-full bg-[#03a685] text-white flex items-center justify-center mx-auto shadow-md">
                            <i data-lucide="check" class="w-7 h-7"></i>
                        </div>
                        <h4 class="text-lg font-bold text-[#282c3f]">Application Submitted!</h4>
                        <p class="text-xs text-slate-600">Your application has been received. Order ID generated.</p>
                        <a id="track-order-btn" href="<?php echo site_url('track'); ?>" class="inline-block mt-3 px-5 py-2.5 rounded-xl bg-[#282c3f] hover:bg-[#ff3f6c] text-white font-bold text-xs transition">
                            Track in Client Portal →
                        </a>
                    </div>

                    <div class="text-[11px] text-center text-slate-400">
                        100% Money-Back Satisfaction Guarantee
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>

<script>
    function handleOrderSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var data = {
            service_title: form.service_title.value,
            amount: form.amount.value,
            customer_name: form.customer_name.value,
            phone: form.phone.value,
            email: form.email.value,
            entity_name: form.entity_name.value
        };

        fetch('<?php echo site_url("api/create_order"); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function(r) { return r.json(); }).then(function(res) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            form.classList.add('hidden');
            if (res.order && res.order.order_id) {
                document.getElementById('track-order-btn').setAttribute('href', '<?php echo site_url("track?order_id="); ?>' + res.order.order_id);
            }
            document.getElementById('order-success-msg').classList.remove('hidden');
        }).catch(function() {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            form.classList.add('hidden');
            document.getElementById('order-success-msg').classList.remove('hidden');
        });
    }
</script>
