import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Eye } from "lucide-react";

const FixedSidebar = () => {
  return (
    <motion.div
      className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 space-y-3 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {/* See changelog button */}
      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-3 h-3" />
          <span className="text-xs font-medium">See changelog</span>
        </div>
      </div>

      {/* Template feedback */}
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg max-w-xs">
        <p className="text-xs text-gray-600 mb-2">
          We're always making our templates better!
        </p>
        <p className="text-xs text-gray-600 mb-3">Like this template? 👍</p>
        <button className="w-full bg-limeSoft text-lime-900 px-3 py-2 rounded-lg text-xs font-medium hover:bg-lime-500 transition-colors">
          Grab yours! →
        </button>
      </div>

      {/* Made in Framer */}
      <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <Eye className="w-3 h-3 text-gray-600" />
          <span className="text-xs text-gray-600">Made in Framer</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FixedSidebar;
