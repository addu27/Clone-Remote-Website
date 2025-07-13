import React from "react";
import { Link } from "react-router-dom";

const DecisionsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Make{" "}
            <span className="relative inline-block">
              <span
                className="absolute block rounded-lg"
                style={{
                  left: "52%",
                  top: "45%",
                  transform: "translate(-50%, -36%)",
                  zIndex: 1,
                  width: "103%",
                  height: "33.6px",
                  background:
                    "var(--token-50f7c55d-562d-4beb-9e4e-86ed7b4f818d, rgb(224, 255, 130))",
                  WebkitMaskImage: 'url("https://iili.io/F74vt9a.png")',
                  maskImage: 'url("https://iili.io/F74vt9a.png")',
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  pointerEvents: "none",
                }}
              ></span>
              <span className="relative z-10 text-gray-900">actionable</span>
            </span>
            <br />
            decisions simpler
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Focus on what matters - let us handle the <br /> busywork while you build
            better relationships.
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative max-w-6xl w-full">
            {" "}
            {/* Increased width */}
            {/* Main candidate card */}
            <div className="bg-gradient-to-br rounded-3xl p-6 sm:p-8 relative overflow-hidden min-h-[600px]">
              {" "}
              {/* Optional min height */}
              <img
                src="./home-women.avif"
                alt="Candidate"
                className="w-72 h-96 sm:w-80 sm:h-[28rem] object-cover rounded-2xl mx-auto" // Increased image size
              />
              {/* Floating elements */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-limeSoft text-lime-900 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium">
                😊 New candidate found
              </div>
              {/* First card */}
              <div className="absolute top-12 sm:top-20 left-4 sm:left-8 rounded-lg p-3 sm:p-4 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium">CV recognition</div>
                      <div className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                        AI
                      </div>
                    </div>
                    <hr />
                    <div className="text-xs text-gray-500">
                      Analyse experience in Area
                    </div>
                  </div>
                </div>
              </div>
              {/* Second card */}
              <div className="absolute top-[11rem] sm:top-[10rem] left-4 sm:left-8 rounded-lg p-3 sm:p-4 max-w-md opacity-40">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium max-w-[12rem] opacity-100">
                        Yes, Chris has 3 years of experience in SaaS for
                        Healthcare
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Third card */}
              <div className="absolute top-[19rem] sm:top-[17rem] left-4 sm:left-8 rounded-lg p-3 sm:p-4 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium">Compatibility</div>
                      <div className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                        AI
                      </div>
                    </div>
                    <hr />
                    <div className="text-xs text-gray-500">
                      Analyse experience in Area
                    </div>
                  </div>
                </div>
              </div>
              {/* Fourth card */}
              <div className="absolute top-[27rem] sm:top-[23rem] left-4 sm:left-8 rounded-lg p-3 sm:p-4 max-w-md opacity-40">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium max-w-[12rem] opacity-100">
                        2 years working on healthcare and improving{" "}
                        <b>Leadership skills</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fifth card */}
              <div className="absolute top-[35rem] sm:top-[29rem] left-4 sm:left-8 rounded-lg p-3 sm:p-4 max-w-md opacity-40">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-sm font-medium max-w-[12rem] opacity-100">
                        Masters in <b>Computer Science</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side candidate list */}
              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 space-y-3 hidden sm:block">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3 opacity-30">
                  <img
                    src="./home-women-2.avif"
                    alt="Danielle"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">
                      Danielle Rodrigues
                    </div>
                    <div className="text-xs text-gray-500">
                      Head of HR @Crown
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3 opacity-50">
                  <img
                    src="./feature-men.avif"
                    alt="Dennis"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">Dennis Howell</div>
                    <div className="text-xs text-gray-500">
                      Staff Software Engineer
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3 opacity-70">
                  <img
                    src="./home-women.avif"
                    alt="Camilla"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">Camilla Queiroz</div>
                    <div className="text-xs text-gray-500">
                      Head of Sales @Crown
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-block"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DecisionsSection;
