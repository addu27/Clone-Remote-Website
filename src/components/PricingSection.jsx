import React from "react";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A plan for{" "}
            <span className="bg-limeSoft px-2 py-1 rounded-lg">anyone</span>.
            <br />
            Anytime.
          </h2>

          <p className="text-lg sm:text-xl text-gray-600">
            We help your business grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Startups */}
          <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 min-h-[23rem] hover:bg-gray-700 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white">
                Startups
              </h3>
              <div className="group">
                <ArrowRight className="w-8 h-8 border-2 rounded-full text-gray-400 transition-all group-hover:bg-limeSoft group-hover:text-black group-hover:border-0" />
              </div>
            </div>
            <p className="group-hover:text-white">
              Learn about the romote platform services.
            </p>
          </div>

          {/* Mid-size (Featured) */}
          <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 min-h-[23rem] hover:bg-gray-700 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white">
                Mid-size
              </h3>
              <div className="group">
                <ArrowRight className="w-8 h-8 border-2 rounded-full text-gray-400 transition-all group-hover:bg-limeSoft group-hover:text-black group-hover:border-0" />
              </div>
            </div>
            <p className="group-hover:text-white">
              See our standard pricing and get a customized quote.
            </p>
          </div>

          {/* Enterprise */}
          <div className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 min-h-[23rem] hover:bg-gray-700 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white">
                Enterprise
              </h3>
              <div className="group">
                <ArrowRight className="w-8 h-8 border-2 rounded-full text-gray-400 transition-all group-hover:bg-limeSoft group-hover:text-black group-hover:border-0" />
              </div>
            </div>
            <p className="group-hover:text-white">
              See our standard pricing and get a customized quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
