import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedSidebar from "../components/FixedSidebar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Featured Article Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <div className="text-sm text-gray-600 mb-4">
                November 28, 2024
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8 leading-tight hover:underline cursor-pointer">
                Announcing Our $2.3M Seed Round: Transforming Remote Work
                Management
              </h1>

              <button className="text-gray-900 font-medium hover:underline">
                Read article
              </button>
            </div>

            {/* Right side - Team Photo */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="./blog-group.avif"
                  alt="Happy team celebrating"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Latest stories
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            {/* Large Featured Article */}
            <div className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6">
                <img
                  src="./blog-women.avif"
                  alt="Smiling professional woman"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:underline">
                Quality over quantity. The strategic approach to building
                exceptional teams
              </h3>
              <div className="text-sm text-gray-600">Dec 2, 2024</div>
            </div>

            {/* Right Column - Smaller Articles */}
            <div className="space-y-8">
              {/* Article 1 */}
              <div className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src="./blog-office.avif"
                    alt="Team meeting in office"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:underline">
                  Tech revolutionizes HR: the future of workplace management
                </h3>
                <div className="text-sm text-gray-600">Dec 1, 2024</div>
              </div>

              {/* Article 2 */}
              <div className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src="./blog-office-women.avif"
                    alt="Woman working on laptop"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:underline">
                  Hybrid vs fully remote in the new work landscape
                </h3>
                <div className="text-sm text-gray-600">Nov 30, 2024</div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Two Articles */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Article 3 */}
            <div className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6">
                <img
                  src="./blog-men.avif"
                  alt="Professional man with glasses"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:underline">
                Remote embeds inclusive workforce powered by equity analytics
              </h3>
              <div className="text-sm text-gray-600">Nov 30, 2024</div>
            </div>

            {/* Article 4 */}
            <div className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6">
                <img
                  src="./blog-group.avif"
                  alt="Happy team celebrating"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:underline">
                Announcing Our $2.3M Seed Round: Transforming Remote Work
                Management
              </h3>
              <div className="text-sm text-gray-600">Nov 28, 2024</div>
            </div>
          </div>

          {/* Bottom Full-Width Article */}
          <div className="mt-12 group cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-6">
              <img
                src="./blog-meeting.avif"
                alt="Team meeting with warm lighting"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:underline">
              Remote embeds financial insights powered by payroll analytics
            </h3>
            <div className="text-sm text-gray-600">Nov 27, 2024</div>
          </div>
        </div>
      </section>

      <Footer />
      <FixedSidebar />
    </div>
  );
};

export default Blog;
