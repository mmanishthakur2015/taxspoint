<div class="py-12 bg-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff1f4] text-[#ff3f6c] font-bold text-xs uppercase tracking-wider border border-[#ffe4e8]">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#ff3f6c]"></i>
                <span>Real-Time Government Tracking</span>
            </span>
            <h1 class="text-3xl sm:text-4xl font-black text-[#282c3f] tracking-tight">
                Application Tracking & Document Vault
            </h1>
            <p class="text-sm sm:text-base text-[#535766]">
                Track your MCA SPICe+, GST, or Trademark filing stage in real time and download verified certificates.
            </p>
        </div>

        <!-- Order Search Bar -->
        <div class="max-w-xl mx-auto mb-10">
            <form action="<?php echo site_url('track'); ?>" method="GET" class="flex gap-2 p-1.5 bg-white rounded-2xl shadow-md border border-slate-200">
                <input type="text" name="order_id" required placeholder="Enter Order ID (e.g. TP-92841, TP-84192)..." value="<?php echo isset($order['order_id']) ? $order['order_id'] : ''; ?>" class="flex-1 px-4 py-2 text-sm outline-none font-medium text-[#282c3f]">
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-bold text-xs transition shadow-md shadow-[#ff3f6c]/25">
                    Track Filing
                </button>
            </form>

            <div class="flex items-center justify-center gap-2 mt-3 text-xs text-[#535766]">
                <span>Quick Select:</span>
                <?php foreach ($all_orders as $o): ?>
                    <a href="<?php echo site_url('track?order_id=' . $o['order_id']); ?>" class="px-2 py-0.5 rounded border border-slate-200 bg-white hover:bg-[#fff1f4] hover:text-[#ff3f6c] hover:border-[#ff3f6c]/40 font-semibold text-[#282c3f] transition">
                        <?php echo $o['order_id']; ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>

        <?php if ($order): ?>
            <!-- Order Details Card -->
            <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
                
                <!-- Top Status Strip -->
                <div class="bg-gradient-to-r from-[#282c3f] via-[#353a4e] to-[#282c3f] p-6 text-white flex flex-wrap items-center justify-between gap-4 border-b border-[#ff3f6c]/30">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold uppercase bg-[#fff1f4]/15 text-[#ff527b] px-2.5 py-0.5 rounded-full border border-[#ff527b]/30">
                                Order ID: <?php echo $order['order_id']; ?>
                            </span>
                            <span class="text-xs text-slate-300">Applied on <?php echo $order['date']; ?></span>
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold mt-1"><?php echo $order['service_title']; ?></h3>
                        <p class="text-xs text-slate-300 mt-0.5">
                            Applicant: <strong><?php echo $order['customer_name']; ?></strong> (<?php echo $order['phone']; ?>)
                        </p>
                    </div>

                    <div class="text-right">
                        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold <?php echo ($order['current_stage'] == 4) ? 'bg-[#03a685] text-white' : 'bg-[#ff905a] text-slate-950'; ?>">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                            <span><?php echo $order['status']; ?></span>
                        </span>
                        <div class="text-xs text-[#ff527b] mt-1 font-bold">Paid: ₹<?php echo number_format($order['amount']); ?></div>
                    </div>
                </div>

                <div class="p-6 sm:p-8 space-y-8">
                    
                    <!-- 5-Stage Stepper -->
                    <?php 
                        $stages = array(
                            'Application Submitted',
                            'Document Verification',
                            'DSC & Name Approved',
                            'In MCA Filing',
                            'Approved & Issued'
                        );
                    ?>
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-[#535766] mb-6">
                            Live Government Filing Stage
                        </h4>
                        <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
                            <?php foreach ($stages as $idx => $st): 
                                $isPast = ($idx < $order['current_stage']);
                                $isCurrent = ($idx == $order['current_stage']);
                            ?>
                                <div class="flex sm:flex-col items-center sm:text-center gap-3">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 <?php echo $isPast ? 'bg-[#03a685] text-white' : ($isCurrent ? 'bg-[#ff3f6c] text-white ring-4 ring-[#ff3f6c]/20 shadow-md shadow-[#ff3f6c]/25' : 'bg-slate-100 text-[#535766]'); ?>">
                                        <?php echo $isPast ? '✓' : ($idx + 1); ?>
                                    </div>
                                    <div class="text-xs font-bold <?php echo $isCurrent ? 'text-[#ff3f6c]' : ($isPast ? 'text-[#282c3f]' : 'text-[#535766]'); ?>">
                                        <?php echo $st; ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <!-- Assigned CA & Notes -->
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
                        <div class="md:col-span-7 bg-[#fff1f4]/60 rounded-2xl p-5 border border-[#ffe4e8] space-y-2">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#ff3f6c]">
                                Latest Operations Update
                            </div>
                            <p class="text-sm font-semibold text-[#282c3f]"><?php echo $order['notes']; ?></p>
                            <p class="text-xs text-[#535766]">Certificate approval expected within 48 to 72 business hours.</p>
                        </div>

                        <div class="md:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#535766]">Assigned Professional</div>
                            <div class="font-bold text-[#282c3f]"><?php echo $order['assigned_ca']; ?></div>
                            <div class="text-xs text-[#535766]">Senior Compliance Officer</div>
                            <div class="pt-2">
                                <a href="tel:+917258060485" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#03a685] text-white font-bold text-xs shadow-sm">
                                    <i data-lucide="phone" class="w-3.5 h-3.5"></i>
                                    <span>Call Senior CA</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Document Vault -->
                    <div class="pt-6 border-t border-slate-100 space-y-4">
                        <div class="flex items-center justify-between">
                            <h4 class="text-base font-bold text-slate-900">Encrypted Document Vault</h4>
                            <button onclick="alert('Document upload encrypted and saved!')" class="px-3.5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center gap-1.5">
                                <i data-lucide="upload-cloud" class="w-4 h-4"></i>
                                <span>Upload Document</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div class="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                                <i data-lucide="file-text" class="w-5 h-5 text-brand-blue"></i>
                                <div>
                                    <div class="text-xs font-bold text-slate-800">Applicant PAN Card</div>
                                    <div class="text-[10px] text-emerald-600 font-semibold">✓ Verified</div>
                                </div>
                            </div>
                            <div class="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                                <i data-lucide="file-text" class="w-5 h-5 text-brand-blue"></i>
                                <div>
                                    <div class="text-xs font-bold text-slate-800">Aadhaar Card Copy</div>
                                    <div class="text-[10px] text-emerald-600 font-semibold">✓ Verified</div>
                                </div>
                            </div>
                            <div class="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <i data-lucide="download" class="w-5 h-5 text-emerald-700"></i>
                                    <div>
                                        <div class="text-xs font-bold text-emerald-950">Official Certificate</div>
                                        <div class="text-[10px] text-emerald-700 font-semibold">Govt Approved (.PDF)</div>
                                    </div>
                                </div>
                                <button onclick="alert('Downloading official certificate for <?php echo $order['order_id']; ?>...')" class="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white">
                                    <i data-lucide="download" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <?php endif; ?>

    </div>
</div>
