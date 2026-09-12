import React, { useState } from 'react';
import { 
  Phone, Mail, Search, ShieldCheck, ChevronDown, Sparkles, 
  Menu, X, ArrowRight, UserCheck, Bot, FileText, CheckCircle2,
  Building2, Receipt, Award, Landmark, HelpCircle, Layers
} from 'lucide-react';

export function Header({ 
  onNavigate, 
  activeView, 
  onSelectService, 
  onOpenLeadModal,
  services 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const filteredServices = searchQuery.trim() === '' ? [] : services.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-blue text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-900 tracking-wide uppercase">
              Free Consultation
            </span>
            <span className="hidden sm:inline text-slate-200">
              Speak directly with a Senior CA / Advocate before starting your business!
            </span>
            <span className="sm:hidden text-slate-200 font-medium">
              India's Trusted CA & Legal Tech Portal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+917258060485" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-sky" />
              <span>+91 72580 60485</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-200">
              <Mail className="w-3.5 h-3.5 text-brand-sky" />
              <span>support@taxspoints.com</span>
            </div>
            <div className="flex items-center gap-1 text-amber-300 font-semibold pl-2 border-l border-white/20">
              <span>★ 4.9/5</span>
              <span className="text-slate-300 hidden lg:inline font-normal">(50k+ Happy Clients)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="/taxspoint-logo.png" 
              alt="TaxsPoint - Income Tax Filing | Legal Consulting" 
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[14px] font-medium text-slate-700">
            {/* Startup Services */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('startup')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => onNavigate('services', 'incorporation')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-blue hover:bg-slate-50 transition ${
                  activeView === 'services' ? 'text-brand-blue font-semibold' : ''
                }`}
              >
                <span>Company Registration</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'startup' && (
                <div className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-xs font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Incorporate in India
                  </div>
                  <div className="space-y-1">
                    {services.filter(s => s.category === 'incorporation').map(item => (
                      <div 
                        key={item.id}
                        onClick={() => { onSelectService(item); setActiveDropdown(null); }}
                        className="p-2.5 rounded-xl hover:bg-blue-50/80 transition cursor-pointer flex items-center justify-between group/sub"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover/sub:text-brand-blue">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">From ₹{item.price.toLocaleString()} + govt fee</div>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-brand-blue">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tax & Compliance */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('tax')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => onNavigate('services', 'tax')}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-blue hover:bg-slate-50 transition"
              >
                <span>Tax & GST</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'tax' && (
                <div className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-xs font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Taxation & Filings
                  </div>
                  <div className="space-y-1">
                    {services.filter(s => s.category === 'tax').map(item => (
                      <div 
                        key={item.id}
                        onClick={() => { onSelectService(item); setActiveDropdown(null); }}
                        className="p-2.5 rounded-xl hover:bg-emerald-50/80 transition cursor-pointer flex items-center justify-between group/sub"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover/sub:text-emerald-700">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">From ₹{item.price.toLocaleString()}</div>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trademark & IP */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('ip')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => onNavigate('services', 'ip')}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-blue hover:bg-slate-50 transition"
              >
                <span>Trademark & IP</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'ip' && (
                <div className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-xs font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Protect Intellectual Property
                  </div>
                  <div className="space-y-1">
                    {services.filter(s => s.category === 'ip').map(item => (
                      <div 
                        key={item.id}
                        onClick={() => { onSelectService(item); setActiveDropdown(null); }}
                        className="p-2.5 rounded-xl hover:bg-purple-50/80 transition cursor-pointer flex items-center justify-between group/sub"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover/sub:text-purple-700">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">From ₹{item.price.toLocaleString()}</div>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Free Calculators */}
            <button 
              onClick={() => onNavigate('calculators')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-brand-blue hover:bg-slate-50 transition ${
                activeView === 'calculators' ? 'text-brand-blue font-semibold bg-blue-50/70' : ''
              }`}
            >
              <span>Calculators</span>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                Free
              </span>
            </button>

            {/* 5 Alternative AI Agents */}
            <button 
              onClick={() => onNavigate('ai-agents')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition ${
                activeView === 'ai-agents' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-500/20' 
                  : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-brand-navy hover:bg-blue-100 font-semibold border border-blue-200/60'
              }`}
            >
              <Bot className="w-4 h-4 text-brand-blue" />
              <span>5 AI Specialists</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </button>

            {/* Track Application */}
            <button 
              onClick={() => onNavigate('client-portal')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-brand-blue hover:bg-slate-50 transition ${
                activeView === 'client-portal' ? 'text-brand-blue font-semibold' : ''
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Track Order</span>
            </button>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
              title="Search Services"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Admin Switcher */}
            <button 
              onClick={() => onNavigate('admin-portal')}
              className={`hidden md:flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition ${
                activeView === 'admin-portal' 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Admin Hub</span>
            </button>

            {/* Talk to Expert Consultation */}
            <button 
              onClick={() => onOpenLeadModal('General Expert Consultation')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-700 hover:to-brand-dark text-white shadow-md shadow-blue-500/25 hover:shadow-lg transition-all transform active:scale-95"
            >
              <UserCheck className="w-4 h-4" />
              <span>Talk to CA</span>
            </button>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button 
              onClick={() => { onNavigate('services', 'incorporation'); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-left"
            >
              <Building2 className="w-4 h-4 text-brand-blue" />
              <span>Company Reg</span>
            </button>
            <button 
              onClick={() => { onNavigate('services', 'tax'); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left"
            >
              <Receipt className="w-4 h-4 text-emerald-600" />
              <span>Tax & GST</span>
            </button>
            <button 
              onClick={() => { onNavigate('services', 'ip'); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-purple-50 text-left"
            >
              <Award className="w-4 h-4 text-purple-600" />
              <span>Trademark & IP</span>
            </button>
            <button 
              onClick={() => { onNavigate('calculators'); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-left"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Tax Calculator</span>
            </button>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button 
              onClick={() => { onNavigate('ai-agents'); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span>5 AI Alternative Specialists</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => { onNavigate('client-portal'); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 text-slate-800 font-medium hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Track Application & Document Vault</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button 
              onClick={() => { onNavigate('admin-portal'); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 text-white font-medium"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-sky" />
                <span>Admin & Operations Hub</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => { onOpenLeadModal('Free CA Consultation'); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg"
            >
              Talk to Chartered Accountant Now
            </button>
          </div>
        </div>
      )}

      {/* Full-Screen Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                autoFocus
                placeholder="Search services (e.g. Pvt Ltd, GST, Trademark, ITR, MSME)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-base sm:text-lg outline-none text-slate-800 placeholder:text-slate-400"
              />
              <button 
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {filteredServices.length > 0 ? (
                <div className="space-y-2">
                  {filteredServices.map(item => (
                    <div 
                      key={item.id}
                      onClick={() => { 
                        onSelectService(item); 
                        setSearchOpen(false); 
                        setSearchQuery(''); 
                      }}
                      className="p-3 rounded-xl hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{item.shortDesc}</div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-3">
                        <div className="text-sm font-bold text-brand-blue">₹{item.price.toLocaleString()}</div>
                        <span className="text-[10px] text-emerald-600 font-semibold">{item.turnaround}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery.trim() !== '' ? (
                <div className="text-center py-8 text-slate-400">
                  No services found matching "{searchQuery}". Try searching for 'LLP', 'Tax', or 'Trademark'.
                </div>
              ) : (
                <div className="py-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Popular Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Pvt Ltd Company', 'GST Registration', 'Income Tax Return', 'Trademark Search', 'MSME Udyam', 'Section 8 NGO'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-brand-blue transition font-medium"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
