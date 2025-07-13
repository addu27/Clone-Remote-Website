import { Link } from "react-router-dom";
import AnnouncementBanner from "./AnnouncementBanner";
import { motion } from "motion/react";
import "../index.css";

const HeroSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Hero Content */}
        <div
          className="flex flex-row lg:flex-row items-evenly justify-start gap-4 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 
             flex-none flex-nowrap h-min max-w-[1200px] overflow-visible p-0 relative w-full z-20"
        >
          <div className="h-[250px] w-[300px] z-0">
            <img
              src="./home-main.png"
              alt="home-image"
              className="w-full h-full relative left-0 bottom-[-110px] "
            />
          </div>

          {/* Center - Main content */}
          <div className=" w-full lg:w-1/3 text-center order-1 lg:order-2">
            <AnnouncementBanner />

            <h1 className="block w-full break-words overflow-wrap break-word whitespace-pre-line text-center font-onest text-[70px] font-medium not-italic tracking-[-0.02em] leading-[1em] text-[rgb(31,34,35)] mb-6 sm:mb-8">
              Say hello to
              <br />
              <span className="whitespace-nowrap flex justify-center items-center">
                <span
                  className="relative inline-block px-2 py-1"
                  style={{ zIndex: 1 }}
                >
                  {/* Masked background */}
                  <span
                    className="absolute inset-0"
                    style={{
                      background:
                        "var(--token-50f7c55d-562d-4beb-9e4e-86ed7b4f818d, rgb(224, 255, 130))",
                      WebkitMaskImage: 'url("https://iili.io/3QeNmOX.png")',
                      maskImage: 'url("https://iili.io/3QeNmOX.png")',
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 50%",
                      WebkitMaskPosition: "center bottom",
                      maskPosition: "center bottom",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  ></span>

                  {/* Visible text on top */}
                  <span className="relative text-black z-10">smarter</span>
                </span>

                <span className="relative inline-block">&nbsp;hiring</span>
              </span>
            </h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-onest text-gray-600 mb-8 sm:mb-5 mx-auto whitespace-nowrap w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              A hiring platform that works the way you do.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                to="/pricing"
                className="text-gray-900 border py-2 px-3 rounded-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Try for free
              </Link>
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-semibold"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get a demo
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Dashboard Table */}
        <motion.div
          className="flex justify-center z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-6xl">
            {/* Dashboard header */}
            <div className="bg-white border-b border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./icon-user.png"
                      alt="User"
                      className="w-6 h-6 object-cover"
                    />
                  </div>

                  <div className="w-8 h-8 sm:w-8 bg-gray-200 rounded-xl sm:h-8 flex items-center justify-center">
                    <img
                      src="./icon-doller.png"
                      alt="User"
                      className="w-9 h-8 object-cover"
                    />
                  </div>

                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./icon-add.png"
                      alt="User"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      R
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
                    Remote / All
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 sm:hidden">
                    Remote
                  </span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-limeSoft rounded-full flex items-center justify-center">
                    <span className="text-lime-900 text-xs sm:text-sm font-bold">
                      +
                    </span>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="./home-women.avif"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./icon-search.png"
                      alt="User"
                      className="w-6 h-6 object-cover"
                    />
                  </div>

                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./icon-bell.png"
                      alt="User"
                      className="w-6 h-6 object-cover"
                    />
                  </div>

                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="./icon-dots.png"
                      alt="User"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https:/.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
                    alt="Jessica"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-medium text-lg sm:text-xl">
                  Good morning, Jessica!
                </span>
              </div>

              {/* Team filters */}
              <div className="flex items-center space-x-2 sm:space-x-4 mb-4 overflow-x-auto">
                <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0">
                  <span className="text-xs sm:text-sm text-gray-600">Team</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    All
                  </span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Status
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    Pending
                  </span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Mobile: Card view for small screens */}
              <div className="block sm:hidden space-y-4">
                {[
                  {
                    name: "David Wilson",
                    role: "Founder & CEO",
                    amount: "$200,000",
                    avatar: "./home-men.avif",
                    team: ["BW"],
                    checked: true,
                  },
                  {
                    name: "Jessica Hayes",
                    role: "Co-founder & CFO",
                    amount: "$200,000",
                    avatar: "./home-women-2.avif",
                    team: ["AS", "MB"],
                    checked: true,
                  },
                  {
                    name: "Constanza Perez",
                    role: "Head of Product",
                    amount: "$150,000",
                    avatar: "./home-men.avif",
                    team: ["AS", "MB"],
                    checked: false,
                    badge: "Product",
                  },
                  {
                    name: "Meera Desai",
                    role: "Head of Engineering",
                    amount: "$170,000",
                    avatar: "./home-women.avif",
                    team: ["MD"],
                    checked: false,
                    badge: "Tech",
                  },
                  {
                    name: "Benjamin Weber",
                    role: "Backend Engineer",
                    amount: "$120,000",
                    avatar: "./home-women-2.avif",
                    team: ["BW"],
                    checked: false,
                    badge: "Tech",
                  },
                  {
                    name: "Jacob Jones",
                    role: "Frontend Engineer",
                    amount: "$120,000",
                    avatar: "./home-men.avif",
                    team: ["AS", "MB"],
                    checked: true,
                    badge: "Tech",
                  },
                  {
                    name: "Maria Rodrigues",
                    role: "Product Designer",
                    amount: "$120,000",
                    avatar: "./home-men.avif",
                    team: ["AS"],
                    checked: false,
                    badge: "Product",
                  },
                ].map((user, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-colors ${
                      user.checked
                        ? "bg-gray-50 border-gray-200"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded w-4 h-4"
                          checked={user.checked}
                          readOnly
                        />
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-gray-900 font-medium text-sm">
                          {user.name}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
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
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <div className="flex items-center space-x-2">
                        <span>{user.role}</span>
                        {user.badge && (
                          <span
                            className={`px-2 py-1 rounded font-medium ${
                              user.badge === "Tech"
                                ? "bg-lime-100 text-lime-800"
                                : "bg-gray-900 text-white"
                            }`}
                          >
                            {user.badge}
                          </span>
                        )}
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        Pending
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{user.amount}</span>
                      <div className="flex items-center space-x-1">
                        {user.team.map((initial, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                          >
                            <span className="text-xs text-red-600 font-medium">
                              {initial}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table view for larger screens */}
              <div className="hidden sm:block">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center py-4 text-sm text-gray-500 uppercase tracking-wide font-medium">
                  <div className="col-span-4">Users</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Team</div>
                </div>

                {/* User rows */}
                <div className="space-y-2">
                  {[
                    {
                      name: "David Wilson",
                      role: "Founder & CEO",
                      amount: "$200,000",
                      avatar: "./home-men.avif",
                      team: ["BW"],
                      checked: true,
                    },
                    {
                      name: "Jessica Hayes",
                      role: "Co-founder & CFO",
                      amount: "$200,000",
                      avatar: "./home-women-2.avif",
                      team: ["AS", "MB"],
                      checked: true,
                    },
                    {
                      name: "Constanza Perez",
                      role: "Head of Product",
                      amount: "$150,000",
                      avatar: "./home-men.avif",
                      team: ["AS", "MB"],
                      checked: false,
                      badge: "Product",
                    },
                    {
                      name: "Meera Desai",
                      role: "Head of Engineering",
                      amount: "$170,000",
                      avatar: "./home-women.avif",
                      team: ["MD"],
                      checked: false,
                      badge: "Tech",
                    },
                    {
                      name: "Benjamin Weber",
                      role: "Backend Engineer",
                      amount: "$120,000",
                      avatar: "./home-women-2.avif",
                      team: ["BW"],
                      checked: false,
                      badge: "Tech",
                    },
                    {
                      name: "Jacob Jones",
                      role: "Frontend Engineer",
                      amount: "$120,000",
                      avatar: "./home-men.avif",
                      team: ["AS", "MB"],
                      checked: true,
                      badge: "Tech",
                    },
                    {
                      name: "Maria Rodrigues",
                      role: "Product Designer",
                      amount: "$120,000",
                      avatar: "./home-men.avif",
                      team: ["AS"],
                      checked: false,
                      badge: "Product",
                    },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-12 gap-3 lg:gap-6 items-center py-1 rounded-lg transition-colors ${
                        user.checked ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                    >
                      {/* Users column */}
                      <div className="col-span-4 flex items-center space-x-3 lg:space-x-4">
                        <input
                          type="checkbox"
                          className="rounded w-4 h-4 lg:w-5 lg:h-5 accent-black"
                          checked={user.checked}
                          readOnly
                        />
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-gray-900 font-medium text-sm lg:text-base">
                            {user.name}
                          </span>
                        </div>
                      </div>

                      {/* Role column */}
                      <div className="col-span-2 flex items-center space-x-2">
                        <span className="text-gray-600 text-xs lg:text-sm truncate">
                          {user.role}
                        </span>
                        {user.badge && (
                          <span
                            className={`text-xs px-2 py-1 rounded font-medium flex-shrink-0 ${
                              user.badge === "Tech"
                                ? "bg-lime-100 text-lime-800"
                                : "bg-gray-900 text-white"
                            }`}
                          >
                            {user.badge}
                          </span>
                        )}
                      </div>

                      {/* Status column */}
                      <div className="col-span-2">
                        <span className="bg-gray-100 text-gray-600 px-2 lg:px-3 py-1 rounded text-xs lg:text-sm">
                          Pending
                        </span>
                      </div>

                      {/* Amount column */}
                      <div className="col-span-2">
                        <span className="font-medium text-sm lg:text-base">
                          {user.amount}
                        </span>
                      </div>

                      {/* Team column */}
                      <div className="col-span-2 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {user.team.map((initial, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 lg:w-7 lg:h-7 bg-red-100 rounded-full flex items-center justify-center"
                            >
                              <span className="text-xs text-red-600 font-medium">
                                {initial}
                              </span>
                            </div>
                          ))}
                        </div>
                        <svg
                          className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400"
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
