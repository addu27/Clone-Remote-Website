import React from "react";
import { Link } from "react-router-dom";
import { Target, Clock, Settings } from "lucide-react";
import { motion } from "motion/react";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-10 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-40 h-40 sm:w-16 sm:h-16 mb-6 sm:mb-8">
            {/* <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-lg"></div> */}

            <div className="flex gap-4 justify-center">
              <motion.img
                src="./icon-triangle.png"
                alt="triangle-icon"
                className="h-6 w-6"
                initial={{ x: -60, y: -60 }}
                animate={{ rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="./icon-circle.png"
                alt="circle-icon"
                className="h-6 w-6"
                initial={{ x: 60, y: -60 }}
                animate={{ rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="./icon-square.png"
                alt="square-icon"
                className="h-6 w-6"
                initial={{ x: -60, y: 60 }}
                animate={{ rotate: 360 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <h2
            className="text-[36px] text-center text-gray-900 leading-[1.1em] tracking-[-0.01em] whitespace-pre-line break-words mb-6 sm:text-3xl lg:text-4xl font-medium font-onest relative"
            style={{
              color:
                "var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 34, 35))",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              fontStyle: "normal",
            }}
          >
            Everything you
            <br />
            need, all in{" "}
            <span className="relative inline-block">
              {/* Background mask effect */}
              <span
                className="absolute block rounded-lg"
                style={{
                  left: "52%",
                  top: "45%",
                  transform: "translate(-50%, -36%)",
                  zIndex: 1,
                  width: "103%",
                  height: "25.2px",
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

              {/* Visible text */}
              <span className="relative z-10 text-gray-900">one place</span>
            </span>
          </h2>

          <Link
            to="/contact"
            className="text-white rounded-[12px] transition-colors inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor:
                "var(--token-54fbe6ca-60b1-4431-a556-3bdeb985788c, rgb(31, 35, 35))",
              height: "44px",
              padding: "1px 16px 0 14px",
              borderStyle: "solid",
              borderWidth: "0px",
              opacity: 1,
              willChange: "var(--framer-will-change-override, transform)",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <img src="./icon-tv.png" alt="" className="h-3 w-3 color-whit" />
            <span className="text-sm font-medium">Get a demo</span>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 ">
          {/* Goal management */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 w-full max-w-[600px] h-auto sm:h-[450px] rounded-2xl">
            <div className="w-full">
              <img src="./home-1.png" alt="img" />
            </div>
            <div className="mb-6 rounded-2xl">
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
              <button className="text-gray-900 border p-1.5 rounded-xl font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>
          </div>

          {/* Real-time updates */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 ">
            <div className="w-full">
              <img src="./home-2.png" alt="img" />
            </div>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Real-time updates
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Drive focus and progress with real-time status updates.
              </p>
              <button className="text-gray-900 border p-1.5 rounded-xl font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Mock interface */}
          </div>

          {/* High-level customization */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="w-full">
              <img src="./home-3.png" alt="img" />
            </div>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                High-level customization
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Choose from pre-built pipeline templates, or create custom
                interview steps.
              </p>
              <button className="text-gray-900 border p-1.5 rounded-xl font-medium hover:underline text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Mock interface */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
