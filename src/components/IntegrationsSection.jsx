import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Less paperwork,<br />
          more <span className="bg-limeSoft px-2 py-1 rounded-lg">people work</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We integrate seamlessly with the tools you already use. Work smarter with Remote.
        </p>
        
        <button className="inline-flex items-center space-x-2 text-gray-900 border p-3 rounded-xl font-medium hover:underline mb-12 sm:mb-16">
          <span>See all integrations</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default IntegrationsSection;