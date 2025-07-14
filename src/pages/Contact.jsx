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
    {
      question: "Can I integrate Remote with my existing systems?",
      answer:
        "Absolutely! We play nice with all major payroll and accounting tools like QuickBooks, ADP, and Xero. Our flexible API means we can connect to pretty much anything. Need a custom integration? We've got you covered.",
    },
    {
      question: "How secure is my company's data?",
      answer:
        "Super secure! We use bank-level encryption, multi-factor authentication, and meet all major compliance standards (GDPR, SOC 2). Think of us as the Fort Knox of HR software – your data is locked up tight.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We're here for you 24/7! Live chat, email, phone support, weekly training webinars, and a massive online help center. No matter what you need, we're just a click or call away.",
    },
    {
      question: "Can Remote help with performance management?",
      answer:
        "You bet! Track goals, do 360-degree reviews, identify talent, and create development plans – all in one place. We make performance management actually feel helpful, not like a chore.",
    },
    {
      question: "Is Remote right for my business?",
      answer:
        "Whether you're a scrappy startup or a global enterprise, we scale with you. Pick the features you need, pay for what you use. We're flexible, affordable, and ready to grow with your team.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="mb-2 sm:mb-3">
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
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            How can Remote customer
            <br />
            support help you today?
          </motion.h1>

          <motion.div
            className="flex items-center justify-center mb-12 mt-12"
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

          <motion.div
            className="inline-block border text-gray-900 px-4 py-2 rounded-lg text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            help@remote.io
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10">
            {/* Left side - FAQ */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                FAQ's
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between py-4 text-left hover:text-gray-600 transition-colors"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          openFaq === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-4 pr-6">
                        <p className="text-gray-600 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Testimonial */}
            <div className="w-[320px] h-[420px] shrink-0 bg-gray-900 text-white rounded-2xl overflow-hidden shadow-md flex flex-col">
              <div className="p-4 w-full flex-1 flex flex-col">
                <img
                  src="./pricing-group.avif"
                  alt="James Smith"
                  className="w-full h-60 rounded-2xl object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-sm mb-4">
                    "We're looking at savings in the hundreds of thousands, not
                    just <br />in direct costs but in time and <br /> efficiency too."
                  </p>
                  <div>
                    <div className="font-semibold text-sm">James Smith</div>
                    <div className="text-gray-400 text-xs">CFO @Remote</div>
                  </div>
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

export default Contact;
