import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedSidebar from "../components/FixedSidebar";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Can I integrate Remote with my existing systems?",
    "How secure is my company's data?",
    "What kind of support do you offer?",
    "Can Remote help with performance management?",
    "Is Remote right for my business?",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Chat Icon */}
          <div className="mb-8 sm:mb-12">
            <div className="w-28 h-24 sm:w-32 sm:h-32 mx-auto flex items-center justify-center">
              <motion.img
                src="./contact-main.png"
                alt="main-contact-img"
                className="h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
            </div>
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            How can Remote customer
            <br />
            support help you today?
          </motion.h1>

          {/* Support Team Avatars */}
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              <img
                src="./home-women-2.avif"
                alt="Support team member"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="./home-men.avif"
                alt="Support team member"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="./home-women-2.avif"
                alt="Support team member"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="./home-men.avif"
                alt="Support team member"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="ml-4 text-left">
              <div className="text-sm font-medium text-gray-900">
                Available 24/7
              </div>
              <div className="text-sm text-gray-600">Responds in 1-2 hours</div>
            </div>
          </motion.div>

          {/* Contact Email */}
          <motion.div
            className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            help@remote.io
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
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
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Team Photo Testimonial */}
            <div className="lg:pl-8">
              <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <img
                  src="https:/.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy team"
                  className="w-full h-48 sm:h-56 rounded-2xl object-cover mb-6"
                />

                <blockquote className="text-lg sm:text-xl mb-6 leading-relaxed">
                  "We're looking at savings in the hundreds of thousands, not
                  just in direct costs but in time and efficiency too."
                </blockquote>

                <div>
                  <div className="font-semibold text-lg">James Smith</div>
                  <div className="text-gray-300">CFO @Remote</div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-limeSoft rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-limeSoft rounded-full opacity-10"></div>
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

export default Contact;
