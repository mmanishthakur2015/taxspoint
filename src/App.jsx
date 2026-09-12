import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceModal } from './components/ServiceModal';
import { AIAgentsHub } from './components/AIAgentsHub';
import { Calculators } from './components/Calculators';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClientPortal } from './components/ClientPortal';
import { AdminPortal } from './components/AdminPortal';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { FloatingAIAssistant } from './components/FloatingAIAssistant';
import { servicesData } from './data/servicesData';

export function App() {
  const [activeView, setActiveView] = useState('home'); // 'home', 'services', 'calculators', 'ai-agents', 'client-portal', 'admin-portal'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);
  const [leadModalConfig, setLeadModalConfig] = useState({ isOpen: false, topic: 'Free CA Consultation' });

  const handleNavigate = (view, category = 'all') => {
    setActiveView(view);
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service) => {
    setActiveModalService(service);
  };

  const handleOpenLeadModal = (topic = 'Free CA Consultation') => {
    setLeadModalConfig({ isOpen: true, topic });
  };

  const handleCloseLeadModal = () => {
    setLeadModalConfig({ isOpen: false, topic: 'Free CA Consultation' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      {/* Top Header */}
      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        onOpenLeadModal={handleOpenLeadModal}
        services={servicesData}
      />

      {/* Dynamic View Rendering */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero 
              services={servicesData}
              onSelectService={handleSelectService}
              onOpenLeadModal={handleOpenLeadModal}
              onNavigate={handleNavigate}
            />
            <ServicesGrid 
              services={servicesData}
              onSelectService={handleSelectService}
              defaultCategory={selectedCategory}
            />
            <AIAgentsHub 
              onOpenLeadModal={handleOpenLeadModal}
            />
            <Calculators 
              onOpenLeadModal={handleOpenLeadModal}
            />
            <HowItWorks 
              onOpenLeadModal={handleOpenLeadModal}
            />
            <WhyChooseUs 
              onOpenLeadModal={handleOpenLeadModal}
            />
            <ClientPortal 
              onOpenLeadModal={handleOpenLeadModal}
            />
            <Testimonials />
            <FAQSection 
              onOpenLeadModal={handleOpenLeadModal}
            />
          </>
        )}

        {activeView === 'services' && (
          <div className="pt-6">
            <ServicesGrid 
              services={servicesData}
              onSelectService={handleSelectService}
              defaultCategory={selectedCategory}
            />
            <HowItWorks onOpenLeadModal={handleOpenLeadModal} />
            <FAQSection onOpenLeadModal={handleOpenLeadModal} />
          </div>
        )}

        {activeView === 'calculators' && (
          <div className="pt-6">
            <Calculators onOpenLeadModal={handleOpenLeadModal} />
            <ServicesGrid 
              services={servicesData}
              onSelectService={handleSelectService}
            />
          </div>
        )}

        {activeView === 'ai-agents' && (
          <div className="pt-6">
            <AIAgentsHub onOpenLeadModal={handleOpenLeadModal} />
            <WhyChooseUs onOpenLeadModal={handleOpenLeadModal} />
          </div>
        )}

        {activeView === 'client-portal' && (
          <div className="pt-6">
            <ClientPortal onOpenLeadModal={handleOpenLeadModal} />
            <AIAgentsHub onOpenLeadModal={handleOpenLeadModal} />
          </div>
        )}

        {activeView === 'admin-portal' && (
          <div className="pt-6">
            <AdminPortal />
          </div>
        )}
      </main>

      {/* Service Detail & Multi-Step Application Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onOrderCreated={(newOrder) => {
            // Can transition to client portal to track
          }}
        />
      )}

      {/* Quick Lead Consultation Modal */}
      <LeadModal
        isOpen={leadModalConfig.isOpen}
        defaultTopic={leadModalConfig.topic}
        onClose={handleCloseLeadModal}
      />

      {/* Floating 24/7 AI Assistant */}
      <FloatingAIAssistant 
        onOpenLeadModal={handleOpenLeadModal}
        onNavigateToHub={() => handleNavigate('ai-agents')}
      />

      {/* Global Comprehensive Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
        services={servicesData}
        onOpenLeadModal={handleOpenLeadModal}
      />
    </div>
  );
}
export default App;
