import React, { useState, useEffect } from 'react';
import { 
  Users, Layers, DollarSign, CheckCircle2, Clock, Phone, 
  Mail, Edit3, Trash2, ArrowUpRight, Search, Filter, RefreshCw
} from 'lucide-react';
import { initialOrders, getStoredData, setStoredData } from '../utils/helpers';

export function AdminPortal() {
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'leads'
  const [orders, setOrders] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedOrders = getStoredData('taxspoint_orders', initialOrders);
    setOrders(savedOrders);

    const savedLeads = getStoredData('taxspoint_leads', [
      {
        id: 'LEAD-101',
        name: 'Gaurav Singhal',
        phone: '9810239401',
        email: 'gaurav@singhalexports.com',
        service: 'Private Limited Company Registration',
        city: 'Delhi',
        timestamp: 'Today, 11:30 AM',
        status: 'Callback Scheduled'
      },
      {
        id: 'LEAD-102',
        name: 'Sunita Raman',
        phone: '9740123894',
        email: 'sunita@edunext.ai',
        service: 'Trademark Registration',
        city: 'Bengaluru',
        timestamp: 'Today, 09:15 AM',
        status: 'New Inquiry'
      },
      {
        id: 'LEAD-103',
        name: 'Harpreet Singh',
        phone: '9888123456',
        email: 'harpreet@punjabagro.in',
        service: 'GST Registration',
        city: 'Chandigarh',
        timestamp: 'Yesterday, 04:45 PM',
        status: 'Consultation Complete'
      }
    ]);
    setLeads(savedLeads);
  };

  const handleUpdateStage = (orderId, newStage) => {
    const updated = orders.map(o => {
      if (o.orderId === orderId) {
        const stageNames = ['Application Received', 'Document Verification', 'DSC & Name Approval', 'In MCA Filing', 'Approved & Issued'];
        return {
          ...o,
          currentStage: Number(newStage),
          status: stageNames[Number(newStage)] || o.status
        };
      }
      return o;
    });
    setOrders(updated);
    setStoredData('taxspoint_orders', updated);
  };

  const handleUpdateLeadStatus = (leadId, newStatus) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
    setLeads(updated);
    setStoredData('taxspoint_leads', updated);
  };

  const totalRevenue = orders.reduce((acc, o) => acc + (o.amount || 0), 0);

  return (
    <section id="admin-hub" className="py-16 lg:py-24 bg-slate-900 text-slate-100 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-brand-sky font-bold text-xs uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>TaxsPoint Operations & Control Center</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Executive CRM & Filings Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Manage incoming leads, assign Chartered Accountants, and advance government filings.
            </p>
          </div>

          <button
            onClick={loadData}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh Live Data</span>
          </button>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Total Active Filings</span>
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-white">{orders.length} Applications</div>
            <div className="text-[11px] text-emerald-400 mt-1">↑ 100% on-track</div>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Leads Captured</span>
              <Users className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white">{leads.length} Inquiries</div>
            <div className="text-[11px] text-blue-400 mt-1">Average callback: 12 mins</div>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Revenue Processed</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-white">₹{totalRevenue.toLocaleString()}</div>
            <div className="text-[11px] text-emerald-400 mt-1">100% zero-chargeback</div>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>AI Agents Engagement</span>
              <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-white">5 Active Bots</div>
            <div className="text-[11px] text-purple-300 mt-1">24/7 Automated Triage</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 border-b border-slate-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'orders' 
                ? 'bg-brand-blue text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Client Filings & Orders ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'leads' 
                ? 'bg-brand-blue text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lead Inquiries ({leads.length})
          </button>
        </div>

        {/* Orders Table */}
        {activeTab === 'orders' && (
          <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-700">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Client Name & Phone</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Assigned Professional</th>
                    <th className="p-4">Current Stage</th>
                    <th className="p-4">Update Stage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {orders.map(order => (
                    <tr key={order.orderId} className="hover:bg-slate-750 transition">
                      <td className="p-4 font-bold text-brand-sky">{order.orderId}</td>
                      <td className="p-4">
                        <div className="font-semibold text-white">{order.customerName}</div>
                        <div className="text-[11px] text-slate-400">{order.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-white font-medium">{order.serviceTitle}</div>
                        <div className="text-[11px] text-slate-400">₹{order.amount.toLocaleString()}</div>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-amber-400">{order.assignedCA}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          order.currentStage === 4 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={order.currentStage}
                          onChange={(e) => handleUpdateStage(order.orderId, e.target.value)}
                          className="bg-slate-900 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs outline-none focus:border-brand-blue"
                        >
                          <option value="0">0: Application Received</option>
                          <option value="1">1: Document Verification</option>
                          <option value="2">2: DSC & Name Approved</option>
                          <option value="3">3: In MCA Filing</option>
                          <option value="4">4: Approved & Issued</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Leads Table */}
        {activeTab === 'leads' && (
          <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-700">
                  <tr>
                    <th className="p-4">Lead ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone / Email</th>
                    <th className="p-4">Service Required</th>
                    <th className="p-4">City</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {leads.map(lead => (
                    <tr key={lead.id} className="hover:bg-slate-750 transition">
                      <td className="p-4 font-bold text-slate-400">{lead.id}</td>
                      <td className="p-4 font-semibold text-white">{lead.name}</td>
                      <td className="p-4">
                        <div className="text-brand-sky font-semibold">{lead.phone}</div>
                        <div className="text-[11px] text-slate-400">{lead.email || 'N/A'}</div>
                      </td>
                      <td className="p-4 text-white">{lead.service}</td>
                      <td className="p-4 text-slate-400">{lead.city || 'India'}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleUpdateLeadStatus(lead.id, 'Converted to Client')}
                          className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition"
                        >
                          Mark Converted
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
