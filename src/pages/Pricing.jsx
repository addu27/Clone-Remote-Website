import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Check,
  ChevronRight,
  FileText,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedSidebar from "../components/FixedSidebar";

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What's included in each plan?",
    "How does pricing work?",
    "Do you offer a free trial?",
    "Can I switch plans anytime?",
    "What kind of support do you provide?",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-5xl text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Transparent Pricing.
            <br />
            No added fees.
          </motion.h1>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Remote Free */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Remote
                </h3>
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                  Free
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    $0
                  </span>
                  <span className="text-gray-500 ml-2">per user/mo</span>
                </div>
              </div>

              <button className="w-full bg-limeSoft text-lime-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-500 transition-colors mb-8">
                <Link to="/pricing" className="text-lime-900">
                  Get started for free
                </Link>
              </button>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Remote features:
                </h4>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Basic applicant tracking system
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Digital document signing and storage
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Employee self-service portal
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Basic payroll processing
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Standard compliance templates
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Remote Hub */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Remote Hub
                </h3>
                <span className="bg-limeSoft text-lime-900 text-sm px-3 py-1 rounded-full font-medium">
                  For small teams
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    $16
                  </span>
                  <span className="text-gray-500 ml-2">per user/mo</span>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-8">
                <Link to="/pricing" className="text-white">
                  Try free for 60 days
                </Link>
              </button>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Remote Hub features:
                </h4>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Multi-country payroll automation
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Custom hiring workflows
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Advanced background screening
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Performance management tools
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Benefits administration
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Remote Plus */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Remote Plus
                </h3>
                <span className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full font-medium">
                  For big teams
                </span>
              </div>

              <div className="mb-8">
                <div className="text-gray-600">Contact sales for pricing</div>
              </div>

              <button className="w-full bg-white border  px-6 py-3 rounded-lg font-medium transition-colors mt-6 mb-8">
                <Link to="/contact" className="text-gray-900">
                  Contact sales
                </Link>
              </button>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Remote Plus features:
                </h4>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Global entity setup and management
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Custom legal framework
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Dedicated HR advisory team
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Migration support and training
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    White-label employer of record
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 mb-8">16,000+ businesses trust Remote</p>

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

      {/* Why Choose Remote Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
            Join thousands of businesses
            <br />
            switching to Remote
          </h2>

          <p className="text-lg text-gray-600 mb-12 sm:mb-16">
            Here's why businesses choose Remote
          </p>

          <div className="grid lg:grid-cols-3 gap-6 min-h-[450px]">
            {/* Pre-hiring */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block bg-limeSoft text-lime-900 text-sm px-3 py-1 rounded-full font-medium mb-4">
                  Pre-hiring
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Transform your
                  <br />
                  hiring pipeline
                </h3>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Transform your talent acquisition with our complete
                  recruitment toolkit.
                </p>
                <p className="text-gray-600 text-sm">
                  Companies who switched to us saw 2x faster hiring times, even
                  while paying less with their previous solutions.
                </p>
              </div>
            </div>

            {/* Post-hiring */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block bg-gray-900 text-white text-sm px-3 py-1 rounded-full font-medium mb-4">
                  Post-hiring
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Build your dream
                  <br />
                  team, globally
                </h3>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Seamlessly onboard and manage your global team with our
                  all-in-one platform.
                </p>
                <p className="text-gray-600 text-sm">
                  Our customers report 60% faster employee integration compared
                  to their previous HR systems.
                </p>
              </div>
            </div>

            {/* Right Column: Contract + Two subcards */}
            <div className="flex flex-col gap-4 h-full">
              {/* Contract Oversight */}
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-gray-900">Contract oversight</h3>
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-gray-600 text-sm">
                  Track and oversee contract signings and revisions with ease.
                </p>
              </div>

              {/* Bottom Two Cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Payroll Efficiency */}
                <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-900">Payroll efficiency</h4>
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="text-gray-600 text-sm mt-auto">
                    Automate and manage payroll processing
                  </p>
                </div>

                {/* Data-Driven Decisions */}
                <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-900">Data-driven decisions</h4>
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="text-gray-600 text-sm mt-auto">
                    Monitor team actions to optimize decisions and workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start lg:flex-row flex-col gap-8 lg:gap-12">
            {/* Left side - FAQ */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                FAQ's
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between py-4 text-left hover:text-gray-600 transition-colors"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          openFaq === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-4">
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Testimonial */}
            <div className="max-w-xs bg-gray-900 text-white rounded-2xl overflow-hidden shadow-md">
              <img
                src="./feature-men.avif"
                alt="James Smith"
                className="w-full h-auto object-cover"
              />

              <div className="p-4">
                <p className="text-sm mb-4">
                  "We're looking at savings in the hundreds of thousands, not
                  just in direct costs but in time and efficiency too."
                </p>

                <div>
                  <div className="font-semibold text-sm">James Smith</div>
                  <div className="text-gray-400 text-xs">CFO @Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FixedSidebar />
    </div>
  );
};

export default Pricing;
