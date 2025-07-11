import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="bg-gray-100 p-10 rounded-xl max-w-7xl  mx-auto text-center">
        <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
          AUTOMATE WITH REMOTE
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Start for free today.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">Try 30 days</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">It's free</span>
          </div>
        </div>
        
        <Link to="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-block">
          Get a demo
        </Link>
      </div>
    </section>
  );
};

export default CTASection;