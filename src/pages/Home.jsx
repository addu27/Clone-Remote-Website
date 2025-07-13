import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import FeaturesSection from '../components/FeaturesSection';
import ActivityFeedSection from '../components/ActivityFeedSection';
import GrowthSection from '../components/GrowthSection';
import IntegrationsSection from '../components/IntegrationsSection';
import DecisionsSection from '../components/DecisionsSection';
import PricingSection from '../components/PricingSection';
import GlobalSection from '../components/GlobalSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FixedSidebar from '../components/FixedSidebar';


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <ActivityFeedSection />
        <GrowthSection />
        <IntegrationsSection />
        <DecisionsSection />
        <PricingSection />
        <GlobalSection />
        <CTASection />
      </div>
      <Footer />
      <FixedSidebar />
    </div>
  );
}

export default Home;