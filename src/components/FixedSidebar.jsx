import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Eye } from "lucide-react";

const FixedSidebar = () => {
  return (
    <motion.div
      className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 space-y-3 hidden lg:block max-w-[170px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <div>
        <p className="bg-white text-sm text-gray-600 text-gray-900 px-3 py-3 rounded-lg">
          We're always making our templates better!
        </p>
      </div>
      {/* See changelog button */}
      <div className="bg-gray-900 text-white px-3 py-3 rounded-lg shadow-lg w-full">
        <div className="flex items-center space-x-1">
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm font-medium">See Changelog</span>
        </div>
      </div>

      {/* Template feedback */}
      <div>
        <p className="bg-white text-sm text-gray-600 text-gray-900 px-3 py-3 rounded-lg">
          Like this template? 🙌
        </p>
      </div>

      <div className="bg-limeSoft font-bold rounded-lg p-2 shadow-lg w-full">
        <button className="w-full bg-limeSoft text-lime-900 px-2 py-1.5 rounded-lg text-sm font-bold transition-colors">
          Grab yours →
        </button>
      </div>

      {/* Made in Framer */}
      <div className="bg-white border border-gray-200 rounded-lg p-1.5 shadow-lg w-full">
        <div className="flex items-center space-x-1">
          <Eye className="w-4 h-4 text-gray-900" />
          <span className="text-sm font-bold">Made in Framer</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FixedSidebar;
