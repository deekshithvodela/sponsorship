import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingTiers } from './components/PricingTiers';
import { CostEstimator } from './components/CostEstimator';
import { Capabilities } from './components/Capabilities';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#d4cdbc] font-body flex flex-col selection:bg-[#bd2826] selection:text-[#faf6ec]">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow (All Contact Exclusively via WhatsApp Messaging - No Forms) */}
      <main id="main-content" className="flex-1">
        <Hero />
        <PricingTiers />
        <CostEstimator />
        <Capabilities />
        <ComparisonMatrix />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
