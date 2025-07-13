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
            Focus on what matters - let us handle the <br /> busywork while you
            build better relationships.
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
                className="w-[20rem] h-120 sm:w-[28rem] sm:h-[35rem] object-cover rounded-2xl mx-auto"
              />
              {/* Floating elements */}
              {/* Notification Badge */}
              <div className="absolute top-6 sm:top-12 left-12 sm:left-32 bg-limeSoft text-lime-900 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium">
                😊 New candidate found
              </div>
              {/* First card */}
              <div className="absolute top-12 sm:top-20 left-12 sm:left-32 rounded-lg p-1 sm:p-1 w-[16rem]">
                <div className="w-full bg-white rounded-lg p-1 shadow-lg flex flex-col space-y-2">
                  <div className="flex flex-row justify-between">
                    <div className="flex justify-start items-center space-x-2">
                      <img
                        src="./icon-scanner.png"
                        alt=""
                        className="h-4 w-4 bg-limeSoft p-0.5"
                      />
                      <div className="text-sm font-semibold">
                        CV recognition
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                      AI
                    </div>
                  </div>

                  <hr className="w-full" />
                  <div className="text-xs text-gray-500 p-1">
                    Analyse experience in Area
                  </div>
                </div>
              </div>
              {/* Second card */}
              <div className="absolute top-[11rem] sm:top-[10rem] left-12 sm:left-36 rounded-lg p-3 sm:p-4 w-[16rem] opacity-40">
                <div className="w-full bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <img
                    src="./icon-star.png"
                    alt=""
                    className="h-4 w-4 self-start"
                  />
                  <div className="text-sm text-gray-900 font-medium opacity-100">
                    Yes, Chris has 3 years of experience in{" "}
                    <span className="font-bold">SaaS for Healthcare</span>
                  </div>
                </div>
              </div>
              {/* Third card */}
              <div className="absolute top-[19rem] sm:top-[17rem] left-12 sm:left-32 rounded-lg p-1 sm:p-1 w-[16rem]">
                <div className="w-full bg-white rounded-lg p-1 shadow-lg flex flex-col space-y-2">
                  <div className="flex flex-row justify-between">
                    <div className="flex justify-start items-center space-x-2">
                      <img
                        src="./icon-link.png"
                        alt=""
                        className="h-4 w-4 bg-limeSoft p-0.5"
                      />
                      <div className="text-sm font-semibold">Compatibility</div>
                    </div>
                    <div className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded">
                      AI
                    </div>
                  </div>

                  <hr className="w-full" />
                  <div className="text-xs text-gray-500 p-1">
                    Analyse experience in Area
                  </div>
                </div>
              </div>
              {/* Fourth card */}
              <div className="absolute top-[27rem] sm:top-[23rem] left-12 sm:left-32 rounded-lg p-3 sm:p-4 max-w-md opacity-40">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src="./icon-star.png"
                        alt=""
                        className="h-4 w-4 self-start"
                      />
                      <div className="text-sm font-medium max-w-[12rem] opacity-100">
                        2 years working on healthcare and improving{" "}
                        <b>Leadership skills</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fifth card */}
              <div className="absolute top-[35rem] sm:top-[29rem] left-12 sm:left-32 rounded-lg p-3 sm:p-4 max-w-md opacity-40">
                <div className="bg-white rounded-lg p-3 shadow-lg flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src="./icon-star.png"
                        alt=""
                        className="h-4 w-4 self-start"
                      />
                      <div className="text-sm font-medium max-w-[12rem] opacity-100">
                        Masters in <b>Computer Science</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side candidate list */}
              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-[200px] space-y-3 hidden sm:block">
                <div className="absolute top-10 right-[220px] w-full bg-white rounded-lg p-2 shadow-lg flex items-center space-x-3 opacity-30">
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

                <div className="absolute top-[90px] right-[220px] w-full bg-white rounded-lg p-2 shadow-lg flex items-center space-x-3 opacity-50">
                  <img
                    src="./feature-men.avif"
                    alt="Dennis"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">Dennis Howell</div>
                    <div className="text-xs text-gray-500">
                      Staff Engineer @Crown
                    </div>
                  </div>
                </div>

                <div className="absolute top-[150px] right-[220px] w-full bg-white rounded-lg p-2 shadow-lg flex items-center space-x-3 opacity-70">
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
