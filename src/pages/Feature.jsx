import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Bell, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedSidebar from "../components/FixedSidebar";

const Feature = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Handshake Illustration */}
          <div>
            <div>
              <div className="w-40 h-40 sm:w-60 sm:h-60 mx-auto rounded-full flex items-center justify-center">
                <motion.img
                  src="./feature-main.png"
                  alt="feature-main-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-6 leading-tight">
            <span className="relative inline-block">
              <span
                className="absolute inset-0 bg-limeSoft -skew-y-2 rounded-md"
                style={{ zIndex: 0 }}
              ></span>
              <span className="relative px-2 py-1" style={{ zIndex: 1 }}>
                More than
              </span>
            </span>
            &nbsp;a
            <br />
            hiring process
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Focus on what really matters — the talent.
          </motion.p>
        </div>
      </section>

      {/* Signatures Section */}
      <section className="bg-white py-6 sm:py-10 lg:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-6">
            SIGNATURES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-12 sm:mb-16 leading-tight">
            Simplify your workflow,
            <br />
            one signature at a time
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Real-time updates */}
            <div className="text-center">
              <div className="bg-limeSoft rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Notifications</span>
                    <Bell className="w-5 h-5 bg-gray-900 text-white rounded-full p-1" />
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-gray-900 rounded mt-1"></div>
                      <div>
                        <div className="text-xs font-medium">
                          Remote • 2 min
                        </div>
                        <div className="text-xs text-gray-600">
                          Last day to sign ProductDesignerSep2024.pdf
                        </div>
                        <div className="flex space-x-2 mt-2">
                          <button className="text-xs text-gray-600">
                            Dismiss
                          </button>
                          <button className="text-xs bg-gray-900 text-white px-2 py-1 rounded">
                            Sign now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-gray-900 rounded mt-1"></div>
                      <div>
                        <div className="text-xs font-medium">
                          Remote • 24 min
                        </div>
                        <div className="text-xs text-gray-600">
                          Alex Marshall joined.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time updates
              </h3>
              <p className="text-gray-600 text-sm">
                Drive focus and progress with real-time status updates.
              </p>
            </div>

            {/* Signature customization */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">
                      Pick a signature
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-xs">First Name</span>
                      <span className="text-xs text-gray-500">Default</span>
                    </div>

                    <div className="text-center py-4">
                      <div className="text-2xl font-script text-gray-900">
                        Jonathan
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-xs text-gray-600">Simplified</span>
                      <div className="text-lg font-script text-gray-900 mt-1">
                        J
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Signature customization
              </h3>
              <p className="text-gray-600 text-sm">
                Create and save multiple signature styles.
              </p>
            </div>

            {/* Offline mode */}
            <div className="text-center">
              <div className="bg-limeSoft rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">R</span>
                    </div>
                    <span className="text-sm font-medium">Remote</span>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span className="text-xs">Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span className="text-xs">Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span className="text-xs">Contracts</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white text-xs p-2 rounded mt-3">
                    You're back online. Your offline changes were synced.
                    <div className="text-lime-400 mt-1">Dismiss</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Offline mode
              </h3>
              <p className="text-gray-600 text-sm">
                Sign documents even when you're not connected to the internet.
              </p>
            </div>

            {/* Batch signing */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <div className="bg-white rounded-lg p-3 flex-1 border-2 border-gray-300">
                      <div className="text-lg font-script text-gray-900">
                        Jm
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex-1 border-2 border-gray-300">
                      <div className="text-lg font-script text-gray-900">
                        Jm
                      </div>
                    </div>
                  </div>

                  <button className="bg-gray-900 text-white text-xs px-4 py-2 rounded-lg w-full">
                    Sign selected
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Batch signing
              </h3>
              <p className="text-gray-600 text-sm">
                Save time by signing all your documents at once.
              </p>
            </div>
          </div>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <Link to="/contact" className="text-white">
              Get a demo
            </Link>
          </button>
        </div>
      </section>

      {/* Report Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-6">
              REPORT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-12 leading-tight">
              Outstanding teams
              <br />
              deserve superior tools
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
            {/* Left Features */}
            <div className="space-y-8 justify-self-end self-start">
              <div className="flex flex-col justify-evenly items-start h-30 w-64">
                <img
                  src="./icon-coin.png"
                  alt="icon"
                  className="h-6 w-6 mt-1"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Payroll efficiency
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Automate and manage payroll processing with real-time updates.
                </p>
              </div>

              <div className="flex flex-col justify-between items-start h-35 w-64">
                <img
                  src="./icon-doc.png"
                  alt="icon"
                  className="h-6 w-6 mt-1"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Contract oversight
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Track and oversee contract signings and revisions with ease.
                </p>
              </div>
            </div>

            {/* Center Activity Feed */}
            <div className="bg-[#e0ff82] rounded-3xl p-6 sm:p-8">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        R
                      </span>
                    </div>
                    <span className="font-medium">Remote</span>
                  </div>
                  <button className="bg-gray-900 text-white px-3 py-1 rounded text-sm">
                    Generate report
                  </button>
                </div>

                {/* Feed */}
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-600">$</span>
                    <span>
                      <span className="font-medium text-blue-600">
                        Alex Marshall
                      </span>{" "}
                      processed a payroll
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-600">+</span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium text-blue-600">
                        Alex Marshall
                      </span>
                      <span>added</span>
                      <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                      <span className="font-medium">Henry B.</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-600">+</span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium text-blue-600">
                        Alex Marshall
                      </span>
                      <span>revised perks for</span>
                      <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                      <span className="font-medium">Sophia R.</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-600">🎉</span>
                    <span className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                      <span className="font-medium">Sophia R.</span>
                      <span>signed a contract!</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <span>
                      <span className="font-medium text-blue-600">
                        Alex Marshall
                      </span>{" "}
                      accessed Remote
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-red-600">-</span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium">Nadia Thompson</span>
                      <span>removed</span>
                      <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                      <span className="font-medium">Maddie D.</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600">||</span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium">Nadia Thompson</span>
                      <span>paused</span>
                      <div className="w-4 h-4 bg-red-100 rounded-full"></div>
                      <span className="font-medium">Maddie D.</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">N</span>
                    </div>
                    <span>
                      <span className="font-medium">Nadia Thompson</span>{" "}
                      accessed Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8 justify-self-start self-end">
              <div className="flex flex-col justify-between items-start h-35 w-64">
                <img
                  src="./icon-profile.png"
                  alt="icon"
                  className="h-6 w-6 mt-1"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Payroll efficiency
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Automate and manage payroll processing with real-time updates.
                </p>
              </div>

              <div className="flex flex-col justify-between items-start h-35 w-64">
                <img
                  src="./icon-graph.png"
                  alt="icon"
                  className="h-6 w-6 mt-1"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Data-driven decisions
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Monitor team actions to optimize decisions and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expense Management Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-6">
              EXPENSE MANAGEMENT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              Make <span className="text-lime-500">actionable</span>
              <br />
              decisions simpler.
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Focus on what matters - let us handle the busywork while you build
              better relationships.
            </p>

            <button className="inline-flex items-center space-x-2 text-gray-900 font-medium hover:underline">
              <span>Explore Remote API</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[900px]">
            {/* Left side - Features */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="h-64 flex flex-col justify-between border rounded-lg p-4">
                <div>
                  <img
                    src="./icon-coin.png"
                    alt="coin-img"
                    className="h-10 w-10 border rounded-full p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Payrolls that submit themselves
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Modern payroll management that reduces friction.
                  </p>
                </div>
              </div>

              <div className="h-64 flex flex-col justify-between border rounded-lg p-4">
                <div>
                  <img
                    src="./icon-add-user.png"
                    alt="coin-img"
                    className="h-10 w-10 border rounded-full p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hiring should close in days, not weeks
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Seamless integration with the tools you already use.
                  </p>
                </div>
              </div>

              <div className="h-64 flex flex-col justify-between border rounded-lg p-4">
                <div>
                  <img
                    src="./icon-earth.png"
                    alt="coin-img"
                    className="h-10 w-10 border rounded-full p-2"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Operate globally
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All your offices are connected seamlessly. We work in 195
                    countries and in over 40 currencies.
                  </p>
                </div>
              </div>

              <div className="h-64 flex flex-col justify-between border rounded-lg p-4">
                <div>
                  <img
                    src="./icon-route.png"
                    alt="coin-img"
                    className="h-10 w-10 border rounded-full p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    More automation, more flexibility
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Customize Remote to fit your needs, either as a big company
                    or startup.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="./feature-men.avif"
                  alt="Professional man in office"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-6">
            TRY REMOTE TODAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Shaping the future of hiring
          </h2>

          <button className="bg-limeSoft text-lime-900 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2">
            <Link to="/contact" className="text-lime-900 flex items-center">
              <img
                src="./icon-tv.png"
                alt="icon-tv"
                className="h-5 w-5"
              />
              Get demo
            </Link>
          </button>
        </div>
      </section>

      <Footer />
      <FixedSidebar />
    </div>
  );
};

export default Feature;
