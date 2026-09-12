import React, { useState } from 'react';
import { Bot, X, MessageSquare, Send, Sparkles, PhoneCall } from 'lucide-react';
import { agentsData } from '../data/agentsData';

export function FloatingAIAssistant({ onOpenLeadModal, onNavigateToHub }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState(agentsData[0].id);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about Indian Company Registration, ITR filing, or GST compliance.' }
  ]);
  const [userQuery, setUserQuery] = useState('');

  const currentAgent = agentsData.find(a => a.id === selectedAgentId) || agentsData[0];

  const handleSend = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const q = userQuery.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: q }]);
    setUserQuery('');

    setTimeout(() => {
      let reply = `Based on Indian regulations for "${q}", our team recommends verifying your PAN/Aadhaar and selecting the appropriate MCA / GST filing category. You can launch our full 5-Agent Advisory Hub for detailed analysis!`;
      if (q.toLowerCase().includes('cost') || q.toLowerCase().includes('price')) {
        reply = 'Private Limited company registration starts from ₹1,999, GST registration is ₹499, and ITR filing is ₹799 with senior CA support.';
      } else if (q.toLowerCase().includes('regime') || q.toLowerCase().includes('tax')) {
        reply = 'Under the New Tax Regime (FY 2024-25), standard deduction is ₹75,000 and income up to ₹7.75 Lakhs is effectively tax-free u/s 87A!';
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-brand-navy via-brand-blue to-indigo-600 text-white shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group border-2 border-white"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-brand-sky group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight">Ask TaxsPoint AI</div>
            <div className="text-[10px] text-blue-200">5 CA Specialists Online</div>
          </div>
        </button>
      )}

      {/* Mini Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-80 sm:w-96 overflow-hidden flex flex-col h-[460px] animate-in fade-in zoom-in-95 duration-150">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-blue p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="text-2xl">{currentAgent.avatar}</div>
              <div>
                <div className="font-bold text-xs">{currentAgent.name}</div>
                <div className="text-[10px] text-blue-200 font-medium">{currentAgent.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => { setIsOpen(false); onNavigateToHub(); }}
                className="text-[10px] bg-white/20 hover:bg-white/30 px-2 py-1 rounded font-bold"
                title="Open Full AI Hub"
              >
                Expand Hub
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Agent Switcher Pills */}
          <div className="flex gap-1 p-2 bg-slate-50 border-b border-slate-100 overflow-x-auto scrollbar-none text-[10px]">
            {agentsData.map(a => (
              <button
                key={a.id}
                onClick={() => setSelectedAgentId(a.id)}
                className={`px-2 py-1 rounded-lg whitespace-nowrap font-semibold transition ${
                  selectedAgentId === a.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {a.avatar} {a.handle}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            {chatMessages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-brand-blue text-white rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder={`Ask ${currentAgent.name.split(' ')[0]}...`}
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl outline-none focus:border-brand-blue"
            />
            <button
              type="submit"
              className="p-2 bg-brand-blue hover:bg-brand-navy text-white rounded-xl"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
