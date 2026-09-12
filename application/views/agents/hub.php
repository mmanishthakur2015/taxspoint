<div class="py-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fff1f4] text-[#ff3f6c] font-bold text-xs uppercase tracking-wider border border-[#ffe4e8]">
                <i data-lucide="bot" class="w-4 h-4 text-[#ff3f6c]"></i>
                <span>TaxsPoint 5 AI Specialists Center</span>
            </span>
            <h1 class="text-3xl sm:text-4xl font-black text-[#282c3f] tracking-tight">
                Consult Our 5 Specialized AI Legal & Tax Advisors
            </h1>
            <p class="text-sm sm:text-base text-[#535766]">
                Select your specialist persona below for real-time guidance on MCA incorporation, Income Tax returns, GST compliance, or Trademark protection.
            </p>
        </div>

        <!-- 5 Agents Selector Tabs -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            <?php foreach ($agents as $idx => $a): ?>
                <button 
                    onclick="switchAgent('<?php echo $a['id']; ?>', '<?php echo htmlspecialchars($a['name']); ?>', '<?php echo htmlspecialchars($a['role']); ?>', '<?php echo htmlspecialchars($a['title']); ?>', '<?php echo htmlspecialchars($a['experience']); ?>', '<?php echo $a['avatar']; ?>', '<?php echo htmlspecialchars($a['description']); ?>', <?php echo htmlspecialchars(json_encode($a['suggested_queries'])); ?>)"
                    id="tab-<?php echo $a['id']; ?>"
                    class="agent-tab p-4 rounded-2xl text-left transition-all border relative flex flex-col justify-between <?php echo ($idx === 0) ? 'bg-white border-[#ff3f6c] shadow-xl ring-2 ring-[#ff3f6c]/20' : 'bg-white/80 border-slate-200 hover:border-slate-300'; ?>"
                >
                    <div>
                        <div class="text-3xl mb-2"><?php echo $a['avatar']; ?></div>
                        <div class="font-bold text-sm text-[#282c3f]"><?php echo $a['name']; ?></div>
                        <div class="text-[11px] font-semibold text-[#ff3f6c] mt-0.5"><?php echo $a['badge']; ?></div>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-[#535766]">
                        <span><?php echo $a['handle']; ?></span>
                        <span class="text-[#03a685] font-bold">Online ●</span>
                    </div>
                </button>
            <?php endforeach; ?>
        </div>

        <!-- Active Agent Interactive Workspace -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
            
            <!-- Agent Sidebar -->
            <div class="lg:col-span-4 bg-slate-50/80 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div id="active-agent-avatar" class="text-4xl p-2.5 bg-white rounded-2xl shadow-sm border border-[#ffe4e8]">
                            <?php echo $agents[0]['avatar']; ?>
                        </div>
                        <div>
                            <h3 id="active-agent-name" class="text-lg font-bold text-[#282c3f]">
                                <?php echo $agents[0]['name']; ?>
                            </h3>
                            <p id="active-agent-title" class="text-xs text-[#ff3f6c] font-semibold">
                                <?php echo $agents[0]['title']; ?>
                            </p>
                            <p id="active-agent-exp" class="text-[11px] text-[#535766]">
                                <?php echo $agents[0]['experience']; ?>
                            </p>
                        </div>
                    </div>

                    <div id="active-agent-desc" class="p-3 bg-white rounded-xl border border-slate-200 text-xs text-[#535766] leading-relaxed">
                        <?php echo $agents[0]['description']; ?>
                    </div>

                    <div>
                        <div class="text-xs font-bold text-[#535766] uppercase tracking-wider mb-2">
                            Frequently Asked Topics:
                        </div>
                        <div id="suggested-queries-box" class="space-y-1.5">
                            <?php foreach ($agents[0]['suggested_queries'] as $sq): ?>
                                <button onclick="sendPredefined('<?php echo htmlspecialchars($sq); ?>')" class="w-full text-left p-2 rounded-xl bg-white hover:bg-[#fff1f4] border border-slate-200 text-xs text-[#282c3f] hover:text-[#ff3f6c] transition font-medium">
                                    💡 <?php echo $sq; ?>
                                </button>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-200">
                    <button onclick="openLeadModal('Priority Call with ' + document.getElementById('active-agent-name').innerText)" class="w-full py-2.5 rounded-xl btn-myntra-gradient text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#ff3f6c]/20">
                        <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
                        <span>Schedule Call with this Advisor</span>
                    </button>
                </div>
            </div>

            <!-- Chat Window -->
            <div class="lg:col-span-8 flex flex-col h-[520px] bg-white">
                
                <!-- Chat Top Banner -->
                <div class="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div class="flex items-center gap-2">
                        <span class="flex h-2 w-2 rounded-full bg-[#03a685] animate-pulse"></span>
                        <span id="chat-header-title" class="text-xs font-bold text-[#282c3f]">
                            Live Consultation Session with <?php echo $agents[0]['name']; ?>
                        </span>
                    </div>
                    <span class="text-[11px] font-medium text-[#ff3f6c] bg-[#fff1f4] px-2 py-0.5 rounded-full border border-[#ffe4e8]">
                        AI Advisory v2.4
                    </span>
                </div>

                <!-- Message Thread -->
                <div id="chat-thread" class="flex-1 p-5 overflow-y-auto space-y-4">
                    <div class="flex items-start gap-2.5">
                        <div class="w-8 h-8 rounded-full bg-[#fff1f4] text-[#ff3f6c] flex items-center justify-center text-sm flex-shrink-0 border border-[#ffe4e8]">
                            👨‍💼
                        </div>
                        <div class="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#f5f5f6] border border-slate-200 text-[#282c3f] rounded-tl-none whitespace-pre-line">
                            Hello! I am <strong><?php echo $agents[0]['name']; ?></strong>, your dedicated <strong><?php echo $agents[0]['role']; ?></strong> at TaxsPoint.

How may I advise your business or tax compliance today? Click any of the suggested topics on the left or type your query below!
                            <div class="text-[10px] mt-1 text-[#535766] text-right">Just now</div>
                        </div>
                    </div>
                </div>

                <!-- Input Form -->
                <div class="p-4 border-t border-slate-100 bg-slate-50/40">
                    <form onsubmit="handleAgentChat(event)" class="flex items-center gap-2">
                        <input id="chat-input" type="text" placeholder="Ask your question..." class="flex-1 h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm focus:border-[#ff3f6c] focus:ring-1 focus:ring-[#ff3f6c]/30 outline-none">
                        <button type="submit" class="h-12 px-5 rounded-xl bg-[#ff3f6c] hover:bg-[#e7335d] text-white font-semibold text-sm transition flex items-center gap-1.5 shadow-md shadow-[#ff3f6c]/25">
                            <span>Send</span>
                            <i data-lucide="send" class="w-4 h-4"></i>
                        </button>
                    </form>
                    <div class="text-[11px] text-[#535766] text-center mt-2">
                        Statutory references conform to Income Tax Act 1961, Companies Act 2013, and Trade Marks Act 1999.
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>

<script>
    var currentAgentId = 'tax-bot';

    function switchAgent(id, name, role, title, exp, avatar, desc, queries) {
        currentAgentId = id;

        // Update tab styles
        document.querySelectorAll('.agent-tab').forEach(function(el) {
            el.classList.remove('bg-white', 'border-[#ff3f6c]', 'shadow-xl', 'ring-2', 'ring-[#ff3f6c]/20');
            el.classList.add('bg-white/80', 'border-slate-200');
        });
        var activeTab = document.getElementById('tab-' + id);
        activeTab.classList.add('bg-white', 'border-[#ff3f6c]', 'shadow-xl', 'ring-2', 'ring-[#ff3f6c]/20');
        activeTab.classList.remove('bg-white/80', 'border-slate-200');

        // Update sidebar
        document.getElementById('active-agent-avatar').innerText = avatar;
        document.getElementById('active-agent-name').innerText = name;
        document.getElementById('active-agent-title').innerText = title;
        document.getElementById('active-agent-exp').innerText = exp;
        document.getElementById('active-agent-desc').innerText = desc;
        document.getElementById('chat-header-title').innerText = "Live Consultation Session with " + name;

        // Update queries
        var qHtml = '';
        queries.forEach(function(q) {
            qHtml += '<button onclick="sendPredefined(\'' + q.replace(/'/g, "\\'") + '\')" class="w-full text-left p-2 rounded-xl bg-white hover:bg-[#fff1f4] border border-slate-200 text-xs text-[#282c3f] hover:text-[#ff3f6c] transition font-medium">💡 ' + q + '</button>';
        });
        document.getElementById('suggested-queries-box').innerHTML = qHtml;

        // Add welcome message in chat
        var thread = document.getElementById('chat-thread');
        thread.innerHTML += '<div class="flex items-start gap-2.5 mt-4"><div class="w-8 h-8 rounded-full bg-[#fff1f4] text-[#ff3f6c] flex items-center justify-center text-sm flex-shrink-0 border border-[#ffe4e8]">' + avatar + '</div><div class="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#f5f5f6] border border-slate-200 text-[#282c3f] rounded-tl-none whitespace-pre-line">Switched to <strong>' + name + '</strong> (' + role + '). How can I assist you with ' + role + '?</div></div>';
        thread.scrollTop = thread.scrollHeight;
    }

    function sendPredefined(text) {
        document.getElementById('chat-input').value = text;
        handleAgentChat(null, text);
    }

    function handleAgentChat(e, overrideText) {
        if (e) e.preventDefault();
        var input = document.getElementById('chat-input');
        var query = overrideText || input.value.trim();
        if (!query) return;

        input.value = '';

        var thread = document.getElementById('chat-thread');
        // User message
        thread.innerHTML += '<div class="flex justify-end gap-2.5"><div class="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#ff3f6c] text-white rounded-tr-none shadow-md shadow-[#ff3f6c]/20">' + query + '<div class="text-[10px] mt-1 text-pink-100 text-right">Just now</div></div></div>';
        thread.scrollTop = thread.scrollHeight;

        // AJAX to Api/ask_agent
        fetch('<?php echo site_url("api/ask_agent"); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ agent_id: currentAgentId, query: query })
        }).then(function(r) { return r.json(); }).then(function(res) {
            var ans = res.answer || "Thank you for your question. Under statutory guidelines, our CAs are ready to assist.";
            thread.innerHTML += '<div class="flex items-start gap-2.5"><div class="w-8 h-8 rounded-full bg-[#fff1f4] text-[#ff3f6c] flex items-center justify-center text-sm flex-shrink-0 border border-[#ffe4e8]">' + (res.agent ? res.agent.avatar : '👨‍💼') + '</div><div class="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#f5f5f6] border border-slate-200 text-[#282c3f] rounded-tl-none whitespace-pre-line">' + ans + '<div class="text-[10px] mt-1 text-[#535766] text-right">' + (res.timestamp || '') + '</div></div></div>';
            thread.scrollTop = thread.scrollHeight;
        }).catch(function() {
            thread.innerHTML += '<div class="flex items-start gap-2.5"><div class="w-8 h-8 rounded-full bg-[#fff1f4] text-[#ff3f6c] flex items-center justify-center text-sm flex-shrink-0 border border-[#ffe4e8]">👨‍💼</div><div class="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#f5f5f6] border border-slate-200 text-[#282c3f] rounded-tl-none whitespace-pre-line">Our legal team has received your query and will connect directly with you.</div></div>';
            thread.scrollTop = thread.scrollHeight;
        });
    }
</script>
