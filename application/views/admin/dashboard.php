<div class="py-12 bg-slate-900 text-slate-100 min-h-[80vh]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <i data-lucide="layers" class="w-3.5 h-3.5"></i>
                    <span>TaxsPoint Operations & Control Center</span>
                </span>
                <h1 class="text-2xl sm:text-3xl font-black text-white">
                    Executive CRM & Filings Dashboard
                </h1>
                <p class="text-xs sm:text-sm text-slate-400">
                    Manage incoming leads, assign Chartered Accountants, and advance government filing stages.
                </p>
            </div>
        </div>

        <!-- Metrics -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div class="text-slate-400 text-xs mb-1">Active Filings</div>
                <div class="text-2xl font-black text-white"><?php echo count($orders); ?> Applications</div>
            </div>
            <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div class="text-slate-400 text-xs mb-1">Leads Captured</div>
                <div class="text-2xl font-black text-white"><?php echo count($leads); ?> Inquiries</div>
            </div>
            <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div class="text-slate-400 text-xs mb-1">Revenue Processed</div>
                <?php 
                    $totalRev = 0;
                    foreach ($orders as $o) { $totalRev += $o['amount']; }
                ?>
                <div class="text-2xl font-black text-white">₹<?php echo number_format($totalRev); ?></div>
            </div>
            <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
                <div class="text-slate-400 text-xs mb-1">AI Agents Online</div>
                <div class="text-2xl font-black text-white">5 Specialists</div>
            </div>
        </div>

        <!-- Orders Management Table -->
        <div class="mb-10 space-y-4">
            <h3 class="text-lg font-bold text-white">Client Applications & Filings</h3>
            <div class="bg-slate-800/90 rounded-2xl border border-slate-700 overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-300">
                    <thead class="bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-700">
                        <tr>
                            <th class="p-4">Order ID</th>
                            <th class="p-4">Client Name & Phone</th>
                            <th class="p-4">Service</th>
                            <th class="p-4">Assigned CA</th>
                            <th class="p-4">Status</th>
                            <th class="p-4">Update Stage</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-700">
                        <?php foreach ($orders as $o): ?>
                            <tr class="hover:bg-slate-750">
                                <td class="p-4 font-bold text-blue-400"><?php echo $o['order_id']; ?></td>
                                <td class="p-4">
                                    <div class="font-semibold text-white"><?php echo $o['customer_name']; ?></div>
                                    <div class="text-[11px] text-slate-400"><?php echo $o['phone']; ?></div>
                                </td>
                                <td class="p-4">
                                    <div class="text-white"><?php echo $o['service_title']; ?></div>
                                    <div class="text-[11px] text-slate-400">₹<?php echo number_format($o['amount']); ?></div>
                                </td>
                                <td class="p-4 text-amber-400 font-semibold"><?php echo $o['assigned_ca']; ?></td>
                                <td class="p-4">
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                        <?php echo $o['status']; ?>
                                    </span>
                                </td>
                                <td class="p-4">
                                    <select onchange="updateStageAjax('<?php echo $o['order_id']; ?>', this.value)" class="bg-slate-900 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs outline-none">
                                        <option value="0" <?php echo ($o['current_stage'] == 0) ? 'selected' : ''; ?>>0: Submitted</option>
                                        <option value="1" <?php echo ($o['current_stage'] == 1) ? 'selected' : ''; ?>>1: Doc Verification</option>
                                        <option value="2" <?php echo ($o['current_stage'] == 2) ? 'selected' : ''; ?>>2: DSC & Name Approved</option>
                                        <option value="3" <?php echo ($o['current_stage'] == 3) ? 'selected' : ''; ?>>3: In MCA Filing</option>
                                        <option value="4" <?php echo ($o['current_stage'] == 4) ? 'selected' : ''; ?>>4: Approved & Issued</option>
                                    </select>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Leads Management Table -->
        <div class="space-y-4">
            <h3 class="text-lg font-bold text-white">Callback Leads & Inquiries</h3>
            <div class="bg-slate-800/90 rounded-2xl border border-slate-700 overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-300">
                    <thead class="bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-700">
                        <tr>
                            <th class="p-4">Lead ID</th>
                            <th class="p-4">Name</th>
                            <th class="p-4">Phone</th>
                            <th class="p-4">Service</th>
                            <th class="p-4">City</th>
                            <th class="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-700">
                        <?php foreach ($leads as $l): ?>
                            <tr class="hover:bg-slate-750">
                                <td class="p-4 text-slate-400 font-bold"><?php echo $l['id']; ?></td>
                                <td class="p-4 font-semibold text-white"><?php echo $l['name']; ?></td>
                                <td class="p-4 text-blue-400"><?php echo $l['phone']; ?></td>
                                <td class="p-4 text-white"><?php echo $l['service']; ?></td>
                                <td class="p-4 text-slate-400"><?php echo $l['city']; ?></td>
                                <td class="p-4">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                                        <?php echo $l['status']; ?>
                                    </span>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>

<script>
    function updateStageAjax(orderId, stage) {
        fetch('<?php echo site_url("api/update_stage"); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order_id: orderId, stage: stage })
        }).then(function() {
            alert('Stage updated successfully for ' + orderId);
        });
    }
</script>
