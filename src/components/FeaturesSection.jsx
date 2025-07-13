import React from "react";
import { Link } from "react-router-dom";
import { Target, Clock, Settings } from "lucide-react";
import { motion } from "motion/react";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-40 h-40 sm:w-16 sm:h-16 mb-6 sm:mb-8">
            {/* <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-lg"></div> */}

            <div className="flex gap-4 justify-center">
              <motion.img
                src="./icon-triangle.png"
                alt="triangle-icon"
                className="h-8 w-8"
                initial={{ x: -40, y: -40 }}
                animate={{rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="./icon-circle.png"
                alt="circle-icon"
                className="h-8 w-8"
                initial={{ x: 40, y: -40 }}
                animate={{rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="./icon-square.png"
                alt="square-icon"
                className="h-8 w-8"
                initial={{ x: -40, y: 40 }}
                animate={{rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
            Everything you
            <br />
            need, all in{" "}
            <span className="bg-limeSoft px-2 py-1 rounded-lg">one place</span>
          </h2>

          <Link
            to="/contact"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.544-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
              />
            </svg>
            <span>Get a demo</span>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Goal management */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <div className="mb-6">
              <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-lime-600" />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Goal management
                </h3>
                <span className="bg-limeSoft text-lime-900 text-xs font-semibold px-2 py-1 rounded-full">
                  New!
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                See all the steps you need to draft goals, gather input and
                drive innovation.
              </p>
              <button className="text-gray-900 font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Mock interface */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="bg-limeSoft text-lime-900 text-xs font-semibold px-2 py-1 rounded">
                  Goals
                </span>
                <span className="text-sm text-gray-600">
                  Retention Campaign
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">UX</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    User Experience team
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Product Analytics project
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">DS</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    Data Science team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time updates */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Real-time updates
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Drive focus and progress with real-time status updates.
              </p>
              <button className="text-gray-900 font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Mock interface */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-900 mb-2">
                Target
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gray-900 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center">
                      <span className="text-lime-900 text-xs font-bold">C</span>
                    </div>
                    <span className="text-sm text-gray-900">
                      Camille Laurent
                    </span>
                  </div>
                  <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    Qualified
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-limeSoft rounded-full flex items-center justify-center">
                      <span className="text-lime-900 text-xs font-bold">D</span>
                    </div>
                    <span className="text-sm text-gray-900">
                      Danielle Mooray
                    </span>
                  </div>
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">
                    Invited
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* High-level customization */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                High-level customization
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Choose from pre-built pipeline templates, or create custom
                interview steps.
              </p>
              <button className="text-gray-900 font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Mock interface */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                  <span>Recruiter screen</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30 min</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                  <span>Technical screen</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30 min</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                  <span>Onsite</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>1:30 h</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wide">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                  <span>Offer</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>offer_letter_2847.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
