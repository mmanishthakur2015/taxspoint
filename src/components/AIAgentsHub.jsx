import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, Send, User, Sparkles, PhoneCall, CheckCircle2, 
  Clock, Shield, ArrowRight, CornerDownLeft, RefreshCw, Download
} from 'lucide-react';
import { agentsData } from '../data/agentsData';

export function AIAgentsHub({ onOpenLeadModal }) {
  const [activeAgentId, setActiveAgentId] = useState(agentsData[0].id);
  const [messages, setMessages] = useState({});
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const activeAgent = agentsData.find(a => a.id === activeAgentId) || agentsData[0];

  // Initialize welcome messages for each agent
  useEffect(() => {
    const initialMap = {};
    agentsData.forEach(agent => {
      initialMap[agent.id] = [
        {
          sender: 'agent',
          text: `Hello! I am **${agent.name}**, your dedicated **${agent.role}** at TaxsPoint.\n\n${agent.description}\n\nHow may I advise your business or tax compliance today? Click any of the suggested topics below or type your question directly.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
    });
    setMessages(initialMap);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeAgentId, isTyping]);

  // Intelligent responder matching knowledge base or answering logically
  const generateAgentResponse = (query, agent) => {
    const q = query.toLowerCase();

    // 1. Tax Bot Matcher
    if (agent.id === 'tax-bot') {
      if (q.includes('regime') || q.includes('old vs new') || q.includes('slab') || q.includes('75,000') || q.includes('115bac')) {
        return agent.knowledgeBase.regime;
      }
      if (q.includes('freelance') || q.includes('44ada') || q.includes('presumptive') || q.includes('50%')) {
        return agent.knowledgeBase.freelance;
      }
      if (q.includes('capital gain') || q.includes('stock') || q.includes('mutual fund') || q.includes('crypto') || q.includes('share')) {
        return agent.knowledgeBase.capitalGains;
      }
      if (q.includes('notice') || q.includes('143') || q.includes('139') || q.includes('demand') || q.includes('defect')) {
        return agent.knowledgeBase.notice;
      }
      return `Regarding your tax query: **"${query}"**\n\nUnder the Income Tax Act, 1961, your tax liabilities depend on whether income is classified under Salaries, House Property, Capital Gains, or Business/Profession.\n\n• **Immediate Action**: Download your latest AIS (Annual Information Statement) & Form 26AS from the Income Tax e-filing portal.\n• **Deduction Maximization**: Make sure eligible deductions under Chapter VI-A (80C, 80D, 80CCD) are verified.\n\nWould you like one of our Senior CAs to review your Form 16 or profit sheet? Click 'Schedule Call with CA Rajesh' above.`;
    }

    // 2. Corp Bot Matcher
    if (agent.id === 'corp-bot') {
      if (q.includes('llp') || q.includes('pvt') || q.includes('vs') || q.includes('compare') || q.includes('structure')) {
        return agent.knowledgeBase.pvtVsLlp;
      }
      if (q.includes('doc') || q.includes('document') || q.includes('spice') || q.includes('pan') || q.includes('aadhaar')) {
        return agent.knowledgeBase.docs;
      }
      if (q.includes('foreign') || q.includes('nri') || q.includes('usa') || q.includes('fdi') || q.includes('alien')) {
        return agent.knowledgeBase.foreignDirector;
      }
      if (q.includes('name') || q.includes('rule 8') || q.includes('approval') || q.includes('rejection')) {
        return agent.knowledgeBase.nameApproval;
      }
      return `For corporate entity structuring regarding: **"${query}"**\n\nUnder the Companies Act 2013, company formation is streamlined via the MCA SPICe+ digital system. We handle name approval (Part A), DIN allocation, DSC generation, and Certificate of Incorporation (Part B).\n\nKey next step: Conduct an MCA name search and prepare proof of registered office (electricity bill < 2 months old + NOC).\n\nWould you like me to initiate a SPICe+ filing checklist for you?`;
    }

    // 3. GST Bot Matcher
    if (agent.id === 'gst-bot') {
      if (q.includes('turnover') || q.includes('threshold') || q.includes('20 lakh') || q.includes('40 lakh') || q.includes('mandatory')) {
        return agent.knowledgeBase.threshold;
      }
      if (q.includes('itc') || q.includes('credit') || q.includes('laptop') || q.includes('macbook') || q.includes('rent') || q.includes('17(5)')) {
        return agent.knowledgeBase.itcRules;
      }
      if (q.includes('export') || q.includes('lut') || q.includes('rfd-11') || q.includes('foreign currency') || q.includes('firc')) {
        return agent.knowledgeBase.lutExport;
      }
      if (q.includes('drc') || q.includes('notice') || q.includes('variance') || q.includes('gstr-1') || q.includes('3b')) {
        return agent.knowledgeBase.drcNotice;
      }
      return `Regarding GST compliance for: **"${query}"**\n\nGoods and Services Tax in India requires monthly/quarterly compliance through GSTR-1 and GSTR-3B. Ensure that every supplier from whom you purchase enters your GSTIN correctly so it appears in your GSTR-2B statement for input tax credit claiming.\n\nOur indirect tax team can assist with immediate filing or notice handling.`;
    }

    // 4. IP Bot Matcher
    if (agent.id === 'ip-bot') {
      if (q.includes('class') || q.includes('nice') || q.includes('software') || q.includes('class 9') || q.includes('class 42')) {
        return agent.knowledgeBase.classes;
      }
      if (q.includes('symbol') || q.includes('tm') || q.includes('difference') || q.includes('r symbol') || q.includes('register')) {
        return agent.knowledgeBase.symbols;
      }
      if (q.includes('objection') || q.includes('section 9') || q.includes('section 11') || q.includes('hearing') || q.includes('reply')) {
        return agent.knowledgeBase.objection;
      }
      if (q.includes('copyright') || q.includes('code') || q.includes('patent') || q.includes('algorithm') || q.includes('source code')) {
        return agent.knowledgeBase.copyright;
      }
      return `Regarding Intellectual Property protection for: **"${query}"**\n\nSecuring brand equity under the Trade Marks Act 1999 gives you exclusive monopoly over your brand identifier nationwide. We recommend performing a phonetic clearance search before publicly launching marketing campaigns.\n\nWould you like our IP attorneys to run a free clearance check on your brand name?`;
    }

    // 5. Startup Bot Matcher
    if (agent.id === 'startup-bot') {
      if (q.includes('vesting') || q.includes('cliff') || q.includes('founder') || q.includes('equity') || q.includes('split')) {
        return agent.knowledgeBase.vesting;
      }
      if (q.includes('80-iac') || q.includes('tax holiday') || q.includes('exemption') || q.includes('dpiit') || q.includes('startup india')) {
        return agent.knowledgeBase.taxHoliday;
      }
      if (q.includes('safe') || q.includes('i-safe') || q.includes('ccps') || q.includes('seed') || q.includes('investor') || q.includes('funding')) {
        return agent.knowledgeBase.fundingInstruments;
      }
      if (q.includes('esop') || q.includes('pool') || q.includes('employee stock') || q.includes('option')) {
        return agent.knowledgeBase.esop;
      }
      return `Regarding startup legal engineering for: **"${query}"**\n\nBuilding a venture-backed startup in India requires clean corporate hygiene from Day 1: a well-drafted Founders' Agreement with 4-year reverse vesting, DPIIT registration for tax incentives, and compliant i-SAFE / CCPS instruments for angel checks.\n\nWe can assist in drafting your customized agreements within 48 hours.`;
    }

    return `Thank you for your question. I am analyzing this from the statutory perspective. Under Indian legal and regulatory guidelines, this requires careful documentation. Our specialized team is available to assist you step-by-step.`;
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputQuery).trim();
    if (!text) return;

    const userMsg = {
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [activeAgentId]: [...(prev[activeAgentId] || []), userMsg]
    }));

    setInputQuery('');
    setIsTyping(true);

    // Simulate realistic AI thought and typing latency
    setTimeout(() => {
      const responseText = generateAgentResponse(text, activeAgent);
      const agentMsg = {
        sender: 'agent',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => ({
        ...prev,
        [activeAgentId]: [...(prev[activeAgentId] || []), agentMsg]
      }));
      setIsTyping(false);
    }, 700);
  };

  const currentChat = messages[activeAgentId] || [];

  return (
    <section id="ai-agents-hub" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-brand-dark font-bold text-xs uppercase tracking-wider">
            <Bot className="w-4 h-4 text-brand-blue" />
            <span>TaxsPoint Multi-Agent Intelligence Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Consult Our 5 Specialized AI Legal & Tax Advisors
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Switch between specialized AI personas trained on Indian Company Law, Income Tax Act, GST notifications, and IP statutes. Instant answers 24/7 with zero waiting time.
          </p>
        </div>

        {/* 5 Alternative Agents Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {agentsData.map(agent => {
            const isSelected = agent.id === activeAgentId;
            return (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-white border-brand-blue shadow-xl ring-2 ring-blue-500/20 scale-[1.02]' 
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}

                <div>
                  <div className="text-3xl mb-2">{agent.avatar}</div>
                  <div className="font-bold text-sm text-slate-900 leading-tight">
                    {agent.name}
                  </div>
                  <div className="text-[11px] font-semibold text-brand-blue line-clamp-1 mt-0.5">
                    {agent.badge}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{agent.handle}</span>
                  <span className="text-emerald-600 font-bold">Online</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Agent Interactive Workspace */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Agent Persona Sidebar Info */}
          <div className="lg:col-span-4 bg-slate-50/80 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl p-2.5 bg-white rounded-2xl shadow-sm border border-slate-100">
                  {activeAgent.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {activeAgent.name}
                  </h3>
                  <p className="text-xs text-brand-blue font-semibold">{activeAgent.title}</p>
                  <p className="text-[11px] text-slate-500">{activeAgent.experience}</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1">Core Expertise:</strong>
                {activeAgent.description}
              </div>

              {/* Suggested Questions */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Frequently Asked to {activeAgent.name.split(' ')[0]}:
                </div>
                <div className="space-y-1.5">
                  {activeAgent.suggestedQueries.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(query)}
                      className="w-full text-left p-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 text-xs text-slate-700 hover:text-brand-blue transition font-medium line-clamp-2"
                    >
                      💡 {query}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Human Escalate CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => onOpenLeadModal(`Priority Consultation with ${activeAgent.name}`)}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-navy to-brand-blue text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow hover:shadow-md transition"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Talk with Human {activeAgent.role.includes('CA') ? 'CA' : 'Counsel'}</span>
              </button>
              <div className="text-[10px] text-center text-slate-400">
                100% confidential & backed by Bar / ICAI code
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-8 flex flex-col h-[520px] bg-white">
            
            {/* Chat Top Banner */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  Live Consultation Session with {activeAgent.name}
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                AI Advisory v2.4
              </span>
            </div>

            {/* Message Thread */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {currentChat.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'agent' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      {activeAgent.avatar}
                    </div>
                  )}

                  <div className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-blue text-white rounded-tr-none'
                      : 'bg-slate-50 border border-slate-200/80 text-slate-800 rounded-tl-none whitespace-pre-line'
                  }`}>
                    {msg.text}
                    <div className={`text-[10px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                    }`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-11">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span>{activeAgent.name} is reviewing statutory guidelines...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/40">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2"
              >
                <input 
                  type="text"
                  placeholder={`Ask ${activeAgent.name.split(' ')[0]} about ${activeAgent.badge}...`}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim()}
                  className="h-12 px-5 rounded-xl bg-brand-blue hover:bg-brand-navy disabled:bg-slate-200 text-white font-semibold text-sm transition flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-[11px] text-slate-400 text-center mt-2">
                All statutory recommendations are updated as per Union Budget 2024-25 and latest MCA / GST notifications.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
