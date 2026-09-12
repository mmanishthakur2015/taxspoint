<div class="py-12 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-brand-blue font-bold text-xs uppercase tracking-wider">
                Services Catalog
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Corporate, Tax & Legal Solutions
            </h1>
            <p class="text-sm sm:text-base text-slate-600">
                100% online government filings led by dedicated Chartered Accountants and Advocates.
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
            <a href="<?php echo site_url('services?category=all'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'all' || empty($category)) ? 'bg-brand-navy text-white shadow' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'; ?>">
                All Services
            </a>
            <a href="<?php echo site_url('services?category=incorporation'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'incorporation') ? 'bg-brand-navy text-white shadow' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'; ?>">
                Company Registration
            </a>
            <a href="<?php echo site_url('services?category=tax'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'tax') ? 'bg-brand-navy text-white shadow' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'; ?>">
                Tax & Compliance
            </a>
            <a href="<?php echo site_url('services?category=ip'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'ip') ? 'bg-brand-navy text-white shadow' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'; ?>">
                Trademark & IP
            </a>
            <a href="<?php echo site_url('services?category=licenses'); ?>" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition <?php echo ($category === 'licenses') ? 'bg-brand-navy text-white shadow' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'; ?>">
                Licenses & Approvals
            </a>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($services as $service): ?>
                <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-3">
                            <span class="text-[11px] font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                                <?php echo $service['category_name']; ?>
                            </span>
                            <?php if (!empty($service['badge'])): ?>
                                <span class="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                                    <?php echo $service['badge']; ?>
                                </span>
                            <?php endif; ?>
                        </div>

                        <h3 class="text-xl font-bold text-slate-900">
                            <a href="<?php echo site_url('services/' . $service['id']); ?>">
                                <?php echo $service['title']; ?>
                            </a>
                        </h3>

                        <div class="flex items-center gap-2 mt-2 text-xs text-slate-500">
                            <span class="text-amber-500 font-bold">★ <?php echo $service['rating']; ?></span>
                            <span>•</span>
                            <span><?php echo number_format($service['reviews_count']); ?> Verified Filings</span>
                        </div>

                        <p class="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3">
                            <?php echo $service['short_desc']; ?>
                        </p>

                        <div class="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                            <div class="text-[10px] font-bold uppercase text-slate-400 mb-1">Package Includes:</div>
                            <?php foreach (array_slice($service['deliverables'], 0, 3) as $d): ?>
                                <div class="flex items-center gap-2">
                                    <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"></i>
                                    <span class="line-clamp-1"><?php echo $d; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-slate-100">
                        <div class="flex items-end justify-between mb-4">
                            <div>
                                <div class="text-xs text-slate-400 line-through">₹<?php echo number_format($service['original_price']); ?></div>
                                <div class="text-2xl font-black text-slate-900">
                                    ₹<?php echo number_format($service['price']); ?>
                                </div>
                                <div class="text-[10px] text-slate-400"><?php echo $service['govt_fee_note']; ?></div>
                            </div>
                            <div class="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                                <?php echo $service['turnaround']; ?>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <a href="<?php echo site_url('services/' . $service['id']); ?>" class="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs text-center">
                                View Details
                            </a>
                            <a href="<?php echo site_url('services/' . $service['id'] . '#apply'); ?>" class="py-2.5 px-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-semibold text-xs text-center shadow">
                                Apply Online
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</div>
