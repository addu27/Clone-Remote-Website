import React from "react";

const TrustSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          16,000+ small and medium businesses trust Remote
        </p>

        <div>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-500 font-medium text-sm sm:text-base lg:text-lg">
            <li>bluebird</li>
            <li>Galaxy</li>
            <li>berry</li>
          </ul>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-500 font-medium text-sm sm:text-base lg:text-lg">
            <li>Chameleon</li>
            <li>SHIP4450</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
