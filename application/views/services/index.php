<div class="py-12 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-[#fff1f4] text-[#ff3f6c] font-bold text-xs uppercase tracking-wider border border-[#ffe4e8]">
                Services Catalog
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#282c3f] tracking-tight">
                Corporate, Tax & Legal Solutions
            </h1>
            <p class="text-sm sm:text-base text-[#535766]">
                100% online government filings led by dedicated Chartered Accountants and Advocates.
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
            <a href="<?php echo site_url('services?category=all'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'all' || empty($category)) ? 'bg-[#ff3f6c] text-white shadow-md shadow-[#ff3f6c]/30' : 'bg-white text-[#282c3f] border border-slate-200 hover:bg-[#fff1f4] hover:text-[#ff3f6c]'; ?>">
                All Services
            </a>
            <a href="<?php echo site_url('services?category=incorporation'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'incorporation') ? 'bg-[#ff3f6c] text-white shadow-md shadow-[#ff3f6c]/30' : 'bg-white text-[#282c3f] border border-slate-200 hover:bg-[#fff1f4] hover:text-[#ff3f6c]'; ?>">
                Company Registration
            </a>
            <a href="<?php echo site_url('services?category=tax'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'tax') ? 'bg-[#ff3f6c] text-white shadow-md shadow-[#ff3f6c]/30' : 'bg-white text-[#282c3f] border border-slate-200 hover:bg-[#fff1f4] hover:text-[#ff3f6c]'; ?>">
                Tax & Compliance
            </a>
            <a href="<?php echo site_url('services?category=ip'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'ip') ? 'bg-[#ff3f6c] text-white shadow-md shadow-[#ff3f6c]/30' : 'bg-white text-[#282c3f] border border-slate-200 hover:bg-[#fff1f4] hover:text-[#ff3f6c]'; ?>">
                Trademark & IP
            </a>
            <a href="<?php echo site_url('services?category=licenses'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'licenses') ? 'bg-[#ff3f6c] text-white shadow-md shadow-[#ff3f6c]/30' : 'bg-white text-[#282c3f] border border-slate-200 hover:bg-[#fff1f4] hover:text-[#ff3f6c]'; ?>">
                Licenses & Approvals
            </a>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($services as $service): ?>
                <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#ff3f6c]/40 shadow-sm hover:shadow-xl transition flex flex-col justify-between group">
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
                            <span><?php echo number_format($service['reviews_count']); ?> Verified Filings</span>
                        </div>

                        <p class="text-xs sm:text-sm text-[#535766] mt-3 line-clamp-3">
                            <?php echo $service['short_desc']; ?>
                        </p>

                        <div class="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-[#282c3f]">
                            <div class="text-[10px] font-bold uppercase text-[#535766] mb-1">Package Includes:</div>
                            <?php foreach (array_slice($service['deliverables'], 0, 3) as $d): ?>
                                <div class="flex items-center gap-2">
                                    <i data-lucide="check-circle" class="w-3.5 h-3.5 text-[#03a685] flex-shrink-0"></i>
                                    <span class="line-clamp-1"><?php echo $d; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-slate-100">
                        <div class="flex items-end justify-between mb-4">
                            <div>
                                <div class="text-xs text-slate-400 line-through">₹<?php echo number_format($service['original_price']); ?></div>
                                <div class="text-2xl font-black text-[#ff3f6c]">
                                    ₹<?php echo number_format($service['price']); ?>
                                </div>
                                <div class="text-[10px] text-[#535766]"><?php echo $service['govt_fee_note']; ?></div>
                            </div>
                            <div class="text-xs font-semibold text-[#ff3f6c] bg-[#fff1f4] px-2.5 py-1 rounded-lg border border-[#ffe4e8]">
                                <?php echo $service['turnaround']; ?>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <a href="<?php echo site_url('services/' . $service['id']); ?>" class="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-[#282c3f] font-semibold text-xs text-center transition">
                                View Details
                            </a>
                            <a href="<?php echo site_url('services/' . $service['id'] . '#apply'); ?>" class="py-2.5 px-3 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-semibold text-xs text-center shadow-md shadow-[#ff3f6c]/25 transition">
                                Apply Online
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</div>
