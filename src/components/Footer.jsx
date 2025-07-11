import { User, Instagram, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
              PRODUCT
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Homepage
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    Homepage 2
                  </a>
                  <span className="bg-limeSoft text-lime-900 text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    Careers
                  </a>
                  <span className="bg-limeSoft text-lime-900 text-xs font-semibold px-2 py-1 rounded">
                    We're hiring!
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
              RESOURCES
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Start here
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Article
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 sm:p-6 lg:p-8 rounded-lg mb-8 sm:mb-12 space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-2 lg:mb-0">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            <span className="text-lg sm:text-xl font-semibold text-gray-900">Remote</span>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 lg:mb-0">
              Join the 40,000+ businesses
              <br className="hidden sm:block" />
              <span className="block sm:inline"> using Remote, today</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:min-w-0 lg:flex-shrink-0">
            <input
              type="email"
              placeholder="Email address*"
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base min-w-0"
            />
            <button className="bg-limeSoft text-lime-900 px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-lime-500 transition-colors whitespace-nowrap text-sm sm:text-base">
              Get updated
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-gray-200 space-y-4 lg:space-y-0">
          <p className="text-xs sm:text-sm text-gray-600 text-center lg:text-left">
            © 2024 Remote by{" "}
            <a href="#" className="underline hover:no-underline">
              Motiondrops
            </a>
            , a fully editable SaaS template
          </p>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;