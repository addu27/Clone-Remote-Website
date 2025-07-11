import React from "react";
import { RefreshCw, Users, FileText, BarChart3, Settings } from "lucide-react";

const ActivityFeedSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Activity feed mockup */}
          <div className="bg-limeSoft p-6 sm:p-8 rounded-3xl order-2 lg:order-1">
            <div className="flex flex-col gap-5 sm:p-6 ">
              {/* Header */}
              <div className="flex bg-white p-4  sm:p-6 rounded-2xl shadow items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">R</span>
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    Remote
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-gray-600" />
                  <button className="bg-gray-900 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                    Generate report
                  </button>
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-900 text-xs font-bold">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-900">
                        Alex Marshall
                      </span>{" "}
                      processed a payroll
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-900 text-xs font-bold">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-900">
                        Alex Marshall
                      </span>{" "}
                      added{" "}
                      <div className="inline-flex items-center space-x-1">
                        <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                        <span className="font-medium">Henry B.</span>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-900 text-xs font-bold">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-900">
                        Alex Marshall
                      </span>{" "}
                      revised perks for{" "}
                      <div className="inline-flex items-center space-x-1">
                        <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                        <span className="font-medium">Sophia R.</span>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-900 text-xs font-bold">S</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <div className="inline-flex items-center space-x-1">
                        <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                        <span className="font-medium">Sophia R.</span>
                      </div>{" "}
                      signed a contract!
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-900">
                        Alex Marshall
                      </span>{" "}
                      accessed Remote
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xs font-bold">N</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium">Nadia Thompson</span>{" "}
                      removed{" "}
                      <div className="inline-flex items-center space-x-1">
                        <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                        <span className="font-medium">Maddie D.</span>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-xs font-bold">N</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium">Nadia Thompson</span> paused{" "}
                      <div className="inline-flex items-center space-x-1">
                        <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                        <span className="font-medium">Maddie D.</span>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm">
                      <span className="font-medium">Nadia Thompson</span>{" "}
                      accessed Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-between min-h-[550px] px-4 sm:px-6 lg:px-8">
            {/* Top Section */}
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                REAL-TIME UPDATES
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering your
                <br />
                talent pipeline
              </h2>
            </div>

            {/* Bottom Section */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Payroll efficiency
                </h3>
                <p className="text-gray-600 text-sm">
                  Automate and manage payroll processing with real-time updates.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Talent management
                </h3>
                <p className="text-gray-600 text-sm">
                  Add, remove, or adjust team members' roles and perks.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Contract oversight
                </h3>
                <p className="text-gray-600 text-sm">
                  Track and oversee contract signings and revisions with ease.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data-driven decisions
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitor team actions to optimize decisions and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityFeedSection;
