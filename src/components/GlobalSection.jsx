import React from "react";

const GlobalSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Remote is the global &nbsp;&nbsp;&nbsp; <br />
            payroll platform leader
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* You're in control */}
          <div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 mb-6 overflow-hidden h-[26rem] sm:h-[28rem]">
              <img
                src="./home-men.avif"
                alt="Professional man"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              {/* Signature box */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-6 py-2 shadow-lg border w-[100%] sm:w-[80%] ">
                <div className="text-lg font-semibold text-gray-900 italic text-center">
                  Jonathan
                </div>
                <div className="border-t mt-1"></div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              You're in control
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Automate even the most complex hiring processes and signatures.
            </p>
          </div>

          {/* Data that scales everyday */}
          <div>
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 mb-6 overflow-hidden h-[26rem] sm:h-[28rem]">
              <img
                src="./home-men-2.avif"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

              {/* Card 1 - Emma */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 sm:bottom-20 w-[100%] sm:w-[80%] bg-white px-4 py-3 rounded-xl shadow-md flex items-center justify-between space-x-3">
                <span className="text-sm sm:text-base font-semibold text-gray-900">
                  Emma
                </span>
                <button className="text-white bg-gray-900 text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                  Onboard
                </button>
              </div>

              {/* Card 2 - Jonathan */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-[100%] sm:w-[80%] bg-white px-4 py-3 rounded-xl shadow-md flex items-center justify-between space-x-3">
                <span className="text-sm sm:text-base font-semibold text-gray-900">
                  Jonathan
                </span>
                <span className="text-gray-500 border text-xs sm:text-sm font-medium px-3 py-1 rounded-lg">
                  Starts tomorrow
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Data that scales everyday
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get real-time, detailed data that scale everyday. Visualize,
              select, and hire faster than ever.
            </p>
          </div>

          {/* Tailored for 150+ countries */}
          <div className="text-center px-4">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 mb-6 overflow-hidden h-[26rem] sm:h-[28rem]">
              <img
                src="./home-men-3.avif"
                alt="Alex"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-6 py-2 shadow-lg border w-[80%] sm:w-[60%]">
                <div className="text-lg font-semibold text-gray-900 italic text-center">
                  Alex
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Tailored for 150+ countries
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We tailor every aspect of our platform to meet local regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
