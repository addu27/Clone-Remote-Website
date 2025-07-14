import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Play, Linkedin, Instagram, Twitter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedSidebar from "../components/FixedSidebar";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Illustration */}
          <div className="mb-8 sm:mb-12">
            <div className="w-40 h-40 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
              <motion.img
                className="w-full h-full object-cover rounded-full"
                src="./about-main.png"
                alt="main-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
            </div>
          </div>

          <h1
            className="text-center font-[500] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-semibold text-gray-900 mb-8 leading-tight"
            style={{
              fontFamily: '"Onest", "Onest Placeholder", sans-serif',
              fontSize: "60px",
              fontStyle: "normal",
              letterSpacing: "-0.02em",
              lineHeight: "1em",
            }}
          >
            Remote enables
            <br />
            the world to find
            <br />
            <span className="relative inline-block">
              {/* Masked background */}
              <span
                className="absolute inset-0 rounded-md -skew-y-2"
                style={{
                  background:
                    "var(--token-50f7c55d-562d-4beb-9e4e-86ed7b4f818d, rgb(224, 255, 130))",
                  WebkitMaskImage: 'url("https://iili.io/F74vt9a.png")',
                  maskImage: 'url("https://iili.io/F74vt9a.png")',
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 80%",
                  WebkitMaskPosition: "center center",
                  maskPosition: "center center",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              ></span>

              {/* Visible text */}
              <span className="relative text-gray-900" style={{ zIndex: 1 }}>
                the best{" "}
              </span>
            </span>
            &nbsp;talent.
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left side - Our Story */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8 leading-tight">
                Our story
              </h2>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                It all started with a transformative vision: an HR platform that
                actually helps companies <em>empower more</em> of their most
                valuable asset: their people. Unlike traditional HR software
                that feels clunky and disconnected, we built something that
                truly puts the human back in HR.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600">
                    Before founding Remote, our co-founders,{" "}
                    <span className="text-gray-900 underline">David</span> and{" "}
                    <span className="text-gray-900 underline">Oliver</span>,
                    spent over a decade navigating the challenges of managing,
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Recognizing the need for a better solution, they founded
                    Remote in 2018 to simplify global HR and support teams
                    everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="./about-group.avif"
              alt="Remote team outdoor adventure"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative w-full h-full max-w-full max-h-full overflow-hidden flex items-center justify-center m-0 p-2"
            style={{
              listStyleType: "none",
              opacity: 1,
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <motion.div
              className="flex gap-12 whitespace-nowrap w-full"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
            >
              {[
                "zeon",
                "SHIP4450",
                "bluebird",
                "Galaxy",
                "berry",
                "● Chameleon",
              ].map((brand, index) => (
                <span
                  key={index}
                  className="text-lg sm:text-xl font-medium text-gray-900"
                >
                  {brand}
                </span>
              ))}
              {[
                "zeon",
                "SHIP4450",
                "bluebird",
                "Galaxy",
                "berry",
                "● Chameleon",
              ].map((brand, index) => (
                <span
                  key={`copy-${index}`}
                  className="text-lg sm:text-xl font-medium text-gray-900"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between items-start">
            {/* Left side - Quote */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
                "We remove the <br /> invisible barriers, <br /> the future is
                here"
              </h2>

              <div className="flex items-center space-x-3">
                <img
                  src="./home-men.avif"
                  alt="David Wilson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    David Wilson
                  </div>
                  <div className="text-sm text-gray-600">
                    Founder & CEO @Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden w-[750px] h-[600px]">
                {isPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-3xl"
                      src="https://www.youtube.com/embed/smPos0mJvh8?autoplay=1"
                      title="YouTube video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>

                    {/* Back Button */}
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-4 right-4 bg-white text-gray-900 rounded-full px-3 py-1 text-sm font-medium shadow-md hover:bg-gray-200 transition"
                    >
                      ⬅ Back
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src="./home-men.avif"
                      alt="David Wilson speaking"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Play className="w-5 h-5 text-gray-900 ml-1" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-8 text-start leading-tight w-[500px]">
            Building a business was never easy. But hiring great talent? That
            wasn't always this complicated.
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <div className="w-[500px]">
              <p>
                Today, no company could operate effectively without it. But over
                time, things started to change. As technology evolved, the
                hiring landscape became more fragmented. Every shiny new
                platform promised to solve one piece of the talent equation.
              </p>
            </div>

            <div className="w-[500px]">
              <p>
                For companies like yours—scaling startups, remote-first teams,
                or global enterprises—this evolution meant adding tool after
                tool just to keep up.
              </p>
            </div>

            <div className="space-y-3 my-8">
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">
                  Applicant tracking system?
                </span>
                <span className="text-gray-900">✓ Check</span>
              </div>
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">
                  Background check platform?
                </span>
                <span className="text-gray-900">✓ Check</span>
              </div>
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">Payroll provider?</span>
                <span className="text-gray-900">✓ Check</span>
              </div>
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">
                  Benefits administration software?
                </span>
                <span className="text-gray-900">✓ Check</span>
              </div>
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">Employee onboarding tool?</span>
                <span className="text-gray-900">✓ Check</span>
              </div>
              <div className="w-[500px] flex items-center space-x-3">
                <span className="text-gray-600">Compliance software?</span>
                <span className="text-gray-900">✓ Check</span>
              </div>
            </div>

            <div className="w-[500px] font-medium">
              <p>And the list keeps growing.</p>
            </div>

            <div className="w-[500px]">
              <p>
                The result? A hiring process that's not just complex—it's
                chaotic.
              </p>
            </div>

            <div className="w-[500px]">
              <p>
                At Remote, we're changing that with AI-driven solutions that
                simplify hiring, streamline global payroll, and ensure
                compliance in one intuitive platform. It's time to make hiring
                easier again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-900 uppercase tracking-wide mb-4">
            THE TEAM
          </div>

          <h2 className="text-3xl sm:text-3xl lg:text-4xl text-gray-900 mb-12 sm:mb-16 leading-tight">
            Powered by people who give a damn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-6 sm:gap-x-3 sm:gap-y-8">
            {/* David Wilson */}
            <div className="text-start">
              <div className="rounded-3xl overflow-hidden mb-2 w-[220.8px] h-[339.7px]">
                <img
                  src="/home-men.avif"
                  alt="David Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-900 mb-1">David Wilson</h3>
              <p className="text-sm text-gray-600 mb-3">Founder & CEO</p>
              <div className="flex items-center justify-start space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./linkedin.png" alt="" className="opacity-50" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./icon-earth.png" alt="" className="opacity-75" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./threads.png" alt="" className="opacity-50" />
                </a>
              </div>
            </div>

            {/* Jessica Hayes */}
            <div className="text-start">
              <div className="rounded-3xl overflow-hidden mb-2 w-[220.8px] h-[339.7px]">
                <img
                  src="/home-women-2.avif"
                  alt="Jessica Hayes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-900 mb-1">Jessica Hayes</h3>
              <p className="text-sm text-gray-600 mb-3">Co-founder & CFO</p>
              <div className="flex items-center justify-start space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./linkedin.png" alt="" className="opacity-50" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./threads.png" alt="" className="opacity-50" />
                </a>
              </div>
            </div>

            {/* Constanza Perez */}
            <div className="text-start">
              <div className="rounded-3xl overflow-hidden mb-2 w-[220.8px] h-[339.7px]">
                <img
                  src="./feature-women.avif"
                  alt="Constanza Perez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-900 mb-1">Constanza Perez</h3>
              <p className="text-sm text-gray-600 mb-3">Head of Product</p>
              <div className="flex items-center justify-start space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./linkedin.png" alt="" className="opacity-50" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./icon-earth.png" alt="" className="opacity-75" />
                </a>
              </div>
            </div>

            {/* Meera Desai */}
            <div className="text-start">
              <div className="rounded-3xl overflow-hidden mb-2 w-[220.8px] h-[339.7px]">
                <img
                  src="/home-men.avif"
                  alt="Meera Desai"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-900 mb-1">Meera Desai</h3>
              <p className="text-sm text-gray-600 mb-3">Head of Engineering</p>
              <div className="flex items-center justify-start space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./linkedin.png" alt="" className="opacity-50" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./icon-earth.png" alt="" className="opacity-75" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./threads.png" alt="" className="opacity-50" />
                </a>
              </div>
            </div>

            {/* Benjamin Weber */}
            <div className="text-start">
              <div className="rounded-3xl overflow-hidden mb-2 w-[220.8px] h-[339.7px]">
                <img
                  src="./home-women-2.avif"
                  alt="Benjamin Weber"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-900 mb-1">Benjamin Weber</h3>
              <p className="text-sm text-gray-600 mb-3">
                Founding Backend Engineer
              </p>
              <div className="flex items-center justify-start space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./icon-earth.png" alt="" className="opacity-75" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border p-2 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <img src="./threads.png" alt="" className="opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="bg-[#1d2020] max-w-[1200px] h-[488px] mx-auto rounded-2xl">
          <div className="flex flex-col justify-center items-center bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white h-full">
            <div className="text-sm text-gray-300 uppercase tracking-wide mb-6">
              JOIN THE TEAM
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white text-center"
              style={{
                fontFamily: '"Onest", "Onest Placeholder", sans-serif',
                fontWeight: 500,
                fontSize: "60px",
                fontStyle: "normal",
                letterSpacing: "-0.02em",
                lineHeight: "1em",
                textAlign: "center",
                color: "rgb(255, 255, 255)", // from --framer-text-color
              }}
            >
              Shape the future of
              <br />
              hiring. <span className="text-limeSoft">Join Remote.</span>
            </h2>

            <button className="bg-limeSoft text-lime-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-500 transition-colors inline-flex items-center space-x-2">
              <Link to="/contact" className="text-lime-900">
                View open positions
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FixedSidebar />
    </div>
  );
};

export default About;
